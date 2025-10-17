**Jerod Santo:** Today we have a special treat, it's Evan You from Vite. Welcome, Evan.

**Evan You:** Hello. Nice to be here.

**Jerod Santo:** Happy to have you. Now, as we record this, we're together, but as it ships out to our audience, you are going to be at the first ever in-person ViteConf. That has to be exciting...

**Evan You:** Yeah, we're looking forward to it.

**Jerod Santo:** Vite's come a long way, I think, since you first started it, to a live in-person conference with a CultRepo - formerly Honeypot - classic documentary as well shipping about Vite... You probably didn't have such grand ambitions when you first got started, did you?

**Evan You:** Definitely not. Yeah, Vite really just started as -- similar to Vue, it started as this random idea, "What if I just do this?" And then just started hacking on it, and got something interesting, and then kept pushing on, and eventually, more people started using it.

**Jerod Santo:** What was that idea? This is going back to the WebPack days... I think WebPack was the bundler of the day. And of course, that allowed a lot of things, but it was also complicated, and sometimes frustrating, and lots of configuration... What was the idea you originally had with Vite that was worth hacking on?

**Evan You:** Yeah, so the original idea -- so obviously, I worked on Vue for a long time, and for Vue we built this whole CLI that wraps WebPack, called Vue CLI... And one day, I was just trying to reproduce a Vue bug that a user reported, that came with this whole reproduction that requires running Vue CLI... And it was installing all the dependencies, and getting the reproduction started... And it was taking so long, I was like "There's got to be a better way of doing this." And the idea was really about loading a Vue single file component directly over the network from the dev server without an actual build step. That was really what I was looking for initially.

So the first prototype of Vite was actually back in 2019, it was called vue-dev server, and it was really just a simple HTTP server that looks at the incoming request. If it's a Vue file, it'll just compile the Vue file on the fly, and send it back to the HTTP request. I had that prototype done very early on, played around with the idea... I liked it, because the experience I wanted was really something closer to a normal HTTP, local HTTP server, that I could just start on demand. And then when I import a Vue file, I want the file to be compiled into JavaScript automatically when I request it. Later on, I realized "Okay, this idea actually applies not just to Vue files. If I load a TypeScript file, if I import a TypeScript file, it should come back with the compiled JS, too."

That was also the time when more browsers started to support native ESM imports. So previously, if we were to write something like import foo from a file, we had to first bundle it with WebPack, because browsers couldn't just load native ESM. But in 2019, more browsers started to ship that. And that really got me started thinking "What if we can just use this to build a whole dev environment?" You just import things on demand, it gets compiled, transpiled on demand on the server side, and you get the compiled JavaScript back.

So in 2020 -- the first prototype in 2019 actually got sort of... I dropped it aside because I couldn't figure out how to do hot module replacements with it. So I kept thinking on about it... I was also working on Vue 3 at the time, so that idea kind of stayed in sort of a prototype status for a very long time, until in April 2020 it somehow clicked. I was like "Hey, maybe we can do hot module replacement over native ESM, just by doing this and that." So I started hacking around the idea... I pulled out the old prototype, tried to add the hot module replacement logic on top of it... And it kind of worked. So that got me really excited. And that was the real start of Vite as a real idea.

**Jerod Santo:** There were other contenders at the time, right? There were other people working on this problem. I remember Snowpack...

**Evan You:** \[08:17\] Yeah.

**Jerod Santo:** At some point there was one called Wmr... I'm not sure the timeframe of that one.

**Evan You:** Yeah, I think -- yeah, Wmr was around the same time. Jason Miller worked on that. I think he also kind of worked on it in stealth for a bit of time. He kind of teased about it on Twitter. When it came out, I believe it was modeled after Rollup's API. That's also the source of inspiration for Vite to support Rollup's plugin API as well. And Snowpack also came around at the same time.

The interesting thing with Snowpack is we kind of went from very different directions. Vite started as this sort of "If we can load modules with native ESM and do hot module replacement..." And then we realized, "Okay, if we load every file this way, it will actually be slow." Because if you have a npm dependency that has like hundreds and thousands of modules, it actually gets quite slow. So we were looking for a way to sort of, first of all, combine these individual modules and Node modules into fewer files. And also, some of the Node modules shipped were in CommonJS, which we can't load natively over ESM. So we had to pre-transform them into ESM, so that we can load them in the browser. So we were looking for something that would handle that part.

Snowpack started out as something that does exactly that. The first version of Snowpack was explicitly saying "Let's convert all your CJS dependencies into ESM." And then they later on added the capability to, say, transpile on the fly, and to do a hot module replacement... Essentially, they added on a dev server to that. And we started out as a dev server, but then tried to later on add this dependency compilation part. So we went from like two opposite directions to eventually become very similar in scope. So there was a period where we were pretty much just shipping features left and right. We were kind of doing the same thing in parallel.

**Jerod Santo:** And at a certain point, Vite kind of busted out from the notion, at least the one that I had, and I think others shared, that it was for Vue. Like, if you're not using Vue, Vite's usable, but really it's built for Vue. And that may have never been true, but the reputation was that, or just the association was there.

**Evan You:** Yeah, so the very first version of Vite was definitely for Vue only... But I think we got it to -- I was working on it halfway. So we got all the way up to -- there was a long period of like 0.X releases, and we got all the way up to 1.0 RC.

At that time, the internals were still very specifically designed for Vue. For example, the whole compilation logic of handling Vue single file components was directly inside Vite itself for version one. And it was kind of an afterthought that we added this additional way of transpiling, say, TypeScript. And in version one, we also did that through middlewares. So you need to add your own server middleware that intercepts a custom file format, then transpile it into JavaScript.

And I was then looking-- before we shipped 1.0 I was looking at this whole API design and I realized, "Okay--" That was the point when I also started looking into Wmr a bit more, and I realized, "Look, Wmr is actually having this plugin container, that abstracts away the plugin hosting interface for Rollup..." So you can actually run a Rollup plugin without Rollup itself; not in the browser, but in Wmr. So Wmr is able to run process Rollup plugins, both during the development server and in the production build.

\[12:33\] So we realized, okay, if we do that too in Vite, we can support not just Vue components; we can support TypeScript, we can support TSX, JSX... We can support even Svelte. So that got me started thinking about refactoring the way we handle these custom file formats, and that eventually lead to a complete rewrite. So we never actually shipped 1.0. We were already at 1.0 RC25, or something...

**Jerod Santo:** Really?

**Evan You:** Yeah. I was like "We've got to just completely rethink this." So I started a whole rewrite. That eventually became v2. And that rewrite took another three to four months, I believe.

**Jerod Santo:** So you never shipped one, but then you shipped two?

**Evan You:** Yeah, we just went directly to v2.

**Jerod Santo:** \[laughs\] And how long did you say that the difference was in timing between the two, the RC and the v2?

**Evan You:** I can't remember the exact date we started working on RC, but I first talked about the idea in like April 2020. That was like the first 0.x version of Vite. And Vite 2 was shipped in February 2021.

**Jerod Santo:** Okay. So I remember this part from the documentary... So I was able to see a rough cut of the doc, and Fred Schott, who's the Snowpack author - and I'm sure a friendly competitor at the time; you know, you have the spirit of open source competition, but everyone's kind of rooting for everyone... At least that's the way I play the game. He's telling the story of this December time period where he spent time with his family, and all of a sudden Evan starts committing like crazy. I don't know if that's dramatized for the doc... And of course, they do a great job with these documentaries. They have this close-up view of your contribution graph, and all of a sudden, little green dots start to show up in December, and then into January. And he's like "Evan cracked the nut", or something like this. He figured something out that got you excited to like really start going on it. Is that approximately true?

**Evan You:** Yeah. Actually, looking back at the days, I think the idea of dropping RC and just go directly to 2.0 was like -- it started exactly in December, 2020.

**Jerod Santo:** Oh, okay.

**Evan You:** At the start of December.

**Jerod Santo:** So people were still waiting for 1.0...

**Evan You:** Yeah, people were waiting.

**Jerod Santo:** I mean, extensively. They're like "Man, this is the longest release candidate ever." \[laughter\]

**Evan You:** Yeah. It never landed.

**Jerod Santo:** Yeah. Never landed. And then here comes 2.0. So at that point, did you get the groundswell of adoption and support, once 2.0 hit? Was that when Vite really started to -- because I mean, the adoption story since then has been astronomical, hasn't it?

**Evan You:** Yeah. I think 2.0 really was the real starting point of -- real momentum in terms of adoption. Because people saw -- people knew about Vite 1, before 2.0. Some people were already using it, excited about it, but 2.0 was really the version that made people realize "Okay this is more than just for Vue. It can actually be a proper tool for other frameworks as well." I think that also started -- we started seeing other frameworks actually adopting Vite, and building on top of it. So that really kicked things off.

**Jerod Santo:** \[16:04\] That's a beautiful thing, because there's fractals of frameworks in the JavaScript community, and each one for a long time had their own build tools, their own Webpack thing... Or like Vite did. You guys were like "Well, we're going to build one for Vue." And then eventually, it's nice to see some coagulation and some really rallying around a tool so that everybody can benefit, and helps with that paradox of choice to a certain extent. It's "Yeah, well, everyone's just using Vite now, so let's just all do that." And one less decision to make, right?

**Evan You:** Yeah. I mean, that definitely took some time. I think Svelte was the earliest sort of non-Vue framework to embrace Vite... Rich Harris was working on SvelteKit at that time. SvelteKit was initially built on top of Snowpack. So when we were working on Vite, I think at one point the Svelte team eventually decided to switch from Snowpack to Vite... And then the Snowpack team themselves started working on Astro, and later on they also decided "Okay, we want to focus more on Astro. We want to focus on the framework layer, instead of maintaining our own bundler, our own dev server/bundler/everything that does more or less the same thing as Vite." So Astral eventually switched over from Snowpack to Vite as well. So these are probably two of the earliest frameworks that decide to just build on top of Vite, instead of reinventing the wheels.

**Jerod Santo:** So what was your own trajectory like with regard to Vue.js and Vite? I don't know your history around -- did you leave the Vue project, or are you still --

**Evan You:** We're still working on it.

**Jerod Santo:** Are you still working on the Vue project?

**Evan You:** Yeah. I spend a lot less time directly on Vue myself. We do have other team members still working on features and maintaining it... But the reason we created Vite was because I wanted to use it with Vue. So obviously, we switched all the default tilting of Vue over to Vite.

So the Vue plugin was actually exactly what I used to validate the design of our plugin interface. And later on, we also have Nuxt, which was the main meta framework in the Vue ecosystem. So Nuxt 3 was in development when Vite 2 was introduced. Originally, it was, again, built on top of WebPack. So when they found out that Vite is coming out, I think what they did is they -- I think a smart thing they did with Nuxt 3 in the beginning is they made the core logic of Nuxt 3, the framework, bundler-agnostic. So it can actually work with different builders. So it can work with WebPack, it can also work with Vite. So when they saw Vite was out, they immediately started refactoring things so it can work with Vite. And eventually, the default version of Nuxt 3 was also shipped with Vite as the default build tool.

**Break:** \[19:17\]

**Jerod Santo:** One of the things that I'm very impressed by you, Evan, is your ability to foster communities around your projects. And you've had so many -- I mean, even Vite has so many amazing contributors. Anthony Fu, Matias Capeletto... I don't remember his last name, Patak... Those are just two examples of a lot of people.

**Evan You:** Yeah.

**Jerod Santo:** Is that something you do intentionally? Did that just kind of happen? How do you get these amazing devs to come alongside? And then Vue is maintained and continued being worked on largely by people that aren't yourself. That's an accomplishment. How do you do that?

**Evan You:** To be honest, with the two projects I kind of handled things a bit differently. With Vue, I would say we're really lucky to have -- first of all, for any project to have capable and ambitious contributors stepping up. It's something you kind of -- you're lucky to have any kind of these people, regardless what you do intentionally or not. So first of all, you've got to have these people. If you're lucky enough to have some people like this, it's important to sort of encourage them, acknowledge their efforts, and just make them feel that their contributions are being valued.

In a lot of ways, I think for the Vue project it's very organic. We don't really do any sort of -- we don't do any sort of like trying to ask for contributions, or try to find people explicitly to do these things most of the time. We noticed a pattern. If someone is already very, actively involved, they seem to be passionate about the things they're doing... So what we do is basically acknowledge them and empower them, and make them feel like "Okay, you're now part of this, and your contributions will now impact a lot of people."

Obviously, there's the financial part of it, too. Vue is still independent. We have a decent number of sponsorships, and we redistribute them among the team members. So many of the maintainers who work on Vue now, they are sponsored through our Open Collective, or directly through GitHub Sponsors. So we basically redistribute the sponsorships coming into Vue to people who actually work on Vue. That helps, but again, Vue is a very loosely organized team. So people would come and go.

\[24:00\] We have quite a few people on the team who've been with us for close to a decade. So Edoardo, who maintains the router, and Pinia, our official statement management library - he's been with us like forever. One of the earliest to join, and he's still working on things. And we also have people who've maybe contributed very actively for a year or two, and then they just disappeared... Which is totally fine, because that's how open source works.

**Jerod Santo:** That's how it works, right?

**Evan You:** Yeah. So it's a combination of people who joined, and just stick around, or people who joined and left, but they still left something really valuable to the project. So for Vue, it's very -- I would say it's very unintentional. Like, we're really lucky to have these people.

**Jerod Santo:** It kind of just happened.

**Evan You:** Yeah, it kind of just happened. For Vite, I would say it's a bit different, because I think once it shipped to version two, I was aware that now I have to basically split my attention between Vue and Vite. So my original plan was "I'm going to go back to focus on Vue", because we still hadn't shipped Vue 3 at that point. I basically took this huge detour. People were waiting for Vue 3, but I ended up building Vite, as kind of a -- maybe as a way of procrastination.

**Jerod Santo:** Was anybody mad about that?

**Evan You:** I don't know. I think it turned out to be a net positive. You wait a bit longer for Vue 3, but you end up also having Vite. But the idea was "Okay, I need to go back and focus on Vue 3 now, so I need someone to sort of help me take care of Vite, in a way." So I made an explicit post, I said, "Okay we're setting up a team for Vite. If you're interested, you should join." And that was, I believe, when -- at that time I think Matias was already very actively involved. He started -- I think his first few PRs were mostly documentation. He was just helping us on like adding additional details in the documentation, started digging into the internals a bit... And he was very, very active with the community. He was on the Discord server... He was basically everywhere, answered all the questions. So I was like "Well, this guy seems very enthusiastic about Vite. I should probably encourage him to kind of help us with the long-term maintenance of it." And he was really happy to join, too.

So yeah, so Matias became the very -- I think he was literally the first team member, and also played a very critical role in the initial sort of growing the community and making these additional team members feel they are being welcomed and appreciated.

**Jerod Santo:** Yeah. I've met Matias. He is very good at that. Lots of enthusiasm, lots of care and kindness. It just kind of oozes out of the guy.

**Evan You:** Yeah.

**Jerod Santo:** When you go in to offer him something like that, what is the Vite side? What's the offer? What does he get? Do you get your name on the core team? Do you get this, that, or the other thing? Is there some sort of formalization of what that looks like, or is it just like "Hey, why don't you do more of what you're doing?"

**Evan You:** I think for the initial -- when we set up the team, it was purely voluntary. We were basically saying, "Okay, you get to call yourself a team member, and that's it."

**Jerod Santo:** Right. Which is not nothing.

**Evan You:** \[27:42\] Yeah. But yeah, it was very much like "You're already doing this, so we just want to want you to keep doing this for the recognition of being a team member." We have no plans around how it will turn out in the long run, but I think a very lucky -- also, a very lucky event happened, because StackBlitz, which is now the company behind Bolt, they actually haven't come up with the idea of Bolt back then. That was like in 2022. They were mostly still working on their web containers technology. StackBlitz, the dev environment. So it's an in-browser development environment, and they were looking for a dev setup that just starts off faster than WebPack, and they found Vite. So they were really excited, and they started looking for people who are working on Vite. So they actually hired Matias to work on Vite full-time. So that was what allowed Matias to be able to spend a lot more time on Vite. So that's more three and a half years ago.

**Jerod Santo:** Quick side story on StackBlitz - we had them on JS Party a couple of times, because doing cool stuff in the browser... And the second time, I think, or maybe the third time that one of them came on, it was to talk about a tutorial kit. Tomek Sułkowski came on. And after that show, he's like "Hey, we have this cool thing that we're just about to launch called Bolt. Do you want to try it out? Do you wanna see what it is?" And this was before -- I mean, they had no idea. Because I mean, Bolt just was like a rocket ship; just stratospheric launch.

**Evan You:** Totally.

**Jerod Santo:** But they had no -- I mean, he's just like "This is a little side project we're doing, check it out." And I'm like "This thing's pretty cool." And he's like "Yeah, we're gonna ship it next week. We'll let you know how it goes." And now they've renamed. You know, it's formerly StackBlitz -- I mean, it's still out there, I think, but... Talk about a pivot. That's an amazing \[unintelligible 00:29:42.05\] I'm sure.

**Evan You:** Yeah. They actually debuted Bolt at ViteConf. They also showed me like a week before. And I was like "Well, this looks cool, but I'm not sure how far this is going to go." Because I think initially, the -- at that time, I was still a bit skeptical about the general capabilities of LLMs in general. But everything changed.

**Jerod Santo:** Yeah. That's funny, because when he showed it to me, I thought the same thing. I'm like "This is neat." It seemed like a kind of a cool toy, was my thought. "This seems like a good example of something that the StackBlitz team could do."

But I never expected it to be like a product that would just take over their entire company. So congrats to them, of course... And I'm sure they were pleasantly surprised that it went so well.

**Evan You:** Yeah.

**Jerod Santo:** So what about this documentary? This is the second time you've been documentary-tized. Didn't they do a Vue.js documentary?

**Evan You:** They did. It's actually from the same team.

**Jerod Santo:** Yeah, exact same team. Round two. What is that process like, as like -- an everyday hacker, all of a sudden it's like, put on some nice clothes, going to get interviewed in front of hot lights, and stuff...? Is this something that you enjoy, you put up with because it's good for the projects? How do you approach these things?

**Evan You:** Yeah, again, the two times - it's the same team, but it feels quite different. For the Vue one, the team was largely sponsored by Honeypot. And when they came to us -- when they came to me about the Vue idea, I was like "Sure, sounds great." Because Vue was -- I think the Vue documentary was done... I can't remember exactly which year it was, but I was still living in suburban New Jersey. And they actually managed to fly all the way to New Jersey, come to my house to film it. But the vibe was still quite casual. They filmed me like making coffee, and everything...
**Jerod Santo:** Yeah.

**Evan You:** And then we I think we met again, when I was speaking at LaraCon in New York, 2019. They went to the LaraCon venue and filmed a bunch of stuff there. Taylor Otwell was actually in that documentary, too.

**Jerod Santo:** Oh, nice.

**Evan You:** \[31:58\] But they were very professional back then. I mean, the director, Josiah, he's amazing. The thing is, they are able to not only make fancy edits, but also, they actually understand the story behind these things. They ask the right questions, and they're able to properly tell the story behind the technology. I think that's the impressive part. So this time when they approached about another documentary -- actually, this time... This is after Honeypot actually folded, so they now have to work on these documentaries by securing their own funding. So they now have a new company. They do need to basically secure sponsorships or sponsors to make these documentaries.

So they approached me, and basically just tried to ask me, "Do you have any ideas? Can you introduce us to some companies or projects that would be looking to make documentaries about their technologies?" And I was like "Hey, we can make one about Vite."

**Jerod Santo:** Gotcha.

**Evan You:** And they were like "Wait, this sounds like a great idea. We should totally do this."

**Jerod Santo:** Yeah. So you and/or VoidZero - you bankrolled it, basically? Or how does it work?

**Evan You:** Yeah, so VoidZero obviously is supporting the documentary. We are the main sponsor, but we also managed to secure a few sponsorships from other companies that are either using Vue or actively involved in the Vite ecosystem. StackBlitz is one of them. Sentry, Shopify, Bolt, and Supabase.

**Jerod Santo:** Nice.

**Evan You:** Yeah. So we have quite a few interesting companies backing the documentary, too.

**Jerod Santo:** Yeah, that's really cool. I didn't know that side of it. I knew that they had renamed. I wasn't sure about the rename, Honeypot to CultRepo. And that's a really cool model, because they do a great job of telling you stories, and making them interesting. That's always the thing; you're like "It's the story of an open source project. It's a bunch of nerds writing, code. How could that be interesting?" But actually, it is interesting, and they do a good job of making it that way. So I think these things need to exist and continue to be made. And so hopefully this works out for them and for you all, to be worth it as an effort.

**Evan You:** Yeah. I think they are working on quite a few additional ones in parallel. I think they did one with Rails, I believe...

**Jerod Santo:** Yup, I think that one's out there. And then we just helped promote the Python documentary as well.

**Evan You:** Yeah, the Python one, the Angular one... They're doing a lot of great stuff, and I think it's definitely needed for the dev community.

**Jerod Santo:** Yeah. It's so cool to be featured as a person who writes software, to have your story told... Especially because it's never the story of one person. Like, maybe it starts with Evan You, but then the story actually weaves in and threads through all these people's lives, you know?

**Evan You:** Totally. Yeah.

**Jerod Santo:** It's really neat.

**Evan You:** Yeah. I believe this is the great part. In a way, every time I see these documentaries starting with a big shot of me, I feel a bit uneasy... \[laughter\] I feel like I don't want these documentaries to be about just one person. In a way, open source is about people, so these documentaries should be about people.

**Break:** \[35:46\]

**Jerod Santo:** So I've been curious about VoidZero, since you made the announcement this is a new direction for you, I suppose... Because prior to Vue, weren't you working at a big tech company? Was it Facebook, o...? Where were you working?

**Evan You:** I was working at Google when I created Vue.

**Jerod Santo:** Right. And then you went indie, and open source...

**Evan You:** Yeah. I left Google in 2014. But I left Google to work at a startup called Meteor, which was also a startup working on open source JavaScript framework.

**Jerod Santo:** Meteor.js?.

**Evan You:** Yeah.

**Jerod Santo:** I didn't know you worked there. Okay...

**Evan You:** Yeah. I spent less than two years. So I left Meteor in 2016. So I officially became fully independent in 2016. That's when I started working on Vue full-time. Which means I've been working independently for like nine years now.

**Jerod Santo:** Almost a decade.

**Evan You:** Yeah. That's a long time.

**Jerod Santo:** And you're kind of a poster child for "This can work." The open source independent thing with sponsorships can work. Now, it doesn't mean it's going to work for everybody... And in fact, for most people it doesn't work in that particular model. But for you, it was working. So you're kind of inspiring to a lot of us, to say "Okay, well, if Evan can do it and he can get his commercial support enough to stay independent and still provide for his family etc. maybe the rest of us can, too."

**Evan You:** Yeah, I've always considered myself lucky to make that work. Because to be honest, when I started doing it 2016, I had no idea if it was going to work.

**Jerod Santo:** Yeah.

**Evan You:** I was like, YOLO... And was I like "I want to just work on this thing full-time, and let's see how long it lasts. Worst case scenario, I'm just going to go back and look for another job." But it was just so fulfilling to be able to work on something that -- you just work on that one thing, you know?

**Jerod Santo:** Yeah. Yeah. It's really cool. That being said, I think we can probably count maybe on two hands - maybe not just one hand, but two hands - the people that have made that work, like you have. It is the exception, it's not the rule.

**Evan You:** It is definitely an outlier kind of thing. In fact, a lot of people, a lot of open source maintainers have came to me over the years, asking for advice, "How can we make this work?" And in a way, my response was always "Look, it's hard to replicate exactly what I did. There's no real formula that you can just follow."

**Jerod Santo:** Yeah.

**Evan You:** It depends a lot on the kind of project you have... Even if your project is like wildly popular, what kind of layer it sits on also kind of determines a lot... Because for a framework like Vue, you get massive exposure and constant interaction with your users.

**Jerod Santo:** Yeah.

**Evan You:** And people also kind of -- it's easier for people to feel more closely associated to a framework that they use every day, compared to something that sits lower level. The more lower level it is, the more difficult for you to get this sort of connection with your users. Like, an example I've always used is Babel, because I was friend with the maintainer of Babel for a while. Henry Zhu, he was the lead maintainer of Babel for a while. And they've always struggled with funding, because even though almost everyone used them, used Babel, because it's just one of the dependencies that kind of, once you set it up, it just sits there... You don't think about it anymore. It was extremely difficult for them to do the same kind of model Vue is doing, because they just don't get enough eyeballs.

So yeah, over the years we've seen a few other examples successfully sort of making this work, but... Yeah. I've also seen so many cases where they're trying to do what we do, but it's very challenging.

**Jerod Santo:** Yeah. Interestingly, I think WebPack was one that was making it work as well, maybe because again, they're right there, in your face. It's a build tool that you use every day. And for a long time -- well, they had a good evangelism as well, and large corporations using them, and so it became kind of cool to support WebPack, because it was an example of like supporting open source back in the early days of that movement. What do you think about a lot of these efforts to somehow calculate out dependencies, and maybe distribute out, redistribute from the top down, like from the Vue.js down to, or from the Vite to the Babels of the world, and kind of do it that way? Because there's so many fundamental aspects of software that are completely invisible to the end user, but they aren't usually invisible to the one who pulled them in originally, and so maybe we can do it that way. I know there's been lots of efforts to do that, I wonder your thoughts on it.

**Evan You:** \[42:18\] Yeah, there is a project called thankyou.dev, I believe. Vite and Vue are actually on there too, but we receive such a small fraction compared to what we receive from, let's say, GitHub Sponsors. And given the amount of Vue's usage in the wild, I can kind of imagine how little maintainers of smaller packages actually get.

I think the intention is obviously good. The idea of consumers open source should try to support the dependencies you're using... In theory, that's what everyone should do. I think the fundamental problem is the donation or sponsoring open source is just not a thing in many of these companies. So if we think about like who are actually getting the biggest value out of open source, it's directly proportional to the scale you're operating at.

An individual developer, if you're just making a sort of side project, you're using open source, you're not even creating value yourself. So asking them to donate to the open source project - maybe they'll like donate one or two bucks a month. In the grand scheme of things, that's negligible. But if you think about a big corporation that's making billions of revenue, they're also using so much open source.

I guess for larger projects like Linux or Kubernetes, they can operate it in a very, very different way. They have foundations, they have bigger companies just backing those foundations... But many other open source projects kind of fall into this category where you're not big enough for these big companies to say "Hey, we need to somehow have a strategic sort of thing to support it." But you're also large enough that you have such a maintenance burden that it's no longer sustainable if you're just one person; or people just like spending after work hours, spare time. Because you could have been spending that time with your family. But now you're somehow obligated to support all your free open source users.

**Jerod Santo:** Right.

**Evan You:** So I think that's the unfortunate sort of state of things for a lot of open source projects, is that they are creating value for these commercial entities/businesses that's actually sort of using their open source projects. I wouldn't say it's -- it's close to freeriding in a way, but it's also because in a lot of ways we start a lot of these open source projects just because we want to share with people, we just want to put the stuff out there. But then people unintentionally find themselves in this awkward spot where your thing kind of blew up. It's making a lot of impact. Now you have a lot more responsibilities. But it's also very difficult to make the companies that are getting the most out of the thing you create to sort of contribute back properly. I think that's a systematic challenge in the way a lot of independent open source projects work nowadays. Obviously, some of them eventually start companies to sort of turn it into a real business. But it's just not a thing that everybody wants to do, and it's also maybe not feasible for a lot of the projects.

**Jerod Santo:** \[45:59\] Yeah. I think the corporate open source support movement was had some steam up until the market correction, when money became tight. And then it was like "Well, now we're doing layoffs, and now we're tightening the belt. We're not going to give money away that we don't have to." And so it's kind of lost steam. But was your then idea with VoidZero? Because probably Vite could just continue like Vue does. Like, you probably just do the support -- I'm not saying Vite is VoidZero, but you yourself and your team have made it in terms of support, I'm assuming, continuous.

**Evan You:** Yeah, I think for Vite - it actually has a similar challenge, because it's a very high visibility project, but it's not as... It's still a little bit different from Vue, in the sense that it's not a framework in itself.

**Jerod Santo:** True. But it has Evan You, and it's a command that you type into your terminal. Like, you're using it actively. It's not hidden from you. And so do you think -- I guess, where was your thinking with VoidZero and Vite? Was it like "We're not going to do the same model that we did last time?" Or did you want a new challenge, or were you bored? I wonder where you were coming from.

**Evan You:** Yeah, it's a combination of multiple factors. So one thing is my experience with the sustainability side of Vue is that the success of Vue is an outlier, and has a lot luck involved. The timing - the fact that Vue was able to become now the second largest framework has a lot to do with doing the right thing at the right time. And for Vite, we noticed that we were getting some sponsorship for Vite as well. But I guess for Vue the model was that I was still doing most of the work. I'm not trying to take all the credit, but over the years, I was still the main person that was driving Vue forward: making the main decisions, shipping the main features, and all that. So I was also making most of the financial decisions for the project. But for Vite, I essentially wanted to "Okay, how about let's make this thing a bit more decentralized, so that more people can actually work on it full time? So it's not me having to be fully responsible for the financial side of it." That was the initial hope. But then we realized, "Okay, this sponsorship model really, really has its limits." Over the years, we are able to call Vue sustainable. But if you think about the amount of users we have, Vue has like 2 million weekly active users based on how many people are using our DevTools extension.

**Jerod Santo:** Right.

**Evan You:** If we were a business and we were only getting the amount of sponsorships we get today, which is like less than a million a year... That's like -- right? If it's a business, it's not a very successful business.

**Jerod Santo:** Right.

**Evan You:** Yeah.

**Jerod Santo:** Successful open source project, not successful business.

**Evan You:** Yeah, in terms of conversion rate. So it's all relative, but... Imagine if you're a business with like 2 million users and you're only making this much. That's not a lot.

So for Vite, what I realized is -- actually, in terms of like sponsorship conversion, Vite is is doing worse than Vue, because it sits a layer lower. It's not a direct framework people interact with. So people have less sort of this idea, "I need to support the tool I'm using", because a lot of people are still using Vite through a framework. For example, they're using SvelteKit, they're using react with Vite, they're using Vue with Vite... So they're still thinking primarily about the framework, instead of this tool.

**Jerod Santo:** \[50:10\] Well, it's perhaps the Vue people also the people who are using Vite with Vue; they may already be supporting view and they think "Well, I'm already supporting these people."

**Evan You:** Yeah. Right. Exactly.

**Jerod Santo:** So that's possibly a part of it as well.

**Evan You:** Yeah. So for me, I was thinking, "Okay, I want to make Vite independently sustainable, aside from Vue. I never want to sort of just mingle/mix these two projects." Because when we decided to make Vite framework agnostic, I was like "Okay, Vite is going to be its own thing. It needs to find its own way, own path to sustainability." And on the other hand, I was also witnessing this trend where Vite is becoming this shared infrastructure between a lot of frameworks. So multiple different frameworks are building on top of Vite. So I saw this opportunity to say "Okay--" Because when we talk about the JavaScript ecosystem, it's always like churn, fragmentation, things come and go. Right? But it's quite rare for multiple frameworks to be betting on the same thing at the same time. And a lot of these people are smart people, that I also really, really respect, like Rich Harris, Fred, you know... So I was like "Look, people are betting on Vite. Vite is serving a much bigger responsibility. So I do foresee it also needs more substantial resources to support its long-term viability."

And then we started thinking about "What can we do to make Vite better?" And that's a lot of work when I think about it. And if we keep going the way Vue is doing, what I really worry about is what if we can't make Vite sustainable enough, and eventually people will just have to switch away from it when it is no longer well maintained... And that's another big churn for the ecosystem, because so many things already depend on it now. And I just don't want that to happen.

So I was thinking, "Can we find a way to a) leverage Vite to serve as this sort of gateway to more unification in the ecosystem, so we can maybe build more fundamental stack from the bottom up, to sort of leverage Vite to unify more things in the ecosystem?" At the same time, if we can make all the work on these parts sustainable through a business, I think that's better than seeing so many people just working independently on a bunch of stuff, supporting tools, and then they burn out, they give up the project, they walk away... And then the next group of people come in and come up with a new alternative, and this cycle just keeps going on for the JS ecosystem. Because I've seen so many of such instances happen in the past...

**Jerod Santo:** Sure.

**Evan You:** ...and I just don't feel like it's -- in a way, what I'm seeing is people keep redoing the work, and then they try to -- somehow, they try to figure out sustainability, and many of them fail. And then they give up, they move on to other things, and now we are stuck with an ecosystem of -- every problem has like five solutions, four of them abandoned, and now you have to try to find new maintainers, or new people, or a new developer will come up with a new project.

I think in the early days of the JavaScript ecosystem, having so many people just stepping up and creating solutions to problems - it's the strength of the ecosystem, and that's what made the JS ecosystem great.

\[54:05\] But over time, a lot of the problems have, in a way -- the ecosystem has matured. We are arriving at more conventions and best practices on some of these problems, that we can more or less consider solved problems. So we want to kind of find a way to provide a very solid solution to these soft problems, and we want make it well-sustained through a good business model... Maybe not a good business model, but at least the business model needs to be good enough so that people can stop worrying about like "Hey, will these people just one day burn out because they can't find enough funding and just walk away?" And I think the key to cracking that problem is to make the right people pay for open source. And that won't happen through donations. That is kind of the conclusion I sort of arrived at after all these years of working on independent open source.

**Jerod Santo:** Yeah. Well, that's a big thing to say, coming from you, because you're probably one of the best donation receivers out there. And if you say that, then it's got to be true. Okay, so VoidZero then... How does it work? What's the business model? You talk about these fundamental pieces underneath Vite, or like where are those lines draw... I have so many -- it's a cloudy thing to me right now. Please help me understand it.

**Evan You:** Yeah. So at VoidZero we're building a unified tool chain for JavaScript. So the scope is quite large, so we would cover -- so obviously, there's Vite, which is at the center of it... It's a dev server, it's also a production bundler... And then we have Vitest, which is the test runner. Then we have the linter, which is based on Oxc, and inside Vite, we were previously relying on ESBuild and Rollup; we rely on two different bundlers. There's a lot of reasons we did that, because of the technical limitations on both sides, and we just kind of have to combine the strength of both. So now we built our own Rust-based bundler called Rolldown, that kind of combines the strength of ESBuild and Rollup and WebPack. In a way, we needed the best bits of those different solutions that we just couldn't get them working together, but now we actually built something that would perfectly suit the needs of Vite itself, while being more powerful. And in order to support Rolldown itself, at the lower level, we have all the parser, transformer, resolver, all written in Rust, in the form of OXC, which is a collection of these lower level tools.

So essentially, we want to have this vertical, unified, integrated stack that supports from the parser all the way up to Vite, and then extend into test, lint, so that you can have a Cargo-like experience. If you've worked with Rust, when you start learning the language, the tool chain you use is Cargo, and it covers most of the things you need out of the box. For JavaScript, we never had that kind of experience. And in a way, we're so used to -- so when people get into web dev, the first thing you need to do is to decide which framework you want to use, and then which build tool, which linter, which test runner... There are a bunch of conventions and best practices, but still, it's a lot. People will feel lost when you just try to set things up for the first time. We want to see if we can provide a sort of more coherent and unified experience to that, so one unified tool chain to do all these things. And at the same time, we want to make sure this thing is well-funded, which means we are planning to do a business model where we want to charge from businesses actually making decent amount of money, instead of individuals.

\[58:30\] So we'll probably discuss more when we announce Vite+ as a product, which - the name of the tool chain is called Vite+, so... We'll share more details at the conference. But the general idea is this is not a thing that can be sustainable if you're only trying to get donations from individuals. We want to make sure that we are still keeping a very low barrier of entry.

Like, if you're open source, if you're an individual, if you're even maybe a small business, or educational, academic entities, or governmental entities, you should be able to just use this thing without any restrictions. But if you are a business that's having a decent amount of revenue, these are the targets that should be actually paying for the majority of the shares to support these efforts. So this is something we're trying to explore. And in a way, it's also my hope of finding a model that can sort of -- because we haven't really seen other projects doing this kind of thing. I think there are maybe a few examples in the wild, but this is something we're trying to explore, to see if we can make the right people pay for the -- essentially, we want the businesses to be subsidizing the wider use of these infrastructure-level pieces in the JavaScript ecosystem.

**Jerod Santo:** And so to start this, did you raise money?

**Evan You:** Yes, we did. Yeah.

**Jerod Santo:** And the reason for that was because you needed time to explore this, or...?

**Evan You:** Yeah, so the scope of this whole vision is obviously much bigger than what we can cover with just the sort of sponsorships or donations, like we did with Vue. If you want to build this whole thing from the ground up, you need a dedicated team of people, full-time efforts. And it also needs to be more structured than the voluntary model that Vue did. Because with Vue, we never had any sort of goal -- like, for Vue, there was no concrete goals of like what the end form of Vue should be. In a way, Vue's development was very much sort of user-driven or community-driven, an a way like we work on Vue, we fix issues, and then we discover problems users are facing, and then we propose solutions to it, and then we just evolve organically.

So Vue doesn't have sort of a fixed scope or a very concrete roadmap of what you need to achieve, say, in five years. But for this, I guess when I started having this idea, I realized "Okay the things you want to do... It's a lot. It's a pretty big scope if you want to build a unified tool chain for JavaScript. And it's something you need a team of full-time members, that's fully dedicated to this goal, and work closely together." And the best way to do that is still to form a business, and have them properly compensated, so that in the short term we don't need to think about "How can we negotiate sponsorships, or how can we get enough individuals to donate to us?"

**Jerod Santo:** Gotcha. And so when you received the money, did you go out and then start hiring members of the Vite community, basically?

**Evan You:** \[01:02:02.28\] Yeah, so we hired quite a few team members from Vitest, from Vite, but we also had a few folks from ByteDance. They were working at the web infra team on ByteDance, so actually a few of the earliest members of the company worked on the RSPack project at ByteDance, so they have a lot of experience and expertise in the Rust4js tooling, which helped us kick off the initial efforts in this area. So the folks working on Rolldown actually worked on RSPack.

**Jerod Santo:** Gotcha. Funny story, I used to call it RSpack because no one ever told me how to pronounce it, and I had to say it on the show, and I'm like "It looks like RSpack." They lowercased the S; it doesn't make any sense. But RSPack makes way more sense than RSpack, for sure.

Vite+ - is it Vite plus other features? Is it Vite, but you pay for it? Is it bundled? Is it Vite is multiple things, and we put them together and package them, and that's what you use? What is Vite+? I know you haven't actually announced the details, but give me a shape of the object.

**Evan You:** Sure. Yeah. So Vite+ is a drop-in superset of Vite.

**Jerod Santo:** A drop-in superset. Okay.

**Evan You:** So if you're using Vite today, you can basically alias Vite to Vite+, and everything will continue to work the same way, but in addition to ViteDev and ViteBuild, you can now also do ViteLinked, Vitest, ViteBench, ViteFormat...

**Jerod Santo:** I see.

**Evan You:** Yeah. So it comes integrated with a lot more capabilities. So it's a tool chain, instead of just a build tool.

**Jerod Santo:** And where and when is Vite+? Is Vite+ out there? Is it going to be out there at ViteConf, or...?

**Evan You:** So we're going to -- yeah, we're going to talk about more details. We're probably going to give a first demo of what Vite+ looks like in action at ViteConf.

**Jerod Santo:** Okay.

**Evan You:** Right now it's still in active development, so we probably want to save the sort of big reveal at the conference.

**Jerod Santo:** Sure. Absolutely. So after the conference, if I'm Jerod, the open source hacker, and I want Vite+, I'll be able to use Vite+ without any money, with money involved...? I'm just Jerod, the dev.

**Evan You:** Jerod the dev, if you're just an individual hacker, you can definitely use Vite+ without any restrictions.

**Jerod Santo:** Okay. Now I'm Jerod, the well-funded Fortune 500 company. I cannot use Vite+ without money, correct?

**Evan You:** So you can still try it, you can still just experiment with it, but if you're using it in any commercial capacity, you'll need to talk to us.

**Jerod Santo:** Right. Are the individual components of Vite+ separately open source, or no?

**Evan You:** Yes, they are.

**Jerod Santo:** So it's the packaged deal that is --

**Evan You:** Yup, yup. So the underlying components, which includes Vite, RollDown, OXC, Vitest, they remain open source, remain exactly what they are today. Vite+ is a combination of these things, plus a few more Vite+ only features. So we are actually working on an integrated task runner/caching system for monorepos, which tightly integrates with all these underlying tools. So that allows us to smartly infer the input for each task that you run through the system. So we smartly cache the outcome of the -- for example, if you run vitebuild through Vite+, we know exactly what the inputs are and outputs are, so we just cache it automatically. So if you edit a file, but it doesn't actually affect the task you're running, you would just get a cached output automatically.

**Jerod Santo:** Okay. And that will be a Vite+ thing. So does that require a VoidZero server somewhere in there?

**Evan You:** It doesn't. Right now it's local.

**Jerod Santo:** Okay. Do you imagine a world in which VoidZero servers are involved?

**Evan You:** \[01:06:15.19\] In the future maybe, but we don't want to make that a requirement. So these will be probably more like value-added services, where it will make your... Like, remote caching with the system definitely will require some sort of server setup, but we'll definitely make it feasible to use your own storage backend.

**Jerod Santo:** Gotcha. So as Jerod the Fortune 500 software team, and I want to use Vite+... Do you have it figured out in terms of my understanding of that whole deal? Where do you interface to me when I know I have to actually come give Evan and his team money? How does that -- have you got that figured out yet?

**Evan You:** So I don't want to get into too much details, but...

**Jerod Santo:** Okay.

**Evan You:** Yeah, yeah. But we'll have a more formally documented "How does this license work?", the FAQ and everything, we'll have that up on the website by the time we announce it.

**Jerod Santo:** Yeah. But Vite and its subcomponents, they all remain open source licensed?

**Evan You:** Yes.

**Jerod Santo:** And so this new Vite+ will have its own proprietary license that you will tell more details about at ViteConf, right?

**Evan You:** Yeah, yeah. So we'll probably call it source-available still. So you'll be able to look at the source code, open issues on GitHub, and everything. But we're trying to come up with a license that would make as many people able to use it freely as possible, but still allow us to capture value from the right group of users that we believe who owe the most to supporting such infrastructure tooling for an entire ecosystem.

**Jerod Santo:** Mm-hm. And if this project succeeds, you believe or you hope that it will be reproducible by other people, right? Whereas the previous one, Evan succeeded with Vue and with that sponsorship support, but it wasn't really a pattern that people could necessarily follow, unless they were also outliers...

**Evan You:** Yup.

**Jerod Santo:** But your hope with VoidZero, it seems, and with Vite this time around, is "What if we can build something in such a way that you could take that pattern and perhaps in your neck of the woods or your little open source area of the world, reproduce it and create a sustainable project"?

**Evan You:** Yeah. If we can sort of be the first example of that, we can also normalize the acceptance of such a model in the corporate world, where... You know, there will probably be some challenges for companies to sort of realize "Okay, this thing is actually using a different license." And if we can make this model sort of acceptable in the corporate world, where next time they see it, they go "Oh, they're doing the same thing that Vite+ is doing..." It makes it easier for other people to replicate this.

**Jerod Santo:** So Vite is open source and Vite+ is source available.

**Evan You:** Yeah.

**Jerod Santo:** Cool. Well, I hope it works. I'm excited to hear more as you announce the details at ViteConf. I appreciate all the efforts you've put in over the years, and I guess the trailblazing that you've done with Vue, and now with Vite; hopefully, VoidZero is yet another trail blazed, and one that people can follow after... And I wish you all the success in the world.

**Evan You:** Thank you.

**Jerod Santo:** Anything I didn't ask you that you'd like to get on the record, or say to the open source world before I let you go?

**Evan You:** Uhm, probably not. I mean, I probably said more than I was planning to, but...

**Jerod Santo:** \[laughs\]

**Evan You:** But yeah, we were planning to announce all of this at ViteConf anyway, so... Yeah. Well, there will be a lot more details on the technical front; how Vite+ feels, how it works and everything at the conference, so make sure to tune in.

**Jerod Santo:** Well, I will have to wait, but nobody else will have to. By the time this is out to our listener and to our viewer, check out ViteConf, check out the Vite documentary, because it's out there, it's to be watched... I've seen a rough cut and it's very good, you're going to enjoy it. So definitely tune in and see what Evan and his team are up to. Alright, Evan, thank you so much. This has been awesome. Talk to you soon.

**Evan You:** Thank you.
