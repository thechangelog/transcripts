**Alex Sexton:** Alright, welcome to episode 24 or so... Of the yayQuery podcast, a takeover of the JS Party podcast. It's been a couple minutes, maybe a few weeks here now since we've had a yayQuery episode, but for JS Party listeners who don't know yayQuery - yayQuery is myself, and then... In order, introduce yourselves: Paul, Rebecca, Adam.

**Paul Irish:** Paul Irish. I am a Javascript developer and I like the web. That's me. \[laughter\]

**Alex Sexton:** Known for his ability to communicate well, Paul Irish.

**Rebecca Murphey:** Known for liking the web... Paul Irish. I'm Rebecca Murphey. I'm also a Javascript developer. I think the web's okay.

**Paul Irish:** That's fair...

**Adam Sontag:** I'm Adam Sontag. I love the WWW which is I believe Paul's real original bio. Also, I'm an erstwhile Javascript developer, and now a community director, I guess.

**Alex Sexton:** We used to have a podcast called yayQuery... One of the first nascent Javascript podcasts. It was loosely about jQuery, but we branched very quickly into most frontend web development topics pretty quickly. JS Party actually somewhat gets its name from the whimsy of the yayQuery days. I think one of the original names for JS Party was JS Matters, because it's events and things about Javascript, and also that it matters...

**Adam Sontag:** Not like Family Matters?

**Alex Sexton:** Yea, exactly. Pretty much exactly like Family Matters. \[laughter\] Normally, I'm joined by Mikeal Rogers and Rachel White, but they're in Germany, or something... I have no idea where they are. Who knows, who could possibly know that information? So this week we've decided to have a little yayQuery reunion for everybody. So let's jump in, since we have a little bit to talk about. What has changed since the last episode that we've had?

I think Rebecca and I both have children now...

**Rebecca Murphey:** That's no big deal...

**Alex Sexton:** I mean, 2.0...

**Adam Sontag:** Yeah. You know, it never occurred to me until now that we never put dates on the yayQuery website, so it seems kind of evergreen...

**Alex Sexton:** It's evergreen until you listen to \[unintelligible 00:03:39.27\] and we're like "jQuery 1.4.111, commit 93870 came out today..."

**Rebecca Murphey:** It seems so important...

**Alex Sexton:** \[00:03:52.06\] Yeah. I mean... It was, at the time. Alright, I think we're gonna start off with not a traditional segment, but we kind of wanna talk about things that didn't exist in the web or Javascript the last time we were all on a podcast together - which is quite a bit, which is quite cool in how fast things gather speed and become the main deals that everyone talks about, but you don't realize how quickly that comes up. Paul, do you wanna talk about something that has happened since then?

**Paul Irish:** Sure, there was a Javascript framework that was introduced in this time period that some of you might be familiar with, called ReactJS.

**Rebecca Murphey:** I hear they wanna put XML in our Javascript?

**Paul Irish:** Yeah, exactly.

**Adam Sontag:** Hold on! \[unintelligible 00:04:41.04\] put down my Margarita to listen to this... \[laughter\]

**Paul Irish:** So the interesting here was ReactJS actually launched at JSConf in Florida... Were all of us there at that one?

**Alex Sexton:** \[\\00:04:59.15\]

**Paul Irish:** Oh, damn!

**Rebecca Murphey:** Didn't we do yayQuery reunion?

**Adam Sontag:** We were already doing yayQuery reunions when React came out. \[laughter\]

**Paul Irish:** Yeah, and I remember from that the vibe that day at the conference... Like, "Facebook just showed this thing where they wanna put XML in JS. That is crazy! This framework... Why are they doing this? Why don't they just work with one of the existing frameworks? This is so against the community, or something." I felt like there was so much concern and being like "I don't like this!" that day.

**Alex Sexton:** There were two tweets from close friends of the yayQuery podcast... I think Rick Waldron and Ben Alman both had tweets that were pretty much like "Facebook is belittling all best practices that have ever existed in the face of..." - just a so very serious tweet... But to be fair, I think Tom Occhino - I don't know if he was ever on a yayQuery show; he definitely spoke at the first TXJS, because he was friends with us... But I think they focused on the wrong stuff in that first talk. Because later they did the talk (six months later at EU) and everyone loved it.

I think they were trying to focus on the autobindy-type stuff, because that was really hip, and they were glossing over the fact that they had added this ES4 feature of JSX back into the language, and didn't necessarily -- like on-click handlers, and all that stuff.

**Rebecca Murphey:** And Pete Hunt talked about that at TXJS 2015, about the mistakes of that rollout. I remember there was probably alcohol involved, because it was the end of the day and it was like the big reveal, but I just remember the room being appalled at this thing that they were seeing... And yeah, it was a long time before it kind of recovered from that.

**Paul Irish:** Yeah, there was a good at least six months where everyone had a really bad opinion of it, and it was just like "Ugh... Don't like it!"

**Rebecca Murphey:** But Dojo though, guys... Dojo is totally still... \[laughter\]

**Alex Sexton:** I often think about our arguments back in the day, Rebecca, of rolling your own large application with jQuery or using Dojo. I think Paul one time said something along the lines of like "Alex, I think you won that argument in that people agreed with you and went that direction", but Rebecca was right and then we were all wrong... None of those things occur anymore.

**Paul Irish:** In that you were right in the argument of rolling your own is just more feasible and kind of easier...

**Alex Sexton:** \[00:08:01.02\] But Rebecca was right in the sense that it's actually better...

**Rebecca Murphey:** Rebecca was right in that Rebecca was a bizarre voice for another three years after Alex rolled his own...

**Alex Sexton:** Oh yeah, for sure.

**Rebecca Murphey:** ...and left us. \[laughter\]

**Alex Sexton:** Moving on... \[laughter\] You're at Indeed now, correct Rebecca?

**Rebecca Murphey:** That's right.

**Alex Sexton:** Do you guys use types? Do you use Flow or Typescript or anything?

**Rebecca Murphey:** Oh god, do I have to answer this?

**Alex Sexton:** Well, I mean, that's the next thing that I was gonna talk about, because FlowType - another Facebook thing, but also Typescript...

**Rebecca Murphey:** The actual answer is yes, but we mostly use Google Closure... But we're fixing that.

**Alex Sexton:** The comments?

**Rebecca Murphey:** Yeah. Google Closure itself, Google Closure the library, and then the Closure Compiler.

**Alex Sexton:** Oh, I see.

**Paul Irish:** Oh, you use the Closure library?

**Rebecca Murphey:** Yeah... But we have some teams that are -- people really like the strong typing of that, so we have some teams that are moving away from Closure because no one uses it except Google (no offence), but moving to things like Typescript and Flow; we haven't really settled down on one, but people like their types because they're Java people.

**Alex Sexton:** Yeah, that's a really interesting segue, because Closure had type annotations in comments in order to do way better building back in the day. I added them to YepNope and I would double minify YepNope with Closure, and then with uglify it would come out smaller...

**Rebecca Murphey:** And it would take ten minutes...

**Alex Sexton:** For sure... I mean, it was small enough. Since then, we've had FlowType and Typescript come up. FlowType's written in OCaml, so if you ever wanna tribute to that, brush up on your OCaml. But I guess I'm interested in knowing what the uptick on types across the regular Javascript community is. It seems popular. Paul? Adam? \[laughter\]

**Paul Irish:** \[unintelligible 00:10:05.16\] I work on a few projects... I work on both the Chrome DevTools and on Lighthouse, which is kind of auditing performance tool. DevTools is written -- we use the Closure Compiler, so everything has the annotations. When the entire project is annotated, that compilation step is super valuable and super useful. Or in Lighthouse we have a portion of it, our CLI - we actually ported it over to Typescript, and then we're using Closure annotations for the remainder of the Javascript in the project. So we're using a little bit of both there.

And it's interesting, because at least on our team, we haven't come to a conclusion about it. It's like, "Well, the Typescript is nice, because it catches different things, and there is better in-editor tooling support, but the compile step is annoying... Whereas the immediate reload or rerun of just Javascript is so attractive." So we're just kind of like in that holding pattern.

**Adam Sontag:** I've overheard people say things to that effect, which is like "Are you in Typescript?" "No, I'm going as far as ES6 modules." It feels like if I wanna be going down the path of what Javascript is going down, maybe I might avoid that.

**Rebecca Murphey:** And I think that what we've seen is that the types help, but they don't make you write good Javascript. You can have a Closure Compiler comment that says "These 40 arguments are these types", but you still are passing in 40 arguments. I think it can seem like kind of a safety net for people who maybe aren't used to writing Javascript, which is kind of my world, but it doesn't make your Javascript good.

**Alex Sexton:** \[00:12:04.13\] Yeah. It's interesting, because I think part of the standards bodies are kind of maybe taking -- like, normally, when people do their own things and \[unintelligible 00:12:16.17\] CoffeeScript happened, and then I think a lot of ES6 was at least sped up, and some syntax like Feathers were inspired by CoffeeScript. The innovations to the language end up in the spec, but I almost feel like the opposite thing is happening with types, where they're like "We wanna get types in. We've been looking at it for a long time, it's hard. Let's try this, let's try this..." and then whenever FlowType and Typescript came out, they were like "Okay, well those things solve it, so let's not work on it as hard in the spec, because people have options already." So I'm interested to see how that plays out long-term. I don't ever see Javascript bringing types, for what it's worth; it would just change it too fundamentally... But maybe I'm wrong. That's a prediction.

In that same vein, ES5 - we did an episode whenever ES5 landed, and we talked about the new array prototype functions and things like that, and how you'd have to use polyfills to get it all to work. Since then, a few versions of Javascript have been released, and it's kind of evergreen now, and it's hard... I guess Javascript \[unintelligible 00:13:28.09\], whatever. But we've had ES6, ES7, ES2015, ES2016, and now we're in the midst of 2017. I think we're all using -- everyone's using Babel for everything. I guess DevTools probably \[unintelligible 00:13:42.21\]

**Rebecca Murphey:** ...except Brian LaRue.

**Alex Sexton:** Well, sure.

**Paul Irish:** Yeah, we don't use Babel... I think part of it is because -- yeah, in the DevTools case, we only run in Chrome, so we make sure that what we're writing today and lands essentially in Canary will work in Chrome stable; that's what we have to operate under. But yeah, compiling the source has some ergonomic downsides, so we're not really interested in it.

**Alex Sexton:** Cool. And one of the news segments on the show that we did was talk about when Node was released at JSConf EU...

**Rebecca Murphey:** No one's ever gonna use Javascript on the server. \[laughter\]

**Alex Sexton:** We seemed excited about it, but I think none of us really understood what it was, and we were all just excited because Twitter was so excited about it.

**Adam Sontag:** I had my favorite story about it...

**Alex Sexton:** Go ahead.

**Adam Sontag:** You all know my story, which is that when Node.js came out, we all were excited about it running around in Europe, and I was like "What is No.js? What is No.js?" and like "NoSQL looks like a thing", and I was like "Oooh, so Node.js is like a NoSQL of Javascript! It's like Javascript without Javascript!", but then I found out that it was called NODE.js... \[laughter\]

**Alex Sexton:** Node.js... I like it.

**Adam Sontag:** So yeah...

**Paul Irish:** Can I ask another question on this topic? Because I think one of you guys know the answer better than me... Around ES modules and .mjs extension. Because I don't really know where things are completely, but I just remember being slightly infuriated that we're gonna have to adopt .mjs for all the ES module files, for this whole load compatibility, and I was like "Come on! The people that have been doing it wrong, they get the real extension, and now the real thing gets kicked off...? This is so stupid! It's stupid!" And then at some point I was hanging out with Alex Russell and Domenic Denicola, and I was like "Guys, isn't this so stupid?!" and they were like "Why? What's the problem with it?" They were like "It seems okay..." and I was like "Well, if they think it's okay, then probably I guess it's okay..." \[laughter\]

**Alex Sexton:** \[00:16:07.15\] You kind of glossed over that -- I think Bradley Meck mostly was working on how to do importing of Javascript modules in Node.js officially based on this stuff... I don't even know the exact details of the problem, but there was some problem where because people were doing modules in a weird way before, all their stuff would break if we kept using the same system that they're currently using. So in order to differentiate between those two different systems, you would name your real new official modules with the extension .mjs instead of .js... And I think I agree that the people who broke it should have to change -- I think it's a Office Space quote, "Why should I have to change my name? He's the one who sucks." \[laughter\]

We don't have a ton of time to get to the beginning of this, so we're gonna move on a little bit. There was an io.js release and fork, and a few other things, but Node.js 8 is coming out soon, so I don't think we can cover all that... Plus Mikeal's not on the show and he'll want to have opinions.

That was our section of things that didn't exist in Javascript since we last had an episode; I don't think we nailed it, because we talked about two things we've talked about on previous episodes, but whatever.

The next section we have in here is things that used to exist when we had episodes, but don't anymore. I only put two things in here - YepNope... I deprecated YepNope, but people still use it; it's still very popular, for some reason. And JSConf US is something we talked about a lot... Maybe it'll come back though.

I wanted to intentionally rush through that section because it wasn't that interesting. \[laughter\]

**Rebecca Murphey:** Moving on...!

**Alex Sexton:** Yeah... The last thing that I wanted to talk about was a little background behind some of the language we used on the show. I don't think we ever...

**Paul Irish:** Some kind of behind-the-scenes action, yeah?

**Alex Sexton:** Yeah, a little bit of -- I don't know a different word from behind-the-scenes, actually... \[laughs\] Paul, people may have seen us talking about "editing on a clap" or "this is what's on the clap."

**Paul Irish:** Yeah.

**Alex Sexton:** Can you give me some background on that?

**Paul Irish:** \[laughs\] Okay, sure. So the way that we put together yayQuery episodes - we would get together, and I think we'd get on video chat, we would get on a little EtherPad document... EtherPad was like an Ajax app with collaborative editing where everyone's edits is highlighted, so it's very clear who wrote what. And then we'd just get on there, and start drinking, and then figure out what the hell we were gonna talk about, and then two hours later actually record an episode, eventually.

But anyways, that EtherPad instance that we had was hosted on OkSoClap.com, and this was hosted by our friend Vlad, who set the whole thing up for us. It was the coolest little instance, and it worked so good for us. Now, the history of that OkSoClap is pretty much because in the beginnings of yayQuery I think it was my fault that -- it was that just when I was getting tired of a topic, or...

**Alex Sexton:** Yeah, it was at the beginning of every segment... \[laughter\]

**Paul Irish:** Oh, right! And I'm starting to be like "Okay, this is how it went", and I'd be like "Okay, so... \[clap\] This is how the story goes." I'd say "Okay, so" and then I'd clap my hands; it was just like a nervous tick, but it turned into a thing that Alex picked up on and made it into a thing.

**Rebecca Murphey:** And that all the DNS entry doesn't resolve...

**Adam Sontag:** \[00:19:52.22\] If I recall, Alex is a guy who knows when things are things... \[laughter\]

**Alex Sexton:** I'm a guy who knows when things are things, and that was a thing. I think we're running up on the first break, so we're gonna take a break right now and come back with a few classic segments.

**Break:** \[00:20:10.18\]

**Alex Sexton:** And we're back. During the break, Paul reminded me of the fact that the OkSoClap EtherPad instance was actually used by TC39, the Technical Committee 39 from the ECMA standards body organization system enterprise... \[laughter\] They used the OkSoClap for years to take notes, so the official Javascript language was partially developed using the OkSoClap.com EtherPad created by yayQuery... So our tentacles go deep into the language. \[unintelligible 00:21:40.15\]

**Adam Sontag:** I remember, it's a symbol of how different that whole standards process is than when we started yayQuery. It's a lot more open, and I think that that is a nice thing to point out.

**Paul Irish:** Yeah, the fact that when we started it was a bunch of people that -- who knew who it even was? And then nowadays not only Rick Waldron has been involved in it forever, but people from Twitter and Node, and a lot of actual Javascript developers from the community are engaged in TC39, so it's a much different and a much more open, collaborative feeling these days.

**Alex Sexton:** I think it was Rick that was the crossover between yayQuery backchanneling and taking notes at TC39 meetings. And he did that through the jQuery Foundation seat that we bought on TC39 for him and Yehuda. So it was actually -- the popularity of jQuery was able to raise enough money to create a foundation that was able to buy seats on TC39 to put real developers and open up notes and do those things.

I think a lot of that history of the community - getting more involved and stuff - was really nifty, and nice, and I'm glad to have seen it happen.

I forgot... Mikeal and Rachel are gonna be gone next week, and I need to get Rick on the show maybe... We'll see.

**Rebecca Murphey:** You could just do this again.

**Alex Sexton:** Yeah... Whatever.

**Adam Sontag:** I can shave my head, or something. \[laughter\]

**Alex Sexton:** We'll just fully take over the podcast, lock Rachel and Mikeal up in a closet every Friday.

**Adam Sontag:** I could do a part where I talk about steak, or something... I don't know.

**Rebecca Murphey:** The steak that you flew home with you?

**Adam Sontag:** Oh, that's a different story!

**Rebecca Murphey:** Oh!!

**Alex Sexton:** I'm lost. There's a soundboard... Sometimes we get Rachel talking about cat hair, which is probably my favorite one. Can we play that?

"Hold on, I have cat hair in my mouth..." \[laughter\]

**Alex Sexton:** Yeah, it's really good... Don't say anything you don't want to be turned into--

"Oh wait, that happens on an episode of Gilmore Girls... I know what that is."

**Alex Sexton:** That was about Node.js' forking into io.js... That was the Gilmore Girls, season two, episode three.

\[00:24:01.20\] Let's get into a classic segment. This is a little segment... It's about little, tiny things that you never thought you knew. It's something that we like to call

\[all together, loud\] "Hideeeeenhancements!" \[The Little Tiny Things/ You Never Thought You Knew\]

**Alex Sexton:** If we're lucky, we'll edit some audio for our old song to be there.

**Rebecca Murphey:** \[unintelligible 00:24:25.19\] to hear that.

**Alex Sexton:** And if you're unlucky, then you heard us yelling it. Maybe you got both. Cool. So the hiddenhancement this week... Adam, why don't you introduce the concept?

**Adam Sontag:** Okay, so the concept of a hiddenhancement - it's an enhancement that's hidden; kind of like the first syllable of the word "enhancement" is hidden and the last syllable of the word "hidden". \[laughter\] So this is a segment where we would talk about cool stuff that was around and you didn't know you could use.

**Rebecca Murphey:** Like, in jQuery.

**Adam Sontag:** Primarily in jQuery, but now most of that is in the DOM... Right, Paul? \[laughter\]

**Paul Irish:** Yeah, sure. Okay, so there was at least two hiddenhancements that I wanted to share... Actually, they're both kind of new. You might be familiar with document.elementFromPoint(), where you provide an x, y location and it tells you the element that is right there. But there is another method which is more useful in some cases. If you know about that one, you might have some code where you're like, okay, we take the first one and then we're gonna set pointer events or just hide it and then find out what's underneath it. The other method is document.elementsFromPoint() (elements - the plural), and this returns an array of nodes from top to bottom that live at that x, y coordinate, so you can just see exactly what the stack is.

**Alex Sexton:** Is it a NodeList or is it an Array?

**Paul Irish:** It's an Array. God damn... Well, you know, there's an interesting distinction between Arrays and NodeLists, right?

**Alex Sexton:** What's that, Paul?

**Paul Irish:** \[laughs\] A NodeList is like this Array-like thing, but it's kind of -- it's been frustrating, because we always get back NodeLists from \[unintelligible 00:26:29.28\] and in NodeLists you can't do things that you'd normally do with an Array, right?

**Adam Sontag:** If I recall, there's like prototype methods missing...

**Alex Sexton:** \[unintelligible 00:26:43.10\]

**Paul Irish:** Yeah, it's always been frustrating, so that's why we always do that arrayed prototype slice deal. So number two hiddenhancement is that the NodeList object is now iterable.

**Alex Sexton:** It's everywhere?

**Paul Irish:** Yeah, it is everywhere. I think probably IE10 is where it bottoms out. But yeah, iterable NodeList available on all modern browsers. You get back the result from querySelectorAll, and you have four each sitting on that.

**Rebecca Murphey:** Speaking of IE10, I just wanted to let you know about this other browser that came out... It's called IE9. It's gonna have CSS3 support, and you can hear us talk all about this in the South by Southwest (???) episode of yayQuery. \[laughter\]

**Alex Sexton:** \[00:27:41.09\] Yeah, me and Paul -- oh, that's a good story. Paul and I were given, via yayQuery - because we were on the yayQuery podcast, for some reason, we got VIP press badges to the IE9 launch party at Sout by Southwest, and we sat at press tables as they did the press announcement. We were next to Wired. Wired was writing the article on IE9 being launched, and me and Paul were just writing tweets about how IE9 was just gaming all of their demos. It was a really good time.

Then we got to go see yaySayer at the after party, in the VIP section. We were there with -- who was it...? Werner Vogels from Amazon, the CTO of Amazon. It was a wild ride. IE9... Good old days. \[laughter\] Yeah, yayQuery press badges were a thing at some point... \[laughter\]

**Paul Irish:** That was so legit!

**Alex Sexton:** That's funny. So one other hiddenhancement that I wanted to bring up... I saw an Addy Osmani tweet maybe a few bits ago; there's a new feature in DevTools -- Paul knows a little bit about DevTools, Chrome DevTools specifically... And we're always talking about splitting up your code, and only uploading the code that you need for the initial load and stuff like that - and this is actually a pretty difficult thing to know. You can have really cool, good dependency management and try to figure it all out, and do trees and some sort of something, but DevTools can tell you now exactly what code runs... I think splitting it up still might be difficult, but it's a really good indicator of that. Can you tell us how to find that, Paul?

**Paul Irish:** Sure. In DevTools, what you can do is -- it's in a place that we call "the drawer", which is the little console at the bottom, when you hit Escape and that pops up... So you can definitely hit Escape to bring up that, or you can go through the top-right, the little three dots menu, go to More Tools and click Coverage. Either way, you're gonna click a little menu, the three dots, and go for Coverage. From there, there's a little Record button; start recording, and stop if when you're done.

You can do it instantly... If all you wanna look at is CSS, it's just gonna look at the CSS that's used on the page. But usually, you're looking at scripts, so you'll wanna load the page and maybe open up, like try out some functionality. Then you get a report on exactly how many bites of every file that's loaded have been evaluated, either by the Javascript engine or the style engine, and then from there you can go see the exact lines, and whether they were evaluated or not... And evaluate, figure out on your own what you can kill off, or what you could move to another module \[unintelligible 00:30:33.08\] things like that.

**Alex Sexton:** Very nifty.

**Paul Irish:** We're also thinking of making it more like live, so all those results would be streaming, and maybe you would be able to rewind to certain interesting points, like at DOM content loaded it was this, but then you scrub the slider forward and see what it was at window load, so you can get the history of all that coverage, so you can get a better idea of how it kind of changes over time, as each file was loaded and each thing happens. So those are some ideas there; if anybody wants anything in particular, just holler at me.

**Alex Sexton:** Is this available as data from Lighthouse, or anything like that?

**Paul Irish:** Yeah, we have it available... We have some audits for this in Lighthouse 2, and we just kind of summarize it at a high level. You can also build some tooling around this on your own, if you wanna dig into the DevTools protocol. It's pretty raw data over there, it's gonna need some massaging, but if you are interested in building a tool that automates looking at this, then you definitely can.

**Alex Sexton:** Sure. I think you have a tool that was my pick last week... It's pw-something, right?

**Paul Irish:** Yeah, pwmetrics.

**Alex Sexton:** \[00:31:55.25\] Pwmetrics - it's a command line tool that will automatically run Lighthouse locally in a Chrome instance... So if you wanna hook that up to your build process to get metrics out, and then kind of like test that pass. I think it could be a really nifty test to say that like "You can never ship more than some bottom line of like 80% of the code that gets loaded must be executed, otherwise the tests fail", or something. Does that make sense? It could be a really nifty build-time check that causes you to never go over that... Because once you go over too far, it's much harder to fix.

**Paul Irish:** Yeah, exactly.

**Alex Sexton:** Cool. That's really nifty, good job! Good job at your job! \[laughter\] Next up we have probably the most famous segment... It's the \[unintelligible 00:32:50.22\]

**Rebecca Murphey:** What would we have today? Would we have like the Webpack loader of the week? \[laughter\]

**Alex Sexton:** The Babel transform of the week...

**Adam Sontag:** The React \[unintelligible 00:33:16.25\] of the week... \[laughter\]. Today's plugin of the week - I picked this, but Rebecca, I don't know if you've actually looked at it... So why don't you go ahead and actually take this one for us?

**Rebecca Murphey:** Wow... That's really -- I mean, it's an explosive modal... It's the most explosive modal on the web.

**Alex Sexton:** What is it called?

**Rebecca Murphey:** It's called Explodal - duh! Like, what else would you call the most explosive modal on the web...? This is in the true spirit of jQuery plugins, I feel like.

**Alex Sexton:** It's just CSS. \[laughter\]

**Rebecca Murphey:** Well, I was gonna say it's functionality that you probably don't need on your website, but there's a plugin for it, so why don't you add it? It's good.

**Alex Sexton:** It's a modal that explodes up!

**Rebecca Murphey:** It explodes!

**Paul Irish:** I think some good use cases for this like the Add To Cart button on Amazon would be good; so you click Add To Cart, and instantly, Amazon's like "Boom!!!' with flames and fire... Yeah, it's those little touches that really add to that user experience.

**Rebecca Murphey:** Only 97.32% CSS, so I don't think we can say it's CSS.

**Alex Sexton:** I think the other part is a gif though, right?

**Rebecca Murphey:** No, there's one line of Javascript.

**Alex Sexton:** Oh, okay...

**Rebecca Murphey:** I don't know, I have to look at this on GitHub really to see...

**Paul Irish:** It's onclick handler...

**Alex Sexton:** Oh, they really should have done the old CheckBox Checked thing, where you didn't need Javascript...

**Paul Irish:** Yeah, I mean, they're using a straight up on-click handler, like in-line onclicks. That's pretty classic.

**Adam Sontag:** So you just mean that they might not need Javascript? \[laughter\]

**Alex Sexton:** I also... As part of the plugin of the week - I don't think it was ever the plugin of the week, but this felt like the right place to talk about it... One friend of the podcast, Ralph Holzmann, let me know recently that there was recent activity in the LABjs project. LABjs, if you remember, was one of the many entrants to the script loader wars back in the day, the good ol' wars, for asynchronous...

**Adam Sontag:** He lost a lot of good devs out there... \[laughter\]

**Alex Sexton:** \[00:35:38.12\] Yeah... LABjs was Kyle Simpson, or getify, as you've probably seen streams of consciousness fly by your Twitter stream from him... Really bright dude, but I definitely did not expect a 3.0 or any late updates to the script loader entries. So yeah, 3.0 is in the works... I think it actually is somewhat in relation to actual standards that I've gotten through.

Kyle did some work with the standards bodies to do some of the async false stuff, in order to guarantee in-order async loading... So if you inject a script with async false after the DOM was already loaded, it means that it must execute in order, and that is like a thing now.

**Paul Irish:** It's a thing.

**Alex Sexton:** Yeah, I think yeah.

**Paul Irish:** Oh, wow...

**Rebecca Murphey:** Alex gets to say when things are things.

**Paul Irish:** I believe him.

**Rebecca Murphey:** If he says it's a thing, it's a thing.

**Paul Irish:** If he says it, okay...

**Alex Sexton:** Yeah... But specifically, &lt;link rel="preload"&gt; Another one of Paul's co-workers, Eric Bidelman, recently tweeted about &lt;link rel="preload"&gt; for scripts and styles landing. So you can preload critical resources... But you can also do that with service workers and stuff too, so choose your tools wisely.

But yeah, I thought it was interesting... A little LABjs update for everyone, in 2017.

Next up, we were going to have "Paul Irish's jQuery anti-pattern for performance of the week. Whump-whump!" Yeah, whump-whump is correct, because I think Paul just decided that jQuery is the anti-pattern for performance of the week...?

**Rebecca Murphey:** Ouch!

**Paul Irish:** Yeah, yeah...

**Adam Sontag:** Oh, man... That's a double-burn because that was my \[unintelligible 00:37:36.15\]

**Alex Sexton:** We'll move on quickly... \[laughter\] Next up is a less oft used segment that we add in yayQuery, called "the yayQuery beginners corner", and I would implore us to not sing this one... Okay, Adam can sing it. \[laughter\]

**Adam Sontag:** \[unintelligible 00:38:01.10\]

**Alex Sexton:** Jonathan Neil is dying somewhere in the JS Party Slack.

**Rebecca Murphey:** I think he started an octave too high... \[laughter\]

**Alex Sexton:** Yeah, also a shoutout to Jonathan Neil for all the music that hopefully you're hearing again... There's a band camp with all of this music out there from John.

**Paul Irish:** Yeah, just google "John Neil band camp", and all the music is right there; it's so good.

**Alex Sexton:** Yeah. I remember back in the day, we were like "Hey, John, you had written some jQuery song once... Do you wanna do a theme song for us?" and then a day and a half later he's like "Here's 21 songs..." \[laughter\], all of different lengths, all perfectly recorded, for segments you didn't even know you had yet.

**Adam Sontag:** With like Dan's Beachboys-esque vocals... It wasn't just like he turned on his tape recorded and let his melodica rip... \[laughter\]

**Alex Sexton:** Bizarre in how fast and good the turnaround was on that.

**Paul Irish:** Amazing... Truly amazing.

**Alex Sexton:** Anyway, let's get into the beginner's corner. Rebecca, I think you were talking about...

**Rebecca Murphey:** Yeah, this was always my segment, of like "say things that maybe you didn't know."

**Alex Sexton:** It's a different segment, actually.

**Rebecca Murphey:** What?

**Alex Sexton:** The things you maybe didn't know - that's the hiddenhancement... \[laughter\]

**Rebecca Murphey:** Is this the throwdown here? \[laughter\]

**Adam Sontag:** \[\\00:39:46.14\]

**Rebecca Murphey:** Yes, he did! \[laughter\]

**Alex Sexton:** Classic!

**Rebecca Murphey:** \[00:39:51.02\] He did just do that... As men do. No, sorry. No, I just saw this video, and... A lot of people are mystified by Webpack and how it works - especially people who are kind of new to Javascript and frontend development, or people who have been doing it for a while, but feel like they need to be "doing it right" now, and they're like "Oh, I need to learn Webpack" and "Yikes, that's scary!" This was just a really great video by Naomi Jacobs at BuzzJS, so check that out. I haven't heard of her, but she was just a really approachable speaker, who kind of laid out "Here's what Webpack actually does. It's not magic, it's just Javascript to make your app be able to load asynchronously, be able to load in tiny chunks, instead of all at once, and be able to do all the cool things that you can do with Webpack."

So check it out, it's 45 minutes or so long, but it was super approachable. I sat in a room with a bunch of other devs watching it, and could see them like "Oh, I get it now...", so I highly recommend it.

**Alex Sexton:** On the topic of Webpack - I do some Webpack work and have configured some crazy Webpacks in my day, but there's some of it that's weird, right? Does anyone fully get why it's query parameter based configuration in parts? Is there a reason for that?

**Rebecca Murphey:** It's like anything else -- somebody needed something, so somebody wrote code to make that thing; it wasn't like a design review behind it, I imagine, like "Here's how we should do it." \[laughter\] But you don't have to pass it -- the query parameters are a nice, string-based way to express configuration, but you can also set those as an object in the loader config on your Webpack config.

**Alex Sexton:** Right, right.

**Rebecca Murphey:** I don't now, it's a cool hack... Do you wanna write JSON strings by hand?

**Alex Sexton:** No...

**Rebecca Murphey:** No, right? So query strings - here we are.

**Alex Sexton:** I added something to this section too, so I might as well mention it. I think everyone shared it a million times, but if you ever wanna learn Redux, I really like the Getting Started With Redux course on Egghead.io from Dan Abramov, who wrote Redux. It's very good. He takes you through the concepts of Redux by more or less building Redux for you; that sounds actually way scarier, but he's like "Let's do this thing where we have this very simple thing; it turns out we need this tool" and then he builds that tool in front of you. He's like "Yeah, it's already in Redux." It's kind of a good way to do it.

**Rebecca Murphey:** Can I say something about Redux?

**Alex Sexton:** Yeah, sure.

**Rebecca Murphey:** You might not need Redux.

**Alex Sexton:** Do you have a web page for that?

**Rebecca Murphey:** I don't, but I will by the time this podcast is over.

**Adam Sontag:** "I will by the time my company sponsors need to write one, so that we get some sweet marketing buzz." \[laughter\]

**Rebecca Murphey:** No, we were rewriting a thing on \[unintelligible 00:42:54.08\] that I can't really say much more about, but we were rewriting it and we were using Preact and Preact Redux and Redux, and I did the Webpack bundle analyzer thing, and it was like 7k of my 21k bundle was for Redux and Preact Redux... And it was like, you know, this is actually really simple and totally not worth one-third of our bundle. We'll just do old school React \[unintelligible 00:43:22.03\] management, and it's like, it's okay... You don't have to use all these tools.

**Adam Sontag:** Just like they did in the articles of confederation... \[laughter\]

**Alex Sexton:** Jeez, the deep hole... \[laughter\] And I already praised Eddie once in this episode, which is more than enough, but he just informed us of an article written by Dan Abramov, who \[unintelligible 00:43:45.21\]

**Rebecca Murphey:** Oh yeah, great! "You might not need Redux."

**Alex Sexton:** ...called "You might not need Redux."

**Paul Irish:** That's a good way to get out ahead of things... Ship something on your own and then write the "You may not need this" post for \[unintelligible 00:44:00.18\]

**Alex Sexton:** For sure. Alright, I think we running up on a break, so... Yeah.

**Break:** \[00:44:07.22\]

**Alex Sexton:** And we're back! One segment that I believe only happened one time - I don't think it was officially a segment, because in the episode we didn't know it would become a segment, because - a lot of becauses in this - Adam intro-ed it. There was some show on The Food Network, Adam...? Throwdown - is that what it's called? Or is it like \[unintelligible 00:45:14.24\] Exactly! I think Adam and Paul had planned an argument to have, and Adam gave it The Throwdown section, but... I recently got into a pleasant, friendly argument with a friend about function binding in the new world, especially in the world where we're not compiling fat arrows. Fat arrow functions cause a function to be bound to a lexical this. It would be very similar to a function that at the end had a .bind(this), but not exactly, because you don't actually have to do the binding; it literally just uses lexical scope, or whatever... Versus a function that doesn't use "this" inside at all, and also is not a fat arrow and it's not bound, so an unbound function. So there's not such thing as an unbound fat arrow function, because it's always bound to a lexical "this".

This friend was saying that by default now we should use fat arrows that way; everything is always bound to a lexical "this". Let's lint for that, and let's not allow us to use the function keyword anymore. Thoughts?

**Rebecca Murphey:** In the code that I write, I feel like we do this a lot, but not always, but it's because we need the --

**Alex Sexton:** So there are a few cases where it's fine, like constructors - there's no constructors with fat arrows, and a few other edge cases. Those would be perfectly fine to lint for. But I can definitely understand the argument where the fat arrow -- like, in my mind, unbound functions are the default, and if you don't use this, why would you bind the function? And I pretty much agree, that was my argument - I'm smart enough to know if I use the word "this"... But let's add the team aspect, and the fact that we already lint for semi-colons and all these other things, but I can definitely see the argument that if everyone just uses fat arrows for everything, then this is always what you expect it to be; even in the unbound case, everything is always bound to a lexical "this", and it kind of like smoothes over maybe that confusing part of the language.

**Rebecca Murphey:** Yeah, that's kind of what I'm saying. I think that we tend to do this anyway, but we don't lint for it, but I think it's more out of laziness that we tend to do it, because it's less typing. Whether we need the "this" or not, we just do it because it's a really handy way to write.

\[00:47:58.02\] We do this all the time with arrow functions that you pass to map, or something like that; we don't NEED the "this" binding, but it's just a handy way to do it.

**Alex Sexton:** Right, yeah. So I guess I lose. It seems like...

**Rebecca Murphey:** But I don't know if there's a reason to do it...

**Alex Sexton:** My opinion is pretty much that I'm fine for our company choosing to have an application where we lint in this way and write Javascript in this style, but I think it's weird to refer to fat arrows as like the default way to write functions and to refer to functions.

**Adam Sontag:** And I feel like it's kind of a beginner-unfriendly history, like it's a \[unintelligible 00:48:41.17\] of Javascript to try and be like "This is the new right way to do it, and everything you've seen that's older than three years ago is just wrong and weird now."

**Alex Sexton:** Yeah, and I think one interesting thing about this person is that pretty much their entire Javascript career is in the era of fat arrows, so I think actually to them fat arrows are default; like, why would you write that function? And to me, that's just a bizarre concept. The first thing I do is write a function, and then if I think about it and I want it to be bound to a lexical "this", then I would choose to use the fat arrow. But that's not always true.

Some of the stuff with fat arrows is inside classes can get a little wonky. You have to do an equals fat arrow rather than do the shorthand, because then things aren't bound to a lexical "this". So there are some tricks and stuff that don't make it super easy, but I don't know... I think I'm kind of sold.

**Rebecca Murphey:** I think that you could rephrase this as like "Kids these days" or "Get off my lawn!".

**Alex Sexton:** Sure, sure, sure... Nay Query.

**Adam Sontag:** Well, I mean, there's no better time for the kids to get off your lawn than right f\*\*\*\*n now. \[laughter\]

**Rebecca Murphey:** We're gonna have to beep that out, aren't we? Family-friendly podcast.

**Alex Sexton:** I think every once in a while we get an explicit tag, so... We'll see. Even back in the day we used to curse -- I mean, not a ton, but a good amount. But how many sparkles and ponies and rainbows were presented definitely did not give a fair indication of the amount of curses \[unintelligible 00:50:20.28\]

This isn't a segment either, but we did this during our live reunion show last time, and I thought I might bring it back. I wanted to feel the air for predictions for the web or Javascript in the next 1-5 years, or something like that. What's gonna change, what standards are gonna make it, what's gonna die? Does anyone have any considerable thoughts here?

**Rebecca Murphey:** I have one... Somebody's gonna tell me why I'm wrong...

**Alex Sexton:** It's the point of having a podcast.

**Rebecca Murphey:** In five years - maybe less, but I don't know how much less - Brave is gonna overtake Firefox.

**Paul Irish:** Wow...

**Adam Sontag:** Brave prediction. \[laughter\]

**Alex Sexton:** For what it's worth, my primary browser has been Brave on mobile and desktop for maybe the last month, and most of the time it's fine.

**Paul Irish:** What's the rendering engine? What's Brave built on?

**Alex Sexton:** Chromium.

**Rebecca Murphey:** You knew the answer to that.

**Paul Irish:** No, for some reason I actually thought they built it on Gecko.

**Rebecca Murphey:** No, it's Chromium.

**Alex Sexton:** It definitely looks more Firefoxy in a few places, and I dislike a lot of those rough edges, but I think they've got a pretty small team, especially working on that type of stuff, so I forgive them for now.

**Rebecca Murphey:** Yeah, I use it as my primary personal browser, I don't use it for -- like, I have a Chrome for work, that I use for Gmail, but then I use Brave for browsing.

**Alex Sexton:** \[00:52:00.20\] Yeah. I was talking to Brendan a little bit on Twitter about new features... One weird thing, Paul, is that DevTools in Brave can't be doc-ed. It has to be a separate window, because of some -- I think it has to do with sandboxing, or something like that.

**Paul Irish:** Process sandboxing. There's two separate processes, so putting them in the same thing is kind of painful, I guess... But interesting...

**Alex Sexton:** Yeah, and they're looking into doing some stuff where you could put Brave as your native runtime - Webkit native, or something like that? Electron - that's the one. Electron is like the Webkit native thing, and some people are looking into getting Brave as the browser that by default is more user secure.

And my last tidbit there is private browsing - it's something that I think users get wrong a lot of times. They think that you can log into your Twitter account in private browsing mode and no one knows it's you... They don't realize that your identity is tied to them a hundred different ways, and just not having your cookies there isn't going to stop literally everyone from knowing your IP address and everything you do. It doesn't force HTTPS - none of those things, so they're looking into doing -- \[unintelligible 00:53:33.22\] I think has a wiki page on the Brave GitHub for a Thor mode. So when you open up a new tab in private mode, it's Thor-ed. Your regular browser isn't Thor-ed, but if you open up a private thing, they delete all your cookies and there's no -- like normal private mode, but also it runs over Thor... Which I think is kind of brilliant, in the sense that that's what users expect whenever they think about private mode.

**Rebecca Murphey:** I think private really is...

**Alex Sexton:** Yeah. I mean, still you can then leak information via a hundred other different ways, but that's kind of on you. The browser actually is doing it's job if they had a Thor private one. I think it'd be really nifty, but also the Thor infrastructure needs some work before that can necessarily become a super reality. Anyways, that was a long time on...

**Rebecca Murphey:** Well, that's my prediction.

**Alex Sexton:** Yeah, \[unintelligible 00:54:27.26\] I don't know if I believe it... Anyone else have a prediction?

**Rebecca Murphey:** I don't know if I believe it either, but...

**Alex Sexton:** Yeah, sure. Even if Brave doesn't beat Firefox, I think Brave will influence the other browsers for sure.

**Rebecca Murphey:** For sure, yeah.

**Adam Sontag:** I mean, I just think that eventually their coding is gonna get easier on things that are bot keywords - and I don't have any insight into when or how, but it just seems kind of unsustainable. Especially like a generation of people have their primary internet access on their phone, and it's in a world where you're used to having your terminal next to your editor, next to your browser... Like, how do we make this work for people who are primarily developing without that? And maybe -- I can't imagine it's gonna be as bad as it is now, in five years.

**Alex Sexton:** Yeah. I also have no idea what it would be, but I guess that is ripe for all you entrepreneurs out there to fail a few times on some touch-something, or other holograms...

**Rebecca Murphey:** The Pinboard guy was just talking on Twitter about how programmers don't think they can be replaced by automation. I wonder -- like, we won't be using keyboards because we aren't doing anything at all... \[laughter\]

**Paul Irish:** \[00:55:53.08\] I was gonna throw out a prediction along those lines, which was that more basic web design is going to be handled by our AI overlords. And especially, it makes a whole lot of sense with Wix and Squarespace etc. to be using -- whatever that startup is that I think didn't really...

**Alex Sexton:** Yeah, it failed. It's like the AI-generated...

**Paul Irish:** Was it The Hive, or something?

**Alex Sexton:** It was like The Grid.

**Paul Irish:** The Grid, yeah. There you go. And I think that the idea is compelling and would actually work for a bunch of websites. That would work for a lot of small business and all those sorts of things, but we'll see.

**Alex Sexton:** It was a failed startup, but my manager - I feel like they sort of had a cool idea that maybe will work in the future. It was user testing with AI - kind of matched those two together. So rather than writing your tests, it's like an AI knows that there's a button and that it might fill out a form and then do these things and act like a real user would act on a page...

**Paul Irish:** Yeah, that's compelling.

**Alex Sexton:** So you could kind of just like give it a web page and then it would use it like a user would use it, rather than... I mean, obviously it'd probably still write other types of tests, but I thought that was kind of cool as an idea.

I think my actual prediction that I was gonna say for this though is that there will be -- like, the React model of things might still be around, but I think my prediction is that it will be React-like, but the underlying technology will be Web Components. So you may author in something that's not Web Components, but I'm betting on it a little bit for performance reasons. If someone can build something with the experience of React and all that stuff, and then... Like, I know some of this already exists and you guys are all gonna send me Tweets or whatever, but something will come along that actually gets people to change their mind. I think it will happen sometime.

**Rebecca Murphey:** I think Alex \[unintelligible 00:57:56.26\] just kind of tool over your body there for a minute...

**Alex Sexton:** Oh... No, it happens for five minutes a day.

**Adam Sontag:** \[unintelligible 00:58:02.07\] that happened a long time ago. \[laughter\]

**Alex Sexton:** Live through me... \[laughter\] Someone asked a question, Paul, in the JS Party Slack channel, which you guys can all join (changelog.com/jsparty), and you kind of perked up, and I was a little bit interested in why you perked up so much... \[laughter\] Because the question seemed like a joke. The question was "Why is querySelectorAll() so long?" and then you also mentioned \[unintelligible 00:58:39.22\] Why is that funny? Do you have a story about that?

**Paul Irish:** Yeah, the question seems pretty valid, because... To go back to our yayQuery roots, it is getting elements and doing things with them. And I write code with querySelectorAll() every single day, so I still do feel the listener's pain... So why they're actually so long - 1) because naming is hard and 2) because standards is hard, so put those together and you always end up with really big names.

But there were conversations on both of these cases, to introduce shorter APIs for them. So taking querySelectorAll() there is a published spec called Selectors Level 2 that has an element.Find and element.FindAll method, which basically are the exact same things as querySelectorAll(), but with one key fix, which is the really weird behavior where you do element.querySelectorAll() and it can actually return an element that is not a descendent of that rooted element that you're using...

**Alex Sexton:** What?

**Paul Irish:** ...which is really unexpected.

**Rebecca Murphey:** I was like, "Wait, what?!" \[laughter\]

**Paul Irish:** \[01:00:04.02\] Yeah, you can do -- I think what it is is let's say that you have this small item container, and then you say querySelectorAll(), and then you pass it a hash ID, and then something else, and it will actually just reach out above this whole item container and return it from another place in the DOM.

**Rebecca Murphey:** So the context doesn't matter...

**Paul Irish:** Right, right.

**Rebecca Murphey:** What if I wanted the context to matter, because that's DOM?

**Paul Irish:** Yeah, exactly. I mean, basically it was a bug in --

**Adam Sontag:** Context stopped mattering a long time along now... \[laughter\]

**Paul Irish:** There was a bug in how they designed the feature, and it just messed it up. I think John Resig has like two blog posts around 2007-2008 saying "Hey, there's this API that's about to come out that has this massive bug", but I guess nobody decided to pay attention and fix it before every browser souped it. So that happened... So Find and FindAll actually fixed this bug.

**Alex Sexton:** But it shipped. It exists.

**Paul Irish:** querySelectorAll()?

**Alex Sexton:** Find and FindAll.

**Paul Irish:** No. Find and FindAll do not exist, other than in a spec, and they're just sitting there in the spec looking so pretty, and it was like "It would be nice to type something a little bit shorter." I was looking into it, and as far as I can tell, spec-wise it's in decently good shape, it's just browsers have not actually committed to -- they just haven't gotten around to it yet, and no one's pressured them.

**Alex Sexton:** But is there a different story for Add Event listener?

**Paul Irish:** Yeah, a slightly different story there, which is that there are a lot of conversations around introducing an On method to the element prototype, which would just be nice to shorten things up. And there's some hesitation there from the editor of the DOM spec, who basically says "Yes, it's kind of nice for developer ergonomics", but if we're gonna go and introduce this new method, we might as well introduce some next generation event listening functionality into it while we're at it... So not just copy the exact same API, but handle more observable support for listening to events. So let's wait until all of those primitives exist before we introduce it. And that's kind of been the position for about like seven years, so that's just gonna hang out there for a little longer, I think. \[laughter\]

**Alex Sexton:** For sure... Sounds like it. I think some of my favorite predictions from the channel were that we wouldn't get element media queries, which have been predicted for a really long time; it's the Linux of the desktop of CSS features. For those of you who aren't familiar, you can make media queries based on the size of the entire browser window, but not based on the size of the individual elements. Does that change a little bit with Shadow DOM, does anyone know? I assume you can do media queries inside of a Shadow DOM; or is it like full -- maybe no one knows.

**Paul Irish:** It's not scoped to the Shadow DOM, it's still the full thing. It doesn't change \[unintelligible 01:03:22.07\]

**Alex Sexton:** Still full window... That's rough. Ugh!

**Paul Irish:** I know that the biggest concern - we have people listening who know this better than me. I know the biggest concern with element queries was that doing height element queries can go into a recursive loop and that's a big problem. I actually sit pretty close to one of the CSS spec editors and I was like "Hey, but what if we just do with just the width element query and just ignore height? Because developers don't need it, and it's hard for you guys as spec editors to figure it out, so what about just width?" and he was like, "Yeah, but it's like..." I don't know what he said. \[laughter\] But that would be ideal.

**Alex Sexton:** You did not listen to his response.

**Paul Irish:** \[01:04:07.20\] He said something...

**Alex Sexton:** I have a suggestion, Paul.

**Paul Irish:** Okay.

**Alex Sexton:** Cool. We normally end the episode with picks - do you guys have picks by any chance? Did any of you do that? I gave you some homework... Anyone have one?

**Rebecca Murphey:** If I say yes, is that gonna be pressure for other people? Or would that just give them time to...

**Paul Irish:** I've got one.

**Alex Sexton:** Okay, cool. We're gonna do two picks - Rebecca and Paul - because we're a little bit short on time... So Rebecca, what's your pick?

**Rebecca Murphey:** So I lied when I said I'm a Javascript developer; I'm actually mostly a manager these days, so that's my dirty secret. But my pick is Camille Fournier's book "The Manager's Path." If you, like us, have grown up in the last few years and maybe you're taking on some more responsibilities at work - even if you're not a manager - it's a really awesome book about technical leadership and navigating that in organizations. So not about Javascript, but I highly recommend it.

**Alex Sexton:** Cool. Paul, you said you had a pick?

**Paul Irish:** Yeah, my pick is a slide from a presentation that I've picked up on I think the WebDev Subreddit late last night, and I like this...

**Alex Sexton:** This is an old joke, for what it's worth, Paul.

**Paul Irish:** This is what?

**Alex Sexton:** This is an old joke. \[unintelligible 01:05:37.08\] I'm glad that you have never seen it, because \[unintelligible 01:05:42.08\]

**Paul Irish:** I've never seen this! Oh my god. Okay, well I'll just tell it, like... Maybe I -- oh... \[laughter\]

**Alex Sexton:** You heard it here first! \[laughter\] Paul Irish didn't know something before someone else. It happened! \[laughter\]

**Paul Irish:** It's a cheat sheet for HTTP return codes. Return codes are 100s, 200s, 300s, 400s and 500s. The 100s return codes translate essentially to "Hold on!" So straight up to 100 it's the "You're all good." 200s is "Here you go." 300s - "Go away!" 400s - "You f\*\*\*\*d up." and thr 500s - "I f\*\*\*\*d up."

**Alex Sexton:** ... server errors.

**Paul Irish:** Yeah, yeah. Seeing it like that makes it really, really clear.

**Rebecca Murphey:** I feel like somebody just explained a joke to me.

**Alex Sexton:** Yeah... \[laughs\] It made it really clear to me in 1997, remember that joke? \[laughter\]

**Rebecca Murphey:** We love you, Paul.

**Alex Sexton:** Yeah, if you're interested in some of the funnier spec stuff... A lot of people -- the joke that I think I see get made the most... The thing that's reminding me of this is the 418 "I'm a teapot" response, but the spec joke that I see made the most is that HTML should add a sarcasm element to the specification, right? You guys see that one all the time. I think GF3 had a tweet about it. It's in there, there is a sarcasm element; it's in the spec, go check it out.

**Paul Irish:** It's official.

**Alex Sexton:** Yeah, that's official; a sarcasm element.

**Paul Irish:** That kind of gets us into a trick though, because they did reply to GF3's tweet with "Oh yeah, we should totally add that."

**Alex Sexton:** I'll find a link, or whatever. Maybe I'm wrong... Me and Paul could both be wrong at the end of an episode, or whatever. \[laughter\]

**Adam Sontag:** If people wanna stay up to date with the freshest WebDev memes and jokes, what they should do is just follow the @IAmDevloper Twitter account. \[laughter\]

**Alex Sexton:** Actually, it got shut down.

**Paul Irish:** What?

**Rebecca Murphey:** What?!

**Paul Irish:** No...

**Adam Sontag:** Yeah?! Oh, man! \[laughter\]

**Alex Sexton:** \[01:07:59.19\] Yeah, for those people wondering, there was a Twitter account called @IAmDevloper; it was like a Napoleon Dynamite...

**Paul Irish:** Wait, it's there... It's up though. I see a tweet as of two days ago.

**Rebecca Murphey:** We're just wrong left and right.

**Alex Sexton:** It was gone for a while. I saw tweets like...

**Adam Sontag:** I'm blocked! @IAmDevloper blocked me. \[laughter\]

**Alex Sexton:** We're all blocked. \[laughter That's funny. Yeah, someone was tweeting a celebration on that account being gone recently; I betcha they were blocked, too. \[laughter\] So never mind... This is a Twitter account that just steals jokes from other developers, and then a million more people favorite it whenever they tweet it without any attribution.

**Adam Sontag:** So yeah, my pick was to pick on @IAmDevloper, you joke stealing \*beep\*. \[laughter\]

**Alex Sexton:** I think we're extremely out of time, but it was lovely getting to catch up with y'all.

**Rebecca Murphey:** Indeed.

**Alex Sexton:** Peace out.

**Paul Irish:** Peace!

**Adam Sontag:** Wooh!
