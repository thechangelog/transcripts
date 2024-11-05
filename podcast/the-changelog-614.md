**Adam Stacoviak:** So Jerod, I would say a reverse rug pull is even more cooler, obviously, than a rug pull. Would you agree, Jerod?

**Jerod Santo:** I would agree. Shay, we have a saying around here, "Rug pull, not cool." But you and Elastic are the first ones to do a reverse rug pull. You're putting the rug back where it was... So we're trying to figure out, is it cool? Is it not? It's definitely cool. How do you feel about it, Shay?

**Shay Banon:** To be honest, I'm very happy. I don't know how to describe rug pull, but I'll go with it.

**Adam Stacoviak:** Take it offensively if you have to, but...

**Jerod Santo:** Don't take offense, don't take offense.

**Shay Banon:** No, no, I know, I know.

**Adam Stacoviak:** It's kind of obvious what it means, but when you rug pull, you've change the license on the community - whether you like it or not, it is a rug pull.

**Jerod Santo:** Right.

**Shay Banon:** So I'm very excited, and I think as someone that has been in the open source world for - gosh, 28 years now, or 25 years or something like that... I love open source. And I think having less open source in the world is bad, and having more open source in the world is good.

**Jerod Santo:** Yeah.

**Shay Banon:** And I think -- I hope that what we do at Elastic will help change some trajectories that we've seen happen with other companies, and cause for having more open source in the world versus less.

**Jerod Santo:** Yeah. Well, we are 100% in alignment on that, Shay. We are absolutely all in alignment on that. Can you take us back now -- I guess it's been four years since the initial relicense. That decision made big waves, a lot of people upset, some people okay with it... It was AWS versus Elastic, in terms of this rehosting and trademark dispute, relevant today in light of Automattic versus WP Engine, of course, and trademark disputes... So can you tell us that story, the original license change, and that decision you all had to make back then?

**Shay Banon:** I'll start with saying that that's probably the hardest decision that I've ever made at Elastic. So that was a really tough decision. And like any tough decisions, you don't come to it lightly. You understand the implications, you understand the impact... Also, just on a personal level, open source has been a big part of my life. I was trying to calculate back how many hours I worked on open source while I had another job, and I think since 2004 or 2005 I've been basically working like 30 to 40 hours a week, just on open source. Whether I had a job or not. When I didn't have a job, I would work more. And that's a lot, and I do it because I love it, I do it because I cherish it, I love the community aspect, I love the engagement, I love building software that is accessible by so many users... And -- yeah, I love it.

So that was a really tough decision. And also, it took time to get to it, because you always hope that somehow you won't have to do it. And hopefully, I don't know, Amazon will change the name of Amazon Elasticsearch, or somehow we'll manage to work some sort of like an agreement with Amazon, or something along those lines. But when it gets to a point where so many users just confuse, either because they think you work with Amazon, either because they think that Amazon Elasticsearch is Elasticsearch, or your cloud service, or something along those lines, that we felt like we had to just go and change the license so it will force a change of name and a clear distinction between the two products that was not there. I wish that we didn't have to do it. I wish that there would have been another way to solve it, and I know a lot of people have a lot of ideas on Twitter on how this could have been solved...

**Adam Stacoviak:** \[00:08:13.05\] Oh, yes.

**Shay Banon:** ...but I can tell you that was one of the hardest decisions, if not the hardest decision that I've ever made. We tried a lot of them, and we felt like we had to go and do something about it.

**Jerod Santo:** Isn't that what trademark law is all about? Isn't it all about like there's confusion in the marketplace, with them using your brand, and so your trademark should stop them from doing that, right?

**Shay Banon:** Yes, and until you understand the complexity of going through the legal process, if that makes sense. There's two aspects to it, I think. The first part is, if you go back to open source - and I'm relatively old school open source - a big part of building an open source software was registering a trademark and owning it. Red Hat did it, and others. And the first thing that I did even before I released Elasticsearch was take a loan and register Elasticsearch trademark. By the way, I don't know if you know, but there's many different types of trademark... But I actually registered two types of trademark: one for downloadable software and one for software as a service. So even back then, I wanted to make sure that when we build or someone builds Elasticsearch as a service, it doesn't get confused.

And at least for a while, people respected trademarks. You know, Apache, and Red Hat... And that was a wonderful protection, because you could go and fork the project, you could go and do all of these things, but it's just a different -- from that point on, it's a different project. I think cloud changed the game. And I think because Elasticsearch was so popular and Elasticsearch was one of the first services that Amazon decided to take and provide - I don't know, I'd like to think the best of people, and afterwards try to figure out why not... I think they just took Elasticsearch and said "We'll call it Amazon Elasticsearch." Maybe they didn't have experience with open source, they didn't have experience with these types of things... You know, naively, some product manager takes a product, provides it as a service, and that's the name. And I think that you can see that they learn after that, because when they took other open source projects, they called them differently. They call it ElastiCache, and they call it Amazon Managed Service for Kafka, versus Amazon Kafka, and things along those lines. But Elasticsearch was one of the first ones, and that name stuck. And that part, I don't know, for whatever reason, Amazon just refused to change the name, regardless of how much we try to talk to them and try to process through it. And you'll have to ask them why... Basically, it was kind of like the answer is "I'll see you in court." And people think, "Oh, you're a big company, and you have lawyers, and you can pay for it, and go through the process" and whatever, but it's exhausting. You have to give testimonials, and you have to do this... And it's at least a few years of process. And maybe it gets resolved - and we ended up resolving the trademark infringement. By the way, thanks to the fork, because it made it really easy. But it just takes a long time, and it takes a lot of attention. And it never felt right to me. I want to be focused on building great products, not doing lawyer-y stuff, if that makes sense.

**Adam Stacoviak:** Well, that's the boring stuff, right? Legal stuff - it's necessary, of course, but it's not building software. It was not your living room back in Paris when you first wrote the first lines of Elastic, or what would become Elastic. That's the fun stuff, right? The innovation part of it, not the licenses and the boring stuff that's like legalese.

**Shay Banon:** Definitely. I mean, like any good open source community member, I've spent a lot of time thinking about licenses since 2005, and LGPL, and Apache, and the difference between GPL and Apache, even within the open source licensing world... But yeah, the fun stuff is to build products, to talk to users and figure out what their problem is, and try to go and figure out how do you solve them, or sometimes things slightly ahead of where they're heading, and build it. And yeah, it's fun. That's where the fun is.

**Jerod Santo:** \[00:12:09.22\] What is different about a license versus a trademark when it comes to the law? Because isn't a license also a legal mechanism? Couldn't they just violate your license and you'd also have to go to court, similar to a trademark?

**Shay Banon:** Totally, potentially. But I think the thing is that Elasticsearch was under the Apache license. Amazon was totally within their rights to take Elasticsearch and provide it as a service. That was never the issue. I think that sometimes companies have a problem with strip mining open source by cloud providers. There's that saying, and it's not fair to take open source software and provide it as a service, and then it's like there's a company like Elastic that invests so much, and other companies that don't invest as much in the open source end up ripping the benefits of it. But to be honest, it's legal. It's like, if you have an Apache license, then what they do is what they do, and that's totally fair. The part that bugged us is just the confusion. That's the thing that was really weird for us.

**Jerod Santo:** Right.

**Shay Banon:** And that's where the trademark comes in.

**Jerod Santo:** No, I get it. So I guess my disconnect is you had a trademark established, which they were violating via the name. And then you had this license, which allowed them to do whatever they wanted to with the software. They weren't violating that. You could have gone to court, you could have sued them over trademark, or change the license, and they could have then just violated the license, and then you'd have to sue them over the license. That's where I'm kind of getting at. Couldn't they have just continued to, or started to break your license, just like they're already breaking your trademark?

**Shay Banon:** They could have decided to. I think the world has changed. I do think that the early days of cloud were a bit hectic, if that makes sense. And I think norms have been established around which projects to use, which licenses are we going to use or not, what's the intent of the open source project, how to think about licenses... I wasn't worried about Amazon taking Elasticsearch and breaking the license, if that makes sense. It was pretty obvious to us, or to me specifically, that Amazon would just decide to fork Elasticsearch, which was fine, because a fork means a different name, and then that name ends up slipping back into the Amazon service, and then it's great. We compete. I love competing. Amazon had a cloud search product before Amazon Elasticsearch, and it was fun competing with it. It was based on Apache Solr. That's great. So yeah, if we can compete, I'd love to compete. It's just hard to compete with yourself. And it's hard to express how frustrating it is. You know what I mean? It's like, you see in the forum, "Oh, Elasticsearch sucks. It doesn't run as well as it does", and then you go "Oh, it's running on Amazon Elasticsearch. It's not--" You know what I mean? It's not what we've built, it's not how we run it, it's not the expertise that we have when it comes to running the service... Even at that level. So that was difficult. And yeah, we tried to figure out how to solve it.

**Jerod Santo:** Yeah, I can see how frustrating that would be, because in that circumstance, if there is confusion, people have this bad experience with Amazon Elasticsearch. And instead of that pushing them towards your Elasticsearch, it actually just sullies your Elasticsearch. They think it's you, and so they're like "Well, this sucks", versus being like "Well, Amazon sucks at this. I'm going to go check out other providers of this open source thing." I can understand how frustrating, especially as the creator of it, that would be.

**Adam Stacoviak:** But... What you're saying, Jerod, is that it may have just been - and I don't want to use the word 'simply' to make it seem simple, but simply a trademark issue. Because that was the issue, right? AWS and Amazon Elasticsearch service was the quote from the original blog post back in the day. "Why relicense this?" It was "Amazon not okay. Why we had to change Elastic licensing."

**Shay Banon:** \[00:16:09.08\] Right.

**Adam Stacoviak:** And what you're saying, Shay, is in retrospect things were different then. Maybe a license change was not the right potential way, which - obviously we get to reverse rug pulls. We're back here again discussing this. We're trying to understand why it happened in the first place. Could it have been just simply a court ruling or a court dispute over trademark law, and a trademark misuse over a community-disruptive license change?

**Jerod Santo:** Right.

**Shay Banon:** It potentially could have been. I know that we tried a few years to try to resolve it outside of the court, because nobody wants to go to court and get bogged down by it... When we were talking at least to our lawyers, it was going to be a multi-year effort. And when it gets to a point where Amazon Elasticsearch exists for enough years, it becomes a fact whether they end up changing their name or not.

**Jerod Santo:** Right. It's almost too late to matter.

**Shay Banon:** Exactly.

**Adam Stacoviak:** That's why I didn't want to use the word 'simply' either. The word 'simply' there simplifies things by nature of the word...

**Jerod Santo:** Right.

**Adam Stacoviak:** In that light, it makes sense. So what you're saying is that because the legal route, while it could have been and potentially might have been the "better route", it would have been multi-year, which would have just then continued to - you used the word 'sully'. Sully the waters, or muddy the waters of the brand Elasticsearch, and really put it after the word Amazon. Amazon Elasticsearch. It would have been owned, in ways, because they had such a big megaphone to muddy the waters of the Elasticsearch brand.

**Shay Banon:** Yes. And especially when -- it wasn't even it's Amazon's Elasticsearch version, or something like that. It's done in partnership with Elastic, right? Like, that was the additional layer of confusion that kind of like made it really big, and that was really confusing to users... Because if I naively look at it from the outside and I go "Amazon Elasticsearch", you go "Oh, amazing. Elastic managed to do a partnership with Amazon, and they take Elasticsearch and provide it as a service. I'll go and use that." And we all think that we live in Hacker News and Twitter or something like that, but most users don't. They just go and say "Oh, Amazon's Elasticsearch. I'll just go and use that." And they don't understand the nuances, or the fact that it's not us, or something along those lines.

And nothing bad with Amazon as well. They're a great partner of us now, and we work well, and I actually think that Amazon matured a lot in how they run their cloud, versus the early days. But we just felt like we had to make a difference and that's where we landed.

**Jerod Santo:** So let's talk about what you lost, because it's very important to you, open source. And when you changed the license to -- it was SSPL, correct? Was the available license server-side public license?

**Shay Banon:** Yeah, we changed it actually to two licenses that you could choose from. The SSPL one that MongoDB changed to. So MongoDB did that change as well. Or a license that we wrote that was more in the Apache type. There's kind of like two families of licenses... We call it the Elastic License V2. It's actually a very, very simple license, and we allowed users to choose between them. Because some were concerned about the SSPL, some were concerned about the Elastic License V2. We kept all of our code open, we kept all of our free stuff free. We just didn't call it open source. Nothing changed except for the license, if that makes sense.

**Jerod Santo:** Yes, that makes total sense. And so, in so doing, because SSPL, and I assume Elastic License V2 - neither of these are Open Source Initiative approved, according to the open source definition, which Adam and I both think that's an important definition, and they do hold a line in the sand which is important for the brand of open source itself to continue to mean what it's meant for so long... Because those don't live up to that, literally the thing that you lost, even though they are very permissive licenses and allow a lot of different uses - they are not that. And so you could no longer call Elasticsearch open source. What did that do to you, to the brand of Elastic, to you personally, to the company? What was the knock-on effects of that change?

**Shay Banon:** \[00:20:19.25\] First of all, I was very sad, and it was painful. And as someone that loves open source, and believes in it, it was a sad thing not to be able to call it open source. And I agree, by the way... I think if I understand things correctly, we could have called ourselves open source, because there's nothing illegal by calling ourselves open source. But I believe in the social contract of open source and OSI. And we stood by it. We search and replaced all open source with free and open, and other stuff. And that was not great.

Our usage, interestingly - we live in our bubble of interest, and things like that... Our usage didn't change that much, to be completely honest. So the usage of Elasticsearch continued to grow. People just like downloaded Elasticsearch and used it and ran it, and it was free, and using it for search, and in all the other use cases that people use it for... But we were still not called open source. And I think open source matters a lot, and we always hoped that we will be able to get back to open source.

When it comes to our brand, there's many people that I love in the open source community that were really upset with this change. And that hurt. Not the fact that they were upset with the change; that hurt because I made them feel like that, if that makes sense. And that was sad for me. And there were certain companies that say that they can only use open source that stopped using us... But generally, we continued to grow as a company. Because the truth is that most users, actually - they use open source software, but they don't engage with the community or contribute to issues or something along those lines. The portion that do, I adore. And we did lose some of them, sadly, because of that. And that's one of the reasons why we're back to being open source, because we want to bring them back.

**Jerod Santo:** But on the whole, you would say in terms of Elastic, the business - not a major detriment.

**Shay Banon:** It wasn't a big detriment. I actually think that because now Amazon Elasticsearch got renamed to OpenSearch, and Amazon OpenSearch, then it's much easier for us and for our users to know what do they use, and then evaluate us one versus the other. You know what I mean? It's Elasticsearch versus OpenSearch, figure this out. Like we had with Solr, like we had with Splunk, like we had with other products; it doesn't matter. And I think that's totally fair.

I do think also that open source is also great for when new markets get created, and you have the hushpuppies users, the leaders, the new ones that start to experiment with types of software... And I've been thinking about getting back to open source for more than a year now, personally. But certainly, something that helped make that decision is the rise of vector databases in the gen AI space. Because I thought that being able to say Elasticsearch and open source vector database is an important thing to say. So that definitely helped in the decision to get back to open source.

**Jerod Santo:** So you didn't want to say a free and public... Would you say free and open? You can say --

**Shay Banon:** Free and open. It's not as strong. There's so much in open source. There's so much beauty and romantic aspects and history just in these two words; they encapsulate so much, and I love it.

**Break**: \[00:24:05.26\]

**Adam Stacoviak:** I think it's important to dig into that. I think your question is spot on, Jerod, because there was that study from Red Monk in terms of "Does it really help or hurt the company that does--" and I don't want to say rug-pull badly, but...

**Jerod Santo:** You said it a bunch of times already, Adam...

**Adam Stacoviak:** ...that's what it is, Shay. I'm sorry.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Rug pull... Change license. Let's just say change license. I won't be negative. I'll be neutral at least. To change this license, to change a license of open source to non-open source, or a non-OSI-approved open source permissive license... You know, because we assume from the outside there might be a detriment to the business. But the true detriment really was not so much the misuse, but the muddying of the water between what truly is Elastic's Elasticsearch, versus Amazon's Elasticsearch. And even Werner had tweeted - I think this is back in your original post, too - that it was done in partnership. So there was no blurred of lines available anymore. So the community could then choose to use the technology; whether it was licensed open source or not, they can choose the technology that best represented their problem set, versus this other route, which was not there. The license didn't really impact that. It's important to know that, because a lot of companies struggle with this same struggle you have there, and we see rug pull after rug pull, whether it's because of an IPO company that wants to protect its moat, or some other route that over years things change. There's always a reason to do a relicense. And regardless, the community feels the pull of the rug.

**Shay Banon:** I think it's fair that there's more companies changing the license today, because they're really worried about cloud vendors. And it's funny to me that there's not more of "Hey, this is real pain that you're feeling." Startups... You know, I developed Elasticsearch in my free time, in my living room. You know what I mean? And somehow -- I don't know, maybe it's human nature. I find it funny that people take the side of Amazon in this case. I've found it hilarious. But I think there's real fear, and we need to acknowledge the fear. And if the outcome that we want is more open source in the world, why do these companies change it? It's not because they IPO'd. I'm talking to tons of startups that go and say "I'll never open source my code" that would have open-sourced the code, because they say "We don't want the cloud provider to come in and take all the stuff that we've built, and pooled something around it." I think there's a few companies that say "We need to bring trademarks back, and enforcement", and things along those lines... All of these are good discussions. Those are the discussions that we need to have.

What I can say, at least with our change, and go back to what we spoke about in the beginning... I think that enough time has passed from the hectic days of early cloud that AGPL is potentially good enough protection. AGPL is the license that we chose to be open source, and it's potentially a good enough protection. So when I talk to companies today, I say "Go open source, build things in the open, choose AGPL. It's probably good enough protection, because we're choosing AGPL." You know what I mean? Because we're showing that that's the case. So hopefully that changes their trajectory of choosing an open source license and which one ends up being chosen.

**Jerod Santo:** Yeah, I thought that was interesting that you did not go back to the previous license. You went to AGPL, because it's going to provide you more protection than - was it Apache 2? Is that what you said it was previously?

**Shay Banon:** Yes.

**Jerod Santo:** Yes. And of course, AGPL - cool with OSI, or OSI cool with AGPL, so it is officially open source... What about slightly modifying the definition of what open source means in order to account for the change in the world that we've seen? Because while I believe that open source definition needs to exist, and there needs to be people that protect it and all that stuff, I'm not hardline on exactly that definition being written in stone tablets. Like, you could slightly modify it in order to broaden the tent slightly. Is this something that you've approached OSI with? Like "Hey, here's a license." Like, "Why isn't SSPL good enough? And can we change the definition slightly, because the world has changed?"

**Shay Banon:** \[00:29:50.17\] Yeah, I think it's a good question. MongoDB, that created the SSPL license... So MongoDB changed their license from AGPL to SSPL being concerned that cloud providers will take AGPL software, will test AGPL, basically. So they changed it to SSPL. So even from then I think enough time has passed that I think when you put AGPL out there, it's a good sign for cloud providers that this is the contract that you expect to have with them. I think SSPL tries to solve it. MongoDB went through a whole process, and you can read the mailing list discussions and things like that, around trying to get SSPL approved by OSI. It didn't happen. I'm not pointing fingers at one side or another. There's a lot of emotions, and the devil is in the details, and what have you...

I think there's a good question. I think there's a balance that OSI tries to put around what is open source and how do you define open source, which is very important to maintain. That social contract is important. There's a lot riding on the term of open source that we should cherish it and treat it very dreadfully, if that makes sense. And that's like rushing to adding like five licenses to it and it's fine, and then we do it, it becomes meaningless.

**Jerod Santo:** Right.

**Shay Banon:** So we tried to figure out if there's an option with OSI to maybe revisit the SSPL discussion. They have a new leader, and I think they're open for it, and they're trying to figure out how does open source live also in a world not only of cloud providers, but in a world of models, and open weights versus open models, and open data, and things like that, and how does open source play in it. They have a lot on their hands. I think they really want to try to figure this out... But for the same reasons why we felt like we had to change Elasticsearch because we don't have time, I actually think that we're in a position where I'm not worried that someone takes Elasticsearch and provides it as a service.

So I can conceptually take the very, very minuscule risk of just going with AGPL, and potentially with that, we're actually creating a fact... And it's like "That's it. AGPL is fine." That's how it works, and you don't have to go through the process of approving a different license.

**Jerod Santo:** Well, we did have Stefano Maffulli - is that how you say it? ...on the show. When was that? This year... And definitely, their hands are full right now with trying to define open source AI, as you said.

**Shay Banon:** It's tough. It's tough.

**Jerod Santo:** It's all hands on deck to figuring that out... So probably not much bandwidth for reconsidering the current open source definition.

**Adam Stacoviak:** Yeah, we even posed the question - and I'm curious if you agree with this, Shay... We questioned Stefano if OSI cannot properly land the plane on the open source AI definition. If that might -- I can't recall how we worded it. Essentially, if they can't properly and in a well way define the open source AI license, if that might change the perception of OSI's hold on or arrangement of the OSI-approved licensing ability. Like, if that changes the trust in their ability to land the plane on open source at large, I suppose.

**Jerod Santo:** Right.

**Adam Stacoviak:** It wasn't worded that way, but it was a version of that. It's in the transcript, you'll find it. I'm doing a terrible job at it here in this moment.

**Shay Banon:** So I think that sometimes we make the mistake of judging open source based on -- it's like, we always liked the songs when we were teenagers, and they're stuck with us, and it will never be better... So some of us remember open source licenses and usage like it was in 2004, and 2005, or 2003, and 2007... And it's like, how many hours did I spend around the differences between GPL and Apache? That was within open source, by the way. And it's like "Oh, you can't choose one versus another." I think developers today, they pick an open source license and they're fine. You know what I mean? It's like, they care much less about the fidelity of difference between Apache and, for example, AGPL.

I actually also think that big companies care much less about -- like enterprises. We used to say Apache is much easier for enterprises to adopt... But look at MongoDB. It's all over the place in large enterprises, and it's AGPL, you know? So obviously, that's not hurting adoption; or it was AGPL. So it's not hurting adoption.

\[00:34:16.06\] And I think a similar thing might happen in AI, and that might be the missed opportunity. We see open models, we see open this, we're saying open source AI, open source models when they don't strictly match the definition of open source. It doesn't matter about OSI or not, I just don't want the term open source to get diluted. And I think that's the responsibility of OSI, and us, by the way, to help, to try to figure out -- because we obviously play a big role in gen AI as well, and building models, and things like that... To figure out how do we build a system that allows for it. Because you just don't want it to be diluted to become a term that means everything.

**Jerod Santo:** Right. I actually think that what Meta is doing with LLaMA and its license - which is incredibly permissive, borderline open source, but not, because of that one clause in there, that if you are operating at however many million monthly active users, then it's not for you. Like, that one little thing, which makes it not open source according to any open source definition, is similar to saying you just can't rehost it as a service, right? It's like similar to that kind of a clause, and compete with us. But they're calling it open source... And because it's so stinking awesome - what they're putting out is hugely valuable. I mean, just the raw cash value they put into training that thing over and over again... And it's great. I use it every day. And regular people now, non open source nerds like us, getting into this stuff, and they're just "Mark Zuckerberg calls it open source." It's pretty much open source. And so I think the OSI, maybe they're already missing the opportunity to define that sucker, because I think Mark Zuckerberg might be defining it for the next era.

**Adam Stacoviak:** Yeah, I almost wonder if we should have a itsprettymuchopensource.com. \[laughter\]

**Jerod Santo:** Pretty much open source, that's what people say, right?

**Shay Banon:** It's like a princess bride. It's only slightly dead.

**Jerod Santo:** Yeah, exactly. \[laughter\]

**Adam Stacoviak:** Yeah, good one. And that was kind of my sentiment when I asked Stefano that question; it was exactly this, Jerod. If the OSI is not the governing body that gets to define open source AI, does that change things in terms of - not so much open source, but it kind of puts it almost in the hands back of the community. What do we feel is - it's almost... What was the .com? It's almost truly open source? What was it?

**Jerod Santo:** I don't know, it was 30 seconds ago. We already forgot it.

**Adam Stacoviak:** Gosh.

**Jerod Santo:** Open-ish, is what I've been calling it.

**Adam Stacoviak:** It's pretty much open source.

**Shay Banon:** Pretty much, yeah.

**Adam Stacoviak:** Itsprettymuchopensource.com... Which I think is actually pretty cool, honestly. I mean, that's my fear for the OSI, is that if they can't act swiftly enough and the conversation gets lost in the minutia enough - which they've welcomed, they've done the process the right way, but are they the value creator like Meta has been with this? To be able to essentially own what defines it because of the premise, the prowess of it.

**Shay Banon:** I think there's a lot of urgency in being able to properly define it. So we as a society own the terms open source, and it defines what we do. I will say, this is not like an us versus OSI. That's not at least how I think about it. I think OSI is doing a lot of amazing work, and it's our responsibility to help OSI to figure this out...

**Adam Stacoviak:** For sure.

**Shay Banon:** ...whether it's monetarily, where we can contribute to OSI so they have more people and more money to help figure this out, or by working with them to try to figure this out together. I do think in such a new space, that moves so fast, like Gen AI models, open source has been hijacked, the term, from OSI.

**Jerod Santo:** \[00:38:17.10\] I think so.

**Shay Banon:** And I think it's important to try to figure out how do we consolidate that fact that is happening as we speak.

**Jerod Santo:** Yeah. I mean, it's getting harder and harder, and perhaps at this point it's impossible, because there's no actual definition, to hop in and say "Well, actually..." To actually point out this license is against the spirit of open source because they're doing arbitrary limitations on use, for instance. Like, that's going to be an uphill battle, and it might already be a battle lost, because of the pervasiveness and the value put forth by those who are calling it open source and just don't care what OSI says, i.e. Meta.

**Shay Banon:** Yeah.

**Jerod Santo:** You know, Meta have such a microphone, or a megaphone, I should say... I'm sure they have microphones too over there... That OSI and anybody who cares about open source definitions are going to be such a fringe group that we're going to have to be able to call anything open source. Then you have to go read the license and realize it has all these arbitrary restrictions on it, and now what are you going to do?

**Shay Banon:** I think it's more than the megaphone that Meta has... Because Meta, for example, released quite a few open source projects over the years...

**Jerod Santo:** For sure.

**Shay Banon:** ...and if they would have called one of them open source when it wasn't OSI-approved, I'm pretty sure that we could have resisted it. I think the other factor that is at play is that a model that they're putting under a very permissive license that cost hundreds of millions of dollars to build.

**Jerod Santo:** Seriously.

**Shay Banon:** That's pretty crazy. In a very short amount of time. I didn't do the math of how many money did we spend, Elastic as a company, and personally, on just building Elasticsearch... But in a very short amount of time, a lot of money was spent to build our product. And this is pretty remarkable, to be able to put it under such a permissive license. So that's another reason why people go and say "Okay, we want to use it."

**Jerod Santo:** Yeah, 100%. I mean, I think that it's so compelling of a piece of software, slash data, slash whatever it is, that the value it brings is immense, and almost incomprehensible to everybody, except for those like seven companies that happen to hit that one clause... And it's like, we don't care about those companies necessarily. It's like, okay, they're Meta's competitors. It's like a handful of orgs. Everybody else, have at it. It's so close to open source, and so valuable, that I think it can actually completely hijack the term, and it won't mean what it used to mean... And that might just be something that we have to accept at some point.

**Adam Stacoviak:** Well, they were very forthcoming with the usage of the word open source. They used it in the hyphened version of it on llama.com. It says, "The open-source AI model you can fine-tune." So it's used there in the -- and then in the announcement \[unintelligible 00:41:09.08\] "See how LLaMA is the leading open source" - and in this case they don't use the hyphen version. They use just open, space, source, model family. They link up to a blog post that is titled -- I won't title it. It's a long one. I'm not reading that. I'm not reading that. \[laughter\] But then all throughout this linked up post, which is how LLaMA is used in this calendar year, 2024, is just open source all through it. "Open source promotes. This is a leading open source." It's again and again the usage of the word open source, so it's pervasive; pervasive usage of the word open source, hyphened and not hyphened. And so it's not like there's any dispute they're trying to say it's open source, is the point.

**Shay Banon:** Yeah. And I think the interesting part is that, for example, they made the license more permissive just recently, if I remember correctly.

**Jerod Santo:** \[00:41:58.16\] Yeah, the newest version is even is even less restrictive than the last one.

**Shay Banon:** And I think this is the important work that we need to do... Because open source within models might have a lot of fidelity. There's the weights that might be open or open source, there's the retraining opportunity that you might be allowed to do or not, there's the data sources that you use to train the model... They don't have to be open source, but are you opening - which data sources? Like, just listing them, so you can go and certify them or not.

So there's a lot of areas in these places that if we have a standard way to think about them like we do with other open source licenses, I think it will be good for the world. I think there's a Meta question around if we're going to have really -- it's a question also, how many models are we going to have, especially like LLMs, large language models that are really expensive to build? If we're going to have five, then maybe it doesn't matter. And people go and say, "Oh, we know the LLaMA one. We know the \[unintelligible 00:42:57.22\] Yeah, they call it open source, but we know the restrictions." If there is 20, or 50, or more specialized models, and things like that, that's when I think we really urgently need a common way to understand what is our freedoms, and what do we get when we use a specific model. It's really important to understand it in a standardized way, if that makes sense.

**Jerod Santo:** Yeah, good point.

**Adam Stacoviak:** Good point. And who wants to go to war with Zuck? Who wants to go on X, or Twitter, or...?

**Jerod Santo:** We don't need to go to war with Zuck. We need to just bring Zuck in, you know?

**Adam Stacoviak:** Exactly.

**Jerod Santo:** Listen. Mark, if you're out there, just take that restriction off. It'll be fine. You'll still be rich, Meta will still succeed... Just take that one little restriction off.

**Shay Banon:** Well, he can do what we do. It's like, he can just AGPL it. If you end up using this LLM, then you need to open-source the rest of your infrastructure as a service. \[laughs\]

**Jerod Santo:** Yeah, exactly.

**Adam Stacoviak:** Reverse rug pull, Zuck. Do it.

**Jerod Santo:** Yeah, man. Just pick an open source license and let it ride. Well, maybe his retort would be "Well, there is no open source AI definition. How can I pick one?"

**Adam Stacoviak:** Sure. Yeah.

**Break**: \[00:44:08.07\]

**Jerod Santo:** Well, Shay, how well did this news land? Four years later you're back, you're fully open source, you have an AGPL license now... You feel great... Did the community welcome Elasticsearch AGPL with open arms? What has the response been?

**Shay Banon:** Obviously, any change that you do is scary. And the easiest thing to do is not to fight inertia. And I won't lie. Internally, people were saying, "Why do we need to change it? People got used to it. Why do we need to go and change the open source?" These decisions are not straightforward... But we really felt like we are an open source company. We walk and behave like open source, and this is who we are, and this goes all the way back to our value system as we were founded. And yeah, we announced it, and it was an amazing -- I was scared. I was obviously happy about being able to announce it... I was scared that people would twist it, because you know how the whole social discussions might happen. "Oh, Elastic is in bad shape" or "They're choosing open source", or something along those lines... And sometimes people really like to twist it. But it was just pure joy. It's like, the vast majority was just like "This is amazing. Thank you for doing it. Welcome back to open source." Prominent open source people were engaging and appreciative of doing it, like Adam and others... So it was great.

Obviously, there's still people that try to find the bug in something good... But I think there always are. I try to focus on the fact that this is just a net positive progress for Elastic in bringing back open source, and it's hopefully an even bigger net positive for the open source world, because hopefully it will convince more companies to do open source versus less.

**Adam Stacoviak:** Why? That's the question I have. Why open-source again? I get it, but truly why?

**Shay Banon:** I think there's a few reasons. The first one is we never stopped behaving like open source, right? All our code is still on GitHub, all of our issues are on GitHub issues, pull requests, reviews... People send us pull requests... It's never stopped. And if you go back to ask yourself why you changed the license, we changed the license because of the trademark. But the trademark is no longer an issue, because Amazon changed the license to OpenSearch. So really, the only question is why not, in that case... Because if we're not afraid of Amazon calling it back Elasticsearch - which we are not, because we work well together now, and they went with OpenSearch, and it's just totally fine... Then I think the question is sometimes like "Why not?" Sometimes the easy one is "Why not?"

I also totally believe in the value of open source, as I mentioned. There's so much encapsulated in these two words, and so much of it encapsulated who Elastic is as a company, with our contribution to open source, our many open source projects, from Logstash, and Kibana... Kibana got forked into Grafana, and created a whole other company... It's like, there's so much that roots itself back to Elasticsearch. We invested so much in Apache Lucene, which is an amazing story in the open source world, and an incredible one. There was always a hole left in our hearts when we took away open source, and we just felt that we wanted to fill it, if that makes sense. I don't know.

**Jerod Santo:** Well, it's cool it all worked out for you in the end... The fact that you were able to -- I mean, the maneuver that you made, regardless how controversial, difficult, perhaps damaging to a small part of your community... All the things. It seemed like the series of events that came after it - Amazon deciding to fork, OpenSearch becoming a thing, that being a clear delineation from Elasticsearch... And then the changes that followed in the world that you're saying, where like AGPL now is probably good enough... And I think if Elasticsearch can use it and can maintain it without problem with an AGPL from an Amazon, or...

**Shay Banon:** Or others. Yeah.

**Jerod Santo:** Who else? Microsoft, Azure or something... Then that leads the way for other people to do it... It seems like it all worked out for the good in the end.

**Shay Banon:** I think so.

**Jerod Santo:** \[00:52:10.26\] Or is the story not over yet?

**Shay Banon:** I still would like to take back the years that we were not open source. It worked out, but not in the way that I would have loved it to work out. You know what I mean?

**Jerod Santo:** Right. You would have loved it just not to do it in the first place.

**Shay Banon:** Yes.

**Jerod Santo:** Because all of this, at the end of the day, when you're just trying to run a business, an open source project, this is all side stuff, right? Like, this is all headache.

**Shay Banon:** Yeah. I mean, we had a great story around how to get people on our cloud, we had a great story around like commercial features on prem... The whole business model that around open source that I think we were a big part in building as a company and as a community, with other open source projects... Like, this worked. You don't want that headache.

**Adam Stacoviak:** To rewind back a little bit, the challenge was the trademark issue, right? Calling it Amazon Elasticsearch, which they kept doing. Did you really have a problem with the freedom of being open source that they would rehost or provide it as a service? Was your only true concern or true issue that it was a trademark issue, and not a -- while it was free to do, and they were free to do what they did with your source code, and to rehost, or reservice, or provide a service... Was that at all an issue? Because that's more like the freedoms of open source provide that.

**Shay Banon:** Under Apache 2, yeah. Under Apache 2 they're allowed to do it.

**Adam Stacoviak:** Right.

**Shay Banon:** And obviously, as long as we have an Apache 2 license, I'm not going to go to Amazon and say it's illegal, you know? So yes.

**Adam Stacoviak:** Right. Because it wasn't. It wasn't cool to do that, but they were free to do it.

**Shay Banon:** Yes. So some people say it's great, but it doesn't align with the norms of open source, or something along those lines... Which is fine. It's still legal to do it. Our case specifically was just around the trademark.

**Adam Stacoviak:** \[00:53:59.09\] Yeah. In that case - I mean, it was a massive blip then, really. I mean, because we haven't really called out the blog post yet, Jerod, but I think this is a fantastically written blog post, and it was written by Shay himself. I'm sure you probably had some feedback from other team members that said yes or no, or - I don't know if you wrote this in isolation, but I love the way you wrote it. You wrote "DNA, love, not like us"... I'm phrasing some of the things you sort of earmarked in here. And the big part of this, the way you opened it, was the DNA. The DNA for Elastic was and has been and is to be open source, and what a pure joy it was. As I read that - and I'm sure, Jerod, we've had conversations as you read it as well... You can hear the excitement, proverbially, in your written words. We can hear --

**Jerod Santo:** Also, can't you see... Is this Kendrick Lamar? You can see some other passion here...

**Shay Banon:** It is. Yes.

**Jerod Santo:** \[laughs\]

**Shay Banon:** My son is a huge Kendrick Lamar fan, and as a result of it, I became a Kendrick Lamar fan. I mean, I introduced him to him, but I didn't know him as well as I do now.

**Adam Stacoviak:** Gotcha.

**Jerod Santo:** Right.

**Shay Banon:** So that was running through my head when I wrote it.

**Jerod Santo:** So these little prefixes to the paragraphs, that's what Adam was reading: love, DNA, not like us... These are all Kendrick Lamar references, that I could just tell. We know that you wrote this yourself, Shay. An LLM wouldn't have come up with that.

**Shay Banon:** No, definitely. I sat down and wrote that blog post, I care about. Some people made fun on Twitter on this, "Why is he doing these references?" or whatever. But one of the things that I love about open source is that we're quirky, and we're like adding some fun to the stuff that we're doing, and it gets interesting. That's the thing that I love doing, in IRC, or Slack, or GitHub, or... It doesn't matter. SourceForge... All of these things. We had fun building software, and that's the thing that I cherish a lot. And this is part of it. At least that's how I see it.

**Jerod Santo:** No, I thought the same thing. I saw people making fun of you, I think on Reddit, for those references. And I thought, "You know what? This is how I know that he wrote it and it wasn't some like press release from some like suit." Otherwise, especially with a company as large and successful as Elastic, which you all are a large company now... That seemed like something that Shay Banon did, and not somebody else. And so whether you like Kendrick Lamar or not, or you think it's lame to put a bunch of references in a blog post - too bad, it's not up to you. It's Shay's call, you know?

**Shay Banon:** Yeah, yeah. Thank you.

**Jerod Santo:** So Adam, did you get the Kendrick Lamar references, or is that news that's coming in?

**Adam Stacoviak:** I really wish I was more of a hip hop fan... I don't even know, what is Kendrick Lamar in terms of music?

**Jerod Santo:** Yeah, he's a rapper.

**Adam Stacoviak:** I mean, is it called rap? Is it called hip hop? Like, what's the --

**Jerod Santo:** Both. Either.

**Adam Stacoviak:** Okay. I mean, I listen to music, but I wasn't --

**Jerod Santo:** They'll say hip hop's a culture, rap's an art style... I don't know. People have different ways of thinking about these things. There's a hip hop definition that's maintained by the OSI -- no, just kidding. \[laughter\] What's the true definition of hip hop, you know? It's almost harder than open source.

**Adam Stacoviak:** Yeah. It went over my head, unfortunately, because I'm just not that steeped.

**Shay Banon:** Yeah, it's okay.

**Jerod Santo:** It's alright. Now you're on the inside. Now you're with us. I didn't get it at first either. I am a fan of hip hop, but not a huge Kendrick Lamar fan. Don't dislike him, just don't know his work very well.

**Shay Banon:** Yeah.

**Jerod Santo:** And I wouldn't have picked up on it unless I saw people making fun of it, I think, on Reddit. I'm like "Chill out, guys." That's what people do on Reddit. The entire point of Reddit is to make fun of everybody else.

**Shay Banon:** Totally. That's already interesting. And that's fun. That's why we're having fun discussions. That's what we should be having. Not heavy, depressing, accusational discussions. You know what I mean? It's like, that's the fun that we need to get back to having.

**Adam Stacoviak:** \[00:57:46.05\] Well, I'm excited to see Elasticsearch be open source again. It's kind of a strange thing, because you've kind of had to be something you weren't for a little bit, you know? Not as a product, as a team, as a company, but as little as a license change as it is, it's such a core - as you've said, a DNA component to who you are. It's the beginning of what you've created and built... To have to change that for this protection. Which we have investigated, disseminated, discussed, etc, to its nth degree, more than I think we probably should ever again... But it's good to know. It's good to know, I think, the people of open source... And this will be transcribed at some point, so this will become part of the zeitgeist of what we consider as open source or not. So when all the LLMs eventually forge together and mine us for information, they'll have this conversation to look back on and say "This is the reason why they made the change, and this is the reason why they came back." I'm just happy you did.

**Shay Banon:** Yeah. I think details matter, as you said, and for people that are interested in it, it matters. I think the end result of having more open source in the world, it's much easier to just all agree on. And if the arc of it is where we're heading, I think it's goodness. And to be honest, I actually think that -- like, if you build enterprise software, that's my recommendation. You can pick AGPL if you want to go open source, and not worry about the cloud stuff. As we discussed, I'm more worried about the large language models and AI area, which we need to figure out. That's an area that we also need to invest in. And hopefully, this podcast also helps push it in the right direction, if that makes sense.

**Jerod Santo:** Right. Can we close with a technical topic? Talking about Elasticsearch?

**Shay Banon:** Sure.

**Jerod Santo:** So I've been thinking about search products a lot, because it seems like all search is kind of like up for grabs once again, isn't it? Because now all of a sudden there's this brand new vector, I guess, pun not intended... But there's a different way of talking to a thing about finding stuff, versus crafting a query. Now you're crafting a prompt, but it's more conversational... And probably, I think what would happen from that is Elasticsearch is - you know, the type senses, name your open source or non-search product, the Algolias of the world... Of course, you're probably integrating some of this stuff into your product, but aren't people probably going to start questioning their search functionality across their applications more than they ever have before?

**Shay Banon:** I think that people are going to see significant value in their search applications by embracing semantic search, and like vector type use case. That's the opportunity. I always like to think positively around the opportunity, and I think the opportunity is huge. If I loved search as a way to liberate your data before, this is like 100x better. And when we -- obviously, we at Elastic are a huge contributor to Apache Lucene, which we use, we added HSNW and vector capabilities to these systems years ago, before this whole Gen AI happened. But once it happened, obviously, the weight of being a great vector database has increased significantly, because the improvements that we have in search capabilities is significant. And we're saying internally at Elastic that we want to make Apache Lucene and Elasticsearch the best vector database in the world, and then on top of it, the best hybrid search... Because it's like, it's not only vector search. There's a lot of layers on top of it to make a great search system, that we've been building for years.

And yeah, like any new type of capability, I think you end up having new competition, or other new vendors, or products, open source or not, as you say... I think Elasticsearch is a great vector database today. And Apache - we contributed so much work into Apache Lucene. We have some of our best developers working just on Apache Lucene, on making it better, and then integrating it into Elasticsearch. By the way, by making Apache Lucene better, we're making a lot of other systems better.

\[01:02:05.26\] Our focus is to put the right technology at the right place, and then win based on value. And yeah, so far, by the way, that's the fastest-growing market in our business. So that's definitely the fastest part for us in terms of usage and business, and people are seeing the value.

I do think one of the things that I'm trying, working really hard to figure out is one of the things I think Elasticsearch did really well, is that it made search approachable to users. You could just like dump a JSON document into it and start to search it, and you didn't have to understand vector space, and ranking, and BM25, and inverted indices, and FSTs, and all of these things. And then we progressively disclosed complexity if you wanted to, or you wanted to tweak things, but it just worked. And we've invested over the last year a lot of effort, not only in making us a great vector database and great in hybrid search and things like that, but also making it as easy as it was to index. We literally took the curl request that I had in the first blog post when I released Elasticsearch around indexing tweets, and we're literally trying to make it this simple to do semantic text.

And I think if we go back to hundreds of thousands, if not millions of developers that know Elasticsearch and know Elasticsearch API, that's a huge opportunity, because they don't have to become experts in vector databases, and product quantization, and HSNW, and dimensions, and embeddings models, and things like that. Like, we can really simplify that layer to them, and they can use Elasticsearch the way that they love. And to me, that's a huge opportunity, because if we make every single Elasticsearch developer out there, like someone that uses Elasticsearch, just use semantic search, almost without noticing, because it's so simple, that would be amazing for them, because it's significantly better, and for us as a product, Elasticsearch, and as a company.

**Jerod Santo:** And that future is here, or that future is coming?

**Shay Banon:** I think it's here. I'll get geeky for a second, but when you define something in Elasticsearch, there's mappings for it, which is basically the schema, and then there's text mapping, which basically does keyword-based analyzer BM25 type matching. If you do semantic\_text and don't change anything else, it just becomes semantic. And we pick the built-in embedding model for you, and we run it, and we do everything out of the box. But every single layer is open. So you can change the embeddings model that you use, you can change the way that the query is being generated, you can go all the way down to just providing the vectors yourself if you want to. But the simplicity of the surface area is there. We worked really hard for the last year; that required a significant investment for us. And by the way, all of this is free. So all of this is open source now. I can say open source, and --

**Jerod Santo:** There you go, man.

**Shay Banon:** ...just go and start to use it, and if you know Elasticsearch and you know how to index data, let me tell you a secret - you know how to do semantic search now.

**Jerod Santo:** Wow.

**Shay Banon:** So that's exciting.

**Jerod Santo:** That is very cool. Well, Shay, I'll just say welcome back, I guess, to the official open source community, and thanks so much for sharing your journey with us.

**Shay Banon:** Yeah, happy to. Thanks for hosting me.

**Outro**: \[01:05:35.04\]

**Adam Stacoviak:** I'm not sure what to call this... I wanted to call it -- I almost brought it in the show. I was like "You know what? It's a deviation from the main task." And I was like "I don't want to call it a rug theft." Maybe it's a rug misappropriation. But then I think about this conversation we had with JJ. Jerod, you remember this. And Shay, you don't, because you probably weren't there, and you may have not listened to the show. But I asked JJ - what is his full name?

**Jerod Santo:** It's Joseph Jacks, isn't it?

**Adam Stacoviak:** Joseph Jacks. Thank you, Jerod.

**Jerod Santo:** Do you know him? Of OSS Capital.

**Shay Banon:** Oh, yeah, yeah, yeah.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** He's pro open source as well, but he's also pro commercial open source.

**Jerod Santo:** Open core.

**Adam Stacoviak:** Open core. And we asked him, or at least I asked him on that podcast, I said "Are you okay with open source companies literally cloning proprietary sourced companies?"

**Jerod Santo:** Right.

**Adam Stacoviak:** Essentially, the easiest version would be to take a Calendly and to turn it into Cal.com. And maybe it's not literally a one to one in terms of technology, because Cal.com seems to have gone a different route in terms of like its product. But this idea that there is a closed source proprietary software company that does not have an open source counterpart. Are you okay with an open source company cloning the essence of that company, and making the software creation that comes from it fully open source in doing that? And so I kind of feel like that's a -- I'm not sure how to draw the line, but it kind of seems similar in nature to what Amazon did to you and Elastic, which was to use the trademark of Elasticsearch. And here's where I kind of like bring that back... Is that you have a Supabase out there that has said for a while "The open source alternative to Firebase." And so here they're leveraging the trademarked name, Firebase, in their value proposition to the world, which was by and large their claim to fame, which set Hacker News on fire.

And so I just kind of wanted to conversate around with y'all -- I don't have an opinion necessarily, I'm just... I see this happening - an appropriation or a usage of a trademark term like Firebase, and saying, "Hey, Supabase is the open source Firebase alternative." So I'll leave that out there for y'all. What do you think about that?

**Shay Banon:** I mean, I can say, sadly, I know more about trademarks than I want to... \[laughter\]

**Jerod Santo:** School us, Shay.

**Shay Banon:** So that's totally illegal usage of trademarks. That's totally illegal. You're allowed to say "I'm a shop that services Toyota cars", you're not allowed to say "I'm a Toyota service shop." That's the difference. And as long as the name is Supabase -- they're totally fine to say it's an open source version of Firebase. That doesn't create confusion in the market between Supabase and Firebase. And that is totally allowed. It's fine. I actually encourage that type of marketing for any open source project that there is. Go for it.

**Adam Stacoviak:** That's cool. I'm cool with it, too. It's the leveraging part of it. It's the trademark side of it that I'm cool with... But if there's a lot of folks who would say "Hey, Amazon, while you can, and you have the freedom to, please don't, because it's not cool, to rehost Elastic as a service." That's the cool part, I guess, or that's the okay part. But socially or societally that's not kind of cool. Just don't name it Amazon Elasticsearch. You call it Amazon OpenSearch, which they've done.

I just saw some corollaries, and I wasn't really -- I couldn't articulate it in the show, so it didn't make sense, but I wanted to bring it up here in this zone, where it's a little bit more free to examine the thought process.

**Jerod Santo:** Well, I guess, let me hop in real quick, Shay, and say that I think I fundamentally misunderstood your beef, because I thought it was "Hey, it's not cool to take Apache-licensed Elasticsearch and offer it as a service. You're going to take all of our business." But you're saying that that's cool. It's fine. You said it's legal, so it doesn't mean you think it's cool. But it's not something that you're going to try to stop them from doing. For you, it was all about trademark. That's basically what Matt Mullenweg is saying right now as well, with WP Engine, is that it's about the trademark. Now, he's not taking the route you guys took. He's taking a different route.

**Adam Stacoviak:** \[01:12:25.12\] Scorch the earth route.

**Jerod Santo:** Nobody can understand at this point the route that he's taking. And even when we talked with Adam Jacob about this, he was trying to explain why it wasn't wise for Elastic to do that, because of Amazon's bringing more customers into the funnel, and all this kind of stuff... But that was more about them rehosting. But for you, it's not about the rehosting, it's about the trademark. It was all about the trademark. It was about the market confusion.

**Shay Banon:** Yes.

**Jerod Santo:** I didn't understand that before today.

**Adam Stacoviak:** I would say I agree with that, Jerod. I didn't understand that either. I thought it was about the rehosting and competing dispute, not the trademark only dispute.

**Jerod Santo:** Right. And maybe that was our failure to understand the circumstance four years ago, or maybe it got lost in the minutiae and the arguing... Because a lot of the argument is about "Is it okay for Amazon to rehost other people's open source projects?" Or "Is it cool or not cool?"

**Shay Banon:** When you get caught in that, that's hard, and sadly -- you know, it's easy to bucket things. I don't blame -- I tried to explain it in our "Not okay" blog post, and be very blunt and explicit about it... And we actually made a mistake. Our first blog post around the license change was bad, because we were like "We just don't want to make a lot of noise about it", or something like that. And we made a mistake of not being explicit around why we're changing it. And a day afterward, I wrote this "Not okay" blog post.

I think the social streams, just like simple, simple messages and bucketing, and then it kind of took a life of its own... And it's very, very hard to change once it's happened. I don't blame any individual. You know what I mean? It's like, I get caught by it every once in a while.

**Jerod Santo:** Sure.

**Shay Banon:** But that's okay. That's life, and you have to figure out how to work through it, if that makes sense.

**Jerod Santo:** Right. Well, in light of all of this, I wish there was a faster way to mitigate or to adjudicate trademark disputes. Like, it shouldn't take three or four years of them to continue to muddy your trademark, to get the trademark dispute adjudicated, right? I mean, obviously that's -- now I'm going to utopia, and stuff. Like, that's not the real world. But wouldn't that have fixed everything if you could have just said "Stop using our trademark. Rename it", and then they say no, and then you sue them and it takes three months, and it's adjudicated? Wouldn't that have fixed it? You would never have had to relicense.

**Shay Banon:** I think so. I think it would have helped.

**Jerod Santo:** Yeah.

**Shay Banon:** But I also think that getting to a point where you sue someone has never helped. You know what I mean? And I think Amazon - they landed in a goldmine called cloud, and they were like running very, very fast for the first few years. And they just took Elasticsearch, provided the service and called it Amazon Elasticsearch. And then I think it was very hard for them to decide to change it, and they wanted to get -- I don't know, it's hard for me to explain why they refused to do it. But you can see that they learned, and they evolved, and they didn't do that level of naming afterwards for other services that they took and provided as a service.

And to be honest, now we work really well with them. It's funny... It was very hard for us to work with Amazon on the marketplace, for example, because when we would go to the marketplace and we would say "Please promote -- let's work together to promote our Elasticsearch hosting service." And they'll say "But there is already one. It's called Amazon Elasticsearch." So it's like, even trying to work with them was hard because of the confusion, because the confusion was internal, because Amazon is so big.

**Jerod Santo:** Right.

**Shay Banon:** So once the name thing got cleared up, it just unleashed also the opportunity to even start to work together properly as two companies.

**Jerod Santo:** \[01:16:09.13\] So do you think if they would have come out with a hosted version of Elasticsearch, just like they did, and they had called it Amazon OpenSearch, and then the subtitle's like "Elasticsearch and AWS", or something like that, so they could at least -- then none of this would have happened?

**Shay Banon:** I think that would have been fine. I don't know. It's kind of like hard to know. Maybe we would have ended up doing something similar to what Grafana did, and changed the license from Apache 2 to AGPL. So still remain within open source, but try to be more restrictive around whether Amazon really wants to take the software and provide it as a service. I'll get back to -- I do think that there is an imbalance in building open source, and hosting open source. Between the large cloud vendors and open source companies. And if we want more open source in the world, I think we need to figure out how to fix that imbalance.

And that's a valid concern that companies have, and sometimes the way that I think people talk about it is very -- it creates tensions. Like, oh, all of these big IPO companies, they IPO, they were successful, and now they're changing their license because they have shareholders, or something along those lines. But to be honest, I was never worried about this. I was worried about the five startups with two people that I'm talking every week, that don't choose open source, you know? Or just people that live there and go "Well, we'll never open source our software. We don't want to happen to us what happened to Elastic", you know? So it's like --

**Jerod Santo:** Right. But you think AGPL will help strike that balance?

**Shay Banon:** I hope so, because -- being very empathetic to OSI, they have to deal with the AI stuff, and that's tough. And we donated money to OSI, and we're trying to help... But that's tough, and I think it's more urgent to figure out than approving SSPL, or something along those lines.

**Jerod Santo:** Right.

**Shay Banon:** So I do see a path where AGPL is good enough as a solution, if that makes sense.

**Jerod Santo:** Have you looked at the stuff that came after SSPL, like Sentry's new fair source licensing? Are these interesting to you?

**Shay Banon:** I think they're very interesting. They're very similar to like Elastic License V2, and we're talking to all of them... OSI will never approve these licenses, because of the restrictions.

**Jerod Santo:** Yeah, so still in the same bucket.

**Shay Banon:** Yeah, exactly. I think what MongoDB tried to do with SSPL is to actually create a very valid license that had a chance to get approved by OSI, and I think that's the path that I would want to take. Not like expand open source to allow for like 50 things get into it, but more around "Let's figure out how do we still keep the high value open source term definition, and apply it to AI, apply it to enterprise software."

**Jerod Santo:** Cool. Adam, any other thoughts?

**Adam Stacoviak:** No, I was just drawing that thought. I was cool with it, too. I was cool with the open source alternative to X, whatever that is.

**Jerod Santo:** Well, I think anytime you call yourself an alternative, then it's pretty clearly no market confusion that you are that thing. Because you're an alternative to that thing.

**Adam Stacoviak:** \[01:19:20.26\] Yes. The part I was drawing the line to was less about the usage of the trademark, but more so this not coolness, I suppose, of "Hey, Amazon, don't rehost our thing", which you and I both had a misunderstanding about. But I think there's been other examples where XYZ open source says "Hey, don't rehost my thing and compete with me." And that's almost the same where you just simply clone a proprietary closed source company and say - to quote JJ - "Totally cool with it. 100% cool with it."

**Jerod Santo:** Well, cloning the product meaning like you look at how it works and you make something that works that way. Like, I could clone Riverside right now, which is proprietary and open source. It would take a lot of effort for me to do that.

**Adam Stacoviak:** It would.

**Jerod Santo:** They still had to put in all the work to build the Cal to make the Calendly clone.

**Adam Stacoviak:** And you've got to reverse-engineer the whole thing, basically. I get it, it's not a direct corollary, but it was a thought experiment.

**Jerod Santo:** Yeah. So you take the end product and you build it, versus just rehosting what's already out there. That's the easy button, right? Just taking Elasticsearch and offering it hosted requires very little effort, but cloning something, at least for now, still requires a big lift.

**Adam Stacoviak:** Yeah.

**Shay Banon:** Yeah. I mean, cloning closed source and trying to replicate and reimplement... Well, at least until we can go in ChatGPT and prompt something that says "Create me an open source version of X."

**Jerod Santo:** Yeah, exactly.

**Shay Banon:** But yeah, I think that that's true. By the way, the same is true -- when people say rug pull... And by the way, I totally understand where it's coming from, because this is how it feels. And you never argue with what someone feels. You know what I mean? It's not fair, because that's the first impact reaction, and if that's how they feel, then it's your responsibility to figure this out. But I think one of the beautiful things about open source is the ability to fork a project, and the ability to change it, and the ability for it to grow and become something else. And when you change the license, then someone can go and fork the project, and suddenly a whole other project comes up... You remember -- I don't know, what was it...? Like, the best example from my old days was Jenkins. You remember there was like Hudson, and then...

**Jerod Santo:** Hudson, yeah.

**Shay Banon:** ...Jenkins came along, got forked, and Jenkins became the thing and it worked.

**Jerod Santo:** Right.

**Shay Banon:** And we're seeing some examples of it today. And I think one of the points of reference on why when we changed the license we still behaved as open source is that no fork got successful, including OpenSearch. Because we still behaved like open source. We didn't suddenly put everything behind closed source. We didn't suddenly make everything commercial. And I think most users were fine with it the same way that most users are fine with LLaMA as an open source model. You know what I mean? And I think that's why it never happened to us. But yeah, maybe for other companies it might happen, and it would be amazing if we can solve it.

**Jerod Santo:** Well, we saw a lot of support behind OpenTofu in light of the HashiCorp relicense of Terraform. I'm not sure if that support has continued. We don't really swim in that pool very often. And so is OpenTofu actually getting a foothold, or it's going to become the new Terraform, or is it not? We'll probably find out at this year's KubeCon or something, but... That's one where there was a community fork that came out immediately... Versus what happened with Elasticsearch, which was Amazon created the fork, OpenSearch.

**Shay Banon:** Yeah. And I think Valkey for Redis, and...

**Jerod Santo:** Yeah, Valkey. Yeah.

**Shay Banon:** That's another good example. But this is where I think -- I think most users saw how we behaved in the next few days and they were like "Nothing changed", and they were less worried. Obviously, a lot of the people that are in the details, and go back and have opinions about open source were hurt, justifyingly. I was hurt. But most users were like "It's fine. It's Elasticsearch. We know the team. We're talking to all the developers all the time. It's like, nothing really changed."

**Jerod Santo:** Gotcha. Cool. Alright, well, thanks... Thanks for sticking around, Plus, Plus people. Thanks for supporting our work.

**Adam Stacoviak:** Yes.

**Jerod Santo:** And thanks for sticking around, Shay.

**Shay Banon:** Yeah, yeah, yeah. Happy to.
