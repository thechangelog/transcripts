**Adam Stacoviak:** Adam Jacob, it's been, I guess, a few years since you've been on the show, and I've honestly been looking forward to it ever since the last time we've had you on the show, so I'm glad to have you back.

**Adam Jacob:** Me too, it's so fun.

**Jerod Santo:** That's a lot to live up to. We had three years of anticipation of talking to you again.

**Adam Jacob:** That's true, yeah. I've gotta bring it.

**Jerod Santo:** Don't let us down here.

**Adam Jacob:** I will do my best.

**Adam Stacoviak:** I'll frame it then, I'll frame -- for the reason why. So my mind has been changed and I look at it differently ever since you talked about AWS as the marketing funnel... And I had a different vision for that, I had a different view of it. My perspective was changed with a lot of things we talked about on that show. We'll link it up in the show notes for everybody listening. So there's a lot of my mind that I changed because of that conversation with you... And then earlier this year we did that show on Elastic and AWS, and that whole kerfuffle. And while we didn't get you back for that, we did reuse some of the audio from the initial show in 2019, which was still on point.

**Adam Jacob:** Yeah.

**Adam Stacoviak:** So I've pretty much been looking forward to a revisit to a lot of that changed perspective, a lot of the new things happening in open source... And just generally, catching up with some of your history, which we didn't get to dig into... So that's why I've been looking forward to talking to you since then.

**Adam Jacob:** That's awesome, because I love talking about all those things. The narcissist in me loves talking about myself; I love talking about open source, so... Yeah, I'm in. That's awesome.

**Jerod Santo:** That's gonna be perfect then.

**Adam Jacob:** Yeah, exactly.

**Adam Stacoviak:** Let's frame it a little bit for those catching up... So you're an original founder of Chef, changed the game quite a bit; it was originally called Opscode. Massively successful open source project, and - would you call it commercial open source company? How would you frame that? Is that a newer term since the beginning of Chef? Let's frame some of your history, so to speak.

**Adam Jacob:** Yeah. I don't love the commercial open source thing, because I sort of believe open source and business are -- like, open source is a strategy for businesses. So the idea of a commercial open source company - it feels weird to me and I don't like it. But whatever, I don't like calling them open source business models either, but everybody does, so...

**Adam Stacoviak:** You have to choose a lexicon that everybody gets, right?

**Adam Jacob:** \[04:11\] Yeah... And I'm a systems administrator, and I hate that DevOps became a job title, because I feel like it meant that my people gave up their identity... But nobody cares, so whatever... I call them DevOps engineers, like everybody else.

**Jerod Santo:** I still call Adam out, because he uses the word "literally" non-literally... And it's just like "Jerod, give it up, man. You've lost that battle." \[laughter\]

**Adam Jacob:** Yeah, it's over. It's bad it happened though.

**Jerod Santo:** Literal does not mean literal anymore. You just have to live with it.

**Adam Jacob:** Yeah. That literally happened a while ago, and it's done now.

**Jerod Santo:** Oh, man...

**Adam Jacob:** Yeah. My daughter does that, too. She said "Literally!" And she says it in this really specific way. It's hilarious. So Chef is definitely a commercial open source company, by that terminology's phrasing... And we went through every variation of that. So we started out where the plan was originally pure SaaS. We were gonna open source everything and then we were gonna run it for you as a SaaS platform, and everybody was gonna do hosted configuration management in the cloud, because why would you ever wanna run any of that stuff not in SaaS? We were just wicked early, like, crazy too early to have people make that leap. And so it took a couple of years for us to finally get the message that the market was telling us, that you couldn't really do that...

Then we shifted to more open core... So we had a variant of the open source server - that was what we ran for our SaaS - and we turned that into a commercial piece of software that we sold for money, that had different features; it had multi-tenancy, and some other stuff. Then that eventually also was open-sourced, and there was another platform that was more focused on analytics, and some other stuff... And then we bought another product called Inspect, that was also open source, and then we rolled some compliance stuff on top of that, and then we did some continuous delivery stuff, and then we did some application deployment stuff... And all that stuff was some mix or another of open source and free.

Then in the end, what we learned was that we could just never get the mix right, and you kind of couldn't win for losing. You'd open-source something and everybody was thankful, but then the people who were paying you only because of that one feature wanted to stop paying you... Or I would put something in the commercial bag and people would be like "You guys are not true open source scotsmen. If you were real open source scotsmen, that would be free. You bastards."

**Jerod Santo:** Right.

**Adam Jacob:** And no matter where I turned, there was somebody who was mad at me, or was giving me the finger because they weren't gonna pay me for my product... And so in the end, we wound up doing a lot of research and a lot of soul-searching, which is kind of tied to my leaving chef too, just in timing... But Chef changed its business model to being like Red Hat, so it was completely open source. And what they do is they take -- every piece of software they build is open source, and the product Chef itself, if you want it, you have to pay Chef money for it. And if you want it from somebody else, you can go get it; there's a lovely open source project that's called Sink, and those guys repackage the software, and they call it Sink, and you can have it as open source for zero dollars. Or you can buy it from Chef. That's the short version of Chef in open source history.

**Adam Stacoviak:** And to give some further back dates--

**Adam Jacob:** I mean, maybe not short...

**Adam Stacoviak:** It was good. It was succinct enough.

**Adam Jacob:** Yeah.

**Adam Stacoviak:** 2008 was the beginning.

**Adam Jacob:** It was 15 years...

**Adam Stacoviak:** I mean, that's a long time.

**Adam Jacob:** Yeah, that was the beginning of Opscode. Before then, we were running a consulting company called HJK that did fully-automated infrastructure for startups... So sort of even before that, that crew of people had been together for a couple of years before Opscode started, before Chef was written.

**Adam Stacoviak:** Was that initials, or -- ViM wannabe?

**Adam Jacob:** It was initials, yeah. It was my partner and co-founder Nathan Haneysmith, and then a gentleman who was with us in that era, but didn't translate into the Opscode era, Saksiri Kridakara. And then I was the J...

**Adam Stacoviak:** I figured you were the J...

**Jerod Santo:** \[laughs\] We've put two and two together on that one...

**Adam Jacob:** \[08:00\] Yeah. And then Barry Steinglass, who was our -- well, I don't know what your listeners are thinking... And then our fourth partner was Barry Steinglass, but he joined right after we named it, so he was the S in Solutions.

**Jerod Santo:** That's a nice hack.

**Adam Stacoviak:** You mentioned the tension there with never being right... How did you deal with that? Considering I know you, to some degree at least - I think I do - being very fan of open source, even so much to say it's not an open source business model, it's a strategy... You seem a purist when it comes to open source, and very in touch with what open source is... How did you deal with the tension that you always had to battle, given what you were doing with Chef?

**Adam Jacob:** I think okay... But badly... \[laughter\] It turns out that with open source what I care about is, I care about people more than I care about companies. And that's not because I didn't care about my company. I cared deeply about my company. It was very important to me. The one I run now is very important to me. I take that very seriously, it's my career. It's important to me.

When I think about open source though, I don't think about companies, I think about people, and I think about the optionality that those people have in their lives, that they otherwise wouldn't have had... Because that's what open source did for me. When I was 16, 15, whatever I was, and got that first Slackware on floppy disks... Or I think it was the Yggdrasil, actually, that opened up the whole world for me in terms of what I could build, and my whole career... My whole life has sort of been -- you could draw a straight line from floppy disks in the back of a book to this podcasts. That's because those opportunities were available to me because those people created open source software and put it into the world... And not only could I use it, but I could break it, I could tinker with it, I could open it up, I could see how it worked on the inside... And that allowed me to create the opportunities for myself that eventually led to Chef, which eventually leads to where I am now, which - I'm in this lovely house, and there's like deer outside, and... My life's great. And it's because these people did this for me. They created this commons, and they created this space; that to me is what's important, and what I care about. And what I came to realize is that when I tried to take a different lens on why that mattered to me, it was false. I didn't care about it because of the money. I like the money, but that's a different thing that I care about. They're not the same. Does that make sense?

**Adam Stacoviak:** Yeah. You're optimizing for the accessibility. Even as you said that, I thought about my straight line to this point in time... And Jerod, I'd love for you to do this as well, but... My straight line was Geocities, which was not open source, but it was the on-ramp to putting something on the internet, and I was like "Wow, this is possible..."

**Adam Jacob:** Yeah...

**Adam Stacoviak:** And the very next thing was figuring out how I can run my own site. At the time, it was WordPress, way back in those days.

**Adam Jacob:** There you go.

**Adam Stacoviak:** And then my next rush was Ruby on Rails, and putting it on a Linode server, honestly. And that's like my earliest impression into, say, open source and accessibility, is this ability to be able to play as well; to be able to see the LEGO, not just the thing that gets built with the LEGO.

**Adam Jacob:** Yeah, yeah.

**Adam Stacoviak:** What about you, Jerod? What's your straight line?

**Jerod Santo:** Yeah, I mean I mostly came out of college just learning about Linux, and seeing my colleagues -- not colleagues; what do you call them in college?

**Adam Jacob:** Friends?

**Jerod Santo:** Co-students? I don't know. Friends... \[laughs\]

**Adam Stacoviak:** Cohorts?

**Jerod Santo:** That's a stretch, Adam. People... Using Linux, and all of these -- and being like, "Where do you buy that?" And like, "No, it's all free."

**Adam Stacoviak:** It's free.

**Jerod Santo:** And I'm like, "It's all free?!" I mean, that's where it really started for me, with free as in cost.

**Adam Jacob:** Free as in beer.

**Jerod Santo:** Yeah, exactly.

**Adam Jacob:** When you were in college, yeah. You knew where you're foot --

**Jerod Santo:** Yeah, totally. Free beer, it'd be great. Free software? Awesome, too.

**Adam Jacob:** Yeah.

**Jerod Santo:** And it really did go through WordPress, I think... So it was like Perl, and Linux command line stuff, and then WordPress brought me to the web... And then I also went the Ruby on Rails route, so I was on Ruby etc. But it was definitely just the simplest, like "I can just use all this software for free." And that was awesome.

**Adam Jacob:** \[12:02\] It is awesome. And then there's this moment where it goes from that to being a source of opportunity, where if you want to build something, or you wanna make something, or you wanna try something, or you wanna have a career - it's all available to you, it's all open to you. We don't all start out in life in the same position. We don't come from the same families, we don't come from the same economic backgrounds, the same countries... There's a million things in our lives that influence where we can end up, or where we can go, or what we can do... And open source is this lovely thing where it turns out you can always take this software and do what you need to do with it to make your life better. And there might be other reasons why you can't take advantage of that resource existing, but that resource does exist, and no one can take it away from you, and no one can tell you not to do it, and no one can tell you not to start... And then there's even more beautiful than that - as soon as you start, you're gonna find this community of people who embrace you for doing it, who love you for doing it. Who then also benefitted from that moment. And then all of a sudden there's this huge web of people whose lives are infinitely better than they would have been before. That for me - that's it, that's what I care about.

And when I think about all the other things in open source that I'm nerdy about - and I'm nerdy about all of it - that for me is what mattered. And it took a lot of soul-searching to figure that out; I didn't know that's how I felt until I spent a really significant amount of time reading philosophy and giving myself therapy and being like "What is it that I want? Why do I care? What is this thing that matters to me, and why does it matter?" It was hard.

**Adam Stacoviak:** Congratulations on not being tainted by the opportunities, because I think you can have this access, and then even take that access and turn it into an opportunity, or see the opportunity, and then be tainted by the money, and the possibility of millions or billions. There's open source companies that are raising multiple hundreds of millions of dollars, worth billions at a valuation, and it's very tantalizing. It's very --

**Adam Jacob:** I mean, they should take it.

**Adam Stacoviak:** Sure. But I'm saying, if on the wrong side of the fence, you can -- it's like Loki, when he touches him the spear, or whatever. They immediately turn into a Loki, or whatever.

**Adam Jacob:** \[laughs\] That's a flattering thing to say, but I'm not sure how true it is... You know, like, here I am, and -- like, Chef is a very successful company...

**Adam Stacoviak:** That's why I'm saying congratulations. Congratulations for naught.

**Adam Jacob:** I think I am...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Okay...

**Adam Jacob:** ...I guess what I'm trying to say... I don't know that I'm untainted by it. Like, I knew what I wanted... What I wanted was to -- I don't know if you guys remember Ximian. Do you remember Ximian? Like, Red Carpet... I think it predates both of you based on the story of your straight line... But it was like the first open source company I remember. Nat Friedman and Miguel de Icaza... So Nat Friedman the CEO of GitHub now, and Miguel de Icaza, open source superhero, .NET, Mono...

**Adam Stacoviak:** Right. Yes.

**Adam Jacob:** Those guys also created GNOME...

**Jerod Santo:** That's right.

**Adam Jacob:** ...and way back in the day, they started a company with venture capital money to make software for Linux. And they made an update system, and they made an exchange competitor... And I remember being with my buddies and we were running this ISP... Nathan Haneysmith, who co-founded Chef with me... We saw that happen and we were like, "Man, we had to get in on that." Like, you can start a company building open source software with other people's money. And like, get rich.

We were sitting on a porch, drinking beer, being like "We should figure out how to get rich. This startup game is legit!" And it worked.

**Adam Stacoviak:** Yeah, it did work.

**Adam Jacob:** Like, we got rich.

**Adam Stacoviak:** Yeah.

**Adam Jacob:** \[15:46\] I don't want it to seem like I'm some kind of saint. I wanted to get rich, and it worked. And I'm rich now. And it's better to be rich than not to be rich. I don't feel a lot of shame about it. And then also, the thing about it that mattered - if I hadn't gotten rich, it would have been fine, because the amount of opportunity and the relationships that happened and the community that happened from those things, and the relationships I had with those people would have been worth it either way. If that whole thing had gone the other way - and it totally could have; there were a million moments where it could have gone the other way... Like, it would have been fine; it would have been great. I was already fine. Do you know what I mean?

**Adam Stacoviak:** Yeah.

**Adam Jacob:** So I don't think I was untouched by the Loki spear, that's what I'm trying to say.

**Adam Stacoviak:** I see.

**Adam Jacob:** I knew what I wanted, and it was open source that helped me get what I wanted... But what I wanted wasn't pure. I'm not like a monk.

**Jerod Santo:** Yeah. So Chef sold for 220 million in cash, according to our notes. Is that accurate?

**Adam Jacob:** Yeah, it's accurate enough, sure.

**Jerod Santo:** So there you were, holding part of that, the goodies there...

**Adam Jacob:** Yeah.

**Jerod Santo:** And then - did you have a hard time deciding "I've accomplished rich. I like open source stuff"?

**Adam Jacob:** I mean, you can always get more rich. That's a secret of getting rich.

**Jerod Santo:** You just want more money.

**Adam Jacob:** \[laughs\]

**Jerod Santo:** What drove you next, right?

**Adam Jacob:** Yeah... I mean, I love -- I'm a systems administrator at heart, and I love building things, and I love infrastructure, and I love people who build infrastructure, I love those communities... Those are my people, and that's my jam, in the same way that heavy metal is my jam. Those are my people. So I took a lot of time off, and I left Chef, I think, in a good way. I had left Chef before the acquisition; I was on the board, but I wasn't active day-to-day. I had quite a bit of time off... And you know, I played video games, and I spent time with my daughter, I walked her to school every day... And I was just in my life in a way that I hadn't been able to be for (whatever) 15 years. But there was never a question about whether I was gonna build something again... Because I like building things, in the same way that I like playing video games, or I like being with my family, or I like heavy metal, or I like any of those things. I like computers, and I like software, and I like infrastructure, and I like writing programs... And I like building companies.

One of the best things to me about venture capital is that I can come up with a wild plan that has the building as a business as a thing you do with your hands, as a thing that happens from work. I love that work. It's so fun. And it's so fun to think about building those things, and to watch people thrive, and to watch your customers thrive, and to figure out what the right product is to build... What a joy to get to do that at all, and then to get to do it with people who, for their professional living, take money that other people have made, that they're willing to risk on high-risk ventures, and then find people like me and say "Oh yeah, I want you to go do that, for sure. You should definitely go on that crazy journey to build that product, to try to make a company out of it. And if you don't, it's cool. If it doesn't work out, no harm, no foul."

**Adam Stacoviak:** \[laughs\] Yeah.

**Jerod Santo:** So you're investing now.

**Adam Jacob:** No, no. I'm CEO in a company called the System Initiative... And I do a little investing through Amplify, which is a venture capital fund, that also invested in System Initiative. But no, what I do is build things. And I wanna build things again, so I'm building things again. And it's very cool.

**Jerod Santo:** Do you find that there's a difference in drive or ambition? Maybe you were hungrier then, maybe you didn't have as much money... You know, you don't have to do this anymore, so you're doing it for the love of the game... But does that love of the game produce, like the old production did?

**Adam Jacob:** That's a great question. I mean, I do still have to work, because your life tends to inflate to the size of what's available... Do you know what I mean?

**Jerod Santo:** I do. This is why many NBA players end up bankrupt.

**Adam Jacob:** End up poor, yeah. So I don't think I'm on NBA player cocaine binge trajectory. \[laughter\] I think everything's cool.

**Jerod Santo:** A little more sustainable than that...

**Adam Jacob:** Can I say that on the podcast? Is that okay?

**Adam Stacoviak:** That's your point of view...

**Adam Jacob:** \[19:55\] \[laughs\] Thanks, man. But yeah, I don't think so... I think what's changed is that early on, with HJK, and then with Chef, and Opscode, all of us who started that company shared this point of view, which is we had something to prove to ourselves about who we were. Forget about proving it to the outside world... That question of "Who am I?" and "What can I do?", there's a great hardcore lyric I really like, which is "You shouldn't seek what you already are." I don't need to strive to be who I am. I'm already who I am.

Then, I don't think we knew who we were. And who we wanted to believe we were, were people who could start companies, who could make products, who could sell product, who could run venture capital businesses... We wanted to be those people, but we didn't know if we were those people, and everything was fraught with peril. It was like a motorcycle gang. We all joined together, we were bonded by blood, and we were going for it. And that was beautiful and lovely, and also really hard, and very emotional, and not everybody always made their best decisions, because it's really hard to make those good decisions when you're also trying to understand who you are. You know, you're growing up.

Now, I know who I am. And who I am is a person who can build companies, I can write software, I can bring products into the world, I can do all of those things. I don't have to be nervous about whether that's who I am. That IS who I am. And it doesn't matter if I succeed or fail. No one can take that away from me, because it's me. It's in me. And that's very different than it was 15 years ago. So in a lot of ways it's more fun, because I can just do the work...

And that's the secret about all of this stuff - everybody wants to make it out like it's chess, and it's really not. It's checkers. You've just gotta show up every day and work, make the next right decision, and put in the time. That's what it is. So I don't feel like I've lost drive. I feel like what I've lost is the anxiety that comes from being unsure if I'm gonna be okay if it doesn't work out. Because now I know for sure I'm fine. Not just because I've had an outcome, but because as a person - like, what are you gonna do? Tell me I'm bad at it? I know I'm good at it. Does that make sense?

**Adam Stacoviak:** Yeah. I had said once before, where I was like "You just show up and do the work that needs done."

**Adam Jacob:** That's it.

**Adam Stacoviak:** And someone said that wasn't right. It takes a lot more than that. I said, "No, that's kind of what it is though." You just show up every day, consistently, and do the work that needs done.

**Adam Jacob:** Yeah, that's it.

**Adam Stacoviak:** That's a basic framework to getting to where you wanna go. And that could be your success versus my success... They're probably a little different, or they're probably a lot of the same, but no matter what - whatever I think success is, if I keep doing that, I'm probably gonna arrive where I wanna be, if I keep showing up and do what needs done.

**Adam Jacob:** There's no guarantees in life. Sometimes it doesn't work out. But another thing I think that's different for -- like, I think you need that, for sure. So that's the most important thing, especially if you look over a long time horizon. If I look back over Chef and that 15-year period in my life, there were tons of moment that felt like they were the most critical time, and if we didn't figure it out, we were gonna die... Because we were gonna die. Because there wouldn't have been a Chef anymore. And also, when you look back at those times, they didn't matter. And whatever choices we made were relatively binary, and probably it would have worked out fine in whatever direction we chose, as long as we kept putting the work in behind that choice. And we really wanted to believe that one choice or the other was the distinction. And I'm not sure that in hindsight it really was. It was just that ability to like "Okay. Yup. This is what we've decided we're gonna as hard as we can, and then we're gonna make the next best decision, and we're gonna push as hard as we can", and you do that over a long enough time period and it's pretty much gonna work out.

I think the other thing that you need is you sort of have to be convinced that you can win. And not in like an egotistical way, where it's like, "I'm gonna win because I'm the man." But simply because -- you have to believe that winning is possible. Because if in your heart you believe that winning is impossible, then even showing up and doing the work, you'll kind of sabotage yourself a little. Do you know what I mean?

**Adam Stacoviak:** \[24:02\] Yeah.

**Adam Jacob:** Because it's hard.

**Adam Stacoviak:** You need hope. Knowing that winning is a possibility is a sign of hope, really.

**Adam Jacob:** Yes, yes.

**Adam Stacoviak:** If you think it's not possible, then--

**Adam Jacob:** Then why play?

**Adam Stacoviak:** ...why show up and swing?

**Break**: \[24:14\]

**Jerod Santo:** So do you think you learned through Chef that the Red Hat style that you guys eventually adopted - is that the way to go? If you're trying to do what y'all did...

**Adam Jacob:** Yeah.

**Jerod Santo:** I know there's different models, or -- they're not business models; there's different ways you can approach business as an open source--

**Adam Jacob:** Yeah. You should a hundred percent call them business models, because that's what everyone does. So --

**Jerod Santo:** I should, but I'm trying to be gracious for you. I know you don't like the term...

**Adam Jacob:** But I respect you so much. It's fine.

**Jerod Santo:** There are other ways to do it, but it seems like that's kind of the one that you've decided is the best one.

**Adam Jacob:** Yeah. I mean, with the giant caveat that everybody's situation is different, yadda-yadda-yadda. I think if you really break down the options available, there's some just immutable facts about business that are just real. So the way business works, no matter what you wanna do, you have something, and I would like it, and in order to get it, I must hand you dollar bills. That's business in a nut shell. Any time that we're not doing that, what we're doing might be interesting, but it's probably not business. But that's really what business is - you've got stuff, I want it, I pay you, I get it.

What we do with open source businesses is open source tends to mean that I can have it for free. That for zero dollars I can acquire the resource. And that means, of course, that some people won't pay you for it, because they don't have to pay you for it. And so then you have to find out "Well, what's the thing that I pay you for?" The way I talk about that is that you're creating artificial scarcity. The software itself is infinite. Anybody can use it, and you can get it from anyone, and it's all good. But in order to get you to pay for it, I have to create some kind of scarcity, so that you're willing to part with your hard-earned cash in order to acquire the goods. So one way we create that scarcity, the traditional way, is by just keeping it to yourself, and then only giving it away for money. That's proprietary software, right?

**Jerod Santo:** Right.

**Adam Jacob:** \[28:02\] And that model we know works. If you build something of value and you wanna sell it for money, people will pay for it, because they want it. And it's pretty straightforward. When we do open source, we're making it more complicated every time. So in the most traditional one, we would do open core, where we say "Well, yeah, the main part of what we do", which is usually the most valuable thing you do, because if it's not valuable, then the open source users don't need it... Is completely free. It's zero dollars, and it's open source; you can take the source and build derivatives, and do whatever you want with it. And then there's some other thing we build on top of it, that's even more valuable than the first thing was, to certain target markets. You know, analytics for the enterprise would be a good answer, or SAML support. If you want SAML support, it costs extra.

The problem with the open core model is that you always get it wrong, and you gave away the most valuable asset, which is probably whatever it was you did in open source. So in the case of Chef, the most valuable thing you got from Chef was Chef. You had configuration management, it ran Facebook for free. That's amazing.

**Adam Stacoviak:** Yeah.

**Adam Jacob:** And it's super-viable. I gave it to you for free. Zero dollars. Now, when we tried to build open core software on top of it, it was never as valuable as Chef. It's hard to build something that's that valuable. So trying to find something that's that valuable on top of something that's that valuable is a really difficult proposition.

So then the next way to think about doing that - there's a lot of others, but let's just talk about the free software product model, so the Red Hat model. So what Red Hat did that was genius was they said "Alright, software is not a product." So if you think about software, just like the bits in a product -- a product is something that I buy from someone, and it comes with all the things. It has packaging, and marketing, and sales guides, and support, and documentation... It has all this stuff. Software - that's the stuff that I get from GitHub. Maybe I can run it, or maybe I can't. That's software.

And what Red Hat said was "What people buy are products. They don't buy software, they buy products. Especially companies, enterprises don't buy software, they buy products. So what we're gonna do is we're gonna make enterprise products out of open source software." So they said "We'll take open source software, that gets this big reach, and gets us this huge array of different verticals we can go into, and for each one of those things we're gonna package it together into a product that the enterprise can consume. And then we're gonna say that that supply chain and all the pieces and components that make up that thing - that's my product. That's what you pay me for."

And by doing that, they essentially reinvent the proprietary business model. Because if you want Red Hat Enterprise Linux, there's only one way to get it, and that's pay Red Hat money. Now, you could run CentOS all day; you could run whatever else you would wanna do. Feel free. But what it's not is Red Hat. So then you have to ask yourself questions, like "Well, do I trust the supply chain? How do I know? Who do I call if there's a problem? What if there's a security vulnerability and the guy who does the security vulnerability patches in CentOS is on vacation, and they forgot to give somebody else the keys to release the software? What happens then? What if I have a kernel bug in my high-frequency trading systems? How do I feel about that now?"

And in all those cases, that tends to swing you right back to the proprietary one. And that's why people pay for it. And you hear engineers all the time be like "I would never pay for that stuff. What a garbage thing. Software is free. Just download it off the internet and do what you want." And that's because they're engineers, and they're talking about software; they're not talking about products.

So yes, I believe the Red Hat model is better, because what you get is all the upside of open source. You get all of that community building, you get all of that good juice, you get all of that human goodness that comes from doing it that way... And then you also get basically the exact same upsides of a proprietary business, which is - if I create value, I charge you for it... And that's the deal. And it simplifies everything.

\[32:07\] Every other variation is this convoluted model that really only its mother could love. If you mapped out open core business models on paper, it's insane that that's what you would do. It's nuts. You would never do it to yourself on purpose. And so now we're seeing a lot of -- all the commercial open source stuff, like Cockroach, or Elastic, or those things. They're not even open source anymore, they're just proprietary software again... What they're doing is reinventing the proprietary business model, but then they're also saying "Well, but you can look at the source code." Maybe you could fix a bug on my behalf. That to me is just like -- who cares? You took all of the human goodness part away from it, you showed me the source code, but why do I give a s\*\*\*? What's in it for me? Nothing. Which doesn't mean your product is bad, because I pay money for software all the time; I like paying money for software. I've got no problem paying you money for good software... But it's not a community. It's users. It's a community the way that Excel has a community. Not a community the way that Linux or WordPress is a community.

**Adam Stacoviak:** Right. A group is not a community.

**Adam Jacob:** Nope.

**Adam Stacoviak:** Communities - they commiserate, they connect; for the same reasons we drew our lines for open source to today, for ourselves. There's some sort of union in that, either here in this three-person group, or the actual communities that represent things that brought us to this straight line here.

**Adam Jacob:** Yes. It's not to say that those communities of users can't bring value to you? They can. But it's not the same as open source. Open source taught me to program. Open source taught me to -- there's a whole world that it opened up for me. That doesn't happen because you were like a World of Warcraft fan who built a cool UI mod... Do you know what I mean? It's not the same.

**Jerod Santo:** So what if you're not targeting enterprises? Does it then change your answer? I mean, it seems like if you're going B2C, or maybe in more smaller companies, small businesses, it seems like small businesses, and also individuals - I'm thinking of this because of the engineers. We'll just take the free one. Does that change the calculus quite a bit? Because small businesses and indies do not -- like, the things that you can productize into what an enterprise appreciates like that, 24/7.

**Adam Jacob:** I mean, that sounds like a bad business to me.

**Jerod Santo:** Yeah.

**Adam Jacob:** If your target market actively resists paying money for the thing that you produced, that you believe is of value, that sounds like a \*bleep\* business and you should get out.

**Adam Stacoviak:** \[laughs\] Truth.

**Jerod Santo:** So is there a subset of open source software that is even viable as a business?

**Adam Jacob:** Yeah, of course. Because there's a subset of businesses that are viable as businesses.

**Jerod Santo:** How large is that minority? Are we talking like 5% of projects? 25%? Half of them?

**Adam Jacob:** I don't even know. I'm trying to think now, sort of on the fly, of a good example of a B2C open source company. I can't think of one.

**Jerod Santo:** Well, something like Tailwind is doing pretty well right now.

**Adam Jacob:** Are they? I think they're doing fine. I love Tailwind. I'm using Tailwind; it's so good. And I even pay Tailwind money for their product, because I wanna pay the Tailwind guys.

**Jerod Santo:** Okay. So why aren't they doing so well?

**Adam Jacob:** I don't know if they're not doing well. I have no idea how much revenue Tailwind is making. I'd be shocked if it was more than a million dollars?

**Jerod Santo:** I think it's probably around there.

**Adam Stacoviak:** Annual?

**Adam Jacob:** Yeah. If they're making more than a million dollars in ARR, I'd be surprised.

**Jerod Santo:** I think it's around there. But is that not a successful business though?

**Adam Jacob:** Sure. It can be a super-successful business.

**Jerod Santo:** So we'll have to define success before we can answer this question.

**Adam Jacob:** Yeah. Venture capital success business - like, success for venture capital-backed businesses, I would say Tailwind is, like... There's business success, which is "Am I running a business? Am I paying my employees? Am I happy? Is my life good?" That's amazing. And people draw a distinction between the two, so let's draw them, too.

**Jerod Santo:** Right.

**Adam Jacob:** \[35:51\] So then there's venture capital success. It's a different game you're playing. In the venture capital game, what you're playing is "I believe that I can take this risky product idea and bring it to market and turn it into a giant company. And succeed or fail, that's my bet." Whereas if I'm starting a company to feed myself, the conditions are incredibly different. Now the conditions are "If that thing fails, I don't eat." So the bar of success is how comfortable am I at eating? Is my life supported? It's those things.

And venture capital people sometimes talk about those as like lifestyle businesses, and it becomes this, like, whatever - like a sneer... I don't think it's a sneer at all; I just think it's a good example of -- I can't think of a big business to consumer open source company, in the venture capital sense... Whereas in the business to business --

**Jerod Santo:** Maybe WordPress is a good example then.

**Adam Jacob:** Yeah, maybe WordPress is a good example. If we broke down WordPress' revenue, I bet even WordPress' revenue is mostly business to business, right?

**Jerod Santo:** Yeah, but not business to large enterprise, I guess is the distinction I'm drawing. Maybe it is. I don't know.

**Adam Jacob:** Maybe it is, yeah. I bet their highest-paying customers are all banks running WordPress instances for something...

**Jerod Santo:** They're probably news organizations I guess.

**Adam Jacob:** Yeah, it could be.

**Jerod Santo:** ...which are kind of big business.

**Adam Jacob:** But I don't know...

**Jerod Santo:** I don't either.

**Adam Jacob:** If you wanna talk about infrastructure companies, I can dish on...

**Jerod Santo:** Right. So I think if we are talking about infra --

**Adam Jacob:** But if I'm talking about WordPress, I'm a little out of my depth, probably... I'm probably talking out my ass... \[laughs\]

**Jerod Santo:** The reason why I ask this kind of question is because I think a lot of people try to go from zero to one. They have their Chef, but it's like their open source project, their side hustle... And they're wondering, "Am I going to be able to do this thing or not? Where are the field goal posts? Is it not full-time, or is it a 200-million-dollar exit?" Those are different ball games that you're playing there.

**Adam Jacob:** Super-different games.

**Jerod Santo:** But people are usually wondering, "Can I go from zero to one, or is this just always going to be a hobby of mine?"

**Adam Jacob:** It's always easier to go from a business to something else than it is to go from something else to a business. The thing about starting something that's open source is your optionality is only to figure out how to close something off. You have to create that scarcity somehow.

So if you have an open source project and you wanna create a business out of it, if you wanted to follow the free software product model, which I think you should do, then the number one thing you have to do is stop releasing builds with your branding on them, and you have to make it so that no one else could ever release a version of that software that is called - you know, I'm wearing a McLaren hat - McLaren. Like, you're the only one who can do that. And then people who want it have to agree to your commercial terms, which means at some point they have to pay you. And doing that - you could do that, and somebody would pay you, if it was valuable; they'd do it.

Now, you still have to do all the work of designing the business itself, which is "Who's my target customer? How do I reach those people? How do I convince them that it's worth buying? How do I get them to try it the first time?" And all that stuff - that's just stuff you have to do whether what you're doing is open source or what you're doing is closed source. That's just business.

So I think the real question for people trying to go from zero to one is "What kind of business do you want?" and "How big can it be?" And you start by making spreadsheets, by just making it up... Because you can't actually answer any of those questions. And all you're really trying to do is get to a place where you can believe that success is possible. And if you can't create a spreadsheet that tells you success is possible, it's not possible. So that's like step one. And I've thrown away so many, what I thought were really great business ideas, because I couldn't build a spreadsheet, where when I looked at the spreadsheet, I was like "That's gonna work." Like, I looked at the spreadsheet and I was like, "Oh, I'm doomed. I'm done. There's no way." So you do that.

**Jerod Santo:** Right.

**Adam Jacob:** \[39:44\] I think that's the same if it's your open source project, or whatever it's gonna be. The difference is your success criteria for that little spreadsheet. If it's "Can I feed myself and my family and buy a house?", that's one thing. If it's "Can it become to be viable for venture capital?", then the upside of that spreadsheet has to be "It's gonna ring the bell and go public." So it has to be "It's gonna be trading on the New York Stock Exchange, and it's worth billions of dollars." And it's the same spreadsheet, it's just the bar to say "This is a good idea or a bad idea is dramatically different."

**Adam Stacoviak:** You mentioned Cockroach and Elastic, and you said they're not open source...

**Adam Jacob:** They are not.

**Adam Stacoviak:** And you said they're not -- they're obviously not following the Red Hat way, or this product/software, this dichotomy there you described... Give us a spin on CockroachDB, Cockroach Labs as a company, if it had done it the way you say. How could they have done it the open source way?

**Adam Jacob:** Yeah.

**Adam Stacoviak:** The reason why I use them as a lens is people out there will want to emulate their success.

**Adam Jacob:** Of course. Because they're successful.

**Adam Stacoviak:** Raised lots of venture capital, worth billions of dollars, have a great idea, changing the world with technology and software...

**Adam Jacob:** Yeah. It's the dream, baby.

**Adam Stacoviak:** So that's why I'm using them as an example.

**Adam Jacob:** It's a good example. Look, I just wanna be clear - I don't know those guys; I have no beef. Everything's fine. I'm not upset, or whatever. And God bless them. It's hard to build a business, and be successful, and raise a bunch of capital... All that stuff is incredibly difficult. So me armchair quarterbacking - that's what I'm doing right now, and I just want everybody to realize... I'm armchair quarter-backing, and I know I'm at my own ass. So with that being said, I'll answer your question.

**Adam Stacoviak:** Okay. I appreciate the preface.

**Adam Jacob:** Yeah.

**Jerod Santo:** What's the view like from up there?

**Adam Stacoviak:** \[laughs\] Let's skip that part.

**Adam Jacob:** It's healthy, you know what I'm saying? Everything's pretty good, as far as it goes...

**Jerod Santo:** \[laughs\]

**Adam Jacob:** What Cockroach has done is they've built a transformative piece of technology. it's very cool, and people who use it, love it. And what they've proven is that if you build something that's amazing, and you sell it for money, people pay you for it... Which is awesome. But that is literally proving that you could build something, and if you don't give it to someone unless they pay you, you don't make money. So that's great.

What they wanted was the upside of open source. So there's two upsides of open source that people think they want in business. One is this idea of community. That's the sense that says the people who use the software can have an impact on its direction, or they can have an impact on what it is, but mostly it's about -- if you're choosing between having a consumer who just buys your product and has no relationship with you... Or like, I'm wearing an At The Gates T-shirt. Every day I wake up, I put on a metal T-shirt, because that's my people. And I paid them money for this shirt because I'm repping for the brand. It's a part of who I am. And when I go to those shows, I'm not just enjoying the music, I'm communing with my people. And that's community.

We're creating this sense where -- you wanna have a Cockroach DB community, where people are Cockroach people. There were people at Chef who were Chef people. We came together every year, we talked to each other, we helped each other out in our lives... It was church, to a degree. So you want that. And that's usually attached to the source code. Our open source communities tend to grow up partly because of the availability of that source code and that attachments. So they wanna have the best of both worlds. They wanna have that easy monetization, where it's clear what they're doing and they can control their own destiny, and they also want the upside of having these thriving communities. And you can build a community... I'm sure there's Cockroach DB people who are going to CockroachCon, or whatever - I don't know if that's a thing - who identify as Cockroach DB people, in the same way that there were Oracle people who identified as Oracle people. But it's not the same as what you see, as Linux people or WordPress people. They're not even close. So they're giving that up a little bit, for more control.

The other thing they're doing is creating a different lens on competition. So in open source, part of what they're protecting against is they're afraid of AWS, or they're afraid of Microsoft, or GitHub taking their software and launching it as a service.

\[44:00\] And the thing of it is - if what you're building as a product is successful enough, then you're gonna get big enough that there will be competition. There's no successful product that doesn't have competition. That doesn't exist. Because it's so obvious that what you should do is compete with someone. It's not a difficult mental leap. That spreadsheet is really easy to build when you have an example already that tells you it works. You riff on the theme just a snudge and you're like --

**Adam Stacoviak:** You are the spreadsheet.

**Adam Jacob:** Yeah, and suddenly you're GitLab. I don't mean to talk ill of the GitLab guys, but that was not a hard business plan to put together. It's like GitHub, only open source. And you're like, "Okay, yeah. Spreadsheet works. Here's the money."

**Adam Stacoviak:** "I'm in."

**Adam Jacob:** "I'm in. Good pitch." You know? Whatever, it wasn't hard. Whereas the initial creation of GitHub was quite hard. So the activation energy for competition is much lower than leading the pack. So if you're Cockroach DB, what they believe they're doing is protecting themselves from that low activation energy for the big Amazons, and all those guys. That's a complete falsehood. The reality is those guys have giant hosted global databases already. And if Cockroach DB built a giant globally hosted database that's so much better than theirs, and they can't launch a Cockroach DB service, what that's gonna do is not keep them out of your market. It just guarantees they're gonna enter the market with not Cockroach DB. You're just guaranteed that you're gonna have to compete with that other database on a feature-for-feature basis... Whereas if they could take Cockroach DB and launch AWS, they couldn't call it Cockroach DB. They'd have to call it AWS McLaren DB, and then they'd have to describe all the ways that it's compatible with Cockroach, and they'd have to talk about the upstream, and everybody would know... They'd be like "What's McLaren DB?" and you'd be like "Oh, it's Cockroach, only on AWS." They'd be like, "Oh, yeah." And as soon as those words left your mouth, what you're saying is "Cockroach DB is the thing I wanted, and I used the AWS thing because it was easy..." And if I'm Cockroach DB, that's a much better competitive position than saying "I had to choose Cockroach DB Aurora."

So that's sort of how Cockroach has set it up. And I think you can do better by trusting that that community that you want would actually lift you up. The value of that thing would be stronger, and that you're better at the product you created than anybody in the world will ever be. And so Cockroach DB - I've never used it. I love Postgres. I'm building all the System Initiative on Postgres. I looked at Cockroach for ten seconds; because as soon as I looked at it, I was like "Why am I gonna pay Cockroach DB money, when I could just run Aurora?" And that was it. That was the extent of my competitive analysis. Because I would need a feature that Cockroach gives me, that Aurora doesn't, that kicks me over the line... And they didn't have one.

Now, if it was open source and they gave me extra optionality, all of a sudden I might feel differently about it. I probably would have chosen Cockroach DB. I probably would have used their hosted service and not Aurora. But I didn't, because they opted me out. They'll never know that, because what do they care? There's a big enough community of people who love Cockroach DB, they're paying them money... They say "Why are we successful at getting this money?", the answer is "Because I sell a product that's valuable, for money." So they're gonna listen to this podcast and what they're gonna say is "That guy is nuts. That's not how it worked." And they're right, because they've made their choices, and it worked.

**Jerod Santo:** Right.

**Adam Stacoviak:** Their choices were based on some competition, you mentioned... So the naive approach that -- and maybe it's naive, maybe it's not; maybe it's just lack of thinking far enough down the business line and saying "Eventually, somebody's gonna compete with me." Because they did a license change. They were "open source."

**Adam Jacob:** Yeah.

**Adam Stacoviak:** They had an OSI-approved license, they transitioned to what they called a highly permissive BSL license...

**Adam Jacob:** Yeah, sure.

**Adam Stacoviak:** ...and there's been some other transitions, I'm sure, but the point is, to a non-open source.

**Adam Jacob:** Which is secret code for not open source, and --

**Adam Stacoviak:** Right. Not open source, but source available. The terminology is source available.

**Adam Jacob:** Yeah. But don't hate me so much, you know? Don't completely hate me for doing it.

**Adam Stacoviak:** Right, right.

**Adam Jacob:** \[47:50\] I think ultimately, the reality -- what it says is "I don't trust that my community is a true community. I trust that they're users." And the thing about true community is when it's hard, they hold you up. Chef went through many, many disruptive cycles. Docker disrupted us, Kubernetes disrupted us... Over and over again, extinction-level threats to our business happened. And the thing that made that business succeed in the end was that community of people who loved Chef, because they wanted it to win. Because Chef winning meant they won. That wouldn't have been true without that thing.

**Adam Stacoviak:** What did you do special to make that happen?

**Adam Jacob:** You treated them like the peers that they are.

**Adam Stacoviak:** And how did you do that though Get specific. How did you treat them like that?

**Adam Jacob:** For me it was that I approached those people as people, as humans. They were there, wanting to be a part of this thing that I loved, and had built, and wanted to see thrive, that they made it thrive. That was everything to me. That's it. What a beautiful thing that somebody would come and wanna be in that place with you, and then also wanna share those same values. It was beautiful. And I don't think there was any magic to it other than genuinely believing that was true, and behaving that way. We threw amazing conferences where we hired Darek Mazzone, who's a Wo'Pop DJ at KEXP... And he would scout the location, find local artists, we would find local bands that would come and play... It was amazing. I got a Mudhoney poster back here, because our corporate band opened for Mudhoney in Seattle. That was fun.

**Adam Stacoviak:** You had fun.

**Adam Jacob:** And that community enjoyed itself in that way, and enjoyed being with each other, because we had this shared sense of ownership over this thing that we had all built. And one of the real difficulties in shifting Chef open source to the free software business model was that the Chef brand, which was always mine, they were always Chef's, they always belonged to the company - people really felt strongly that that brand belonged to them, and they were mad that we were no longer producing completely open source builds that were called Chef. They felt duped. And I felt really bad about that. I didn't feel so bad about it I didn't do it, and the salve that I gave them was that the software was open source now, that there was nothing that they couldn't have, and that we were gonna collaborate together to build those communities, to build Sink and those things, and it wouldn't be hostile. I think that's what it is.

And you can rely on that community to get you through those hard things. And when those communities don't exist - well, then you're just a business that's failing. You're just a business that got disrupted. I know what it's like to be disrupted, it sucks. It hurts to get in a spot where you're like "Oh man..." We were growing at 20% quarter over quarter, 150% quarter over quarter, and now we're growing 10%, or negative. That is not fun in business land. But when you have this huge community of people behind you who want you to succeed, not just from a revenue perspective, but from a community perspective...

**Adam Stacoviak:** Like a loyalty thing. They're not gonna leave your side. They've got your back.

**Adam Jacob:** Yeah.

**Adam Stacoviak:** When someone's calling you names, they're gonna say "That's not true." When somebody puts your shirt on backwards or inside out because they don't wanna represent you anywhere, it's like, "Come on now... That's not cool."

**Adam Jacob:** Exactly.

**Adam Stacoviak:** They're calling them out, they're saying "That's not cool." It's how Adam's been here.

**Adam Jacob:** And it's because they've been there, and you've been there, and that thing has been genuine. I don't think you can fake it. I don't think that's a thing you can manufacture. I think it happens because you show up. It happens because you legitimately care about each other. That is the thing I'm most proud of about Chef. Early on in its life we had people come into the IRC channel, it was \#chef on FreeNode when FreeNode was a thing... And they asked us what they should cook; they had their first date in their whole life. So they finally got a date, and they wanted to cook for their first date... And they were like, "What should I make for this person on my first date, to make a good impression?" And this IRC channel full of hundreds of people - like, I've never seen it more engaged than it was in debating what thing this person should cook.

**Adam Stacoviak:** \[52:03\] Absolutely.

**Adam Jacob:** They were not in the right place, man... But they just assumed that's what it was about.

**Adam Stacoviak:** That's hilarious.

**Adam Jacob:** But there was no hesitation. There was -- nobody was mean; nobody was like "You shouldn't be talking about cooking on this channel." Everybody was just like, "Oh man, we've gotta help you out. What's it gonna be?" And then we were debating which ones are easiest to cook if he wasn't a very good chef, and it's gotta be simple, but then it's gotta be -- so I think we wound up with Carbonara, or something... You know, that's a little fancy, but easy enough to cook...

**Jerod Santo:** How did the date go?

**Adam Jacob:** Never came back.

**Adam Stacoviak:** Never came back...

**Jerod Santo:** Oww... That's not good.

**Adam Jacob:** Couldn't tell you. In my head, it went great.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Yeah. Based on the advice, right?

**Jerod Santo:** I think when it goes great, they come back and tell you. They thank everybody for their great advice, but...

**Adam Jacob:** Yeah. \[laughs\] But that's the Chef community. That's what it was, and I think it's what it still is.

**Jerod Santo:** That's cool.

**Adam Jacob:** And I think being open source is not enough to create that community on its own. But that community can only exist around products that are open source. Because otherwise you're a fan. And I'm a fan of so many things, but they're not my church; they're not my place, they're not my people... You know what I mean? Does that make sense?

**Adam Stacoviak:** Yeah. You know, I was wondering, as part of your journey, essentially, whether you were more cynical or more hopeful, and it seems like you're not cynical. It seems like you're hopeful.

**Adam Jacob:** Oh, I'm so hopeful. Yeah. No, look, how can you not be hopeful? Look at people... Look at this thing that we do all the time. It's insane that it exists at all... And it exists because we have all decided it should. Like, literally, all of us decided that this was the coolest thing we'd seen, and we wanted to keep doing it, and we do it every day, and it's such a blessing. And that mass group decision that this is how it's gonna go, and that we can all have lives because of it, and we can spend our time on Earth doing this work - that is such a beautiful thing. And I fundamentally believe that that is who people really are. There's so many things that divide us and make us awful, and those are awful things, and I see them, and I don't want them... Do you know what I mean?

**Adam Stacoviak:** Yeah.

**Adam Jacob:** ...and also, at the core of what we all hope for. I think that's really what we all hope for. And we've got this little pocket of the universe where there's this precious thing, and we happen to have done it in software. I think that happened in software because the resources are infinite. If you have power in a computer, you can do what you want. So it's effectively infinite within its own sphere. It's not, because power and access to computers, and all that stuff... But if you put that stuff aside, it is this infinite resource, where it costs nothing to let other people have it. That is a beautiful thing, it's a lovely vision, and it makes me infinitely hopeful for what it can do and be.

**Break**: \[54:52\]

**Jerod Santo:** So now you're working on System Initiative, and you've been working on it since the last time you were on the show... And if you go to the homepage now, it's like, "Hey, request an invite." So a lot of work being done, but kind of like stealth mode... Tell us what you're up to, and the progress, and all that.

**Adam Jacob:** Yeah. I mean, it's definitely stealth mode. It's real good progress. System Initiative, when I think about the things that I care about and have cared about a long time, I really care about what it feels like day to day to build software and ship it and then to run it in production over time. That's the thing that I'm most nerdy about. And I like it both from the point of view of just like for myself and my own teams, but I love it when it's in the complicated world of the enterprise. I find huge companies and how they've figured out how to do that just fascinating, because there's so many amazing people that work in those companies that often feel a little more like their hands are tied, that folks who work in startups, that tend to feel like they can just sort of do what they want... But if you work at Morgan Stanley or whatever - not to pick on Morgan Stanley; I don't know anything about Morgan Stanley... But they probably don't feel like they can just do whatever they want. There's probably a process they need to weed through.

So that's what I love, and have always loved doing, and I think coming out of Chef and looking at my experience of sort of how DevOps and digital transformation and all of those things had sort of happened - I think we had a lot of real success for a long time at making people feel like they had a superpower in their ability to deliver that software, and they were really orders of magnitude better than they were...

I think what I still see is that the ambition that people have to be good at delivering software and at managing those systems, and the complexity with which they would like to build systems - and by complexity I mean just like, if I wanna build something really great, it might have a lot of moving parts. And so their willingness to build something amazing, that has a lot of moving parts I think has increased, as our use of the internet has increased... All those things are now even more obvious than they were a while ago.

So System Initiative is really about figuring out how do we look at that whole process, that whole system - the human side of it, the interaction side of it, the technical side of it... And what could we have if we really sort of really re-thought it from scratch. What if we looked at that as the problem that it is today, and what would we build, as opposed to looking at it through the lens of "Well, what are the decisions we've made for the last 20 years, and how can we add another layer on top of it?" Or how could I just have a little, small tweak. I don't wanna build something that's a little bit better than something else.

**Adam Stacoviak:** \[01:00:07.21\] It's a rewrite.

**Adam Jacob:** I wanna analyze the system, and I wanna look at that thing and say "How can we make this an order of magnitude or more better for people to use? How can we make the experience of doing it amazing again?"

**Jerod Santo:** So without revealing too much, can you give us a for-instance of one thing where you re-thought from scratch and it actually was way better, or is going to be way better, with System Initiative?

**Adam Jacob:** Yeah. I'll just give you a thought experiment.

**Jerod Santo:** Okay.

**Adam Jacob:** If the way that we express what we want in terms of how our applications go into the world and their requirements is source code, but how they behave in the real world is that they're dynamic systems that change over time, how can we reflect that change over time to the source code in an elegant way? How does that work? And right now you can't. If you provision a bunch of stuff and then go tweak it by hand somewhere, that by-hand tweak is bad, it's drift, it's hostile; it will get undone when the automation comes back around again. Those models - we do that because they help us understand -- like, try to manage this big estate... But it has a very big user experience problem, which is I can no longer relate to the resource directly. I have to go through the abstraction to get there.

**Jerod Santo:** Right.

**Adam Jacob:** So is there a way out of that trap? And without revealing too much - maybe.

**Jerod Santo:** Yes, there is. Oh, maybe.

**Adam Stacoviak:** Maybe.

**Adam Jacob:** Someday you may see that there could be an answer to that question. But that's the sort of question that I'm talking about. Or you know, the way we interact with the system has been really unimagined. We interact with it the way we interact with source code. But if you look at other things, like "Can we do better?" I don't know.

**Adam Stacoviak:** It's kind of like a git rebase almost, because you have the system as code, it gets deployed as automated software infrastructure, it goes out the way code-as-infrastructure (or whatever you call it) happens, and then the git rebase essentially is your tweak.

**Adam Jacob:** That's a good analogy. If you think about trying to do that for real, though... It's pretty complex. There's a lot of stuff in the way. So System Initiative -- I'm not being quiet because I don't want people to see it, it's because...

**Adam Stacoviak:** It's not ready.

**Adam Jacob:** Yeah. And it's the kind of thing where it's either gonna be ready, and when people see it, they're gonna be like "Whoa." Also, some people are gonna see it and be like, "I don't want this at all." So it's gonna be a strong binary reaction, I suspect... But you know, it's not the sort of thing that benefits from early reveals, because it has to come together.

**Adam Stacoviak:** That's right.

**Adam Jacob:** And you know, if you're this far into this podcast, I think you can probably intuit that I'm not a person who tends to hide my light under a bushel, or whatever. I'm not coy about what I think... So I will 100% be not coy about what it is and how it works...

**Jerod Santo:** When the time is right.

**Adam Jacob:** ...when the time is right. But I think as an industry, I would say the challenge for us in the cloud era now is that I do not think we are well-served by continuing to get incremental improvements on the existing way that we work. I think the existing way we work has roughly hit its ceiling. And we might be getting small bits better, but it's on the margins, and it's not enough if we really want to get to the next plateau of productivity. We have to do an order of magnitude better.

**Adam Stacoviak:** How do you mean "how we work today"? Can you give an example of where it's wrong?

**Adam Jacob:** Yeah, think about all the work that's required to set up the way an application goes into the world. Like, what are all the things you have to do? If you just grabbed a piece of paper and you wrote it all down... You've got source code repositories, you've got maybe infrastructure stuff, you've got monitoring, you've got this, you've got that - you've got this whole big thing. And every single one of those is sort of constructed differently... But different in a way that's necessary for your problem. So the difference between us is not arbitrary, it's actually the difference that makes it work at all.

\[01:04:08.25\] And the only real ways we have to interact with those systems is through a ton of human effort. And it's that way because - whatever, that's the best way we've figured out how to do it. But I don't think it's fun... Like, when you ask people what the fun part of their stack is - do they ever say "Oh, the fun part is the infrastructure, or the application automation, or my continuous delivery pipeline"? I don't even hear people say it's fun to configure their continuous delivery pipelines...

**Jerod Santo:** No...

**Adam Jacob:** Do you know what I mean?

**Jerod Santo:** Just people like you, sys admins who nerd out about it.

**Adam Jacob:** Yeah, but even we don't think it's fun. We think the tinkering is fun. But we don't think that oper - that's not like - You know what I mean?

**Adam Stacoviak:** What are you doing today? A bunch of configuring. It's going to be fun.

**Jerod Santo:** So when you talk about incremental improvements, are you saying containers wasn't an incremental improvement, and then orchestration was an incremental improvement?

**Adam Jacob:** I would say containers was the last order of magnitude improvement, and it was to application packaging and delivering. That was the last major order of magnitude improvement. I would also say that the full expression of the power of that improvement was hampered by the lack of innovation everywhere else. If you compare the experience of typing docker build or docker run, and how that feels, and how beautiful that moment was, and you compare it to everything else that's required to make that thing work in the world, it pales in comparison to that initial user experience of docker run. And that's what I'm talking about. That was an order of magnitude improvement in how we bundle our applications together and ship them. That was amazing. Everything else - way worse. And it's actually so much worse that it makes that experience worse by reference.

**Jerod Santo:** It drags it down.

**Adam Jacob:** Mm-hm. So yeah, System Initiative - it's the kind of thing, since we're talking about business, that can only exist because venture capital exists.

**Jerod Santo:** Because it's too big of an idea.

**Adam Jacob:** Mm-hm. It's too much. But it's not too much.

**Jerod Santo:** So we're talking in two years of development. Maybe three. At this point it's still not out there.

**Adam Jacob:** Not yet.

**Jerod Santo:** That's a big investment.

**Adam Jacob:** But it's pretty cool.

**Adam Stacoviak:** How do you iterate that then?

**Jerod Santo:** "But it's pretty cool...!" \[laughter\]

**Adam Stacoviak:** How do you know you're building the right thing?

**Adam Jacob:** It's a great question. I mean, we're pretty solid domain experts, so I'm not building software that's not in my own domain... If I was building software for you guys - I'm not a podcaster, I don't do what you do... So if I was building software for you, I would need to iterate with you very much to know if I'm on the right track, because what do I know about podcasting, right? In this case, we're pretty solid domain experts. Everyone who's at System Initiative has been around this industry and done this work for a really long time... So some of it is just having a point of view, and all good products have a point of view, so that's a big piece.

And then we have shown it to people. It's not like no one's seen it. It's just that I ask all those people to keep it like a type one secret. I think there's two kinds of secrets in the world - there's secret-secrets, where when someone tells you, you have to keep it, or bad things happen. There's type two secrets, where what you actually want is people to tell other people what you said, but to say that it's a secret, so that everybody knows it's a secret...

**Adam Stacoviak:** Oh...

**Adam Jacob:** System Initiative is a type one secret, for the people who've seen it.

**Jerod Santo:** Bad things will happen.

**Adam Stacoviak:** Don't tell anyone. For real.

**Adam Jacob:** For real. I'll be upset with you if you tell people what's happening.

**Jerod Santo:** \[laughs\] I thought you might make them an offer they can't refuse, or something like that...

**Adam Jacob:** Yeah, exactly.

**Jerod Santo:** Okay, so that's interesting...

**Adam Jacob:** Yeah. But I think as an industry, what we're due for - we were the people, infrastructure automation and automation in general was the thing that empowered all these people to do so much better, and now it's kind of become the bottleneck. If you look at what's holding them back, they're like "I can't get the automation -- it's so much work to make the automation work the way I would need to in order to do this ambitious thing... So I'll just be less ambitious."

**Jerod Santo:** Yeah. So we have an entire new podcast - you may not know this - that's called Ship It, and it's all about the boring parts that we wanna automate away but we can't yet. So if System Initiative is successful, we might have to just retire that show altogether...

**Adam Stacoviak:** \[laughs\] I hope you fail, Adam... Just kidding.

**Adam Jacob:** I'll tell you what. I'll make you a deal.

**Jerod Santo:** Okay.

**Adam Jacob:** As soon as it's not a type one secret...

**Jerod Santo:** \[01:08:04.19\] Okay...

**Adam Jacob:** ...we'll do a podcast, I will show you the thing, and we'll dive as nerdy as you want to about how it works, and why it's built the way it's built... And we can go wherever you wanna go, as soon as it exists.

**Jerod Santo:** It's a deal.

**Adam Jacob:** I will come and do that with you instantaneously.

**Jerod Santo:** Instantaneously.

**Adam Jacob:** So fun.

**Adam Stacoviak:** Well, what's the horizon then? When do you think this might be? Something that's a type two secret.

**Adam Jacob:** I bet it's a type two secret next year.

**Jerod Santo:** Okay.

**Adam Jacob:** But if you ask me when's it gonna ship, my answer is like the Blizzard guy's answer, it's like, "When it's ready, and not before..."

**Jerod Santo:** So here's the million-dollar - maybe the billion-dollar - question. Are you gonna go the Chef route? I mean, you've already accomplished open source business success... System Initiative is currently in stealth mode, but is it gonna stay closed, even once you open it up? Or is it gonna be an open source thing?

**Adam Jacob:** My point of view on that stuff is that the business needs to be designed first, and then open source is second. And it's not because I don't love open source; I hope that's clear on this podcast, I so much do... But it's because the two things are separate. The decision to be in business and the decision to be in open source - they're different things. And so System Initiative right now, as far as I can see as a business, it would be tough to think about why that should be open source, at least in the early days. That's not to say that it would never be open source, or that some of it wouldn't be open source. That all said, if when I look at the competitive strategy and the landscape for System Initiative, and with my partners, if what we see is that we think that that model is better for competition, for building community, for all the reasons that having open source matters, then of course I would open-source it, and of course, what I would do is run the RedHat model. I'd run the Chef model, I'd run the pre-software product model. But that'll be a business decision we make because of how we wanna bring that product into the world... Not because I'm an open source true believer, and I think all software should be open source, or it's created by people who have no soul. Does that make sense?

**Adam Stacoviak:** Mm-hm.

**Adam Jacob:** I'm both an open source true believer, and a business true believer, and I get to be both at the same time. And in this context, my business context comes first, because this is a business venture that I have gotten into. If that business tells me that's the right move, then that's exactly what I'm gonna do and I wouldn't hesitate to do it.

**Adam Stacoviak:** Was Chef then accidentally a business?

**Adam Jacob:** No. Chef was born into a market where it had very direct competitors - CFEngine, Puppet - and then it had closed source competitors, BladeLogic and Opsware... And that being a proprietary entrant into that market at that time, I don't think it was a viable path.

**Adam Stacoviak:** Different time too than -- 2008 was a different time.

**Adam Jacob:** It was a different time, but I really believe that because of the shape of the landscape, there was no version of Chef where it not being open source would have worked. I think there's definitely a world where System Initiative absolutely works and is not open source... And maybe it's better because it's not open source, from a business perspective. I don't think business is always better because it's open source. The largest businesses in the world are not open source businesses. That's not to say that that cap is like a built-in handicap, or whatever... Do you know what I mean?

**Adam Stacoviak:** Yeah.

**Adam Jacob:** But to say anything else would be foolishness.

**Adam Stacoviak:** Yeah. Well, systeminit.com was pretty cool-looking, even as sparse as it is... To quote it, it says "Reinventing how we interact with computing environments." It's got three cool shapes...

**Adam Jacob:** \[laughs\]

**Adam Stacoviak:** I don't know what to describe those as...

**Jerod Santo:** That's where all that VC money went, into the shapes.

**Adam Jacob:** Yeah, they went into the shapes. Look, my partner and co-founder, Alex Ethier, is an incredible person, who does not like to be a public figure, but is one of the greatest products people I have ever known... And working with him is jus a pleasure, every single day. And he makes all that stuff look good and easy, because he is meticulous, and thoughtful, and just such a delight. And so I think - yeah, that's all Alex, in the best possible way.

**Adam Stacoviak:** The blinking cursor is cool. I like your shade of green, it's very similar to what we call "hacker green" around here...

**Adam Jacob:** \[01:12:14.02\] Brother, that blinking cursor - talk about Alex...

**Adam Stacoviak:** It's tight. Very tight.

**Adam Jacob:** Talk about culture... That blinking cursor tells you who it's for... Do you know what I mean?

**Adam Stacoviak:** yeah.

**Adam Jacob:** It does more work telling you who it's for than a million marketing people could ever do. That blinking cursor is like "This is for you. If this is your jam, if you're a power user, this thing's for you." That blinking cursor is how you know.

**Adam Stacoviak:** Well, Adam, it's been fun catching up with you. I really do enjoy our conversations. I think they're very much therapy in lots of ways for me, because we get to commiserate, we get to dream a little bit, we get to show our hope in the idea of business, the possibility of venture capital, and the purist nature of open source we right here truly believe in... And we love hanging out with people like you, who believe also in both sides - business, because we are a business, and we are also open source. We're not an open source business though; we're just a business that happens to have their main thing as open source... And nobody uses it besides us, so we're not even looking for adoption really. It's just simply there to contribute.

**Adam Jacob:** No, you're a business about the culture of open source, and all the things around it. That's definitely open source, right? It's the same way that radio DJs are of hip-hop.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Precisely.

**Adam Jacob:** You're definitely of that culture, 100%.

**Jerod Santo:** You get us.

**Adam Jacob:** I totally get you. I'm in.

**Adam Stacoviak:** You totally get us.

**Adam Jacob:** I completely get you. I love talking to you. I'll be here anytime you want to. I'd just bore everybody to that. You'd be like, "We need a new guest", and I'd be like "No." \[laughter\] "I'm the permanent guest. I'm it. It's my show."

**Jerod Santo:** \[laughs\] Well, we'll definitely get you on Ship It once System Initiative launches. We'll probably bring it on Changelog, too. That'd be fun.

**Adam Jacob:** That'd be so fun.

**Adam Stacoviak:** That would be fun.

**Jerod Santo:** Yeah. A deep-dive.

**Adam Jacob:** Yeah, we'll dive as deep as you want. I'd love nothing more than to spend however long you wanna talk to me, being nerdy about it. Believe me, no one wants to tell the story of what that thing is and why it's amazing more than I do.

**Jerod Santo:** Hey, you've been toiling away for a while now...

**Adam Jacob:** Mm-hm. For sure.

**Jerod Santo:** So it's gotta be getting to where you're ready to get it out there in the world, no doubt.

**Adam Jacob:** Oh, I'm so ready... I'm up to my eyeballs ready. But you know what - it's gonna get there.

**Adam Stacoviak:** Do you have T-shirts yet?

**Adam Jacob:** I don't even have a T-shirt. Isn't that awful?

**Adam Stacoviak:** The moment you have a T-shirt, I wanna buy one, or ask you to send me one, because I wanna rip it.

**Adam Jacob:** You know what's funny? So we have a design for a T-shirt, and when it ships, I'm gonna build that T-shirt. It's a really cool design.

**Jerod Santo:** It's gonna be a good day for you.

**Adam Jacob:** It's a ship it gift to myself, and to ourselves, to the team. We're gonna do that together.

**Adam Stacoviak:** Yeah. Let's do one very personal thing on the way out. I'm curious of your favorite metal band, and why.

**Adam Jacob:** Ooh... Okay, so...

**Adam Stacoviak:** You mentioned favorite lyric, or at least a lyric during the show, so I'm sure you've got a favorite lyric, and maybe a favorite band...

**Adam Jacob:** \[01:14:56.03\] Okay, so it's a tough question because different people feel differently about where the borders of metal and hard rock are... My favorite album of all time, and probably band of all time too, because they kind of always go together, is Appetite for Destruction. So it's Guns 'N Roses. And I just remember -- I love all that. I have a sister who's ten years older than I am, and my brother is two years older than me, and it was like peak MTV... So I was very little, and not watching cartoons; instead, I was watching MTV with my sister. So all that stuff was just in my brain, and I loved all of that hair metal bands. Def Leppard was the first band I ever collected all of the albums of... So I loved all of that stuff.

I remember seeing the video for "Welcome to the jungle", and just being like "Oh, what is that?!" I was just like, "That is dangerous, and dirty..." And hair metal at that point was not dangerous. It was full clown... Do you know what I mean?

**Adam Stacoviak:** Yeah.

**Adam Jacob:** It was like, "Every rose has its thorn" every day, for like 12 hours a day. And then Guns 'N Roses happened, and I was like, "Oh, that's incredible." And then -- do you remember Skid Row?

**Adam Stacoviak:** Mm-hm.

**Adam Jacob:** Skid Row happened too, and Skid Row - also kind of dangerous... And Sebastian Bach was pretty or whatever, but then "Slave to the grind" happened and they got really heavy... And then I saw Skid Raw on the "Slave to the grind" tour, and the opening act was Pantera...

**Adam Stacoviak:** Now, that's my band... So if you ask me the same question I asked you, Pantera is my band.

**Adam Jacob:** It's Pantera?

**Adam Stacoviak:** Mm-hm.

**Adam Jacob:** So I saw Pantera open for Skid Row, I was in the sixth grade, I think...

**Adam Stacoviak:** How old are you then, Adam?

**Adam Jacob:** I'm 43.

**Adam Stacoviak:** Okay, so we're basically same age. I'm 42. So this is same era. Guns 'N Roses for me, Appetite for Destruction...

**Adam Jacob:** Yeah.

**Adam Stacoviak:** We were being in fifth grade, or fourth grade on the playground, and me and my buddy like "My Michelle", and all that good stuff... I grew up on Pantera, had the shirt...

**Adam Jacob:** Yeah...!

**Adam Stacoviak:** I went to one of their concerts, unfortunately, because I just didn't have a lot of money, or a car to get there, and I was young, so... Anyways.

**Adam Jacob:** Yeah, I was blessed with early access to all that stuff. And then grunge happened in Seattle, and I lived basically in Portland, so I got to see all those bands when they were small, and still touring...

**Adam Stacoviak:** Nirvana...

**Adam Jacob:** Nirvana... But Pantera - man... I remember it was Walk, and there was this dude in front of me wearing this incredible Boston jacket. It was a leather jacket with a big Boston logo on the back of it... And then there's Phil, and they're doing Walk. And I was just like -- I was in. I was done forever. I was like "This is my thing."

**Adam Stacoviak:** Yeah.

**Adam Jacob:** And then I got to high school... You know, everybody's middle school sucks, and whatever, the kids who had picked on me all through middle school... And I got a girlfriend during the summer between middle school and high school, and my girlfriend was friends with all of these senior guys who were stoners... Just long hair, leather jackets, full-on, the whole deal... And she introduced me to these dudes the first day of high school. And then the second day of high school they saw the people who had been picking on me my whole life, and they just walked over and they were like "Yo, not this kid. Do that again and you're dead." And I was like, "This is my tribe. I'm in! You're my people. Metal for life." Anyway, there you go. There's a long answer to your question.

**Adam Stacoviak:** I like that. We can go deeper, but I just wanted to get a good little personal out on there, because I know what a metal fan you are. I've got similar roots... I wouldn't call myself Agony of Life, that's a good band, too. Sepultura, Pantera...

**Adam Jacob:** Yeah, of course.

**Adam Stacoviak:** Guns 'N Roses, of course...

**Adam Jacob:** All that stuff.

**Adam Stacoviak:** Yeah, that's where I hang out at... When I hung out in those eras. I'm still listening to Guns 'N Roses. Still listening to Pantera.

**Adam Jacob:** Yeah, of course.

**Adam Stacoviak:** Just less often.

**Adam Jacob:** At least once a week for me.

**Adam Stacoviak:** At least once a week?

**Adam Jacob:** Oh, absolutely.

**Adam Stacoviak:** Thank you so much for all you've shared here, Adam. We appreciate you. You got my respect. Thanks for sharing your time.

**Adam Jacob:** Oh, it's my pleasure.
