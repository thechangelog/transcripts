**Jerod Santo:** Today I'm joined by the CEO of htmx himself. It's Carson Gross. Welcome to the Changelog.

**Carson Gross:** Hey, thanks for having me on. Happy to be here and happy to talk about software, and maybe some htmx and so forth.

**Jerod Santo:** I'm happy to have you as well. I feel like our paths have crossed a few times. I think you've been on a show I produced, maybe a show that I co-hosted, but never got to sit down one-on-one and just talk software, so this is exciting to me. You have lots of opinions about software, don't you?

**Carson Gross:** I do. I have a fair number of opinions. What are they? You're supposed to have like "something, opinions, strongly held", or weak opinions, strong -- whatever that is.

**Jerod Santo:** Yes. Strong opinions, weakly held, I believe. It could be the other way around, who knows...?

**Carson Gross:** Is that the right thing? Well, Jerod, I have the opposite of what you're supposed to have, so...

**Jerod Santo:** \[laughs\]

**Carson Gross:** But I do have opinions... But I don't think everyone has to agree with me, for sure.

**Jerod Santo:** What's interesting about you - you've had these opinions kind of embedded in software over the years. Intercooler is where it started, htmx it became... You've spent a long time trying to get people to pay attention to htmx. I remember, because we had you on Go Time, we had you on JS Party, and you were kind of starting to get some traction... And then you just decided - I'm just guessing, decided - like "I guess I need to just become a Twitter troll, and that's how I'll actually get attention." Because eventually, you actually did rise to the point where htmx is out there. Like, you are a known quantity at this point. Was there an epiphany, where like "I just had to become the world's best troll"? Or how did you do it?

**Carson Gross:** Troll is such a -- you know, trolling, for lack of a better term, is good. Now, I'd always had fun on social media, not taking it very seriously... And I think what really happened -- and there's a video you can look up online; the speech that I gave at the Big Sky DevCon, which is the big conference out here in Bozeman, Montana, where I live. And I talked about sort of my experience marketing htmx, and how I had had Intercooler, the predecessor to htmx, technologically very similar. Conceptually very similar. And it didn't have nearly the success that htmx had. And I don't think that there's anything that I can point to and say "That's what worked." I think there's a lot of survival bias problems, and just random things that happened.

And so I did, when htmx was sort of going to go to 1.0, and also in our book, Hypermedia Systems, which your listeners can check out at hypermedia.systems, online for free, and you can buy it in hard copy if you want... Just sort of like a bunch of things came together. And I had been getting -- so when I went to htmx 1.0, I was like "Okay, I'm going to double down on being crazy on Twitter. I'm not going to troll people. I'm not going to attack people." That's one thing that a lot of people try to do, is you punch up to try and get a bigger account to say something to you... And I definitely engaged with bigger accounts, but I tried to be funny instead of sort of mean, and whatever.

So in that talk - I think it's called "A theory of open source marketing", or something like that... I talk about sort of like the whole process, and what I've found has worked online. So I wouldn't say I set out explicitly to be a troll. I think people are used to very serious technical content, and I do try to have -- I published an ACM peer-reviewed paper on Hypermedia, and we're hoping to get another one into the ACM Hypertext Conference this year... So we're doing intellectual work as well, and more serious work, but at the same time, I think the medium is the message at some level. And on Twitter, if you're taking it too seriously - or any of these Twitter-like situations - you're probably not utilizing it the way it was meant to be. It's like, it's a hundred and whatever characters... Saying something funny and coming up with a good meme is probably going to be much more effective than trying to be all serious.

So I think a lot of things kind of came together... Once ThePrimagen and Fireship\_Dev happened to cover htmx, like right when we were releasing the book... And so there was definitely this sort of moment on... And then the X algorithm changed briefly... It's changed back, so I don't get nearly the engagement I used to, but for just a brief period of time, the way I was posting was just perfect for --

**Jerod Santo:** Boosting you.

**Carson Gross:** ...yeah, for the algorithm. And everyone was like "Why is htmx on my homepage every day?" I'm like "I don't know, I just --"

**Jerod Santo:** "I don't know, but I like it."

**Carson Gross:** I just got lucky.

**Jerod Santo:** \[00:08:01.24\] Yeah. That's kind of the way it is. Yeah, you've got to play to the crowd, and know your audience, and know the medium, like you said. For a very long time on Twitter my entire approach was just memes. And I eventually -- and I did pretty well. I had some viral ones, and we grew our account from like 2000 up to like 30,000 people... And I just kind of grew sick of the entire rat race of what it was. This is back in the pre-Musk days.

**Carson Gross:** Right.

**Jerod Santo:** But it was fun for a while, to try to play the game and see if you can get good at it. And of course, you've been using that to promote your open source, and your thoughts, which really - it seems like you're trying to get your way of creating apps out there, through htmx, but also through your essays... Which are technical and thoughtful, and still interesting reads. They're not like ACM-style essays. Or maybe they are. I don't read the ACM. It just seems like it's too dry for me.

**Carson Gross:** Yeah, it's pretty technical and academic.

**Jerod Santo:** But just getting your thoughts out and sharing them... Hypermedia, a big thing that you're into; I think taking HTML seriously is something that I've heard you say... Where does this viewpoint of the world come, of web development particularly?

**Carson Gross:** Well, I think one thing that I've realized is I built Intercooler, and then htmx is -- I didn't appreciate hypermedia really when I built the things. There's this idea that like existence precedes essence. That's a philosophical idea where something has to exist, and then you can look at that and say "Okay, what's the essence of this thing?" Like, strip away all the particularities of this thing. Like, what's the essence of it? And that was very much my experience with htmx, where I had to build it and then understand "Okay, wait a minute, this is really generalizing hypermedia controls." When I created Intercooler and htmx, I didn't think "Oh, I know what I'm doing. I'm generalizing hypermedia controls." But when I looked at what I had done and I went back and read some of the historical writings on hypermedia, then I kind of developed that idea, like "Okay, this is why this is working as well as it is." Because it always felt like I wasn't writing that much code, and I was getting a lot of bang for my buck out of it. And I think the reason for that is that it was taking this sort of like higher level idea of hypermedia and then generalizing it, is the way that I would say it.

So I just think this is one of those things that you have to do it before you can really talk about it, and so I did it with IntercoolerJS and then htmx, and that put me in a position to write these more sort of like deep essays on hypermedia. And the thing that I came to understand about hypermedia as I got into it is it's one of a few different ways to build distributed systems. If your listeners are familiar with Roy Fielding, he wrote a really famous dissertation sort of early on for the web... And it's pretty academic and hard to read, so I don't -- there's a reasonable summary of it in the hypermedia systems book that you can read if you want... But what he talks about in there and what I've come to appreciate about hypermedia is it's just one of these sort of fundamental ways you can build a distributed system. And it was a really effective way, as evidenced by the fact that the World Wide Web sort of took over everything, in the late '90s and early 2000s. So developing an appreciation for what's unique about it, what are its strengths, what are its weaknesses... That's just something I've been able to do over the, last, say, 5 or 10 years, as I've been working on on these things.

And then I'm trying to communicate that to the broader development world, because the broader development world has sort of left hypermedia behind because of the weaknesses in particular of sort of the base HTML web model for hypermedia. htmx tries to address those weaknesses... And then it's a matter of convincing these people like "Hey, I know the old way was sort of clunky, and the big kerchunks, and all this flash of unstyled content and all that stuff, but the web's gotten a lot better."

\[00:12:03.27\] And by the way, htmx can make it even better, and make it more effective. And then the advantages of that old approach, which were simplicity - there's a simplicity to it, and so forth - it can be available to you, even if you're building some subset of modern applications. It's not appropriate for everything, of course, and so I try to talk about the tradeoffs that are inherent in hypermedia-based applications... But it can be used for a lot of stuff. And even if you don't use it, I think it's interesting from a technical perspective just to understand the ideas and what the tradeoffs are.

**Jerod Santo:** Sure. If you were to distill down what hypermedia is into a few bullet points or principles, so they're all on the same page...

**Carson Gross:** Yeah.

**Jerod Santo:** What would you say?

**Carson Gross:** I'd say a hypermedia is some sort of media. So text is the most common media we work with, HTML, with what are called hypermedia controls in it. And that's nerdy, but bear with me. What a hypermedia control is is something like a form or a link, where you've embedded in the document what Ted Nelson would call a nonlinear control flow mechanism, where you can jump to some other place, or you can submit some information. And that control - so let's use the term control, and UI controls, like buttons and so forth... That control is embedded in the document in a really kind of unique and interesting way. So you have you have content, and then you've got this control sitting there, right in the middle of the content. And so those are hypermedia controls.

And what HTML does is make it possible to sort of generalize that. So a lot more things can be hypermedia controls, and they can do a lot more, and they can replace only chunks of the screen, and so forth. And a lot of these ideas are very old. The idea of replacing only a chunk of HTML and a screen has been called transclusion for a very long time, and a lot of hypermedia academics have talked about it... But it just never really caught on in the Web, because the only way to do it on the Web previously was with iFrames. So htmx sort of like breaks out of that and makes it more general, and a lot smoother. You don't have to deal with iFrames and the limitations that that has.

But that's what I would say hypermedia is. It's some sort of media - we're most familiar with text, so hypertext, that has these weird things in them called hypermedia controls, that can interact with the network, and do crazy things, like navigational, and an update style when you talk about forms, which are added in HTML. You sort of update style operations to interact with a remote system.

**Jerod Santo:** So the H in HTML hypertext, right? HT, hypertext. HT hypertext markup language.

**Carson Gross:** HT - yeah, hypertext markup language.

**Jerod Santo:** So that would be a form of hypermedia. But htmx exists, and I guess a lot of these other styles of building applications exist because, like you said, of the lack of tooling, or the lack of power that's in the HTML spec, or in the elements provided. Was this something -- like, when the Fieldings and the Tim Berners-Lee's and, I don't know, early Microsoft IE browsers, Netscape people... Like, were they trying to build a hypermedia thing, and they came short of it, because HTML wasn't powerful enough? Or how did it get to where HTML is a hypertext, but it doesn't have all the controls that we need to actually build what we want to build?

**Carson Gross:** I think hypermedia is just sort of a weird thing, and people aren't used to it. We developers, when we think about distributed systems, we fall back to this RPC, remote procedure call paradigm, just very quickly. And maybe that's because that's what we work in for the most part, is RPC... I see with a lot of SBA style applications as -- it's much more of an RPC style application... Which is fine, there's nothing wrong with that. It's just different than hypermedia.

\[00:16:13.10\] So why did they stop with forms in HTML 2? ...which -- and that was a really important advance. To the credit of the web and what they did with the web, all of Web 1.0, which includes Amazon, and Google, and all that stuff - that was all done with Web 1.0 tools. That was a massive advance as far as distributed computing goes.

**Jerod Santo:** True.

**Carson Gross:** So the anchor tag and the form tag are both very powerful. Just those two little controls are very powerful, in some ways... But they just weren't as useful as it could have been if they had kept advancing the hypermedia aspects of the web. Instead, what they really sort of turned to is more -- they introduced a lot of APIs that were more client-side-oriented, and scripting. And so that makes some sense to me... You know, that's just the way we developers tend to think. And I think it gets big enough and the hypermedia people start getting ground out, and maybe they just weren't thinking too much about the idea of generalizing this notion of hypermedia controls...

I think it was it was so powerful at the time, it's hard to look back and say "Well, guys, this could have been more powerful." It was doing really well. And then JavaScript was there to address any issues that came up when it wasn't powerful enough. So we just sort of slid into this world where JavaScript took over more and more, so therefore there was a necessity to keep going with the hypermedia ideas that were sort of inherent in HTML.

I think it's reasonable -- and you mentioned before we got on here, the term REST has sort of been completely flipped in its meaning, from the start till now, because of that.

**Jerod Santo:** Totally.

**Carson Gross:** So there's a historical process there. You know, Google Maps, I think, shares a lot of the blame, because Google Maps came out and it was just this amazing app compared to like all the -- if you used Map Quest beforehand, you had to click a button, and kerchunk, and like go to the next thing... It was horrible. And Google Maps comes out, and that's not building in a hypermedia way at all. It's all RPC-style stuff, and it's amazing. And everyone freaked out and was like "Well, we've got to build apps this way now." And that's totally understandable, but it's just the historical process... So hopefully we can bring hypermedia back into the consciousness of web developers as a potential and good alternative for some class of web applications.

**Jerod Santo:** Right. So HTML has the anchor, it has the form, and we do have Ajax for like -- you can build in partial page updates... We can build around all this kind of stuff. But what are some examples of the things that htmx adds that really gives it what it needs to be a full hypermedia API, or whatever you want to call it?

**Carson Gross:** Yeah, the way I would say it is "How does htmx generalize this idea of hypermedia controls?" And so what I've eventually hit on was the htmx takes -- so anchors and forms. What do they have in common with one another? Some user action, a click or a submit, depending on which one, triggers an HTTP request. A request to some remote server. And then that server responds with HTML, and then that HTML is placed somewhere in the document. So just anchor tags and forms - that can be controlled with what's called the target attribute, and you can actually target an iFrame by name if you want. That would be transclusion, where you're only updating part of the page.

\[00:19:53.08\] So what htmx does is it says "Okay, let's generalize those things." First of all, any element can be a hypermedia control, can participate in this sort of like remote request world as a hypermedia control. Any event can trigger it, so not just clicks and submits, but also, for example, when an element scrolls into view, that's a common time when you want to maybe make a remote request, or something like that. And then it can issue an HTTP request... htmx also supports things that aren't supported by HTML right now. So in plain HTML right now, all you can issue are get and post requests.

That's, I think, a shortcoming of the HTML specification, that we're actually -- we have another project called Triptych, that Alex Petros, who's a core member on the htmx team, is really driving. And we're trying to get HTML to adopt some of the ideas of htmx. So we're trying to get those other requests - put, patch and delete are the ones most people are going to be familiar with - so that can actually use them from HTML as well. But htmx, you can use all those.

And then htmx - the final sort of generalization of it is you can, say, when the request comes back -- and that request, when it comes back, it isn't going to be JSON. So you're making a request URL. You're getting back HTML, and you can say in htmx, "I want you to target this element." And the element that you target doesn't have to be an iFrame. It can be any element on the screen. You use CSS selectors to pick it out, and then it'll replace that element. Or there's a few different options. You can say either replace the whole thing, or put it inside the thing, or maybe put it at the end of the thing, or whatever. And so that's really what htmx does, is it takes the sort of specialized ideas that you find in anchor tags and forms, and then generalizes them. So any element can act like a hypermedia control now and can replace any part on the page.

**Jerod Santo:** And if you were to provide the virtues of that, like "Here's why hypermedia is better" or, tradeoffs etc, as opposed to the way we're building web apps nowadays, which is very much more of an RPC style thing... What would you say?

**Carson Gross:** I would say the biggest thing is you're reducing the amount of state that you've got in the total system. Because when you have an RPC system, you have server state and you've got a client-side state store of some sort, and then you've got the DOM, which also at some level is a representation of the state... And all three of those things need to remain in sync via callbacks, or whatever, and blah, blah, blah. And so that's complicated. That's just another layer. Whereas if you go back to the hypermedia model, there's really just the server and the DOM, and that's it. So you get rid, you collapse one layer of state and state management that you have to worry about... So you're not really talking about client-side routing or any of that stuff. That all goes away. And it's just interacting with the server in a stateless manner, relatively stateless manner, sort of like the original web... So virtues of that are really simplicity. It can, in some cases, dramatically cut down on the amount of code you have to write.

The trade-off of that is that the interactivity that's available isn't always as high as it is if you have a much more rich client-side's model, and the sort of reactive feedback that you can get with client-side libraries. So it's gated on this network request model, and if your system can't do that well, then it's not going to be a good approach.

**Jerod Santo:** There's some echoes of an old-style jQuery building of applications where you have some CSS selectors, maybe you hijack a form submit, and then you say "When the submit happens, go grab this HTML, target this thing, put it in there." And we built web applications that way for many years, with more or less success. You can build yourself a sprawling mess like that. It can happen.

**Carson Gross:** Yeah. Absolutely.

**Jerod Santo:** \[00:23:51.16\] So one of the things that -- maybe the greatest virtue of the React movement was this one-way data flow, re-render, don't worry about the target spot for this thing, and is it going to intercept with that, and now I've got to update, I've got listeners, now I've got a PubSub going on, because I have different things I need to update based on what's coming back from the server... Does this have something built into it that helps avoid the jQuery potential spaghetti, or is it just a different way of going about similar apps, but because it's in the HTML, maybe it's simpler or cleaner that way? What are your thoughts on that?

**Carson Gross:** Yeah, I think there's definitely a line at which if you try to do too much with htmx, you're going to get into that sort of like "Oh man, this is just too much." And it's an interactivity line, in my opinion, rather than like an application size line. You can build very big applications with htmx, but if you try and get too fiddly with the UI, and you're putting a network request on every interaction, then that's probably not going to be good.

So you can use scripting with htmx... That's sort of the style of scripting that you would use. I would call it very DOM-oriented. You wanna try and have like a model. Whenever you have an additional source of truth in your system, and htmx is in there, you're going to start having to deal with synchronization issues. That's just the nature of it.

I think where htmx is superior to what you were talking about, the old jQuery mechanism of building these styles of applications... Older listeners might remember jQuery.load, which was the method actually that pretty much inspired Intercooler. Like, I looked at that and was like "Oh, that's cool. I didn't know you could do that", use that to solve this problem that I was having in a web app. And then I saw Angular 1 and the way they used attributes in the HTML, and I didn't like the way they were programming, but I liked using attributes. And so where I think htmx is superior and where you don't really get the sort of spaghetti code that you sometimes got with jQuery is because with htmx, you put the attributes that specify what to do on the elements themselves. So it's right there.

Older developers who work with jQuery a lot have no doubt run into this problem where there's a button, it does something - what does it do? Well, you've got to find the ID, and a selector somewhere, and maybe someone did something crazy, like string concatenation... So it's really hard to figure out what the heck is going on with that. And htmx eliminates that by basically putting the logic -- just like the href or the action on a form tag, it puts it right there on the element. And I think that dramatically simplifies things from a cognitive standpoint. You can obviously still build a snake's nest with it, and again, if you try to get too fiddly with interactions, I think that can lead to that situation... But for a large class of applications, the interactions aren't that fiddly. What you don't want is that really old reset of scroll state, and like the flash of unstyled content... Which has gone away in modern browsers, for the most part. But just that feel of like resetting everything on every action that you've got with the old web. htmx avoids that, and I think that's why you can make pretty compelling applications in many cases just using that model. Now, they don't have to spiral out of control, sort of like the old jQuery apps did...

**Jerod Santo:** No, I think you're right. The -- I don't know what you call it, but like the co-location of the code that operates on the elements, with the elements, is a huge improvement over... I think we went kind of crazy on separation of concerns back in the jQuery day, where it's like all your JavaScript is over here in this other file, that like randomly attached -- not randomly, but arbitrarily attaches to different elements... And then you're wondering -- in your HTML it's super-clean, but you're like, "This HTML has no idea what's going to happen with it." And so I think having it there does make a lot more sense.

**Carson Gross:** \[00:27:50.04\] Yeah, I wrote an essay on that idea called "Locality of behavior." You can find it on the htmx.org/essays page, where I talk about exactly what you're saying, which is this idea of co-locating the logic with the element itself, and sort of stepping away from separation of concerns... Which I think has not been nearly as beneficial as many of the advocates for it said it would be. And we've had that experience now with these old jQuery apps. We just know it's better. Like, "Man, I just wish I could see what this thing does."

**Jerod Santo:** Totally.

**Carson Gross:** So as long as that logic isn't too complicated and doesn't overwhelm the markup - and in the case of htmx, it typically does, and it's like two or three attributes at the most - then I think it's fine. Tailwind's CSS sometimes gets mentioned as well, and Tailwind's -- I've not taken the Tailwind's build yet, because when I see a ton of Tailwind classes on an element, I think to myself "Man, that seems like that should be a CSS class to me."

**Jerod Santo:** Right.

**Carson Gross:** But it's just probably a skill issue on my part. So I think there's a balance there...

**Jerod Santo:** There is a balance, and I'm definitely on that fence, where I'm not sure exactly -- I kind of agree with you, but there's a line that you cross at a certain point where it's like "I feel like I'm just writing my CSS in here." Anyways, we can get on a tangent on that. I think there's certainly, again, virtues to having it localized there... But sure, it'd be nice to have just like a couple of classes, and then have that stuff tucked away.

**Carson Gross:** Right.

**Break**: \[00:29:30.09\]

**Jerod Santo:** One thing that's interesting -- I mean, what's normal you have on your website is porting stories, like "Here's a port from React to htmx", and there's a few of those. What's abnormal, and I've found refreshing and cool, is you actually have a counter port. It's not really a port, it's a lack of a port. It's Gumroad. They were going to choose htmx for a new system, and they actually decided not to... And so you host that there, on the htmx.org essays, written by Gumroad founder Sahil. I'm not sure how his last name is pronounced... Lavingia? Yeah, we'll just leave it right there. That's cool. How did that come together? And then maybe just give a summary of like what did they find? Why did they decide not to for their particular case?

**Carson Gross:** Yeah, I think that's a good essay, it's worth reading... And I just saw them on Twitter talking about htmx and being pretty negative about it. And one thing that I've learned about online behavior is that often your first reaction is not the good one. And if you do the opposite -- you know George Costanza, when he did like opposite? He was just like "I'm going to do the opposite of everything I would do."

**Jerod Santo:** Yeah, totally.

**Carson Gross:** So I was like -- I've been trying to do that, and it has been surprisingly effective in my life. And I was like "You know what? Hey, it didn't work out." I don't want people to use htmx if it's not going to be good for them. No one's winning in that scenario. Just someone is pissed off they had to use htmx. So let's try and capture why htmx didn't work well for this particular use case. And so I asked him "Hey, would you be willing to write an essay on it?" And he agreed, and sort of went through, and like "Here's what we've found."

I would say the way they were using htmx -- it was an SPA developer using it. It was kind of a square peg, round hole situation... And so they weren't using htmx the way I would use it. But at the same time, that's going to be the same experience that a lot of SPA developers have. And so they just -- they're really familiar with the SPA tools, and they make things work a certain way, and they're used to that... And so if they come in and -- I think the big meta lesson in my mind from that essay is like if you're going to take the htmx build, you really have to take it. You have to understand hypermedia, and think in terms of hypermedia. And if you're trying to do these really fiddly little interactions, it's going to get ugly, and not be super-effective.

I saw WebDev Cody as well. He never wrote an essay. I asked him to, but he just was like -- I think what he tried to do is he tried to move to Go. He was a JavaScript guy and he tried to do Go and htmx at the same time. And I think that was a mistake, because now you're fighting with the new infrastructure of Go, and you don't know where -- you know, "Where's my wrench? Where's my hammer?" Like, everything's in a different place... And at the same time, you're also trying to make this pretty. And there is a really big difference between building hypermedia-based applications and building SPA style, or RPC style applications. And I've seen that, and not just his case, but in many cases. If you try and bite off too much, it can, I think, end up in a pretty bad spot.

I always recommend that people try htmx out first on for example like an internal tool. Maybe you've got like some underserved internal tool that is used just by your co-workers support, or whatever it is, and it's just like an old-school Perl app, or PHP, or whatever... And maybe try sprinkling some htmx in there, and see if you can get some quick wins with it, and then that'll sort of show you what the strengths are. Rather than "Okay, someone on Twitter said hypermedia is good, so we're going to rewrite the whole app in hypermedia, and we're going to try and make it all work exactly the same."

**Jerod Santo:** Yeah... So one of the reasons that I've found -- they did list like five, I think, reasons why, bullet points. And one of them I've found interesting, which is a little bit outside of your control, and it was AI and tooling support. And this is probably outdated at this point, because even -- I've had this similar situation with AI tools with Elixir; the earlier versions just didn't really know Elixir very well. It just was wasn't very good at them. And now as I've reached I think Gemini 2.5, and specifically Clawed 4, it's just better. Like, it just knows more, and so like that problem kind of went away, to a certain degree.

\[00:36:14.23\] But there is kind of that old saying, "Nobody goes to that restaurant anymore. It's too crowded." It's like, Next.js sucks all the air out of the room, and so people are just going to pick it because it's what they know, it's what everybody else does, it's where the jobs are, where the money is... And so to a certain extent, some of the reasons why people make choices aren't actually based on the merit or anything you can control at all. They're just kind of like the way \[unintelligible 00:36:37.14\]

**Carson Gross:** Yeah. Well, popularity is its own merit. Nobody ever got fired for buying IBM. It's maybe frustrating to people who are more philosophically inclined, but it's just the reality of life. Technology is very much a winner take all sort of situation, in many cases... Although we do see -- Microsoft, for example, was the big dog for a long time, and then was down for a little bit, and now it's maybe back... So these things that seem inevitable -- there are these ebbs and flows.

And one thing I say in that talk that I gave at Big Sky Software is if you're a little guy like me - it's just me and a couple of other guys working on htmx - really the important thing, I think, is hanging around, and waiting for the winds to shift in a direction that is favorable to your technology. And the best way to do that, in my experience, is to stay unrelentingly positive and funny, and just have fun. And so that's one reason why is -- like I told Prime when I was on a show once, "Being funny is no joking matter." You have to like keep it fun, or you're going to quit, because it's frustrating, and these people are just picking that because Facebook said so, or whatever... And you just have to be okay with it, and like "Hey, we're going to go over here, we're going to have our fun, and we're going to make some funny jokes." The technology is serious, there's good ideas behind it, and I'm happy to talk to people about those ideas, but I'm not going to let the fact that so many people pick Next.js by default, and pick the SPA approach by default knock me out of a game. Because I'm not changing that anytime soon. I think we made a dent, and we made a dent because we're just hanging around, and having fun, and saying some interesting things.

**Jerod Santo:** Yeah. Persistence absolutely pays off.

**Carson Gross:** Yeah.

**Jerod Santo:** Especially if you can stay positive and interesting for long enough, people eventually pay attention to you. So Next.js - of course, lots of money behind that sucker. htmx - do you have a goal in mind? How do you make your money? Is this just like something you do because you're a consultant, and you use it yourself, or how do you make your living, and how does it play into that, if at all?

**Carson Gross:** I teach at Montana State University. So I'm a professor. That's how I make my salary, and healthcare, and all that stuff. htmx does have a fair number of sponsors; many more than I ever expected, which I'm very appreciative of. But I try to treat that money as not real, because it could evaporate tomorrow. And htmx is BSD Zero licensed, so there's not money to be made.

**Jerod Santo:** There's no plan there.

**Carson Gross:** There's no plan. Yeah. Do I look like a guy with a plan to you?

**Jerod Santo:** \[laughs\] I wasn't going to say it. You look like a St. Louis fan. That's all I got. But you're out there in Montana, so how do you get to be a St. Louis fan?

**Carson Gross:** It's a funny story... I've actually never been to St. Louis in my life. So I coach youth baseball. That's like my other cape that I wear. And I was in California for a long time; that's where I grew up. And in California, it was impossible to be the Giants, or the A's, or the Dodgers, or the Padres, or the Mariners. Like, you just could never be any of those teams.

**Jerod Santo:** Oh, they're all taken by the time you submit your name?

**Carson Gross:** Yeah, exactly. The cool coaches get all those. And I got sick of fighting over it. I grew up a Giants fan, but...

**Jerod Santo:** Okay.

**Carson Gross:** \[00:40:13.26\] But the Cardinals were always available, and I was like "I don't know, I like the hat. Kinda cool." I respect their program. And so we just had all this Cardinals gear laying around, because that's what my little league teams always were... And then MLB.TV came out and they wouldn't let me watch the Giants, because it was in market.

**Jerod Santo:** Oh, like regional stuff?

**Carson Gross:** Yeah, exactly. And so I was like "Well, I got the hat. I might as well start watching the Cards, I guess..." And so I started watching the Cardinals, and it just kind of spiraled from there. And now I like the Cardinals more than I like the Giants, so...

**Jerod Santo:** That's hilarious. I had a similar experience in my childhood. For some reason -- it's just based on the markets. For some reason, I'm here in Nebraska and I don't know why it's this way, but when I was growing up, in the '90s on TBS, I think it was, every weekend it was just Atlanta Braves.

**Carson Gross:** Oh, Braves.

**Jerod Santo:** Which - why would it be Atlanta? I guess probably because in local markets --

**Carson Gross:** Turner.

**Jerod Santo:** Yeah, there you go.

**Carson Gross:** Turner's out of there.

**Jerod Santo:** Yeah. So I don't know why, but the Braves was on, and I watched the Braves like religiously as a kid, and I just loved them, and they actually were a good team back in the '90s. Good pitchers etc. They had some world series runs, and so I became a huge Braves fan. Now I'm not so much anymore, but it just seemed like for me, a kid in Omaha, I'm like "Why do you like the Braves?" Like, that's the only thing on TV, you know?

**Carson Gross:** Yeah, exactly. That's basically my story, too. Actually, I did the -- especially when it was super-hot, about like six or eight months ago, a guy in the Cardinals organization saw me, and saw me wearing a hat... Like a technical guy, a programmer. And he reached out and was like "Hey, do you ever want to come down and get a tour of the stadium, let me know." I'm like "Man, I should do that."

**Jerod Santo:** You should totally do that. Or at least go to a conference or something in St. Louis. Although it's kind of cool to be able to say "I've never been there." You'd ruin that part of it, but... Speaking of cool venues, we were at Microsoft Build up there in Seattle recently, and they had their after party in the Seahawks Stadium. I can't remember the name of the place. Lumen Field?

**Carson Gross:** Yeah.

**Jerod Santo:** So like Microsoft bought out Lumen Field for the night, and they just had their after party on the field. Like, you're on the field, they'd let you kick field goals, and stuff... That was pretty rad, just to be able to be there on the 50-yard line.

**Carson Gross:** Yeah, that is pretty cool. I'll never forget -- what's his name? Beast mode... Marshawn Lynch, that run that --

**Jerod Santo:** Oh, man...

**Carson Gross:** Do you remember that run of his?

**Jerod Santo:** Of course I do. Yeah.

**Carson Gross:** Where he just throws that guy off... So I went to Berkeley for undergrad, and I was there when Marshawn Lynch was the runningback, and he was just always such an unbelievable football player... I'm not a Seahawks fan --

**Jerod Santo:** Same.

**Carson Gross:** ...but I watch that video every once in a while, because I'm like "Man, I need to see the greatest run by a Cal Berkeley alumni ever."

**Jerod Santo:** Unbelievable. Yeah, absolutely unbelievable. Alright, well, now we're talking sports. Let's get back onto your essays. No, I apologize. Vendoring or Codin' Dirty - I want to talk through a few of your essays, just because I think you do a good job of... Now I know you're a teacher, and that makes more sense... Of elucidating your thoughts and kind of your style of programming.

Let's go to this one, which I think you and I both seem to, which is the "Codin' dirty" one. I think you wrote this last year... And it's a bit of a response to clean code; not specifically, but there's this idea of how you're supposed to write software. Of course, Bob Martin's Clean Code book, which is a both highly regarded and also hated, kind of a piece of work... And you wrote "Codin' dirty", which is contrarian to a certain extent, but I also find myself nodding my head. So talk me through some of the thoughts here on your coding style.

**Carson Gross:** \[00:44:04.05\] Well, Bob Martin and Clean Code is definitely a dominant idea. It's a dominant sort of ideology, I would call it maybe, in coding. And there are aspects of it that I don't hate, or that I don't disagree with entirely anyways, but there are aspects of it that I don't agree with. And I definitely code very differently, and I've had a pretty successful programming career... And so I wanted to communicate, particularly to younger developers, "Don't be intimidated by these things." It's one thing I dislike - and I Bob and I have kind of gotten into it on Twitter a little bit, jokingly though. He's been a very good sport and doesn't take it seriously, so I really appreciate that. We don't agree with one another, but we can make a joke out of it.

So I really think there is a -- what do I want to say...? I think younger developers can be intimidated by these terms. Clean code is one of these sort of -- like, how could you be in favor of dirty code? How could you be opposed to this? And then you look at the actual ideas and you're like "Wait a second..." There's the headline, and then there's the actuality of it. And the headline - of course, everyone wants their code to be clean, but then the realities of the recommendations I think don't necessarily hold up. So now that I've had some success as a programmer, one of the things I'm trying to do is to go out and say "Look, guys, I do things pretty differently than most of these -- particularly sort of the consulting-oriented, clean code, agile, that whole world; the way they say to do things, I do things pretty differently and I've had a pretty successful career."

So that was the inspiration of this essay... And I think the three sort of things that I went at - so I don't believe in short methods for the sake of being short. I think long methods are okay. And I don't unit-test my code. Like, I don't do TDD. I do test my code, but I don't necessarily do unit testing, and sort of what I would call ideological approach, of like always writing a test before you write any code.

And then the last thing that I take issue with, or that I sort of say - this is how I do things different, is I tend to write code with classes that are much denser and bigger than clean code advocates would recommend. So I tend to mix concerns. I have classes that do more than one thing, which is something that clean code people would object to. So those are sort of the three things that I picked out in that essay to focus on, and I'm happy to go into each one individually.

**Jerod Santo:** Yeah, let's talk about big functions, because I've definitely done it both ways. Early on in my career -- early on, you don't really have opinions, because you don't know what's good or bad. You're just like "I need to make a thing, and so I'm going to try to make the thing." And so I was very open to advice. And I remember early on, in the Ruby community, I took Sandi Metz's advice on many things. And one of the things she said -- of course, she's very level-setting in her ideas... But she'll say "Follow the rules until you know better, and then break the rules all you want, as long as you know why you're breaking the rules."

One of the rules that she had was short functions. And I think she even says, like, five-line functions. Just give yourself five lines, and if it's more, just have another function. And just do that for a while, and eventually you'll know why, and you'll know when not to, and you'll break that rule. But there's a rule. I think it was five lines, which in Ruby is very small, because two of them -- we're not using curly braces, so like two of them is the def and then the end. And so you're like - what, three lines? I tried to follow that rule for a while, and I've found it incredibly constraining.

\[00:47:57.28\] And eventually, I broke out of it, but it always gave me this sense of like -- you know, if a thing starts to get too big, I start to at least think about a refactor. I may not do it... But I didn't really consider back then this idea of function size matching kind of the importance of the code... And I definitely realized it with classes. I mean, you have like your user class, for instance. You can go look at any app and see its user class, or whatever. It's functionally equivalent to that --

**Carson Gross:** Massive.

**Jerod Santo:** And you're like "Yeah, okay, here's the app." Or there's usually like two other classes that are like "Here's where the majority of the app is." I think that's good. I think it's good to have this sort of like matching up, which I think is some of your point. But when you say long functions, or big functions, are you talking like 10 lines, 20 lines, 500 lines, 2000 lines? What are your thresholds?

**Carson Gross:** I don't really have a threshold. I definitely will start feeling antsy when a function has more than, say, 100 lines of code in it... But if it's an important function and if there isn't reusability to be achieved by pulling the code out, I still won't refactor it, just because it's too long. I try to make being too long not the reason I do things. If there's code reuse, then I'll do it. And the reason for that is -- so you touched on it already. I think important functions should be big. Important things in general should be large, and unimportant things should be small. And so when you go into a codebase, if there's 100 five-line codes, it's kind of hard to get a handle on what is happening there. And obviously, it depends on exactly what style of code that is. Is it like a library, like a list thing? Or is it like domain logic? Or is it control logic, or whatever.

**Jerod Santo:** Sure.

**Carson Gross:** So it really depends on what style of code that is. But I prefer to go into a codebase and be like "Okay, here's the five functions that are really important for me to understand. Let's go through them and read them top to bottom", and not have to be navigating down five levels deep, and then coming back up, and then going back down... You know, doing that sort of treewalk that you have to do if you have too much decomposition in a codebase. And I use IntelliJ and all the JetBrains products, and I'm good with navigation... So I can move around, but I still just find myself preferring just like "Just tell me what you're doing." Show me, like, "You do this, then you do this, then you do this", and fine. It doesn't all need to be refactored out if there's no code reviews to be achieved with it. So I think that's important.

I think another important observation... And this is -- a bit of wisdom in computer science is that there's two hard problems - naming things and cache invalidation, and off by one errors.

**Jerod Santo:** Right.

**Carson Gross:** So naming things is one of the two hard things in computer science. And whenever you extract a function, you've got to name things. You're like committing to the parameters, the signature... Like, if you accidentally make it public, someone else suddenly starts relying on it... There's a lot of danger in pulling code out into a separate method, that I think is unacknowledged by people that act as if pulling code out to another function is just a free operation, or in fact will just make things better just because you get it. That name changes, you're sort of committing yourself to that particular bit of logic now, because it's somewhere else, so it's harder to go and change, and there's just a lot of -- like, things like that, where you end up constraining yourself because you've committed to this sort of signature now, and name for this thing.

So I definitely -- like, I start to get itchy when a function's 100 lines of code, but I'll also try to be disciplined and like "Okay, if there's no code reviews to be found here, I'm not going to pull it out just to pull it out." Maybe for testing, maybe... But then that gets to the testing thing, where I tend to prefer end to end, and what are sometimes called integration tests, rather than unit tests of like functions. Like, I don't like unit testing as much as I like those other styles of tests... So that I think sort of dovetails with my opinion on longer functions.

\[00:52:13.11\] There has been some academic work, some actual empirical work on this, believe it or not, and the empirical work that I've seen indicates that actually, until -- I think it was like 200 lines of code, you actually end up with fewer bugs per line of code if you're willing to allow functions to get larger. And then there was a modern -- someone kind of like tried to fact-check me with a more modern paper on it... And again, that paper didn't show strong association with longer methods and bugs per function. So it doesn't seem like there's much empirical evidence that long functions are bad. It's mostly just an assertion based on what, as far as I can tell, are aesthetics.

**Jerod Santo:** Right. So here's something that I will do sometimes... And I wonder if you would do it or not. It sounds like probably not, if code reuse is your indicator for extraction. Let's say I have a module that does one major thing, and it's kind of complicated. Like, let's just call it like a checkout of an e-commerce. You know, at checkout time there's five or six things that you have to do. And so there's your function - whatever, call it checkout. And then it's going to have five or six steps. And each of those steps -- I might even leave myself a comment, like "Here's my steps - one, two, three, four, five", and I'll describe them. And then I will either have to decide, "Do I just code those up right here? Or is each one of those the name of a subroutine and I code them up in separate routines?" I've done it both ways. I honestly don't have a strong opinion on it being better or worse... But would you just like code all five steps right there in the function most likely, unless there's code reuse?

**Carson Gross:** Yeah.

**Jerod Santo:** You would.

**Carson Gross:** I'd probably put all five right there, maybe with comments indicating "Step one, step two, step three, step four, step five." And in particular, what I would look for is is there shared state between those things? Because if there is, if there's more than one thing that's kind of crossing boundaries for those five steps, now extracting that out can get dangerous, because do you have to encapsulate that state, and are there callbacks, or like some crazy -- you don't want some crazy callbacks... But I would be inclined to write it the linear way, with just ifs and loops, and then if that proves to be unstable or I need to test them individually or something like that, then maybe I would extract them at that point. But I definitely wouldn't extract them -- I would write it for sure the first time just a straight line code --

**Jerod Santo:** Straight through.

**Carson Gross:** ...and then if that wasn't good enough for whatever reason, then I would start -- and I would look for opportunities to like pull out utility methods, if I see kind of the same thing in a couple of places, but... I wouldn't feel it necessary to structure something where it is. That's an important thing for someone to see, that there's five things going on here, and sort of in a linear set of steps... And so I wouldn't try and hide that from them too much.

**Jerod Santo:** Right. But for instance, if step two was calculate shipping - well, there might be some other time you're going to calculate shipping. You'd probably wait until you're actually doing it elsewhere, then you might pull that one out, call it from there, and then also call it from somewhere else. That makes a lot of sense to me.

**Carson Gross:** Yeah. That's the way I would do it.

**Jerod Santo:** I do like unit tests, not for any other reason but they're easier to write, and they're faster to run, and so I feel more productive. Integration tests are like such a drag, because you have to do everything... And I know that's like what the app does, but it makes me not like them. They're slow, they're expensive, a lot of times they include some sort of a runner, which may have to fire up Chromium, or something...

**Carson Gross:** \[00:55:49.28\] Right. Yeah, so the language here is always difficult, because like, what is a unit test? And this is one thing that infuriates me whenever I'm dealing with people online. Test advocates are often like -- they'll argue definitions, rather than concepts. It's like "Well, that's not a unit. That's not really--" I was like "Okay, sure \[unintelligible 00:56:07.03\]

**Jerod Santo:** Right. "Not useful." Yeah.

**Carson Gross:** So to me, a unit test is a test where you have one function, that maybe doesn't call any other parts of your system, or you mock those calls out; that's a very common practice in unit testing. And so you're really just testing the logic in one method at a time. Whereas what I call an integration test is anything sort of higher level than that. And I think even testing the public API of a class, for example, is not unit testing necessarily, because the internals of that class might be pretty sophisticated; they may hit a database, whatever. And so that's the level that I like to work at.

My criticism of unit tests is that they often test implementation details, and they're not high-level enough. And so yes, setting up a good integration test suite can be some work, and can take some time to build out all the utilities that you need, and so forth; often you have to build data objects, or whatever... But my experience is that those tests tend to survive much longer, because they express higher level truths about your codebase. Whereas unit tests tend to express more ephemeral, like, "This is true for now, but then if I go into a refactor, then they're all going to break." And the real hard thing about that, in my opinion, and one reason to maybe be a little bit more careful with your unit tests, is that when you get a large unit test suite and you've got thousands of tests, that size has its own quality of like leaning on you. Like, you can't do a big refactor, because you're going to break all these tests. And which of these tests actually -- like, which of these tests that are broken are broken because we did the refactor and we want them to break, and which are tests that we actually broke something important? And that can be really hard to tell when you get -- I've worked at companies with 50,000 tests that take 10 minutes to run. And it's like "I'm not going to refactor anything, because if I do, if I try and clean it up, all this stuff is going to break and I'm going to spend four weeks trying to figure out what is really broken and what just went away, or whatever."

So that again, I think that's one reason to try to get the assertions that you make about your system up to higher levels, sort of away from the details of the implementation, which unit testing -- and again, you can argue about language, and all the rest of it, but I think unit tests tend to test implementation details too much. But I acknowledge a hundred percent what you said, which is that the higher level the tests get, the harder they can be to run. They take longer to run, because you've got to set up maybe some state, and so forth... And then when you get to end-to-end tests, like you're talking about browser tests - it's so far away from the code that like, "Okay, did this test break because a label changed, or an ID of an element changed? Or did something actually break down in the mod?"

So I love end-to-end tests, but I think you have to be really careful there too, for exactly that reason. You need to keep that end-to-end test suite relatively small, otherwise people just start ignoring it, because it breaks all the time, and no one can figure out what's going on with it. And that's why, again, I really focus on what I would call integration tests, for lack of a better term; just like not unit tests, and not end-to-end tests. So what are those? I don't know. Integration tests.

**Jerod Santo:** Right. Somewhere in the middle.

**Carson Gross:** Those in-betweeners. Hopefully, they can run fast enough that they're still not incredibly painful, and then when something breaks, it's more obvious than in the end-to-end case. So things break less frequently than unit tests, and more obviously than end-to-end tests. So that's why I speak up for what I call integration tests, but... I don't know.

**Jerod Santo:** Right. Yeah, there's certainly a give and take with a test suite, where it's like on one hand it's kind of an asset that you have, because it gives you assurances that your software continues to operate the way it was designed. Of course, with the asterisk in there that maybe you tested it wrong, and stuff like that. But on the other hand, if you value that asset too highly, now it's actually holding you back from making progress.

\[01:00:18.19\] So in smaller codebases, especially ones where I'm the primary author, I have no problem either refactoring the tests right along the code, or deleting the tests, sometimes after I write the unit test; it's already done its job, I know the function works... Tests can be gone. But in large projects, with multiple developers, you didn't write those tests in the first place... You don't know if that test is passing because you changed this interface in a way that makes sense, or if you actually broke something unbeknownst to you. And so it becomes a -- it can become a hindrance to progress in that sense.

**Carson Gross:** Yeah, and I think this is similar to the case with extracting functions. People act like adding a test is cost-free, or like always a net positive. Like there's no cost associated with it. And that's just not true. Like, extracting a method, there's a cost associated with that. Adding another test that isn't going to -- even if it's testing correct behavior today, if it's super-low level and testing like a particular implementation, that can hold you back from changing that implementation. And people say, "Oh, well, you just refactor the tests, too." And that's fine to say, but as you point out, when you get into a big development, or even if you can't remember why you added the test, which - I'm old now, so that happens... Like, "What does this test even do? I don't know." Then it's not as easy to just delete tests, as people say. So there are costs associated.

I think that's one meta point I would make to anyone who's listening - and particularly younger developers - is that all these things have costs associated with them. Like, closures are another great example. I love closures. I love doing data structure manipulation with sort of functional style maps, and all that stuff... But closures can get super out of control, and it can turn into a callback hell, like you have in JavaScript. So... So many of these tools that we have - it's just Aristotle again, right? Like, there's underuse, and overuse, and then there's the golden mean. And figuring out what that golden mean is is sort of wisdom in development.

So I think anytime you get someone who's like "X is the way", it's like "Well, okay, but there's probably some trade-offs that are associated with that." And I like to talk about those trade-offs, and not present any particular tool or approach, or certainly the way I do things as like always unilaterally just the best way to do things.

**Jerod Santo:** You also prefer a few classes, you don't mind god objects, and the old fashioned FLs versus polymorphism...

**Carson Gross:** \[laughs\]

**Jerod Santo:** So I'm with you on some of those. I don't have a problem with god objects. I know that's a pejorative. People say that as usually a bad thing. But I think you said that systems have certain more important parts than other parts, and if the user and the -- imagine GitHub, the repo... Imagine how much code is in their repo objects at GitHub. I'm sure it's more than is in their issue objects, for instance. And that's indicative of like it's about repos, you know? And yeah, it can get unwieldy. But I think we are too afraid of that, too early, and hedging against something that may never happen.

**Carson Gross:** Right. We're prone to over decomposition, is the way that I would say it. "If we just break everything up, it'll be --" and it just doesn't... Again, decomposing a system is not cost-free. And yeah, cohesion is the idea that things that are related, belong together. So you probably don't want your user, for example, being also where you send all your emails from. On the other hand, you're always sending an email to a user.

\[01:03:58.25\] So to me, put some methods on the user to send emails and that's alright. Like, it's okay if that functionalities in there. And my experience is the same as yours, the user object tends to be this massive thing... And I just don't think it adds much to break that up a whole bunch. In fact, again, I would say there's a cost associated with that. If you have everything in one file, if you have everything in one class, then it's easier to communicate across... You don't introduce additional lines to your UML diagram, right? I'm not a big UML guy, but I do know that more lines is bad/badder in UML. So the insight there, I think, is to be careful with your decomposition at the class level, not just at the function level. So I think it's just, you know, the same thing.

**Jerod Santo:** Well, one place I'll break from you is that I've in my career moved from Ruby over to Elixir about 10 years ago, and the pattern matching properties in Elixir allowing me to match on function invocations, and have multiple functions of the same name, with different arguments coming in have really simplified, in my experience, my maintenance of branches... What I call like inconfident code; defensive code, that's what I used to call it. It's like, so much of your code, especially at the top of a function, is like making sure you didn't end up with a thing that you didn't want to end up with, you know? And of course, all the TypeScript people are yelling right now, but... I like that more than if/else. But what are your thoughts on that? Have you worked in languages that have pattern matching at the parameter level?

**Carson Gross:** I haven't worked in a language that uses pattern matching as the primary dispatch mechanism. It looks a little weird to me. I'm just a Java guy.

**Jerod Santo:** It did look weird at first, yeah.

**Carson Gross:** Yeah. And so I'm just a Java guy... I don't have a problem with it, though. I think it's probably very effective. And when I say ifs and loops, I think that's more of a spiritual ifs and loops than like the actual ifs and loops... \[laughs\] You know, this idea of just like keeping it simple. And in the Java world, which is where I spend most of my time, not falling prey to this temptation of a complicated object model, when you can just have an if statement that does the same thing...

**Jerod Santo:** Gotcha.

**Carson Gross:** ...you know, like five lines of code with an if statement, instead of like three classes with an interface, and doing dynamic dispatch... Which, again, Clean Code would recommend -- they say explicitly, if you see an if statement, think to yourself "Could this be dynamic dispatch?" And I would recommend the opposite of that. I would say if you see dynamic dispatch, think to yourself "Could this be an if statement?" Because you'll reduce the total cognitive load by getting rid of all these additional crappy, small classes that you've got, that are just there basically to do an if statement. I've never worked with Elixir, or Haskell, or these languages that really prioritize pattern matching as a dispatch mechanism, so I can't have a strong opinion on it.

**Jerod Santo:** Yeah, fair.

**Carson Gross:** But I know a lot of very smart people who love it, so... That seems indicative that there's something very good there.

**Jerod Santo:** Yeah. For me, it's like the only way I've actually felt a lot of my conditionals melt away without huge cost. Because everything's still right there, the function name is the same, and you just have like a list of handlers, effectively.

**Carson Gross:** Right. It is an if statement, at some level.

**Jerod Santo:** It is.

**Carson Gross:** It's just a higher level way of doing an if statement...

**Jerod Santo:** Right.

**Carson Gross:** ...which I can appreciate.

**Jerod Santo:** But it's not passing you off to some new class that just has like a -- you're just instantiating a new object and then calling this thing on it, which is basically what the Java story is. So maybe that's just the -- maybe at the function level is like the happy middle ground there. I don't know.

**Break**: \[01:07:54.09\]

**Jerod Santo:** Let's talk vendoring, the last one here, and I'll let you go...

**Carson Gross:** Sure.

**Jerod Santo:** But this is a topic that's near and dear to my heart, just because so much of what we do is dealing with other people's code, and how to do that well, and then failing to, or when to do it, how to do it etc. Vendoring, of course, is the concept of -- a pretty simple concept that was just like actually copying other people's code into your project, versus statically or dynamically linking to it.. And you wrote on this as well. Your thoughts on vendoring?

**Carson Gross:** Well, I really like vendoring. I really like when libraries go out of their way to have no dependencies... And particularly when you talk about JavaScript libraries, like htmx... htmx is designed so that it can be added to a website just with a script tag. You don't need to adopt a crazy build tool. I've heard very good things about \[unintelligible 01:09:50.01\] but still, your average person is -- like, I just want to put a script tag in the header and be done with it.

**Jerod Santo:** Right.

**Carson Gross:** And I think some of the programming dependency management was an important advancement in computer science. I don't want to downplay it. But I do think we've maybe gone a little overboard, and I think some communities have gone more overboard than others, and the JavaScript community is one of them... Where you add a dependency and then a thousand other dependencies get dragged in, and now you have to have a pretty sophisticated build system in order to make that software work.

And in my experience, for example, for some reason, this seems like such an easy problem, but I've used three or four different static site generators in my life, and they're just like, whenever I go back to these old sites and try to upgrade, it's just - everything's broken, always. The cross dependencies, and... Boy, I've just had so many problems with upgrades like that. And so to me, I think library developers would be -- they would do their users a favor if they weren't... Libraries in particular. Apps are sort of their own thing. Like, you've got your dependencies and it is what it is. But if you're building a library, I think it behooves you to try as best you can to have as few, or ideally no dependencies beyond just -- and if you've got to pull in some code and write it yourself or whatever, then just write the tests for it. And obviously, that's not always realistic. Like, you're not going to do your own SSL library, or something like that, but...

**Jerod Santo:** Right. Do not hold your own crypto.

**Carson Gross:** Right. But typically, that stuff's provided by the system, right?

**Jerod Santo:** Yeah, modern systems.

**Carson Gross:** Like, most of the stuff you shouldn't write is typically provided just as a base library by the system. So particularly in the JavaScript world, I think a lot of libraries could -- and I forget which library it was, but there was a guy on Twitter talking about how each release of his software, he had fewer and fewer dependencies. And in release five, he got this zero, and it's like, that's so awesome, because now your software can be used without all this other complicated stuff. And yeah, the JavaScript community is comfortable with \[unintelligible 01:12:07.21\] or whatever, but there's a lot of people that just want to do web development. They don't want to deal with all that.

\[01:12:12.28\] And I actually think -- so you talk about vendoring... The idea of vendoring is just copying the code into your codebase.

And I think there's actually a big opportunity right now for a vendor-first dependency management system that keeps this idea of transitive dependencies. There are going to be times when a library is going to need to depend on another library, and figuring that out is difficult, and that's a big value add that these dependency systems do. But I also think that you could do that, and instead of having like end products, like compressed JavaScript that's unreadable, or whatever, or in my case just Java jars, whatever, that you have to go and download the source code from somewhere else...

**Jerod Santo:** Sure.

**Carson Gross:** Instead, what you could do is you could have a system like that that downloads the source into, say, a lib directory, and uses some naming convention to keep everything, but just has the source of the libraries there. And then when you compile your project, you compile your project, and you compile that source all at once into the final product. And what's really nice about that is then you can check that source in, that can be part of your project. People don't have to have that dependency management system on their system in order to just check out and build your project, and run it.

And the other important thing - and I think this will become more important over time - is now you can see all the code that is in your project due to transitive dependencies. And so it's going to be a lot easier for security analysis, and trusting -- you'll be able to build your app and then ship it to production without this - what to me is pretty crazy... Like, when people do builds in production, and they're actually doing dependency resolution in production, and then shipping that out, it's like, you're trusting a remote system at the very last minute to give you the exact same code that it gave you previously. And that seems like a really bad security and just general stability idea to me.

To me, I'd love to -- I wish Java had this, where I could just say "Okay, these are libraries that I depend on. Figure out all the transitive dependencies, and then put all that code in my codebase, say in a lib directory." And then if I've got questions about how something works, the code is just right there, and I can do an audit of it, and make sure there's no inappropriate file system usage, or anything like that, very easily.

**Jerod Santo:** Sure.

**Carson Gross:** So I think there's a big opportunity right now in what I would call vendor-oriented dependency managers, where you have a dependency manager that focuses on delivering source to the project, instead of sort of final products, like jars, or compressed JavaScript, or whatever.

**Jerod Santo:** Right.

**Carson Gross:** Sorry, that's a little bit of a rant, but I've been thinking about that...

**Jerod Santo:** No, that's interesting. Ruby on Rails used to do that. I wonder if it still does. It wasn't the happy path, but like you can literally -- I think that's where the term vendor came from, is you can literally type like "rails vendor" and then something. And instead of putting them in your gem file and then having a gemfile.lock, and downloading them to wherever they are on a system, it would actually unpack all that source code into your vendor directory. And that was good for deploying it, because it was all right there, but it also has some drawbacks. Like, if you're going to check it into your history and stuff, every time you update your dependencies you're having these huge splats of like files updated, and it can be a little bit gnarly in that sense. So I think there's pros and cons, but I do think it's an interesting way of going about it.

**Carson Gross:** Yeah. Well, I remember the Rails way of doing it, and I remember it being a little janky, and not working...

**Jerod Santo:** It was.

**Carson Gross:** Because it just wasn't like the focus of it. And then the other thing I'd say is computers are pretty fast... So big, janky check-ins are okay at this point.

**Jerod Santo:** Sure.

**Carson Gross:** I don't know, I feel like I would rather see what changed with my dependencies, and have someone who's in charge of managing that, and maybe is in charge of the dependencies and doing that work on their own machine... Than the situation now, where I just like get new random jars, and I don't know what's in them, or what's changed, or anything like that.

\[01:16:17.15\] I do think there are a lot of trade-offs. I think there's an opportunity there. You'd have to do it right, and you'd have to be smart about it, for sure, but I think there's an opportunity there. And I would couple that with this general plea to library developers to reduce the number of transitive dependencies that they bring into projects as well.

**Jerod Santo:** I think in the JavaScript community that's a growing trend over the last 5 or 10 years, where I've seen especially -- you know, people pitch us a lot of libraries for coverage and conversation and stuff... And dependency-free is now a marketing term, which - I appreciate that one. There's some marketing terms, which I think are silly. Modern... Everybody puts "modern" on there. It just means they just got finished writing it... But dependency-free has actually become a term of art that people will put with their pitch. Like "Hey man, no dependencies." And to me, that makes it more exciting. I'm like "Cool, I can more easily recommend this tool, just because I know I'm not dragging something else along for the ride unbeknownst to me", you know?

**Carson Gross:** Yeah, exactly. And I have to point out again; this is one of those situations where it's like we had bad vendoring where you had to manage everything yourself, and then we went to transitive dependencies, and everyone's like "This is great. I can depend on this", and then it spidered out of control. And now maybe there's this moment when we can sort of go back in between those two and say "Can we have some of the dependency management system, but then some of the vendoring approach as well?" I think that's something that's available to us now. We have the technology for it and the experience to do something like that, so I hope someone builds that. I do not have time to do it, but I hope someone does.

**Jerod Santo:** I was going to tell you, write your pitch deck, Carson. Get that pitch out there. Somebody will fund it.

**Carson Gross:** \[laughs\] Nope.

**Jerod Santo:** So real quick, htmx 2.0... Was there anything to that? Was it a big thing? I remember emailing you when it happened and you're like "Well, it's not like brand new or different." I mean, there's some things, but it wasn't a big deal. Is that the story?

**Carson Gross:** Yeah, we cleaned some stuff up and, and changed basically some defaults in it. And maybe we didn't do quite enough of that. There's a couple of things I look at and I'm like "Man, I wish I had changed that in 2.0", but...

**Jerod Santo:** So 3.0 coming soon? \[laughs\]

**Carson Gross:** No, no, we're not doing 3.0. You know, there's an essay up on The Future of Htmx, on the website, and I talk about how I think htmx - there are mistakes that I made in it, for sure. There are aspects of it that I would change if I could go back in time. But it's not wrong enough that I'm willing to break backwards compatibility to fix those things. Like, they're just small, ugly issues or implementation issues that like "Uh, this would be simpler if I used fetch instead of xhr, or something like that; that'd be a little bit cleaner."

And so I really just -- I think htmx, the conceptual idea of it is strong, and the little grunkiness that exists around the edges is not worth breaking everyone who's using htmx stuff just to clean up for philosophical reasons. And so we've thrown a lot of config options in there to turn on and off things. Like, that's one way that I try to deal with things if I don't like how something behaves. But it's the default, I'll put in the right way, but then put it behind a config flag, so people have to opt into that behavior. So that makes htmx a little more grunky than it would be if I was more willing to break backwards compatibility, but I think backwards compatibility is a big feature. And so the jump from htmx one to htmx two is very gentle for most people.

There were two or three config options that you could flip, and basically have identical behavior with 1.0. That's the philosophy and sort of vibe of htmx. Like, okay, we're generalizing hypermedia controls, this is what it does... We're not going to try and reinvent that. There's no htmx server components or anything like that \[unintelligible 01:20:19.00\] It does what it does, and that's it. So I think that it's a different way of approaching software for sure, but I think there's advantages to it as well.

**Jerod Santo:** Right on. Well, if you want more from Carson, "Hypermedia.systems", the new book. The revolutionary ideas that empowered the web. Read it for free online, buy the hardcover to support the authors. Very cool.

**Carson Gross:** It just came out in Japanese, by the way.

**Jerod Santo:** Oh, nice.

**Carson Gross:** \[unintelligible 01:20:46.16\]

**Jerod Santo:** There you go. Anything else, Carson?

**Carson Gross:** For all your Japanese listeners.

**Jerod Santo:** Excellent.

**Carson Gross:** No, I think that's it. htmx is the big thing. The hypermedia systems, those are the big things right now, so check them out. Oh, gregbrain.dev if you want my humorous take on software development in like a caveman voice. You can check out gregbrain.dev.

**Jerod Santo:** Alright. All the links to all those things are in your show notes, so check there, click through, and connect with Carson. Good stuff, appreciate your thoughts, appreciate your work, and putting it out there for free for all to have. That's always awesome. Carson, I appreciate you coming on the show.

**Carson Gross:** Thanks a bunch for having me on. I appreciate it.
