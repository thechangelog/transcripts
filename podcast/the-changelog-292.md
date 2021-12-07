**Jerod Santo:** So we're here to talk about Elasticsearch, and I don't know about you, Adam, but I've gotta claim a little bit of ignorance on Elasticsearch - and I'm guessing you as well - because I've never touched the thing. I've heard some hand-waving on the internet; I'm very conservative in my data stores and my search engine, so I haven't actually played with it, but I'm excited to learn about it, and we have Philipp Krenn here to talk us all about it.

Philipp, let's start with Elasticsearch - what it is, where it came from, what problems it's solving, and then we'll get into where it's at today, and where it's going.

**Philipp Krenn:** Right. The base library we're using is Apache Lucene, but that's not really the story we normally try to tell. There is a kind of cute or interesting story around it. Our currently CEO, Shay - he started Elasticsearch back in the days, and actually the first iteration wasn't even called Elasticsearch, it was called Compass. Compass was kind of like the tool for his wife to search her recipes, because she wanted to be a chef, and she had a ton of recipes she needed to search, and he started building a system to make that possible.

She is, by the way, still waiting for that recipe search solution, because he kind of over-engineered that... \[laughter\] So he built Compass 1, and then he found out "Well, that's kind of like a dead end." Then he redid the entire thing, and it was Compass 2. Then a third iteration, which is kind of the lucky number obviously - it wasn't called Compass 3, but that he called Elasticsearch. That was back in 2010, when he first released that. That's kind of how it all got started.

What his idea was about that, that search should be kind of a ubiquitous solution, that it needs to scale, that it should be simple to use, and that's kind of where Elasticsearch started from. It was scalable right from the beginning, and it had an easy to use Rest API, and it should just work. That was kind of like the promise or the start where it all began.

**Jerod Santo:** Gotcha. So Apache Lucene - I think that's a Java project; it started all the way back in the nineties, late nineties, early 2000's... How does that fit into the Elasticsearch story?

**Philipp Krenn:** \[03:58\] Lucene is kind of an incredible piece of work. A lot of work has gone into that already and it's very mature... If I say the de facto search solution that everybody is using, or the standard, it's maybe a bit of an overstatement, but it is kind of the most commonly-used base library that people are using for full-text search. The problem is it's really just a library; so yes, it's written in Java, and you could include that in your own Java application, but it's really a library and you just have to call it very explicitly, and the API is not the most user-friendly or nice to get started with... So that's not really what you want to do. It's a bit bare-bones, but it has all the necessary pieces.

What Elasticsearch then did basically around that - it does the distribution and the replication of your data, and it provides a query DSL and a nice Rest API to the outside.

**Jerod Santo:** Yeah, so as somebody who's not a Java developer, with Elasticsearch it's also Java, but you don't have to care about that, because it's a Rest-based API that any client library can speak to without having to include Java embedded into your application.

**Philipp Krenn:** Totally. Yes, since Lucene is based on Java, Elasticsearch is Java as well, but Shay already saw that -- initially, he had the entire system (Compass) very tightly coupled with the Java ecosystem, but he saw that that is not really what people want, and if you just bind yourself to one ecosystem, it's kind of very limited in the long run.

So with a nice Rest API, and then we have drivers or clients for all the major programming languages, it's much easier to get started and have kind of like that base system that everybody can use, and then everybody can just build whatever they want, and we really don't care what is your programming language. Whatever makes sense for your product or project, that is fine by us. We are just trying to provide the right client, and then you build awesome stuff with it.

**Jerod Santo:** So he set out to build a recipe search, and he ended up building quite a large company called Elastic, which is where you work.

**Philipp Krenn:** Yes.

**Jerod Santo:** Tell us about Elastic versus Elasticsearch. Give us the lines between the open source project, the company, and how all that shakes out.

**Philipp Krenn:** Right. So initially it was Shay, and I'm always imagining him sitting in his bedroom and coding day and night; at my job before Elastic, we were already using Elasticsearch and we were always curious how that one guy could produce so much code, and he was answering all the issues, and writing the documentation, and still coding so much every day.

At some point later on in 2012 he joined forces with three other guys to start a company. Back then, since the product was Elasticsearch, the company was also called Elasticsearch. Since we have then added a few more products along the way, we had to rename the company at some point, since it was not only about Elasticsearch anymore, even though Elasticsearch is still kind of the core of everything, and everything else is built around that and around search, kind of... The company is now -- I think we're about 820, or something like that, though it's changing pretty much every day by now.

We've kind of built various other tools around it. People might be familiar with the ELK Stack (Elasticsearch, Logstash, Kibana). Logstash is the thing to get data and transform it and then put it either into Elasticsearch or some other system, and then Kibana for the visualization part. We always say we want to democratize data.

Basically, you have a nice browser-based tool where you can just explore your data, build dashboards, and just see what you have there.

Later on we even added the Beats, which are like lightweight agents, forwarders, shippers - whatever you want to call them - written in Go, to collect log files, or system metrics, or ping systems... And that's when we renamed the entire thing again, back from the ELK Stack, and we're now trying to call it the Elastic Stack, since -- well, our products are always about kind of being scalable, and ELK Stack...

\[08:09\] First we tried to call it BELK, or ELK B, because Elasticsearch, Logstash, Kibana + Beats... So out of those four letters, the only thing we could make up was BELK or ELK B; we even had a logo for that. There was like the B with the elk horns, which was a cute idea, but since we're always about scaling, we figured out this is not really that scalable, because if we add any other open source products, we would need to redo the entire branding again, and making up new animals, which whatever letter we would get afterwards, it would not getting any \[unintelligible 00:08:40.09\]

**Adam Stacoviak:** Typical naming.

**Philipp Krenn:** Yeah. Now we're trying to call it the Elastic Stack, and internally every time somebody is doing a meetup or some other event and calls it ELK, we raise the internal ELK Alert and somebody will reach out and say "Hey, this is super cool, but we try to call this thing now Elastic Stack.

**Adam Stacoviak:** But the ELK Alert is pretty interesting, because we always get called Change Log, or ChangeLog - all sorts of formations of it, and we need a Changelog thing, Jerod... We need to do this.

**Jerod Santo:** Like an actual log?

**Adam Stacoviak:** Yeah, something that logs the fact that people are saying it incorrectly. I love that. But naming... Geez.

**Philipp Krenn:** So for Logstash we had actually -- the original logo was a wooden log, and people found it super cute... Though now everything is just letters. At some point, as you grow as a company, the cuteness has to take a step back and you need to grow up a little and try to be more professional.

**Jerod Santo:** Elastic the company supports Elasticsearch and these other services as well... Is the model basically you're hosting around the infrastructure, or is there also like an open core thing? How does it break out in terms of the open source projects (I didn't realize they're plural now), versus the proprietary stuff?

**Philipp Krenn:** Building a sizeable company is kind of a challenge if you're an open source company. We're actually trying to do kind of a bit of everything. We provide Elasticsearch and Kibana as a service, which we call Elastic Cloud, but we also have this open core model where you've got the core features as open source, and you can just do whatever you want; it's Apache 2 licensed, so go crazy, do whatever you want. But we do have some commercial plugins around that.

We don't have a special commercial version, like some of our competitors or other vendors in the database have, where they have like a community version and an enterprise version; we don't really believe in that model. We have like -- it's really plugins that you plug into that core system. So even the paying customers, they're using the same open source base, but you just add some functionality on top of that.

**Jerod Santo:** One thing that I -- I said I've read some hand-waving... Most people when I see Elasticsearch come up, it'll be somewhere along the lines of "Hey, try Elasticsearch", and then the person will say "Well, I don't really need advanced search" or "I don't need that much for my search", which maybe Adam has heard me say that to him sometimes... And then they'll say "Elasticsearch is not just for search", and then they'll go into -- that's why I said the hand starts waving, and I'm sure they provide ample evidence for that, but I usually close tab... Does that ring true for you?

**Adam Stacoviak:** \[laughs\] At least you're honest.

**Jerod Santo:** Yeah, they begin evangelizing and I duck out. Is Elasticsearch more than just for search? Is it like a full-on database? What's the core use case that it really slays out?

**Philipp Krenn:** Yeah, I'm very careful about the term 'database', because people have a very specific expectation of what a database does, and I'm not sure we're 100% that, since we're -- first and foremost, we're a search platform... But we kind of want to be the data platform for lots of different use cases. We started off with a full-text search use case, but then we found these other use cases... And we always think about it that everything else that we add around it is \[unintelligible 00:12:12.28\] For example logs, which is kind of one of the most common use cases - for us storing the logs itself is not that helpful; what you actually want to do is you want to search them in the end again, and find what is going on... And we're extending that further and we're doing metrics by now, and we're doing more and more in the security space, and we're also adding - we always say we add to the family - more companies and features and products to the family.

\[12:43\] We have a machine learning component now, and we're trying to do the application performance monitoring (APM space) as well and adding that to the platform. So we're trying to broaden out. We're also doing search as a service now... So we have been adding more and more companies around that, and trying to get from the kind of like these core functionalities also more into the solution space, because some people are a bit overwhelmed when you just give them the options and say "Here, you have this building block, and then you can build pretty much anything you want with that."

Some are kind of like more "Okay, I need a solution for this exact problem", and we're also going more and more in the direction to add more of these solutions. So you just need search for your website, for example. We want to provide you a solution to do that. You can totally build it yourself with the open source tools, but we also try to give you more of a solution just to get to the result quicker. Or you want to build a logging platform, and you can totally build that yourself, but we're trying to get you started in a kind of quicker way.

So we always have these building blocks, and Elasticsearch is kind of (I would still say) the centerpiece, and everything else is built around that... But we are trying to give you more solutions; we try to help you with the heavy lifting.

**Jerod Santo:** That actually reminds me of something; Adam, I'm not sure you remember this conversation, but back on a GoTime \#48 Alexander Neumann was talking about Restic, which is his back-up solution... And he said something really poignant during that episode - he said "Nobody wants back-ups, everybody wants a restore." He got some pushback on that, but I thought it was so insightful, because back-ups are actually a pain in the butt, and they're not the endgame, right? They're just like an artifact that you have to deal with... And if they can't restore, they're worthless, so what you really are after is the restore.

You said something there, Philipp, which made me think of that with regard to logging, and collecting the logs and having them, and storing them... And it's like, nobody really wants logs, right? Nobody wants this stuff; what we want is answers. Even with search - search is a means to an end; we're looking for insights, we're looking to find that piece of data that we remember.

**Philipp Krenn:** Totally.

**Jerod Santo:** So it seems like what you're trying to do is build around that, like you said, these solutions... Like, "Give us the solutions, not necessarily the tools."

**Philipp Krenn:** We are happy to cater for both, because we have people in the open source space to say like "Oh, it's awesome. I want just this building block and then I can take it wherever I want." Then there are others who are like "Oh, I have this business need, and I just want to get to the solution quickly." We're happy to help both of them, because while we are an open source company, and we are doing our open source work, you can just build anything you want around that... But then again, we try to broaden that out into the solutions space.

**Adam Stacoviak:** \[15:46\] It makes sense too, going back to what you said with the fact that you're growing, which we haven't really talked much about the company size; not that we have to go too deep on it, but from what I understand, you've got a pretty large company, and your model is build open source tools -- or at least it seems; you can tell me if this is true or not... Build open source tools that you can give freely out there, but at the same time you're about solutions, so you take these open source tools that Jerod or I or anybody else can freely grab, contribute to and use and build our own solutions, but you've gone ahead and as a mission, as a business model, built solutions around your open source as paid-for services to sustain yourselves and grow.

**Philipp Krenn:** Well, not only paid services... Some of these solutions are also in the open source space, so you can run them yourself.

**Adam Stacoviak:** Really? Okay...

**Philipp Krenn:** For example, the APM company that we acquired - the base components for that are all in the open source space. That was because we saw an opportunity there, that in the APM space there are not that many open source solutions that you can use today. But we think for us as a data platform it makes a lot of sense to not only have logs and metrics, but also cover more things like the tracing or APM functionality there.

So we're trying to extend that, but of course, if you don't want to host it yourself, we're happy to host it for you and provide that as a service. Or we have some more features around the entire thing that you might be interested in as an enterprise, and you want to get our open core features, or you also want support... But we're always packaging support and the plugins that we have together.

**Break:** \[17:34\]

**Jerod Santo:** So Philipp, when I said 'as a database', you were very careful around that word, and you said that it's very much a search platform... Perhaps you could say it's a better complement to a data store, or an additional data store that you have in your application. I'd like to kind of take a small look at Elasticsearch from a micro perspective of an application maybe perhaps similar to Changelog.com, which is a relational database on Postgres that has some search functionality that's just using Postgres as full-text search, and how an Elasticsearch would fit into that equation and really be a good complement, and how it would do better at the search side of Postgres, but then do worse at maybe the asset side or the relational side of Postgres.

**Philipp Krenn:** \[19:36\] So with Postgres and the full-text search features in Postgres it's kind of an interesting approach, because Postgres is first and foremost the relational database, and then they have kind of added more and more full-text features around that just because you saw that, well, people need search at some point. That's fine, it's just like, at the core of Postgres there is still kind of the relational database, whereas Elasticsearch for the search use case is really built on having as many features and being as scalable around search as possible, and it's not just an afterthought, as with other products where they have some full-text search capabilities, which is often like -- I'm not saying this is Postgres in specific, but on some products we have the feeling that it's kind of like this checkbox where you say "Oh, we do full-text search as well", and then when you press further it's like "Yeah, we're doing these one or two things", but if you really want to take advantage of it, then it's not going to help you that much.

What Elasticsearch does basically is whenever you store some text, we have this analysis pipeline. For example, we know something is an English text, and for an English text to search, you have some rules for what makes sense and what doesn't make sense. For example, you do something like stemming. Stemming basically means you cut off -- English is a very simple language in that regard... You cut off the ending of a lot of words, because you don't really care if something is a singular or a plural; you're just interested in the concept, or you're not concerned with the specific form of the word, you're just really interested in the concept that you're looking for. Then you're normally kicking out stuff like stop words, which are very common words that appear in nearly every sentence or text, but they add very little meaning, because 'and' or an article would be in nearly any sentence, and you don't add any value. So that is what full-text search does, and Elasticsearch is kind of elaborate in that area.

We support a lot of languages, we support a lot of features to refine your search, and that is where the benefit of full-text search would come in normally.

**Jerod Santo:** Yeah, I think that's where I'm driving at - can you enumerate those additional features that you're gonna get by complementing your relational database with an Elasticsearch platform? What additional things is it gonna give you in terms of search relevance?

**Philipp Krenn:** What searches generally give you... I'm always comparing it -- the databases are very much black or white. You're searching for something, and then you get a hit or you don't get a hit... Whereas a search is much more shades of grey. It's more like "How relevant is that to what I have entered?" and it is normally a number that is being calculated in the background; I'm not sure how deep you want to dive into that, but there are multiple factors that play into calculating that relevancy.

For example -- so the one sentence I'm always using from Star Wars is "These are the droids you're looking."

\["Let me see your identification."

'You don't need to see his identification."

"We don't need to see his identification."

"These aren't the droids you're looking for."

"These aren't the droids we're looking for. Move along, move along..."\]

**Philipp Krenn:** So if you store that in Elasticsearch, the sentence "These are not the droids you're looking for", after removing the stop words and stemming, what remains is "Droid you look", because these are the three main concepts that might stick out, or that people might be searching for. So they're all irrelevant, even the 'not'. Full-text search doesn't generally understand what you're saying, like if this is positive or negative or what this is; it's kind of just matching on these terms, and "Droid you look" are the three terms that would remain when you do the search.

Depending on the sentence, you will have more or fewer stop words, and we really kind of extract these base concepts. Then, since we're just storing this stemmed version of the concepts that you have, the lookup afterwards is very fast, because whatever you're searching for... If you search for "droid" or "droids" - it doesn't really matter; this term you're searching for runs through the same pipeline. So the stop words are removed, we're doing the stemming, and then we can just go on the direct matches, and then you can see "Oh, we are searching for droid, and this sentence contains droid."

\[24:10\] Then we're doing the calculation of how relevant the specific text is. For example, if a text contains droid multiple times, that is probably more relevant for your droid search than if droid term was only appearing once in the sentence. Then we're assuming, "Okay, droid is kind of like a relevant concept", we give a specific weight to that, and then we will also take into consideration how long a specific element is.

For example, if your search term is appearing in a title - titles are normally very short - that is much more relevant than if it's just appearing in text body, because that is much longer. The base concept that is being applied there in the background, which I've tried to describe here, is called tf-idf (term frequency-inverse document frequency) which is kind of calculating this relevancy.

The algorithm has been slightly refined by now, it's called Best Match 25 (BM25); so it's the 25th iteration of the Best Match algorithm, and this one is slightly better now. This is what is doing the heavy lifting behind the scenes for your search.

If you compare that to the classical search a lot of people are probably still doing in the relational database, you will have a hard time, because this doesn't support anything like stemming. This also doesn't support anything like fuzzy search; this doesn't support synonyms, and lots of other concepts. And if you have the wild card in the beginning, so if you're doing the like percentage (whatever term you have percentage), you cannot even use an index, so your search will always be very slow, because you're basically going through all the entries.

Since you have the wild card in the beginning, you cannot use the index because you don't even know where to start; you basically need to go through all the entries... Whereas full-text search just extracts the right terms and then you basically check where are these terms, in which documents do I have appearances of these terms that I'm trying to find.

**Jerod Santo:** And these different facets that -- I'm just thinking of like an equation like "This factor plus that factor plus that factor equals relevance rank", or some sort of scoring. Is all that stuff tweakable, customizable, either at Elasticsearch configuration time, or maybe even at query time, with regards to how you get your results back?

**Philipp Krenn:** There are a lot of tweaks that you can apply. One you can tweak some parameters in the search, but a lot of the functionality is also like the way you store the data. For example, if you resolve synonyms at index time, that is some index time feature; or you could also do that at query time, where you say "These five terms are equal", and if the user is using any one of them, I want to find all the other four as well, or all the other four places where these synonyms are appearing.

You can build quite complex queries. We have a proper query DSL that is giving you lots of power, where you can say "This must appear, this must not appear, these terms should appear" or "At least two of these three terms should appear", or you can say "I'm looking for either one of these terms." Or if you have them as a phrase, or in combination, like first one of them, followed by the other, then this should be ranked higher... So you have a lot of ways to actually tweak that.

**Jerod Santo:** I suppose the underlying BM25 algorithm - I would suppose that itself is not tweakable, because after 25 tries, they probably are doing better than I could go in there and --

**Philipp Krenn:** You can still slightly tweak it. If that is improving your search a lot is very much up to you, or up to your use case. We always like to say it depends... Whatever you're doing there depends on what exactly you want to achieve. I would just start with the basics and try to expand from there, and not overthink it from the start... Otherwise it can get kind of a bit complicated.

**Adam Stacoviak:** \[28:10\] How well is full-text search in Postgres, Jerod? Since we're asking him on Elastic side, how it compares -- what are some of the things that you know about Postgres and its full-text search that we like or dislike? ...in terms of indexing, or being able to query at index time, or being able to create indexes and all that stuff.

**Jerod Santo:** Yeah, so you can do full-text search specific indexes in Postgres that allow it to not do full scans on specific queries, and it does fuzzy searching and stuff like that... But you can't -- I don't know; maybe you can do more than just that, but you can't do all of these different relevance facets that he's talking about, as far as I know.

**Adam Stacoviak:** It's a specialized thing.

**Jerod Santo:** Yeah, and Postgres' full-text search is better than other RDBMSes reputationally, as being slightly better than a like query, so it gets you a little further, and in many cases, for small data sets and small uses, like if you're not searching very often, it's fine... But in many cases - like you said, you know when you outgrow it, I think. And probably we're at a point now, Adam, where we're just getting to the edge... I know we have user story in our Trello board about search and some different ways that it should be matching, which it's not, and maybe I could stretch our current implementation to work that way, but at a certain point it's going to become -- especially as our data set grows, it's just gonna become less relevant over time, and we'll probably end up reaching for something like Elasticsearch when that makes sense.

**Adam Stacoviak:** Yeah, because it seems that things like plurals, which, Philipp, it sounded like that's something that's just baked right into Elasticsearch, where pluralization of nouns, or different things, different terms - that comes for free; you don't have to be an exact match... I find that a lot of times I don't find something because I haven't searched precisely enough, where it should be a little bit more forgiving to the user.

**Philipp Krenn:** Yeah, and once you start growing, probably you need to scale past what Postgres can give you. For example if you're searching on Wikipedia, Stack Overflow or GitHub, behind that search box there's always Elasticsearch doing the hard work for you, well-hidden behind the scenes.

**Jerod Santo:** I was just trying to quickly google the feature list on Postgres, and we're just picking on it because it's what we use.

**Philipp Krenn:** Postgres is actually pretty feature-rich.

**Jerod Santo:** Yeah, pretty good for RDMBSes. But it does do stemming, it does do ranking, it supports multiple languages, has fuzzy search... So it can take you ways, and like I said, I've never used Elasticsearch, I've never used a search engine, a thing that's built for search, for any of my client work or for Changelog.com, because my data sets are small and my search needs are usually very trivial... So that's why I was kind of claiming the ignorance on this, because this is an area that I've never had to move into.

**Adam Stacoviak:** You're currently examining it.

**Jerod Santo:** Yeah, I very much feel like you know it when you need it.

**Philipp Krenn:** Once you hit the wall, yeah, you will feel it.

**Jerod Santo:** Yeah. You're kind of like "Okay, these results are getting less and less relevant all the time."

**Philipp Krenn:** And the other thing is that once you have Elasticsearch for one use case, there are all these other use cases where it's coming in handy, so we are trying to give you a broader tool to cover kind of a lot of base for that.

**Jerod Santo:** Can you give some examples of like "Once you're using it, it can also do X, Y or Z"?

**Philipp Krenn:** Well, so once you're using it for search, then probably some analytic use cases come along. Like, you have whatever kind of data your company is having or what you're trying to do, especially in combination with Kibana - you can then just store all of the data and build fancy dashboards by just clicking a few buttons, basically.

Or you have logs. For example, who is visiting your website? I don't know what your architecture is in the background, but if you have an Apache or NGINX or something, you might want to collect those logfiles and just see like "Who is visiting our site? Which IP addresses, which we can then translate into a region and do a GeoIP lookup", or "What errors do we have? How many 404's, how many 500's? If we change anything on the website, who has changed what, and why are we suddenly getting more 404's? What is up with our system?"

\[32:32\] And you could add metrics, for example either business metrics, like "How many people are coming to our website? How much time are they spending?" But it could also be metrics like CPU and memory usage, or if you're using Docker or Kubernetes, or whatever system basically you have. We're very good at collecting a lot of metrics for that, and then you can bring all of that together in some dashboards, and then you get the overall view, both of your business data, but also on the IT system side - what is my infrastructure doing?

**Jerod Santo:** I was just thinking about the logging aspect - you said you don't know what infrastructure is like... Well, we just pushed everything off to Papertrail, which is a service that we use. They probably have Elasticsearch on the back-end, or some sort of search tool allowing us to then run our searches through them. So that got me thinking about Algolia and some of these other searches as a service, and I'm just curious how either Elasticsearch self-hosted infrastructure, or even Elastic's offerings - how they differ and measure up to other search options that are out there for developers to pick and choose from?

**Philipp Krenn:** So we're getting into two different areas here. Algolia for the search use case - we have recently acquired a company called Swiftype, which is basically in exactly that area... And while their product was already based on Elasticsearch, they were just doing the crawling for you and just automating that search process, basically. That is one of the solutions -- like, I've talked about solutions before, and this is one of the solutions we want to add. It's still built on the open source search platform that we have, but it's more of a solution that you probably don't want to build yourself, because you totally could, and if you want to jump into that for a weekend project, you can totally do that, but maybe you'll just say "Oh, I just want to have a site that is easily searchable. I just want the solution. I want my page to be crawled automatically, and maybe I want to fine-tune some searches. For example if I enter this term, this should be the order that I want to have, or I want to have some features..." When you need some fine-tuning, you can totally do that. But generally, it's just a solution that you can get started with.

**Jerod Santo:** Swiftype - I think I actually run that on my blog - because it's a static site - to add search. They provided it free for small/personal use for a long time... So I think maybe I've got Elasticsearch power on my blog search...

**Adam Stacoviak:** And you didn't even know it!

**Jerod Santo:** And I didn't even know it. \[laughter\]

**Philipp Krenn:** Well-hidden behind the scenes... \[laughter\]

**Adam Stacoviak:** This is awesome.

**Jerod Santo:** I love it, I love it.

**Adam Stacoviak:** Well, you said we're getting into different territories when you talked about logs versus like search for a database or content... Can you go into that more? Does it end with Swiftype?

**Philipp Krenn:** For the log use case, you can totally use one of these smaller solution providers. But then again, it's one more island, because your search results basically sit on their solution or their site, and if you want to access anything, well, you're going there. Then for any other data, like business analytics, you might have another island. But it's just like lots of different islands, which you then need to go to each individually to get the bigger picture.

Our vision is more to have like one dashboard where you can show different things... Where you can have both like "Okay, my website did that much revenue today", but also "How did the latency of my website or how did the number of errors affect that?", and it's just like one tool where you have the overall and bigger picture for that.

**Adam Stacoviak:** \[36:10\] Maybe you can go deeper into it, because I see the user types caring about those interfaces as one team, but different cares... Meaning I care about search, and maybe as a marketer I care about terms, or I care about relevancy, or I care about people actually finding certain things, or I care about the content that's getting searched... But if I'm a developer, I care about logs, or if I care about performance, maybe I'm a different sector... And it seems like those customer types or the user types of those three different things in one dashboard -- why one dashboard?

**Philipp Krenn:** Well, obviously, you don't have to. Probably everybody will have the one big TV screen in their office with the custom metrics that they're most interested in... But maybe you want to have the bigger picture - how did one influence the others? ...which right now, if you have different solutions for that, might not be all that easy. And maybe also this kind of like siloed approach is a bit partly because you had the different tools, and everybody was kind of like using their own view, and there was no easy way to bridge those different views.

I think that is part of our vision, to get the bigger picture and to have a better integration between all of these different departments. I hate the term DevOps, but I think this is kind of partly that idea that you break down those siloes and that everybody is doing the thing that they had been doing in the past... But you want to get beyond that and get to the inherent value. Where is the value in your company? It's not like doing one of these things, but it's getting the bigger picture and see how you can strive and what you can push forward there.

**Break:** \[38:01\]

**Jerod Santo:** Philipp, Elastic recently published an article called "Doubling down on open"; in fact, Shay wrote this, February 27th, 2018... And I misread it, I thought it said "Doubling down on open source", so we're gonna talk about that... But it stopped short - it says "Doubling down on open", and it kicks off with him saying he's excited to announce that y'all will be opening the code for your X-Pack features - security, monitoring, alerting, graph reporting, so on and so forth... But this is not open source this is opening the code. Can you give us the distinction and tell us what's going on here?

**Philipp Krenn:** This is very much a definition problem, but I think the \[unintelligible 00:39:52.07\] has a definition of open source which says something like "You can see the code, you can modify it, and it's freely available." The "freely available" is kind of what we're not doing there. Since we're a large company, our salaries need to be paid somehow... So what we're doing with these features - and you can get the source code on GitHub; there will be a directory or a folder with these non-open source parts... So what is Apache 2 licensed right now, that will stay Apache 2 licensed, but we will add the code for the commercial features to GitHub, so you will be able to see everything that is going on there, but to use it in a production environment, you will still need a commercial license.

\[40:46\] So it's not open source, but I always say it's open code, because you can see the code, you can totally open issues for that, you can even contribute patches back... We don't really expect anybody to contribute major features to our features that we will sell afterwards, but you can totally see what is going on... And that has multiple reasons. Firstly, especially around security people always want to see what they are getting, and with bigger customers, sometimes they wanted to have an audit of the source code behind that. Well, it's much easier to tell them "Well, the code is open. Just have a look there, and you can really see what you are getting."

Secondly, for us internally it was kind of a problem, because we always had the open source GitHub project, and then we had the X-Pack ones, where the commercial code was living. And then you always had the problem of how do you work efficiently with that? You cannot do atomic commits, because a part of the functionality might be in the open source part, and a part of the fix that you are contributing is on the commercial side.

How do you communicate the issues to the outside world, because the issue for the commercial part is in the private repository, so nobody can really see what is going on. That will also make the communication and also the process for us internally much easier, and we just think it's the right thing to do, and everybody can see what they are getting. You will still need to pay for some or most of the features; you can see that in the feature matrix what is commercial and what is actually free to use but not available under an open source license... So there might be some minor restrictions, like you cannot provide it as a service for customers, but you can totally run it for your own projects on premise.

So this is what we're trying to achieve there, to kind of find a way to have or be an open company and build on open source, but still survive as a company and not end up like, I don't know -- for example RethinkDB, I think that was one of the products that was really widely loved, but it was just not enough commercial in there that the company made the cut in the end, and I don't think that it's benefitting anybody.

So it is a fine line to walk, but we are doing our best to kind of be open and make users happy, but also have a sustainable business model and be around for a long time and build good products for a long time.

**Jerod Santo:** Are you guys following in somebody else's footsteps on this, or is this paving a new path with regards to this particular layout that you've come up with? ...with the X-Pack features in a separate folder, and the license being in the way of it being completely open source...

**Philipp Krenn:** It's definitely not very common. I think one or two other companies have looked into similar things. I think CockroachDB is one of them, though they are much smaller and much younger as a company. I'm not aware of any other more established or larger company doing that.

\[44:02\] Also, from the legal perspective, it is very interesting, and on the one hand side, we really want to kind of like keep the legal text there to a minimum and not scare anybody away. On the other side, it needs to be water-proof so that nobody can find a loophole to legally use our commercial intellectual property to make money themselves, or just use it for free and work around that.

Some people have had the concern that while you can just take the code, modify it and kind of like comment out all the licensing restrictions, but we don't assume that this is kind of an issue for any established company. Anybody who is capable of paying, or at least in the Western world... I'm not sure how it's like in the rest of the world, especially with the legal system there, but we don't see that as a major risk, that somebody could just easily modify the source code now and run everything because it's open.

We have thought about that, we are not afraid of that; we're still in the process of drafting that legal document or that license that we will add, and we're also kind of right now cleaning up the code for the opening, because you need to make sure what was closed source code there are absolutely no credentials, there cannot be any references to customers, you don't want to have anything else that might be embarrassing... So there is kind of a cleanup process right now that the colleagues are going through.

**Adam Stacoviak:** The legal document may be process; what I can say for sure is that between this blog post doubling down on open, and then also "We're opening X-Pack" is well documented, so you're definitely doing a good job of communicating your intentions, which I think is probably the hardest hurdle to get over when making this kind of shift, especially something that can be this controversial, or be mistaken or feel misled if not described carefully... You're saying why you're doing it, what's changing, when it's gonna change, how things will be affected... These two documents - which will be in the show notes - greatly communicate your intentions here.

**Philipp Krenn:** Well, we are really trying, because even internally, people were confused at first, and after the announcement, somebody accidentally from within the company, even on the private account, wrote like "Oh, we're open sourcing X-Pack" and it's like, no, that's not what we're doing.

It's an ongoing fight, and obviously, once it's being posted on Hacker News, everybody goes crazy and posts whatever they think it means or doesn't mean, and everybody has great fears... And we understand that people are at first a bit surprised, because it's not a common model, but we are really trying to do the right thing here, and we think this is a model that might have a lot of benefits for companies as well, so we kind of hope that this will be more common in the future... Or at least we're risking it and seeing where we can take this.

**Adam Stacoviak:** I'm curious what you mean by doubling down; it could be the risk portion of it, or just the fact that something indicated that you should have such a belief in this direction that you're doing it.

**Philipp Krenn:** I think it's both. We really see open source as the driving force and how to get software out there, and also what is making us successful. We always see it like that. Every paying customer has been an open source user in the beginning. That is really where everything is starting. Even the salespeople understand that, even though of course the salespeople never want anything in the open source space; they would love to have everything closed source and commercial...

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** Jerks...! \[laughs\]

**Philipp Krenn:** But they're kind of understanding that model, like "How do you get where you are right now, and how can you take it further?"

**Adam Stacoviak:** You've gotta get paid, you know?

**Philipp Krenn:** Well... And they have like 50% of their salary being based on what they are selling.

**Adam Stacoviak:** \[48:01\] Yeah, as a salesperson, you want no ceiling on your revenue opportunity, on how much money you can make, because when you're in sales, usually you risk what is often a salary; you usually get some sort of stipend, or a base - or a draw is what the common term is used for it... And it's very small, nothing you can actually rely upon. So in that position, you're like "I don't want any restrictions. If I can sell a lot, don't restrict me. I'll sell a lot. If I can sell very little - well, then you fire me. Or I will starve. One of the two."

**Philipp Krenn:** Totally. Believe me, we commonly have these discussions, and the engineering would of course want to make everything open source, because, well, who doesn't...? And sales obviously wouldn't want to make anything open source. We need to strike the right balance, and of course, it's an ongoing discussion, but I think we're doing the right thing here. We'll see how that develops over time, of course.

**Adam Stacoviak:** Well, when it comes to security, I think that's -- you mentioned that earlier when you first started to share the details here... But I think that's so crucial. You hear so often tooling or something being in the security space, and you can't get access to the source code.

Jerod, you kind of reminded me of - which is totally opposite of this - the third-party CSS not being safe, where Jake Archibald said "The real problem is thinking that third-party content is safe." In this case it's third-party code or dependencies, and so many issues stem from a dependency that becomes -- what's the term for it? Not safe anymore.

**Jerod Santo:** Unsafe. \[laughs\]

**Adam Stacoviak:** Unsafe. That wasn't what I was looking for, but that works in this case here... You can't trust it anymore; it becomes compromised, that's the word. And you've got that in your codebase and you don't even know it, but the point is that you can see these because you have opened them up... And it sounds like you also have issues open; you're not looking for people to contribute, but you want people to be able to see the code, scrutinize the code, maybe even file bug issues and/or patches that may be security-related... Is that correct?

**Philipp Krenn:** Oh, totally. And especially if you're a more advanced user and you run into an issue, the first thing you might want to do is just check out the source code and see like "Okay, this is what it's doing and this is what it's supposed to do", and then you can say "Oh, either I'm using this wrong, or there is a bug. I can report that bug", and then I can see the progress and I can be part of that discussion. It's all on GitHub, where it's much more inclusive in the regular process you have around everything you do in the open source space... And we want to give people the opportunity to participate in that as well, and be able to show like "Hey, this is what we are doing and this is when this release is coming out."

Otherwise, that communication was very complicated, because you would have had somebody to always communicate that "Oh, we have fixed the bug and it will be in that patch that we'll release." And then you shouldn't forget anybody, otherwise people are surprised, like "Oh, is my issue now fixed in that release or not?" And it's just creating an unnecessary barrier that we're tried to get rid of.

**Adam Stacoviak:** For the developers out there that are thinking "Okay, so how big is Elastic? Great, you've gotta make money, but how much?", why don't we share with them how many people you've got in your company, so they can kind of quantify that number, so to speak?

**Philipp Krenn:** It's changing every day. We're I think like 820, or maybe we're already 830 today. Right now we are growing by 50 a month, which is an insane number. If anybody is looking for a job, by the way, just shoot me a message and I'm happy to connect you. We have for pretty much any technology that you can imagine. We're not just Java, we have lots of other stuff as well, and lots of open positions.

**Jerod Santo:** What's driving that growth?

**Philipp Krenn:** Obviously, we have more and more products, and we're getting more into that solution space, so that is the engineering side... But of course, since we have all these solutions, you also need to sell them, so we have also a lot of sales and marketing people there.

**Jerod Santo:** \[52:12\] How has your community responded to this new direction? You have your customers, you have lots of users of the open source project... Even just on the Elasticsearch repo on GitHub there's 983 contributors over time. Now, maybe with 820, maybe you've got a lot of those be your employees, but surely there's other companies using this, other individuals, and now this change for this direction of open, but not open source, proprietary open code things that are gonna be in the repos, and this vision that's been laid out... I know there's been some confusion, but has there been a backlash? Have people received it pretty well? What's the response been?

**Philipp Krenn:** I think partially confusion and partially people are waiting, since the final license is not out there and they don't really know what it means. I guess we will get the final vote once that is being done.

On the other hand, if you're an existing user, nothing is changing. Like, what has been out in the open source space is staying out in the open source space; we're just adding more viewable source code. So if you want to take a look behind the scenes for those features, that is totally possible in the future. We're not taking anything away, we're just adding more features.

I think a lot of people care more about the free part than the open source part, to be honest. For those, not too much will change in that area.

**Adam Stacoviak:** That's an interesting question, Jerod, to consider the response, obviously... I didn't think to ask that; that seems like the obvious thing to ask, which is like, "Okay, you've got this many employees, you must have a large customer base; what's the response?" It looks like this announcement was made at Elastic{ON}. How do you say that, Elastic On, or Elasticon?

**Philipp Krenn:** We normally say Elasticon, right. It's our annual conference.

**Adam Stacoviak:** Okay. And maybe it was just timing, but have you asked, or are you aware of why you have announced this change prior to the end user license agreement being available? Because you said confusion... It seems to me that maybe some of the confusion can be guarded, I guess, or just not there at all if the whole deal was clear and that's the missing piece.

**Philipp Krenn:** You want to announce something at your annual conference, and we really wanted to put that out there and show our commitment to openness. On the other hand, there is not that much \[unintelligible 00:54:49.19\] finding the right legal text is a lot of legal work, and we're not there on the legal side for having the text. We were aware that it probably would have been better if we had the final text there, but on the other hand, speed in that regard could really kill if you just put out something that is not foolproof or does have some loopholes that would totally impact the company. So we really want to draft something that is substantial there and is doing the right thing.

And the engineering discussion is very interesting. It's like, "Oh, so since you have the part of the source code that is Apache 2 licensed, maybe you could just modify the Apache 2 license code to circumvent that license check for the commercial part." Maybe you could do stuff like that. This needs a lot of discussion, both between engineering and the legal side. On the other hand, we don't want to make this too restrictive to scare anybody off.

So we are really trying to walk a fine line of doing the right thing, and unfortunately, that takes some time, and it's really a back and forth.

**Adam Stacoviak:** \[56:04\] I think it's important maybe to put into perspective the reasons why. There's a lot of confusion on the details, but the Why usually helps everyone understand the direction, and maybe even gain some trust. The Why is because you need to be a profitable company, and survive, and continue to have the necessary employees to innovate and to deliver services, right? That's the Why, right?

**Philipp Krenn:** I mean, that's not the Why for opening it, but that's the Why why we need to have commercial features, that you can continue to get cool features and we can innovate other products. But like we said, we're also committed to this openness, and it's just like finding the right balance. We would love to see that we're not the last ones to do something like that, where you have a commercial offering because once you have a company you need that, but also having this open part... And not be like, I don't know, Oracle, where you just cannot see anything in the source code, and then something doesn't work out, you write to support and then you wait for some answer from support, and maybe it's not giving you the right answer of how something is supposed to work... Whereas once you have the open code approach, if you're knowledgeable enough, you just look up "How is this working behind the scenes?" I can just figure it out in 10 minutes myself and see what is going on. I think there is tremendous value in that, as well.

**Adam Stacoviak:** If you don't go this route - you've referenced RethinkDB earlier, so it sounds like you're familiar with that story... If not sustainable, Elastic could see a downturn in employment... That means lost jobs, that means -- heck, that could potentially mean we see you on Patreon at some point, rather than finding ways to sustain yourselves in ways that meet your own business model.

**Philipp Krenn:** Right.

**Adam Stacoviak:** Not that that's gonna happen; that's an extreme case. We see open source projects and/or products attempting to - and in a lot of cases succeeding in sustaining through OpenCollective, Patreon, direct support, obviously your company, so that may be slightly different... But the point is that if you don't find a way to deliver these things you want to in a commercially viable way, then it means lack of success, and company failure potentially.

**Philipp Krenn:** Yeah, and it's in nobody's interest to shut down a project, like it happened to RethinkDB. I mean, the code is available on GitHub, but I checked just a month ago or so and I think pretty much nothing is happening there, so this is (I guess) pretty much the end of it, and nobody is benefitting from that... Because it was a great product and it was also widely loved, from what I understood. That's not what you want to do.

**Adam Stacoviak:** We'll put it in the show notes, we did the -- what was it, "The future of RethinkDB", Jerod? Was that the last episode we did? It's a great show; I mean, it kind of \[unintelligible 00:58:58.05\] the chronicling of this podcast covering RethinkDB, which was two episodes Slava, and I can't recall the person we spoke with right now...

**Jerod Santo:** That's right, Mike Glukhovsky, episode \#266, "The Future of RethinkDB."

**Adam Stacoviak:** Yeah, I got the title, but the person I forgot. Mike was great to have on. He greatly shared the back-story, the founding portion of this, and then ultimately how the IP was bought by the Linux Foundation, and what that meant... Yeah, we'll put that in the show notes.

Philipp, anything else we can cover here? Maybe what's next. This is probably the hottest topic in your company and in your projects... Where can we go from here? What's best to cover to close out the show?

**Philipp Krenn:** So continuing kind of like the open theme, we're doing Google Summer of Code this year for the first time. It's sponsored by Google and organized by Google; it's basically open source organizations can apply to run student projects, and a student will then implement a feature for the project in three months, and Google is paying the student for that.

\[01:00:07.12\] That has been going on for -- I don't know; I don't even know which year we're in, but 10+ years from what I remember, because I think I was a Google Summer of Code student like 9 or 10 years ago, and participated in the project. Now we are trying to be there - or we are there - as an organization as well. We're currently selecting the students, so unfortunately it's over for this year, but if you're a student and you want to work in open source during the summer and don't serve drinks or anything like that, then it's a great opportunity; keep your eyes open in February for the call for that, and then you can see more than 100 open source projects where you can apply for either ideas they are putting out, or you can come with your own project ideas. If you're being selected, you can work on that code for three months during summer and being paid by Google. So that's kind of a very nice thing for students to do; I can highly recommend that.

We also see that as being part of that open source ecosystem and \[unintelligible 01:01:11.02\] We are participating in initiatives like that, and try to bring on students into the projects, the new generation, into open source, and help them getting started.

**Adam Stacoviak:** You were a student in the Google Summer of Code?

**Philipp Krenn:** I was a student in Google Summer of Code; I worked on a PHP-based CMS system called Silverstripe, which nobody knows because it's from New Zealand. That was kind of like my start into the open source world. I worked on the project, and then I kind of kept ties with the project, and then 2-3 years later that organization was a mentor organization, and then I was a mentor with them as well.

That's kind of a common topic - you bring on people or students on the student side, and then they continue as the mentors, or as we now do on the organizational level, driving that to kind of help the next generation of strive in the open source ecosystem.

**Jerod Santo:** I'm looking at their homepage, 13,000+ students, 108 countries, 13 years, 608 open source organizations, and 33 million plus lines of code over at Google Summer of Code's history. Pretty impressive statistics, and what an impact it's had over time...

**Adam Stacoviak:** Well, Philipp, thank you so much for schooling us on the use cases of Elasticsearch, how a relational database like Postgres can leverage it, potentially how you can bridge the gaps across various different vectors... Yeah, thank you so much for sharing that back-story, because that certainly educated me quite a bit... And the fact that this is open source, and it began as open source, and the direction of your company... It's so great, so thank you for sharing that, and thank you for being a fan of the show and thank you for coming on. I appreciate it!

**Philipp Krenn:** Thanks for having me, and I hope you can fix all your search problems. Let me know if you need a hand!

**Adam Stacoviak:** We need a hand.
