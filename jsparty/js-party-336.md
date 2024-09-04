**Jerod Santo:** Hello, hello. Jerod here, your internet friend, excited for another awesome JS Party episode. And joining me today, my good friend, Nick Nisi. What's up, dude?

**Nick Nisi:** Ahoy, ahoy. I'm good. How are you, Jerod?

**Jerod Santo:** I'm doing well. I'm feeling very secure. Are you feeling secure, or are you feeling insecure today?

**Nick Nisi:** I'm never feeling secure.

**Jerod Santo:** \[laughs\] Well, then you're in a perfect security posture for today's episode. We are joined today by Simon Wijckmans from cside.dev. Welcome, Simon.

**Simon Wijckmans:** Hi, thanks for having me.

**Jerod Santo:** We are happy to have you. We're always happy to help each other write more secure code, deploy code more securely, do things better... Because there's lots of ways that you can get bit out there in the wild, wild world that is the web. And most recently, or at least what we're talking about today - I guess it's been a couple of months now, but it still feels fresh, the wound, was this CDN rug pull that happened with polyfill.io, where all of a sudden those of us who were... Is it called hot-linking? What was it called, when you just linked to someone's image directly? Is that called hot-linking, Nick?

**Nick Nisi:** That's a good question. I don't know, I haven't thought about that in a long time.

**Jerod Santo:** It's been a long time, because we learned better, as people would change their images out to things that we don't want, that directly linking to somebody's image, whatever that thing was called, was not a best practice in web development... But what was the best practice for a long time was using someone else's CDN, because - hey, lots of good reasons, right?

**Nick Nisi:** And real time update from Claude - yes, that is hot linking.

**Jerod Santo:** Oh, I drilled it. Awesome. My memory serves me well. Turns out every once in a while using third party JavaScript loaded from a third party host, even if it's a CDN that you think you can trust, is also not such a great idea. And Simon, you're here to help us unpack that polyfill attack, and talk about our security posture with regards to these topics. So let's start with polyfill and what happened. Can you fill everybody in, for those of us who weren't on the web that day, or are too smart and just always load directly off our own stuff?

**Simon Wijckmans:** So the way that I like to talk about this thing is third party JavaScript is basically like an example of a very real problem that we face in many things in life. If you refer to some third party thing that is dynamic, then at some point you're going to be taken by surprise. I'll give you a real life example... I once had a salesperson of a competitor repost one of my LinkedIn posts, and he said "Yeah, I totally agree with Simon", because I posted about something more generic. And I could edit my LinkedIn post to s\*\*t-talk their company, right? I didn't do that, because I'm a grown up. But that is essentially what you're --

**Jerod Santo:** \[laughs\] But you could have.

**Simon Wijckmans:** I could have.

**Jerod Santo:** And that's a lot of power.

**Simon Wijckmans:** Yeah. This sales guy just reposted me, right? And I could change my post. So what has happened with polyfill is a very real and more serious version of a dynamic thing suddenly changing, when we think it's actually behaving the same way as it was before, but it hasn't. So let's start with what polyfill is. So polyfill is a very popular package written by a very popular and genuine open source contributor, Andrew Betts. And so he went out and actually built a really useful package. So polyfill is a package that allows you to polyfill JavaScript, so make newer code work in older browsers.

And so that is something that became really important as we're struggling to support old browsers like good old Internet Explorer, right? And for some industries, this is still important. If you're a news website and you have a small percentage of your traffic coming from Internet Explorer - well, you kind of don't want to leave them out.

**Nick Nisi:** Yes, you do.

**Jerod Santo:** \[laughs\] Well, you want to, but maybe you shouldn't, because you're an adult.

**Simon Wijckmans:** Well, in 2024 you probably should, I agree. But look back seven, eight years when people added that script to their website for the first time. This was a very real issue. So people added this script to their website. Andrew Betts, the open source contributor - he wrote the code, but he didn't own polyfill.io. That was someone else. And that person in February this year somehow allowed a change of ownership to happen. I don't know the details of how that happened, that is not publicly known, but there was a change of ownership and the domain name polyfill.io was purchased by a Chinese company.

And so that Chinese company didn't do anything special with it for the first few months. On the main page of that domain they had a webpage that was saying "Yeah, this is just a polyfill package", and all of that stuff. And obviously, the wider web community noticed that change of ownership, and it was quite weird... And then of course, the open source contributor that wrote the package originally posted about it on Twitter... Some alarm bells started going off and there were a few mirrors available at that point. So Fastly and Cloudflare did blog posts about it, and they made a mirror available of that package on their own CDN. And that then triggered, funny enough, the Chinese owner of that domain to change their website and say "Protected by Cloudflare", which I found a rather interesting detail. If you go on the Wayback Machine, you can still see that header.

\[06:08\] The way that then things evolved over time is all of a sudden on the 25th of June certain users, depending on their user agent, would see that script, and that script would also include a third-party script itself pointing to googleanaiytics.com. So it was Google Analytics where the L was changed to an I. And that was then another malicious script that was known to redirect people to adult content websites and online casinos.

This is, in my opinion, an incredibly juvenile attack, because there's really not a lot you gain from that. Perhaps some ad revenue through generating click-through... But there's not really any big money being made here. And they also made it so that this attack only occurs on the initial requests. So when you refreshed that same website you went to, you wouldn't be redirected to that same adult content site or casino... So it became harder to debug.

The thing is that the bad actor could have pulled off a way worse attack. They could have listened in on keystrokes, and exfiltrated that, and only made that action happen in a small percentage of requests, from specific regions, on a certain time schedule, and probably fly below the radar for months. Because the reality is that most websites do not have client-side security in place. So whatever a third-party script does, they're just able to do, and they're not really keeping an eye on it.

That kind of brings us to the bigger problem here... We do a lot to protect our own infrastructure. We put all types of interesting firewalls, by all types of really senior and well-known companies in front of our own infrastructure to protect our infrastructure against inbound attacks... We spend money on protecting our supply chain, or better said, parts of the supply chain, so those that live on registries... And there's some really amazing companies out there that do a really good job at that. But then we still allow people to do things completely dynamically client-side. And we don't actually know what people are getting in a browser of a user. And that, in my opinion, is a big part of supply chain. And it shouldn't be sort of an entirely different subject, but the reality is that as we protect our open source dependencies, as we protect our infrastructure, bad actors will, of course, always look for a way to make themselves rich and make themselves successful in their careers... And therefore, executing attacks in a browser of a user is sort of a logical next step.

And so this polyfill attack was one of those examples where we just had to make a lot of noise as a community, to make this a known thing. In fact, if you were to go back to some of those posts back then, you'll see that we were being referenced a lot. We were one of the companies to notice it as a first. And then we put a lot of blog posts out, I put our PR people on it, they then got all of these media outlets to write about it... So for some time, people were aware of the risk. There is a real risk that we've gone back to a world where people don't know about risk, and they just kind of accepted it, and was like "This is a one-off." Reality is, this is not a one-off. Most websites still have over 20 of these, many websites have over 50 of them. Third-party scripts are completely dynamic. They can act completely differently from what you think. Even if you think they're static, there's nothing really stopping them from acting dynamically... Unless, of course, if you add a hash to your script tag, which unfortunately people don't do that often.

**Jerod Santo:** So as you said, this is just one way that this particular thing could go wrong, and a way that nobody saw coming, because you just don't think of domain name ownership change as something that is common, especially amongst an established brand/CDN. Imagine a similar move if the fine folks at the jQuery Foundation decided one day that they were going to sell jQuery.com, or whatever the CDN is for jQuery, to somebody else. Or any of these large providers of CDNs, basically.

\[09:51\] But that's not even the only way this could happen. I mean, you could have the CDN itself become compromised, and the ability to replace that file with another file, without having ownership of the domain... You could have DNS hijacking attacks, where you're basically not taking ownership of the domain, but you are pointing through a DNS hack to somewhere else that you do control... There's lots of different ways that this thing can go awry. And like you said, this happened to be a very public one, because it affected a whole bunch of websites. Wasn't it hundreds of thousands of websites using this?

**Simon Wijckmans:** About half a million from the information that is still publicly available. And by the way, there's still over 300,000 websites that have this domain still on their website. So the action that Namecheap took - which by the way, I've not seen happen very often, where domain names literally just pulled out of the air by the registrar... That definitely made this situation not as bad as it could have been. And you mentioned a lot of ways that you could hijack a script on essentially layer seven... But make no mistake, you can hijack things on layer three. You can hijack things on layer four. You can hijack things in many different ways, that many engineers don't even know about. If I interview a full stack or a JavaScript or a TypeScript-focused engineer and I ask them about what BGP is, border gateway protocol, and how the internet is routed, and how people attach routers to IP ranges, they often don't know how any of that stuff works. But the reality is that because of the lack of RPKI around the world, you can even hijack an IP address. So you don't even have to hijack the domain; if you have access to a trusted enough router in a certain geography, you can just hijack the whole IP range, and route traffic to different servers in a certain area. While this hasn't happened with third party scripts, it is technically possible. And we tend to think that because there's a nice green checkbox next to a domain name, because it has SSL, that it's by default safe. Well, no. There's a lot of things going on, and there's a lot of places where things can get hijacked. And with a third party script, that is everything from the storage bucket, to the domain, to the IP. You can do a lot of things here.

**Jerod Santo:** Yeah. Nick, how many third party scripts are you guys loading? You guys being your personal blog...

**Nick Nisi:** Zero. I load zero first or third party scripts.

**Jerod Santo:** Nice! Congratulations.

**Nick Nisi:** I'm as safe as can be, I think. \[laughter\] I am surprised by this though, because it does seem like -- I'm surprised that people are still doing this hot-linking thing. Because I remember when Crockford added an alert to the JSON parser, way back in the day...

**Jerod Santo:** Oh, yeah. And that was to raise attention, raise \[unintelligible 00:12:25.04\]

**Nick Nisi:** Yeah. It wasn't malicious per se, but it did break a lot of things, because the script execution just stopped on any webpage that was linking to it, and put up an alert.

**Jerod Santo:** Right. Now, on Changelog.com we do not load any third party JavaScript from CDNs, such as like a polyfill or some sort of a library that we're going to use... However, we do have two third party JavaScript files that load; one's off of plausible.io, and the other one is, I think, Drift, which is like a sales thing that Adam uses, where you can put the widget in the corner, similar to other sales thingies, and they can talk to you through that... And so those are two vulnerabilities that we have, if for some reason the Plausible folks or the Drift folks get attacked somehow, or... We just trust that that's going to load what it has loaded every other time that a webpage loads. And so far, so good. But man, how do you know...?

**Nick Nisi:** And I take it back, I am loading Fathom Analytics.

**Jerod Santo:** Ah, gotcha!

**Simon Wijckmans:** And I'm going to scare you. You're loading more.

**Nick Nisi:** Am I?

**Simon Wijckmans:** You've got Facebook, you've got two Facebook third party scripts, and you're using Cloudflare's CDN, and you didn't turn off Cloudflare Analytics, so you're also injecting their analytics scripts through their domain, which by the way, is cloudflareinsights.com.

**Jerod Santo:** Nick...!

**Simon Wijckmans:** So if someone were to buy cloudflare-analytics.com and somehow managed to sneak it into your code - well, formatting-wise, they could, right? So that's another thing here. They can typosquat their way into your site, and you would have a very hard time spotting the difference.

**Nick Nisi:** Yeah. Called out, I love it. \[laughs\]

**Jerod Santo:** The biggest grin I've ever seen out of a guy who's just getting ripped apart with the truth...

**Simon Wijckmans:** \[14:06\] Well, but this is the scary part. People heavily underestimate how many third-party scripts they have, because - well, if you use some proxy, and they add a script to your site... Well, you may not know, right? And this is another unfortunate truth about this. If I talk to prospects about just generally their situation, they often don't even recognize the scripts that they have on their own website. In many cases, I have even seen analytics companies that don't even exist anymore. And some of them are nice enough to keep maintaining that domain name, and they just keep it so that it doesn't get used for bad things... But there's also a few out there that are like -- there's literally domains out there for sale every day, that are still in people's website, embedded as a third-party script, or as a third-party image, by any means. Yeah, same thing.

**Break**: \[14:53\]

**Jerod Santo:** Well, let me draw an analogy to the real world, because - I mean, sometimes I have to go to the grocery store. And to go to the grocery store, I get in the car and I drive across town. And on that way across town to the grocery store, there are a thousand ways from Sunday in which I could be attacked, or things could go awry, and I could get hurt, or die, or arrested, or all these different things. But I still get in the car and I still go to the grocery store. Like, I just accept that risk. And so just defending Nick a little bit here - I mean, he really needs that Facebook tag, because someone might want to share a link to his website. Why is that Facebook tag on there, Nick? Is it contractual?

**Nick Nisi:** Testing. I'm just testing things.

**Jerod Santo:** \[laughs\] Okay, just picking on Nick because that's what we do around here. But broader point, we still have to make websites and do things, and there are reasons for these things. Analytics... Hey, we want to have a way to make our sales process go faster, and so we have this service that allows us to communicate with folks... And these are reasonable risks, aren't they, Simon?

**Simon Wijckmans:** Yes. And so -- I mean, if you use a third party script from a large, reputable company, that has big things going on, and they have a good security team, they know what to look for, they know what to protect, then of course the risks are way smaller.

The way that I tend to explain people how to assess risk about this is a little broader. It's like, try to always assess when you add a third party script to your website whether that company is really technology at its core. I'll give you an example. If there is a marketing influencer style firm out there, and their core business is introducing you to influencers that will go market your product, but they then ask you "Hey, add this script to your website so we can track conversions, so we can pay out commission", well, the answer there is "Is technology really their core business?" Well, probably not. Then you can start asking questions... Okay, who built this script? What is your process to secure that script? You can dig quite deep into that. And then you'll start quickly recognizing that, for some businesses, third party scripts are a way for them to operate, it's not their core thing, and the risks of those are higher.

\[18:00\] The great thing is that a lot of these companies, they don't make their scripts dynamic. So you can then self host these scripts, so you don't actually have to add their thing. You can take it, put it on some type of a storage bucket yourself, and provide it to your website as a first party script. That reduces the risks, of course. So that's one of those things to think about here.

I would say that there will always be risk on the web, but it's important that we verify, and we just don't blatantly trust stuff. And that's where my company is trying to focus on. It's "Okay, third party scripts exist. You need them." And we live in a world where we want analysis of things, where we want analytics, where we want a chatbot, where we want social media, SEO, all that stuff. You need that, we trust that, we recognize that. And the best thing to do is keep an eye on it, so that if there are changes, that at least that's not happening without you knowing, and that we can make sure that those changes are in line with what you would expect that script to do. That's more the high-level approach that I would like to encourage here.

**Jerod Santo:** Yeah. Even when it's not security that's the concern, a lot of times for me personally it's privacy; and even large, reputable, tech-focused companies, I still give the side eye. For instance, YouTube. We like to have some of our videos on some of our webpages. That makes sense, right? And so the YouTube embed is really nice. But the YouTube embed - unless you go straight iFrame; I'm not sure if they allow you to do that... But you're going to be using YouTube's JavaScript, that they are writing, which is in their best interest. And they are a large, tech-focused company, that's reputable, and certainly has massive security chops, because they have to. However, they may have business incentives that don't align with my incentives, and they may have privacy -- not injecting; the opposite of injecting. Extracting business incentives that I don't appreciate for myself, and for our website visitors... And so that's another area of the same conversation where it's like, you have to think through these things as you make these decisions. And honestly, sometimes we'll throw that embed in there, and I'll do so with like a little bit of consternation of like a) I don't really like what they're doing today, and b) I don't know what they're going to change tomorrow... Which really is the biggest concern, is you can't trust the network over time, because the network changes over time.

**Simon Wijckmans:** Yeah. And even if you trust, you must verify. That is the world we live in. That is the world that even since Ronald Reagan, with that famous quote, we should operate as actually verifying instead of trusting. And when it comes to our users - they put trust in us by going to our websites, and as a result, we should do what we need to do to make sure that whatever we use is safe. It really comes down to verifying instead of trusting, and not exploiting the trust of users towards us.

**Jerod Santo:** So what are some ways that we can verify?

**Simon Wijckmans:** So what I mentioned earlier I think is a good start. Try to differentiate products, third-party scripts, et cetera, from third-party vendors, and differentiate the ones that are built by reputable companies, with an inherent technical reason to exist, technology is their core existence, from "Oh, we also have a script" sort of businesses. And then from there, favor the ones that are static, and allow you to self-host. That is a thing that you can do.

And the great thing you can do then is host it somewhere else, on one of your own storage buckets, host it under the same domain name... If you want to use a separate domain name or you have a CDN sort of subdomain on your domain, you can use that. Import these scripts and add a hash to it, so that in the worst case scenario if someone somehow managed to make a change to that script by hijacking that storage bucket of yours, that that would not be successful; that's another thing you can do. And just really be diligent about your vendor choices there.

\[21:53\] The sad thing is that that will only get you to a certain extent, because there are things out there that are dynamic, and should be dynamic. For instance, all of these chatbot tools, they're dynamic. And even though the script themself, the third-party script in the first instance may be something that you can cache in some cases, and they make calls to other third-party scripts. So it becomes a bit of an unavoidable problem.

And then there are people that say "Okay, I'll just add a content security policy." And that is a great start, because content security policy at least allows you to define which domain names are allowed to be connected to through a script source header, or a connection header in a CSP header. You can define which domain names you could communicate with. That, however, doesn't actually go very deep, because you're just talking about third-party connections, you're not talking about the type of connection, the payloads, the content it's touching, the actual script it's fetching and the payload of that... It doesn't really allow you to go too deep on that.

So you can get to a certain level of security by using open source tools, and things that are native to browsers, but really dynamic scripts - you'll never actually be able to get to a full level of security that way. And that's where actual third-party security products like c/side should be able to cover you. Third-party scripts that are fully dynamic, that actually fetch third-party code, that has to change, where every now and then they add a new third-party domain to a script... Well, that's the bread and butter of what we're able to support. And of course, we're also able to support all of these scripts that you can self-host, and that may be slightly dynamic, or that sort of stuff. The thing is you can't actually protect all the way with the tools that are built into browsers today... Which isn't great, and we recognize that, and it's also why we want to contribute to new specifications on the W3C Foundation. But the thing is that today we're just not really set up to handle dynamicness in browsers very well through using content security policies or features like that.

**Nick Nisi:** Are there alternatives for these companies? ...specifically like the dynamic scripts that you might have to inject, like a chatbot, or anything. Is using npm, and versioning a version that comes through there better, or is that feasible? What are the trade-offs there?

**Simon Wijckmans:** Yeah. I mean, if there's an npm version available of the open source package you're importing, that's always my personal choice. I would prefer using that over a third-party script that's client-side fetched. The great thing is that you can use a tool like Socket by Feross, who I'm sure has been on this podcast at some point... Those kinds of tools are really good at what they do, because they have the added benefit that they actually work off a registry. And the registry is static, unless if it's an install script, of course; if it actually fetches a script through that. But when the script is static, those tools can do an incredibly good job at making sure nothing bad happens. So that is something you can do to reduce the attack surface.

So I'd say - yeah, it's like a step plan. Go through the scripts you want to use, make sure that you add the ones that are more technical inherent companies than others. If you can self-host them, self-host them. If any of those third-party scripts actually have an npm version, then use the npm version. Use a tool to protect that. If any of the scripts are really dynamic and must be dynamic, add them, make sure to check them, make sure to keep an eye on domain ownership, make sure that those companies have a certain level of compliance in place... Those are things you can do.

And by the way, this is another fun, little segue... As a security company, of course, we care about our own compliance, and we're going through all of these things, but you'd be surprised how many third-party scripts are out there that are by companies that aren't even SOC2 Type 1 compliant. And they are still present on very big companies' websites, very sensitive data handling companies' websites as well. So yes, this is a real problem. Check the compliance of the third-party scripts you add. That's another thing you can do.

**Jerod Santo:** \[25:51\] There's an inherent tension between, let's just say, leadership inside of organizations that use websites to make money, and engineering inside organizations that use websites to make money. And some of that tension I think is exacerbated by the availability of tools such as -- is it Segment? Am I remembering Segment? Which one's the adapter pattern for your -- well, let's just go with Google Tag Manager, for instance... Where it's basically like grease for the skids of how many third-party scripts can I load on my webpage without asking anybody for permission, because I'm in leadership... And I just wonder how folks can, at an engineering level, deal with a situation where maybe they don't have the entire control over everything that goes onto their webpages.

**Simon Wijckmans:** This is an incredibly real problem. When I speak to engineers about third-party scripts, the almost 100% consistent response is a sigh, or a facial expression that's like "Ugh." They are usually not the people that want them there. It's someone else within the company that asked for it. It's a marketing department support adding this tool, it's a POC of some other thing... Legal says "Add a cookie banner" and now that ruins all the great work you did on the user experience, because now there's this ugly pop-up by this weird company... Engineers are not a fan of this. I would say, depending on the executives, they're also not a fan of the bloat it creates. But the reality is it's unavoidable if your website is your product, is your business.

Tools like Google Tag Manager, and just in general tag managers etc. they exist because of that idea that at least you have some of your privacy under control. I really care about privacy as a company. We want to make sure that we do not add to the problem. I personally don't think that cookie banners are the solution to the privacy problem that is caused by third-party scripts. Because let's face it, as soon as that thing became a thing, server-side packages for these third-party scripts became a subject. And so that data is still being exfiltrated, and it's just dug deeper into the privacy policy or the cookie policy of that website. So that cookie banner - it's not really solving any real problems, in my opinion.

**Jerod Santo:** I would tend to agree. I think it's difficult when you are in that circumstance to feel like you can do anything to move the needle on the security, when you don't even have autonomy or agency with regards to what might pop in there tomorrow, let alone today.

I guess maybe the tactic must be for the engineers reactive and alerting, so that you at least know... Because one thing that can happen is you just don't even know. For instance, maybe a guy has to come on a podcast and tell you what scripts are coming on your website.

**Nick Nisi:** Real-time update. I removed the Facebook one.

**Jerod Santo:** He's redeployed... \[laughs\] Now you're feeling slightly more secure than you were at the beginning of the show, Nick. So that's a good thing, right?

**Nick Nisi:** I was shamed into security, and I thank you for it.

**Jerod Santo:** What was the Facebook one for, Nick?

**Nick Nisi:** It was just the tracking pixel.

**Jerod Santo:** Okay. What does that do for you as a website owner? I don't remember.

**Nick Nisi:** You can track what pages people are going to, and things like that.

**Jerod Santo:** Okay. So it's just an analytic tool for you provided by our friends at Facebook. Okay. Happy that we got one more website one step more secure and private than we did prior to the show starting. But when it comes to alerting, knowledge, knowing that things change - are these also tools? Is it something that c/side's building? Or how can you bring the awareness of that "Hey, all of a sudden you're loading this thing that you weren't loading yesterday"?

**Simon Wijckmans:** So there's a few things to what you said. So it is indeed true that the security engineers or the front-end engineers are ultimately being held responsible if this goes wrong, even though they were not the one that wanted the script there, and often companies have lacking diligence and actual frameworks around what it takes to add a script to a website. Many companies it's just opening a ticket, a generic ticket, or sending a Discord message to somebody on the frontend team... Or if they're a big enough company, they often have marketing front-end teams... There you go, it gets added. Bam. And it's there forever. Or it could even happen where it's a POC of a tool and they decide not to use it and it's still there after.

\[30:24\] So our go-to-market has been very "You want to use our tool? Great. We've got a free tier." Or we've got a business tier that's so cheap that you can just sneak it into an expense somewhere, and then eventually we'll go talk at a higher level. I think that is the right way to deal with a real serious problem, that really only engineers get. And then it's up to that engineer at some point to just have that 10-minute conversation with whoever is in security leadership, or whoever is responsible, to say "Hey, this is a real problem. This is how we solved it. We kind of did it without talking to you, but you should take this more seriously." And at that point we'll have a higher-level conversation with those executives, and get them to understand how we could be more helpful, which areas that we cover that other security solutions they have may not cover etc. So that I just wanted to cover real quick. And with that, I also forgot your question.

**Jerod Santo:** \[laughs\] Alerting, monitoring tools - are these things built? Are you building them etc? Like "Hey, all of a sudden you have a new thing on your page that you didn't have yesterday."

**Simon Wijckmans:** Yeah. So I tried this in my career, and it was incredibly noisy, and it made for alert fatigue, and it wasn't helpful. So the angle we've taken is quite different, where we basically try to understand what types of data are being accessed, or what types of actions are taking place... And when there's a substantial change in that, then we will start alerting.

If we must alert every time a script slightly changes - well, that is incredibly noisy, because a lot of these scripts are obfuscated. And if they make a small change to a timestamp, or to anything in there - it could be as simple as a version number. Because of the obfuscation working a bit like a hash, it becomes completely different. So using abstract syntax trees and all types of other tricks we pull on our site to actually understand on a higher level how the script performs, what it does, what it accesses, and then alerting when that substantially changes - that is the better approach.

The way we also work is -- of course, we are always working to improve this. We actually want to make this a product that blocks on your behalf if it must be blocked. And we do not rely on threat feed intel. Of course, we use it, so that if there's a low-hanging fruit, we've got it. But that's not our core thing. We built our own detection engines, that look at changes over time. And because we've also got that free tier, and we'll have a bunch of people's blogs where so-called there were no scripts, but there were then three scripts, we can of course see these scripts on many different websites. So before it becomes a problem for one of our big, high-security customers, we probably would have already seen it on some other websites as well.

So that free tier is not just an amazing "Use our thing and hopefully someday it'll pay for us." No, it is also actively making the product better for everybody, safer for everybody. And so by using our thing, you're basically making your own life on the web a little safer, if of course people use our product. And that's a pretty powerful position to be in. So we don't really want to go down the heavy alerting route, because it just doesn't really help. It goes in a massive queue of alerts people receive every day, and then it really only causes trouble afterwards where it's "Hey, why didn't you respond to this alert?" Well, because I get 500 of them a week. I cannot deal with all of these alerts. It just creates more pressure on the engineer that's ultimately going to be held responsible for when it goes wrong. It doesn't help. We have to be very diligent about the alerts that we send, and when we send them.

**Jerod Santo:** \[33:57\] Alright, this chapter is titled "Jerod avenges Nick by looking at cside.dev's script loading, and asking Simon to defend himself." I'm seeing a lot of script loading on cside.dev, Simon. I mean, we've got ButterCMS, we've got Unpackage.com, we've got Stripe.com, GoogleTagManager.com...

**Simon Wijckmans:** Yeah... We're a company.

**Jerod Santo:** Please, respond -- \[laughs\]

**Simon Wijckmans:** We exist, yeah. \[laughs\]

**Jerod Santo:** Nick is also a company. No, how do you guys make these decisions? I mean, I'm sure you're small enough that you were probably involved in most of these.

**Simon Wijckmans:** I mean, the reality is we're a business. We need to know things, we need to see errors happen, we need to have a little chatbot on our website... What you'll also see is that when you actually check those third-party scripts in the code - so without going too deep into how the product works, but the one that actually gets executed is behind proxy.cside.dev.

**Jerod Santo:** I did see proxy.cside.dev, but I left that one off, because it was too secure. I didn't want to bring that one up when I listed them.

**Simon Wijckmans:** Well, so all those scripts you mentioned were actually delivered through proxy.cside.dev, and those were the ones that were rendered. And so that passed through our detections. So we keep all sorts of relevant data in a really neat dashboard, and if any of those scripts started behaving completely different than they did before, they wouldn't be served on that webpage anymore. You'd get a fat 403, and that script would just not execute.

**Jerod Santo:** Gotcha.

**Simon Wijckmans:** But yeah, I mean, the way I selected those tools is "Let's find the best CMS I can find." I like Butter's CMS. Don't get me wrong, it's a great tool. It's got some small limitations, but it's a good CMS. There you go. Intercom to me looked like a good support platform to use for a while. That is until I checked that guy's Twitter. And then - yeah, since then I've been considering moving away from that. But so far, there hasn't been any major incidents with that third-party script.

But yeah, we use these tools because, as I said, we are a business. We do need these tools. We cannot live without them. And honestly, every website has third-party scripts, so I really don't want to shame people for using third-party scripts. They are there, they're unavoidable. The reality is we need to deal with them.

**Jerod Santo:** Yeah. I don't either. I'm just having some fun. So c/side's response to all this is "Look, if you're going to hire us to help you with this problem, you are going to take all of your otherwise third-party loading scripts, and you're going to proxy them through us, and we're going to do all of the fancy detection and blocking stuff there, and then you're going to load them on your page through our proxy." Is that how it works?

**Simon Wijckmans:** Yeah. So there's a few things happening, and a few things that we're still actively building, of course, because we only started in the beginning of the year. But the idea is that, indeed, we are part of that delivery of that script, where we can be. There are some scripts that don't want to be proxied, but then we also have a script in the website of the user that does that rewriting. And we monitor behaviors client-side as well. So we try to just literally use every detection capability that is possible today, and then see what it catches. Which unfortunately doesn't cover everything, because the W3 spec only allows certain things, and it doesn't cover every use case. But at least it's going to be way better than not having any monitoring in place at all.

And so situations like the polyfill incident - heck yeah, those were easy to spot. When a script suddenly starts opening WebSocket connections and streaming code into a browser when it hadn't done that before, and a few months earlier there was a domain ownership change of that domain, of that third-party script - well, we put one and two together and we can very easily say "Okay, that is something that looks fishy." We basically try to -- what you would read on the web about "This attack happened and this is how it happened", we basically give you that in the dashboard. And we use AI to parse through a bunch of stuff, and flag certain things. But yeah, that's basically the high level.

**Jerod Santo:** Gotcha. Nick, did I sufficiently defend your honor against Simon, or do you feel avenged? ...or are you just too busy redeploying more versions of your website that have less tags on them?

**Nick Nisi:** \[38:10\] No, I just removed that one... I didn't know about the other ones, so thank you. I do appreciate that. \[laughter\] But yeah, I think you did a good job avenging it. Thank you.

**Jerod Santo:** Thank you. I tried. I did my best.

**Nick Nisi:** \[laughs\] So c/side, it's injecting its own set of third-party scripts then, is that right?

**Simon Wijckmans:** So yeah, what we ask our customers to do depending on their website, depending on the framework they use - they either use an npm package of ours, or they add our script as the first one on their webpage to load. And that is it. And that script will pull the magic of making things proxy through us. The original scripts will still fetch, but they will not actually execute. And as a result, the scripts that will execute are the ones that came through us. So we have a full flow through of that code. And then we also still monitor client-side behaviors as well on top of that, and so that makes it easy for us to detect certain types of attacks.

And as I mentioned, I don't want to oversell this. We still have a lot of work to do, and the world still needs to improve its specification of browsers, because we still can't catch everything... But yeah, on a high level it's doing that, and it's making third-party scripts less likely to be a major issue. Or at least -- I mean, even if someone pulls off a really advanced attack, that we do not detect using client-side monitoring, well, usually there's going to be a change of something. So as I said, it could be like that there's a BGP leak happened, or there was a domain name change, or there was an SSL issuing behavior that was out of line, or those types of things we would then be able to catch. So we feel quite confident that regardless of the attack, there's probably some data there that would have indicated it, and now it's just a matter of actually making that alert and that block.

**Jerod Santo:** What are some of the things that the browsers could be doing, that would just alleviate a lot of these problems? Like, what features are browsers missing, that need to be specified and developed?

**Simon Wijckmans:** I don't want to talk too much about the specifics of things that we bump into where we're like "Oh God, it would be awesome if we could do X, Y, or Z", because that is very easy for people then to reverse-engineer... But I think there is definitely a positive trend now where browser companies are getting better equipped to deal with really big privacy issues. I mean, I was really happy when Google was trying to get rid of third-party cookies. Unfortunately, they didn't pull through with it. Manifest 3 --

**Nick Nisi:** I was gonna ask about that...

**Simon Wijckmans:** Yeah. Manifest 3 was one of those attempts as well, but they were a little too strong, and then it didn't go anywhere, and now it's all of a sudden going somewhere again, and they kind of watered down the spec... But I would say - in the movie industry, there is a saying called "Kill your darlings." Unfortunately, we have to do the same with browsers as well. We cannot continue to support every old API that has been around. We cannot continue to support bad behaviors that we somehow allowed many, many moons ago, that are still a thing. And I find that we really have to start cracking down on those as developers by a) not using them as buyers, by not choosing to work with companies that use those, and then ultimately, hopefully make it die a silent death, and eventually the companies that make browsers, they would just get rid of a bunch of these things. But yeah, unfortunately it doesn't look like we'll ever agree on anything in this world, so it's going to cause some disruption.

**Nick Nisi:** If you break my MooTools, I will be so mad.

**Jerod Santo:** That's when Nick will really get his revenge.

**Nick Nisi:** \[laughs\] But yeah, it's like a weird contradiction, because the most popular browser is funded by advertising solely, so it has to allow for advertising in some way, and for that level of tracking, and closing up a lot of these holes probably is going to go against that.

**Simon Wijckmans:** \[41:51\] Yeah. I mean, every industry in the world that's been around for a long time has had to go through this phase. In construction there was a period - I don't know how badly impacted the US was by this by any means, so it may be that nobody even recognizes what I'm saying... But in Europe, where I grew up, there was a period where people were amazing fans of asbestos. It was the savior of everything, and we should use it in everything. And then later on, it turns out "Oh, damn, we did something bad. This is actually really bad for people. Now we should really ban asbestos." And then everything that had asbestos in it had to be taken down and dealt with. You kind of have to go through a similar phase with the web, because there are still too many things out there that are really not good, and really shouldn't be a thing, and somehow, some people are still holding on to it... But hey, tough luck. Daddy Google is going to decide for you now that that is not something we want to do anymore. And by the way, 90% of the world agrees with us, because it's not very good for safety or privacy. And that's not how the internet has worked. I mean, the internet has been very open to everything from everyone, but that comes at a price.

So that, I think, is where companies like ours need to exist. Because we basically thrive in that space of "It's not great, and this is something that maybe shouldn't be a thing at all... But at the same time, it's great that the internet is so open, and that we can do what we need to do." But some businesses need to protect themselves against this type of behavior.

So there's basically a lot going on there at the same time... But I do hope for privacy and safety of everybody on the web, that at some point we do put our foot down a little bit more when it comes to sensitivity of data, and matters that could really on a personal level impact us. Because honestly, there's no space for that anymore.

**Jerod Santo:** And in the meantime, I think as individuals, of course, be as security-aware and conscious as you can be in your own dealings and your own websites that you control, but also work together to start to break the stranglehold that Google currently holds on the browser market, and use browsers that reflect your desires for the future of the web... Because that, I think, will in very, very small ways move that needle somewhere that we think it should go.

**Nick Nisi:** To a safer web, a Safari web.

**Jerod Santo:** \[laughs\]

**Simon Wijckmans:** Yeah, I personally don't believe in single heroes here. There is going to be some good browser projects that come up, that will help with privacy, and then they'll do awesome for some time, and then eventually they'll need money, and then something happens. Yeah, there's no silver bullet to any of this stuff... But I agree, and I find everybody relies on Google Chrome as their main browser, and unfortunately it does a lot of stuff that probably isn't great. It's a weird situation to be in.

**Jerod Santo:** Well, Simon, thanks so much for joining us on JS Party, and sharing your hard-earned security knowledge with us. Nick, did you have any other questions or thoughts before we call it a show?

**Nick Nisi:** I was going to ask if there's... No.

**Jerod Santo:** \[laughs\] And Nick comes through as always with the final word...

**Nick Nisi:** Yeah... \[laughs\] Wow.

**Jerod Santo:** Believe it or not, Simon, this is not the first time Nick has done this exact same move he just did right there.

**Nick Nisi:** It's true...

**Jerod Santo:** A big long sigh, followed by a "No..."

**Nick Nisi:** I'm trying to think of how to frame it, but I also want to -- I don't know, does it fit in right now, is I guess what I'm asking? But I'll just ask it, and then you can cut it if you want.

**Jerod Santo:** Alright. Consider it cut.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Just kidding. Go ahead.

**Nick Nisi:** I'm just thinking, are there things that we could do, that could be done better to avoid this third-party script thing? And I'm thinking -- there's a lot of things like chatbots, that are putting those things, injecting those things... That makes sense. And that's not something that I even considered when you said this. I'm like "I definitely don't have any of those" or "I've definitely never worked with any of those." I've definitely been the person who has been instructed by marketing to inject Segment, or all of these different analytics things into pages. So I've definitely been there, and didn't even realize it. That's like the work that was like "Oh, it got thrown on my plate. I want to get it done as fast as possible, so I don't have to think about it anymore... And I can go back to working on my eight megabyte JavaScript bundle and shipping that."

\[46:12\] But are there things that those companies could be doing to better handle things maybe on the server side, and would that be more secure? Like, if you're just doing some kind of analytics check, could you just have an API that the server is sending off "This is what they're looking at right now", without actually having to go to the client itself and then have the client send that out?

**Simon Wijckmans:** Well, so it depends on the stack that people use, of course. I mean, depending on the framework, there's either client side or server side actions taking place. There are tools out there that you self-host a big chunk of, so that you literally self-host a big chunk on your server side, or on a Lambda of yourself, and it talks to that, and it does a decent job. That's definitely a good solution. But then again, the problem here is that it is unavoidable. And you literally cannot get around using a third-party script if you're building something serious.

And so my advice is that people like yourself in the past, if you're in a large company and people just throw it on your plate, make sure that the security team is aware of this. Make sure that the CSO is aware that you're basically adding a completely dynamic bunch of like crying babies to the website. You don't know how you're going to babysit them. There is no plan to babysit them. They've just been thrown in. Because ultimately, your name is on that PR, and otherwise it's going to be "Who the heck did this?" And that's not a good position for anybody to be in, and you shouldn't be put in that position. But what I noticed is there's a lack of governance.

So it's not as much of a problem for the people that build these tools. They usually do get the security risks that they are exposed to, and that they're exposing their users to. I would just say "Hey, if you're dealing with this at a company, push back. Document it." Make sure people are aware that you are just doing what someone else asked, and that there is lacking governance around it.

And then if you really care about a problem or you're like "I actually think I have a solution for this here", use c/side. We've got a free tier. It's easy. And then we'll go from there. The ultimate dynamicness issue is unsolvable, so you need a tool to help you with that. And there's nothing native in a browser that will solve that for you.

**Nick Nisi:** So are pointing at examples like the polyfill example, or specific supply chain attacks on like npm, for example, or even very sophisticated potential attacks like the XZ thing that almost happened a few months ago... Is that the best way to raise awareness within your company, or within your security team, or within your leadership, to push back or at least really think through the risks that you were inherently giving to our users when we add these in?

**Simon Wijckmans:** \[49:00\] I would say so. I mean, the problem is you do not want to be seen as that engineer that's always negative and always sees security issues when there aren't any. And you can come across like that very easily to people that don't care as deeply about security as you do. And that's a very sad thing, because a lot of developers are not necessarily that security-conscious, or security-minded, or security-trained.

So yeah, I tend to think that unfortunately when these things happen, they do help. They help prevent more of these attacks in the future. And these need to happen before people care about it. I mean, in PCI DSS v4, so the standard, you have to adhere to if you accept payments on your webpage; there is now a new spec, the fourth generation of it, and the spec is way broader, and it requires you to monitor third-party scripts if they're on your payment portal. So if you have one of those beautiful models on your website that pops up a credit card field anywhere on your website, well then guess what? You have to have all of your third-party scripts in there.

So the fact that the PCI DSS, that community has put this in those rules - the only reason why it happened is because there were a bunch of these incidents, like the British Airways attack in 2018, which by the way, we own the domain to that, so if you go to baways.com, you can read in detail what happened there. These third-party scripts, they went rogue, caused a bunch of issues for banks, because they had to reissue credit cards for hundreds of thousands of people at once... People were unhappy, people were scared to buy things again online for some time... I mean, for the right reasons. If you got impacted, and all of a sudden your credit card didn't work anymore in the grocery store because you bought something online, then yeah, you'll think twice about it. These types of incidents have had impact, and those then lead to rules, and those rules then lead to security companies jumping on it and making solutions to it.

I have been in this space before PCI DSS v4 was a thing, I've always seen this as an interesting space, so I hope that our solution, especially because we make it so accessible to people, will be the beginning of the end of this issue. We will see how that goes, hopefully.

**Nick Nisi:** Awesome. Yeah, that sounds great. And when I'm having these conversations with leadership, should I have a tinfoil hat on, or no?

**Simon Wijckmans:** Not really...

**Jerod Santo:** Bring one for both of you, you know?

**Nick Nisi:** Yeah. \[laughs\] There we go.

**Simon Wijckmans:** Legitimate concern is the undertone you've got to go for. And you can Google what a legitimate concern undertone should look like.

**Jerod Santo:** There you go.

**Nick Nisi:** I tend for ghoulish overkill, so...

**Jerod Santo:** On the note of ghoulish overkill, let's end this show, before it becomes both ghoulish and overkill. Simon, thank you so much for joining us. Nick, as always, thank you for your overkill. On behalf of everyone here at JS Party, I'm just thanking you all for listening, and saying stay safe out there, or get safe if you're not safe. Either way, here comes your outro. Bye, y'all.
