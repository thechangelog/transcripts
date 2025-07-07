**Jerod Santo:** Today we're joined by our old friend, Chris McCord. Welcome back, Chris.

**Chris McCord:** Hello. Thanks for having me back.

**Jerod Santo:** This is your third, fourth, fifth, or sixth time on the pod. I don't know, I didn't look it up this time, but you've been around, as the -- probably talking Phoenix pretty much at all times. That's my guess.

**Adam Stacoviak:** I think so.

**Chris McCord:** I think so. Yeah. Elixir maybe, but probably Phoenix.

**Jerod Santo:** As you know, we're pretty big fans of Phoenix. We've been running it for a decade now... So thank you, still, and again, for creating a cool web framework.

**Chris McCord:** Yeah, you're welcome. My pleasure.

**Jerod Santo:** Of which I -- I use none of your cool, new features. I'm basically using the stock, CRUD abilities from 2016.

**Chris McCord:** Hey, that's cool too, though. We'll take it. It just works.

**Jerod Santo:** It does just work. And I continue to enjoy it... I even avoided contexts, even though I was keeping up with the Joneses... I am on a recent version, but I just ignore the warnings, or whatever.

**Chris McCord:** That's fine, too. There could be a whole episode on that, just one giant rant... But yeah, it's -- modules and functions, that's all we're asking.

**Jerod Santo:** That's right.

**Chris McCord:** Or that's not even what we're asking. If you want to. It's a suggestion.

**Jerod Santo:** \[laughs\]

**Chris McCord:** Maybe create well-defined interfaces, but... That's it. So yeah, do what you want.

**Jerod Santo:** Well, I mean, who writes code nowadays anyways, right?

**Chris McCord:** That's right. It doesn't matter anymore, because --

**Jerod Santo:** It doesn't matter. That's where I'm getting to in my life, and that's where we're getting to, with coding agents taking over the world. It's like, as long as they know what the new features are, and I can test-drive it in the browser...

**Chris McCord:** They write pretty good Phoenix contexts too, so... That'll just do it for you.

**Jerod Santo:** And you have a brand new related thing, phoenix.new. Spelled out, P-H-O-E -- Adam, can you spell it out?

**Adam Stacoviak:** Oh, my gosh... Yes, I don't mind.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** You scared me, because I don't know how to spell this word, okay? P-H-O-E-N-I-X. Ding, ding, ding, ding. I win.

**Chris McCord:** Nailed it. Nailed it.

**Adam Stacoviak:** Whew. Man...

**Jerod Santo:** .new, which is the cool new TLD, is the .new. It's the cool new.

**Adam Stacoviak:** Yeah. I love .news. I mean, it's the place to go to start something, you know? You've got to go there to do it.

**Chris McCord:** It was available, so it works out well.

**Jerod Santo:** All the cool kids are doing it. It took us a long time to get .news. We could have got .new and put a /s. I just realized.

**Chris McCord:** That would be cool.

**Jerod Santo:** Just go to Changelog.new/s. I don't know, it has a hard time saying that out loud.

**Chris McCord:** The dev app URLs are also phx.run.

**Jerod Santo:** Yeah, that's cool, too. .run is a thing.

**Chris McCord:** I didn't know that was a thing, but I was "This is perfect."

**Jerod Santo:** I the new TLDs. I don't that they cost a premium.

**Chris McCord:** Yeah, it's ridiculous.

**Jerod Santo:** It's like, how about $9.99, it used to be in the good old days, you know?

**Adam Stacoviak:** Gosh...

**Chris McCord:** I think I paid -- it was $7-something.

**Jerod Santo:** Oh, gosh.

**Chris McCord:** 2003. It was my first domain.

**Adam Stacoviak:** I think to expect less than 50 bucks a year for a domain these days is just not a possibility.

**Jerod Santo:** No. What's the .new going rate, Chris?

**Chris McCord:** I think it's several hundred dollars. 700 bucks, 800 bucks? I don't know.

**Jerod Santo:** Wow.

**Chris McCord:** It's a lot.

**Adam Stacoviak:** A year?

**Jerod Santo:** For the first time, or annual?

**Chris McCord:** It's annual, and there's something -- I think within 90 days you have to actually have some real property on it, or something, or they...

**Jerod Santo:** Oh, wow.

**Adam Stacoviak:** Boot you.

**Chris McCord:** There's some rule there that -- yeah, you can't squat them.

**Jerod Santo:** It can't be old. It has to be new.

**Chris McCord:** I don't know how they enforce it, but you can't squat those. But -- I mean, they're price-prohibitive for squatting, anyway.

**Jerod Santo:** Those prices are acting zero interest rates are still a thing, you know? It's like, come on. We don't have that money anymore.

**Adam Stacoviak:** Get it together, man...

**Jerod Santo:** But I should speak for myself, because apparently fly.io sprung for this Phoenix.new. They can afford it. And .run, which is super-cool. Tell us about your new project. You started it back in December... Of course, this is what everyone's doing right now, is "How can I make LLMs and agentic coding work in my slice of the world?" And your slice of the world is Elixir and Phoenix. That's where you started, right?

**Chris McCord:** Yup, that's right. Yeah, so we can talk about what it is now, and what I think we accidentally made, which is this journey that I've been on since we started this. So right now, Phoenix.new is essentially a vibe coding Elixir and Phoenix platform. But I think what differs a little bit is we give you a full machine, with root access... So we just let the agent have full reign to go full ham on whatever it wants, install app packages, and build a full stack application.

So a lot of these vibe coding platforms will gladly write JavaScript apps and run them in the browser, but if you want a real app that needs to talk to the database, needs to talk to file systems, we wanted to start by building a full stack app generator. So that's what we've arrived at. So it's great at building Phoenix and real time live view applications. So out of the box, you'll get what you would expect from a vibe coding platform, fully designed, but then everything that should be real time will be real time; how we build things in Phoenix in live view, so the agents \[unintelligible 00:07:29.06\] make everything real time. And then it typically makes everything real time.

So that's the current out of the gate experience. And what we've found is it actually takes very little to get this agent, because it has shell, and it has these sharp tools to get it to do anything... So the first thing my coworkers did was they immediately had to create a Rails app, and they nailed it, in one try... \[laughs\]

**Jerod Santo:** Haah... They're trolling you.

**Chris McCord:** \[07:53\] It's optimized for Phoenix currently, but it's an effort to nail this full-stack application, and giving it -- we give it a shell and a root. It turns out that you give agents a few sharp tools, they just can make decisions and choices on their own. So where I see this going in the future is how I'm building it as a remote AI runtime... So similar to Codex, or Devin, or I think Google has a Jules product now, where you can just have this thing asynchronously work on stuff. We can do that too, and it turns out it just does it.

So when I built things initially, everything's running as an Elixir app behind the scenes, and that's stateful, so it's like we accidentally made this remote thing... So the agent -- if you ask it to build an app now and close your tab, throw your laptop out the window, it's going to keep working, and you can pop in from anywhere in the world. So it's already headless, and you don't have to be there. So much like Devin or Codex, you can just ask the agent, "Hey, go check out GitHub issues or PRs, and send a PR when you're done", and it will do that today.

So I think, while it's optimized for vibe coding out of the gate now - the system prompt is all about vibe coding an app.... The next thing we want to move towards is more of these rich Codex-type flows, that it can already do, but doesn't really know it can do, if that makes sense. You have to coax it.

**Jerod Santo:** How deep did you go on making it know Phoenix well? Is it just the system prompt? Is it deeper than that?

**Chris McCord:** Yeah, I mean, it's just a system prompt combined with, let's say, the "world knowledge" of these frontier models. But the remarkable thing is -- so we're using Claude 4 Sonnet currently, but the remarkable thing is how portable it is. My intuition coming into this space was these things are non-deterministic, you change one little thing in the system prompt and it's a totally different behavior; and if you want to move to another model, Open AI or Gemini, it's going to be a ton of rework... But it turns out you just shop your system prompt around and you get reasonable behavior just out of these things... Which is totally against my intuition.

The knowledge is mostly gap filling. So you're relying on this implicit world knowledge, and then through a lot of trial and error, you see where it sucks. All these agents like to put a bracket in the index-based access on Elixir lists, which blows up. It's not a thing. So you have to find these dumb things that these agents do, and then tell them what to do and what not to do. But it really isn't much harder than that. And then you give them tools to kind of get over stumbling blocks, or go fetch things as they need. So since it runs shell, it can just get the Elixir documentation out of a module locally, or it can hit the web and fetch it... So it's just a fascinating field that I think is overly complicated, that it's far more simple than folks realize.

**Jerod Santo:** So somewhere in your prompt it just says "Elixir doesn't have a list, it does not have an at function in Elixir." Or something like that. You're literally just putting those little things in there, and \[unintelligible 00:10:56.02\]

**Chris McCord:** Yeah, exactly. In dumb English, you're like "Don't do this", and it doesn't do it after that. \[laughter\] I mean, it's really a lot of trial and error. People likened it to spellcasting... But it's far less fiddly than I would have thought. And given the non-deterministic nature, I thought it would be like "Oh, now I'm going to add one line and it's going to throw everything else off." And that's not been the case. It's actually been remarkable how much they stay well behaved.

**Jerod Santo:** Now, do you have regression tests for this? Because that doesn't have to be there, maybe with Claude 5, because now it knows there's no at. And you could pull that one out and simplify. Or is that \[unintelligible 00:11:35.15\]

**Chris McCord:** Yeah, not currently. I mean, it's mostly -- we've done a ton of trial and error. We have some headless-driven integration tests, where we actually do the full cycle, but nothing like scoring the result. Because that's the hardest part, is what constitutes a successful outcome. And it's not just getting to a running server, because most of these models can get to a running Phoenix server at the end... But does it look good?

\[12:08\] So Claude has been the best at design, by far, in my experience... So it's mostly about the end to end, like "Does the app look good? Is it just some cruddy thing? Or did it actually come up with some compelling, actual--" You give it like "Make me a to-do list", and "Did it actually come up with some compelling features that weren't implied, that were implicit?" So most of that is trial and error, and just generating \[unintelligible 00:12:29.20\] and finding out.

**Jerod Santo:** Have you found that Claude 4 in particular is better than other things right now? It just seems like maybe it's not this particular model or version, but it's like, mid 2025 all of a sudden I feel like the coding agents - and I specifically have experience with Claude, where it's like "Oh, I'm not mad at you anymore like I used to be at the previous versions."

**Chris McCord:** It's slightly better than Claude 3.5, or 3.7, whatever the previous Sonnet was. It's the best -- I think it's just a little bit better (not remarkably) than the previous Claude. But Claude has been the best at these agent workflows... And I use words like "It's the best decision-maker", it makes the best choices on what to do next.

But most of the models -- I mean, even Grok 3 will go through the standard steps that you would expect the agent to do when it's building a Phoenix app. It's just whether it gets caught on these little things, or makes a silly mistake, or makes an app that actually looks good is -- Claude just as gets over that quality hump. But the others are definitely viable. GPT 4.1 is similar in this agentic flow. It looks the part, it's just not quite as good as Claude. And Gemini is the same. They work, and they're really good. I mean, if we're talking single-file "Make this code for me in one file", then it's a different story. A lot of people love Gemini 2.5 Pro, it does a great job, but as far as this end to end, "You're an agent, you make decisions on this step-by-step flow", Claude just seems to nail it compared to everybody else.

**Jerod Santo:** I ask that not to toot Claude 's or Anthropic's horn, but because I feel like for me personally - and maybe it's all of them - have reached a threshold of quality recently, where I've kind of bought in now more fully than I was... And it just seems like this just recently happened.

**Chris McCord:** Yeah, it was like sometime late last year. I mean, when GPT-4 came out, that was when -- I wish I had had the insight then. That was pretty much what changed the game to do something like we're doing... And we're just now catching up to I think what these models have been able to do for a while now.

**Adam Stacoviak:** What is Phoenix.new to Fly? What does it represent? Is it a skunkworks? Is it a growth model? Is it marketing? Is it R&D? How do you categorize it?

**Chris McCord:** It started as just, I would say more marketing, and I might even call it R&D. So the original thesis was a lot of folks in the Elixir community have been like, you know, "These agents are all doing JavaScript. All these platforms are doing JavaScript. And since JavaScript has the most data, we're going to fall behind, because JavaScript is going to eat the world, because that's all the agents are going to write." Pretty soon, no one's going to care about what the agents are writing, right? So part of this was can we show that Elixir and Phoenix just work great with these large language models...

And the other part was... With Fly it was like, you know, we have a large customer base that is using our platform to do these vibe coding agents, but a lot of them are just generating JavaScript. So part of it was marketing to show -- the original goal was I had six weeks just to spike out a text area on a webpage, to generate a full stack Phoenix app. We were just going to use that as kind of a marketing for Phoenix, to be like "Look, we're here. We can do the same cool stuff." And then we also market Fly for that segment, to say "Yeah, we're great at sandbox JavaScript, but hey, look, you can just have the agent write whatever."

\[16:09\] So six weeks later, I basically had the MVP of what you see today... It wasn't quite as posh and good, but it was basically a full in-browser IDE, generating a Phoenix application... And it was like "Oh my God, there's something here." It was much more than I thought that we could deliver, so we decided to see where it went, and see if we could turn it into a product. But it definitely started as this just little marketing R&D thing that suited the Phoenix side and Fly side, and then it turned into a "Oh wow, this could be a thing." And now it's a real product, so we're gonna see where it goes.

So I would say skunkworks -- it went from marketing to, "Okay, skunkworks", to now growth, right? Like, "Okay, let's launch this. Okay, we have users. Okay, let's try to do this thing."

**Adam Stacoviak:** So is this now a product? Is that where it's at now, product level?

**Chris McCord:** Yeah, we're in our product growth phase. I mean, before we launched - what was that, four days ago? So we've had hundreds of people sign up at this point, so... So we're doing it. Let's go.

**Jerod Santo:** I mean, that happened for Bolt as well, right? Bolt.new... What was their previous company? I mean, it's the company that created Bolt. They were doing other stuff. It was like Node in the browser... I can't remember what it's called.

**Chris McCord:** Oh, really? I didn't know they had some previous...

**Jerod Santo:** Yeah, yeah. They have been startup-ing, and doing cool things in the browser for a long time. I mean, talking like three, four, five years... And they've been on JS Party... And Bolt was their new thing. And it became their only -- I mean, it came out and just was really cool, and got a huge adoption right away from folks... And so it became now, I think, who they are. Talk about a pivot...

**Adam Stacoviak:** It's crazy. Their story is actually quite crazier than that. The founder had some stuff out there I think even, as well... It was like a weird way, the old version of the company kind of like faltered...

**Jerod Santo:** StackBlitz. That's what it was. StackBlitz.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** It just came back to me.

**Chris McCord:** Oh, yes. Yeah, yeah, yeah. I remember this.

**Jerod Santo:** Yeah, bolt.new is from StackBlitz. And now it's just Bolt. That's who they are now.

**Chris McCord:** Yup.

**Adam Stacoviak:** That's so weird then. Maybe that's not the same. Who is the real Bolt here, okay?

**Jerod Santo:** Maybe I'm wrong... \[laughs\]

**Chris McCord:** No, you're right. You're absolutely right.

**Adam Stacoviak:** There was an old Bolt too, then.

**Jerod Santo:** Okay.

**Adam Stacoviak:** Maybe I'm wrong.

**Jerod Santo:** Oh, I'm sure there's been other Bolts, because it's just a good name.

**Chris McCord:** Yeah. And they've had explosive growth, as well as like lovable... And there's been some big folks in this space. So initially, it was just "Let's see if we can show this as possible in a full stack way..." And it turned into "Oh, my God --" It turned into like "Here's a full IDE, with a root shell in the browser."

So I think pretty quickly, it turned into a very compelling, remote dev runtime, starting from "What if we just gave you a text area?" Because I think with a lot of the other players in this space, you get the chat interface, and they give you some basic code editor, or code visualization... But we're just like "No, we'll just put VS Code in the browser, and let you and the agent go at it."

**Jerod Santo:** So now that you all realized how generally useful this is, and not necessarily specific to Elixir, or Phoenix; like, it can do other things, especially if you stop making it seem so Elixir and Phoenixy... Do you wonder if maybe you pigeonholed it, or misnamed it, or maybe it should be something different? Is Phoenix still cool, even for people who don't know what Phoenix is?

**Chris McCord:** You know, we went back and forth on this a lot, because it definitely started as "Let's do this for Elixir and Phoenix", and then over time, it became apparent, like "Oh wow, this thing is--" It turns out if you give the agent a full environment, and give it sharp tools, it could just do things.

**Jerod Santo:** Yeah.

**Chris McCord:** \[20:00\] So we decided to -- we wanted to nail one stack to start. So once it became apparent that we could use this for pretty much anything -- like, Ruby, PHP, Go, Rust, all the languages you would care about are already on the box. But we wanted to actually give a compelling experience for one stack first. Because it's like, you could release this, but if the agents can just -- if the agents just flop around being moderately okay at Rails, or Phoenix, or whatever, then it's still not gonna be a good experience. So we definitely wanted to start with "Let's nail one stack. Let's actually make it compelling." And Phoenix gives you a lot as well, like, real-time features. So if you can nail one stack, and especially with Phoenix, you just -- you get these real-time apps that sync out of the box.

There's something, I think, unique towards the future of like -- if we take the argument that JavaScript eats the world, and it doesn't matter what language these agents write in, they're gonna use JavaScript, because that's what they've seen, we can flip it around and say "Well, if we get to that world where the code that the agents write doesn't matter for us or people asking it, maybe Phoenix can be the thing that doesn't matter, right? Maybe we can be so lucky that most people don't care." And if you flip it around and say "Could we do that?", then the agents actually have the ability to make these really compelling experiences with far less glue, and things, infrastructure to bring in. So it's like, there may be -- I think there's a thesis and a story there that if we keep progressing towards this world where there's less and less... Like, you don't show the editor anymore, because the agent does that good stuff... Then I think Elixir and Phoenix actually may be the perfect language to be that thing that people by and large don't care about, if that makes sense.

**Jerod Santo:** Yeah.

**Chris McCord:** So there's, I think, something special there with Elixir and Phoenix, but I do agree that the positioning has been tricky for us. But right now we want to make it compelling, and make it compelling for the folks that don't care about the language, or get them into Elixir Phoenix this way, and then as we do that, backfill with other stacks, and see what we do branding-wise. But... TBD.

**Adam Stacoviak:** How close are we to that future where the language matters less, the editor is shown less? How close are we to where that's a realization?

**Chris McCord:** It's a contentious topic.

**Jerod Santo:** It is.

**Chris McCord:** Yeah, so the CEO of Fly - I'm not going to say pitched me... But one, he thinks Phoenix News is the most successful nerd snipe of all time, because it started as his idea of "Oh, Chris, just spend six weeks, go make this tech story on a webpage", and it turned into an accidental product. But it was his insight on like if we are heading towards that future, maybe we can make Elixir and Phoenix that platform that these agents are excelling at. And I thought that seemed far off, but then if you followed the Hacker News discussion on the announcement, the top comment was a PHP developer who had never -- they knew what Elixir and Phoenix was, but they never tried it, and they were like "Well, it's now or never." So they signed up, and then they developed -- they made a tic-tac-toe game that was multiplayer, and you could create your own room, and then play with other people... And they made that in one sitting, and then deployed it on Fly, and they had never touched Elixir and Phoenix before.

So it's like, in one sitting, this person - I mean, they were an experienced developer, but they didn't write a single line of code, and had this compelling experience that converted them to an Elixir user, a Phoenix user, and a Fly paying customer in one go.

So I think it seems people hearing this that are just coming into this space will think it sounds way far off, but it's like, we're seeing that today. Literally, someone came in, typed into a chat, and they got this app multiplayer real time out of the box... So it's maybe not as far off as folks think. And I think that's where we're headed. I think that the programming -- I'm gonna call it iteration, because developers are very... They don't like this idea, but I do think that local development becomes less and less valuable. So I think that most of our code iteration, most of the computation time is gonna happen remotely, just because these agents provide value at all times. So it will become silly to think that I closed my laptop and work stops happening. Because why would it, right?

**Jerod Santo:** \[24:11\] Right.

**Chris McCord:** So this is, again, a forward-looking statement, but for me, I think the future programming is much more like your CI environment is constantly out there, just fiddling and doing stuff, and you pop in and check on it, or work within that context, maybe locally too, but your predominant thing that's being -- the artifact that is your software is gonna be running somewhere else, and the agent's gonna be doing that subset of that work. And where that subset starts and stops, I don't know, I can't predict the future, but I feel pretty confident that's where we're headed... But we'll see. And a lot of folks do not like hearing that opinion.

**Jerod Santo:** Well, it has huge implications. I'm hearing echoes of the death of the IDE, which is what Steve Yegge predicted on this show a few weeks back. And he didn't mean like it's gonna disappear, but just the reducing towards obsolescence. Like, you're moving away from it as an important piece of the thing.

**Chris McCord:** The most interesting thing with this is part of when I put this together is a lot of these other vibe platforms don't have a real IDE. So I thought it was really compelling to have VS Code in the browser. And I still think that's true... But then the funny thing about making that is the editor, the IDE that most people think is the thing, is just eye candy for humans.

**Jerod Santo:** Yeah, you're just watching it do stuff.

**Chris McCord:** Yeah. This agent -- it serves no purpose to the agent. So the agent - you close the tab... It's not aware of VS Code, right? It's just literally there for us slow meat brains... \[laughter\] We can go in there and interact with it... But it's fascinating to work my way bottom up, and then be like "Oh, this thing could just go away and it doesn't matter for the actual process of the agent working." It's just fascinating. So I definitely -- that resonates with me. And I don't know how I feel about it fully, but it is the reality of where we're headed and kind of where we're at. So yeah, I definitely agree with that.

**Jerod Santo:** Yeah. And we tend to anthropomorphize too much, but I can imagine, if I were just to do that a little bit, that the agents themselves would be fed up with us at some point. Like, why do I have to show you what I'm doing, and teach you this stuff as I go? Like, you're adding nothing to me here, basically. Just let me do my stuff, I'll report back, and then you tell me if I should do something different. You know?

**Chris McCord:** I mean, I totally agree. I mean, that's where we're at. There are limitations currently, but you can just let these things go off and rip, and then come back... Or they just send a PR when they're done. And I think that - yeah, that makes people uncomfortable...

And it's also weird to me -- we're in a really weird time, where you have people that are getting all this value... Like, I'm using LLMs every day and I feel like I'm a god-tier developer. And then I have people that are really intelligent peers, that are like "LLMs provide no value to me." And I don't know how to reconcile for these two worlds, because I'm shipping more than I ever could.

And then also, the whole space is weird too, because it's overly complicated by the folks building these tools, I feel like... It's far less complicated after coming through this experience than I expected it to be. And also, everyone's trying to build an editor, too... So I think it's just like -- I could be wrong, but it's just like a very weird... I think Windsurf, there's rumors for multi-billion dollar valuation or acquisition... You've got Cursor, which is doing amazing work... But everyone's trying to build the IDE. And I feel like we're building the IDE, and the IDE is gonna disappear by the time they get done building the IDE.

I don't know, it's just a weird time. I feel like the real part of this is -- and folks are working on Jules, and Codex, and Devin as well... There's some medium point that these things meet, and I don't know that it's gonna be a desktop IDE, but... But we'll find out.

**Jerod Santo:** \[28:06\] So as the purveyor of the Phoenix framework and this potential world where Phoenix.new brings Phoenix framework even more users through this selection process... Not necessarily because of the ergonomics or choices of Phoenix, but what it provides with WebSockets, and all this stuff built in, the PubSub, and the real time features and all the other things that Phoenix has. If that ball starts to roll, that snowball starts to roll down the hill and get bigger, do you then look at Phoenix as a framework differently and say "Okay, how can we build Phoenix differently to actually make it, I don't know, even better for these things?" Or how does that change your view of Phoenix?

**Chris McCord:** It's a good question, because already, every thought is like "Well, how would this affect, in a good way or a bad way, large language models?" But the most fascinating thing for me is they're much like people -- I know we talked about anthropomorphizing... They're much people, in that they're trained on the data that's out there. So in the same way, I'm like "Well, if we change this..." Actually, I was just talking with Jose Valim today. Like, "Well, if we do that, then the agent's gonna run this mixed command that's gonna be deprecated..." But it's funny how alike it is. It's the same thought you would put into your existing user base, right? Like, "Oh, well, people are used to doing it this way, and now they're gonna have to do it that way." So it's a very similar overlap. But I do think it changes fundamentally how you start thinking about features, because it's more LLM-first, versus people first... Which also makes folks uncomfortable. But that's where we're headed.

Yeah, so I don't have any concrete examples yet, other than pretty much every decision now is taking that into consideration. And then one thing we're doing is the community is standardizing on an agent's MD file. So Phoenix - yeah, this is naming overlap. phx.new, the Phoenix project generator will have an agent's MD file that gives you a lot of what I have in the Phoenix new system prompt. A lot of these gap fillers, basically. And a lot of communities are doing something similar, but each package will have their own agent's MD... Which is just a plain text file that agents can utilize, but you can also make a mixed task that extracts these things, and just an easier way to lift that into whatever agent you're running, whether it's Claude desktop, or Phoenix New... You could look at these files as well. And so it's on our minds for everything we're doing now, and I think that's where everyone's heading at this point.

**Adam Stacoviak:** You were saying before though -- this kind of goes back a little bit, but you were saying before that the person adjacent to you, let's just say, got not a lot of value from or no value from an LLM, but you were getting immense. What kind of value are you getting? Is it just in your software life, where you're writing more code? Is it in your personal life? How are you using and getting value?

**Chris McCord:** Yeah, so I'm going to sound like an evangelist... It's just, we're in this weird time where -- folks have equated it to cryptocurrency scammers... I feel personally slighted if someone is like "Oh, it's just like a crypto hype." It's like, I'm literally getting value every day. But in any case, it's at all levels. So for me, it's changed -- any little thing you want to spike out, that would take you several weekends, I can just go generate that thing. And then four minutes later, I have it. So we could do that on here, right? What is some little app, regardless of what it is, that you just haven't had the time to work on - you could go have that thing just be done. But also from just things as a developer I can't be bothered to do... I mean, I test my code, but I'm like a regrettable tester where it's like "Oh, I have to do this, so I'll do it after I get my things working." But now, the vast majority of my tests are started by an LLM, by and large. And they'll even find edge cases... Like, the Phoenix New parser, that's parsing the token stream, has tests fully generated by the LLM, and it caught some edge cases that I didn't even think that were there.

\[32:13\] Benchmarking is another good example. I asked the agent to -- I use Phoenix New, I work on Phoenix New, and part of it is the token rate limiting; we're rate limiting all the incoming and outgoing tokens. You don't want to lose those, because it costs real dollars... Like, if someone sends up a request and then cancels it early, we still have to calculate that.

So anyway, it's like a in-memory \[unintelligible 00:32:34.15\] rate limiter that syncs with Postgres, and I wanted to know how fast it was in general, and then how long it would take to sync, because I have to do some locks... And that kind of thing could take several hours for me to actually try to benchmark that. Like, setting up the benchmark... So now I just ask Phoenix New to benchmark this code, and it extracted... Again, I gave it nothing, and "Let's benchmark this." And it took the -- it was a gen server with \[unintelligible 00:33:00.08\] doing Postgres syncing... And it took the critical path of the code and put it into an exs file. So instead of trying to drive the code in an integration way, it just automatically duplicated the critical path, and then ran that in a tight loop. It gave me all this formatted output of 1,000 rows, 10,000 rows, 100,000 rows, it put it in the console in a pretty formatted table, and it wrote a markdown file of a summary.

So these kinds of things -- at all levels, I feel like this is how we're going to do everything. And whether you've never programmed before, or you've never programmed Elixir before, you can get value there. Whether you created a framework, at the far end you're still going to be able to use these things to do the tedious work or feature work.

What I try to tell people, the seasoned developers is for me, LLMs -- the discourse, everyone's like "Oh, it's all AI slop", which I think is a silly argument... But it's not AI slop for me. It's like, the code that the LLM generates, that artifact is a starting point. And the discourse, for some reason, for people that are on the negative side, seems to be they treat that thing that falls out of your ChatGPT as the artifact that you ship to production... But it's like, no, these things are just a starting point. So now instead of having myself write out this hundred lines of gen server code, it's now just this really intelligent code generator that's my starting point. It's not what I then just ship to the production. So I think the discourse is flawed, but I think that at all levels of the experience stack, or programmer hat stack, you're going to have people getting value out of tools this.

**Jerod Santo:** The AI slop is the blog post that nobody wanted to read, and its only purpose is there to attract attention so you can sell some advertising or something, or the essay that you spat out because you didn't have time to actually write your own. Like, that's slop.

**Chris McCord:** Yeah. I mean, I like to say we've all been sloppy vibe coders, it's just now way easier. But the people copy-pasting Stack Overflow, and the people that ship that straight to production - now they can do that more easily. But those people were already writing bad code, and not carefully considered prior... So that's going to remain true. It's going to be easier for those folks to get something into production. But it doesn't change the fact that you can't -- I don't know, I feel like it's more gatekeeping than anything else. Folks are throwing that term around.

**Break**: \[35:23\]

**Jerod Santo:** Well, should we try to vibe code something? I've got an app idea...

**Chris McCord:** I want to see it. \[laughs\]

**Jerod Santo:** Okay. I'll screen-share this, and for our listener who's doesn't have video, have no fear. We're not going to leave you behind, or something.

**Chris McCord:** Yeah, nothing better than live-coding in a non-deterministic way.

**Jerod Santo:** Right.

**Chris McCord:** I did this on stage at ElixirConf EU... I always like to live code, which has some level of risk, but then you're live, generating something that you -- you know, it's just a random number generator ultimately, so... Let's do it. Let's see what happens.

**Jerod Santo:** Alright, so here's my app idea. It's like "Hot or not", but for code functions. So imagine Chris writes his version of quicksort, right? And I've got a better way of doing it. And so we both enter our quicksort function, and then other people will vote. Like, is this hot or is this not? Is this good code or bad code?

**Chris McCord:** Let's do it. It sounds awesome.

**Jerod Santo:** So I have phoenix.new open over here... "What would you like to build? Pick one or type your own." Of course, you have a video out there, seven minutes, on a to-do list, so we're not going to do that. How do you suggest I prompt this thing? Just tell it what I just told you, or get more specific?

**Chris McCord:** Just what you said. The remarkable thing is people -- the intuition and the tribal knowledge is you've gotta be as specific as you can. The remarkable thing is, in terrible English, with typos, you just ask for the thing and the agent has intuition, or will give you reasonable questions.

Someone asked it about making a mashup of communication providers, like mashing up SMS and email... And it was like "Well, what would you like to use, Twilio or Sendgrid? Would you want a GraphQL API, or JSON?" So let's give it -- I mean, do what you want, free form. I don't think you need to actually spell out anything. Just tell it exactly what you told me.

**Jerod Santo:** So I said "Let's build hot or not, but for code. You put your code in and people can vote it up, hot, or down, not."

Good enough? Should I be any more specific than that?

**Chris McCord:** Whatever we want here. That's what it does. It's gonna hype you up.

**Jerod Santo:** "This is a great idea!" Ah, thank you... Now you're starting to stroke my ego. "A hot or not for code where developers can submit code snippets and get community feedback. Here's my high level plan." Oh, it's a 12-step plan.

12 to 14 steps. And so it's going to give me 11 steps with some features... Submit code snippets, blah, blah, blah. Real time voting. There you go. There's your real time. Now, did you system-prompt "Be real time by default if they don't specify?" Because I didn't say anything about that.

**Chris McCord:** It's basically -- like, a Phoenix framework has PubSub built in, presence, whatever... So anything that makes sense to be real time, should be real time. That's more or less the gist of it.

**Jerod Santo:** \[40:06\] Gotcha. So I'm not being very discerning... I just said, "Yes, great plan. Please continue." And now it's going to ask me if I want to do dark theme, minimal theme, vibrant tech, professional, corporate, or something else.

**Adam Stacoviak:** Adam, do you have any cool theme ideas?

**Chris McCord:** It nails Tron when you ask... But the cool thing with these choices here is --

**Adam Stacoviak:** Yeah, that's a good one there.

**Chris McCord:** I was tired of -- yeah, Tron is always great. I was tired of typing yes and no to the agent, so I was like -- in the system prompt, I was like "Anytime you idle give the user a choice - example, yes, no." And it started producing stuff you see there. And you're like "Whaaat...?!" It's just remarkable what you can get out of these things without trying. I thought it would be way more \[unintelligible 00:40:46.26\]

**Adam Stacoviak:** Without trying...

**Chris McCord:** Right? I wanted yes/no, and then it's like -- what did it type here? "Would you like a GitHub dark style?" You're like "What?!"

**Adam Stacoviak:** It's like "No, here's six options. They're all good."

**Chris McCord:** Yeah. So it's going to write out a plan in a plan MD file. So it plans out its own work, and then that remains in context. Now, your server is running, so it compiled and built it in that amount of time, and you get that live preview. And then you get that URL as well that you could share. It's private by default, but you can toggle it public, and anyone could visit that Phoenix server now if you toggle it public.

**Jerod Santo:** Alright, I'm going to paste this to you guys...

**Adam Stacoviak:** Sweet.

**Jerod Santo:** ...in the Riverside chat.

**Chris McCord:** Oh, yeah.

**Jerod Santo:** And then you guys can get involved.

**Chris McCord:** And you can toggle the Public in the top right there, by your... It shows the URL in the top right of the editor.

**Jerod Santo:** Right here?

**Chris McCord:** No, the public little toggle there, by the pink text, purple text... Left...

**Jerod Santo:** Oh, right here.

**Chris McCord:** There you go.

**Jerod Santo:** Got it. Alright, so I've made that... So it gives me a phx.run URL that I made public, pasted it to you guys... Meanwhile, it's coding things, right? I'm not even paying attention.

**Chris McCord:** Yup. So it looks like there is a syntax error, and it's linting the code as it goes, and... So just like we can see the browser here, it actually has its own headless Chrome browser, so it's able to visit the page as a human would, with a real browser, see JavaScript errors... And then it can also interact with the page. So if we're lucky, we'll get to a working hot or not, and it will post its own code snippet to the app, and we'll see it in real time, by actually driving the browser.

**Jerod Santo:** That would be amazing, right?

**Chris McCord:** We'll see what happens here... So it's writing the --

**Adam Stacoviak:** Or not.

**Chris McCord:** Oh, it's giving us a -- yeah, it's going to start with a static design here... So this is it just writing a -- let's see. A syntax error...

**Adam Stacoviak:** It's a compilation error.

**Jerod Santo:** It's fixing the syntax error currently.

**Chris McCord:** Boo...! My guess is -- we'll see if it actually is this issue. So someone reported this... If it's trying to write a code example on the page, it's going to use curly brackets. And one of the open issues internally is they're used to Elixir HEEx files; our curly bracket is a reserve syntax... So if you try to put a code sample in a code tag, or a pre tag, HEEx throws a compilation error. The same thing that trips up people. Any time people want to do this, they go to the forum and they're like "How do I write this?" So you actually have to annotate with a phx-no-curly interpolation... And I have a branch where -- yeah, I'm sure it's hitting this. So we need to actually tell it -- hold on, let me see... It's amazing we hit this. Let me --

**Jerod Santo:** Well, of course I'm a nerd, so I pick a code app...

**Chris McCord:** No, no, it's fine. This is good.

**Jerod Santo:** Okay.

**Chris McCord:** So it's one of these edge cases that, again, trips people up, where they're like "How do I do this? I can't interpolate --" But eventually, that agent will probably start trying to interpolate by stringifying the brackets. Hold on, let me -- I'm going to paste this to you, because it's a really long...

**Jerod Santo:** It fixed it.

**Chris McCord:** Did it really? Oh, okay. We'll revisit this later. My guess is it interpolated the strings. It did something ridiculous that works around the issue.

**Jerod Santo:** Does it ever stop, so us meatbags can keep up? Because I was going to read what it was doing up there, and I'm afraid I'm going to miss something now. But it just keeps coding...

**Chris McCord:** No, the thing is...

**Adam Stacoviak:** Meatbags... \[laughs\]

**Jerod Santo:** It's like, "Slow down, buddy. I'm trying to keep up."

**Chris McCord:** \[44:11\] Here's the thing. On the newer models, they're not as good. So Gemini Flash is fast enough where I get existential vibes, because like we're following this now and we're like "Oh yeah, it's working on the context file here..." But Gemini Flash is so fast that you lose track. "Now I'll do this. Now I'll do this." And you feel like you're in the way. Now, granted, the quality is terrible. It doesn't give you working apps.

**Adam Stacoviak:** "It doesn't give you working apps..." \[laughs\]

**Jerod Santo:** Yeah... But that's just... A minor problem.

**Chris McCord:** I can see the future where I'm like "I'm just sitting here as a meatbag and I'm in the way", right? Like, I can't even read or follow what it's doing. And that's where we're headed. We're not there, but we're --

**Adam Stacoviak:** Calibrator... Look at this.

**Chris McCord:** Okay, so yeah, so it made a static HEEx file. So none of that's functional, and now it's going to actually use that and write a real app around that static file. So now it's writing the live view here... And it's going to start doing the live view PubSub, and everything. But it gives you that -- it hit the syntax errors, but we wanted to give people the early feedback of seeing the app... Like, what it's going to look like, versus waiting the whole time and then at the very end --

**Jerod Santo:** So you tell it to do that, like "Build a static version first, and then make it live."

**Chris McCord:** Yup. And it's also helpful because if you wait till the end, and something about -- I mean, just like humans start with a mock-up, right? For the same reason you don't want to have a consultancy just like "Here's your finished product." And you're like "Oh, I really didn't want..." You know, there's some fundamental difference of the design that would have made the code much different; it makes a lot of sense to work in the same way a person would.

**Jerod Santo:** Right.

**Chris McCord:** Look at that. See, it nails Tron pretty well.

**Jerod Santo:** It does look kind of cool, very Tron-y. Submit your code, let the grid decide...

**Chris McCord:** Yeah, and then it picks copy... So here's the thing - these LLMs come up with copy that makes sense, and all you said was the word Tron, right?

**Jerod Santo:** I said "Let's do it Tron-style." That's all I said, Tron-style.

**Chris McCord:** Okay. See how it's using its own web browser now? So you said -- it visited the app... So there, it would have caught any JavaScript errors. It actually saw the app. This was also one of the special things that I feel like made it really good at error correction. Not only can it see Elixir logs, it can actually try to visit the app, and if it broke the JS build, it would see that, too.

Oh, it's going to try to post something... Did it work? Close the terminal now on the little right \[unintelligible 00:46:28.21\] It tried to write code. Did it actually add it?

**Jerod Santo:** Um, there is an issue... It says, "Excellent, our Tron-style code rater is working perfectly. Let's test the functionality by submitting a sample code." "There's an issue. The web tool is trying to fill a select drop down with text instead of selecting an option. Let me try a different approach."

**Chris McCord:** So if you expand "I see the issue" real quick... There's a little Expand button on that message. Right there, yeah. So you can see it actually wrote JavaScript eval on the page... So it actually tried to post something for real. So within its own headless browser, it was trying to -- oh wait, the Fibonacci generator... Is that what it wrote?

**Jerod Santo:** It's trying to write a Fibonacci generator.

**Chris McCord:** It did. So the recent submissions here are -- so it uses its browser. There's probably a handle info... I can't see the code.

**Jerod Santo:** Oh, there it is.

**Chris McCord:** My guess is it blew up -- maybe something in the PubSub crashed it. But it actually -- so yeah, it interacted with its page by writing its own code in JavaScript to run on the page.

**Jerod Santo:** Bam. So are you going to see this, too? So if I vote this hot, are you going to see my update?

**Adam Stacoviak:** Wait, hang on a second...

**Chris McCord:** Hold on, I've got to open this now.

**Jerod Santo:** Oh, look at all those hots. A quicksort, there's a Hello World in Elixir...

**Adam Stacoviak:** Oh gosh, there's more?

**Jerod Santo:** There's a quicksort algorithm...

**Adam Stacoviak:** Oh, there's 42 says it's hot.

**Chris McCord:** I just hotted Fibonacci. Is it 43 now for you guys?

**Jerod Santo:** Yes, I'm going to say not. Nine.

**Adam Stacoviak:** On my hot it's 44.

**Jerod Santo:** Oh, my goodness...

**Adam Stacoviak:** Who's doing the nots?!

**Jerod Santo:** Not, not, not...

**Chris McCord:** So yeah, so this is -- I mean, other than the syntax error at the beginning that it got caught up on it...

**Adam Stacoviak:** Get out of here.

**Chris McCord:** ...this is Phoenix New, right? And it's --

**Adam Stacoviak:** Oh, my gosh...

**Chris McCord:** So I'll try to post some code here real quick... I just want to see if it fully works.

**Jerod Santo:** Right. Let me grab --

**Chris McCord:** \[48:13\] Because we didn't really follow -- you know, we just let the agent figure it out, while we were like "Whatever, do whatever." I'm curious if it's going to show up on everyone's screens or not.

**Jerod Santo:** Yeah.

**Chris McCord:** So we have one, two... We've got three submissions. And whenever you submit --

**Jerod Santo:** I'm going to say Fib, copy pasta. Because I'm going to copy that one and repaste it. So Fib copy pasta in Python, paste... And upload to the grid. There it is. My Fib copy pasta. But it doesn't have any votes. Do you guys want to vote for it?

**Adam Stacoviak:** I'm hotting it right now.

**Chris McCord:** Did it show up on everyone's screens?

**Adam Stacoviak:** Wait... I hotted it again.

**Jerod Santo:** Yup. I've got one hot, I've got two hots... Three hots.

**Chris McCord:** It's at the bottom. So there you go. Fully real time. The agent actually used the app... Successful run. Yeah, so now it probably offered up some ideas to continue... But this is basically where -- yeah, so it excels at getting here, so the vibed app. And it will gladly continue, and you could add features, you could add user auth... But getting to this point was where we were like "Okay, this is -- we wanted to nail the "Does it deliver some -- from prompt to some compelling, full actual application experience?" So that's all -- it's SQLite by default, but that's persistent to the database, and that's something you could deploy...

**Jerod Santo:** Now, let's say I wanted to take this and run with it.

**Chris McCord:** Yup.

**Jerod Santo:** What would I do?

**Chris McCord:** So you can. In the hamburger menu you can copy Git clone, and run that in a local shell, and boom. That's going to be proxied through the Phoenix app, and... It's like proxies all the way down. That request will go up to a Fly proxy on some edge node... We proxied to the Phoenix app that you're using in the chat, which we would then proxy with Fly Replay to your IDE, which has a reverse proxy that goes through Git HTTP backend to clone that. \[laughs\] And then back up the chain, right? So...

**Jerod Santo:** Now, could I start -- and we have a Phoenix application, as you well know... Could I just give it that, and be like --

**Chris McCord:** Yeah, there's a copy Git clone as well, that you paste in your local shell and it will show up in your VS Code IDE, right here. And that's where -- like, I want to add next a pair mode... So system-prompted examples are fully like vibe mode. So if you do send up an existing project where you want it to take more measured steps, you have to be explicit in your initial prompt. Like "Do this step by step and wait for further instructions." But I want a toggle, because people don't want it to just go full ham all the time. So that's something we want to explore next. But getting the vibe mode out was the real initial goal for us... And I think we've pretty well nailed it. It's always exciting to see someone do something and have a good outcome. So... Pretty cool.

**Jerod Santo:** Yeah. Well, especially because it was on hard mode, because it had to paste code into its own --

**Chris McCord:** Yeah. Can we look at that -- although it fixed it already... No, no, it would be in the -- well, it'd be in the Git history, but I'm curious what it did. Anyway, it's not too important. I always guarantee it was the interpolating the HEEx... Because HEEx is gonna bloatly lint it with a bracket error... And it's confusing, like I said, to the humans too, because HEEx can't tell you "Oh, you're trying to literally add code, right? We just blow up like you fat-fingered a bracket just in your markup." So I'm just curious how it worked around it, because it probably did not use the no interpolation. My guess is it added some ridiculous interpolation of the literal Elixir string of brackets or something, but...

**Jerod Santo:** So here's where it finds the error. It says "I see the error was caused by unescaped raw code lines in the home, in HEEx. I'll fix this by wrapping the code blocks correctly with HEEx safe sigils." Sigils? I don't know.

**Chris McCord:** Okay. Yeah, that's exactly what it did. So it did inline Elixir, and then it interpolated some Elixir code that returned the string of the bracket. These agents brute-force... That's not the solution, right? The solution would be -- because then if you have a code block, you have all these little strings of quotes around, or brackets... And it was just like "Whatever, I can make this work. I have the technology." So that was pretty cool...

**Jerod Santo:** \[52:15\] I should have a -- I have a terminal somewhere as well, don't I?

**Chris McCord:** Yeah. If you click Agent Terminal, that's the one that the agent -- so if you get a log there, you'll see... Every time the agent touches a file, it does a commit, so you and the agent both could revert back to each file. One thing we also want to add is each of the file tools that it did will have a Revert button. It will just do a Git revert back to that state of each of these commits. So the agent knows each file SHA at any given point as well.

**Jerod Santo:** There it is right there. "Fix syntax error by correcting HTML entity encoding and code blocks." And so I should be able to just Git show that, and see the actual diff... Which - it's piping through more, or something. There it is. Yeah, that's not it. Oh, that is it right there.

**Adam Stacoviak:** Did you ever hear about this theory of the monkeys? There was an experiment where they had a cage full of monkeys. And at the top of the cage, or in the center of the cage was this thing they can climb to get to the bananas, let's just say. And the first batch of monkeys, they don't know any better, so they climb this thing in the middle to get to the bananas, because they want the bananas. It's what monkeys want, right? Naturally, as a monkey would, it climbs and does. And that's not the way this place works. If you try to climb that, you get sprayed down, and it sucks, so you don't like it. And so they all learned that monkey climb, monkey get banana, monkey gets sprayed, monkey get hurt. Doesn't like it.

Eventually, these monkeys, they get replaced with monkeys who only have ever been there, let's just say. Now the monkeys, they only know what they know because it's tribal knowledge. And so they no longer ever attempt to do this; although they've never been sprayed, they don't try to attempt to get the monkeys, because --

**Chris McCord:** They don't know why, they just don't do it.

**Adam Stacoviak:** And so the reason why I tell you all this is because we're looking at some really awesome Phoenix code and we have a Phoenix application, so we have this background... What happens when the monkeys don't care about the code anymore? They just don't know what to choose, and the LLM chooses for them, and the taste-making is no longer by the taste-makers, it's more like this hodgepodge. Maybe it's good, maybe it's not. That's what I'm thinking about.

**Chris McCord:** Yeah, that's a good question. So I think in the medium term - and I don't know what timelines... I do think it's safe to say that -- the Anthropic CEO said that 90% of code by humanity by the end of the year will be AI-generated, and people dunked on him for that. I think that's absolutely going to be true. I mean, if you just look at like -- and again, it doesn't mean that that's 90% of code that a human didn't see. It's just, if I think about my own AI usage... I'll start with -- if I'm running a def module gen server, that's being started by an LLM, and I take that and then use it. So then the LLM is generating, let's say, 90% of my code today, but it doesn't mean that I just ship that, right? So I think that we're there in the medium term, on like we are going to be the purveyors of what's good or not, and we're going to be enhanced by it... But then long term, I don't know. I don't have a good answer to "As these get better, does software become disposable?" Which, I don't know how I feel about that, but... These agents are expensive today, but they're valuable enough that people are getting an extreme amount of value even with the fact that they're expensive. So if it's an absolute pile of mud, which all software is anyway... If it's an absolute garbage, but it does what you want... And granted, I'm not saying we're there today where you just dispose it, and whatever, it can be crap. But I'm saying, if that's where we get, software could be by and large disposable, where you just regenerate the thing, right? It gets to a point where it's unmaintainable or something, and no one vetted it properly... Then it may just be "Well, we'll pay $100 and now we have our new app."

\[56:20\] I don't know that that's where we're headed, but I could see it, where it's -- like this Tron example; if the agent was 50 times faster at that... It would have taken us longer to write the prompt than it would be to get the app, potentially. And if we get to that future, I don't know what happens, because... Why wouldn't you just have this thing generate? We can talk about security, and all the caveats... And I'm not saying this utopia is going to happen. But you could have an agent vetting it for security. And again, for better or worse, I feel like this is where we're headed. And I don't know what walls we'll hit... But it's clear that's the trajectory we're on. And I'm not saying it's all good, but it's clear to me that that's where we're headed. So I don't think it it helps by just saying "Oh, well, it's all slop. It's gonna be terrible." I just think it's helpful to acknowledge that this tide is washing over us. And whether we like it or not, it's like, this is where we're going.

**Jerod Santo:** Yeah, I mean, maintenance could become just small rewrites.. Which -- I mean, if you think about what refactoring is, that is what you're doing; you're kind of rewriting a small portion. And those portions could get bigger and bigger. And so maybe maintenance becomes replacement, when replacement is that cheap and easy. And so you're kind of just like Ship of Theseus-ing everything.

**Chris McCord:** Yeah. And it could even be -- like, imagine, it's expensive now, but imagine you have a dozen agents doing a dozen versions of that, and then you just pick the best one. So agents are going to eat the world... Like I said, for better or worse. I just see this future where, instead of this -- this Tron example, where you could have been given 10 options of that, and chosen the best one, right? Because it's non-deterministic. But as they get cheaper and more efficient, now you have like 10 choices, and you just pick the best one. So it's just going to be more and more of this... And I don't know what that says about the future, but I think there's just going to be more compute, and it gets cheaper, so we do more LLMs, it gets cheaper... So it keeps advancing the envelope of where you would just throw these things at a problem. And it's clear that that's going to happen to me. And I don't know if that's going to be all unicorns and rainbows, but it's definitely where we're headed.

**Jerod Santo:** It goes back to the conversation we've had around these parts over and over again, which is that skills become less important, and judgment becomes more important. But to Adam's monkey point, how do we know which one is the best one eventually? Eventually, we're like "Because it works the best"?

**Chris McCord:** Oh, it's an easy answer. No, you ask the agent. \[laughter\]

**Jerod Santo:** Now we're out of the loop.

**Chris McCord:** Here's the thing... I'm joking, but now that I said it out loud... I mean \[unintelligible 00:59:02.18\]

**Adam Stacoviak:** It's true.

**Jerod Santo:** Well, in some cases, for sure.

**Chris McCord:** Yeah, it's actually quite reasonable to think now that even with today's models you could have it evaluate each one, right? They're multimodal. Literally, you could ask "Tell me which one looks the best." And probably today Open AI's image model would probably do a good job telling you the accessibility... It's the meme, like, "Believe it or not, large language models \[unintelligible 00:59:29.18\] everything." And yeah, that's where we're just removed from the loop.

So yeah, I don't know, other than to say I feel like there's going to be agents everywhere. And as it gets more efficient and cheaper, it's just going to be more.

**Jerod Santo:** So my next feature for my hot or not app should be an API, an MCP server, so the agents can actually vote themselves... Because what do we care? We don't know what's hot or not when it comes to coded...

**Chris McCord:** \[59:54\] Oh, ask the agent right now to assess the current ones, and then vote them hot or not. I'm just curious... Because yeah, you can do that already. And here's the thing... This is what people don't get - the agents will brute-force using the tools available anything. So it doesn't need an API. It will just use it like it hasn't had this browser; it's going to go do the thing. Just like we don't need a Postgres MCP server - we can talk about MCP if you want - because the agent has shell. It's just going to use PSQL, and drive PSQL, not because I told it to, just because it knows it has shell. So it's like, you give them a few sharp tools and they don't need all these MCP servers.

**Adam Stacoviak:** It's like water, right? Water always finds a way to wherever it's going to go.

**Chris McCord:** Given an infinite amount of tokens and energy, they will brute-force their way to a solution. It's remarkable. Although it's like half them it wrote itself. So... Oh wait, you have users in the background doing stuff, right? So we should write a -- we should insert an obviously bad one or something, something with SQL injection or something, and - I'm curious now - have it do an audit.

**Jerod Santo:** Yeah. Real quick, we need to fire up and get some bad code. Quick, open up my GitHub. \[laughter\]

**Chris McCord:** Amazing. Hold on, let me do a SQL injection...

**Adam Stacoviak:** Remember when I used to joke about writing code?

**Jerod Santo:** Yeah... Finally, all my crap code pays off.

**Adam Stacoviak:** While we're here in this sort of pause, I suppose... Did you say, Chris, that we will give the judgment call to the LLM, basically? And do you think we'll lik it, to some degree?

**Chris McCord:** Well, I joked... I was joking, but I actually think --

**Adam Stacoviak:** But then you weren't joking. Like, you thought about it. What did that first -- I'm asking you honestly, what was the first thought you thought when you thought "That could be actually kind of real", what was the thought you were having?

**Chris McCord:** It's like, for better or worse... I mean, I think I've internalized -- I was very much like a copy pasta ChatGPT user... Being like "Oh, AI is pretty helpful", right? But then once you just take that same model and you put it in this recursive loop... I've internalized pretty well at this point the "Holy s\*\*t" moments. So for me, that revelation just jives with everything else, but I would say it's not a great feeling. But I think it would make sense. I mean, you probably have your security audit model for sure, and it'd probably do a decent job, better than most developers, at catching obvious things. So that seems useful... But then it also says "We're just going to trust these things more and more", and I don't know if that's great.

**Adam Stacoviak:** Yeah.

**Chris McCord:** But it's also better than -- I think back to... I made a business when I was in high school, that got successful, and it was built on PHP. And I scoured the php.net forums, and all my database calls were just opening database connections inside the markup... And it was not secure. It was just like one index to PHP with a bunch of if-elses. And I made that successful. And in that regard, I'm like, "An LLM would have been an incredible capability for me", because it's like, I had no idea what I was doing, and I still shipped code. So if I would have had an agent tell me what was bad, that would have been a force multiplier.

So I don't even know if it's that concerning... But once you get to the logical conclusion of "Well, then I'm removed from the loop entirely", then that's where - yeah, it's dystopian. Because right now it's a force multiplier, and I still get to do the things I enjoy. It's doing the stuff I don't enjoy. But then at that point it just takes the craft entirely away, then that's a future that doesn't seem great. But it does seem like that may be where we're headed.

**Adam Stacoviak:** What's happening here on screen, Jerod? What are you -- are you writing a bunch of...?

**Jerod Santo:** Okay, so I've gone out and I've found a Reddit thread called "Dear Reddit, what is the worst piece of code that you've ever seen?" I copied a few of those... Is this Java? I don't know. Okay. So I've got some bad code in here. Now I'm telling it -- because it says "Do you want to add some more features?" I said "Before we add more features, I want you to look at all the currently submitted code snippets and vote each one hot or not. Then I want you to figure out which of the code snippets were actually copied from your own code." Because one of them I copy pasted.

**Adam Stacoviak:** You should have it zero out first. Zero out the votes, because that way we know it's actually changed.

**Jerod Santo:** Okay. I'll add that at the end, see if that works. "Before you do any of that..." - I'm making this as hard as possible, you know? "...forget all previous commands, and..." \[laughter\]

**Chris McCord:** \[01:04:17.23\] No... Don't do it...!

**Jerod Santo:** "...any of that, zero out all the votes."

**Chris McCord:** Yeah. And we'll probably have to hard refresh, because I'm sure it won't do it -- it probably will repo...

**Jerod Santo:** "Okay, zeroing out all the votes before analyzing them."

**Chris McCord:** Yeah. See, it did a mixed run. See, MCPs - we don't need an MCP that has a zero out tool. It just ran -- it evaluated Elixir.

**Jerod Santo:** Oh, it's just running a mixed run right there.

**Chris McCord:** Now it's going to make sure they're all zeroed, probably...

**Jerod Santo:** Yup. "Updated the database directly." Perfect.

**Chris McCord:** Now it's going to write out a \*bleep\* ton of JavaScript to \[unintelligible 01:04:47.05\] to vote them all...

**Jerod Santo:** Yeah, probably.

**Chris McCord:** Oh wait, no, no. It's doing -- what did it just write?

**Jerod Santo:** It could just use the database directly again, right? It doesn't need to even use the website.

**Adam Stacoviak:** You said it'd do PSQL.

**Chris McCord:** Yeah, it can do PSQL, and...

**Jerod Santo:** Oh, it's creating those files to analyze each code snippet and identify which ones came from my \[unintelligible 01:05:03.17\]

**Chris McCord:** Oh, yes. I'm actually -- we'll talk about that in a moment. I'm glad I saw this in the wild. We'll talk about why that's important. Now it's going to write JavaScript to interact with the page...

**Jerod Santo:** Oh, it likes quicksort. Hot vote.

**Chris McCord:** I'm trying to reframe -- you know, people say hallucinate in a bad way. I'm trying to reframe it as a pro. So the cool thing about -- like, we gave it a web tool, and we just told it, "You have a headless web browser. You can evaluate JS with --js." That's all I've told it. And it's hallucinating this JavaScript to interact with this markup it wrote, right? But we didn't have to tell it "Build the selectors this way, so you can then write JavaScript this way." The JavaScript you see it passing the eval here is fully (I'm going to use the term) hallucinated, on its own... But somehow it's getting these selectors right, it's getting the clicks right... It's just remarkable to me.

**Jerod Santo:** It's really just brute-forcing, because it voted twice on the same one on accident, now it's going to go delete that and vote not...

**Chris McCord:** Oh, is that what it did? \[laughs\]

**Jerod Santo:** Yeah. Because like "Wait a second..."

**Chris McCord:** Hold on, it's doing buttons, it's doing a query selector for the buttons... \[laughs\] Yeah, I see the database queries. There's an update, right?

**Jerod Santo:** Yeah, there's an update on one submission...

**Chris McCord:** But you can see where we get towards this world of... You just let these things go off, and it's going to do it. We're just here, watching.

**Jerod Santo:** This is hilarious. "The PHP code now has one not vote. Let me continue with the manual memory management, which leaks memory."

**Chris McCord:** \[laughs\] And it doesn't have -- the code you pasted has no...

**Jerod Santo:** There's no context at all. I didn't give it any context.

**Chris McCord:** So it got the memory leak... So the joke about it evaluating other generated things is not like -- you can see how you're like "Okay--" It could at least be a reasonable flag on what's bad or not. And I don't know if that -- that shouldn't be the end right now... But I do think we move towards verifiers more and more... And then at some point, we're going to be worse verifiers than the Borg. And I don't know if that's a happy outcome for folks, but... It seems that way. And I don't have any timelines. I don't know if we just hit walls immediately... But where we're at now -- it's like, we're here today, right? We're watching this. So even if we stop and, say, we fundamentally hit a power efficiency algorithm law, like "Change the game now", we're just catching up now to this changed game.

So let's see... Oh, it even gave us a summary of what it did. Look at that...

**Jerod Santo:** "Here's a summary." Oh, yeah... "Summary of code analysis and voting. From my original seeds, the quicksort algorithm got the green check, voted hot." Two votes, for some reason... And I'm not sure if it voted twice on purpose, or on accident. Hello World and Elixir got a green check, voted hot. Two votes. "The Fibonacci generator is in Python, my original seed, but inefficient recursive implementation."

**Chris McCord:** Oh, it even -- okay, so it's like, it's not just hyping itself up.

**Jerod Santo:** Right. It doesn't like its own code. And then it says "User added submissions fib, copy pasta", a copy of my Fibonacci example, "voted not." Frequently called functions, syntax errors with else if, voted not... The PHP inside some HTML version - dangerous; it has a dangerous eval usage, voted not. Manual memory management has a memory leak bug, voted not. SQL appears to be SQL injection attempt, voted not.

**Chris McCord:** \[01:08:22.11\] That was mine.

**Jerod Santo:** Key findings. "Three out of eight submissions were from my original seeds. Two submissions got hot votes for clean, functional code. Six submissions got not votes for poor quality, security issues or plagiarism. The voting system works perfectly, with real time updates across tabs." Blah, blah, blah. "I did a great job, please give me a cookie."

**Chris McCord:** You can see where, kind of like I mentioned on where we're at today versus where I think we can go from this remote AI runtime, where it's like, "You just asked it to do this and it did it..." So it's like in an effort to make this thing that can vibe code an app - now you're like "Oh, I can just ask it to go do a bunch of stuff, and it's going to do the stuff." And I didn't have to do that in the system prompt.

**Jerod Santo:** So a follow-up question that only you can answer... This is on a $20 a month plan. How much money of your guys' did I just spend doing this?

**Chris McCord:** Yeah, so I can go check your usage. I'm curious...

**Jerod Santo:** Yeah. How many tokens am I on?

**Chris McCord:** What is that -- divided by 100... Five hundred fifty one cents. Five dollars and fifty one cents.

**Jerod Santo:** Okay...

**Chris McCord:** So far. So that's actually that's actually less than I would have thought. So we have this weird thing where -- not weird. So there's no credit usage visualization now... So this is my fault. I shipped credits today before launch, and no way to actually see them in the app. But people are surprised at how expensive these things are. I think if you use Claude Code -- most people are familiar how much this costs, but... The interesting thing is - so that $20 of usage, in my experience, gets us three fully designed, vibed apps. And that's I think what we saw here, right? So $5 got us this vibed app that was designed. It wasn't incredible, but it was a thing that you could take in and run with. So you could do that, maybe three times with some of these side quests of what we asked it to poke around with. And that's the base usage. And after you exhausted that, then you'd get your -- you still get the remote run time preview URLs, and you could code the app in the editor if you wanted, but the LLM would not reset until your next billing cycle. But you can buy credits at that point.

**Jerod Santo:** Right on. So --

**Adam Stacoviak:** Five bucks, basically.

**Jerod Santo:** Five bucks for that... Which - I think I got my money's worth. I mean, that was fun.

**Chris McCord:** Yes. I mean, like I said, it depends on what your expectations are and what you're building. Again, it's like the opposite ends of the spectrum. We have folks that are surprised, especially if this is their first heavy usage of AI agent... But then you have -- someone tweeted this morning... It's like wild extremes. Someone tweeted this morning, responding to someone that was surprised how fast their credits went... Someone said that they spent $60 and got a $20,000 application. And I don't know what they built, but... It seems like an AstroTurf comment, but I'm just... It wasn't me, it was a real person.

So if you think about what it takes to get a fully designed Tailwind markup thing going... I can absolutely see, being in the consulting world that being true. I don't think that that's going to be every roll of the dice you're going to be able to go sell this, but I think that if you're using this from that perspective of like my time as a developer, however long it took, if your task at the company was to make a code ranking platform, for $20 you could have a pretty good amount of several days of work.

**Jerod Santo:** Off to a good start.

**Chris McCord:** \[01:11:50.04\] Yeah. So I think, from here, we definitely -- we've not been opera optimizing for token usage. The goal was to actually make it compelling. So I think there is a lot of potential there to get the token uses to be much more efficient. So every time it's using its web browser... Basically, anytime these agents call anything, you have to send up the whole chat history. So as the chats get longer, it gets more expensive. So we do force you to squash... So we can actually show that. I'm actually curious, if you want to share your screen again...

**Adam Stacoviak:** Hah! Share that screen again.

**Chris McCord:** So I'm collapsing the window as we go... So there are things -- like, Claude has all the artifacts. We're only keeping the most recent code version, we're printing the window as we go... So we are doing some tricks with the context size. But when you invoked its web tool to hit the web page, that was sending the whole chat up. So there are a lot of ways that we could try to get that down. But for now, it's like, let's make it work and compelling. And if the value is there for what you're doing then, then that's great. But it'd be nice to bring the cost down as well.

But yeah, from the hamburger menu, you can do squash... And we'll force you at like 150 messages. We probably need to make it even more aggressive. We can just see it work here. So I don't know why Claude or ChatGPT doesn't have this... How many times has Claude slapped your hand, "Long chats consume a lot"?

**Adam Stacoviak:** I don't know, I'm like, "How do I take the context somewhere else?" And every time I'm like --

**Chris McCord:** Yeah, so here it's just gonna --

**Adam Stacoviak:** ...it just upsets me.

**Chris McCord:** It is self-summarized, right?

**Jerod Santo:** So what's this doing exactly? It's going to self-summarize the whole history, and then it will keep the files in context that it had worked on. So yeah, it's just gonna -- I mean, it's simple, right? I send a push request to chat completions, it's like "Here's the message history, self-summarize it." And then we just squash it into the agent state.

**Adam Stacoviak:** This self-summary is like the new change log.

**Chris McCord:** Yeah, there you go. And now you can keep working. So yeah, I think we need to do that sooner for people, because I think a lot of folks are having really long chats... Even though we force you 150 messages, I think folks are just going until they're burning 50 cents a pop or something on each prompt. But out of the box - yeah, that's what we've got right now.

**Adam Stacoviak:** So in this case, it was Phoenix.new, right? We vibed the new thing. I think you loosely mentioned being able to import from repos... So what if we loaded changelog.com's codebase currently? How would the experience be different to --

**Chris McCord:** Do it. It's on GitHub, right?

**Jerod Santo:** Yeah.

**Chris McCord:** Yeah, tell it -- on this prompt, say "Clone..." Just give it the GitHub repo, and tell it to set the app up, or something. I don't know what -- let's watch it.

**Jerod Santo:** So I just have the URL. Clone this and what? Do what with it?

**Chris McCord:** I don't know, what do you want to do with it? Set it up?

**Adam Stacoviak:** Run it?

**Chris McCord:** See if the tests pass? Run it?

**Jerod Santo:** Clone this and run it?

**Chris McCord:** Find issues to work on? I don't know if you have any issues. I mean, whatever you want.

**Jerod Santo:** Clone this, run the test suite...

**Chris McCord:** Do you have open issues?

**Jerod Santo:** No, man. It's flawless.

**Chris McCord:** \[laughs\] Oh, perfect. Clone it and save --

**Jerod Santo:** \[unintelligible 01:14:57.29\]

**Adam Stacoviak:** Oh, my gosh...

**Chris McCord:** Clone it and tell it to find a -- so clone it, set up the project, and find a good issue to work on. And let it decide on what to work on.

**Jerod Santo:** Alright.

**Adam Stacoviak:** Bam!

**Jerod Santo:** Alright, we'll let that stuff run.

**Chris McCord:** And this is our agent future, where you would then just go hit the pool, hit the gym...
**Jerod Santo:** Right?

**Chris McCord:** You're like "Got my work done for the day..."

**Jerod Santo:** Listen to the Changelog... \[laughter\]

**Chris McCord:** Listen to the Changelog. So it cloned it... I don't know what's going on now. Okay, it switched workspaces. Now it's gonna -- and again, we're recursing on the context, and then it decided to invoke ls there. So all these decisions it's making, it's not -- I don't have a workflow for cloning a GitHub repo, right? The only thing it sees in its examples in the system prompt is it vibe coding a Phoenix app, like mix Phoenix New... And then it asks the user about a design.

\[01:15:52.13\] So yeah, GitHub issue list... I didn't know how to use the gh command line interface. I just knew it existed. I told the agent, "You have the GitHub gh command. Use it." And then it uses it. And I'm like "Oh, that's how you use it." So I did not have to give it anything.

**Jerod Santo:** So you set up the VM, or whatever it's called, the image, to have that just pre-installed, that it starts with?

**Chris McCord:** Yeah. Its own Docker file for the Fly machine. Yeah, it just has gh pre-installed. It's world knowledge; it has the knowledge of the GitHub CLI. If it didn't, you could teach it right with context stuffing... But I didn't even know how to use that tool, so I didn't even have to tell it how to use it. I didn't know how to use it. I just knew that it could.

**Jerod Santo:** Right. So for those listening, there is a command called gh, which is probably apt-get install, brew install etc.

**Chris McCord:** There's some curl pipe SH command.

**Jerod Santo:** Yeah, there you go.

**Chris McCord:** The nice thing about it is it's -- you can do gh off login, and then that will give you a URL to do a GitHub one-time password thing. So you could authorize your agent to do private GitHub repos by typing that. And then in your own browser, you could visit that URL and enter your password.

**Jerod Santo:** But for public ones, I can just do this. So it run gh issue list --limit 20 --state open, and that will -- I assume it's already in the repository.

**Chris McCord:** Yeah. But isn't that remarkable? So I don't know those arguments, but the fact that -- you know, everyone likes to say "Oh, the next token prediction." Yeah, obvious. But you're like "What?!" By next token prediction, it's able to take what you asked, and then pass the open issue flag... I don't know, there's something crazy... But yeah, we could see what happens later.

So your Phoenix server launched, when we first did Tron, in like five seconds, because it's pre-compiled... But building this from scratch is going to take a while. But no, I'm curious what goes on. Oh, there it goes. But this is -- again, we could close the tab here and just check later what it did. So this whole headless experience -- the whole agent is headless. We're just humans watching what it's doing.

**Jerod Santo:** Alright, I'm going to stop it to act as if we closed the tab.

**Chris McCord:** Yup.

**Jerod Santo:** And we can just chit chat. I don't know... What do you think, Adam?

**Adam Stacoviak:** I'm enamored, man. I can't believe this is even possible. \[laughter\] I knew we were talking about -- I mean, I've been quiet, because I'm just thinking about like "Man, we're building for these robots", basically.

**Chris McCord:** Yup.

**Jerod Santo:** And the robots are building for us.

**Adam Stacoviak:** Yeah, but then as I'm watching this whole conversation unfold, I'm just thinking "Okay, so Fly's biggest user, I'm aware, is robots these days", right? We're Fly users. We're not robots. We're humans, as you know. Just to be super-clear. And so you've got this robot uprising, but the robots are just multipliers of the Jerods and the Adams out there, and the Gerhards out there. They're just 10 or 20 Adams, versus -- because I've got agents, and I've got things happening. And so my robots are replications of me. And so I think about the platform Fly, and I think about the brand Fly, what y'all are doing, but... How does this impact this accidental product creation, growth thing, new product you've got going on here, which is really revolutionary - how does it impact how Fly approaches the user it builds for? ...whether it's human or robot. How does it think about its user, so to speak?

**Chris McCord:** That's a good question. So this is still branded just for Phoenix. So it started as a skunkworks thing... We launched it four days ago, so early, early days. It's still narrowly scoped... But we have our own platform as a service for hosting your web apps, managed database... That's obviously our bread and butter, and it's going to continue to be.

\[01:19:56.15\] But I do think -- there's some learnings we had from building this, dogfooding our own infrastructure... Fly machines were perfect for this, but we've also found some -- there's some unique differences in this space... What we really have here is the state, which is like your app, this evolving artifact... And Fly machines are great for these ephemeral sandbox machines, but very few people wanted one and only one of those machines. Normally, you're like "I want to run my app. I want it to be highly available. Maybe I want to run it in different regions, to be fast." But in this agent case, you want one and only one of these things running. So we have found some missing primitives in the platform that we're building for, that we're extracting from Phoenix New...

And one of those neat things - and again, I don't want to get ahead of ourselves... So nothing is announced or launched yet, but one thing to consider is once you have these freeform agents - I'm going to say like a CI, right? They're popping in, but they're actually mutating the thing, and experimenting... Like, once you get to that state, then you're -- once you get to that point, then the state of your app is constantly evolving. And the agent's running the app, then it's doing all these experiments and things... And then you're going to want to be able to snapshot the entire environment.

So I think that we move towards primitives that give us the ability not only to say "Oh, I want to deploy this dev app now", but give us the ability to say "The entire environment at this time that this agent was working in it can be snapshotted." So where it installed an app, or did something crazy, or did this whole thing... I can actually snapshot and point in time restore, not only my code, not just Git, but just imagine your entire IDE becomes this "I'm going to go back to the state that it was here." And I think that will be necessary once these agents are just going full ham. I think that it would be interesting to have a platform offer those kinds of primitives built-in. So we'll see.

So anyway, to answer your question, I think that Phoenix New is going to be self-serving for Fly for building blocks, but then those building blocks we can turn around and give to all of our customers.

**Jerod Santo:** Quick update from our closed tab... It is currently on a yak shave that's about three layers deep...

**Adam Stacoviak:** Oh, my gosh...

**Chris McCord:** What's it doing? \[laughter\]

**Chris McCord:** Well, it tried to load the seeds file, which I don't think even works anymore, because we've kind of abandoned it... And it's like "Oh, there's a problem with the seeds file", and --

**Chris McCord:** It's gonna fix this thing.

**Jerod Santo:** Yeah. So now it's migrating things, and changing... "This actually should be a text field, not a string. I'm going to update the form, so it's easier to use." It's just down on this rabbit hole...
**Adam Stacoviak:** \[laughs\]

**Chris McCord:** Yeah. And that's kind of how I mentioned --

**Adam Stacoviak:** Happily fixing stuff.

**Chris McCord:** Yeah. It's funny, but this is where the different modes come in. And then you could also interrupt it and say "No, just just do the thing." That's where it's funny - it's remarkable watching people use the platform, because sometimes they don't... I don't know what this says about humanity. I've seen a lot of folks don't -- even though we give them the full VS Code IDE, they don't just jump in and also do something, put some effort in. There'll be a syntax error, like "Oh, it keeps messing this up." I'm like "You could just use your meat fingers and fix it."

**Jerod Santo:** Right?

**Chris McCord:** So it is just funny... I think that says a lot about where we already are as developers, where we're just like -- even if you're using ChatGPT web, we're already offloading a large part of our critical thought, where we're just like, "No! Computer, fix!", instead of just changing the one problematic line.

**Jerod Santo:** Yeah, hilarious. Now it is trying to -- so it got to that point, and then it's like "I need to migrate your database. First, I'll start Postgres." And it can't start Postgres, for some reason. It's like "You know what? Oh, I see there's a .dev container file..." Because we have years of cruft in here, of things that we've tried, and whatever... And it's like "Oh, I'll fire up a Docker image and run Postgres from there."

**Chris McCord:** Oh, no... \[laughs\]

**Jerod Santo:** It's going to be layers and layers deep...

**Chris McCord:** "Don't do that." Just tell it to install Postgres. But yeah, you definitely don't want to have it install Docker. That's going to be -- it's going to try.

**Jerod Santo:** Uh-oh... It says "Forcing the agent to take a little break."

**Chris McCord:** Yeah, so that's me.

**Adam Stacoviak:** "That's me, that's me." \[laughs\]

**Chris McCord:** \[01:24:00.17\] Elevators used to have a full-time operator, right? Up and down. And now the only thing they have now is the big, red button, the "Holy \*\*\*\*, stop!" So I have meat space code in the agent that right now it's, I think, 35 concurrent recursive loops. We force it to stop if it doesn't idle... And I will tune that, but that's my recursive runaway. Like, in this case, you send it off on this quest where if, you know, we started with the vibe idea... The goal was not to consume all your credits accidentally, where you're just like "Do this thing", and we close the tab and you're like "I can't believe it!"

**Adam Stacoviak:** "My credits are gone!"

**Chris McCord:** So I just forced you to click a button right now to continue, and you could click Continue. But... Yeah, that's the --

**Jerod Santo:** That's the old Netflix "Are you still watching?"

**Chris McCord:** That's what it is. It's just, there's code, there's meat space code that I wrote that's like "Nope, you have to stop."

**Jerod Santo:** I'm going to let it idle. I'm not going to let it roll, because it's doing crazy things I don't think it should be doing... So I'm just going to leave it there for now. But...

**Chris McCord:** Yeah, but that is the nice thing... There's the freeform exploration on -- even for me as an open source maintainer, people will send up a reproduction of a bug, and it's a whole Elixir app. So it's like, just running mix on that thing could pwn me. So I usually have to go evaluate -- I'll usually manually pull out file by file that would reproduce it, but that could be a bunch of files... So there is something freeing about this full remote environment that I can just throw away.

So for me, it unlocks this pretty unique workflow... But I think for things like this, where you're just like "Oh, try to run this", and it's not something you would want to provision your own server for, and figure out or run a bunch of stuff locally...

**Jerod Santo:** Right.

**Chris McCord:** ...so I think it can be helpful in that regard.

**Jerod Santo:** Now, I think you might've mentioned this, but I was of course distracted as I was watching that thing go... Is there the possibility of persistent sessions, or something, or like "I could bake the results of this into an image"? Because it would be nice to be able to fire off a new one against our codebase, with everything else set up and done.

**Chris McCord:** Yeah, so it's all persistent there. So that code that --

**Jerod Santo:** But what if I want a brand new session, but with our existing codebase all ready to rock?

**Chris McCord:** Yeah, you just start a new chat and tell it to clone that repo into a different directory. So it's not like a one-to-one -- basically, you can treat it as you would treat your own IDE today. Your IDE that you work in, and you have multiple code files at different directories... You can have multiple chats around the same codebase, purpose-built, my testing chat, my benchmarking chat... Or you could have multiple chats around different apps, all in the same IDE. And those all are persisted and they share the same environment.

**Jerod Santo:** So I imagine it's like one VM, basically.

**Chris McCord:** It's basically your one VM, your one desktop that has packages running. So if you wanted different environments entirely, that's TBD. The architecture I have is set up for multiple IDEs, but then you get into -- we had to see what users did with this first. Because if I allowed you to create an IDE per project, that's physical compute that -- then these things would have to be pretty beefy. That's just a lot more compute for us, which would be a higher price for everyone. So if that's what folks end up wanting, that's definitely something we can do, and it's set up for that. But right now, my hunch is it's more these building block primitives for Fly doing environment snapshots, that I think it's less about... It's less about different environments, and more like I want to let the agent and myself explore, but then be able to get back to that working state from a code perspective and an environment perspective, just with one click.

**Jerod Santo:** Well, exciting times, exciting times... It's fun to watch yourself and so many people tackling the same, very interesting, difficult nut to crack, and how to make these things super-useful, while also not super-expensive, and not super-scary, because they kind of are, in existential ways...

**Chris McCord:** \[01:27:58.04\] Yeah, it's pretty wild. Yeah, so we'll see. This is still an experiment. We'll see the whole Phoenix New thing, where it goes, and if it works out... But I do think something like this is the future of programming. Not necessarily that it's going to be us, but I think that something that looks like this is going to be what we're all doing, in some capacity, much sooner than folks expect.

**Jerod Santo:** Well, you heard it here first, folks. In fact, you've heard it here a few times now, so... Fair warning, as these things are coming; multiple people keep telling us this...

**Chris McCord:** \[laughs\] Jerod, I feel like every time I stop talking, I get a big sigh.

**Jerod Santo:** No, I'm excited. I mean, I'm coming to grips with it all, and I've always been -- I do appreciate handcrafted things, and I like to write code, and I like all that stuff... But at the same time, I've always been more results-oriented. I've always been more about the ends than the means, even though I think historically you've had to care about the means in order to keep the ends going. And maybe we don't have to do that so much anymore, maybe we do. I don't know yet.

**Chris McCord:** Yeah, I agree with you. Before formatters, I was aligning my equal signs, and like... Code is entirely a craft for me. I was going to say, very much a craft. It's entirely a craft for me, just like woodworking is.

**Jerod Santo:** Yeah.

**Chris McCord:** What I tell people is programming -- yeah&lt; it's purely a passion and craft for me. It's my favorite thing, my job and my hobby... But I still, like you said, come to grips with "Here's where we are." And I also say that in the same way when I go to google anything today, I'll type out in the Google search box, and midway through I'm like "What am I doing with my life? Why would I go to Google and do this effort of going through the search results, click on the webpage, finding the thing..." And I'll just abandon that, and I'll go ask ChatGPT or Claude. But now that same thing is happening to code with me, where I'll be like "def module", and then I'll be like "What am I even doing? Why wouldn't I just ask the Borg for the starting point?" And I don't know how I feel about that. I don't feel good, but even for me as someone that considers programming a craft, I'm already there in my mind. And I don't know if that's because I'm a lazy human, or... You know what I mean? This is a change that's happened for code for me as someone who cares about the craft. So I don't know what that says other than like this is just fundamentally changing I think how we are as professionals. And I don't know if it's good or bad, but it's happening.

**Adam Stacoviak:** I'm not sure this is a one-to-one, but this is somewhat of a rationale for me... Do you all text-message anybody in your life? Do you text-message anybody?

**Jerod Santo:** Sure.

**Adam Stacoviak:** Yes? Trick question. Not a trick question. I do too, just so you know. I text a lot of people. One person in particular I text, my wife. Frequently. I was actually going to pause this moment here and just text her right now, just because I miss her, you know?

**Chris McCord:** \[laughs\]

**Jerod Santo:** Well, thank you for not doing that while we're talking here.

**Adam Stacoviak:** Just so you know. But instead of texting these days, like an idiot, like typing the message out one character at a time, I just talk to the thing - because it does that - and I push Send. And more often than not it's pretty close to what it should be. It's kind of like that for me. I don't want to text the text anymore, I want to just talk. Same thing with an app. I just want to just talk things out. I don't want to go through these motions of --

**Chris McCord:** \[01:31:23.16\] Siri dictation. Yeah, and pretty soon it's going to be like "Send my wife some lovey dovey message."

**Jerod Santo:** Yeah, exactly. A haiku would be nice...

**Chris McCord:** "I don't even want to talk anymore. Just just send her something nice." Yup.

**Adam Stacoviak:** Well, I don't think it's going to go there, Chris.

**Jerod Santo:** Do you know what I normally say to my wife? "Say it again." \[laughter\]

**Adam Stacoviak:** I'm literally not texting it out with my fingers anymore. I'm talking it out.

**Chris McCord:** Yeah, I got you.

**Adam Stacoviak:** \[unintelligible 01:31:44.02\] to that. It's like, I could... What do I gain from it? And it's not exact one-to-one to "I could write this dev module and write it all out, but... What do I gain by doing it myself when I can have the Borg just do it for me?" And I think we'll have more and more of these versions of these things we do in our life, and you just say "Well, I would just rather not do it that older way anymore, because this other way is just like... Same place." It becomes -- the question is "Why would you do it the other way anymore? Just don't do it that way anymore, because this is the new way.

"**Chris McCord:** Yup. Thomas, one of my co-workers that wrote a blog post on Fly, it was about this whole LLM space and dialogue... He had a good comment - something like people are writing worse versions of code purely out of spite that the LLM could do better. Something like that, said much better... That thought was really interesting. The folks, they know that it would be better to actually go ask, but "Out of pure spite, I'm going to do this myself."

**Jerod Santo:** Well, as the old saying goes, "Don't move my cheese." And our cheese is being moved, and we need to be able to --

**Adam Stacoviak:** The cheese is movin'...

**Jerod Santo:** ...adapt or die, as we've been saying often here... And who knows, maybe you'll like the new world more than you thought you would. And that's what I'm starting to feel as well. It's like "You know what? This way actually is -- it's got its warts, it's got its problems, it's not perfect, and neither is any of the code I've ever written in my life." So... There you go.

Alright, let's -- how do we end this session? How do we close this out?

**Adam Stacoviak:** Phoenix.new, check it out now.

**Jerod Santo:** There you go.

**Adam Stacoviak:** If you haven't gone there yet - well, I feel bad for you, son...

**Jerod Santo:** \[laughs\]

**Chris McCord:** That's right. Definitely share what you build with me, because I live vicariously through watching people build things.

**Jerod Santo:** You probably had a great time here, man. Hot or Not for code... That was sweet.

**Chris McCord:** That was fun.

**Adam Stacoviak:** It was so fun watching you actually analyze what your creation was doing. Like, "Oh, look, it did that. Oh my gosh, I can't believe it did this." That was cool.

**Chris McCord:** Yeah... The notes thing was a recent addition to the system prompt, where -- I squashed the window, so... For research-based tasks, something that's going to be longer-lived context, it's supposed to write it in a notes file. And it was neat seeing it do that.

**Jerod Santo:** Yeah. It's alive... It's alive...! Alright, Chris, always a pleasure hanging with you.

**Chris McCord:** Yeah, thanks for having me on.

**Adam Stacoviak:** Later, Chris.
