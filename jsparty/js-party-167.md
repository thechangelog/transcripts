**Emma Bostian:** What's up, party people? Long time no talk. Nick, how are you doing?

**Nick Nisi:** Oh, I'm good. Hoy-hoy.

**Emma Bostian:** Hoy-hoy! And today we're joined by my friend and co-worker Tryggvi. Would you like to introduce yourself, sir?

**Tryggvi Gylfason:** Hi! My name is Tryggvi. Um... I work with Emma. \[laughter\] Yeah, I work at Spotify.

**Emma Bostian:** Everyone's gonna ask you either for a referral or for like dirt on me... So just close your DMs.

**Tryggvi Gylfason:** And I have no control over the product roadmap at Spotify.

**Emma Bostian:** Fabulous! I'm so glad you can fix all the bugs from the general population. Super-excited that we're recording this episode; it's been a long time coming we've wanted to do this - actually, since last year - and I'm excited that we're talking about accessibility today. This is an evergreen topic, and it is an important topic, especially now -- well, I'd like to say "Now that we're in a new year", but it's March, and the year is like a third over, so... That's great.

But today we're going to talk about ten accessibility mistakes to avoid in 2021. Hopefully you haven't been making these mistakes the first couple of months... But if you have, that's okay, we're here to help you out. And I'm excited that Tryggvi is here joining us, because Tryggvi - just give us a really quick rundown on the accessibility work you do at Spotify, because you're very much connected on that community.

**Tryggvi Gylfason:** Yeah, so I don't consider myself to be an accessibility expert by no means... But I kind of got into specializing a bit in web accessibility as a frontend engineer a couple of years ago. I saw the work that had been going on at Spotify when Shaun Bent, one of our co-workers, did some amazing work with putting a little dot underneath the Shuffle and Repeat icons, that kind of became a pretty famous example of nice little things you can do to improve accessibility... That made it clear if the button was on or not for people that have colorblindness \[unintelligible 00:04:18.10\]

\[00:04:22.21\] And I just thought that was such a nice little gesture, and I started to looking into -- trying to learn a bit about voiceover and how the screen reader is working, and tried these things out on the desktop client we have... And it was really alarming how difficult it was to use. I guess that's what put me on the path to try to improve things on the desktop client and web player for us, and advocating for it internally, and just learning more and more along the way.

**Emma Bostian:** That's great. I'm really happy that you could join us today. I say we just jump right in. Let's just talk about a few tips today for just making your applications usable by all people... Because at the end of the day, everyone should be able to accomplish the same tasks with your applications, regardless of their circumstance.

So let's just jump in with number one, which is one that I have a lot of trouble not making this mistake... And that's using too much animation. I love animation. I like to make things pretty. But the reality of it is there are people in the world who prefer reduced motion, who -- I don't know... Yes, they prefer reduced motion, at the end of the day.

Have y'all worked with this media query before, like prefers-reduced-motion? Nick, do you have any experience working with this one?

**Nick Nisi:** Very little. I really didn't even know that this was an accessibility concern until it was realized to me by going through the Apple iPhone settings, and knowing that there's ways to reduce motion in there... And I've seen people around me - my wife, for example, has reduced motion turned on on her phone, just because it kind of makes her a little bit seasick when she's pressing the Home button or swiping up and it's floating in and out... So that's what really turned me on to the idea that this is, because I really didn't know before that... And then I have seen this media query, but I can't say that I have used it too much.

**Tryggvi Gylfason:** Yeah, I feel the same way. I didn't really know that this was an issue, that people become dizzy; people with certain conditions or diseases can become dizzy if it's too much motion going on on the page. It makes total sense, but I had never thought about it until I kind of just learned about the media query. Now we try to use it. We recently added kind of like a scroll locked animation for the artist headers in the web player, and in the new desktop client that's coming up... And there we turned it off if you prefer reduced motion.

**Emma Bostian:** It's funny, because I'll open pull requests for things, and Tryggvi will be like "You have to add this media query", and I'm like "Crap, you're right." I always forget. But I think we forget as well that animation is very disruptive, not only to people with disabilities where they prefer reduced motion, but for everyone. You need to be using your animations very intentionally, because it distracts your users. The general rule of thumb there is the further an element is moving across a plane, the slower the animation needs to be... Or the eye won't be able to track it.

A good example of animation potentially that you wanna add is if you have a toast notification, like when you get a notification in the top-right of your screen - those are great. But again, some people just can't process it, it makes them feel sick, so it's important to add this "prefers reduced motion" media query.

**Tryggvi Gylfason:** There's this really cool little snippet that I think Jen Simmons, if you know her, and some other people (I think) at Mozilla developed... You can turn off animations or make the duration really small if the user prefers reduced motion... Kind of like jump to the end of it. There's this GitHub repository called CSS Remedy, where there's this little script that you can drop into your client and it basically turns off transitions and animations under this media query, by just using importing, and stuff. Is there any place we can share stuff like this?

**Emma Bostian:** \[00:08:22.03\] Why don't you throw it in the Slack channel?

**Tryggvi Gylfason:** Okay, I will.

**Emma Bostian:** Yeah, throw it there, in the Slack channel. Also, all these resources will be linked in the show notes for anyone who is catching this when it is not live. Awesome. Yeah, so that's a big one.

**Nick Nisi:** I haven't looked at that, but I'm assuming - based on what you've said - that it's specifically keying in on animations as defined in your CSS. Maybe transitions, and things like that.

**Emma Bostian:** Correct. Exactly.

**Nick Nisi:** I know that this is not a great question, but is there a way to define what would be something that you want to reduce animation on? Emma, you mentioned if things are moving a lot, they have to slow down... So that's kind of an easy indicator, I think. But are there more subtle animations that you might want to really focus on when it comes to accessibility like this?

**Emma Bostian:** I think it's really the ones that are moving location, right Tryggvi? If you have a slide-out navigation bar or a mobile nav, or if you have modals that animate in and out. I don't think changing the background color of a button is really going to impact accessibility... But then again, I'm not sure; maybe it does, and that's just me being uninformed about this. If I am wrong, please let me know; I would actually love to learn.

**Nick Nisi:** Yeah.

**Tryggvi Gylfason:** But I would assume that the more motion, the more things are kind of like zooming in and out, and panning...

**Emma Bostian:** Yeah.

**Tryggvi Gylfason:** ...that's probably like the worst \[unintelligible 00:09:39.11\] But I don't know.

**Emma Bostian:** Given the name of the media query, I'm not sure if it actually turn off all transitions or just geographic transitions, the ones that are physically moving. I'm not sure. Cool. So that's a big one that I definitely need to work on.

Another one I find fascinating, because it is not just an accessibility mistake, but it is also a UX or user experience mistake... And this is not displaying related information at all stages of a checkout or a process. One example of this is if you're buying a flight. And I have made this mistake multiple times, and this is when I am paying absorbitant amounts of money, pre-Covid times when we could actually travel... And I check out and then I realize that I bought a flight for the wrong day. And that's because the web page did not list all of the flight details at every stage of checkout, or every stage of the form. This is terribly inaccessible for people with cognitive disabilities. So if you have someone with short-term memory loss, they won't be able to remember what they're doing, or the details of what they're trying to buy. I also have this issue. It's not just an accessibility issue, it's a UX issue, and it goes back to Jakob Nielsen's Ten Usability Heuristics. I'm gonna link that in the show notes as well. I highly recommend checking it out, because a lot of design issues are also accessibility issues.

Yeah, have y'all ever gone through a process and realized how difficult it was to complete this task just because you couldn't remember what you were doing?

**Nick Nisi:** Oh, yeah.

**Tryggvi Gylfason:** Yeah, definitely. I feel like this is a part of accessibility that I overlook and I'm not an expert in. I feel like it's really natural when you get into web accessibility as an engineer, at least - you got straight to screen readers and ARIA attributes and labels and stuff like that, and they kind of look more cognitive disabilities, or just more like UX part of it. I feel like that's much harder for me to grasp and remember.

**Nick Nisi:** Yeah, same. The way that this mistake is written - it kind of made me think of a different use case, that is probably more UX-driven rather than accessibility-driven... And when you say "not displaying related information at all stages", I just immediately thought of logging into Google. Why make me put in my email address first and then my password on another page? It's a usability nightmare, especially on my phone, where I use a password manager. It prompts me to unlock with my face to fill in my email, and then I have to go to another page and do that whole thing again to put in my password.

**Emma Bostian:** \[00:12:12.27\] You know what's funny? That also bothers me, but they, I believe, do that so that you're focused on one task at a time... But let's think about that for a second. You've got two input fields. Do you really need to reduce the cognitive load on a login screen? Because that's pretty normal.

**Nick Nisi:** Yeah.

**Tryggvi Gylfason:** Do you know what else is really bad in forms? If you're filling out a form on a website and you try to submit it and something was wrong, and the system just completely forgets everything you've put in, and you just have to fill the whole form out again, hoping that you included what was wrong... That's the worst.

**Emma Bostian:** Let me just say this right now - if you're building forms, if a user is filling it out, tell them in real time if there's an issue, so that it's not just validating on submit, it's validating in real-time. We should be doing client-side validation, as well as server-side. Additionally, if there are requirements needed for a specific form field - like if you have a password requirement for special characters or length, tell them. Why do you wait until they try to complete a task to give them that relevant information - I don't know. Don't do it.

**Tryggvi Gylfason:** There's this super-cool thing, it's called UI Tenets and Traps. It's like a deck of cards that's super-well made. I'll share that in the Slack as well... And it includes concepts like this. I think the one I was just mentioning about, the form or the website forgetting what you've put in - they call it system amnesia. They just have these super-cool names for all these UX problems, UI Tenets and Traps... And they have really cool, real-world examples of these things in real products, from big companies. It's super-cool. I have one of these decks at home and I take a look at it every now and then.

**Emma Bostian:** That's awesome. There's also a separate, I think, for crappy (and I'm being PG, crappy), like UX design that also definitely impacts accessibility. I don't know where it is, but it is fun to check once in a while.

**Nick Nisi:** Another piece related to this - I keep going back to UX, and specifically phone UX, since that seems to be where I'm filling out forms very often... It's not showing information about what you're expecting. One thing that I see when I'm filling out forms - you know, it's asking for my address, and when I get to the address field, my phone's just like "I know your address. Do you wanna just tap this piece above the keyboard and I'll throw it right in there?" But the form is actually doing an autocomplete on your address and then it tries to fill it out to like "I know that that's a real address, so I'll fill it out", and it doesn't square that circle of "Yeah, it's all filled out", but it didn't trigger the right blur on some component, that causes it to say that the form is now valid.

So a UX thing is definitely make sure that your form works with autocomplete, because that's increasingly the easier way to do it, because my typing on my phone has definitely gotten a lot worse, with autocorrect and such.

**Emma Bostian:** Yeah, that's a good one. That also made me think of one... But this is actually gonna be like 15 accessibility mistakes, which is fine, because it's a wealth of knowledge here... One mistake I see web developers make is not adding the input type properly on different input devices. So if it's a telephone, please add "type as telephone." You know why? It's because when people are using mobile devices, which - guess what, they're the most common way to use the internet; if they're filing out a form with their phone number, it'll bring up the number keypad. Likewise, if you've got a password field, add that in there as the type. It's really useful for people.

**Tryggvi Gylfason:** I think that's probably also what the browser are using to do that autocompletion when they save your information, right? If they know that's a telephone field, they can put your saved telephone number in that field, and stuff like that.

**Emma Bostian:** Oh...

**Tryggvi Gylfason:** Yeah. I haven't had to design a lot of serious forms in my career, but I've heard it's really hard.

**Emma Bostian:** Forms are hard, although they seem the most simplistic. I think this is a good point, that like, hey, guess what, we're web developers and we should care about user experience, because a lot of our accessibility - about half of it, I would say, is design-focused... Or starts with design, let me say that; it starts at the design stage, and then the other half I feel like is up to us to implement.

\[00:16:11.21\] But yeah, let's talk about one more tip before we take a quick break here... And this is gonna be not updating state. This is a big deal. Tryggvi, can you explain what this means?

**Tryggvi Gylfason:** Yes. For example, you could take the Spotify Play button as an example. It's like a dual state button. You can also have buttons that are like three states. The Shuffle button on Spotify - it's off; you can shuffle the song -- sorry, the Repeat button. You can repeat the song, or you can repeat the whole playlist. So it's like a tri-state thing.

So when you have those double states or triple states or even more states buttons, you wanna make sure that you update the ARIA label, whatever way you are indicating to the user what the button is going to do, so the screen reader can pick up the new function of the button.

**Emma Bostian:** Definitely. Yeah, I think not being explicit enough with our language is actually very harmful. Imagine you are a blind user and you're trying to use Spotify, and you focus on the Play button and all it says is "play" or "play button." It's like, okay, I know this is a Play button, but what's the state? If I click this, is it gonna pause the music? I can assume that they would hear the music, right? But think about a different situation where you get to a button that triggers an action and you have no idea what state it's currently in and what triggering that action is going to do to update that state. It's actually quite harmful.

I forget -- there was a talk or a blog post somewhere that talks about how you should update the label or the ARIA label, but not both, because it can be really confusing for users cognitively. I'll look for that, and if I can find it, I'll put it in the show notes.

**Tryggvi Gylfason:** Yeah. We got an accessibility audit of our new test of client recently, and this is one of the things that came up, that the labels weren't being clear enough... So we have a bunch of Play buttons on Spotify. There's a lot of content on the page sometimes that you can play, and a bunch of those buttons would just say "play, play, play, play", but they wouldn't tell you what they were going to play... And in voiceover - and I'm not so familiar with NVDA or JAWS, the screen readers on Windows, but I think those also have functionality where you can jump between buttons, where you can see a list of all the buttons on the page... And it's not very useful if you see a bunch of buttons that just say "play". It would be nicer if they would say "play Water Under the Bridge by Foo Fighters", or something.

**Emma Bostian:** Right. Or "Pause Water Under the Bridge."

**Tryggvi Gylfason:** Yeah. That's one thing we can improve on.

**Emma Bostian:** Right. And to this other point of not updating state - visibility is a big thing. So if you have a -- let's say you have an accordion element that users can toggle to drop down and to read more information... Updating that state to say "Oh, this is expanded" or "This is collapsed" is gonna be really important, this real-time information.

Modal visibility is another one, and we're gonna talk about how to visually hide information in the next segment... But yeah, if you have something state-wise that will be changing, like the visibility status of a form, things like that, you need to make sure that you're updating it.

Awesome. So those are our three to seven tips, depending on how you count them... We'll take a short break, but when we come back, we've got a plethora of tips to talk about.

**Break:** \[00:19:28.23\]

**Emma Bostian:** So in the last segment we talked about a lot of things, like updating state appropriately, and making sure that you're displaying information... But let's talk about another UX issue - or visual design issue, actually - that is truly an accessibility issue, and that is not having enough color contrast between your background and your foreground colors. Why is this an issue? Would one of you like to explain?

**Nick Nisi:** You can't read it. It makes it very difficult to read.

**Emma Bostian:** Yeah, that's true... So that's it. That's it. Cool. Next tip. I'm kidding... \[laughter\] Color contrast is a huge issue, and if you're building - or designing and building - your own websites, you have to make sure that you're taking care to look at the color contrast, because sometimes to our eye it seems like something is contrast-accessible, but when you go look in the developer tools are not...

I don't know if it's Firefox, or Chrome - which one has the color contrast in the DevTools... But I think it's both of them at this point. I would hope it's both. You can actually go inspect elements in the DOM and it'll tell you whether it's AA or AAA accessibility compliant with the W3C standards... And the W3C, if you don't know, is the World Wide Consortium...

**Tryggvi Gylfason:** Yeah, I think that's both in Chrome and Firefox.

**Emma Bostian:** Yeah. World Wide Web Consortium. There are a lot of acronyms in accessibility, which is ironic... But yeah, this is a big one I see all the time, and to be honest, I'm a huge culprit of this. I make this mistake all the time, and sometimes I make it intentionally for sites that I'm just building myself, because I think it looks prettier... But that is not a good justification, and you should not violate this because something looks pretty.

**Tryggvi Gylfason:** I think Spotify has had problems with this, because it's been dark mode for so many years, and it's a little bit harder when you go dark mode to get this right, I think... And for the longest time, our Spotify green wasn't really AAA... I think it was AAA or AA accessible with white. So the green on white, which was so common in the client, wasn't actually that great.

**Nick Nisi:** Oh, no... That's a tough one, because that's like a brand color. You can't just change that.

**Tryggvi Gylfason:** Yeah. Do you remember -- it's been many years now, but I remember before I joined Spotify, when Spotify changed their green color to something else, and the whole internet was just outraged for like a week. Now that I see the old color, I can't believe it. It's puke green, honestly. That's what it reminds me of.

**Emma Bostian:** Oh, no... \[laughter\] Oh, gosh...

**Tryggvi Gylfason:** Can I say that?

**Emma Bostian:** Well, you know what - all major companies have color contrast issues. It's not a new issue; it's whether or not the company makes accessibility a priority.

**Tryggvi Gylfason:** I think this is one example of a thing that makes it better for everyone. Have you ever been working out on your balcony, or out in the sun on your Mac? It's really hard to see on the screen.

**Nick Nisi:** I've tried.

**Tryggvi Gylfason:** It's really hard.

**Emma Bostian:** Yeah.

**Tryggvi Gylfason:** So I think having good color contrast helps when you're situationally-disabled...

**Emma Bostian:** \[00:24:07.10\] Oh yeah, that's true. There are temporary disabilities, or situational disabilities. If you break your arm, that's a temporary disability, but it's still a disability, because you're using one hand to type. So accessibility doesn't have to be permanent, and it is not just about being blind or visually impaired. There are many different types of disabilities, and not all are permanent.

Talking about blind users in particular, Tryggvi, can you explain a little bit what a screen reader is for those who don't know?

**Tryggvi Gylfason:** Yeah. So a screen reader is a piece of assistive technology, which just means like software that can help people that are impaired in some way to use the computer. A screen reader is software that can read out the content of your screen out to you, in audio. So it's commonly used by people that have low vision, or people that are blind, so that they can use the web, and apps on their computer... And on Mac there's this built-in screen reader called Voiceover, and on Windows it's common to install third-party screen readers, either NVDA or JAWS.

**Emma Bostian:** And it's important to note that people using screen readers are not just tabbing through your application; they actually use -- I think it's called the Virtual DOM, right? It's not just tabbing; they have hotkeys and quick keys to get around a web page. This is why using semantic HTML is so incredibly important. You should be using main tags, you should be using aside, you should be using headers, those things.

There are regions of your webpage called landmark regions. Main is one of them, nav is one... And the reason you should use those and why those are so important is think about a table of contents in a book. If you need to quickly get to a chapter, you're gonna wanna go check what page it's on... When you use these landmark regions, people using screen readers can just click different keys. They don't have to tab through everything. They can click these keys and get to these different landmark regions.

**Nick Nisi:** Yeah, and the screen reader knows how to read -- it knows more information about what to say for those specific regions, too.

**Tryggvi Gylfason:** Yeah, exactly. The browsers have an API to build -- just like they build the DOM for the web page, they build an accessibility tree that's kind of similar to the DOM, and they give it to the screen reader software to navigate.

**Emma Bostian:** Yeah, that's awesome.

**Nick Nisi:** Yeah. Voiceover also exists on iPhones, and I'm sure that there's an Android equivalent as well, so it's just as important on mobile...

**Tryggvi Gylfason:** Yeah \[unintelligible 00:26:33.03\]

**Nick Nisi:** Before we break away from our mistake, which was about color and contrast, Mohammed does ask in the chat room - and it was something that I was curious about, too... He asks about light mode versus dark mode in all apps now... Do you think that that's a good thing accessibility-wise or usability-wise?

**Emma Bostian:** I absolutely do. I know it's more overhead for the teams building it, but if you are starting at an application all day, it's going to strain your eyes. So if you're working on light mode all the time, it's going to be difficult potentially for some people to use your application. My personal opinion is it kind of depends on the app. What type of application is it? If it's a banking application, most likely users are not gonna be sitting there for hours scrolling. If it's a social media application, I think it's imperative that you add both, because likely those are time sucks, and the ethics of that. It's helpful. So I think the answer is "It depends", like everything else in this industry.

**Nick Nisi:** Let me ask a Spotify-specific question, and you can answer it or not... But I guess -- I'm gonna admit, I'm not a Spotify user. So does Spotify have a light mode and a dark mode? I know it has a dark mode. Does it have a light mode?

**Tryggvi Gylfason:** It doesn't have a light mode.

**Nick Nisi:** Okay.

**Tryggvi Gylfason:** Maybe it should.

**Emma Bostian:** We don't control the product roadmap, Nick. We said that.

**Nick Nisi:** \[laughs\] No, I'm not asking for a feature, I was just curious if you have that and it goes into it. The app I work on only has a light mode. I'd love for it to have a dark mode, because I sit in the dark a lot working on it...

**Tryggvi Gylfason:** We made Spotify pink and orange and whatever color, internally, just to mess around...

**Nick Nisi:** Yeah.

**Tryggvi Gylfason:** There is no light mode right now.

**Nick Nisi:** \[00:28:14.27\] Okay.

**Tryggvi Gylfason:** I have a question for the chat here, and for anyone listening... This is an area for me of accessibility where I'm not sure where the problem should be solved. Is it in the app? Should each app adjust light and dark mode, and contrast, and inverted, and all that? Because a lot of the operating systems also have those accessibility features on phones, where you can invert the colors and you can do things... So I'm not sure how far to take this type of work when you're building a web application or not.

**Nick Nisi:** Yeah, definitely. And that kind of goes towards my question, which was if Spotify had a light mode and a dark mode, does that effectively double your design budget, having to manage both of those, or not? Obviously, you can't answer that, because you don't have it, which is fine...

**Emma Bostian:** Well, I was just gonna say that we have a design system, and the benefit of using that is that team can be responsible for developing a theme, and then our designers can just consume that theme. So is it really that much overhead? I don't know. If our process is a well-oiled machine, I don't think it should be.

**Nick Nisi:** Yeah, agreed. But going back to the accessibility options at like an OS level, being able to invert the contrast, or even go grayscale, I would very much assume that whatever is being run to change those colors and flip them probably greatly benefits from a high contrast between foreground and background text... And being able to switch what that is - it will still be readable in the inversion of that.

**Tryggvi Gylfason:** Yeah.

**Emma Bostian:** Yeah, sounds good. Speaking of things that are visual, let's talk about display: none. This is an issue I see all the time with web developers who need to visually hide an element, although it is still relevant. I've seen them add display: none, and this can actually be quite harmful. Do you all know why this is harmful and what we should be doing instead?

**Tryggvi Gylfason:** When you add display: none to an element, it's gonna be removed from an accessibility tree that the browser generates and gives to the screen readers, for example. So it effectively doesn't exist on the web page anymore in terms of screen reader software or screen reader users. So it won't be discoverable at all for those users.

**Emma Bostian:** This could be super-harmful if you add display: none to your navigation. If you have a slide-out net bar and it's not visible on the page - blind users still need to be able to access this content... And if you're adding display: none, it removes it from the document tree. Instead, we should be setting visibility to none -- or what is it? It's like visibility: none; you can set z-index to like negative a zillion... There is a code snippet.

**Tryggvi Gylfason:** Yeah, I'll paste something here in the channel. This is the one we've used at Spotify, but there's a bunch of these little utility classes where you can visually hide something, but keep it around in the accessibility tree, so that screen readers can find it and focus it, stuff like that. People like to code-golf these classes, so it is probably not the \[unintelligible 00:31:17.10\] but this is the one we use.

**Emma Bostian:** That's awesome.

**Nick Nisi:** Yeah, I like it.

**Emma Bostian:** For those listening, I am turning that code snippet into a gist, and I'm going to be posting the link in our show notes, so you can all go steal the code to visually hide an element.

**Nick Nisi:** When would you want to actually display: none? Is there a case where you'd want that?

**Emma Bostian:** Yeah. So for example if you have a modal. Let's say you've got like a login modal; if you're not actively trying to log in, I don't think anyone needs to know that that exists. That's not like a core navigational element. So that could be one. I don't know, I'm trying to think if there are any others, but I'm pretty sure that's the biggest one.

**Nick Nisi:** So it's really when you don't want a user or a screen reader to know about it.

**Emma Bostian:** Correct.

**Nick Nisi:** It would effectively consider this gone.

**Emma Bostian:** Yeah.

**Tryggvi Gylfason:** \[00:32:03.09\] Yeah, I'm trying to look at examples in our code. I can see for example we have an indicator when you're dragging and dropping things in the playlist, we have a little line that shows you where you're dragging and dropping. That one we use display: none on, I guess because it's not really that relevant for our screen reader users. We also use display: none in some of the ads, I see...

**Emma Bostian:** Oh, yeah. Cool.

**Tryggvi Gylfason:** It's a judgment call, I guess, case by case.

**Emma Bostian:** Yeah. Nice. Okay, let's move on to tip number six, which is a huge issue as well... Although, to be honest, I don't think it's as common as it used to be... Which is adding text as an image. If you've got an image of text and you're not adding an alt tag. First of all, you shouldn't be adding text as an image; definitely use fonts. I believe performance-wise it's better to actually just load in a specific font suite, because images are heavy... So yeah, text in images - you should be using alt tags in all of your images, unless they're not relevant. If they're just visual aids and they're not actually relevant to the content on the page, at that point you actually don't necessarily need an alt tag. Instead, you could just have aria-hidden="true" on that image, with a blank alt value... But yeah, you should always be having alt tags, especially if it is an image of text.

**Nick Nisi:** I always leave off alt tags on my rounded border images, for sure... \[laughter\] But one place you will not find a lot of alt tags is images on Twitter, which you can do. They do allow you to do that.

**Tryggvi Gylfason:** Yeah.

**Emma Bostian:** I make sure that I add alt tags to every image, although I have to say, it is hard to get alt tags correct... Like, what is the formula for adding an alt tag? It should be describing what's in the photo, not just a label for it, right?

**Nick Nisi:** Yeah, I think so. It's tough. I always struggle.

**Tryggvi Gylfason:** There was a project adding alt attributes with machine learning, or something...

**Emma Bostian:** Oh, gosh...

**Tryggvi Gylfason:** There's some models that can say "Oh, there's a squirrel sitting on a bench" when it looks at a photo.

**Nick Nisi:** That will definitely never have any issues.

**Emma Bostian:** Definitely not.

**Tryggvi Gylfason:** \[laughs\] Exactly.

**Emma Bostian:** It'll be perfect, just like image cropping on Twitter.

**Nick Nisi:** \[laughs\]

**Emma Bostian:** All these things are ethical issues, and we need to fix them as an industry... But that's a whole other -- we definitely should do an ethics of building applications episode. Maybe that will be my next episode, because it's definitely important.

Cool. Let's talk about one more tip before we take one more break... Let's talk about redundant ARIA. I see this a lot with web developers who are very excited about accessibility... And honestly, I think it's a great mistake to make, because at least at that point you're trying... But it's adding redundant ARIA, too much ARIA, the wrong ARIA... ARIA is Accessible Rich Internet Applications, for those listening, and there are a series of attributes you add to your HTML elements to provide additional context to screen readers... But I see this all the time with adding an ARIA label on icons that have text that is visible in the UI. This is actually redundant.

For example, if you have a question mark icon and your label is "Learn more" or "More information." If you have the words "More information" in your UI next to that icon, you don't need to be adding a label. You need to be adding a \[unintelligible 00:35:16.08\] to indicate "Hey, there's a relationship here. This text is visible in the UI." Yeah, that's a common mistake that I see made.

**Tryggvi Gylfason:** Yeah, I feel like it takes a while to get used to the ARIA labels. It's definitely taken me some time to learn how to effectively use them.

**Emma Bostian:** Yeah.

**Tryggvi Gylfason:** And I still feel like I'm not really an expert on that. It's unfortunately complex... And I guess a big part of that is how backwards-compatible the web has to be. All of this had to be added on top of existing technologies, while mobile - Android and iOS - can \[unintelligible 00:35:51.22\] from the start. So it's unfortunately a bit harder on the web, especially with the ARIA labels and things.

**Emma Bostian:** \[00:36:02.15\] One thing I see done all the time, especially on legacy apps, is adding a role... So I see \[unintelligible 00:36:06.11\] This is an example of redundant -- technically I think it's ARIA, but it's not prefaced by aria-... So adding a role used to be really important when we were doing layouts with tables, or if we were doing -- like, before semantic HTML elements came out, like nav, and footer maybe. You would see role=presentation a lot on table elements before Flexbox, before floats, all these things, we would have to use tables to lay out all our UI. \[unintelligible 00:36:34.21\] so that the screen reader wouldn't see a table and say "Oh, this is a table of information." It's like, "No, we're just using this for presentation or layout." But before nav was a semantic element, you would have to use a div or an unordered list, and you would set role=nav or navigation to let a screen reader know "Hey, this is a nav."

So now that we have come across Flexbox and Grid and more semantic HTML, we don't need role as much. It is redundant, so just make sure you're using semantic versions of the tags.

**Tryggvi Gylfason:** Yeah, I feel like a lot of the work of making a website accessible comes down to the -- it's like supporting screen readers in a good way. That seems to be a lot of the issues; all the ARIA attributes and all that, trying to make the website make sense without any visual cues. And I feel like the key to that, to be able to know what to do there is becoming proficient in any one screen reader software, so that you can actually check your work... Like, "If I add this ARIA attribute, how is it gonna sound in the screen reader?" Learning basic navigation with a screen reader - probably most people are on Macs if they're web developers, so learning Voiceover, I can definitely recommend.

There is a tutorial on the Mac on how to use a Voiceover that you can go through... But the one thing I cannot recommend enough is the Udacity course called "Web accessibility" that Google made, where a part of that course is actually going through Voiceover and learning to use it. That was key for me to understand -- you can answer more of your own questions about accessibility, and you can see the results, "Hey, would this make sense if I see it in the screen reader?"

**Break:** \[00:38:20.13\]

**Emma Bostian:** Alright, so we've talked a lot about excellent visual design, we've talked about making sure you've got appropriate ARIA types... But let's talk about using single-page application router libraries that don't work with screen readers. I'm gonna give this over to Tryggvi, because you have thoughts on this, and I do not... So please, sir, tell us more.

**Tryggvi Gylfason:** Right, yes. So this point is related to changes on the screen that are not announced to the screen reader. For example on Spotify, when you search, there's like an input box at the top, and as you search/as you type, in the background it's gonna load new search results. You don't need to press Enter, you don't need to perform any actions; it just happens automatically in the background. And we've got some feedback there that is really confusing, like -- you just don't know what's happening. They're typing, and then you press Enter, but that doesn't really do anything... They just have to navigate all of the text boxes into the results to realize that "Oh, okay, so it automatically searches for things that I was typing."

This was one feedback we got from our recent accessibility audit. I actually was trying to address this this week. We got some recommendations from people, like we could announce that a search result has been submitted with a string like searching for Foo Fighters, or searching for this, when it's submitting and requesting a new result. But I actually went for just when you press Enter, it would focus the top result into that. So it's kind of like fake submitting the string. So you would type something, you press enter, and it just moves the focus to the top result, since we know it's already there. But it's just more like allowing people to naturally go out of search into the results. That was one thing. I hope that's clear.

**Emma Bostian:** Nice. Yeah. That was awesome.

**Nick Nisi:** Yeah, that's interesting. It's something that you wouldn't think about... Or you wouldn't initially think about. I wouldn't have thought about that, with autocomplete stuff... Like, how do you effectively make autocomplete like that work when you're not seeing the results visually pop in? It's very interesting.

**Emma Bostian:** Definitely. Awesome. Let's move on to tip nine. Tip nine is one, again, that's very common to me, and that is about focus and keyboard traps. Someone in the chat - and if you're not in the Slack channel, I highly recommend you go join us for a live chat... But they are talking about focus styling, and all the time I see removing WebKit outline on form elements... And we all know that glowing blue outline that browsers add by default to form elements is not sexy... But guess what? We're not here to be sexy. We're here to get stuff done.

So if you're going to be removing that WebKit outline, you need to be providing an accessible alternative, and a good test that I always used to do is like "Alright, I should be able to turn away--" someone should be able to set focus in my UI somewhere, and if I turn around, I should be able to instantly know where my keyboard focus is. If you can't, that's a huge problem. But let's talk about keyboard traps and incorrect focus order. Tryggvi, I know you also have some good examples of this.

**Tryggvi Gylfason:** Oh, I could talk about this all day. This is a huge topic, and it's often one of the most painful parts. We had really big problems with this in the old test of client, navigating around in a playlist... Sometimes things that were buttons were just divs, so you couldn't actually focus to them... And when you'd right-click something where there's like a dot-dot-dot button you can go to that opens a context menu, kind of like when you right-click on your Mac and it opens a native menu - it would open the menu, but it wouldn't move you in there; there's no way to get into the menu. This is a big one, managing focus and helping you move around.

A common one here is when you're popping up a modal, maybe it happens automatically, maybe it happens as a result of the user clicking something... The model pops up, but the focus is not moved into the modal. So if a screen reader user or somebody that uses the keyboard to navigate around, they're just kind of stuck in the page behind the modal, in some void, and they can't close the modal and they can't get to the modal. It's kind of obscuring the rest of the screen. That's one common one...

**Nick Nisi:** \[00:44:09.13\] I have to ask, how do you fix that? Obviously, use buttons when things are supposed to be buttons, so that they are tabbable, too... But then do attributes like tab index play a role in that?

**Tryggvi Gylfason:** Yeah, this is a big one, a complicated one. For the new tracklist we build for the new desktop client, we actually build a whole system to navigate around with a technique called rolling tab index. A tracklist is built in a way where you can go to it with one tab, but you can skip the whole list with one tab, but within the list you can navigate in a grid-like fashion, with the up, down, left and right arrow keys... And we need to orchestrate all of that in JavaScript, and it's kind of complicated, actually. We do that with moving the tab index around, and moving the focus.

But you can skip out of the whole tracklist with one tab, so that you can go through the main sections of the applications quickly... Because a tracklist can be like 10,000 tracks; you don't wanna be stuck in there forever. You wanna be able to escape from it. So you can do stuff like that, you can build -- it's called Composite Widgets in the specs, where you can build these kind of grid elements or list elements that you can navigate with the arrow keys, and then jump out of easily... But that's really difficult; it's a lot of investment to do if you're not using the native input elements. \[unintelligible 00:45:35.25\] and the native dropdowns - they all have this, the keyboard navigations, but you can't style them, so people build their own... But then the keyboard support is often dropped.

**Emma Bostian:** Yeah. My question for you is about Grid... Because if you're building a complex UI with CSS Grid, and at different media queries you've got blocks, like Grid areas shifting around your UI... How does that impact the tab order, and should you use the tab index to fix that, or do you know if it's built into Grid to be able to -- because if you're moving things visually in your UI, depending upon what size viewport you're working with, you're not changing its position in the DOM, and the tab index is going by DOM order, unless you explicitly set tab index. So how can we work with that?

**Tryggvi Gylfason:** Yeah, as long as the element isn't removed from the DOM when you go between breakpoints, then you will stay on it. It might be somewhere else on the page, but... Yeah, this focus mentioning stuff becomes really tricky, because sometimes you remove content from the page when you go smaller, for example... Also, on Spotify for example, in the tracklist - you can remove tracks from a playlist. Let's say you're on a track - you're focused, and you remove it. We need to rescue the focus somehow. That's actually an outstanding problem we have now, that we haven't been able to solve in a really good way, where you're on something and it gets removed - where do we move the focus? We try to rescue it to maybe the closest element, or maybe go back to the root list... And this is also a virtually-scrolled list, so you could have something focused, and then you'd just scroll away a bunch, and it just gets removed from the DOM. What do we do then?

**Nick Nisi:** I would just recommend that you set an interval and then place the focus back in the top-left, whatever the element in the top-left is, \[unintelligible 00:47:23.24\] five seconds or something. That certainly won't upset anyone.

**Tryggvi Gylfason:** Yeah.

**Emma Bostian:** Not at all... Speaking of trolling our users, let's talk about live updates. How often have you seen -- and this is our last one, but I think it must be very annoying to people using screen readers... Unless you all have anything else on focus styling... It's just -- I'm trying to keep it somewhat succinct, because we could have a whole freakin' episode about focus states, to be honest...

**Tryggvi Gylfason:** Yeah.

**Emma Bostian:** \[00:47:56.05\] Cool, yeah. So live updates. Live updates are pertinent, relevant information that are time-sensitive... So if you have an error that's time-sensitive, or if you've got a toast notification that comes in, we need to alert visually-impaired and blind users that "Hey, there's something that requires your attention, time-sensitive, going on here..." But how do we do this in an accessible way that's not too abrasive to our users?

**Tryggvi Gylfason:** You can mark a section, like a div, to be a live region. I think it's called aria-live, the attribute there...

**Emma Bostian:** Yeah.

**Tryggvi Gylfason:** ...and then it will mark it so that whenever it changes content, text content inside of that note, it will be announced to the screen reader.

**Emma Bostian:** That would be good for stock markets or live sporting event updates. That's where you would use aria-live regions.

**Nick Nisi:** Can you have more than one?

**Emma Bostian:** I don't know...

**Tryggvi Gylfason:** Yeah, you can have more than one. And usually, you can make the toast a library too, so that when the toast shows up, you will kind of automatically be announced. But sometimes you also want these to be invisible... Maybe something obvious is happening on the screen... An example - on the Spotify desktop client you can download a playlist, and there's like an indicator that shows up, and it's obvious when it's done. We don't announce anything like "Download complete" in a text form, but we still want to do that to the screen reader. So we want to make a text announcement that's not visually there on the screen, but it's still announced to the screen reader.

And Heydon made a really cool package on GitHub... I don't know if you know Heydon. He has an accessibility tool...

**Emma Bostian:** Pickering...

**Tryggvi Gylfason:** Yeah.

**Emma Bostian:** His Inclusive Components book from Smashing Magazine is excellent.

**Tryggvi Gylfason:** It's really good, excellent, yeah. He has a package called On Demand Live Region on GitHub...

**Emma Bostian:** They also have -- I forget what it's called, but they have assertion attributes that you can change for the use, where it's like "Oh, it's polite", so aria-live="polite" or aria-live="assertive", and that'll just change the priority of it. If it's assertive - which I think is a very nice word; I would have called it like aria-live="rude", or something like that..

**Tryggvi Gylfason:** Rude...

**Emma Bostian:** Yeah. It interrupts whatever else is going on in your application and it will announce. Polite will obviously wait until everything else is done... But yeah, use aria-live="assertive" sparingly, please...

**Nick Nisi:** I was just trying to think of how you would do something like Slack with that... You know, if you have your list of channels on the left, and you're in a hundred of them, and there's people actively chatting in 50 of them, don't be assertive about putting a little dot on each of those audibly...

**Emma Bostian:** Yeah.

**Tryggvi Gylfason:** Yeah...

**Emma Bostian:** That could go wrong.

**Tryggvi Gylfason:** Yeah, I wonder if they do anything with that. I need to try to use Slack with a screen reader.

**Emma Bostian:** Oh, gosh... That sounds like my nightmare. That's like Dante's Inferno of nightmares... \[laughter\] Oh, goodness... Well, hey, we've covered a lot of really important things, and I think they're all actionable items that we can all adopt into our day to day work streams... Were there any things in here that surprised you in terms of common mistakes that you didn't know about?

**Tryggvi Gylfason:** \[00:51:04.17\] I feel like I want to learn more about where -- we were talking about the forms, and making sure you repeat yourself, and the information is there, and just making it so that you have to keep less in your head as a user... I don't know enough about those topics, I feel like. I wanna go learn more about that.

**Nick Nisi:** Yeah, I'll say I wanna dive deeper into live regions. I think that that's really interesting, and it's something that I haven't really considered. That can be very dependent on the types of applications that you're working on. You may not have something that would necessarily benefit from a live region.

And then another thing I wanna look more into is what you were talking about, Tryggvi, with dynamically updating tab index, and keeping some kind of -- I don't know, I'm referring to it in my head as like a focus manager for that, and how you can improve your app's visibility with that.

And then I think that one of the biggest takeaways for me is just what you said, Emma - disabilities don't have to be permanent, they can be temporary things... So it can affect everyone and anyone, and everyone benefits from accessibility, whether it's just a power user trying to quickly navigate with the keyboard, or all the way down the line... So it's really important to think about.

**Emma Bostian:** Oh, one quick thing I wanted to mention about live updates - I'm pretty sure live updates don't work on components that are unmounted and then get mounted. I think I had this issue -- Tryggvi, I don't know if you can attest to this or not, or correct me... But if you have an unmounted element, so an alert, and it's not mounted in your DOM and then you mount it, it's not going to announce its alerting unless it was already previously mounted and the state has changed.

**Tryggvi Gylfason:** Right... I'm not sure, yeah...

**Emma Bostian:** I'm pretty sure I've run into this issue multiple times, so just be aware, if you're working with live regions - it's not gonna update/announce/alert your users if it's not mounted; it's only going to alert if it was mounted, and the state changes. Cool. That's my last fun fact.

**Tryggvi Gylfason:** So like the first time, yeah.

**Emma Bostian:** Yeah. Nice. Well, I learned about single-page application router libraries, and things of that nature; I find that very interesting. So yeah, I really enjoyed this conversation, and I am looking forward to implementing these things in my workflow, and getting comments from Tryggvi on my next pull request that I need to stop adding so many animations.

**Nick Nisi:** Just focus on our feature request, please...

**Emma Bostian:** Ha! Focus... No, absolutely not. You can add it to the queue. In any case, that's all the time we have; sorry, we can't talk about your feature request, but I hope that you enjoyed this - ten accessibility mistakes to avoid in 2021 and forever... And make sure that you're checking Tryggvi out on Twitter; he does pot some high-quality memage, but also sometimes things about programming...

**Tryggvi Gylfason:** I'm mostly just lurking...

**Emma Bostian:** And send him all of your Spotify feature requests. And with that, thank you, and have a nice rest of your day.
