**Suz Hinton:** Good day! You're listening to JS Party, a weekly celebration of everything Javascript. I'm Suz Hinton, I'm your host for this episode and I'm joined by some fantastic panelists, as always.

First off, we have Kball. Hello, Kball!

**Kevin Ball:** Hey, hey! How's it going?

**Suz Hinton:** Good, good. And we are welcoming back Safia. So excited to have you as well as one of our panelists!

**Safia Abdalla:** Hey, everybody. Great to be back!

**Suz Hinton:** Today we're gonna be talking about accessibility and how that fits into Javascript and the web... But first of all, not everybody knows exactly what accessibility is, so we wanted to cover an intro on the topic.

When we talk about accessibility in a very broad, general sense, we're talking about access for everybody of different abilities. In the real world, we can think about things such as ramps for wheelchair access, elevators, and things like closed-captioning on TV shows and movies; however, we think about much more specific domain areas for accessibility when it comes to the web. Kball, what kind of things have you run into when working with the web and accessibility, and what have you sort of had to learn about when putting websites together?

**Kevin Ball:** Good question. I think one of the first things for me to think about accessibility or for me to learn about accessibility was that this is not just about disability; this is about enabling all of the different ways that people interact with the web, and one of the biggest things for me on that has been keyboard navigation.

I'm kind of an old-school developer, I do a lot of stuff in the terminal, I do all sorts of keyboard navigation there, and if I go to a website and I can't keyboard-navigate it, that gets really frustrating. I know some folks who use only their keyboard, and particularly if you're using some sort of screen reader technology, you may be using almost entirely a keyboard type of approach... But even just using it simply, a lot of times things don't work as you would expect. You kind of expect to be able to tab through a website, navigate menus and dropdowns and things like that using your keyboard - those are technically accessibility features and functionality, but it's easy to get them wrong... Especially as you're adapting more high-end Javascript, going away from native components and using custom components, many of those custom components don't come with built-in keyboard nav; they just don't work.

**Suz Hinton:** \[00:04:22.12\] It's very true, and I feel that knowing the built-in accessibility of just general HTML elements is really important to have as a background before you even start designing new custom components in the first place... Would you agree with that?

**Kevin Ball:** Definitely. And it's definitely something that I'm guilty of falling down on when I set up my own components, as well. I don't always think about that up front. I'm thinking about, okay, how am I gonna get this thing to lay out and function? I practice interacting with it with my mouse as I'm going, and then at some point I try to just tab through it like I would if it were a native element, and it doesn't work, and I'm like "Oh, man, I should have been thinking about that from the start."

**Suz Hinton:** It's so true... And sometimes it's a really bad feeling when you turn the screen reader on and you're navigating with all the different pieces of that component and you just hear silence, or you hear it announce something that is completely wrong, as well.

**Kevin Ball:** Absolutely. I'm far from an accessibility expert... One of the things that I loved when I first got started with ZURB Foundation was that they had built-in accessibility to all their native components. Now, that isn't necessarily there in the React port or the Vue port, or whatever of it; it was just, you know, when they were doing basic Javascript, jQuery-enabled stuff... But it let me not have to think about it, and I'd love to see us get to a place where this is something that all of these different component libraries that most people are using are judged on their accessibility, because your average developer doesn't wanna have to worry about it.

**Suz Hinton:** Yeah, that's a really good point. And I feel that if you have things that are accessible out of the box, that has a multiplier effect, where people are just sort of accidentally creating accessible interfaces based on those building blocks, as well.

**Safia Abdalla:** Kball just mentioned he wishes we could get to a point where accessibility features were considered part of deciding whether or not you wanted to use a particular web component, so I'd love to hear your thoughts on what do you think is like the cultural change that needs to happen, or what can open source communities or the Javascript community do to start making accessibility the kind of thing that you would check when you're starting to use a tool the same way you would check security, or readability of the code, or how their API is? What do you think we can do to make that a factor?

**Suz Hinton:** I think that it's definitely getting better, because we're having much more open conversations about it, given that things like Twitter and other social media outlets we're seeing advocates speak up more often.

For me, I've always felt that there was this missing cool or trendy factor to do with accessibility, which is sad that it feels like it needs to become trendy for people to care about it... But usually, what I think will work for us to get better at this is to tie it back to craftsmanship.

A lot of developers - just about every developer, I feel - wants to always create super high-quality work, and by tying it back to that craftsmanship of creating something that is super high-quality in things like performance, code quality, how fast you can ship it and maintain it, I feel that tying that back to accessibility as one of those factors of craftsmanship is something that I'm hoping we see people start to consider.

**Kevin Ball:** \[00:08:03.01\] Interesting you'd say that, because I honestly think it's the other -- I just kind of come from economics... I think we all want to be craftspeople when we have the time to do it, but very few developers actually have the time to sort of create their perfect system and do that; a lot of times we're trying to get something done quickly, because we're on a deadline. And if we think about like when did mobile-first and having a mobile-accessible website start to really take off - it was when there was enough demand from mobile phones, and people like Google started prioritizing results that were mobile-friendly, and all these sort of economic factors pushed... And now, almost nobody is thinking - at least in the states - about "How do I build a website that's not mobile-first? I think accessibility is gonna be driven by the same thing, and probably not so much by disability, but by a change in the ways we're interacting with websites.

I was at a keynote at Fluent Conf a month or so ago where Scott Davis talked about accessibility, and one of the things he highlighted was that as we move more towards devices that are voice-activated, accessibility features become much more key... Because if we think about what does accessibility really mean, it means interactions with the website or with the web application by a computer, trying to parse this code without a visual cue in quite the same way. We have Alexa, we have Google Voice, we have all these things that are starting to -- not Google Voice, Google Home... These things that are starting to be entirely machine-driven, where our entire interaction with them is by voice. That's gonna start pushing the economics to make this a priority, I think.

**Suz Hinton:** I think that's a good point, and I like that you mentioned the mobile push to actually start supporting mobile access to websites. I think what's interesting about that particular scenario is that you actually have the data to back up how many people are using websites via their mobile phones... I think the snag that we have in accessibility is that because of privacy, because people don't always wanna volunteer, that they have different accessibility needs, it's much harder for us to have hard data on specific uses on specific websites and how they're actually navigating around your site.

So what concerns me is that this is moving so slowly, compared to something like mobile use, because we just don't have the things to prove that it would be an economical advantage to provide for these people, I guess.

**Kevin Ball:** That's a really interesting point. So what does it look like if Alexa reads your website to someone? Do you get anything? I guess that probably looks like an Amazon crawler at some point, but then they probably cache it...

**Suz Hinton:** Right... And let's say if you're a dev, you're probably not gonna buy an Alexa unless it can provide some form of communication in a visual style, right? So there are some of the Alexa devices that have a screen, and so they might get that, but they're not necessarily speaking to it, especially if that's just not their preferred form of communication.

So yes, there are visual forms of Alexa, but it's not necessarily optimized for those people... So if they're not buying the device in the first place, then you aren't aware of the money that you're potentially losing by them not actually buying it in the first place, if that makes sense. There's a lot of invisible opt-out moments for people of different abilities that is really hard to measure, I guess.

**Kevin Ball:** \[00:11:49.08\] One of the things that really got people started focusing on performance and front-end performance was these sort of e-commerce studies that came out, that looked at how many dollars are lost or how many people abandon your website based on different speeds. I wonder if there's a metric that could be measured there that would let folks quantify this and say, "Okay, we tested with differing levels of accessibility the same way we might test with different levels of speed, and here's how much money you're losing, here's how many customers are going away."

**Safia Abdalla:** Yeah, I wonder if when you're assessing with a technique like that, when you're trying to say "This is how much money we lost because our website was slow, our website was inaccessible", if you're already kind of targeting for the demographic that's already on your website, and you're trying to build accessibility features towards an audience that doesn't necessarily need them, which I think sometimes is an issue that springs up where people bring accessibility not as things that you need on your website for people with disabilities, or for people who need them, but as things you can add for individuals who might not really identify as having a disability or need them necessarily, but those particular classes of accessibility improvements target them.

I hope I'm making sense, but I think sometimes there's like the things you do that are "accessibility features", but they're still targeted towards a pretty general audience, and then there's the specific features that you need to work on for individuals who are deaf, hard of hearing, hard of sight, so on.

**Kevin Ball:** Yeah. I mean, one of the things I really liked about the Scott Davis keynote I mentioned is he kind of brought that up explicitly. He had a thing that he said - he said "If we tie disability to accessibility, it opens the doors to all kinds of excuses." You kind of say "Oh, of course I want my website to be accessible, but we don't have the time and the funding, and... Do we really need it? It's just a small set of people." That's one of the reasons I go to things like Alexa, or that sort of thing... But he even highlighted like pinch and zoom on a phone is technically an accessibility feature, and many people -- he did a poll of the audience, like "How many people have pinched or zoomed on their iPhone on Android?" and it was like 80% of the audience. That's accessibility though, that's the functional set that we're talking about accessibility is maybe -- I think we've probably suffered by framing it too much about disability and assistive devices, and we need to think about it more as like "How do we make this more (it's more like) multi-device-friendly?" It's not just responsive in terms of screen size, it's responsive in terms of all the ways you want to interact with this website.

**Suz Hinton:** I definitely agree with that. The quote that a lot of people say is that accessibility benefits everybody, and I think that that's true, and that's a really good way of trying to justify improving the accessibility of the website that you're working on. You can say "Well, the experience actually gets that much better for absolutely everyone", because some of the changes that you make are things concerning color contrast, which even for somebody who has good vision - color contrast will always benefit everybody, no matter what.

If you have something like closed-captioning, that can be really useful if you're in a quiet room and you don't have headphones and you don't wanna disturb anybody, or if your child is sleeping, or something like that... So I just feel like all of these things that feel like they're pointed at a super small audience, as you both just said, actually expands to benefit much more people who wouldn't necessarily identify with having special needs.

**Kevin Ball:** \[00:15:54.29\] Yeah, the captioning is a really interesting one. I saw something float by recently, I'm just googling to see if I can find it; I found a different stab, but... Video watched on social media - most people are watching this on a mobile device, without sound. There is a stat that I found on Digiday, published a couple years ago, but I wouldn't imagine it's changed that much... They're saying 85% of video views on Facebook are happening without sound. So if you're not applying closed-captioning, or making your video itself contain enough text to be understandable without sound... That's technically accessibility potentially, but you're throwing away 85% of your audience.

**Suz Hinton:** Totally. And I feel that even though it was autoplaying video, which most of us love to have, autoplay video did do a lot of good in that regard in pushing that, for sure. I think it's a really good stat to know about.

**Safia Abdalla:** Yeah, when I learn that factoid I thought it was really interesting too, the fact that Facebook made this probably economic decision (like we were going back to) to have autoplaying videos in their newsfeed, and the consequence ended up being that if you wanted to get people's attention, you had to have a flashy video with lots of interesting text. The side effect of that ended up being that you actually produced videos that were quite accessible and approachable to a lot of people. So it's kind of cool to see how that one decision intersected and had a lot of different side effects.

**Kevin Ball:** So that's pushed video in the right direction, though there are still a lot of videos out there without closed-captioning. Are there other things that we can think of that might push pieces of this forward? There's the Alexa question, but quantification is hard. I think Suz is spot on with that. Is there a way to potentially connect those dots and say like "Here's what you need to do to make your website Alexa-friendly, or Google Home-friendly" and what that's going to actually do for you?

**Suz Hinton:** I think that a lot of that information is out there. I think that people feel super-overwhelmed, because accessibility is such a broad topic as well... It's very much like performance. Performance is split into lots of different areas of how you can affect performance and what the different types are. I think the same happens with accessibility, where you say "Well, okay, it's not just about keyboard navigation." We wrote a list when we were discussing this show; we have things like keyboard navigation, screen reader annotation, color contrast, vestibular and motion difficulties, closed-captioning... Even things like timed tasks, because if you're navigating through a website more slowly, or if you have some cognitive dysfunctions, then you're going to not be able to respond in time when there are things like buying tickets, and there's a countdown of "You have two minutes to fill out this form."

There are many, many more things under the accessibility umbrella, and I think that when people first dabble into the topic, they get super-overwhelmed, because they don't know what to focus on first, they're not aware of how long things are gonna take to incorporate into their design practices, and they also just don't know where to start, I think.

**Kevin Ball:** I definitely resonate with that. Sometimes I'm looking at it and I'm like "Where do I even start with this?" I always personally go back to keyboard navigation, just because it's something that I use, whereas the other ones I don't necessarily use as much... But it's also hard, and there's inconsistencies across browsers, and it's "How do I build this? How do I do this?" It's a whole new skill set.

**Break:** \[00:19:50.24\]

**Suz Hinton:** So in the previous segment we touched a little bit about why you should care about accessibility, we talked about the fact that it's really important that everyone's able to access your website, it's a really good thing to do, and we talked about the economical side of it as well... But there are a couple of other reasons that we haven't really talked about, and one of them is a little bit scary, which is the legal consequences of not providing accessibility.

Have either of you run into that before, where you've worked at a company and you've had some kind of legal action taken against you because something wasn't accessible to somebody?

**Safia Abdalla:** I have not had that experience or heard of anyone having it, but it's very intriguing; I'd love to know what happened and how it went.

**Kevin Ball:** I have not either, but I do know that the legal structure there was one of the big motivators behind integrating accessibility into the ZURB Foundation framework so much... Because we had a bunch of users who were governmental, and -- companies, you can sort of play dice with that, where you can say "Alright, they're gonna ding us" or "They're not gonna ding us", "Are we gonna get hit for this?", whatever... But if you're working for a local, or state, or federal government, you kind of have to obey the laws.

We had a lot of folks who were really pushing for "We need to make this bake in accessibility from the ground up, because we're using this to build government websites, and they have to, full stop, be accessible."

**Suz Hinton:** I know that that's also expanded outside of government, as well. I'm pretty sure that airlines ended up being legally compelled to make their websites accessible a number of years ago, and I think that that might have been because of a collective legal action. I know that they're definitely much more on top of things these days, and so are banks, as well.

**Safia Abdalla:** I'm curious to know when you say that airlines and banks are required to be a little bit more on top of their websites being more accessible, are you talking about they were sued and as a result of that lawsuit they then had to go and enact changes in their process, or is it that there are certain governmental regulations that affected them? Was it industry regulations? What was the legal case for them making that a part of their web design approach?

**Suz Hinton:** I actually cannot remember this. I actually need to look it up. I'm hoping that we can actually just break for a second so that I can answer that question.

**Kevin Ball:** I'll just talk for a while, while you look it up, and fill space... So just at a high-level, airlines are heavily, heavily regulated; we've got all sorts of stuff in place, really because of the safety requirements, I think, originally. Air travel did not use to be nearly as safe as it is now, and it was heavily regulated in order to improve its safety... But once that foot is in the door, then it starts getting regulated on all sorts of fronts.

\[00:24:00.21\] I suspect that's one of the reasons why they're kind of a canary in a coal mine for getting this enforced early. I don't know if there was a specific thing - Suz, you are looking for that - but they have heavy disability and accessibility, like physical requirements already, and they've got all sorts of things around safety, and recording, and all this stuff that they're already having to comply with... So adding web accessibility on top of that - it's not like they're not already familiar with working with that.

In the chat, it looks like Esque (I don't know if I'm pronouncing your moniker correctly) says she works for a company that was sued, and now as a result they take accessibility very seriously. I'm curious, what is the domain for that company? What is the area of business?

**Suz Hinton:** Yeah, because it depends on what area you work in. Kball, you were right on the money about the airlines - it's all part of the Air Carrier Access Act, which was already issued by the U.S. Department of Transportation to require that people can actually use their services physically... So they ended up extending those rules within that Air Carrier Access Act to cover the websites that people are booking tickets on and changing their plans.

They ended up setting up three key requirements of the non-discrimination on the basis of disability in air travel - which is cool - which also expanded to the automated kiosks at the actual airports, as well.

This was imposed as a deadline for November 2015, so it's actually only in the last three years that they've had to conform to certain online web accessibility standards such as WCAG 2.0, which is super interesting... But yeah, I'm interested in hearing the story in chat about what area that they were sort of dealing with this in.

**Kevin Ball:** She said it was hospitality. That's kind of interesting... So that's probably like hotels, or some sort of travel situation. It's funny, because I think right now we're doing this very one-off, and if we look at the domains of physical space, and regulating physical building access, and things like that, that has kind of over time become more and more regulated. I don't know exactly what the boundaries are now, but it probably started with it just being governments, and now essentially any large company has to have some amount of physical access for disability in various forms, if they're providing public service. Actually, I shouldn't say that off the top of my head because I don't know, but... What is the physical accessibility requirements? Because we may see a mirror of that coming into the web. The web has long been less regulated, but I have a suspicion particularly in reaction to all this stuff with the elections the last few years that more regulation is on the horizon.

**Safia Abdalla:** Yeah, I was thinking about that, because the Americans With Disabilities Act, which kind of required a lot of the accessibility features that you see out in the real world was I think effective in 1990... So it kind of pre-dated the internet, and it would be interesting to see if something like that were to come in 2018, would there be a clause or a segment of it that was specifically targeted at accessibility of software products, considering that that probably wasn't as big a thing in 1990 as it is now.

**Suz Hinton:** \[00:27:47.23\] I would be so excited to see that happen... I'm someone who is all-in on accessibility, and I think that even just having a blanket set of standards that we're all kind of responsible for, instead of them just being a list of guidelines, would be amazing. Think about how that would change the way that we teach computer science subjects... You know, when you learn front-end development, it's gonna be baked in from the beginning, because you don't wanna lose your company a lot of money, and so part of being a good engineer is providing accessible work that you're outputting.

I would love to see that legal side of things, the regulation, just because I think that really is the push that we need to do it, on top of the economical stuff that we talked about earlier as well. What do you think, Kball?

**Kevin Ball:** Yeah, it is interesting to think about the different ways that something like this can happen. You can have a pull from economics, or you can have a push from regulation. In the tech industry, we have historically resisted the regulation side of things. There's a lot of Wild West, and that has as a result perhaps under-prioritized some of these things that are definitely social goods, like accessibility to all.

I was just googling right now to figure out what the range of things that the ADA applies to for physical spaces, and at this point it is essentially anything that's public accomodations. It says "Businesses that are generally open to the public and fall into one of the service categories of restaurants, movie theaters, schools, daycare facilities, recreation facilities, doctor's offices..." There's 12 area.

It then requires newly-constructed or altered places to comply with the standards. So they're basically saying if you're in any of these businesses that are used by the public, you have to comply. Maybe you didn't have to comply with the legacy thing, but as soon as you update your building, you need to be in compliance. So if we start seeing more regulation on the internet, we could see something that's similar, right? We already have it for airlines, but we could say "Okay, if you're selling food online, you're doing restaurant ordering, or take-out, or something like that, you have to be accessible. If you're providing banking, you have to be accessible." I don't know what other verticals would make sense, but I definitely could see that sort of push factor happening.

At this point, nobody really pushes back that much on the public spaces; it's more accepted. It's just the virtual ones were like "Oh, is that really necessary? Do we have to...?"

**Suz Hinton:** Yeah, I like the idea of just removing the need to have that conversation where you're not sure if it's necessary. I really like having those concrete sort of strategy for "Okay, I'm in this sector, and therefore I just need to do this." It makes it so much easier even when you're having those discussions in meeting rooms about deadlines and things. It doesn't become an opportunity for something to drop by the wayside, which at least in my anecdotal experience, I've seen that become the thing that's first dropped from a sprint when releasing a feature, or the minimum viable product that's going out is usually not accessible. Having to negotiate the time to go back in and fix it, which is usually more time than just baking it in in the first place, is really frustrating.

I'd just love to see those conversations disappear, so that everybody is just on the same page. That'd be great.

**Safia Abdalla:** \[00:31:52.22\] Yeah, and I think another thing with respect to the kind of "Is it a pull via economics, or a push via regulations?" is that sometimes the things that you can quantify as like financially beneficial or economically beneficial aren't necessarily directly related to accessibility. Improving accessibility in your product has a lot of intangible benefits that you can't actually tie to an economic end goal... But those intangible benefits to the people that are affected by them and those who are not still matter, and I think that's kind of where having that clear and concise language around what the basic standards are for everyone within a specific kind of industry is gonna help for kind of touching on those intangible benefits of accessibility.

**Suz Hinton:** Absolutely. I look forward to the day when we have a scenario where just like you would never design a button that you can't physically click on -- everybody knows that without even thinking. No developer would ever make a button that you can't click on.

I'm looking forward to all of those other standards and common sense parts of accessibility to just become exactly as fast as that you just don't even have to think about whether or not you should be doing these things.

**Kevin Ball:** I think we're moving in the right direction. One of the biggest things for making that possible -- first, there's visibility into the problem, and as you mentioned, Suz, this is getting more and more talked about; this is something where awareness of this as a challenge is growing and growing as something that we should be doing, but we haven't bridged the barrier between "should" and "it's the default."

The next step on there is improving the ease effect. How do we make it so that not only is this something we should be doing, but really it's not that hard. We can just do it. It doesn't feel like this massive undertaking; there it's a lot about tooling. I talked a little bit about wanting component libraries to take this on, but even just at the browser level there's a lot of different tools that can make a difference.

I was really excited a few weeks ago to see that Firefox shipped with a new accessibility inspector, which basically lets you use the same type of dev tools that you would use to inspect your DOM tree, to inspect what they're calling the accessibility tree, where you're able to see what is the underlying structure that they are building to get hand-off to a screen reader or whatever, so a form of assistive technologies.

Once it becomes something that is easy to understand and look at and see how it's working, rather than "This is this black magic that I'm supposed to understand, but when I asked how to do it, somebody pointed me to a 30-page book", or something like that - that's what's gonna make it more prevalent.

**Suz Hinton:** I definitely agree with that, and I know that the accessibility tree has only really been viewable on an operating system level before this, so bringing it straight into the browser just takes a lot of the intimidation out of it... Because if it's in there, with all of your other dev tools, then it's also sort of nudging at you that yes, you probably should also be using this, and we're gonna design it in a way that makes sense for the context of making web content, as well. That's a really good point.

I'm really happy to see that these tools are starting to come in on not just like an individual software library perspective, but also browser vendors. We also have Lighthouse within Chrome, which allows you to at least have some kind of testing in order to suffice some of the things that you can find with static analysis, and things like that... Because usually, if you can help developers automate this stuff, and like you said, make it understandable as well, then that's already a major step forward for being able to help developers improve at this practice.

**Kevin Ball:** \[00:36:09.02\] Fundamentally, we're lazy. I hear that a lot about developers, developers are lazy... I mean, that's just humans. People are lazy. That's how we are. So if we want something to happen, we need to make it easy... If we want it to happen at a broad scale.

**Suz Hinton:** That's right. You're already juggling a lot of different things in your head as you're producing something. This is another thing to juggle, so putting as much of this stuff to the background as possible through the use of good tools and best practices is really helpful to everybody, I think, just for those whose brains are just so full of all of the different things that we have to keep in mind.

**Break:** \[00:36:56.14\]

**Suz Hinton:** So let's continue talking about tools and what people can use in order to help with providing more accessible websites. We talked about the Firefox accessibility inspector, we touched on Lighthouse really quickly... What are some other tools that developers can make use of, just to make their life a little easier when producing accessible content?

**Safia Abdalla:** I am a huge fan of the aXe Chrome DevTools extension. It's an accessibility checker for Chrome DevTools. I really like it just because of (no pun intended) the accessibility of the tool. It kind of sits right there on your DevTools and I'm forced to look at it whenever I'm trying to inspect an element, or jump into the Javascript console really quickly. I think the fact that it's right there and it's a little bit in your face makes it really easy to integrate into a part of my workflow.

For those who have not heard of it before, what it does is it basically does an analysis of the website in its current state, and it'll recommend things for you to fix. It might say something like "This image tag at this location does not have a descriptor, so be sure to add that" or "The contrast on these colors isn't good, so adjust your font color and your background color." That's sort of my favorite tool to use.

**Suz Hinton:** Agreed. I love aXe Core so much, and I think what you said about it being just another part of your DevTools is what makes it always top of mind. Sometimes it can be scary to click on the tab and look at all the warnings come up, but I love the output of those warnings the most, because they'll describe something in a human-readable format, but then they'll also link straight to the spec that it's outlined in, whether that's some of the ARIA specifications, or the WCAG accessibility guidelines as well. I love that tool.

**Safia Abdalla:** Yeah, so in that way, it's a really great way to educate yourself too, so you shouldn't feel like you already have to be an expert in order to start using it. It'll kind of teach you the more you start using it.

**Suz Hinton:** Exactly. Because I don't know about you, but I have tried to read the WCAG guidelines from start to finish, and it's really hard to do in one sitting, and you definitely get overwhelmed very quickly.

**Kevin Ball:** \[00:39:52.11\] I hadn't used aXe, so as you were talking, I went and installed it, and I'm running it on one of my websites I'm doing for a client... And it's highlighting a lot of issues, I've gotta say... \[laughter\]

**Safia Abdalla:** Well, it's a good thing you caught them.

**Kevin Ball:** I know, right? Well, it actually raises kind of an interesting question to me... I work in a context where I'm working with clients and I'm often not driving design decisions; I'm implementing design decisions... And I'm looking at this page that I'm working on right now, and it highlights 66 instaces of "Elements must have sufficient color contrast." That's a discussion that I don't know how -- I mean, I know how painful the color decisions already were, and I've litigated and relitigated that before... But if kind of raises this question of like, when these things come up, it's not just a developer problem. This is embedded throughout the design process of thinking about contrast and color palettes and all these different pieces. How are you having these conversations throughout sort of your dev processes?

**Suz Hinton:** Yeah, absolutely.

**Safia Abdalla:** I have worked in an organization where there is a kind of feedback loop between design and development; development communicates with design, communicate with development, and it's a two-way street. I know that's definitely not the situation if you're working in a client relationship, or something like that.

You know, your situation got me thinking, if there are tools like aXe for designers, something that'll take your sketch file or your PSD or whatever it is that designers use (sorry, I'm not a designer) and do an audit of it before it even gets into implementation, it's already being checked... I wonder if anyone in the chat might have recommendations for tools to that effect.

**Kevin Ball:** I'm just doing a quick google on it and I see a color contrast checker; that's something...

**Suz Hinton:** Yeah, I've worked with designers who have used contrast checkers before, but they have to already be aware that they need to provide that good contrast in the first place. But I think it's a really good first step, and I've been really encouraged by seeing more and more designers over my career start using tools like that, so that they don't have that "Oopsy!" moment when they present it to developers who might already be able to spot that spot after they've spent hours picking colors.

**Safia Abdalla:** Yeah, and there's the discussion around what tools will help people achieve the development of accessible websites, and then what kind of education and communication is going to help them. It's kind of a two-pronged problem, it's really interesting... You can't just give somebody the tool, you have to also empower them to use it, and I don't know if I have an answer to the latter.

**Suz Hinton:** I've definitely hacked my way into having these discussions with designers before, just being on the front-end developer side. If there's been an internal hackathon at a company, this has come up before, where I've created something that you sort of bolt on to improve something, such as color contrast... So I'll create a little toggle at the bottom of a page and you can turn on high contrast mode, and that just pre-fetches and loads a CSS style sheet that overrides a bunch of the colors.

And I remember I presented that at the end of the hack week, and there were several designers watching my presentation, and I didn't really think that it had a huge impact on them, but I think about six months later the website went through a rebranding where all of the colors were being overhauled, the design was being overhauled, everything... And to my delight, they actually used a color contrast checker this time, because a lot of the colors just weren't high contrast enough with the initial branding.

\[00:43:58.11\] They were very proud to show me "We've come up with all of these different combinations that work, and we've now put this in our patent library, which colors we recommend to overlay on other colors, depending on whether it's text or a background color." I was so excited to see that.

Sometimes you just need to give them a nudge, because you never know when you're even gonna be able to go back and redesign those colors, even if you feel like they're set in stone at the present time.

**Kevin Ball:** Yeah, that's definitely a good point. We've gotta be bringing this foot forward... And actually, it highlights to me something we've talked about before on this podcast about the responsibility of developers to bring themselves and their opinions and moral positions into their code.

There's a great quote that says "There's no technical decision that is not also a political or moral decision." The things that we are building have implications that if you're aware of them - for example, in accessibility you say "Hey, this is gonna exclude a heck of a lot of people", it's kind of your responsibility to bring it up.

**Suz Hinton:** Totally agree.

**Kevin Ball:** So what are some other good tools? I had never heard about aXe Core, and I've now installed it and I'm gonna start using it on all my websites. That's super cool. We've talked about the accessibility inspector... For Lighthouse - does Lighthouse get you anything that aXe Core doesn't? Or is it just another take on the same thing?

**Suz Hinton:** It's similar, but because it gives you that overall score for progressive web apps, it's like another sort of box that you can check off. I think it presents it in a slightly more satisfying way, but it has similar static analysis tools, I think.

One tool that I really like which is similar to aXe Core but is more integrated with your site is a tool called tota11y, which was developed by Khan Academy, one of the engineers who used to work there. It is a bookmarklet that when you click on it, on whichever website you currently have open in a tab, it will overlay some messages to show you the areas of your site that the color contrast is not high enough... And I just love that it pin-points it directly, so you're not sort of like racing around, trying to find which specific piece of text on which specific piece of background a warning is referring to.

So I love it because it just gives you that instant visual representation of the problematic areas on your page, and I love that you can just keep clicking it as you sort of like navigate to different areas of the site as well. So I've definitely used that, just to be able to sort of show people really quickly where the problem areas are on the page.

**Safia Abdalla:** Another one of my personal favorites is - since I do develop with React on the front-end - is a tool called... Oh, I always have trouble pronouncing it when it's the abbreviated version - React a11y. Is it "ally" or "a11y"?

**Suz Hinton:** I've heard both.

**Safia Abdalla:** Okay, I'm gonna go with ally, since it sounds easier to say... React a11y is basically a tool that you can integrate into your linter, that will warn you or throw an error on certain common accessibility faux pas, like not including a descriptor on a tag, or not including tab indexes on elements, things like that.

I really like it, because again, it's integrated into what's already there for you as a developer, so it kind of is going to be built into your habit, or just the way you think about development, because you're constantly getting these warnings about, you know, "Use your alt tags", or "Do this, do that." It's in that way similar to the aXe tool - it also kind of teaches you and trains you to integrate those patterns more into the way you write code, the more you use it.

**Suz Hinton:** \[00:48:04.27\] That is super cool. I know that there's one of those for Ember as well that you can build into Ember's testing framework, which I absolutely love. And I like the idea of being able to break builds and continuous integration if there is a pretty big, glaring accessibility issue, for sure.

**Kevin Ball:** Yeah, actually that's another way to put this feature forward is you say "This is part of our integration tests, so... If the build is broken, you've gotta fix it."

**Safia Abdalla:** Cheers to that.

**Suz Hinton:** One resource that I really love which is not necessarily focused on a technical tool is there's an Accessibility Slack that is full of accessibility experts and accessibility enthusiasts alike, and I've definitely popped in to ask them tricky questions. I think accessibility is the most difficult when you have those scenarios where "Oh, I've actually never had to program this sort of behavior before, and I have no idea what would be the best experience for somebody who is using a keyboard", for example. For something such as drag and drop - that can be a really difficult thing to get your head around.

My favorite thing about the accessibility Slack is you can pop in and pitch these scenarios, and there's always gonna be someone who's run into something very similar, and there's gonna be a bunch of people that know a ton about accessibility, and they're very, very friendly in there... So I highly encourage everybody to check out that Slack and just look in there, because you learn so much just from seeing all of these questions that people pose in there.

**Kevin Ball:** Yeah, what is the right way to do drag and drop with a keyboard?

**Suz Hinton:** It's complicated... \[laughs\] It definitely depends on the scenario, but there are a few resources out there for trying to make it accessible. I have an interface right now where I want to use the arrow keys, so that you can basically use a key as a toggle on a certain box that you drag around, and then you can basically use arrows to move it back and forth.

That was what I came up with as a solution, but it really does depend on what functionality you're providing as a result of drag and drop. If it's just dragging and dropping a file onto -- you know, a file input, then you can just also provide a button for people to either click or access with a keyboard. So it definitely goes super deep with drag and drop, but it depends on what you're after.

**Kevin Ball:** Well, that highlights something kind of interesting too, because what you've described -- so if I think about a dropdown menu, that dropdown menu is actually gonna look the same whether or not I'm using a keyboard or a mouse. I'm just opening it via a keyboard key, versus with a hover or a click. But with drag and drop, you might actually need new interface elements to provide the same functionality.

**Suz Hinton:** Yup, pretty much.

**Kevin Ball:** I think you've probably been struggling with this or working on this a lot more than I have recently, so how often do you find that's the case, where to make something accessible you literally have to introduce new concepts or elements to it?

**Suz Hinton:** I think it depends... Even something as simple as when you click on a hamburger menu - there is no built-in semantic, HTML element that makes those easy to navigate, so you tend to cobble them together as a custom component, such as it'll be a div, and there might be a bunch of list items in there, and hopefully with actual real anchor tags, real links, and not just somebody clicking on the list item... But you sort of have to start from scratch with a lot of these things that you might take for granted every day as something that you've used 100 times. I think all of them are nuanced in that way.

\[00:51:56.10\] I would say that I've run into these kinds of scenarios a fair bit, given that single-page applications now have a ton of things like modals, which modals take the place of alerts, but they're definitely nowhere near as accessible... So again, you have to reinvent the wheel, "How do we put the same accessibility into a modal that used to exist in an alert window that popped up, that was governed by the browser?"

I think that it's a lot more common than people think... It's just that once you learn about accessibility, you start seeing those difficulties everywhere. I think it's more of a situation like that.

**Kevin Ball:** So in a lot of ways this is a complete mind shift of how you're approaching development, because you're starting from a different place.

**Suz Hinton:** Yeah, I definitely think that that's true. It's this sort of hidden facet that you might not have noticed, and then it's another sort of shift in how you approach designing and also writing code, for sure.

I think what's really illuminating especially is watching humans access your site in ways that you don't personally do so on a daily basis. I think that all of these automative processes are really great, with testing and validation, but I think that nothing really replaces sitting down next to somebody, watching them use your website with a screen reader, watching them use your website with just one button; no keyboard, just one button, cycling through elements on your page...

Or even just trying to access something like a video when they're deaf. Just watching somebody do that and feeling that awkwardness, and just sitting there cringing, because they've stumbled upon something that's not working can just be incredibly illuminating, and I think that it should be a necessary part of your cycle if you're able to do that as well, just because that can really inspire action in you, when you are seeing the user on the other side of everything struggling to use something...

And they can really show you how they use a screen reader. If you test manually yourself with a screen reader, you're not gonna use it in the same way as somebody who's really good at it... And apparently, it turns out that people use screen readers very differently, depending on who they are, which operating system they're on, and things like that.

So it can be super awesome to just talk to people, rather than just trying to automate everything away, which I think doesn't always replace everything.

**Safia Abdalla:** Yeah, I think that's a great tip, too - focusing on the experience of the product that you're building, not just the statistics and the static analysis.

A while back on Twitter I posted a thread where I basically asked "If you are somebody with a disability, or who requires accessibility features on the web, what are some things that annoy you?" I got a lot of great feedback on that, and one of the things I tried for like a couple of hours (it wasn't that long) was to kind of try to - I don't know what the word would be - experience some of those issues myself, so one of the things I did was, for example, somebody posted a message that said they had some sort of muscular disorder that prevented them from being able to move their hands across the keys of the keyboard at a wide distance... So it'd be hard for them to go from a K to an A. And so to test that out, one of the things I did was I put ankle weights on my wrists to weigh my hands down and make it hard for me to move them, and then I just tried to use the app that I was building at the time with my hands virtually immobile. That was just something really interesting for me to experience.

\[00:55:55.08\] I also will try and -- for that time, I put on a sleeping mask over my eyes, and then tried to browse the website I was building using the screen reader... With like a blindfold on, essentially. So yeah, I think if you really wanna get into it, there all sorts of situations that you can put yourself into in order to test this out and experience it personally, in addition to -- of course, the best way is always to go to the people who are experiencing those issues and hear them out, and then use their feedback to improve your product.

**Suz Hinton:** I love that so, so much, and it reminds me of the website -- I don't know if you know about it, but it's called Empathy Prompts (EmpathyPrompts.net). Every time you visit the page, it will give you a random scenario to try out, exactly like what you just said about putting weights on your wrists. Every time you go to it, you get to have a random one to try out. I think it really does go back to empathy, like you said; it's putting yourself in the experience of another person. That's really awesome.

**Kevin Ball:** Well, and even putting accessibility tools aside - just watching someone else use your website or your application is a deeply humbling experience, and it will often highlight to you things that you never would have thought of, that are broken about that experience. The second you start building it, you have embedded assumptions about the way that it's going to be used, and someone else coming in trying to use it has none of those assumptions.

I have not been a part of very many accessibility-focused user tests; even without that additional layer of their using these different tools, just -- it's a different person looking at this... It's mind-boggling the number of different ways that people will try to use something.

**Suz Hinton:** It's so true. That's a really good point. So what are some resources that you really like for people who wanna read up a little bit more? We talked about tools and we talked about the Accessibility Slack, but does anybody have any favorite websites or favorite people that they like to follow for accessibility?

I can start... \[laughs\] So my favorite people are Jenn Lukas, Léonie Watson, Marcy Sutton, Rob Dodson and Cordelia Dillon. I have a lot more that I'm a fan of and I'm trying to keep it concise. In particular, I wanted to call out Rob Dodson, because he produces a series as part of the Chrome Developers YouTube channel called "A11ycasts". They're really nice, bite-sized videos for getting started with addressing things specifically for the web, and I really like how he approaches explaining things, and he has a lot of visual examples also to show you exactly what he means. I love that.

Another resource I really like is the Microsoft Inclusive Toolkit. That gives you some of those Empathy Prompts to consider, but also a solid bunch of resources to go about that mind shift around thinking in accessibility when you're designing things.

**Kevin Ball:** I'm hastily jotting down notes, because this is an area that I need a lot of work on. Accessibility is not a strength for me. When I was working on the Foundation I'd always lean on a few different folks... There's a young man from Germany named Marias Alberts or "Olberts" but his moniker was "Alberts" so I always think of it that way. He did a bunch of keyboard nav and accessibility stuff. I was just trying to see, while you were talking, if he's done much writing on that, and I don't think so... So it's probably all buried down in GitHub issues, but he was one of my go-to people of like "I don't know how to solve this accessibility problem. I'm not even sure what it should be doing. Let me go and ping him."

**Suz Hinton:** Safia, do you have some resources that you have as a go-to?

**Safia Abdalla:** \[00:59:54.02\] One of the things that I would recommend is the book Accessibility Handbook: Making 508 Compliant Websites", by Katie Cunningham. It is an O'Reilly book. I really like it, it's a good overview, so if you're looking to get started and you want a one-stop shop to go to, that's a good place to start; it provides some good code snippets for you as well, and it's available on paperback, so I always think it's something you can take with you and read on the bus, read on the train, have at your bedside.

I find that when a book is physical, it's much easier to digest the content, as opposed to a blog post, or something like that. So yeah, Accessibility Handbook, an O'Reilly book by Katie Cunningham. You can buy it on Amazon and all of those other places.

**Suz Hinton:** I love book recommendations. That is one accessibility book I haven't read either, so I'm totally gonna put that on my list.

**Kevin Ball:** Another thing that I saw in your notes that you put together was The Accessibility Project. It's a community-driven thing, but one of the things I really appreciate is that they have an accessible pattern library and widget, and you can see all of these things in CodePen, well-documented, understanding what is it that they're doing from an accessibility standpoint, and they sort of indicate why.

I'm looking at one and it's like "Okay, we're gonna set the tab index, in order to make this thing not able to receive focus while this is open." So it's kind of not just saying "Here's the attributes", but "Here's a real-life example, and why we're manipulating them this way." That looks really cool; I'm actually gonna dig through that a lot more.

**Suz Hinton:** Yeah, I particularly love the Accessibility Project website, because they're continually updating it as well, and I think that all the content is maintained on GitHub, so if you wanna add more to it, you can totally just open a pull request. I've corrected even just some of their markdown typos that created display issues. I've even just done that at times, and they're really quick to respond. There are several people that maintain that site. I always think it's a really good resource to mention.

Alright, thanks everyone for sharing your resources. I know that I took down a few of these to look into later on, and I'm hoping that those listening also have a nice bunch of resources that they can get started with.

Thanks for listening to JS Party, and we hope that you enjoyed it as much as we did producing it. We'll catch you next time.
