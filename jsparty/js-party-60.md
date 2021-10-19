**Jerod Santo:** Well, hello there, party people. It's your boy, Jerod. I'm back, it's been a while. I'm your host, with no coast, I'm your MC, from Nebrasky. It's Jerod, hi! How is everybody?

**Kevin Ball:** \[laughs\] I'm dying... Nebrasky.

**Jerod Santo:** Yeah, it had to rhyme. Nebraska doesn't actually rhyme, so I had to mix it up; it was a remix, because of my rap skills.

**Suz Hinton:** That's very creative. Very, very creative.

**Jerod Santo:** Thank you. Well, we are here, we are happy, I am joined by a couple of regulars around here... Suz, you also haven't been around for a while. Say hi to everybody.

**Suz Hinton:** I've not. It's really nice to be back. Thank you so much for having me. Yeah, last year got a little hectic, but I'm very happy to be back.

**Jerod Santo:** Well, let's put 2018 behind us, and fully enjoy what 2019 has to offer... For me, that is sickness, cold, snow, all sorts of terrible things, but hey, JS Party, so I'm happy now. Kball, what's up, man?

**Kevin Ball:** Yo, yo! Still crackin' up about Nebraska. It's not for everyone, I hear. \[laughter\]

**Jerod Santo:** That's right, that's right. We suck at advertising, so we're trying to change that, one JavaScript developer's heart at a time. Come to Nebraska, it's not so bad... Except for the snow and the cold and the sickness. Okay, moving on. We have a great show lined up, three awesome segments. We're gonna try something new, we're gonna do something we do quite often, which is pro tip time, but first, we want to try a new segment, so forgive us in advance if this sucks, but thank us in advance if this is awesome...

It's a little thing we're calling ELI5, if you wanna say it that way... And let me ELI5 the term - that stands for Explain It Like I'm Five, which you've probably seen on popular social networks such as Reddit... This concept of taking difficult things, dumbing them down -- well, that's condescension... Simplifying them, and trying to explain them to somebody who is - well, five years old is the goal; I have a five-year-old, I'll tell you; these things probably will not make sense to him. That being said, we're gonna try to ELI5 each other, and take a few things that we're confused about or could use some explanation, and maybe the listeners could use some explanation, and explain them to each other. Does it sound like fun, guys?

**Kevin Ball:** Excellent. I also have a five-year-old, so I've planned my explanation for yours in terms that I think he might understand.

**Jerod Santo:** Okay.

**Suz Hinton:** Is this like a literal -- how literal is this? Because if you tell me like I'm five, I will use literal language for a five-year-old. Is that what we're doing?

**Jerod Santo:** \[03:53\] I think it would be fun to try that. I know for a fact when it gets to the one that I'm gonna try to explain, I will not be doing that, because there's just no possible way a five-year-old will understand this, or that I could explain it to them. Anyways...

**Suz Hinton:** Yeah, I think I set you up for failure with that one.

**Jerod Santo:** I think so, but I would love for you to try, and I think that's the ultimate goal - to make it as simple as possible, but no simpler, as our friend Albert Einstein said, or at least people say he said. Einstein, and - who's the other person who gets all the quotes? I don't know, there's like two people who get all the quotes online; everything coagulates to them... Every famous quote was either Einstein or one other person.

Anyways, let's start off with mine, because I came up with this crazy idea... One concept in JavaScript which I do understand, sometimes I forget how it works and I have to go look him up all the time, is the idea of the bind function and the apply function. First of all, what do they do, what are they for, and then when do you use each one - I don't know; I can never figure these things out. Somebody explain it to me like I'm five.

**Kevin Ball:** Alright, I've got this, and I'm gonna bring in some legit five-year-old things. So I don't know if you all have heard of these before, but a big popular thing in our household with the kids are these things called the PAW Patrol. The PAW Patrol is this set of puppies that solve things; they go and solve problems out in the world. You have a police puppy, and a fireman puppy, and various other things. My five-year-old, and actually especially my three-year-old are somewhat obsessed with these things.

Now, the PAW Patrol - each one of them has their vehicles; their vehicles are things that can do things for them. So they might be able to fly, they might be able to go in the water, do things like that. Conceptually, we're gonna take a function, which is what bind and apply are gonna interact with, and map that in our heads to a vehicle - it's something that does something for us.

Now, when we play with our PAW Patrol -- my three-year-old always calls it The Papa Troll, which makes me think "Where is the Momma Troll?" When we play with our Papa Trolls, as they call them, we play with the vehicles in different ways. Sometimes we wanna make sure that the same puppy always is gonna have their vehicle; Chase is the police pup, and he has his own vehicle.

Some of the vehicles will fit different pups, and some of them only fit one. So if we wanna make sure that one of the pups always has the same vehicle, we would bind it. Bind is basically saying "Attach this object (in this case the pup) to this function, this thing that's doing something (in this case the vehicle), and they're always gonna go together." So now I've got a conjoined thing; I'm moving the vehicle around, but it's always attached to that pup, that object.

Apply, on the other hand, is when we've got a vehicle that can move around. So there is a vehicle that they like that is this little helicopter; technically, this vehicle was initially belonging to one pup, but my kids love to move it around, they love to have this vehicle, like "Okay, well now Rocky is gonna ride --" Rocky is (I don't even know) one of the pups... I know all their names now, believe me. The kids are obsessed. But "Rocky is gonna ride in the helicopter this time. This time it's gonna be Skye, this time it's gonna be Marshall", or what have you. So they change it up. What that's doing is applying; it's saying "Okay, I have this thing that does something for me...", in this case it's the helicopter vehicle, "...and I'm gonna attach it to different objects (in this case our objects are the pups) at different times, depending on the needs." So I'm gonna apply the pup to that function, depending on which pup I want to use it for at the time.

That is my "Explain it like you're five", assuming your five-year-olds like the PAW Patrol, like my five-year-old does, explanation of bind and apply.

**Jerod Santo:** "Explain it to me like I'm five and I'm a huge fan of PAW Patrol."

**Kevin Ball:** Aren't they all...? I mean, our neighbors are, too. They get together and they're like, "Okay, I have these PAW Patrols..." Somehow the puppies are each called The PAW Patrol when you're five, or three... And yeah. It's a thing.

**Jerod Santo:** \[08:09\] It's a thing. Suz, does that help you out at all? Are these concepts that ever trip you up, or have you been doing this long enough that they're ingrained into your psyche?

**Suz Hinton:** I do still use them. I've used bind the other day actually in a unit test; I was trying to pass something in that needed to be a constructor, and it was very confusing, and I needed to bind a different... Anyway, it's not important. \[laughter\] But I did actually use it, and I knew how to use it. But I've never heard it described with PAW Patrol before. I think there's something about PAW Patrol that I don't understand fully in order to fully connect this analogy.

**Jerod Santo:** I would have to agree. I think I struggled because I was trying to understand PAW Patrol, versus trying to understand if the explanation was good. So I would give you, Kball, an A+ for the effort. \[laughter\] Definitely the analogy for children is going to be 100% better than mine, which will not include any analogies, but definitely an A for effort.

**Suz Hinton:** But you're not five, Jerod.

**Kevin Ball:** Perhaps highlighting a limitation with Explain It Like I'm Five is we don't actually want to explain it to a five-year-old; we want to explain it to an adult, but simplify it.

**Jerod Santo:** Yes, exactly. So one thing to know - we would love for listener participation. First of all, if you are listening live, come hang out on the Slack channel, let us know if these are good, bad or otherwise. Also, we have a new feature on Changelog.com where you can actually discuss the episodes on the website. Isn't it novel? Yes, commentary on our own website about the episodes. That is cool. Go find the JS Party page for this episode, click Discuss, holler off questions, comments, whatever you wanna say in there; make sure it's kind and uplifting, but join us in discussing these things on the website. That would be cool.

Let's go to the next one. Kball, you've got a question... Let's hear it.

**Kevin Ball:** Yeah... What the heck are thunks? \[laughter\] I feel like I've used them by rote, particularly back when I was doing React stuff; thunks are more of a thing that people use when they're doing reducers, and I've sort of used them by recipe a few times, but I don't feel like I grok what they actually are, so explain it to me like I'm five.

**Suz Hinton:** I think I could probably take this one... Kball, you are the five-year-old, and...

**Kevin Ball:** I can do that.

**Suz Hinton:** ...you live in a household, and the household has to kind of manage everyday things, right? But the only thing you really care about is what you're gonna eat for dinner tonight. That's what kids really care about, right? "What are we having for dinner tonight?"

So if you imagine that your dad is Redux, because he is responsible for some of the state of a house, such as "What are we actually having for dinner, on what day?", let's say you go up to your dad and you say "Dad, I want pizza for dinner tonight. I want you to make that happen." And your dad's job, Redux, is basically to just go and find the dinner planner, write down pizza in the slot for tonight, and then basically put that on the fridge or give it back to you, so that everyone in the house is aware of what's happening for dinner tonight.

So that would be how you would normally interact with Redux, aka your dad, in order to be able to make changes or request that something in the house changes, to your liking especially. So if your dad can only really write something down in the planner, what happens if he needs to go and do something things before he can update that state, or update what the dinner plans are? So what happens if you say "Dad, I want pizza", and he doesn't actually know if he has all the ingredients in the fridge to make pizza tonight? Well, because the only thing he can do is just update things, if he goes and checks the fridge or anything like that, then he could be potentially changing a whole bunch of other stuff, and that's really not allowed in Redux, because you're not supposed to have side effects.

\[12:09\] And you can think of side effects as anything your dad has to do outside of the conversation of "Dad, I want pizza tonight", and him actually putting that down in the plan.

So if he has to go and check the fridge, which can be seen as an asynchronous thing, because you actually have to wait for him to go and check, before you're actually going to see whether or not the state is gonna be changed and updated and that pizza is gonna end up on the menu... You know, if there are no ingredients, then he might actually come back and update and say "Sorry, there's gonna be pasta tonight, so everyone should be aware that there's pasta."

So a thunk, a Redux Thunk is a library that gives your dad extra abilities, so that he can go and do asynchronous things, and then you wait a period of time, but you can trust that eventually, as a result of him checking that refrigerator, you will actually get that state propagating still through Redux.

**Kevin Ball:** Okay.

**Suz Hinton:** That's all I've got... \[laughter\]

**Jerod Santo:** Oh-kay... \[laughter\] I was super-impressed by that explanation. Go ahead, Kball.

**Kevin Ball:** Yeah, I like it. I'm just trying to wrap my head around it, especially because it's definitely a mind twist for me to not be the dad, but to be the kid.

**Suz Hinton:** \[laughs\]

**Kevin Ball:** Let's see... So the thunk is essentially just adding a capability. I can no longer just write something down, I can also go and check on things.

**Suz Hinton:** Yeah, you can fetch something, or do other things that might cause side effects, but still don't break the pattern of Redux not mutating anything around it, and just being able to return the same thing every time. So it just allows you to pass in a function, instead of a state object, for Redux to handle in the reducers.

**Jerod Santo:** So can I ask some five-year-old questions, or at least newbie questions about this?

**Suz Hinton:** Yeah.

**Jerod Santo:** Why is it called a thunk?

**Suz Hinton:** I did actually try and find this out, because I thought that it would be asked, and I'm not actually sure. I also said the word "asked" like a five-year-old just then, too; I said 'ast'.\[laughter\]

**Jerod Santo:** Okay, so we don't know. Is this a feature of Redux? Is this a general JavaScript thing? Where is this concept? Is it only inside of a Redux, or maybe React?

**Suz Hinton:** That's a really great question. It's seen as middleware, and it's generally middleware that stands in between Redux. Essentially, whenever you dispatch something via Redux, it sits in the middle. It basically says "Is this an object that just got dispatched, or is it a function?" And if it's a function, I'm gonna intervene and run the function, which usually has something like an Ajax request, or something asynchronous in there. And then on behalf of that initial dispatch I'm going to compute the state based on that and then pass that on. So yeah, middleware is probably the best explanation for it.

**Jerod Santo:** Okay, pretty good. Kball, any other questions about thunks before we move on to my pathetic attempt of explaining something?

**Kevin Ball:** Is there some additional information conveyed by the work "thunk" beyond function?

**Jerod Santo:** It's the noise that happens when somebody runs into something.

**Suz Hinton:** \[laughs\] Actually, one blog post describes it as it's the sound of your head hitting a wall, trying to understand what a thunk is.

**Jerod Santo:** Exactly!

**Suz Hinton:** I think maybe that is a really good point; it's looking for functions, or "func", and maybe they just called it "thunk" to be silly, but I actually couldn't find the origin of it for you.

**Jerod Santo:** Like past tense of "think", like "I thunk this, but now I think something else."

**Suz Hinton:** If you've used React and you haven't had somebody installing something like Redux Thunk before, you will run into that very quickly, where you're like "I wanna update state, but I need something to happen first, that is a function, in order for me to know what that state should even be in the first place." It's basically an output of just trying to abstract your code in the first place, I guess. That's the last thing that I would add to that.

**Jerod Santo:** \[16:16\] Okay.

**Kevin Ball:** Yeah, honestly, I feel like I've been spoiled by Vue and Vuex, because Vuex gives you most of what Redux does, but conceptually you have actions that can return promises, and you don't have to have this additional concept of a thunk. I think it's more the language that's the challenge, than anything. If I think about it as "This is just adding the capability to have functions as a Redux action."

**Suz Hinton:** That's a very good point that you've raised, because Redux is not necessarily tied to React; you can use it with really anything you want, even without some kind of single-page application framework, but Vuex - it's really good to hear the comparison between the two, because you would mostly use Vuex for Vue specifically, right? And it seems like what you said, that it's built in.

**Kevin Ball:** Cool. I'm curious to hear, Suz, what's your question... And I think I see it in the doc, but I'm hoping that Jerod can give me a good answer, because I don't know either.

**Suz Hinton:** \[laughs\] Yeah, so a big, hot, new(ish) thing that I always see on Twitter all the time - and I'm not a front-end developer anymore, so I'm always trying to keep up with stuff... It tends to be me trying to read this stuff out of context, and it's a lot harder for me to understand. So there's this big thing called ReasonML, people are writing full-blown production applications in it... At first I thought it was machine learning, just because it has ML on the end, so that really confused me, but it seems like it's something related to OCaml, but it's still technically JavaScript. So I just wanna understand what is ReasonML - is it a new language? Is it just like a super-script on top of JavaScript? What is this?

**Jerod Santo:** Right. So imagine that you're a five-year-old OCaml programmer...

**Kevin Ball:** \[laughs\]

**Jerod Santo:** And you really like OCaml because it's decades old, it's battle-tested, it's multi-paradigm, and you appreciate that because you can do object-oriented programming, you can do functional programming... It has a lot of emphasis on functional programming, with immutability and stuff like that, and that just really gets you going. You've got Papa in your spare time, or Papa Bees - I can't remember what those are called anymore, Kball... \[laughter\] And then you've got OCaml during the day.

**Kevin Ball:** It sounds like animals. Kids like animals, right?

**Jerod Santo:** Yeah, it's kind of like a camel.

**Suz Hinton:** Yeah, maybe a camel is your favorite animal.

**Jerod Santo:** That's right. And you're thinking, "I love OCaml, but my parents keep asking me for this awesome new front-end for their JSON API that they've been working on." So you think "If I could have an OCaml-like thing, but in the front-end, with JavaScript in the mix, then that would be super-cool." So maybe you find ReasonML, which is not a new language; it's just kind of a syntax, and it's a toolchain, so it's kind of like a transpiler, or a compiler, if you will, bringing OCaml to the JavaScript ecosystem, so you have access to all of the Yarn and Npm stuff, you have access to all of what OCaml provides... And it's somewhat akin to - I think not technically, but in philosophy it's similar to - what Elixir does to Erlang, I think Reason does to OCaml. It's not like a one-to-one, but they say there's about 80% of what OCaml semantics are - they're just straightforward maps over the modern JavaScript... And then the Reason team - this is an open source project out of Facebook, and I believe they definitely are using in production, so it's a serious project that's production-grade... They filled in a lot of the gaps, and they have to decide how are they going to fill in the last 20% and make it all work.

\[20:05\] The cool thing about it that I found, which five-year-olds love, is that you can actually also compile to bare bone Assembly, iOS and Android, in addition to JavaScript. So it compiles to good-looking, interoperable JavaScript, it also compiles to stuff that OCaml would compile to.

**Suz Hinton:** Interesting. This is actually very helpful. How would you compare this to something that I'm probably much more familiar with, just because of my job, but also where I work, which is TypeScript? Is this just like the OCaml take on TypeScript, having a type system, but also it adds terse functional programming syntax in there, too? Is that sort of what I understand?

**Jerod Santo:** With regard to typing, for sure. OCaml is a strongly-typed language, so you get the advantage of typing by using Reason. I do not believe it's a superset of JavaScript, such as TypeScript is, because I think it's a subset of JavaScript, but again, I am not an expert on this, and this is a very complicated question that a five-year-old would not ask, so I don't appreciate it. Nah, just kidding... \[laughter\] Not 100% sure. I actually think this is cool enough that we should get somebody from Reason on JS Party and we can ask them all of our questions, because there's a lot to this that I know some people are excited about, and other people are confused, and potentially interested in. So maybe that's a future episode, all about this technology.

**Suz Hinton:** Yeah, we'd love to talk to people about this... Because I'm seeing even stuff like OCaml being run on embedded micro-controllers now, which is obviously much more in my expertise, and I'm fascinated by this kind of like "OCaml on X" kind of thinking... So yeah, I would love to be a part of that episode; I would have a lot of questions.

**Jerod Santo:** Awesome.

**Kevin Ball:** Looking at it, it looks like -- so TypeScript is kind of a superset of JavaScript, whereas it looks like Reason is more of a "Let's compile OCaml to other things, which include JavaScript, but may also include other things..."

**Jerod Santo:** Think of it more like Elm than TypeScript, in terms of the way it works.

**Suz Hinton:** Oh, that makes a ton of sense, yeah.

**Break:** \[22:34\] to \[23:52\]

**Jerod Santo:** Alright, next up, it's one of our favorite times of the day - it's Pro Tip time. This is where we will share our pro tips. Sometimes it's because we are actual pros, other times it's because we've done dumb things, and you can learn from those dumb things that we have done. Maybe it's a lifehack, maybe it's a lesson learned - whatever it is, we have some tips for everybody today, and we are here to share them, so let's get right into it. Suz, you are first up, and you said yours is dumb, but... We'll be the judge. Go ahead, give us your pro tip.

**Suz Hinton:** Okay. I'll try and keep this as short as possible, because it was one of those windy, Sherlock Holmes kind of debugging stories, but the main point out of this was write clean-up scripts, or write resources to clean up after yourself if you do something temporary that might bite you down the road. So if you make a change to your development environment and you know you only want it for a specific period of time, either create a script that will automatically run on a cron job or something, or even just set a calendar reminder for a certain day to decommission something... Because I had a pretty awful couple of months last year where I -- there was an IoT service that I use every single day, and then I configure that IoT service in the browser; it has its own application that I log in and I make settings... And one day in September I just logged in to do my normal stuff, and there was a certain part on the configuration page that just wouldn't load. I would get all these errors, and I just couldn't figure out what was going on.

This was a pretty big productivity destroyed for me, given that I've just lost something that I use every day... So I reached out to the support team; we spent weeks trying to figure out it out, and it seemed isolated to my computer. I was starting to get really annoyed, because I had a talk coming up in a couple of weeks, and I was like, "I'm not gonna be able to do this on my laptop, because no one else can reproduce it. It's only happening on my laptop. I'm gonna have to probably just format my entire computer, and then hope that that's gonna fix everything, because that's a pain to set everything back up again." I was just not having a good time.

So I was going through all of the JavaScript logs on this page, trying to do my own debugging while the support team was trying to replicate my issue, and I saw that there was one specific file, and it was one of those lazy-loaded JavaScript modules that just wouldn't come down, and it would just timeout every single time... And I was like, "Why is it this specific thing...?" It looked like it was tied to that specific configuration component that loads on the page. It seemed very component-based.

So I was sort of tearing my hair out, and one of my colleagues came into the room, and we were sort of like going back and forth on what it could be, and they're like "Do you mind if I just jump on your computer?" They were running all of these different commands, and I was like, "Yeah, this is great, to have a second set of eyes on it." And right as he's running a bunch of stuff, I'm like "Oh, what about /etc/hosts? What if I have something in there that's blocking a specific URL to pull that down?" He said, "No, I already cat-ed that out. There's nothing actually in there."

He jumped off the computer, and then I just ran cat /etc/hosts just in case, and sure enough, in July - three months prior to September, when stuff stopped working - I actually remembered that I had agreed to beta test a brand new kind of configuration setting... And because they didn't have a feature flag for it, they said "The quickest thing for you to do is to just add this entry to your /etc/hosts, and when it goes to lazy-load this module, it will pull it down from a different IP address." They had hosted that on a random IP address, somewhere in a VM or something like that, and that's how they were actually doing it. So that was just not fun...

What had actually happened was they were like "Cool, so everyone tested this thing for us. We're gonna release it to production", and then I completely forgot to remove that entry. They must have kept that VM up or that service up for another three months, and then they've turned it off... And because it had been three months, there's no way that I remembered that I'd added that. And if fact, embarrassingly, when I first found this in my /etc/hosts, I flew into a rage, and I started sub-tweeting that company, because I thought that their CLI tool had added that as an entry when I installed the CLI tool for the actual IoT service. I didn't mention them by name, luckily, but I very quickly deleted that very angry tweet when I figured out that it was actually me.

**Jerod Santo:** \[28:16\] So maybe you need a version control for your /etc/hosts, so you can Git blame on it, and make sure who's changing things over time; Git blame almost always points the finger right back at the one blaming, right?

**Suz Hinton:** Yeah. I would love to have something like an AppleScript that even just watches that file, and says, "Hey, do you still want this in here, or this has changed...?" Or I could have just honestly set a cron job just to delete that later... But yeah, because I was testing it for a week, I kind of just got distracted and started working on other stuff and totally forgot that I put that in there.

**Jerod Santo:** Real quick, Suz, for everybody who's maybe wondering what is /etc/hosts and what does it do, why don't you just give that quick explanation, so everybody understands what was going on there?

**Kevin Ball:** Like we're five...?

**Suz Hinton:** How deep do you want me to go on this? This is a very big explanation...

**Jerod Santo:** Yeah, just like we're five. No, just... Not deep. Shallow.

**Suz Hinton:** Okay. So if you type a web address into your browser, for example, or if you're just trying to call a certain domain name on the command line, there's a series of steps that your computer goes through to figure out where exactly is this. And one of the locations that it changes is a file called /etc/hosts. In that file you can specify basically a domain... A lot of people do this to actually block social media on their computer for a period of time. So they'll write google.com, and then immediately after that you can actually then tell it to resolve to a specific IP as a result.

This can also happen with things like -- if you're setting up a dev environment, instead of having to remember an IP address, you can just set up suz.dev, or something, or company.dev... So it's used in a lot of different ways, but really when it comes down to it, it's just one of the layers of trying to resolve domain names, if your computer is actually requesting that on the network, before it actually goes out to ask other things, like your ISP, or your router cache, or even just an actual DNS server.

Is that correct...? Someone correct me if that's wrong.

**Jerod Santo:** No, that's right. It will check there before it will try to resolve from somewhere else; eventually it will use public DNS. It would resolve to a local DNS server, so a lot of machines will have a locally-running DNS for caching purposes like that. You can also put entries in there if you're particularly a hacker, but eventually it would go to public DNS, and if you have entries in your /etc/hosts for a domain, it will short-circuit everything and just, whatever the IP address is in there, that's the one it's gonna use no matter what, which is why you had so many issues.

**Suz Hinton:** Exactly. It was very not fun.

**Kevin Ball:** So it's gonna lie to your browser, or anything else that accesses things via DNS.

**Jerod Santo:** Exactly, it's like lying to your network stack.

**Suz Hinton:** Yeah. It is very good for blocking websites, though. So when I stream, there are certain websites that if I go to those websites, they will accidentally docs me. Or if someone tries to share a link to try and get me to load a certain page that will show private information about me - so I actually have a bunch of them blocked, and that's scheduled to occur when I'm streaming. So that's actually one cool alternative use of an /etc/hosts file that probably it wasn't intended for.

**Jerod Santo:** Nice. So a small bit of Jerod Trivia/History... I used to use /etc/hosts so much, and have so many different little reroutes in there that back in probably 2008-2009 I wrote a Mac application called Detours, and its entire purpose was to provide a GUI for you to manage your /etc/hosts and all the redirects... Which was nice, because you always went to one place, and saw what was in there; it was my first Mac app, and it was free on the Mac App Store.

I got it on the store, and then they changed all the rules, and they sandboxed everything... And I had to take it out of the store. Then they completely changed the way that the Mac worked with regards to networking, and the app quit working. Now it's just a fragment of my history, but... Yes, I was a big fan of /etc/hosts. But just like everybody else who has edited their /etc/hosts quite a bit, I've definitely forgot about it and shot myself in the foot like you did there, so... Common mistake.

**Suz Hinton:** \[32:07\] Yes. Create reminders or clean up scripts that automatically run for yourself. Just do yourself a favor and automate yourself out of making mistakes.

**Jerod Santo:** That's awesome.

**Suz Hinton:** That's my pro tip.

**Jerod Santo:** That's a great tip. Alright, Kball, your turn, pro tip.

**Kevin Ball:** My turn, okay. My pro tip has almost nothing to do with actual development, but it is something that I've been working on a lot over the last six months, and is changing my life in many different ways. I have always been a terrible planner. I am a good improviser, I'm good at reacting to things on the fly, and I've been really bad at planning; it became increasingly clear to me that that was holding me back in a number of ways, so I've been adopting a set of practices to get better at planning.

I still try to leave a lot of opportunity for serendipity, and I'm not trying to over-plan my life, but just finding ways to get better at planning ahead and getting things figured out. I have two tips that I'm gonna share associated with that. One is use your calendar to schedule planning time and to schedule other things. I used to only use my calendar essentially to schedule meetings, something where I have to invite someone else, or things like that.

Now I have all these recurring things where I have an event for when I typically run; I run three days a week - Monday, Wednesday, Friday. And sure, I don't have to listen to that, I can change it around, I still have room for improvising; "Oh, this thing is happening. Oh, I'm really deep in this. Oh, it's raining, I don't wanna run." But having that in my calendar prompts me to actually do the thing that I said I'm gonna do. So I have when I'm running, when I'm working out, I have a reserved writing time, I have a weekly planning session that I do Mondays at 8 AM, and all these things... It has just been incredible how much better I've gotten at actually following through on the things I want to do, just with this simple thing of like "Make a spot for it in my calendar. This is when I'm gonna do it." And I can change it around, it's not a rigid requirement, but that nudge, that reminder has been incredibly helpful for me in terms of actually doing my writing, actually doing recording a video, actually doing my workouts and my runs - having a time for it and having it remind me. So that's part one or Kball's Planning Pro Tips.

**Jerod Santo:** I like it.

**Kevin Ball:** Part two is something that I did for the first time this year, and I sort of started this planning over the break, over the holidays; I was trying to sort of plan my goals and things for the year, and various other things... But what I did was I put together a Google Spreadsheet that breaks down week by week, along a number of different dimensions, what some high-level goals are.

For this week I have a goal for my client work, I have a goal for what I'm doing on sort of a training and courses side, I have a goal for what I'm doing planning around travel, and things like that, I have family and personal stuff, I have writing stuff... And once again, it's not like this is a "You have to do these things", but it gives me a place for when I'm thinking about "Okay, I'm trying to get this stuff. Here's how I'm gonna--", it lets me plot out what I need to be doing to get to where I want to do; if something comes up and I'm like "Oh, I need to deal with that, but now is not the right time" it gives me a place to put it that is kind of holistic, and then each week when I do my Monday morning strategy session, where I start is I go and I pull out my spreadsheet and I say, "Okay, what's on my agenda for this week? Okay, here's all the things I thought that I wanted to do. Are those still applicable? Yes. Okay, how do I schedule them into my week?", what have you.

\[35:48\] These two tools together of calendaring things that are just for me, to remind myself to do it, and having a big picture spreadsheet of like "Here's what I'm trying to accomplish and what I think I kind of need to be doing at each time", and treating both of these as tools, rather than dictation, like "This has to happen"; it's more like "This is a reminder. This is helping me keep track of it." I feel like those two together have completely revolutionized how I'm thinking about and organizing my weeks, and I feel more on top of everything and I'm getting more done, and it's amazing.

Those are my pro tips for life - use your calendar, and spreadsheets are great.

**Suz Hinton:** I totally agree. I am someone who needs this kind of structure in my life in order to achieve those things, and I related to everything you've just said. It feels amazing.

**Jerod Santo:** I need to try these things, because I'm not very good at that either, and I therefore don't do very good at it. But I like how intentional you're getting with it. I do calendaring now better than I used to, mostly out of necessity, and as a communication tool for others more than myself, but I think planning ahead and setting goals and then just actually tracking them would be something that would benefit me greatly, so... Good stuff, Kball. Thank you.

Okay, last pro tip. This one comes from me. This is about dev flow; you all know what I'm talking about, when you're really in the groove... Suz, you've been there. Kball?

**Suz Hinton:** Oh yeah, I was there last night.

**Jerod Santo:** Isn't that awesome? The best, right? You feel good, your mind is completely absorbed by whatever problem you're trying to solve, you come up with solutions, things are good. This is the place that developers love to get to and to stay there as long as possible, right? So we talk about these things like "make a schedule" vs "manage your schedule"; there's a great Paul Graham essay, and it resonates with us, because as a maker, as a creator, or a coder, or a problem-solver, or whatever you are, we need long blocks of uninterrupted time to get to a place of flow, and the longer we stay there, the more productive that we are. So these are things that we desire.

However, at a certain point you're gonna get disrupted, your work will be interrupted. Maybe it's a meeting, maybe it's a phone call; we try to avoid these things, if possible, or at least time-box them, so that they all happen at a certain time and we can have longer blocks of programming time... But hey, you also have the end of the day, right? You have the Friday afternoon. The workweek is over, the session is over... How do you retain that dev flow, or how do you get back up to speed as quickly as possible when you return to your work during the next session?

I have a couple of ways to do this. It's funny, I actually stumbled upon this on my own blog, I wrote about this all the way back in 2011, and recently brought it back to life and put it on dev.to, just to see if it would get some more traction there... So three ways to do this - the first one is the one I like the least, and that's to literally leave yourself a note; you're ready to leave for the day, write down what it was that you were working on, what you were thinking, what you were stuck on etc. Don't try to make it too long, because you probably won't do it, but leave a note, come back the next time you're ready to code, read your notes.

The problem with that one - it's super forward-thinking, and it requires habitual consistency, which I usually fail at. So that one hasn't worked out that great, but if you are a note-taker already, maybe you're trying this - read yourself a note and come back to it and read where you were.

Now, another one which I think is a little bit easier... If you are a test writer -- if you don't write automated tests, then you can't use this tip, but... Leave some tests failing at the end of the day; at least one, maybe a couple. Whatever it is that you're currently working on, leave it in a state where maybe you just wrote the test and you didn't write the application code yet, so when you come back, you run your test suite, you see what's failing, and obviously you can pick up right where you left off. It will help you jog your memory of "Hey, what was I actually working on yesterday?"

\[39:45\] The third one, the one I still use to this day -- like I said, I wrote this back in 2011, and of these three tips, the third one I still use pretty much on a daily basis... Which is just to leave certain code changes uncommitted, or unstaged even, in Git. So when I come back, I can just look at Git -- that's what I do, I say "Okay, Git status. I can see these three files are edited; I have a function that's defined, but there's no body to the function, so nothing's been checked in." Everything that I was working on - it helps that context kind of just rush back into my brain, and it helps me get back to that place of being "Okay, this is exactly where I was", so I can get in the flow a bit faster.

So three ways you can do it... I like the dirty Git stage, because it's the easiest; basically, you kind of limp in to the end of your day, like "Oh, I'm not gonna do this commit. I'm just gonna stop", which is nice. And then also you can leave a test suite failing - that requires a little bit more effort - or you can write yourself a note... But the easiest is usually the one that we can create a habit out of.

So give it a try... If you're having a hard time getting back into the groove after your previous session ends, leave some changes uncommitted, and when you come back, always make that the first thing you do - check your Git status, see what's been added but not committed, and pick up from there.

**Suz Hinton:** I think that definitely works for short-term breaks. I've had that bite me -- and if you watched my stream recently, actually I went into a repo because someone opened an issue on it, and I think maybe six months ago I'd started working on a new feature, and then probably dropped it because there was a bug on a different repo... My problem is that I maintain too much open source, that's actually what the problem is here. So I went back in, and I have this dirty state in Git; and I basically always say on my stream, "Oh, what mess have I left myself this time? What is all this garbage?" And I'll run a git diff, and I'm like "What even is this? I don't understand..." So I'll end up doing git checkout -b what on earth was I working on...? And then I will basically move it all over, commit it, write "wtf" as the commit message, and then switch back to master and actually solve the issue, and then come back and start doing some Sherlock Holmes stuff.

I think in that case, if you do have long periods of time - which is totally not what you're even talking about, so I apologize - what I would do is commit a WIP commit message, but then on the second, third, fourth, fifth line actually write a detailed explanation of what you were doing... Which I guess is kind of a combination of the second and the third -- no, wait, the first and the third.

**Jerod Santo:** Yeah, the "leaving yourself a note", yeah... I actually find that I do that as well, especially over the weekend. Or if I'm switching projects for a few days, or something, I'll leave a WIP commit with just like -- and I'm terrible at note-taking, so it's usually like a sentence, of like "Hey, this is what you were doing", just so it's not left in a dirty state. But mostly I'm thinking of like overnight, or maybe even for the lunch break...

**Suz Hinton:** Yeah, totally.

**Jerod Santo:** ...because you can lose your flow over lunch as well. Kball, were you gonna say something?

**Kevin Ball:** Oh yeah, I basically use what Suz described, except I do pretty much all of my development branches, so it's never master that's dirty; it's always some other branch. But yeah, then I'll do a commit and I'll just say 'stash forward progress' and then what I can essentially do is then you do 'git reset HEAD^1' and that gets you back to that exact dirty state that you're talking about. I'll commit it, so that I'm able to go back to a master branch or some other branch if there's a need, but then when I wanna get back to that, "Okay, just show me what it is with a Git diff", and then I can reset it.

**Jerod Santo:** Very good. Well, those are your pro tips for today.

**Break:** \[43:38\] to \[44:42\]

**Jerod Santo:** And for our last discussion of this episode, we are going to point our spotlight on a specific project. This is something that we like to do on a regular basis. Here at Changelog one of our goals is to shine a light on open source that deserves it, and help people get the word out about the cool stuff that they're building in our space, and especially when they're giving that stuff away free as in beer, free as in libre... Whatever it is, we like to shine a spotlight.

Here's an opportunity for us to look at a specific project, tell you all what it's about, and then discuss is amongst ourselves. The project that we picked for today is called the Fly CDN (github.com/superfly/cdn).

This is a CDN just for developers. Run it locally, write tests, integrate into your deployment process, move fast, and maybe don't break things, because gosh darn it, you're an adult... So says their summary there. That's a great little summary.

Fly is something that I am somewhat familiar with. We did a show on Fly on the Changelog, which is another podcast we do on this network, all about programmable infrastructure. Fly CDN I think is their new and shiny. Kball, you brought this up as a potential project spotlight, so maybe give us your thoughts and why it was interesting to you.

**Kevin Ball:** Yeah, so high-level this is a CDN, it's written in TypeScript, so I thought it was relevant to this audience, and the reason that I was really interested in this is it's an example of moving more and more application logic out to what's called the edge. Edge applications... Each different cloud provider is offering more and more ways to do this; you have Lambda@Edge, you have Cloudflare with their Cloudflare Workers, things like that.

The concept here is "How much work can we do in a distributed way that doesn't require any sort of centralized server, so that we can actually push it out and have it happen very close to the consumer, to the user?" For Fly CDN, it lets you essentially do a custom version of that. If you're using Lambda@Edge, they've got "Oh, you can plug into authentication using JSTs, and do stuff like that.

This lets you just do kind of whatever you want; maybe I'm gonna route things to different servers based on whatever your route is, maybe I'm gonna do some really smart caching, that's smarter than a standard CDN, maybe I'm gonna include authentication... Whatever it happens to be. And the thing I think is interesting about is where a lot of the edge application stuff has been platform-specific, and they do target their own Fly Edge Application runtime, this claims to work on anything that has an edge service worker implementation. So you can run it on the Cloudflare service workers, you can run it at Lambda@Edge, you can run it essentially anywhere and create your own, customizable edge-based application. That just sounds pretty darn cool to me, and it's all in JavaScript, or TypeScript... So anyone listening to this podcast, you probably have the skills to write your own edge application.

**Jerod Santo:** \[48:01\] So the applications on the edge - this is a somewhat new marketing term, or industry term for... You know, we went cloud, and now we're moving back to these edge devices; think of it as edge nodes on a much larger network. This is a term used by a lot of the big cloud providers. I know Microsoft has been talking about the intelligent edge, which is like instead of these dumb terminals that are reporting everything back to a central cloud service where all of the smarts are, let's put some of those smarts back into the edge, let's make the edge intelligent.

Suz, I know as somebody who's involved in the Azure team, maybe this is something you can speak to as well, in terms of this terminology, and what people are thinking of, and why this is better than having all of the smarts cloud-side.

**Suz Hinton:** Yeah, I can definitely share some of that. I come at edge computing from the IoT side of things, especially in Azure... So it's particularly useful for IoT, because if you think of a whole bunch of devices out in the field, whether that's in a building, whether that's agricultural use, or something like that, you would normally require every single one of those devices to have its own internet connection. So it either has somewhere that it has to connect from, or it has to have some kind of SIM card in it, or even just like Wi-Fi connection capability.

What you can do instead is you can just have one edge device that sort of acts almost like -- it can be a gateway in a lot of cases, and it can be doing a lot of that fielding of the telemetry coming in from the devices. So instead, the devices can all connect to this edge device. It's responsible for authenticating, and making sure those devices are legit, and they're allowed to connect. It can be passing telemetry back up to the cloud, and it's the only one responsible for having to do that. It can deal with things like internet connectivity, so it can stop buffering telemetry, and things like that, and then when it back online, it can then start pushing them up.

It can also do things like run machine learning; like you said, run extra processing. So it can either run machine learning down on the edge, which means that you have a faster response time, because you're not waiting for it to come back from the cloud... And the other side of things too is you can be filtering that information. So instead of having to rely on those other devices, which have much smaller or less powerful processing power, you can have this intermediate device, which is -- again, the reason why I talk about it from the IoT perspective is you can already see how much that's changed the IoT game, and just made a lot of this infrastructure much better as a result.

**Jerod Santo:** It's interesting how as an industry we move in these different waves, or directions, one way or the other... Way back you had mainframes, and that's where all your smarts were; then you connected to a mainframe from a dumb terminal. Then eventually it was like, "Well, why are we making these terminals so dumb? We now have the PC revolution and we have the ability to have thick clients, instead of thin clients. So now our smarts are there." Then it was like, "Well, you know, what we really need is instead of having a centralized mainframe or a server locally hosted, let's move the server up to a cloud, or an abstracted away infrastructure, and we can connect to that with these thin clients, these dumb devices...", which at the beginning at the IoT it was like "This thing basically is a sensor and a network stack, and it's reporting everything back up to some centralized service, and all of the algorithms and all of the smarts are there. And that was a movement. Now it swings back in the other direction, and it's like, "Well, that's good, but it could be better, because now we can have these more powerful chips, more RAM...", it's cheap now to make these thin clients smarter, and we can do things locally, and we don't have to send everything back to a server, which has privacy implications, it has speed implications.

So it's kind of this swing back and forth, and I just wonder if it's just gonna perpetually swing, if we're gonna find a sweet spot... I wonder if you guys have thoughts on that.

**Kevin Ball:** \[52:04\] Well, I feel like a lot of that has been driven by hardware advancement. Back in the day, to get enough power to do anything interesting you had to have something really expensive, so centralized. Then processors got cheaper, whatever, you have thicker clients. Then we say "Okay, now we're dealing with mobile phones and IoT devices", so suddenly processors -- it's hard to get enough out there, because the battery, and what have you, so we swing back to centralized.

When we talk about edge, I think there is a clarification to be made, because I think you can talk about edge in terms of "I have an edge device that's actually sitting there", or -- this could still be in the cloud, but it's on servers that are distributed worldwide, and pushing it out rather than having a centralized server; it's got many copies, so you just get whatever is closest to you.

**Jerod Santo:** Right.

**Kevin Ball:** But I think there are two things that lead me to believe that we're gonna want -- the edge is something that we're gonna really want to do on an ongoing basis. Number one is the fact that we are getting closer and closer to -- I won't say a steady state, but the speed of hardware improvement is slowing down... So I think we're not gonna get too many more of those cycles going through there.

Then the other thing is that the speed of light is always gonna be a problem, and it's something that is gonna continue to be a problem, and that's not something that gets fixed by hardware. Early days of the internet, most of the people using the internet are all in a relatively small place - lots of North America. These days you have, with smartphones, 3-4 billion people online, all over the world, and still a lot of that centralized hosting is happening in America. That means that for al those extra 3.5 out of 4 billion people who are not located in North America, stuff is super-slow. So figuring out ways that we can distribute and have things happen close to folks - and edge is not the only way to do that; there's some really interesting things in a lot of these cloud providers, where you can run federated networks across, and they have communication, and they have ways to maintain consistency... But edge is, I think, one of the biggest ways that we can start to bring that speed of light latency down, for at least the vast majority of cases.

I think it is not infeasible to see a situation where the only things that have to go back to the central service are when we're actually updating stuff, and every single read can happen at edge... Because if you use cryptographic authentication, it includes your permissions in your token, like JSTs do... You could do authentication and determine what somebody's allowed to read, so you could essentially store copies of any sort of data out of the edge. And if you have reasonable cache and validation, and you've got stuff -- we could see a situation where you only ever go back to the centralized servers when something is being updated, and even that could happen asynchronously for many cases.

So we could end up in a situation where for the vast majority of users, most of what they're fetching is coming from something that's very close to them. That's an incredibly powerful possibility for extending the amazingness that is the internet, that is right now mostly hosted in North America, and making it accessible to folks worldwide.

**Jerod Santo:** \[55:42\] So in terms of edge applications, with regard to that geographic distribution, a CDN is the epitome or the quintessential edge application, because an entire point of a content delivery network is to move the content geographically, physically closer to the users. So we have CDNs that are a thing, we have CDN providers - Changelog's provider is Fastly... I mean, if you think about them, they're basically one big mesh network with all these different edges, right? They call them POPs (points of presence), but those are basically servers that are geographically located in regions where they can serve content very quickly. Like you said, speed of light is not changing, so there's just no possible way that you could serve a request faster from New York City over to London than if you have a server that's located in the U.K; it's just gonna be faster.

So with Fly CDN and this really softwarification of these things, it's really allowing regular old developers like us to maybe build these CDNs right into our application, and rely upon the bigger clouds that already have all those different distributed servers to run them on different edges around the world.

**Kevin Ball:** I think CDNs... You said they're the epitome of an edge application - I actually would change that and I would say they are gen zero of an edge application. They are the stupidest possible edge application, because they're literally just hosting content, and no logic. And that was the easiest thing to do, and that's what we did first; and now we can start layering in more logic, and more functionality that is not just hosting content, and get to gen one, gen two, gen three, where we're doing very interesting things out on the edge.

**Jerod Santo:** Well, what we find is that the CDNs are becoming programmable, so maybe you argue that turns them into something different, that they aren't now, or they just learn new capabilities... But either way, I agree with you, that just serving an asset, an image, geographically located, is definitely the stupidest - let's just say the simplest - form of these things, and then eventually, as they become programmable, which is what a lot of these services are trying to do, then we start to see more capability. Suz, you were gonna say something?

**Suz Hinton:** Yeah, it actually falls really nicely into that last comment, which is, again, from an IoT perspective, we even have services in Azure such as the device provisioning service, where every single device that comes off the factory floor is programmed with this one phone number that it phones home to; but once it's phoned home to that, that provisioning service can figure out "Okay, well, where is this device located? Where is the nearest possible server for it to now have as its home base?", because obviously this provisioning service is just really querying that for it; then it can tell the device, "Okay, well based on your geographic region, or based on all of the different responses, or based on the fact that this service is not at capacity, so you can register yourself to it, we would recommend that from now on you just phone this service here."

\[58:45\] So that's where you start bringing the logic in, so that it's able to even understand where it should be routing to in the first place, rather than having to do this kind of round-robin of trying to ping to find where it should be finding it in the first place. You can do it as just the first setup, and as long as that device is assumed to always be in a very similar location from then on, then you've actually solved that problem.

**Jerod Santo:** Very cool. We'll check out /superfly/cdn. Of course, all links for things discussed on this show are in the show notes, so open up your podcast app, and click there; if you're on the website, hey, you're staring at them... Go ahead and click through, check these things out. Definitely interesting times, and interesting advancements in what we can do. The democratization -- you know what I'm talking about; things are getting to more people, and we're bringing the good cookies down to the shelves where the kids can reach them... And by the kids I mean us, as we explain things to each other like we're five.

Hey, that's our show for today. We'll see you all next week. You don't have to go home, but you can't stay here. See ya!
