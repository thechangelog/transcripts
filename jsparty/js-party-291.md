**Jerod Santo:** Hello, hello. It's your internet friends... I'm Jerod, and I am joined today by Nick Nisi. What's up, Nick?

**Nick Nisi:** Hoy-hoy! How's it going?

**Jerod Santo:** It's going great. We also have Amal here with us today. What's up, Amal?

**Amal Hussein:** Hey, hey. Happy to be here.

**Jerod Santo:** And a phoenix rising from the ashes, it's b0neskull's grand return to the pod. Welcome back, Chris.

**Christopher Hiller:** Yay! Hi, everybody. I'm glad to have me here, yes.

**Jerod Santo:** Are you excited to be here today? \[laughs\]

**Christopher Hiller:** I'm glad to have me here.

**Jerod Santo:** We are also glad to have you here. Glad to have all of us here today for a fun segments episode. It's been a minute since we've been able to just hang out, talk, play games and be ridiculous... And so that's what we're gonna do today. We're gonna start off with things in the news, most of which are about Astro. So Astro making news this week... And on two fronts - the more exciting one, and then the more insider one. We'll start with the excitement, because that's our keyword, isn't it, Nick? Astro 3.0 dropped... What date was this? August 30th. Yesterday, as we record, a week ago as you listen... And it's the first major web framework to support the View Transitions API. This seems a pretty cool deal. View Transitions... What do y'all think?

**Christopher Hiller:** What is that?

**Jerod Santo:** Alright, Chris wants to know... Amal, go.

**Amal Hussein:** So it's an API that basically allows you to add hooks so that when your page loads or when you're changing your page, you can gracefully exit out. When you're using a mobile native mobile application, you know that ease when you're swiping... Think of Tinder, ladies and gentlemen; swipe right, swipe left... You know, that ease, that grace in and out... So you can basically hook into that event, so that you can insert this graceful animation.

For a long time, developers were kind of monkey-patching this kind of experience into their applications, and the good folks at --

**Jerod Santo:** W3C...

**Amal Hussein:** W3C, yeah; it's not WATWG. I mean, I guess there is probably some WATWG collaboration, if I had to guess, but they have now put this into the browser. So it's called View Transitions API; we'll put the MDN link in the show notes. It's only available right now on Chromium browsers. Safari and Firefox don't have this yet. It's still an experimental API... But very exciting to see it go through the standards process and hopefully get adopted across the board.

**Nick Nisi:** Yeah. And the cool thing about it is that it really -- I think that what's happening with it is that it snapshots the current view, and then lets you manipulate that while it changes to a new view, so that you can have some kind of star wipe, or whatever you want. I don't know if you can do a star wipe, but I want to do a star wipe.

**Jerod Santo:** I don't even know what a star wipe is, but I want one.

**Amal Hussein:** Well, yeah, I think for a long time you couldn't do this on server-rendered apps, if you're loading your pages from the server... But now, because this is built into the browser, you can, and Astro is able to leverage that. So this works for single-page apps, as well as multi-page apps, which is very exciting.

**Jerod Santo:** Yes. This was one of the common reasons why you would require a single page app, was to have this kind of transition between views that you can manipulate to look cool, and seamless, and fast, and smooth, and all these things... Star wipes, and whatnot.

**Amal Hussein:** Tinder swipes...

**Jerod Santo:** No longer needed. No longer needed.

**Nick Nisi:** I'll just have to explain that.

**Jerod Santo:** Yeah, please do, because I don't even know what it is still. I just saying it.

**Nick Nisi:** I mean, it flashes to a star, or zooms into a star, which is the new view, but it has a star outline... The reference, as with every reference that I have, is an old Simpsons one, where Homer and Lisa are making a dating video for Ned Flanders, and Homer just keeps asking Lisa to add star wipes...

\[07:05\]

*Okay, from here we star wipe to a glamour shot of Flanders paying his bills. Then we star wipe to Flanders brushing his --*

*Dad, there other wipes besides star wipes...*

*Why eat hamburger when you can have steak?*

*I'm taking my name off this thing...*

**Jerod Santo:** So NickNisi.org is gonna be just covered in star wipes here soon... The nice thing about an API like this is they just -- it's just additive. If your browser doesn't support view transitions, well, then you just do the traditional switch the page UI.

**Amal Hussein:** One might even call that a progressive app.

**Jerod Santo:** It's a progressive enhancement, yeah. So if you don't have it, it doesn't matter. As a developer, you can put this in your websites today, and as people's browsers upgrade, they will get the star wipe. Chrome supports it, Edge, Opera, Chrome for Android, and Arc browser, which is not listed on the CanIuse.com website.

**Amal Hussein:** \[08:04\] And Samsung internet browser, too. So if you have a lot of customers in Germany... I think it's almost 70% of Germans use Samsung internet browser, so you'll have some happy customers.

**Jerod Santo:** So that's what View Transitions API is. Chris, are you for or against? What do you think?

**Christopher Hiller:** I don't have an opinion, but that sounds cool, or sorry that happened.

**Jerod Santo:** \[laughs\] Okay. He's gonna stay on the fence. Well, the thing that we're talking about today is not necessarily the API's existence, it's Astro 3.0 has now built-in use of this API, right into it. So as browsers add support, if you're using Astro and you're upgraded - I don't know if you have to re-codegen with Astro, or if you just upgrade and use... Then you just magically get this out of the box, and I'm sure there's nice ergonomics and all that, so that you can have it. Of course, everybody can use it by hand if they want to, right? It's a podcast, folks. Head nods do not go over super-well.

**Amal Hussein:** Oh, yeah. Sorry. Yeah.

**Jerod Santo:** Nick and Amal nodding furiously. What else in Astro 3.0? 30% faster, something like this. Anybody else check out the blog post? 30% to 75% faster rendering performance.

**Amal Hussein:** Yeah, that's huge. It seems they started a refactoring effort in 2.1, and they continued that into the 3.0 release. It's very cool to see that.

**Christopher Hiller:** So is this a framework you all use?

**Nick Nisi:** I do.

**Christopher Hiller:** What do you use it for?

**Nick Nisi:** NickNisi.com.

**Jerod Santo:** Oh, it's .com? Sorry.

**Nick Nisi:** Very, very popular.

**Jerod Santo:** I said .org. You've got a redirect set up?

**Nick Nisi:** Not yet. I have nisi.org.

**Jerod Santo:** Oh, that's right. nick@nisi.org. Gosh... Go ahead, Amal.

**Amal Hussein:** No, I have a really embarrassing, ancient, old website, that's 10 years old, and I'm rebuilding my personal website with Astro... And yeah, I was gonna go the purist route, I was going to, just for the s\*\*ts and giggles just use no framework for this... But now I feel so compelled to do this in Astro. I'm so picky about what I -- like, I have very limited free time, and so I can't play around with every single new technology, and so I'm very picky about what I will invest time in... And Astro has met the bar and then some, so... Very excited.

**Nick Nisi:** Yeah. I switched to it in Astro 2, and the reason I did was I liked some of the things that it was doing, but I got baited and switched on it a little bit, because I was "Oh, I'm a React developer, I building components that... I can just use React." Because that's the big appeal of this, you could use React, Vue, Svelte components, and intermingle them all together... And then I started rebuilding my site in it, and I was "Oh, wait, this doesn't need to be a React component. It could just be an Astro component." And then all of a sudden, everything is an Astro component, and I have no React in there... Which is awesome. But yeah, it's a really cool --

**Jerod Santo:** It's just you baited and switched yourself on that one, Nick... \[laughs\] He's "I'm gonna switch these to Astro and get angry about it." That does sound cool. I'm not using it... Well, I have plans for new websites, and one of my favorite things in life is to not start those things, but to just sit around and wait. And every time a new framework upgrades, be "Oh, this is the one I'm going to use." So right now, I'm totally going to use Astro 3.0 when I start this new static website... But by the time I actually start it, it could be a completely different framework. Who knows...?

**Amal Hussein:** Astro 10.0... The SSR enhancements are also very exciting. I thought this was really cool, because it kind of also touches performance improvements as well... So they've added support for per-route code splitting, which for multi-page app is huge, and very exciting. So you're getting to kind of dynamically send stuff up, and kind of improve your performance as a result of that... That's huge. Less bytes over the wire, all good stuff. And then they have edge middleware, so you can now bundle your middleware for deployment on the edge, which I think is interesting... I'd love to -- I don't know if you all have examples of when or why people would be doing that kind of stuff. I personally don't, so I'm eager to hear any thoughts that you have on that.

\[12:16\] And lastly, they have support for host customization, which I thought was also very, very exciting, because you basically -- it's similar to kind of the per-route code splitting. You're able to kind of send a dynamic or bundle up based on if you're using an AWS... Like, depending on where you're rendering and what you're rendering platform is, and as well as your compute engine. It's very, very cool.

**Nick Nisi:** I think the benefit of edge middleware would be dynamically generating content that is as close to your user as possible. So on the edge, and just much faster speeds when doing that. Another tidbit that is totally not useful in any way, but I thought was kind of cool - and shout out to chantastic for pointing it out on Twitter, and me seeing that, I guess... They changed the default port for the Astro dev server to 4321, which is a countdown to lift off, to continue the theme...

**Jerod Santo:** That is huge. That's the biggest innovation since the 1234 count up, which was also innovative, but nowhere near as exciting. Speaking of nowhere near as exciting, there was also some backend kind of business announcements coming out of Astro and Vercel, just a few days prior to the 3.0. launch. This is an official hosting partner. So Vercel now is going to be supporting Astro development to the tune of $5,000 each month towards the ongoing maintenance and development. And in turn, Astro will be, I guess, just saying \[unintelligible 00:13:56.10\] or I don't know exactly what Astro is going to be doing on their side of this deal... But they've named Vercel as an official hosting partner. Chris - hot takes on this partnership between an open source project and a hosting provider.

**Christopher Hiller:** Look, I don't know if anybody heard about Gatsby. Have we heard about Gatsby? They got bought by Netlify, right?

**Jerod Santo:** Tell us...

**Christopher Hiller:** And apparently they've laid everybody off and shut down the project. So I'm looking at this and I'm like "What's preventing that from happening with this thing?" Is Netlify gonna go buy it and shut it down? Is Cloudflare gonna do the same thing?

**Amal Hussein:** Well, it's a partnership, not ownership in this case...

**Christopher Hiller:** No, it doesn't have anything to do with that. That's great that they're getting money from Vercel. Maybe that is going to pay people who don't work at this Astro company for their contributions to Astro, and I think that's great. I'm glad that those people are getting paid, because otherwise they'd be exploited. So what's to stop another Gatsby from happening here? It confounds me why people go and they want to pick up these frameworks like this, which is - I don't know if this is a VC-funded company or not, but you need to be a lot more careful about these technology choices.

It's one thing to buy a SaaS service or something, but it's another thing to build your whole website and your whole product based on a framework that was built by a VC-backed Silicon Valley company. That's scary to me... But I don't know, that's my hot take. You wanted a hot take, there it is.

**Jerod Santo:** Hey, man, I appreciate it. That's why I went to you for the hot take, because I had a feeling that your stance would be in that particular corner. Amal, what do you think?

**Amal Hussein:** \[15:56\] I mean, I think it's very strategic on the part of Astro and Vercel. I mean, React is not the fastest game in town anymore, and I think Vercel really prides itself on being best in class of everything... And so it's kind of silly for them to be not supporting what I think is a best in class developer framework at this point. And so it's kind of a -- in that sense, it's somebody who's a 10 is marrying somebody who's also a 10... It's like two hot people. I've called Vercel the hottie in town a long time ago, I don't remember, at some point, some show... I was talking to Rich Harris. And when Rich Harris -- when the Svelte and Vercel partnership became a thing, I was like "Yeah, that's what it felt like."

And so I think it's strategic on both of their parts. I think it's gonna be a symbiotic thing. I think Vercel has reach and distribution, and Astro is a good product. So with reach and distribution it's hopefully a good thing. It seems like it's more a business partnership from a marketing sense and advertising sense, but there's also the financial aspect is that I think Vercel is going to contribute $5,000 a month towards Astro development, which is great. So that's the financial aspect to that relationship.

**Nick Nisi:** Yeah. We talk a lot about open source funding... We talked about Deno's experiment with Deno KV a few weeks ago... There's this, there's what happened to Gatsby... All of these open source projects, they need funding, and this seems like one of the better ways to do that, because as far as I understand - yeah, it's just a partnership, and not an ownership type thing. It makes me feel better as a user of Astro that it's probably still going -- I don't host my stuff on Vercel, and everything that Vercel kind of worries me that it's gonna be easier... It's just gonna be easier; not that you can't host it elsewhere, but the happy path is always going to be Vercel, and this makes me feel like the happy path will be generally the internet, hopefully.

**Jerod Santo:** In my experience, and in recent history, these relationships have been fickle and short-lived. I mean, we celebrated when Zach Leatherman was able to go full time on Eleventy because of Netlify; that relationship has ended and he has now moved on. The project remains its own standalone project, which is great... But if we look at the kind of stuff that was being added to Eleventy during that time period, a lot of what I've read from Zach is that his work going forward is going to be kind of slimming down and reducing Eleventy's footprint or feature print, because there was stuff going in that was -- you know, it made sense. It was like Netlify integrations and stuff. And so that was short-lived... Chris, you mentioned the Gatsby 1. If I was Fred and the Astro team, right now I'd be like "Awesome. We've got more money to work with every month." I wouldn't plan on that money being there every month for ongoing, beyond I guess even whatever the terms of this partnership is. Because once you start relying upon that, and maybe you go out and hire some people using that money, and then that money disappears, and now what do we do? So it's a nice shot in the arm from their perspective, but not one that I would count on if I was in that position. So...

**Amal Hussein:** I mean, in all fairness, I think you're just describing the volatility and the shifting nature of the web, and companies building for the web, and teams supporting that experience. So yeah, even within a stable company, you can't reliably say you know what you're going to be doing in six months. So...

**Christopher Hiller:** It's $5,000 a month. It's just $5,000 a month. Think about that; that pays for the blog post, that announces it. So I don't know, it's not like they can go --

**Jerod Santo:** You're saying that's an insignificant amount?

**Christopher Hiller:** Yeah, they can't go hire anybody with that, right?

**Jerod Santo:** You can hire somebody with five grand a month, couldn't you?

**Amal Hussein:** \[19:58\] Maybe not something full-time in the US, I don't think. But...

**Jerod Santo:** No. Well, the earth is flat, so I mean, surely there's talent all around the world. And you could do a part-time hire. I mean, I don't think $5,000 a month as an open source project is something to balk at, myself.

**Amal Hussein:** I would agree.

**Jerod Santo:** It's also not something to rely upon. So... Interesting. I think the key for us as just open source users and community members of the web is we should select tools that we think will continue to exist and improve over time. And so when we see something like this, you wonder -- like, Gatsby... Is Gatsby just done then? Or what happened to -- I don't know the whole story on Gatsby today. Is the project's just over with? Was it picked up by community members? Does anybody know?

**Nick Nisi:** There was a release last week, and the last commit was four hours ago by renovate.

**Jerod Santo:** So it's still moving forward in some capacity.

**Amal Hussein:** Was the last release just renovate commits? \[laughter\]

**Jerod Santo:** Does renovate do releases? Yeah...

**Amal Hussein:** I was gonna just say, that sounds like an automated release process.

**Christopher Hiller:** I don't know, I have heard through Twitter that everybody got laid off who was working on that project. So who's working on the project? I don't think there's been any official communication about it.

**Amal Hussein:** That makes me so sad.

**Jerod Santo:** Yeah, that is sad... Well, I do wonder, because everybody laid off that was working on that project - did everybody come to that project because of that job? Or were there people that were working on it anyways, or on the side, or as a typical open source project? And did they continue to be like "Well, I'm gonna keep working on this"? Or who does the IP -- I don't know, the situation, so maybe we're just talking out of ignorance here, but... Does the IP belong to Netlify now?

**Christopher Hiller:** I don't know about the licensing situation in Gatsby... But assuming there's a CLA, then yeah, probably they own the IP. Netlify would. But if there isn't, then...

**Jerod Santo:** Yeah. Well, I think in that case it's safe to say what Amal said at the beginning, that a partnership structured as this one seems to be is a much more stable ground for an open source project than an ownership stake.

**Amal Hussein:** For sure, yeah. And for what it's worth, I just wanted to say, I've heard really great things about Gatsby's internal culture. They were also one of the first companies to start paying people to interview; they'd give you a take-home project and then they'd cut you a check for it. I don't know, I've heard just tons of really great things, so it makes me sad that folks were laid off. I hope everybody's landed somewhere good, and just thank you for elevating culture in tech.

**Jerod Santo:** Well, speaking of landing somewhere good, it turns out that Python has landed in Excel. Amal, you wanted to talk about this, and we are here to talk about it.

**Amal Hussein:** This is tremendously exciting. Think about how much it sucks to write little macros and calculations in Excel. But also, Excel is just amazing, and honestly, we could replace the entire world with Excel sheets, I think; screw databases, screw web development. Let's just choose Excel. \[laughs\] But yeah, I mean, so now you can basically use Python right within Excel. So you can just highlight a cell, and then convert it into -- like, calculate Python, and you can format dates, you can run little logarithms... It's just fantastic. So Excel and Python kind of becoming a thing that can be used together, I think that's like -- I don't know, I think backend developers, they should be worried. Just saying... \[laughs\] If I could just use Excel and didn't have to build the backend - I don't know. It's tempting.

**Jerod Santo:** \[23:46\] Well, Excel is a backend, in many cases. I guess maybe not Excel proper, but Google's version of Excel sheets. Anything that's Airtable... I mean, you can actually go a really long way without foreign keys, and linked relational databases, and stuff. A lot of times all you need is a single table with some columns and rows, and an API in order to put stuff in and get stuff out. Excel itself - are we talking about an online hosted version of Excel? Are we talking about the one that runs on business people's desktops around the world. Because when I think about that, I think the software shops in general will be threatened more than merely backend devs. Because if you can build your entire system right inside the Excel on your desktop, in Python, then you know, who needs custom software, right? Or I guess that is custom software, it's just a different kind of custom software...

**Amal Hussein:** That's how I feel... I think this is actually much more monumental than people are realizing, but...

**Christopher Hiller:** Yeah, I'm looking at it and it's definitely cool. I think I am excited to see what kind of insane hacks people build with this. I'm sure it'll help a lot of people do their job, and I don't care about that. I want to see just insane hacks built into Excel with Python. And then how long till they add JavaScript is what I want to know.

**Amal Hussein:** Oh, yeah. Well, I mean, why would you need JavaScript though? ...in the sense of you just need a scripting language to perform tasks. So why -- oh, JavaScript because more people know JavaScript than Python? D'oh. My God, I'm so -- I cannot believe I just asked and answer that question...

**Jerod Santo:** Wow... You almost got kicked off the pod for that.

**Amal Hussein:** I'm just like, I cannot believe I said that. Can we just -- can we delete this from the show? Can we cut this? Yes, we're gonna cut this. Editor, please, cut, cut, cut.

**Jerod Santo:** Please leave it in...

**Amal Hussein:** Because I love -- listen, I love...

**Jerod Santo:** Why would people want JavaScript? She just said it.

**Amal Hussein:** No... I love Python. I think that's what it is, guys. I hate to say this, but honestly, the zen of Python is so real. It's so real. Especially with the pollution of TypeScript. JavaScript has become less of a zen programming experience.

**Jerod Santo:** Yes. Preach it. Preach.

**Amal Hussein:** You know what I'm saying? So the zen of Python is real. It's real.

**Jerod Santo:** TypeScript pollution. See, Nick? We were just waiting... Nick was gonna say, "When are they gonna put TypeScript into Excel?" You know that is his next line; he's just been over there, waiting for a chance to say it.

**Nick Nisi:** I'm just appalled over here. My mouth is just open...

**Amal Hussein:** Listen, when I was first learning TypeScript, a developer that I worked with -- I was just complaining about something, and I was like "WTF?!" And he was like "Listen, TypeScript leaves nothing to the imagination." And I have forever kind of thought about it that way. Like, it really leaves nothing to the imagination. And I feel like with Python, I feel like I can go anywhere, do anything. And guess what? There's one way to do everything \[unintelligible 00:26:32.20\]

**Nick Nisi:** "My code is so ambiguous! It's fun!"

**Amal Hussein:** No, it's not even that it's ambiguous. It's just -- and the programming, the language itself is beautiful, because there's one way to do... Like, there's only one way to do X. Unlike Perl, or other languages, where there's 17 ways to do something... Python is simple in that sense. So there's very little cognitive overhead when you're writing Python. I really appreciate --

**Nick Nisi:** Unless I want to mix tabs and spaces...

**Jerod Santo:** Yeah... See, we can't take Nick's opinion of programming languages seriously, because he's been getting into Lua...

**Amal Hussein:** Oh, my God.

**Jerod Santo:** And Lua is one indexed arrays. And so can anybody take it seriously? It's not even zero indexed.

**Christopher Hiller:** And Lua would be a reasonable thing to stuff in Excel, too.

**Jerod Santo:** Lua. Yeah, that's why I brought it up. I was kind of thinking it'd be a good one.

**Nick Nisi:** They could change it to A-indexed arrays...

**Jerod Santo:** Ooh... Or they can change it to Z-indexed. Back to the web... Z indexing, right?

**Amal Hussein:** Anyways... So this Python in Excel is only available in preview right now, and I believe once it's fully rolled out - yeah, I think it'll be available on all... Like, Excel on your desktop, Excel in the browser... I don't see it being -- especially the built-in functions. You know, if you're using a built-in function from Python...

**Nick Nisi:** Isn't Python one of the languages that OpenAI knows better than most? Is there a correlation there? My tinfoil hat's on now. This is how AGI becomes a thing... \[laughs\]

**Jerod Santo:** \[28:01\] Oh, okay.

**Nick Nisi:** Because once it gets into our spreadsheets - man, it's over.

**Jerod Santo:** Up into our spreadsheets? Well, game over, man. Game over. That could be a good point.

**Christopher Hiller:** Is it not in our spreadsheets already? Can you not use something to make--

**Jerod Santo:** Oh, I'm pretty sure it is.

**Amal Hussein:** I'm telling you, I've never worked at a company -- I've worked for unicorns, multi, whatever, fortune, whatever, top public companies... In startups... I've never worked at a company where really important information was not stored in Excel, and analyzed in Excel. So just putting it out there.

**Nick Nisi:** I mean, I'm not important, but I haven't had Excel or Microsoft Office installed on my machine in 11 years.

**Amal Hussein:** Man... Well, you're a developer, so it's understandable.

**Jerod Santo:** Yeah, I mean, numbers then, right?

**Nick Nisi:** Well, I mean, yeah. But I don't use it.

**Jerod Santo:** I have a very important numbers document open right now, which is gonna run our business here... It's gonna hold the scores... Of Headlies!

**Break:** \[28:58\]

**Jerod Santo:** Now, we don't have a jingle for Headlies, because I wrote one once, and I performed it, and Kball laughed so hard at me, and not with me, that I \[unintelligible 00:32:33.01\]

**Amal Hussein:** I want to see it. Can you do it?

**Jerod Santo:** No, you do not!

**Amal Hussein:** Seriously? Why not? I won't laugh. I'll mute myself if I laugh, how about that?

**Jerod Santo:** I won't perform it live, but maybe I'll insert it right here.

\[32:46\]

*Uh-huh! I've found ya, ya stinkin' bug!*

**Jerod Santo:** No, I decided not to.

**Amal Hussein:** Okay. \[laughs\]

**Jerod Santo:** Let's just play this game. So this Headlies game is Chris's favorite game that we play. It's the only one that he likes, and so we're playing it again, in his honor. This is a game of BS detection. This is fake news recognition. What does this have to do with JavaScript and the web, you might ask? Well, it's fun. And web development is also fun. And so that's a correlation that we're going to build... \[unintelligible 00:33:18.02\]

I have in front of me a handful of headlines gathered from around the web, as well as the first paragraph of each news story. Some of these headlines are 100% true, others have been fabricated by yours truly. It is your job, should you choose to accept it, to identify what's the headline and what's the headlie. \[laughs\] I can't even say that with a straight face... It's so good, it's so classic. And we will score points for you, see who is the best. I'm running out of words here... So this is how it's gonna work. I'm gonna say the headline, the three of you will have a chance to identify true or false, then I will read the first paragraph of the story, and you'll have a chance to flip-flop your answer to their side. The person who identifies the most correctly wins. If the headline is true, you'll hear this sound. \[win alert\] And if the headline is false, you'll hear the sound. \[fail alert\] Any questions?

**Christopher Hiller:** I don't remember if we get more points for guessing before the paragraph.

**Jerod Santo:** We've simplified the rules, because it's been pretty complicated in the past...

**Amal Hussein:** Why don't you just give us the hint all the time? Like, there's no consequence for knowing the hint.

**Jerod Santo:** I'm gonna give you the hint all the time, but you're gonna have to guess at first; you're gonna guess, then I'm going to give you the paragraph, and then you're getting a chance to flip-flop. Same points no matter what. It's just more information.

**Christopher Hiller:** Okay, whatever, Jerod.

**Amal Hussein:** I really wish I didn't skip breakfast. I feel just mentally underpowered for this...

**Jerod Santo:** Perhaps we should have discussed this in-depth before the show, when I told you guys the rules and asked you if you had any questions.

**Amal Hussein:** I just think these are still complicated. \[laughs\] Okay...

**Jerod Santo:** Here we go. The very first headline is "The FCC agrees with ISPs complaining that listing every fee is too hard."

**Christopher Hiller:** False.

**Jerod Santo:** Okay, Chris says false. Nick?

**Nick Nisi:** False.

**Jerod Santo:** Amal?

**Amal Hussein:** Man, this better be false. If not, I'm going to be writing a letter to my congressperson. I really hope that's false.

**Jerod Santo:** Alright, we have three falses. We will now read the first paragraph of the story. "The FCC accepted ISPs request to eliminate an upcoming requirement that they list all their monthly fees, saying "Every consumer needs transparent information."

**Christopher Hiller:** False.

**Amal Hussein:** Wait...

**Jerod Santo:** Would anybody like to flip flop?

**Amal Hussein:** Yeah, no, I still think false. Yeah. I mean, I'm guessing this is going to be true, because it's so obvious... You know what - I'm going to flip-flop, for the game; not because I actually believe it. Somebody has to be the control point. Okay, I'm gonna --

**Jerod Santo:** \[36:00\] For the love of the game.

**Amal Hussein:** Yes, I'm gonna go with true.

**Jerod Santo:** So you think this is a true headline.

**Amal Hussein:** I mean, this is late-stage capitalism after all, so... You know, it could be true.

**Nick Nisi:** I want to believe that it's false, so I'm gonna stay with false.

**Jerod Santo:** And Chris was just resoundingly on the false side. So b0neskull says false, Nick says false, Amal says true. Is it true or false? Checks his notes... \[fail alert\] That is a headlie. It's the exact opposite of what actually happened. The FCC rejected the ISP's complaints that listing every fee is too hard. They said "No, you go ahead and list every fee, you ISPs."

**Amal Hussein:** Yes. Really, that should be an insult...

**Jerod Santo:** So good job Nick, good job, Chris. Yeah, we will award each of you one point, and Amal has zero.

**Amal Hussein:** Yeah. It's okay, though. For the love of the game it's fine.

**Jerod Santo:** For the love game, yeah. For the love of not winning the game... Alright, we're gonna now move to round two. "Leaked Meta documents reveal intent to "Consume the Fediverse with Threads federation."

**Amal Hussein:** Fediverse, or Metaverse?

**Jerod Santo:** The Fediverse.

**Amal Hussein:** What is the Fediverse?

**Nick Nisi:** Mastodon.

**Amal Hussein:** Oh, okay. Okay, okay. Oh, Threads, this -- oh, my God. Oh, my God. I was just, I was thinking about --

**Jerod Santo:** \[laughs\] We're just sitting here, watching Amal slowly understanding what's going on...

**Amal Hussein:** Yeah, I was thinking about threads -- I immediately thought about concurrency, and all that stuff, and I was like "Wait, what?" And I was like "Wait, decentralization, or--"

**Jerod Santo:** Threads with a capital T.

**Amal Hussein:** Yeah, my brain was totally off.

**Jerod Santo:** So do you know that Threads is going to allegedly federate with other activity pub providers at some point?

**Amal Hussein:** Oh, I believe that, yeah. I'm gonna say yeah, that's a true headline.

**Jerod Santo:** Chris, what do you think?

**Christopher Hiller:** I guess I'll go with true until I hear the paragraph.

**Jerod Santo:** Okay. And Nick?

**Nick Nisi:** I'm also going to go with true.

**Jerod Santo:** Alright, we have three trues. The first paragraph of the story: "TechCrunch has acquired emails between Meta's CEO, Mark Zuckerberg, and Threads project lead, Adam Mosseri, that detail a plan to overwhelm the federated social network with users, content and "a global search index." Any flip-floppers?

**Christopher Hiller:** Yeah, I'll go false.

**Jerod Santo:** Chris has flip-flopped. The first flip-flop. Actually, Amal flip-flopped last round...

**Amal Hussein:** I don't know, I'm now just thinking, I don't know if they'd go for that. And it kind of goes against everything that Mastodon stands for...

**Jerod Santo:** You don't know who would go for it.

**Amal Hussein:** I guess Adam.

**Jerod Santo:** Right. Adam, the head of the Threads project.

**Amal Hussein:** Yes.

**Jerod Santo:** Okay. Meaning that you don't think they're going to federate, or you don't think they have this intent to overwhelm?

**Amal Hussein:** That they don't have the intent to overwhelm and federate... I don't know; you know what - I'm going to stick with my original answer. True.

**Jerod Santo:** Okay. Alright. So we have true with Amal, Chris says it's false now... He was once on the true train. Now he's false. Nick - stickin' our flippin'?

**Nick Nisi:** Okay, so I don't know anything about this. I know that they intend to, and I think that they should, but I feel like there's a problem with the paragraph, the paragraph that you said is a lie. Specifically, is Adam Mosseri the head of Threads, or is he the head of Instagram? Or is there a different -- that's where I'm at right now. Are you trying to get us on a technicality?

**Jerod Santo:** I will tell you that I do know that Adam Mosseri is the head of Threads. He might also be the head of Instagram, I don't know their org structure at all.

**Nick Nisi:** Got it. Okay, then I'm gonna stay with the true.

**Jerod Santo:** Alright. So Nick thinks this is true, Amal thinks this is true, and Chris thought it was true, but then he skipped it to false. Is this a headline or a headlie? Let's hear that sound... \[fail alert\] Oh, man, I made it up. I made the whole thing up.

**Amal Hussein:** Seriously? Oh, man...

**Jerod Santo:** Completely false.

**Amal Hussein:** I was kinda -- yeah. I thought so, but I was just too lazy to change my vote, to be honest.

**Jerod Santo:** \[40:09\] But I did look up the head of Threads; it is Adam Mosseri. Because I wanted it to sound like it was true, and so I gotcha. So Chris scores, because he flipped-flopped to false. Correct, Chris? Yes. And then the other two stayed true. So you both miss. So after two rounds, we have Chris in the lead with two correct answers, Nick has identified one, Amal is 0 for 2.

**Amal Hussein:** Chris is like the master BS detector.

**Jerod Santo:** He is, man. He's on top of it. That's why he likes this game.

**Amal Hussein:** Yeah, it makes sense.

**Jerod Santo:** Headline number three. "Crime is so bad near San Francisco Federal Building employees are told to work from home, official said."

**Christopher Hiller:** True.

**Amal Hussein:** True, true, true.

**Jerod Santo:** A lot of confidence there... Nick' a true, Amal's a true... Chris, what would you say?

**Amal Hussein:** Oh, yeah, it was Chris and I that voted, I think.

**Jerod Santo:** Oh, I'm sorry. Nick, what are you thinking?

**Nick Nisi:** I'll also say true.

**Jerod Santo:** The paragraph is "Officials at the US Department of Health and Human Services advised hundreds of employees in San Francisco to work remotely for the foreseeable future, due to public safety concerns outside the Nancy Pelosi Federal Building on 7th Street."

**Nick Nisi:** True.

**Jerod Santo:** Everybody feel good about their answers, or want to flip-flop?

**Amal Hussein:** No, I think that's very true. It was very scary being in SF... Yeah, early spring this year. It was very scary being there. So yeah.

**Jerod Santo:** Alright, let's find out. Is that a headline or a headlie? \[win alert\] That is true. So all three of you successfully identified that as true. Good job. You all get a point for round three. Round four. "Elon Musk says X will fund legal bills if users are treated unfairly by their bosses."

**Amal Hussein:** Oh, wow. That's a -- I mean, that's such an Elon Musk thing to do... I mean, it's so ridiculous.

**Jerod Santo:** He's the wildcard. You never know, would he say it or not?

**Amal Hussein:** Yeah, because he's like "Free speech!" "But what if I get in trouble for being an asshole on the internet?" "Oh, well, don't worry, we'll cover your legal bills."

**Jerod Santo:** \[laughs\]

**Amal Hussein:** Yeah, I'm gonna say true. True.

**Nick Nisi:** I'm also gonna say true, but I think that while he said that, it's completely false.

**Amal Hussein:** Oh, yeah. He doesn't actually mean it. He's not gonna follow through. Yeah.

**Christopher Hiller:** Yeah, true depending on if you made something up in the paragraph... So let's hear it.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** You know what I wanna know? I wanna know if a tweet can be legally binding. That's what I want to know. \[laughs\]

**Nick Nisi:** Not if you have opinions are your own in your bio.

**Amal Hussein:** Oh. That's -- touché, Nick. Touché.

**Jerod Santo:** Oh, good point. What if you say "Opinions are my employer's." Will that get you in trouble? \[laughter\] "My employer made me say it." Okay, here's the paragraph. "On Sunday, Mr. Musk told users that financial assistance from his platform would have "no limits." He asked users to "let us know" if they had experienced unfair treatment for posting or liking something."

**Christopher Hiller:** It's true.

**Jerod Santo:** Chris? It's true? Nick?

**Nick Nisi:** Wait, can you say the title again?

**Jerod Santo:** "Elon Musk says X will fund legal bills if users treated unfairly by bosses."

**Nick Nisi:** Okay, I'll keep it as true.

**Jerod Santo:** Amal?

**Amal Hussein:** Yeah, definitely true. I mean, it's so ridiculous, it has to be true. It's how I feel.

**Jerod Santo:** So ridiculous it has to be true... But is it actually true? Did he actually say that, or did I make it up whole cloth? \[win alert\] It is true. He said that a couple of weeks ago.

**Nick Nisi:** I asked you to repeat the title because I was curious if you said Twitter or X, and you were trying to get us on that.

**Jerod Santo:** Oh, I wouldn't be so malicious. You know I fully support x.com.

**Amal Hussein:** Is this where we start playing DMX? \[43:41\]

**Jerod Santo:** That's what I was saying -- if you listened to our show a couple of weeks back, I was saying DMX is rolling in his grave right now, because he's getting all of his cool songs again steamrolled.

**Amal Hussein:** \[43:57\] \[laughs\] I never realized that what DMX was doing on so many songs was barking...

**Jerod Santo:** What did you think he was doing? Coughing something up?

**Amal Hussein:** I had no idea that was a bark. \[laughter\]

**Nick Nisi:** He was just trying to DM us, on X.

**Amal Hussein:** Anyways, I'm sorry...

**Jerod Santo:** Oh, that'd be a cool new feature of X, if that was the DM sound anytime someone DM-ed you on X... It barks at you...

**Amal Hussein:** There should be like ringtones for DMs... You know, where that's a feature.

**Jerod Santo:** Yeah... Okay, headline number five so far...

**Amal Hussein:** Oh, man, there's more?

**Jerod Santo:** We've got eight of these. Let's keep rolling. It's three to four to two. Chris in the lead. Number five. "Douglas Crockford calls JavaScript a smelly language, says it's time for TypeScript."

**Christopher Hiller:** No!

**Nick Nisi:** He might think that about JavaScript, but he never would recommend TypeScript...

**Amal Hussein:** I mean, I'm gonna say something that is really mean, but... Sorry, who is -- is Douglas Crockard still relevant? \[laughter\]

**Jerod Santo:** Crockard?

**Amal Hussein:** Whatever his name is... Yeah, the JavaScript: The Good Parts... I used to think it was just some book that I couldn't understand. But no, it turns out literally almost everyone finds those marble diagrams confusing and hard to understand, you know? So I have some built-up resentment there for just making me feel...

**Jerod Santo:** What about JSON? Do you like JSON?

**Christopher Hiller:** No.

**Nick Nisi:** No.

**Jerod Santo:** \[laughs\] Okay, let's get to the paragraph.

**Nick Nisi:** I want comments, and I don't want trailing commas -- or I want trailing commas.

**Jerod Santo:** Here's the paragraph: "In an interview with Honeypot, JSON inventor Douglas Crockford calls for developers around the world to stop using JavaScript and start using its natural replacement, TypeScript."

**Christopher Hiller:** \[laughs\]

**Nick Nisi:** Well, you should do that. It is false. \[laughter\]

**Jerod Santo:** Alright...

**Christopher Hiller:** No, false.

**Jerod Santo:** Okay... Amal.

**Amal Hussein:** Yeah, I think it's false.

**Jerod Santo:** We've gotta get your official answer. Three falses. You guys just don't believe in the power of TypeScript...

**Amal Hussein:** No, I just don't think Douglas Crockford --

**Nick Nisi:** I do.

**Amal Hussein:** ...would say that.

**Jerod Santo:** You don't understand the power of the dark side... Yeah, you're right, he would never say that. He did say the first part. He would never say the second part. I just added that myself to make Nick mad...

**Amal Hussein:** Oh, God...

**Jerod Santo:** ...or happy...

**Amal Hussein:** So were we wrong, or right?

**Jerod Santo:** No, you were all correct, that the answer is false.

**Amal Hussein:** But it's partially true...

**Jerod Santo:** It's partially true, but not the whole truth.

**Amal Hussein:** What was his sentence though? JavaScript is smelly, and then what?

**Jerod Santo:** He did call JavaScript smelly. He says "It's time for us to move on." He didn't name a language to move on to.

**Amal Hussein:** Maybe it's time for him to move on. It's like, really... You know what - maybe Python needs a good parts book...

**Jerod Santo:** That would be a good quote to come out of this episode. "Amal Hussein called Douglas Crockford a smelly person. Says it's time to move on."

**Amal Hussein:** I didn't say that. You said that, but I did say that it is partially true.

**Jerod Santo:** Okay. Let's move on to round six. Everybody is now scoring every round... So the scores remain the same. Someone's gonna have to trick Chris in order for you guys to catch up. Number six: "Taylor Swift Fans complain of post-concert amnesia. Taylor Swift Fans complain of post-concert amnesia."

**Amal Hussein:** You know what, I say true. Leave it to the swifties to say some crazy s\*\*t like that. My guess is they got really excited, and that excitement created some kind of a high in their body, and they were just paralyzed in the concert, and then they just didn't... Yeah, I think that's--

**Jerod Santo:** They forgot what happened?'

**Amal Hussein:** They just forgot what -- yeah. The excitement overcame them.

**Jerod Santo:** Okay, so you're going true. Nick, you're head-nodding. What do you think?

**Nick Nisi:** I'm gonna go false. And I'm curious what this has to do with JS Party, but Taylor Swift, TS, TypeScript... Yeah, I got it. Okay.

**Jerod Santo:** \[47:53\] \[laughs\] I already told you, these headlines are fun, and web development is also fun. So they're very related. Chris, we've got them on either side of the fence on this one...

**Christopher Hiller:** Yeah. Let's say true.

**Jerod Santo:** Alright. So we have true from Chris, true from Amal, false from Nick... The first paragraph is "Some Taylor Swift fans are experiencing symptoms of post-concert amnesia, as they cannot remember several moments from her Eras tour shows that they attended."

**Amal Hussein:** Yup...

**Jerod Santo:** Anybody's changing their answer, or do we want to lock them in?

**Amal Hussein:** I'm staying with true.

**Nick Nisi:** I'm gonna google post-concert amnesia to see the official diagnosis here...

**Jerod Santo:** No googling...

**Amal Hussein:** A WebMD page... "Did you go to a Taylor Swift concert? Are you between the ages of 11 and 14?", you know...

**Jerod Santo:** Alright, everyone's sticking with theirs... So we've got Chris and Amal are on true, and Nick's on false. Alright. Is that a true headline, or a fake news? \[win alert\] That one's true. So Nick falls behind.

**Amal Hussein:** Yeah, I'm sad that you fell behind, Nick. Just copy Chris from now on.

**Jerod Santo:** After six rounds, Amal has four, Nick has four, and Chris has six. So a commanding lead, with only two rounds to go. You have to make up both of these points here in order to catch him. Number seven, "The NSA orders employees to spy on the world with dignity and respect." \[laughter\] "Number seven, the NSA orders employees to spy on the world with dignity and respect." Let's go to Chris. Your thoughts.

**Christopher Hiller:** I'm gonna go with false.

**Jerod Santo:** Okay. Nick?

**Nick Nisi:** False.

**Jerod Santo:** False. Amal?

**Amal Hussein:** I'm gonna say true until I hear the paragraph, because I feel like that line that you've just said - it's primed for clickbait. It seems like a clickbait title, where it's true, but it seems out of context.

**Nick Nisi:** Jerod couldn't say it without chuckling.

**Jerod Santo:** Well, true or false, it's funny either way. So let's hear the first paragraph. "The National Security Agency, the shadowy hub for the United States' electronic and cyberspying has instructed its employees that foreign targets of its intelligence gathering, "should be treated with dignity and respect", according to a new policy directive."

**Amal Hussein:** Yeah, as I said, I think it's taken out of context. I'm gonna say true.

**Jerod Santo:** Amal goes with true.

**Nick Nisi:** I'm going to distinguish myself and say false. For the game.

**Jerod Santo:** For the game. \[laughs\] And Chris - previously he said false, and he is, what? Sticking or flippin'?

**Christopher Hiller:** True.

**Jerod Santo:** He flip-flopped. He's going true.

**Amal Hussein:** Oh...! I think Chris is just copying me.

**Jerod Santo:** He just knows that as long as he ties you guys from here on out, he wins no matter what. So he's playing the game...

**Christopher Hiller:** But yeah, I can't, because Nick -- if you to pick the same one, then whatever. But you didn't.

**Jerod Santo:** Right. True. But they didn't. They're on either side. So okay... Is this true, or is this false? \[win alert\] That one's true.

**Amal Hussein:** Yeah, I knew it. I knew it...!

**Christopher Hiller:** Well, thanks for \[unintelligible 00:51:09.07\] everybody.

**Jerod Santo:** And I don't believe it was taken out of context. I think that's exactly what they said.

**Amal Hussein:** Well, no, but they omitted a part of the sentence. They basically skipped to the end.

**Jerod Santo:** "Should be treated with dignity and respect"?

**Christopher Hiller:** That sounds like a register headline. Is that from the register?

**Jerod Santo:** It's from the intercept. Alright, so Chris gets it, Amal gets it, and Nick falls into last. So...

**Amal Hussein:** You should be very grateful, guys, because I just stopped myself from saying something that would have probably gotten this podcast rated R, or something.

**Jerod Santo:** Well, thank you. We appreciate it.

**Amal Hussein:** I was gonna make up this really funny register headline about Elon Musk, but I'm not gonna do it, because it's inappropriate.

**Jerod Santo:** Okay.

**Amal Hussein:** And really, I should know better.

**Jerod Santo:** \[52:00\] We'll leave that as a --

**Nick Nisi:** Plus Plus. Get your Plus Plus. \[laughter\]

**Jerod Santo:** Save it for a Plus Plus bonus.

**Amal Hussein:** Okay, fine.

**Jerod Santo:** In private. Only amongst us friends. Okay, we'll keep that for Plus Plus people. If you want to hear Amal's dirty Elon Musk fake headline that's going to be rated R, sign up for Changelog Plus Plus. Okay, last one, last round. This is an anonymous listener... Oh, shoot, I can't say that. \[laugh\] I can't say a listener came up with this. We're gonna skip that one, because I just gave out the answer.

**Amal Hussein:** Ohh...!! Anonymous listener? But why does it matter if \[unintelligible 00:52:35.10\]

**Nick Nisi:** All listeners are anonymous.

**Amal Hussein:** A listener could be giving you false information...

**Jerod Santo:** Okay...

**Amal Hussein:** But, I mean, maybe not...

**Jerod Santo:** Okay, this was submitted by an anonymous listener, "Citing Red Hat's open source restrictions, Microsoft commits to join open ELA with Open SUSE and Oracle."

**Christopher Hiller:** False.

**Nick Nisi:** I don't know what any of that means.

**Amal Hussein:** What is an ELA? Electronic Licensing Agreements?

**Jerod Santo:** Open ELA is the --

**Christopher Hiller:** Enterprise Linux Association...

**Amal Hussein:** Oh, okay. Okay. I was like Electronic Licensing Agreement. Okay... I don't know about this one. I'll say true.

**Jerod Santo:** We have a false, a true...

**Nick Nisi:** False.

**Jerod Santo:** And a false. Here's the paragraph: "Microsoft announced Wednesday that they will be joining the open Enterprise Linux Association along with Open SUSE and Oracle. A representative from Microsoft refered to their open source initiatives around .NET and Azure as "a market leader in technology that helps enterprises thrive." Microsoft has committed to not standing in the way of innovation or security." Anybody convinced in the other direction plausible?

**Christopher Hiller:** Plausible... But I'm not gonna change it. I still think it's false.

**Jerod Santo:** He's gonna stick with it. Amal?

**Amal Hussein:** Sorry, I was just...

**Jerod Santo:** What's your stance?

**Amal Hussein:** Yeah, I'd say false. Oh, no, wait, true. True. I said true already. I think it's true.

**Jerod Santo:** I'm just asking what your stance is right now. Okay, false, true... And then Nick?

**Nick Nisi:** What did I say before? False?

**Jerod Santo:** "What did I say before?" \[laughs\] I don't remember. That's why I'm asking you again.

**Amal Hussein:** I thought I was the only one on "vacation".

**Nick Nisi:** I'm going on vacation next week, so I'm there. \[laughs\]

**Jerod Santo:** Okay. So Chris says false, Amal says true. What are you gonna say, Nick?

**Nick Nisi:** I'm gonna say false.

**Jerod Santo:** False or true? \[false\] That headline was made up by an anonymous listener. That's why I thought I ruined it by saying that, because I thought for sure you guys would think they made it up.

**Amal Hussein:** Yeah, I mean, it does make sense. Microsoft joining the Linux Foundation was revolutionary a few years ago, so I can't see them then further cozying up with bigwigs like Red Hat, so... I don't know.

**Christopher Hiller:** It's in opposition to Red Hat.

**Amal Hussein:** Correct. Yes.

**Christopher Hiller:** Which -- yeah, that's why I thought it might be plausible, because...

**Jerod Santo:** I do think it's plausible.

**Christopher Hiller:** Right. Microsoft doesn't have any love for IBM.

**Amal Hussein:** Right, right, right.

**Jerod Santo:** Alright, well, you guys managed to escape, and that is to say Chris managed to escape as the victor. Nick, with that correct final answer, scoots his way back into second place, and Amal ends up then at the bottom of the barrel...

**Amal Hussein:** I'm the loser, baby... And I don't remember the rest of the lyrics.

**Jerod Santo:** Well, that's good, because it gets quite more morbid from there... And thus ends America's favorite JS Party podcast game -- I'm sorry, Chris's favorite JS Party podcast game show.

**Christopher Hiller:** Yeah, I love playing head lice.

**Jerod Santo:** Head lice. \[laughs\] You're good at it, man. I think -- did you got them all right? Did you get a single one wrong?

**Christopher Hiller:** Yeah.

**Jerod Santo:** You're eight for eight.

**Christopher Hiller:** So here's the thing - and this is going to be some constructive criticism, some feedback. This is a gift from me to you.

**Jerod Santo:** Oh. Not interested.

**Christopher Hiller:** \[56:05\] The ones that are false should be completely made up. Because you take part of the headlines and you change it. But if we've seen those, it's going to be easy to know which one is which. And so apparently, I read way too much tech news, and so I see that. Now, if you had made up stuff completely out of the blue, I would have no idea.

**Jerod Santo:** Well, I did.

**Christopher Hiller:** But you didn't. Because you took existing headlines and just kind of changed them to make them false.

**Jerod Santo:** "The leaked meta documents reveal intent to consume the Fediverse", that's completely made up. I just completely made that up, out of whole cloth.

**Christopher Hiller:** Okay.

**Jerod Santo:** But the one that I did change was the Douglas Crockford one, where it says TypeScript at the end. So I changed that one.

**Amal Hussein:** And the FCC one you changed as well. But I'm just saying that those are easier.

**Jerod Santo:** Oh, the FCC one - I changed the FCC one, yes.

**Nick Nisi:** You got the Taylor Swift one right, Chris. Where do you get your Taylor Swift news?

**Christopher Hiller:** I have an 11-year-old daughter... \[laughter\]

**Nick Nisi:** Ballad?

**Amal Hussein:** Did you hear about that? Did you hear about that amnesia thing? Or did you just know? Because I knew it was true based on just how swifties are.

**Christopher Hiller:** I feel like I was on a -- I don't know, some sort of article, and then you scroll to the bottom, and then you see the "more junk that we want you to click on", I think I might have seen it in there. Yes.

**Amal Hussein:** Yeah, you saw the native advertising? I think that's what it's called.

**Christopher Hiller:** Native advertising, yeah.

**Jerod Santo:** Well, there was another Taylor Swift one that I thought about covering, where it was that in Seattle the number of people at the tour actually caused a mini earthquake. Did you see that one?

**Amal Hussein:** Oh, my God... I did hear about that. I did hear about that. The foot-stomping in the stadium caused some \[unintelligible 00:57:42.01\]

**Jerod Santo:** Yes, the foot-stomping caused an earthquake.

**Amal Hussein:** That's so wild. I didn't even know humans could do that. That's crazy.

**Jerod Santo:** If we put our heads together, and we put our feet together, we can move the Earth. We can make the world change.

**Amal Hussein:** I saw Beyonce live a few weeks ago, and that's how I felt after leaving that concert. I was like "Wow, when humans are collectively organized and put their energy towards something, this is the greatness that they can create." I left that show very inspired about what humans can do once we're focused, and we all get along, you know? So yeah.

**Jerod Santo:** Well, Chris, your feedback is well taken. I think that, to respond, it is much more difficult to come up with them out of the blue than it is to take something that's partially ridiculous and change it to be false. So that's why I have a mixture...

**Christopher Hiller:** Yeah. That Meta one was hard, because I didn't -- it was just like I had no frame of... You know, I just had to guess.

**Jerod Santo:** It's good feedback. If I'm gonna stump you in the future, I'm gonna have to work a lot harder. That's what you're saying. And I'm willing to put the work in. So we will come back for another round of headlies soon... But you do get the final word. That's what you've won today. You can say the last thing on the podcast before we say goodbye. So here we are, Chris, here's your moment... You won headlies, you're the champ... One thing to say to the JS Party audience before we call it a show.

**Christopher Hiller:** I don't want to say anything...

**Jerod Santo:** Alright, that is JS Party for this week. I'm Jerod, with Nick and Amal, and Chris who doesn't want to say anything, so of course we're going to honor that request... We'll talk to you on the next one.

**Outro:** \[59:27\]

**Jerod Santo:** Douglas Crockford calls JavaSkwipt -- JavaScript...

**Amal Hussein:** \[laughs\] Hey, JavaSkwipt. Oh, JavaSkwipt... I love me some JavaSkwipt...

**Jerod Santo:** Do you ask if we wabbits know JavaSkwipt?

**Amal Hussein:** Yes, you silly wabbits! \[laughter\]

**Jerod Santo:** Elmer Fudd says "JavaSkwipt's smelly." \[laughter\] Okay, we're gonna break the show.

**Christopher Hiller:** Brownies for breakfast, or what?! \[laughter\]

**Amal Hussein:** No comment, I'm on vacation. No comment... No comment.
