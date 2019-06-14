**Feross Aboukhadijeh:** Alright, well welcome to JS Party, where every week it's a party in Javascript. I'm Feross, I'm gonna be hosting this week, first week. I'm here with three awesome panelists. The first is Suz Hinton. Suz, do you wanna say hi?

**Suz Hinton:** Hello!

**Feross Aboukhadijeh:** Nice. And the second panelist is Nick Nisi.

**Nick Nisi:** Hello!

**Feross Aboukhadijeh:** And then last but certainly not least is Alex Sexton.

**Alex Sexton:** Hi, everybody. I'm back.

**Feross Aboukhadijeh:** Cool. So we're gonna be talking today about some really fun stuff. I'm super excited about our topic for this week. We're going through a bunch of things - things from old DOM APIs, to our favorite HTML tags, weird websites, nostalgia, a bunch of old stuff, maybe web security, and surprising and weird websites.

**Suz Hinton:** I'm so pumped for this episode!

**Feross Aboukhadijeh:** Nice. So let's just get right into it. The first topic favorite HTML tags. Suz, do you wanna maybe go first and just tell us what HTML tag you selected as your favorite?

**Suz Hinton:** Yeah, so we were talking about weird tags that are not always necessarily used to this day, so I went a bit nostalgic and my favorite weird, old HTML tag is the map tag, where you make image maps, which are super fun.

I think most of you were doing HTML on this panel back when image maps were really popular, right?

**Feross Aboukhadijeh:** Yeah, I never actually used one myself.

**Suz Hinton:** Oh, really?

**Feross Aboukhadijeh:** Yeah, never used it.

**Alex Sexton:** Image maps were the best for adding (what were they called?) secret parts of websites; you click on the eyeball of someone's eye, and then you get to go to some link... \[laughter\]

**Suz Hinton:** Yes, it's so true, and it was like an Easter egg way of doing things, but it also meant that instead of having to have all of these separate pieces of an image an tile them all together in some kind of table layout in order to create these different hot spots you could click on, you could essentially apply a map HTML tag to a matching image tag, and you could set up these regions (I guess); it was kind of similar to SVG, where you could either draw like a rectangle, or you could draw polygons, and then each little hot spot would end up being a href just to go somewhere else, which was really awesome. So you could have a map with lots of different cute little buildings and landmarks, and that could be the navigation for your website.

\[00:03:45.09\] The reason why I really liked it was because looking back over it, it was kind of weird, but it did solve a pretty awkward problem that we had, where we couldn't lay things out as nicely, like what we have with grid layout these days... And it just forced people to be really creative. The navigations that people made with that especially was really entertaining, and there were all these really cool online tools that allowed you to generate these image maps, so you could actually draw the polygons instead of having to hand code them... So there was this really cool culture of being able to push the limits of this HTML tag, for sure.

**Feross Aboukhadijeh:** Suz, do you know, was this tag created before there were tables? Because I'm thinking maybe you could simulate this with a table. You could have like an image in every cell, and then just slice up the image basically, and put each piece into a cell, in a table, and then you could linkify a few of them.

**Nick Nisi:** That's really funny that you say that. I was thinking the same thing, Feross, and I went to check the historic records of the Space Jam website to see if that's what they were using, if they were using the map... \[laughter\] But they are not. They are using a table, and putting each image into cells.

**Suz Hinton:** Interesting! Yeah, I should have researched that, but I'm not actually sure when it did come about, and I remember those days of creating like an entire layout and then using slicing apps in Photoshop, and things like that... But I feel like instead of image maps now we have -- we still have table layouts a lot of the time in emails, and so each little region is like a clickable cell, I guess... So I guess we've kind of seen that approach live on in a lot of HTML emails, even if they're not using map anymore.

**Alex Sexton:** The map was first introduced in the HTML 4.0.1 specification, so I think tables pre-date map by a good chunk.

**Suz Hinton:** Interesting.

**Feross Aboukhadijeh:** Well, I guess you can do other shapes in map too, besides the square... So that's a unique feature.

**Alex Sexton:** It certainly is a superset of the linkability possibilities, but I think there are other reasons to do table layouts, because you actually wanted certain cells to shift based on the content, and things like that... So it wasn't always just a single image.

**Suz Hinton:** That's true, yeah.

**Alex Sexton:** But still, very good deep cut.

**Feross Aboukhadijeh:** Cool. Alex, do you wanna share your tag? Unless there's anything else we have to add about map.

**Suz Hinton:** No, we're good.

**Feross Aboukhadijeh:** Oh yeah, I'm curious actually, real quick - does map still work today? Is it part of the spec, or is it deprecated?

**Suz Hinton:** Oh, I should have looked that up.

**Alex Sexton:** I believe it's still in the living standard.

**Feross Aboukhadijeh:** Is it recommended to use it still, or is it discouraged?

**Alex Sexton:** Well, it was only a recommendation in 4.0.1 and 5, and now it's just part of the living standard.

**Feross Aboukhadijeh:** Cool.

**Alex Sexton:** I don't see anywhere where it says that it's discouraged or anything like that. I guess it just shouldn't be used for the things we used to use it for. It's actually great for linking parts of an image, but it's bad for page layout.

**Suz Hinton:** Yeah, I think that we have much better tools these days for doing this, and I think that websites almost have moved on, to the point where we sort of want a nice structural hierarchy, rather than an Easter egg "You have to hunt to find stuff..."

**Alex Sexton:** Yeah. Interestingly, you can't have the map tag without (I think) the area tag, right? So you kind of get two for one weird tags with this deep cut... So the area tag is just like how you define the coordinates of a shape that you wanna link inside of a map. So if you ever wanted to use the area tag, there you go.

Of course, all the examples, even in the living spec, are still fully capitalized examples of -- all the texts, it's like MAP!! AREA!! HREF!! Which is good, I'm happy about that.

**Suz Hinton:** I love it, that's awesome.

**Feross Aboukhadijeh:** Cool. Alex, tell us about your favorite tag.

**Alex Sexton:** \[00:07:45.03\] Yeah, I'm gonna be a jerk and mention a few, mostly because they're not that interesting to talk about deeply. My favorite tag I think has always been a &lt;dl&gt; tag. One of the reasons I like it is because the thing that that stands for, they changed it between HTML 4 and 5. It used to be a definition list. So it's a dl element, and it can contain dt's and dd's, which are like definition titles and definition... Somethings.

The cool thing about it was it was kind of like an unordered list, or like a &lt;ul&gt; tag, but you could have unlimited definitions of single titles. It's one of the worst elements for hierarchy, because it's just - you give the dt, and then everything after it... Any dd after it - you could have 10, you could have 0... It's going to apply to the sibling element, rather than being inside of the dt, which I always thought was weird.

And then it mostly didn't change what you use it for, but they thought it was a better definition of the dl to call it a description list instead of a definition list, because that opens up wider possibilities. It doesn't have to be like "This is a word and these are the five meanings." But you could imagine a dictionary has the word -- it has a dl, and the word is the dt, and then all the possible definitions would be dd elements. And that was kind of cool, but whatever.

The next one is the &lt;wbr&gt; element, which is the word break opportunity element. It just gives the renderer the ability -- it says "If you have to break up this sentence, here's a really good spot to do it", and I think it's underused. A lot of people try to use white-space, nowrap or whatever hyphen incantation you need to make that work in CSS... But a lot of times, if you just have a good rule of where to inject &lt;wbr&gt; elements, they render as like empty bytes and they don't show up on the page, but they tell the renderer where to go...
And the last one is just a shout-out to &lt;iframe&gt;, because there's nothing you can't do with an iframe. So if I had to actually pick my favorite HTML element, it'd be an iframe. It's just too large of a topic to even brush.

**Suz Hinton:** That's awesome.

**Feross Aboukhadijeh:** Cool. Nick.

**Nick Nisi:** Alright, mine is not gonna be a popular one, but it got me through so many really boring classes in high school, so I'm going to give a shout-out to the &lt;applet&gt; tag. That'll probably seal my faith of never being on this podcast again... \[laughter\]

**Alex Sexton:** Turn off his mic.

**Nick Nisi:** \[laughs\] You know, playing old Java and Flash games was a big part of my high school class experience, so I really liked it; I'm really glad that it's dead, and please don't even try and use that. I don't think you can anymore, but... Yeah. There were a lot of fun games that you could play.

**Alex Sexton:** Quick question. Were random access memory by arbitrary attackers a big part of your high school experience as well? \[laughter\]

**Nick Nisi:** Probably, but I was oblivious.

**Alex Sexton:** Being part of botnets was a big part of my high school experience.

**Feross Aboukhadijeh:** Actually, I'm wondering, what's the difference between &lt;applet&gt; and &lt;object&gt; and &lt;embed&gt;? Because I think all those are similar, right? They all let you embed a flash or a Java thing...

**Alex Sexton:** Yeah, there were different rules around the access that things initially had. I think initially for the Java stuff you'd have to have the little coffee logo, the Java logo that came up and spun, but I think applets had more of like first-party access to things, which was scary... But I think also it's very specific to Java, and so &lt;embed&gt; and &lt;object&gt; became the IE and standards version of &lt;applet&gt; for arbitrary third-party things, rather than just Java.


**Nick Nisi:** \[00:12:08.19\] Also my first big experience with trying to create (I guess) something more than a web page was with &lt;applet&gt;. In high school, my school blocked AOL Instant Messenger for a few days, and in that time I was reading and learning Java, reading a book on Java, and there was a chat demo in there, and I was trying to make that work as an applet. I never really got it to work, because I didn't know anything about what I was doing, but it was fun to play with that.

**Suz Hinton:** \[laughs\] That's great. I remember once I got a PC Mag and there was like a Java applet in it with the source code. This was before I had the internet, so I sat there and painstakingly typed the entire application into notepad, and then I didn't actually realize that you actually needed the runtime and all of this other stuff, and I didn't have the internet to get it... So I spent hours typing this thing in; I wanted to put it in an applet tag, and then I never actually got to do it, which was really sad.

**Feross Aboukhadijeh:** Aw, that's really sad... \[laughter\]

**Alex Sexton:** It ran in your imagination, the best JVM...

**Suz Hinton:** Yeah... It was gonna be really cool. It was one of these whiteboard apps where you could like draw pictures and stuff, and I was like "Oh, I'm gonna put this on my website, and it's gonna be awesome."

**Alex Sexton:** What did you end up putting on your website instead?

**Suz Hinton:** I found my very first website recently on a floppy disk, and it did actually use frames, Alex, so you'll be really happy with that.

**Alex Sexton:** Wait, but that is not what I said. I said iframes. This is very different.

**Suz Hinton:** Oh, that's a good point. Okay. Well, it used frameset, which is awesome... And it was me reviewing Pokémon games and talking about how you can enable glitches and stuff in the game.

**Alex Sexton:** Oh, wow. That's like Smash Brothers ahead of its time. Like, in order to get hacks and go further in the game, right?

**Suz Hinton:** Yeah, so there was a Pokemon called MissingNumber...

**Feross Aboukhadijeh:** MissingNo, yes!

**Suz Hinton:** Yeah, MissingNo, and you could swim around the SSN boat, and things like that... So yeah, there were really cool hacks.

**Feross Aboukhadijeh:** Yeah, that's such a blast from the past... Wow.

**Alex Sexton:** My first website was about motorcycles - I guess, like, dirt bikes - and I've never ridden a dirt bike before... It's just the guy who taught me how to build websites had a dirt bike website, so I was like "I guess I'll build one of those, too." \[laughter\]

**Nick Nisi:** My first one was a Mr. T fan page.

**Suz Hinton:** I think that wins. \[laughter\]

**Feross Aboukhadijeh:** Mine was just like a personal site that I put some home movies that I made on...

**Suz Hinton:** I feel like that's very Feross. \[laughs\]

**Alex Sexton:** And then your second website ever is the one that we're gonna talk about for the second segment?

**Feross Aboukhadijeh:** Yeah, yeah. First, I got a semi-favorite HTML tag. My favorite HTML tag is &lt;plaintext&gt;. I'm actually curious, have any of you heard of it before this?

**Suz Hinton:** No, I hadn't heard of it before you mentioned it.

**Feross Aboukhadijeh:** Yeah, it's a really weird one, and it's like -- it goes back to the really early days of I think like maybe the original Netscape. My impetus for -- okay, first let me say what it does... So if you put a &lt;plaintext&gt; tag in a page... First of all, there's no closing that. You can't close it, so it just opens... And then everything that follows the &lt;plaintext&gt; tag, it just renders as plain text, and you can't stop it. So it just starts making everything after it plain text, and you can't undo it or close it.

**Suz Hinton:** I feel like this is the ultimate injected script tag. \[laughs\]

**Feross Aboukhadijeh:** \[00:15:42.28\] Yeah, it's useful actually for -- well, it was useful to me at one point in time, and that's why I went looking for something like it... Because when I was doing my company in 2013, I had this idea to make a peer-to-peer content delivery network. Obviously, not too unlike what WebTorrent does today, but to do it as like a CDN that people would use to power host their static content using WebRTC... And there was no service worker back then, so you couldn't stop resources from loading normally over HTTP and then try to load them over WebRTC without having the user go and change the way they make their website. So what I wanted to do was make it so that they could just add my script to their website, at the top of their website, in the head tag, and then I could prevent all the resources later in the page from loading.

It wasn't possible to wait until the ready event or to try to select the elements and rewrite to remove the source attribute from the images or from the videos. It wasn't fast enough. The browser was actually doing those HTTP requests really quickly... Because I think it has this --

**Alex Sexton:** The look-ahead...

**Feross Aboukhadijeh:** Look-ahead, speculative parser, yeah. It finds anything that looks like an HTTP link, and it just starts to open up the connection to the server, and all that. So anyway, even if you stopped it, it was too late; it was already wasting resources.

And there was no service worker, so it wasn't possible to do this properly, and intercept the requests and handle them differently... So what I resorted to was the worst hack ever - just with document.write, the &lt;plaintext&gt; tag into the top of the page, which would just show the whole website as HTML. But then we would apply a style attribute to the &lt;plaintext&gt; tag, which was display: none. So it wouldn't show the HTML. It was like hidden, but it was there in the page.

Then we did regular expression over that. And there's now text a text node in the DOM. The whole source of the site is like a text node. We'd regex it, change all the source equals to something else, like data.source=, and then inject it back into the page.

**Suz Hinton:** Amazing. Amazing.

**Alex Sexton:** And that worked in every browser?

**Feross Aboukhadijeh:** That worked in every browser, yes. In Firefox it gave you a warning. It would warn you about how you're slowing down the pageload by...

**Alex Sexton:** Document.write?

**Feross Aboukhadijeh:** Yeah, preventing the speculative parser from working. It knew that plaintext did that, and it had a special warning for like not doing that. So that actually added like half a second of load time upfront, so it wasn't really a good idea, but it was the only thing that worked.

**Alex Sexton:** Just for reference, the HTML plaintext element has been deprecated since HTML 2, which is impressive. \[laughter\] It was obsoleted in the spec in HTML 5, so it's listed as deprecated, but I think it does not even mention it anymore. So yeah, you shouldn't use it...

It was never implemented in all browsers, but it sounds like all the big ones have it if you were using it to your advantage.

**Feross Aboukhadijeh:** Oh, interesting, yeah. I just remember we tested the big four and it worked. Maybe Edge doesn't have it, because that wasn't even out then... I don't know.

**Alex Sexton:** In general, you probably want the pre-element -- the interesting thing about it (you kind of said it already) is you don't need the closing tag, and that's because you can't have the closing tag, because once you're in plain text, the closing tag would be plain text. It can't be parsed anymore. It's impossible to have a closing tag; it's not that that's good, it's just that it must be that way.

**Suz Hinton:** I love it.

**Feross Aboukhadijeh:** Yeah, the thinking of this tag must have been to -- if you're trying to serve HTML source that was readable by the user, then you could start it out with a plain text tag, or something. Then the browser wouldn't interpret it as HTML.

But why didn't they just use MIME types, or like a content type header, or something? I guess maybe that wasn't around, I don't know.

**Alex Sexton:** \[00:19:50.11\] Those things were around I think for the most part, but if you think about a lot of these early things, it's like, the web wasn't important yet, whenever this stuff was made. So it's just like, imagine working at your company right now, and being like "What if we had a way for people to show HTML?" and someone's like "Okay, we could just add this tag, no big deal", and then later the world relies on your technology, and it's like "Hey, no one thought this out", and it's like "Yeah, no one thought this out."

I don't know... It's just so old that they didn't have to consider how ridiculous it was, I think. It was just like, it kind of worked.

**Break:** \[00:20:30.18\]

**Feross Aboukhadijeh:** We're gonna go right into our second topic, which is the annoying site. This actually started out as sort of an experiment where I was trying to figure out what web APIs could be abused, and were designed in a way that maybe were open to unintended or unexpected uses. So I was looking through all of the different web APIs I could find on an MDN site, and just thinking like "Okay, I see... So there's a permission prompt on this one, or there's a restriction in this way, but what if we did this differently? What can we do, and what kind of site can be put together?"

Then I just like went through each one and just thought of like "How could this feature be used to make the most annoying possible site?" I just put them all into one site, and that's what you can visit at theannoyingsite.com. But if you visit that - fair warning - do it in an alternative browser, or in an incognito window, because it'll do some things.

It's not necessarily malicious, but it can certainly log you out of some sites that you're logged into... Like your Google account - you'll just get logged out of it.

**Alex Sexton:** Feross, I think we're starting at this point where we know what it is, so it's like the first thing you wanna do is warn people, but what happens when you go to the website?

**Feross Aboukhadijeh:** So you see a sort of innocent picture of a cat, and then it says "To get started, click the cat." Actually, it suggests that you hold down the space bar, because that actually causes a more disastrous outcome. Basically, as soon as you do either of those things - you click on the cat or you press space, it will pop up one or more pop-up windows that can actually move around your screen... And they move around and bounce off the edges of the screen, making it really hard to close the windows with your mouse, to hit the X button, because the window is physically moving around and bouncing around your screen.

Then it tries to prevent you from getting out of that, even with the keyboard shortcuts. So if you hit Cmd+W to close the window, that gets intercepted with a pop-up that will actually block that shortcut from working... And it does like a bunch more things. It vibrates your device if you're on a mobile device, it puts text on your clipboard, it shows the print dialogue, it tries to ask for your camera, it does full-screen mode, it asks you if you're sure you wanna leave the website if you're trying to leave, it blocks the Back button from working, it fills your history with embarrassing searches, it navigates the tab that actually linked to this site, so that it takes over more of your tabs... And on and on.

\[00:24:11.19\] And I'm actually thinking of more things to add to it, because there's actually a few more things that I've just learned about... Like the speech synthesis API - apparently, that one is unmutable. If you try to mute a tab -- like, you can still make sound from the tab if you use the speech synthesis API, so I've gotta add that one to it, for sure. But yeah, it's actually just a crazy number of things you can do.

**Alex Sexton:** Why did you make this? You were trying to annoy someone?

**Feross Aboukhadijeh:** I just thought it was interesting that you could move windows around, yeah. There's also kind of a story... I was trying to get revenge on a spammer, basically; I was trying to waste their time, because they wasted my time, so I wanted to send them a link that could make them force-quit their browser and lose whatever work they had unsaved. That was the idea. So yeah, I actually responded to this spammer, and I assume it worked. \[laughs\]

**Alex Sexton:** Some Nigerian prince just got downgraded to duke... \[laughs\] So let's jump into some of the repercussions of such a large array of abuse, all chained together. I think the interesting thing is that any one of these APIs, slightly abused, is within the realm of like, that maybe is a decent tradeoff by the browser, because you want people to use this, or you want it to be accessible without having to click on a bunch of permissions, or you want it to be on by default, so people actually use it, things like that, but then also if you string a bunch of these things together or use them in the worst possible imagined way, which, Feross, you seem to be exceptionally gifted at coming up with, the outcome is to the extent of -- maybe not like a violation of privacy or anything like that, but certainly can destroy someone's entire browsing session, which is like on the edge of security and just like extreme, dark UI.

**Suz Hinton:** Yeah, I was gonna ask Feross, were you afraid to push this live? Or how did you feel when you sent this URL back to the spammer?

**Feross Aboukhadijeh:** Part of me was worried that doing this would end up causing these APIs to get restricted in some way. That was my main concern. I don't want the web to get crippled. And you can kind of already see some of this stuff happening... I mean, there's been times in the past where the browsers have had to dial back some of the power of these different APIs. New APIs require HTTPS a lot of the time, or they're not available...

There was also an issue where WebRTC, which is used to do peer-to-peer connections, was able to gather your local IP address, which is useful for connecting to people who are on the same Wi-Fi network as you in a really efficient way, because then you can just connect directly to their local IP... But there were literally ads that "We're creating WebRTC connections to nowhere", and just gathering your local IP address, which is additional data they could use to track you, because that IP address might stay the same, even if you clear your cookies. So that was basically really bad, and so they took that feature away... Which just makes the connections worse, right? But then the tradeoff was if you give the website permission to use your camera and your microphone, then that local IP address then comes back, so you're allowed to use that again.

The idea is, like, if you're giving your camera permission, your microphone, that's already more intimate than your local IP, so go ahead and let the local IP to go through... But that hurts use cases like web torrents, or any other WebRTC use case that doesn't use the microphone or the camera, because now you have like a worse route... And then I'm trying to think... There's like a few more cases like this.

**Alex Sexton:** \[00:28:05.26\] On the IP address, just because it's interesting - the other interesting thing about that and maybe a bunch of these is you can't really pop up to normal users "This site would like to know your local IP address", right? That doesn't mean anything. You can say "This site wants to access your camera or your location" and that means things, but "This site wants to know your local IP address" is just meaningless, so how does a browser solve for that? ...they can't necessarily do that easily.

The whole thing reminds me a lot of evercookie. I don't know if you remember that... This is a similar type of project where cookies can be cleared, and browsers are doing a better job of allowing people to block third-party cookies and things like that... And there's a guy named Samy Kamkar, who's kind of a security researcher. He got famous for the "Samy is my hero" MySpace vulnerability way back in the day...

**Feross Aboukhadijeh:** Oh, yeah...

**Alex Sexton:** MySpace famously offered him a job after he hacked MySpace, or whatever... And it was just like some script injections that automatically made people friend him and write "Samy is my hero" on their MySpace wall, or whatever; I don't think it was called a wall.

When they offered him a job, they flew him out to L.A., and when he got to L.A., they arrested him under the -- not espionage, but the Patriot Act, and then he couldn't use a computer. But the day he came back, he released evercookie, which used Flash cookies, and then it used Java applets, and then it used local storage, and then session storage... It used every possible way; it used the Window History API, it used just about every last little tiny thing that you could possibly use to store data. It even used like old exploits in Java that you could run in order to accidentally leak memory into other parts of the system.

So the only way whenever evercookie came out to not have the data permanently stored was to delete your browser and reinstall it. And even then, unless -- I think on Safari you could be in private mode and just restart it. The idea was not that people would use this, though they did; advertisers immediately started implementing evercookie as part of the ads that they'd do, but the browsers now had a clear list of ways, like "Here's this one thing that we need to beat, because it does everything... And if we beat this, it's unlikely that someone could come up with this much stuff."

I actually think theannoyingsite is a really good use case for browsers in the same way... Because evercookie does not work in any browser anymore, and it became a really useful tool to know exactly what to try to prevent... So I think you did a good thing here.

**Feross Aboukhadijeh:** Thanks. Yeah, I've actually had this type of thing happen to sites I made before, too. I made one that fills up your hard drive using local storage; it was filldisk.com. That doesn't work anymore, because browsers also used it in their testing. Yeah, it's actually good, I think, to actually push this stuff to its limits. Because I think there are some reasonable things that people can improve...

I was hoping maybe we could quickly go through just some of the APIs and have y'all guess whether they require user permission or not.

**Alex Sexton:** Yeah. There's like three levels, right? You can do it automatically, you can do it after user interaction, and then you need explicit permission... Maybe those are the three?

**Feross Aboukhadijeh:** Those are the three, yeah. So user interaction means any kind of event that is explicitly the users interacting with the site. So that doesn't include things like scroll or mouse move, because those are gonna happen way too easily... Just things like clicks, taps or key presses. So that's considered user-initiated gesture.

**Alex Sexton:** \[00:31:56.14\] Only because you mentioned it and it was super interesting when I saw you give a talk about this - you mentioned mouse moves just now... I did not know that if you move a browser window under someone's mouse... So technically, there's like a differential in the browser window and the mouse, that a mouse move is fired the same... Like, the mouse is not moving, the browser is moving... You said that a mouse move fires the same as if you were moving the mouse over it, and I just thought that was interesting enough to tell everyone.

**Feross Aboukhadijeh:** It's quite useful to know that. You can make a browser window follow the user's mouse around by using that trick. Anyway, so let's go through this... I'm gonna move pretty quick, because I have a decently long list here. Okay, so open a pop-up window.

**Alex Sexton:** That one's definitely a user interaction. That's the first user interaction. That's like the poster child of why pop-up blockers work on this whole thing of like an event must be explicitly tied, right?

**Feross Aboukhadijeh:** Yup, that's right. Okay, cool. What about if you want to vibrate the device? Actually make the phone vibrate.

**Alex Sexton:** I don't wanna be the only one answering, but that one's free.

**Suz Hinton:** Yeah, I feel like you need no permission for that.

**Feross Aboukhadijeh:** Yeah, that's correct, yeah. So actually, ads used to vibrate people's devices. I think they now restrict it to the top-level domain, but... Yeah, it's crazy.

Okay, next one - say you want to focus a windows. This is gonna be like a pop-up window that you've popped up in the past and you wanna focus it, bring it to the front.

**Alex Sexton:** Yeah, as long as you control it, there's no permission needed.

**Feross Aboukhadijeh:** Actually, you need to do that in the click handler, in my experience.

**Alex Sexton:** If you popped up the window in a click handler, then even to refocus the old one you need another click?

**Feross Aboukhadijeh:** Oh, I haven't tried that, but to refocus the pop-up window once the main window's been refocused - to go back to the pop-up and bring that to the front, that would require user interaction.

**Suz Hinton:** Interesting. I think I've seen that with PayPal, actually. There are times when the modal didn't work, and it was a pop-up instead, and then if you just refocus back, it would end up having to make you click to go back to it, and I remember that kind of loop, so it reminds me of that.

**Feross Aboukhadijeh:** Okay, what about copying text to the user's clipboard?

**Suz Hinton:** Uuh...

**Nick Nisi:** Gesture.

**Alex Sexton:** Yeah, I think that needs an action, right?

**Feross Aboukhadijeh:** Yeah, that's right.

**Suz Hinton:** That's still abused a lot though, because you know when you copy a paragraph from like a news website, and then when you paste it, they've inserted an extra bit into your clipboard? I hate that so much.

**Nick Nisi:** Did Flash have different restrictions with that? Like, could you do it without any kind of gesture?

**Feross Aboukhadijeh:** I believe that also required a gesture. Okay, what about reading off of the clipboard? So the user copied syntax from another program on their computer, and then they go to the site... Can a site read the text?

**Alex Sexton:** I think that's never, right?

**Feross Aboukhadijeh:** Not anymore, actually. There's a new API that lets you read it, but it requires explicit permission, of course, because you could have copied like a password or something, from another app.

**Alex Sexton:** What's the API?

**Feross Aboukhadijeh:** It's like Navigator.Clipboard-something... I don't remember. Okay, what about showing the print dialogue, like "Do you wanna print this web page?"

**Alex Sexton:** That one is free.

**Feross Aboukhadijeh:** How do you know all of these, Alex?

**Alex Sexton:** I'm just... Intuiting.

**Suz Hinton:** He's just very confident. \[laughs\]

**Alex Sexton:** Well, if you think about how print dialogues work, a lot of times you click on some link on a bank website and it brings you to a page, and then four seconds later a print dialogue pops up, right? So that just implies to me that there was no user interaction.

**Feross Aboukhadijeh:** Yeah, yeah.

**Alex Sexton:** But it stops everything, right?

**Feross Aboukhadijeh:** Yeah, so it freezes the event loop while the dialogue is open. And the other thing that's cool is -- well, depending on your definition of cool, but it actually prevents you from closing pop-up windows... Because what you can do is -- CMD+W is blocked; you can't intercept that and prevent that from closing the window, but you can open up a print dialogue when the user presses CMD, and then that will actually prevent the W from closing the window.

**Alex Sexton:** But then all your windows stop moving around the page, right?

**Feross Aboukhadijeh:** Yeah, that's the downside. Okay, what about turning on the user's flash?

**Alex Sexton:** The flashlight.

**Suz Hinton:** No idea.

**Alex Sexton:** I don't know this one. I assume user interaction, right? I hope.

**Feross Aboukhadijeh:** \[00:36:01.04\] No, user interaction -- I think that would not be enough, I don't know... So first you have to get camera permission, and then once you have a camera object, you can turn on the flash. It's more for like a camera app to be able to expose UI to the user to let them select the camera settings, like do they wanna turn the flash on, or change the zoom levels, and stuff like that.

Okay, what about triggering a file download?

**Nick Nisi:** No permission required.

**Alex Sexton:** It takes one interaction, but then after that it's free.

**Suz Hinton:** I don't think you need anything.

**Feross Aboukhadijeh:** Yes, Suz is right. You get one free file download... Because you've seen the sites that go 5, 4, 3, 2, 1, and then the file downloads. It's the same thing as what you said with print, basically. A new page can just do it. But only once, and then further file downloads need additional user interactions.

**Alex Sexton:** So I got it exactly backwards.

**Feross Aboukhadijeh:** \[laughs\] Yeah. I've got a lot more, but I don't know if we have time, so I'll just throw in maybe a couple more, the most interesting ones. Okay, so if a site links to your site, and someone clicks that link to load up your site in a new tab, so the linking site used target=\_blank, to open up that in a new tab, can your site navigate the site that linked to it? Like, take that tab to another location?

**Suz Hinton:** Yes.

**Alex Sexton:** It has access to the window object via the referrer, unless they used a noreferrer attribute.

**Feross Aboukhadijeh:** That's right, yeah. It's called window.opener, and it gives you a pointer to the window of the other tab. And fun fact - actually, both the tabs are gonna have the same event loop. You need the ability to access the other tab's window object synchronously, so the two sites on different origins are actually sharing an event loop.

**Suz Hinton:** Wow. This is a huge security hole as well. A lot of sites are vulnerable to this.

**Alex Sexton:** Yeah, this is why the redirect pattern is pretty common, to throw a middleman in between... Like, if you click on Slack, it's like slackreader.com/the actual URL, all that kind of stuff, just to make sure this never happens.

**Suz Hinton:** Same with Outlook, and a bunch of others.

**Feross Aboukhadijeh:** It's just surprising that you can combine all these things into one event handler. So the one click can do all the things.

**Alex Sexton:** I'll say kind of the meta-benefit of all this is that because this page is so annoying and bad, you can take other security vulnerabilities. So I try to report as many vulnerabilities as I can. A lot of times they're not that serious, like an open redirect, or something like that, on some web page. It's like "Oh, this allows me to put in arbitrary Javascript, which allows me to do a window.location, which allows me to link someone to a page or redirect them somewhere else", and a lot of times people are like "Oh, we don't consider that that harmful", or whatever. But then you stick theannoyingsite into the redirect, and they're like, "Oh, this is serious, because someone went to our website and now they're at this terrible, terrible website." So it actually has been helpful in people taking things like open redirects seriously, in my experience, in the two weeks I've been adding it into things, so... Good work.

**Break:** \[00:39:09.13\]

**Feross Aboukhadijeh:** Cool, so let's talk about our favorite weird website now. I wanna get into like the nostalgic, old web stuff, back when the web used to be weird, back when the web used to be mostly full of bizarre stuff... Maybe that stuff's still out there, I don't know, but it does certainly feel to me like the web is less weird than it used to be. Maybe that's just because -- and maybe there's more weird stuff, but maybe like the other kind of corporate, normal world internet is more present, so we don't see the weird stuff as much... I don't know, but anyway, weird website - let's talk about them.

I have a few that I remember that I liked a lot. When I was a kid in high school or middle school I remember Homestar Runner, Newgrounds, Albino Blacksheep... A lot of these flash sites where people posted animations and games. Man, I wasted so much time on those, specifically Homestar Runner and Newgrounds. They were just so delightful. I remember having so much fun... And yeah, the web couldn't really do anything like that back then, so everyone used Flash for that... And it was great, it meant that we had sort of like pseudo-video-type animations, and a ton of creativity just came out of that, I think.

Actually, I think people used to actually upload videos that were encoded in some really bad format, and played them back in FlashPlayer 2. So there were even videos; those were like early, early internet videos on some of these sites done via Flash.

**Alex Sexton:** Like Star Wars Kid, and all the originals...

**Suz Hinton:** Yeeees...

**Feross Aboukhadijeh:** Yeah...! \[laughter\]

**Nick Nisi:** I think it's really interesting - there was all this creativity back then with technology like Flash, that wasn't necessarily free or as open as the open web is now, and you could do a lot of this stuff today... Maybe I'm just old, but I don't see as much of that now, now that it's free and open and a much lower barrier to entry; you just don't see it as much, which is interesting.

**Alex Sexton:** Yeah, I guess you can just record a video on your phone and post it, rather than have to learn Flash in order to encode it and then upload it with its own custom UI.

**Nick Nisi:** Yeah, but including things like the cartoons on like Homestar Runner or Albino Blacksheep - I remember watching a lot of those, but I don't see a lot of HTML5 cartoons. I don't know if I've seen any.

**Alex Sexton:** Well, I mean, there's still plenty of cartoons on YouTube, right?

**Nick Nisi:** Yeah, that's true.

**Suz Hinton:** i think it's that classic form of like, you know, the existence of constraints is what forces people to be super creative; I think that's how that conversation right there can be summed up. I really enjoyed that time of the web a lot. I was a Flash developer, so I was so heavily inspired by David Firth, who made Salad Fingers and a bunch of others super dark Flash animation videos... And it made me want to be more creative with Flash, because you know, at the time I was a Flash developer making banner ads for the internet, and that was where capitalism really started ruining all of this creative stuff... So that was really good for me to have on the side, to push me to still do silly things in Flash at the time.

**Alex Sexton:** Real talk - did you make the Punch the Monkey to win a prize banner ad?

**Suz Hinton:** No, that was not me, and I feel like I sleep at night well, knowing that that wasn't me. \[laughs\]

**Feross Aboukhadijeh:** What was the worst ad that you ever made?

**Suz Hinton:** I made this thing and it was really awkward... It was like one of those Flash takeover websites, and it was like super interactive. There was all this video, and stuff, and it was called The Womb. It was just a really awkward theme, where there were these people covered in slime, lying on the floor, and there were these things floating around them that you had to click on, and it was just awkward...

**Feross Aboukhadijeh:** That was an ad? \[laughs\]

**Suz Hinton:** Yes, that was an ad.

**Alex Sexton:** Did everyone do Flash? Feross, did you ever do any Flash development?

**Feross Aboukhadijeh:** No, no, I never actually learned how to do Flash development. I didn't really do proper programming until later, and then I just learned Javascript. I did collect Flash though, Flash animations, and I put them onto a website that was kind of like a knockoff of Newgrounds. It was all my favorite stuff, just to rehost it basically.

**Alex Sexton:** \[00:44:07.08\] Actually, that's maybe a side conversation, but we were talking a lot about Flash, and I built some Flash stuff... I think one of my first real web pages was my sister's soccer team's web page, which was fully Flash, and I would go to the games and keep stats... That was like something to build a website for... But I pirated the entire Adobe suite and learned all that stuff as a young kid. I'm sure I downloaded like 1,000 viruses on my computer... But did you all start with legit copies of the Flash runtime, or Builder, or whatever, or did everyone pirate it? Is that everyone's history?

**Nick Nisi:** Yes. \[laughs\]

**Suz Hinton:** Once I got a full-time job, I did actually try, but in Australia if you wanted even Flash, it was $3,000. It was such -- and that's in Australian dollars, too... It was such an amazing amount of money, so I would say that there was a huge pirating scene in Australia, because if you wanted the master suite of Adobe apps, it was $10,000 at the time. This was back in 2004, so it was just a horrendous amount of money.

**Alex Sexton:** Even back then, it seemed like Adobe had to have known that every kid -- we were talking about free and open; I think Nick, you brought that up... I think at the level of piracy that was going on with Adobe, it was essentially free and open. Is that fair to say? Until Creative Cloud, that seemed like it was the case.

**Nick Nisi:** That's funny, because while I was saying that, I was thinking back to my time, like playing with Flash and those tools, and I totally got a pirated copy of that and I didn't even register that... That's how I got into it, too.

**Alex Sexton:** Yeah, let it be a lesson to people... Let kids use your stuff for free, and it will become ubiquitous, and eventually die. Suz, did you have more -- you brought up a bunch of Flash stuff. Did you have any other ones that you wanna bring up?

**Suz Hinton:** Yeah, I have one last website really quick. It's called procatinator.com. It essentially takes a gif of a cat, it full-screens it, and it finds a super-appropriate matching song to go along with it, and everytime you refresh the page or everytime you click the button for another cat, you just get another random one... And I just love it so much.

And if you wanna know my favorite one, it is cat124, which is a bunch of cats playing ping-pong, and the song is just the best match. \[laughs\]

**Alex Sexton:** To be clear, you memorized the unique ID of that specific cat?

**Suz Hinton:** Yeah, it's only three digits...

**Alex Sexton:** Sure, but still...

**Suz Hinton:** \[laughs\] Yeah, so cat124 - check it out. It's a great way of procrastinating, for sure.

**Feross Aboukhadijeh:** Nick, did you share yours yet?

**Nick Nisi:** Not yet. So I put two down. One was -- I can't even remember it... Ytmnd.com. I don't know if it was my favorite site, but everyone just sent these sites to everyone in school, all the time... And it was just these horrible sites that had repeating animated GIF backgrounds, and then auto-playing music, and they were just completely random... I never understood it, but they were fun, some of them. I can't think of a specific one, unfortunately. I don't even know if the site is still up.

**Alex Sexton:** Yeah. There was like a Sean Connery one that I remember, for sure... It stood for You're the Man Now, Dog.

**Nick Nisi:** \[laughs\] Wow, I never knew that.

**Alex Sexton:** I think it's a movie with Sean Connery. "You're the man now, dog!" That's the best I could do... You had another one, Nick?

**Nick Nisi:** Yeah, the milliondollarhomepage.com.

**Alex Sexton:** Oh yeah, I remember that.

**Nick Nisi:** \[00:47:52.20\] I remember when that was not completely filled out... So it was just a square of pixels, a million total pixels, and it was a dollar per pixel, and you could pay whoever hosted the website a dollar per pixel to own those pixels forever, and then you could put whatever you wanted up there. All of the ads that are on there I guess are from that era. I don't even know when it ended, probably 2004(ish).

It was pretty interesting, seeing that and just - a pretty cool idea, I thought... Like, "Wow, that's a really cool idea to cash out at a million dollars."

**Alex Sexton:** I don't know if you were the same as me, but as soon as I saw that, I'm like "How can I do something similar?" \[laughter\]

**Nick Nisi:** Exactly.

**Alex Sexton:** "What way can I get people to pay me a dollar for something tiny and useless, but becomes popular?" It reminds me a lot of Bitcoin, and altcoins.

**Feross Aboukhadijeh:** Actually, one of my friends has a million-dollar homepage type thing, but you pay with his cryptocurrency, so that's actually not too far from what people are doing...

**Alex Sexton:** There you go. That's how you buy in.

**Feross Aboukhadijeh:** I actually had an idea to do a million voxels homepage, instead of a million pixels. So you would buy voxels space in 3D, in a Minecraft-like world. So you go in and you could effectively be buying a plot of land, and that would give you the right to build on that plot of land vertically, underground and up to the sky, and then you could put whatever thing you want there, and make it link somewhere.

**Nick Nisi:** That's a pretty cool idea, and with A-Frame you could do it.

**Feross Aboukhadijeh:** Yeah.

**Alex Sexton:** I think I'm up next, yeah? Everyone else has gone. I have a few that I like; none are that cool. If anyone asked me to this day what my favorite game is - I'm not lying when I say this - it's the Helicopter Game. It's just the best game. If you just search for "Helicopter Game" - it's a Flash game. It still lives on some website; I don't think it's the original one it used to live on.

It's a game -- it's one button, usually a space bar or the mouse click, and it's just like the helicopter goes up whenever you click down, and then it starts falling whenever you unclick... And you just kind of have to navigate your way through. There was like a Spaceman or JetMan on Facebook; it got really popular like ten years after the Helicopter Game... Which is the exact same game, it's just a guy with a jetpack instead of a helicopter. I probably sunk hours and hours into this game.

The interesting thing was for a while "helicopter", if you searched for it in Google, the first result, untainted by my personal history with it, like the private window result for "helicopter" was "Helicopter Game", and then the Wikipedia entry for helicopters... Which I thought was pretty cool. I guess not to many people are wikipeding helicopters, compared to playing games.

As far as old internet videos, I think it used to be on one of the sites we already talked about... Maybe eBaum's World, which we didn't mention my name, but... History of the World - that was like, "Here's the Earth. See? Wrong. Pretty sweet Earth, you might say." I could probably recite the whole thing. That wasn't funny old video.

**Feross Aboukhadijeh:** Oh, no, no, no... That one was called "End of the World."

**Alex Sexton:** \[00:51:12.09\] End of the World, sorry, not History. Yeah, there's History of Japan, and End of the World, yeah. That's my bet. History of Japan is also very good, for what it's worth; not quite as famous, but somehow both informative and hilarious.

And then probably my last one as far as like actual weird internet - I don't know how this one has aged in the age of Alex not being in early high school or middle school anymore, so don't judge me if this is now a faux pas, but I really used to like Maddox's Best Page In The Universe. People would write him hate mail...

I think the one I remember was he was like the top 10 worst songs of 2003, and it was just every song on U2's album from that year, which was funny. \[laughter\] I don't know, he did a lot of things like that, and he was pretty funny to me as a young boy... Which I'm sure now reflects poorly on me, but... It's definitely a good part of the old weird internet.

It's still up. I think I recently saw him on Twitter. This week I found out he still exists, so... Maddox, The Best Page In The Universe.

**Feross Aboukhadijeh:** Cool. Well, on that note, I think we should say goodbye. Thanks for joining us, everybody. Next week we're gonna be doing an episode talking about Dojo, and Suz is hosting that, so it's gonna be awesome.

**Suz Hinton:** Yay! I'm really excited!

**Alex Sexton:** And we'll have Dylan Schiemann on, who is the project lead for Dojo. It was Alex Russell back in the day, but Alex Russell has since moved on to service workers and Google and stuff... But Dylan and I have an interesting history that I'll explain next week if I'm on the show. I like Dylan a lot; everyone should listen to that episode.

**Suz Hinton:** I think that means you're gonna be on the show, Alex, officially. Sorry to break it to you.

**Alex Sexton:** I'll up my pay by 100%. \[laughter\]
