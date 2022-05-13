**Jerod Santo:** Hello, hello. Jerod here, your internet friend. We are back for another awesome JS Party. We&#39;ve lined up a debate episode. Now, we&#39;ve been doing debates off and on over the years, but we haven&#39;t done one for a very long time, and that&#39;s because we didn&#39;t have a great premise to debate... Until recurring guest Chris Ferdinandi provided one on his blog when he wrote back in February that SPAs (single-page apps) were a mistake. So I hopped on that real quick and decided &quot;Ooh, that sounds like a premise that we could debate.&quot; And I wanted it to be more bombastic, and so I added the word &quot;big&quot;.

So the premise is &quot;Were SPAs a big mistake?&quot; And I&#39;m sure Divya will hop on that jargon and decide exactly what big means. Speaking of Divya, she&#39;s joined us today. What&#39;s up, Divya?

**Divya:** Hey! How&#39;s it going?

**Jerod Santo:** Got your debate shoes on?

**Divya:** I&#39;m wearing socks. I&#39;ve got my debate socks on.

**Jerod Santo:** Okay, right on. [laughter]

**Divya:** No shoes in the house.

**Jerod Santo:** I hope those work just as well. And Divya&#39;s teammate today will be Nick Nisi. What&#39;s up, Nick?

**Nick Nisi:** \[04:14\] Hoy-hoy. I&#39;m very excited, but I was ready to debate SPAs as in a place where you go for a day...

**Jerod Santo:** A day spa?

**Nick Nisi:** Yeah.

**Jerod Santo:** There&#39;s no way a spa can be a mistake though...

**Kevin Ball:** Never a mistake...

**Nick Nisi:** I don&#39;t know...

**Jerod Santo:** It&#39;s always the right choice.

**Divya:** How would you argue that they&#39;re a mistake? [laughs]

**Nick Nisi:** They&#39;re germ-ridden...

**Jerod Santo:** Okay...

**Divya:** Oh, fair. Fair.

**Nick Nisi:** I don&#39;t know... [laughs]

**Jerod Santo:** Fair, fair. Expensive...

**Nick Nisi:** Expensive, yeah.

**Jerod Santo:** Strangers touching your body in places... I don&#39;t know, it can be a mistake. You can get there and think &quot;Why did I do this?&quot;

**Nick Nisi:** Now all of my arguments are just gonna be double entendres...

**Jerod Santo:** Okay. We&#39;ll hold you to that. Well, team Divya and Nick will be facing off against team Kball and Amal, only without Amal, because construction problems at Amal&#39;s house. Kball, you&#39;re representing all by yourself. How are you gonna do it?

**Kevin Ball:** Well, you know what I was thinking I would do? It&#39;s not just channel Amal, but I&#39;m gonna channel the ghosts of all the JS Party participants who aren&#39;t here today.

**Jerod Santo:** Okay. [laughs]

**Kevin Ball:** We have some folks who have done amazing jobs in previous Yep/Nope episodes, and I&#39;m gonna see if I can dig up some callbacks and represent all of our panelists as Yep/Nopes.

**Jerod Santo:** Okay.

**Kevin Ball:** And especially because we&#39;re on Nope, and we&#39;ve got a lot of cynics on JS Party... Like, Nope is definitely a place to pull from the past.

**Jerod Santo:** So to explain a little bit how we do this... We call these episodes Yep/Nope, which is a nod to former JS Party panelist Alex Sexton&#39;s YepNope.js, which was a cool library back in the day for determining whether or not the browser had certain features... I think it was a feature detection aid. And we use that to debate whether or not a premise is true.

So the question today, as I said, is &quot;Were SPAs (not spas)...&quot; Let&#39;s call them SPAs for simplicity&#39;s sake today. Were SPAs a big mistake? And so one team is team Yep, agreeing with that - answering in the affirmative, I should say - and the other team is team Nope. So Nick and Divya will be arguing that SPAs indeed were a big mistake, and Kball plus the ghosts of JS Party past... Kball&#39;s trying to make this real hard on himself today. He will be arguing that SPAs were not a big mistake.

Now, we do this kind of formal debate style. So we will have a timer, I&#39;m your moderator... I will be watching the time, I will be enforcing time constraints... And when your time is up, we will channel Chris Hiller and he will say [Wut?] Because we couldn&#39;t find a buzzer in our soundboard. So when you hear [Wut?] your time is officially over and you must cede the floor.

Okay. Well, ladies first. We&#39;ll start with Divya, and I will get my timer out here. Give me a moment...

**Divya:** [laughs] Cool...

**Jerod Santo:** You&#39;ll have to minutes... [unintelligible 00:07:05.11] old car horn as well, which would be a good one... But we&#39;ll see what happens with that. You&#39;ll have two minutes to make your case... And you can start right now.

**Divya:** Well, first, if we wanna talk about single-page applications, it&#39;s worth talking about the definition of what they are, which is... Single-page apps are generally single HTML pages; they allow full interactions without any page refreshes, because the idea is that you&#39;re loading the entire app onto a user device, and the user is just going to work within that frame, or within that particular HTML page, and then I guess all the data is already fetched, more or less, and then new data is just fetched additionally, as needed. But the idea is that everything is loaded, so it allows for a single experience.

\[07:59\] The problem and the downsides, of course - you can guess - is... Well, actually, first I&#39;ll kind of like talk about the corollary to that. So the single-page app, which is a single HTML page - the opposite of that is multi-page apps, where you have multiple pages. So every time you do a page, you try to go back or forward, it&#39;s really a full-page refresh, because you&#39;re going back to the server, requesting something, and then it loads data, and so on.

And so those are the two differences that you work with. Single-page apps versus multi-page apps.

You can kind of guess the obvious problem to this, which is that single-page apps are incredibly not performant in that sense, because you&#39;re loading an entire web page or web app. I think we&#39;ve had this discussion before...

**Jerod Santo:** Yes.

**Divya:** You&#39;re loading this entire application, and sometimes a user won&#39;t even access all page. They&#39;re not gonna use the entirety of that particular app... And so you&#39;re wasting a lot of space. And the initial load time is so huge, because you&#39;re loading assets, there&#39;s a lot of whatever pages, data, and so the initial load is a problem. And that can already impede user experience, because the argument oftentimes is that &quot;Yeah, you can make user experience really nice on single-page apps performance...&quot;

**Jerod Santo:** Sorry, your time is up. Good job, Divya.

**Divya:** Thank you.

**Jerod Santo:** You actually referenced one of our previous Yep/Nopes, which was episode 162, &quot;Are web apps fundamentally different than websites?&quot; So if you wanna go back --

**Divya:** I needed to one-up Kball, because I knew he was gonna start bringing in other s\*\*\*t.

**Jerod Santo:** [laughs]

**Divya:** I was like, if he&#39;s gonna bring in other things...

**Jerod Santo:** Ah, preempting... See, Kball made the classic mistake, which is he gave his plan out before the thing started. You&#39;ve gotta keep it to yourself; it&#39;s like, every evil genius ruins it when he gives the monologue at the end. Anyways, I&#39;m stalling. Kball, you are up.

**Kevin Ball:** Or I could be just giving enough rope for y&#39;all to hang yourselves, trying to struggle to pull things in...

**Jerod Santo:** Ooh...!

**Kevin Ball:** We&#39;re gonna start...

**Jerod Santo:** We shall see.

**Kevin Ball:** Are you ready?

**Jerod Santo:** Go!

**Kevin Ball:** Alright, I&#39;m gonna start this myself and just highlight to y&#39;all that single-page apps - and I&#39;m gonna call them SPAs, because they are as lovely and...

**Jerod Santo:** No, I said don&#39;t do that.

**Kevin Ball:**...luxurious as a spa that you might go to. SPAs are what make it possible to create rich browser-based applications that feel like native applications. So once the application is rendered, it feels much more responsive. Navigation no longer has to go back to the server, you don&#39;t get these long pauses as you&#39;re clicking through things... If the new page doesn&#39;t require any new data to be loaded, the client can essentially render it instantly. And even if more data is required, it&#39;s just an API call, much less data flowing over the network. So much faster.

SPAs also make it much easier on developers to create those intricate user experiences and interactions. The whole application is living within JavaScript, so manipulating it in fine detail based on user interaction is just so much easier to implement.

If you create a complex UI, creating it with a client-side framework like React, Angular, Vue, knowing that you can control the whole entire experience - it&#39;s just an order of magnitude easier than trying to create the same level of interactivity on top of some sort of server-rendered page, passing things back and forth.

So you can use all these strawmen that you want, throw things out, like &quot;There&#39;s no need to make a blog, a SPA&quot;, all this other stuff, but the question is not &quot;Is there ever a case against a SPA for a particular use case?&quot; Of course there&#39;s some cases. If I&#39;m just throwing words on a page and I don&#39;t care, don&#39;t use a SPA. Sure, fine. But the question is &quot;Were SPAs a big mistake?&quot; SPAs are what are taking the web browser as a platform and turning it from just a document-reading engine to something where you can have genuine interactive applications on par with the native application. I rest my opening statement.

**Jerod Santo:** Very good. You had ten more seconds, but we&#39;ll just give you a complementary &quot;Wut?&quot; Okay, Kball coming in with the words-per-minute. Very nice. Nick, you don&#39;t talk quite that fast, but yet you still have the exact amount of minutes that Kball has. [laughter] He ended early... Let&#39;s see how you do. It&#39;s your turn, Nick. Take it away.

**Nick Nisi:** \[12:06\] Alright. Well, first off, let&#39;s start in the way that Divya started - with some definitions. If we look at the words that make up &quot;single-page app&quot;, the first one is single. And as we all know, two is one, and one is none. So you&#39;re already off at a disadvantage there... So then you just have page apps. And you know what that is? That&#39;s multi-page apps; so we can just continue on going from there.

We all know as JS Party - JS Party is where you party, it&#39;s not what you build apps with. And to get a little more serious, JS breaks -- when you start building a single-page app, you&#39;re building everything from scratch. You&#39;re breaking the Back button by default, you&#39;re breaking the URL by default. Those things don&#39;t work. And to get those to consistently work is entirely up to every single development team that&#39;s doing it themselves. So you&#39;re just starting off at a disadvantage. Your Lighthouse scores are immediately terrible, and you don&#39;t have a good experience for your users, because they&#39;re expecting a standard level of accessibility, a standard way to interact with things, and it&#39;s up to every single development team to pick the right implementation or to do it themselves, to get it done in that way.

And so if you think about it, look at your phone. Take out your phone; how many apps do you have on that phone? I bet you don&#39;t have a whole lot of bookmarks to apps. You have a lot of apps, because native apps are right. Maybe Apple was right about that. And single-page is not the way to go. It doesn&#39;t matter that Apple is the one intentionally crippling those. It is just a bad experience, and maybe they&#39;re right. And that is all I have... [laughter] Wait, I have one more.

**Jerod Santo:** 15 seconds.

**Nick Nisi:** We all know that Jerod wins every debate... What would Jerod do? Jerod wouldn&#39;t build a single-page app, so therefore I rest my case that that is the wrong way to do it.

**Jerod Santo:** [Wut?] Well, I will say that your last point was spectacular... And I wanna go back real quick and recover your first point, which was also spectacular, but you said it so fast I&#39;m not sure I tracked. I think you said something like &quot;Two is one, and one is none...&quot; What was this? [laughter]

**Nick Nisi:** Exactly. You never heard that saying?

**Jerod Santo:** That&#39;s the point? Okay.

**Divya:** [laughs] That was amazing.

**Jerod Santo:** It was awesome. I just wanted to make sure I heard you correctly. Okay... Well, I generally do win these debates, but right now I&#39;m not gonna lie, Nick is winning... But we&#39;ll see what happens. Kball, we now turn to you, plus JS Party panelist past, or whatever shtick you have going on next. You have two minutes to do whatever it is that you&#39;re about to do.

**Kevin Ball:** Alright. Well, Nick, you&#39;re trying to steal the thunder as well by referencing Chris Ferdinandi and his whole thing about having to reinvent browser capabilities, but I&#39;m gonna call out to a different JS Party guest, Laurie Voss, who highlighted that the history of change, the browser moves slowly; it has so many different things. But what happens to create progress is there are the user land changes where libraries implement new capabilities, and those that work really well end up transcending their user land area and rising up to the browser level.

Now, the first version that was highlighted in that conversation was jQuery, which doesn&#39;t stand here, but the next one that he was proposing would stand out was React, and this approach to the world... That is what enabled SPAs to occur. So I think you&#39;re referencing the wrong JS Party guests.

But I also wanna call out - y&#39;all are trying to make yourselves seem so official by starting from definitions, and playing with these logical puzzles, but I&#39;m gonna call out to Feross and appeal to authority. I&#39;m gonna read so quotes.

So - quotes from the first result to the Google search &quot;Why single-page apps are amazing.&quot; I&#39;m gonna read you these quotes. &quot;SPA is fast, as most resources (HTML, CSS scripts) are only loaded once throughout the lifespan of application.&quot; We don&#39;t use &quot;the&quot; or &quot;a&quot; or anything here in these quotes.

**Jerod Santo:** [laughs]

**Kevin Ball:**&quot;SPA is fast.&quot; Next. Oh, there&#39;s a &quot;the&quot;. &quot;It&#39;s simplified and streamlined. There is no need to write code to render pages on the server. It&#39;s much easier to get started, because you can usually kick off development from a file, without using any server at all.&quot; &quot;SPAs are easy to debug with Chrome.&quot;

**Jerod Santo:** Okay...

**Kevin Ball:** I&#39;m just reading quotes here. This is the authority involved... [laughter]

**Jerod Santo:** I can tell.

**Kevin Ball:** It&#39;s off of Google. &quot;As you can monitor--&quot;

**Divya:** \[16:07\] Question authority.

**Kevin Ball:**&quot;...network operations, investigate page elements and data associated with it.&quot; And finally, &quot;It&#39;s easier to make a mobile application, because the developer can reuse the same backend code for web application and native mobile application.&quot;

**Jerod Santo:** [Wut? Wut? Wut?]

**Kevin Ball:** Is that a comment on my quotes, or am I out of time?

**Nick Nisi:** [laughs]

**Jerod Santo:** That was both a buzzer and a commentary on &quot;What are you talking about?&quot; Okay...

**Nick Nisi:** It sure sounds like your partner is Horse JS, where you&#39;re just taking snippets out of context... [laughter]

**Kevin Ball:** Ah! I forgot Horse JS. Okay, I&#39;ve gotta go find &quot;Horse JS SPA.&quot;

**Jerod Santo:** You can&#39;t forget Horse JS.

**Divya:** Oh, my gosh...

**Jerod Santo:** If you need some Horse JS sounds, I can actually bring them in, because I&#39;ve been making them for years. Okay, this ends round one. So far it&#39;s a no-brainer. I&#39;m currently in first, Nick in second... Kball in fourth, and the Ghost of JS Party Panelist Past is in last.

**Kevin Ball:** What about Divya?

**Jerod Santo:** Well, she&#39;s with Nick. Or third. I don&#39;t know.

**Divya:** Same team!

**Jerod Santo:** Yeah, same team. So we&#39;ll see what happens in round two. It&#39;s gonna be the Rapid Fire Round. We&#39;ll have half as much time, and hopefully 100% less reading quotes. We&#39;ll find out what happens right after this break.

**Break:** \[17:11\]

**Jerod Santo:** We are back, round two of Yep/Nope. So far the scoring - team Yep, that&#39;s Nick and Divya, with ten points. Team Nope, zero.

**Kevin Ball:** Where are the points coming from? [laughter] You&#39;ve gotta tell me the rules of the game here. How do I score points?

**Divya:** [unintelligible 00:19:26.01]

**Jerod Santo:** I suggest a different strategy than the one you&#39;re currently taking... Nah, I&#39;m just giving you a hard time. There&#39;s no points, I&#39;m just messing with you. We&#39;re gonna let you go first, so that hopefully you can score some points in this round. But it&#39;s a rapid-fire, one minute, and we encourage in this round more cross-talk between debaters versus the previous round, where you must remain silent. So feel free to interact a little bit, but you&#39;re also stuck in your one minute. Kball, go!

**Kevin Ball:** Alright. So I am going to highlight that my counterparts here are clearly hypocritical, because Nick just did an entire episode on the application he wrote...

**Nick Nisi:** Lies...

**Kevin Ball:** \[20:02\] ...for our JS Party game show. That is writing a SPA. In fact, he wrote a SPA and then he rewrote a SPA... [laughter] And has implemented it in such a way that it&#39;s only writeable as a SPA.

**Jerod Santo:** Okay, he&#39;s scoring points... [laughs]

**Kevin Ball:** So I think we have a little bit of hypocrisy going on on team Yep over there.

**Jerod Santo:** Your response, Nick.

**Nick Nisi:** You know, the next rewrite will be into multiple pages. A single page per question.

**Divya:** I think there&#39;s a quote, &quot;You have to know your enemies better than your friends.&quot; I think that&#39;s what&#39;s happening here, clearly. Nick dislikes single-page apps, but decided to build a single-page app because of how terrible it is. He needed to prove how terrible it is. [laughs]

**Nick Nisi:** Exactly.

**Kevin Ball:** It sounds to me like you&#39;re highlighting that I know my enemies better than my friends here, because my attack was so effective there, relative to when I&#39;m trying to bring in the ghosts who are my allies.

**Jerod Santo:** Okay, good response. Divya, the floor is yours. You have one minute.

**Divya:** So one of the arguments that we&#39;ve brought up was the idea of building single-page apps so that you have a native-like experience... And I call issue to that, mainly because the issue that single-page apps brings is that they try to make the web native, which causes the chasm between native and web. They are not the same platform. And the argument should hold that you build for the platform. You&#39;re building based on the functionality and the expectations of that platform.

So when you&#39;re building an application for the web, you should not build it for native-like functionality, because we want to use the platform. The platform is built for a specific purpose. They have certain user expectations on how things work, like the Back button, like links, like sharing browser history, and so on... And a lot of single-page apps break that, because there&#39;s no good way of link-sharing, there&#39;s no good way of going -- like, the Back button is essentially custom... And so the problem here is that now you have this need for people to redo how browsers do things, which then leads to a lot of fracturing of how applications work. User experience are not always the same across different applications, which causes issues over what people expect.

**Jerod Santo:** Kball, your response.

**Divya:** Is that the end?

**Jerod Santo:** Yes.

**Kevin Ball:** Alright, I&#39;m gonna call out to Amal here... She stated that she believes that engineers are really into zombies and impending death by zombies, and I will say that that sounds to me like a zombie argument. You&#39;re really just saying &quot;Get off my lawn here. Let me use the tools I have, not focus on the user problems and how I solve them. SPAs are broken because my SPA is broken. I don&#39;t know how to implement and tie into router functionality, and the APIs, the browser supplies to allow JavaScript to hook into history and do other things...&quot; Like, you can&#39;t tell me that SPAs are broken because your SPA is broken. I can build you a broken multi-page app. That ain&#39;t hard.

**Nick Nisi:** We know. [laughter]

**Jerod Santo:** Isn&#39;t that what you do at your day job? Nick...

**Kevin Ball:** \*cough-cough\* [laughter]

**Nick Nisi:** Alright, one of your arguments, Kball, was that browsers give you all this stuff for free. Well, guess what - when you have multi-pages, you just get more of it for free, because you get it on each page. And... Did you hear that pause there? That was my argument reloading... [laughter] Just like my pages.

**Jerod Santo:** Hold on a second. Moderator interjection. Nick, where is your argument stored?

**Nick Nisi:** It&#39;s stored on the server. It&#39;s stored in the cloud.

**Jerod Santo:** What kind of application is this?

**Nick Nisi:** It&#39;s an -- I don&#39;t know. [laughter]

**Kevin Ball:** That stuttering, that sense that it&#39;s hard to load the next thing - that&#39;s what happens when it&#39;s stored on multiple pages. You&#39;ve gotta get it all together so you can load it with one centralized state management, man...

**Jerod Santo:** Okay. Nick, continue...

**Nick Nisi:** Alright, so let&#39;s think about how we implement these single-page apps if we were to do such a thing. It starts with this thing called asynchronous JavaScript and XML. Who uses XML? It&#39;s right in the name... Like, this is old news, old tech... We don&#39;t do that anymore. We have a cloud and we deliver everything directly from the cloud, every time, and the browser updates and it&#39;s fast enough to update each time and have everything all right there. In the chat, Robert Hall posted a Hacker News comment, which is never wrong... [Wut?]

**Jerod Santo:** \[24:11\] Sorry, you have to hold that for your next turn. Kevin, would you like to respond to Nick, or would you like to start something fresh?

**Kevin Ball:** You know, I&#39;m gonna keep going with his quote. The Hacker News comment was &quot;The web is a mistake.&quot; Y&#39;all are trying to tell me that &quot;Oh, the original design of the web is perfect and we should never build beyond it&quot;, but --

**Divya:** We never said it was perfect. There was no indication of saying that it was perfect. We said &quot;Build for the platform.&quot;

**Kevin Ball:**&quot;Build for the platform, don&#39;t build things that the platform doesn&#39;t natively give you. Don&#39;t ever go beyond that box.&quot;

**Divya:** No, you can build for the --

**Kevin Ball:** Who are we building for?

**Divya:** You can build for the platform and still push for its development.

**Kevin Ball:** Who are we building for here?

**Divya:** You&#39;re building for the users of the platform.

**Kevin Ball:** So the users, who have user problems...

**Divya:** They have user problems because single-page apps have reused how the browser works, and therefore people have disjointed experiences.

**Kevin Ball:** We started with building an application for them. Before we have a single-page app or a multiple-page app, they have some problem we&#39;re trying to solve, right? So shouldn&#39;t we build the solution that best solves that problem, regardless of whether or not --

**Divya:** What is that problem? Please define that problem.

**Kevin Ball:** Well, I think it varies a lot. A problem I&#39;m typically doing -- let&#39;s see... How about collaboration on a design in Figma? Oh -- single-page application...

**Nick Nisi:** They have a desktop app. It&#39;s a much better experience.

**Kevin Ball:** How about I&#39;m searching for something on Google... Oh, that&#39;s now a single-page application, too. [Wut?] Well, how about I&#39;m trying to understand what&#39;s going on with my friends on Facebook? Oh -- single-page application, too. [Wut?]

**Jerod Santo:** You&#39;re out of time, sir... I will have order. Divya.

**Divya:** [laughs]

**Jerod Santo:** Please, respond to this man.

**Divya:** Respond? I thought we were all responding.

**Jerod Santo:** [laughs] I don&#39;t know, I just wanted order, and now I wanna see you -- keep going. [laughter] I just hadn&#39;t said anything for a while, so I felt like I had to say something.

**Divya:** That&#39;s fair. Apparently, I have to argue for Java and Flash now... [laughs] Bring it back...!

**Jerod Santo:** Yeah, you backed yourself into a little bit of a corner there. [laughter]

**Divya:** I mean, there&#39;s ways that you can use the platform. The platform has been moving in a very solid direction in general... Now we have a lot of different tools. You have Houdini, where you can change a lot of how CSS works, you can add selectors of your own, you can add styles... It adds a lot of powerful features. So when you build for the web, you&#39;re really wanting the web to be pushed forward, and to champion that effort.

I think the argument that you build a separate thing in the interest of the web moving and catching up is sort of like not investing on the infrastructure of the web. You&#39;re sort of going off in a corner and building a suburb, hoping the city would build up and be better, so that you can move away from the suburb... Even though you&#39;ve tried to build this idyllic little town outside of a space where the infrastructure is very good to hold people.

**Kevin Ball:** I&#39;m gonna jump in here real quick, because I have a different example. So if y&#39;all ever worked with designer who are a little overloaded, you may have discovered that if you&#39;re asking for a design for a new feature, it may never happen. The best way to get a designer to give you a beautiful design for a new feature is you build an ugly version of that feature, and threaten to ship it. Or even do ship it. Once it&#39;s in production, the designer looks at that and says &quot;Hey, that&#39;s ugly. I&#39;m gonna fix that. I&#39;m gonna clean that up.&quot; That&#39;s exactly what SPAs are doing here. The browser is progressing because the people who are responsible for building the browser said &quot;Holy smokes! What we&#39;re providing here is clearly not sufficient, because people are building all this stuff around it.&quot; If SPAs weren&#39;t&#39; being built, would they have bothered to build all those APIs to enable them to be built well? No.

**Divya:** \[27:53\] The argument is very interesting... And I take a lot of issue with it. Partially because you&#39;re creating problems in order -- like, you&#39;re creating extra-problems...

**Jerod Santo:** It sounds passive-aggressive, right?

**Divya:**...as a way of saying &quot;Oh, these problems help make the solution make sense.&quot; It&#39;s sort of like the argument people have whenever they decide to drive more cars; they&#39;re like, &quot;We should subsidize cars and gas, because then you do that more&quot;, and then it causes people not to have infrastructure for public transit. Then you&#39;re like, &quot;Well, we&#39;re doing this because public transit sucks, and hopefully because there are more traffic jams, the city will decide to put more money in public transit.&quot; You&#39;re not investing in the infrastructure, so how would you want people to be incentivized to make it better? It doesn&#39;t work.

**Kevin Ball:** I wouldn&#39;t say that you should only do SPAs and never invest in infrastructure. You should do both. However, I will highlight that change never happens when the people in power are comfortable. The browsers would love to stop feature development. If everybody would use their stuff and they don&#39;t have to do new features - why keep investing? Why maintain these expensive browser engineers, and all of this? They keep investing and improving things because we keep pushing the bar for them.

**Nick Nisi:** They keep investing to handle all of the edge cases of all of the SPA applications and frameworks that are being built around them, instead of just using the tools that are given to you by the browser.

**Kevin Ball:** Precisely. You&#39;ve made my point. If those didn&#39;t work, if we weren&#39;t pushing the boundaries, they wouldn&#39;t invest, and we&#39;d be back in browser stagnation.

**Divya:** I could argue that the web could have been really interesting had SPAs not existed, because then we&#39;d be building experiences that pushes the web forward and makes experiences within that sort of linear, and make sense. But now with single-page apps, because they&#39;ve brought in a lot of design changes and certain expectations, browsers have had to follow suit to meet those expectations. So they&#39;ve had to sort of derail their own plans in order to build for what people have been used to because of single-page apps. So can you imagine what the web could have been like? We could have had better forms by now... [laughs]

**Nick Nisi:** We could have had so much more if we didn&#39;t have to support all of this JavaScript... But that&#39;s the thing - SPAs just proliferate more JavaScript, which makes them have to support more backwards-compatible JavaScript... What the heck is flat? What is a flatMap? We could have -- I don&#39;t even remember what they were originally called. Is it Sploosh? I don&#39;t know.

**Kevin Ball:** Smoosh. Smoosh, right?

**Jerod Santo:** That&#39;s a really good point, Nick... [laughter]

**Kevin Ball:** Oh, dear...

**Nick Nisi:** If we weren&#39;t always trying to play catch-up to everything that is reimplemented every month, and then has a million blog posts about it, and how you can redo with this router, in this version... Like, just use a router, just user a server; it&#39;s called a client server -- how much time do I have left? [laughter]

**Jerod Santo:** I stopped running the timer, because you guys just didn&#39;t even care, so I&#39;m just listening now... [laughter] Nick&#39;s just like trying to fill time... I&#39;m not even keeping track right now. So I guess you can just stop right there. Kball, I&#39;ll allow one response, and then we&#39;ll call it the end of this segment.

**Kevin Ball:** My response is y&#39;all may be willing to wait for the bureaucratic process that is involved in updating standards and creating browser change and all of this to happen before you solve your user problems... But I&#39;ve got users, and they need their problems solved, and I&#39;ll use the tools available to me today. And oftentimes, that involves a SPA.

**Nick Nisi:** Just hope they don&#39;t hit the [unintelligible 00:31:30.21]

**Kevin Ball:** You keep using that strawman argument as if there are not SPAs where Back button functionality works.

**Jerod Santo:** Oh, you should point to us [unintelligible 00:31:40.16]

**Divya:** Yeah, please draw us an example... [laughs]

**Jerod Santo:** Alright, thus ends our official debate. We&#39;ll come back on the other side of the break and we can talk freely about what we actually believe about these things, versus what we&#39;ve been assigned to argue... So stay tuned, and we&#39;ll hear what actually people think. I think in terms of winning - of course, the only way to win is to not participate. I&#39;m the only one who did that, so I do win... But coming in a close second with the Form Reform - thank you, Robert Hall, in the chatroom for giving it a name... Divya&#39;s argument about forms is the winning argument of the day, and so Divya takes a close second place. Everybody else, thank you for participating. We&#39;ll be right back.

**Break:** \[32:17\]

**Jerod Santo:** Alright, great debate, y&#39;all. Kball, you made some interesting points. Did you believe anything you were talking about, or were you just talking?

**Kevin Ball:** [laughs] Mostly just talking, but... I mean, so here&#39;s the thing. SPAs can make sense for particular types of applications. If you&#39;re doing like a Slack web application, or you&#39;re trying to do Figma, which I used - a SPA makes a ton of sense for that type of situation. The real issue is that they became the hammer that we threw at every single nail. There are very, very large numbers of applications for which they don&#39;t make sense. And I actually really like some of the new progress, and Remix is doing some of this, and other things, where folks are actually trying to maintain that ease of programming interactivity while getting back some of the nicer features that you get with server-rendered applications.

**Jerod Santo:** Now, Nick, Kball pointed out what was one of his strongest points, was the hypocrisy of your argumentation... Which is why I assigned you on that team - you almost entirely only build single-page apps, right? I mean, day-to-day.

**Nick Nisi:** Yup.

**Jerod Santo:** So you don&#39;t actually think they&#39;re a big mistake, or you just --

**Nick Nisi:** Oh, no, I do.

**Jerod Santo:** Oh, you do. [laughter] Oh, okay. So you&#39;re just making the big mistake every day.

**Nick Nisi:** \[36:00\] No, no, no... I think that in a lot of ways we do over-complicate everything, and we do have to rearchitect a lot of stuff. And it&#39;s just a lot more that&#39;s put on my plate to maintain and make sure it&#39;s working, when I could be off solving more important problems. But I do think that they have their place, for sure. I do like working with them, and I do think that in general there&#39;s -- like, take right now; we&#39;re recording this podcast in a web app, and it&#39;s on a single page, and it works fantastically. And if we wanted to bring in another guest, guess what they don&#39;t have to do? They don&#39;t have to download a single thing, or set anything up. They just have to do a complicated process of using a Chromium browser, and giving it a lot of permissions for things, but it does still work, which is really quite impressive... And it&#39;s been practically flawless, which is really a good testament.

**Jerod Santo:** Yeah. So for the listener we use riverside.fm to record, which provides all video streaming, recording etc. participation in this chatroom, the soundboard - it&#39;s all in one spot. That being said, this is a bit of a hybrid application, because we are in the studio, and the studio is this web application, it&#39;s all right here on one page. But then when you go to the recordings it&#39;s just its own separate page; when you go back to the list of your different studios it&#39;s its own separate page... So it&#39;s not like all of riverside.fm is one single page. It&#39;s like we have this rich web app in here that has its own tabs and stuff, that don&#39;t reload the page. But when you go beyond that, it is multiple pages, so it&#39;s a bit of a hybrid. And I think a lot of times that makes a lot of sense.

Divya, you argued that single-page apps were a big mistake. Do you believe that?

**Divya:** I mean, I think in general it&#39;s just been misused. It&#39;s sort of like the argument that was made around we gave people this --

**Jerod Santo:** It kind of became the de facto way that people started, versus actually making the decision upfront.

**Divya:** Yeah, exactly. It&#39;s just a matter of like everyone was given this crazy jackhammer, and then everyone started using it for tiny. Things. They&#39;re like, &quot;Oh, I need to remove my backsplash. Let me just use this jackhammer to remove the tiling.&quot; [laughter] I think that&#39;s how jackhammers work; I don&#39;t know. I&#39;ve never used one. I&#39;ve just used tiny hammers.

So the problem is that we gave people a tool -- and I think when single-page apps were created, they weren&#39;t even like &quot;This fixes everything.&quot; But everyone used it to fix everything, or to build everything, which I think became a problem, because now apps became really bloated, people are reimplementing parts of the web that did things already, like Back buttons, browser history... We&#39;re just redoing it over and over again. And that became a huge problem.

I think there are certain use cases, I agree... Like, if you wanted Figma -- I think VS Code has a web thing now, and that&#39;s a single-page app as well. Like, you can&#39;t build that as a multi-page app. I think that would be horrible. But those are very specific instances, and I think Dustin in the chat talked about -- or he was like... The comment was &quot;Is it valuable to distinguish local-first software versus SPAs?&quot; And in a way, I kind of feel like -- and the discussion so far has just been around the development type, so I kind of feel like Figma and VS Code and all of these things are very specific kinds of development, and they are very specific use cases, because they require heavy user interaction, and you have to sometimes allow multiple sessions... Like Google Docs, for example, has CRDT... There&#39;s a lot of things that you&#39;re dealing with, and there are reasons to use a single-page app for them, because the problem area is so vast, and the interaction is very specific. But if you&#39;re building like a blog or something much smaller, then a single-page app is way too much, and not really what you should be building, in my opinion. So yeah, it&#39;s very specific to the use case, I would say.

I feel like every time we do a Yep/Nope, we just end up here...

**Kevin Ball:** Yeah. Well, I mean, that&#39;s engineering, right? Engineering is all about trade-offs. There are no absolutes in engineering.

**Divya:** Yeah.

**Kevin Ball:** \[40:06\] Your point about local is interesting one... So Figma - they have local applications using Electron. They&#39;re actually embedding their single-page app... And that&#39;s -- a multi-page app doesn&#39;t really work in that kind of embedding. One of the really interesting things that the single-page approach enables is you can take the same application and package it up in these sort of native wrappers... And is that as good as creating individual, distinct native implementations using whatever those native packages prefer? I don&#39;t know. But for many cases it&#39;s good enough, and it facilitates giving these capabilities while lowering your development burden quite a bit.

**Divya:** I think the cross-platform argument is interesting, because tools like Electron - and then I think there&#39;s newer ones, too; like, there&#39;s a Rust one, I forget what it&#39;s called. Torry, or something. But it&#39;s just like a way in which you cannot have to change your development environment, and you build across for like a desktop app, mobile and web... Which I think is honestly from a development cost perspective better, because then you don&#39;t have to have separate teams. But again, not every app needs to be cross-platform, right? Figma for example is a great use case; VS Code is a good use case. These are things in which people want them across platforms... But again, I don&#39;t know if you&#39;re building just like a small blog, or if you&#39;re building a podcast app thing... Do you really need it to be cross-platform? Can&#39;t you just use it on one platform? So you could argue there&#39;s a lot of different avenues for that.

**Jerod Santo:** So cross-platform is interesting... The other thing that&#39;s interesting that I thought would have gotten brought up on Kball&#39;s pro side is that multi-client. This was actually one of the things that Tom Preston-Werner really made an emphasis on the last time he was on the show - by the way, he&#39;s coming up here soon to talk about Redwood 1.0 - was that division with a single-page application and client-side rendering you have the division between the API and the client. And that architecture sets you and forces you as a team or organization to set you up for multiple clients... Whereas when you go down the road on a multi-page app with server-side rendering, or sometimes you&#39;re doing static, whichever way you&#39;re doing it, you&#39;re more likely to mix those concerns and not have that firm contract of &quot;Here&#39;s my JSON API and here&#39;s my SPA.&quot; And that can back you into a corner when it&#39;s like all of a sudden &quot;Hey, we want a command line app. Hey, we want an iOS app. Hey we want a public API.&quot; So teams that are trying to be economical actually -- sometimes, their argument is &quot;We should do an SPA because it&#39;s more economical over the long term, even though it&#39;s less so getting started.&quot;

**Kevin Ball:** That did come up in one of the quotes that I...

**Jerod Santo:** Oh. They were rapid-fire, I must have missed it.

**Kevin Ball:** It was lost in the general ridicule around the quotes... [laughter] I&#39;ve always loved that original Feross take of &quot;I&#39;m gonna appeal to authority and read some quotes.&quot;

**Jerod Santo:**&quot;...and read some quotes.&quot;

**Divya:** I remember that, yeah.

**Jerod Santo:** It&#39;s funny, because I just recently redid our trailer, just because it&#39;s been a couple years and people have come and gone, and I wanted it to be fresh... But that old quote from Feross - it was on the old trailer, and I brought it into the new trailer too, because it&#39;s just such a funny moment...

**Kevin Ball:** It&#39;s so good. One of the things that we&#39;re starting to see, I think, is - even if you&#39;re separating your frontend, having some amount of server-rendering and server-side logic there. And it gets you some of that capability that you&#39;re talking about, without necessarily having to go all the way to a SPA. And even frameworks like Remix, which I&#39;m gonna bring up again, because they&#39;re doing kind of interesting stuff here... Like, they&#39;re doing all of their rendering on the server, but their architecture is set up -- it&#39;s still a separated frontend; it expects there to be a backend API that lives separately.

**Nick Nisi:** And from a developer&#39;s perspective, you don&#39;t really have to think about that too much, right? You just provide the data in the way that you need, or the way that it [unintelligible 00:43:54.13] I haven&#39;t used Remix yet, but... And then you can reload the page there, and it&#39;ll be fine, or you can navigate in a single-page way and it&#39;ll also be fine.

**Kevin Ball:** \[44:07\] Yeah, it hides that away, and gives you a nice little - what do they call it? ...a bridge over the network chasm.

**Nick Nisi:** Yeah.

**Divya:** I think it&#39;s cool, too... I think I might have mentioned this in a previous episode, but just the architecture around what is possible on the web, and platforms and how we deploy things has also changed a lot... So you no longer -- like, single-page, you wanted to prevent that roundtrip constantly, because you just loaded it quickly, because you didn&#39;t have access to a lot of servers. It was like, servers were in certain locations. It was like U.S. East, Asia had one... It was in certain parts, and when someone loaded - yeah, the initial load time was long, but then subsequent loads were fast, because everything&#39;s already there. Now you have a lot of really cool technology and platforms that give you access to multi-region deployments, and it makes it much faster and much easier to work with... So you can do a lot of hybrid type approaches, and you can do some server-side rendering if you wanted to, without having to incur that crazy roundtrip times... Because you&#39;ll still need a server roundtrip, but in terms of where the server is located, it&#39;s probably gonna be closer to you now than it was 10-20 years ago.

**Jerod Santo:** For sure.

**Kevin Ball:** Totally. Edge compute and having edge server-side rendering just completely changes all the trade-offs you have there... And even if you&#39;re going back to a centralized database -- though some of the edge compute platforms... I feel like -- I was reading Fly.io will propagate your data out, too. There&#39;s all sorts of fun stuff.

**Divya:** Yeah. [laughs]

**Jerod Santo:** Disclaimer, Divya works with Fly.

**Divya:** I do, yeah. [laughs]

**Kevin Ball:** Oh, you do -- oh, oh, oh...! Well, hm...

**Jerod Santo:** She&#39;ll tell you all about it --no.

**Divya:** I try not to bring up where I work sometimes, because I feel like I&#39;m super-biased... But yeah.

**Kevin Ball:** So is that correct, that it&#39;s propagating the data out to the edge as well?

**Divya:** We do propagate some of the data, yeah. [unintelligible 00:45:52.05]

**Kevin Ball:** That creates a totally different world in terms of the trade-offs that you need to make about the network then.

**Divya:** Yeah.

**Jerod Santo:** So here&#39;s a question around the premise... One more question. So &quot;SPAs were a big mistake&quot; - it seems like sometimes they might be a mistake; if we think about an individual team or person making a choice, sometimes it might be a mistake to choose that, sometimes it might be the right choice... I think we can all name certain applications where we&#39;re like &quot;Yes, SPA made a lot of sense for Gmail. It made a lot of sense for Trello&quot; etc. But the industry as a whole, this pendulum swing, which we tend to go back and forth between different things... Was that direction that we went on, which may have been a five or ten-year direction - and I think, Divya, you kind of touched on this with your argument around &quot;Think how good forms could be.&quot; Do you think as a whole, the browser facilitating features for the needs of SPAs, and this pendulum swing towards, and now we&#39;re kind of starting to swing back the other direction - do think that whole thing was a waste of time, or do you think that we had profit, or there was benefits from going that direction?

**Divya:** It&#39;s really hard to say, but there are parts of it that feel like a waste of time. We&#39;re reinventing things, or we&#39;re creating interactions that people expected... But at the same time sort of the industry is constantly in flux; there&#39;s always things that come up, and then go -- like, full-stack apps, the whole Rails, and build everything in Rails, it was like a whole thing in the early 2000s... And Node.js - you can still build things in Node pretty well... But anyway, aside from that.

**Kevin Ball:** We can still build things in Rails pretty well, yeah.

**Divya:** I don&#39;t really wanna go there... [laughs] I disagree.

**Jerod Santo:** There&#39;s our next debate.

**Divya:** [laughs] I don&#39;t know... Bring on DHH to argue for Rails.

**Jerod Santo:** Well, we think we know which side he&#39;s on.

**Kevin Ball:** So I feel like DHH being the sort of disaster that he is, hides a lot of the real value that still is there in the framework, and the community beyond him.

**Divya:** \[47:52\] Yeah, I think there&#39;s definitely -- I mean, I can see that... I think I&#39;m, again, very biased, because I&#39;m working on a Rails app, and it&#39;s really clunky, and the experience is horrible... And I dislike it.

**Jerod Santo:** Hm. Modern Rails, or legacy Rails?

**Divya:** It&#39;s not legacy. It&#39;s not legacy.

**Jerod Santo:** Okay. The reason why I ask is because I actually haven&#39;t done a modern Rails. But I have fond recollections of Rails 4 through 6... And so I&#39;m not sure what it looks like today. But it was very productive for a long time, and I expect it to stay that way. But maybe it&#39;s gotten clunky. I don&#39;t know.

**Divya:** Yeah, we&#39;re not using super-legacy stuff, but I&#39;m working with GraphQL things in Rails and it&#39;s just painful overall... Because it&#39;s just -- yeah, it&#39;s just clunky for what it is. I would have rather written in TypeScript or something better.

**Jerod Santo:** Did you say that because you&#39;re on Nick&#39;s team? The debate&#39;s over, Divya; you don&#39;t have to kiss up to Nick.

**Nick Nisi:** [laughs]

**Divya:** No, it&#39;s just that I don&#39;t like writing Ruby. Every time I have to write a new query or a mutation, I have to write Ruby. I don&#39;t like that.

**Jerod Santo:** You&#39;d rather write TypeScript than Ruby?

**Divya:** Yes! Of course.

**Jerod Santo:** I&#39;m personally offended at this point...

**Kevin Ball:** Okay, so we&#39;ve found your bias there...

**Jerod Santo:** [laughs] Yeah...

**Kevin Ball:** Other than performance, I feel like Ruby is such a great language.

**Jerod Santo:** I concur. In terms of just the joy of using it... But maybe that&#39;s because I&#39;ve used it for a long time.

**Kevin Ball:** I do wanna actually dig in a little bit more on your question there, Jerod, about the direction. I went a little over the top in the debate on this, but I actually do believe that the user space innovation as a push towards direction for platforms is really important... And it&#39;s something that we have seen in OS land, and things like that as well.

Things that go into the platform or the kernel, of necessity, must move slower... Because they must maintain backwards-compatibility. There&#39;s all sorts of stability needs and things like that. So the place for really fertile innovation and exploration is in user space. And that then is a very good indicator to the platform vendor of where the important platforms are... And so I think this approach of lots of -- lots of stuff gets tried in user space. And some of it will be a disaster, and some of it will not. But the things that become very successful are then those things that start to get absorbed into the platform, and the platform makes those easier.

So I think there are things from the SPA period that were probably mistakes and probably misdirections, but there&#39;s also an awful lot of valuable innovation and exploration that happened there, and I don&#39;t think we would be nearly in the place that we are in terms of things like Houdini and in terms of things like Canvas, in terms of all these things that are enabling these massively interesting and powerful applications to live in browsers, if the SPA period had not happened.

**Divya:** Yeah, I wonder if WASM wouldn&#39;t have moved forward without that, too... Because now you can do crazy stuff with WASM.

**Kevin Ball:** Yeah.

**Nick Nisi:** And that&#39;s what Figma is doing, right?

**Divya:** Yeah.

**Kevin Ball:** Yeah, I was digging into their job postings. They&#39;re writing their stuff in C++.

**Divya:** Yeah. Super-low-level.

**Kevin Ball:** For these wild browser apps. That&#39;s awesome!

**Jerod Santo:** Is it though?

**Divya:** [laughs]

**Nick Nisi:** It&#39;s also like -- I mean, you can have the application piece that&#39;s just there, living on a single page, but then when you go to the gallery view or whatever, that&#39;s another page.

**Kevin Ball:** Totally. You can mix and match.

**Divya:** Yeah, you can.

**Jerod Santo:** Yeah, that&#39;s one of the cool things, is there&#39;s so much choice. But one of the hard parts is there&#39;s so much choice, and so often we are lazy, or strapped on time, or don&#39;t have all the information and we&#39;re like &quot;Just tell me what&#39;s best. Just tell me what to do.&quot; Which is why these debate episodes are fun, because - of course, they have a harsh premise that can either be a yes or a no, but at the end of the debate you know that there&#39;s a lot of &quot;It depends&quot;, and the actual conversation around it is the interesting part. The debates are fun, but I always like the third segment best, because we can discuss all of those in-between spots.

\[51:48\] If you enjoyed this debate episode - it&#39;s our fifth one, so go back into the feed and you&#39;ll find different arguments. &quot;Are web apps fundamentally different than websites?&quot; &quot;Should websites work without JavaScript?&quot; &quot;Is modern JavaScript tooling too complicated?&quot; &quot;And should we rebrand JavaScript?&quot;, which was a fun one for sure.

Kball mentioned Remix a couple times on this show... It reminds me - it is time for our new segment, Holla.

**Jingle** : \[52:12\] to \[52:16\]

**Jerod Santo:** Holla at Remix Conf. Remix Conf right around the corner, May 24th and 25th in Salt Lake City. We do not have a for-sure plan, but we believe JS Party will be involved at Remix Conf. So if you were thinking of going and you want to come see us, hang out with us, we will most likely be there. I&#39;m hedging, but it&#39;ll probably happen... So do that. Come to Remix Conf and come see us. It&#39;s May 24th and 25th, again, Salt Lake City, so check it out, Remix.run/conf.

Alright, y&#39;all, this is our episode. Kball, Nick, Divya, any final words before we call it a day?

**Nick Nisi:** We win.

**Kevin Ball:** It&#39;s been too long since I went to the other kind of spa... You made me miss it.

**Divya:** [laughs]

**Jerod Santo:** The winner of this debate episode gets a free spa on us.

**Nick Nisi:** Congrats, Jerod.

**Divya:** You have to go to the Korean spas. Those are the good ones.

**Jerod Santo:** Oh.

**Divya:** Some of them are all-inclusive. You get a massage, you can go to the hot tub, and then there&#39;s usually a restaurant, and then if you don&#39;t wanna go home, they have a hotel.

**Jerod Santo:** Seriously?

**Divya:** It&#39;s like all-inclusive. Yeah.

**Jerod Santo:** That really is all-inclusive. It sounds like a spa and breakfast.

**Divya:** It&#39;s like an adult amusement park, I guess... [laughter] I don&#39;t know what to call it.

**Jerod Santo:** That&#39;s good branding. Should we rebrand Korean spas to adult amusement parks?

**Divya:** I don&#39;t know if you want that branding... [laughter]

**Jerod Santo:** I don&#39;t know, it was your idea.

**Divya:** I didn&#39;t say special services were included. That was not -- [laughs]

**Jerod Santo:** You said it was all-inclusive, so I assumed.

**Divya:** [laughs]

**Jerod Santo:** Hey, listen up. If you have a cool premise for another Yep/Nope episode, let us know. We would love to compile more groups of debaters and find out who is the master debater. Okay, I have to end this episode now, before I get myself in trouble, on behalf of Kball and Nick and Divya. I&#39;m Jerod, and this has been JS Party, and we&#39;ll talk to you next time.
