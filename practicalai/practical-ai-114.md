**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. Happy Thanksgiving, Chris! How are you doing?

**Chris Benson:** Hey, happy Thanksgiving. I'm doing very well. I guess by the time this goes out we'll be just after Thanksgiving...

**Daniel Whitenack:** Just after American Thanksgiving, yeah.

**Chris Benson:** That's right. We haven't stuffed ourselves yet at this moment, so we're lively. Lively today.

**Daniel Whitenack:** Yeah, although I heard there was a general surplus of turkeys, because people are at home and they're in smaller groups. Of course, you and I -- I don't know if you go for the Tofurky... For our listeners that don't normally listen, Chris and I both don't eat meat. But we always have a Tofurky, and that's about the right size for us this year, I think. We're not gonna have that many people around.

**Chris Benson:** Yeah, it's good, because my wife is really into making sure that we have the Tofurky and all the little things... But yeah, it's all vegan, and it's delicious. I've gotta say - turkey, if you were vegan five years ago, it sucked to be a vegan on Thanksgiving. It really did. It sucked. But now it's good stuff.

**Daniel Whitenack:** As far as general meat substitutes, I would say it's pretty good. They've gotten a lot better, they really have.

**Daniel Whitenack:** Yeah, yeah. I don't know if they're using AI to analyze the recipes and get it right, but...

**Chris Benson:** I was gonna say, I have no idea what this has to do with AI, but there we go. We're coming into the holidays, it's time to eat.

**Daniel Whitenack:** Yeah, yeah. Well, I'm pretty excited today about our conversation, Chris. We've had a number of people come on the show and mention various opinions, or ideas about opening up datasets, so open data...

**Chris Benson:** \[00:04:04.10\] Yup.

**Daniel Whitenack:** ...whether that be image data, or speech data... We had a conversation with Mozilla Common Voice about that data... But generally, a lot of times when we get into these conversations it's more from the perspective of consuming that data for some purpose; not from the perspective of people that have actually worked to open up data... So I'm really excited today that we have a couple of people from Unsplash with us.

Unsplash has released a huge -- actually, the world's largest open library dataset, and today we've got with us Luke Chesser, who's co-founder and head of product at Unsplash, and we've got Tim Carbone, who is a data engineer at Unsplash. Welcome, guys.

**Timothy Carbone:** Hey, guys. Thanks for having us.

**Luke Chesser:** Hey, thank you.

**Daniel Whitenack:** Yeah, so before we jump in, why don't we just go into a little bit of each of your backgrounds, and how you got interested in doing what you're doing now, and eventually ended up at Unsplash. Do you wanna start us out, Luke?

**Luke Chesser:** Yeah, for sure. My background was originally as a designer, and I joined two friends to start a company, which was at the time a marketplace for hiring designers and developers... And by necessity over the years I ended up having to learn engineering, and kind of worked my way into building products completely.

One of the side projects we started building inside of that company was a company called Unsplash. It was just this little image repository that we open-sourced... And that eventually turned itself into a full company, which is its own entire story. Now I get to oversee this team of really talented people. I'll pretend that I know a lot about coding and design and everything, but really, they're the ones that make me look really good now.

**Chris Benson:** Before we go on, I've gotta ask... Because the listeners only hear the audio; we're all on a Zoom call right now, and I see the guitars hanging behind you on the wall, so you must be a musician, I guess...? Or just a fan, or what?

**Luke Chesser:** Yeah, let's say my coding is even better than my guitaring, so I don't know how \[unintelligible 00:06:03.06\] This is purely for show, I think.

**Chris Benson:** It looks good, okay.

**Luke Chesser:** To make myself look cool.

**Daniel Whitenack:** Cool. Tim, what about you? What's your background and how did you end up working with Luke at Unsplash?

**Timothy Carbone:** So for my background - I have a classic computer science master that I did in France. For the final master internship I was led to Montreal, essentially... And that's when I started working in data. A couple of years later I had a great opportunity to join \[unintelligible 00:06:31.09\] at the time, working remote. I went back to France for a couple of years, and then went back to Montreal, so now I'm working for Unsplash since the transition.

I've been working there for 4-5 years now, and I'm working as a data engineer, essentially building the whole data architecture, trying to get some stats in front of our contributors and get some useful insights for our business needs.

**Luke Chesser:** Yeah, and also - Tim's gonna be humble here, but Tim's the only person working on data inside of our company, and there's a lot of data. We have a whole stats analytics system that serves our 200-something thousand contributors; we have a massive search system, all these things. All of it is powered basically by Tim. So he's gonna be very humble, but he's very good.

**Chris Benson:** You've got some weight on your shoulders, Tim, my friend.

**Timothy Carbone:** Yeah, thank you. And same thing - I'm not a machine learning engineer, so AI is very foreign to me... I'm mostly focused on data architecture warehouses and things like that. So you probably know more than me on AI.

**Daniel Whitenack:** Well, I think we're all learning, and it sounds like from what you're already doing you probably have a good bit of knowledge in a lot of areas, so that's great. I'm curious - you mentioned a bit about how Unsplash came about and this dataset came about... Could you give us a little bit of history of just where this data originated and the nature of it? What's included in your data, and why does it exist in the first place?

**Luke Chesser:** \[00:08:02.12\] Yeah, so going back to the fundamentals, the data exists because Unsplash is this repository of images that are contributed by a community of photographers all over the world, and they open up their images and say "Hey, anyone can use these images for whatever they wanna use them for." And traditionally, that's been "Okay, I'm gonna download these images and I'm going to use them in a creative project. I'm going to make a graphic, I'm gonna use them in an article..." But there's so much more to images than just what they look like, and with two million images now in this community, we've been talking about for a while the idea of opening that up to AI researchers, or really just anybody who wants to use it in a different way.

We've had this API traditionally where developers can come in and pull in images for different applications; so we power Medium's images, we power Google's, we power BuzzFeed... A whole bunch of different companies use the images via the API. But the API wasn't set up to be used for the kinds of data-intensive projects where you need to pull in a lot of information.

Tim and I had had this conversation a handful of times over the years - wouldn't it be cool if we could open up our dataset and make it available to people who just wanna play with the data and make cool things?

It was earlier this year during lockdown, when we didn't have a lot going on, that we were like "Let's do something." And Tim took it upon himself then to think about what would be useful, what would be good for a v1, and how could we get that out there. And Tim's probably the best person to talk about what data we're actually exposing.

**Daniel Whitenack:** Yeah, and I should mention too that one of the reasons why we're having this conversation is our editor at Changelog, Adam Stacoviak, one day in our messages, like you're saying, during lockdown, he messaged me and said "Hey, look at what was just released from Unsplash. This would be a cool conversation." So thanks, Adam, for forwarding that along.

Let's maybe then kick it over to Tim, just to talk about what is actually in this dataset. So you mentioned images that people contribute... Is it just images? What's the domain of these and how are they represented?

**Timothy Carbone:** Yeah, so the dataset doesn't actually contain the photos. It's basically a couple of CSV files in which you will find the link to download the photo. So you could potentially parse the dataset and mass-download everything, if you want... And for each photo, you have a bunch of associated data and metadata. So you would have, for example, \[unintelligible 00:10:24.14\] data from the camera, you would have photographer details, you would have geolocation for the photo, you would have Unsplash stats, and you would also have things like tags and keywords data that were collected from third-party AIs, including Google AIs, and Amazon's, and things like that. You would also get some data about the colors that are present in the photo, and we were trying to include a bit more of Unsplash content, so we added the notion of collections. When you go on Unsplash, you can create collections of photos, and that could say a lot. I'm guessing that could say a lot to researchers as to which photo is related to another one, or whatever... So we're including that collections data inside the dataset.

We're also including search conversion data. That could be very interesting, I think, too. So you'd have people who search on Unsplash, who click on photos, who download photos, and that is also represented in the dataset.

**Chris Benson:** Very cool. As you were saying that, something came to mind... I was really wondering - and I'll probably throw it back to Luke for this - how is your business model accommodating that? Because what you're describing is wonderful to hear as a practitioner and a consumer of that... But how is your company organized so that you can support this kind of work, and what's the benefit? How does all that work in your world?

**Luke Chesser:** Yeah, so the dataset isn't open-sourced, isn't released in any way to be this commercial product. There is a potential for it to have a commercial business behind it, in the sense that right now it's under a license where -- we've released two datasets. The smaller dataset is able to be used for commercial and non-commercial uses. The bigger dataset is more restricted in terms of commercial uses.

\[00:12:16.19\] So there's a possibility that it could eventually commercialize in that way. We're not necessarily banking on that, or that's not the reason why we're doing it.

**Chris Benson:** Sure.

**Luke Chesser:** Unsplash itself though has in its DNA this idea of sharing and openness, and we as a business get to benefit from the fact that people are opening up their images and sharing them, and believing in this bigger cause of "When I share something out and it gets used, that's helping other people, and that's great." So we wanted to do something similar.

Traditionally, in terms of the history of Unsplash, we have always started with this idea of "If we create value for people, we can find ways to commercialize it later, and run a business on top of that." The way Unsplash makes its money is through brands uploading images to Unsplash, that then get this massive amount of distribution through all of our API networks, through the site, and end up in all these different kinds of places. So the dataset doesn't need to be something where we make money directly off of it.

**Chris Benson:** Got it. That's very helpful. So kind of in the DNA -- I was wondering, because that's always an issue that we run into, because there's lots of companies that have different models for sharing, and I love the fact that sharing is part of your DNA, but you also have to maintain a company and do that, so it's always an interesting question to find out how people are approaching it...

**Luke Chesser:** Absolutely, yeah. I think we're lucky, and we're still a small company in terms of -- you know, we're 25 people. We can make decisions that are long-term and don't need to directly impact the company tomorrow, or something... And a lot of times we do things because we just wanna do it, and we think it's a cool thing to do, and I think the dataset has a handful of different motivations behind it, and one of them was just "Wouldn't it be cool if we could do this?"

**Chris Benson:** Absolutely.

**Luke Chesser:** When it's small enough, you get to make some of those decisions.

**Chris Benson:** Cool. Thanks.

**Daniel Whitenack:** Yeah, it's interesting to me that there's been this progression in companies built around open source software, so like open core companies or other companies that are built around some open source toolkit, at least on some level... It seems like there's not that many preexisting examples of companies that are really built around open data models. Is that true, or am I just missing that?

**Luke Chesser:** As far as I'm aware, I think if this ever has any commercial benefit, that'd be great. But at the same time, I think our primary motivation is "Let's see what gets out there, let's see what gets used..." And there's a reinforcement idea of -- you know, if a lot of different researchers are using Unsplash images, it reinforces the idea that Unsplash is the place for images, it's the place where you get images, and it's one more benefit to our contributors who open up their images, where they can say "Hey, I contributed to these models that help self-driving cars" etc. I have no idea how it's gonna be used, but they can say "There's one more benefit of me opening up my work and making it available to people."

**Break:** \[00:15:06.14\]

**Daniel Whitenack:** Alright, so I'm kind of interested -- maybe we can kick it over to Tim... I'm kind of interested in just some general stats in terms of the dataset size and the types of images that are included, and also maybe how is that growing? You mention a lot about people uploading their images... What's the trajectory of that, and what's being added most, and some of those sorts of stats?

**Timothy Carbone:** Yeah, so the dataset -- I think the light dataset is about 5 GB, and the full-size dataset is more about 20-25 GB, something like that.

**Daniel Whitenack:** \[00:15:59.24\] And that's the metadata about it, not the images themselves...?

**Timothy Carbone:** Exactly, yeah. That's just the metadata. So we have about 1.3 million photos right now, and you mentioned which kind of photos are included... So at Unsplash we have a manual curation process for every single photo that comes in. The photo can end up in different buckets. So you'd have photos that are featured, you'd have photos that are approved, because they've just matched/fit the guidelines. So that distinction is also presented in the dataset as metadata.

But in the light dataset, for example, only featured photos are showing up. It's a subset of featured photos, and I think they only concern nature photos. In the full dataset, everything's in there - approved photos and featured photos. So that's what's in the dataset. I'm not sure I remember the rest of the question, I'm sorry.

**Daniel Whitenack:** No, it's all good. Also, in terms of the trajectory of how the dataset is growing, and obviously, that's also tied to the main part of your business, and people uploading photos, and that sort of thing.

**Timothy Carbone:** Absolutely. Yeah, we definitely want to make the Unsplash dataset some kind of a product of Unsplash, and not just like a single-time dump of data. So it's something we want to keep improving, upgrading, getting feedback on, and iterating over it. We're getting thousands of new submissions every day, and I think the plan is to put those new submissions and those photos inside the dataset from time to time. We haven't decided on the frequency yet, but I'm guessing that every couple of months maybe, or couple of quarters, we'll be releasing a new version of the dataset with new photos, and maybe some improvements.

A couple of days after the release we started getting some feedback, and we've pushed directly a v1.1, a new version of the dataset. We've been improving a couple of fields, improving data quality right after that, because we started getting feedback. So yeah, we'll be reacting to feedback pretty quickly.

**Chris Benson:** That's pretty cool. Is there any kind of thought for the future about like -- since you have these open source projects that will be pulling the dataset down and running ML processes on it and stuff, maybe there's a feedback loop where some of those open source practitioners can help you do -- you mentioned manual curation, and stuff like that... Any thoughts toward automating that curation with ML going forward?

**Timothy Carbone:** Yeah, absolutely. I think that's something that we talked about with Luke. It's also the fact that we have this massive dataset and we don't have the skills to leverage it properly. So if we put it out there, maybe it can help the research and we can leverage that research that was just made.

**Chris Benson:** Yeah, that's part of being a startup, really. I mean, it's normal. You're always trying to find the skills for the next thing, to go along and fund it. I totally get that.

**Timothy Carbone:** Exactly. Yeah, totally. I think it can also be a feedback loop in the sense that some researchers can create new metadata for each photo that would be the result of a model, and we could include that result in the dataset, so that it can be helpful for other researchers. So it can be a feedback loop in that sense, as well.

**Luke Chesser:** That's exactly it. Chris, our original vision for it is "Wouldn't it be cool if this was a two-way process", in terms of we open up the data and then people who are much smarter than us are able to contribute back things built with that data, which then can be used by more researchers, and it becomes this product in itself that continues to grown, and we just kind of provide the inputs to photos, and whatever we're kind of doing on our side. The v1 was like "Let's get it out there and let's see what people start using", because Tim and myself are not, as you can probably tell, to well-versed in machine learning...

So we have no idea really how people are gonna use this and what fields are gonna be valuable. But get it out there, get some feedback on it, see what people are using, and then if in the future we have that opportunity to make it a two-way process, we'd love to do that.

**Chris Benson:** \[00:20:04.07\] Just now, at the point where this is released, you have thousands of listeners who just heard that, so we should consider that to be a call-to-action... To take advantage of the dataset, but also contribute back there.

**Luke Chesser:** Perfect.

**Daniel Whitenack:** Yeah. It would definitely be cool to see out of this examples that pop up on Google Colab or something, of people pulling in some of that data and doing something, and making that work itself open.

I'm curious, as a follow-up to that - it sounds like you have started to get some feedback on this and some usage of it... So I guess one question is how has that gone so far, and what sort of influx of usage and downloads have you seen just as a result of this work?

**Luke Chesser:** Yeah, so far I'm not 100% sure on the numbers. We should have checked before we came on. I think it's done about 3,000 downloads. That's of the light set. I think for the full dataset it's probably done about 1,000 downloads, probably.

It's been out for 3-4 months now, so it's a good start for us there. We haven't really been doing much marketing or talking about it, so hopefully something like this will get it in front of some more people as well, which will be helpful.

The couple of uses that I'm aware of, that were cool and surprising for me -- and you can never predict how people are gonna use this, and I think there was obvious things of... You know, people are gonna train vision models, and tagging models with it... But it's been cool to see some of the more out-there uses, one of them being - for example, somebody trained a model to detect human faces in everyday objects, essentially, so clouds and textures and stuff like that... And you could have given me like a million guesses and I never would have guessed that that was something people would do with the dataset. So that was cool to see.

And then you've got more serious uses of it... There's some researches out of Cornell. They've written a paper - I don't think it's fully released yet, but it's basically trying to qualify and understand why people post to social media. So with everything going on in politics, and across different social networks, one of their main focuses was understanding and detecting the different motivations between why people post, and trying to find some authenticity in that... So they've been using the Unsplash dataset to try and inform that. So that's been really cool as well to see.

**Chris Benson:** You know, it'd be really interesting to see as practitioners use these for some of these use cases you're talking about, and others going forward - they're gonna have to go through the process of labeling the data in a lot of cases, for any kind of supervised learning... So it would be interesting to see if some of those might contribute back some of the labeling for some of the photos to add to the dataset, just to make future users easier. That would be an interesting way for somebody to contribute back, I would say.

**Luke Chesser:** Yeah, absolutely. I know the Cornell researchers were talking about contributing back, because...

**Chris Benson:** Oh, awesome.

**Luke Chesser:** ...they've spent a bunch of money labeling; so I think they're open to that, which would be cool to see.

**Chris Benson:** Fantastic.

**Timothy Carbone:** There's another use case that we have, is people using the dataset to get out stats for the photography industry in general... Because there's actually a lot of information in there. If you look at, for example, \[unintelligible 00:23:03.21\] you have camera model, camera brand, stuff like that... That can give you a lot of information about the state of the industry. And we've seen a couple of articles writing about that and leveraging the dataset to get some insights about the industry already... So that's great.

**Luke Chesser:** Yeah, and I think what was cool about those datasets is -- you know, people have done already with Flickr datasets and 500px, but what's different about the dataset with Unsplash is people aren't going and bulk-uploading every photo that they take, which can skew the dataset in a certain way... You know, if I go and I upload every photo of my family to Flickr, that skews the dataset towards whatever I have... But with Unsplash it's this different thing, which is kind of "What are the best photos being taken with?" Is the mobile industry/mobile photography -- how much is that impacting professional or high-end photographers? And we're seeing different results when you analyze it with Unsplash, versus a different story that you would get with Flickr, where the iPhone and Android smartphones are completely dominating the camera industry.

**Daniel Whitenack:** \[00:24:08.27\] Yeah, it's interesting to me... On that front, a lot of image datasets that you can download in typical AI tutorials, initial computer vision work, and that sort of thing - they're actually fairly low-resolution... So we're talking like maybe 227 pixels, or something like that. It sounds like the dataset from Unsplash is definitely that sort of higher quality in terms of the actual photographs, but then also scrutinized according to people not just uploading everything, but there's a curation process, there's photos coming in that are validated... Could you speak a little bit to that, in terms of the properties -- generally speaking, the properties of the photos in terms of resolution, and also just the scrutiny that people give in terms of what they upload, and the thought that goes behind that.

**Luke Chesser:** Yeah, so I think that's the central -- if we're gonna start, what is the major difference between Unsplash's dataset and some of those other ones which exist out there... Because obviously, there's a ton of image datasets that already exist, and some of them have more photos in them than Unsplash.

Fundamentally, the quality of these photos from just a pure technical perspective - every image I think has to be a minimum of 5 megapixels. On average, I think the real size is above 8 megapixels. You probably see a cluster of images at 8 megapixels, and then a cluster at 12 or 15 roughly... So right away, every image is high-definition and contains a lot of pixel that's information in it.

Then, as Tim hinted at before, we use a curation process where a human actually reviews every single image that comes in... So right away, you filter out all the (let's call it) spam images from it. And then you also have a thing where on Unsplash people don't upload photos that look exactly the same. They don't go and upload their entire camera roll, where they've taken 20 photos of the same thing from slightly different angles. They upload the best of what they have... So you're getting a potentially smaller dataset in terms of the number of images, but a much more broad dataset in terms of the types of photos you're gonna see, and the quality of those photos... So we think right away that's something unique and can provide a different perspective, especially if you're interested in looking at the idea of what makes a good photo, or what makes something beautiful, or how to help people take better photos - this is a great dataset right away for that.

**Chris Benson:** You know, it occurs to me that you're almost creating a niche market, in that you started Unsplash for the purpose of offering creative assets out there, that are very high-quality. And maybe initial users were Creatives who were looking for those amazing photos to include in their websites, or whatever it is they're working on... But now that you're making this available for ML and you've developed a community around the ML use cases, it might push the creative side as well, in that you now have the potential of saying -- if you move into AI-based curation and stuff, with this somewhat unique dataset as you just were discussing, that high-end/high-quality imagery, then you could actually curate from a website level, for instance, that wants to refresh constantly, to where every time you're there, you're getting new things and you could have a model that's trained to pick out certain types of images and download those directly for there, so that you can have refreshed creative. It may be a human that starts it off, but then you have ML driving a user experience that's ever-refreshing... Which is a really interesting idea to me. Instead of just randomly picking something, you can have something that is curated at that level, for a really nice website.

**Luke Chesser:** \[00:28:02.16\] Yeah, absolutely. Chris, you've gotta come join our product team. \[laughter\] Two of our ideas right away on this podcast... You're quicker than us; it took us months to get there.

**Chris Benson:** \[laughs\]

**Luke Chesser:** Yeah, we've got a review team who would love for us to be able to make their jobs a bit easier and do some stuff like that, for sure. I think that's in the future for us, for sure.

**Break:** \[00:28:24.06\]

**Daniel Whitenack:** So because this is Practical AI, and as Chris knows, I'm always probably prone to jumping into details... Because I'm thinking there may be other people listening to this that are at companies that have sort of a wealth of data... And I'm even thinking at SIL, we have so much data in our archives that's so valuable for so many reasons... But it's definitely not available in this way, and the access patterns are not similar to what you're saying.

Traditionally, you had certain access patterns for your data at Unsplash, that weren't downloading a million images at a time... I'm curious about - this one is for Tim - in terms of thinking about "Okay, we're gonna open up a bunch of this data... How do we deal with the side of things about what if a bunch of people all of a sudden start to want to download millions of images at a time? How do we support the bandwidth and storage and infrastructure that's gonna be required to provide this data in a reasonable way, while not jeopardizing the main functions that we do as a business?" Any thoughts there?

**Timothy Carbone:** Do you wanna take this, Luke?

**Luke Chesser:** I should probably take this one...

**Daniel Whitenack:** Yeah, sure.

**Luke Chesser:** I think our thing to start with is we always try to release things as broadly as possible, and then work backwards to restrict it if we need to. We do get a lot of bad actors out there, unfortunately, especially at scale, and we've seen that over the years with Unsplash; our APIs started out as broad as we could make it, and then we've had to put in place certain restrictions in terms of "Don't use it to create competing products, where you just resurface these images", or whatever.

The dataset has that potential, where people could go out and potentially spam it and download it a ton of times. You're gonna get access to all the image URLs that we have, and you could try and mess with our CDN, and stuff like that... But fundamentally, we've seen over the years that those number of people - they make up a really small percentage of the community that's out there, so we try and focus on the good of it, and starting with that, and trying to make sure we don't restrict the good uses as much as possible.

In terms of how we got it through, in terms of how do you convince people inside your company to open up data, I think we're lucky in a lot of ways, in that as I was saying, we're a very small company, so it really is a conversation where me and Tim are like "Wouldn't that be cool?" "Yeah, let's do it" kind of thing.

\[00:31:58.17\] I get that in other companies it's a lot harder, but we do deal with that from an image standpoint as we work with a lot of institutions who want to make their archives open and accessible. And getting that through the higher levels is hard; people wanna hoard on to data in whatever form it is, and I think we're making progress as a society towards this idea that openness can have second or third-order effects that are harder to project and put right in the bottom line right there... But they can have this greater effect on your goodwill, on your community, on a whole bunch of different things about your organization... And we're getting there. There's a lot of people that wanna lock it down and hoard stuff, but I've yet to see -- you know, people always talk about the advantages of data and how they're building a data advantage over people. I think for a lot of companies there isn't really actually a data advantage. You can hoard on to that data, but there's not a ton of value, at least commercially, in that data... So opening it up to other people can have a second or a third-order effect on your business, and so they should consider it.

**Chris Benson:** I was just gonna say -- and it's not a question, just a comment on what you just said... Working in a large industry, for a large companies, as I do, I'm seeing companies like yours, with the cultures that you're just now talking about, having that impact in larger companies. And companies that have typically been very large and very closed are looking at what kinds of work companies like yours are doing, and they're starting to make those changes. Not only in industry, but also in government, actually. So you are collectively having the impact that you're striving for, I just wanted to note that.

**Luke Chesser:** I really hope so. There's a lot people out there doing a lot of work, and we're just one small piece of that... But I've noticed that with governments - governments are coming around to it. And you're seeing it probably first and foremost by open source software. We've seen over the last 20 years or something how roughly every major company now contributes to open source. There's a selfishness to why they're actually doing it as a company, but the fact that we were able to get these companies to that point is testament to the work that people did back then, and I'm hoping that if you fast-forward 10, 15, 20 years, you're gonna see people being in a similar position from data, where they can actually say "Hey, if we do this, which is beneficial to everyone, it also has a benefit to us." And if we have to be the guinea pigs for that, we're happy to be the guinea pigs.

**Daniel Whitenack:** It sounds like you are instituting some sort of versioning aspects to the dataset that you're releasing... Tim, what was your thought process around that, and then maybe also -- there's all sorts of different formats that you could release datasets in; you could just put up some archive files on S3, and have people download a big thing... Were the decision around how you release this data related to how your infrastructure had in the past supported people downloading images? What was your thought process around that?

**Timothy Carbone:** Yeah, so regarding the archive versus the links in the CSV - I think it's mainly because as a data engineer I'm not directly working... I mean, because I'm not working in AI, I'm not directly working with the image itself; I'm working mostly with the metadata. So the closest thing I can see from the image, or the easiest thing accessible is just its link.

We currently have the infrastructure that allows us to basically power thousands of integrations on the internet, so we might as well leverage that, for people to download every single photo through the link in the CSV. So I think that was the main thought process.

\[00:35:55.19\] Regarding versioning, I think that's also kind of a way to stay flexible. So if you add the image to your archive, then it's kind of like frozen in time and you have that thing. If you have a link, then it's much easier to say -- I don't know, maybe today you're restricting a certain amount of pixels, and to more, you don't wanna do that anymore. You have that flexibility. And we can find that flexibility all across the dataset.

I've mentioned that we want to keep adding more info, adding more things, and that's why versioning is essential. It's super-essential if we have that feedback loop model, where we have new contributions coming in; we need to have some kind of versioning in place... So yeah, that's the thought process. Kind of like always staying the most flexible we can. Yeah, that's the idea.

**Daniel Whitenack:** I noticed you have the GitHub repo that talks about the dataset... From the people that are making those downloads to access your data in a new sort of way, or for new purposes and training models, have you go feature requests in terms of the image metadata, or new access patterns, or other things that maybe you didn't expect, fundamentally different from the ways that your users that are just accessing one image at a time or browsing are requesting?

**Timothy Carbone:** So right when we published the dataset, I think it gained a bit of traction, and people started using it directly... So we quickly had feedback, essentially. Mostly, it was about some data quality points. So "Hey, you should watch this field, because there's an unexpected value over there that we didn't find", essentially. So feedback is really nice in that way.

Regarding unexpected uses, I think for v1 we tried to provide with kind of like our vision of what could be useful for machine learning and AI... So yeah, colors, keywords, geolocation, things like that. And the data requests that we had - I don't think there was anything super-surprising at the time, currently... But we had some feature requests including data that we actually have and we didn't put into the dataset. Things like pixel density per color, or things like that. Some very specific data that we didn't plan to add... So that gave us insight into "Hey, the community might want it, so we might add that into the next version."

So we're trying to expose the versioning into our GitHub repo as well, and we're trying to expose the information of what's going to be in the next feature and what's going to be in the next release.

So if you have any suggestion, any feedback, you can just go on the GitHub repo and ask for it and we'll try to answer and plan it for the next release.

**Chris Benson:** That's awesome. I think that kind of leads into a natural next question, which is -- it's kind of the creative question. So I wanna ask both of you; I'm curious from both a business and a technical perspective, and I want you to wax poetic just a little bit... When you're sitting around, talking together, what are some of the aspirations on where you want this to go? What are some of the cool ideas -- and you're not committed to it; nobody in the audience is holding you to this, but what are cool things you can think of that you would like to see at any timeframe down the road going forward, whether you're able to do it, whether that's a practical thing, or not even a practical thing. I'd just love to hear the creativity about how you see the future.

**Luke Chesser:** The one that I'm really excited about, or the data that I think is really unique, again, with this dataset -- I think the data that we have in there is a good start; we still have some ideas for where we want it to go... Specifically, the data around search conversions and the collections I think is really unique. There are datasets, again, out there that do this, but at the volume that we're gonna get to, especially in the second or third releases of the dataset, I think it starts to become really a unique dataset there. And what's cool about it is people search on Unsplash for very abstract things.

\[00:40:04.09\] When you look at the types of images that are on Unsplash and what they're downloaded and used for - it's not "Find me the dog photo", "Find me the photo of the cup, or the coffee cup in this image." It's very abstract stuff, like love, or happiness, or depression... A whole bunch of things which are harder, I think, at the current stage at least, for vision models to really understand and quantify...

But we're getting this real-time feedback of millions of people going on Unsplash and searching these things, scouring all the different photos, collecting them into these different collections, in different groupings, and then interacting with them in different ways... And we've exposed that data in kind of a v1 version, but we have a lot more internal data that we want to expose around that. I think if we can expose that in the right ways - and again, I'm no machine learning expert, so I have no idea... But my hope is that that can start to improve the models that are out there around understanding that. That would be a huge win, I think... Because we experienced that ourselves; when we upload images to Unsplash, the quality of the tagging for them is quite limited, in terms of it can recognize what's in the images, but can't represent "What does this image actually mean?" So if we can help improve the industry there...

**Chris Benson:** Kind of semantic meaning, in that sense?

**Luke Chesser:** Yeah, exactly. Abstract, semantic meaning. I think that's the next step in vision learning; and I understand why it's super-hard, but our hope is that maybe we can contribute back in some way to that.

**Chris Benson:** Very cool.

**Daniel Whitenack:** Awesome. Tim, any thoughts in addition to that?

**Timothy Carbone:** I think that sums it up pretty well. I think that's fine. I was going to go far back on a previous subject, but... Let's not do that.

**Daniel Whitenack:** \[laughs\] All good.

**Luke Chesser:** I stole your answer, Tim... \[laughter\]

**Daniel Whitenack:** All good. I'm very excited that you took the time to join us on the podcast. I anticipate that you'll get some usage out of this, and I hope that it connects with the AI community and they start investigating those more subtle things that are included in the dataset, and other things that none of us on this call probably can even predict or expect that people will use it for.

We'll include in our show notes a link to the dataset, and a link to Unsplash and other resources. Please check it out, and let us know in our Slack channel -- you can join our Slack at changelog.com/community and let us know in our Slack if you're downloading the dataset, and what you're using it for. We're excited to hear.

Thank you, Luke and Tim, for joining us. We really appreciate it, and I can't wait to see what happens with this dataset in the future.

**Luke Chesser:** Thanks for having us, guys.

**Timothy Carbone:** Thank you, guys.
