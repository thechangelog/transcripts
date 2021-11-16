**Jerod Santo:** Hey there. Jerod here, your internet friend. Today we have a very special episode. It's the big number 200. Can you believe we've made 200 of these suckers? I guess time flies when you're throwing weekly parties to celebrate JavaScript and the web

On this episode we're going to take a moment to celebrate the party itself. We're calling it Best of the Fest, and this is vol. 1. Last week I put out a call to JS Party listeners and panelists to send in their favorite moments from the pod. You could write in, or even cooler, you could record your voice and send that in to be played on the episode. Many of you wrote in, which is awesome, but only one brave listener took the time to record their message and send it to us. Well, fortune favors the brave, so here is listener Brian kicking off Best of the Fest. Take it away, Brian!

**Brian Zelip:** Hey, this is Brian Zelip in Baltimore, Maryland. Congratulations on making it to 200 episodes. I've been listening to JS Party since it's release. I've been loving The Changelog since at least 2014. I remember spinning up a couple servers on DigitalOcean back then for free using the Changelog discount, and it really felt like I was getting over... Like, "What's to stop me from using this discount over and over and over again?"

As a web developer with a day job, JS Party and The Changelog family in general have really helped keep me in the loop over all these years, providing guidance and pointers, and especially language to use when talking with others.

In looking over the past 100 shows, the first one that really jumped out at me was the functional programming show, \#163, with Eric Normand. That was a great show. I understood it and got a lot out of it. It really resonated with me. I got his book afterwards using the Changelog discount as well, and it's been great to dig a bit deeper into functional programming patterns using JavaScript.

As an extra bonus though, I have to give a shout-out to the music underneath and in between the podcasts. I just simply love what I call the Zelda trap jazz of Breakmaster Cylinder. And I love its variations into like island vibes, dance, and especially vapor vibes. I'm a big fan. Really looking forward to the Changelog feature on Breakmaster Cylinder. Thanks for everything, y'all. Cheers.

**Jerod Santo:** And thank you, Brian, for sending that in, and for listening to us so faithfully over all these years. 2014 - that goes quite a ways back. I love how you described Breakmaster Cylinder's music, "the Zelda trap jazz." You definitely get it. In fact, many of our tracks are inspired by the 8 and 16-bit video games of our youth. We'll often ask BMC things like "Hey, give us a Donkey Kong theme to transition", or we'll hop into the Slack channel and do an all-caps "MORE METROID VIBES!"

Here's a track we use... It's called Zegend of Lelda. Anybody who's familiar with the Zelda franchise will immediately spot the influence.

**Zelda track:** \[04:22\] to \[04:42\]

**Jerod Santo:** I am also with you on your episode selection. Our interview with Eric Normand on functional programming is definitely a highlight from our catalog. Here is a great moment from that episode. It's Eric Normand describing functional programming and how to think functionally in a language that developers can easily understand.

**Eric Normand:** Functional programming is like an onion, so you can go real deep… And there’s some people who go super-deep. But that first layer, that first gateway into the onion… \[laughs\] I started mixing metaphors…

**Jerod Santo:** It’s like the Onion routing; it’s like a Tor network kind of a thing.

**Eric Normand:** Yeah. I imagine it like – have you ever seen the original show Get Smart, the intro, where he has 30 different doors he walks through…?

**Jerod Santo:** Yeah, and then he holds up his shoe to his ear and talks into it.

**Eric Normand:** Yeah. He has a cell phone in his shoe. Yeah, but you go through all these doors, and you get deeper and deeper into the sanctum of functional programming. Well, that first door is just recognizing the difference between what I call actions, calculations and data.

Calculations are often known as pure functions. They’re the stuff you can do in your language that always gives you the same answer, no matter how many times you run them, or when you run them. So this is like addition. 2+2 is always 4, it doesn’t matter how many times you run that. But then there’s actions that do depend on when you run them or how many times you run them. So reading from an immutable variable - if you read after someone has written to it, you’re gonna get a different answer than reading before the other part of the code writes to it. Likewise sending an email, or writing something to disk - these are all actions, because sending the email zero times is different from sending it one time, or ten times.

And so making this distinction between actions that depend on time - because they’re hard to deal with - and calculations is like the first gateway into functional programming. Oh, and data is easy. Data is just the stuff that doesn’t do anything; it’s just inert. The strings, and numbers, and HashMaps, and lists, stuff like that.

**Kevin Ball:** I like how simple your language is there… Because I feel like one of the barriers to a lot of folks getting into FP is it feels like there’s a lot of jargon. And you start talking with somebody and you’re like “I just wanna send an email”, and before you know it, they’re talking about monads, and you’re like “What in the world is all of this…?!”

**Eric Normand:** \[laughs\] Yeah… I think that - you know, and I speak for functional programming as a community - we have over-complicated it. Functional programming has been incubated in Academia, and you don’t get tenure by making stuff easy. \[laughter\] You have to find a hard problem and solve it in some weird way, a novel way…

**Jerod Santo:** Right.

**Eric Normand:** And you don’t show credibility by just talking about basics. You have to use the jargon and show that you’re one of the club, and you understand this, you’ve earned your Ph.D. by learning all these obscure terms. So that’s a shame for the rest of the industry, for the non-academic side, that we don’t have a lot of good literature that has taken the time to like “Let me just shed all that academic stuff, and start over, and talk like real people, without all the jargon.”

**Jerod Santo:** \[08:05\] That clip is just the beginning of a truly great conversation. Even Kball and I, who have been exposed to epic concepts for many years, had some a-ha moments during it. If you want to hear more, it's episode 163. It's called "JS is an occasionally functional language."

Okay, up next we have a message from listener Heady Glee who says:

"Hi. I really, really loved the JS Danger episodes where Emma was the host. It was really funny. I was able to work through the questions with you guys and I could test my JS/Web knowledge together."

Well, Heady, as the now permanent host of JS Danger, I choose not to be offended by how much you like it specifically when Emma hosts. Just kidding... Emma is absolutely hilarious. JavaScript Jeopardy was her idea, and she was the host of our very first time playing the game.

**Emma Bostian:** This defines the element or elements to which a set of CSS rules apply.

**Kevin Ball:** What is a selector?

**Emma Bostian:** That is correct! Finally, selector is in the answer! That brings you up to 7,000. Alright, go for it, Jake.

**Jake Dohm:** Okay, I'll take JS Frameworks for 200.

**Emma Bostian:** I somehow knew you were going there... I hope you get this one right. This library was developed by Facebook in 2013, and is still the most popular JavaScript library.

**Jake Dohm:** What is React?

**Emma Bostian:** That is absolutely correct.

**Kevin Ball:** Popular by what dimension? I think jQuery is still...

**Jake Dohm:** Ooh...!

**Emma Bostian:** Oh, we're not doing this right now... \[laughter\]

**Kevin Ball:** No, I think it is the most popular among current developers, it's just the long legacy --

**Emma Bostian:** Yeah, I don't mean popular in terms of usage necessarily, I mean in terms of likability.

**Kevin Ball:** Ooh, likability... Now, there - I don't know if React is gonna win on that, but... Usefulness, or usability, being used... I don't know. I've happened to use React recently, and I'm telling you, it's making Vue look better every day.

**Emma Bostian:** Yeah, it is... Alright, Jake, we've got -- oh, wait, Kball, we've got two categories left. Do you want JavaScript Again, or Even More JavaScript?

**Kevin Ball:** Well, let's go with even more JavaScript then.

**Emma Bostian:** \[laughs\] Let's do it. Your last question - This method tells the user agent that if the event does not explicitly get handled, its default action should not be taken as it normally would be.

**Kevin Ball:** What is prevent default?

**Emma Bostian:** That is correct. Prevent default. I don't know if it's default or default... I never know how to pronounce it. Okay, Jake, take it home, JavaScript Again, for 200. So - this is the very last question before we get to the super-final round, which is literally just one question. Okay, JavaScript Again, for 200.

**Jake Dohm:** Alright.

**Emma Bostian:** This data type holds key-value pairs and remembers the original insertion order of the keys.

**Jake Dohm:** What is an object?

**Emma Bostian:** No... Kball, you look like you know it.

**Kevin Ball:** I wanna go with "What is a map?"

**Emma Bostian:** That is correct.

**Jake Dohm:** Oh, a map... There you go.

**Emma Bostian:** That is correct. So --

**Kevin Ball:** It's that insertion order thing...

**Jake Dohm:** I was like, "It can't be that again..." Yeah, yeah. That's a good steal.

**Jerod Santo:** Speaking of episode \#112, we have another listener who wrote in about it, saying "Petruso Keterov here. My favorite moment was in the JS Jeopardy episode \#112, more specifically the TCP/IP question. I was working on a college assignment on the OSI model while listening to the episode, and like Chris, my first guess was the OSI model. I guess "conceptual model" really threw me a curveball."

**Kevin Ball:** Let's go with The Web for 500.

**Emma Bostian:** The Web for 500. You guys are just diving right in. "This is a conceptual model, and is a set of communication protocols used in the internet and similar computer networks."

**Kevin Ball:** Can you repeat the question?

**Emma Bostian:** Absolutely. "This is a conceptual model, and is a set of communication protocols used in the internet and similar computer networks."

**Kevin Ball:** It's a conceptual model... Interesting. Huh.

**Jake Dohm:** \[12:08\] Doo-doo-doo-doo...

**Kevin Ball:** Yeah, I know...

**Emma Bostian:** Five more seconds! Take a guess!

**Kevin Ball:** I'm gonna say "What is HTTP?", but I don't think that's right, because that's not the conceptual model...

**Emma Bostian:** Wrong...

**Jake Dohm:** Oh, no...

**Emma Bostian:** I think you let that term throw you off. Unfortunately, that is incorrect, so it moves on to Chris. Chris, would you like me to repeat the question?

**Christopher Hiller:** What is the OSI model?

**Emma Bostian:** That is also incorrect. Oh, no...! Jake, it's up to you.

**Jake Dohm:** Okay, could you repeat it one more time, so I can not get it?

**Emma Bostian:** \[laughs\] "This is a conceptual model and is a set of communication protocols used in the internet and similar computer networks." Why don't you just ignore the words "conceptual model". This is a set of communication protocols used on the internet and similar computer networks.

**Jake Dohm:** I'm so bad at this type of thing...

**Christopher Hiller:** I call shenanigans...

**Jake Dohm:** ...communication... Like, I don't know. LAN? What is LAN? \[laughter\]

**Christopher Hiller:** If it's protocol, I would say TCP/IP.

**Emma Bostian:** See, that would have been correct.

**Jake Dohm:** Oh...!!

**Christopher Hiller:** But conceptual model - well, there is this model of the network stack, and...

**Kevin Ball:** Yeah. I was in between TCP/IP and HTTP, but... Whatever. We got it.

**Emma Bostian:** Well, hold on to that term for later

**Kevin Ball:** And why choose TCP instead of like UDP?

**Emma Bostian:** Because it was the only one I knew... \[laughs\] Don't judge me. Alright, well that round nobody got any points, so...

**Jerod Santo:** That episode was called "Do you want JavaScript Again, or More JavaScript?" You can tell we weren't taking it too seriously back then. No sound effects, no official scoreboard... But once we decided to play the game more often, we came up with the name JS Danger, so as to avoid any copyright claims by the fine folks at America's favorite game show.

The first JS Danger party was episode \#123, which Heady Lee also wrote in about saying "I also love that time where at the time of one of the JS Danger episodes contestants had to wager some points for the final question, and at some point Emma was like "Hey, is this in Euros?" LMAO.

**Jerod Santo:** This open source JavaScript database was created to help web developers build applications that work as well offline as they do online.

One more time - this is the question for Final Trouble, Offline First: This open source JavaScript database was created to help web developers build applications that work as well offline as they do online. Please submit to me your answers.

**Scott Tolinski:** I've got two of them, going back and forth...

**Jerod Santo:** We are waiting for Emma...

**Emma Bostian:** I have no idea... \[laughs\]

**Jerod Santo:** Okay, all the answers are in. The wagers are tallied; the math makes no sense... But we're doing this thing. With a wager of 101.895 Euros...

**Emma Bostian:** No, that was 101,895...

**Jerod Santo:** Oh, you use a decimal point as a separator.

**Emma Bostian:** Yeah, that's what they use in Europe.

**Jerod Santo:** Gosh, okay... \[laughter\]

**Scott Tolinski:** Oh, gosh...

**Jerod Santo:** Emma’s answer - what is Elastic Search? \[correct sound\] \[fail sound\] \[fail sound\] I hit the wrong button. \[laughter\] Too much pressure. That answer is wrong, and that point total is ridiculous. You now have negative infinity points.

Up next, special guest Scott Tolinski wagered 100% of his points, so 1,400 points on the line, and he says “I’m wagering whatever makes me beat Emma.”

**Scott Tolinski:** I don't wanna get last place... \[laughs\]

**Jerod Santo:** His answer, "What is CouchDB?" \[fail sound\] was a valiant guess. And so he ends up his game at zero, or -2,800, depending on how you do math... But way better than negative infinity... Which means Nick Nisi, who wagered 2,700 - is this all your points, Nick?

**Nick Nisi:** \[16:12\] It is. I should have done one less.

**Jerod Santo:** ...answered "What is Firebase." \[fail sound\] Answer fail, and wager fail, because you could have left money on the table and gotten first place, but now you've tied with Scott, in the most ridiculous game of JS Danger in human history.

The correct answer, of course - Scott was off literally by one letter... The correct answer the open source database us called PouchDB.

**Scott Tolinski:** What?!

**Jerod Santo:** Inspired by CouchDB, PouchDB aims to help web developers build applications that work as well offline as they do online. Well, this has been something else.

**Emma Bostian:** Enlightening... Enlightening...

**Scott Tolinski:** Yeah.

**Jerod Santo:** We hope you enjoyed it. We had a lot of fun for this edition of JS Danger game. Remember, here at JS Party, Danger is our middle name.

**Break:** \[17:12\]

**Kevin Ball:** Hey there. This is Kball, and my absolute favorite moment in the past hundred episodes of JS Party was during an Explain It Like I'm Five segment. I had just gone and done what I thought was a pretty good job of Explaining Web Assembly Like I'm Five, and Nick Nisi busts out this amazing five-minute-long story where he was mapping React hooks to the stories of Moana, and mixing in a little bit of Coco and these other animated films... And he just did this incredible job, and completely blew my explanation out of the water... But also, our jaws were on the floor listening to him. Definitely worth a listen through the entire thing.

**Nick Nisi:** Once upon a time there was a community of JavaScript developers that lived on an island. I’m tying in Moana right now, in case you need to know… \[laughter\]

**Jerod Santo:** Thank you for the reference.

**Kevin Ball:** Oh, good, I know that one.

**Nick Nisi:** Spoilers for Moana, by the way... This was a very special island, full of proud people, who braved the waters of the JavaScript language, and even forged their own destiny by creating an add-on to the language called JSX. Now, over the years they moved on from a functional, class-like way of JavaScript and started to develop an elegant way to survive, and built a way to develop applications using component-based classes… Because JavaScript got classes.

Now, the chief developer learned the class-based way of her people, and she was very excited about that, but she always wondered if there was something more to the language that might be able to come in and play a role later on in our story.

**Jerod Santo:** Is this usually where she sings a song?

**Nick Nisi:** It is, yeah. I can do that, but I’ll get us demonetized again. \[laughter\]

**Kevin Ball:** I think if you sing it it’s fine, right?

**Nick Nisi:** I guess… But you don’t want that.

**Jerod Santo:** You might get us banned.

**Nick Nisi:** \[20:03\] Yeah. \[laughs\] So she thought of the class-based approach to what they were doing was just too verbose, and she constantly pushed for a new way of doing things, but she was shut down because classes are the way of her people, of her development team.

**Kevin Ball:** And did she know the way?

**Nick Nisi:** She did because of that; that was all she’d ever done.

**Jerod Santo:** This is the way.

**Nick Nisi:** A lonely programmer on the island - think of her grandma Tala, from Moana - showed her a hidden cave that contained JavaScript classes’ true heritage, and she realized that they were once function-based, and they could be again… So she told her lead developer of this revelation, but he simply carried on that state could not be managed in a function, and that her ideas were as whacky as trying to go beyond the reef of their island. Well, that’s exactly what she did. She set off to find the great JavaScript demigod Monad, to restore the state of the function – \[laughter\] …restore the state of the function and bring efficiency to her dev team.

Now, upon discovering Monad, he told her of the ways in which functions could not work until they set off to find his missing hook; only then could he restore the state and restore functional components.

**Kevin Ball:** Wait, you’ve gotta work your welcome in here somehow…

**Nick Nisi:** Yeah… \[laughs\] I don’t know how.

**Kevin Ball:** \[singing\] I see what’s happening here… You’re face to face with JavaScript, then it’s strange… You don’t even know how to feel… It’s adorable! It’s nice to see that programmers never change… Open your eyes, let’s begin… Yes, it’s really me. It’s Monad. Breath it in… I know it’s a lot, the code, the state… When you’re staring at programming concepts… What can I say, except you’re welcome. Um, let’s see…

**Jerod Santo:** Thank you so much for that…

**Kevin Ball:** I’ve lost my – alright, if I’d thought of this ahead of time, I could have ridden this out, but I was trying to do it real-time and I just failed.

**Jerod Santo:** I disagree one hundred percent. That was not a fail.

**Nick Nisi:** Yeah, that was amazing.

**Jerod Santo:** Keep going, Nick.

**Nick Nisi:** So Monad told her that he needed to find his hook to be able to restore the state in functional components. That developer was curious though. “What is this hook you speak of?” she asked. And this is where I kind of trail into Coco, because that’s another favorite of my daughter’s right now.

So Monad says “Imagine that your ancestors are in the afterlife. If you want their memory or their state to live on, you need to put their picture up on the ofrenda, or in this case, call them as a function within your component.” Now, when that happens - what happens to your state in that afterlife? Well, it lives in this magical world of memory; and it can live on in that memory for as long as you keep their picture on your ofrenda. As long as that’s up there, it will be living and it can be accessed by your state component.

**Kevin Ball:** \[singing\] Remember me...

**Nick Nisi:** As soon as you neglect to call it, its state gets cast to the after-afterlife, called the garbage collector. Now, the order of which you put up those pictures really matters, or the order in which you call those functions really matters, because it helps the environment map the correct state to the correct hook call.

Monad also explained that hooks need to be called every time, and not just conditionally. Not just on Día de Muertos, but every day, every time… And they need to be called by the top-level functional component, and not just inside of some kind of callback.

Now, Monad continued to explain the basics of useState, useMemo, and useEffect to this developer. And then went on to explain that his hook was unlike any other. It was a custom hook. Now, with this custom hook, Monad could use the underlying functionality of the other hooks to construct the perfect hook to destroy the extremely verbose monster Teh Class, and restore the heart of the function (or the state of the function) to the development team.

**Jerod Santo:** Teh Class... Are you done?!

**Nick Nisi:** Almost...

**Jerod Santo:** \[24:06\] Okay... Because you stopped like you're waiting for an applause. I feel like we're not quite there yet. Please, continue.

**Nick Nisi:** \[laughs\] So Monad’s custom hook could be used to recall the existing application’s state, but it could also be used to have an effect on the world around it, because it could use effects. And he could also listen to the ocean, mouse clicks, page scrolls and other things, and he could establish a plan for when his component was cleaned up or removed, and he could talk to the all-knowing cloud by using fetch.

Now, as they faced Teh Class in an epic battle, the developer realized that she could make a custom hook, for hooks were just a way to hook into her environment - React in this case - and then combine that with the strength of other hooks, like Monad’s hook, she could vanquish Teh Class to the murky syntactical depths.

Now, with this new power she returned to her people, and once and for all replaced their class-based components with functional components, supported by the power of hooks, that were within them all along. The end.

**Jerod Santo:** Quite the story... And it might just be the most Nick has ever talked on an episode. Most shows he just sits quietly until an opportune moment to save Vim or TypeScript. So nice selection, Kball, and you aren't alone on that one. Listener Jarvis says episode \#168 was epic. "Loved the story on hooks." But if we're being honest, I'm not so sure any of us walk away from hearing that epic story with a better understanding of React hooks than we brought into it.

Good thing we had Kent C. Dodds on episode \#186, which a few listeners cited as their favorite. Chris Benjamin writes:

"I really enjoyed the episode with Kent C. Dodds on July 30th, Getting Hooked On React. The way Kent described hooks made it click.

**Kent C. Dodds:** When I was first learning React, we didn’t even have classes. It was createClass, and all of that; and I think it was the same for both of you. So coming into Hooks, it took me a little bit of time to be like “Okay, this is kind of interesting.” A little time as in like minutes. Initially, I was like “I’m not sure about this”, then “Oh my gosh, I love this.” And the biggest thing for me was getting rid of class components and shareability of code… Because with class components, we always talk about the separation of concerns and how important that is in maintainable architecture… And one of the things I loved about React was that it embraced the fact that HTML, CSS and JavaScript are part of a single concern. Those aren’t separate concerns. Those are separate technologies when combined, to create a single concern, of your button component, or your accordeon, or whatever it is.

But within that individual component there could be multiple concerns in there. One part of it is updating the document title to say how many unread messages you have, and the other one is subscribing to Firebase to get those messages… And it’s spread between these lifecycles. And so with Hooks, I was able to keep those concerns together within the component; and if it was a reusable bit, then it’s just a matter of pulling that out and sticking it into a function. It’s just JavaScript at that point. You’re just moving stuff around, just like you do with JavaScript.

Anyway, I didn’t have a huge problem with jumping into Hooks, but I know a lot of people switching from classes to hooks was a bit of a big jump. But one of the things that I just wanted to mention too, like some of the hard parts of learning React - I can tell you based on the number of people who are reading my blog posts what are the things people have the most trouble with… \[laughs\] Because I don’t track Google Analytics on my blog, but I do have Netlify Analytics, and that gets when people land on my blog… And the number one blog post right now over the last month is “How to use React context effectively.” That, Emma, speaks to you… And then useMemo and useCallback are the next. And that one actually has been really popular for years. Yeah, those two are tricky. They’re absolutely tricky.

**Emma Bostian:** Yeah.

**Kent C. Dodds:** \[28:02\] And then I’ve got a couple of things about testing… And state management is another thing that people struggle with quite a bit… And then useEffect and useLayoutEffect are pretty big ones, too. So I would say that there are definitely hard parts about learning React, and it’s very possible that it’s harder to learn React than it is to learn other frameworks… But I just come back again to - I feel like React is simple, and it’s easier to build a simple application with a simple framework than it is to build a simple application with a complicated one.

**Nick Nisi:** As a side note, I think I probably make up 50% of the traffic on your “Common mistakes with React Testing Library.” \[laughter\] I think I link to that in almost every pull request that I’m doing.

**Emma Bostian:** Yeah. We’re using React Testing Library too, and I’m like “Oh, gotta go see Kent again…”

**Nick Nisi:** Ahoy-hoy, JS Party. Nick Here... Now, looking back over the last 200 episodes, we really had a lot of fun. In particular, I really enjoyed listening back to that time on episode \#126 where Jerod tried to take the unpopular stance that customizing your terminal environment and editor is a waste of time. You know, it's YAGNI... It's time that could be better spent just accepting the mediocrity of the popular editors and environments... I felt it at the time, and I still feel it now, that Jerod wasn't speaking to JS Party; he was speaking to me, disparaging my life's work, my dotfiles which will be handed down to my children, but now they're forever tainted by the comments Jerod made that one time... \[laughs\]

It's all in good fun, and I really enjoyed hearing the regular panelists riff on that topic. And now I just have to ask if Jerod still holds that opinion. How many episodes of The Changelog has Jerod done on Vim and command line tools since then? Were they pretty popular? Think about it as you listen to this next clip...

**Jerod Santo:** This is also, I think, probably unpopular, because I've disagreed with it myself in the past, and I might disagree with it by the time we're done talking here. But I do believe it right now, which is that I think most of the time that you spend tweaking, customizing, optimizing your terminal, your editor...

**Nick Nisi:** Oh, no...

**Jerod Santo:** ...your tools, most of that is time not well spent.

**Divya:** \[laughs\]

**Nick Nisi:** \[laughs\] How can you do this...?

**Jerod Santo:** I think most of that stuff is YAGNI. I think we spend six hours to save 60 seconds, and I think we yakshave far too much.

**Nick Nisi:** You never know if you're gonna do that 60 seconds again sometime... \[laughter\]

**Jerod Santo:** I think I've hit an unpopular cord here, because everyone just kind of sat there and laughed, and was shocked...

And there's an old Japanese proverb that says "Don't feed the trolls." So I will not be justifying Nick's trolling with a response. What I will do however is read another listener favorite. "Squid here. I've been listening before the '90s. The party that you can always attend, no matter how strict Covid restrictions get. Keep partying." Thanks for writing in, Squid. I like your game.

To honor JS Party continuing to rock even during Covid restrictions, here's Suz sharing her book recommendations on our "Working From Home" episode recorded at the very start of lockdowns.

**Suz Hinton:** I’m a bookworm, so I have three books to recommend. The first one is Cal Newport’s Deep Work, which I mentioned before… And the next one is Jenny Odell’s “How To Do Nothing.” Jenny Odell is one of my favorite speakers. She speaks at I/O Festival over the last few years, and she’s an artist and she talks about the fact that the new hustle culture and things like that - it’s just constantly tearing at our personal time, our personal space, our mental well-being… And I think that right now I’m seeing a lot of that chatter on Twitter. It’s like “This is time for your side-project now that you’re quarantined”, and “This is the time to do this and that”, and just not allowing people to ever take a break, because things are crappy. So I think that this book is particularly relevant. It’s very popular and it has really great reviews.

\[32:15\] And then also Contact, by Carl Sagan. I’m seeing a lot of parallels in this book, compared to what we’re seeing now… So yes, it’s a science-fiction book, and it has nothing to do with a virus worldwide, but it has to do with worldwide cooperation, the breakdown of barriers between science and religion, as well as just watching different nations try to own different solutions.

I think that there are just so many themes that we’re seeing, and I think that Carl Sagan kind of thinks about this stuff the right way, and you might actually find it quite comforting to imagine ideologically what would be the greatest way that we could deal with this kind of thing right now.

So I think that those three books are particularly relevant. There’s the work, but there’s also “How do you then switch off and just treat yourself nicely, given that this is just quite an unprecedented experience to go through in your lifetime?”

**Jerod Santo:** Next up, LoganLific writes: "I busted out laughing during the episode "We really need new jingles" when Jerod cracked down on the TIL segment and Mat mentioned that it felt like he was having dinner with Saddam Hussein. The banter on JS Party is a trip."

**Jerod Santo:** Mat, how about yourself? What have you learned today, and/or recently?

**Mat Ryer:** Yeah. Well, it was today, actually. I think I’m the only one that’s really respected this segment in that way…

**Jerod Santo:** Yeah, you win.

**Mat Ryer:** Yeah. I’ll tell you what - I mentioned earlier the APIs now in browsers, and this might be old news to people that do a lot more JavaScript than I do… But there’s a WebAuthn API that lets you use the fingerprint or Face ID stuff in your JavaScript code for authentication, things like this… Which is kind of what you need, isn’t it? It’s what you expect. But you see, when I started doing this, everything was sandboxed so tightly… The world was so different, the JavaScript world was just so different. You didn’t really interact much with the device at all. And increasingly, as they open all these APIs, I think we’re just gonna see more and more powerful things being built… And I kind of love seeing that.

I remember when I first discovered about local storage, and there’s IndexedDB in the browser… It is kind of amazing to see that… But yeah. So I learned that. That’s what I TIL-ed today, was that you can use fingerprint auth in your JavaScript.

**Nick Nisi:** That is awesome.

**Mat Ryer:** You can access sensors as well on the device… GPS coordinates I guess have been around a while… But also things like the battery. So maybe don’t do some things; turn off animations if the user’s battery is low, or something. Be a nice citizen for them. It’s a good one.

**Jerod Santo:** Absolutely. And the fact that you learned it today means you really respect my authority, you know?

**Mat Ryer:** Yeah.

**Jerod Santo:** Which I also appreciate.

**Mat Ryer:** Yeah. I feel like I'm having dinner with Saddam Hussein, and I'm really nervous about upsetting him. \[laughter\] I've never had dinner with Saddam Hussein, or any dictator, actually...

**Jerod Santo:** We need to back that one off...

**Kevin Ball:** You haven't had dinner with Jerod yet, not to mention any dictator...

**Mat Ryer:** Yeah. \[laughs\]

**Kevin Ball:** That's right, internet acquaintances.

**Mat Ryer:** Yeah.

**Jerod Santo:** Remember, I already said hopefully we'll never have dinner; didn't I say that earlier on the show? Hopefully we'll never meet...

**Kevin Ball:** Jerod is not so bad over dinner... Or lunch I guess is what we shared.

**Jerod Santo:** We did.

**Mat Ryer:** What did you have?

**Jerod Santo:** Lunch. He just told you.

**Mat Ryer:** Yeah. Well, what specifically?

**Jerod Santo:** Food.

**Mat Ryer:** Okay. Thank you.

**Jerod Santo:** \[laughs\]

**Mat Ryer:** See what I mean? I'm nervous now. \[laughter\] I don't wanna upset the king.

**Jerod Santo:** \[36:04\] Logan isn't the only one who liked this episode. Take it away, Kball...

**Kevin Ball:** Hey, Kball here. Another one of my favorite moments from this last hundred episodes was when we had Mat Ryer from Go Time on as a guest for a segments episode... And Jerod just springs on him "Hey, we need a jingle for this next segment. Can you make one up?" And he kind of looked at him for a second, and then just busted out this incredible tune for Story of the Week. I wish I had those types of skills...

**Jerod Santo:** We like to have jingles for our segments… And you may remember that Nick came up with this excellent jingle for Pro Tip Time. \[jingle 00:36:53.25\]

**Mat Ryer:** Brilliant.

**Jerod Santo:** So we do not have a story of the week jingle, and what you may not know is that Mat Ryer is actually very musically inclined. He plays the guitar; if you’re watching live, you can see some guitars back there. He sings songs, he writes songs… So Mat, if I might just really put you on the spot and challenge you, can you please come up for us a Story of the Week jingle, live, on the spot, without any rehearsal? We appreciate that.

**Mat Ryer:** But there really is no rehearsal; because you’re saying it like we’ve planned this.

**Jerod Santo:** I know… But I was gonna set you up to embarrass yourself.

**Mat Ryer:** Story of the Week.

**Jerod Santo:** Yeah, Story of the Week.

**Mat Ryer:** Right, okay. Okay, ready? \[live jingle 00:05:12.10\] “It’s time to take a peek… It’s time for the Story of the Week.”

**Kevin Ball:** Damn…

**Jerod Santo:** That’s actually better than I was expecting, dude. Nice job.

**Nick Nisi:** Way to play my jingle first, just to give like the opposite of that…

**Jerod Santo:** \[laughs\] Well, we wanted to lower the bar and make sure there wasn’t too much of expectation… And that was actually completely ad-hoc. Mat did not know about that. So… Nice job, Mat.

**Kevin Ball:** The first of many surprises that we’re going to spring on him today.

**Jerod Santo:** That's right.

**Mat Ryer:** This does feel increasingly like an ambush.

**Break:** \[38:12\]

**Amal Hussein:** So what I absolutely love about JS Party is how much fun we have on the show, and just all of the goofball moments that are interspersed between technical facts. So my favorite shows have been my intro show, where I got to talk a little bit about my background... And I never really thought the word "pirates" would come up in a JavaScript podcast, but I was wrong.

**Divya:** Yeah. I feel like I know Amal a lot, so it’s really hard to ask questions, because I know a lot of the answers… But I guess for the listeners who don’t know her as well, here’ s a curveball of a question - do you like to live dangerously?

**Amal Hussein:** Oh, a hundred percent. My parents are East-Africa, enough said. I’m pretty sure Somalis brought pirating into the mainstream conversation more recently… \[laughter\] I’m a descendant of some serious bad\*\*\*\*\*, so yes. I love to live dangerously.

**Divya:** Nice.

**Amal Hussein:** Another favorite of mine was a show we did with Ben Ilegbodu on TypeScript, and Suz and Divya were on the panel with me, and I called Divya out for changing her accent and going full Aussie... That was pretty hilarious. And she actually admitted it on air, so... Listen up.

**Divya:** Hello, hello, and welcome to a new episode of JS Party. Today we have a wonderful guest, Ben Ilegbodu. But before I introduce him, I would like to introduce the panel that we have with us. We have Amal...

**Amal Hussein:** Hello, everybody...

**Divya:** And we also have Suz!

**Suz Hinton:** Hello! How's it going?

**Amal Hussein:** Did your accent just change? You said Suz in like an Aussie accent. Did you realize that? \[laughter\] She’s like “And with us, we have Suz!” I was like, “Okay… Hi, Suz.”

**Divya:** Okay, yeah. You caught me.

**Amal Hussein:** I thought that was cute.

**Divya:** I don't know... Sometimes I say things in weird voices... I don't know if you have this. I wanna introduce Ben before I jump into other things, but... \[laughter\]

**Ben Ilegbodu:** We're like 30 seconds in and it's already off the rails... \[laughter\]

**Amal Hussein:** And last but not least, how could I forget the one and only Ahmad Nassri, whose classic line will forever be etched in my memory.

**Amal Hussein:** If you’re in surgery, they don’t kill you, do the thing, and then bring you back to life, right? You’re still living. That’s the thing. A mechanic gets to turn the car off…

**Jerod Santo:** Top modular replacement.

**Amal Hussein:** Yeah, exactly. That’s a great analogy. A cardiovascular surgeon doesn’t, right?

**Ahmad Nassri:** That’s actually a very good example, because you won’t take a surgeon seriously if he’s gonna say “I’m just gonna replace your heart instead of trying to fix it.”

**Amal Hussein:** \[laughs\] Exactly.

**Ahmad Nassri:** Or replace your kidney without trying to understand what the problem is. “Oh, your kidney is too old. We’d better put React there instead.”

**Amal Hussein:** \[laughs\] Poor React…

**Jerod Santo:** Show title right there.

**Ahmad Nassri:** “…because it’s just too old and I don’t wanna bother with it.”

**Amal Hussein:** \[laughs\] Replace your kidneys with React, everybody…

**Jerod Santo:** Thank you, Amal. It has been so awesome having you on the pod. Alright, it is time to read another listener message.

"Hello, world. This is Chris Torres from Carson, California, and I'm a fellow software engineer who loves all things frontend, especially React and Svelte. My former manager said that JS Party is a good listen, and you guys definitely did not disappoint. I've been listening to this podcast since the beginning of 2021. My favorite episodes so far are $166, JS Danger CSS Tricks Edition, and \#192, Frontend Feud Shoptalk versus Syntax, because they are so fun and entertaining. I also like Explain It Like I'm Five, which is featured in some episodes, because it helps me learn how to explain technical concepts more casually and less formally.

Well, enough said... Thank you so much for keeping me sane during this time of uncertainty, and keep on keeping on!"

\[44:23\] Thank you for the kind words, Chris. We appreciate having you with us. Here is a clip from that CSS Tricks edition of JS Danger. One thing we've learned with that game is that a key to winning is not stealing unless you're sure you know the answer. I advise contestants about this, but few heed the advice. In this clip I thought Geoff Graham was about to do himself in, but...

**Chris Coyier:** Framewords for 1,000.

**Jerod Santo:** Oh my goodness, he’s going big. The less formal CSS framework. Its goal is to be as minimal as possible when adding classes.

**Chris Coyier:** Adding classes… I don’t know. It’s not Tailwind, but I’m gonna say Tailwind.

**Jerod Santo:** \[fail sound\] That is incorrect.

**Miriam Suzanne:** Their goal is to be as maximal as possible.

**Jerod Santo:** Alright, here’s where I’ll remind people to be careful with the steals, because you can lose a thousand by stealing haphazardly. Sarah, do you know what it is? Would you like to steal?

**Sarah Drasner:** Um… Tachyons?

**Jerod Santo:** \[fail sound\] Sorry, that’s also incorrect. Geoff, would you like to steal?

**Geoff Graham:** I’m gonna go out on a limb, yes…

**Jerod Santo:** \[laughs\] Despite all advice, they’re just going for it…

**Geoff Graham:** What is PaperCSS?

**Jerod Santo:** \[win alert\] You got it!

**Chris Coyier:** No way…!

**Geoff Graham:** Oh…!

**Jerod Santo:** Very good.

**Miriam Suzanne:** Nicely done.

**Jerod Santo:** It was an obscure one.

**Jerod Santo:** Alright, we have time to read one more listener message.

"Scott here. The episode where you talked about saying no really helped me out. Hearing other developers who experience the same BS I was at a company gave me the strength to quit a toxic workplace, and now I'm way happier."

That is very cool, Scott. Thanks for letting us know that. Happy to hear that you're happier, and that we could play even a small role in that decision. Here is a clip from that episode. This is just a small part of a much larger conversation.

**Jerod Santo:** Are there ways that you’ve gone about saying no that have worked better than others, or how do you do it?

**Nick Nisi:** I’ll tell you the way that I use the most, which is by far not the best way, but it’s the most effective way sometimes… And that’s - I ignore it until it goes away on its own. \[laughter\]

**Jerod Santo:** So the ghost no… Okay. I mean, that is, I think – in certain cold requests… I mean, we do that all the time. We get so much email for The Changelog; people wanna come on the shows… I’m not gonna respond to every single email and say no.

**Amal Hussein:** Oh, is that why you’ve been ignoring all my emails? \[laughter\] Gosh, Jerod, I thought it was like –

**Nick Nisi:** The truth comes out.

**Amal Hussein:** Gosh, now I know…

**Jerod Santo:** I don’t know how to break this to you, Amal, but you’re on the show right now.

**Amal Hussein:** Anyways… No, no, I’m just kidding.

**Jerod Santo:** \[laughs\] Anyway. So in that case, a cold email - you don’t know the person, they’re asking for something… I’m totally fine with not responding, because there’s just too many emails in life. But what if it’s like a colleague, or a friend? You’re not gonna ghost a colleague if they ask you for something, right? You’re gonna have to tell them something. Amelia, what about you? How do you say no?

**Amelia Wattenberger:** I’ve been waiting to hear answers on this… \[laughter\] I need all the help I can get.

**Amal Hussein:** Out of office message saying you’re in Alaska for three months… \[laughter\] And hoping that they forget about it by the time you’re “back.” \[laughs\]

**Nick Nisi:** I have a built-in excuse. I just say –

**Amal Hussein:** Kids…

**Nick Nisi:** …I have kids and I can’t do it.

**Amelia Wattenberger:** Yeah, that’s a good reason to have kids.

**Jerod Santo:** Yeah, kids are a great excuse. It is.

**Amelia Wattenberger:** Yeah. I never wanna lie about it, and my reason is always like “This isn’t a priority for me” or “I don’t think that sounds great”, which I’ve tried before…

**Jerod Santo:** “I don’t think that sounds great…” \[laughs\] Yeah, it’s honest.

**Amelia Wattenberger:** It’s just like, this isn’t – I don’t want to. You hate when you ask someone to do something and they lie about like “Oh, no, I can’t do that, because I’m not available” and you’re like “I didn’t say when…” \[laughter\] That never feels good.

**Amal Hussein:** \[48:14\] Yeah…

**Jerod Santo:** They’re like “I have bowling league that night” and you’re like “Yeah, I didn’t give a date yet.”

**Amelia Wattenberger:** Yeah.

**Amal Hussein:** Honestly, a line that I’ve been able to use pretty successfully so far is that I just have too many commitments right now, and my plate’s really full, and I would love to…

**Jerod Santo:** Yeah. That’s true, right?

**Amal Hussein:** It’s the truth though… I just can’t take anything else on right now. And it’s always nice to give people another option, so like if you can redirect them to someone else, like if you’re being asked to do a talk, or whatever… Just say, “Hey, maybe this person can help” and then just – I think that’s the most you can do. But yeah, you need to be protective of your time and energy, and most of the time people are understanding, so…

**Jerod Santo:** Right.

**Nick Nisi:** I do like that approach though, Amal, because it really shows that you did consider it, and you put a little bit of thought into it, which is – it’s not just like a canned no response in that regard. And even – I’m thinking back to maybe what you said, Amelia… Like, if you were brutally honest, like “No, that doesn’t sound good to me”, that would probably stand out as a significant response that they might get for something like that, and it might lead to collaborating or changing it to be exactly what you want, and that could be good, too.

**Amelia Wattenberger:** Yeah, totally.

**Jerod Santo:** So I like the honesty of “Too busy, too many things going on.” One thing that happens with that with a persistent requester is they will then set a reminder to ask you again in a month, or 60 days… And that can be problematic. So now you’ve gotta do it again… So at times I will say – it’s similar to what Amelia says, but I’ll say something like “This just doesn’t feel like a great fit” or “It doesn’t feel right.”

**Amelia Wattenberger:** That’s good.

**Jerod Santo:** It just doesn’t feel right.

**Amal Hussein:** It’s not you, it’s me.

**Jerod Santo:** And it’s really hard – I mean, it’s not really offensive. It’s not saying it’s a bad idea…

**Amal Hussein:** It’s not you, it’s me… You know? It’s like a break-up. \[laughs\]

**Jerod Santo:** Yeah, exactly. Yeah. Anyway, so it doesn’t feel right. I’ve never gotten someone to write back and be like “How dare you?!” Of course, maybe they’re thinking that, but they’re like “Oh, okay. I appreciate the time.”

**Amelia Wattenberger:** Yeah. That’s great, because it’s not like “This isn’t good, objectively.” It’s like “It’s not good for me.”

**Jerod Santo:** Yeah. It just doesn’t feel right. It doesn’t feel like a great fit.

**Kevin Ball:** Hey, Kball here. One more moment from out last 100 episodes of JS Party that I wanna plug... This one starts behind the scenes. We had an episode coming up with Adam Wathan, the creator of Tailwind CSS, and I think Nick had jokingly titled the episode "The Tailwind Beneath my Wings", playing off the Bette Midler song... And I couldn't make it, but I joked in the channel, "Hey, it would be amazing if you all worked in the lyrics from the song", not expecting it to actually work. But those crazy guys - Jerod, Feross, and especially Nick Nisi carrying the show, managed to work in the entire song as part of the episode, most of it without Adam even knowing what was going on. It was just hysterical, and funny, and... Unique.

**Bette Midler Song:** \[51:11\] \[Nick Nisi\] It just really must have been cold there, in the shadow... \[Jerod Santo\] To never have sunlight on your face. \[Nick Nisi\] Content to let me shine; that's your way... You're always walking a step behind. \[Feross Aboukhadijeh\] So you're really the one with all the glory. \[Nick Nisi\] You're the one with all the strength. \[Feross Aboukhadijeh\] A beautiful face without a name, for so long. \[Nick Nisi\] A beautiful smile to hide the pain. \[Jerod Santo\] Did you ever know that you're my hero...? \[Nick Nisi\] It's everything I would like it to be. \[Feross Aboukhadijeh\] I can fly higher than an eagle. \[Jerod Santo\] Thank you for putting the Tailwind beneath our wings, Adam.

**Jerod Santo:** Kball drilled it. This was our finest moment, if I do say so myself. When the show first started, only Nick and I knew about the gag, and it was so awkward keeping it a secret. Here's Nick squeezing one of the lines in early on.

**Feross Aboukhadijeh:** But yeah, I think part of that is just using a tool for more than it was originally intended to be used for, so it’s taken a while for the spec to catch up to what people wanna do with it.

**Nick Nisi:** Yeah. I think it just really must have been cold there, in the shadow, for CSS and the tooling around it… Yeah, just in the shadow of JavaScript and HTML.

**Jerod Santo:** That’s true.

**Jerod Santo:** The editing removed some of the awkwardness, but you should have seen Feross' face when Nick said that. It was just too much, so we revealed our secret to Adam and Feross during the first break. After that, things got better, but we were having a hard time squeezing in the penultimate line in any context that made sense. Then, which was a surprise to all of us, Adam masterfully delivered that line, and it left me completely speechless. Like, literally. I didn't know what to say.

**Adam Wathan:** Firefox Send used to be my go-to one, but they shut that service down, so…

**Jerod Santo:** They did. That was sad…

**Adam Wathan:** And now it doesn’t even have a placeholder page, it just links to the Mozilla homepage. So it’s sad.

**Jerod Santo:** That was a service – I never used it, but the fact that it existed, I respected that…

**Adam Wathan:** Yeah, exactly. I felt the same way. \[laughter\]

**Feross Aboukhadijeh:** Cool.

**Adam Wathan:** Did you guys know – something I can actually do that most other people can’t do is that I can fly higher than an eagle.

**Jerod Santo:** Wow… Well, I mean, you’re really making – I can’t respond to that… \[laughter\] Oh, Adam broke the show…

**Jerod Santo:** This has been Best of the Fest vol. 1. Here's to the last 200 episodes, and to the next 200 as well. Special thanks to the many listeners, guests and panelists who contributed to Best of the Fest. You are what makes JS Party awesome. I've included links to every episode referenced in order of appearance in your show notes.

**Outro:** \[55:19\]

**Horse JS:** Hello, JavaScript developers. I just want to take a moment...

**Jerod Santo:** Horse JS, what are you doing here? Everybody left. The show is over.

**Horse JS:** I just want you to know that I've cried.

**Jerod Santo:** Oh, I see. You're upset because nobody picked your interview in episode \#142 as their favorite.

**Horse JS:** Any JavaScript nerds wanna get wrecked?

**Jerod Santo:** Actually, one listener did pick you, but we ran out of time, we had so much good stuff that I decided not to include it.

**Horse JS:** Name a funnier person in the JS community. I'll wait...

**Jerod Santo:** Okay, okay, fine. Just pick your favorite JS quote, say it right now, and we'll include it in the show. But you've gotta move fast, because I'm really ready to wrap this up.

**Horse JS:** Okay, let me toss out one last hand grenade before I go to bed. Immutability is sometimes.
