**Jerod Santo:** So Josh, here you are on the Changelog. Thanks for joining us.

**Josh Comeau:** Hi! Yeah, it's great to be here. It's exciting.

**Jerod Santo:** It is exciting. We're happy to have you. You've been doing some really cool stuff. Not really by choice, but kind of by necessity... And it's resulted into a cool blog post a and a very interesting discussion around accessibility, all sorts of things on coding. When your hands don't work, or they hurt, or maybe some people are amputees... We get in these circumstances as developers where our hands are no longer available - what do we do? And you've found yourself in that circumstance. Do you wanna tell that story?

**Josh Comeau:** Yeah. So I've been a developer for quite a long time now, and a core part of that is using your hands. I got to the point where I was having some unrelated wrist issues; so I went to a physiotherapist, which I had been seeing for a while, and he gave me some exercises. And the exercises he gave me made -- like, I injured my nerve doing the exercises... Which -- there's like a cruel bit of irony there, that I was trying to improve the situation...

**Jerod Santo:** Hm... Backfire.

**Josh Comeau:** Yeah. Ultimately it was not the physiotherapist's fault. What I've come to learn is that it was kind of a ticking time bomb, because I had nerve mobility issues. When you move your arms, your nerves slide around, and mine weren't able to do that super-well.

So what happened is I essentially pulled a nerve, it got inflamed and irritated, and really annoyingly, the thing that irritated it the most was trying to type. So the posture of sitting with your arms bent in typing really irritated the nerve, to the point that within 3-4 minutes I would get this burning in my elbows, sometimes it was in my wrists...

I went to the doctor -- or rather I zoomed with my doctor, because of the times we're living in... And he said, essentially, it's probably something called Cubital Tunnel Syndrome, which is a type of ulnar neuropathy. The idea is you have a nerve that runs from your neck to your pinkie, and that nerve is getting compressed because it's been irritated.

\[00:04:50.10\] It's essentially just a mild burning pain that progressively gets less and less mild if you don't stop what you're doing... So I was essentially only able to type in really short bursts. And if I tried to do that for more than like a dozen times a day, my arm would just be very unhappy with me, and the next day it would be worse.

Essentially, for a couple of months I wasn't using computers at all. I essentially took the opportunity to just go on lots of walks, and play video games... Because for whatever reason, video games -- holding a joystick wasn't as bad. I also of course experimented with lots and lots of other remedies. I got myself a standing desk, I saw a new physiotherapist, I saw an occupational therapist, I tried a whole bunch of different antiinflamatories, I got custom splints made, a lot of different exercises... Lots of stuff. Essentially, I ran the gamut. I have three or four different ergonomic keyboards... I tried a lot of things, and none of them really helped.

Then a co-worker suggested to me "Why don't you try coding by voice?" Of course, the initial response that I had to that was "Oh my God, that sounds awful." Because you know, dictation in general is pretty good... Taking what you say and outputting it in English sentences, and I imagine other languages, too. But coding is a lot of syntax, and grammar, and not a lot of dictionary words. So my thinking was "Am I gonna have to literally dictate character by character?" and just how difficult is that going to be.

**Jerod Santo:** Right...

**Josh Comeau:** I quickly learned that it was a little bit less tedious than I was expecting... And happily, that's become -- I mean, my situation actually is getting better in the past few weeks, so I have been transitioning back to typing somewhat... But for at least the past 3-4 months, my primary input mechanism has been through dictation, and also through eye-tracking.

**Jerod Santo:** We'll get into the details of how all that works... The eye-tracking vid is very interesting. I went through a very similar circumstance, too. I think a lot of developers go through this. Now, not Cubital Tunnel Syndrome, but Carpal Tunnel Syndrome, which is in the hands. All forms of RSI, repetitive strain/stress injury, where just non-ergonomic typing, or whatever it happens to be - just long sessions, cranking out code, or if you're a writer, you're writing prose, whatever it happens to be... People who sit at their desk, or even stand at their desks and just type all day - a lot of us have these problems. Usually, it's because our hands are not in the right circumstance, or whatever it happens to be.

I was getting that exact same problem, and I was beginning to think "What if I can't fix this?" Mine was in my left wrist/pinkie, the outside of my hand. Every day would start off normal; it sounds like yours was like 3-4 minutes of relatively normal, and then the pain would begin... Mine would start off into like -- you know, 10 AM I'd start to feel it. By noon, I needed that lunch break. And then in the afternoon it would start to really hurt.

I couldn't find a solution for the longest time. I tried ergonomic keyboards... One person said "Get those relaxation metal balls that you twirl in your hand..." I can't remember what those are called... "Because that will help your -- move it around, take frequent breaks", all that kind of stuff.

\[00:08:04.02\] Eventually, I found the solution, which was simple, in my case. My particular problem was merely because of the way I shifted my left hand to reach the lower left hand key, which was the Ctrl key on that keyboard... Because it's tons of keyboard shortcuts, the Ctrl key. So I was doing this - and listeners can't see me, but I'm basically moving my left wrist to the left, down and to the left, over and over, every time I used a keyboard shortcut. As a developer, we're copy and pasting, we're doing all sorts of things in Vim etc.

So I found that all I had to do was switch my Caps Lock and my Ctrl key, and it just took that one motion away. Over time, the problem just went away, and I was very fortunate for that reason... Because I was thinking "As a developer, I need a few things, really...", which is way less than a lot of other people. "I need my brain to function correctly, I need my eyes, and I need my hands." That's kind of what we need, right? Those are the faculties of our body that are most important for writing software...

**Josh Comeau:** Yeah.

**Jerod Santo:** And I started thinking, if I lose my hands, what am I gonna do? Go find a whole other career? So surely, you were faced with similar thoughts, of like "This might be the end of the road for me", or -- because you didn't find a nice little keyboard switch to fix your problem. Yours is a much more serious problem than I had.

**Josh Comeau:** Yeah. And a couple things I wanna stress... One is most people who develop Cubital Tunnel Syndrome. it goes away, essentially, on its own. Spontaneously, is what they say on Wikipedia.

**Jerod Santo:** Really?

**Josh Comeau:** It just goes away.

**Adam Stacoviak:** Spontaneously...

**Josh Comeau:** Yeah... \[laughs\] Usually, it lasts 4-6 weeks. I think it's like 85% of cases go away, either within 4-6 weeks, or within a couple of months with some physiotherapy. It's very rare that it lasts this long. So because of that, I don't want anyone to panic if they start to feel some of these symptoms... But I didn't really have that much panic myself because I kept seeing doctors and physical therapists, and all of them said "Oh yeah, that gets better in 6-8 weeks." It was frustrating to keep being told that, when longer than that has passed...

**Jerod Santo:** Right...

**Josh Comeau:** But no one had said that this is like a life-long thing... You may have episodes of it, but it typically doesn't tend to be this sustained, long-term issue. So yeah, it was definitely -- there was some panic there... But by the time it occurred to me that this wasn't going away in any sort of reasonable timeframe, I had already switched to dictation, so it was a pretty big weight off my shoulders.

**Adam Stacoviak:** Is the state of it, the prognosis currently, chronic, that it will never go away? Or is it something that you're hopeful to eventually--

**Jerod Santo:** Spontaneous...

**Adam Stacoviak:** Well, others have experienced, and you mention in your blog post that you're an edge case... So I have personal connection to being edge cases in scenarios... Like, that happens to 1% of the people that ever get this kind of thing like that - I'm in that 1%, usually. But is this something that you have figured out that it is chronic for a long time for you, or are you hopeful that it will eventually get better, or spontaneously correct itself over time. You mentioned your nerves not acting like everyone else's nerves might in this situation.

**Josh Comeau:** Yeah, so one of the things that had started to get me comfortable -- or not comfortable, but settling into the idea that it may not go away is that I have another one of these rare things that I think is why I'm maybe in this edge case, is that when I bend my arm, my nerve shifts out of place. It's called subluxation. And the idea is that most people - your nerves sits in a canal, and if it shifts out of place, it's this constant source of friction. So the nerve has a harder time healing when it gets injured, because it's always moving around.

That said, it has started to get better. I briefly mentioned, but I've shifted away now... I still use dictation a fair bit, but I'd say I can get 4-5 hours of keyboard typing time a day now, which is a lot better than the 4-5 minutes. And funnily enough, it wasn't like some exercise -- and I don't even think it was a matter of time; the shift that happened was more mental than anything.

\[00:12:03.15\] So a bunch of people kept telling me to read this book, The Mindbody Prescription. And the idea with this book - and it's not like generally recognized as actual medicine; it's a little bit on the fringe, let me state that right upfront... But the idea is a lot of chronic pain conditions - so not acute pain; not the 6-8 weeks things when you break a leg... Chronic pain is often caused by the brain. Essentially, you have unresolved emotional turmoil, and the brain sees this as an opportunity to draw your attention to this physical problem, because it can be a little bit less stressful when dealing with emotional things.

Now, I've done a lot of soul searching, I have yet to figure out what the underlying emotional turmoil is, but the idea that it could be mental alone has gotten me thinking about things a little bit differently. One of the things that really resonated with me was the idea of this Pavlovian response. So in the same way that like for 6-7 months now ( maybe a little bit longer), whenever I go to type, I feel pain. And after enough time, that just becomes an ingrained response.

So what finally started working -- because I had just stopped typing altogether; there were months where I didn't touch -- I didn't have a keyboard on my desk. Um, that's a bit of a lie, because I kept one wirelessly, that I could pull out just to do annoying keyboard shortcuts sometimes... But when I started reading this book, I just said "Let me see what happens if I try typing for 20 minutes." Of course, after five minutes I started to get a little bit of burning... But I pushed through it; I just said "Let me just keep typing." And over the course of 2-3 weeks I just extended that period a little bit longer and a little bit longer, and it was fine. I didn't face any sort of negative consequence for that. So I think a bit part of it in my case was just this mental conditioning that had happened.

I should also say, I don't generally advise people just to push through -- usually, pain is a signal that you should stop doing what you're doing; in my case, I went for an MRI, I went for an EMG, I went for an ultrasound, and all of these things came back normal. So there was no structural issue in my case, and no one told me that I shouldn't do this. There wasn't any indication of like "Be very careful, because it could get worse."

The thing that I have been watching for, and that other people should watch for, is muscle weakness. So if you find that you're no longer able to grip things, that's a sign of nerve damage. Similarly, if your fingers start going numb. If it's just pain, in my case - and of course, don't trust me, I'm not a physician - pain doesn't seem... No one has told me that pain is a sign in this case that I shouldn't be pushing it. Essentially, if I see the weakness, if I see numbness, then stop doing what you're doing... But pain essentially might in this case not be a reasonable reflection of injury or damage.

**Jerod Santo:** Yeah, definitely the opposite case of an RSI, like Carpal Tunnel, where the more that you just power through -- because a lot of people with Carpal Tunnel will end up where they are because they did not address the issue, and they just continue to type in the exact same circumstance until they need surgery, basically. So we see a lot of people that the only way out of Carpal Tunnel is a pretty drastic surgery in the hands... Whereas if they would have found solutions early on and not powered through the pain, then they would have been better off... So yeah, YMMV, in all these cases; we're all different, and our mileage may vary.

**Josh Comeau:** I've always been really protective of my own body, so the moment it started, I'm like "Hey, I'm taking a break from computers." Like, I was the opposite of that person. I think if you have an acute injury, then definitely don't try to power through that. But when it gets to the chronic 6+ months, when you get to a certain point... This isn't an injury that lasts that long, generally. Either it heals and it gets better, or it gets worse and worse and worse because you keep pushing your body past what it's comfortable", and not seeing the other symptoms of the condition progressing - the weakness, the nerve, the numbness. All of that suggested to me that "No, there's something else a little bit here."

**Jerod Santo:** So take us back to the solution then... So your co-worker said "What about voice dictation?" and you'd never even considered the thought...

**Josh Comeau:** Yup.

**Jerod Santo:** I have seen other people do this. In fact, in your blog post you reference Emily Shea and her Python -- what was her talk? Let me grab it real quick.

**Josh Comeau:** \[00:16:13.17\] It's called Perl Out Loud.

**Jerod Santo:** Perl Out Loud, not Python. There was a Python one and a Perl one. Emily Shea is Perl Out Loud.

**Josh Comeau:** And then Tavis Rudd is the Python one.

**Jerod Santo:** Yeah, there you go. A couple of people who have trailblazed, because they had to... And I assume you watched those talks and you think "Okay, I can start to devise my own system..." The software -- go a little bit into how this works, because you didn't start from first principles or from scratch. There's some software out there, there's some people that have done this, and so you started to adopt and adapt the solutions.

**Josh Comeau:** Yeah, absolutely. Yeah, I think Tavis was one of the first people that I saw doing this, and he essentially did start from scratch. He just came up with a bunch of Python scripts that would process his voice. I'm sure he didn't come up with the speech recognition, but all of the processing. And then Emily's talk was super-inspiring, because it answered a lot of the questions I had about "How does this work? What is the process? How do you deal with homophones?" All of the things that just seemed like it would make it really difficult to work with.

The software that I use is called Talon Voice. There's a free version and there's a paid, beta version. The way it works is you join the creator's Patreon, you get access to the beta... I don't actually know too much about the distinction, because I just went for the beta right away. It's kind of a monthly cost type deal through Patreon.

Essentially, the way that it works is it hooks into whatever speech recognition system you wanna use. It comes with its own, you can also use dragon, which is kind of the industry standard... I think you can use the built-in one with macOS... And essentially, it will just take what you say and do something to it. So everything that you utter is processed through some sort of a command.

The simplest thing you can do is you can say "say hello world", and it will output the text "hello world". Say is an example of a formatter. There are other formatters. So you can say "camel hello world", and it will output "hello World". Or "snake hello world" to add the underscore. There's like a half-dozen of those typical formatters.

And that's kind of the idea with everything - you say a command, and then you give that command some text... And it's essentially just calling functions. In this case we have a function called "snake", and then the argument to that function is "hello world", and then it processes it, it does all the grammar stuff of shoving the words together, or adding the syntax.

So that's essentially the idea... But it gets taken a lot further than that. And there is some stuff that comes kind of built-in... But the really cool thing about it too is that everything is modifiable. So when you download Talon, it comes with a bunch of Python scripts. And those scripts are kind of -- every command that you would say, you have access to and you can change.

So if I wanna add my own formatter, or if I don't like the way snake works and I wanna have double underscores, you can totally just hop into the Python script and update that. So it's really cool, and kind of unlimited in terms of its potential. It's up to you how much time you wanna spend customizing it for your needs.

In my case, I've added maybe a couple dozen little commands at this point, just for my own personal workflow, so writing React and CSS. I don't actually know too many folks in this space that have been using it with React. A lot of the time -- like we mentioned, Emily does Perl... So I just kind of went off on my own, in that very domain-specific way. But a lot of the stuff that it comes with is really cool.

Another example is if you wanna switch windows, you can just say Cmd+Tab on the Mac, or Ctrl+Tab; just vocalize keyboard shortcuts. Or you can say "Focus ApplicationName." So I could say "Focus Chrome" and it'll switch which window I'm currently looking at.

**Jerod Santo:** I wonder if you -- do you find yourself less distracted because switching tabs is a pain in the butt? Like, "Focus Chrome." I just feel like I would switch to Twitter way less often if I had to verbalize that move.

**Adam Stacoviak:** Yeah, for sure.

**Jerod Santo:** I can do it -- it's second-nature, with just my fingers, not even thinking about it.

**Josh Comeau:** \[00:20:05.25\] Yeah, it adds a little bit of friction to just about everything that you do. That can be annoying when you're trying to get something done. You can feel like your brain is now moving faster than your voice; same with typing too, but especially with this... But yeah, the silver lining to that is definitely that it discourages behavior that -- it just doesn't feel as worthwhile to spend the time switching over to Twitter.

**Adam Stacoviak:** Can you talk a bit about the phonetic alphabet that you use? I know it's kind of different than -- I was in the military, so I'm familiar with Alpha, Beta, Charlie -- Alpha, Bravo, Charlie, all that stuff... I said Beta, but I was wrong... \[laughter\]

**Jerod Santo:** You're a little rusty.

**Adam Stacoviak:** But those are multiple syllables, hence my rust... And you've shortened it to single-syllable words. Can you talk through the alphabet that you have to use?

**Josh Comeau:** Yeah. Just to give people a bit of context as to why this is necessary... English is a really annoying language, in the sense that B and T and P - a lot of our letters sound near indistinguishable, so you'd wind up with a lot of typos if you just went with that. There is that NATO phonetic alphabet that you mentioned, but a lot of this -- it sounds almost trivial, the difference between a one-syllable word and a two-syllable word, but when you're rattling these things off, it really helps to be as short and concise as possible. So I didn't come up with the alphabet; it kind of comes with Talon, or the Talon Community Package, which is the most popular collective resource of Python scripts for Talon... And essentially, it goes air, bat, cap, drum, each, fine, gust, harp... I'm not forgetting the letters, I'm forgetting which order they come in.

**Jerod Santo:** \[laughs\]

**Josh Comeau:** The only two-syllable one that I know of is J. J is Jury. Some of them are a little bit strange. I is Sit, which starts with an S, but I guess the main sound is an I... But yeah, the very first thing that I did is -- so I have a Leitner box, which is essentially this flashcard system... It's spaced repetition; the Leitner box is a tool to practice space repetition. And I used this a long time ago when I was trying to learn Japanese. I used it a little bit for various things at work... But essentially, I just took all of these letters and put them on flashcards, and then every day I would kind of drill them... And it works kind of surprisingly well, to the extent that when someone asks me to spell something, I have to make the mental effort to use the actual alphabet, and I've caught myself a couple times now just rattling off things that don't make sense...

But yeah, it's essentially just this carefully-designed language where each letter sound sounds unique enough that I don't think I've ever seen the program get it wrong... And also, numbers are unchanged. So you would still say one, two, three, four. So that's essentially the calculation that they made, is just finding unique sounds for every possible character.

**Jerod Santo:** Can you spell happy for us?

**Josh Comeau:** Harp, air, pit, pit, yank. Give me another one. This was fun. \[laughter\]

**Jerod Santo:** Red.

**Josh Comeau:** That one is tricky, because R is red. Red, each, drum.

**Jerod Santo:** Oh, okay. Also, red is a homophone, because I could have used the past tense of read. I read something...

**Josh Comeau:** Oh, right. Yeah.

**Jerod Santo:** ...versus the color red. So that brings us to homophones, right?

**Josh Comeau:** Yeah.

**Jerod Santo:** Which is another huge problem, isn't it?

**Josh Comeau:** It doesn't come up as often as I was worried about... But essentially, yeah. If you say -- the one that constantly gets me is "site". Because I might say "Visit my site", and I want s-i-t-e. What I wind up getting is sight. And there's also cite. To cite an article. So the way that it works is if you've caught yourself, if you've said something that has this, you have to select that word - which I can talk a little bit about as well - and then say the word "phones". And if the Talon dictionary has just two matches, it just swaps them, it toggles them. If there's more than two, it pops up a little menu, with them numbered. So it'd say "1. site", "2. sight." And you would say "Pick two." And then it would just replace the currently-selected text with that alternative.

Selecting text is interesting. The way that I've done it - and truthfully, there probably is maybe better ways to do this - I've kind of just gotten stuck in my ways - is you can say "Go left" if you wanna move the cursor left, the same as the left arrow on your keyboard, and you can give that a repetition number. So if I say "Go left eighth", it goes left by eight spaces.

\[00:24:14.26\] "Eighth" is kind of a weird -- so they're ordinals. Usually, you would describe this as like the eighth of the month, or -- you wouldn't usually say "Do this eighth times", but the reason you don't just use "Do this once" or you don't say "Go back eight" is that eight is the vocalization to put the number eight, so there's a bit of a conflict with it.

**Jerod Santo:** Right...

**Josh Comeau:** So you would say "Go left eighth", or "Go left fifth", or "Go left 123rd", and it'll perform that action, which is moving the cursor left that many times. You can also say "Option left third", because if you hold Option and press left, it jumps by a word. So if I wanna go back three words, I would say "Option left third", and then to select the word, I would say "Option shift left", because that way it does the option left thing again, but holds shift to select it.

**Adam Stacoviak:** A lot of mental gymnastics, it seems. It's similar to the way you might speak different languages. We've had the luxury of talking to many people across many boundaries geographically in this world, and we've spoken with people who don't have English as their first language, and when we're done with the call, they're like "Phew... That was tough." And Jerod and I are like "What's the issue?" and they're like "Well, that's not our first language, so the whole time we were just constantly playing mental gymnastics in terms of which word makes sense, and constantly keeping in check."

Do you find yourself in that similar scenario? Because you're sort of always thinking in terms of the nuances. It seems very nuanced, very tedious with how you have to navigate via your voice.

**Josh Comeau:** Yeah. I would say that the interesting thing about it -- you know, it took me a long time to get comfortable with typing, as a human, growing up...

**Adam Stacoviak:** Sure.

**Josh Comeau:** ...but also learning keyboard shortcuts with my editor. It is a bit of a mental -- and actually, this was an experience I had initially. I found myself -- if I was writing a blog post, the tone of my posts took a bit of time to get right. The changing how I'm outputting this thing changes the way I think about it almost. And that to me was a bit -- maybe for two or three weeks I struggled with that. It's just you're so used -- the thinking process is so tightly connected to the typing process.

It's kind of like if you were to write code on a whiteboard - it's similar in process, but the output mechanism is different, so it makes it more challenging. Happily, that's something you get used to, so it doesn't really bother me anymore... In terms of the frustration with the process and the mental effort, you get used to it. And now, it's sort of become second-nature, in the same way that -- like, it does require a lot of mental overhead to... If you were performing the same thing with keyboard shortcuts... If you ever just watch your fingers while you're doing these complex combinations, it looks kind of wild. But it's just a matter of you learned this trick, and you've practiced it enough that now it's muscle memory. It's kind of the same deal.

**Jerod Santo:** How would you spell the word "break"?

**Josh Comeau:** Well, it depends on which one, but let's go with the eak. It would be "bat, red, each, air, crunch."

**Break:** \[00:27:08.24\]

**Adam Stacoviak:** So we're gonna do some live coding via voice, Josh, and... You'll obviously lead the way, because you're the one who does this...

**Jerod Santo:** I'm not doing it...

**Adam Stacoviak:** We're not good at this. You're clearly good at it. You did a demo on your site, which was super-cool... But for audio's sake, just to give the listeners an example they can hear here on the show... Which is also -- what are those called, homophones? When they're the same word, two different meanings, is that right?

**Jerod Santo:** That's right.

**Adam Stacoviak:** Hear/here? Anyways...

**Jerod Santo:** Hear, hear...

**Adam Stacoviak:** Take it away, Josh. Do some live coding for us. Set the stage. What are you gonna do?

**Josh Comeau:** \[00:28:20.29\] Yeah, so I'll give this a shot. I should also say that it's all very -- the reason this works for me is I've set up a bunch of little macros that do kind of standard tasks for me. So if you go ahead and - anyone who's listening and trying to follow along, the commands that I'm saying won't work for you, because they're custom commands that I've built in. But I'll essentially just do a little audio demo of how I would go about adding a couple of HTML elements, and some styles for them. I'll be doing this with React, because that's what my binding is set up for, but ultimately, it's gonna sound quite similar to if I was just doing it in vanilla HTML and CSS.

First, I have to make sure that I've enabled it, because... There we are. So essentially, what I would do is I would start by saying "elm h1". Actually, I'm gonna code a bunch -- because I'm already getting distracted. I'm gonna code a bunch of stuff, and then I'll explain it afterwards.

**Jerod Santo:** Yeah, just code it up.

**Josh Comeau:** Cool. "Elm, h1. Title, hello world. Slap elm paragraph. Say, This is a paragraph example. Go down. Slap second. Styled paragraph paragraph. Rule, color red. Rule, font size ten. Go down slap second. Styled h1 title. Rule, color brown."

Yeah, I guess that's sufficient. I was trying to think of other neat, little tricks, but... That's essentially it.

**Jerod Santo:** That's good.

**Adam Stacoviak:** I love it.

**Josh Comeau:** Yeah, so that's an example... Just to explain what I did, I started by just creating a couple of -- sorry, I had to disable my voice thing. I started by creating a couple of elements. So when I say something like "Elm heading", elm is my own little word for element. So I get the "angle brackets h1", and it moves my cursor between the open and close tag.

So then I said "Title, hello world." Title is a formatter that just capitalizes every word. So I get "Hello World" as like a sentence, but with every word capitalized.

**Adam Stacoviak:** Right. Title case.

**Josh Comeau:** When I say "slap" - slap is actually not my own. It's built into it. It moves the cursor to the end of the line and adds a new line... Which - I actually wish this was a keyboard shortcut. I find it super, super-useful. Because you could also do \[unintelligible 00:30:20.15\] So you could do it with the keyboard.

**Jerod Santo:** That's what I would tend to do, yeah.

**Josh Comeau:** But it's really nice to have it as like a thing that you can just utter. So I did that to add my heading, and then a paragraph... When I said "styled" - I think I said "styled paragraph paragraph" - that's another custom thing that I made. This is using Styled Components. Essentially, it's just a way to create a class. So the first paragraph is the element that I wanna target this for, a paragraph, and then the second one is the actual name. So I chose a little bit of a redundant thing.

The next thing I said was "Styled h1 title". In that case, it creates -- I think I said styled heading, which defaults to an h1. It creates an h1 that is called Title.

And then when I said "Rule, color red", rule is my own little shortcut, and what it does is the next two words that I utter - the first word becomes the property, and the second word or however many words I put after that is the value. And then I have little formatters to add the pixel tags if I need to, and things like that.

**Adam Stacoviak:** What happens if you mess up?

**Jerod Santo:** Don't do that. Don't mess up.

**Adam Stacoviak:** Yeah, what happens then?

**Josh Comeau:** So a lot of the times I just map from whatever I would do with typing. So I would just say "command zip", and zip is the word for the letter z. So I would just undo using the standard keyboard shortcut. And you can say "command zip fourth", and you'll press Cmd+Z four times.

**Adam Stacoviak:** Right.

**Josh Comeau:** So that's essentially -- there probably is Talon-specific ways to do some of this stuff. I think you can actually just say "Undo that", but I just use the keyboard shortcut, because it's kind of the same thing in my mind.

**Adam Stacoviak:** Right. When you're doing this kind of coding, having had the ability to do it with your hands, \[unintelligible 00:31:59.26\] but just with some pain at some point, but then via voice... Is there a preference? Would you prefer to do it with your hands? Do you find it somewhat maybe even different in what you're able to create with your voice? Because there might be an obvious preference, but I'm just not sure.

**Josh Comeau:** \[00:32:18.17\] Yeah, that's a fair question. I'd say that overall I do think that I prefer typing. And part of that too is that, you know, I have 3-4 months of dictation practice, and 25 years of typing experience. So there is a little bit of an asymmetry there, just in terms of practice. I'd say for about 10% to 20% of the things that I do, dictation actually is better and faster. A good example would be creating a StyledComponent. If I was to do that with typing, I would have to type "const TheNameOfTheThing = styled.TheElement the tick", I'd have to press Enter, a second tick... There's a lot of fussing about. Whereas if I say "Styled title heading" or "Styled heading title", it's much faster to say that than to type all those characters.

So there are cases in which it's faster, but the cases in which it's faster are cases that I do often enough that I've taken the time to explicitly write a little Python to have that work.

**Jerod Santo:** Right...

**Josh Comeau:** For a general case, if you're doing just general data munging or whatever, non-standard things, it does feel a fair bit slower. I would say that I'd estimate my dictation speed in terms of the raw output is about a quarter to a third of my typing speed. Now, that's not to say that my overall output is a quarter to a third, because I think a lot of programming is thinking, and planning, and all of that stuff is unchanged.

**Jerod Santo:** Sure.

**Josh Comeau:** So for relatively trivial things, like implementing a mockup where there's nothing too wild in the design, that feels quite a bit slower, because a lot of that is typing. But if it's solving some hard problem, it's kind of awash, because most of your time is spent thinking and trying to figure out how to solve this problem, and debugging is similarly just a matter of trying -- like, write 15 characters and then test it, and that stuff doesn't take too much longer.

**Jerod Santo:** Is there any context switching that goes on in your brain when you go between the thinking and the dictating? Because I feel like as I get into flow, I'm typing, and that is second-nature. I'm thinking the solution, but I'm not really necessarily thinking the keystrokes and the logistics of getting it into the machine. But because you have to say those out loud, do you find any context-switching back and forth between "What was I trying to do again? Oh yeah, now I'm gonna do it. I have to say this, I have to say that"? Or does that also melt away over time?

**Josh Comeau:** It does melt away. A couple of people have asked me, "Hey, I sprained my wrist. Should I look into this?" And what I tell people is "If you are not going to be able to type for two months or longer, give it a shot. If it's less than two months, probably not worth it. And granted, it really depends on your situation, and this is a broad statement. If you really need to get stuff done, then yeah, go for it. But in my case, the first couple of months were frustrating and difficult, for exactly that reason. It's like you're tripping over your own feet.

The process of actually vocalizing stuff is making you lose your train of thought, and you can't get into that flow state, because you're so focused on the process. But definitely, I'd say after those two months I've gotten to the point now where it is kind of just second-nature, and it's just the same thing as typing. It becomes muscle memory -- can it be a muscle if it's your throat? I guess that's a muscle...

**Jerod Santo:** Your tongue, too.

**Josh Comeau:** It's a similar kind of muscle memory.

**Jerod Santo:** Yeah, different muscles.

**Adam Stacoviak:** What about scenarios? Sure, we're in a pandemic, so it sort of limits this, but could you do this in a coffee shop? There are some limitations in terms of your environment that you can be in to do this (maybe) well.

**Jerod Santo:** True.

**Adam Stacoviak:** I'm assuming you probably could do it in a coffee shop, but it might be difficult, because -- does Talon know your voice in particular? Is it able to only channel your voice? I know whenever I'm speaking to even like phone numbers you call, like 800 numbers for your bank or whatever - I can't have anybody in the background saying a thing, because next thing you know, option 1 is pressed instead of option 2, or whatever... You know, any noise in the background totally disrupts the flow of what I'm trying to do. What is it like for you?

**Josh Comeau:** \[00:36:08.24\] Yeah, so there's two aspects to that. One is how much does the environment affect the technology, and the other is "How can you do this when surrounded by people? Does this bother the people around you? Is it problematic in that way?" For the first one -- actually, for both of these, thanks to Emily's talk, Perl Out Loud, I discovered that they sell this thing... It's like, you strap it over your face; it's like a mask with a built-in microphone. It looks a little silly, but I imagine that would solve both of these problems, where it really makes it so that your voice is the only thing being picked up... And it muffles your voice to the point that you're probably not disturbing people around you.

My snarky answer anyway - because a couple of people have said "You couldn't do this in an open office. It would make working in an open office miserable", and my thing is always like "Isn't it already? Is it really gonna make it that much worse?"

**Jerod Santo:** Pandemic bonus - you get a free mask out of the deal, right? You already have there the mask.

**Josh Comeau:** I thought that too, a couple of months ago or a couple of years ago now, I guess. "It would look a little silly, at least in this country, or this part of the world, to be wearing this face covering." But now you stand out if you don't.

**Adam Stacoviak:** Everyday attire.

**Jerod Santo:** You fit right in.

**Adam Stacoviak:** You can even style it now. You can bedazzle it if you wanted to. \[laughter\] They'd be like "Yeah, that guy is cool." So you could, if you wanted to, code in a coffee shop. What about, I suppose...

**Jerod Santo:** Pair programming.

**Adam Stacoviak:** Yeah, pair programming... Or anybody else even around you. I guess people wouldn't get annoyed; so if you're working from home -- I guess my wife hears me speak into a microphone often, so if I'm speaking my words to code, probably not that big of a deal.

**Jerod Santo:** You're talking about slapping people over and over again. "Slap, slap..."

**Adam Stacoviak:** That's true. \[laughter\] "Who's that guy slapping over there?"

**Josh Comeau:** \[laughs\] It really depends on your situation. I'm very privileged in that I have a dedicated home office, so I can lock myself in here and I'm not bothering anybody.

**Adam Stacoviak:** Sure.

**Josh Comeau:** Certainly, when I started this, my partner would occasionally pop his head in and say like "Are you talking to me? What's going on in here?" And you can be a little self-conscious, too. You're not used to speaking out loud. It's like a weird thing. But in my case - and I recognize that everyone's situation is different - if you have a private space, then that really kind of nullifies that concern, once you get over just the self-consciousness of it.

**Adam Stacoviak:** Can you speak to maybe -- since you've been doing frontend for quite a while, and \[unintelligible 00:38:17.10\] and these various things that we've gotta deal with in terms of frontend developers... Like, we're the frontline, in many cases, to implement and care about accessibility. Can you talk about maybe your transition from everyday frontender to someone with this problem, to have to care about it maybe even more because you're sort of in the trenches with it?

**Josh Comeau:** Yeah, so -- I mean, actually when I started this, the co-worker who suggested this to me said "Even if it doesn't work out, at the very least it's an interesting accessibility case study." Because now it's like I'm involuntarily being thrown in the deep end of trying to use the web without a mouse and keyboard.

I should also say that it started with my left arm, and I'm right-handed. So for the first little bit, it was actually kind of alright with the dictation, because I still had a mouse, and I would vocalize -- and you can even get clever with that, because as I'm talking, I'm already planning where my next step is gonna be, so I can have the mouse right in position, so the second it outputs those characters, I click and I can keep talking. You get in this nice flow.

But then my right arm started exactly the same thing. Not sure why. I had the same kind of initial injury, but my right arm, probably because I started relying so much on my right arm, because I kept my left arm doing absolutely nothing, and my right arm had to shoulder all of that burden... But - sorry, what was the question? Oh, the sensibility...

**Adam Stacoviak:** The empathy, I suppose, because... I mean, you always care, but things change; problems in the world change whenever you experience them personally.

**Josh Comeau:** Yeah.

**Adam Stacoviak:** So you may have cared beforehand, maybe after dealing with this, and then obviously having to do such measures to continue to do your job, and to enjoy what you do... It probably has to give you a different perspective on implementing and caring about, being a frontliner, essentially, in the \[unintelligible 00:40:03.23\] world and accessibility world. The frontenders are pretty much who implements that stuff, so it's us who cares anyways, but you double-care now.

**Josh Comeau:** \[00:40:14.26\] Yeah, and I would have told you before all of this that accessibility was important, and I always knew it was important, but it was theoretical. I had never watched someone struggle to use a thing that I had built because I neglected to take into account how they were using computers... So it was always this abstract notion. "I wanna do this because it's the right thing to do."

Essentially, you're just following a style guide and just hoping that it works... Whereas now, you get to realize that "Oh, this is actually how people use the internet", and it is awful, in a lot of cases, because so many websites have neglected the absolute -- like, the stuff that you get for free; the little focus outline that everyone hides, because they think it's not cosmetic... Until I got the eye-tracker - and we should talk about eye-tracking - I was essentially a keyboard user in terms of how it worked, because I would say the word "Tab", and it would navigate me. And I could do the same, like "Tab fifth" to jump by five spaces. But that was my way of navigating, because I couldn't use a mouse, because my right arm was bothering me, and I hadn't yet discovered eye-tracking. It was like a 2-3 week period, so it wasn't long... But it was enough, just in your day-to-day internet usage. I felt like "Oh, this is really awful." You have to make educated guesses as to what's being focused right now.

If you have a little area in a side panel that isn't scrolled and you wanna scroll it, I don't know how to do that, so I would just not do it. Or I would pull out a mouse and be cursing the person... Because normally, you would use a mouse wheel, but I don't have a mouse wheel. So there's definitely a lot of empathy that is given through this experience, and it's just made me even more appreciate how important this stuff is.

I think it's so important to recognize that it isn't binary. It's not that there are disabled people, which are other people, and then there's non-disabled people (abled people), which is -- it's like, we're all kind of somewhere along the spectrum, and it's not immutable. It changes over time. So just because you're not experiencing any disabilities right now doesn't mean that's gonna be the case forever.

And really, the best case - unless we all get his by a bus; not to be too morbid - is that we get old enough that our vision starts to deteriorate our motor control; you lose a bit of motor functionality... All of us will be affected by this at some point. And there's even temporary things.

I know that Jen Luker has made this point - if you're holding a baby, in that moment you only have access to one hand, and that changes your experience using the web. So there's a lot of perspective that has been given to me involuntarily through this process.

**Adam Stacoviak:** I guess that's the fun side of user experience, too - you think about all the scenarios your users might be in, whether they are disabled or they are abled, or they're temporarily disabled because they have a baby in their left arm and they've only got the right arm; and it may be their dominant arm, but still yet, they're one-handed temporarily. That's the fun part of being on that frontend, being in user experience and thinking through those fun things... But you definitely have a different perspective having gone through something yourself temporarily, or long-term.

**Jerod Santo:** Yeah.

**Josh Comeau:** Yeah. I'd say that also that it's tricky, because it's not just one thing. It's not just like "My site is accessible because it's keyboard-navigable", because what about people that are colorblind? Can they use it? Often, you have competing interests. I'm really into animation, and this is something I struggle with sometimes, where for people that have vestibular disorders, animation can cause motion sickness, and you can get nauseous, get a headache... But animation can also be a usability win, because it can make things a little bit easier to understand for people that have cognitive disabilities.

\[00:43:59.05\] So there are sometimes trade-offs there, and fortunately, I think browser vendors and operating systems, manufacturers are starting to become aware of this and giving that control to users. Specifically with motion, there's a media query "prefers reduced motion", and that way users can specify "Hey, I don't wanna have any of this sweeping motion." The developer still has to take that into account, but at least we have that control now. We can tune the experience for the user.

**Jerod Santo:** Well, we shouldn't go too far without talking about the eye-tracking, because we teased it twice at this point, and it's pretty intriguing...

**Josh Comeau:** It's definitely the most sci-fi part of my setup...

**Jerod Santo:** Yeah. So before you had eye-tracking, you were basically tabbing around using keyboard navigation to navigate everything - your web browser, your operating system... But then you figured out eye-tracking. Tell us about that.

**Josh Comeau:** Yeah. So it's actually part of the same software, Talon Voice. They have support for the eye-tracker. This is very easy to get confused, so I wanna make sure to be very explicit. The device that I have is called the Tobii 5. When you go to the device manufacturer's website, it's this "Windows Halo Gaming/Augments Your Gaming Skills" kind of thing. It doesn't look like a mouse replacement at all, and it only supports Windows.

The idea is that the people who built Talon Voice built custom drivers for this piece of hardware. So even though the intended purpose of this piece of hardware isn't a mouse replacement, it functions like that cross-platform, so it works on Mac, Linux and Windows. And the idea is it's a bar that you strap -- it looks like an Xbox Kinect, it kind of has that kind of an idea. You strap it to the front of your monitor, and it has little infrared sensors; it can tell where you're looking, essentially. It's not the most precise, but they've accounted for that.

The way that it works is you look at where you want to click and you make a little popping noise \[popping noise 00:45:49.28\], and it zooms way in, so maybe like a 4 inch by 3 inch rectangle; it zooms way in, and now because you're so zoomed in, you can make really fine adjustments. So you move your eye a little bit and the mouse moves over maybe four inches in real-life space, but it's like a couple dozen pixels because it's so zoomed in... And you make the popping noise again to actually perform the click. You can also say "Righty" if you wanna right-click. I don't think this is intentional, but it works - you can just do like a double-pop, and it will double-click.

**Jerod Santo:** Okay.

**Josh Comeau:** So that's kind of the idea with that - it tracks where you're looking. The nice thing is that it's not activated till you make that popping noise. And there are settings for this. You can actually have it be always activated... But then it's super-distracting, because you have this jittery cursor that's always right where you're looking. So it's not the best experience. So this is out of the way; you don't notice it till you need it. Then you make a little pop noise, you get the zoom-in... And all of this happens super-quickly. It probably sounds really tedious, but we're talking like maybe 250 milliseconds between both. You can do it really rapidly.

**Jerod Santo:** Pop-pop... So people asked you would they set up Talon if they had some pain, and you said "Well, two months or more, otherwise it's not worth the trouble." Is the eye-tracking in that same conversation? Could this be generally useful to be awesome and better at computing/being that computer person, to just have it available whenever you want it? And just, if I need a pop-in and pop-out, I can be a super computer person.

**Josh Comeau:** That's a good question. I don't know if this is a combination that is possible, but if you can't use a mouse but can use a keyboard, then totally. Actually, I can imagine a bunch of cases, because the mouse requires a lot of dexterity, and key typing may not.

**Jerod Santo:** Totally.

**Josh Comeau:** I can totally see that, yeah. Because the learning curve is really around the dictation. The eye-tracker - you get used to it in a couple of days, and then it just becomes this nice thing that just works. So yeah, totally.

**Jerod Santo:** A lot of people, the mouse is specifically what gives them the pain. It's the weight of it, and dragging it... So switching to a trackpad, or sometimes they have those ergonomic mice that are vertical, and it's like a ball that you roll around like that - that will oftentimes be good enough. But if not, and you have no trouble with typing, then maybe eye-tracking is for you.

**Josh Comeau:** \[00:48:03.25\] Yeah. And what I've come to realize is there's a lot of mouse interactions that I don't even think of, that I use heavily. Dragging and dropping is a good example. Scrolling, using a mouse wheel is another. Dragging and dropping you can do. I don't do it often enough to remember off-hand, but you say something, instead of making the pop noise. So you make the pop to zoom in, then you say something, and then you kind of move the mouse and say something else to release it, in that case. And it works surprisingly well.

Scrolling, I don't know... That's one of the activities that I just use the trackpad for now, because I've gotten accustomed enough. One of the things, too - when I started, I would still have the mouse and keyboard on the desk, and I would forget, and I wouldn't remember until my elbow starts burning a few minutes later, and then I'd regret it the next day. So I've removed all that stuff from my desk. But now I've gotten comfortable enough, both because it's getting better, but also because I've gotten used to this alternative setup; I just always have a trackpad. If I need to scroll, I'll use that. If I need to click, I'll just use the popping, and it works pretty well.

**Adam Stacoviak:** I think I would have difficulty learning how to pop like that so quickly and accurately. I can do it once... I'm pretty good at just doing it once, but not two times.

**Jerod Santo:** That was pretty good.

**Adam Stacoviak:** Maybe I could do it. Okay, never mind. I'm pretty good.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** I can do this. Bring out Tobii, let's do it.

**Jerod Santo:** He's a convert. There we go. Pop-pop.

**Adam Stacoviak:** Alright...

**Josh Comeau:** It is the kind of thing where sometimes if your mouth is right -- like, you start noticing all the subtle different environmental factors of your mouth that affect that.

**Adam Stacoviak:** Absolutely. I've got a less than one-year-old, so I'm always going \[00:49:32.23\] to that kid. So unless my lips are a little bit moist, it ain't happening. It just turns out into like a buzz, or something like that.

**Josh Comeau:** Yeah.

**Adam Stacoviak:** Listeners, this is the first time you're getting a lot of effects...

**Jerod Santo:** A lot of random noises from Adam here... \[laughter\] Put those together and make a beat. So Josh, do you ever have voice strain, or do you ever feel like you're -- not mentally exhausted; we've already talked about that aspect. But what about your voice? Sore throats, or any trouble there?

**Josh Comeau:** This is totally something that -- it was the most frustrating thing in the world, where when I got really into the hang of this... You know, you're speaking for eight hours a day if you're doing this typical workload, and my throat very quickly got unhappy with that. So I was limited to 4-5 hours a day before my throat would get sore. A couple times I let it get too sore, and then I had to take a couple days break.

My solution for that is twofold. One is I got a bunch of lozenges -- I got the family pack of lozenges, so I was going through a couple of those a day. I also got a humidifier for my office, which is actually on right now, and kind of making a nice little mist... But essentially, just making sure that the humidity in my room is always between 50% and 60%. Drinking lots of water is another thing.

It certainly becomes -- it's like an annoying thing that you have to deal with, but I imagine that there are people who can do this. So many careers involve speaking all day, so I imagine that it's -- and even in the couple months that I've been doing it, I've noticed getting a little bit more stamina there, where my voice doesn't give out so easily.

**Jerod Santo:** Yeah, I would expect it to build over time. I know when I switched to a standing desk probably ten years ago now I couldn't stand all day. It was like an hour here, an hour there, and then I built up to where I'd stand in the morning, sit in the afternoon... And then six months later, I would stand for six hours... And now I don't even think about it. My legs and my feet are just used to that strain, because I just built them up.

So I imagine five years of this and you probably wouldn't even think about it in terms of the strain. But when you get started, it's gotta be annoying, especially because this is your thing that you're doing to fix your problem, and now it's causing a brand new problem, right?

**Josh Comeau:** It does feel a little bit like everything is going wrong all at once. Yeah, it can be discouraging, especially because you're often in a discouraging situation already. But I always just kind of try to keep on the bright side and just think that maybe this is a good opportunity to -- and granted, it also didn't help that this was during lockdown, so it was like "Let's go out and do something!" Well, you can't really do that either.

\[00:51:58.12\] But you know, just take a moment to be present and enjoy -- essentially, take it as an opportunity... You're blocked from doing work, but -- for myself at least, I find that I'm always raring to get stuff done, and part of this has just been being comfortable not doing that, and just living your life. Go make a nice meal, and spend time with my partner... Do those nice things that I always didn't save enough time for.

**Break:** \[00:52:35.01\]

**Jerod Santo:** So this experience has given you renewed vigor with regards to the importance of accessibility. Anything else you've learned over the last few months as you put this into place, and been able to slowly move back into somewhat more of a regular life as a coder? What have you learned through this process?

**Josh Comeau:** I'd say that there's three main takeaways that I've had. The first we've kind of just talked about is accessibility really matters, and it is like a real thing. It's not just some abstract good that you do; it's not just about getting the Lighthouse score to feel good about yourself, it's about "Is this actually a good experience for people? How can I verify that?" So that's takeaway number one.

Takeaway number two is a bit more positive, which is just that it is not catastrophic if you're not able to type. It's not career-ending. It's certainly inconvenient, and it takes a few months to get used to it, but there's an option here that is viable. I think a lot of people worry; people that might have an experience like a close call, and it's just always in the back of their mind, like "What if I lose that?" And actually, you mentioned that earlier.

**Jerod Santo:** Yeah.

**Josh Comeau:** I think that's super-common. Hopefully, this is a reassuring little bit of just like "There is an option. It's totally viable. I can see myself doing this if my situation doesn't improve. My career isn't going anywhere."

**Jerod Santo:** It's sustainable. It may be tedious, but you think you could do this for ten years...?

**Josh Comeau:** Oh, yeah.

**Jerod Santo:** \[00:55:58.28\] That's good to know for people, like "Well, if worse comes to worst, this is an option for people."

**Josh Comeau:** Yeah, absolutely. I think that if you have enough of a will, the technology exists to provide a way. So that's the second thing. The third thing is just like don't dilly-dally with the things that you wanna do in life. I've had this idea in the back of my head for a few years now, that I wanted to start some sort of online education thing. I've been teaching at a bootcamp part-time for the past couple of years... It's always been something I've been interested in. But in my mind, I had like an infinite span of time ahead of me. So I'm enjoying my job, just working as an individual contributor... Why not keep doing that? And you know, this experience -- I consider this kind of a close call, in the sense that it's not catastrophic. My life was never in danger. But it was still like enough of a wake-up call. You don't have unlimited output. You have a finite amount of typing you will do in your life, and if there's something you wanna do, spend that resource wisely.

So I left my job... I was working as a staff software engineer at Gatsby. I am now self-employed, and I'm building an online course to help teach -- I mean, starting with CSS, but a bunch of stuff, to other developers.

**Jerod Santo:** Well, congratulations. A big move. Is that scary for you, or is it just exciting?

**Josh Comeau:** A bit of both. I should also say that I'm in a very privileged position, which is that my cost of living is relatively low. I have a decent amount of money saved up, so there isn't a lot of financial pressure yet. Now, if we get to a year from now and things aren't going so well, I expect I'll feel very differently. But as it stands, I have a comfortable cushion, and I'm able to just focus on this thing that I wanna do.

Really, I just feel really excited about it. It's certainly a thing that I've wanted to do for a long time, and it's thrilling to be able to finally do it.

**Jerod Santo:** Yeah. Well, I'll say you're a good writer. We've found your blog post and I've seen the other things, and you have an eye for animation and design which I think is enviable... So you're set up and you have the desire to educate, so it seems like you're well-positioned. That being said, training and education and this kind of thing is a crowded space. There's a lot of people trying to help developers learn things... So I'm curious your angle at the industry, or your thoughts on what are you trying to build, and why is it interesting or neat in your mind.

**Josh Comeau:** Yeah, so it is totally -- like, I am not going to create a resource for learning something that is not already prevalent. There's already a million ways to learn everything. But my thinking for this has been twofold. One is that as much as there is educational resources, none of them are me. And everyone has their own learning style, and everyone has their own teaching style, and so it will be a sort of -- you know, it will appeal to some amount of people, it will not appeal to others... And that's kind of the goal - don't make something that's aimed to be for everybody, make something that a smaller segment will really appreciate.

And the second way I've been thinking about this is find something that is already taught, but covered from a new angle. The course that I'm building is called "CSS for JavaScript developers." It's kind of all there in the name. So many JS developers, and myself included for a long time, have picked up CSS incidentally. You learn about properties as you need them, but you never take the time to understand it at the deeper level, like what is the rendering algorithm? Why does it behave this way? Why is all of this -- you know, you run into a problem, you find the solution on Stack Overflow, you copy-paste a couple of snippets and it works, but you don't know why it works, and the next time it breaks you won't know how to fix it... There's so many folks in that position, and all of the resources that teach CSS kind of teach it from the perspective of like a WordPress developer, or someone building a static HTML/CSS website. There's not a lot of how to use CSS effectively with React, or Vue, or Angular.

So that's kind of the angle I'm taking on this. And a lot of that is just in the framing, how you cover stuff. I try to use analogies that will be relevant for JavaScript developers, talking about for example the cascading in CSS is actually just a bunch of spread operators put one on top of the other... Little things like that. Trying to find ways to describe content based on things that JavaScript developers will already know - I don't think that exists. So I think that'll be a nice bit of fresh air for people.

**Jerod Santo:** \[01:00:05.11\] I tend to agree. I think that's an interesting angle, and there's definitely a market there. There's lots of us who either don't know CSS, are afraid of CSS, or use it in anger \[unintelligible 01:00:16.02\] which is like "I'm using it because I need to get this thing done, but I don't know why this works. I'm just going to shove it in there. Oh, it's slightly off... I'll just move this one or two-- okay, there it is. Never touch it again." There's a lot of people that aren't like that, but there are plenty of us who are like that... And notice I'm using the plural form of the first person because I've definitely had such fields as that over the years.

So that's cool. I think there's definitely a place for people to come in that space and say "Look, CSS is not just something you have to use, but it's actually something that you can wield to great success if you understand it better."

**Josh Comeau:** Yeah. And what I think is really interesting is that there's so many people that are really comfortable with JavaScript, whether that's vanilla JavaScript, or with an application. Imagine if you could have that level of comfort with CSS; you could build whatever you want. There's all sorts of doors open now because you have the complete toolkit - I'm assuming you know HTML as well; now you know how to do web development top to bottom, or start to end.

That's kind of the ambition with this - to get people to feel comfortable with it and to enjoy tackling it. Not to say that I never get confused and have to spend time debugging, but I always know I can -- like, no matter what mockup you present me with, I will be able to find a way to build it, or I'll have a reason as to why the platform doesn't allow for it. But even if I get stuck on something, it's like a fun challenge, in the same way that it is with React, or with anything else. It's not this foreboding, stressful thing that takes me out of my flow.

**Jerod Santo:** So how did you get over the hump, personally, with CSS? What brought you from somebody who's maybe in that camp - or you said you had some frustrations with it at one point - to the point where you're like "I can teach this to others." You must like it if you wanna teach it and expand it, right?

**Josh Comeau:** Yeah. I mean, it's one of those things that probably 4-5 years ago I was frustrated with not being good at it. So it was a somewhat concerted effort of not just taking things at face-value. So when you find a snippet that works, don't just copy-paste it and move on. Poke at it. See "Why does this not work this way?" Go to the MDN documentation and dig into it. Understand. Every property, every declaration has a whole page on MDN. You can figure out flex-grow, and just learn all kinds of little details about it. That's kind of what I did for several years. I would just never miss an opportunity to dig into something, and just build that intuition, a working mental model of how does this property work, how does it interact with all these other properties that it can be often paired with... Why does min-width do funky things when it's inside a Flex container? I don't actually know the answer to that question in terms of why, but I know --

**Jerod Santo:** \[laughs\] \[unintelligible 01:03:05.14\]

**Josh Comeau:** ...but I know how. I know how to use it and how to get it to do what I want.

**Jerod Santo:** Right.

**Josh Comeau:** That's the other thing, too - I don't wanna make this sound too theoretical. It's definitely a practical "How to build user interfaces." We're not gonna talk about browser vendor decisions; we're just gonna talk about "This is how to do the thing that you want, and this is how it interacts with these properties."

**Adam Stacoviak:** What's the state of this course so far? Is it in the works, is it there a landing page? Is it a buy-it-all, learn-it-all, or over time? What's the format?

**Josh Comeau:** Yeah, so because I'm a developer and because I don't have enough self-control, I'm building my own platform instead of just using an existing one. I do have a good reason for this though, which is--

**Jerod Santo:** We all do...

**Josh Comeau:** \[01:03:49.24\] ...if you've been to my blog, I really enjoy these interactive experimental widgets. And by experimental, I mean you can experiment with it. When I teach the bootcamp, if I can find a way to make a little interactive thing that people can play with... I did this when I was covering spring physics most recently. It's just like a really, really nice way to learn things, and none of the platforms that exist will support this. So I'm building my own platform.

It's gonna be kind of a self-paced thing. I'm currently aiming for around 15 modules. I have three that are in rough draft shape. So I'm still very early in the process, although I've done a lot of the platform development upfront; so that's probably like 75% of the way there. And now it's just about doing the material and coming up with good ways to learn something. The goal really is for it to be multi-modality, in the sense that it's not a video course where you just sit and watch me talk.

There will be videos, but every kind of content serves a purpose. A video might be a high-level introduction, or like a "Here's how to use the browser dev tools to do this thing", in a way that just is so much easier to watch someone do it. Articles are a great way, because they're indexable, you can come back to search for them, you can skip through them really quickly... Interactive explanations to poke at something and develop that internal working mental model... And then exercises, so opportunities to practice, challenges to build stuff, with solutions, and stuff like that.

So it's a lot of different formats that I'm hopefully using strategically, in the sense that each of them will play to their own strengths and produce a really effective, really efficient way to learn this thing, where it's not gonna take too much time, and hopefully optimize for that.

**Jerod Santo:** It sounds like you have a lot of work still ahead of you...

**Josh Comeau:** \[laughs\] Yeah, it's definitely early going. I'm hoping to launch this thing in February of next year, and I'm starting to realize that's a little optimistic... But that's the plan. You can learn more about it; there is a landing page, it's css-for-js.dev. It's like a play on css-in-js. So go to css-in-js.com and there you'll learn a little bit more about it. You can sign up for updates and I'll email you with little tidbits as I go along.

**Jerod Santo:** Cool. So the platform is 75% done, so you only have 75% left... \[laughter\] And then the course is 3 out of 15, so you have 18 more modules and then you'll be ready to go. \[laughter\]

**Josh Comeau:** I am very much aware that that last 20% is actually most of the work, but...

**Jerod Santo:** That's alright though...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** If you love what you do, then it's just more of the stuff that you love.

**Josh Comeau:** And that is.

**Jerod Santo:** If you like creating this stuff, then it's just good.

**Josh Comeau:** I'm having so much fun with it, especially now that I'm able to actually type for a few hours a day. I'm having a blast, and I'm super-excited to share more about how it's going and what it'll look like.

**Adam Stacoviak:** What about building your list in advance? I know you blog. Do you have any blogging plans between now and then that sort of help you arrive to a room full of people, versus arrive to a room full of... Nobody? Or less people.

**Josh Comeau:** Yeah... It's one of those things where I have no -- I remind myself constantly that there is no guarantee that this will work. It's possible I'll launch this and sell very little, and essentially discover that this is just not the career change I had hoped it was. But I do have a blog, the blog has a mailing list, and I think I'm at about 16,000 subscribers now, which I think is a pretty healthy number... And I do still plan to keep blogging. My blog posts will probably take on a little bit more of a CSS twist, because I blog a lot about Gatsby and React and animation. And I have blogged about CSS as well, but especially now, I kind of want the two to play into each other, so that people who are interested in the blog posts will have a resource that they can continue learning if they like my style and are interested in it.

**Adam Stacoviak:** Speaking of style, I like how you use sound along with animation. That's a pretty interesting thing. I'm sure you'll teach about it, but could you give us a snippet of why those two play well together, and what you like about it?

**Josh Comeau:** Yeah, that's such a good question. Everything has its place, and this is not something that I would advocate for everywhere, but mobile applications are really good at reaching in to other human senses. On the web we have one. You can see what's happening, but you don't usually hear websites. There isn't usually a sound element. Mobile apps have three. You can see them, you can hear them, and you can feel them, because there's haptic feedback.

I find that there's so many mobile apps that just do a really good job... And it doesn't have to be over the top. A little confirmation sound when you tap a button on mobile can be really satisfying. It's the kind of thing that can make a product feel more tangible and real.

\[01:08:22.09\] It's the same thing with animation. Things in real life don't just -- if you click on a link, or let's say you have an accordion kind of thing; you click on it and it slides down. Things in real life don't just teleport, or get repainted from one frame to the next. There's a process there. When things move, you can see them. There's individual steps. So that's why I think animation is so worthwhile - it makes a thing feel more real. And sounds just add to that... Because similarly, things are not silent in real life. If you move a thing, it usually makes a sound.

On my website, which is just my name, joshwcomeau.com, you do have to click somewhere first, because the web API doesn't let you play sound until you interacted with the place... But if you hover over - I think it's at the top, it's called Tutorials; there's a little dropdown that pops out, and it makes a little \[01:09:04.20\] sound. I should also say that I went to school for audio recording technology. My only post-secondary education is a trade school in sound recording. So I had a bit of a background that gives me the ability to make my own sounds, and edit sounds, and essentially just try to come up with things that are really appropriate for the situation. But I do find that it adds so much to the experience... It's one of those little big details; it's not gonna change anyone's life, or dramatically change their perception, but it's enough to catch your attention.

**Adam Stacoviak:** I dig the -- I think it's a speaker, I think, where you turn the sound on or off... So that way if you have a preference, you're like "Hey, I don't want any sounds", you can turn it off, and you get that final sound as it goes away. When it comes back, it's sort of like a digital shocking, or I don't know what it sounds like.

**Josh Comeau:** A trill I think is how I would describe it.

**Adam Stacoviak:** Is that what it is? Okay.

**Josh Comeau:** I mean, that's just my own word.

**Adam Stacoviak:** Those are cool.

**Josh Comeau:** I appreciate that. I mentioned briefly that there's a time and a place for everything. Not everyone wants sound... I've gotten some fair criticism. When you sign up for my newsletter, there's a trumpety sound, and people have mentioned that their volume was way up, and it was startling and uncomfortable, and it woke their baby up... So I've actually made an attempt to tone some of that down.

**Adam Stacoviak:** Unexpected sounds, yeah. When you have interaction like with a sound button, or even a nighttime menu, where it's like nighttime or daytime menu to swap the theme - that's where you would expect potentially some sound, if the designer or the developer was keen on giving you that. But I can agree with signing up for a newsletter and hearing a trumpet sound I'd be like "Whoa! I did not expect that."

**Josh Comeau:** \[laughs\] Yeah. My solution for that - because I do like the sound, honestly - is I've set it to 25% volume. So it's not gonna be this overblown kind of shocking thing unless you really have your sound cranked... But then pretty much -- I think if you have your sound that loud, you're bound to have some sort of unpleasant experience at some point.

**Jerod Santo:** It's funny you talk about the sounds, because I just upgraded to Big Sur; I'm not sure if either one of you guys have yet, or use Mac...

**Josh Comeau:** I haven't...

**Jerod Santo:** But they've redone all the sounds.

**Adam Stacoviak:** Yes...

**Jerod Santo:** And I like them. I hadn't even thought about it, but the trash can sound is different, the bell when you hit the wrong button in your terminal is different, delete is different... And I don't really like the redesign all that much, I'm getting used to it, so like the icons and everything... Meh, it seems like a sidegrade to me more than an upgrade... But the sounds - I'm telling you... It's worth upgrading for the sounds. It's pretty good.

**Adam Stacoviak:** I'm in the camp of like -- I've only played with it for a little bit. So I upgraded, but I didn't have time to actually play with the machine I upgraded on... And the one sound I heard was the deletion sound. I was like "That's different. I don't know if I like it, I don't have time to discern if I like it... But so far I'm kind of bummed, because they've probably changed more... What else will I find?"

**Jerod Santo:** All the sounds are different.

**Adam Stacoviak:** That's the camp I'm in right now.

**Jerod Santo:** \[01:11:59.07\] Yeah. You're kind of in the "Who moved my cheese?" moment.

**Adam Stacoviak:** Yeah, don't move my cheese. And if you do, let me know you're going to, and give me an opt out.

**Jerod Santo:** \[laughs\] These are good sounds. I think, Josh, if you're a sound guy, I think you'll enjoy this upgrade. At least check them all out.

**Josh Comeau:** Oh, I'm excited, yeah.

**Adam Stacoviak:** I'm curious, since we're on that thread then... The sounds that you have on your site - you made those sounds? What's your process, what did you -- did you use a synth, did you use your mouth? What did you do?

**Josh Comeau:** I should say, I've made a few of them, but actually most of them I got from FreeSound.org, which is just an online repository. It's like a lot of not-so-goods. You have to sift a little bit; it's a diamond in the rough kind of situation. But there's a lot of good sounds there, and the ones that I did do myself were usually with my mouth. So I'd just put my mic on, I'd record a little sound, and then modify it.

You can get really clever and kind of fun... On my homepage there's a list of categories, and when you hover over them, they make a little soft pop sound. That's actually the sound of a plunger being unstuck, but I truncated it. Normally, it's like \[01:12:58.04\] and I just kind of took off the opening sound. It makes this satisfying little pop... So yeah, there's totally little fun -- you can be really creative when it comes to sound design.

**Adam Stacoviak:** Very similar to your zoom sound.

**Josh Comeau:** My zoom sound?

**Adam Stacoviak:** Not exactly the same one. When you zoomed into the screen, you were like \[01:13:14.23\]

**Josh Comeau:** Oh, right. Yeah.

**Adam Stacoviak:** It's very similar, it's in the same vein... So I can see why you like it.

**Jerod Santo:** You have to be careful on your own website; it might start to recursively zoom and unzoom. \[laughter\] You'll get stuck on your eye-tracker, popping it off and on.

Well, we'll have to put some of those sounds into this episode, Adam... So now you're on the hook to do some extra editing and work some of his sounds into this conversation.

**Adam Stacoviak:** We'll have to.

**Jerod Santo:** Because we promised the listeners it would happen.

**Josh Comeau:** Sweet.

**Jerod Santo:** Yeah, totally. It's happening. Alright, Josh... Anything that we missed, or forgot, or anything else you wanna talk about, or questions you wish we would have asked and we failed, because we suck at this?

**Josh Comeau:** \[laughs\] You know, I think we've covered everything. I'm really thrilled with the chance to be able to talk about it. The main thing that I hope people get out of this is just some reassurance that if they're worried about having some sort of injury, this is a totally viable path. And also, just don't neglect to make sure you take care of accessibility, because it's super-important.

**Jerod Santo:** Absolutely. And I just love the -- it's just a very small, but a human spirit "You can't keep us down" kind of a thing... Like, "Well, we're just gonna find our way around this problem." We've done that, and you've done that, and it's very cool. It's a great story. In fact, I remember seeing Emily Shea's talk back in the day and wanted to get her on the Changelog, and then when I saw your post, and then I saw you referenced her, I'm like "Oh, this is it. Josh has to come on the Changelog and tell us about this", because it's such a cool thing to see people when faced with adversity say "Yeah, I'm just gonna figure out something else and I'm gonna keep doing my thing." That's pretty neat.

**Josh Comeau:** I think that's so much of what we do as developers. The thing isn't working, we have to find a workaround, and that's just what I did with this.

**Jerod Santo:** Right.

**Josh Comeau:** And granted, I wanna make sure that Emily and Tavis and the whole Talon community get a whole bunch of credit, because I probably wouldn't have been able to do this without the existing infrastructure and ecosystem... Because it's an overwhelming problem, but the technology makes it feasible.

**Adam Stacoviak:** Yeah, so many people just will crumble under their adversity. It seems like you've definitely found a way to thrive, and that's obviously enabled by others, like you'd mentioned... But I admire that about you, that you didn't just say "Oh man, this circumstance is terrible. I quit." That you persevered, and then you shared your story, which is the important part. Obviously, we're kind of biased towards sharing stories, because we are podcasters... But we appreciate that about folks in our industry, because even though things happen that aren't great or aren't desirable by everybody, or you may be in a circumstance and that's just not something you wanna be involved in... But you can still find a hopeful path, and share that perspective and story, because there's gonna be -- as you'd mentioned earlier in the show, at some point you may have a baby in your arms, you may be 80, you may be in a circumstance where you're not able like you are today. And to give hope whenever that happens I think is important.

**Josh Comeau:** I appreciate that. I almost wanna shy away and deflect some of that, because ultimately, what else would I -- it's kind of I had no choice. Of course I'm gonna try to do what I can. But the point is well taken, and certainly that's the hope - that people do have a little bit less weight on their shoulders if this is something they're worried about.

**Adam Stacoviak:** Absolutely. Well, Josh, thank you so much for sharing your story and sharing your time with us, and giving people hope. We appreciate that. Thank you.

**Josh Comeau:** Awesome. Thank you both.
