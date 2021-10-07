**Kevin Ball:** Hey there, Kball coming back at you from Node+JS Interactive. I'm here with my man, Nick Nisi.

**Nick Nisi:** Hello!

**Kevin Ball:** And we are talking with Nara Kasbergen, senior full stack web developer at NPR, focused on Voice UI devices, which I'm really interested to explore... Nara, can you tell us a little bit? You gave a talk today, was it...?

**Nara Kasbergen:** Yes, it was this morning. My talk that I gave here today was a little bit strategic, or high-level technical strategy approaching these platforms, because it is a very important space for NPR. For those who are not familiar, we're a public media, specifically public radio organization for the United States. People are not buying radios anymore, but they are buying devices like the Apple HomePod, the Google Home and the Amazon Echo... And at our core, all we really need in order to provide an NPR-like experience is an internet connection and some kind of audio output... So that's why expanding onto these platforms is very important for us.

I'm essentially the lead engineer on that team, but we're very small, we have only five people - two developers, a product manager, a designer and a scrum master... We have to do a lot with a little, and so we're also very conscious of "How can we try to structure our work in such a way that we don't have to code for every single platform from scratch? How can we do this in a reusable way?" So far, we've done that with pretty good success on Alexa and Google Assistant, essentially setting up codebases where a lot of the code is shared; even though there are platform differences, there are different SDKs, that sort of thing... So I talk about how that works, and what that looks like in practice.

A part of what's enabled us to do that fairly easily as well is the rise of serverless. We're using Lambda, and that's worked out nicely for us there. Then I also just briefly touch on some of the interesting challenges that we've run into in this space. For example, a big thing for us is anytime that we're working with these devices, obviously, at the end of the day the goal is to play an audio file, either a stream or an mp3, but these devices so far have been very focused on text-to-speech, so sometimes the audio APIs are still a little bit lacking, so that's part of the challenge of working in a new and exciting space.

Also, we're still learning about what good user testing looks like, what good QA practices looks like, and that's all kind of still work in progress. I wouldn't say that we figured out the answer yet, but I'm glad that at least people enjoy hearing about what we've figured out so far.

**Nick Nisi:** \[00:04:00.10\] That's very cool. Did that involve the development of a framework around the frameworks for each of these devices?

**Nara Kasbergen:** Kind of, yeah. We ended up with something that we are calling our generic voice UI framework... But at the same time -- people ask me about this all the time, it's like "Would it be helpful to have like an Angular or a React for voice UI development?" and my answer there is no, just because the SDKs that these companies have provided for Alexa, for Google Assistant are already pretty robust, and I think the more that you try to put abstractions on top of those abstractions that they already give you - it kind of takes you very far away from the nuts and bolts as well.

I think our framework works well for us, because it's also built on our understanding of what's really happening underneath the hood... So I wouldn't necessarily recommend that someone else goes and builds an open source framework for voice UI development.

**Kevin Ball:** Can you walk us through -- what does one of these apps even look like? Is this some installable thing that goes on the device? Is this like a manifest file that things know what to talk to? How does this even work?

**Nara Kasbergen:** It's a little bit of a mix of all of those ideas, and some new ones. From the user perspective, for the most part they are essentially apps that you install, but nothing really gets downloaded onto your device for as far as I'm aware. Basically, it just kind of links your account with that app to enable you to use it... But that's really all that happens, at least as far as I'm aware. I don't know the exact way that it works behind the scenes, because that's also a little bit of the black box that both Amazon and Google control; they don't necessarily always tell you exactly what's happening... But most of what's happening we do know is actually more so in the cloud, so there's very little that's actually stored on the device itself.

So for a third-party developer like me, you're essentially creating an API that takes in requests from (in this case) either the Alexa service, or Dialogflow, which is the service that Google provides for Google Assistant. That always comes in the form of a JSON body that you're basically responsible for parsing and figuring out what the user was actually trying to do. They've already kind of pre-processed that, done a lot of natural language processing and machine learning, so it's usually pretty clear from that JSON body what the user was trying to do. The SDKs essentially take care of usually just mapping that to a specific function in your app... So you don't have to do a whole lot with that big JSON blob. Then you need to produce a response that is also a big JSON blob, that follows a certain format that they have laid out. Again, the SDKs really help you do that, so that there's very little boilerplate that you actually have to write.

What's interesting is that even though -- you're actually creating an interface; in some ways it is like front-end development, but the actual code looks more like a very simple express server, because you're just taking in that one request and producing a response... And that's also why it lends itself really well to serverless, because you're really only deploying a single function - again, taking in a request and producing a response.

**Nick Nisi:** Yeah. So how does that work for testing that? Is it something that you can test locally, or do you have to have it running with the whole setup, with a device that you're talking to...?

**Nara Kasbergen:** Yeah, that's what we're still figuring out, and there are people working on third-party tools for this as well, so hopefully that's the part that I'm hopeful we'll continue to get better in the future. Essentially, like any other codebase, we do some unit testing, but we don't really have confidence that just because the unit test passed, when the user actually talks to their device is gonna do what we expect it to do, because of that natural language processing/machine learning component that happens inside the Alexa or Dialogflow service.

\[00:08:03.19\] So ultimately, in order to do a really robust testing, at least right now, we still have to test with a physical device. Thankfully, there are various ways to do that so that you are able to test without just having to publish to live, essentially. I think that's the part that a lot of people are confused about. Both Alexa and Google Assistant essentially have this concept of a production version and a development version of your skill, or your app action on Google, whatever you wanna call it... So most of the time it's fairly easy to set up some kind of CI process so that when you push code to your repository it updates only the development version...

**Nick Nisi:** So then you have a device that is running the development version that's not publically available...

**Nara Kasbergen:** Yeah, kind of... That's the interesting part, where there's also some differences between Google and Alexa, but I think Alexa is the one that people are most familiar with, so I'll talk more about that one... They essentially have this version called Beta Test, which like the name suggests, was probably mostly designed for beta testing, but it ends up being good for rudimentary testing, as well. So for that one, you give it a list of email addresses and it sends an email to that person, there's a link that they have to click; once they do that, their account is basically always pointed at the development version of your skill... Which works out pretty well for us, because most of the time -- we also generally have this practice of... Like, I'm never gonna be the only person testing the code that I push; there's probably gonna be at least three other people, like our product manager, our designer, and probably the other developer on my team who are testing that as well. So we basically keep ourselves on the beta test list all the time, so that we're always pointed at the development version; that's how we're doing most of our testing.

**Nick Nisi:** I see.

**Kevin Ball:** I'm still trying to wrap my head around how this works... So by the time the data gets to you, in your API, you said it's already gone through machine learning and language processing... Do you need your own language processing at all, or is it already mapped to a command of some sort?

**Nara Kasbergen:** It's mapped to what they call an intent, which is essentially a command, the name of a function, that's kind of the easiest way to think about it. Definitely for Alexa -- there's no incentive at all for Alexa to bring your own natural language processor. For Google, the easiest way to produce what they call an action for Google Assistant is to use this service called Dialogflow, which is actually a company that they bought; it used to be called Api.ai, and they were actually originally focused more on chatbots. Now they've extended it to essentially be sort of like the development platform for Google Assistant's actions.

What's interesting there is that -- so that's basically the easiest way to produce an action for Google, but you can opt not to use it, and if you decide not to use Dialogflow, then you do need to bring your own natural language processor... But I think the vast majority of us are probably not in the business of both doing natural language processing and also doing something with that data, so I think the fact that they're providing a pre-built solution works out pretty well.

**Nick Nisi:** So to test that -- I mean, for a local development how does that work, with lambda functions...? Is that something that you can run locally, or...?

**Nara Kasbergen:** You can. So far, all of the tools that I've tried for that have not been great, so we don't do a ton of that right now. I think that was definitely the biggest mental shift for both my partner developer and I; we'd always been very much used to always doing local development... But like I said, there's just a big disconnect between when you're just writing that lambda function - it's so easy to do it in like a unit test kind of fashion, where you very tightly control the input, so the output is also what you expect... But once you bring in this whole other dimension of like "This device that you talk to, where someone else is controlling the NLP", the results can be a lot more unpredictable, so I think it also makes sense to do a lot more manual, in-person testing, even though it definitely slows down the process.

**Nick Nisi:** \[00:12:29.21\] Sure. But that makes sense, because... Yeah, that would be very tough to automate.

**Nara Kasbergen:** Right, exactly.

**Kevin Ball:** Yeah, and it's interesting too because there's that whole layer before it gets to you, right?

**Nara Kasbergen:** Yup.

**Kevin Ball:** Once again, I'm still trying to wrap my head around this, but... Does the way that you name your commands influence how easy it is for them to recognize it, and things like that? That's almost pre your code, but it's like, if this is a word that is easier for NLP or language parsing to understand, that potentially makes it easier for things to get through. I haven't used Google Assistant much at all; I've played around with Alexa a little bit, my father-in-law has an Alexa... My kids love to talk to her. She gets maybe 20% of what they say, and I can see that being -- while it's not as bad for an adult, you're not gonna be quite as much, but if the words that you choose to activate your application/function/skill, or whatever the...

**Nara Kasbergen:** Yeah, skill.

**Kevin Ball:** ...skill, are tricky for Alexa to parse, you're in trouble. How do you test that? How do control for this at all?

**Nara Kasbergen:** That's a great question, and we're definitely still working that out as well. I will say the platform does help you with that a little bit in a couple of different ways... Again, focusing primarily on Alexa as an example, because I think that's the one that more people are familiar with, the way that it works is -- I mentioned before you have your intent, which is basically the mapping of what your skill should be trying to do, what the user is trying to do and what function it should invoke in your actual app code; and an intent is always accompanied by a list of what they call sample utterances. This is basically all the variations of what someone could say in order to trigger that intent.

They generally recommend that you provide for any intent at least 20-25 sample utterances... But like I mentioned, they're also doing some machine learning, so your list does not necessarily have to be exhaustive; they're actually smart enough that if you provide two things that are fairly close together, and then there happens to be a third variation that's kind of in-between those two, it's more than enough to figure out that you're still probably trying to do the same thing.

There is also a certification process that you have to go through in order to publish a skill to the skill store, and that actually involves real humans at Amazon who are testing your skill, and they will actually provide you feedback and be like "This command is way too complex" or "It's way too easy to screw it up", or "Anytime that we tested, we always got it partly wrong and we actually have recommendations for how we can fix that." So that's what helps there, as well.

**Nick Nisi:** How difficult is that, getting those intents right, or -- I forget what you called them... Not making the command too complex.

**Nara Kasbergen:** Right, yeah. The short answer is it gets easier the more that you do it.

**Nick Nisi:** Sure.

**Nara Kasbergen:** The first time that you do it, you're probably gonna miss like a hundred of them; that's something that comes with experience. I think what helps us as well is, as I mentioned, we have a designer on our team, so he's very conscious of that... And he is a person who really likes doing user testing - that's one of his favorite things - so he's been focused a lot on that, observing real users interacting with these devices and seeing how they behave.

\[00:16:04.20\] Interestingly enough, he even started on that before we started any actual development. What he did was he took something that looks like a speaker - I think it was actually maybe technically like a water bottle like yours, and he put it on the table and he just asked people to be like "Okay, you're trying to do XYZ thing. What are you gonna say? What would be the most logical command to you?" That was the starting point for what we call our internal voice lexicon, which is based off of not just what we think that users should do, because I think sometimes as a developer you're kind of approaching that from kind of like an inside baseball perspective, of like "I know that it needs to trigger XYZ, so this is the most logical thing", whereas he has approached it much more from a human perspective of like "The human is trying to do this, so XYZ is the most logical thing for them to be saying."

Sometimes we have to compromise a little bit and meet in the middle, because it turns out that what the human is trying to say is actually not possible because of various platform restrictions... But I think approaching it from the human angle is certainly key. That's why one of my biggest recommendations when people are interested in working in this field is always work with a designer.

I think it's so easy to lump this "work together" under the umbrella of "Oh, it's IoT, so that means it's just a technical challenge", it requires someone like us, who just wants to sit there and hack and kind of work at it", but working with a designer who is thinking about that human aspect I think is totally critical.

**Kevin Ball:** Are the utterances -- are those verbal, those are recordings?

**Nara Kasbergen:** No, they're actually typed out.

**Kevin Ball:** They're typed out...

**Nara Kasbergen:** Yeah.

**Kevin Ball:** Interesting.

**Nara Kasbergen:** And so there's all of these rules... For example, if your utterances include acronyms, then there's a specific format; you have to actually spell it out -- they're generally all lower-case, so you have to spell it out with periods in between, and then the Alexa service is smart enough to recognize that that should be treated as an acronym.

**Kevin Ball:** In the background, do you hear the bubble wrap? Somebody pointed out that we were recording here, so... \[laughter\] But who can resist bubble wrap? Oh, they brought over some bubble wrap. Do you wanna pop bubble wrap for JS Party? \[laughter\]

**Nick Nisi:** The joys of live recording...

**Kevin Ball:** I know, right...? Okay, so they are typed out, and then... Voice interfaces are still novel to me, I'm still totally -- so is it mapping that to voice sounds and then mapping it back, or is it just going...?

**Nara Kasbergen:** No, I think the Alexa service ultimately is only dealing with text. I think what they do is when you're speaking to your device, it records an mp3 of that and then transcribes that into text... And it compares that to the actual text in your sample utterances and tries to figure out what you were trying to do. That's my best understanding. Like I said, it's a black box, they don't really like to talk about what happens inside of that box.

**Nick Nisi:** It's also really interesting with -- you said you should have a designer working on this, but it's not really anything that you can see, it's all audible, right? So that's really interesting, having somebody design the audio experience, and it's not something that's typical in typical apps.

**Kevin Ball:** Yeah, it's not visual design; it's application design, interaction design, whatever you wanna call it.

**Nara Kasbergen:** Yeah. That was even one of the first questions when our team convened about a year ago - how does the designer communicate to the rest of us what we should actually be building? What is a comp in this world when it's not front-end, and what are the tools that make sense for this? And it ended up being basically just a bunch of flow charts created in Google Sheets, because that turned out to be the absolute easiest way to map out what should be happening.

**Nick Nisi:** So the application itself that you're designing - is it really to be able to say "Play this show on NPR", or "this specific episode"?

**Nara Kasbergen:** That kind of already exists, because a lot of that functionality can actually be powered by RSS feeds...

**Nick Nisi:** Oh, cool.

**Nara Kasbergen:** \[00:20:13.07\] ...so that's always step one for a lot of these device manufacturers, when they're trying to expand the content of their platforms, is enable RSS feeds. For us at NPR that's great, because we have those already; we didn't have to build anything specific for that. But two things that we can't easily do that way are - after the RSS feeds, our biggest primary focus is allowing people to listen to the livestream of their local radio station (NPR member station), and then NPR One, which is one of our kind of multi-platform experiences... NPR One started out as the mobile app for Android and iOS, and is now available on various other platforms - Universal Windows, integrated into cars, several different smart TVs, it's gonna be on the smart fridge that Samsung is working on, that sort of thing. So the whole idea for NPR One is it's essentially like a personalized public radio playlist, that's informed by your listening habits. So if you like to listen to a lot of podcasts, it can recommend you podcasts, if you're like me and you have a short attention span, it can just basically catch you up on the latest stories in 2-3 minute segments, that sort of thing.

**Nick Nisi:** Pretty cool.

**Nara Kasbergen:** So both of those are something that's really only possible with custom skills. The livestreaming one is primarily just because we need to account for all of these different situations where the user may or may not know what their local NPR member station is, and if they don't know, we have to help them find it... And playing livestreams can also sometimes be tricky on these platforms; it's not something that they usually support by default.. So that's always kind of step one.

And then NPR One is also more complex than an RSS feed, because it's personalized; we actually require login, because the whole idea is we want you to -- if you're listening on your mobile device, for example while you're commuting to work, and then you get home and you wanna keep listening on Alexa, we make sure that you don't hear the stories that you heard on your commute... That sort of thing.

**Kevin Ball:** How do you manage login on a vocal device?

**Nara Kasbergen:** That's a great question... For Alexa, right now the only thing that you can do is use OAuth, and it requires someone to have the Alexa Companion app installed on their phone... And it's very kind of ClearGate, where basically once you say "Okay, enable authentication", the only thing that the user can do once they install or activate your skill is they have to go to that app and log in before they're able to interact with it in any way at all... Which is not great for user experience, so I generally recommend to people not to use that authentication unless they absolutely have to. If you're a banking app, then it probably makes sense, but for everyone else, I would say -- we've seen an enormous drop-off with users; they're not engaging with the Alexa skill if they don't have an account already, if they don't know what they're getting into, just because there's no way to provide a preview of what they're gonna get.

Google is a lot more flexible, and I think it also makes sense because they are an identity provider. At this year's I/O they announced a new feature, where you can actually log in via voice if you have a Google account already, and that Google account already exists on the other OAuth server. Or you can even configure it so that if it doesn't exist, it just creates an account automatically... So it's what they (or at least what we) call frictionless login, essentially.. So that doesn't require you to take out the companion app, and that really helps. They're also a little bit more flexible about -- you can provide some kind of experience where they can at least start interacting with your skill without having to be logged in, and I think that helps a lot, as well.

**Kevin Ball:** \[00:24:13.29\] Login by voice meaning some sort of voice recognition? I'm just imagining trying to spell out my password out loud, and thinking "Is anybody listening...?"

**Nara Kasbergen:** So the whole idea is, you know, when you're setting up your Google Home, you already have to take out your mobile device and install the Google Home app, and link that to your Google account, so the Google Home already knows who you are... So the third-party skill essentially asks you and your Google Home for permission to share that account information with a third-party skill, and you essentially just say yes or no, and that's it.

**Kevin Ball:** And it checks that it's you and not your five-year-old, or something...? I mean, not that I have any problems with this or anything, but...

**Nara Kasbergen:** So it does actually do voice matching... I think that's where you do have to configure your Google Home to be aware that there's multiple people interacting with the device. But once you do that, it will recognize and basically it'll know that your five-year-old is not you. It will not tell my third-party app that, so it still respects your privacy in that way, but it is able to distinguish between multiple people in the house, and I would say that's also one of the biggest differences that I've seen so far, at least as a third-party developer, between Google Assistant skills and Alexa skills - Google Assistant skills are aware of multiple people interacting with the device, whereas Alexa just treats everyone in the house as one person. But again, they don't have the frictionless login, so you would still have to take out your phone and actually manually sign in on the app.

**Kevin Ball:** That's interesting. Coming back to your development environment, it sounds like you're here at Node Interactive and you're talking about serverless and it being a lot like Express... So is this an area where a lot of the SDKs are in JavaScript? Are there other options for folks? How does this work out?

**Nara Kasbergen:** Yeah, I would say JavaScript is definitely the best option. I think it's the only one that has an SDK for every major voice platform. Cortana is another one... We haven't done a whole lot with it, just because the market share is so much lower. But they also have a Node.js SDK. And of course, Node.js is also the only one that is supported on every single serverless provider as well, so that's where, again, it helps you get up and running more quickly.

You do have other options. I can say there are certainly Alexa SDKs for Python and Java. I think for Google Assistant the only other SDK is for Android-flavored Java, if you wanna do more of like a mobile development kind of approach. I don't think they have a Python one. And then Cortana also has a .NET one, obviously.

Basically, the one thing that they all have in common is Node... And you don't have to go serverless; you could build your own traditional REST web server, but it's just so much easier frankly to deploy it as a serverless function. For us, the autoscaling is really critical for helping reduce costs as well, so unless you have a real strong reason not to go serverless, I would say if you're gonna do this work, you should be probably doing serverless.

**Kevin Ball:** Awesome. Anything else exciting around voice or NPR, the work that you all are doing in JavaScript and Node that would be interesting to a set of JS developers?

**Nara Kasbergen:** Yeah, I mean, we're definitely not the only team at NPR that is doing JavaScript. We generally give every team their own ability to choose the tools that they think are the best ones for the job, with some restrictions. We have two really big legacy codebases, one that's written in PHP and the other that's written in Java, so sometimes it just kind of makes sense to stick with those. Sometimes we don't have the bandwidth to completely rewrite everything from scratch.

\[00:28:11.01\] Certainly, with all of the new development that we're doing though, it's pretty much all Node and JavaScript. I can't speak too much to the specifics, but we were early adopters of coa 2, so some of our back-end developers, who I think mostly actually were very hesitant about JavaScript development initially, who just kind of loved PHP and were very comfortable with it, have completely switched gears and love coa now... So I think that's a big thumbs up for the coa project.

**Nick Nisi:** Yeah, that's great.

**Nara Kasbergen:** And in terms of other things in voice at NPR - I mean, it's constantly evolving. We don't even know what we're gonna be doing three months from now, which is I guess the fun and exciting part about working in a new field, but... Stay tuned.

**Nick Nisi:** I was gonna ask if the work that you've been doing isn't live on these devices?

**Nara Kasbergen:** For Alexa yes, for Google no. We are still working around some of the limitations of their audio player, like I mentioned.

**Nick Nisi:** Gotcha, yeah.

**Nara Kasbergen:** It's still kind of a struggle for us. But yeah, for Alexa if you say "play NPR", that takes you to the station streaming skill that I talked about, and if you ask "Alexa, open NPR One", you'll get the NPR One skill that I talked about.

**Nick Nisi:** Do I have to go to the app and install these skills first, or does it just appear?

**Nara Kasbergen:** For play NPR you do not. Part of our perk of our good relationship with Amazon was that we got that so that it's essentially available to any device without any kind of install needed, for NPR One.

**Nick Nisi:** Nice.

**Nara Kasbergen:** I believe as long as you say "Open NPR One" and you're clearly enunciating that, so it doesn't think you're trying to access the other NPR skill, it should essentially just install that for you automatically, or it may just ask you "Do you want to install the NPR One skill?" But then you do need to log in, so then you still need to go to the app... So usually the easiest way to access that one if you haven't used it before is just to go into the Alexa Skills store and install it right there, and then it will just ask you to log in right away, so then you don't have to remember to go back and do that later.

**Nick Nisi:** Very cool.

**Kevin Ball:** Awesome. Well, thanks, Nara. I appreciate your making the time and coming out to chat with us. I learned a ton from this conversation, this was awesome.

**Nick Nisi:** It's really cool, and it sounds like it's a really fun project to work on.

**Nara Kasbergen:** It is... It's tough, but it is a lot of fun.

**Nick Nisi:** Awesome.

**Nara Kasbergen:** Thanks for having me.

**Nick Nisi:** Thank you.

**Break:** \[00:30:52.06\]

**Kevin Ball:** Kball here at Node+JS conf. I'm here with Nick Nisi...

**Nick Nisi:** Hello!

**Kevin Ball:** ...and Jen Looper, who is a developer advocate at Progress. Jen, how are you doing?

**Jen Looper:** I'm doing great. Thanks for inviting me, I really appreciate it.

**Kevin Ball:** Awesome. So you did a talk earlier today... Can you tell us a little bit about it?

**Jen Looper:** Sure. The talk was called "Build an engaging native mobile app with NativeScript and Vue.js." It was about this new custom implementation that we have in the NativeScript for Vue. Normally, with NativeScript, which is a runtime that you could be writing in JavaScript and you're building for a native mobile app, normally we would be using Angular, or no framework, or just JavaScript or TypeScript... And this lovely college student named Igor Randjelovic just decided to port it for Vue, and I went a little bit crazy... So it was really exciting moments for us.

**Kevin Ball:** That's awesome. So tell us a little bit more about NativeScript. It's JavaScript, but it's a little more than that as well, right?

**Jen Looper:** Yeah. It's a runtime, and I think the easiest equivalent that people are making nowadays is that it's a lot like React Native. Basically, we're all trying to solve this problem of using JavaScript to build cross-platform apps... And you know, the people who started this were actually people like Appcelerator Titanium; they're all doing these runtimes, or bridges, or some way to leverage the JavaScript runtime so that you can go ahead and port your apps for these native platforms. We all have great solutions for this, and NativeScript is one of those. It's free and open source so no harm, no foul if you wanna try it.

**Kevin Ball:** So if you have an existing Vue application, how hard is it to port that into Vue NativeScript?

**Jen Looper:** It's a great question, and it's something that we know that everyone wants to do, and we haven't solved it yet... But I think what we're gonna be able to do is use the Vue CLI 3 and Vue 3 when it all comes out. Vue CLI 3 is here, but Vue 3 is coming out, and we're gonna be able to more easily make plugins, at which point we'll be able to actually scrap a lot of the code that we have for NativeScript Vue, and we'll be able to go ahead and say Vue add web app, Vue add mobile or Vue add my-app-name --mobile or some such thing, to go ahead and bolt on your native mobile app. This is the dream; we're not there yet, but we're hoping very soon... And it's exciting to kind of become close to the Vue project as it evolves, and have a little bit of input on how it's coming along. It's really exciting.

**Kevin Ball:** Yeah, this seems to be something that all of the big frameworks are moving towards, of having more of a pluggable rendering back-end. I know Angular - part of their big rewrite was to enable that; React has started to do that, so that you are essentially able to have this DOM back-end versus mobile back-end, versus potentially other back-ends just plug right in there.

**Jen Looper:** Yeah, and I think the great strength of Vue is that -- first of all, we're a little bit newer, so we're able to learn from the things that other frameworks are doing, but also it's always been presented as a progressive framework. So you can take a little piece of your application and rewrite it in Vue and just drop that in. So it's not like a large, monolithic, Angular app; it's something that can just be progressively enhanced as you go.

I always look at Dev2 - they have rewritten pieces of their application in Preact, so they just drop it in; this is kind of the new way of doing things, and I think it allows your team to be really Agile and to learn on the fly. It's pretty exciting.

**Kevin Ball:** Yeah, I love that about Vue in particular, and I think it is more and more something people are looking to do. I was chatting with a friend of mine who's reworking their application that was written with Knockout.js, and he's like "This is an old framework, it's kind of ghetto, but most of our application - it just works. We just want something better for the new parts, when we're doing something more complicated."

**Jen Looper:** \[00:36:20.16\] Yeah, for sure. And it's nice to see that frameworks kind of can play all together. I mean, let's face it, all frameworks are trying to do the same thing, as well - they're trying to make the web fast and performant, and I think we all have different ways of doing it, but if we can all work together, then the web will be better. This is the dream.

**Nick Nisi:** And is there anything specific about Vue that makes it a good choice for combining with NativeScript to do native development?

**Jen Looper:** Yeah, it's a nice question... So I really like Vue because it's so lightweight and it's so fast. I find that the startup time for your native mobile apps is pretty quick, and then once you Webpack it down, the app size is actually pretty small. A native app is always gonna be your most performant and your smallest thing, but when you're using these runtimes, you're gonna have a little overhead, but Vue gives you (it seems to me) the least overhead... Just because it's so small.

We actually - amusingly - have a port for Preact as well, and somebody tried to do it for Aurelia, so... Everyone is trying to see how far they can push this, to get these little small, fast-starting apps. It's kind of cool.

**Kevin Ball:** You've been involved in a lot of stuff in the Vue community in particular... Can yo speak a little bit to what that community is like?

**Jen Looper:** Yeah, it's a really cool community, and it's young enough that it's able to have new voices coming in, and I think it's evolving in a really positive way. One thing that I have the privilege to be able to contribute is my initiative, which is called Vue Vixens. I was inspired by ngGirls, which was launched by my friend Shmuela; she basically has full-day workshops piggybacking on conferences. We follow that same model, and we're extending and expanding this model as we find locally we have different needs.

We do the workshops for women, in the conferences; I'm actually gonna do one tomorrow. We also have launched a whole bunch of chapters, we're scaling so fast. I did a conference in Paris, and we had three chapters launch that day. I came back to Boston and there was a new chapter launch by the time I got home. So I cannot keep up, this is insane. We're just scaling super-fast, and we're able to take care of people in South America, and we just launched in Mauritius... All over the place.

I think that it's a great way for the community to grow, to expand... Inclusivity from the get-go. It's really nice to watch, I really love it. And by the way, Evan is on my board of directors, so from the top we have buy-in. \[laughs\]

**Kevin Ball:** Absolutely, yeah. I went to VueConf this year, and actually I think I saw possibly this same talk, or a similar talk that you gave there...

**Jen Looper:** Probably...

**Kevin Ball:** But yeah, it struck me how inclusive the community felt.

**Jen Looper:** Yeah, it's really nice, and I think at VueConf U.S. we were at that table, we were making so much noise, so... \[laughs\] We were really making a racket. It's a really kind community, and we wanna make sure that it evolves in even more inclusive and cool ways.

**Kevin Ball:** Nice. So let's go back to the NativeScript side of things a little bit. We dived over into the Vue and the community - what's the community like around NativeScript?

**Jen Looper:** Yeah, it's very interesting to watch it evolve. I'm actually in charge of -- I kind of park 24/7 on the NativeScript Slack, the community Slack... I've watched it grow from zero to 8,500 people now in general. Adoption is always our goal, we want people to adopt it. Of course, there's a lot of comp-- not competition, but there's other options out there; React Native is very, very big. So we have a little bit of a niche of people who want to use different frameworks, or who don't wanna use a framework at all...

\[00:40:05.09\] So adoption is coming along, and I think where we're finding a lot of success in the Angular world is with banks; I don't know why, but banks seem to really enjoy using NativeScript, so that's kind of cool.

Then for Vue, the smaller shops, the agencies are looking at it as a viable option. It's great to see, and I'm there to help - help launch, help promote, help in any way that I can.

**Kevin Ball:** Nice. So as I understand, NativeScript is a runtime, and there's also a component library - is that unique per framework, or is that a shared set of components across whatever you're using?

**Jen Looper:** Yeah, it's a shared set of components. It's about 75, or some such number. Those are the base components, like the camera component - you use one component, and then you leverage the native iOS and the native Android camera functions. So all that Java and all that Objective-C and Swift is abstracted away from you, so you don't have to deal with that stuff... Which is great, because nobody wants to deal with that stuff.

Then there is also kind of a premium set, which we used to have as a paid library, but we open-sourced it for very fancy lists, charts, gauges, graphs, kind of the fancy UI that banks (for example) might want to use for data analysis. Then we also have a whole bunch - I think there's 600-something plugins that community members have built, and engineering has built as well. Those are all in Npm, and if you go to the NativeScript marketplace - I think it's market.nativescript.org - you can get an idea of what's out there. There's core components, there's the premium components, and then there's all the plugins... So really, we've kind of got you covered. And if we don't have you covered, then you can go to Android Arsenal and CocoaPods and build your own plugin. That is not something that I'm loving to do myself - I find it a little hard to get my head around, but some people are great at doing plugins... For example Eddy Verbruggen, who is our plugin guru - he's really great at it. It's very fun to watch him work, and useful to use.

**Kevin Ball:** Nice.

**Nick Nisi:** You mentioned in your talk about how Vue+NativeScript allows you to share a lot of code between the native experience and the web experience. Can you talk a little bit about that and what goes into that isomorphic share of code?

**Jen Looper:** Yeah. I mean, this is the great dream - everybody wants to have the big codebase, and you port for Electron, you port for iOS, you port for Android, you port web, and it's a thing of beauty and a joy forever... \[laughter\] And sometimes it's like, "Be careful what you wish for, because you might get it", but we have a beautiful way of doing this within the Angular community, using Angular Schematics. So you can just ng create all your different flavors of whatever you want, and that works brilliantly. With Vue, we're gonna be leveraging the Vue loader and Webpack to build pieces and bits of your codebase progressively, as you need it. We don't have the perfect official solution just yet, but we're getting close.

Right now, the way we're looking to do it is to have naming conventions - we do this in Angular, too - for your single-file components. So you have like home.vue for native, and then home.web.vue for your web app.

**Nick Nisi:** Okay.

**Jen Looper:** So a certain amount of your code can be shared, but you're gonna abstract away, you're gonna fork actually the web views and then the native views. We have to decide exactly where the forking is gonna happen, exactly how that code structure is gonna work, how the build folders will look, whether we wanna use the Vue CLI plugins, Vue 3, how that's gonna work... So Vue is evolving, and so is NativeScript Vue. It's exciting times in Vue Land.

**Kevin Ball:** Nick, I'm curious, have y'all ever looked at NativeScript for Dojo?

**Nick Nisi:** Not yet, but as we're talking, that is something that I'm definitely thinking about; that's something that we should be looking into.

**Jen Looper:** Oh, yay! \[laughs\] What is Dojo?

**Nick Nisi:** Dojo is a component library and framework that's very similar to React in a lot of ways, and has its own VDOM implementation...

**Jen Looper:** Oh, nice.

**Nick Nisi:** And it's TypeScript-first, and... Yeah.

**Kevin Ball:** \[00:44:09.14\] Dojo was one of the original frameworks out there. They were pushing modular JavaScript before any of the module standards existed.

**Jen Looper:** Nice.

**Kevin Ball:** As I understand it, AMD essentially came out of the Dojo module implementation, and things like that... But then they sort of sat at 1.0, and I don't know if this is accurate, but from the outside it looked like it stagnated for a long time.

**Nick Nisi:** It was pretty active... Very slowly though, because it's been used by a lot of enterprises, so... Very slow going with that, but a lot of banks, government --

**Jen Looper:** It's always the banks...

**Nick Nisi:** Yes, right...? \[laughter\] But yeah, a lot of things came out of that module. AMD modules came out of that, there was a very early Promise implementation in it... And it's been around since 2004.

**Jen Looper:** Oh, awesome. Really pushing that envelope. \[laughs\]

**Kevin Ball:** Yeah, one of the longest-lived frameworks I'm aware of.

**Nick Nisi:** Yes.

**Kevin Ball:** And they recently did a 2.0, and now are iterating rapidly with 3.0, and...

**Nick Nisi:** Yes, we're working on 4.0 coming on next week...

**Jen Looper:** Super-duper.

**Kevin Ball:** You know, jumping on all the latest trends, and things like that.

**Jen Looper:** Oh yeah, that's what we do in the JavaScript world. We're like, "Yay, frameworks...!" \[laughter\]

**Kevin Ball:** Yay, a new trend! Woo-hoo!

**Nick Nisi:** But that's one thing that I like about Dojo - and I haven't used Vue yet, but one thing that I like about it is that it's not really backed by Google or Facebook; it's kind of its own thing...

**Jen Looper:** Definitely.

**Nick Nisi:** And I think that that's an important thing to have in this environment right now.

**Jen Looper:** Yeah... It's Evan's Patreon, essentially... \[laughs\] Yeah, and I think he's doing very well. And it's nice to see people contributing more. In Vue London he did a remote keynote, which was very interesting, because what they're talking about for Vue 3 is breaking up the Vue package into pieces. The renderer will be stripped out, and then that would be of particular interest to us, on the mobile side, so we could work on that piece. And then other parts of the library will be broken out, so that it'll be easier to contribute too, because this is kind of complicated stuff... So maybe if we can just understand the renderer, you know, you're money ahead, so just work on that. And I think it'll help with adoption and help with contributor adoption.

**Nick Nisi:** You also mentioned that Vue is going to be rewritten in TypeScript...

**Jen Looper:** Yes, so this is exciting. I like TypeScript.

**Nick Nisi:** Yeah, I'm always trying to turn this into a TS Party.

**Jen Looper:** Oh, I like TypeScript, especially in an Angular context. I always used to give talks in Angular, saying "Once you go TypeScript, you never go back." But I think for Vue it's going to be a huge win. I think that people really enjoy it; you just get a little learning curve going, and then you can just hop right in, and it'll make everything so much safer. \[laughs\]

**Kevin Ball:** I gather the Vue team and the TypeScript team have actually been working together for a while; there were improvements integrated into TypeScript specifically to support current versions of Vue, and Vue has been iterating to be able to better move to TypeScript, and things like that.

**Jen Looper:** Interesting.

**Kevin Ball:** So there's definitely some collaboration that's been going on.

**Jen Looper:** Yeah, synergies... Super.

**Kevin Ball:** Another thing that I think is really interesting about Vue is they're currently really working -- like, the big focus before Evan announced 3.0 (which I guess is now the big focus) there was a huge focus for a while on improving the process and the structures around it, and in that way also learning from the community. They're adopting and RFC process modeled I think after the way Ember does things, and...

**Jen Looper:** Oh yes, there's a lot of Ember footprint in Vue.

**Kevin Ball:** Pulling in all of these different pieces... So it's not just technically that we're learning from other parts of the community, but also in terms of process.

**Jen Looper:** Yeah... I'm gonna guess that Chris Fritz's fingerprints are all over that. He's kind of the guru of the docs, and one of the biggest strengths of Vue is the docs, and this is Chris Fritz, because he's an absolute genius at this stuff. So they tend to get together for sprints... I think they were in Poland last time doing a sprint, and that probably helps a lot getting process sorted out. It's really cool to see... It's really an organic growth of the community, and it's kind of unique, actually. It's kind of neat.

**Kevin Ball:** \[00:48:04.18\] Yeah, it's gone from what felt like a single-man project that blew up, to now looking like it's gonna have the same types of community, organization and governance that any of these projects have.

**Jen Looper:** Yeah, for sure. And we're actually working across the board a little bit on code of conduct situations, so it's kind of interesting, we're kind of collaborating with folks in the Angular community and in the React community to get a kind of framework-agnostic code of conduct. That will also help with process, PRs, and with behavior on GitHub, just to make everything a little bit more calm. It'll be really cool.

**Kevin Ball:** We love to do the framework A versus framework B situation, but more and more I think all of these frameworks are just growing in tandem. The JavaScript world is exploding.

**Jen Looper:** Yes, yes. As my colleague in Sun Life used to say, \[Russian accent\] "This is job security." \[laughter\]

**Kevin Ball:** Yeah, if you're listening to this podcast because you work in JavaScript, you have incredible job security...

**Jen Looper:** \[laughs\] Yeah, you absolutely do.

**Kevin Ball:** ...though I hear you maybe should be looking at TypeScript. \[laughter\]

**Nick Nisi:** More job security.

**Jen Looper:** WebAssembly I think is the next thing... \[laughs\]

**Kevin Ball:** Well, it's funny you should say that, because a lot of folks are like "Well, is WebAssembly gonna replace JavaScript?" I don't think it does.

**Jen Looper:** I don't think so...

**Kevin Ball:** I think it complements...

**Nick Nisi:** I think so, yeah.

**Jen Looper:** Yeah, I don't know very much about it, but I'm not loving the "Yippie aiyay, here comes WebAssembly, let's just throw JavaScript out the window." I don't think that's a great attitude. Let's all keep learning and make sure we're all working towards the same goal, which is making the web performant and fast.

**Kevin Ball:** Yeah, exactly.

**Nick Nisi:** What I've seen with asm.js and WebAssembly is taking things that aren't written in JavaScript and compiling them to JavaScript; so things that are written in C, audio codecs and things like that, and then being able to bind into them with JavaScript, so that you can run them all in the browser natively.

**Jen Looper:** Like Dart? Would that be an example, or...?

**Nick Nisi:** I'm thinking more of like libraries, and such... A way to decode audio, for example; audio codecs, things like that, that are written in other languages - being able to take that, put it into JavaScript, and then bind to it with a JavaScript wrapper, and then interface with it through JavaScript...

**Jen Looper:** Like TensorFlow.js.

**Nick Nisi:** Right, yeah.

**Jen Looper:** Yeah. Hot dog. Cool.

**Kevin Ball:** Or, since we always wanna turn this into a Vim party, somebody built Vim in WebAssembly and put it on the web...

**Jen Looper:** Really? \[laughter\] I'm so confused...

**Kevin Ball:** Yeah, it's kind of amazing, actually...

**Jen Looper:** Oh, my gosh...

**Kevin Ball:** Complete with macro support, and everything... Because it's just a build of Vim, right?

**Jen Looper:** Astounding.

**Kevin Ball:** Most of the web-based editors - they'll have Vim bindings where they're like, "Okay, you can change your key bindings here", but then their macro support is poor, or there's stuff that just isn't there...

**Jen Looper:** There's gaps...

**Kevin Ball:** But they literally just compiled -- and said, "Okay, now it's in the browser." We're taking browsers and making them the new OS.

**Jen Looper:** Yeah, for sure.

**Kevin Ball:** Anything else you wanna touch on or talk about? What are you excited about from this conference, from Node+JS?

**Jen Looper:** I'll tell you - I'm very curious how our event will go tomorrow. It's gonna be very short; we'll see how it goes. I hope that it'll be enough mentors -- I'm thinking very basic, like mentors and attendees, and how it's gonna work out, but I think it'll be fine. But in terms of talks, I think there's so much to qualify out there in terms of the talks at this conference; it is excruciatingly difficult to pick and choose what you wanna see.

I was actually really astounded by one of the keynotes this morning, the one on IoT, so I'm kind of hoping to see more IoT type things out there, so I can catch up again, because I used to love it. Maybe this is the opportunity, I can go and see some more cool IoT talks.

**Kevin Ball:** Yeah, that was actually a good highlight of exactly what we're talking about in terms of JavaScript taking over; you know, job security for all of us JavaScript developers... \[laughs\] Because here's this guy who's been in the IoT world since essentially the beginning, saying "Look, we're over-complicating it. Really, we should just be using web technologies, because they're everywhere, and they work. There's no need to be doing all this crazy, niche stuff anymore. You can be running JavaScript on the devices, you can use JavaScript-based toolkits, at JSConf we learned about Johnny-Five, so we're digging into that..."

**Jen Looper:** I was gonna say, Johnny-Five is incredible.

**Kevin Ball:** \[00:52:26.11\] It's amazing, and you know JavaScript - suddenly you can do robotics.

**Jen Looper:** That's incredible, and I think it's huge for the learning, the people who are trying to build courseware and who are trying to teach, especially with IoT. We actually have an IoT component of Vue Vixens. I was partnering with Particle, they gave me some devices, and we did a cool, little workshop... You're running a mobile app that can control your Particle device, and it's all JavaScript. It's incredible stuff, and I think it's great for learning. People love that tangible feeling of "I made something light up with JavaScript", that's crazy!

**Kevin Ball:** Right. Now you can suddenly do these things that you used to have to do all this crazy, low-level programming, and it's a couple lines of JS.

**Jen Looper:** Yeah, absolutely. That's good stuff.

**Nick Nisi:** And our editors are being written in JavaScript now too, with Visual Studio Code...

**Jen Looper:** Yeah, that was another great talk; the VS Code talk was super. Coming from April's talk about compassionate coding, to have Microsoft up there, basically totally walking the walk... Because that whole project is based on compassion, and listening, and thanking, and being kind, and being cool... God love Microsoft, they're super.

**Kevin Ball:** Yeah, it was pretty funny hearing him talk about how passionate people get over minor things... \[laughter\]

**Jen Looper:** Well, the icon - we all freaked out. Remember when the icon changed? Everybody was crying... \[laughter\]

**Kevin Ball:** Yeah... Total freakout. And that inspires a little bit of humility, when you're open to and listening to people going back, and I think that's really important in our industry. One of the things that I see a lot - possibly more on the design side even, but then front-end developers, we're part of this too, is redesigning things for the sake of redesigning things, or because some trend is new and hip, and not thinking about the costs on our users.

I think about, for example, my mother, who cannot deal with change anymore. She can't use the web, she can't use an iPhone anymore, because things kept changing so fast that she just throws up her hands.

**Jen Looper:** Yeah, it's just too much to learn.

**Kevin Ball:** And in our bubble, things change every six months.

**Jen Looper:** And we love it, because we get bored.

**Kevin Ball:** Right? And so we say, "Okay, well there's this hip, new trend. Oh, my app is so stale... It's been the same for a year-and-a-half. I've gotta change everything up!" But if you're outside of the bubble, that's more confusing than helpful.

**Jen Looper:** Yeah, yeah. I have a mobile app out there that teachers and students use for -- it's PracticeBuddy. It's a little bit similar to Elocute. The kids are playing their musical instruments, and clips of their practices are heading to their teacher, so they can analyze and give feedback and stickers... And that was the first app I ever developed. I did it in Objective-C, and then I redid it in several different frameworks... But I never changed the design that much. Maybe once or twice, early in the days, but it's basically been a card layout... And I got feedback; the kids are used to it, and it's okay. It's good enough. Back to the idea of good enough...

**Kevin Ball:** Yeah, good enough. The value of software is in what it enables, not in how pretty the code is, or how cutting edge the framework, or what have you.

**Jen Looper:** Yeah. That being said, nice code is really nice to work with.

**Kevin Ball:** Oh, it's great for us. This actually comes back to something else that's been spinning around the industry recently - developer ergonomics versus performance, and how much we tend to make choices based on developer ergonomics, and justify those choices saying "Well, we're gonna then be able to iterate faster, we'll be able to do things better, and so it's gonna be better for the user in the end", without actually measuring that, or coming back and saying "Was it, in the end, better for the user? Was that extra 20k that we installed for this framework that's gonna speed us up a little bit, when we balance how much that's slowing folks down - did it pay for itself? Was it valuable when it comes to user endpoints?"

\[00:56:16.08\] We as an industry tend to over-bias for ourselves, because we make the decisions and we see ourselves, and I think it comes back to this compassion question, and actually going out and listening to users and talking to users. The more we can get into that habit, the more we'll see the cost of some of our ergonomic decisions.

**Jen Looper:** Amazing, yeah.

**Kevin Ball:** Which isn't to say "Write bad code", right? Good code is helpful, but...

**Jen Looper:** But listen to your customers, for sure... For sure, listen.

**Kevin Ball:** And test it. Have metrics for performance, for user experience, for all that stuff.

**Jen Looper:** I mean, it's fun in the mobile world... There is a terrific little case study done on just changing the icon, and how much it spurred adoption. It was a racing game, and it was an image of a car; you looked at it from behind, and it was speeding into the distance. That was the first icon. The second icon - it was coming towards you. And I think the one coming towards you had so much better user adoption... But basically all they can do is watch the downloads, and just do A/B testing... It's kind of scary to get an idea.

**Nick Nisi:** That's not something I want to admit, but that's definitely something I think of when I see a new app; if it has a new icon...

**Jen Looper:** "How's the icon...?"

**Nick Nisi:** ...that's already in a good spot. If it looks dated, or it looks old, it's hard for you to trust it, in some ways.

**Jen Looper:** Yeah... Well, watch your Android stuff now, because that will change. I've just changed recently -- I was releasing PracticeBuddy for Android, and I was kind of horrified; "I think I screwed it up too, so I've gotta fix that." \[laughter\] It's all different now.

**Kevin Ball:** Anything else we wanna talk about? The talk of the conference is this JavaScript Foundation merger... I don't know if that's something that you have thoughts on or opinions on, or if that touches NativeScript or Vue at all...

**Jen Looper:** It doesn't touch NativeScript or Vue, but it touches me really closely, because this idea of foundation - I need to talk to Jory a little bit more on what it means to be a foundation... Because we're actually in the process of turning Vue Vixens into a private foundation at Progress... So it's super-interesting to go through, and I'm working closely with Progress' legal, and I'm very grateful that they're giving me all this pro bono work; Progress legal, accounting and taxes. Basically, I'm not responsible for paying all those taxes that I'd probably have to pay if I crowdsourced everything, and had everything donated. But I'd like to have a better grasp, and maybe I will be able to after this conference, of what it means to be a foundation.

I think one of the keynotes said "A foundation is just another tool, another framework", because maybe they've gotten pushback on being a foundation... So it's interesting, I wonder how does it impact you as a brand to be a foundation, how does it feel for your users to be part of a foundation? I'm just learning all this stuff.

**Kevin Ball:** Yeah, that keynote was interesting. Sara Novotny from Google - she was highlighting foundations as a tool that gives corporations who have money an entity that they know how to interact with, that they can give that money to support the community in some way, where they might not be comfortable connecting directly with individuals. But a foundation is another legal entity that they can understand and deal with.

**Jen Looper:** Yeah. And I think that a lot of people don't understand that a foundation that a company would spin up - there's a self-dealing rule... I'm learning all this stuff... So you cannot promote your stuff through your foundation at all. So I have to be very careful whenever I do a workshop on NativeScript. I can't say "This is the greatest thing since sliced bread." "It's just a thing, we're gonna use it today. You can love it, or you can hate it, it's no skin off my nose." But I couldn't do like a Kendo UI workshop at all, because that's a paid product. This would never fly.

So the Node Foundation can never be pushing a product. I don't know if that helps people get their heads around what it is... It's not a marketing tool anyway. It's kind of interesting.

**Nick Nisi:** \[01:00:07.26\] Yeah. Another thing that a foundation does is it deals with the legal things that you don't wanna think about when dealing with open source.

**Jen Looper:** Yes, yes...

**Nick Nisi:** I know that foundation projects that I have interacted with have a CLA bot on GitHub, and it'll go through and check if you have signed the CLA; if you haven't, then it will fail the pull request... So you have to have that CLA signed, which just means that you're giving this code away to the foundation. So it's owned by the foundation, and that also protects the companies that want to come in and use it, because it's guaranteed to be owned by the foundation and not by individual contributors.

**Jen Looper:** Yeah. It protects the staff, essentially, as well.

**Nick Nisi:** Yeah. It helps with adoption.

**Jen Looper:** Yeah, yeah. I just got a large knowledge dump yesterday, I think, about GDPR. And I've already been trained on GDPR, so this was just like going through every aspect of VueVixens.org and make sure -- and there's actually a piece that I need to fix up. \[laughs\]

**Kevin Ball:** It's overwhelming how much stuff there is to think on the legal front...

**Jen Looper:** It's a lot, yeah.

**Kevin Ball:** ...and as an individual contributor, you don't wanna worry about that. Not even as an organizer or general maintainer you don't wanna worry about that; having a foundation to help is nice.

**Jen Looper:** Yeah, I think so, and I'm really grateful to Progress for their overwhelming support. I mean, we were on the keynote stage of Progress next to our big conference, and it was extremely emotional for me... Because I just spun this thing up in February, and it's like, all of it just blew up, so it's really emotional and exciting. It's super-cool.

**Kevin Ball:** I think it speaks to a desire for community organizations - and particularly community organizations that provide welcoming on-ramps for women and other minorities who are sadly sometimes excluded from our communities... And often that exclusion - coming back to the compassionate coding side - is perhaps not deliberately malevolent, but kind of flowing out of a sense of just unawareness of human feelings, and elitism about the technology without thinking about human consequences, and creating those welcoming on-ramps is huge.

**Jen Looper:** Yeah, it really is. And part of our mission for me is also not just dealing with the pipeline, but also dealing with the mid-career folks... Because there's another drop-off in mid-career where people just kind of get fed up and bail. I am trying to create a community of mid-career women professionals who can kind of mentor the kids coming into the pipeline. So it's an interesting -- there's a lot going on with this community...

**Kevin Ball:** Yeah, for sure. It sounds great.

**Jen Looper:** And then we have all our chapters doing other things, so...

**Nick Nisi:** Is there somewhere that people can go to learn more about Vue Vixens, and maybe how to start a chapter or find a chapter?

**Jen Looper:** Yeah, VueVixens.org is your point of entry, and all of our workshops are on the homepage. We're working on a chapter page... It's scaling so fast that we haven't had time to do it yet, but we're getting there. I think we have about ten chapters by now.

**Nick Nisi:** Nice.

**Jen Looper:** Yeah, it's super-cool.

**Kevin Ball:** Awesome. Well, thank you so much, Jen, for taking the time and chatting with us.

**Jen Looper:** It was great fun. I really appreciate your time.
