**Jerod Santo:** Alright, we are joined by Tobias Koppers... Thanks for coming on Maintainer Spotlight, Tobias.

**Tobias Koppers:** Hi, thanks for inviting me.

**Jerod Santo:** Y'all may not know Tobias's name - or maybe you do - but you definitely know he is the creator of Webpack, which is THE build solution for modern applications. Tobias - working on WebPack full-time, is that right?

**Tobias Koppers:** Yes, that's right.

**Jerod Santo:** How long has that been?

**Tobias Koppers:** Since three years or so, I think.

**Jerod Santo:** That's what we would sometimes call "Living the dream", and then sometimes the guest laughs, and then sometimes they agree. \[laughter\]

**Adam Stacoviak:** Is it a dream, Tobias?

**Tobias Koppers:** I think it's a dream. It's really cool, because you can work at home, be your own boss, don't have pressure, don't have deadlines, can decide what you want to do... I think it's really great to be self-employed, but without customers, or without...

**Adam Stacoviak:** Bosses.

**Tobias Koppers:** We have customers, but it's more like indirect customers.

**Jerod Santo:** Right.

**Adam Stacoviak:** It's very vague who is being your boss today, right?

**Tobias Koppers:** My wife...

**Adam Stacoviak:** It might be someone in the issues, it might be somebody on Twitter... It might be you. What's some of your background to -- if you're living the dream as an open source developer, leading WebPack, what was some of your career history? What did you walk away from to do this?

**Tobias Koppers:** I've studied computer science and worked as a C\# developer, hardware-related stuff... I started WebPack as part of a side project to \[unintelligible 00:02:40.17\] so I've only worked for a short period on a real company, and then I open-sourced it.

**Jerod Santo:** It's funny that you say you don't have customers, because if you look on your GitHub repo, WebPack has 4.1 million dependent repositories. I mean, to say it's arrived or reached critical mass would be a massive understatement. 53,000 GitHub stars, over 4 million dependent repos on GitHub alone.

It's also got to the point where it's reached so much usage that people are very willing to criticize it, complain about it, make memes... I'm guilty of a few memes, although they're always in good fun.

I'm just curious if at this stage in WebPack and your career - does the public opinion of WebPack, some of the complaints, some of the criticisms or the jokes, do those get to you personally? Or do you not care about that?

**Tobias Koppers:** I don't care that much about that. I think because it's so large, you always get negative feedback. You get few positive feedback, because nobody says positive stuff about something... You get more negative feedback than positive feedback, I think, especially on Twitter and other platforms. But I tend to ignore the negative feedback a lot, not take it personally, more take it as ideas of what you can improve, or what can be done better.

**Jerod Santo:** \[00:04:16.12\] How do you accomplish that? ...because this is something you work on all the time. So something that happens is when you dedicate a lot to something is you can begin to identify, like "I'm the WebPack guy." I always think of Daniel Stenberg, who's like -- cURL is his life, and he said this is his life's work, is cURL. He identifies very closely. So I'm curious, if you don't identify yourself as the WebPack guy, or if you just have thick skin and the criticisms brush off? How do you not focus on the criticisms?

**Tobias Koppers:** Yeah, I think I identify as the WebPack guy. It's like my baby, so it's kind of yes... But I'm not the guy who takes it seriously that the negative feedback is bad. Often it's more like all the frustration - they say something bad, and I have the ability to ignore this, or... I don't know. Difficult to say.

**Jerod Santo:** It's a blessing right there, to be able to do that. Some people can't let it go... So I think that's a great characteristic trait for the position that you're in, to be able to let that slide off your back or not affect you. It's gotta be helpful.

**Tobias Koppers:** It's helpful, yeah.

**Jerod Santo:** What about the other side? So when you receive that much criticism, like you said, it's because there's just so many people using your software. Like I said, formally dependent repos; everybody uses WebPack either in love or in anger, wherever they are... Does the sheer magnitude of WebPack's influence on our industry and the amount of users you have - does that weigh heavy on your shoulders?

**Tobias Koppers:** You're asking difficult questions... \[laughter\]

**Adam Stacoviak:** That's what you're here for!

**Jerod Santo:** We're curious, we're curious...

**Adam Stacoviak:** Yes, yes.

**Jerod Santo:** He's like, "I've never thought about it... Now I'm starting to feel like it a lot."

**Tobias Koppers:** I think I'm more proud of the influence that WebPack has on the industry. We've made some decisions and they led to industry standards, like the code-splitting for example, or on-demand loading. In 2012 we started with on-demand loading of parts of parts of the application, and it took five years for this to become mainstream. I'm pretty proud that it's something I started to engage or to promote. It's become an industry standard, and similar for other things, like CSS Modules as part of the module graph, or things like that...

I think we had a lot of influence, and I think it's cool to influence what the people or the community like, or what the ecosystem is about. It's cool to have this influence in the whole JavaScript community.

**Jerod Santo:** Absolutely. And well-deserved influence, I would say.

**Adam Stacoviak:** I think about doing this kind of work, and I just think, like, what motivated you to -- I guess the sheer size of WebPack and its influence is one thing, but what motivated you to want to do it full-time? Was it just simply WebPack? Was it the allure of this lifestyle? What made you wanna do this?

**Tobias Koppers:** Yup. Before I started full-time, I worked like ten hours per week on WebPack, so part-time... And it was more work involved than I could do in the part-time I had, with having a real job. At this time, Sean started collecting money to Open Collective and trying to fund the WebPack project.

\[00:08:04.04\] My contract ended, and I decided to not continue working at my existing job. It was a risky step, but I tried to work at least a few months from the existing money of the WebPack Collective, try to work a few months full-time, to make progress, more and more features, WebPack 2 was at this time active... So yeah, I started with the idea of only working a few months, but it took on and we got more funding, so -- I liked working on WebPack full-time, so I just continued working on that.

It was a risky step, because at this time we only had money to fund me about a few months (five or six). I wrote about quitting my job, and \[unintelligible 00:08:56.12\] I have a family, and I've got a baby at this time... But I think it was a good idea and a good step to do this, and work full-time on this. I think I've made a lot of progress and brought WebPack forward with working more on this.

**Adam Stacoviak:** Hearing the behind-the-scenes on that is really interesting, because as you'd said, you have a baby, so you've got a lot of responsibility... And it sounds like you were the first funded person to do WebPack full-time, which I'm assuming that since that time you've been fully funded by WebPack... And I guess part of me is kind of curious, how do you get paid? Is it once per month? Who cuts the check? How does that work for you all?

**Tobias Koppers:** Yeah, once per month... And the bill is paid by Open Collective. So we're collecting money through Open Collective, and once a month I decide who gets how much amount of money; it's automatic, depending on contribution on GitHub. So I pay myself, and I pay the other contributors...

I pay myself a fixed wage, and the other contributors get money depending on the contributions they made to it, depending on how much they do each month. Yeah, basically that's how it's working.

**Jerod Santo:** So you've been full-time for three years, and WebPack's budget has continued to increase... I believe it's around $500,000 annual estimated, according to the current Open Collective. Have you gotten a raise?

**Tobias Koppers:** If I got what?

**Jerod Santo:** Have you ever gotten a raise, like you paid yourself more money year two? "I'm doing a good job, I'm giving myself a raise"? \[laughter\]

**Tobias Koppers:** It's not set amounts that we have, it's more like we get about the money monthly which we need to pay all the contributors. So it's kind of an equal situation currently. With Trivago sponsoring us a lot, we have like 2k a month extra we can save, but I also think it's important to make some kind of savings for the future, if some sponsors go away, or whatever happens... So that you can pay the contributors and paying myself for longer than the sponsors are there. More like a long-term investment into the future... Although it makes sense from a sponsor perspective, because most sponsors want to have a long-term support... But it's for the project itself a good idea to make some long-term guarantee.

**Adam Stacoviak:** Yeah. We definitely wanna dive deeper at some point into the value-add for those brands who sponsor WebPack, for sure, more deeply... But I'm curious if you would say that you feel like you've sacrificed quite a bit to be a part of WebPack. Would you consider what you're doing a sacrifice?

**Tobias Koppers:** \[00:12:05.03\] I don't think it's a sacrifice. I want to work on this, and I do it for fun, and for my work, for my job... So I'm not sure...

**Adam Stacoviak:** Let me frame the question a little differently... Because the reason why I'm asking you this is not to give you a chance to say "Oh yes, I sacrifice greatly for the community. They should love me", it's more like - you know, there's so much that happens in open source because of people who truly care... And often they're doing these things in sacrifice and not knowing they're actually sacrificing.

I say that because there's so much in open source that happens because of goodwill, not a direct "Tobias puts out work, Tobias gets dollars to survive himself, his family, to provide, to invest in his future, plan for retirement etc." There's so many things that layer into people's careers and lives and how they accumulate wealth etc. to just live there and enjoy their life. And I ask you that because I see a lot of sacrifice in open source... Now, I would (from my perspective) say that it seems you've sacrificed.

**Tobias Koppers:** Honestly, I see often that most maintainers \[unintelligible 00:13:10.03\] But I hope that WebPack is at least a little bit better; we pay our contributors, we pay myself... Maybe the contributors or myself don't get what's worth the work, but I think at least we get enough to make it not as sacrifice -- you probably get more if you're working for a company in the industry; if you want to get rich, then don't work for open source...

**Adam Stacoviak:** Right.

**Jerod Santo:** Right.

**Tobias Koppers:** But at least you get something back, and it's not totally worthless work.

**Adam Stacoviak:** Well, that's the thing though - there are people in open source that are getting rich, too. That's really happening out there, right?

**Jerod Santo:** They're not sacrificing.

**Adam Stacoviak:** And it's also this opportunity cost... It's like "Well, you're doing this, and you're costing yourself an opportunity option elsewhere."

**Tobias Koppers:** Yeah.

**Jerod Santo:** I think I would frame it as a trade-off versus a sacrifice, because like Tobias said at the beginning, he's working on something he loves. He has a massive amount of influence in an industry that he cares about, he gets to create his own workday... So there's a lot of things that he gets as being where he is. Maybe he's sacrificing on salary, but he's receiving benefit on something that's potentially more important to him. I'm not putting words in your mouth, but I think that that's how I look at it.

**Adam Stacoviak:** Yeah. I'm glad you said that, because that's what I'm trying to figure out... Because as we do this show, and we're thinking, okay, there are other future maintainers or current maintainers out there that are like "I just need to try. I need somebody to cling to", and Tobias has got some wisdom; he's done this thing, he's stepped off in these ways, and... It's like, "How do I do those things with some assurances, as well? How do I have a frame of reference for my future in open source?" Thinking about the listeners listening to this show...

**Jerod Santo:** Right. So WebPack is unique insofar as it has gained a substantial amount of financial backing, which many projects never reach that. Many open source maintainers, like you said, Adam, they struggle to reach at least financial sustainability for their projects... And WebPack has gotten there. Now, "there" comes with other problems; we'll get into those. But Tobias, in your eyes - like I said, a $500,000 estimated annual budget according to the current sponsors, and all that kind of stuff... So not an insignificant amount of money - like you said, maybe not as much money as value that WebPack's bringing - though I think that it's really low... But in your eyes, how did you get here? How did you, the team of WebPack, get to this place where you have large corporations sponsoring you in substantial sums? What got you here?

**Tobias Koppers:** \[00:16:07.27\] I would say Sean got us here. He started all the ideas about going to companies \[unintelligible 00:16:13.04\] I also think we had a good timing, because the community or the ecosystem and the companies are starting to invest more in open source, and care about open source... And I think the mentality of companies changed in the recent times; they're more willing to pay/invest into open source maintaining or open source funding. So it's probably luck, and... Yeah, it's also Sean - he did a good job in going to companies and asking them to fund us and sponsor us.

Also, the visibility of the company scaled from all those sponsors and the good citizens. Companies need more workers, and recently it's gotten more difficult to get good employees, and so it's also a good advertisement for getting employees for companies. For us, it was very good timing, and luck, and... Probably we also did a good job in our product, but I think it was much luck, and Sean.

**Jerod Santo:** When you say Sean - that's Sean Larkin. We've had him on the show; we'll put that old episode in the show notes. It was probably a couple years ago now...

**Adam Stacoviak:** 233.

**Jerod Santo:** Even back then, he was relentlessly enthusiastic about WebPack... And I even would joke that if you can't figure out your WebPack config, just complain about it on Twitter and Sean Larkin will...

**Adam Stacoviak:** Magically appear. \[laughs\]

**Jerod Santo:** ...swoop in and fix it for you.

**Adam Stacoviak:** Yeah... That was 2016. December 2016.

**Jerod Santo:** Yeah. He may have invented the -- if you look at the core team on your guys' GitHub, yourself, Johannes Ewald, who's on loaders and plugins, you have Kees Kluskens on development, and then Sean Larkin on public relations... And I think back then -- it's pretty avantgarde for Sean to be a PR person for an open source project... And like you said, he convinced a lot of these companies to bring money to the table. Where did Sean come from? How did you get him on the team? Did he drop out of the sky? Did you convince him that WebPack was the bomb? How did you get Sean involved?

**Tobias Koppers:** I think he basically joined by himself, so it's not that we went to him... We weren't organized at that time when Sean joined. He thought we did a good job on the product, on WebPack, and he used it at his company... So then he came to us and said that he'd want to get us funded, and want to get us organized.

At this time we also started, maybe because of Sean, to organize ourselves as a core team. We had no core team or organization, stuff like that before... But at this time we moved to Open Collective, moved the \[unintelligible 00:19:16.19\] JS Foundation, and organized as a core team... So we basically made all the management stuff. And he just joined by himself, so it's not that we hired him for anything.

**Adam Stacoviak:** That's so wild.

**Jerod Santo:** You didn't put a Craigslist post out there, "We need an evangelist for WebPack..."

**Adam Stacoviak:** Yeah. \[laughs\] It's wild how he joined himself, too. He saw the ingredients for a great recipe, and made it a meal. Do you like that?

**Jerod Santo:** \[00:19:51.03\] I do. Well played, sir. So we talk about the challenges of having arrived financially, and yet still having more people who aren't paid full-time, and lots of contributors involved... And we started getting a little bit into the money situation; it sounds like every month you just kind of decide how to parcel out the current budget. Has there been struggles on deciding how the team allocates the funds? Is it just yourself that does that? Is it the core team that gets together and says "Tobias gets 10k this month, and we're gonna put 5k towards conferences..." How does that work, or not work?

**Tobias Koppers:** Technically, the core team decides it... But \[unintelligible 00:20:33.27\] I decide it. Basically, I didn't change anything last years about funding. It's more like I have a tool which extracts all the contributions from GitHub, and kind of \[unintelligible 00:20:47.19\] It's a mostly automated process, and it puts some value on contributions of GitHub, and then they are paid the amount of money on Open Collective. There's a threshold, but if you are over the threshold, then I send you a weekly mail to get some information \[unintelligible 00:21:14.10\] and you can convert it to $2,000 on Open Collective by sending an expense. I think it's like 10-20 people per month that get money.

There's also some kind of factoring \[unintelligible 00:21:30.01\] everybody got less, if they have less money, and everybody gets the normal amount if you have enough money. Currently, we have enough money so everybody gets the same amount.

**Adam Stacoviak:** Is it written down somewhere what your salary is? Is it that organized, or is it sort of like loose in that regard?

**Tobias Koppers:** It's kind of loose, and the tool is not open source, because I'm afraid that it would be usable if you know how the governance works, and which kinds of contributions you have to spend to get more amount of money.

**Adam Stacoviak:** Yeah... Kind of game it.

**Jerod Santo:** Yeah, you could game it.

**Tobias Koppers:** It's hidden away, or secret... But I think it's the most fair way if it's automated and nobody decides how much to get. I think there were only very few complaints in the last years about "I get too few money", or something. So I think it's working, and I hope people don't see it like "I want to work for WebPack because I get money." I hope nobody wants to contribute because of money, because if we have no sponsors, you don't get money, so you can't rely on this money... And I obviously recommend to not rely on the money from WebPack. I want it to look more like an extra benefit, an extra incentive you get out... And you should be happy that you get it and don't demand for the money.

**Jerod Santo:** I never advise anybody to get into open source for the money. There's lots of good reasons to do open source; money is not a good reason. As developers, we have very marketable skills. Open source is not a place to go if you're trying to get rich quick, or slow... But there's a lot of good reasons to be involved.

**Adam Stacoviak:** Right... You could though. The opportunity is there, just don't go there for those reasons.

**Jerod Santo:** You could, but there's just easier paths to that end. If that's your end, there's better means; that's all.

**Adam Stacoviak:** \[00:23:46.09\] Right, gotcha. Tobias, can you speak to your longevity with Open Collective? Because we referenced episode \#233 with Sean Larkin, way back in December 2016 (that was quite a while ago), and that was a big part of that conversation, or a large part around the sustainability side of it, was the efforts made to build your community within Open Collective... And even to this day you're using it.

It allows you to accept -- I forget what that term is, but I guess it's contributions, for expenses. So it gives you this framework, this paying framework, how you deal with finances and money and contributors on a financial side. What's your experience with Open Collective? How has that worked out for you? I suppose good, but what are the mechanics of that and how does that work day-to-day?

**Jerod Santo:** It's still there.

**Tobias Koppers:** It's working pretty good. They take care about all this -- getting companies, making orders for companies, getting bills, getting expenses, companies getting contracts for larger companies... So it's difficult for a company to pay open source software, because it's not a process that companies know about a lot.

The official side is the company has a contract with Open Collective, and they start paying the bills of Open Collective... This is from the view of the company. From our view, they're doing all the work with the company-related communication for us, and we have the money and we can send in expenses. So the contributor is working for Open Collective, and they are sending expenses, and Open Collective pays the expenses from the contributors.

It's fairly easy from the contributor's site, and I think it's also pretty easy from the company's side, because they do a lot of stuff to enable companies to pay for open source.

**Jerod Santo:** So on Open Collective the expense distribution is necessarily open, it's transparent.

**Tobias Koppers:** Yeah.

**Jerod Santo:** Has that ever caused problems, or do you have a concern about the amount of money that you're being paid being public information for anybody to see?

**Tobias Koppers:** \[laughs\] I don't have problems with that.

**Jerod Santo:** Apparently not. I mean, you're doing it, but... I wonder if you value that privacy or not.

**Adam Stacoviak:** It would have been funny if he was like "What?! All that is public?!"

**Jerod Santo:** \[laughs\] Like, "Oh, shoot...!" and he hangs up.

**Tobias Koppers:** Yeah, I don't think it's a problem for contributors or for me that it's public. I don't think so many people look it up, what I earn or what contributors earn. Technically, you can download all the contributions, all the payouts to contributors and all the payments by sponsors... It's basically a \[unintelligible 00:26:39.27\] but I don't think it's used or that anybody cares about how much the contributors earn. It's not like they're earning so much that you should have problems with it, so...

**Jerod Santo:** Sure. It's just a matter of privacy. Are you guys solely on Open Collective, or do you also do Patreon, or any other ways that people can support you?

**Tobias Koppers:** I also started to make some GitHub Sponsors profile for myself, like of non-WebPack-related stuff, or if you want to just give me money personally, or whatever, to make something else... But it's not a lot of money there.

Open Collective also recently joined with GitHub Sponsors, so you can make a GitHub Sponsors profile, which redirects the money to Open Collective. We don't have Patreon. I tried it, but it doesn't work. I also think it's more beneficial to have only a single platform. It's more simple.

**Jerod Santo:** One place to send people.

**Tobias Koppers:** Yeah.

**Adam Stacoviak:** \[00:27:50.22\] It seems diversity on the front of ways you can sustain a project or ways you can give would be competing interests, meaning that it would be difficult to funnel everyone to a place, to have a flow, to either contribute and get paid, file an expense etc. It seems like it'd be a lot of work... And I was actually excited to see that news with Open Collective and GitHub Sponsors, because in the current state of GitHub Sponsors you would have to have a company... And by way of what Open Collective has always been about - it has been about making it so that the world can sort of self-organize sans company, so that they can be the...

**Jerod Santo:** The legal entity.

**Adam Stacoviak:** Yeah, the legal entity... The home of record I think is what they call it, when it comes to a non-profit case. Plus, if you're seeking dollars from people and you wanted to make those contributions tax-deductible, at least here in the United States, then a 501(c)(3) organization, which they provide, makes that more possible. So it's interesting to hear you say that you've also got a GitHub Sponsors profile. Is that connected then back to Open Collective, or is that just--

**Tobias Koppers:** Yeah, yeah. That's the idea, Open Collective is the fiscal or legal entity behind GitHub Sponsors which can receive the money.

**Break:** \[00:29:13.09\]

**Jerod Santo:** Tobias, you've been working on WebPack full-time for a while now... I'm just curious what your average workday looks like. Is there an average workday?

**Tobias Koppers:** I think so, yeah. Usually, I check issues every day, and try to answer all the issues. Then I usually check the PRs on WebPack... I don't have enabled GitHub notifications or emails. I only try to make it when I request it, so it's like a pull system. I pull the work from the issues, I pull the work from the pull requests. Basically, I'm viewing pull requests and trying to finish pull requests if they are in good shape.

Sometimes I do work myself, so it's -- really, most time I spend to view pull requests or finishing pull requests... Because in most cases the pull request is in a good shape, but it's not like it's super-finished and I could instantly merge it. And I don't want to request too many nitpicks from the people, so it's often that I finish the pull requests myself, doing menial stuff that fits better in the whole system, and so on.

There's a lot of work involved in really finishing pull requests from contributors, and also doing some of my own pull requests... Sometimes I get distracted to my own work and don't do issues and pull requests. It's more like randomly choosing what I do. We also have a project board, and sometimes I select stuff from there.

**Jerod Santo:** \[00:32:09.06\] Looking at the repo right now, there's 369 open issues, 81 open pull requests. I'm just curious if this is a good place for you, or do you feel like you're behind, or are you ahead of normal? What does your normal queue look like?

**Tobias Koppers:** Yeah, we don't really close issues or pull requests... Most issues stay open until the bot is closing them. So it's not that we really are behind closing issues. I only look at the first page of the issues and move the stuff from there to them. Issues never get closed, because people don't close issues if their problems aren't solved. But sometimes \[unintelligible 00:32:53.22\]

**Jerod Santo:** Sure.

**Adam Stacoviak:** I can just see Jerod twinging/tweaking, because he's a completionist...

**Jerod Santo:** \[laughs\] I am.

**Adam Stacoviak:** It's like pulling his fingers off of his hand, or something like that. You're really hurting him, I can tell.

**Jerod Santo:** Just leaving stuff open... \[laughter\]

**Tobias Koppers:** Yeah... \[laughs\]

**Jerod Santo:** I was like, "Every open issue for me is like another layer of stress."

**Adam Stacoviak:** Yeah...

**Tobias Koppers:** Not for me, not for me...

**Jerod Santo:** That's a good thing.

**Tobias Koppers:** GitHub makes a blue dot/line before issues if you haven't read them... So it's like Unread Issues. I pick Unread Issues, and then I do the stuff. And if no issue is unread, then I'm fine.

**Adam Stacoviak:** You mentioned you have a bot too, that's closing things... Is that right? Did you say the bot closes the issues that you need closed?

**Tobias Koppers:** Yeah. We have a WebPack bot, and it's closing after three months inactivity. If people put a lot of comments on the -- basically, the bot warns you two weeks in advances that the issue will soon close, and if somebody comments at this time, then usually it stays open. It's also a good factor to -- if an issue is open longer, if it doesn't get closed by the bot, then people are really behind the issue, and it's really important... It's also good to see that only the important issues stay open. If nobody even addressed it in the issue and it wasn't fixed, then the bot is closing it.

I think WebPack has many issues; there are bugs at edge cases... The whole configuration comes with a lot of edge cases, if the combination of whatever doesn't work. So if some people write issues about really edge-casey stuff and they never get fixed, and they are not behind pushing this issue, then it probably won't get fixed.

**Adam Stacoviak:** Okay. So what you're saying is you like the +1, or the repaint list, the thing people say in issue comments, where they bubble it back up... What's that, again? Ping, or something?

**Jerod Santo:** Bump?

**Adam Stacoviak:** Yeah, bump. I should have known that... So you're an advocate for that then? You're an advocate for plus-oneing or bumping?

**Tobias Koppers:** Yeah...

**Adam Stacoviak:** Because that's what rebubbles it back up to you.

**Tobias Koppers:** Yeah, especially if it prevents the bot from closing the issue.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Right. So what we're doing is we're teaching users out there how to game the WebPack open issue system... Periodically bump your issues, folks. Otherwise...

**Tobias Koppers:** It's better if you close the issue and reopen a new issue.

**Jerod Santo:** Oh, even better. These are pro tips right here... "How to get help on WebPack."

**Adam Stacoviak:** Close and reopen.

**Jerod Santo:** So there's maintenance, which we're talking about, and then there progress. And as the core developer, one of the four (and one is a PR person), so you have a few people on the core team, pushing the progress forward, pushing WebPack forward. How do you decide when you're gonna maintain and when you're gonna make progress?

**Tobias Koppers:** \[00:36:03.14\] I try to maintain, to have no unread issues and unread pull requests; so just basic maintenance. I also try to fix bugs reported as soon as possible, but it's not very often that there's a bug which can easily be fixed... But it's the basic maintenance, that I always do. After that, it's more like what I have fun to do. Sometimes I want to do progress, do some innovation stuff, make some cool new feature, or whatever... And sometimes I have fun making the pull request somebody did, and maintaining/fixing stuff, reorganizing things.

Most maintenance is refactoring, and cleaning up. Most bugs need some refactoring, reorganization and cleanup. That's what's fun, \[unintelligible 00:37:04.00\]

But we also have contributors who want to push the progress... So I think most progress or most new features or most progress for WebPack is done by contributors. We have the project board, and people can look it up, pick something up and do some progress, make a pull request, and... Most of the time I finish the pull request, but it's all the people making pull requests and then I finish the pull request, which is some feature from the project board, which is pushing WebPack forward.

**Jerod Santo:** Right. Kind of mood-driven development. You know, "What am I -- am I in the mood to close some stuff?"

**Tobias Koppers:** Yeah, that's a good part of open source.

**Jerod Santo:** Yeah, that's awesome.

**Adam Stacoviak:** Which is interesting too, because some will thrive on a regimented day, and it seems like the way you optimize your day, Tobias, is essentially at the whim of what issues or pull requests wait for you, and whether or not you might be or you might not be inspired to sort of resist that temptation to deal with issues or pull requests and kind of dream a little bit.

**Tobias Koppers:** Yeah. But also, most progress comes from issues. So if there's an issue, I have an idea about a feature, I have some problems that could inspire me to make this feature, make this improvement...

I also think that progress comes from issues. Writing issues, and contributors that write issues - which are also contributors, kind of - are the inspiration for new features and for the direction of WebPack.

**Adam Stacoviak:** So anyone out there that's on Twitter who are doing these criticisms, as Jerod mentioned earlier, these memes, instead of complaining or meme-ing (if that's a thing), maybe they should just hang out in the issues and try to drive progress. Because if I'm hearing you correctly, then that means that the feedback from the community is critical to the progress of WebPack, because it's a significant driving force of it.

**Jerod Santo:** Well, as evidence of that, the 369 open issues - only 27 of those are bugs; they have a bug label. So we're kind of talking about bugs versus progress. Fixing things versus creating new things. Many, many of those open issues - and I assume many of which are also pull requests - like Tobias says, they're not maintaining the status quo, they're just issues that happen to be pushing progress forward.

**Tobias Koppers:** Yeah. Basically, I prioritize bugs. So it's kind of \[unintelligible 00:39:49.13\] I want to make WebPack as good as possible, but to ensure high quality and stability for WebPack. I think stability and bug-freeness is one of WebPack's main features compared to competitors. So I really prioritize bugs and I really want to get rid of them. If bugs are reported, I usually fix them within days.

**Jerod Santo:** \[00:40:16.03\] So hack number two, how to get your issue addressed - put the bug label on it. Even if it happens to be a feature, just throw "bug" on there and Tobias is gonna give it at least two looks. \[laughter\]

**Tobias Koppers:** Yeah, but if you write issues, you can't decide the labels. Only maintainers can decide the labels.

**Jerod Santo:** Ohhhh... You guys have your guards up.

**Adam Stacoviak:** Take it back, Jerod. Take it back.

**Jerod Santo:** I take it back, I take it back.

**Tobias Koppers:** But you can write "It's a bug!"

**Jerod Santo:** \[laughs\] So you've mentioned competitors, and there's been lots of them that popped up over the years - Pica, Parcel... Esbuild is a new one. That's a Go bundler -- built-in Go; it doesn't bundle Go, but... It's supposed to be really fast. I'm sure there's many others. Do you pay attention to other bundlers that show up on the scene?

**Tobias Koppers:** Yeah, sure.

**Jerod Santo:** Are you cherry-picking features, are you looking for inspiration? Have you ever felt threatened by a particular bundler that's launched?

**Tobias Koppers:** Yeah, we usually steal features from competitors. \[laughs\]

**Jerod Santo:** That's nice.

**Tobias Koppers:** It's also a really good inspiration that a competitor decided to make their own product... Because most often they do it because they want to have some special feature. For example, Rollup was created to make some ES module-first approach, and make some super-special optimizations which are related to ECMAScript modules... And we also took this feature and integrated it into WebPack.

It's not that easy to integrate features from competitors, because we also have to be compatible to all existing features, which makes it sometimes more involved, more difficult, more edge cases to integrate features from competitors. But we try our best to get the ideas from competitors and integrate them... Rollup inspired us to build an ECMAScript integration parcel for easier configuration, and for speed... But most of them are a trade-off. You can make a really special bundler which focuses on something we can't focus on, because we have a broader user base, more features, and it's more \[unintelligible 00:42:27.08\] So it's not often that easy to just copy the feature from competitors... But we try our best to add all the cool features from competitors, too.

It's open source, so it's more the mentality of open source to share ideas. I also think if you're doing new bundlers, you're also copying most features from WebPack, and it's \[unintelligible 00:42:58.05\] and in the end, the user benefits if all tools have a similar feature set, or at least a shared, common feature set, which can work across bundlers.

**Adam Stacoviak:** \[00:43:14.18\] If someone is listening to this that happens to be considering a competitor or a maintainer of a competitor, what would you say to them in terms of collaboration? Is it something where there's sort of like a WebPack guild of sorts, where you sort of have this build step union, so to speak, or collective where you're sharing knowledge and sort of leveling each other up, and you can help them optimize their things, and maybe there's a place for their tool and a place for your tool as well, that - while you're competitors, you don't have to be blood-thirsty competitors, you could be collaborative.

**Tobias Koppers:** Yes... I would say, if somebody has new ideas and wants to do some cool stuff, then you can write an issue and we can discuss this. We also have a Slack channel where we can chat with each other and share ideas.

I often see that people don't want to contribute to WebPack because it's too complicated, and they start a new bundler because it's easier to create a new bundler with the special ideas, the new ideas, the features they want... And yes, it's true, but I hope that long-term people write a bundler prototype, and then long-term they want to invest into integrating it into WebPack... But I can't force anybody to contribute to WebPack or to integrate to WebPack, and often it's not possible... If you wrote the bundler in Go, then it's very difficult to integrate it into WebPack. So it's kind of difficult.

**Adam Stacoviak:** Yeah. I'm curious - taking a sidestep, I guess, to an overarching team which often happens to people who are obsessed with their work, or really into what they do... It seems like you're really into what you do. Clearly, you've made a very purposeful career path towards open source, towards WebPack, and you're committed to it... Burnout often happens whenever you're in that kind of state. Sometimes you excel and there's on burnout, but how do you maintain your experienced burnout? Share with us maybe your aspects on burnout, if you have ever been near to it...

**Tobias Koppers:** People burn out on open source, and so far I'm happy and I don't think I'm burning out... But also, I'm a bit afraid that it may happen. And yeah, I'm not sure yet.

**Adam Stacoviak:** Yeah.

**Tobias Koppers:** I hope that it doesn't happen, though...

**Adam Stacoviak:** One antidote we've seen to burnout is having some sort of analog, some sort of AFK kind of thing; when you're not at the keyboard, when you're not working, when you're not in issues or pull requests, you're not coding... What's your pastime? You have a family, so maybe that's it, but share with us maybe what you may purposefully do, or by happenstance do as an antidote to burnout.

**Tobias Koppers:** Basically, I spend most of the time on WebPack, and in my free time -- I have a family, I have two small children; one is one year, the other is two years, nearly three. So it's really a lot of work with family, and the children... So family is my alternative to working.

**Jerod Santo:** Well, Tobias, thanks so much for coming on the show. We really appreciate you, we really appreciate all the work that you put in, really the trailblazing that you've done on WebPack along with Sean and the team. Congratulations on all your success, and hope for future success as well. We just really appreciate what you've been up to, and sitting down with us and telling us about it.

**Tobias Koppers:** Thank you.
