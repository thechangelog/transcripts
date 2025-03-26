**Jerod Santo:** So I'm here with Ilya Grigorik from Shopify, back on the show after years and years. You've been on the show I think four or five times, Ilya. Welcome back.

**Ilya Grigorik:** Thank you. I'm glad to be back.

**Jerod Santo:** What have you been up to, man? I think it was 2021 last time you were on the show, we were talking to Hydrogen. You're still at Shopify, so you've been there a very long time... What have you been up to?

**Ilya Grigorik:** So I think last time we talked about custom storefronts, and a big mission we had at Shopify to enable developers to build customized storefronts using their own application stack... Since then, I've spent a lot of time diving into our APIs and infrastructure, and then also, kind of in a roundabout way, ended up spending a lot of time in checkout, which at the end of the day is kind of the engine of the entire eCommerce operation. Perhaps an apt analogy is kind of like air traffic controller within your commerce operation, because everything, all the planes have to land there. You can think in different pieces in isolation - you have taxes, you have shipping, you have fulfillment concerns, you have inventory, but all of that has to come together during checkout, where you have all the different policies, all the different negotiations, all the UI that needs to be in place... And that has been a really interesting and complex domain to kind of wrap your head around and navigate through. And of course, I think today we're going to dive into one particular aspect of it, which is the compliance aspect, which I admit is not something that I thought I'd be working on, but it turned out to be a really interesting technical challenge.

**Jerod Santo:** So you've been at Shopify for how long now?

**Ilya Grigorik:** In dog years, it feels like forever. In chronological time, I think it's been four years. But it's been a pressure cooker.

**Jerod Santo:** Yeah. And you before that, I think -- was it GitHub, and Google, or you were at PostRank? You started PostRank? Can you tell us just briefly your travels?

**Ilya Grigorik:** Sure. Let's see how far do we want to rewind. I started my professional career as a founder of a startup. This was back in the 2011 era. Our insight at the time was on the heels of Web 2.0 and all of the social things that are happening, blogs at their heyday, and all the rest... We figured that we could create a better search algorithm. So if you think of PageRank, the original PageRank, of treating links to perform the ranking, effectively that's a thumbs up... Except that when we approached this problem - and actually it wasn't 2011, it was 2008; we observed that there was a lot of extra signals available. There was literal thumbs up from different social platforms, you could leave comments, you can share them on different surfaces... So if we could aggregate all of those signals, we could build a better, kind of human-driven algorithm for identifying what are the interesting topics.

So that was kind of the technical underpinning. And then we went on to build a number of products around it, which were analytics for publishers, to help them understand where their audience is, where the content is being discussed, where people are engaging... There was a product for marketing agencies, which kind of worked in reverse, which is, "Hey, if I have a thing that I'd like to seed, who are the folks that I should be engaging? What are the communities, and all the rest?" And through that work, that led us to Google, which acquired the company, and I ended up working on Google Analytics at the time, integrating a lot of this kind of social analytics know-how that we acquired into the product... And later took a hard pivot into infrastructure, technical infrastructure within Google, where we did a lot of fun things, like building radio towers to figure out if we could build a faster and better radio network, and then learning that that's a hard problem... \[laughter\] But then later, that actually became \[unintelligible 00:07:55.20\] which is an overlay network.

**Jerod Santo:** Oh, yeah.

**Ilya Grigorik:** \[08:00\] And in the process, I picked up the kind of ambiguous problem of "Hey, we keep talking about performance and measuring performance, we want to make it better, but how do you objectively quantify it?" It's one of those things where you kind of know it when you see it; it's like, that felt slow. But if I just asked you to put a technical metric on it, how do you actually measure that?

So we spent a lot of time with browser developers in W3C, I was the co-chair of the W3C Work Performance Working Group, just wrestling with that problem of "How do you measure fast? Is it the onload time? No, not really. Okay, if it's when did pixels paint on the screen - how do you measure that? And which pixels are most important?" So this leads you down those kind of interesting cascade of questions.

So that took a while; that was a good five or six years of my life of working on standards and working with browser developers, which was a lot of fun... And later, I decided to join Shopify, because commerce was clearly an interesting area and a deep domain area... And that's been the last four years of my life here, where I got to work on building custom storefronts, which I think we covered in our last show...

**Jerod Santo:** Yup.

**Ilya Grigorik:** ...of like what is the Shopify opinionated toolkit for building custom experiences. So today, this is actually Hydrogen; that has evolved quite a bit since we last talked. It is a Remix-based stack with a lot of built-ins for building beautiful, customized experiences, powered by Shopify APIs.

From there, that work also led me into API infrastructure, so looking at our GraphQL APIs and trying to understand, first of all, do we expose the right capabilities there? But second, also, once again, performance capabilities and all the rest. We have buyers all around the world, we want to deliver great user experience to all the buyers... So how do you deploy a global cart? And how do you deliver the right experience reliably? And then finally, that led me into the guts of like technical infrastructure, like how do we actually stand up app servers in our Ruby stack? Shopify is a Ruby primarily company, so rebooting our application stack... And also working on checkout, which brings us back to the earlier part of the conversation.

**Jerod Santo:** Yeah, full circle. So we're definitely gonna talk checkouts. Since you've somewhat moved on from your at least web performance years, I'm curious to get your take on recent work, specifically Core Web Vitals. Is that something you've been tracking? And do you have a hot take? Do you like that? Do you think it hits the mark, misses the mark? What are your thoughts on that as a metric?

**Ilya Grigorik:** Core Web Vitals was one of my key projects when I worked at Google.

**Jerod Santo:** Oh, that was you?

**Ilya Grigorik:** So at least to me, this is definitely -- yeah, well, it wasn't purely me, but it was one of the key things that we incubated.

And part of it was -- it's actually the same question, "What is the definition of a vital?" The incentive behind the vital was like a vital signal, just like you have a heartbeat in a human body. Like, what are those things that you measure about a website that tells you that it's a good experience? And the key problem that we wanted to solve was first come up with some shared agreement across browsers of how we can measure that reliably, and not just in the lab environment... Because the thing that we keep learning time and time again is that the outside world is just so unpredictable that you have to measure what happens in the real world. You can bake in all kinds of assumptions into your model, and then you get consistently surprised when you release your application or website into the public, and you're like "Wow, I never expected this amount of traffic to come from this particular region, which happens to have this routing topology, and my CDN just doesn't account for it." Or like "My API is located in North America, but I have this tidal wave of users coming from, I don't know, Europe, or somewhere else, and for them the experience is just that much worse."

\[11:58\] So RUM, or real user measurement metrics are critical, and Web Vitals was our attempt to first of all define what those are, what is that subset, and second, what are the recommended thresholds? Because everyone has a different definition. Is fast 100 milliseconds? Is fast one second? We try to align on that.

So I'm really glad to see that the Web Vitals has continued to evolve. The initial set when we first published - I believe it was back in 2020 or so - it focused on loading metrics. But we knew even when we were walking into that announcement that we really need to also talk about interactivity. Like, it's not just the pixels rendered fast, it's also "Hey, is it responsive?"

**Jerod Santo:** You've gotta use the thing.

**Ilya Grigorik:** Is the page locking up when I'm trying to interact with it? How about scrolling? How smooth is that? So Web Vitals continues to evolve and add those metrics, and I think that's great, and it's really important for us as an industry to have that shared definition of what good looks like.

**Jerod Santo:** It shows how fast the internet moves, because I thought Core Web Vitals was still relatively new, and it turns out it's five years ago, and you were the one working on it, so... Crazy.

**Ilya Grigorik:** I think it highlights the complexity of the problem. It takes a long time to propagate conducts, practices and metrics. But yes, it's been a long, long journey, and it was a great capstone of all the work that I did at Google and web performance. Shipping Web Vitals felt like a good milestone, and that allowed me to kind of give myself permission to shift attention to other things.

**Jerod Santo:** Right. Well, let's do that. Let's shift attention to checkouts, compliance, security, PCI... Some of these things that honestly scare away or maybe lull to sleep many of us. We start talking about compliance matters... PCI version four is burgeoning, or maybe it's out now... I don't know. Tell us the skinny. What is PCI, why does it matter, and then we'll get to what's new in the latest versions.

**Ilya Grigorik:** Sounds good. So first, let's unpack the acronyms, because those are always not helpful. PCI stands for Payment Card Industry, and it defines a set of security requirements that you have to comply with as someone who processes sensitive credentials.

So an example would be your personal access number, your credit card number, plus the CVV and all the other data. There's a set of protections put in place around that for if you're handling that data, then how you should be treated, what kind of security precautions those services must comply by, and all the rest. And it is a fairly burdensome set of requirements to comply with, then you have to get periodically audited and show that you're in good standing, and all the rest. So as a consumer, this is great, because fraud on the internet is definitely a big thing; it's still very much an unsolved problem. Entering a credit card number into a random web form is not a secure undertaking. But we've managed to build a relatively reliable experience for consumers, thankfully.

Now, what's different about PCI before? In PCIv3 a key requirement was that you had to protect the service or the surface area where you you're entering your credentials. So technically, how we've solved that as an industry is we said, "Okay, well, if I want to accept payments on the web, I'm not going to do the obvious thing, which is just put a random form on my page and start accepting credit cards, because then I'm accepting that data, like my service will get a POST request, and I'm going to have the unencrypted payment credentials, and now I'm liable for all the compliance." Instead, why don't we outsource this problem? And hey, we actually have a great tool in the web platform. It's called iFrames. iFrames can give us an ability to embed an external service that can basically do this. And we can skin it in a way that it looks seamless.

\[16:11\] Most pages that you visit on the internet, the payment form, if you actually open up your dev tools, you'll see that it's iFramed for this specific reason, but it doesn't look janky; it looks integrated into the website. And the nice property of this solution is you can then just -- basically all of the inputs, all of the mouse events are obfuscated from the parent page. So that means you can wholly delegate the responsibility for PCI, v3 at least, to your provider.

A common example of that would be someone like Stripe. If you want to accept payments on your website, they provide Stripe elements, you import a web component, pass it a few props, and boom, you have a checkout form under the hood, it'll inject an iFrame, and do all the things on your behalf. So that's great. And that's been effectively where we've settled. I think PCIv3 came into existence around 2013 or 2014. So the last, let's say 10 years or so, that's how we've solved that problem as an industry.

Now, that is really good, but it's not sufficient. So in the interim, what we've observed is "Hey, sure, you've isolated this particular input into a secure sandbox... But what happens if your top-level page gets compromised?" Let's say you have a supply chain attack, or you have an XSS hole in your checkout page, and someone injects a malicious script. What could they do with that? Well, what stops them from removing your secure input form and replacing it with a fake one? Or maybe providing an overlay and then tricking the user effectively into entering information into an insecure form that then exfiltrates the data, and then swaps in the original. This class of attack is called skimming attacks, also known as mage card attacks, which is a nod to Magento. Not to cast shade on Magento, but I think one of the first published large-scale instances of this attack was against Magento, which had some flaw. Magento is an e-commerce platform, open source... And for better or for worse, that mage card attack name has stuck. Now, to be clear, this is a problem that spans all platforms regardless, as long as you have some sort of vector for attack.

So PCIv4 tries to solve for this particular problem. It tries to tighten the perimeter to say "It's no longer sufficient to protect the payment page. You also have to protect or provide some guarantees around the parent page, the thing that is embedding this payment form."

**Jerod Santo:** Okay...

**Ilya Grigorik:** And specifically, there's a set of provisions, I think, in the spec itself - which is very long; we'll zoom in on one particular aspect of this whole conversation, which is section 643. It's one of these random numbers that you just remember once you've been long enough in the PCI game.

**Jerod Santo:** One of my favorite sections...

**Ilya Grigorik:** Yup. 643 defines, in high-level terms, three requirements. It says "Hey, for the parent page, you have to maintain an inventory of all scripts that are being executed on the page. And also, please document why they're necessary and how they're being used." So just like "Give me an inventory." One. Two, once you have that inventory, have some mechanism to ensure that only those scripts, the authorized scripts are being loaded. And then finally, have some way to guarantee or check the integrity of each loaded script. Because you could say, "Hey, this is my inventory, these are the scripts I've authorized, but what if that thing got compromised, as an example?" Somebody replaced it with a malicious script because of a supply chain attack or otherwise.

\[19:59\] So those three things combined give you strong assurances about what's executing in a top level page, which is great. Now, the practical reality of how you go about implementing that, as you can imagine, is complicated.

**Jerod Santo:** It sounds like a lot of work.

**Ilya Grigorik:** Yeah, exactly. And it's complicated for two reasons. First, we should partition this problem into -- like, if the two of us had had a checkout page and we were to sit down and try to think through "Okay, we need to meet these compliance requirements", I would partition the problem into first party and third party scripts, first of all. Like, okay, for the first party content - yes, we can define a process; we audit which scripts we include, we audit their dependency, we have some security review, we have release process, we have CI checks... Sure, I can give you inventory of those scripts. Also, because they're first party, I can put a content security policy, and maybe even put a sub-resource integrity, which are hashes that effectively fingerprint the specific version of that page. So maybe during my build, I can just enforce a CSP snapshot, the hashes, put those on a thing, and great. Now we have strong assurances that the scripts that are being executed on the page are mine, and tied to a specific version. So far, so good. Now, what about the third parties? One of the challenges with checkout is they're one of the most important pages for the entire e-commerce operation.

**Jerod Santo:** For sure.

**Ilya Grigorik:** Like, this is where instrumentation is critical. You want to know performance telemetry. You want to know which elements the user is interacting with, because that affects conversion. You are likely running A/B tests. So you have either first-party or a set of third-party vendors doing that. Of course, you have all the conversion pixels that need to be executed because of all the ad campaigns and all of the analytics that you need to drive that entire up-funnel, down-funnel loop. And what about all of the other marketing pixels that you may need?

It's not uncommon -- if you just take an average checkout page and you open up the network tab, you'll probably find hundreds of scripts on many of them. And oftentimes it'll be "Hey, we load a tag manager that then allows our marketing and other teams to inject whatever they need, to drive the whole process." But now we're staring at that problem and we're saying, "So how exactly do I apply an inventory, and all these things, because first of all, my partner asked me to put a tag manager so they can load things?" Well, I need to unwind that decision, right? Because now I need to know exactly everything that's being executed, and I need to have kind of a full transitive chain of all the dependencies. I need to be able to account for that. Second, you need to provide -- how do I know what CSP policy should I define? Can I just say "Only load from partner.com, or is the partner also loading from some other CDNs?" Well, I need to go ask the partner for what those assurances are.

And then lastly, if I want to ensure integrity, that's not my content. How do I obtain the hash of the thing? And then if that partner wants to rev the version of their script, how do I get the hash so I can put the thing inside, and then also I'm not the one injecting the content into the page. So it becomes this really complicated rigmarole of "Actually, I just cannot do this."

**Jerod Santo:** Yeah, it sounds not possible.

**Ilya Grigorik:** Precisely, which is one of those things where the standard was written with good intent, and they in passing mentioned "Hey, you have these tools; you have content security policy, you have some research integrity. In principle, in theory, you have the right things to do this job. In practice, if you unpack your average checkout page on the web, it's like, I don't know how I would achieve this. I could guarantee maybe a slice of it for first party, but how do I solve this for third parties?"

**Jerod Santo:** Right...

**Ilya Grigorik:** So it turns out it's complicated, right? \[laughter\]

**Jerod Santo:** I thought you might say that.

**Break**: \[24:10\]

**Ilya Grigorik:** So how do we approach this at Shopify - let me take first a branch into Shopify, and then we can talk about kind of the broader landscape.

**Jerod Santo:** Sure.

**Ilya Grigorik:** We've been on a mission to provide stronger control and behavior over checkout. Not just because of compliance, but because we want upgrade safety, reliability, performance and security in checkout. And our observation is -- first of all, for those not familiar, Shopify provides a hosted checkout experience, where you don't get access to the underlying HTML. We provide the base UI, and we allow you to configure it. And it's a very flexible system. You can customize the branding, you can introduce custom components, you can install apps that introduce components... You can do a lot of customizations to make it feel like your own. But a key principle that we've been operating on is that we want a set of predefined -- first of all, we're going to define the UI elements, because we want to preserve consistency in the experience, and we want to optimize for performance, security and all the rest. What that allows us to do is to say, "Actually, we're not going to allow any third-party scripts in our top-level page." And that is a very consequential and big decision. This has been work that we've been on an arc for about three years, if not more, to achieve. We're finally there, and now we're reaping the benefits of that.

So then the question is, "Wait a second, so you excluded all third-party scripts... But what about all those shiny things that you just mentioned earlier?" The analytics, the customizations, the everything else. And this is where sandboxing comes in. So our decision was to say -- effectively, the moment you introduce a third-party script into a top-level page, you have untrusted content and you've compromised all integrity of the top-level page. We cannot provide any assurances on integrity of the top-level page... Because in the past, when we did allow merchants to bring their own JavaScript into top-level page, they just ended up doing things that break compatibility. They'll hook in a specific selector to inject an element, knowing full well that we've never defined a contract for it, and that if we change that, we will break them. And then security is compromised as well, because they're introducing their own scripts, and we can't provide any assurance. So we took away that capability and said, "Instead, we're going to give you a sandbox. So we're going to spin up a set of web workers and give you a bridge." So for example, we've built a library in open source called RemoteDOM, which allows you to construct an element tree in an isolated worker that operates off the main thread... And then that UI is reflected back for you in the parent page. So it feels -- like, ergonomically, DX-wise, it feels still very straightforward, because you're just manipulating elements. And we provide a predefined set of UI elements that fit into the checkout UI, and work with all the branding primitives... But we do that work on your behalf. And the critical part is because we control the bridge between the web worker and the top-level page, we have tight control over what kind of mutations can be pushed between the parent and the isolated worker.

So you can't just arbitrarily inject JavaScript or perform unsafe operations on the parent page. So in that way, we can take any third party script, put it into a sandbox and say, "You know what, you can do whatever the heck you want in that environment." You can load a transitive chain of other dependencies. We don't particularly care, because all we know is that the operations that you can pass back to the parent page are a safe and approved set that we will allow. And we also control what data is exposed to you. So for example, if you have an extension that wants access to some sensitive buyer data, first that application and then the worker itself needs to have the right consent. So a worker that has not been granted the right consent by the merchant or the buyer will just not have access to that data.

\[32:00\] So that is our solution for extensibility, and it allows us to partition the problem of first party and third party content. It's based on remote DOM, and then we use the same technology for pixels or analytics as well, where we define an event bus, we emit all the events, and analytics providers are executed in the sandbox as well.

**Jerod Santo:** Is that a compromise in terms of functionality? Do you get 100% of what you could do before in terms of what you are providing? Or are you constraining people through and losing features along the way?

**Ilya Grigorik:** Yeah, you asked exactly the right question. So the answer is we've had to rebuild a lot of stuff, because a web worker, if you're familiar, is not the same thing as working on the top-level page, right? It doesn't give you access to the DOM, it doesn't expose all the same events. So the reason it took us as long as it did to layer all of this infrastructure is because we had to work with partners and replicate, "So what do you actually need? Instead of raw access to the DOM tree, what are you looking for?"

For example, if you were building a heat map solution, as an example... Some of our merchants are really keen on having a very visual, clear understanding of how users are behaving on their checkout page. You need access to a lot of different events and elements. Okay, well, let's work through that and figure out what is the right subset that we can expose via this bridge. So over time we've built up a collection of these APIs and primitives, some of which effectively replicate what is available on the parent page.

One of the challenges here, by the way, is if you've ever worked with web workers, is they use asynchronous communication. So you have to post a message between a web worker and the top-level page, whereas a lot of the DOM APIs are synchronous APIs. So if you're just naively writing code, expecting it to be executed on a top level page, you would use synchronous APIs. So we've had to shim some of that in places -- we try to keep it as close as we can to what you would expect as a developer, because we don't want to impose additional friction... But in certain places we had to provide replacement APIs where we said "Look, you're building for Shopify. It will operate across a scale of millions of merchants. If you're building an application, it is worth for you to do this extra step, because then you have all of these insurances in place."

**Jerod Santo:** Right.

**Ilya Grigorik:** So a lot of hand-holding with partners and getting the developers to adopt all of those APIs. But the benefit of all of that work today is - I'm not going to say we're done, because there's still more things to build... But we're in a really good place, because now all of our merchants are running on the sandboxed primitive that I've described, and what we can provide is, first of all, upgrade safety. We can safely roll forward our capabilities in checkout, knowing that customizations that we've deployed will not break as you move forward, because we control the bridge, we control the API interface... So if we change the underlying API on our side, we can still provide guarantees about that.

We have reliability. We know that -- for example, we saw examples where merchants would inject scripts where a partner would just timeout. So they would have some logic, and for some reason their service goes down, and then the checkout's broken, because - well, it's just waiting to render. Like "Shopify, you've broken the checkout \[unintelligible 00:35:16.24\] Actually, it's your script that you injected of a partner that failed to scale to your flash sale. So now we have assurances about that.

And then finally, performance and security. Another benefit of putting work into the sandbox is it moves all the work off the main thread. So you can't have code that monopolizes the main thread and renders the UI unresponsive... Which gets back to our web vitals conversation. We \[unintelligible 00:35:45.01\] better performance guarantees about how the page is loaded, how responsive it is, and the rest.

And finally, there's a security bit, which is we know that you can't inject arbitrary content in a top-level page and exfiltrate data... And then finally, you have PCI compliance, because now we have a clean partition where we say "As Shopify, as a platform, we will provide all of the inventory authorization and integrity checks for the first-party scripts that are executed on a top-level page. And oh, by the way, you can totally bring third-party content, but we will execute it in this isolated context, that allows us to punt that problem and not have to worry about all of the integrity problems that happen when you just include it in a top-level page."

**Jerod Santo:** \[36:30\] Hm... So did I hear you right that you said all your merchants are already using this? You're able to deploy that without -- or did you not say all?

**Ilya Grigorik:** Yes, all. So this has been a long journey, to move all of our merchants onto this new platform. But as of earlier this year, 99.9% of our merchants are on this platform. There may be like one or two exceptions, but effectively, any Shopify Power checkout that you visit today as a consumer is running on this infrastructure.

**Jerod Santo:** Hm... And that was something that they had to opt into, or that you just did on a -- like, how'd you all roll that out? You said it took a long time, but what did it look like?

**Ilya Grigorik:** Well, it took a long time because of the right question that you asked, which is "Hey, what did you have to take away?" And the answer is we had to rebuild a lot of the capabilities, because we've created this isolated environment, we've had to recreate a lot of APIs... So a lot of our work was working with other developers, partners who provide capabilities that merchants want in checkout, to make sure that they can bring the same capabilities into this new world of sandbox execution. That was the long haul. And then for some merchants that had ability to manipulate content in a top level page, it was a combination of documentation, handholding, consulting, and just getting them to move to the new world, so they can benefit from all of these capabilities.

**Jerod Santo:** Right.

**Ilya Grigorik:** But we're there, and the time is right, because now you have PCIv4 compliance effectively taking care for you.

**Jerod Santo:** And do you think that PCIv4 compliance means you cannot be skimmed in the way that you could prior? Or do you think it could still happen in new and exciting ways?

**Ilya Grigorik:** Right, right... So I think this actually is another layer that we should add here. What I've described is runtime compliance, or runtime guarantees. So the thing that we've built actually allows us to provide assurance, or like extend some guarantees over - we just know that it's not possible to inject third party content. So if you have a supply chain attack on that, it's isolated into a thing that doesn't matter.

**Jerod Santo:** Right.

**Ilya Grigorik:** In practice, I think what a lot of other players and e-commerce providers will end up using or how they will provide compliance is retroactive monitoring. So PCI does not enforce a requirement that you have to have runtime guarantees. What it says is "Hey, you should have a process that provides an inventory, make sure that scripts are authorized, and you have the integrity." It doesn't specify that it needs to be guaranteed.

So practically, how could you implement this? And how do most -- like, if you go and search for PCI compliance security products, you will find plenty that will basically say "Hey, I know a great solution for your PCI problem. You know what it is? Deploy my JavaScript into your page, because more JavaScript is always a solution... And I will instrument the page and listen for all the things that are happening. I will observe all the other scripts, I will build an inventory, I will monitor if it changes, I will try to provide hashes, and effectively, you can delegate this problem to me."

\[40:00\] Now, you can see a flaw in that reasoning, right? It's like, how do you know that your script is not going to get compromised?

**Jerod Santo:** Right. Who watches the watchers...?

**Ilya Grigorik:** Well, there's that. And how do you know that the malicious thing doesn't come up with a clever way to obfuscate itself from you? It's the antivirus problem.

**Jerod Santo:** Right. Cat and mouse.

**Ilya Grigorik:** Right. A virus hiding from the antivirus problem. But that is likely a solution that many will adopt as a retroactive solution. So effectively, you observe if anything has changed... It's like "Oh, well, that's odd. I'm seeing a set of reports for a script that I did not expect relative to my inventory as I defined. Does that indicate that I have a problem on my site? Probably."

So there's some guardrails that PCI sets for how long that period can be, and how you need to react to it... But it is strictly lesser and a less secure experience. Which gets back to your question. If you have these assurances, does it mean that the class of attacks is eliminated? The answer is "It depends on how you implement it." So in our case, as Shopify, I would feel pretty strongly about extending a promise of like "Yeah, unless our content, first party content is compromised, you'll be very hard to compromise this page."

**Jerod Santo:** Right.

**Ilya Grigorik:** Now, what we can control as Shopify is the buyer has installed a browser extension that injects arbitrary scripts into the page. That is outside of our control, because that operates at a higher layer. Or maybe you even have malware on your computer that does things, and injects content into the page, or otherwise intercepts when you're typing. Those things are still possible. It is not a "We've completely eliminated this type of attack", but it certainly makes it a heck of a lot harder... Because now it means that at least at a minimum the merchants are required to detect these changes, or these attacks, and remediate; so they can't just go unnoticed.

**Jerod Santo:** Mm-hm. So this all sounds like a lot of really good work you all have done at Shopify, for Shopify and Shopify's customers. Thinking bigger, it would be great if your hard work and years of rethinking this runtime, and sandboxing, and actually providing the security that PCIv4 wants everybody to have, whether or not they do or not to be compliant... Can't some of that get into the browser? Could your work extend beyond Shopify's borders and help other people, too?

**Ilya Grigorik:** Yeah, absolutely. And I think this is key. This is not just about Shopify, it's about improving the buyer experience on the on the web, holistically. So two things to answer that. First of all, the RemoteDOM library that I mentioned, it's an open source project that we've built in open source. So if you go to github.com/shopify/remotedom, you'll find that there. Take a look at it, use it. That's the technology that powers Shopify Checkout. Other large companies have already adopted it. I believe Stripe is using it for their apps. Actually, fun story... When we built the project, I think Stripe beat us to using it in a production product.

**Jerod Santo:** Really?

**Ilya Grigorik:** Even though we were the ones developing it for checkout.

**Jerod Santo:** Good for them.

**Ilya Grigorik:** But it is used at Shopify and by other big big players to provide this form of isolation. And the general pattern is "Hey, I have a trusted first party surface into which I want to bring in third party content. And I don't want to compromise the integrity of my first party top level service." Well, RemoteDOM is one of the like technical solutions for that, so please take a look at that. That's answer number one.

\[43:53\] Second, though, and coming back to the browser conversation... Absolutely, the primitives that we have in browsers today - content security policy and SRI - we can make better. And we've actually done a bunch of work on exactly that at Shopify. We don't want to do work in JavaScript that we could push into the browser, because the browser is just much more efficient, and it has capabilities that otherwise would be very hard for us to replicate.

So first, let's enumerate some trivial examples of gaps... Script integrity. Sub resource integrity - for those not familiar, on your script tag you can pass in effectively a hash. So when you inject the tag into your HTML, you can pass in a hash that is a fingerprint, and when the browser loads the script before it executes it, it can compare the hash of the thing that it fetched, versus what you've defined, and say "Hey, if those two things match, great. I will execute the script. Otherwise I'm going to raise a violation and not report this." That's a big capability that exists in browsers today. It's not simple to deploy, but it is doable, because you need to figure out "How do I get these hashes and how do I inject them at the right place?" But then one of the gaps that existed for a long time was module imports. So SRI worked for top level scripts, but if you're building a JavaScript application and you're using an import, you just could not pass in an integrity hash. Why? Well, because module imports came after the sub resource integrity spec was designed. So it was just never a thing.

**Jerod Santo:** Gotcha.

**Ilya Grigorik:** That was a pain point for us, because we use module imports at Shopify, so we worked with Chrome and Safari to upstream some patches to get that supported for module imports. So the good news is that's now baked in, I believe as of May of 2024; that's I think when Safari shipped it in their release. Both Chrome and Safari support SRI for module imports. So that's one.

Another thing that came up in our thinking when we were exploring CSP compliance and how do we make our own life simpler is this idea of require SRI for. So what if you could express a content security policy that says "Hey, all scripts must have an SRI, or integrity hash."

**Jerod Santo:** Gotcha.

**Ilya Grigorik:** And why is that useful? Well, then you can make a strong claim that if you have that policy being enforced by the browser, then if for some reason you sneak through, by accident or malicious act, a script that doesn't have it, they would just be rejected. Which today would just execute normally, without any questions. And even though that might be hard to deploy in an enforcement mode, it could totally work and be really useful in a report-only mode. So for those not familiar with content security policy, you have an enforcement mode and a report-only mode, where you can get violations... Which is incredibly useful, because you could say "Hey, this is a policy I would like to enforce. What are the violations?" So with the require SRI for you could deploy this in report only mode and say "Great, now I'm going to get reliable reports from the browser, from the wild, for any time a browser detects that a script is missing an SRI capability." This is great, because sophisticated attackers would not emit these scripts on every single page load. They might target specific users, or a class of user, or maybe they target a specific browser, or maybe if it's an extension, it'll apply some sort of other heuristic. It's very hard to -- this kind of mirrors our conversation on why RUM is important, real user measurement. Gathering violation reports from real users gives you a much better and reliable signal for where the problems are.

\[47:49\] So require SRI for is another capability that we've shipped into Chrome, and that allows you to get violations on missing SRI attributes, which allows you to build an inventory of like "This is the list for me to burn down and figure out why. And if anything changed, how should I react to it?"

Another example is - okay, great, now we have these reports coming in... Wouldn't it be nice if we could also get the hash of the content? Today you would just get a report saying, "Hey, I detected script from example.com/xyz.gs", but what was the content of that? You don't know, right? Wouldn't it be nice if you could also get a hash in the report such that you could audit it and say "Oh, well, maybe that's totally okay, because the partner revved their version, and it just happens to be the V2. I put that into my approved list and everything's fine." Versus "I have no idea if that was a compromised version or a legitimate version of the script."

**Jerod Santo:** Interesting. So pardon my ignorance for a moment, but where does the reporting take place, or post to? The browsers doing the reporting? Is it --

**Ilya Grigorik:** Correct.

**Jerod Santo:** Who gets the report and how? Is it the browser sends it off somewhere, or...?

**Ilya Grigorik:** Yup. So on the wire, when you emit a page, you can define a content security policy, or CSP policy in a header. And you would define, for a script source, for example a list of origins from which you're allowed to fetch for images and all the rest. You also have a report to target, and a separate report to header, that provides a specification for -- you specify the endpoint to where you want the violation report to be reported.

**Jerod Santo:** Gotcha.

**Ilya Grigorik:** And as good hygiene, that reporting endpoint should ideally be a distinct origin, and all the rest. But you provide a destination. You can find services that will do this for you. They'll just say, "Point your report to us, and we will provide a dashboard in which you can drill down reports, we will aggregate, we'll give you metrics, and all the rest." That's something that we do in-house at Shopify, and I think many other large providers will do on their own... But you could outsource that problem. But just having the ability to even get the report with "Hey, a report has been emitted, because the script is missing an integrity hash" is by itself a really useful capability... Because otherwise you'd probably have to set up some sort of crawling infrastructure that periodically checks your page and says "I accessed this page from five different points on the globe, every 24 hours, and I observed that nothing has changed." Well, that's good, but we could do much better by just actually observing what the real users are seeing, and getting the actual reports of violations.

**Jerod Santo:** Gotcha. So this new one, require SRI for, would work in like manner, as the CSP violations, in terms of reporting and everything else.

**Ilya Grigorik:** Right. The CSP policy is "require SRI for" scripts. So you're saying "All of my script resources must have a hash", and then you can configure that to be a report-only policy, such that it would still execute if the script is missing the hash, but you would get the violation fired in the background. And the browser has its own logic for prioritizing batching delivery and doing all of that, to get you the report.

**Jerod Santo:** Now, do you deploy this one in Shopify?

**Ilya Grigorik:** Yup.

**Jerod Santo:** And do you use it in report mode, or do you have a lockdown mode, or how do you use it?

**Ilya Grigorik:** So for this one it would be a report mode. But it depends on how -- it depends on the shape of your checkout and how much control you have over your first party or third party content. Just to double back on that, for Shopify, for our checkout, we enforce a CSP policy. Actually, let me run through the whole list. For our first party content, we have a well-defined process for vetting all the dependencies, and a process for updates, auditing, to make sure that we provide some guarantees over "If the library that we depend on has been compromised, how can we detect that?"

\[52:17\] We have change management process for it. So this is the reviews, testing, CI, all the things that you would expect. That allows us to create the inventory. We know from where it's served, which means that we can define a strict CSP policy that says "You should only fetch from these sub-origins that we trust." In our build step, we can inject the hashes, the SRI hashes for known content, and we can also emit the "require SRI for" policy, to ensure that if anything else, for some reason if we missed some script, that we would get a violation on that... Because we don't want to break checkout, but we want to be notified immediately if those things are detected; then we can react to it. And we have our own reporting endpoint, which we aggregate, we look at the reports... This is a thing that merchants don't have to worry about, because we do this work on their behalf, and we can provide this guarantee over overall integrity.

And then finally, we've protected the parent page, but the payment credentials page or the payment form itself is also isolated into its own iFrame, just as it was before. So this is a defense in depth; we've protected the parent, but we also have our own implementation of the iFrame, and the full PCI compliance behind that particular form.

**Jerod Santo:** Well, that's a lot of stuff for PCI compliance, Ilya. What happens with v5? How many years are you going to put into that one? \[laughter\]

**Ilya Grigorik:** I don't know. That's a good question. I'm pretty sure that v4 will keep us busy for a long while...

**Jerod Santo:** Yeah, because this is only section 6.4.3, right? That's all we're talking about right here.

**Ilya Grigorik:** That's right. There's all the others.

**Jerod Santo:** Okay, so interesting stuff... It sounds like you've solved some really difficult technical challenges in order to do this in a way that's not just compliant, but actually in the spirit of the compliance as well. Trying to actually make it more secure. What are some takeaways for our listeners out there? Maybe they're doing their own checkout, maybe they have compliance they need to do... Maybe they just want some more secure websites. What do you think they could be thinking walking away from this? If they're not in the actual situation that Shopify is in and having to implement this stuff? What could they learn from this conversation?

**Ilya Grigorik:** Yeah, I think the meta pattern and message to take away here is broadly the integrity and security of first-party versus third-party content. We mix first-party and third-party in most contexts, but even outside of checkout, there are many surfaces. Let's say you have an admin surface or a privileged surface that you only want certain users to access, and you want some sort of extensibility in there. So you want to bring in third-party content, or customization, and all the rest. The pattern that we're describing with isolating third-party content is a generic pattern that you can deploy there. So we use the same sandboxing technology in checkout, we use the same technology in our admin. So for merchants, we allow customizations and third-party developers to bring in their custom UI and other aspects. As you can imagine, that's a very sensitive surface. Order data is there, customer data is there... You don't want to just open up a Pandora's box of "inject your arbitrary JavaScript" because who knows where that data might travel. So the isolation primitive - it may be a remote DOM, it may be something else, but this way of thinking, of isolating into either an iFrame or a worker I think is a pattern that we should be adopting more widely... And it has these additional benefits.

\[56:09\] You have better assurances about security, yes, performance as well, because you're isolating content and moving it off the main thread... You get to define the API contract, so you have better upgradability if you need to maintain that... And I think that's just something that we need to get better at on the web.

Now, the challenge, I think, for all of us industry practitioners is to think through "Boy, the worker is kind of like this naked environment..." We should probably think about "How do we figure out some better set of APIs where we don't have to reinvent the entire wheel?", just as we did at Shopify, for "Great, now I want to build a heat map thing. What does that mean? How do I mirror the entire stream of events, from top-level page into this isolated environment?" I think we can do some thinking and innovation there.

**Jerod Santo:** Very cool. Anything else that's on your mind, that we haven't discussed in this context, or honestly, in any developer context? I always love to hear your opinions on stuff. Anything else on your mind?

**Ilya Grigorik:** I think one really interesting topic, coming back to the world of checkout and commerce, is of course agents, and how agents will interact or how they might affect any of these behaviors.

**Jerod Santo:** Oh, yes... MCP - are you down with MCP? That's the newest acronym, Model Context Protocol. It's burgeoning.

**Ilya Grigorik:** Yup, MCP is definitely top of mind and we're looking at it intently. We're using it for a number of tools and internal services at Shopify. We're also considering if and how we should be exposing MCP as a protocol and endpoint, as a service on behalf of merchants. So imagine you could have a merchant storefront as a remote MCP endpoint... But more broadly, if you think of -- let's imagine you're interacting with an agent, asking it "Hey, I'd like a pair of white sneakers, size 10, $50 to $100 range. Please go find me a pair and checkout." Under the hood, the agent might crawl the web, find the storefront, add to cart, head to checkout, and what does it do then as it's looking at a payment form? Is it the responsibility of the agent to hold on to your payment credentials? And what are the implications of that for entering? How does it enter those credentials? Are there any security and compliance problems or challenges in that? I think that's a wide open question that we as an industry are yet to figure out an answer. Is the human required in that loop? What if it's an accelerated checkout where maybe information is vaulted, right? I think there's a range of questions and answers that we need to figure out in this space.

**Jerod Santo:** Hm... What's your personal thought on "Is the human required in the loop?" How do you feel confidence-wise on removing the human from that loop?

**Ilya Grigorik:** I think it's context-dependent. I think there's definitely a class of commerce in certain types of transactions where I know exactly what I want, there's very low risk, and it's kind of a predefined flow where I just say "Look, I need another carton of milk. You know exactly what I'm looking for, you know where to shop, and please go finish it. I just want it on my front door." And then there's other types of experiences where maybe this is your first time engaging with a merchant, maybe merchant has a set of rules where they actually require the agent to decelerate, because "Hey, for compliance reasons, I may need to verify your age" or "I need you to read this disclaimer on this product before you purchase it." You can't just have the agent blindly ignore that context, or click approve, and then proceed with the transaction.

\[59:56\] So I think we'll need to define some protocol or shared mechanism to signal to agents that "Hey, in this particular case, I need you to pause and ask for a human to either confirm or take over control and complete the transaction."

**Jerod Santo:** There's so many questions there... I just don't feel like I even have the brain right now to analyze all the things that have to be considered. I'm glad that you're -- are you going to be working on this for Shopify? Are you going to stay in PCI land? What's next for you inside? Is this an active thing that you're thinking about for Shopify?

**Ilya Grigorik:** It is definitely an active area of exploration for us. That is one of the things I'm looking with our team and many of our partners who are building these agents, we're trying to figure out "What is the future of checkout, where agents drive some meaningful portion of that experience? What does a good experience even look like in that context?" So I think those are all very interesting and pertinent questions given where we are today.

**Jerod Santo:** Well, we'll have to have you come back in a year or two and let us know what you end up building as you've figured it all out. You seem to have figured it out. At least this hairy technical problem, this new PCI stuff. I'm sure you'll figure out something.

**Ilya Grigorik:** Yeah. We'd love to be back. And at the rate that we're moving in the AI world, in a year or two for now, who knows what will be there...? So we'll see.

**Jerod Santo:** Yes, I'm trying to think of the most recent person who said "Six to nine months and LLMs will be writing a hundred percent of code." So, I mean, who knows, man...? Maybe you and I'll be out on the street corner, talking about this stuff.

**Ilya Grigorik:** I doubt that is the case, but who knows.

**Jerod Santo:** \[laughs\] Yeah, me too. But not a week goes by that somebody doesn't declare "Software engineering is dead", or dying. So I had to squeeze that one in there.

**Ilya Grigorik:** Yes, I think what we're actually saying is the definition of what software engineering is is changing.

**Jerod Santo:** It's gonna have to, isn't it?

**Ilya Grigorik:** I am constantly amazed by what AI is capable of doing in terms of software development, but I'm also constantly surprised by the silly and stupid mistakes that it makes. And oftentimes those mistakes are actually due to misunderstanding or lack of poor definition of the problem that is being solved. It's kind of putting the mirror back to yourself, right? ...because oftentimes you'll find that "Actually, you know what? You did exactly the right thing, the way I expressed it, but that's not what I meant. And I didn't even know what I meant when I typed it, because now that I've seen the mistake, I understand what I was actually trying to get to." So it is this art of defining the problem, and rubber duck programming, and I think we're heading more and more towards a world where we're actively collaborating, instead of hands-on keyboard typing if statements.

**Jerod Santo:** Yeah. The best rubber duck programmers might be the best programmers of the future. The ones who can just talk it out the best, figure it out as you go. Alright, Ilya, appreciate you coming on the show and chatting with us, and looking forward to having you back soon.

**Ilya Grigorik:** Thank you, Jerod.
