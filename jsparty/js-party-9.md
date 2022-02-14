**Mikeal Rogers:** Hey, everybody! Welcome to JS Party, where it's a party every week with JavaScript. I'm Mikeal Rogers...

**Rachel White:** I'm Rachel White.

**Alex Sexton:** And I'm Alex Sexton.

**Mikeal Rogers:** Alright, and we have some fun topics today. We're gonna get into React VR. Before that, Alex, why don't you just give us a quick primer on React?

**Alex Sexton:** Sure. I talked a little bit about a lot of the parts of React in the past on this show, but in case this is your first episode or you just need a refresher, or you just love hearing the sound of my voice, let's do some React talk.

React is a framework, and it's a framework primarily for rendering DOM elements onto a page, and doing that efficiently. The core concept behind React is that you write your markup inside of React, and you use their management of lifecycle of data changing, and then you try to build your HTML with data in React, and then as your data changes, React can somewhat automatically change your web page to reflect the data that has changed inside of your state.

That's a core concept pretty much in every current framework, the idea of data binding. Different frameworks do it differently, and the novel approach that React took, which is very popular now, a few years later, is that they want to make re-rendering very cheap, so what they do is they render what's called a virtual DOM, which is really just a JavaScript object, and instead of having children, you have an array called "children", things like that; instead of attributes on DOM elements, you just have "properties" as like a second argument to an object. So really it's just this very simple representation of a DOM, and then anytime data changes, it goes and changes it in this object version of the DOM, instead of the actual HTML page that you can see. And then once it makes all the changes from all the data that's changed, it runs what's called a DOM diff against the old one and the new one, and it says "Okay, the only thing that changed is that the class name property on this one object way down on this part of the page changed. That's it. It would be silly if we threw away..." - back in the Backbone days you would throw away all of your HTML and then you'd re-render your entire page because one class name changed. Maybe you would just re-render an entire view, but either way, you'd re-render a whole bunch for very small data changes.

In the React world, it knows which DOM element maps to that subsection of your page, and it can just swap out the little class name section very quickly. So DOM diffing is very fast, based on some of the constraints that they put in, so you can get very fast renders without having to manage which part of the page that you're updating manually; it just feels very data-bound, even though it's not necessarily data-bound in the same sense that people might expect out of Ember, or something similar to that. Was that a good overview?

**Rachel White:** \[00:03:49.08\\\] Yes, and it's a good segue into why they wanted to make React VR, which is a brand new, young React baby. It's so young, there's stuff that was pushed to the repo like nine minutes ago.

Basically, React VR was started as a way for people that are already super familiar with how to write React applications can just jump right in and craft VR experiences. It's not gonna be as super robust as being able to build stuff in a frame or a three.js for VR type things, but it will allow you to use a lot of the components and props and state that you use in React, and use those to create things in the 360 space.

The starting example that they have for React VR is just crafting a 360-view from a panoramic image. It's like 20 lines, and it lets you set all of the properties in line in the component, and then it lets it wrap around. Obviously, this is only gonna be compatible with whatever browsers are WebVR ready... But if you go to the React VR documentation, it tells you all of the basic things that are available right now, and it seems like it's still obviously actively being developed on, but you're able to go in and try it out if you don't even know how to do VR, but know how to do React, which I think is the point; that's what they're going for.

I feel like now React is going into every single space that they could humanly shove their way into, especially with React Native and now React VR. There's nothing you can't do with React.

**Mikeal Rogers:** I think that what's really paying dividends here is... React made a pretty big shift in the web framework world. Before React, web frameworks were like jQuery; you'd put them in a page and then get that API in the browser, and you'd mess around with it in the browser, in your code. And they were like, "You know what? Everybody is using all these compile toolchains. Why don't we build a web framework that's built as a compile chain? We will have some of our code in the browser, but it's actually gonna work in this toolchain that allows you to add features to the language, allows you to much more easily and more modularly pull in new areas, like VR and things like that."

It has this much bigger extensibility model than web frameworks that we've seen before, so now we're seeing stuff like React Native and React VR. It's pretty cool.

**Rachel White:** Yeah, it's definitely making different ways of programming more accessible... I guess the right way to phrase it would be like "I don't need to learn all these different frameworks in order to achieve different things anymore." A React dev can just learn React and be able to do stuff cross-platform, mobile, iOS, now they can do VR, and gaming and stuff... There's not really a need to have too many dependencies or learn different ways to write.

**Mikeal Rogers:** Yeah, it's pretty cool... Pretty cool stuff. I don't even use React, but I actually think this stuff is pretty cool, and this is a good approach.

**Rachel White:** This actually makes me -- I was already starting to learn React, and this makes it more exciting. The potential for being able to get something out into multiple realms by writing it a certain way is super exciting.

**Mikeal Rogers:** Yeah... I mean, normally I would be kind of skeptical of the modularity of building things this way and kind of tightly coupling them to React, but so far in the VR space and the 3D space what we've seen are a bunch of giant towers of code, that are their own plugin system and their own huge thing anyway. So there's not really a smaller module critique to this necessarily.

I mean, if you just wanted to do not VR, but 3D programming, there is a bunch of great stuff there that Mikeal is doing with small modules, but for the most part, this is competing with other really giant frameworks as well, and being integrated into a framework that's much more understood than whatever random framework that somebody just wrote for their VR library, and it's probably a lot better.

**Rachel White:** Yeah, and it seems like people are really jumping in already. There's already 23 issues, and six pull requests to make fixes to the library... There's some small things, but I think that people that are already involved in doing stuff with React are going to -- I don't know, I think it's gonna be interesting to see.

But also, what is it -- I mean, Facebook... Facebook owns Oculus, right?

**Alex Sexton:** Mm-hm.

**Rachel White:** Okay, so obviously there's gonna be some kind of other VR thing here...

**Alex Sexton:** If you followed F8 the past week, they're definitely into VR and stuff like that, and even the last F8 they had some big demo where Mark Zuckerberg went to his house and picked up things around -- whatever... \[laughter\] But he was talking about how the first wave of VR is actually going to be just augmented reality type stuff, and then they did a bunch of demos on just like the camera app with filters over your face, or with different objects in the room, different things like that. From what I can see, I imagine - obviously I don't use React VR yet, but it seems like this would be completely appropriate for that too, just not in stereo, and that would work as well.

So I imagine this could equally be used, whether you have a stereoscopic 360 image, or if it's just on your camera.... But the interesting thing to me is I wonder how much -- if Facebook wanted to build an augmented reality app with this, based on facial recognition, and it can just pop up information about someone as it recognizes their face in the augmented reality, which is always the cool cyborg thing to do - the enemy, or whatever on the side, strength level and karma... But the interesting thing to me is how much of their Facebook React stuff could they pull in and use in both places? Because if they're using Redux and it's all just like state management via these pure functions that do X, Y and Z, then it seems maybe reasonable that they could pull in a bunch of the end points for passing faces down to a thing and then getting data back, and all sorts of stuff, or like befriending someone in the real world is like an action that could already be in there with Redux.

It's interesting to me how much of their app they could use between their website, their mobile app, which is at least partially React Native, and then their React VR augmented reality situation. I'd be very interested to see code reuse.

**Rachel White:** Yeah. I mean, they're already -- I'm kind of like creeped out about it, now that you say it that way... Only because, obviously, my only relationship with Facebook is going on and seeing whatever events I've been invited to for the week... But you can see the new -- I don't know... How can I put this? Well, they have the 360 video support now that's in the browser, and I'd be interested to see if that kind of stuff plays with this kind of VR experience. Because taking it from the 2D experience where you're dealing with it in your browser and then having the stereoscopic view...

\[00:12:14.28\\\] I don't know, I think it's gonna translate -- I'm scared for when the web and VR integrate, because I don't want that; that's not my VR future. But I'm sure that's the monetization of the VR future that we're gonna be dealing with.

**Alex Sexton:** Oh, for sure. I mean, Google Glass was ahead of the curve in the sense of like "One day we'll all have that contact in", or whatever... \[laughter\] Definitely behind the curve in what a human would agree to put on their face.

**Mikeal Rogers:** I'm just thinking... For a while, every tech article about the future of technology would just have some douchebag with Google glasses on, in a context that didn't make any sense to have it on. Lately they've been talking about VR future, and that's always somebody in a random place with a big Oculus Rift on their head. \[laughter\]

**Rachel White:** Well, that was me yesterday, and everybody was making fun of me. I was doing some mixed reality work in public, and everybody was just like "You look like an idiot." \[laughter\]

**Alex Sexton:** I feel like if you go back far enough, every pitch for computers in the very beginning was like "It replaces a typewriter." Then it was like, "You can store recipes on them", and I think since then -- once they hit the business world more so, everything is "They'll change the way you do meetings." So first it was like "Second Life... If you'd just do your meetings in Second Life, everything will be good", and then "If you just do your meetings with Google Glass on, or with VR, or whatever..."

**Mikeal Rogers:** Meanwhile, everyone hates their actual audio conference software...

**Alex Sexton:** Exactly. \[laughter\]

**Mikeal Rogers:** If we could just solve the actual audio conferencing problem, that'd be great. My favorite one of these "in the future" things is this -- I think it was a Time Magazine drawing of somebody with a watch on with a floppy disk that they're putting into it... It's amazing.

**Alex Sexton:** Nice.

**Rachel White:** I was just trying to look up more VR stuff, and I mistyped the URL and now I'm on one of those pages that just keep on telling me "Critical alert from Windows. Your computer has been blocked", even though I'm on my Mac. \[laughter\] Imagine this, but in VR...

**Alex Sexton:** Yeah, the blue screen of death, and you just eat it on a curb...

**Rachel White:** This is my personal health... Alright, we're good. Sorry for derailing. \[laughs\]

**Mikeal Rogers:** No worries.

**Rachel White:** I mean... VR is such a personal thing... I don't know. It's interesting to me that -- obviously, Facebook wants to get in that space, even if it is a personal thing, but... I don't know. I want somebody to do something with VR that is cooler than what I've seen, and if Facebook can make it so that you can have more of a connected experience while you're in these virtual spaces, I'm okay with it, even if it is like a crappy Second Life.

**Mikeal Rogers:** I'm sort of surprised there isn't more effort going into just bridging the social networking stuff into games. Games are bigger than Hollywood movies now, they're huge, and it seems like this kind of technology would penetrate there before it would penetrate into a website that I visit.

**Alex Sexton:** \[00:15:53.23\\\] I'm not a huge gamer, but I think there is quite a bit of social stuff in games these days. It is a little bit interesting that it's not super Facebook-heavy, though I'm pretty sure you can import all sorts of Facebook stuff. Part of it is like Microsoft v. Facebook, in some sense. Microsoft has their own identity management; why would you import your Facebook import when you could import your live account? Things like that.

**Mikeal Rogers:** Because I talk to people on that live account all the time.

**Alex Sexton:** Oh yeah, I'm a big MSN Messenger user...

**Mikeal Rogers:** Lots of baby pictures on that Microsoft Live...

**Alex Sexton:** Right... So I can see why -- like, Sony doesn't really have a competitor, so it's interesting that... I haven't bought a Playstation - whatever the recent one was - in a while, but I don't think there's a ton of Facebook integration... But they all have at least a Facebook app.

**Rachel White:** The integration - I mean, I buy pretty much every single video game system whenever it comes out, just because I'm an adult and I can, and it makes me feel good, and pretty much the only social integration that they have with it in the sharing feature is just posting screenshots or posting videos to your timeline. It's not like I can tell who that I'm friends with on Facebook is also playing these certain games.

There's the social stuff that's tied to just your singular Playstation account, your singular Nintendo World account, and then your Xbox live account, and I agree with you, there's definitely a missed thing there. But I also think that so many people don't understand exactly how data and privacy works, so they're a little more apprehensive about freely sharing that kind of stuff.

I don't even care, so everyone get on my data, as long as I can play video games with my friends.

**Mikeal Rogers:** I think they're missing a huge opportunity here though... I don't know about your Facebook, but mine is mostly dominated by my extended family, who are right-wing lunatics, and I would love it when there's some kind of political argument to just say "You know what, let's just take this to the first-person shooter."

**Alex Sexton:** ...to Counter-Strike.

**Mikeal Rogers:** Yeah, like "Let's take this to Counter-Striker, settle it there. Let's shoot each other for a while. I think that we'll feel better at the end of it than we will be commenting on this Facebook thread."

**Alex Sexton:** Yeah... I think that's really where VR helps, because then you're actually killing your uncle... Which is great, that's what you want.

I wonder if it's partially because video games' social aspects are often such a Hellscape that no one wants to attach their actual identities to their avatars... Or maybe even further - many games ask you to assume the identity of a different avatar, like you become the person, so I wonder if it would kind of take you out of it.

Interesting dynamics, but I doubt any of those reasons I just said were the actual reasons they didn't have a Facebook integration.

**Mikeal Rogers:** Yeah... And I think it's about time for a break with that. Let's have a little break now, and when we come back we will discuss the decentralized P2P web.

**Break:** \[00:19:25.18\\\] to \[20:08\]

**Mikeal Rogers:** And we're back! Alright, let's get into the decentralized web. P2P web, decentralized web - I think it's best described actually as a movement. It's not like a specific set of technology; there's a bunch of technologies, a bunch of projects, a bunch of people... But a lot of different people are trying to decentralize the web, trying to take a lot of the centralized cloud services that we've now become so reliant on and are basically all of our data to, and trying to actually build applications that are more P2P, more decentralized.

The interesting thing about this movement is that it has big bearded fellows like Max Ogden, and mad scientists like Feross, and Substack, and cyber hobos like Dominic Tarr... But also Tim Berners-Lee and Vint Cerf and all these people that literally built the early web and the internet. So it's a very interesting mix of boomers and millennials that are all kind of crazy web people networking together on this stuff. Let's start rolling out some questions, and stuff like that.

WebRTC is the P2P protocol in the browser right now, and it's very different from how BitTorrent establishes connections, so there's a lot of work to try and bring different ideas from prior P2P system to it, and also building new P2P systems on top of it.

**Rachel White:** Is WebRTC what you're using for that one site that you're actually working on where you can talk to people in the browser?

**Mikeal Rogers:** Yeah, Roll Call.

**Rachel White:** Cool, awesome. So web P2P stuff isn't necessarily just -- I guess when I think of P2P I automatically just think of early 2000s' file sharing, or pirating stuff... This is more of a P2P type of sense where it's just data sharing in a lot of different ways?

**Mikeal Rogers:** Yeah, yeah. But even the file sharing component - that didn't really work on the web before. If you wanted to share a file on the web, you would basically upload it to a place, and then have it be downloaded to people. Now Feross wrote WebTorrent, which really ports all of the BitTorrent concepts over to WebRTC.

**Alex Sexton:** Let me interrupt - I used to send transfers via AIM all the time, \[laughter\] and it works fine, unless you had a router that didn't support UnP mapping, or something like that.

**Mikeal Rogers:** That was also not on the web, though... That was not on the web. That was in the AIM client, right?

**Alex Sexton:** You could put HTML into there, and it would change the text, so...

**Mikeal Rogers:** \[laughs\] So that counts as the web now.

**Alex Sexton:** Mm-hm... It was the web; I don't know what you're doing. \[laughter\]

**Mikeal Rogers:** Yeah, yeah. I think the file sharing example is kind of interesting, right? Because unlike the regular web where this network is just up and we kind of know how to get to things, and if you give it an address, it can figure out how to download that content... In decentralized systems you have to establish new networks for distributing things, and you have to figure out how people connect to these networks, and if they stay on them or if they leave.

We have now decades of file sharing attempts to do this, right? Everything from Kazaa and Limewire and Napster back in the day... And now BitTorrent is sort of like the best of breed of all of this, so if you wanna establish a network for transferring and keeping alive a large file, they've really nailed that, and WebTorrent is a pretty direct port of that. But for other use cases like "I wanna have chat rooms, phone calls", or all these other cases... How to establish that network is not as well -- people have not figured that out necessarily yet... Or figured out the best way for that yet.

**Rachel White:** \[00:24:03.19\\\] This might not be a relevant question, but does blockchain type of distributed database things - does that fall into web-based P2P stuff?

**Mikeal Rogers:** Yes, yes. A lot of them aren't web-based yet, but there are a few that are, and we're getting much more web support all the time. BcoinJS is like a Bitcoin client library as well. I know that people are working on an Ethereum one... IPFF is working on some blockchain stuff that will work in Go and in the browser at some point.

I think the best way to look at blockchains is that if you wanna have a transaction log, and you wanna have a distributed transaction log, that's the best way to build it. It's not the best place to store large amounts of data (it's actually really intense for that), but if you wanna just store a transaction log, 1) it's a good, cryptographically secure way to do those transactions, and 2) kind of built into the way that you interact with the transaction log, it has everything that it needs to keep itself alive, and keep its network alive. That's one of the harder things to engineer, and the thing that we have for, say, BitTorrent, but we don't have for a lot of other use cases.

**Alex Sexton:** Would you build operational transforms on top of a decentralized blockchain web implementation? Is that what we're talking about...?

**Mikeal Rogers:** Possibly. You maybe could, but I'm wondering if -- well, we have so much other data on how to do operational transforms on top of Merkle trees and on top of all these other distributable data structures. I don't know if it's actually beneficial to do it inside of a blockchain.

**Alex Sexton:** So if you wanted to do P2P Google Docs, you wouldn't need the blockchain, or anything like that... Which is an encouraging statement to me.

**Mikeal Rogers:** Yeah, I think with the blockchain, or any time that you really want -- a transaction log where more than one person is going to agree on every transaction, so you want it to be not eventually consistent, but always consistent, you're going to sacrifice some performance, right? If you're editing a Google Doc collaboratively with eight people and every few keystrokes you want to save that, that's going to be problematic in something like a blockchain... Whereas if you actually just take all the operational transforms, shove them into a log that gets distributed around everybody, people can agree to the same merges over time and deal with conflicts as they arise, and still have a pretty fast user experience.

**Alex Sexton:** Got it. Where does Bram Cohen fall on the cyber hobo scale?

**Mikeal Rogers:** \[laughs\] I don't know. I mean, he has a company that's been around for like 10 years, and a salary from that, so I don't know if he's in in cyber hobo status... \[laughing\]

**Alex Sexton:** Okay... Good to know.

**Mikeal Rogers:** I mean, Dominic Tarr chooses to just go and build a boat that he lives on for months at a time in New Zealand, so it's a little different...

**Alex Sexton:** As you do...

**Mikeal Rogers:** Yeah, and then he comes back with an entirely new implementation of secure scuttlebutt or something.

**Alex Sexton:** As you do. A serious question... The web, kind of like when we talk about app stores and we talk about -- what else; we've even talked about it on the show... We definitely talked about app stores, but either way, we talked about if you go and you put your app in the app store, you're using a centralized Apple control thing, and the way to win that back is to use the decentralized app store, which is the web.

\[00:27:59.12\\\] So we often refer to the fact that you can choose any server as long as you can get an IP address, like all the different things... There's no single internet server, and then you have to upload everything to the internet server, and then they can turn things on or off.

Certainly, there are states involved, and censorship and things like that, but I don't think that's really what we're talking.

**Mikeal Rogers:** It's part of it.

**Alex Sexton:** Well yeah, but I think it's a different part of it. We're talking about the word "decentralized" a bunch, but in my opinion the web is decentralized; it feels more like pseudo-decentralized... I don't know.

**Mikeal Rogers:** So you're right and you're wrong... The web is decentralized; web services are not decentralized. Anybody can put up a web service, anybody can build something for the web. The people who engineered those protocols and built these systems really believed in that decentralization, right? But if I want to use a service to make a call, or I want to send a message to somebody else, I'm constantly putting my data into these services that are actually incredibly centralized.

**Alex Sexton:** We have decentralized voice calling, right? That exists, I'm pretty sure.

**Mikeal Rogers:** Well, Skype is backing off of that, actually... So Skype isn't as P2P as it used to be.

**Alex Sexton:** But we're not talking about P2P, we're talking about decentralization.

**Mikeal Rogers:** Yeah, yeah...

**Alex Sexton:** I'm talking about -- phone networks are decentralized. My service provider can talk to your service provider over an open standard.

**Mikeal Rogers:** Yes, yes, sorry. Okay, you mean like real phone calls.

**Alex Sexton:** Voice over IP has a similar standard; use IP addresses instead of phone numbers, or whatever, but it works.

**Mikeal Rogers:** Yeah, but it also falls back to -- okay, so to make that call though, I log into a service that's centralized, I tell them where I am, they tell me where another person is... We're entirely reliant on them. They store all of the metadata logs...

**Alex Sexton:** I think it's possible to set up your own servers... You may have to, like...

**Mikeal Rogers:** Yeah, yeah... But again, we need to make this useable, right? And without setting up your own server, you can visit Roll Call and it will set up a point-to-point connection and never store any metadata or keep any kind of logs of that transaction anywhere else, and it's all encrypted and everything, so you don't have to worry about your providers violating your privacy, you don't have to worry about a lot of government intervention and stuff like that.

These are issues that we need to start caring about as this becomes a bigger and bigger chunk of the internet. We need services that protect your privacy, and as soon as you wanna protect the user's privacy, the service provider loses access to read that data. So we have very different models. If you don't have a central point of authority, you lose that as well.

Another part of this that we're not talking about that is a really big part of the decentralized web is building offline applications. One of the hardest parts about building offline applications is that you lose that central authority. When I go to Twitter and I get my timeline, it says that a bunch of people said things, and I only believe that they said those things because Twitter told me that they did. But if we're putting a bunch of tweets into a local offline feed and then we're replicating that offline with a bunch of other people, I'm getting data about Alex from Rachel, and she could have just changed it. I can't trust everybody in between anymore, we don't have the central authority, so we need different mechanisms to sign that data and cryptographically say "These are the right people" and all that.

\[00:32:04.17\\\] So you run into a lot of the same problems with offline as you do with every other decentralized point. And once you solve these problems for offline, you naturally solve them for a lot of the other decentralized cases.

**Alex Sexton:** Yeah, that's a good point. I think the solution to everything is homomorphic encryption, right?

**Mikeal Rogers:** Why don't you tell us what that is? \[laughter\]

**Alex Sexton:** This is one of my favorite things... Homomorphic encryption is whenever you can perform the same -- like, if you have a function, you can encrypt both the function and the input to the function, and the output is the encrypted version of the plain text actual output. If you had a function called Add 2, and then you sent 2 to it, the output would be 4; and then if you had homomorphic encryption, you would encrypt the 2, you would encrypt the Add 2 function and you would get something encrypted out, but if you decrypt it, it would be 4.

The idea would be that you could have Gmail, and Gmail would be 100% encrypted on the backend, but one thing about an encrypted mail service is that you can't search in it anymore, and mail without search is effectively useless, in my opinion. So you'd either have to bring all the search locally, which means you'd have to store all your mail locally in order to search it, because that's the only place it could be decrypted, or you could use homomorphic encryption to say "Encrypt my search parameter, and then search for that encrypted thing in the encrypted email, and then give me the encrypted results back, and then I can decrypt it and it'll be correct."

Essentially, you can perform a search on encrypted data. It's kind of early days -- not that early, but it's gonna take a long time for that to exist and be good, but I think it solves a lot of the trust cases, while enabling user experience at end-to-end-to-end-to-end performance.

**Mikeal Rogers:** One of the most fascinating things to me about all this is that we're not really waiting on a lot of web standards anymore; we're not really waiting on even these cryptography libraries to exist. There are encryption libraries right now that will work in the browser. What we're really lacking - people just haven't figured out what the usability of this looks like, and how do you establish networks and move data around for all these different use cases. It's a very greenfield area for people to get involved in, if that's what you're passionate about, but we're way past the stage where you are the first person implementing any web standard, or you are the first person implementing an algorithm or something like that. Those are already there, it's just like we're all just figuring out how to use them still.

**Alex Sexton:** Yeah. To be clear though, the homomorphic encryption still has a long way to go, and there's not just like an npm package that's gonna do it for you, or any packages can do anything that I said for you, except for very simple math. Anyways, not a podcast on homomorphic encryption, by any means.

So we end up with a lot of demos in this space. We talk about NodeBots, we talk about VR, we talk about P2P, and all of it I think is massively interesting and is the future, but it keeps being the future, no matter how far into the future that we go... It keeps still being the future, so I'm wondering...

**Mikeal Rogers:** I would push back a little bit on that. For instance, NodeBots were new and novel in 2012. I think I had talks at NodeConf on it and people were like "What?! Robots in JavaScript?"

**Alex Sexton:** Yeah, for sure, but no one ships a NodeBot as their production robot.

**Mikeal Rogers:** \[00:36:01.19\\\] Yes, they do... Yes they do. Skycatch is shipping basically a drone for commercial construction sites, that are now taking over all of Japanese construction, and building 3D maps of things... Everything on the bot is JavaScript and NodeBot, and in their cloud, in their frontend - it's all JavaScript. That's happening.

**Alex Sexton:** I guess what I really mean is it's not the normal case. Certainly, there are people doing WebRTC and stuff like that; even Google does parts of this stuff for Google Hangouts, but I guess I'm still waiting for the future where this is how you would build it... I don't know. That was more my sentiment than like, obviously, someone does something for real. But it is encouraging.

**Rachel White:** The more people that are trying to do stuff with it is what it's gonna take in order to get it to something where it's more used practically.

**Alex Sexton:** Yeah... I guess my point isn't "We should all stop working on these things, because they're pointless, they're not gonna catch on." \[laughter\] That wasn't my -- the thing that is sounded like. I'm just wondering what we can do to make it the way people think map onto these types of ideas in a way that doesn't hurt user experience... Like, all those types of things - what can we do to make it better? And obviously, "keep working" is the easy answer.

**Rachel White:** I have a question for both of you then... Is there anything that is currently out today that uses the kind of P2P stuff that we just went over, that you're excited about and see potential with it?

**Mikeal Rogers:** Yeah, I'm trying to look at the name of it now, but I don't recall the name of the site.

**Alex Sexton:** ChatRelay?

**Mikeal Rogers:** No, no... So to back up with what Alex said, there's definitely been a longer timeline with WebRTC... We've been seeing demos probably longer than NodeBots maybe, and still haven't really seen a lot of big production stuff, and it seems like kind of never-ending. I think part of that is that the way that the audio and video is implemented is very kind of magical... Outside of that demo use case it doesn't work and you can't really modify things very well, and it's incredibly difficult to use.

If you look at what I've had to do with Roll Call - for those of you that haven't seen it before, RollCall.audio... It's just like a little audio-only web caller. Because it's audio-only, I can take that audio that's coming out and pass it through a bunch of the other web audio APIs in order to actually do all of the stuff that you need to do with it. But if you look at video, you really can't mess with it very much. You don't get access to the kinds of things that you need to.

Additionally, even with just audio calls - that app is never gonna work for more than nine people, because then you need to create super nodes and proxy audio data, and you don't have access to do that at the level that you need to. However, I will say that the data channel, which is actually newer than any of the audio and video stuff in WebRTC, the data channel has not been there as long and is already kind of farther along in terms of real use cases. WebTorrent, like I said, is using it.

**Alex Sexton:** The failure mode there, just to be clear, is that if you have nine people you're talking to, you have to make a connection with each of them, and each person has to send every single person their audio individually. So you're uploading eight versions of your audio. Everyone is uploading eight versions of their audio.

**Mikeal Rogers:** Exactly. And also, everybody in the network has to be directly connected to everybody else in the network, whereas if you have, say, a data network, you could have thousands of nodes with different nodes connecting them in between, and the data flowing between them. But you don't really have access to pass the audio through that way.

\[00:40:04.19\\\] Anyway, so WebTorrent is quite a bit further along; it's using the data channel, and there is -- I can't find the name of it, but there's a YouTube(ish) competitor that is using WebTorrent. This is actually kind of cool - if you go back to...

**Alex Sexton:** Did you laugh at the idea of a YouTube competitor? Was that that little giggle?

**Mikeal Rogers:** \[laughs\] Yeah, yeah. I'm somewhat skeptical of a YouTube Competitor. Popcorn Time - I don't know if you can still download it off of random, weird website or whatever, but Popcorn Time is basically like this Apple TV-like application that is just beautiful. It will go out to P2P networks, find all the latest movies and things that you're not even supposed to have, and then literally you click a button and they just start streaming, and you can view them right away. So not the whole normal rigmarole with BitTorrent where you download a torrent, add it into an app, and then wait for that app to finish etc. It's literally just plays. All of the underlying code there is all in Node.js, and a lot of it was written by Mathias Buus, who now works on the Dat Project.

A lot of the people that made Popcorn Time are in hiding or arrested or something for various... He actually only worked on the lower level libraries, so that never happened and he's a free man. But he is doing amazing P2P work still. The big innovation that he figured out is that "Okay, we can actually in the BitTorrent protocol prioritize getting earlier parts of this file, we don't have to only go after what BitTorrent considers the least active parts of the file to keep it alive." And because we can do that and because we have Node Streams and because we can do all this really fancy math on the backend, we can stream this video over a P2P network in all these different chunks from all these different pieces. It's really cool.

Now that's been adapted to WebTorrent, and you can just use that in your browser now. With this YouTube competitor, that's how it's working. WebTorrent allows you to add a web URL basically as a sort of peer of last resort; so if you can't get any data on the P2P network, like the file's not alive, it will just fall back to this CDN, essentially.

So you can actually have a really decent experience for watching videos on the web entirely over P2P networks. And the cool thing for the creators of this service is that their bandwidth bill is gonna be a fraction of what YouTube's bandwidth bill is, right?

**Alex Sexton:** Yeah, but everyone else's bandwidth bill is going to be a large fraction higher than they're used to.

**Mikeal Rogers:** No it won't, because you don't pay for bandwidth that way, as a consumer.

**Alex Sexton:** You don't... I think a lot of people do. People definitely have caps. Most people these days - I think this is an accurate statement - most people watch videos on their phone.

**Rachel White:** Yeah, definitely.

**Mikeal Rogers:** Yeah, yeah... So I will also say that I don't know where this ended up and I have no kind of insider knowledge on this, but Netflix did prominently promote a position of WebTorrent expert that they wanted to hire; so Netflix was really trying to bring in somebody that knew WebTorrent, that they could maybe integrate WebTorrent into their service so that they could maybe make their bandwidth bills go down a little bit as well. So this may end up being something that really underlies a lot more than just random pirate sites.

**Alex Sexton:** Yeah, I'd be interested -- like, "If you click that button, you get a $2 off/ month", something like that. What would the incentive be for someone to be like... This could potentially be flaky every once in a while if there's a bad Node. It's not gonna be as solid for a while, right?

**Mikeal Rogers:** \[00:43:58.00\\\] I'm more interested in just like "How do we make it more solid?" There's a couple of techniques that you can use to make it more solid.

**Alex Sexton:** Before that -- the point I guess I'm making is you agree to stream it to other people who you don't know, you're agreeing to be a part of that network. Like, "I get $2 for being part of the network, versus just being a consumer of the network." Something like that could be cool. Anyways, go ahead.

**Mikeal Rogers:** I think for a lot of these though, you're only really sharing it while you're watching it; you're not still uploading in the background, or something. That's just not an experience that people are used to.

I think there's a couple ways that you can overcome the performance issues. If you can establish the network that you're gonna get the content from before you need the content, then you're actually gonna be faster than traditional websites, because you're already gonna actually have a pretty good understanding of where this content is and how to get it and a direct connection is already established.

**Alex Sexton:** Sure, but that's the exact opposite of what you just said though, where you said you're never gonna be sharing something whenever you're not using...

**Mikeal Rogers:** You're right, I'm just trying to iterate over them. The other is literally just to say "Okay, we want a fast start to this." Netflix already definitely knows how much of the file they need to get in order to ensure that it will play immediately and keep playing without buffering, right? So let's get that from the CDN, and then start filling in the rest of the file from this content network.

**Alex Sexton:** Sure, or even like... Netflix has quite a bit of data and are very good at knowing what you're gonna watch next, probably with 70% accuracy, or something like that.

**Mikeal Rogers:** That's really smart... Oh my god, that's brilliant.

**Alex Sexton:** And so they could still even use the P2P to quickly download the first two minutes of the top 22 things that you're gonna probably watch next.

**Mikeal Rogers:** That's scary. That would be really, really fast. That's a really good idea.

**Alex Sexton:** I mean, they could already do that, for what it's worth... They don't need the P2P stuff, they could just...

**Mikeal Rogers:** Alright, so I think we're due for another break. When we come back, Alex might finish this Netflix interview... \[laughter\] We're actually gonna get into the projects of the week when we come back.

**Break:** \[00:46:13.19\\\] to \[47:29\]

**Mikeal Rogers:** And we're back! Alright, project of the week this week is PouchDB. Woohoo! Everybody out there who's a Nolan Lawson fan I think is gonna get a little giddy at this one.

**Rachel White:** Everyone's a Nolan Lawson fan!

**Mikeal Rogers:** That's a good point. That's a very good point. So PouchDB is a scaled-down version of CouchDB. For those of you that don't know about CouchDB or just don't wanna dive into all of that, the one thing that makes CouchDB unique is that it has a very different data replication model, so rather than having these master/slave, consistency etc., the way that CouchDB looks at it is like, "You will probably eventually need to take this data offline", so it has a model based on actually Lotus Notes from back in the day.

\[00:48:16.13\\\] The way that you store data is that you get these revision numbers that allow you to essentially sync data with other people over time, whether you go online or offline, and you can handle these -- what you call three-way sync problems, where it's not just two people syncing back and forth, but there's actually a third person, and they're gonna get data out of order from these different people, and they're gonna get resolutions to that data, and so how do you solve that? Because that problem explodes once you add more than three people, essentially.

So yeah, it's a really good project, and I encourage everybody to check it out. What are your thoughts on this, Rachel? Have you used PouchDB at all?

**Rachel White:** I have not used PouchDB. I'm actually working on a new project, and was trying to decide which database to use, and Pouch was one of the ones that I was considering, only because I honestly haven't -- I have not very much database experience aside from your average, run-of-the-mill MySQL database, or I've set up Postgres a few times... So you tell me - what's a good situation to use PouchDB over some of the other options that are out there?

**Mikeal Rogers:** If you're doing anything offline, there's really nothing else, really.

**Alex Sexton:** It's just plain local storage.

**Rachel White:** That makes sense, especially if it's stored.

**Mikeal Rogers:** Yeah... Explain local storage, or explain IndexDB?

**Alex Sexton:** I said "Just plain local storage." You can just use the raw tools, but syncing becomes a manual process; I think that's the difference.

**Mikeal Rogers:** Yeah, yeah. Syncing becomes problematic. Also, PouchDB is really cool because it's so portable. It runs in the browser, it runs in Node, it runs in Node on top of a bunch of different-looking databases, the underlying data structures that are based on LevelDB. So if your data looks different than other people's data, you may find that one of these optimizes is better than another, so you can kind of swap them out, and stuff like that. It's pretty cool.

It also syncs with CouchDB, normally... IBM Cloudant, so you can sync with them and with anybody else who runs a CouchDB somewhere.

**Rachel White:** Cool.

**Mikeal Rogers:** Yeah. The project has a pretty interesting history that I think that we have time to get into. I think Nolan's given a few talks about this, because I think that in this kind of new world of open source, everybody who starts a project really feels this burden to continue to do it indefinitely, and one of the cool things about PouchDB is how many hands it's fallen through.

In 2009 I left Mozilla to go to the CouchDB company, which at the time it had more names than products that got released, so I won't get into the name of the company, because I think everybody saw it with a different name. But while I was there, Mozilla was working on a new standard for the browser with IndexDB, and this had come out of people not liking WebSQL, and one of the questions that they had was "Can we build a CouchDB on top of this?" Because they didn't wanna ratify the standard until they knew that a CouchDB could be built on top of it. So as a proof of concept, I wrote this thing that was just like a CouchDB implementation on top of their standard. It wasn't in any browser yet. They were sending me one-off builds of Firefox that had the standard in it.

So that was kind of how the project started, and then it just kind of sat there as like this proof of concept on GitHub that nobody was really looking at. And Dale Harvey, who was doing the opposite - he was at the CouchDB company with me and then he was moving on to Mozilla, he took an interest to the project and was like "I really wanna get a couple more things going", and I was like "Here you go, here's all the commits and everything."

\[00:52:06.17\\\] He then built a much bigger community around it and a bunch of different stuff, and then eventually he kind of got tired of it, and then Nolan Lawson was like "Oh, I have all these big ideas for integrating with all this different LevelDB stuff that's going on", and now Nolan has kind of taken on the reins and has been leading the project for quite a while and there's all these different contributors and stuff to it. So it has a really nice, rich history, that isn't about any kind of individual person, which is really cool.

**Alex Sexton:** It's really kind of emblematic of the project.

**Mikeal Rogers:** Yeah. Oh, and credit where credit's due - Max Ogden came up with the name PouchDB. He's very into puns, and he thought that it's a small database, it's like a database that you put in your pocket, like a pouch, so that's where that came from. Just FYI on that one...

**Alex Sexton:** Do you know any production stuff that uses it?

**Mikeal Rogers:** Yeah. I can't recall -- there was this hospital software that was using it... Hoodie uses PouchDB, so a big part of the Hoodie project is PouchDB. They've done a bunch of different big projects for places that they use the full Hoodie stack, and especially PouchDB, one of which is -- I think it was one of the things that was going on in Africa, but essentially this application for people doing a lot of on the ground working with different people and cataloguing various symptoms that they have, or other stuff, and then eventually syncing that with everybody else and making sure that it works and that people don't overlap and that everybody's getting all the data. But they're working constantly in areas that don't have enough internet for them to use, so they needed to work offline.

**Alex Sexton:** Cool.

**Rachel White:** I think that the GitHub for PouchDB too is also super friendly to people that are interested in trying to contribute to it. I think that also has a lot to do with the kind of good stuff that Nolan encourages in open source and the Hoodie people as well. I know at least Gregor does a lot of stuff with Pouch, who works at Hoodie, and they try and do a lot of things with Your First PR. That's pretty much how I found out about PouchDB, because I was like "They're nice! Maybe I'll look at it."

**Mikeal Rogers:** Yeah... I mean, if you're gonna build a spectrum of projects that are really good at the community side of stuff, bring in tons of people, are super nice, constantly getting new contributors, have contributors doing lots of non-code tasks as well... Hoodie is like the far end of the spectrum. They're doing the best that you could probably ever do with that, and then everybody else falls somewhere shy of where they are. They're really, really good people.

If you're new to programming and wanted to get into open source, I would encourage you to look at Hoodie, because they'll have something great for you and they'll treat you really well, and they're just great people all around.

**Rachel White:** There's also stuff that's tagged for first-time contribution, and non-code contributions, so there's some nice options in there.

**Mikeal Rogers:** Jenn Turner has mentioned that eHealth Africa is the app that I was just talking about; she popped into the chat and set us correct on that stuff.

Cool. Okay, I think that we're probably ready to move on to our picks now. Rachel, I know that you've got your pick all lined up, why don't you tell us about that?

**Rachel White:** Yes, I do! My pick of the week, which (I don't know) is pretty popular and it's extra cute and I'm excited - it's called tiny-care-terminal, and it's made by Monica (I don't know if I'm gonna say her last name right) Dinculescu, who is notwaldorf on GitHub. It is a Node.js app that -- well, it's a JavaScript application that lets you pull in...

\[00:56:05.28\\\] It's basically like a dashboard, but right in your terminal, and it's there to let you know what you've worked on recently with your GitHub commits for the current day and the previous week, and then also... This is my favorite part - it pulls in three little current Twitter feeds, one from Tiny Care Bot, one from Self Care Bot, and one from Magic Realism Bot, which are just amazingly silly -- well, two of them are very nice; they're trying to help you have a good day and take care of yourself, and then the magical realism bot is ridiculous. If you know what magical realism is, it's mostly a literary and film genre type of thing that is just very fantastical.

So you'll get a little tweet that says - I'm reading one now - "A mermaid paints the picture of a glass circus tent." They're just silly, but it's nice... People don't really build - as far as I know of - things for the terminal that aren't actual tools. This is just something nice, and I like that, and I wish more people would just build nice things. I'll post it into JS Party. There you go.

**Mikeal Rogers:** Awesome! Alex?

**Alex Sexton:** Cool. Mine's pretty quick and easy. It's by Paul Irish, it's called pwmetrics. It's a command line application, it stands for progressive web metrics. It uses Google's Lighthouse performance measurement tool, and kind of combines it with the command line. So you just say "pwmetrics" and then give it a URL, and it will use some default configuration and give you this nice, pretty graph of your first content paint, your first visual change, perceptual speed index, time to interactive and first meaningful paint.

So it kind of gives you a bunch of quick, easy stats, so you no longer have to go to the Lighthouse beta webpage and type in your URL and stuff like that. I don't know if I'd make this part of your build process, because you're kind of relying on other people's -- well, no, you're not really... It runs locally, so it runs a Chrome instance, so you need a headless Chrome, or you need the ability to xvfb or something like that on your build servers, but you could probably put this in maybe a non-critical build path and then get performance metrics from every single commit that you ever make to your stuff and be really nifty. Some really good frontend ops right there.

**Mikeal Rogers:** Cool! Awesome! Mine is a website, it's called GitHub. It's really cool, there's projects... No, I'm kidding. My pick is not GitHub. My pick is really self-promotional this week... Request For Commits is another podcast that I do on the Changelog network with Nadia Eghbal, where we dive really deep into open source. You can check out season one. We record them in seasons, so that we can kind of really think about who to talk to and what we're gonna think about in terms of themes for the whole season. But we have recorded some more episodes, and they will be coming soon to the Changelog feed - to the master feed and to the RFC feed.

But in the meantime, you can go and check out the old episodes, because they are all very timeless there. There is no news in them, it's all -- we talked to a lot of people about projects that have been around for like ten years. If you're really interested in web stuff, I highly recommend the one with Brendan Eich, where we get into the history of the web and how browsers have been funded and sustained over time. So check that out - changelog.com/rfc.

That's our show! Thanks everybody for showing up. Rate us on iTunes, do all kinds of things to promote us; tell your friends, tell your mother... Even is she doesn't write JavaScript, she can learn... That's it. Bye!
