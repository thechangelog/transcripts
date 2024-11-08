**Jerod Santo:** Hello, party people. It's your internet friends. I'm Jerod, and I have KBall with me once again. KBall, we're like partners in crime now, man, me and you.

**Kevin Ball:** I think we are. Yeah.

**Jerod Santo:** Well, if I had to pick a partner in crime, I might pick you. You're a pretty good one.

**Kevin Ball:** Yeah. Good time. If I were going to crime, I'd pick you as a partner as well.

**Jerod Santo:** Thank you very much. Alright, well, the guy we wouldn't pick, but he's here now... He's back from Squiggles. Did you squiggle all the things, Nick? Did you squiggle it up?

**Nick Nisi:** I did, I did. And it's okay, I wouldn't pick you either. I was listening to your toolbox episode, and...

**Jerod Santo:** Oh, yeah. Jerod's tool... Jerod is a toolbox episode... Pretty sad, right?

**Nick Nisi:** No, it was fun.

**Kevin Ball:** Nick, you set the bar really high for toolboxes.

**Jerod Santo:** He did. He did. I could have probably had been like a 30-second episode and be like "I use the defaults", and then we could be like "That's it, folks."

**Nick Nisi:** Terminal.app? Come on...

**Jerod Santo:** Well, I'm going to get on that Ghostty. I'm getting pretty excited about that, so...

**Nick Nisi:** Oh, yeah.

**Jerod Santo:** ...it will drag me out of the boring, vanilla terminal that I normally rock.

**Nick Nisi:** I tried it. I don't get it. I like WezTerm.

**Jerod Santo:** Okay, we can talk about that later, because we have Amy Dutton here with us, a return guest, and now going to be a regular JS Party panelist. Amy, welcome to the show.

**Amy Dutton:** Thank you. Yay! Super-excited.

**Jerod Santo:** Good to have you. Good to have you. As I said, you've been on the show a few times... You were on an episode of Changelog & Friends called "You Have How Many Open Tabs?" And you were on an episode of JS Party called --

**Kevin Ball:** Tell me -- you're a large tab number, right, Amy?

**Amy Dutton:** Yes.

**Kevin Ball:** You're with us in the many tabs team. Okay, excellent.

**Jerod Santo:** Once again, I'm boring here. I live at tab zero, when I can...

**Kevin Ball:** I don't know how you do that, but okay...

**Jerod Santo:** You just close stuff when you're done with it. You just finish.

**Kevin Ball:** Key thing, "Done with it." How do you know you're done?

**Amy Dutton:** Define done.

**Nick Nisi:** It's in the history. This is like people who don't clear out their inboxes. You can just archive, and if you need it, it's there. Go search.

**Kevin Ball:** Do you know how many unread messages I have in each of my inboxes?

**Amy Dutton:** Yeah. I was like, "That's not a good--"

**Kevin Ball:** I have four inboxes, and I think the smallest number has like four thousand unreads.

**Jerod Santo:** Oh, my goodness. See, Nick and I actually entirely align on this topic. This might be one of the only topics - and Safari as your default browser - where we just are in complete agreement. So this is amazing, Nick. You and I. Now we're partners in crime.

**Nick Nisi:** Best friends forever...

**Jerod Santo:** Yes. Well, we want to get to know Amy. She was also on a JS Party episode called "Should Web Development Need a Build Step?" Maybe you guys recall that one.

**Amy Dutton:** I do. Kball does not.

**Kevin Ball:** But I'm already seeing right now that we are on the same team on like tabs, probably email inbox... All sorts of things. So it's destined.

**Amy Dutton:** Yes. We're like the same person.

**Jerod Santo:** Yeah, maybe this time Kball will remember you. \[laughter\]

**Jerod Santo:** Alright, we are going to get to know Amy a little bit here by playing a little game of 20 questions. However, due to budgetary constraints, we could only come up with 10 questions today... And so it's actually going to be 10 questions, because also 20 questions - that's just a lot, you know. So we're going to do 10, and we're going to do it in a round. We've all written our own questions down, and when it's our turn, we're going to read our questions exactly as written. And so Amy will then respond. Are there any questions about how this is going to work?

**Kevin Ball:** What if I can't parse your writing, Jerod?

**Jerod Santo:** Well, you wrote it on yourself earlier, and now you're going to read back what you wrote after I send it to you. Okay.

**Nick Nisi:** Jerod, can you remind me where I wrote down my questions?

**Jerod Santo:** You're going to have them in your Slack DMs with me. That's where you always write all your really private thoughts.

**Amy Dutton:** Am I responding as written?

**Jerod Santo:** Yes. We'll also give you the answers. You can read those back to us as well. I will go first... Question number one for Amy Dutton. You have to pick a web framework. You can't pick Redwood, by the way. Amy, a core contributor to Redwood JS. You can't use Redwood JS, so take that one off the table. What framework do you choose?

**Amy Dutton:** Oh, man... Does it have to be JavaScript?

**Jerod Santo:** No, it doesn't have to be JavaScript.

**Nick Nisi:** It can be TypeScript.

**Jerod Santo:** This is your answer.

**Amy Dutton:** \[00:07:53.04\] Nice. Oh, man. If it's TypeScript, JavaScript, then I would pick Remix. I love their data loader pattern, I like having a very distinct place to load actions, define form actions, and then display the content. Nested pages is wonderful. They're doing some stuff right now with the router which I'm really excited about, because of React Router 7... If I did pick non-JavaScript, I would say Laravel. I've just heard several people say "We want the Laravel framework for JavaScript", so I've been trying to figure out "Okay, what does that mean? What does Laravel have that we don't feel like we have in the JavaScript ecosystem?"

So I've been pretty impressed with what they have, and I think that if we really want that, we could have it, but the question is, do we really want it? Because we also like our composability.

**Jerod Santo:** Right. Can you give a quick diff, like what is over there that's not over here?

**Amy Dutton:** Well, some things Redwood now has, but they have background jobs and cron jobs, which Redwood does have. They have file storage built in. They have auth built in. They also have some pretty cool build tools with their CLI, and then Hurd lets you get an environment up and running pretty quickly; so it's not like you even have to install PHP or MySQL on your machine. You just run their app and you have your local environment working.

**Jerod Santo:** Awesome. Alright, question number two comes from Kball.

**Kevin Ball:** Alright. Checking where I wrote this down. Would you please, please, please share a spicy take with us?

**Jerod Santo:** Good question.

**Amy Dutton:** A spicy take...

**Jerod Santo:** Yeah. Got any spicy takes?

**Amy Dutton:** I have tons of spicy takes. It just depends on your level of mild to medium hotness.

**Jerod Santo:** Let's get super-spicy...

**Kevin Ball:** I was going to say, there was only one spicy written here, but there were three pleases, so I think we're looking for spicy.

**Amy Dutton:** Oh, man. I think -- okay, this is going to be spicy, maybe... Maybe not. WordPress is on the way out. It powers 30% of the internet right now, which is ridiculous, but I just think that Matt is making some poor decisions that might drive it into the ground.

**Nick Nisi:** Do you think it's going to be replaced with something...

**Amy Dutton:** JavaScript.

**Nick Nisi:** ...that's a fork, like AmyPress?

**Amy Dutton:** I have thought about that. Like any good developer, I have thought "I could build that. I should build that. Let me buy a domain for that."

**Jerod Santo:** Oh yeah, you're a domain collector, aren't you, Amy?

**Amy Dutton:** Yeah. I bought some the other day.

**Jerod Santo:** Some? Like a plurality of domains?

**Amy Dutton:** Yeah. I bought like four or five.

**Jerod Santo:** Wow.

**Kevin Ball:** Who among us has not?

**Amy Dutton:** I mean, that's the first thing. The problem is I think of a good, a decent domain name, and then I thought, "Well, now I need to get all of the permutations of that."

**Jerod Santo:** Oh. It gets expensive. So how many domains do you own at the moment?

**Amy Dutton:** Well, my Notion document is not up to date... This I like to keep suspenseful; let people guess. Like, I've never --

**Kevin Ball:** It's like browser tabs, right? Like, who really counts those things?

**Jerod Santo:** So the correct answer is "Too many", just like browser tabs. Too many.

**Amy Dutton:** There's probably close to 170.

**Jerod Santo:** Oh, wow. Nick, how many do you have?

**Nick Nisi:** I thought I had a lot, and I have like 30. I've been on .dad kick.

**Amy Dutton:** We did cover this one in the Thousand Tab episode.

**Jerod Santo:** Yeah, we did.

**Amy Dutton:** But any guesses to the most expensive domain name that I own?

**Jerod Santo:** I think I know this one, so I'm going to defer to the other guys.

**Nick Nisi:** $2,000.

**Jerod Santo:** $2,000. Good guess.

**Amy Dutton:** It's $70 for renewal, I believe, but it's .fm. So I do have compressed.fm, and I am using it. So that makes me at least feel a little bit better about life.

**Jerod Santo:** There we go. We have a lot of those FMs hanging around...

**Amy Dutton:** So expensive.

**Jerod Santo:** Alright, we'll go to question number three now. Nick, this question is yours. And check your DMs. You have to read that verbatim, because you wrote it verbatim.

**Nick Nisi:** What's the most overrated technology right now, and why is it TypeScript? \[laughter\] I say under duress...

**Kevin Ball:** Jerod, you're really, really utilizing this format here.

**Jerod Santo:** I don't know what you're talking about. Nick wrote that down earlier.

**Kevin Ball:** I can't wait to find out what else I've written down. \[laughter\]

**Amy Dutton:** \[00:12:12.06\] Overrated technology... That's a good question. Ooh, I'm not sure. It's definitely not TypeScript.

**Nick Nisi:** Yes...!

**Amy Dutton:** I do love TypeScript. I don't understand -- maybe I should ask this. Why do you guys hate on TypeScript so much?

**Nick Nisi:** We don't.

**Jerod Santo:** Oh, it's just me.

**Kevin Ball:** It's just Jerod. It's literally just Jerod. And I think the answer is he hates on it because Nick loves it.

**Jerod Santo:** That's right. Here's the problem... Podcasts where everybody agrees all the time are just not very interesting. And so we need a dramatic foil, and Nick is my dramatic foil. So whatever he says, I just take the opposite stance... Except Inbox Zero, in which we're incredibly aligned.

**Amy Dutton:** GraphQL would be another one where I feel like people hate it, but I love it.

**Jerod Santo:** Hmm. So taking a different angle at this question.

**Amy Dutton:** Yeah.

**Jerod Santo:** Why do you love GraphQL? This does not count as a question, by the way.

**Amy Dutton:** So this is like inflation, right? You have 10 questions, and then \[unintelligible 00:13:13.12\]

**Jerod Santo:** This is scope creep, is what it is. This is scope creep.

**Kevin Ball:** He's taking the questions up to 11.

**Amy Dutton:** Got it. Got it.

**Jerod Santo:** Hey! Kball, a good one.

**Amy Dutton:** I just love that there's not overfetching of data. It's like "This is what I need", and so then it gives me exactly what I need back. And I just feel like it's easier to work with. Whereas if you get a REST object back, you've got to traverse it, you've got to parse it. With GraphQL, I get something that looks kind of like JSON, and I can just use it. It's perfect.

**Jerod Santo:** So from frontender perspective, but not from an implementer perspective.

**Amy Dutton:** Well, I don't know if I'm supposed to talk about Redwood, but Redwood makes it pretty easy to do all that stuff, and implement, because it has generators, and things like that. So I would say my one complaint with GraphQL is you feel like sometimes you're having to rewrite the same thing multiple times, because it's like "Oh, you've got to write the resolver, and the query, and then the mutation", and all these other pieces, where Redwood will generate all that duplicate-ish code for you.

**Kevin Ball:** Probably not a problem in Redwood, because you're doing TypeScript the whole way, but another nice thing about GraphQL is it allows you to be auto-generating typing across a language interface, for example.

**Amy Dutton:** Yes.

**Jerod Santo:** Yeah, it really speaks to the advantages of going all-in on a technology, and really leveraging it for what it's good at. And I freely admit that that's one of the nice things about TypeScript, is that.

**Amy Dutton:** And you can use those generated types on the frontend and the backend.

**Jerod Santo:** Alright, next question, question number four. This one was written -- I thought of this earlier when I was thinking about Amy. I thought, "Well, what would be a nice thing to write here?" What are your favorite IRL activities? What do you like to do in real life?

**Amy Dutton:** I love to read. I'm a nerd. I love hanging out with my kids. We went on fall break to the Smokies, we rented an RV, played a lot of games that week...

**Jerod Santo:** Sweet. What kind of games?

**Amy Dutton:** My son's favorite game is Unstable Unicorns. It's a card game.

**Jerod Santo:** I have not heard that one.

**Amy Dutton:** It drives me crazy.

**Jerod Santo:** Is that from the Exploding Kittens people?

**Amy Dutton:** I think so.

**Jerod Santo:** Yeah, they make all those weird animal games.

**Amy Dutton:** Nick, do you like it or hate it? I can just never win.

**Jerod Santo:** \[laughs\] Is there no in-between? There's just one or the other. "Do you like it or hate it?"

**Amy Dutton:** With this game, I feel like you like it or hate it, yeah.

**Nick Nisi:** I don't really like it, but my daughter likes it.

**Amy Dutton:** Yes. I can never win, is part of a problem.

**Jerod Santo:** What is the game called? Unstable Unicorns?

**Amy Dutton:** Yeah, Unstable Unicorns.

**Jerod Santo:** And how would a game like that be played?

**Amy Dutton:** You try and collect unicorns, and stick them in a stable, but you get --

**Jerod Santo:** Oh, unstable is a pun.

**Amy Dutton:** Mm-hm. And you're trying to -- well, you unstable other people's unicorns. And when you play certain cards, it's like a deck building game. You get certain abilities. So my sister-in-law, her family, they've even thrown away cards, because it's created these huge family disputes. We've kept all our cards, but it does make people mad.

**Jerod Santo:** Family is more important. I'm going to go out on a limb and say family is more important than Unstable Unicorns.

**Amy Dutton:** \[00:16:16.11\] Yeah. We've also done Moose Master. Have you played that one? That one's kind of ridiculous. You have to do dumb stuff like you can't use a person's first name, or...

**Jerod Santo:** Oh, yeah.

**Amy Dutton:** If this person asks a question, you cannot answer them. Just stuff like that.

**Jerod Santo:** Yeah. Cool! Love it. Unstable Unicorns up in these Smokies. Kball, this one's yours. And Amy, please don't reply until he's read this entire thought.

**Kevin Ball:** Yes. I'm learning new things from these questions that I wrote down. I hear you were awarded Fiddle Player of the Year in 2015. How does playing the violin compare to writing code?

**Jerod Santo:** Oh, that's amazing.

**Amy Dutton:** It's a great question. So when you're playing the violin, you have music notes, A through F, and you also use a keyboard that has keys on it, A through F. \[laughter\]

**Jerod Santo:** That's a good comparison.

**Amy Dutton:** That's a different Amy Dutton. I do live in Nashville. There are a lot of music people here, but that is not me. So... Not to be confused.

**Jerod Santo:** Kball, how'd you mess that up, man? That's a completely different person, dude. Show some respect.

**Kevin Ball:** I don't know, Jerod.

**Amy Dutton:** I think, actually -- I said A through F. I do think the music notes do go through G. I think I left out G.

**Kevin Ball:** Just providing more evidence of it being a mistaken identity...

**Amy Dutton:** Not me...

**Jerod Santo:** Yeah, not her. She doesn't know all the notes, and I don't either. So I'm sitting here like "I'll take A through F any day."

I will give you props, though. Maybe it's because we've had you on the show, and so you're in my search history... But if you search Amy Dutton on Google, you're right up there near the top. Your pictures are there... She does show up at some point. Maybe it's like result two or three. But good job of capturing the Google juice for your name.

**Amy Dutton:** The hard part -- these are girl problems, but it's when you change your name.

**Jerod Santo:** Oh, yeah.

**Amy Dutton:** So that does get confusing sometimes.

**Jerod Santo:** Yeah, for sure. Alright, we move now to question number six. This is Nick's question, and he's reading it now.

**Nick Nisi:** Oh, I can't read anymore... \[laughter\]

**Amy Dutton:** You forgot how to read?

**Jerod Santo:** What do you mean, Nick? Why would you -- just go ahead.

**Nick Nisi:** How many editors can you name that are better than Vim? \[laughter\]

**Amy Dutton:** I can name a lot.

**Jerod Santo:** Okay.

**Nick Nisi:** Like NeoVim.

**Amy Dutton:** \[laughs\] Yes... I was going to say, VS Code has Vim mode though, so there's that...

**Nick Nisi:** It's awful. It's awful.

**Kevin Ball:** Yeah, it's really not very well done.

**Nick Nisi:** I use it under duress and it's awful.

**Jerod Santo:** Yeah. Most Vim modes are not good.

**Amy Dutton:** I've been using Cursor lately, which I'm a fan of.

**Kevin Ball:** Plus one.

**Jerod Santo:** Letting it write the code for you.

**Amy Dutton:** Mm-hm.

**Jerod Santo:** I like that idea. I use it a little bit as well. My turn. Question number seven. Tell us something about Nashville that we might not know.

**Amy Dutton:** What is my answer as written?

**Jerod Santo:** \[laughs\] I know nothing of Nashville, so you're going to have to come up with something fresh.

**Amy Dutton:** Yeah, I'll use this one... So I was born and raised in Nashville. We did move to Chicago for a brief stint, but I was here in 2010 when it was flooded. That was crazy. If anybody's ever lived through a flood, or your town has gotten flooded, that's pretty bizarre.

So Downtown Nashville, they had to open up the dam, which flooded 2nd Avenue, and it was just like scenes that you see on the news, was there in your hometown. So anyways, kind of crazy.

**Jerod Santo:** Lots of flooding going on these days as well.

**Amy Dutton:** Now, this one might be a little bit more interesting... Now that I'm like talking, I'm thinking of other Nashville things. There is an old church in downtown Nashville called the Ryman. That's a famous concert venue. It is beautiful inside. And if you ever do visit Nashville, you can go visit it, and do the touristy thing.

\[00:20:05.19\] They'll give you some country music history. But across the street, there's some fantastic eating places. I can't remember what it's called, but it's like a food hall, a cafeteria, and they have some of the most famous Nashville places, like local stuff inside; they have little pop-ups, stores, and things like that. So if you want to get a taste of Nashville, that's right there, too.

**Jerod Santo:** Very cool. I definitely did not know that. I've been in Nashville exactly one time, and I really enjoyed it. Kball, let's go to you.

**Kevin Ball:** Alright, let's see. What is my question? What even is a full stack developer?

**Amy Dutton:** Oh, good question.

**Jerod Santo:** I thought of that one. \[laughs\]

**Kevin Ball:** Unlike all the other ones...

**Amy Dutton:** Full stack or full snack?

**Jerod Santo:** She complimented it, so I had to pull it back.

**Kevin Ball:** I like full snack. That's a good one. What is a full snack developer?

**Jerod Santo:** That's a good question.

**Amy Dutton:** I do like Nabisco.

**Jerod Santo:** Mm-hm...

**Amy Dutton:** Nutter Butters are one of my favorite go-to snacks.

**Jerod Santo:** Wow. I can't remember the last Nutter Butter I ate.

**Amy Dutton:** Oh, we get the little sandwich pack. Not sandwich, the snack pack. Not sandwich pack, snack pack, at the grocery store, for the kids. So I would say full stack is when you can write code that's on the backend that will run on a server, as well as frontend code. So with JavaScript, typically that's Node code. And then on the frontend - I mean, you can pick. There's several different frameworks if you want to lean into a framework. Or you could write vanilla.

**Jerod Santo:** Good answer. Kball, any follow-ups?

**Kevin Ball:** No. I think we can leave it at that.

**Jerod Santo:** Okay. We are now moving on to question number nine. You're doing very well, Amy.

**Amy Dutton:** Thank you.

**Jerod Santo:** We go to Nick for his final question.

**Nick Nisi:** Amy, did you know that I've emceed many conferences? I'm kind of a big deal. \[laughter\]

**Amy Dutton:** I didn't know that.

**Jerod Santo:** That's not even really a question, dude. It's just a humble brag. It's not even a humble brag. It's just a brag.

**Amy Dutton:** What conferences have you emceed? Did you do Squiggle?

**Nick Nisi:** I did.

**Amy Dutton:** Nice.

**Nick Nisi:** That was a lot of fun.

**Amy Dutton:** I'm a big fan of Josh.

**Nick Nisi:** Yeah, he's great. Josh and Dimitri, they put on a fantastic conference. It was a lot of fun. It was my third conference emceeing in an aquarium, so...

**Amy Dutton:** Oh, really?

**Nick Nisi:** That was awesome. Yeah. I had lots of aquarium puns.

**Kevin Ball:** I don't know, that seems a little fishy.

**Jerod Santo:** Oh, gosh... \[laughter\]

**Amy Dutton:** Is that distracting?

**Jerod Santo:** Kball?

**Nick Nisi:** Kball, yes. But... \[laughter\]

**Kevin Ball:** Always.

**Amy Dutton:** I guess it depends on the size of the fish swimming around you.

**Nick Nisi:** Yeah.

**Amy Dutton:** Or maybe -- have you been to the... What's that restaurant where it's like inside an aquarium? So you get to watch --

**Nick Nisi:** No.

**Amy Dutton:** ...you get to watch what you eat as you eat it.

**Jerod Santo:** Oh, they actually serve the same fish?

**Amy Dutton:** I think so. I think it's in the Rainforest Cafe family.

**Jerod Santo:** Gotcha. That's interesting.

**Kevin Ball:** That feels like they're trying to turn you off of those fish. I feel like I would have trouble eating a fish if its cousin was like sitting there, looking at me.

**Jerod Santo:** Yeah... Or kind of rubbing it in to the fish. I mean, it's kind of gauche, you know? It's like, "We're eating your cousin. You're next, buddy..." Alright, last question. This is a question that we used to ask on an old video show we used to do called Beyond Code at conferences. We'd go and ask the same five questions to everybody. Nick, you were on that show, weren't you?

**Nick Nisi:** I was.

**Jerod Santo:** Wow. It's amazing.

**Nick Nisi:** I'm kind of a big deal.

**Jerod Santo:** Yeah. I mean, you've done it all, man. I mean, nobody else can have that claim to fame. You've emceed three conferences in an aquarium. That might be Guinness Book of World Records kind of stuff right there. You might be looking at that.

**Nick Nisi:** Let's not jump the shark.

**Jerod Santo:** Oh, gosh...

**Amy Dutton:** Is that part of your contract?

**Jerod Santo:** We might edit that one out. That was so bad. \[laughter\] He's had a lot of practice with fish jokes. Alright. Amy, who is your developer hero? Who is your developer hero? Or a developer hero.

**Kevin Ball:** And why is it Nick Nisi? \[laughter\]

**Jerod Santo:** I would never write such a thing.

**Amy Dutton:** \[00:23:57.09\] I think my favorite developers right now are the ones that give back and turn around and educate other people. They share the things that they've learned. So I have a lot of admiration for Wes and Scott and Kent, just because I've learned a lot from them over the years, and I just appreciate -- I've never met Wes. I've talked to Scott, but Kent in real life is just one of the kindest people. So I think if you can help bring other people along, just kind of that idea of rising tide lifts all boats - I really just appreciate his attitude.

**Jerod Santo:** Very cool. Well said. You have made it to the end of your 20 questions, because we've asked you 10 of them.

**Kevin Ball:** 11. These questions go up to 11.

**Jerod Santo:** They do. I had a bonus question in there. Nick or Kball, do you have any bonus questions? Maybe ones that you didn't pre-think of, that you thought of while we were talking here you'd like to ask Amy before we move on? Classic Nick Nisi answer... \[laughs\]

**Nick Nisi:** That's how we end the episode.

**Jerod Santo:** Our listener could not see the many looks on Nick's face while he was trying to think of something... But I did. And I'm very happy.

**Break**: \[00:25:05.03\]

**Jerod Santo:** Alright, let's move on now to a little bit of news. What's going on in the web dev world. We are talking today about Svelte, because Svelte 5 is alive. This was released October 22nd. Svelte 5, "Our biggest release yet." When I say "our", I'm quoting the author of the post. I had nothing to do with it. After almost 18 months of development, comprising thousands of commits from dozens of contributors, Svelte 5 is finally stable.

So congrats to the Svelte team... And what is new in Svelte 5? It seems like the biggest thing is runes, which is a word that I do not necessarily know what it means. Over to you, Kball.

**Kevin Ball:** Yeah. Well, I don't know that I can give you a pithy version of what it means either... But there is a -- what are runes? I mean, I was trying to understand it. I say, "Okay, runes, they have a part of the syntax, their keywords, they have a dollar prefix, and they look like functions." Actually, what these remind me a lot of is sort of a mixture of things we've seen in the past. So they're using runes to replace some of the old reactivity primitives that Svelte had. And they're doing that in a way so that you're starting to use more functional syntax.

Actually, when I was looking at it, it reminded me a lot of like Vue's Functions API for doing data management, where you sort of wrap some state in a function, and now you have this nice little reactive primitive that you can pass around and do fun things with. Difference from that - you don't have to import them from anywhere. They are part of the language.

So Svelte continues to lean into this "We're defining our own language that the compiler makes magic for you." But it gives you a set of essentially data primitives that let you define reactivity. And it kind of felt like - yeah, this mix of the Vue Functions API, and something that I've seen with Qwik, where they use the dollar sign to indicate, "Hey, this function is special. The compiler is going to treat it specially."

Now, I think in the Qwik world, you do that with arbitrary functions. With Svelte, if I'm understanding correctly, they have a set of functions that just have this dollar sign, where it's like, okay, here's these 1, 2, 3, 4, 5, 6, 7, if I'm counting correctly... Seven special functions that the compiler knows about, you don't have to import, that then have particular behavior out in the wild, and you can use them to implement reactivity.

**Amy Dutton:** You used Solid at all?

**Kevin Ball:** I have personally not used Solid at all, but I've looked into it.

**Amy Dutton:** Yeah, I think I remember hearing that runes was supposed to be similar to signals. I've never used Solid, and I have documentation pulled up, and it looks like signals are just like use state. You can even get the array back, which is different than Svelte, because that almost -- to your point, it looks like a function.

**Kevin Ball:** It looks like a function. So if I'm understanding one of the differences in Svelte 5, under the hood they're using signals-based reactivity, which doesn't necessarily mean they're making the signals API that Solid has, but the same sort of concept of "We're putting data in a container and keeping track of its dependencies, and then sending signals to those dependencies so they update."

**Nick Nisi:** Do you like it? Do you like the new syntax?

**Kevin Ball:** Syntactically... I mean, I feel like it's --

**Nick Nisi:** Or did they rune it...?

**Jerod Santo:** Oh, that's actually a good one. I like that one.

**Kevin Ball:** That was good.

**Jerod Santo:** We won't cut that one.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** We'll just overdub my voice saying it, instead of yours... I wish I would have thought of that one.

**Kevin Ball:** So I have not used it enough to have a strong opinion. I do think -- there are a couple of things I like about it, which is, one, they continue to sort of lean into this idea of "Hey, we control the compilation stack, so that means that we can extend the language in ways that are beneficial for developer ergonomics." So I think that is nice.

They are moving -- I like the fact they're moving to this more granular reactivity. It feels like everybody's moving to signals as the way to do that. That's just sort of become the primitive that people are saying "Oh, this is the way to get high-performance reactivity. We're going to go to signals." So they're clearly adopting that.

\[00:32:06.04\] I'm a little torn on the "We're building it into the language and we're going to keep extending the set of keywords that are magical." I feel like that overall is not my favorite trend. I think it's nice to have a small language surface area and then be extending things, but if you are having the compiler do magical things in some ways, you're already doing that anyway, so you may as well just kind of be explicit about it and say "Hey, okay, these things - they exist. They're magical. Go."

**Amy Dutton:** At first glance, I am not crazy about the new syntax, just because I like the old setup. It just seemed more logical and easy to explain to somebody new. It was like if you want to use state, then you just say let instead of const. And if you want to change the state, then you just change it as if you're changing a variable; or if it's a prop, you just stick export on front of it. It just seemed like that's logical and how JavaScript should work. I mean, it is kind of, but just we've abstracted those things with different frameworks. But I've also heard people that have dug into it say "I really like it once I start working with it." So I'm trying to keep an open mind, knowing that I haven't built a large-scale project with it yet.

**Kevin Ball:** Yeah. I will say that since let has a JavaScript meaning, having it mean something slightly different in Svelte was always a little potentially confusing. And here you're still having something that means something different, but at least it's not overloading an existing keyword, which I do like.

**Jerod Santo:** Yeah, this choice seems more explicit and pragmatic, but kind of like less cool, if that makes sense.

**Kevin Ball:** It's less magical.

**Jerod Santo:** Less magical.

**Kevin Ball:** More explicit.

**Jerod Santo:** Yeah.

**Amy Dutton:** It is a lot faster from what I've heard.

**Jerod Santo:** So you get a lot faster. So I was going to ask what the benefits are... Because this is like a ground-up rewrite, is what they called it. So this goes all the way back to the core of how Svelte works. What do you win? It's fast?

**Kevin Ball:** I mean, at this point -- I think the speed, if I'm understanding correctly, is coming from moving to signals, as reactivity, which lets your granularity of reactivity be the single point of data, and the particular things that depend on it, rather than a component-level reactivity, which is what they had before... Which is very reminiscent of the difference between like a Solid and a React. React, anytime you change a prop, you're re-rendering the component, whereas Solid can actually go down to those individual fields.

The one other big change they talked about, that I think is interesting, especially in the context of what's been going on in the web world, or like the arguments of the day, is that they changed the way that they're dealing with event handlers, and I think also slotted content, to move it to everything's a prop, it's all kind of in JavaScript land, programmable and composable... And they explicitly say the reason they didn't do that before is that they were aligning with web components, because web components do have this sort of distinction between what is the template, and what have you... And they've decided that that's not actually worth it. And so they're no longer trying to really cater to having web components as a building block, and instead kind of going all in on the sort of "Everything is JavaScript", and therefore treating it like JavaScript... Which - I think that's controversial. I don't personally have a super-strong opinion on it, but I think it's interesting to see that kind of big shift going on, especially in the context of all the discussion about our web components, the future, should we be building with them etc.

**Amy Dutton:** I think I also remember seeing that they changed how you can build a component. So you can have multiple components in a single file. Before you had to have one component to one file, and now you can do multiple things. So that might help with file control.

**Jerod Santo:** \[00:35:54.09\] In addition to this, they have completely rebuilt Svelte.dev, and they have a shiny new CLI called SV. So that's cool. You have to watch an announcement video to learn about the CLI, and the announcement video is four hours long. So I do not know about the CLI. Oh, it deep-links you... But it scared me away, so I did not check out the CLI. Nick, you've been awfully quiet over there, in React land... What do you think about Svelte 5, man?

**Nick Nisi:** It looks interesting. I honestly like the less magic aspect of that syntax, maybe... But I haven't really used Svelte 4 or 5, so I need to. But it looks interesting. I'm curious, does that only exist in -- because Svelte created their own file. Like a .svelte file. Does it only exist in there?

**Kevin Ball:** Given that it's being added by the compiler - and I think the .svelte files are the ones that are being passed through that compilation step - I would assume so. But I have not dug into their build process.

**Nick Nisi:** Does that make it more or less portable?

**Kevin Ball:** It does look like you can also do .svelte.j -- oh yeah, I've just found it. You can do .svelte files, which are their special syntax. You can also do .svelte.js or .svelte.ts, which behave just like any other JS or TS module, but you can use runes. So those do go through the compiler... And that looks like that is new with Svelte 5, to give them a way to have those runes available in pure-ish JavaScript files.

**Nick Nisi:** Nice. Okay.

**Jerod Santo:** Which is all Nick writes, is pure-ish JavaScript files, right, Nick?

**Kevin Ball:** TypeScript, TypeScript.

**Jerod Santo:** So how much is portability a concern?

**Kevin Ball:** In what sense are you asking?

**Jerod Santo:** Oh, in the sense that Nick was asking. He's like "Does that make it more portable?" and I'm wondering, in what sense do you mean that word? Like portable off of Svelte?

**Nick Nisi:** Yeah. I was thinking more interoperable, maybe... I don't know. I think it's probably nothing, but just the other file name makes me think that it's too contained to be portable with other tools that are developed and can be brought in. I'm sure you can import things into Svelte files, so that's not the concern.

**Jerod Santo:** Sure.

**Nick Nisi:** But then once you're in Svelte, it's like, that's locked now, because you're in a Svelte file.

**Jerod Santo:** Gotcha. Like operating on Svelte-ish things with other tools, not like porting off of Svelte.

**Nick Nisi:** Yeah.

**Kevin Ball:** I think that is the downside of both what Svelte is doing and what Qwik is doing, basically where you build these special functionalities into the compiler, is now you have a dependency ongoing through their compiler.

**Jerod Santo:** Yeah, you're locked in.

**Kevin Ball:** You're locked in. And, I mean, that is what it is. That might lend towards saying, "Oh, if you want the option to move off of that, you isolate the places that you interact with state or reactivity, or things like that." But I mean, realistically, migrating is going to be a pain in the butt no matter what you do.

**Jerod Santo:** Or you do what a lot of people do, is you pick a technology, and then you just stick with it for a while, you know? You just use that sucker.

**Amy Dutton:** What? How does that work?

**Jerod Santo:** That's so avant-garde, isn't it? Like, you just keep using the same thing, and don't pick a new one until you switch projects.

**Kevin Ball:** And these days, if you want to change, you can open up Cursor and just say "Take this Svelte file and write it for me in Vue." And it will freaking do it, and it's amazing.

**Amy Dutton:** Have you seen Mitosis?

**Kevin Ball:** Say more.

**Amy Dutton:** That's by, I think the same guys that do Qwik. They wrote a library called Mitosis where you can write a component one way, and then you can export it for all the things. I mean, everything: Angular, Svelte, React, Vue...

**Jerod Santo:** All of them.

**Kevin Ball:** That's the dream. I wanted to do that back in the day with ZURB Foundation. And then ZURB Foundation stopped being relevant for ZURB, the business, and those of us working on it got laid off. But...

**Jerod Santo:** Ah... Amy, do you know of ZURB Foundation?

**Amy Dutton:** \[00:40:00.26\] Oh, yeah. I used it all the time. I loved it.

**Jerod Santo:** I did as well.

**Nick Nisi:** I didn't.

**Jerod Santo:** \[laughs\] Thanks, Nick. That's really relevant to bring in.

**Amy Dutton:** I switched from Bootstrap to ZURB.

**Jerod Santo:** It was the cool -- it was the underdog of the frontend...

**Kevin Ball:** It was, back in the day.

**Jerod Santo:** It was so cool. It was one of these where the less popular one is clearly the better one, in my opinion... But it's never going to get -- it's like the elephant is in the room already. You're not going to replace Bootstrap. But those of us who know, we use the ZURB Foundation, because it's better.

**Kevin Ball:** But it is one of the places where I formed a lot of my opinions about the danger of tying open source to for-profit companies.

**Jerod Santo:** Yeah, you were early in that trend.

**Kevin Ball:** Well, and here's the thing... ZURB Foundation was started by ZURB, which was a design studio. And it was a great way for them to both deliver products, but then also marketing-wise to get a huge amount of marketing. And then at some point, CSS frameworks were less sexy. They were not as valuable for marketing. They were not really driving that much of it. And being in a services business, you have ebbs and flows. And at some point, they said "We can't keep investing in it."

And so I was an employee there for a while, I led later versions of the project... I can't claim any of the original stuff, but I led some later versions. And when business got rough, ZURB Foundation got de-emphasized and booted. And I think there's another company now that has absorbed it, largely because it ties into some of their products, and they're doing things with it. But the development has been very push-pull, and now it's way behind the times, and Tailwind and everything has taken way over. But yeah, it's really hard for a for-profit company to consistently invest in open source.

**Break**: \[00:41:54.25\]

**Amy Dutton:** So this is going back to hot and spicy... What do you think about Vercel? Because that's basically what Next and Svelte are, is open source products to promote their hosting services.

**Kevin Ball:** So Next, I think, has very much kind of gotten driven by the Vercel wave to the extent that there's lots of pieces of it that only really work in Vercel. And now there's a whole open Next, which is like a separate thing of people saying "Hey, we've got to do things like that."

And so I think it's been -- I mean, there's a push-pull, but it's been challenging in that domain. I haven't seen Svelte fall into that same trap. I don't know if that's because Rich Harris has been better at resisting it, or because it's just less popular, so it doesn't drive as much, so they don't care as much, but... I mean, I think it's danger. And I don't, by any means, think that there's a good solution here. We as an industry have not figured out a good and reliable way to fund open source development. Every model that we've tried has drawbacks and challenges. And we just had this episode recently, we were talking about Evan You going and starting a startup and trying to do stuff, and the dangers in that... And he's one of the most successful people I've seen in terms of funding himself to work on open source, and he's still drawn out of it. So I don't have a good answer here, but I think it is a risk.

And right now, Vercel is doing great. They're growing gangbusters, they're doing all sorts of good things, and so the funding will keep flowing, and development will keep happening, and it's probably good. Where it starts to run into challenges is if the growth drops off, or there's a conflict of interest between the open source world and what's making them money. And we've seen over and over again projects end up -- I mean, you mentioned the downfall of WordPress, right? Where is that coming from? Well, Automattic raised a whole ton of money in 2021. They're probably running down on that. They need to either raise more money or do something else, and he's looking at their numbers and saying "Gosh, what can I do to goose this? Well, maybe these people who are freeloading off my projects, I need to go after them."

I agree that it's been -- I think it's been very counterproductive. He's not going to get the benefits he wants. But I suspect it's 90% to 100% driven by having taken on a bunch of venture money and suddenly needing to find some way to get more money into the business. The interests of the open source project and the interests of the business no longer perfectly align.

**Nick Nisi:** I will say that RSC, Server Components - they do make me ambivalent a little bit towards the future of React, just because I don't personally like them yet, and they're not easy... And they're definitely tied to Vercel right now, and that makes me not want to invest time in them. So that's a big concern for me.

**Jerod Santo:** I think there's a slight category difference between Svelte and Next, because one was brought in and the other one was developed on behalf of, or started inside Vercel, for that purpose, surely... Which was, I thought, brilliant marketing by the Vercel team. I mean, it's worked very well to have Next.js, and have it tied so tightly to the Vercel things.

The thing about open source is that there's always the fork button, and nothing lasts forever. I mean, ZURB Foundation was amazing, it brought a lot of value to a lot of people, it helped ZURB out for a while, and then when it stopped being valuable, fell behind, obviously. Not great, getting let go, and having to find another job, and like all this stuff. But the good times were good, and sometimes things just come and go, and they move the industry forward... But not everything sustains forever.

I mean, WordPress has been a shining star in both open source and in venture, or I should say maybe in business, I don't know about in venture. And so that's why its fall has been so dramatic. And because, like you said, Amy, such a large percentage of the internet is using WordPress... WordPress as a brand I think, is going down. As a piece of software, it's going to continue for decades. Maybe it'll lose some of its usage, something else might come along that's better, and definitely Matt has sown discontinuity and uncertainty into that community, which is never good... But if it's bringing value, someone's going to pick it up and run with it. And whether it's AnyPress, or ClassicPress, or - there's a few different forks attempting. Or just WordPress, making it through this hard time. When you have that level of usage, your death is slow, and more that you become like culturally less relevant, but still there.

**Kevin Ball:** You become jQuery, is what you're saying.

**Jerod Santo:** Yeah, exactly.

**Amy Dutton:** Well, the interesting thing that - I guess this is still the question mark I have with WordPress, is they have so many no-code/low-code people that have no concept of this conversation that we're having right now.

**Jerod Santo:** Sure.

**Amy Dutton:** \[00:50:10.16\] And so you can have developers that say, "No, I don't agree with how WordPress is doing stuff. I'm going to take a philosophical stance and say no, I'm not going to use WordPress." But then you have people that are like "I just need to get something up and running fast, and WordPress is the best and cheapest, and the option I'm going to run with."

**Jerod Santo:** Right.

**Amy Dutton:** So there's two different markets there that you're talking about.

**Jerod Santo:** A hundred percent. And the interesting thing about what Matt Mullenweg has done over the last month is that he's actually scorched the earth for both of those markets, and one understands why, and the other one -- I mean, I was speaking with a friend who just has a WordPress site, and is not a technical person, and he was like "What's going on with WordPress, man? Because I've heard--" Like, everyone's hearing things. And when all of a sudden you can't install plugins that you previously installed, just because you happen to be a WP Engine customer - like, you don't have a dog in this hunt. You're not invested in one or the other. You're just like "I'm running my website. And all of a sudden I can't run my website anymore."

And so that's the really frustrating bit, is like all these people who are completely uninvolved, clueless to any of the underpinnings of the web, and all of a sudden their day or their week or their month is tarnished, because of somebody else's fight. That's been, I think, the tragedy of this.

**Nick Nisi:** That's interesting though, because I didn't -- I assumed that people wouldn't care, or know, really... But clearly, the plugin thing is really causing people who shouldn't have to care, to care.

**Jerod Santo:** Yeah. I think that was -- if you're going to just look at it tactically, I think him cutting them off from WordPress.org unilaterally, and just like "You can't uninstall this plugin", and then taking over that plugin, were like the two things where it's like "Dude, that was just bad." Even just from a business, like, this was a bad strategy, you know? Whether it's moral, immoral, whatever; it's like, this is going to affect your business in a very damaging way that you probably don't even know the third order effects of. So time will tell on that... And what else? I guess we're hitting up somewhat close... We're going to talk confs real quick...

**Kevin Ball:** I want to hear about Squiggles. How did it go? What happened?

**Jerod Santo:** Yeah, let's hear more, man.

**Kevin Ball:** What was the hot stuff?

**Nick Nisi:** Well, it was pretty --

**Jerod Santo:** Besides Nick on stage the whole time. That's the hot stuff.

**Nick Nisi:** Kind of a big deal.

**Jerod Santo:** Please repeat all your puns for us. No, just kidding.

**Nick Nisi:** Yeah, it went really well, I think. Obviously, I just showed up and riffed on stage. So I didn't -- like, big props to Josh and Dimitri for putting on an amazing conference, and everybody that helped around there. It was just world-class from the start. There were some fantastic talks. They recorded them all, so they'll be out on YouTube soon... And it was in the IMAX theater of an aquarium, of the new England aquarium. And so an absolutely giant screen... It was so cool. But --

**Kevin Ball:** Can the fish see the screen?

**Nick Nisi:** They cannot, unfortunately. I didn't actually see any fish.

**Jerod Santo:** What?

**Nick Nisi:** It's a separate building. It's a building next door to the aquarium...

**Jerod Santo:** So this whole "I did it in three aquariums" thing is like kind of \[unintelligible 00:53:15.21\] You didn't actually work in an aquarium.

**Nick Nisi:** The name on the building was Aquarium, or the name on the property... So I'm counting it. It's fine.

**Jerod Santo:** \[laughs\] It's fine. You didn't see any fish, Nick.

**Kevin Ball:** I'm going to bring back "This seems a little fishy."

**Jerod Santo:** Yeah... It's getting more and more so.

**Nick Nisi:** But yeah, it was a lot of fun, and fantastic talks. The one big thing that I learned... The best thing in the last couple of years in the Apple world has been, for me, the Apple Silicon transition. The Macs are all amazing. They caused nothing but problems with the projector, with this IMAX projector.

**Jerod Santo:** Oh...

**Nick Nisi:** So yeah, that was fun.

**Jerod Santo:** Because it was an old projector, or...?

**Jerod Santo:** Yeah, backwards compatibility problems.

**Nick Nisi:** It'd be like everybody tested, and then it worked, and then we'd go plug it in again and totally didn't work... And it was just like a roll of the dice.

**Jerod Santo:** \[00:54:10.26\] Did it become actually funny because it happened to everybody kind of a thing? Did you turn it into a gag?

**Nick Nisi:** They actually had a fantastic format where after the speaker would end, I would come on stage and I would walk them over to a table on one end of the stage. And then I would distract everyone by asking them questions that were submitted through a tool, and get their responses.

**Kevin Ball:** It's like when Jerod sends questions.

**Nick Nisi:** Yeah, exactly.

**Jerod Santo:** I don't know what you're talking about. Very confused...

**Nick Nisi:** But then they could set up and get all of the bugs fixed quickly, while I was doing that. And they had like everything professional. They had this timer on stage, and it could send me messages to say "We're getting close", or "Keep going. We need another minute", and so I could just like keep drawing from those questions... It was a lot of fun.

**Amy Dutton:** Did they build the tooling for that? Or is that like --

**Nick Nisi:** No, I don't think so. But it was a web app, and it was phenomenal. I'll have to find the name of the tool, because you could -- they had all of the timers preset for every talk, and then they could like dynamically adjust them... But everything was like locked in. It was like the most professional setup, and they did it all themselves, which is really cool.

**Amy Dutton:** I was going to say, for a conference about tooling, that's awesome that the tools to support the conference were so good.

**Nick Nisi:** Yeah. But they had -- one fun thing is the day after the conference they took all the speakers on a duck boat tour of Boston, and I got to drive the duck boat. That was amazing. A duck boat is a truck that can go into water, and then we were just going down the river, and then...

**Jerod Santo:** I'm glad you explained that, because I was thinking of something entirely different.

**Amy Dutton:** I was gonna say, you asked about Nashville. We have duck boats in Nashville.

**Jerod Santo:** Oh, do you?

**Nick Nisi:** Wow.

**Kevin Ball:** Do you think there'll be duck boats in New York when we go for React Summit?

**Jerod Santo:** React Summit US. Good transition, Kball.

**Kevin Ball:** It's coming up. Except it's actually in New Jersey. They call it New York, but it's in New Jersey. I was very disappointed.

**Jerod Santo:** That's unfortunate. I didn't know that.

**Nick Nisi:** Talk about aquarium theater...

**Jerod Santo:** Yeah. Well, close enough is what they're saying. It's close enough. Yeah, that's going to be a good one. I think it's November 18th and 19th?

**Nick Nisi:** Mm-hm.

**Jerod Santo:** Check the show notes for a coupon code, or something. Amy, what are you up to in the conference land these days? Have you been to conferences? Are you going to conferences?

**Amy Dutton:** Yup, I was at one last week in Cincinnati. I was at Momentum, which Michael Richardson does a fantastic job. One of the things that made this conference a little bit different in terms of sponsors was usually you think of like the Vercels, or Cloudinary, or whoever is sponsoring... But just based on the community that's in Cincinnati -- like, Kroger is a big sponsor, or Fifth Third was a big sponsor. So just kind of a different demographic there, which was good. A great conference.

And next month I'm going to Connect Tech in Atlanta. I'm excited about that one. I've heard good things about that particular conference, but I've never been. And the nice thing is both of these conferences are within driving distance for me. So that makes it a little bit different.

**Jerod Santo:** That is nice. I am packing up to fly out on Sunday to All Things Open. Adam and I will be there Monday, Tuesday. By the time you're listening to this episode, I'm already back. Hello. We're back in town. But I've been looking forward to this one. We go pretty much every year to All Things Open, and it's looking like a great event again this year. And then I'm shipping off Kball and Nick to New Jersey, apparently... \[laughs\]

**Kevin Ball:** In New Jersey. New York.

**Jerod Santo:** ...to hang out with them at React Summit and the JS Nation folks. Not going on that one personally, but I usually do a couple conferences in the fall. I think this year I might just do the one. But... Let's call it a show, shall we? Final words... We'll give the final words to Amy, because Kball usually gets the final words, and Nick usually just stares at me when I ask him for something to finish the show off. Amy, welcome to JS Party. What would you like to say to the people as we close?

**Amy Dutton:** I'm going to put my stake down on TypeScript.

**Nick Nisi:** Yes...!

**Jerod Santo:** Aaand you're off the show. \[laughter\] Shortest panel run of all times... Just kidding. Okay, TypeScript is the final word? This is weird... Nick, say something. Save us.

**Nick Nisi:** TypeScript...!

**Jerod Santo:** Oh, no...! \[laughter\] Alright. On behalf --

**Kevin Ball:** It sounds a little fishy.

**Jerod Santo:** ...of Nick and Kball and Amy, I'm Jerod, this is JS Party, and we'll talk to you all on the next one.
