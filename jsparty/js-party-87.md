**Jerod Santo:** Hello world, and welcome to an interesting edition of JS Party. We're trying something new; you know how we like to experiment around here, and we have a brand new segment that we're calling YepNope. YepNope.js was an awesome by our very own Alex Sexton back in the day, but this is a debate. No, it's not inspired by the current United States political debates, it's an idea from Feross to come up with a premise and talk about it, and have people take different sides, and see what happens... So we're gonna see what happens here.

We should state upfront that we aren't necessarily representing our own beliefs, we're representing the side that we were assigned... And I'm your humble moderator and the assigner of sides. We have two teams - team Ferball, made up of one part Feross, and one part Kball. What's up, guys? You're teeing me up.

**Feross Aboukhadijeh:** How's it going?

**Jerod Santo:** Yep! We're gonna find out how it's going real fast. Team Shortskull, made up of Divya and Chris...

**Divya Sasidharan:** Yeah...!

**Jerod Santo:** ...representing the Nopes. What's up Divya, what's up Chris?

**Divya Sasidharan:** I mean, Nope...! \[laughter\]

**Jerod Santo:** You have to be way more negative here, Divya...

**Divya Sasidharan:** Denied!!

**Christopher Hiller:** Nooo...!

**Jerod Santo:** So that's the idea, it's Yep/Nope. We have two teams, Feross and Kball representing the Yeps, Divya and Chris representing the Nopes. The premise we hope you'll find interesting, and one that honestly a lot of us could represent either side - I feel strongly both ways, which is quite a conundrum - is that websites should work without Javascript. That's the premise - websites should work without Javascript. On the Yep side of that is Feross and Kball, and on the Nope side of this debate is Divya and Chris.

By the way, we would love to hear from you. If you love this segment and you want us to do it again, let us know; if you hope it disappears and never reappears, ever again, in the history of humankind, let us know. You can comment on the discussion page on Changelog.com, you can let us know on Twitter, you can send a carrier pigeon - we don't care; however you'd like to let us know, we would love for feedback, because we are very much experimenting... So let's get on with it.

**Kevin Ball:** And it's super-simple, right? They just have to say Yep or Nope.

**Jerod Santo:** That's right, you can Yep this episode or you can Nope it. But we'd appreciate a little stronger -- what do you call them...? Arguments, than just Yep or Nope.

So let's start. Segment one - this is going to be starting with team Ferball. Person one is Feross. Feross, you've got four minutes to introduce your side of the argument, "Websites should work without JS", and you are gonna say Yep. Go ahead.

**Feross Aboukhadijeh:** \[00:04:11.12\] Great. So our premise is that websites should work without JS, and I wanna start by emphasizing the word "websites" in the premise. There's an important distinction to make here between websites and web apps. Because the premise is focusing on websites and not web apps, I think that it'll be a lot easier for our side to argue this premise. We're talking about websites, which are devoted to mainly conveying content to users, not delivering an interactive experience... So I want to just, in advance, say to our listeners that if our esteemed opponents on the other side try to switch the argument to focusing on web apps, that that's not the right way to be thinking about this debate. So just in advance I wanted to get that out of the way.

If you're focusing on websites, then one of the things to think about is default behavior that the browser gives us. If we use just HTML and CSS to build our websites, we get amazing default behaviors, specifically around links. Links will just work. Instead of implementing a link as a div with an on-click handler, where you can to basically then become responsible for all of the various click behavior that the browser does for you, like Cmd+Click to open a new tab, or middle-click to open a link in a new tab, or Right-Click not causing a navigation - these are all things that are really easy to get wrong if you implement a link as a div, for example, that has an on-click handler.

Additionally, if your site works without JS, then it's probably quite accessible. It may not be perfect, but it's probably quite good. Building a site that works without JS, so disabling the JS and testing the site out is a great way to see how some accessibility tools will experience your site. So if your links don't work without JS turned on, that's a problem; that's gonna confuse accessibility tools, it's gonna confuse search engines... So it's not a perfect way, but it's a good way to get a sense for whether you're using the correct semantic tags whenever you can.

And then the last point I wanna focus on in my remaining time is that sites that work without JS probably have better performance - at least if it's a content site - because you want to think about what the experience of a user is while the JS bundle is loading. On a slower connection, a page will be downloading the HTML, and the browser is really quite good at showing HTML to the user as that HTML is being streamed across the network; it has this thing called a speculative parser that can start to show this content. So while the JS bundle is loading, that's what the user is gonna see.

So if your site works without JS, that means something is showing up on the screen before that JS bundle has been downloaded, which is good. That's just like another metric. So if you build your site so that it works without JS, you will have better performance for content sites.

And lastly, another point about the speculative parser - the browser is quite good at firing off requests for resources that it finds in the HTML as it's downloading that. So if you have resources like images that the browser encounters while the HTML is being downloaded, it will be able to start to do DNS lookups for those URLs, start to open TCP connections, start to do the TLS negotiation, and then eventually fire off HTTP requests for those resources, instead of waiting for this big JS bundle to download to get your app running. You're not gonna be able to do that, so your site waterfall will just look completely different.

I think those are my main arguments.

**Jerod Santo:** Time!

**Feross Aboukhadijeh:** Okay, perfect.

**Jerod Santo:** Good job, you squeezed that last one in. I believe you had four minutes and eleven seconds, so I gave you a little bit of a break there. Alright, so there is your first argument from team Yep. Let's hear from team Nope. Who do we want, Chris or Divya?

**Christopher Hiller:** Um, not -- not it.

**Divya Sasidharan:** Not it. \[laughs\]

**Kevin Ball:** They're already saying Nope.

**Divya Sasidharan:** \[laughs\] He's already saying no.

**Jerod Santo:** You're representing team Shortskull. Yeah, well - he's representing the Nope side, so I think he'll say nope to the response. But go ahead, Divya, with your Nope.

**Divya Sasidharan:** \[00:07:58.09\] Okay. Alright, so I'm not gonna rebut anything that was said, I'm just gonna state what the premise is, which is that websites should not work without Javascript (it's a double negative), and that's because I believe that Javascript is an essential part of the web, and it drives interactivity.

I know that I said I wasn't gonna address the rebuttal part of it, but I want to make the distinction between websites and web apps, which I think is a ridiculous distinction and difference, because a lot of the times it's really hard to define what exactly a web app is, versus a website. So I'm just gonna throw that away. But... \[laughter\]

**Jerod Santo:** Throw it out.

**Divya Sasidharan:** But the whole idea is that -- so one thing that really excites me about the web is this idea, a way of building the web, which is JAMstack. It's Javascript, API and Markup. What it does is it takes otherwise static websites and it makes them dynamic. Static websites are really nice, because like Feross was saying, it makes it very fast to load, it makes it fairly secure because you can load it from a CDN etc. but the nice thing about Javascript is that you can add additional interactivity to it which an otherwise static page doesn't have. So if you wanted to make an API call or if you wanted to grab content from elsewhere, you cannot do that, unless you have Javascript loaded on your thing.

And Javascript in itself in today's world is fairly -- it's a first-class citizen of the web, and so throwing it away and assuming that things should work without Javascript is a ridiculous idea to begin with.

Another thing to note is also this idea - and Feross mentioned it... I think he didn't really give a term around it, but I would call it progressive enhancement. So this idea of progressive enhancement is this idea that if someone was loading a website on a device that was on a 3G network, maybe a Motorola phone that is not very good (it's not a high-powered pixel or iPhone), you want the website to load. So we're not saying from outside that the website shouldn't load, because the idea is that ultimately you wanna make sure that the user sees content and then Javascript loads in the background; and you can easily do that.

So in a sense, making sure that your Javascript -- like, having Javascript on a page doesn't preclude you from that, because you can still load content and then Javascript can still load in the background, and there are many ways in which you can optimize for that as well. V8 has improvements in the way that they do script streaming; you can also have access to service workers, which are really nice, because service workers give you an ability to do background app sync, and do additional app cache stuff; app cache was before service workers, but essentially you can cache resources that you need access to, which is really nice because it gives you the ability to optimize for offline as well, which you can't necessarily do if you did not have Javascript loading.

So I would argue that a lot of the things that make a website terrible with Javascript is more a lack of a developer using good practices. For example, when someone says that Javascript isn't loading, or Javascript load is too much or it's taking really long to load, the time to interactive is very long - that's more a result of developer error than Javascript itself, because there are many ways in which you can address it. There's code-splitting, there's tree-shaking, lazy-loading... There's different ways in which you can make sure your website loads faster, while also having the benefits of that interactivity that Javascript gives.

**Jerod Santo:** You have 15 seconds. Anything else to say?

**Divya Sasidharan:** I think I'll stop there, before I start a new thread.

**Jerod Santo:** You can't start a new thread in 15 seconds.

**Divya Sasidharan:** Exactly.

**Jerod Santo:** Okay, very well done. Very well done. So there's your first round on the Yep and the Nope. Let's turn it over for the backup, team backup. It's gonna be Kball backing up Feross. You have four minutes to disagree, or to state your side, whatever you wanna say. You've got four minutes, go ahead.

**Kevin Ball:** Excellent. First, I'd like to thank Divya for making our case for us by talking about progressive enhancement.

**Jerod Santo:** \[laughs\]

**Kevin Ball:** \[00:11:49.19\] Progressive enhancement is the idea that a website or application should function just fine without Javascript, and Javascript then adds something progressively on top of it. So thank you, Divya. I could stop there, but I'm gonna continue going by reading statements from Hacker News comments that make our point for us... Because if we're making debates, why not make it interesting...?

The statement that Javascript should be required, that sites should not work without Javascript and that you have to enable Javascript - a statement from dozzie, on December 28th, 2015: "Sorry, but your statement is ridiculous. Unless the website is an application, that is it does something useful, it's just a bunch of text and images. You should not expect people to give you full Turing capacity just because you're too full of your awesomeness that you can write a program."

I think that makes our statement pretty well. Coming back to progressive enhancement... This is pdkl95, on December 27th, 2015: "Progressive enhancement is easy. Your framework or development tools should do most of the work for you. Maybe try different tools? Leaving out progressive enhancement is just lazy. Why would you prefer to show people a broken website as a first impression? Do you even know how many people see a broken website?"

The next part of our rebuttal is related to security. Compbio, December 27th 2015 states: "Nothing is gained (from a user perspective) by requiring Javascript, but security is lost."

Additionally, we can make an appeal to professional sensibilities, because gosh, web development pros - we're all so professional. Donnatj on January 26th of 2015 states: "Professionally speaking, this is one of the most important tests of the quality of a site. When I see an Ajaxed site on a resume (this is dating them a little bit), it's the first thing that I check, as it is a sign of a true craftsman taking care in their work. Ajax should ALWAYS degrade gracefully."

Do I have any more good rebuttals...? High-level, the statement here is "Progressive enhancement is great, we love Javascript, all the Javascripts; the web is unreliable, the web breaks down. Javascript will fail to load. I'm on a mobile connection; if I travel the world, I get 2G connections. If I look at mobile internet, something upwards of 60% of access to the web is on the mobile internet, phones are slow, mobile network connections are unreliable... Oftentimes Javascript will just fail out or take forever to load. Your site should function without it. Can you make it better with Javascript? Sure. If your site relies on Javascript for it, you've just lost a heck of a lot of people."

**Jerod Santo:** Okay. I assume that's your time right there.

**Kevin Ball:** I don't know, I wasn't timing. Were you timing me?

**Jerod Santo:** I was timing, but it sounded like a good place to stop. You had probably 45 seconds, similar to Divya...

**Kevin Ball:** I can look for more Hacker New comments, but I think my case has been made.

**Jerod Santo:** On the one hand, I wanna give you points for the research that you did. On the other hand, I wanna dock you points for just pulling in Hacker News trolls to state the case for you.

**Divya Sasidharan:** Yeah, I would question those... Appeal to authority. \[laughs\]

**Jerod Santo:** Yes, the place of all authority is the orange website.

**Kevin Ball:** I just figured, if we were gonna dive down into ad hominem attacks, I would put the Hacker News people out there as the targets.

**Jerod Santo:** There you go. Don't attack Kball, attack the people he's cited.

**Divya Sasidharan:** Yeah. That's not in the spirit of debate though. I would never attack any of my opponents...

**Jerod Santo:** Well, let's see what Chris will do. Chris, would you like to attack your opponents? Would you like to retreat into a cave? \[laughter\]

**Feross Aboukhadijeh:** Retreat!

**Jerod Santo:** I know you've passed it to Divya once already; I hope you've got something up your sleeve.

**Christopher Hiller:** Alright, the rhetorical question that the Hacker News troll asked, which was "Do you know how many people see a broken website?" Well, I'm going to say the number is very few, because most of those people are angry Hacker News trolls who use the NoScript extension and then use it as an opportunity to shame websites that their websites don't work without Javascript.

The other people that don't see the Javascript when they visit a website are probably using text browsers. This is also probably a subset of the angry nerd on Hacker News comments. And the other people may be somebody using a feature phone, and it just kind of depends whether or not the people using feature phones are your website's intended audience, and whether or not those people actually expect interactive browsing experience on their feature phone.

The other point I'd like to make then is if your audience excludes people who don't necessarily have Javascript running - and we can say this is not their choice; "choice" I mean the angry nerd who turns it off... If you're expecting your audience to have Javascript, it may not be pragmatic to spend the engineering resources to make your site degrade when it's been designed from the ground-up as an interactive experience. So oftentimes it may take extra work to get that done, and designers may need to go in and say "Okay, this is what the site is gonna have to look like when there's no Javascript, this is how things are going to have to act..." And as a developer there's always this push and pull between the time that you're allowed and the resources you're allowed, and time to ship, and it may not be pragmatic, it may not make business sense.

**Break:** \[00:17:14.29\]

**Jerod Santo:** Well, it was a heated debate. We're gonna continue this, a little bit shorter spurts, passing it back, team-to-team... I know team Shortskull took issue with the website/web app distinction. I know team Ferball loves that distinction, but do they really believe it? I don't know, we'll find out more. Let's let Shortskull speak more about that distinction, or any points you wanna make in rebuttal to the Ferballs.

**Christopher Hiller:** I thought it was their turn.

**Divya Sasidharan:** Yeah, it is. Why Shortskull?

**Kevin Ball:** You're saying Nope again. Come on now!

**Jerod Santo:** Come on, I just gave you the floor and you just batted it back to me?

**Christopher Hiller:** Oh, okay...

**Divya Sasidharan:** \[laughs\]

**Jerod Santo:** I'm the moderator here, I make the rules. Go ahead, Shortskulls.

**Divya Sasidharan:** Okay, so I wanna reiterate the point that Chris is making in terms of the audience who we're building websites for; I think the people who disable Javascript are intentionally disabling Javascript and are therefore people who we do not build for in general... Because a lot of the times what we're focusing on in terms of this argument and what has been brought up so far is trying to optimize for the lowest common denominator, which is someone on a 3G network, on a device that is not very high-powered. So in order to do that, the argument that was made by the proposition was that you essentially don't want to load Javascript because it takes a lot of time etc. But the thing is Javascript is really nice, because it gives you the capacity to check someone's network and then load the appropriate scripts that they need. Because as I said previously, I think interactivity is kind of the joy of working on the web and using the web today.

The nice thing about Javascript and using Javascript today is that you have access to a lot of APIs that allow you to query someone's bandwidth. There's the network API -- what is it called? Yeah, the Network Information API, that basically allows you to check whether or not what connection someone's on - if they're on a cellular or a Wi-Fi connection - and then based on that connection load the scripts that will allow them to view images or whatever interactivity that they would need. Using that, it gives you the power of selectively loading specific things, so that you're not giving them the bulk of Javascript that will make it really slow and will be render-blocking overall.

\[00:20:16.09\] So this idea of kind of like selectively loading or selectively giving people scripts is something that I think was brought up in a BBC article a couple of years ago, which is this idea of cutting the mustard, which is just being able to load scripts based on whichever device someone is on. If someone's on a low-powered device, you give them less Javascript, versus someone who's on a high-powered device, you give them more Javascript. The idea is that Javascript is necessary, because you want to give them just some kind of interactivity, somewhat.

**Jerod Santo:** Time. Okay, Ferballs.

**Kevin Ball:** That sounds like a wonderful taste for progressive enhancement.

**Divya Sasidharan:** Yeah, but progressive enhancement -- okay, I'll just wait.

**Jerod Santo:** I think he stopped, you can go ahead. Get into it.

**Divya Sasidharan:** I just think that progressive enhancement doesn't mean no Javascript. It means there is Javascript, it's just how much Javascript there is.

**Kevin Ball:** So our premise is not that websites should never include Javascript; it's rather that that website should still work without the Javascript. So if I wanna look at your wonderful blog with images, and I try to load that page, I should not have to have my Javascript working to be able to see your writing and your images.

Now, if your Javascript is working - wonderful! Okay. You can give me this great, beautiful, enhanced experience. You can check, am I on a desktop? Great. Massive images. Am I on a phone? We're gonna do the smaller ones. But I don't wanna wait for that Javascript to load.

I think we talk about slow time, and I feel that a lot every time I travel. When I travel, T-mobile is great, because they give me a connection everywhere. But the connection they give me everywhere is 2G. Try loading a website from the U.S. on a 2G connection from somewhere overseas... Oh, my goodness; it is the definition of pain. But what's more painful is when you see it; it's there, you can see -- there's just a little bit hinting, you read the first two paragraphs, you're ready to scroll, and your web page (or application or whatever) won't react to your finger because it's still waiting for the Javascript, or it's trying to parse the Javascript, and the first bundle is loading the second bundle, and you're at 10 or 20 seconds to interactive... And measuring on 3G is one thing, measuring on 2G - it's even worse. You should be able to function... And great, when you get the Javascript, do more; awesome, love it. But having to wait for that Javascript to do anything is really painful.

**Feross Aboukhadijeh:** Yeah, can I also add something to the websites versus web apps discussion? We were talking a little bit during the break about that being a difficult distinction, like what exactly is the boundary between the two... So I think maybe something more useful is to ask the question "Can this site work without JS?" So ignoring the developer experience, just like - is it actually possible to make this site work without JS? And if it is, then I think that you should. So if it's a blog, that should probably work without JS. But if it's like a game or something that literally requires WebGL, or if it requires the user of WebRTC, or the canvas, or something like that where you need Javascript, obviously it would be extremely burdensome to go and get the developer time to somehow hack together a solution maybe that would work without it.

So it's not about making your site work without JS for the Hacker News trolls, it's about doing it because it actually makes your site better. Requiring JS to show some simple text on a page makes your site more complicated and more brittle, and as programmers, our entire job is to reduce complexity. The biggest challenge we face is this creeping complexity... And requiring JS to show some text is the very clear form of complexity, and complexity is the enemy. It makes it so that if something slightly goes wrong with the way the page is loading, then the entire thing is completely broken... Or the site just doesn't work until the JS arrives. I rest my case.

**Jerod Santo:** Shortskulls.

**Divya Sasidharan:** Chris.

**Christopher Hiller:** Uh... I had a thought. Come back to me.

**Divya Sasidharan:** \[laughs\]

**Jerod Santo:** \[00:24:13.03\] You're not gonna quote Hacker News again, are you?

**Divya Sasidharan:** \[laughs\] He's always trying..

**Jerod Santo:** "I would just like to quote Hacker News one more time."

**Kevin Ball:** No, no... I'm gonna quote Divya's article that she posted. It's a wonderful article, talking about the distinction between websites and web applications being a false distinction... And I just wanna read this paragraph. It says:

"In my experience, there's an all-too-common reason why designers, developers and product owners are eager to self-identify as the builders of web apps - it gives them a Get Out Of Jail Free card. All the best practices that they'd apply to websites get thrown by the wayside. "Progressive enhancement, accessibility, semantic markup - I would love to do that, but this is a web app, you see... That just doesn't apply to us."

Coming back to progressive enhancement - it should function in some form without the Javascript. I think we were all building web applications using server-side frameworks before Javascript got fancy, and those are web apps. They do good stuff, they're important, they're interactive, they do lots of different things. I love what we can do with client-side Javascript today, but it has clouded our eyes to some of the fundamentals.

**Jerod Santo:** Let me hop in here real quick, because I just can't stay quiet any longer...

**Feross Aboukhadijeh:** No, you're supposed to be neutral! What is this?!

**Divya Sasidharan:** Yeah, you have to be in the middle. You're the moderator.

**Jerod Santo:** I am in the middle, and I'm asking for this from the middle. Kball - this is an honest question; let's pause the debate. If you were building Slack, would you progressive-enhance? Do you think Slack should work without Javascript?

**Kevin Ball:** Great question. \[laughs\] I think I should be able to read the existing messages... Like, load a page and see what has happened. Creating that real-time response is -- that is a Javascript thing.

**Divya Sasidharan:** Yeah, WebRTC does not work without Javascript.

**Feross Aboukhadijeh:** Wait, so can't you HTTP post the message up and then reload the page to see the new message?

**Divya Sasidharan:** \[laughs\]

**Feross Aboukhadijeh:** You laugh, but if you look at--

**Jerod Santo:** Literal LOLs there...

**Divya Sasidharan:** Yes...!

**Feross Aboukhadijeh:** Have you seen Gmail's simple HTML interface? If you're on a really slow internet connection or you're on a really crappy phone, you can actually still use Gmail. You click the name of the email and then it just loads a new page with the email in it. And you can type into a box and hit Send and it posts it.

**Divya Sasidharan:** Yeah, I think essentially that's like one way of experiencing and working with the web, but it's this idea of you're making multiple server requests for very simple interactions. So sure, yeah, it makes it possible for you to work without Javascript, but you're still trying to lean on HTTP requests to make those interactive experiences work on a static site.

The nice thing when websites like Slack - or I guess web apps; whatever - web things...

**Kevin Ball:** Thangs. Web thangs...

**Divya Sasidharan:** Yeah, web thangs...

**Jerod Santo:** I build web thangs...

**Divya Sasidharan:** ...for web things like Slack to work you would need Javascript, because you want those niceties of that interactivity; you can also do a lot of pre-loading, you can make sure that resources are fetched beforehand, so that you can optimize for offline experiences, as I mentioned earlier, which is something you cannot do without Javascript. Sure, you could load a static page, but you can't really -- all hyperlinks do not work when you're offline anymore. Versus if something was client-side rendered and you were using a PWA for instance, which is a progressive web application which requires Javascript, which is optimized for progressive enhancement, you have the ability to load all of those pages so you can still access and use it as you would need, without even noticing they are offline. So if you're kicked offline, you can continue sending email, doing whatever you need to do, and then when you come back online, all of those actions are then sent over the wire. So that's the nice thing about Javascript and why web apps - or web thangs - like Slack need Javascript.

**Christopher Hiller:** \[00:27:51.23\] I wanted to jump in and talk about one point that's been mentioned in passing, which is accessibility. It's a misconception that sites with Javascript are inaccessible, especially to screen readers. Nowadays a screen reader does not care about your Javascript. The way a screen reader works is it cares about the markup. And regardless of whether or not your site has Javascript, if that Javascript is good or bad or whatever, if your markup is not semantic, if you're not using the ARIA attributes and accessibility features built into the HTML platform, then your site will be accessible, regardless of Javascript. So just because the site needs Javascript doesn't necessarily mean it's going to be inaccessible to a screen reader.

**Feross Aboukhadijeh:** By the way, on that point - I just meant that if you already have something like a server-side rendering setup and you're getting HTML back from the server, and then you disable JS, that's just like an easy way to test whether you are using all of those nice, properly-semantic tags... Because now you don't have all the on-click handlers attached to stuff that the Javascript would have done, you just have the raw elements. So it's just like a nice, easy way to test whether your site is minimally-accessible. Do you agree with that?

**Christopher Hiller:** Yeah... I have no idea. Sure. \[laughter\] Was that an argument? I thought you were just commenting.

**Kevin Ball:** To jump on Chris' point a little bit - I think it is 100% true, the idea that Javascript is not accessible is a misnomer. One thing that I think is overlooked is that HTML and HTML are accessible by default, in the sense that the languages are simple enough and declarative enough that browsers, screen readers etc. can figure out the right way to interpret them for their medium... Whereas with Javascript you've taken a lot of that control away from the browser by default; you've said "I'm gonna control all of it", and now you have to put it back, and you have to re-add those accessibility features and functionalities to make sure that stuff continues to behave.

**Divya Sasidharan:** I actually disagree with that, just because I think that -- like, sure, HTML and CSS give you attributes to make them accessible, but you don't get access to the accessibility model of (I think it's) the accessibility object model, because it just automatically does that for you... So all you have to do is use those attributes, and then it just does that parsing and it orders everything as it should with the screen reader. But there's this idea of the accessibility object model - I don't think it's default at the moment; I think it's still in standards... But that's essentially a Javascript API that gives you access directly into the AOM (accessibility object model), which then allows you to move around nodes and make it such that you can organizer how exactly you want your site to be viewed with the screen reader. Because if you were to use just automatic HTML/CSS ARIA attributes and so on, you're kind of ceding control to how exactly those standards work... But with the AOM you get to actually manipulate that yourself, so you can create a specific user experience for screen readers if that's something that you would like to do.

**Christopher Hiller:** And it needs Javascript.

**Divya Sasidharan:** And it needs Javascript.

**Kevin Ball:** I don't think that we're disagreeing on that. The browser already knows how to create that experience for its built-in stuff, right?

**Divya Sasidharan:** Yeah.

**Kevin Ball:** So if you have a select HTML element, that element is accessible, because the browser understands how the select works, screen readers understand how that works... You don't actually need additional ARIA attributes to explain a select element; it just functions, they know how it works. Similar to the rest of Form Elements, various other things, until we decide that a select element is not good enough and we want a combo box, and we're going to implement this all in Javascript. Now we have taken control back - which is true, we now have more control - but we've also taken information and we need to now add that back explicitly with Javascript.

**Feross Aboukhadijeh:** One nice thing you can do, by the way, is just use a select element, and then the JS can see the select element there and then replace it with something at runtime... So if the JS doesn't actually load, you still have the select element; it might not be as nice as your fancy little component widget-thingy-majigger, but will still work.

**Divya Sasidharan:** \[00:32:15.28\] Yes. The thing about Javascript that makes it nice when you wanna access that branch or that element on tree is that events work really nicely with accessibility, so if you were to trigger events, you're like "Clicking this button does this other thing", it opens a pop-up or whatever, like you were mentioning, Kball... Currently there's no way for you to manage what exactly happens with the accessibility tree. So if you want that interactivity to work, which is often the case, then you would need access to that tree, so that you can make sure that the event propagates properly, and that screen readers have the ability to handle that appropriately, without just it bubbling up wherever it goes... Which is very jarring. Viewing the web as someone who has an impairment is very frustrating... So the ability to handle those events as they propagate, because events are obviously what happen -- event delegation, all of that thing is kind of standard on the web at this point...

**Kevin Ball:** Once you add Javascript.

**Divya Sasidharan:** Yes, it's standard. It's fairly standard.

**Kevin Ball:** No, absolutely. I think part of what you're highlighting here, if I'm understanding, is just the current tools for making Javascript accessible are insufficient.

**Feross Aboukhadijeh:** I'm going to appeal to authority and read some quotes at this time. \[laughter\]

**Jerod Santo:** "I've lost complete control of this panel." Go ahead, Feross...

**Feross Aboukhadijeh:** Okay. The first quote: "No code is faster than code." Okay. Second quote "The code you write makes you a programmer, the code you delete makes you a good one, the code you don't have to write makes you a great one." The next quote...

**Jerod Santo:** Are you getting these off of fortune cookies, or where are these coming from? Confucius says...?

**Feross Aboukhadijeh:** I can't disclose... \[laughter\]

**Divya Sasidharan:** What...?!

**Kevin Ball:** Is the copyright available such that we can put them on T-shirts?

**Christopher Hiller:** Whoever said this is going to be objectionable and we're going to disregard them?

**Divya Sasidharan:** Yeah, exactly.

**Kevin Ball:** Yeah, authority doesn't work as well when the authority is anonymous.

**Feross Aboukhadijeh:** Alright, last quote, last quote... "Inside every large program there is a small program trying to get out."

**Jerod Santo:** \[laughs\]

**Divya Sasidharan:** Since we're talking about appeals to authority, I would like to quote Atwood's Law, which is that any application that can be written with Javascript will be written with Javascript.

**Kevin Ball:** And this was a positive thing...?

**Divya Sasidharan:** Yes, very positive. Very, very positive.

**Jerod Santo:** Very positive.

**Divya Sasidharan:** A hundred percent. It's a huge statement.

**Jerod Santo:** You heard it here first.

**Break:** \[00:34:51.21\]

**Jerod Santo:** Alright, we're back for the behind-the-scenes of the debate. The post-debate - you know, I have to talk about who wins and who loses... Well, we're not gonna do that. We want you to do that maybe, if you like. If you're on team Ferball, let us know, if you think the Ferballs represent. If you're on team Shortskull, holler back. The Yeps versus the Nopes. You can click on the show notes, there's a Discuss on Changelog News button - it will all be on that commentary - or hit us up, @jspartyfm on Twitter if you prefer; let us know what you think.

Now, let's actually represent our real thoughts, versus the pre-assigned ones that you were forced to represent. I'm curious what you all really feel about this. I'm firmly in camp "It depends", which is the moderate camp... But I do think the distinction between web app and website is sometimes worth making. Especially in extreme cases such as a Slack, I do believe it is not in Slack's best interest to build in a progressive enhancement way or to simultaneously have an HTML-only version of Slack that they're keeping up to date with their other code. That's my own opinion.

But if you can progressive-enhance, please do. I do it on Changelog.com all the time, for example; we have a Javascript player that when you click the Play button it pops up, Javascript takes over, uses all the fanciness to do the things... But at the end of the day, that Play button is just an anchor tag which links directly to the MP3. So if you don't have Javascript, it's just gonna take you to that file and your browser will play it.

I do practice these things when they're easy, or maybe just a little bit more effort, but if it's orders of magnitude more effort, I tend to be a little bit more of a pragmatist. That's where I stand, that's why I say it depends. I'm curious what you all think about this in reality.

**Feross Aboukhadijeh:** Yeah, I totally agree. I think obviously we have a limited about of time to work on stuff, and we have to prioritize the most important features that benefit the most users... It's the same thing as prioritizing features that you're gonna focus on building. You wouldn't focus on a feature that benefits a really tiny fraction of your users while you have other features that you could build that would help a lot more of them. So it's sort of like once you've taken care of all the easy stuff, then maybe if you have time you can think about making things really perfect and helping the edge cases. That's at least how a lot of businesses operate.

But on the other hand, accessibility is an example where you actually do take a lot of time and energy potentially to make a site work for a very small fraction of people... So I don't know; maybe we should be thinking of the JS crowd as just another smaller group of users that we should focus on. I don't know. I really don't know.

**Jerod Santo:** Divya, you represented the Nopes. Do you believe in the Nopes or were you just representing the Nopes?

**Divya Sasidharan:** I was just representing the Nopes. I feel similar to everyone here, and I echo their sentiments; there were pretty moderate views... Because I think in general in the web world there's this idea of Javascript eating the world, but I think everyone feels that pain point of how complexity causes more complexity... Because you're like "Oh, I need Javascript for this thing to work", and then you need Javascript to fix the issues that the Javascript introduced, and then it just keeps going... Which is kind of like why Babel came about, and then Webpack - because there were issues as a result of writing more Javascript... And then also trying to be super-cutting-edge, like using arrow functions, but then arrow functions are not backwards-compatible, so you need to polyfill, which requires Javascript, and all of this extra stuff... And then it ends up becoming this crazy mess of Javascript; so you're loading all of this Javascript to load more Javascript. It just becomes... Yeah.

So in general, I think it's kind of a ridiculous conundrum that way, and I'm very much of the opinion -- I believe in progressive enhancement, as everyone has so far mentioned, just because I think that that's the ability to make sure that your site works in all scenarios. Because ultimately, you want the content to load, so people can at least see what's happening on the page... But of course, you also want to optimize for the time to first interactive, because it's really frustrating if everything loads content-wise, but then it doesn't work.

\[00:40:09.11\] So I believe it's kind of a balancing act. You don't go like "No Javascript at all", but you wanna make sure that it works at a minimal amount. To make time to first interactive better there's a lot of ways that you can make sure -- you can use HTTP Server Push, so you're making sure that your resources load as fast as possible, so that time is improved... And there's a lot more techniques. I think Addy Osmani wrote a post called "The cost of Javascript" in (maybe) 2017 or 2018, talking about just how to make that time to first interactive... Which is actually perceptible to people; people notice that, so trying to improve that using various techniques as developers and trying to be responsible for that.

**Jerod Santo:** Kball, you were strongly on the Yep... So are you strongly on the Yep?

**Kevin Ball:** Well, engineering is all about tradeoffs, so as everyone has said, we make tradeoffs and sometimes it's the right choice, sometimes it's the wrong choice.

**Jerod Santo:** I do wanna highlight something along this domain... There was a post on Brad Frost's blog recently; we should probably put it on Changelog News, it would be great... But he was reacting to a tweet somebody posted; actually, somebody who was on our show at React Amsterdam, Kitze... He said "You're working on a front-end project, and you can install max five dependencies. Which ones do you pick?" And everybody's weighing in with their tools of choice, and yadda-yadda-yadda... And Brad Frost raises a really interesting point - if you were to say "You're working on a home-improvement project and you can choose max five tools, which ones do you pick?" Your question would be "What's the project?" Am I repairing a toilet? Well, I probably don't need my saw.

There's a lot of dependency on what you're actually trying to accomplish... But we have a tendency in the web world -- because, you know, all languages are Turing complete, and we can do anything with anything; we have a tendency to say "Okay, I have my tools, and I'm gonna apply that hammer to every project, and it's gonna look like a nail." I think that that is a problem, and I think increasingly massive Javascript frameworks fall into that hammer that we try to apply to every project, and make every project into a nail... And that has led to an industry-wide tendency to have too much dependency on Javascript.

So I think the statement "Your site or application should work without Javascript all the time, 100% of the time" is not tenable. Slack is actually a great example; I tried to rebut that a little bit in the debate, but... Yeah, Slack is literally about real-time conversation. It makes zero sense to have a static version of that.

**Jerod Santo:** I liked your response though, because I could tell your gears started to turn, and you started asking yourself "Well, what could we provide somebody in that case? Maybe a read-only version." Feross said you could do an HTTP post - you definitely could do that. I wonder what -- Gmail is the example there, where they do have the HTML-only version; I wonder if that's because they've built that first and then they went -- I don't remember... Does that exist? I would love to know if they're continually working on that, or if it's just like "Well, this thing still works, because we haven't changed our back-end APIs."

**Feross Aboukhadijeh:** I would guess there's some segment of users that are getting some value out of it, or else they would have deleted it, like they delete so many of their products.

**Jerod Santo:** Right. And if you have just so many million people using it, then that small percentage is still a large amount of people.

**Kevin Ball:** Yeah. If I'm ever overseas and connecting through my phone, through one of those super-slow connections, I'm so grateful that that exists. I'll have my laptop open, because it's easier to deal with things on the laptop, but I'll be connecting through something that's really slow, and Gmail will automatically say "Hey, our Javascript-intensive experience is taking a long time to load. Do you wanna go to the static version?" And it makes it possible to use Gmail in scenarios where otherwise you really can't; like, it's unusable. I am in that slice of users that once a year or so I'm like "Oh, I'm so grateful this exists!"

**Jerod Santo:** \[00:44:03.14\] But if you think about an email client, it really isn't a thing that should require -- I mean, the fallback is you load a page, you read the stuff, you enter stuff into a form, you push submit, it posts it... It's a very normal web flow. Whereas something like WebRTC is a dramatically different web flow. Anything that's socket-based stuff - dramatically different.

So that's where it's like "Okay, is there a progressive enhancement?" If I'm building a collaborative video tool such as Appear.in, which we tried and it works pretty well (it's WebRTC), is there like a fallback for that? Where it's like "Hey, we'll give you an ASCII version of what you guys look like..." \[laughter\]

So that's why it does depend... And I think Gmail even has a more obvious fallback than a Slack, or a video tool.

**Feross Aboukhadijeh:** One interesting thing about the Gmail example is maybe a better experience for you, Kball, when you're traveling, would be if they actually got their act together and added a service worker to Gmail. Then all the resources that it actually takes to load up the Gmail UI would have already been on your computer.

**Kevin Ball:** Entirely possible.

**Feross Aboukhadijeh:** Yeah. And then it would just be one API request to the server to get the new emails. I guess they do have Gmail offline now, right?

**Divya Sasidharan:** I think so.

**Feross Aboukhadijeh:** I forget it if -- it used to require a browser extension, or something...

**Jerod Santo:** Chrome-only, probably. Only works in Chrome.

**Divya Sasidharan:** \[laughs\] Actually, you can even enable -- I guess you have to enable offline email for it to work, and it has to be on Chrome.

**Feross Aboukhadijeh:** Okay. Yeah, it should just work out of the box. It's too good.

**Jerod Santo:** Alright. Well, any other thoughts on this topic? Go ahead, Kball.

**Kevin Ball:** Coming back to this question - there is this sort of meta-question that gets thrown around periodically around developer ergonomics, as compared to actual user value... And a lot of the over-emphasis on Javascript is around that developer ergonomics; it's really focused there... And there are times when that's the right answer and the right trade-off to make, and there are also times when (as we've just discussed) it enables a product experience that wouldn't make any sense in another world. However, I think we forget that it is actually a tradeoff very often, and we don't necessarily look at the cost that that places on users, we don't think about it; we're all using our high-end MacBooks on really fast networks, we develop things close to the servers that we're using, so we rarely have things that don't respond or time out, and we don't really deal with those error cases nearly to the extent that we probably should.

I think we also have an over-emphasis on cutting-edge and latest-and-greatest. I think about Cragslist... Every developer and every designer is like "Oh, I'm gonna build a better Craigslist. Craigslist is a piece of crap. Craigslist is using this old whatever... Millions of people still use Craigslist every day, and if they're over the age of 40, many of them like it better than the other options.

**Jerod Santo:** Isn't that more of an argument for first-to-market and network effects, versus quality tooling? They use it because they're used to it.

**Kevin Ball:** It's an argument that simplicity of use is undervalued in our industry. If we have a design and it's two years old and we say "Oh shit, this design is way out of date. I've gotta update it." My mom has not updated -- I mean, now she's got Alzheimer's, and whatever... But even five years ago when she was still functioning, she could not understand anything that changed fast. She was baffled anytime something she was using changed... And that's not uncommon.

I'm frustrated with the new Twitter interface. What the heck...?! The old one was fine. This new one adds zero value to me, and it's... It's change for change's sake.

**Jerod Santo:** She wouldn't like LinkedIn very well. Every time I log in, LinkedIn looks different. I'm like "What happened...? How many people are working on this?" It shows how rarely I log in, I guess...

**Feross Aboukhadijeh:** Can you imagine if physical products worked the same way that tech products do? Especially cloud-based ones, where they can change out from under you at any time... Imagine if your toaster's buttons suddenly were on the other side, rearranged, and you didn't even decide; you just wake up one day and you can't find the buttons. The manufacturer is like "Oh yeah, we changed them around. You know, following trends..."

**Divya Sasidharan:** \[00:48:08.03\] But I think that's the argument with microwaves and ovens, right? Having all these extra settings that you don't need, where it's like "Oh... For popcorn and for chicken nuggets."

**Feross Aboukhadijeh:** Oh my gosh, I totally agree. I've always wanted to have a microwave that just has a +30 seconds button and nothing else.

**Divya Sasidharan:** Yeah, exactly. That's all you need.

**Jerod Santo:** That's all you wanna find, yeah.

**Feross Aboukhadijeh:** Yeah, you just go plus, plus, plus, until you get to the thing you want, and you're done. Maybe if you wanted two buttons, you'd have +30 seconds and +1 minute.

**Divya Sasidharan:** Or a dial.

**Feross Aboukhadijeh:** Yeah, that's even better.

**Kevin Ball:** Yeah. Simplicity is very valuable, and we as an industry dramatically underestimate that.

**Divya Sasidharan:** Yeah. There's a really good book on that, called "The Design of Everyday Things." It goes into detail on this idea of simplicity. And to your point about developer ergonomics - I believe we brought this up before, but Alex Russell had a post about just this idea of the "developer experience" bait-and-switch, which talks about how developers tend to use Javascript in a way that's better for them, rather than for the users.

He compares Javascript to CO2, and just this idea that -- it's like a metaphor that as a polluter you don't think about your emission, you just think about the convenience to yourself. Let's say you're like "I wanna get from Boston to New York. I'm gonna take a plane, because it's faster", versus taking a train, or whatever. But then you don't think actively about the Carbon emission that comes about from that decision... And then other people have to deal with that as a result.

I think it's similar with how we build websites and web apps (web things). The way we build things today is just this concept of how will it make the developers happy, and as long as they're happy, the decision is a good one... Which I think is a false association.

**Kevin Ball:** Yeah. And none of this is to say that we shouldn't have any emphasis on developer ergonomics, or that there's never a reason for a more complex interface, or that we shouldn't have any change. It's just that all of these things, as everything in engineering, are trade-offs; they have consequences, and it is my belief that most people in the industry right now are not looking at closely at some of those consequences as might be valuable.

**Jerod Santo:** One last thought back on simplicity before we call it a day. We mentioned making things simpler is better; I think it's Einstein quoted with "Everything should be made as simple as possible, but not simpler." I don't know if he actually said that, but remember the "not simpler" bit, because... You know, maybe you're a chair manufacturer and you have the magical ability that Feross just mentioned, of changing products; and you think "You know what's even simpler than a chair with four legs? It's a chair with three legs. Because that's one less leg, so that's simpler... So that's better, right?" And then you pull a leg out from underneath your customer.

**Feross Aboukhadijeh:** \[laughs\]

**Jerod Santo:** So it depends. Don't make it too simple.

**Feross Aboukhadijeh:** That smug smile... You're like "I made it funny."

**Divya Sasidharan:** It's just... Go off! \[laughs\]

**Jerod Santo:** I'm just imagining somebody fall over...

**Divya Sasidharan:** I'm just saying, you just constructed this whole statement in order to just say that one part... \[laughs\] Like "Let me construct this entire statement..." \[laughs\]

**Feross Aboukhadijeh:** We see what you did there.

**Kevin Ball:** And at this point, I will start quoting random jokes.

**Jerod Santo:** This is quite a call-out. As an appeal to authority, I will now start reading jokes. \[laughter\]

**Kevin Ball:** What do you call a cow with three legs?

**Jerod Santo:** I don't know, you've gotta tell us.

**Kevin Ball:** A tri-tip. I can keep going. What do you call a cow with two legs?

**Divya Sasidharan:** I don't know... Tenderl-- I don't know.

**Kevin Ball:** Lean beef.

**Jerod Santo:** Oh, my goodness...

**Divya Sasidharan:** Oh, gosh...

**Kevin Ball:** It keeps going. One leg?

**Divya Sasidharan:** This is an appeal to carnivores...

**Jerod Santo:** You're being exclusionary...

**Kevin Ball:** What do you call a cow with one leg?

**Jerod Santo:** Oh, gosh... It keeps going.

**Kevin Ball:** I can do dad jokes all day long.

**Jerod Santo:** Well, tell us.

**Kevin Ball:** Do you know that thing about "What can you talk about for 30 minutes with no prep?" "Bad jokes." 100% there.

**Jerod Santo:** Okay. Well, finish the logical conclusion. A one-legged cow is what now?

**Kevin Ball:** Steak.

**Jerod Santo:** Oh, that's good. And then no legs?

**Divya Sasidharan:** \[laughs\] On the spot...

**Kevin Ball:** Ground beef.

**Jerod Santo:** Ground beef...! Golf clap. We have to end the show, folks, before it ends itself. That's JS Party this week. Do let us know if you like our new segment, YepNope. We had fun, and we'll probably do it again, unless you all hate it, so... Holler at us. We hope you enjoyed, and we'll see you all next time.

**Feross Aboukhadijeh:** Also suggestions about maybe how to make the format better; if there were parts that you liked, parts you didn't like... That would be really helpful.

**Jerod Santo:** And additional premises. We have to come up with a format and come up with premises. We have some ideas on other premises, but as Feross points out, if you misword the premise a little bit, he'll use it to his advantage and undefine a part of it in order to win...

**Divya Sasidharan:** Exactly!

**Jerod Santo:** ...and that's very tactical, but not fair. So help us out with premises. We'd love to hear from you.
