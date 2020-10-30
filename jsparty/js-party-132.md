**Feross Aboukhadijeh:** Alright, welcome to JS Party! This week we have a very special episode for you, where we're gonna be talking about security, and we're taking JS Party to security school... So get ready for some schooling, everybody. I'm joined today by two wonderful panelists. First we have Divya...

**Divya:** Hello, hello!

**Feross Aboukhadijeh:** And we're also joined by Nick.

**Nick Nisi:** Hoy-hoy!

**Feross Aboukhadijeh:** Great. Excited to have everybody here. I thought we would start today by talking about one of the coolest security stories in the web security world. It's the story of the Samy worm, which was a worm that this guy made, and it was one of the early internet bugs related to MySpace, and it's one of the most famous stories in web security. So have either of you heard about this?

**Nick Nisi:** I have, yeah. It's pretty interesting.

**Divya:** I haven't.

**Feross Aboukhadijeh:** Okay, great. You're in for a treat. It's a pretty wild story. There's this guy, he goes by the name Samy, and he had made this bug on MySpace where he sort of realized that anyone who viewed his profile could basically insert some code into the part where you write about yourself, the bio section. So instead of typing about himself he would include a little script tag. And he realized he could actually cause anyone viewing his profile to friend him. He wanted to become the most popular guy on MySpace, get everybody to friend him. So he did a little write-up while he was doing this; he sort of blogged, or... I guess Twitter wasn't around then, so he sort of had these little updates he was writing, where he explained what was going on, and it's really quite funny to read through... So I thought I'd share some snippets from his journal as he was doing this bug...

**Nick Nisi:** But I think that the more problematic thing beyond just friending him is after it would automatically friend you with him, it would post on your MySpace page "Samy is my hero." So it was just like this virus that went everywhere.

**Feross Aboukhadijeh:** Yeah. Actually, still to this day, if you search "Samy is my hero", you'll actually find random -- because MySpace is still around, by the way, in case you didn't realize. I actually went and logged into my old profile. There's still some random pictures from middle school Feross or high school Feross on there. But yeah, you'll still find people's profiles that say "Samy is my hero", because even after all of the aftermath of this, they never managed to fully clean up that string from their database.

\[00:04:11.04\] Let me just share some of the bits from his story. "Anyone who viewed my profile who wasn't already on my friends list would inadvertently add me as a friend, without their permission... And I can propagate the program to their profile, can't I? If someone views my profile and gets this program added to their profile, that means anyone who views their profile also adds me as a friend, and hero. And then anyone who hits those people's profiles add me as a friend and hero, and so on."

So as you can see here, it's gonna probably not end well. So he started with 73 friends, and that's when he released it. An hour later he had received one friend request. So somebody viewed his profile and got this code running on their browser and it caused them to friend him. So not too impressive so far.

But then, seven hours later, he checked it again and realized he had 221 friend requests, so way more than he expected, and he was kind of surprised that it worked. The 200 people infected in eight hours. So then he was like "Okay, cool, so I have 600 new friends every day." That's how growth works, right? Except for he didn't realize -- I mean, it's obviously exponential growth here, so an hour later ne ended up having 480 friend requests. So "Oh, Snap!", right? An hour after that he had 561 friend requests, and now he's getting messages from people who are upset that they friended him and they don't remember adding him, so now people are starting to email him.

Three hours after that he has 6,300 friend requests. Now he's starting to get scared, so he tries to go and cancel his MySpace account. It's getting out of control. People are messaging him saying that they're reporting him, because he's hacked them, and they're upset that his name is now listed in their heroes list on their profile. People are trying to delete him... So they delete him from the friends list, but then they visit someone else's profile and they're immediately reinfected, and they add him again. So now he's getting really worried. He's like "Oh, snap! This is totally out of control."

Okay, five hours after that he goes to his profile again, kind of hesitantly at this point, and views the friend request and sees that he now has 917,000 friend requests...

**Divya:** Wow...

**Feross Aboukhadijeh:** He refreshes three seconds after that and now he has 918,000 friend requests. Refreshes three seconds again later, now he has 919,000 friend requests. A few minutes later he refreshes and he has 1,500,000 friend requests. So it's literally going up second by second. In less than 20 hours he hits a million friends.

**Divya:** That's crazy...

**Feross Aboukhadijeh:** Yeah, and the crazy part is every single one of these requests is a unique logged in live user who was browsing MySpace at the time, and triggered this code to run on their browser to friend him. Pretty wild, right?

**Nick Nisi:** It's crazy. And the weird thing to me is didn't he get in trouble for that?

**Feross Aboukhadijeh:** Yeah, I think so... You know, actually, I can't remember the conclusion of this. Did he get in trouble?

**Divya:** I think he did. When I just looked it up, it seemed like the secret service showed up at his door.

**Feross Aboukhadijeh:** Oh, my God... \[laughter\]

**Nick Nisi:** But if I remember MySpace correctly, which I may not at all - didn't they encourage you to customize your profile by injecting CSS into it? That was not just an unknown vulnerability, it was part of MySpace, customizing it to your heart's content... So I really feel like he shouldn't have been that much at fault. Yeah, it got out of hand, but it wasn't his fault that it propagated like that...

**Feross Aboukhadijeh:** Yeah, I don't think they wanted you to type scripts in... I'm pretty sure they tried to stop scripts... But the CSS and all the other customization - I agree. I remember those days, it was really cool. You could try to make your profile stand out, and people learned HTML and CSS in order to make their profile cool. It was a real reason to learn to code. I remember that.

\[00:07:53.09\] Then what happened though - so the story continues, actually... So an hour after he hits a million friends, he actually realizes that -- a friend contacts him and says "Hey, I can't actually see my profile anymore, or anyone else's profile, or anything. The site seems to be broken." Messages start appearing on other websites, where people are talking about how MySpace is now down for maintenance. Everyone at MySpace is working on getting the site back up... Now he's like "Oh, snap! Should I drive to their office and apologize to them? I think I broke the website." \[laughter\]

Two or three hours after that the site seems to be back up, but all the code is gone... But the string "Samy is my hero" is still on everyone's profiles.

**Nick Nisi:** That's awesome... \[laughter\]

**Feross Aboukhadijeh:** Yeah, so they probably did some kind of regular expression search across their whole database to remove this code and clean up their site... But do you have any thoughts on why the site went down because of this? You wouldn't think that just a couple hundreds of thousands of friends requests would cause a site to go down... Yeah, I don't know. They actually never wrote a post-mortem about why that actually took the site down.

**Nick Nisi:** Yeah, I don't know... The immediate thing that comes to mind is maybe it's exponentially growing in the number of friend requests, and maybe those writes to the database of "Add friend, Add friend, Add friend" might have something to do with it.

**Divya:** Yeah, like a recursive thing that just totally--

**Nick Nisi:** Yeah...

**Feross Aboukhadijeh:** Or maybe every time they added him as a friend, they would have to search through all of his friends to make sure that they're not duplicated... There's some kind of O(n) operation or something like that. Or maybe even people who already had him as a friend were still making those requests to friend him, so it was just causing extra requests on every page load, maybe...

**Divya:** Yeah.

**Feross Aboukhadijeh:** Anyway, it's a pretty wild story... I just like that story because it's a very good intro to what XSS is. The way to summarize it is sort of like something that is input from the user gets combined with something that is code from the website itself. And when you're combining user input and you're combining code, it's possible for that user input to be actually interpreted as part of the code, rather than as really clearly user input. So this happens a lot in HTML, and in fact, actually -- I don't like the name cross-site scripting or XSS, because it's actually just a very weird name. What really is going on here is -- it should be called HTML injection, because really what you're doing is you're somehow causing new HTML tags to get added to a page, when really the site author, the person creating the website was intending for that user input to be just a string.

Literally, what they were doing is they probably had like a &lt;p&gt; tag for text, and they were going to paste whatever the user types into the little box for their profile information... And instead, the user typed in some HTML tags, and then that got pasted in there, and that became HTML tags that the browser interprets as code to run, basically.

And the browser has no idea that that text came from the user, because when a server sends the page down to the user, they're sending this combined blob -- it's sort of a page that's composed of text and content from all kinds of sources, and it comes down as this one unified thing; this is the page. So the browser doesn't know "Oh, this came from the user, I shouldn't run it." So that's actually the server's job, to make sure that that user input doesn't get treated as code, or doesn't get combined into the page in a way that the browser will be confused and think that it's code.

**Nick Nisi:** Yeah, I actually have a kind of similar, but much smaller-scale Samy-style story that I did in college...

**Feross Aboukhadijeh:** Cool, let's hear it.

**Nick Nisi:** I was specifically taking a computer security class... I made a page that I was using cross-site scripting to inject code into the page, and basically what it was doing was it was assuming that you were going to visit this page while you were logged into Facebook. And so it would actually load Facebook in an iFrame, and then it would use JavaScript to keep that iFrame always under your mouse, just once, so that you click it and it was specifically clicking in that iFrame on the Add Friend request, to add me as a friend on Facebook, back when I had a Facebook account.

\[00:12:08.02\] So it would do that, and then you click, it adds the friend and then the iFrame disappears, and then you can click normal. So at most you just have one erroneous click that you think "Oh, it didn't register for some reason", and you click again and then everything works. And it was for a small site... People who were in that class visited it, but it wasn't open to the wider world; it wasn't like a MySpace, where I would have taken down the internet with that, or anything. It was just a couple of people in the class that clicked it... But it's kind of using that, plus - I think hovering the iFrame under there is called clickjacking, so it was using those two combined to exploit that and add me as a friend.

**Feross Aboukhadijeh:** That's super-cool. So it was literally an iFrame of the Facebook site, and then no matter where you moved your mouse, you made it so that if they clicked it would click the button you wanted.

**Nick Nisi:** Right.

**Feross Aboukhadijeh:** But you made it invisible, so they didn't know that that would happen, right?

**Nick Nisi:** Yeah, that's the other part. The opacity was at zero on it, so it was completely invisible. I don't even think that you can do that really with browsers anymore. I think they guard against that a little bit, maybe by not letting iFrames be completely transparent... But I could be wrong on that, too; I haven't looked at it in quite a while.

**Feross Aboukhadijeh:** Wow, that's pretty wild. It's really surprising that -- so this must have been pretty early, because that's like a pretty basic security thing. Most sites these days that are worried about this sort of thing, or that have any kind of user login, will make sure that they can't be framed. If your site can be framed, then you open yourself up to this type of clickjacking attack, because that means an attacker can just frame your page and move you around the page, put you under the mouse of the user, all these kinds of things. So this must have been pretty early.

**Nick Nisi:** This was probably 2006-2007... So yeah, pretty early on.

**Feross Aboukhadijeh:** Okay... Wow. Really cool. Yeah, so it's kind of interesting, because -- I mean, both of these things raise a question about why is the browser allowing this to happen? Why doesn't the browser do something to stop both the Samy attack and the Nick attack? Because you might think "Why should a site be allowed to frame another site? Why should a user be allowed to get their code into a site?" So I thought it would be useful to maybe go over the same-origin policy and just review that, before we talk a little bit more about the different types XSS.

I had a little quiz I wanted to give you guys... So it's quiz time! Even though we haven't even talked about this, I'm gonna quiz you already. \[laughs\] I wanted to ask you about the same-origin policy. Let's start really simple - is site A allowed to link to site B? Say we have two different sites... Can site A make a link to site B?

**Nick Nisi:** Yes.

**Feross Aboukhadijeh:** Yes. Okay, good. Divya, your answer is also yes...

**Divya:** Yeah, yeah.

**Feross Aboukhadijeh:** Okay, good. I'm insulting your intelligence. \[laughter\] Alright, is site A allowed to embed site B, in an iFrame?

**Nick Nisi:** Yes.

**Divya:** I think so...

**Feross Aboukhadijeh:** Okay, yeah. Because there's actually ways for sites to opt out of this.

**Nick Nisi:** Yeah, it's like frame-busting. Is that what it's called?

**Feross Aboukhadijeh:** Yeah. You can do frame-busting, which is where you literally write code to detect that you're not the top frame, and then you can sort of like refuse to load your site, or cause a blank screen to load, or something, that way you can't be framed... But the proper way to do that is actually to include an HTTP header that just says to the browser "Please refuse to put me in a frame", and then the browser can enforce that really perfectly.

There was actually a research paper that somebody did, where they figured out that every single person's frame-busting code was actually broken, so there's no way to correctly detect that you're in a frame if you're trying to do it with JavaScript. Because the outer frame can sort of lie to you about the world, or trick you, or load you in a certain way... So you actually have to use that HTTP header to make sure that you're not framed.

Okay, next question - is site A allowed to embed site B and modify its contents, so modify site B's contents?

**Nick Nisi:** No.

**Feross Aboukhadijeh:** No. Okay. Intuitively though, why is that?

**Nick Nisi:** They're loading different realms, and you can't access code from a site that's not the same domain, and port... I don't know exactly what that's called, but...

**Divya:** Yeah. My assumption was the same. You're allowing it to load content, but nothing else. So you just pull content, and not running scripts, or anything like that.

**Feross Aboukhadijeh:** \[00:16:16.16\] Totally, yeah. So you can't actually reach into the page's DOM and change it.

**Nick Nisi:** You can though, if it's on the same host and port and everything.

**Feross Aboukhadijeh:** Oh, correct. Yeah, that's right. Cool. That concept of host, the protocol and the port is called the origin. So if two sites have the exact same protocol, so if they're both HTTPS, or both HTTP (that's the protocol), if they both have the same hosts, so they're both the same domain name, so example.com, or something like that, and they have the same port - port 80, or port 4000, or whatever port - if all three of those are the same, then the sites are on the same origin, and that means they're basically the same sort of security realm or security context, and they can do whatever they want to each other. The browser just thinks that they're the same site, basically.

Okay, I have a couple more, and then we're gonna go to a break. The next one I have is "Can site A submit a form that posts to site B?"

**Divya:** Um, yes...?

**Nick Nisi:** Yes...?

**Divya:** I assume yes. \[laughs\]

**Nick Nisi:** \[unintelligible 00:17:11.00\] back in the day?

**Divya:** Yeah, exactly. It's what I assumed.

**Feross Aboukhadijeh:** Yeah, that's right. So that's good. Yeah, it totally can. It's kind of weird though, if you think about it. Whenever you go over these things, you wonder "Who made all these rules?" Why are certain things allowed? Why can I embed an image and send a form to a site? It just seems like this weird collection of things that are allowed and things that are not allowed. It's really fascinating what ended up being allowed and what didn't.

Okay, next one... Can site A embed a script from site B?

**Divya:** I did not think so. That was my assumption. My assumption was that you would pull in the script and then you would have to eval it \`eval\` it almost in order for it to run... But I don't know. So my answer is "I don't know."

**Feross Aboukhadijeh:** So Nick, what's your reasoning?

**Nick Nisi:** If you've ever seen an advertisement on the web, it's pulling in a script from somewhere, right? Or way back in the day, everybody pulled down the same CDN copy of jQuery and put it in, right?

**Feross Aboukhadijeh:** Yeah. So the way I worded it is maybe kind of confusing... So really what's going on is you're downloading the script from another site, but then you're actually running it in the context of your site. So site A can say "I wanna load site B's script", but it runs in site A... So really you're just taking site B's code and you're running it in site A. So you're not actually getting access to site B's variables, or site B's data.

**Divya:** Okay, then in that case yes. I think I misunderstood.

**Feross Aboukhadijeh:** It's my fault, I didn't explain the question. So yeah, scripts are allowed to be executed in different environments. Okay, and then my last question is "Is site A allowed to read data from site B?" I guess I should clarify what that means - 'read data' means could I hit a JSON endpoint and then read the response? Or another example would be "Could I embed an image from another site?" So could site A embed an image from site B, and then look at the pixels, or look at the bites in that image and read them?

**Divya:** I would say yes.

**Nick Nisi:** Yeah.

**Feross Aboukhadijeh:** The answer is yes?

**Nick Nisi:** Yup.

**Feross Aboukhadijeh:** Okay. To also clarify, this is by default. So without this site B opting in. Your answer is yes...?

**Divya:** Yes.

**Nick Nisi:** Yeah.

**Feross Aboukhadijeh:** Okay. That's wrong.

**Nick Nisi:** No, no...

**Divya:** \[laughs\] I'm gonna stick with yes, because I assume that's the case... If it's on the same origin...

**Nick Nisi:** Well, it wouldn't be. It would be cross-origin, which - you can do that, but it's opt-in. But then there's also -- JSONP is the way I was thinking about getting around that... But site B has to opt into that, because they have to understand the JSONP request, right? So... No, you can't.

**Feross Aboukhadijeh:** \[00:19:49.12\] Right, yeah. So it's "No, you can't." The way to think about this one is just imagine - if I could make a request to Gmail.com/emails.json, and that's gonna return me all the emails in my inbox. It wouldn't be good if another site could make that request, and then read your emails out. So that's gonna be blocked.

So yeah, I think -- it's all very confusing about what's allowed and what's not, and it seems like people just sort of figure this out as they use the web more and more. But when we come back after the break, I'll try to explain a little bit about the underlying principles about why are certain things allowed and why are certain things not allowed, and try to make some intuitive sense of it for everybody. So we'll be back after a quick break.

**Break:** \[00:20:36.21\]

**Feross Aboukhadijeh:** Alright, so welcome back for this next segment. I thought we'd talk a little bit about what is allowed by the browser by default and what is not, and how can we intuitively think about that. How can we have a real intuition about whether something is gonna be allowed or not?

I think there's two concepts that are really useful to know about in this area. One is this idea of -- it's called ambient authority. What that means is the browser will do this thing where if you have cookies for a site, the browser will send those cookies with every single request to that site automatically. Say that you go to log into a page somewhere, on some site. You log in, and the way that that login is implemented is the server sends back a HTTP response to your browser and tags that response with this HTTP header that says "Browser, please set some cookies, and please remember this key and this and this value."

And then the browser's job is on all future requests to the same site, it's supposed to attach a cookie header with that same key and value. This is useful so that you don't have to log in on every single page that you go to on a website. So instead of you repeatedly having to log in to authenticate all your requests, your browser just attaches this cookie, and then the server sees the value of that cookie and then knows that "A-ha, this is the same person who logged in before", and that saves you from having to repeatedly type that username and password in on every single page.

That idea is called ambient authority, because basically ambiently, automatically, in the background, your browser is helpfully attaching cookies to every single request that comes from your browser... Whether you know it or not, that's what it's doing. And this model is actually really powerful, because it enables these modern sites we have, where you can log into stuff and you can have this sort of dynamic interaction with a site over time, instead of it just being this sort of completely stateless request-response that has nothing to do with each other. You can kind of have a session. So it's pretty powerful.

But unfortunately, this enabled a bunch of other bad things that we don't like, like tracking across the web... That's how ads track you, is by giving you cookies. And then also, it enabled a whole bunch of security issues. The security issues come from the fact that if somehow an attacker can get your browser to issue a request to a site that you're logged into, then your browser will helpfully attach your cookies to that request. So even if that request came from an attacker, and the attacker caused your browser to send this request to some site, like your bank, your browser is gonna go ahead and just add those cookies to the request, and then your bank is gonna see this request and think "A-ha. That's my user. I know who that is." The bank is gonna think that you did that request.

\[00:24:04.28\] So it's actually quite dangerous now, and now we have to really worry about the fact that any random site on the internet might cause our browser to make a request to our bank, or to our email provider, and our browser is gonna attach our cookies, and then the provider is gonna think it came from us.

If you think about it, that's kind of what happened in Nick's attack, where Facebook had no idea that this friend request was coming from an invisible iFrame that tricked the user... And in the Samy case, the request to add him as a friend came from some JavaScript code that Samy wrote, and again, MySpace had no way to know that it was coming from there.

In the more general case, if you think about a form - we mentioned earlier that a form can be posted to another site, so that means in theory I can make a site that has a form that has a field for like "A million dollars to Feross", and then I can get you to click that and submit that to your bank. And then if you're logged into your bank in another tab at that time, then that request would include your cookies and the browser would see that you wanna send me a million dollars. That's the problem that comes with the way cookies worked by default. Does that kind of make sense?

**Divya:** Yeah.

**Nick Nisi:** Yeah. It's terrifying.

**Feross Aboukhadijeh:** Yeah. That's one concept that's useful, and we'll maybe get to the other one later. I guess more on that - there's some solutions to this now... Have either of you heard of same-site cookies? Chrome's been making a lot of noise about that recently...

**Divya:** Yup.

**Nick Nisi:** I haven't.

**Feross Aboukhadijeh:** Okay, so Divya, what do you know about same-site cookies?

**Divya:** That it disables third-party usage for specific cookies, or something like that... So yeah.

**Feross Aboukhadijeh:** Yeah, that's basically right. It basically turns off all the things I just said. It makes it so that the cookies only get attached by the browser to requests that are coming directly from the site itself. So if you're on your bank site, and that causes some code to run that causes a request to go to the bank, then the cookies will get attached. But if you're on my website, my blog, and I cause a request to go to the bank, it's not gonna include the cookies. That actually solves a whole bunch of issues... Stuff like Cross-Site Request Forgery - that's where forms get submitted to other sites; that can't really happen. The form can still get submitted, but your cookies won't be attached, so you won't be authenticated and you won't be able to do anything... So that's kind of cool.

We talked about ambient authority - that's the idea where the browser adds these cookies to any request coming from a certain site, and going to that same site... And that behavior is really the reason why XSS is dangerous - because you're getting this attacker code getting added to a page, and then that code is taking actions on behalf of the user who's logged in... And the server has no way to tell that that behavior is coming really from the attacker's code issuing actions on behalf of the user. Because from the server's perspective it just looks like any other request.

So there's a few ways to try and stop this, and we mentioned one of them already, which was same-site cookies... And another one is - have any of you guys heard of HttpOnly cookies? Maybe your framework provided an option to configure this. I know Express has an option for this, for example... Ringing any bells?

**Nick Nisi:** Not to me...

**Feross Aboukhadijeh:** So if you haven't messed with this option, you might already be using them and not know, because it's sort of the default. This is one of the reasons why frameworks are useful - they can give you good defaults, so you don't even need to know all these security details that are not that fun.

**Divya:** Is that where you do the set cookie thing in the header, or am I off-base?

**Feross Aboukhadijeh:** Yeah, so that's where you actually would set this option. When you send the set cookie header to the browser, that's when the browser says "Oh, the server wants me to add a cookie", and then in there you can add a little option called HttpOnly. That's really useful to do, and it's really highly recommended to do for all of your cookies.

\[00:27:58.15\] The browser is gonna do its thing, where it sends the cookies to the server with every request, automatically... But it also does this other thing where you can access the cookies from JavaScript. So if you've ever used document.cookie to see the cookies that are in your browser, to set the cookie as an HttpOnly cookie, that means it's not accessible to JavaScript. It's only sent over HTTP to the server, and that's done by the browser.

So as far as your JavaScript is concerned, that cookie doesn't exist. It's invisible. That's pretty useful for XSS, because if you think about it, now the attacker's code is running in your site, but there's no way they can see the user's cookie. So it's still kind of bad, they can still do a lot of destruction by doing stuff as the user, but they can't steal the cookie and then use it later.

**Nick Nisi:** Nice. I did not know about that.

**Feross Aboukhadijeh:** Yeah, it's pretty useful. I think most frameworks are gonna set that by default. That's the thing about this security stuff - there's all this random, arcane things that you need to know, so it's really helpful when a framework can just help you do the right thing and you don't need to know about it.

**Nick Nisi:** I hear that it's always good to just write your own framework, because then it's obscure and nobody knows what's actually happening... \[laughter\]

**Feross Aboukhadijeh:** Yeah, I mean, that's one approach... How has that worked out for you so far, Nick?

**Nick Nisi:** Great... \[laughs\]

**Feross Aboukhadijeh:** What's the URL of your website again?

**Nick Nisi:** I did have to remove Bitcoin mining from there, I'll be honest... \[laughter\] Unrelated to that. It was just a static site, but...

**Feross Aboukhadijeh:** Whoa, how did that happen? We've gotta hear that story.

**Nick Nisi:** I'm sure it was just because I didn't have passwordless SSH set up, like with a key, and I was running on the standard 22 port for SSH, and it wasn't that hard of a password, so... Yeah, that's probably why.

**Feross Aboukhadijeh:** Nice. \[laughs\] Yeah, so everybody should try to go to Nick's site after this and see what other interesting security mistakes he's made.

**Nick Nisi:** I set up all of that and I set up IP tables to drop everything, except for very explicit ports, and things like that, so... Hopefully it should be good now.

**Feross Aboukhadijeh:** \[laughs\] Yeah... I'm just kidding, of course. Okay, so we do HttpOnly cookies. That's great. Now, if we get XSS-ed, the attacker can't see our user's cookies. But there's one other thing we like to do - wouldn't it be great if there's some way to just make it so that when an attacker gets their code into our HTML, that it doesn't do anything, it's completely inert? That's actually possible.

This is a thing called Content Security Policy (CSP), and I have to apologize in advance for all the acronyms, because the security world loves acronyms, and there's so many acronyms... But CSP is maybe something you've heard of. It's mostly known for being too complicated actually, and people are afraid of it and don't seem to wanna use it. But I'm here to tell you that it's actually great... It can completely solve XSS for you on your site.

Basically, it's a way that you can tell the browser - using an HTTP header, you can say "Hey, my JavaScript on my site will never do these things. So please, if you ever see it trying to do these things, then block it." So you can sort of upfront just say "Hey, there should never be code on my site that's gonna talk to any of these other domains." You could say "My site only talks to the GitHub API and to this other API (maybe Google Analytics, or whatever) and no one else." So if some attacker includes some code in your page and you happen to get attacked in this way, the attacker's code won't be able to talk to their own server, for example. They would only be able to talk to sites that you specified. So that completely makes their attack way harder... Because now, for example, they can't really exfiltrate the data that they're stealing from your users to their own servers. They're limited to just doing things to the page itself, for example.

\[00:31:56.04\] And there's a whole bunch of different things you can do. It's not just about what servers your site can talk to, it's also things like -- you can say "My site doesn't use Flash, so just don't allow Flash embeds. If anyone is doing Flash, just don't allow it. It's a mistake." You can say "Don't allow media elements. There's no audio on my site. I don't wanna allow that entire feature, basically." Or you can say "I don't do in-line JavaScript, so I don't have in-line script tags. We only have external script tags", so now an attacker can't sneak a little in-line bit of code there onto your site. That's what CSP is all about.

And then the other place you might have seen it is Chrome extensions. Chrome extensions actually force you to not include in-line JavaScript, and they do that with the CSP. So they say "You're gonna build your code this way, because we think it's safer", and they actually enforce it on your extension using this CSP stuff.

**Divya:** I've encountered CSP a couple of times, and purely from -- if I'm on CodePen and doing something, and I wanted to get data from a gist, you can't do that in CodePen because they have a CSP that basically disables the ability to pull content from GitHub, or wherever... So that's always an issue. It ends up being just problematic, because oftentimes when it's like I have this giant GeoJSON piece of data in a gist, and I wanna just pull it really quickly and I can't do that, I have to basically copy it into a CodePen and then embed a CodePen in my CodePen to get the data... And even then, that's a very roundabout way of doing things. So yeah, you can't just fetch data externally when using CodePen.

**Feross Aboukhadijeh:** Wow, that's wild.

**Nick Nisi:** From the Chrome extensions side of it, could you explain that again, how it enforces that? Because I feel like I've injected scripts into pages before...

**Feross Aboukhadijeh:** So when you do that, are you injecting a script that refers to a JS file that's in your Chrome extension, or are you straight up putting in an inline script, where the code is in the script tag itself?

**Nick Nisi:** I've injected script tags. I think that's the way that I usually go - I'll inject a script tag that sets a source, and pulls down a script from somewhere else.

**Feross Aboukhadijeh:** Right. Yeah, that would be allowed by Chrome's CSP policy.

**Nick Nisi:** Okay.

**Feross Aboukhadijeh:** What they don't want you doing is doing script without the source, and just putting code in there.

**Nick Nisi:** Oh, okay.

**Feross Aboukhadijeh:** The reason why that's bad is because if you're doing that, then the scope of the variables that you're creating are gonna be accessible to the JS that's running in the page itself. So if there's anything that you're doing that's privileged, now you're potentially exposing that functionality to the ads that are on the site, and all the other code that's on that site... So they want it to be off in its own separate context.

**Nick Nisi:** Gotcha.

**Feross Aboukhadijeh:** That's probably where some people have seen CSP. The other thing you can do with CSPs - you can say for example no eval-ing is allowed. So if anyone tries to run \`eval\`, you can just say "Don't let that happen, because that's kind of a wildcard. We don't know what's gonna happen when stuff gets eval-ed." Eval is evil.

**Divya:** But within Chrome extensions there are ways in which you can modify the policy, or like to what extent... Isn't that an ability to do -- like, similar to how in frameworks you'd dangerously set HTML, I think in Chrome don't you have a way of doing it where they prefix it with "dangerous" or "unsafe", or something like that? ... in your policy, so you can say "Allow \`eval\`", for example, I think...

**Feross Aboukhadijeh:** That's possible, yeah. Are they letting you change the CSP in your Chrome extension?

**Divya:** I'm looking at the extensions docs now, and they say that there's a way in which you can change the policy. Obviously, you can't do everything, but I think in your manifest.json you can add content security policy as one of the attributes, and then add whatever you want to add to it... So I think unsafe-inline is one, whatever else you want it to say, which is like "Make sure that this is a thing you can do." I think unsafe-eval is also another one. I don't know the extent in which you can do that though. I think it has to be your code though; it can't be like -- yeah...

**Feross Aboukhadijeh:** \[00:36:17.04\] If you add unsafe-inline or unsafe-eval, then you've kind of made the whole CSP not that useful though... Because that's like the main thing you get from it, is that you make it hard to do XSS. But if you allow unsafe in-line or unsafe-eval, you're basically saying that any scripts that end up in the page are just gonna run, so...

**Divya:** Yeah. I don't know to what extent - if it totally allows you to do anything, or if there are restrictions... I have no idea. I just looked at it...

**Feross Aboukhadijeh:** Cool. So yeah, CSP is cool... I have actually deployed it myself on BitMidi.com, which is the site I was working on a little bit last year, and I've found that the thing that makes it hard to deploy is you have to really know in advance all the domains that your site is gonna contact... Because you're including this list. The idea is you're trying to make the posse as restrictive as possible, and then only allow the things that you know that your site is gonna do.

I blocked Flash, and I blocked basically any feature I wasn't using, and then I said "I know that I'm using Google Analytics, and I'm using this API or that API", and I allowed all that stuff. And then I disabled a whole bunch of all the other things I could disable.

But the thing that makes it really tricky is that you can have a script that you -- say I know that I'm using Google Analytics, so I allow that... So now my browser's gonna let that load. But then say the Google Analytics script itself injects another script, and that script comes from a different domain that I didn't know about or I didn't allow... Well, that's gonna get blocked, and it's gonna break. So you have to know not even just the things you are depending on, but you have to know the stuff that it might include, and the images that it might load from other domains. You have to list all that out. So it's very fragile, in some ways. If Google changes their script, then my site will now not allow it to work... So this is why people have been relatively hesitant to deploy CSP in the past.

**Nick Nisi:** That seems like a good feature though, rather than like a problem with it, because -- I don't know, I feel like Google Analytics for example is a well-known, possibly well-trusted source for a third-party script to come from. So if anything, it would have a list of everything that you need to add in your content security policy to make it work properly... But it will help you prevent accidentally allowing a third-party script just because you trusted one source that you thought you could trust.

**Feross Aboukhadijeh:** Yeah, that's a good argument. You might argue that if Google changes their script to start talking to other sites, you might wanna know about that and have to explicitly allow it before it works.

**Nick Nisi:** That's true. It does force you to keep up on the docs of that... Of Analytics, in this case.

**Feross Aboukhadijeh:** Mm-hm. There's actually an approach now that is in most of the modern browsers, that makes this easier to use, and I wanted to mention it. It's called strict dynamic, and it's basically a way where you can say "I trust this one script" - say I trust Google Analytics; debatable whether I should do that, but say I do... Then maybe I don't wanna have to figure out all the things that they're gonna include. And the other thing that's confusing is maybe they only include certain resources for certain users, so now I might even be able to enumerate all the different domains that it's gonna talk to.

So maybe I just wanna say "Look, I trust this Google script. Let it do whatever it wants. Whatever it trusts, I will implicitly trust." And you can do that by saying basically this keyword called "strict-dynamic", and with that you can say -- the way it works is rather than enumerating all the domains that you're gonna load stuff from, you can use this thing called a nonce. In your HTTP response you say "I'm gonna just add this random thing called a nonce", which is just a random string of numbers and letters that's unique for every request, and then that tells the browser "Anytime there's a script tag, and that script tag says "nonce= " and it's that same nonce, then that means that script tag must have been generated by the server, and not by an attacker. Does that make sense?

\[00:40:09.21\] Basically, the server makes up this nonce thing, and it tells the browser that in the HTTP header, and then it says "Now I'm sending you a page of all these script tags and different things, and all the script tags that the server definitely meant to put there are gonna have that same nonce set. But if an attacker managed to get their script tag into the page, there's no way the attacker could know what the nonce was, because the nonce was only in an HTTP header, and the attacker has no way of seeing that, because it's different for every request."

**Divya:** That's cool. I did not know about that.

**Feross Aboukhadijeh:** Yeah, it's pretty cool. Anyway, if you're having trouble deploying CSP, I highly recommend taking a look at that. It makes it a lot more practical, and it makes it so that you can actually get it right, without having to guess and to maintain these long lists of domains.

The other thing I've seen a lot of sites do wrong when they're trying to deploy CSP, too - it's pretty funny, there are sites that just end up listing so many domains in their CSP,leaving less things like those JavaScript CDNs, they'll let code come from a JavaScript CDN. The problem with that is those CDNs are hosting everything on Npm, so if you're an attacker and you wanna run code and you figure out how to get your script tag into this victim website, then all you need to do to run your code is you just put something on Npm, the CDN will host it, and then you can just refer to it and they're gonna allow it. So you can't allow a source where anyone can publish code to it, or else it's not doing you any good.

**Nick Nisi:** These days it might just be easier to get your malicious code into the Npm module...

**Divya:** \[laughs\]

**Feross Aboukhadijeh:** Yeah, that's a whole other story though...

**Break:** \[00:41:37.12\]

**Feross Aboukhadijeh:** Now we're gonna do a little segment where we just share a whole smattering of random security things. We're gonna share some security stories, and Divya is actually gonna tell us a little bit about one of her favorite security podcasts.

**Divya:** Yeah, so I listen to a podcast called Darknet Diaries. It's really fascinating, because in my day-to-day I don't deal with a lot of security issues as a frontend developer; that's not something -- I think in general, a lot of the times as a frontend developer you don't really deal with a lot of security things... So I listen to it -- it's kind of a guilty pleasure, just to listen to what happens in the black/white-hat world. And there's actually an episode in March, I think, where they talk about Samy... I didn't realize, because I have not been updated on listening to podcasts, now that I don't go anywhere.

It's really cool, because you get to hear about different things, like security vulnerabilities that you might not have heard of... And just hear the inside story, because it's not just talking about the vulnerability that happened, but it's also the story of the person, the hacker themselves... And I think it humanizes them, because oftentimes when you read stories about things that are hacked... For instance, I read Krebs on Security, Krebs on Security -- he's a journalist, Brian Krebs, and he talks about the vulnerability and sort of the solution; what happened, as well as the resolution... So there's not a lot of focus on the hacker themselves, and oftentimes -- I mean, because he is a security researcher, the hacker is always shed in a poor light... And Darknet Diaries does sort of the opposite, where you empathize with the hacker a little, and you sort of feel bad for them, and you understand where they're coming from, and you hear the back-story of how they started, what made them create a specific bug, and so on... Which I think are really cool.

\[00:44:33.17\] The other thing that -- I mentioned Krebs on Security negatively, but I also read it quite positively... He posts really frequently. I think the one story that I was really hooked on was when he talked about Mirai, which was like a botnet on the IoT stuff... And it was really fascinating just to read about it. I don't do a lot of IoT work, but he covered Mirai quite extensively, as well as talking about who the people were and how they created Mirai, and how Mirai affected a large portion of the U.S. And I think in general, if you read non-security things, Mirai was not talked about. No one knew that this was a thing, but in the security world it was pretty big. I find that really fascinating to read about.

And then the other thing also - Feross, you mentioned this earlier - is just vulnerabilities that happen in actual hardware... So because I read a lot of Brian Krebs, I'm paranoid about credit card machines and ATMs; so one of the things I do -- because there's a lot of these skimmers that people add onto the ATM machines, so when you put your ATM card into the card reader, it will skim your number, any of the information on the top... So people who come to take the thing can grab all of your information and basically clear your bank.

Oftentimes they come with a camera as well, so they can read your PIN... So they look at the card number and they see your PIN. So when I'm at an ATM now I always cover my number pad, and I always pull the card reader as well...

**Nick Nisi:** I do, too. \[laughter\]

**Divya:** Yeah, because skimmers are usually - they come right off if you pull at them. It's a habit I formed just from reading his blog. There's a large portion of his blog - it talks about a lot of software bugs, but there's a lot of hardware stuff as well that I didn't even fathom before. So yeah, it's really cool to see what's happening in that part of the world.

**Feross Aboukhadijeh:** I think if you read those kinds of blogs for long enough, you'll just become more and more paranoid, and take more and more precautions... 2FA all the accounts...

**Divya:** Yeah, exactly. 2FA everything. And then there's a point in time where I would put my phone in airplane mode if I didn't need it, just because I didn't want any requests going out... And I've been making sure that apps aren't downloading things in the background unless I explicitly asked them to... So yeah.

**Feross Aboukhadijeh:** The rabbit hole goes deep.

**Divya:** Yes. I'll soon be wearing a foil hat at some point... \[laughs\] Maybe. We'll see.

**Nick Nisi:** There's one episode of Darknet Diaries that I really like... I think it's called the Beirut Bank Job, and it's more about physical penetration testing.

**Divya:** Oh, yes. That one was so cool.

**Nick Nisi:** Yeah. Not to spoil it, but they break into a bank in -- I think it's Beirut, right? A Beirut bank job.

**Divya:** Yeah.

**Nick Nisi:** They broke into the bank next door to the one they were supposed to break into, and just hilarity ensues from there. So definitely check out that episode, it's pretty great. And that kind of stuff is really interesting to me, and I have been wanting to get into this more and more... I was actually signed up -- I've found a CTF (capture the flag) team to take me under their wing and let me participate at a hacker conference...

**Divya:** Oh, cool!

**Nick Nisi:** ...and then Covid-19 hit and I didn't end up going, unfortunately... But I'm looking forward to that next year.

**Divya:** Nice.

**Nick Nisi:** I did actually go to DevCon though in 2010, I wanna say...

**Divya:** How was it?

**Nick Nisi:** \[00:48:04.24\] It was awesome, it was really cool. It's in Las Vegas. I think it was the last year that it was at the Riviera Casino... Anyway, there were some really cool talks there, and two specifically - there was one where a guy wheeled out his own ATM that he bought on Craigslist, and he showed how he inserted a thumb drive into it, and somewhere that you could totally access if you were just coming up to one on the street... Loaded his own version of the firmware, and then had it on stage spitting out this fake money that he had printed, just to show how easy it was to get this ATM to spit out money.

**Divya:** Wow...

**Nick Nisi:** And then another guy brought up a full ham radio set up, and he used that to spoof an AT&T cell tower... And all throughout the casino that day they had signs up saying "Between 2:30 and 3:00 if you have AT&T you will not be able to make phone calls, including to 911", and it was because he was running his own tower, and every time you used an AT&T phone it would go directly to his cell phone and just go to voicemail. Super-cool, super-scary stuff that people dream up when they have a lot of time like that, which is really cool.

**Feross Aboukhadijeh:** Wow. That is really wild.

**Nick Nisi:** When I went there, I bought a NetBook, because Netbooks were a thing at the time... And I wiped it and put Ubuntu on it, and then when I got home I wiped it again, and I never logged into anything. I just made sure that I wasn't gonna end up on their wall of sheep.

**Divya:** \[laughs\] Wait, what's a wall of sheep?

**Nick Nisi:** If you get hacked at the conference, if they get access to any credentials of yours, you get put up on this wall, and so you just get made fun of.

**Divya:** That's one of the reasons why -- I always find DevCon really fascinating, but I refuse to go to one, just because I'm super-intimidated that I'll just be the idiot who doesn't know anything... Just like randomly "Oh, I need to pay my credit card bill" and then access my bank and then someone will get my information, or something dumb.

**Feross Aboukhadijeh:** They have two Wi-Fi networks there, and one is secured, the WPA3 enterprise security, so your laptop has its own key that secures the connection to the router... And then they have this other network that's the complete opposite - no password, completely open. If you join it, your computer will catch all the diseases. \[laughter\] So I think as long as you don't join that one, you're probably fine...

But yeah, I'm kind of paranoid, too. I'm worried there's gonna be some really terrible bug that somebody there knows about, that just having your Wi-Fi just on, they're just gonna be able to send a message to it and own your whole computer, and... I don't know, I don't wanna even think about that.

**Divya:** Yeah, I think thinking about wireless and Wi-Fi networks, one of the things that -- from reading a lot of security blogs and educating myself in that realm, I'm more wary of connecting to open Wi-Fi networks now. Generally speaking, the general populous is not very security-minded, so it's probably fine... But you never know when you just walk into a coffee shop and you automatically -- because I think most phones automatically connect to Wi-Fi networks that are open... And that's one of the fears that I have, that I'll just automatically connect and then someone will send me some spam, or a virus, or something through that, if I make a request elsewhere.

**Nick Nisi:** Yeah. Man in the middle on those open networks.

**Divya:** Exactly. That's always a fear, which is why I'm like "Maybe I should just connect directly, hot spot", and then use my hot spot.

**Nick Nisi:** Yeah. I have a VPN. Anytime I go to a coffee shop, I use that VPN.

**Divya:** Yeah.

**Feross Aboukhadijeh:** So Nick, did you have a story you wanted to share, or...?

**Nick Nisi:** That was my story, I went to DevCon one time... \[laughter\]

**Feross Aboukhadijeh:** Nice.

**Divya:** But you weren't the sheep, so that's good.

**Nick Nisi:** Yeah. \[laughs\]

**Feross Aboukhadijeh:** \[00:52:01.26\] Yeah, I guess I can add a DevCon story. I was gonna talk about a security bug, but I'll just share a DevCon story. I was there one year, too... It was really wild to just walk around the different villages they have; there's all kinds of people doing like lock-picking, and hacking voting machines, and just different little things like that. And one of the ones I went to was social engineering, and they had a guy who was up on stage in a phone booth... And I only caught the tail end of it, so I actually don't know the full context of what they were doing, but it was so memorable that I wanna share it anyway, even though I don't know exactly what they were doing.

I think what they were doing was calling up different companies and trying to social-engineer them live on stage, in front of everybody. I walked in and I saw a guy in a phone booth, the door was shut, so when they were on the phone, nobody on the other end of the phone line could hear the audience laughing and reacting... But we could all hear -- so they were playing the sound from the call out to the whole room, so we could all listen to the guy's conversation.

And we heard him call up -- it was some major corporation that you would all recognize, and he was basically just convincing each person he talked to to transfer him to the next person over... And then he finally just started asking about people's personal information, and the person at the other end was reading out names, date of births, even social security numbers of people that were in their system. He was pretending he was an employee, and was trying to find out some information about some other employees... So all this info was just being read out.

So he walks in there with no information about the company at all, and after 15 minutes on the other end out comes all this personal info, just by being convincing, and just by talking and saying the right things. And when you see that, you realize "Wow..." Our systems are all based on humans doing the right thing and humans being reasonable.

That's like when you hear about people who have their SIM card swapped out to another phone - it totally makes sense. If you just call up your T-Mobile or AT&T and you just talk to them, there's gonna be some other person there, and if you tell them a good enough story, they're gonna be like "Yeah, I'll do that", and they'll transfer your number away, and then you'll lose all your Bitcoin, or whatever. It's pretty wild.

**Divya:** Yeah. SIM swaps are the worst, because it's very difficult to circumvent that, because it's essentially people trying to get access to a SIM card that's under your name... Which then they can access -- if your 2FA is linked to your SIM, so it's sending a code through text message, then automatically your 2FA is gone. Yeah, which is why I never do text message auth; I usually have authenticator, or whatever, so it's separate.

**Feross Aboukhadijeh:** Maybe we should do a whole episode on a future week about all of our security tips for JavaScript and just in general. It might be interesting. But I think we're out of time for this week. I just wanted to say thanks for joining me, Divya and Nick. That's it for JS Party this week, so we'll see you all next week. Have a good one!

**Outro:** \[00:55:06.14\]

**Feross Aboukhadijeh:** Oh, the other thing that's dangerous about hotlinking for images is you can just change to be--

**Divya:** Yeah, that's exactly-- so my ex-boyfriend had an image of... I don't remember what. He had an image of like the snowman from Frozen, and Cosmo hotlinked it onto their website... \[laughs\] So we just changed it to whatever image we wanted. And I think it was like "Ten things to notice in Frozen", and it was just like, whatever... And then they said "And this ice castle", and it was just like a picture of him... \[laughter\]

**Feross Aboukhadijeh:** That's so good!

**Divya:** He was like "Oh, I'm paying so much for the bandwidth, but it's amazing! It's worth it!" I was like "Yeah..." \[laughs\]

**Feross Aboukhadijeh:** Wow... That's actually wild. That's really smart. He could have put an ad in there, or something... But instead he chose to share his face with the world.

**Divya:** Yeah.

**Feross Aboukhadijeh:** I like it. Fame.

**Divya:** Yup. On Cosmo.

**Feross Aboukhadijeh:** Did he send it to all of his friends afterwards?

**Divya:** Yeah, I'll have to find it... He posted on Facebook.

**Feross Aboukhadijeh:** I mean, it's better than what he could have put there.

**Divya:** Oh, definitely. He could have put anything else there, but... You know, he just wanted to keep it clean. Clean fun.
