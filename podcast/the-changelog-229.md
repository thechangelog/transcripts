**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode \#229 and today Jerod and I area talking about Django and Python with Andrew Godwin. Andrew is known for raising money for Django features.

We talked about sustainability, a lot of fun stuff around how he's funded open source. We talked about Python, what's new in Python, how to get into Python... We also talked about Django Channels - what they are, how they work, what the status of the project is and how they compare against Action Cable or Phoenix Channels.

We have three sponsors today - Heap Analytics, GoCD and also our friends at Toptal.

**Break:** \[00:00:52.01\]

**Adam Stacoviak:** Alright, we're back. We've got a fun show lined up, it's Python-Django Day, Jerod. What do you think about that?

**Jerod Santo:** Dj-Dj-Djangooo... \[laughter\] I just think about Django Unchained, every single time.

**Adam Stacoviak:** Every single time. I don't know if it's been helpful or hurtful to the brand of Django. What do you think?

**Jerod Santo:** Surely the Django project predates Django the movie, but in my mind it doesn't, that's for sure.

**Adam Stacoviak:** We can't talk much further, we've gotta introduce our guest, Andrew Godwin.

**Andrew Godwin:** Hello!

**Jerod Santo:** That's right, Andrew Godwin, thanks for joining us!

**Andrew Godwin:** Hey, folks. It's my pleasure to be here.

**Adam Stacoviak:** Jerod, you should open up with that thing you said your friends -- what was that about?

**Jerod Santo:** \[00:03:51.14\] \[laughs\] So the first person to ever introduce me to Django was a fella that pronounced it "The Djungo." \[laughter\] And when he said it, it was like one of those double takes, like "What did you say?" And he's like, "The Djungo." He was the first person that had ever said the word to me, and he was talking about the framework, and I was like, it didn't sound right, but I wasn't quite sure... I was like, "Okay...", and I kind of rolled with it for a little while. In my head I was reading it "The Djungo", but I had a feeling that wasn't it, and was kind of just waiting for somebody else to confirm or deny. It didn't take very long... I have never heard anybody else in the history of my life say it like that ever again.

**Adam Stacoviak:** But would it be somebody else's life?

**Jerod Santo:** I guess it would have been \[unintelligible 00:04:38.24\]

**Adam Stacoviak:** Andrew, what do you think about that?

**Jerod Santo:** How do you say it? You don't say "The Djungo", do you?

**Andrew Godwin:** I definitely say Django. I have heard "The Django" before. One of the jokes when I joined the community was that a good number of people said "The Django", and there was actually a talk at one of the first DjangoCons by a linguist about why it's actually Django, not "The Django." But yeah, it's definitely more common than you might think.

**Jerod Santo:** The Django...

**Adam Stacoviak:** I think Jerod's is different though, because "The Django" is fine, and that's okay, but "The Djungo"...

**Jerod Santo:** Well, not if you're a linguist...

**Adam Stacoviak:** ...it's far-fetched.

**Jerod Santo:** A linguist would disagree with "The Django" as well, but what does the word even mean? I've never even looked it up.

**Andrew Godwin:** The origins of it, it comes from Django Reinhardt, who's a famous gypsy jazz guitarist, and one of the founders of the framework was a big fan of his, so that's where the name came from. It's just a name, basically.

**Jerod Santo:** For some reason, I think about a kangaroo. Is that a different thing?

**Andrew Godwin:** Not that I'm aware of, no.

**Jerod Santo:** Or maybe a dingo...

**Andrew Godwin:** Yeah, you've got the films as well - Django and Django Unchained.

**Adam Stacoviak:** Oh, Jerod... \[laughter\]

**Jerod Santo:** A dingo is a wild dog from Australia... I'm just gonna be quiet for a while and let you guys talk. \[laughter\]

**Andrew Godwin:** Dingos are great!

**Adam Stacoviak:** So in an interest of getting to good content, Andrew, take us back... We like to get kind of a history of our guests, and obviously we're gonna dive deep into Django (not "The Djungo", or whatever else you wanna say it might be). Take us back into your history - where did you get started in programming or even open source?

**Andrew Godwin:** Well, my start in programming was a little bit unusual. I started programming on a PalmPilot IIIx I think it was.

**Jerod Santo:** Wow...

**Andrew Godwin:** My mother had a PalmPilot and it had a BASIC interpreter on it. So I was there on holiday writing BASIC games with a stylus on a touchscreen, which is the sub-optimal way to program in any situation. I sort of got my start there, writing BASIC music keyboard stuff and BASIC games, and from there I kind of branched out into some web stuff... I've been doing a little bit of HTML around the edges of there, and going to my local library... I was 14-15 at the time; we had dial-up internet, but the library had proper internet, so I'd go down to the library, I'd use the computers, do some websites. That suddenly sort of morphed into, "Well, how do I add Javascript to the website? How do I add some PHP?", and then I started doing some PHP development.

My very first open source project, which I think was about 2005-2006 was one called ByteHoard, which is this PHP interface for uploading and downloading files. It was very simplistic, had several rather bad security vulnerabilities, which of course is part of the course for your first PHP project. But it was this wonderful feel-good thing, because I released it open source and in retrospect there weren't many, I'd say, moderately well-designed ones at the time. I got some people using it, like an energy company in the Netherlands. At some point, some part of NASA said they were using it, which I found kind of crazy when I was a teenager.

**Jerod Santo:** Wow!

**Andrew Godwin:** I think it was just like some tiny broom closet somewhere in NASA, but still it was fun to hear from somebody over there, with a nasa.gov e-mail address. And that's kind of my first experience; about two or three years I ran the ByteHoard project, making my PHP skills better, doing some freelancing, but pretty much a single man open source operation. Like, it's just me, I'm just fixing these bugs, did one rewrite to try and fix security holes... It was a lot better after that, thankfully.

\[00:08:06.28\] Then I think it was about 2006, I'd just gone to university. During university I was working part-time in the holidays, in the vacations, at an agency called Torchbox in Oxfordshire. It was there I met Simon Willison, who is one of the co-creators of Django. If you've ever met Simon, or if you've ever even heard him speak, he is one of the most enthusiastic people I've ever met. It was about a week and a half of being exposed to his enthusiasm - I switched to doing Django rather than PHP at that point. So it was this very "to the fourth" entry into doing Python and Django.

I'd done a bit of TurboGears and \[unintelligible 00:08:46.05\] at the time, but to switch to doing mostly Django - that was the big change, catalyzed by Simon in many ways. For about two years I was just doing Django projects on the side, university, and then it was in 2008, I believe... I was sitting down at the agency, we had this problem, to change our database schema. Django at the time was very bad at this, it made new tables and nothing else... So me and a friend of mine (a co-worker there) sat down, planned out what we'd like to see in a migrations framework, borrowing something from Ruby on Rails at the time, from Active Record, and borrowing some stuff from Java's Hibernate and a few other things, and I made South, the Django migrations framework.

We wrote it for our purposes, very bad bones; we stuck it up on the internet, published it somewhere, got a pretty reasonable level of interest. Then, I think it was a couple weeks later, Jacob Kaplan-Moss (another co-creator of Django) e-mails me and says, "Hey, Andrew. We've got the first DjangoCon happening...", I think it was like four weeks away at that point, "...in San Francisco and we have a panel on database migrations." They had Simon there talking about his work migrations, and Russell Keith-Magee talking about his work, which was Django Evolutions. He says, "Would you like to come and talk with the panel? We can fund your flight and get you over here." Now, bear in mind, I am a student in university, I am not well off by any means at this point, so I go "If you're gonna fly me to San Francisco, sure, I will take the offer!" So with a couple of weeks to spare, I booked a flight to San Francisco, I \[unintelligible 00:10:24.25\] three days in the bay area for an 11-hour flight from London, which you should never do, it's my advice. Then I flew over here and did that first DjangoCon. That was the trial by fire of my involvement with Django. Since then, South just got more and more popular and eventually ended up being merged into Django 1.7.

**Jerod Santo:** Very cool. So just for the listener's sake, we forgot to mention that Andrew is one of the Django core developers; you're also an engineer currently at Eventbrite.

**Andrew Godwin:** That's right.

**Jerod Santo:** Also, this show was put together thanks to our ping repo, and a whole host of people who hopped in when Python was mentioned and said, "Yes, let's do this!" So we wanna give a shout out to a few people: jldugger, degustaf, frankwiles and freakboy3742 for helping us line this show up and saying if we're gonna talk about Django, we've gotta be talking to Andrew Godwin - for many reasons, but also the major reason is because of your work on Django Channels, which we'll be talking about in detail upcoming.

What I find interesting about your history is that Django really brought you to Python; you didn't come to Python for Python, you kind of came for Django and you stayed for the Python...?

**Andrew Godwin:** Yeah, I had to experiment to be a Python-- it was about that time that I was reaching the edge of what PHP was capable of. PHP 4 was a very limiting language. It's got a lot better since, but back then it was a very limiting language, so I've been experimenting with different alternative languages. You of course had Java, you had Python... Ruby was a lot more nascent back then, I hadn't really heard of it. So I played around a little bit in Python, but Django was really that catalyst that got me to sort of go whole hog into Python and be like, "No, this is the language I'm gonna learn, it will become my primary language." Like many people, I think I've learned a lot of Python through Django.

**Jerod Santo:** \[00:12:19.27\] Yeah... Interesting, Adam and I were talking before the call, and the conversation was kind of like, "Why would you choose Python?" or... Adam, even more generally, I think your question was like "Why do people choose..."

**Adam Stacoviak:** ...one language over the other, yeah.

**Jerod Santo:** Yeah, you always wonder what's the impetus, the reason, and in your case it was very much because of a web framework that you liked or wanted to use. But for somebody who's getting into Python today - let's say they don't do web - what are some of the draws of Python the language, why somebody might pick it up as their first language or their next language?

**Adam Stacoviak:** Before he answers that, I wanna pause for that second because something he said there, Jerod, was he said "primary language", so I think that'd be a good tweak on the question I was asking, which is like "Why would they choose a certain language as their primary language?"

**Jerod Santo:** Hm, okay.

**Andrew Godwin:** It's an interesting question, because I say "primary language..." I am very much a person who pleads you should choose more than one primary language; use the right tool for the right job. I think Python works very well for the sort of work that I do. There are various, it's very hard to explain. If you've ever seen The Zen Of Python - it's this short poem about what Python really means to be, and things like "explicit is better than implicit", for example.

One of the differences that I personally prefer Python over Ruby, say, is that import or export, you can trace where things happen very easily. But in the majority it's very much like Python is an easy language to write, it's got a decent typing system that isn't too crazy... It can enforce some stuff; it's a little bit flexible, but it's not as lax as Javascript is. It has a good set of data models and built-in stuff; the standard library is very useful, a lot of stuff comes with it, and that's true of Django as well, sort of extended out to web stuff. And the community is really nice.

It's a combination of all that stuff. There's no one thing, it's this bundle of "it's nice to use, it's easy to write, it's easy to read - which is a super important thing..." I used to write some Perl, but that's not easy to read at all. It's easy to maintain, you can start it pretty well - a combination of all those things I think really kept me in the language. I approached it with one thing, and then a whole set of things conspired to say "This is a nice place to be. I enjoy doing this." The cycle of writing stuff in this language works really well for me.

**Jerod Santo:** I spent about six months myself writing Python day by day, and I really enjoyed it. I don't have any problem with significant whitespace, even being a person who mostly writes Ruby and Javascript. I like significant whitespace, it saves on parenthesis and curly braces. It doesn't bug me, but some people just can't get over that.

One thing that I loved about it was the documentation. You talked about the community and the overall thing - you add all these things up and you get something that's really nice, and it just seems like the Python community is so documentation-oriented, or first. There's this built-in thing that makes it really easy to pick up. I didn't know anything about Python coming into it, but I got ramped up very quickly because the docs, both for the language and the standard library, and for anything else you might grab off the shelf, they were all pretty good.

**Andrew Godwin:** Yeah, it's definitely a community thing. I'd say that Ruby is probably better at testing as a community and maybe Python is a bit better at documentation. A product isn't launched until it has a decent documentation; a lot of the solutions for doing good documentation have come out by a community like Sphinx and Read the Docs, and stuff like that - they were all sort of rooted in Python itself. That's probably one of the things that got me to stay too, as a beginning programmer in Python, going "Oh, there's this huge, extensive standard library, full of examples", and I'm an example-oriented learner, so that's an amazing thing for me.

\[00:16:01.12\] There were good books, as well. I think Dive Into Python was the thing I learned at the time that was really good back then. So there's this whole host of endless reams of information that you could just turn to. Even now, I don't know all the standard library; I know where in the documentation to look if I forget. That's what I love. Like, if I don't remember exactly how all the dict work, I can go and look in the Collections page. It's more like having this index of where to look, rather than having to know everything off-hand.

**Jerod Santo:** You mentioned Read the Docs and you've just reminded me of a recent show, of Request For Commits episode 5; I'll just submit that as something that people should go listen to. Eric Holscher came on the show and talked to Nadia and Mikeal all about Read the Docs and documentation, and Write the Docs, which I had never heard of. It's a very cool conference for technical writers, for people who care about documentation, get together to talk about the best ways of doing, tips and tricks... It's this whole community around documentation that's really refreshing, and it seems to be underground, in the open source community at least.

I try to stay abreast of what's going on, and I was blown away by how much Eric and everybody involved in Read the Docs and Write the Docs have been up to, and many of us don't seem to know about it. I'm curious about your thoughts on Read/Write the Docs, Andrew. And everybody, go check out RFC episode 5, it's a good one.

**Andrew Godwin:** Yeah, to me it's a really important thing. I have turned into a documentation-first developer. You might say testing-first, or whatever... Especially with Channels, as we'll discuss later, I wrote down the entire basis of documentation, API I wanted to give the people before I actually wrote the code... The idea being that that's kind of my UX. How would I, being my own devil's advocate, want to approach a project I've never seen before? How would I want to be introduced to that thing? What would I expect to see? How should things behave?

For me, writing documentation and getting that down on paper is not both a great way of telling other people, it's a great way of getting yourself to be on the right track and understanding what you're doing, and sort of cementing what you're trying to work on.

**Jerod Santo:** That reminds me of something that Jamis Buck said years ago about how he designs libraries. He's a Ruby developer amongst other things, and wrote Capistrano and Net::SSH and a whole bunch of tooling and libraries in the Ruby world. He was talking about the way he goes about building his projects, like "Where do you start?" Of course, we've had the movement Readme Driven Development, which is kind of along the lines of documentation driven, but it's like... If all your docs can fit in the readme, that's good; a lot of times you need to go beyond that. But he said he always designed the API first. He wouldn't write any code -- he would think, "How would I wanna use this?" and he'd design the library API, and the beauty about the Ruby language is that it is so flexible, and the DSLs are so easy to craft that you can come up with what is a fun and beautiful to use API, and then you back into the code once you have the API finished.

It seemed like it was a very similar idea to what you're talking about, where it's like "If I'm writing the actual documentation first for this library or this tool that I'm building, I get to think about it as the end user", as the person who's coming to it and reading the docs, and saying, "Is this gonna be what I need or not?" and then I can go and fill in the gaps. I think it's a really powerful way of building things.

**Andrew Godwin:** Right, and even in Python - Python is less flexible than Ruby, but you still have a lot of flexibility. There's still metaprogramming, there's still various tricks like that. Generally, in my perspective, part of it is also the principle of least surprise, and so an API should still be what we call "pythonic" and not be full of crazy hacks; it's full of declarative classes that magically work. "Magic" is a bad word, but part of it is an API that is both nice to use, but also is similar to other stuff and is not very surprising and it's easy to debug. There's a whole spectrum of different things I would consider, but part of it is documentation, trying to write down "How would you run this? How would you test this? How would you deploy this?" and that kind of stuff.

**Jerod Santo:** \[00:20:02.19\] Yeah, Kenneth Reitz has made himself very famous - not just in the Python community but in the programming community, in the open source community - because of how great the APIs he's created around HTTP requests... He does a really great job of documenting that and selling it as a thing that you'd wanna use. That's an example, I guess, of a success story inside just caring a lot about your documentation.

**Adam Stacoviak:** What exactly do you classify as documentation? Simple where you go to learn about how to use it, or getting started guides? Where does documentation begin and end?

**Andrew Godwin:** I'd say there's a whole different set of things. You've got reference documentation, which is usually things like, "Here are the methods, here's the arrows you can raise, here's things you can call..." - usually at the end of the project I would write that stuff. It's like, "This is the exact spec of what you should expect. These are the four arrows this function could raise. These are some certain scenarios." Then there's more sort of an overarching guide, which would be like, "Here's an architectural overview, an introduction of what the thing is, what it's trying to achieve, and the concepts." That's what I'd put in the Getting Started guide/introductory end of stuff. I'd usually probably write a getting started or a tutorial first, the goal being that a novice programmer should be able to use the thing I'm writing. Or someone with no experience of the domain I'm writing in should be able to use it.

Generally I try to think like, I want any programmer to come along and be able to use this. And not only be able to use it and get stuff done, but make it really hard for them to shoot themselves in the foot, which is a very important part of writing a library... So how to make it nice, but safe - approaching it from that end, generally.

There are definitely a couple of different aspects, because a reference, and even release notes are important, too. Release notes are sort of a temporal documentation, like what's changing a project, "Do I have to do an upgrade?" A lot of projects don't have good release notes, and that does sometimes irk me a little bit.

**Adam Stacoviak:** I think sometimes as a maintainer you may get so focused on the future and where you're going that you kind of forget where you came from and maybe how you're currently using whatever might be. This is totally just an abstract example, but sometimes you just forget how do you go from one version to the next, or a bigger upgrade, or move from one version to the next... It's just a larger transition that maybe before.

**Andrew Godwin:** Yeah, this is the problem you have. One of the things of being an open source maintainer that I did not really appreciate before I was one was that it is very difficult to see the wood for the trees, to use a phrase. It's very difficult to understand the excels... You're always living in the most current code, there's all the current bugs, all the issues being filed... The perspective of somebody who's two versions behind, their site is stable, they want one new feature they can use now. That's a very different perspective, and getting a good insight into what that perspective is is sometimes very difficult from open source, but that's also crucial to have.

**Adam Stacoviak:** Yeah.

**Andrew Godwin:** But thats also crutial to have, and having been on both sides of the fence, having used open source as well as maintaining it, I try and think about what I appreciate when I use open source tools and try and bewrite as much of that as I can myself.

**Jerod Santo:** I think it's a natural place to take our first break. On the other side, we will dive into Django - what's new, what's a flagship, features of Django, why would you wanna use it, from Andrew's perspective, as well as a deep conversation on Andrew's baby, which is Django Channels. So we'll be right back and we'll talk about those things after this break.

**Break:** \[00:23:32.24\]

**Jerod Santo:** Alright, we are back with Andrew Godwin and we're here to talk about Django. Andrew, let's kick it off like this... Many of our listeners have used Django, many have not, we have lots of web developers, we have a whole group of listeners out there and they're coming from different perspectives, so let's just start off with the high-level of what Django is and does in 2016, and then we'll kind of drill down from there. What are the flagship or the major features of Django as a web framework? I know one of them which I've always been jealous of is a built-in admin, but surely there's lots of other things it does for you, so give us the rundown on what Django looks like today.

**Andrew Godwin:** Sure. As you said, our main start attraction that gets everyone into the project is the admin. That's the thing that when it was launched was the big thing. Basically, they idea is Django has this fully-featured ORM that lets you declare models; it has migrations on those models, you can declare custom field types, it has a very sensible query framework, and all this kind of stuff. But you declare your models and then it just makes an admin for you, and that's one of the big sort of "get to developing faster" features; it's like, "Oh, we can just make the admin and then we can just immediately put things into the database and play around with it" Something is always \[unintelligible 00:25:40.26\] in production, although usually you want somethinghttps://github.com/WaylonWalker/transcripts.git a little bit different.

There's many other features, as well. One of my favorite ones is the GIS framework, which is a little less known maybe... But Django has a very extensive, very powerful GIS framework for doing geospatial data or queries, that kind of stuff. It's built into the ORM if you want it, so you can say, "Oh, find me all posts that were made inside this polygon." It's all in there integrated, and that's super nice.

It has other things, too. It has a forms framework for doing display stuff, its own templating language, which is \[unintelligible 00:26:12.17\] as well, it has a views and URL routine framework... So all the pieces you'd expect from a web framework, really. You can make URLs, you can route them, you have views, it has what we call generic views, which takes some other application that I'm doing... So if you want to just have a view, which just accepts a form and saves it - there's built-in code for that already, and all this kind of stuff.

I'm trying to think of other stuff it has...

**Jerod Santo:** Great documentation...

**Andrew Godwin:** Obviously, of course - great documentation. \[laughter\] I just kind of assume that, right? That's part of like, "Oh yeah, of course there's great documentation!" Django has this -- not only is there a Django tutorial, there is full prose, article style documentation for every major feature we have, and reference documentation. And the Django Girls Tutorial is an excellent second tutorial apart from the Django one as well. So there's a really good culture of documentation around that.

Also there's a lot of security considerations... Django has a lot of CSRF protection built in, it has places to put cookie protection, and HSTS, and all this stuff. We have things called middlewares... There's a security middleware where you can say, "Is my site secure?" and it runs some checks for you. There's a command where you can check for column errors. All of that stuff is bundled up in one set of stuff. But one of the things I think is most important about Django, and a thing I try to stress especially to people who are maybe new to Django or don't use it a lot is that one of the key features is that not only you have all these components, but you can individually remove each component; they're all optional. So if you don't want the admin, it's a couple of lines to turn it off. If you don't wanna use templates, you can swap in another one straight away. It's super easy.

\[00:27:54.24\] A part of what Django's appeal to me has been over the last 8-9 years I've been using it is the ability to as I grow projects, I can replace the generic parts of Django with bits that are custom, or slightly customize them. I don't have to just throw the whole thing away, it's very loosely coupled, so I can say "I want to use Ginger rather than Django templates here." I do a little bit of work, stop it out, and it all works pretty well. So that's what I personally appreciate a lot about Django. When you get to that point, it's steps away, and it falls away and then you can put your own things into place.

**Jerod Santo:** Let's hop back to the GIS feature, because that really caught my ear. Is that tied using PostGIS, or is it using a specific backend? How's that whole thing put together, how does it work?

**Andrew Godwin:** Well, much like Django has pluggable database backends, the GIS framework does as well. It supports Postgres, it supports Oracle, it supports MySQL, and many more, but those are the three I know about. It has support for multiple backends; Oracle and PostGIS especially, they are fully featured geospatial databases, as is the newer MySQLs as well. It supports all of those functionality out of the box pretty much.

You install a little bit of libraries that are a little bit arcane. Once you've got that done, it's pretty much plug-and-play.

**Jerod Santo:** Yeah, I've used PostGIS a handful of times via Rails, and I think directly a couple times, and it's always a little bit of wiggle this and pull that lever over there to get everything all working together, but I think you can do amazing things once you have it up and running, so it's really cool that it provides an adapter pattern to those type of queries and lookups inside of the framework. That's pretty sweet.

**Andrew Godwin:** Yeah, and even better - keeping with the theme - it has admin widgets. If you make a point field or a polygon field and load the admin up, you get a map for the polygon that you can drag around and edit. So all of that, you can just start using it straight away; like, "Oh, I want to see \[unintelligible 00:29:44.27\] which is super nice.

**Jerod Santo:** Now, correct me if I'm wrong, but I believe Django came out of a newspaper, correct? In Lawrence, as far as where it was born, and so it's very much in that community of online publishers, newspapers, and these types of companies. I believe Eventbrite's using it, it makes sense since you work there, but who else is using Django, and what's the community look like, and the companies and the organizations that are involved in the greater Django community?

**Andrew Godwin:** Yeah, as you mentioned, Lawrence Journal-World, the Lawrence newspaper was the first place Django was created and born out of and open-sourced from. It had initially a big traction in publishing newspapers, but these days it's pretty well spread. I'd say the biggest one you've probably heard of is Instagram. Instagram runs on Django as a backend; that's the biggest one we have that we know about. And there are other ones we don't know about; generally, knowing what things run Django is interesting. Eventbrite runs it as well...

I'm very bad at knowing the list of companies who run Django, it's one of my flaws. \[laughter\] I know that a decent amount of government agencies run at least some Django as well. One second here...

**Jerod Santo:** That's alright, I didn't tell you to think about it, I put you on the spot. I should have prepped you. But I just thought of a question, because I just wanted to kind of... It's nice to get an idea, not just like, "Hey, how many big companies use this?" as like a street cred, but just to kind of get an idea what the community looks like in terms of participants and support. Obviously, it's huge, and you guys have DjangoCon, and it's a long-running project that thousands and thousands of people are using. But I think that's a good enough idea, don't need to bang your head too much against knowing which sites run on Django.

**Andrew Godwin:** Yeah, so ones I can now remember... \[laughter\]

**Adam Stacoviak:** I've got some too, because I went to Wikipedia.

**Andrew Godwin:** I think maybe \[unintelligible 00:31:42.17\] So among other things, I believe parts of Pinterest at least used a lot of Django, I don't know if they still do. Parts of Spotify certainly used to... And a lot of Firefox in the Mozilla sites run on Django as well. The whole of add-ons at Mozilla.org, I think increasingly more and more of all the Mozilla sites run on Django as well.

**Adam Stacoviak:** Yeah, the ones on Wikipedia are Pinterest, as you mentioned, Instagram, as you mentioned, Mozilla, as you mentioned, then also The Washington Times, Disqus, BitBucket and Nextdoor.

**Andrew Godwin:** \[00:32:15.10\] Oh yes, of course, Nextdoor. I think NASA does as well... Yeah, part of NASA runs on Django.

**Jerod Santo:** Isn't Nextdoor a mobile app? Or is there also a website maybe just running their API?

**Andrew Godwin:** Maybe an API thing. This is one of the things with Django - it's not easy to tell when a something's a Django site; there's no obvious giveaways. Django is this flexible backend framework, so there's no... Like WordPress, you can usually tell from the URL structure, but with Django - anything could be Django. And increasingly a lot of things use Django as a backend or as an API for a native app, or a rich Javascript web app, or something like that. Sometimes the site won't even look like Django at all, but behind the scenes there's a lot of Django churning away to serve everything.

Disqus, for example... Disqus is mostly embedded, of course, but the whole Django things there is like the API is driving all these embedded commands and Javascript systems they're using. So a lot of Django is like this sort of secret, behind the scenes, getting stuff done kind of approach, and we're all quite fine with that. Django core developed a community -- we take pride in that we are a slightly boring, predictable framework; it's kind of a point of pride for us. If you want something that's stable and reliable, Django is a very decent choice these days. Personally especially, I take a lot of pride in that.

**Adam Stacoviak:** It kind of touches a little bit on what Jerod and I talked about earlier, that choosing a language we talked a bit about... Django and Python in terms of buzz, so to speak. It seems like that community seems to be more focused on stability, as you've just mentioned, versus banging out brand new things and all this new stuff, similar to how Javascript is just always new, something's always new, and there's a lot of fatigue in that arena.

**Andrew Godwin:** Well, part of it is the age of the language too, right? Javascript is an old language by itself, but the sort of modern community around it is still quite young, and all the tooling and all that kind of stuff is still developing. Python is several decades old at this point. When I joined Python, there was still some of that sort of buzz, and different options going around; and it still is in certain arenas too, but it's now sort of this happy medium between "Well, we still have new stuff coming out and things still happen that are interesting...", like Asyncio was one of the big things in Python 3.5, for example. But at the same time, there's also this sort of stability and predictability, and also this history of Python. Python is now so old that big enterprise companies and universities will happily use it and teach it.

So we have this whole spectrum of like, from novice to very experienced programmers, from single developers to entire, huge enterprises using it. That kind of diversity of use is I think actually a really positive factor in what drives Python forward. And I think Javascript especially will get there, as it sort of matures. It will go through the same process and we'll get to the same place.

**Adam Stacoviak:** It's just funny that you said the word "boring", and I wonder if your counterparts that are core team members with you, or users of Django, or participants in the Python community will appreciate or agree...

**Jerod Santo:** \[laughs\]

**Andrew Godwin:** Certainly some of them will. I don't speak for everyone, of course...

**Jerod Santo:** You can't make everybody happy.

**Andrew Godwin:** But certainly one of the things I can say is that in the Python community the word "magic" is frowned upon. If something is magic, it's because it is bad. In my mind, the opposite of magic is boring and predictable, or at least very obvious, and so that's what I aspire to. It's like, this software is predictable and easy to deploy and easy to understand, and does the things it says. It's not terribly exciting, but it will save you a lot of time in your daily work. That's what I really appreciate, as I've developed as a programmer especially.

**Adam Stacoviak:** \[00:36:01.22\] I think what too makes that choice, like we said before, choosing that language is that if you're choosing something with more fatigue, so to speak, with more bleeding edge, more modern or however you wanna phrase that, you can expect some bumps. But if you need something to go smooth, you need something that's gonna not drive you crazy, that's gonna have clean documentation or even good tutorials to get started, then what you said there was a good example of the right choice.

**Andrew Godwin:** Yeah, and it also doesn't hold entirely true. The Python 2 to 3 change was a big overhaul, and that's probably one of the most major things in the recent history of Python; this was a big change, it broke a lot of stuff, it was perhaps done the wrong way some people now consider... Things like that. So you're not free from that kind of stuff, and in the same way I'd say that a brand new language -- you're probably gonna find more recent posts about it, more recent developments and tutorials, but as you said, they do get outdated quicker as well, as things move fast. It's definitely sort of a balance of those kinds of things.

Part of what I'm trying to do with Django is trying to find what that balance is, and where is the balance between keeping things predictable and pushing forward - what is the state of the art, how do we advance, as well.

**Adam Stacoviak:** Interesting.

**Jerod Santo:** Speaking of state of the art and advancements, we do wanna talk about Django Channels, which seems to be the most exciting thing going on in the Django community right now, and something that you're heading up. We are hitting our next break, so let's tee up channels and we'll talk all about them after this break.

**Break:** \[\\00:37:30.16\]

**Jerod Santo:** Alright, Andrew, let's talk about Django Channels. It seems like these days most web frameworks are either adding channels as a feature, or they're trying to; some of them started off with channel support... But you talked about boring, and I don't think Channels are boring. I think the general public is very interested -- and by 'general public' I mean OUR general public, not the people on main street... Developers - we're interested in channels because it provides a new way of interacting, some new features... There's lots to it, like you said, during the break; it is a lower-level, kind of behind the scenes thing, but lots of excitement around Django Channels, so give us the short history of the Channels bit, because I believe it started as a plugin or something, and perhaps has been integrated... But you know what you're talking about - why don't you give me the rundown and I'll quit talking?

**Andrew Godwin:** \[00:39:55.01\] Of course! Channels actually stems from about three or four years ago. I'm sure your audience is aware of this, but if they're not, websockets came onto the scene about five or six years; it was sort of life, "Oh, we need bidirectional communication for the web. HTTP is not good enough." So a team of developers of the various browser manufacturers - mainly Google, in fact - were sort of developing at this protocol like, "Well, what kind of protocols do we have? How's it gonna work? How are we gonna encode it? It has to start with HTTP..." I was following at the time this development, like "What is websockets, how is it going along?" and back then I was actually using a Python framework called Eventlet, which is sort of an asynchronous programming framework for Python; they had a websocket library, and the spec was changing pretty much every month at that point, and so I'd put a few patches in to try and keep it with the current with the current spec. They found security holes and \[unintelligible 00:40:45.28\]. But I think about three or four years ago it stabilized pretty much, and then I sort of got interested. As the web evolves, we see this trend towards websites being much more of like a heavy application. "Single-page applications" is one of the buzzwords you hear. A websocket is this application, full of logic, it has to communicate with the backend server, and a lot of that is still being done over REST \[unintelligible 00:41:12.06\]. That's great, that works really well for a lot of stuff, I appreciate the boringness of that, it's very well understood, but for some things it just doesn't work.

An example from my real place of work, Eventbrite - there's a seat map where you can pick seats from, and the seats gray off in real time as they're picked; if we did that using HTTP, we'd have to do that long polling, bundle it up on the backend and make sure it's all done efficient. And we did use to do that as well, but the key thing is websockets give you this really easy, quick, efficient way of sending data backwards and forwards to and from the browser. It's not standardized, it's a slightly crazy protocol on the wire, but pretty much it is a datagram-based protocol, you can send and receive packets - that's pretty much it; it's all stuff under the scenes. And it got bigger and bigger.

I saw it as like, "Well, obviously as these applications get bigger and more complicated, they obviously will require more and more communication with the backend, and at some point sockets make sense. And then Meteor comes along, and Meteor is a thing I see and go, "Ah!" Everybody is like, "This is a really clever way of doing this." Meteor is this great idea of like, "We can use sockets to do data binding and send data both directions across the socket." So Meteor was the spark for me, "We could do that in Django maybe."

The problem is, of course, for the listeners who aren't aware, Python is a single-threaded language at its core. We have a threading model, but the threading model is just time-sharing on a single core; there's no actual multi-threading in there. On top of this, support for what's called "asynchrony", as in you can open lots and lots of virtual threads and \[unintelligible 00:42:57.08\] and do things out of order, only came in in Python 3.5. Django supports Python 2.7 and up, so we have the limitation there - Django has to support all these different versions of Python, and in addition, when I was thinking about this a couple of years ago, async wasn't even mature yet.

For a little while, Aymeric Augustin, one of the core developers of Django did some work with websockets with Django, and his work was really quite good. \[unintelligible 00:43:26.03\] which is actually kind of amazing; I really enjoyed that demo. He sort of did that, and he moved on from that, but it was still a really nice proof of concept.

Then about a year and a half, two years ago I sort of... Django Migrations, which had previously been my baby, was done, merged. Some other core developers had very kindly taken up a lot of the mantle of maintaining it - I got a bit burnt out merging in the 1.7 release... I was still helping out occasionally with migrations, but I was thinking "What else is Django missing?" I had spent eight years fixing this big hole in Django that I saw in 2006. What do I do now?

\[00:44:09.27\] So I sat down and thought, "Well, in my opinion, and what I am excited about, is websockets. I'm excited about these things in the browser..." You know, I also do game development on the side, sometimes I \[unintelligible 00:44:20.25\] games in the browser, like "What's that look like? We obviously need sockets for that, for proper real-time communication." So I sat down and started sketching out sort of like a prototypical "How would this API work? How would I want it to work?" and then saying, "Could I do this with Django? Could I do this with Python even?" And it's difficult; there are solutions out there already, and there always have been for a long time, that rely on a set process running. That process is using an asynchronous framework, be it Twisted, or Tornado, or Async.io or GEvent, or one of the many other ones that Python has. That framework is capable of handling the idea of lots of simultaneous connections, and if you have this framework running a separate process, that can handle websockets and then everything's good, and it sort of communicates somehow with the main server over some kind of socket, and then you can get sort of socket support, but it's not properly there.

There are a lot of downsides to this solution. The first thing is that server generally only handles websockets. You can't just point your server at that server; you have NGINX in front and then you have a path based routing. It's like, if you see the path /ws, go to the websocket server, otherwise use the main server... It gets a bit tricky.

On top of that, another part of it is HTTP/2. Websockets are not the only thing changing on the web. HTTP/2 is also coming in, and it's coming in in force; it's been a slow build, but it's getting there. HTTP/2 also has a lot of changes in terms of how things are served. It no longer has this pure request/response mode that HTTP has. HTTP is great - you get a request, you \[unintelligible 00:45:57.02\] the request, you return a response, and then you just return to the top of the loop and keep going. It's easy to write, CGI sorted this many decades ago, it's an understood paradigm.

HTTP/2 - you can have concurrent requests that you can sort of work out with some multiple server processes, but you can also push information from the server in real time, and other things... And all this sort of brings on the same feeling like it's all real time stuff that is no longer a request/response cycle.

At that point I sort of sat down and went, "Well, let's think bigger than websockets. What would it take to bring Django to be a general protocol framework?" What would it take to be HTTP/1, HTTP/2, websocket, internet of things protocols coming out as well, several of those - they're very lightweight of course, because the internet of things is very limited in bandwidth, but those also have \[unintelligible 00:46:48.20\] What do we do for those?" and trying to envision this plan of "What would it take to build a framework, or build into Django a framework for the future of the web, the future of the internet? How do you write a system that handles all these different protocols and styles of communication, while still being like Django?" That's the track I settled on back when I started Channels.

**Jerod Santo:** This doesn't sound boring at all. \[laughter\]

**Adam Stacoviak:** No.

**Andrew Godwin:** Well, it's all infrastructure, right? And I find infrastructure really interesting, but some people find it \[unintelligible 00:47:17.03\]

**Jerod Santo:** "The future of the web" is what you said. The future. You're building the future of the web here.

**Andrew Godwin:** Well, I have the ability to make it sound very exciting, how about that? \[laughter\]

**Jerod Santo:** You're succeeding.

**Adam Stacoviak:** You need the hype person behind that Geico commercial -- no, it's Progressive... There's like a hype man behind the flow.

**Jerod Santo:** He has him, I've seen him out there on the web.

**Andrew Godwin:** My PR team is here behind me, giving me advice. \[laughter\] I like big challenges. As a developer, I feel I'm attracted to... As I've grown and as I've gone more and more towards this sort of like software architecture/networking/infrastructure end of stuff, that's always held my interest. And Channels is very much this idea of like "Well, how do we do this?" And for the longest time I couldn't do it. I kept doing ideas, none of them worked, or they were ugly, or they performed really badly, which... \[unintelligible 00:48:10.18\] way worse than Django, it's not worth doing.

\[00:48:15.09\] Then eventually the current design of Channels I hit on about a year and a half ago now, I would say. Sat on it for a while, sat there trying to prototype it and test it, and going "Is this really okay? Does it really work?" I asked a few close developer friends of mine, "Can you double-check this and make sure I'm not crazy or overestimating this?" and then finally when I was happy that it was at least only a little less performant and had all the features and seemed to map into Django, then I was like "Okay, I want to talk about this thing, and here's my design."

**Jerod Santo:** And when was that?

**Andrew Godwin:** That would have been probably... It was in June 2015, so a little over a year ago. I posted this first blog post about, "This is what I think the challenge pressing Django is..." The blog post is called "Beyond Request-Response", that's kind of my encapsulation of the whole thing. I'm like, "This is what it's able to do, this is my rough outline..." I started a proposal to the Django community of like, "This is the major fundamental change in the way Django works I would like to do, and it's a change that will \[unintelligible 00:49:16.09\]" "Andrew has this crazy idea, let's talk about it." Then at Django: Under the Hood that year in November 2015 I wasn't talking, but a good half of the talks seemed to at some point mention Channels. I think at that point I sort of had some idea that it may have been a very popular thing, like there's already growing interest in it, and what it could mean for Django was really starting to bubble up then.

**Jerod Santo:** Let me push back a little bit and play devil's advocate... Let me just say, first of all -- and I get excited about websockets too, and I write web apps for a living, but I've never actually had to use them, and I don't do games, so I'm not saying there aren't use cases... I just feel like, can't we get away with long polling like maybe 95% of the time? And then like, sure, Slack needs to do websockets, but the rest of us can get by with long polling... Can't we?

**Andrew Godwin:** Oh, absolutely. I still recommend it. Certain people come to me for advice saying, "Oh, should I use sockets for this?", "No, this is probably a long polling thing." Especially with HTTP/2... A little bit of background - HTTP/2 does not have websocket support, because they maintain that chunked responses are enough. The protocol was efficient as itself, but just sending requests and responses is as good as websockets is, and that's why Channels is not just a websocket library, it's a general asynchronous library. Long polling still requires the ability to hold open hundreds of connections at once that are all waiting on that long poll. So the same challenges apply to long polling, they apply to having hundreds of HTTP/2 \[unintelligible 00:50:52.14\] at once... The same kind of basic structure applies.

I am very aware that websockets is a very niche thing, it's not for every site. Maybe it could be if the Javascript frameworks \[unintelligible 00:51:02.29\] into the models in the Javascript side. But at the same time, it's also this extreme of a whole spectrum of, "Well, there are all these challenges, and just serving normal HTTP/1, one after the other is like the simplest thing, and we've moved beyond that." Long polling itself is already difficult, and I think websockets and HTTP/2 are just the next step of that.

**Jerod Santo:** Yeah... So does Django typically run on port 80, or is it behind a proxy of some kind? I'm assuming there's people doing it both ways, but what's a typical way of running a Django in production?

**Andrew Godwin:** Yeah, it depends on the way you work. \[unintelligible 00:51:40.25\] embedded in Apache with mod\_wsgi, for example... Or you can run a separate server, much like you would with -- say like a Javascript server or a Ruby server, and then proxy to that through your web server.

\[00:51:54.17\] For example, Unicorn is a very popular server that you just run, it listens on a port, and then you just proxy through to that stuff as well. So Channels stay into the latter model of saying, "Here is a separate server you run that accepts both HTTP/1, HTTP/2 and websocket connections, and you can just proxy everything through to it and just forget about the rest of it." Or if you want to, you can switch different versions, and so on and so forth.

**Jerod Santo:** Yeah, because I would think... It seems like HTTP/2 -- and maybe it's because I don't know the intricacies very well, even though we had Ilya come on the show and tell us all the intricacies, but that was a long time ago and I can't remember... \[laughter\] But can't that be something that you could implement at a proxy layer and then just keep your backend dumb, or simple? And then let your NGINX do your HTTP/2 stuff, and you could talk to it with HTTP/1 proxied.

**Andrew Godwin:** Of course, you definitely can do that. It depends on what features you want. The headline feature you might want from HTTP/2 is that you can streamline multiple requests down the same single open socket to the web server. And if you're just doing that, then yes, you can just tell NGINX to take that, proxy it through as three separate requests to your backend, to three separate servers, and it will handle all that stuff for you.

However, if you want the more advanced stuff of like, "Well, we want to send long polling chunked responses, we want to do server push (which is a feature of HTTP/2)", that stuff requires native support in your framework. Because they're not in the HTTP/1 abstraction, you can't just sort of \[unintelligible 00:53:28.27\] You have to have native support for that stuff to pull it off.

**Jerod Santo:** That makes sense. Probably the server push aspect of HTTP/2 is why they say that you don't need websockets anymore, because you can still achieve that by bidirectional communication that websockets supports... Is that the case?

**Andrew Godwin:** That's a common misconception, at least as far as I know. Server push, as specified - from what I've read, and I might be wrong with this - is just a way of pushing resources to the browser before it asks for them. For example, if \[unintelligible 00:53:58.04\] you'd server push the images to CSS and a few other things, so by the time it got to the full web page, you would go "Oh, all these things are already in my cache", images immediately served them.

The idea of pushing these to the browser as responses is more of just like a... You could have an open response and send things down in a chunked fashion, which is... Server-sent events is maybe the more common way you'd describe that, and that's also a HTTP/1 thing as well.

**Jerod Santo:** Right, exactly. Difficult naming there of server push... So what are the features in HTTP/2 that obviate the need for websockets?

**Andrew Godwin:** I am personally on the fence here; I think they would still be useful, and I could talk nice things about them. But the arguing goes that because you have efficient chunked responsing, like server-sent events, that's your server-to-browser part of the direction as it were, and then because requests are so much more efficient (headers are compressed properly, there's all binary protocol), you could just send normal Ajax requests to the server, and that counts as your inbound, and that's just enough. And maybe it is...

One of the things I'm looking at for Channels is abstractions like socket.io and Sock.JS... Like, is there a good way we can implement those same abstractions and reuse those libraries and have a layer that lets you switch between both of those implementations? Maybe we'll just stick it to one for performance reasons, but maybe we'll have all of them for compatibility.

**Jerod Santo:** So give us the status of Channels, where it stands in terms of development and involvement. Is it in Django, is it a module that you use? Give us the rundown on where it stands.

**Andrew Godwin:** Right now it is a separate application. We usually call things 'third-party applications' that aren't part of Django, but that's not true of Channels, because Channels is part of the Django project, so it is a first-party pluggable application. You use a separate library install, you put it into your installed app setting in Django, which is where you put things, apps that are loaded in, and then it just works. It overrides the server stuff for you, and then you can just import and start using it.

\[00:56:08.15\] It was done this way for a reason; I did propose to put it into a \[unintelligible 00:56:11.18\] Django 1.10, but there were some very rightful questions raised about the design, and how relatively immature it was at less than a year old, and so I made the call at that point to keep it out of Django, and develop it as a third-party pluggable thing, and then maybe in a future release we'll look to merge it in much the same way that South got merged in to become Django Migrations in Django 1.7.

**Jerod Santo:** Okay. One last question for you just with regard to the ecosystem of channel implementations across these different frameworks, so feel free to dodge this one if you are familiar with how Phoenix does channels, or how Rails' Action Cable works. But if you are familiar with those two at least or any of the others and how they're going about implementing channels in their frameworks, how is Django Channels different or better? It seems like at least the scope is larger, because it's got the HTTP/2 aspect of it, but I'll let you answer it.

**Andrew Godwin:** The major difference to a lot of the common ones is that it is a scope thing. A part of that is making up for Python's deficiencies; some of the languages already have a good solution for handling asynchronous I/O, and certainly Python 3.5 does as well. But the idea of "How do you write..." -- because Django is a synchronous framework. Making Django asynchronous would be a massive undertaking. We can't do that, at least in the short term. So the difference there is it's much more of an overarching design of like "How do we run a system that is asynchronous across multiple different machines?" Channels is by its very nature network-transparent, so if you're familiar with Go at all, Go Channels is kind of like one of the patterns Django Channels is modeled after. The idea that it is a data structure you put things into, stuff comes out at the other end, and it does thread pooling properly.

The idea was that even if you have a language that supports multiple processes, that's still not good enough for most websites. Most websites are like these whole racks of servers, or loads of machines in this huge cluster. With Channels, the idea was to have a design that would enable you to write asynchronous systems across a network. It's a very ambitious project in that way. At the base of it, it's a distributed communication and queuing system. The Django part of it is sort of the nice, pretty, websocket built on top, but underneath there is a whole underlying set of libraries (separate libraries \[unintelligible 00:58:35.20\] this is how you can do asynchronous coordination and communication between different processes, and it's all based on a language called CSP, which is an old academic proof language for concurrent programming, which I got taught at university, much to my regret then -- it's much better if you're now actually using it... It's all based on this idea of "How do we write a system that handles all of this stuff together?" In that sense it's a bit more far-ranging than other solutions, but also some other solutions don't have to solve the same problems in their language that other things do.

Then again, all languages ultimately - apart from maybe Erlang - are fundamentally a single machine, so I think the problem still applies to other languages. One of the things I would love to do if it proves out and works well is look at how we could have intercompability across languages with this kind of message parsing solution... Like, could there be a way here of a more general protocol of making things talk to each other, and then maybe solving some of the microservices headaches people have, like "Well, we could write this thing in other languages", and so on and so forth.

**Jerod Santo:** Well, it's no wonder to me that so many people are excited about your Channels project, even though you keep using the word 'boring'; I would say it seems exciting and ambitious as well. Any final thoughts on Channels before we move on to the next topic?

**Andrew Godwin:** \[01:00:07.25\] The thing I want to say really is Channels probably isn't for everyone. Migrations, when I wrote it, was for everyone. Almost every company has a database of the schemas in it. Real time communication is not for everyone. What I would like people to think about it is like not just websockets, but as their company grows, as they expand out, will you grow dedicated hardware or will you grow other things...? Think about things that will go beyond just normal web request/response, just start thinking about what would that look like.

At Eventbrite, as a company, we moved into actual fiscal hardware and stuff like that, we have this problem. But even the internet of things is coming up, and all that kind of stuff... We have a growing set of problems. Things aren't just normal browsers anymore. They're not just like IE4, sends a request, gets a response, job done. Try and bear in mind what's the best tool for that job.

**Jerod Santo:** Well said. Switching gears a little bit, you mentioned a couple of projects - of course, the Channel project is the big one; you also had... What was the name of your migrations...?

**Andrew Godwin:** South.

**Jerod Santo:** Yeah, South, which got merged into Django, and you've been working on the Django core team for a while now, and so you have some experience with long-term projects and sustainably funding open source projects, which is always a hot button topic for us. Share a story with us. It looks like you had a couple Django features which you've managed to get funded the development of. Can you tell us about them?

**Andrew Godwin:** Yeah, I've been unusually lucky... Well, lucky/well-fortuned in that regard. The first thing I got money for -- and one of the first open source funding things I actually heard of... So when South was still a third-party app at the time, I wanted to merge it into Django. That is a lot of work - it was actually basically a full rewrite of the code pretty much - so I turned to Kickstarter and went, "Okay, I need around 3,000 GBP to pull this off", in my spare time (I had a day a week free); my freelance rate would be around that, so I did a Kickstarter and I was like, "Hey, this is a single feature, there's a clear-defined end goal of it in Django. Would you like to give some money?" and the response to that was overwhelmingly positive. I think I raised almost 18,000 GBP from a target of 2,500.

I was very fortunate that the community really rallied behind that. That gave me the funding, the time to basically merge it in considerably faster than I would otherwise have been able to, and just spend some of my freelancing time directly on that stuff. That was really nice. So that was good for the South feature.

For Channels, there was a different approach. Mozilla have a project called The Mozilla Open Source Support grant system (MOSS), and what they do is Mozilla are doing this wonderful thing of giving money to open source projects that they rely on - which I wish every company really did, but that's on the side. I think it was Django: Under the Hood last year, we were having an informal meeting of core developers and somebody went "Oh yeah, there's this Mozilla thing that we should probably apply for." Specifically, the Mozilla thing was also for a new feature, something that you could specify and bound and say, "Okay, we're going to do this, this is the end goal. Here's a rough estimate of the timeframe and the cost" and then apply.

I sent an application, and we were very fortunate to be given the money, $150,000, which is a lot of money to know what to do with in many cases, and that was the estimate of the amount of work for both Channels and also some Django REST framework integration with Django as well; it's still ongoing. That was also a sort of single lump sum raised from a company, rather than from the public, although Mozilla is a very public-thinking company, in many ways.

\[01:03:58.03\] So both of those I've been really honored to have the public and Mozilla both be happy and confident in my proposals and my work to pull those things off. The Channels money is more than sufficient to pay both the time it takes to develop the main part of the project, but also we are paying individual developers for features. We have a list of big features on the GitHub issue tracker; if you want to work on one, you can send in a small proposal. We have a small team of DSF and Django members who'll vet it and make sure you have a relatively decent history and then just approve it to work and then we'll pay you your going daily rate to work on that stuff. As a sustainable way of doing open source, I really like this. It's a way of saying, "We can pay you to do what you are normally paid to do and write good software", and I really like that as a way of doing this stuff.

We've already had six or seven major features being paid for through this program, and we have a few more that I'm sort of trying to rattle up people to do. It's sometimes surprisingly hard to find people to pay money to it turns out, but we're getting there. That's been a really nice way of doing.

**Adam Stacoviak:** Have you formalized a process much then, since you've done this so many times?

**Andrew Godwin:** I mean, I've done it twice, so...

**Adam Stacoviak:** I thought you said five.

**Andrew Godwin:** Oh, you mean for the Channels. Yes, we had a formalized Channels one from the start. Django, as it grows as a project, we like having formal ways of doing things so there's no skirting around the problem. When money's involved, accusations of fraud or favoritism. We have a neutral committee that I'm not on that approves that stuff, and there's a process. I work with the person who has a proposal, we put it to the committee, they discuss it and then come up with a result. We have a separate structure already for Django called the DSF - the Django Software Foundation; they handle the money and the payouts and stuff as well. So it's all very well formalized; I'm very happy with how above board and understandable it is. It's very hard to accuse of favoritism in that respect.

**Adam Stacoviak:** It's an interesting way to do money raises, and I guess... Compare that to features in Ruby, if you even might know. Other languages, how do other people do what they do? Is it just free open source, just people's hard work and there's no money? Or what's generally the way other camps do it?

**Andrew Godwin:** This is a general problem in open source. Funding is a general problem in open source across the board, not only in Django and Python. Obviously, those two features I've mentioned were funded; two other things in the Django world have also been funded... We had Postgres, specific fields and stuff funded for Marc Tamlyn - that was amazing. And we had the Django REST framework funded as well, both Kickstarters in those cases. But there's also a general problem - there are other Django features that are still done purely by volunteers; our security team is still purely volunteers. Thankfully, we have a full-time paid Django fellow and his job is to do our bug triaging and keep things going... They keep things flowing and do security \[unintelligible 01:07:00.24\], but it's a general problem in open source.

One of the things I like to look at and consider is how do we keep open source as a whole community going? How do we fund all the software that the world really does rely on?

**Adam Stacoviak:** Certainly, yeah.

**Andrew Godwin:** NGINX and other things are the core of an astonishing number of systems... Even Linux - there are commercial branches to some of those people: Red Hat employs some Kernel engineers, NGINX has a commercial arm... There were other projects - OpenSSL was one of those recent ones. There was like a couple of people working on that and they weren't really paid very much at all, and that library is one of those critical parts of security infrastructure we have in the world.

\[01:07:43.13\] In general, I'm trying to help -- I guess not raise awareness, so much as like trying to work out what is a more sustainable solution for ongoing maintenance. What I did was raising money for a single feature that you can define, and you say like "This is what we're doing, it finishes by this date." But in general, you need money for fixing security holes, and doing code audits, and keeping things maintained properly, and looking at issues, and all the stuff that seems very plain on the surface; no one wants to fund it individually, but it's a very important part of maintaining good software. And that's really what I'm interested in - for Django especially, because that's what I'm involved in, but also \[unintelligible 01:08:20.23\] "How can we get a patent of that that works well?"

**Adam Stacoviak:** Well, I guess before we close the show maybe give some advice - you had a successful Kickstarter, you've done this at least a couple times, you've thought about ways to formalize it... Give people that are listening to this show some advice, ways to replicate some successes you've had, whether it's that Kickstarter or other models you're thinking of. What are some ways that other open source camps can replicate what you've done well?

**Andrew Godwin:** Yeah, that's a good question. In some ways it's tricky. The South to Migrations one in particular was very much a time and place thing. I had been working on that project for seven-ish years at that point unpaid, so I see that one more as a pressure relief... People have been using it for so long that they very fortunately came out and said, "We've already used this, we know it's good, and we're gonna pay you money in retrospect", in a way, is what happened.

I think also part of it was being very clear about what you're trying to accomplish, and also giving something that people wanted. It's bad advice what I've just said about maintenance and that kind of stuff. At the end of the day, open source needs some PR, it needs some advertising and business \[unintelligible 01:09:30.27\] You need to understand how to make people want to give you money - be it business, who have a different set of reasons, to individuals, but you have to appeal to both of them on their own level. Find the thing that businesses want, find the things that people care about and appeal to those. If enterprises want support contracts or stability, maybe you can frame the conversation around like, "Well, you can pay for a support contract that actually funds all the security stuff." If individuals want a new feature that sounds really exciting, maybe you can frame it around that new feature. But you still need to consider that. You're still appealing to people and businesses with their own opinions and their own thoughts, and you've gotta really think about your writing and what you're saying.

**Adam Stacoviak:** And who are you focusing though - are you focusing on businesses, or you focus on the general public at that point...? Kickstarter is the general public, so...

**Andrew Godwin:** Well, it's not though. The Kickstarter I did, over half the money was on the high-end tiers and big companies. It had this cross-appeal. But it really depends on the software. If you are writing archiving and checking software, that's probably more a business thing. If you're writing exciting home automation software, that might be more personal, but it really depends. It's unfortunate that both times I've done this, I've had the advantage of -- and it's definitely a sort of almost unfair advantage of I have a good history of implementing things, and people go, "Oh yes, that's Andrew... He's pretty trustworthy with this stuff. We know he understands it." Even with Channels, like \[unintelligible 01:11:03.16\] would let you know, I'd spent a year working on prototypes; I had working code at that point. I'm sure that helps swing at least a little bit, coming in with some work already done. That's not necessarily sustainable; it is a privilege to have free time to work on open source in the first place, and I would love to find a way of fixing that dichotomy - we shouldn't just have people who have the privilege of not having children or not having partners or whatever, who have all this time to work on open source. If the only answer is you have to come to the table with something in the first place, that's still not really helping; it helps, certainly, but it's not solving that problem. I have an unfair layup in that situation.

**Adam Stacoviak:** Well, before we close out, is there anything that we didn't get to ask you about Django, Python, Channels, the community, Documentation First, different things that are tried and true for the community you're a part of? Anything you wanna say?

**Andrew Godwin:** \[01:11:59.10\] I'm gonna put in here a really good word for the Python community, because I came to Python in 2006, and I am still a very proud member of that community because of the level of friendliness and help and outreach and niceness that you get from all parts of the community. Especially the last few years it's made great strides in being more open and welcoming as well. Going to PyCon, going to DjangoCon - they're just great places to go. Honestly, I would say, if you run an open source project, I would advise you not to consider just the technical part of a project, but the community is a really important part of it as well. Have positive discussions, welcome people - especially beginners; beginners are your lifeblood of an open source project. A beginner today is a core developer tomorrow. Welcome people and help develop them as people. If we all did that, then the world would be a better place for open source.

**Adam Stacoviak:** On that note I have to mention Request For Commits because we've been talking about drive-by contributions, contributor onboarding, all sorts of things on that show. It's the human side of code, it's about sustainably running open source, forming open source businesses and licensing, all those fun things around it. To you Andrew, if you haven't listened to it yet, go to changelog.com/RFC, you'll find the show there. Or the vanity URL, rfc.fm.

It's been a blast producing that show. We actually just did a show that's coming out soon with Brendan Eich, and I'm not even kidding you, for like an hour plus a little bit we got like a history of the internet, and how we got here in terms of browsers and motivations from companies like Google and Microsoft and others; Mozilla, of course, but he couldn't talk much about that because... He has his reasons why. But a great history not only of the role Javascript played in it, but how open source has been funded or is being funded and living based on this history of browsers. So that's a great show to listen to on that note of what you've just mentioned there.

That's all we have for today's show. Anything else you wanna mention? Any last-minute shout outs?

**Andrew Godwin:** No... If you're interested in Channels, go to channels.readthedocs.io, and if you're interested in Django, go to djangoproject.com. There's plenty of documentation on both of those to look at, and we'd love to have you come and work on stuff.

**Adam Stacoviak:** Cool. Alright, with that, let's call this show done and say goodbye.

**Andrew Godwin:** Thank you very much, guys.

**Jerod Santo:** Thank you, Andrew. Bye!
