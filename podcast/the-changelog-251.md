**Adam Stacoviak:** Hello and welcome to The Changelog, a podcast that gets to the heart of open source technologies and the people who create them. Myself, Adam Stacoviak and my co-host, Jerod Santo are talking to Matt Biilman and Chris Bach about JAMstack, a new way of building websites and apps that deliver better performance, high security, a lower cost of scaling and a better developer experience.

We talked about the redesign of Smashing Magazine on JAMstack, Netlify CMS, an open source CMS built with JAMstack principles, designed around a fully Git workflow, and the ways in which open source drives standards.

And we're back, we're talking about the modern web, JAMstack... Jerod, I literally just learned about JAMstack from you in the pre-call, because I hadn't even heard about this. This is so new... It's that new.

**Jerod Santo:** Well, I had just learned about it about a month ago, which was kind of the kickoff for this show, when there was a post published called "Smashing Magazine just got 10 time faster." We're gonna dive into that, we're gonna talk about JAMstack, we're gonna talk about CMS's, CDNs, Netlify... All sorts of fun stuff.

First, let's welcome our guests, Matt and Chris. Thanks so much for joining us.

**Chris Bach:** Thank you!

**Matt Biilman:** Thanks for having us.

**Jerod Santo:** So I suppose I should set the stage a little bit, since I arranged this call... I'm very excited to talk to you guys about this. We have a lot of moving parts to this conversation, there's a lot of actors... You're gonna hear JAMstack, which is kind of like LAMP stack or MEAN stack, only I look at it as upper layer, whereas those are referring to specific technologies, like Linux, Apache, MySQL and PHP, the old LAMP stack... JAMstack is up a layer, it's not speaking to specific implementations of technologies, but it's more the idea of JavaScript APIs and markup, that's what it stands for. The general idea is ship static pages and decorate them and build on top of them with JavaScript and third -- or maybe first-party, maybe third-party APIs... We'll get into that.

So there's JAMstack, and there's also Netlify CMS, which is an open source project, a CMS which comes from Netlify, the business, or the group. That's where Chris and Matt are from, co-founders. We're also gonna be discussing Smashing Magazine and the recent redesign, March 2017. They relaunched -- it's in beta right now, you can check it out at next.smashingmagazine.com. Brand new design, brand new technology stack, off Wordpress, and really a bunch of other tools and onto a custom thing built in JAMstack style.

Guys, is that a good foundation, or did I miss anything up there?

**Chris Bach:** \[00:03:47.13\] I think that was pretty spot on, yeah. The Netlify open source CMS is a Git-based attempt at bridging the gap and JAMstack is really all about enabling the decoupled way of approaching things, to journey away from monolithic apps. So yeah, I think you nailed it pretty good.

**Jerod Santo:** Cool. So we're gonna focus this conversation on JAMstack, and the cool thing is as Netlify and the team that rebuilt Smashing Magazine kind of from the ground up built it, they open-sourced a bunch of goodies, so not just Netlify CMS, but also GoTell, GoTrue, GoCommerce... These microservices written in Go that are powering the new Smashing Magazine and really enabling for this style of application. So we wanna focus on those things... I think we'll probably use the case study of the Smashing Magazine relaunch as a anchor or as a pin for the conversation, but we really wanna focus on the open source and really the ideas, if possible.

So let's start with JAMstack, because Adam just heard about it today, I just heard about it a month ago, probably our listeners for the first time... But we've all been kind of doing things like this for a while. Tell us about the term - did you guys coin it? Where did it come from?

**Matt Biilman:** It was actually -- I think the first guy that tipped the word was a friend of mine, Andreas Sæbjørnsen who works at Uber. It sort of came around because, as you mentioned, this is not really something new, right? It's something that people have been doing in different ways, like starting to really decouple the frontend and the backend. We've seen a huge growth in the space of static site generators and build tools, there's been a huge growth in just general frontend build tools like Gulp and Grunt and Webpack, there's the whole tendency around progressive web apps, and so on.

So it wasn't so much that JAMstack reinvented something and started doing something completely different, it was more a question of all these people starting to essentially build websites and web apps with a new architecture without really having a good nomenclature around it. And obviously, because of what we're doing at Netlify, we had contact with a ton of people in this space, and everybody was sort of suffering from not having a way to talk about what they were doing and not really having a category to refer to. That's when that term started to emerge... Like, everything we are doing is centered around shipping markup to the browser and then using JavaScript as the runtime, and talking through all these different APIs, whether they're self-hosted APIs, microservices, or fully managed services...

It's like, that's the core architecture, and seeing that people are really starting to build with a set of constraints. That means you started seeing -- we decoupled the frontend and the backend completely, and relied on pre-building as much as we can in markup and serving that directly, but then using JavaScript in the browser as the main runtime and talking to these different, very encapsulated services.

That's sort of when the term came about and started to be a usual nomenclature to talk about this category and this architecture.

**Jerod Santo:** As I was saying in the intro, the JAMstack does not dictate technology choices in terms of how you go about it. So the J stands for JavaScript - of course, that's a technology, so it does, but it's not at the level of a framework or a toolkit, correct?

**Chris Bach:** Exactly.

**Matt Biilman:** It's very true when you said that the stack has sort of moved up a little.

**Chris Bach:** I feel that it's really about this journey away from the monolithic workflow, where you have these apps where you have to run everything at a time... And we're seeing that they became more and more bloated, less and less performant, have more and more security issues. Malware is becoming a hundred billion dollar industry. 7% of all sites are hacked... At Netlify we get 60 million requests every month, alone starting with wp-admin that are just malware saying that if you happen to have a Wordpress site installed, we'd love to infect it.

\[00:08:11.11\] And the negligence test that used to be like six months of having a default Drupal site or a Wordpress site or anything like that -- you know, it's a normal site with a few custom plugins on the side, and you leave it alone for as long as it takes until there's like a 50% chance of something bad happening to it. And today people don't know, but that can be as little as two weeks, right? Basically, if you don't update PHP and SQL and Apache and the site itself and the custom plugins, things than go awry really fast.

So we see this way of building, this way of decoupling things where you build things in advance - it's a solution in so many ways. It's way faster, right? Because first of all, you can have multiple points of origin. Instead of having one server that runs everything, you can distribute the site itself on a content delivery network (that means on edge nodes all around the world). And you don't have to build it on the fly, which makes Time To First Byte and stuff like that so much faster.

At the same time, it reduces the surface area of attack from malware tremendously, because you're not running this huge, very popular monolithic app every time you have a visitor, rather you have all the runtime in the browser and it connects to the specialized API; that's a much smaller surface area, right.

And lastly, scalability. If you don't have to build it on the fly, it means that you can guard yourself against peak traffic in a completely different manner. When we started out, we were looking at Hacker News and every single day there seemed to be young startup that finally gets the break and they're there, and then it leads to broken sites, because they simply cave under the traffic. This way of removing the building and the hosting and decoupling the frontend and the backend really enables a lot of things.

And number two, we also feel that the legacy web is rendered on the fly, but the web we are building right now is dominated by Git. Now, Git is social coding, Git is a lot of things. But Git is also essentially working about structured layers of data, consistent layers of data, so something that runs on the fly and something that works with version-controlled layers, snapshots of data. It's not inherently very compatible, so for us it's also about building out best practices and workflows that support the modern way of building, which is Git, which is advanced markup and stuff like that.

Then we saw this trend, like five years ago front-enders were cutting out psd's -- I know it's putting it up a little bit square, perhaps a little coarse, but still, I worked with a lot of friends in this that were cutting out stuff in psd's, converting it into html and then sending it off for implementation. Today you have front-enders that are not front-enders anymore; they're web developers. We should think about that nomenclature as well, because they're doing advanced markup, they're compiling. The JAMstack is all about enabling them to close the loop without having to send something for implementation into a monolithic app with everything that comes there. So it's sort of a broad mission.

Then we just felt like talking about static sites made very little sense, because first of all it's not static at all, it's just that the dynamic part has moved up a level, so now it's going on by runtime on client sides, right?

**Jerod Santo:** Sure.

**Chris Bach:** And it wasn't very fair... And of course, there's also a negative connotation with a term like "static" that didn't do this movement justice at all. When people were calling us and saying, "Okay, so let us explain our stack" and then they spend like ten minutes describing what really is the JAMstack, which is this modernware of a git-centric way of working on ine side and then using API microservices on the other side...

\[00:12:05.06\] And they were looking to get viable workflows as far as publishing, and use a CDN and all those things. So for us that's just the JAMstack, and it's not proprietary in any way whatsoever, it's just that it's a little bit easier way of talking about things, and it really is about trying to introduce some best practices.

**Jerod Santo:** Yeah, I like that. You got everybody speaking the same language.

**Chris Bach:** Exactly.

**Matt Biilman:** \[unintelligible 00:12:27.05\] that we've seen some really cool projects built with. But just with the term 'static', I remember him telling me that they had just at Instrument built a major project based on Middleman, and he was like "This is a project with 200,000 lines of code in Ruby. It makes no sense to talk about it as a static website." It had a whole layout published in static JSON as an API that could be consumed by JavaScript client-side... So a super-complex project. And again, it was just a sign of how badly needed the new nomenclature was at the time.

**Jerod Santo:** Yeah, we actually had a show on Middleman a while back - maybe two episodes, I don't recall, but we had that conversation with him as well... Very interesting.

I'm also a little bit of kind of a new-age journalism -- not aficionado, but these things fascinate me, so I enjoy hearing the stories of how new publishers - especially indie publishers, which Changelog is - go about publishing today. So that was interesting, to see what Vox Media had done with Middleman, and stuff like that.

You should probably point out, because I said there's the CMS, there's also Netlify the business, and it's worth noting that while all these technologies and ideas are not proprietary, very much you guys have skin in the game, of people doing this style of application. Can you tell us about Netlify and what it is?

**Chris Bach:** Netlify is a broad automation platform. So really, it's an attempt at a custom infrastructure, which is a CDN that's built out virtually on top of a bunch of different providers, and provides instant cache validation and high cacheability and atomic deploys. It enables a lot of the logic that used to be on the server-side, but brought straight through the edge nodes, and because we have that, then we were able to build out a bunch of features on top of it, and then wrap it all up in automation. And what's really the idea here is that developers have a place where they in a few minutes can get all the best practices: custom domain, HTTPS, continuous integration into Git, and a post-process site that's globally distributed.

Then we scale of course that for businesses that also want to get all the performance benefits and the security benefits and so on and so forth, but from the JAMstack. That's Netlify as a business. But what we strongly believe is that everyone is better off by not rendering on the fly, by not using these monolithic apps, so for us it's very much about pushing the category forward, and that's why we're so engaged in open source, and that's why we're also -- I'm sure we'll get back to the whole Smashing project, which was all about saying "We'll invest heavily in building out these microservices, as long as you guys agree that we get to open source it with everyone else", because we do believe that that's how standards are pushed, right?

**Jerod Santo:** Absolutely. I wanna hear a little bit of the story of the Smashing rebuild. We're coming at about five minutes before our first break, so if one of you can give us the quick summary of what happened, the 18 months, the things that had to be developed... If you could do that in five minutes, that'd be great. On the other side of the break, I do have some pushback on specific points, because I believe that -- and you guys are all in on this; it makes total sense that you're very bullish on it... In engineering there are tradeoffs and there are many situations where the JAMstack doesn't necessarily fit very well, and I think we should talk through some of those; I think it'd be fun to go through a few of the finer points with you and have a conversation.

\[00:16:08.03\] So who wants to try and just give us the background of where Smashing was, why JAMstack was selected, how it was built and that whole thing?

**Chris Bach:** I think Matt can do that, because it really started with an article, an appearance at a conference, and then the whole thing went from there.

**Matt Biilman:** Yeah, I'll try to give a quick version of the story. I got asked to write an article about static site generators back in November last year...

**Chris Bach:** 2015, actually.

**Matt Biilman:** 2015, yeah. I wrote an article called "Why static site generators are the next big thing" and when I passed Smashing Magazine the first draft -- of course one of the points was about how performance can be a lot better with this approach. So basically Smashing immediately pushed back and said like "That's fine, but you need to also compare a static site generator built site with a highly optimized Wordpress site that uses all the cacheing plugins and so on." So what I did was that I took Smashing Magazine itself - that very much fit that bit - I did a static scrape of it and put it on Netlify and then just ran a common speed test against it, and showed that it would be six times faster on average if it could live directly on a content delivery network.

I put that back in the article, and I must admit I kind of expected them to be like "Yeah, we're not gonna publish that. It makes us look bad", or something... But he was totally game and just put a check mark on it and published the article. Then that article became the article in all of 2015 on Smashing magazine that got the most engagement. Based on that, they asked me to give a talk about this new stack at Smashing Conference in San Francisco in April of last year.

I gave my talk there essentially about JAMstack, and after that the founders of Smashing came over and said "We saw these numbers and we've been looking at this... What would it take if we wanted to put all of Smashing Magazine on Netlify? What would that actually require?"

So we sat down and really started looking at what would it actually take. One thing we could see was that at the time their system consisted of -- Smashing Magazine is not just articles; they have a shop where they sell eBooks and printed books, they have their event pages, they need to sell tickets, they have a job board... And at the time they had Wordpress for the main magazine, an old Rails site for the job board, Shopify for the shop, Kirby for the events pages... And then they wanted to introduce their new membership feature, and had no idea where into the system that would live. They already were struggling with having to maintain the same themes across five different platforms, and keeping all of those in sync.

What we could see was that in the space of the JAMstack there were still some holes in the ecosystem. There were no good open source solutions for all of Smashing Magazine's needs, and based on our experience we could see that what they needed at the time was not super unique or anything, it was just something that wasn't there in the ecosystem at that point.

So as Chris said, we basically told them "Okay, we are gonna make a huge exception from how we normally work, where we just give people a platform and they build, and we're gonna take a role in this and really help you build this project. But we are going to make everything small, reuseable APIs that we can make open source and that we can just contribute to the general ecosystem, because we really believe that there's a need for that in this JAMstack space." We already had the initial version of Netlify CMS, but needed to take it to another scale to handle the amount of content and contributors that Smashing Magazine has.

\[00:20:08.19\] The we built out GoTrue, which is the layer that handles authentication for Smashing Magazine, we built out GoCommerce, which is a completely headless e-commerce API, we build out GoJoin for managing subscriptions for their membership features, and GoTell as a comment engine and We made all of these open source and helped them get the new Smashing Magazine to become a reality.

**Chris Bach:** Matt, perhaps you can also just go into it, because the e-commerce is not like we built out Shopify in any way, right?

**Matt Biilman:** No, I mean one of the things that's really interesting with this stack is that if you were to build in the old stack an e-commerce, then you need to build all of it - you need to build the product catalog, management and all these things... You need to build all the UI for rendering the HTML pages and so on. But GoCommerce is a very simple API that almost condenses down to two API calls: one is to create an order and one is to pay for the order. It doesn't have any user management, because that's handled by another API; it's just sent back and forth in the form of JSON web tokens, completely stateless. It doesn't have any product management, because that's just handled by the website itself. When you trigger an order with GoCommerce, you just tell them to pass up the product on your website and GoCommerce will look up that product and get the metadata from that and calculate the price of the order and so on.

Because of these architectural constraints - there's no product management, that's just managed by Netlify CMS as part of managing the general website, and because of that it was viable to build these tools. If this had been a traditional stack, this would have ended up being a completely custom, big, monolithic app that wouldn't really be reusable for other people. But because of this decoupling between the frontend and these different small services, it was possible for us to condense all the functionality that smashing magazine needed into a set of small, simple APIs that only do one job, but hopefully does it well, and can be reused by anybody else needing several of these functionalities.

**Jerod Santo:** Let's pause real quick here, because I wanna pick back up on that specific point... I have questions about the GoCommerce aspect of it. But we're hitting our break, so let's take that up on the other side of this break. We'll be right back.

**Break:** \[00:22:42.04\]

**Jerod Santo:** Alright, we are back and we were talking about the JAMstack, specifically the JAMstack implemented on behalf of Smashing Magazine, and all the cool open source that came out of that.

A couple of questions referring back to the other side of the break, Matt, when you were talking about the GoCommerce and the e-commerce side of Smashing Magazine... You said that there was no product management. I'm not sure I follow that - tell me if I did - because the actual product descriptions and imagery and all the things that you would need for product management are stored in the Netlify CMS... So then the GoCommerce just reads that, is that what you're saying?

**Matt Biilman:** Yeah, basically all that GoCommerce expects when you create a new order is to send it a list of line items, and each line item has a path, and then in the settings for GoCommerce it has the main URL of your website. So what GoCommerce will do is that it will look up each of those paths on your website and then it will look for a special script tag with some JSON inside it that is the metadata for the product. That's sort of the source of truth for the product. So even if all of the checkout and so on is handled client-side with JavaScript, you can't fiddle with the prices and so on, because GoCommerce will look at that metadata and verify the prices. But it means that GoCommerce doesn't need to have a product database of things like that, but if you build this with the typical e-commerce system, you would need all these products to live in the database of the e-commerce system, and so on.

**Jerod Santo:** What about inventory, coupons, tax rates...?

**Matt Biilman:** All of the tax rates and so on - they are defined in the settings file, again, on the website. GoCommerce will load that settings file and then do all the tax calculations based on that. The coupons are even stored on the website, as well; of course, you need to make sure you set some form of authentication for those, so people can't just go and read what coupons you have... But the idea is that you just give a URL for authentication where your coupons are stored, and then GoCommerce will just read that - they're defined in JSON and will define some rules, and GoCommerce will verify all of that.

We don't have inventory yet for GoCommerce, but we also have some plans for that.

**Jerod Santo:** So back to the coupons - you put your coupons at some sort of endpoint that's accessible via the web, but is protected somehow via some sort of authentication scheme? Or are you just talking about basic authentication?

**Matt Biilman:** Typically just HTTPS plus basic auth.

**Jerod Santo:** Right. So your GoCommerce microservice has that authentication, but the frontend doesn't, so it can make that call and nobody else can.

**Matt Biilman:** Precisely.

**Jerod Santo:** Okay. And no inventory yet.

**Matt Biilman:** And once you do that -- of course, for Smashing Magazine all of this is managed in Netlify CMS, but again, there's no coupling here. GoCommerce doesn't know that Netlify CMS exists, and you could even use GoCommerce with a traditional rails application or something like that; it wouldn't care. You could also use it together with an inventory managed in Contentful, or if your business has a CRM where all your products are stored, or a big inventory system, you can generate the website from that, and then hook up GoCommerce. GoCommerce is completely decoupled from the other parts of the system.

**Jerod Santo:** Right. So how do you manage the -- I'm just stuck on the security there. You have some sort of endpoint that's just password-protected somewhere. How do you manage the credentials for that, because isn't the whole point that you can ship it off to a CDN and not even think about it anymore? But now you have to password-protect a certain portion of your website.

**Matt Biilman:** Well, it depends a bit on your CDN how easy that is. One option - if your CDN can't do it, you could put that specific file somewhere else. In the case of Netlify, we make it really easy to define basic auths for a specific path. So in the case of Smashing, it's sort of trivial to just say "This path requires authentication." If your CDN doesn't support that, you will need to put that file somewhere where you can require authentication.

**Jerod Santo:** \[00:28:09.05\] Right. So it gets more complicated unless your CDN has specific features now.

**Matt Biilman:** Or you can potentially just put that file under a long hash URL that's not exposed anywhere.

**Jerod Santo:** Just hide it?

**Matt Biilman:** Yeah, essentially. I mean, if you use a very long one, with enough cryptographic complexity that no one will ever be able to guess it, if you use that in the URL and it's not linked to anywhere and not exposed in any site maps or anything, then that will work as well.

**Jerod Santo:** Yeah, perhaps if you're selling T-shirts and stuff. It depends on the -- it's just risk versus reward, I guess.

**Adam Stacoviak:** I'd certainly put that in 1Password, too. I don't know about that... I'd definitely need it linked somewhere, so it might actually get clicked from some point and exposed.

**Matt Biilman:** Yeah, \[unintelligible 00:28:57.11\] \[laughter\]

**Jerod Santo:** I just feel like that's a slippery slope.

**Matt Biilman:** And for a bigger setup, I would absolutely recommend using basic auth. And of course, it's \[unintelligible 00:29:07.14\]

**Jerod Santo:** Right. Moving a little bit aside from that, one thing that's struck me with -- and we'll move off of Smashing here in a minute and talk more about the CMS, because we'd like to... But one thing that struck me is - Chris you said that building monoliths is a problem, and these big systems that all have everything in them and dynamic-rendered, and with this system now you have microservices... But wasn't Smashing Magazine already...? I mean, one of their problems was they had too many little things, right? They had a Ruby-based shop, they had a Wordpress-based blog, they had a Magento and then later a Shopify-based... I mean, they didn't have a monolith, right?

**Matt Biilman:** And that's part of the problem with the monoliths - you can't really mix and match them. If you're in Shopify and Shopify can't drive your magazine because it's not really a publishing platform, then you can't really just use Shopify, right? If you're on Wordpress and their e-commerce features are not really up to par with what you want, you can't really use Wordpress for the whole thing, or you have to go with using Wordpress for everything, and then you are sort of stuck in that world.

Their problem was not so much that they had different services involved, but that with the monolithic approach you can't really mix and match those services, whereas with the JAMstack approach they can just build one frontend that talks to all these different services, but all of the design layer and theming layer and all of that is in one place.

**Jerod Santo:** So you're saying they basically had four monoliths.

**Matt Biilman:** Yeah.

**Jerod Santo:** And it's better -- because, I mean, your code has to live somewhere, right? So this is like "Move your monolith to the frontend." Microservices on the backend, decouple those, and then couple it on the frontend where it makes the most sense, because that's where your styles, and that's where your layouts, and that's where all those things need to be shared.

**Matt Biilman:** Yeah, that's correct.

**Chris Bach:** Yeah, exactly. I mean, the whole point, again, is getting away from having to build everything every time someone visits. And of course, you can optimize against that to some degree by putting stuff in front of it, but at the very end of that you still have your HTML, you still have your Time To First Byte, you still have the basics that are running on your own server somewhere, and that's where we wanna gain.

I guess we'll get back to it as well, but Sarah Soueidan - she was the front-end developer for Smashing Magazine and she talked a lot about how that worked, or how you push your pattern libraries instantly, live; the style guide is actually working... Because she wasn't sending anything off; what she was implementing was the site itself. But I'm sure we can talk a little bit about the Smashing Magazine case later.

**Jerod Santo:** \[00:31:58.16\] Right. Let's talk about what came out of it. We've talked a little bit about GoCommerce, a very simple microservice for transacting... Because they had comments there's GoTell, \[unintelligible 00:32:11.08\] a lot of things. GoTrue for auth, as well as the Netlify CMS. One point that I would just make around this idea of JAMstack is it's not that you're removing complexity, you're just pushing it into other places, and lots of times that complexity goes into other people's pockets, so to speak...

So you're using services, and whether they're services that you write, or third-party services, which is the case for Algolia, which is being used for search, and people use Disqus for comments... What's often missing is those -- which is very easy on dynamically-rendered sites becomes very difficult all of a sudden, and now there's not solutions out there. So one of the things I'm excited about is how many things you guys had to build to accomplish this, because now actually there is an e-commerce thing we can use, and there is an authentication and a comments thing we can use if it fits our use case, as opposed to having to rely on somebody else's service, which could go away, could charge lots of money... Thoughts on that?

**Matt Biilman:** We obviously thought it was very important to start helping out, building a solid open source secrets system. Because as you mentioned, we've seen over the last five years this really powerful service space ecosystem emerge that wasn't really there five years ago, right? Where you have tools like Disqus and Algolia and so on. And when you look at the traditional web space and you look at, for example, the CMS layout, it's what Chris was mentioning... For the JAMstack there are some great solutions already in terms of Contentful, Data CMS, Forestry and so on, but they are all proprietary. And when you look at the traditional CMS space for dynamic sites and so on from the legacy stack, then you'll see that there's a bunch of businesses that are really good businesses, like SquareSpace, Wix, Weebly, SiteBuilder and Indigo and all of these other proprietary CMS's in the CMS end of things, but even when you combine all of those together and you then look at the statistics for what tools most websites build with, combined, all of those goes into this little grey sliver called other, and even Joomla - good old Joomla - is bigger than all of those combined in terms of actual share

**Jerod Santo:** What?!

**Matt Biilman:** Then you have Drupal, and you have Wordpress, which is just in a completely different league.

**Jerod Santo:** Sure.

**Matt Biilman:** So what we're seeing is that open source drives standards, and for these really strong standards to emerge, we have to have a really healthy open ecosystem. That was one of the major reasons that we said yes to Smashing to make this huge investment in building out all of these services and so on. Because when we started this project, we really thought that so many of these services were either just available in proprietary form, or they were available inside specific agencies that have built their own stack, and that might have open-sourced some of the tools, but where all the main knowledge of how to build a big project in this way was tied inside proprietary repositories and so on... And we saw an opportunity for really contributing.

**Chris Bach:** I think also part of the story is that -- Matt's background, he was the CTO of the largest agency in Spain, that made more than 100 websites a week, so on a very large scale, and I came from an agency background as well... And what we saw was that the APIs - obviously, they can be anything and everything, right? So all these microservices can be job boards, and could be -- they could really be so many things, but there are some things that are much more standard than others. Content management, comments, subscription, commerce, and of course authentication, and form handling.

\[00:36:18.28\] Those are sort of the ones that you would see again and again and again, so it made sense for us to say, "Okay, we're going to put some effort into contributing something to this space..." As far as open source APIs goes, those should be it. So you have like a basic toolkit that you can run with, and of course, do anything you want with.

The whole point here is staying agnostic, saying you can use two of them and then do your own thing for the rest, or whatever. That's the beautiful thing about decoupling the frontend and the backend - you get to mix and match. And since you don't have to run the code together, it's not like if you chose a traditional legacy system, you choose for example PHP, and that's just the end of it.

When I was in agencies, there was a CMO or someone that said, "Okay, we wanna use Wordpress, because that's what we're used to updating." That's a lot of good reason for choosing it besides that as well, but the point is just that no matter what, I had to go back to ten developers and say "Okay, now we're coding in PHP", because that's just the name of it, right? Whereas now you can say "Well, let's look at the resources we have, and what's interesting to us, and what will bring joy. Should it be made in React, or Go, or .NET, or PHP?" or whatever, because the build tools now are executed differently and we don't have to run them anymore together on the site, so you can have both.

So I think the darling for us here was really the content management, because as I mentioned earlier, there are some fantastic services out there... They're all proprietary. If they are open source, they're sort of more with a smaller scope, and then most of them are API-based. And for us, all of this is about enhancing that Git workflow. So everything we do, whether it's open source or it's part of the business, we always measure ourselves with "How does that play into the Git workflow for a developer?" and I think that the CMS -- Matt was the one who saw the opportunity of saying "Okay, what if we did a Git-based CMS? What if this was actually just like a single-page app that was built all agnostic, would work with any site generator, but then just worked with consistent layers of data in Git?" because then it's a 1-to-1, right? It's not something you make work with Git, but it's just part of that workflow.

And then on the other side if you can get a local dynamic real-time preview of everything you do so you feel completely at ease, but every time that you click Save you're actually running a branch deploy preview. And every time you say, "Okay, that looks fine", you use rich text editors, it looks completely like anything would for a content editor that isn't a developer, and whatever they're used to from a legacy point of view, but when they click Publish, then it just merges into Master behind it.

So far you had to choose, right? CMS, obviously - we can all agree; that's a no-brainer - is not for developers. The developers would rather just write the code; the CMS is an extension of the code that really just enables content developer writers, right? And so far you really had to choose who you are catering to, right? And we thought that maybe (just maybe) you can have that where you can get both, where you can have a developer workflow that isn't compromised; you stay in Git, this is your workflow, this is how you do things, this is how everything fits in, and this is how you collaborate with everyone else, but you also cater to the end users as far as content editors go.

I think that's the really important thing here. We're getting a lot of contributors already that are taking this and running with it for their own use cases, which was exactly what we were hoping for.

**Jerod Santo:** \[00:39:58.20\] That's the key point that I think Adam and I were missing as we discussed this before the show - the Netlified CMS that came out of this, this Git-based workflow, we were thinking "Is this just a CMS for hackers? Because sure, we love a Git-based workflow", but going back now, thinking how Vox Media and The Verge made Middleman work for them... Their journalists aren't writing in text editors with Git; they use Google Docs, because that's what they like to use, and they take the output of that and create static sites. That's because they don't want to have to teach all of their journalists the command line in Git.

**Chris Bach:** Exactly.

**Jerod Santo:** So you're saying that it's Git-based and it's all text files under the hood and you can edit those directly and just commit and push, but it's also providing a nice user experience for authoring, which doesn't rely on them knowing Git at all?

**Chris Bach:** Not at all. They don't have to know how it spells, they don't have to ever have even heard of GitHub... Not at all.

**Jerod Santo:** Nice... So tell us about that - how does it work and how does it get integrated into... How do you use it and set it up?

**Matt Biilman:** Basically, as Chris mentioned, the idea of the CMS is that it's a single-page app in React, and by default it just talks directly to GitHub's data API. So the way you set it up is that you essentially just have to include two files in your final website - one site is indexed HTML that we give you that just loads the React application, and typically you'll put it in a folder called "admin", as the index file. When you go to /admin, it loads the CMS.

Then the other file is the YAML file, config.yaml, and that's simply where you configure how is your content structured for this specific project. The CMS in itself doesn't care what you use your content for or how it's published or what kind of static site generator you use, or if you're even using a static site generator. You could use it to manage anything you want to be persisted as structured content in a Git repository.

It has a core abstraction called "Collections", so all content is organized into different collections. Right now, at this moment, collections can be persisted in two different ways.

One way to persist the collection is that you have a folder where it's similar entries, that all have the same custom fields, they have all the same content inside.

The other way of persisting a collection is that you have different unique files that each have their own content type and structure. The first kind, for Smashing for example, it's all the articles, it's all the categories, it's all their eBooks, it's all their events and so on. Each of those are a collection of similar files.

Then the other kind of things are, for example, the coupons - there's one specific file with basically a JSON document that the CMS manages. The settings is another file, the curation is a file in itself that has like "These are the featured posts, this week's featured category" and so on.

Based on that configuration file the CMS gives non-technical or people who just don't want to write code a UI that's very similar to what you would expect from any other CMS. You get your collections that you can navigate between; for Smashing you can click on Articles, you can see a list of all your articles... You can click on an article, and when you click on an article you get a form on the left hand with all the fields for that article.

\[00:44:04.12\] Then on the right you get a preview running directly in the browser of how will that article look like when you publish it. Similar to if you've ever used Ghost and you've used their markdown editor... Just instead of being completely unstructured where you just have a title and a markdown body, in Netlify CMS you can have any kind of structure of the data. For Smashing you might have a title and an SEO description, and a main image, a summary, and then the main post body and so on. But as you type, you will see a preview on the right side of how will this actually look like once we hit Publish.

Then the beauty of this system is that as an editor you just go and you maybe create a new article, you write that whole article and then you hit Save. And instead of saving that article in a database like in Wordpress, it will create a new pull request in Git, create a new branch with that article with those changes, and create a pull request, and you have a Trello-like dashboard where you can see all the pull requests in process... But again, completely abstracted away from the Git terminology of pull requests and so on. It's really just like "Here's your draft, here's the ones that are ready to review, here's the ones that are ready to publish..." and once you hit Publish, the CMS will merge in this pull request and it just supposes that you have some kind of system that handles rebuilding the site every time that happens. And of course, we think Netlify as a platform is a pretty awesome solution for that, but it's not a requirement at all either.

**Adam Stacoviak:** So I've been kind of silent for most of this show right now, but I'm curious if I got this right... So all the collaboration still happens in the Netlify CMS admin area, wherever that is where that lives, although you could still collaborate on GitHub if that's where it was hosted, or BitBucket or wherever you can host your Git code. So the idea though is for the collaboration to take place inside the CMS, not inside of GitHub, but you could if you wanted to.

**Matt Biilman:** But you still can, and that's one of the beauties of it. Normally, one of the parts have to compromise. If you use Wordpress, then the developers have to give up on a Git-driven workflow and so on, and now all content is just in some binary blob in a database; you don't get version control or anything like that, and it's a very separate workflow for how the developers work, with all of the themes and everything like that. And if you just use a pure -- if you just go all out, just use Hugo and GitHub, well then the content editors have to compromise, right? Suddenly, they have to learn how to interact with it and understand the concept of pull requests and so on.

This approach is really about giving both of these sides what they want, so the developers just have their normal Git-based workflow. And as a developer, you can still edit the content directly in your text editor if you want, and completely ignore the existence of the CMS if you prefer that. But as a content editor, you can on the other hand completely ignore the existence of GitHub and text formats and all of that, and just work in the CMS, use the Rich Text Editor and publish.

**Adam Stacoviak:** We're up against our next break - actually a couple minutes past, but let's break here and when we come back we'll kind of talk a bit more about workflow, and then maybe throw some hardball questions at you.

**Break:** \[00:47:37.29\]

**Adam Stacoviak:** Alright, we're back with Matt and Chris, and of course, Jerod, talking through JAMstack - modern tooling for different workflows I would say, Jerod... Different workflows for producing a site like this. Editorial teams... It seems you've taken care of the developer side, as well as the non-developer side needing a more CMS type of workflow, and that was probably the biggest question I think we had coming into this call - "How do you do the workflow?" because if it's simply a code-based or a GitHub issues/pull requests workflow, then you sort of x a ton of potential users, and essentially lock out journalists, unless you teach them things that they shouldn't have to learn to produce good content, right?

**Chris Bach:** Absolutely.

**Adam Stacoviak:** It seems you've solved that, although I would potentially throw in an argument of maybe it's kind of like a lack of focus in a sense -- I'm not sure I would term it that, but that's the only one I could think of... You've got basically two ways you could do it. So maybe you have some collaboration on GitHub and maybe you have some collaboration around an article, where you essentially have to force people to choose a path. You wouldn't want -- or maybe you're actually inheriting some of the issues and some of the collaboration happening on a GitHub-type place to sort of allow people to choose their own path or use both. How does that work in the CMS? In this Trello-like dashboard of the editorial workflow do you see collaboration on GitHub or whatever you're using to host your code? How does that work?

**Matt Biilman:** We tend to see collaborations in both places, but as the CMS matures, we see more and more of the collaboration around content move into the CMS layer, and then the collaboration around design and code and those changes happening in GitHub.

It's very powerful though that the two are tied together, because often when you make design changes, being able to just always work with the real content and so on is also part of it, and getting the same guarantees for the content that we are used to have as developers for our code, that you can always run git blame, right? You can see at any point who made any change at any time to any piece of content, how did it look like before, you can always reverse a change... You can always see a snapshot of how did your website look like at any specific point in time, for example. All of these things are really powerful.

We're trying in the CMS to also lean as much as we can, without getting too tied to a specific platform on features like pull requests and so on that are not just Git, but are also tied to GitHub, or hopefully in the future also GitLab and so on. Right now the CMS backend requires GitHub, but we have a pull request in process to support GitLab as well.

**Jerod Santo:** That's exactly what I was gonna ask to clarify - is this a Git-based backend or a GitHub-based backend? And it sounds like right now it's GitHub, but that's not the end goal.

**Matt Biilman:** No, we want to support a broad solution of Git backends. Right now GitHub is still far ahead of the curve in terms of their API for interacting directly with commits and trees and things like that... But we are on the one hand working with using the current GitLab's APIs to let the CMS work with that, and then the guy that made that pull request has also opened an issue on GitLab itself around enabling some more APIs to get the integration even tighter.

**Adam Stacoviak:** Yeah. I have to admit I've always longed for this type of CMS where you can have what we've known for GitHub - being able to have a site that has a static site generator feel where you can actually use the code right in markdown or whatever your workflow is... But then you sort of lost that CMS approach which allowed to autocomplete tags and have all these extra fields and features like you're talking about that Smashing needed...

\[00:52:12.18\] So I've kind of always longed for -- it always seemed like this pipe dream, so to speak... Like "Who's gonna build that? Will they actually succeed?" and it seems like we're talking to the people who may have done it.

**Matt Biilman:** We are working on it at least. \[laughter\]

**Chris Bach:** We're doing our best, but yeah, that was exactly what we aimed for.

**Adam Stacoviak:** The things that I guess or I'm assuming that in terms of editorial workflow, when they're writing content, it's written to a markdown file... Or is it written to JSON? Do you have control over that? What's that like?

**Matt Biilman** Yeah, you can control it. Internally, the CMS has a concept of formats, and you can set the formats either for a collection or for a file. Right now we support a body with front-end matter, that will typically be like a markdown body and then front \[unintelligible 00:53:01.12\] in either YAML or JSON or TOML. Then apart from that, the CMS right now can also edit JSON files or YAML files or TOML files directly.

It has this concept of a format, so the idea is also -- from the beginning when we built this CMS we thought a lot about making it an extensible system where for a specific project you can add things to it. So we are planning on exposing that formatting abstraction. So for a specific project, if you had some weird internal format or whatever, you could write a little formatter that essentially needs to implement two methods from file and to file, where from files takes a string and returns a JavaScript update of structured data; to file goes the other way - it takes a JavaScript update and then outputs the file format you want us to persist in Git.

So the CMS from the ground up is built with these abstractions in mind that lets you adapt it to a lot of very different use cases and to be very flexible.

**Jerod Santo:** One thought I'm having here as a developer is I sure hope I can have my content and my code live in separate repositories.

**Matt Biilman:** You can do that if you want to?

**Jerod Santo:** Does anybody else not want, like, just fix a spelling error on article number 47 in your history...? The people who are using the CMS side of it - I just feel like there's a lot of commit noise that would come into your Git history.

**Matt Biilman:** That's true. By the default setup you do get some commit noise, but on the other hand, you also get this super power of being able to see how exactly did your site look like, not just from the theme perspective, but with all the content at any specific point in time.

But again, the CMS doesn't care about what you do with the Git repository, so there's also nothing stopping you from creating a separate Git repository for the code and a separate one for the content, and then just manage the content one with the CMS. We've even talked to one guy that's working on using the CMS to edit a repository just with content, that then gets exposed as a static content API, and then consumed by a Rails application. So the CMS is really in its essence a tool for managing persistent structured data in a Git repository with a user-friendly interface for people who don't want to write code.

**Adam Stacoviak:** What's the state of this thing? I know you'd mentioned that you've kind of broken your own rules, so to speak, as a service, to say "Yeah, Smashing Magazine..." I mean, who says no to Smashing Magazine, by the way? \[laughter\] If you get a chance to open source some cool stuff, establish some standards... As you mentioned, open source creates standards... If you get a chance to do that, you kind of have to think twice for sure about like "Yeah, we should definitely do this!"

I imagine a lot of this is still sort of proving the concepts, but it sounds like even Smashing Magazine hasn't fully rolled this out yet, so it's at next.smashingmagazine.com. Is this a work in progress? What's the state of this? Can people pick it up now? Where are we at?

**Matt Biilman:** \[00:56:16.26\] We are starting to have a lot of people picking it up, and we are starting to have even the first external maintainers on the CMS that are not part of Netlify. We've been using it internally for a long time in production.

If you go to Netlify.com, you'll see that we have a very active content strategy with lots of blog posts inside of a week, and documentation and so on. We've been dogfooding the CMS for a long time now and are using it there. Obviously, this is a work in progress; there's a ton of work going on and there's a ton of improvements coming, there's 10 open pull requests right now... So it's very much a living project, but you can start using it now, and for some use cases right now it will be a very good fit.

**Chris Bach:** But it's something that we have developers on, as well... We wanna keep pushing this, and we have dedicated resources just for this going forward, because we think it's worth it. Of course, if no one picked it up and no one wanted to contribute, then we would have to say we were barking up the wrong tree, but right now there seems to be a lot of interest for it.

I think because of the reasons that we've talked about earlier, of accommodating the Git workflow and still giving the content editors an experience that's not technical and so on, this might be a real, real thing. So at least we're really psyched about it and we keep going, and it can be picked up... Anyone who wants to use this and share whatever they do around it...

I think in general with the modern frontend stack there's so many -- like, look at static site generators... There's so many custom Jekyll installs out there... Millions. People have done so much work around it, but either they're not comfortable or for whatever reason it's not really open source. Where the basic tooling is open source, the workflow is really off.

So yeah, anyone that picks it up, we always encourage it ("Of course, of course!") but we also really -- if they wanna share it with the world, then that's even more beautiful.

**Chris Bach:** And I should also just say that some of the things we are working on is just also to make it easier to pick it up.

**Matt Biilman:** Yeah.

**Chris Bach:** For example, writing the configuration YAML file by hand - now we are working on a UI for that, and so on. We keep pushing to get the initial setup even simpler, and we'll probably also push to get more -- like, we have one starter theme right now. We'll flesh that out a bit more and we'll launch more themes with the CMS integrated just to make it easier to pick up and get started with.

Right now if you want to use it, it's ready to use and you can start using it now, but you need to be fairly hands-on. Of course, as we progress, it will just get easier and easier to get started with it.

**Adam Stacoviak:** Is there anything in this conversation that was more Smashing Magazine proprietary kind of stuff that had to be built on top of - because you're obviously building this out - and is there anything that wasn't Netlify itself? Netlify CMS I should say, actually.

**Chris Bach:** The only part that is proprietary to Smashing is the actual frontend work specific to their design. Obviously, that's all specific to them. Then we had to write some scripts specific to the migration around -- like, how do we get stuff out of their Wordpress database with the set of plugins they are using and into Hugo, and some of that is very specific. But apart from that, I would say that everything that Smashing is using is completely open and can be used by other people.

**Jerod Santo:** \[01:00:07.23\] That's something worth pointing out, which we haven't stressed much, but we should definitely give a shoutout to Hugo, which is a Go-based static site generator that's super awesome. A friend of the show, Steve Francia at Google, who's been on GoTime just recently.

**Matt Biilman:** I would go as far as saying that the Smashing project itself right now would probably not have been viable without Hugo, just because it's pushed the performance of static site generators so far... With all the articles and all their events and pages and eBooks and everything... The Hugo part of the Smashing Magazine built for production build is a little more than 10 seconds.

**Chris Bach:** Yeah, it really is fast. What we did was also, as part of that - and again, so people could take that experience and starting using it themselves - we made a boilerplate that's also open source, it's called Victor Hugo... A boilerplate for epic websites. It basically packs in asset pipeline and Webpack and so on, so you don't have to install that on the side. It just works. So it is of course Hugo, but with a little bit of extra functionality there, so it's just easier just to get started.

Then we're working on templates, as well. We have a few templates already, so people can start with the CMS and Hugo and get something to up-and-running as frictionless as possible.

**Jerod Santo:** One last question for you guys before we let you go... Just listening to this conversation and thinking about JAMstack, and -- by the way, the CMS looks spectacular, so thanks so much for putting that out there for people to go check out and hopefully contribute back. This seems like a nice advancement in these types of things.

I can't help but think... This movement seems like a reactionary movement to past experiences... Like, I'm never gonna get Slashdotted again type of stuff, or Hacker-Newsed, or Dug, or I don't know what you get anymore... Whatever it is, that influx, right? Because we're all afraid of the concurrent users thing hating our dynamic; the rendered page, and the database going on fire - we've all had that experience, most of us with Wordpress. It seems like you guys have referenced Wordpress quite a bit. Matt, you mentioned how Joomla has a bigger user base than a lot of these little services we're talking about, which I think is amazing... And I just wonder how much of this is a reaction, and perhaps in certain cases an over-reaction to bad experiences with Wordpress, whether the non-cached version or a caching plugin that's giving you hell... What are your guys' thoughts on that? Because it seems like you've mentioned PHP and Wordpress quite a bit as the anti-pattern, and this as the solution to that problem.

**Chris Bach:** Well yeah, Wordpress is easy because it's 27% of the internet, right? So it's an easy reference and people know it; Wordpress is just an example... There's a lot of monolithic apps out there, so it's just so people have a frame of reference. But I think there's a lot of answers to this, because yes, one of it is -- you know, a few years ago you couldn't build out your own CDN. A CDN wasn't accessible for anyone else but the ones that could go and negotiate their own peering agreements with data centers all over the world, right? And now it is. So that also means that the performance benefits you get from working in this way are becoming really high; you really get something out of it. But I think there's so many things...

There's also the emergence of mobile making performance even more important than ever before. The malware issue is increasing, so the pain points there are larger and larger every day. But I also just think that technology matures, right? First of all, JavaScript and browsers have matured to a point where it just makes a lot more sense the more you go on to use these external APIs, even on most monolithic apps... You know, like Facebook Comments, obviously, also by Facebook; you use that API. So you talk to it from the client, you don't run your own comments section as part of your monolithic app anymore.

\[01:04:11.13\] Someone told me the other day that more than 90% of anyone running a monolithic app will still actually have most of the things that need real-time dynamic updating be connected to from the browser to the API, so it's sort of happening anyway. Then you have the Git workflow, right? Git is a real thing, and that way of working I think is a natural progression of saying "Okay, that's not something that's happening... That happened." That is sort of the way that most people work with version control collaborator on code. And accommodating that workflow as much as you can will just -- that's also a natural development of that, right?

So I think there's so many answers here, and there's a lot of planetary enlightenment here of microservices, of advanced markup and Git workflow, of all these things that are sort of coming together, and all of a sudden being able to actually quite easily push to a global network, so you don't have to have that single point of origin anymore. All of that, all of those possibilities are what's pointing the arrow, so to speak, right now.

**Jerod Santo:** Yeah. I mean, I think when we look at specific points of the security point, I think there's a conflation perhaps there, because the advantage that you're getting by moving off of a Wordpress or a Joomla to a smaller custom thing, whether it's a microservice or a slightly larger custom CMS is because it's obscurity. It's because there's fuzzers out there hidden in /wp-admin like crazy, in fact; we know this very well, because we used to be on Wordpress ourselves, and one of the things Adam kept asking me was like "How do we lock down our admin? They're hitting our admin at all times", and I said "Well, the answer is you just get off of Wordpress and then you don't have that problem anymore." \[laughter\]

For our site, we have a Phoenix-powered (Elixir) CMS that renders every single time, it's dynamic; we routinely have sub-50 millisecond response times, we have a very small footprint... There's the security - we have the obscurity now, we don't get hit, no one's coming after us... So that's a little bit of a conflation, because I think you get that just by moving off of those things and not because of the JAMstack in particular.

The surface area - you say you have less surface area, I guess. I mean, there's still -- the same amount of functionality requires more or less the same amount of code, and so really you're just saying "Well, this code lives over here now, and that code lives over there", as opposed to all in one place, so maybe you have more obscurity.

Performance - anybody who can use Varnish can stay off of getting Slashdotted... So there's workarounds for that; cacheing is a thing that works. So that's why I say perhaps there's an overreaction in certain cases, but I do really like the idea of -- first of all, the Git-powered workflow is very nice. I really like the idea of having freedom of choice each time you go to build a new section of your website, in the microservices term... But now you also have an orchestration problem. So there are tradeoffs going on here, right?

**Matt Biilman:** Of course. Any architecture will always have tradeoffs, that's just inevitable. Obviously, we're doing this because we think the tradeoffs are really, really worth it for a very, very large amount of projects. Then there's some projects where they won't be worth it, and there's some projects where these constraints are not a good fit. But I think from my point of view and also as someone that's sort of -- before we started building Netlify I was building a fully hosted content management system called Webpop, which was a dynamic system, and that started sort of at the time when I saw everything starting to change in frontend development...

\[01:08:11.21\] But I learned from building tens of thousands of websites, and with Webpop, a fully hosted platform for thousands of web projects, in the vast, vast majority of those projects there was really no reason that this couldn't just be done way more efficiently with this kind of stack and save so many hurdles in terms of operations, in terms of just automatically getting the performance, and also in terms of creating a cleaner architecture where the services that need to run during a visit are very isolated and you are very aware of those, and the rest is just pre-built. I think from my experience this is a very healthy set of constraints.

**Chris Bach:** I also think that what we see is that again and again -- so you talk about obscurity... That definitely helps, right? I mean, if no one is targeting you, then there's not a malware issue. But malware can be something that infects a build face, but a build face has to go on, right? Someone can hack your site by themselves and try to guess your passwords, but 99.999% is completely automated, and malware has to infect the build process. So if there's no build process, as soon as you remove that, that means that you're taking away the surface area of attack. Then you're reintroducing it by APIs, and that's a question of "Are they smaller and more specified so they don't get the same attention, and by that live in obscurity?" Then there's also the question of you don't necessarily have to run all the APIs, depending on how the usage is of the site, whereas in a traditional site you will have to run something no matter what, in order just even to serve the HTML.

About performance, what we see is that you can have these fantastically optimized sites, but if you look at the global traffic, then if it's the server in New York then the Time To First Byte and stuff like that is really low. But then if you go to Tokyo or TestMySite.io or something like that and you test it from different points around the globe, then you'll often see "Okay, well any traffic coming from Tokyo or something like that is a lot longer." That's because a CDN and Varnish Cache and stuff like that can be great also for caching some things, but not necessarily all of them, and very often the HTML and the Time To First Byte has that roundtrip to the origin server included. Some of them we know from talking to them that they're spending like an obscene amount of money every month, like tenths of thousands of dollars on their setup, and some way more than that, and they still have much to be left aside when it comes to initial lowest times, especially globally. So your points were super valid, but there's that to take into consideration.

\[01:11:02.16\] And the other thing \[unintelligible 01:11:01.21\] something where you don't have to worry about it. Maybe since we're always doing this hosting provisioning, but we didn't actually know how much traffic there was going to be there, but if you put it in some cheap host and it did go down, then there will be hell to pay, right? So you left it on something bigger, and even then, three or four times a year it went wrong because there was a viral event and it really went off, right?

I feel that having something where you can just automatically push it, no matter if it's a small landing page that wants to send out samples for detergents and only is accessed by a QR code in a few local supermarkets, and basically gets a few hits a day, or it's your own personal blog post, or if it's something that's getting like millions of hits every day - knowing that you can have sort of a default setup and just work with it, because it's JAMstack based, because it has multiple origins, because it doesn't have that thing that has to render every time, that I feel is a pretty powerful thing.

**Jerod Santo:** Yeah, absolutely. I think one of the places where this style of application has lacked is in tooling and available libraries and stuff, which is why we're super happy that you guys and people like you are working on open source tooling and building out the ecosystem of microservices that people can start with, so we actually have more viable ways of getting these dynamic, yet static JAMstack sites without having to give up all the dynamism which makes the web so interesting. So for that, we're thankful.

**Chris Bach:** I couldn't have said it better myself. Not the thankful part, but... \[laughter\] But saying that retaining all this stuff that's great about the web, having all that personalization and all those services, but at the same time scaling in a viable manner, right? That's the goal.

**Jerod Santo:** Absolutely.

**Adam Stacoviak:** The best place then to go to get started -- you do have some pretty good documentation... When I say "pretty" it's not a degradation, but a compliment. Good documentation, get a quick start at netlifyCMS.org, so we'll link those up in the show notes.

We didn't quite cover Getting Started, but we'll leave that for the docs, because they are just that good. Thank you very much for coming on the show today.

**Chris Bach:** Cheers!

**Break:** \[01:13:19.15\]
