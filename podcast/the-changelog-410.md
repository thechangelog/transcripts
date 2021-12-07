**Adam Stacoviak:** I'm not sure, Mike, where I saw this ad, but I saw -- we just had Zeno Rocha on Carbon... I was reminded how cool what you have made is, and I was like "We should talk to Mike. This is cool, what he's done." And this is totally a Maintainer Spotlight show, and so let's start there. So you've got Carbon out there - lots of people use it; lots of people use it, so...

**Jerod Santo:** Including us.

**Adam Stacoviak:** Including us... And now you have Dracula Pro - there's two, so... Cool for supporting Zeno in that theme... But how did you get started with this?

**Mike Fix:** Yeah, so Carbon goes way back to when we were me and my two partners/friends from college; we started a small business, and we were really passionate about open source. One of my partners was a designer, and I often would nag him to come up with some nice background, to tweet something out and share some open source we were working on, or whatever... And I was like, "Man, I don't really want to take designers' times, and I don't really want other developers to take designer's times from their teams. So maybe we can automate this."

And during the summer - it must have been like three years ago now - they moved out and lived in a spare bedroom in my apartment in San Francisco, and we just prototyped it over the course of a week or so, and then launched it... And we kind of knew that if anyone would start using it at all, it would be this self-replicating cycle, where when people use it, they share it, they use it, they share it. It's just been that way since the beginning. But yeah, we'd love to see how it's grown since then... And Zeno reaching out about Dracula Pro is just kind of the goal from the beginning - it's to share things that developers love, to share this tool that kind of bridged the gap between engineering and design, and folks that love both, and giving them a tool that makes it a lot easier for educators, for writers, for teachers, for developer advocates, that sort of thing.

**Jerod Santo:** So Carbon, to describe it, is a website where you go and you put your code in, and it gives you a shiny, very attractive display of that you can then use on the social networks, or you take it, put it in your readme, share it with friends...

**Mike Fix:** \[04:27\] Yeah.

**Jerod Santo:** Very cool.

**Mike Fix:** Create and share beautiful images of your source code. When you say it that way, I know it sounds like we're just doing it for show, but at the same time, I like to think about it as making it a lot easier to consume code through these mediums that make it difficult right now... So like through Twitters, or through blogs, or in a presentation. You still do want these presentation layers, because it not only makes it easier on your eyes, it makes it easier to look at, but it actually makes it easier to consume the information when you have the correct syntax highlighting, when you have consistency between all your files, that sort of thing. Yeah, it just makes it easier on educators that way... And we've seen that to be true.

I was stoked recently to find out that NASA has these, in a jet propulsion laboratory, has standard guidelines for sharing code presentations when they wanna do updates on what they've been working on recently, and they explicitly recommend Carbon as a way to present that code in a way that's better for consuming on the other end. Stories like that is what really excites me about Carbon and how it's growing over time... Back to the initial goal of producing it on day one, just in response to wanting to tweet easier.

**Jerod Santo:** Wanting to tweet easier. So we initially covered this back when it was first launched, and when Adam came to me and said "Hey, let's do a show with the Carbon person", I said "Isn't that like an agency, or something?" Maybe I'm just misremembering, but were you and your buddies kind of presenting this as a business, or like an open source project from your business, and maybe that has drifted away? Because I thought it was actually a design agency that put this out there, and now it's not like that anymore... Or am I just misremembering?

**Mike Fix:** Yeah, we put it out when we were working together as Dawn Labs, which was a design and development studio that we came up with together... And from the beginning I think we wanted Carbon to be its own community, but while we were running a business it didn't make as much sense... So when the business split apart and we went on to our next thing, I was really happy, in the sense that we would have an easy transition for Carbon to move into its own community, have its own hub on GitHub, have its own voice on the internet - have its own Twitter channel, and that sort of thing... Yeah, it really gave it a space to grow in a different way. Yeah, so you're not misremembering that at all.

**Jerod Santo:** Good. Because I thought I was taking crazy pills for a moment. \[laughter\]

**Mike Fix:** No, not at all.

**Jerod Santo:** So it's cool when you come across something like this, that's - like you said - self-replicating; because it's a tool for sharing, the tool itself get shared. And of course, because the results are really nice-looking and everyone's used to sharing maybe a screengrab from their text editor, or whatever we've been doing previously, you see a Carbon screen share and you're like "I want that", and it grows like wildfire. But I'm curious if the contributor side or the community side has grown alongside the user side... Because lots of times we see this discrepancy, where the user growth on an open source project just skyrockets, and the team just stays small, or the one person, or sometimes - in your case - three... Have you seen contributor growth alongside the user growth? Or has there ever been that mismatch?

**Mike Fix:** We're definitely like a staple mismatch case. If you're reading Working in Public by Nadia, we're like the stadium case, where a lot of people are looking at it, but no one's really touching it... And I think that's totally fine and appropriate. An open source application maybe shouldn't have the same number of contributors as something like a library or a framework.

\[08:13\] But yeah, contributor growth is not that high for how many users we have and how many starts on GitHub, or whatever it is... There's only been like 100 contributors. And when I think about it, I'm stoked we have 100 contributors, but that's definitely a bit mismatch from hundreds of thousands of users... Which is fine. Every single contribution that does come in then, I get really stoked, and revitalized, and I reimagine the hopes of open source in general.

I've had contributions recently that have been among the best contributions ever, from people just coming and discovering Carbon for the first time... And honestly, coming in and fixing bugs that have existed since three years ago, that I've never been able to solve, never had the time or different perspective to take a look at that... So that just always gives me energy to keep going, for sure.

**Adam Stacoviak:** What's the state of the project? Is it still in quite a bit of motion? I'd imagine it started with a fairly simple goal, which is show off beautiful code and images, and that doesn't seem to have changed a ton... What is the trajectory of the project? What is changing that requires -- when we think about projects, maybe say Kubernetes for example... It requires tons of complex changes, a lot of hands... Whereas Carbon, to compare, they're quite different in terms of projects, but they're still open source. And when we compare stadiums versus this or that in terms of these metaphors to compare projects in open source, what's the state of Carbon in terms of product, or what it produces, or the end result? Is it changing a lot, or is it static?

**Mike Fix:** Yeah, it goes in waves. It's a matter of taking a bunch of ideas and ask from users over time, and then figuring out how that actually translates into a feature. Because we wanna be efficient with how we build these features out. For example, if people ask "I wanna share this on my website. Can you make publishing it Imgur a thing, or publishing it to this platform a thing?" But maybe taking a step back, the right solution is to create an API, or create a Save Snippet feature. So it goes in waves that way, collecting a ton of feedback from people use cases, talking to folks, and then translating that into new, lower-level systems that scale across more user problems... Because I'm the only developer or maintainer on the project now, so I care a lot about sustainability of these features. If I'm going to push it public or create new features, I care a lot about the fact that those features will remain stable, even without much intervention.

So a lot of the contributions that I make in the interim is just cleaning up code, cleaning up bugs, utilizing new technologies to make things even more stable, such that in the future there's less intervention with these sorts of things... And it's really a testament to how I -- it's kind of like a case study on creating an open source application that is self-sustaining in every mechanism that you can imagine. So the code is continually getting compressed and using the right technologies and the right use cases, so that it remains stable... But also the app itself is hosted on Now, or Vercel, which is free; we don't pay for a domain, we don't pay for hosting, we don't pay for any aspect of that thing, which is very huge for the project, because we don't necessarily want to have to rely on selling something in order to keep this app afloat. We want it to sustain itself and let people utilize it as a public good.

\[11:59\] And then the last piece there is in the last wave of what's next for Carbon I've built a system of storing snippets that you can save later, and then when share those snippets on Twitter or whatever, they automatically unfurl and they point back to source, which lets you do a lot of things, like you can remix snippets just like you would, like GitHub gists, that sort of thing - duplicate them, edit them, reference lines of text in them.

That was something that might have seemed obvious for a while, but we were hesitant to maybe go that direction, because there's a cost associated. We need a database, we need to store these things, and we don't want the cost of that to actually hurt the project in the long run, where we have to shut down things or roll back features, or whatever it may be. So I'm very careful with our solutions there, to make sure the project sustains itself. So that's why we have a Firebase database, and Firebase Auth, and things that scale for a developer team the size of what we have... Yeah, that has been our approach.

So what's next, I guess - there's definitely longer-term things we could easily do. The main thing that people request a lot is a Carbon API that lets you hit our API and get back an image, so that you can use it in some other way... And it's really funny that people ask for that... And more recently, in the last couple of months, people built their own third-party APIs that scrape our website and return the images themselves... And the funny thing about that is we've always actually had an API. The main functionality of the site doesn't work on Safari, so we've had to use an API that spins up headless Chrome in Safari for Safari users, hits the API, returns the image back to them...

So that's always existed. And we could have released it pretty much at any time, but the thing about that is we're not sure we want to release it, because there's better mechanisms for sharing code than there are an image. The Save Snippet idea, which always has the alt text for accessibility, it always points back to source, so people can copy-paste it easier... You can use an embed, which allows you to do copy text buttons, that sort of thing, or highlight the code, which are all more accessible mechanisms than using an API to return just a static image.

So our hesitation is not that we don't wanna give users what they want, but we want to create a tool that's actually good for the end users, the people that are consuming this code, helping educators with a way to share their code in a way that the end consumer will be able to consume it easy.

**Jerod Santo:** Yeah, that's really cool. I've never thought about all those little concerns. Of course, you've thought about this deeply, and we've just used it, so that's really neat. I'm curious what that Safari issue is; why can't Safari do some of the image creation side?

**Mike Fix:** Yeah, there's this weird thing where -- I think it has to do with how they handle foreignObjects and SVGs, or something like that... Basically, the library that we use to translate an HTML chunk to an image - it fails in a low-level event in Safari. So when we shipped Carbon, Safari didn't work at all; for months it didn't work. So our solution - because we knew this was a low-level browser incompatibility - was to just spin up Chrome in the background and fire the data off to a headless Chrome browser and then send back the snippet to Safari. That's how we get around it, and that's been there since -- for a long time now. We originally treated it as just like supporting Safari, but really we had to build like an API to replace the in-browser feature.

**Jerod Santo:** \[15:58\] That's a really cool hack. So in every other browser it's just generating that image right there, in your browser; Carbon doesn't do anything on the backend, unless you're using Safari.

**Mike Fix:** Yeah. And the goal there is we want this thing to be completely offline-capable...

**Jerod Santo:** Yeah, the less backend, the better... Right?

**Mike Fix:** Yeah. You can download it as a progressive web app, use it offline; it'll work on airplanes, that sort of thing.

**Jerod Santo:** That's cool.

**Mike Fix:** Yeah. So that's part of the reason for that constraint, for sure.

**Adam Stacoviak:** That's the best place to use Carbon, because you might be doing a presentation, or something like that...

**Jerod Santo:** Trying to get ready...

**Adam Stacoviak:** Dropping some code in there... Yeah. One of many best places, at least...

**Jerod Santo:** Well, who flies anymore...?

**Adam Stacoviak:** Yeah, that's true... \[laughter\]

**Mike Fix:** Yeah, exactly.

**Adam Stacoviak:** That's true. Touché, Jerod.

**Jerod Santo:** It was a good idea at the time...

**Mike Fix:** People do tend to write great blog posts and that sort of thing on planes, or work on their presentations, so we definitely wanna let them take advantage of it if they need it.

**Jerod Santo:** I had no idea you can run it offline on your pad. That's pretty neat. One of the things the tool does which we haven't talked about yet is you can customize the look and feel to the hilt. You can pick the fonts, you can pick the colors... You can say if you want the macOS Chrome, or you don't want that Chrome... You can really trick these out to look exactly the way that you want them. And I'm sure if you had the offline app, you could probably set up your config and just leave it like that all the time, if you have your style... And not have to go back.

Is there also session state, where you can store your settings maybe in local storage? Or are there accounts, or anything like that?

**Mike Fix:** Yeah. It's grown over time. At first, we did local storage; so if you're not logged in and you're editing it, it'll save your current state in local storage. If you open up the app again, it'll be the same. And you can reset it; there's a button to reset it if you wanna go back to zero.

After that, we implemented URL storage, so it saves your current state in the URL, for most properties. So if you wanna create a theme, or a specific config and then share it with people, you can just copy-paste the URL and they'll have your theme instantly.

After we had those two pieces in place, then we implemented an ability to export your current config and then import it. So if you wanted to share it as a file, or save a bunch of them offline, you could do that. And then finally, late last year we implemented profiles, basically, where you can sign in with your GitHub ID, save snippets which both save the code and the config in a single snippet, and you can always go back to that snippet and then duplicate it if you want it to always have the same theme there. So yeah, lots of different mechanisms for saving state there.

**Jerod Santo:** Y'all have put a lot of work into this thing. It's well-crafted, expanded over time and progressively enhanced... Not in the way of a web app, but just in the way of, like, getting better over time. That's really cool.

So much work goes in behind the scenes, you don't even think about all these little features, unless you're the one that's like "I really wanna save my config." And lots of us just -- I just load up the website, and I actually just reconfigure it each time, I use it and I'm done. I'll grab my image, and I'll hop out.

**Mike Fix:** Yeah, and that's totally fine, too. Yeah, it doesn't necessarily have to grow like this over time, but it's been such a fun experience to see new people using it in new, unique ways... You know, back to the NASA story, back to all the other folks that share it and use it in their books, or in their presentations, or what have you... That's been inspiring to keep moving forward with these features. And there's more we can do. We can make a theme storefront, that people can share their themes publicly, or whatever... Or all sorts of things like that. So there's more we can do; we're not doing everything... But it's been fun just to be a maintainer, honestly. That's what gets me most excited about it - to have this thing that's in the public, that lets us experiment with all sorts of facets... Like, maybe unique business models we can experiment with. We can experiment with OpenCollective. We can experiment with Open Collective, we can experiment with the cutting edge Next.js features. We can experiment with how you maintain a repository. We have our own custom bot that's set up to merge pull requests, and respond to issues, and label things a certain way... Those are all things that we can work on in public, and that's what's been most exciting - to be the maintainer throughout all of those pieces of work.

**Jerod Santo:** \[20:18\] I think that's an aspect of open source that we don't maybe talk about so much, maybe because it's implied here on the Changelog, especially with Maintainer Spotlight.

**Adam Stacoviak:** The freedom?

**Jerod Santo:** Well, just how fun it is to create a thing, and people will find value in it, and it gets better -- like, you work on it, and more people use it, and you can experiment... This is really -- I can tell you're having fun with this, and oftentimes we get to the point where it's a chore, or it's too much, or you're unsustainable, and what are the challenges, and all the complaints... Those are the things we tend to talk about, because those are real aspects of being in open source as well - community, culture, all these things that are problematic or challenging...

We talk about those things, because it's like "How do we figure out these challenges?" But one thing we don't maybe say often enough - why do open source? And a lot of times you throw your hands up, like "Why am I doing this?" I tell people all the time, if you're doing open source to make money, there's a lot more direct lines to money. There's much better use of your skills if all you want is money... But let's not forget why we were here in the first place - either as users, or maintainers, or creators... It's like, when you put something out into the world and people find value in it, and it's fun, and you can make it better, and that provides more value to more people - I mean, it's pretty rad. It really is.

**Mike Fix:** Yeah. And the other piece there is like -- I like being a maintainer in it so far as I can empathize with what being a maintainer is like... Because I'm very passionate about figuring out how we can support maintainers that have a much larger burden on themselves than I do... And it feels like it would be difficult for me to form opinions or try to find solutions for those sorts of problems without being a maintainer myself. That's a big impetus for me getting into that space.

Going back to what Adam said about freedom - I'm very passionate about the idea that in the future there are pathways for a career, for the young developers to utilize open source as the mechanism for their creation, in a way that they could work on it full-time. And maybe they don't have a full developer salary, but they can make a stable living creating through these platforms... Because I think it does create a lot of aspects of a more equitable world when you're just utilizing open source as a delivery mechanism.

Along those lines, in the future I can imagine companies who have a mission, and a mission that resonates with a lot of people. There's a lot of developers that potentially would love to contribute to that mission, but still wanna maintain their freedom. They wanna maintain the optionality of not being employed somewhere. Having the freedom to take advantage of their own lives, and maintain their own schedules, but yet still contribute to these missions at large. And that's something I think open source has a stable foundation to help facilitate, and it is a matter of figuring out how to fund it in the correct ways, where people are appreciated for their work in some way.

**Adam Stacoviak:** So what's your goal then with Carbon? It started out as a way to save time from people, essentially; put code out there in fun ways, but save a designer's time... What's that going out? It's evolved over the years, so what's the situation?

**Mike Fix:** \[23:54\] Yeah... So as a product, it's kind of doing its job, and if it never changed again, I think I would still be happy with it. And the reason I keep wanting to change it and maintaining it and pushing it forward is to act as like a public staple of open source. The fact that there's not too many products that are fully open source... I want it to act as that figure, that symbol for people that want to operate their business or their product in a different way, and still show that it can have reach, that it can have impact; that maybe in the future I can make money.

We're not making money with Carbon not because it's open source, we're not making money because there's not really potentially the right business model yet, or something like that. But that's always the goal with Carbon - to show a different way of making progress on something while being transparent, while utilizing these mechanisms that don't really translate well in a closed source business. People can see all of our thought processes in public, they can see all the mistakes we've made, they can see the trade-offs that we're making explicitly in the code. And those sorts of things just don't come about when you have a closed source thing. We wanna be a staple that people can point to when they're considering "Hey, I'm building a service. Maybe my frontend should be open source, so that people can understand how it's being used", that sort of thing. Lots of different goals wrapped up, and a lot of it is just evangelizing open source as the right mechanism for getting things done.

**Adam Stacoviak:** You mentioned Open Collective as one means, you mentioned details around business models you may or may not pursue, or not being available now... Sometimes the problem or just the challenge is there's not an obviously natural business model to use. And I haven't put a ton of thought into it, because it's not my job to do so, I suppose, for Carbon, but maybe you have, in terms of - what are some of the naturally just obvious business models that could work and not change the potential icky factor between its users just so it can sustain? And I would say dovetail that with the fact that you have a full-time gig. You're not trying to make Carbon your full-time thing. At least that's the aim of my original question, was like "What's the goal?" So maybe you can wrap a lot of that up with, I guess, less of a question, but more of an observation.

**Mike Fix:** I'm super-glad you brought it up. There's lots of different business models you could imagine. You could have a paid subscription for premium features, you could have advertising, and people have reached out about advertising on Carbon many times... You could just do like a donation-based model of some sorts through Open Collective, that sort of thing... Or you could have an affiliate program. And that's what we're doing right now, in a sense; we have some affiliate links with some custom font creators, some custom theme creators like Zeno... And I'm very excited about that option, to start right now with just like a few links and it links off to these people, to give people an option to buy themes, fonts, that sort of thing.

But if I was gonna turn that into an actual business model, I'm most excited about the idea that Carbon as a page that developers that love design or designers that love development come to a lot can see new themes, fonts in a centralized marketplace.

The reason I'm really excited about that is because -- not that it's gonna make Carbon money or anything, but it's gonna help a lot of small creators. A lot of small creators that are creating beautiful themes, beautiful fonts, and maybe don't have a hundred thousand eyeballs every month; they can just put it up on Carbon and have that sort of connection point. That's the business model I see as the most mutually beneficial.

\[28:04\] Right, we could toss up ads and make some money, but it's not gonna make enough money to viscerally change my happiness, and definitely it won't improve the users' lives when using Carbon. So this other thing would be kind of like a better translation, because 1) I think it actually would add value to Carbon. People could come to Carbon and see what's new. It's not so static, it's not just like always the same screen every time. And 2) I think it would parallel well with helping small creators just like we were when we started Carbon out - we had no audience, and we wanted to share this thing we made. That seems like the best business model for us to take it in a direction for, but we're still figuring out how to do that that fits well with the community, and like I said before, sustain that program going forward in a more self-serve way.

**Adam Stacoviak:** That's what drew me to do this show, because I saw that Dracula Pro was on Carbon. I'm like "That's cool!" I can imagine its distribution for an indie creator like Zeno... And I see what you see, which is like this could be a moving billboard; not so much in terms of a make-money billboard, but an easy way -- because it's got a lot of interest and eyeballs using it on the daily, many engineers all over the world using Carbon... And why not show off your code and show off Zeno's work with Dracula Pro... And I don't know what else is beneath the surface, because I haven't dove in and discovered, but I imagine it's an open opportunity now for, say, the designer behind -- I believe Inter is the font... That's something else we wanna talk to around Maintainer Spotlight, is like making this really awesome open source font that a lot of people are using; it's amazing, a lot of work, I'm sure, has gone into it. I'm assuming the story we'll hear from that. But you get people like that behind there, and you've got sort of a distribution channel for indie creators, basically.

**Mike Fix:** Yeah. And right now it's kind of just like embedded in the product itself. We have affiliate links for Dracula Pro, for MonoLisa and for Dank Mono.

**Adam Stacoviak:** A lot of Monos.

**Jerod Santo:** Never heard of that one.

**Adam Stacoviak:** What's Dank?

**Jerod Santo:** That's what I hear.

**Mike Fix:** That one's a font by Phil out of Formidable. A really fun font. It's definitely unique, and I have that as actually my default font on my editor still, on my personal computer. So yeah, it's embedded in Carbon right now, and probably hard to find. I'm not sure many people even see it coming across using Carbon in their day-to-day... But the next stop obviously is to make a more centralized home for these links, make it like a marketplace where people can actually scroll through it. I would love to do that, and I would easily put time into creating that; it's just a matter of finding enough tools to showcase. Right now we have three; that doesn't make much of a marketplace. But if there were a few dozen small creators that wanted to showcase fonts, their themes, their developer-focused tools - yeah, I would love to help them out.

**Break:** \[31:18\]

**Jerod Santo:** Well, we've been talking about business models, but each time you bring up a business model you say "Well, this one might not make money, but it's exciting." Are there any money-makers? Like, advertising... You named a few. But is there a money-maker in here, and if not, could this be a thing supported by the community through GitHub Sponsors, through Open Collective? I mean, you could go that traditional/non-traditional route.

**Mike Fix:** Yeah, absolutely. Advertising wouldn't make money. It wouldn't make money on day one; a few advertisers have reached out...

**Jerod Santo:** Right.

**Mike Fix:** Right now that's a trade-off in the sense of it wouldn't make enough money to where it would change the trajectory of my life, or give me more freedom, or anything like that... And it would maybe hurt the community a little bit, or people's perspective on Carbon. So that's the trade-off that I'm making there.

**Jerod Santo:** Right.

**Mike Fix:** Other systems... Creating a premium version of it - I'm sure that would make some money, but has eng overhead trade-offs, and potentially that's going in the direction of not being able to sustain Carbon long-term. So that's why this sort of developer marketplace idea is the one that is the great middle ground for me. I think it's sustainable, I think it is in line with the people that use Carbon, helping the small developers and designers that are self-starters, that sort of thing... And it's the same in the way where every dollar it does make is just additional. It's not something that I'm relying on, it's not something that is eating up my developer time, or anything like that. That's what makes the most sense in terms of the sustainability aspect.

**Jerod Santo:** What about the donations route? You have Open Collective, you have other things going on, you have some backers... It seems like you have all the widgets turned on... Because like you said, you're experimenting, which - that's a great place to do that, right?

**Mike Fix:** Yeah.

**Jerod Santo:** What have you found through your experimentations on the donation front?

**Mike Fix:** Yeah, the donation part is cool. People have given... Not enough to make it a really self-sustaining product or anything like that. So that was part of the experiment, figuring that out. And we haven't pushed on this that much; we haven't shared publicly that we're asking for donations so much. We've pushed it out a few times in newsletters and tweets, that sort of thing; I referenced it in the readme, all that sort of stuff. But yeah, I think this comes down to the whole stadium aspect of Carbon. There's just way more users than there are people that feel like they're part of the community, or part of the contributors. Even though we have 120 contributors, there's definitely a big discrepancy there in those things. And I think that was a good insight for me to learn, too. It's like, I've seen Open Collective make repos hundreds of thousands of dollars, but that's a very specific type of repo, with a specific audience.

**Jerod Santo:** Right. They're more infrastructure projects.

**Mike Fix:** Exactly, yeah. And I'm glad they make it, because they actually do need dedicated engineers with salaries to maintain these projects. I'm not sure Carbon is that sort of project, that should have enough money to sustain a full-time maintainer. So I'm happy to have those dollars coming in, so that I can give it back to the community. I'm not doing anything with it besides using it for community-led things. Eventually, if we need to pay for any issues, we'll use that fund. If we want to create stickers, we'll use that fund. If we wanna create some other stuff, we'll use that fund.

**Jerod Santo:** Sure.

**Mike Fix:** And then -- oh, we've just crossed 25k stars today.

**Jerod Santo:** Nice, congrats.

**Mike Fix:** \[36:11\] Yesterday it was 24k.

**Adam Stacoviak:** Congratulations!

**Mike Fix:** So we're gonna be sending out stickers. Yeah, thank you. I just looked over right now, I didn't even realize it.

**Jerod Santo:** Boom.

**Mike Fix:** But yeah, we're gonna be sending out stickers to the community, hopefully, and so we'll use it for that.

**Jerod Santo:** Well, here's a crazy idea for you... Maybe you've thought of this one. I'll start with a metaphor, an old story. In the olden days you'd go to the library, and you maybe want to take a page of a book home, so you go over to the copy machine and you plop in ten cents, and you make a scan and it makes a carbon copy, and you take that home. I'm curious if you thought about micro-transactions. What if you just pitched me a penny per image... I don't know, maybe that's antithetical to your goals, but have you thought about that? Micro-transactions could be a thing...

**Mike Fix:** I've thought about it, especially for the API... Because for one, like I mentioned before, I'm not 100% convinced the API is a net positive thing for consumers. So if people wanna pay to do that, for some reason, maybe that's a more acceptable trade-off. Not really sure though. Yeah, so we've definitely thought about it.

We have -- if you go into Carbon, I think there's a page buried somewhere that describes a premium version, which is something like that; they would get embeddable saved snippets, API access, offline-saved custom themes and presets, and then Twitter unfurls. We could extend the API further that way, and that would be like a premium feature. Maybe not micro-transactions necessarily, but I do like what you're thinking there; that would be a very cool system to have... But yeah, some sort of subscription model for getting access to that.

Yeah, building a subscription Sass product nowadays is getting easier and easier with all sorts of different platforms - SASSify, Stripe's new billing portal... All sorts of stuff like that makes it easier. So that's definitely something I should revisit, see if I can use more of like a self-service system in place.

**Adam Stacoviak:** Well, if you're taking feedback from the user base, is there any demand that kind of gives you an indication that that idea might make sense?

**Mike Fix:** Yeah... I mean, we've gotten a lot of people asking for it, but it's not something that's like so strong...

**Adam Stacoviak:** "I need this!"

**Mike Fix:** Yeah, it's not so strong that -- like, they ask it in a GitHub issue, or post it on Twitter, but it's not strong enough where you're like "Hey, I need to build this platform out and put X more time into building this system", especially when that time can be going into other things that don't make money and still help the community, right?

I'm trying to be very cognizant of how we shape the platform going forward, so that it always helps users, it always stays afloat, and it always has a home in the open.

**Adam Stacoviak:** On the feel-good front, I really enjoy this being distribution for indie makers. I noticed, as you mentioned, affiliates; you'd mentioned that as a business model earlier, in regards to Dracula Pro. There's a button next to it that says Purchase. Is there a list anywhere where like -- I see you've got Night Owl in here from Sarah Drasner; I love that theme, it's super-popular on VS Code. I saw something recently, there was some sort of fundraiser around it; I don't know what the details are. But there's no outbound link for Night Owl, for example, to go visit it on the Visual Studio Code's website where you can view it and see its source, and maybe its homepage, or any blog posts that Sarah wrote about it etc. How do you see the resources from a visitor discovery standpoint on Carbon now?

**Mike Fix:** \[40:10\] Yeah, that's a great point you called out. I guess that's what's solidifying my answer here; for all the links that we've posted there, it's been third-party led. They've all reached out to me saying "Hey, can we get this affiliated link on Carbon? That will help me out. That will help my tool out."

And yeah, I would love to link to Sarah's fundraiser around Night Owl, for sure. I don't know, it just never came across my plate for me to lead that decision. But if someone wanted to put it up there, I'm sure we'd be able to find a good home that fits well within the application for causes that we want to encourage, for tools we wanna help out.

In the footer of Carbon we have an Offsets link; that is maybe like a tongue-in-cheek play on the words of Carbon Offsets, but it links to Project Wren, that lets people offset their Carbon production through a monthly subscription. So that's something where you're like "Well, that's only tangentially related to Carbon the tool", but it was a cause that we saw we had some opportunity to do something about, and wanted to take advantage of that. So Carbon has that link there that has encouraged hundreds of people to go visit Project Wren and hopefully start their own subscription... But Carbon also offsets its own yearly Carbon production through Project Wren, as well.

**Adam Stacoviak:** Right.

**Mike Fix:** That's part of what we use our Open Collective budget for, actually.

**Adam Stacoviak:** In terms of distribution for indie creators too, I wonder if you'll eventually run out of themes and need to promote themes too, and even font faces... What other creations could go into here that you point out to? As a marketplace, I wonder if that just has a certain threshold where it will end. Maybe it might promote a new language potentially, because hey, you support a language... In the dropdown, in terms of formatting, maybe it's around things like that... But there's obvious growth there, but not like, you know--

**Mike Fix:** Yeah, it's cool that you say that. The way developer tools are going these days, you build a developer tool - you raise VC funding; you create a new language, you have a whole round of venture capital funding in order to get your team off the ground. So maybe that is a future where Dark Lang could have a little affiliate link in Carbon and we add it to that dropdown.

Yeah, I could see there being a definite threshold, but the interesting part about these sorts of shapes of tools is that they're very temporal. If it meets the threshold now, a year from now nobody will wanna use Dank Mono anymore, or people will be on to the new hotness, whatever, and we can shift it up there... Which is kind of what I like about the marketplace idea - it's fresher, it gives people something to come and check out what's new...

And yeah, I could see it pointing to other things that maybe aren't so digital too, if there's other things that just developers and designers like. I can easily see pointing Carbon to that, as long as there's the right way to fit it within the product so it's not too distracting.

**Adam Stacoviak:** Yeah. When you have a core promise - every product has a core promise, and you deliver that first. I always say "Sell the need, plant the seed." Plant the seed is like "How can I check out Dracula Pro behind the scenes? Core product and selling need is "How can I get my code image to use Dracula Pro?" You know what I mean? So don't distract...

**Mike Fix:** \[44:04\] That's right. What I do like about this system too is that - sure, we might not be making much money on affiliate links, but by putting them on there we get to enhance our own product with better themes. We get to use Dracula Pro. Dracula Pro is being used on Carbon, and we get to use these pro fonts for free. And then we get to extend it to more people as well. So that's another reason I like that sort of model, even if it doesn't make money, which - we're obviously not hurting for money right now as a product... At least where we continually improve the platform. Affiliates like that are things that I'm definitely eager to try out. I would love to get some Operator Mono on there, or other sorts of things that I know developers love, but we can't put on Carbon without having the creator sanction it.

**Jerod Santo:** So those are some ways that you're gonna extend the product to capture some value, but what about extending the product to create more value? You said you want to enable creators and teachers to share code in ways that are more valuable and more accessible in all these different ways. Have you considered moving images?

**Mike Fix:** Oh, yeah. Absolutely. We would love to do that. It's one of the open issues right now. The cool part about that is someone actually created a prototype of it on Carbon on their own branch, and it's up there right now, linking to the issue...

**Jerod Santo:** Really? That's cool.

**Mike Fix:** And it says that you can record it, and then you type and it creates this GIF... And they said that they were gonna try to integrate it back into the platform, and I was like "Great, we'd love that. Go for it." And that's where we've left it now, and I'm like "That's amazing!" If they don't get to it, eventually maybe I'll get to it and try to integrate their code back in seamlessly... But if it's gonna be a contributor-led effort, I would love to have that be a thing, especially for such an amazing feature like that. It's something that I couldn't have imagined myself doing at first, and then someone just comes in and says "Hey, I did this." They're an educator; they shared stuff to teach people on Twitter, and they wanted to use these GIFs... So yeah, it's really a fascinating idea.

**Jerod Santo:** Well, I see the need, for sure. It's a really cool idea, especially refactoring... There's lots of reasons you wanna show the code moving around - before and after, maybe showing a type, or maybe showing an execute, you could probably fake that... Now, there is also asciinema.org, which is like "Record your terminal and we'll turn it into a --" Is that a movie? I don't know exactly how they implement it, but it's pretty cool.

**Mike Fix:** Yeah, that's really cool. We would love to make it so that it has not too many options. We probably don't wanna turn it into a full-blown studio... But yeah, definitely click record and start typing and change your themes, highlight some stuff... That would be fantastic. And people love to do that for tech conferences and stuff, so we'd love to help support them in that way, too.

That's an issue that at first glance I thought "Hey, we're not gonna support this. It's too much maintenance overhead." And then a contributor came in and built a prototype, and I was like "Okay, maybe we should support this." And I guess, going back to why I love open source - that sort of transaction or exchange would never happen. It just wouldn't happen in a closed source company, which is really cool to see.

**Adam Stacoviak:** That's way cool.

**Jerod Santo:** Yeah, it's spectacular to see that. a) maybe you didn't think about it. Sometimes it's like "I need to think about that." And then b) "I thought about it, but I didn't think I could pull it off, and here's the path to pulling it off now", whether you can just merge that into your product or not, or if you were to rewrite it, with that as inspiration - either way, it served its purpose, right? And that's amazing.

**Mike Fix:** Yeah. It's truly amazing. And if you go back to the issue too, I think my initial response was just like "Yeah, we're not gonna do this. It would take too much time on my end..."

**Jerod Santo:** It's certainly complicated.

**Mike Fix:** \[48:06\] "...or I don't know if I can do it." But then a contributor is like "No, I've got it. Step aside, I can totally take care of this myself." That's fascinating, in terms of distributed software development, but it's also just a really cool thing that someone's willing to contribute that.

**Adam Stacoviak:** Well, let's use this as an exercise then to maybe real-time vet how that feature ties into sustainability, and the way you mentioned it works on a plane, client-side not backend... Real-time vet that feature and how that would change the sustainability trajectory of Carbon right here, live.

**Mike Fix:** Yeah. So that's why I was saying I really wanna keep it pretty not featureful, in the sense that we wouldn't want to create a ton of different movie files or something, and then you have to have an encoding server in the background, and maintain all this infrastructure just to create a moving image... But there are things that you can do in the browser. You can create a GIF in the browser without having an internet connection. That seems like a perfect MVP for us to create, get the feature out the door, let people start exporting GIFs, and it still fits the rest of the platform without too much overhead. Yeah, if we can keep it on the frontend, we can keep it open source, we can fit it in with the rest of the code that's on GitHub, and people can run with the bugs, and then post the bugs themselves, fix the bugs themselves... And that helps a lot with the sustainability of these sorts of features, too.

**Jerod Santo:** Post a GIF of the bug in the GIF feature...?

**Mike Fix:** Yeah, exactly. \[laughs\] Like, ran this export and then using the tool itself to post the bug about the tool.

**Adam Stacoviak:** That'd be cool.

**Jerod Santo:** It might work. It might be too buggy.

**Mike Fix:** Yeah. \[laughs\]

**Jerod Santo:** So that's an awesome open source success story there, with that PR. In terms of other issues or user contributions or reactions, have you had any rough scenarios, are there any horror stories? That's like the happy story, but have there been any horror stories?

**Mike Fix:** Well, thankfully not, actually.

**Jerod Santo:** That's good.

**Mike Fix:** It's interesting, because I know that that happens a lot in other communities, and I do think about that a lot, in terms of helping sustain open source. I think it would be helpful for me to be a good example for what a maintainer should do in these sorts of situations, but I've never had to run into them, so maybe I'm not the right example yet.

We have had some amazing contributions recently... Like I said, fixing a bug that's been there since day one. This contributor came in - first-time contributor - fixed a bug that I had been staring at, or tuning and tweaking and fixing issues around it, and just creating this mess of code forever... And he just comes in and fixes it with a one-line change. He creates a pull request, confirms that everything's still working, all these tests, goes back through all the past issues that we were looking through, makes sure those still all work, and then just goes about his day. This is a really incredible, that really reinvigorated what I think about in terms of open source.

Another story there is just like - sure, they might be out of date at this point, but Carbon's readme has gotten translated to 12 languages. I can't even feel how much value that's actually giving, because I don't speak those languages, but I'm happy that someone wanted to do that, and potentially gave at least a description of what Carbon is to so many different readers. I mean, it has done something, because you can look at the map of wherever people are accessing Carbon from, and it's global. It's people across the world.

**Jerod Santo:** That's awesome.

**Mike Fix:** So those are the contributions that are really fun to see.

**Jerod Santo:** Yeah, that's great.

**Mike Fix:** Not too many horror stories though, thankfully, I guess...

**Jerod Santo:** Hey, that's a good thing. What about tools and techniques? As a maintainer of a stadium-style project, you're a one-to-many kind of guy - do you have any tools of the trade, like bots that you've written, or things that you say "I could live without this service" when it comes to maintaining Carbon?

**Mike Fix:** \[52:22\] Yeah, yeah. So the two main things that kept Carbon a free platform is using Now, which has a free tier, that just lets people like me create stuff. And I'm totally happy with that being a thing. It's like Carbon.now.sh, so it's like a fine trade-off there... And then Firebase is another thing that really -- I don't think we could have this stored infrastructure in place without that, because it's very pluggable...

But yeah, for maintaining stuff, tools and that sort of thing, I built a bot called Repo Ranger (reporanger.com). That's like a bot dedicated to helping alleviate some of the burden of being a maintainer. It very much stems off of my needs, but I'm building it with maintainers in mind, and I would love to add features to that bot if other maintainers had them. But it helps do tons of common interactions; it merges a pull request for you as soon as the build is done, so you don't have to watch it. It closes a duplicate issue if you add a duplicate label, but only after a certain time...

So it does this sort of manual interaction that a lot of people don't like when it comes to bots... But the way we do it - we don't close it in your face, we just say "Hey, we are gonna close this in the future", and give people a chance to respond and say "Hey, I don't think this is actually a duplicate. I don't think this is actually the sort of thing you're seeing it as." And we see it as an acceptable trade-off between keeping a friendly attitude towards our contributors, which we appreciate, and also automating some of the maintainer burden away.

It does a few other things, too... We automated comments just to keep things consistent for some of the issues that we don't wanna fix, or can't fix at the moment. That's one of the main custom tools we use. Besides that, we use the All Contributors bot to add contributors to our readme... And the fun thing about that is those bots actually talk to each other, so all I do is I add a label and I go away. It merges the pull request, then it'll add the contributor as a contributor to the product, which - the All Contributors bot opens a PR, and then that PR is automatically merged by the other bot once the build passes, and it's all pushed into the same thread without me having to look at it... And we have a couple pieces in there that is kind of hooked together with GitHub Actions. So that's the last piece that kind of fills in the infrastructure.

**Jerod Santo:** Yeah, that's super-cool. We use the All Contributors bot, but I always have to tell it what to do, and then it emails me telling me that it did what it was supposed to do, and then I get the email about the PR that it opened... So basically, every time I add someone to our list, I get three emails, and I would rather just apply a label. So I might have to look in to that Repo Ranger...

**Mike Fix:** Yeah, and take a look at Carbon's GitHub Actions workflows... Because we have a workflow in there that if you add a contributor label, it'll automatically add the comment for you. It says like "Add this author as this person", and then it adds the contributor label to the new PR, and everything just kind of works together that way. Still, you'd probably get emails though, I haven't solved that one yet, but everything else is pretty streamlined, and even if sometimes it doesn't necessarily save me time, it's just fun to see it all working together...

**Jerod Santo:** It feels cool.

**Mike Fix:** Yeah. \[laughs\]

**Jerod Santo:** You're just happy that you've got robots talking to robots.

**Mike Fix:** Yeah, it's a fun thing to see happen in the background.

**Adam Stacoviak:** To fully appreciate that, you have to have done it manually for a while though...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** \[56:09\] Because getting bots to talk together is pretty fun, but pushing one thing, or making one comment, or updating one label and orchestrating that you had once done manually - that's a feeling.

**Mike Fix:** Yeah, for sure. It's cool, because by using labels - that's the reason why Repo Ranger works around labels for the most part; other text-based things lets you configure it, but it also creates this paper trail, and this system that's visible about how people coming into the project expect the product to operate. New maintainers to Carbon eventually could look at my labels and descriptions of them and see "Oh, this is how this repo is governed." It's a tangible thing to point to about how maintainers should operate in Carbon. And it also lets people -- you know, they can open a pull request from their command line and add a label with the same tool in the command line and never even open up GitHub. Just have it all completely automated, but still have the paper trail that is GitHub.

**Adam Stacoviak:** In the pre-call you mentioned being halfway through Nadia's book Working in Public, which we've just put out an episode with Nadia on episode 408... And in regards to that, you mentioned you're halfway through that episode, too... So maybe less micro, more macro on open source, what's changed for you, reading that book and listening to half that podcast? You'd mentioned some big shifts in your mid in terms of open source, big ideas; what were those?

**Mike Fix:** Yeah, the thing I'm most excited about in terms of Nadia's book is -- well, for one, it's reaffirming a lot of the thoughts that I've had for a while, which is that open source doesn't necessarily have a contributor problem. There's a lot of other problems in terms of funding, and attention, and that sort of thing. It's still definitely not the public opinion; there's still many people building out platforms that help projects find contributors... And that's not the main problem of open source. So that's the main thing I'm excited to be affirmed by the book.

But as a book, I'm most excited about her anthropological approach to writing it, to taking ideas and putting labels on them, categorizing things, giving reference points for things to have further discussions on it. This is what I was telling Adam - that's why I'm excited there's a podcast coming out, because that's another data point that references back to this book, that references all of these stories... And we have this linkage now for us to build upon, a common narrative that will help set the course for what we need from an open source industry. We need to have the main problems be the problems people are aware of, and that book does a fantastic job at categorizing them and figuring out "Hey, stadiums suffer from this issue, where federations don't. And clubs maybe have these other things that we can pour a different sort of resourcing into." So yeah, that's been the main thing that I've been excited about in response to the book.

**Adam Stacoviak:** You mentioned in the pre-show also to bring some of that into this actual show, being a fan of Request For Commits. Which episodes have you listened to, and which ones are your favorites so far?

**Mike Fix:** Oh man, I would have to go back and look, it's been a while. I can't remember off the top of my head, to be honest.

**Adam Stacoviak:** Oh, I put him on the spot... Well, he'd mentioned he'd listened to a few, and I mentioned the finale, and that there was a 20-episode series, and I'd shared to Jerod that I had some mourning (so to speak) that that show has an end. I would love to see it come back someday. He'd talked about that and I'm like "Well, it's actually done." But it's still getting plenty of listens, and if you haven't heard of that yet, Request for Commits is at Changelog.com/rfc. Link in the show notes, and episode 20 was the finale.

**Mike Fix:** Yeah. I remember listening to the one with Henry, but I don't remember which other ones off the top of my head. But yeah, I love hearing ideas from both of them, actually. Henry is a fantastic model for what it is to be a maintainer, and honestly, I'm glad that he can serve as an example for what I hope people can aspire to in the future, which is making a career creating open source; not sacrificing a salary for building this thing that everyone relies on.

So I'm glad he can be there to be one example of that, and I hope we tell stories and share narratives in a way where in the future that's more of a commonplace thing, and not something that is just like lucky, or by chance. Kids going through college can be like "Yo, I wanna be an open source developer as my career. There's these steps to do it. I get into these systems, and I learn these skills", so that they can build software in a different approach. Because open source is sometimes the right way to do it. You shouldn't have to trade value, trade money to do it in the right way.

**Adam Stacoviak:** Well, Mike thanks so much for sharing your time today, and sharing your story most of all. I appreciate you being an awesome open source maintainer and someone that people can look to for advice, wisdom, and how to do things right, man. Thanks so much for your time, it's been awesome.

**Mike Fix:** Oh, thanks so much for having me, this was a lot of fun. Feel free to have people reach out anytime; I'd love to help. And yeah, thanks for chatting, y'all. This was awesome.
