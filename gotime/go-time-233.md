**Natalie Pistunovich:** Good evening, morning, and afternoon, everyone, from wherever you're joining us. I'm Natalie, and I'm joined today by Ian and Kris. Hello.

**Kris Brandow:** Hello.

**Ian Lopshire:** How's it going?

**Natalie Pistunovich:** I'm good. How are you all doing?

**Ian Lopshire:** Doing well.

**Kris Brandow:** It's a beautiful, but very warm day, the end of May. It's like 90 degrees outside, so it's quite sweltering.

**Natalie Pistunovich:** Here, it's freezing. It's a single-digit Celsius this morning.

**Kris Brandow:** Ooh.

**Natalie Pistunovich:** Which is not far from snow, but far enough definitely not to happen. So today, this episode is our news episode, and you can see that because I'm holding a pen; I see all these news anchors do that. So we will be talking about what is new and interesting in the Go world, and we'll cover four interesting things from the recent news, with my interpreters for the field of growth. There goes the pen.

Okay, so a first thing that many of us probably saw in an email or an announcement or in a tweet is that GopherCon US is moving from Florida to Chicago. And from the end of September to the beginning of October, specifically October 6th through 8th. And the reason of that being is that in Florida two bills were passed or in progress of passing; keep me honest, I'm not from the US. One is about what parents can say and not say, or schools can say in the context of gay people. I take that from the name, Don't Say Gay. And the second one is a law about abortions, that when things pass, then in Florida this will be not allowed, starting week 15.

**Kris Brandow:** \[04:20\] Yeah.

**Natalie Pistunovich:** So for those of us from not the US, can you say how much of my knowledge is up to date or correct?

**Kris Brandow:** Yeah, the Don't Say Gay bill - I think it has been passed in Florida. It's one of those weirdly, vaguely-worded bills as well where it's just like, "You're not allowed to talk about gender identity in school", but clearly targeted at, "We don't want kids hearing about gayness and queerness when they're in school." So yeah, that's definitely happening. I mean, there's a lot of just-- many, many states are attempting to pass abortion bans. Many states in the South, but yeah, that's... And in their announcement, they went over both those things and said this is part of the reason why we're moving venues.

**Natalie Pistunovich:** As a conference organizer myself, I can say that this is definitely an expensive decision. Just not doing a conference in the place where we plan to do it due to a simple reason like COVID back in 2020 - that was a huge headache, and definite financial implications to that, so I can only imagine what is it like in the US. What are your thoughts on that?

**Ian Lopshire:** I think this is a good move. I think it's representative of our community, and I think it's kind of brave of them to do it despite the cost, and looking forward to going to Chicago.

**Kris Brandow:** Fingers crossed as well, that by the time October rolls around that we're not in the middle of another spike with COVID, because I think that'll also be a thing that people have to kind of like wonder about now... Because it felt like we were through all of this, and they did an announcement to bring up one of the reasons they wanted to leave Florida as well is like the kind of lackluster - to put it nicely - a response that Florida had to the pandemic, and how absolutely crazy things got down there.

So I think it's the same sort of thing of like, okay, well, even if it's in Chicago, if they're still like, "We have a giant COVID spike and a lot of our travelers are international, are they going to be able to get into the country? If they do, are they going to be able to get back into their home countries easily? So there's a lot of questions around in-person conferences. But I am excited that they are still trying to do an in-person conference at the end of the day. I'm glad it's not just like, "Okay, well, we can't do it in Florida, so we're going to do another virtual conference, like we did last year." I think it's good that they're trying to do an in-person thing.

**Ian Lopshire:** Yeah. I do realize that in-person conferences are a huge risk. I think we just saw that with the Kubernetes Conference, and all that. But there is not a replacement for the in-person. I wouldn't know you, Kris, if I didn't go to one of these conferences. There's just not a replacement for it, so I am excited that they're trying to do it.

**Kris Brandow:** Yeah. And hopefully in future years we won't have as many problems... With COVID, at least.

**Natalie Pistunovich:** Yeah. Yeah. So I heard about the Google DDoS. What happened? ...for those who have not read about that.

**Kris Brandow:** Yeah. So apparently, this is a knock-on effect of the design of modules. So for those of you that don't know how the internals of-- I hear you sigh, Ian... \[laughter\] So for those of you that don't know what came with the module system is we got this thing of module proxies, and there's the big one that everybody uses by default, that's owned and operated by Google. And essentially, what it's doing is it's going out and it's doing a full Git clone of repositories that are in the module proxy index.

And there's this one Git hosting site called - what's it? SourceHut... And they've been getting-- about 5% of their overall traffic is just the Go module proxy hitting them and downloading the Go Git repositories that are hosted on their surface, which is a tremendous amount of traffic. I mean, at the end of the day, the thing you pay for, I think more than anything else when you're hosting Git is bandwidth and is traffic.

\[08:02\] So basically, they're just getting DDoSed every day by this module proxy that exists. And I think this is another thing... I promise I'll get off my inclusion soapbox eventually, but this person didn't just write a blog post whining about this, they did try and actually go to the maintainers of Go and be like, "Hey, can you please fix this?", and they were basically told, "This isn't our priority. We're not going to do anything about this. Sorry." They're just stuck paying all of these costs at the end of the day for this bandwidth, because they can't just block the Go module proxy, because then any Git repositories that are hosted there just would stop working. They wouldn't get updates, or things like that.

**Ian Lopshire:** Yeah. Google's answer to this is like, "Hey, email us and give us your domain and we'll block the periodic refresh to your servers. We'll stop doing that. But you have to submit a ticket or email us." It doesn't seem scalable.

**Natalie Pistunovich:** Or DDoS with requests.

**Ian Lopshire:** Exactly. And Kris, you said it was a result of the module system. I'm not sure I totally agree with that take. I think it's more a result of however Google has under the hood created this proxy. But yeah, SourceHut is seeing multiple requests for the same module, like multiple times a minute. So obviously, there is some redundant traffic happening that does not need to be, probably, at the end of the day.

**Kris Brandow:** I think you're right there that it's not part of modules, but I feel like if modules had been designed slightly differently. Modules, at the end of the day, are designed to be agnostic of like Git, or any of this stuff. So I feel like it's like a small failing there that the proxies weren't designed in a way that didn't need to depend on Git as much as they are; or maybe my knowledge of the internal of modules is kind of old and rusty, so maybe it is designed in this way. Maybe it truly is just Google's proxy, that is the problem that needs to get fixed.

But either way, this type of stuff, if you wanted to self-host your own modules via Git repository, this is going to hit you and you're going to have to pay the cost of this thing just coming back and just doing useless polls of your Git repository. Especially if you have large projects, it's gong to cost you a lot of money.

In our way, it's a kind of like, if you're someone that doesn't necessarily want to put all your stuff on GitHub, or you don't want to put it on GitLab or any of these other centrally hosted services, you're kind of just stuck, I guess, dealing with this extra cost. It's like a tax that you have to pay for not wanting to be part of a centralized platform.

**Ian Lopshire:** To me, this kind of brings up the issue like, why is the module proxy controlled by Google? Why is it close sourced? Why can't we go look and see why this traffic is happening? It seems at odds with the principles of our community.

**Kris Brandow:** Yeah. Which is really weird too, because I remember in the early days, there was Athens, there were all these other projects that are still around, but just not nearly as active, that were there. So it does feel a little weird that it's just like this piece of infrastructure is owned and operated by Google. I mean, I think there's also plenty of other companies that would be happy to help operate this, because at the end of the day, it's not just Google that uses Go. I think, as pointed out in other articles we're going to talk about today, every cloud provider has Go at their core, so there's no reason why we couldn't have a module proxy by Microsoft, or by Amazon, or even by some of the other CDNs, like Fastly.

To me as a gopher, it feels weird that Google has used its position to put something into the Go ecosystem that people can't really change. People can change it, but they just don't know about it. So by using Go by default, you're just opting into this module proxy, when they could have done a different way. They could have suggested that you use the Go proxy, the Google proxy, or given you some options, but they just chose to do it this way... Which kind of sucks too, because I was always one of those gophers that defended Go to such a high degree, because I was like, "Google does not control Go. Look at all of these people that are contributors to Go. The people that can actually submit, plus to a code review, the majority of them don't work at Google", although now that is also a thing that is dead and you can't do that anymore. You can still plus two, but you can't actually get the merge approved without having a Google employee sign off on it.

\[12:19\] So there's these steps that have been happening that just make it feel like Google is trying to wrangle control over Go again, which just doesn't really feel good for an open source community project... Especially when their answer to, "Hey, there are these problems with this thing that you built that you are unintentionally forcing everybody to use" is "Well, sorry, we aren't going to put in the resources to actually fix that problem for you." I think that you can't have it both ways. It's really not cool to say, "Well, we're going to have this control over everything, but we're also not going to invest the resources into making sure that it is not harming people actively." Sorry... Okay, I promise they will get off my soapbox and stop ranting about things.

**Break:** \[13:00\]

**Natalie Pistunovich:** The next thing we will chat about is the article that reflects about Go, and was written by the five creators at the Association of Computer Machinery magazine. And that article was recapping who were the early users of Go, why the users chose to stay, and what were the design decisions that made Go what it is. And for anybody who's familiar with the language, you're probably not going to hear anything new, but it's still interesting to recap this. So who do you see, the early users? Why did they come? What did they like about the language?

**Kris Brandow:** There is one thing I want to point out real quick before we jump into it - I did find it interesting that Russ Cox and Ian Lance Taylor are included here as the core people that helped create the language, because I think it's always like... You know, when you think about it, you think it's like, okay, Rob Pike, Robert Griesemer, Ken Thompson - those are the creators of Go. So I think it's nice that some of those people that did a lot of the early work... I mean, the reason we have a bootstrapped compilers is because Russ spent a lot of time figuring out how to get all of this massive C codebase into Go. So I do want to call out that it's really cool that they included these other two people that have been hugely influential on Go from the beginning.

To answer the question you had, I think the early users of Go I think were probably a mix of people that were really interested in this idea of a programming language that has this core of simplicity. I think around the same time the early versions of Go started to become popular was the same time that Rich Hickey had his talk called Simple Made Easy.

\[16:13\] There was a lot of thought in the software engineering ecosystem and world about how do we simplify software? How do we make it easier to build things and not have all of this complexity that comes with other languages? So I think -- at least I know for myself and a bunch of people I know, that was one of the things that drew us to Go in the early days.

**Natalie Pistunovich:** That would be my next question - when and why did you join?

**Kris Brandow:** Ian, do you want to take that first?

**Ian Lopshire:** Sure. I think--

**Natalie Pistunovich:** I wanted to hear Ian's first. If you want to answer then also-- if you want to share in addition, who do you recognize as the early users would be interesting, too. Or why did they come-- what did they like in the language? Some of the early people.

**Ian Lopshire:** Yeah, so I don't have much familiarity - I can't even say the word - with the people. I think I came to Go a little bit later, like Go 1.8 maybe, 1.5, something like that. The way I came to it was basically my company said, "Hey, you've got the choice between Go and C\#", and I went Go... I mean, for a lot of the same reasons - just the simplicity and the... Yeah.

**Natalie Pistunovich:** Yeah.

**Ian Lopshire:** Yeah.

**Natalie Pistunovich:** Yeah, yeah.

**Ian Lopshire:** Sorry, that was the worst answer I've done so far.

**Natalie Pistunovich:** No, that's a perfect ramp to my next question... But first, Kris, do you want to share when and why did you join Go?

**Kris Brandow:** Yes. I think I've shared it a number of times, actually. So the main thing is when I started my career, I was writing a lot of Drupal, PHP. It was very, very, very complex. And this one day I went to this full-stackgineering meetup where I met Sam Boyer. And Sam and I were both in the Drupal community at the time, and I was describing to him how frustrated I was with Drupal. I was like, "There's all these things that are annoying, and I don't like it", and he looked at me and he said, "I know what that is. That's complexity. You don't like complexity. You like simplicity. You should go try out Go, and you should go look at this language and see how you like it." And that's literally--

**Natalie Pistunovich:** You should go test it.

**Kris Brandow:** Go test Go. That's literally how it happened. It's just like, Sam Boyer-- I just met him one night and he was literally like, "Hey, I think you'd like this other thing. I understand your frustrations." And then basically, I think a couple months later-- or not even a couple, I think a couple weeks later, I was like, "I like this language. This is going to become my professional language now. This is going to be language that I write the majority of the software that I write going forward." So it was just -- not love at first sight, but definitely something that I just was like, "Yeah. No, this is great. I absolutely love it. Let's Go." Oh, God, I'm going to say Go so many times, in different ways... Let's go...! But yeah, that's how I got into writing Go.

**Natalie Pistunovich:** So Ian and Kris, you've both mentioned simplicity, and that's very interesting. I had a conversation last week with VP on R&D of a Berliner startup that is doing mostly B2B things. And I always like asking people if they use Go, and if they say no, whether they evaluated that, and if they say yes, then I'm always curious to hear why not Go. So his answer was that a couple of years back - five years or so - he was a developer at a company that was using Go, and he even attended one of the meetups in Berlin, and his memories and his impressions from the language at the time is that this is like a super-optimization language and, "Check out my talk of how I changed two lines of the compiler and shaved off a few more milliseconds..." And then he said, "And you know, overall, yes, SLAs were way, way far from that, so we don't need the fanciness of Go. We went for something simple, like Python." And then I said, "But wait", and he's like, "I know you're going to pitch Go to me. I know you." But this was very interesting for me, that for him-- and he sampled Go back then, and did not check on it again. And for him, this is like a fancy language, for great optimizations and actually not something with simplicity.

**Kris Brandow:** \[19:59\] I think it comes down to how you see simplicity, because I think simplicity is one of those words that's like really, really slippery. Python, along a lot of domains along a lot of axes, is a simple language, but it's not simple in the way that Go is simple, right? Go is simple in-- if you haven't seen it, Rich Hickey's talk Simple Made Easy, very, very good talk, and I think it kind of defines it well. Simplicity doesn't necessarily mean that it's easy, or that you can get started quickly. In fact, simplicity, a lot of time means that you're going to wind up getting started slower, but it means in the long run, things remain simple; that it's harder to introduce complexity, right? It's simplicity as anti-complexity. And I think if you look at most other languages, you wind up with just lots of complexity after a few hours or days of coding. Whereas in Go, I've found that it's like the language pushes back on you a lot if you try and do things in an overly complex way.

I think for a lot of years, there was this kind of marketing of Go that was like, "Oh, we have goroutines and channels." I remember even myself sitting down and writing tons of code with channels all over the place, and it felt awful; like, absolutely awful. And I was like, "Oh, I've made this mistake. I will not make this mistake again." Channels should be used judiciously. They should not be just sprinkled all throughout your code base. And I've learned that lesson and I haven't done that since.

I think other languages probably would've made it so that you could keep just using channels everywhere, because like "Hey, this is like a core feature of the language. It's like a nice thing. We'll just bolt some more features onto channels." I think there's been multiple proposals to make things like error handling with channels easier. And it's just like, no, because that will violate the higher-level simplicity of Go as a whole. Channels are meant to be this simple object. If it doesn't fit your use case, you're probably using the wrong thing, and there might be something else that's a better fit for you.

So it's simple in that way, not necessarily that it's simple to get started with, or simple to bootstrap an application with. There are certainly other languages that are easier for that. It's also quite simple to learn at the end of the day as well. I think most people can at least pick up a majority of the syntax in a weekend or in a week. It does take a lot longer to become an expert, but it's easy to pick up that early language syntax.

**Ian Lopshire:** I saw some comments on -- I think it was on this actual article, where part of the simplicity is also the density per line. Every line is simple. Does that make sense? There's not these 40 ternary statements long, where I don't know what's returning. That's one of the big parts of the simplicity to me, that all the code is the same density. It's easy to look at each line.

**Natalie Pistunovich:** Even the format thing being the same everywhere.

**Ian Lopshire:** Exactly.

**Natalie Pistunovich:** Always dive to that familiar pattern.

**Ian Lopshire:** Exactly. And they kind of talk about that in the article, where they say part of the reason it stayed around is the environment, right? All the great tooling, all the great -- like Go format, Go...

**Kris Brandow:** Yeah. I remember -- I don't know if it was a talk Andrew Gerrand gave, or if I was just talking to him, but I remember this comment he made about... No, I think it definitely was in one of his talks, where he was talking about how he went and looked at a bunch of Go on GitHub, and found out that all the open source Go they could see, 98% of it had been `go fmt`ed already, so it was already in that nice format. I remember that being another one of those early things that I was like, "Yes, this is nice."

It was novel, very novel at the time for a language to ship with a formatter that was just very easy to run, and that you were expected to run, and there's no negotiation. It's like, "Oh, but I like to put brackets on the next line." "Well, too bad. You're not allowed to do that." And if you do that, someone else will just run Go fmt on the code base and will just correct it.

\[23:50\] So that's another element of simplicity there, because then it's like if you go to any codebase you find in GitHub and you can just read it. You're not annoyed because the brackets are in different lines, or there's some other spacing issue that you don't like, that you would prefer to be a different way. No, no, this is just the way that Go looks. So I definitely agree with them that - yeah, the tooling around Go was absolutely one of the things that solidified it in the ecosystem.

**Natalie Pistunovich:** Yeah. I'm doing these days more Python than Go, unfortunately... And one of the reasons is that, as you mentioned, Kris, that this is a quick language to just ship things fast, and then later deal with the consequences. Not necessarily very happy with that, but disagree and commit.

I do feel that after so many years of doing only Go, the same pattern, always recognizing whatever codebase you're entering, like new company, existing company, this is just so confusing. I spend so much time that feels unnecessary or just realizing like, where am I? What is the fancy line doing? Like you said, Ian, each line is not necessarily always readable. And this is not because a bad developer wrote that, it's just because it's not necessarily a thing in many languages, not just Python.

And I think that also the fact that Go is so consistent and always looks the same is very useful when we are in this stage, where tools like Copilot are being introduced into our world as developers. This is something that is super-easy to use with Go, because it will always do the right thing. But with different languages, like Python, it will sometimes do the right thing, sometimes it will be like a mix of, "This is too much", like too different input here, something that is a mix but doesn't really work, or just does not fit the codebase. So it's also one of the reasons I personally think that languages like Go will survive going forward, and other languages that are more a mix of things will slowly go away.

**Ian Lopshire:** Yeah, that's a great point with the Copilot. I hadn't thought about using Copilot in a different language, and it just spits out code and you're like, "What is this?!"

**Natalie Pistunovich:** You're from a different story.

**Ian Lopshire:** That's just not how I do it.

**Natalie Pistunovich:** Yeah.

**Kris Brandow:** Yeah.

**Break:** \[26:02\]

**Kris Brandow:** We did get some nice commentary from Bill Kennedy in the Go Time channel. Shout-out to the Go Time channel. If you're in Gopher Slack, you should join GoTimeFM. That's where we're always hanging out when we're doing the live recordings for this. I'll just read what he said, and then we can discuss it a little. It was back when we were talking about the module proxy, and the issues with someone getting DDoSed by it. He says, "I don't see it like this. I see it as this system that provides security and durability for Go projects. They built a system which they run and manage for the community. They publish the API, and anyone can build a system such as Athens. They are not controlling anything. They are spending money and time to provide a system that must be stable and available. We should be thanking them for this. You know how hard it is to open source anything from big companies like Google."

And I do understand that sentiment. I think I agree with Bill there, and I am happy that this exists. I think that for the community at large, this is great. Having a module proxy, making it so that you don't have to configure it is absolutely fantastic. I see how they arrived at the decision to just include it in the default Go binary that ships, and I think we should be now thankful and happy for them for building this. I do have another thought on this, but I want to give - Ian, Natalie, if you want to also respond to this a little bit...

**Ian Lopshire:** Yeah, I do think it's really easy to forget how much monetary support these big companies do provide communities like Go, right? And I do think we should be grateful, in some regards. But in other regards, they're not doing this solely out of goodwill.

**Kris Brandow:** Philanthropy.

**Ian Lopshire:** Yeah, exactly. They are getting something in return, right? Having Go as a strong community provides them programmers they can hire, expands the job pool... It does a lot of different things for Google. So I also don't want to forget that it's also a benefit for them to have a strong community. We do should appreciate the support.

**Natalie Pistunovich:** And also it's a good point of having something that is the stable thing to go to, pros and cons.

**Kris Brandow:** Yeah. So I think my larger take on this is that I do agree, we should be thankful for them for putting out the effort to do this, but I also think that when it comes to underrepresented communities or underrepresented people, we're always like a small minority of things. So whenever something like this happens and it's a small minority of people that get affected, often it's just swept under the rug that this is a problem for some people. Like I mentioned, small entrepreneurs or people that have ethical or moral or they just feel strongly about not centrally hosting things, this is a cost for them. And as a community, by Google doing this, we've said to them, "You get to pay an extra tax for this", which is a way of saying to people, "You're not as welcome in our community." Which - if that's something we want to say because it's better for the greater good of Go, I think that's a fine thing. That's a trade-off we can make.

\[32:07\] But I think the thing I was trying to point out here is that this is like an actual trade-off that happens, at the end of the day, and big companies have a habit of doing this sort of thing and harming underrepresented communities by doing this sort of thing. And if we just keep going on thanking them for everything they do, we don't necessarily resolve that problem at the end of the day... Which is obviously a tough thing to talk about, because once again, this is not a topic that people usually consider to be polite conversation, or things like that. But no, they are doing a good service, so it's like we should appreciate that... But at the end of the day, as someone from a plethora of marginalized backgrounds, it's tough for me when I see other people that are not thought of as marginalized, other people that don't get the spotlight as much are suffering, and they don't get necessarily the same amount of recognition; they just kind of have to put up and deal with it.

**Natalie Pistunovich:** And \[unintelligible 00:32:57.03\] Thank you, Bill, for being a member of this conversation in some way. This is interesting.

**Ian Lopshire:** Bill does bring up something nice. It's a small team, very little runway... That probably is something we forget. Even behind these big companies are just people on teams.

**Kris Brandow:** Yeah. And that's the same thing, too. It's like, oh, well, at the end of the day, the Go team is also a minority. They are very small. There's a couple million gophers and there's a couple dozen people on the Go team. So it's like, they need to be prioritized as well, and what they can do needs to be prioritized as well. So it's like, I think at the end of the day what I'm trying to express here is that there is no simple or easy answer to this question... Aside from maybe Google spending a bit more money on the Go team and questions about, I think, the thing I brought up in the first place, which is like, it's fine if you want to build this sort of stuff, but when it harms people, you've got to shell a little bit more money. I understand, you've shelled out a lot of money already and that's a tough thing to do, but that's part of how we actually do this thing. And that's one of the things that, at the end of the day, annoys me a lot. And once again, we're heading right into Pride months, so this is a big thing, which is when people don't want to walk the walk after they've talked the talk. Everybody wants to be like, "Yeah, we support queer rights", or "We support marginalized communities. We support diversity and inclusion", but then it gets hard, and they're like, "But this is hard, so now we don't want to do it anymore." And it's like, well, then you didn't really support the thing. That does damage to those people because they thought they had your support, and now they don't. And people might have gone to your company and they might have done something, they might have gotten themselves into a situation that they wouldn't have otherwise. So you can't actually do actual harm to people through these sorts of things.

Thank you so much, Bill, for bringing this up. I think it's super-important to have a more balanced look. I can see how what I said was a little bit maybe too much on the other side of things... But yeah, and I also love this type of discussion that we get to have with our listeners in GoTimeFM. So if you're not in there and you're listening, go jump into that channel now. It's really great.

**Natalie Pistunovich:** And a shout-out to Google for this. Reading what Bill wrote more as we were chatting, "Google has provided GoBridge over 200K in donations over the past three years, which is amazing and it always translated people coming to conferences or being able to do things that they would not be able to do otherwise." And the Go team has lost some resources over the past few months, and this last release burnt out a lot of the team members. Shout-out to you for being great. Thank you. It's hard to balance everything; this episode, how to manage your resources, everything. Engineering is all about trade-offs.

**Kris Brandow:** Yeah. And we do have one more topic that we want to get to, so...

**Natalie Pistunovich:** Which can maybe act as a potentially unpopular opinion, maybe yes, maybe not... A recent proposal by Thomas Eckert on lightweight anonymous function syntax.

**Kris Brandow:** He pointed it out to us. I don't know if he made the actual proposal though.

**Natalie Pistunovich:** Definitely worth--

**Kris Brandow:** He sent it to us.

**Natalie Pistunovich:** ...checking again before I'm saying it wrong. Thank you for pointing this out. Maybe this can be corrected afterwards. This proposal seems back in the milieu. Let's chat about that in our remaining five minutes.

**Ian Lopshire:** Yes. I think this proposal is getting a lot of conversation, because it's somewhat polarizing. Would you agree with that? Some people love it, some people hate it.

**Natalie Pistunovich:** \[36:13\] That's why it's made our way to be our somewhat of an unpopular opinion...

**Ian Lopshire:** Yeah.

**Natalie Pistunovich:** ...for today, given it's all hosts today.

Ian Lopshire:: Personally, I am a fan.

**Kris Brandow:** I mean, especially the part that Robert Griesemer has done in the last 12 days - I love this. I think before I would've been kind of against it, but I think, once again, used appropriately, used judiciously, I think this could help clean up a lot of code. There's definitely some things I've done before where I'm just like "Okay, I'm writing all of this boilerplate function, definition stuff, and I have like-- the actual boilerplate makes up more of the function than the actual functiony parts of the function."

**Ian Lopshire:** Should we take a second and explain what this proposal actually is?

**Kris Brandow:** Yes.

**Natalie Pistunovich:** Yes. And mention - thanks to Bill's feedback - that this is an old feature request that recently resurfaced. Yeah.

**Kris Brandow:** Yes. So basically, Robert Griesemer, in this issue, which we'll have linked, brought up this idea of having basically a more concise way to define functions. Similar to the fat arrow syntax that is in JavaScript, he basically gave us like two different examples of how to do this... Mostly either \[unintelligible 00:37:21.04\] the func keyword and having a fat arrow, or keeping the func keyword and removing parentheses around the arguments. And then also as a secondary part that's not something you have to do as part of this, but is related, is removing return, or not having to specify return, if there's a single value that's being returned from one of these more compact functions.

**Ian Lopshire:** I am 100% against ever having implicit returns. There should never be a return without the return keyword, even in these small, anonymous functions. I would say no to this proposal all the way, just on that single point.

**Kris Brandow:** Yeah. Maybe this will be an unpopular opinion because-- I don't know. When I look at the examples and I look at that code, I can obviously see, maybe if it was also just like, if it's multiline, you're not allowed to not specify the return... But when I look at this compact code, I'm like, "Oh, but this is like... It gets to the point so much quicker." I understand it so much easier. But I can also see how it could be like, just like you shouldn't have naked returns where you don't specify the return values because you've defined them in a function definition, I think that if you have a longer, like more than one line, or more than maybe a couple lines, you should have to specify the return.

So I think that's one of the things-- I don't know if it's... I think -- yeah, in JavaScript, you don't have to specify the return. It'll just return the last thing, and that's always confusing to me, because I'm just like, "Where is this return value?" I'm like, "Oh, right, it just does it magically for you."

**Ian Lopshire:** There's some talk in the issue on GitHub about changing the syntax, so you can just not specify the function parameter types or return types, just the names instead. I think that actually goes quite a ways to get there. We already allow for some of the generic stuff. You can omit generic types, and all this. So I'm not sure, it takes away too much from understanding, but I do think it's a slippery slope here, right? We've got to be careful not to make things opaque.

**Natalie Pistunovich:** To summarize this, I want to read yet another message from Bill, which I really like, "Let's not make things easy to do. Let's focus on making things easy to understand." This circles back very nicely to our previous conversation about simplicity and how nice it is in Go. I like that about the language. It's great to keep, for sure.

Let's say we had the tune for unpopular opinion now... We kind of discussed that, although it was quite popular, but there's all sorts of opinions out there. And this has been an interesting hour. I think it's first time we tried this format, at least from what I know, that we're kind of not going for a topic and discussing it, but actually just going over what happened recently.

**Kris Brandow:** \[40:02\] I feel like we should have more of these nice little "Let's do some coverage of Go News and talk about things." Although, hopefully, in the future, it's not me being on a soapbox.

**Natalie Pistunovich:** So what is a soapbox, for those who still reside outside of the US?

**Kris Brandow:** A soapbox, quite literally, it's an actual crate they use to ship soap in, but the terminology comes from when you used to have a little town square, where someone wanted to give a speech--

**Natalie Pistunovich:** Hmm... Like a Hyde park thing.

**Kris Brandow:** ...they would put a soapbox down and stand on top of it, so they could be above everybody else, so everybody could hear them in the crowd. So it's like when you get up on a soapbox, it's kind of like preaching, or basically talking to a gathering of people.

**Natalie Pistunovich:** Lots of learnings in today's episode. Thank you.

**Kris Brandow:** Yeah. I like the diversity of this panel too, because it's like, we've got you, who's not in the US and has never lived in the US, so you're not in tune with this stuff... And then we've got two people from the US.

**Natalie Pistunovich:** Although I said I do speak some American, but... Nope, not enough.

**Kris Brandow:** \[laughs\] There's a lot of American to learn. I think there's some people in America that don't speak American, so...

**Natalie Pistunovich:** Kris and Ian and everybody who listened, thank you very much for joining. It was a great conversation, and see you next week.

**Break:** \[41:18\]

**Kris Brandow:** There was another thing that I wanted to point out about this, and it's a slight criticism, I guess, of the-- I guess it was the criticism of the way they were framing the conference in Florida, right? And it's around one key phrase that I think a lot of people don't understand as a dog whistle, but it is a dog whistle, and it's the phrase "family-friendly." I've seen it pop up a bunch of times in the Go community. So I want to have a little bit of a conversation around that, because it's one of those diversity inclusion things that I think is super important that we actually talk about. But for those listeners who don't know, family-friendly, in the United States, is a conservative dog whistle. And if you don't what a dog whistle is, it's basically a way of saying something that seems innocent, but is a way of basically crying out or rallying people that support you. It's a dog whistle for the conservatives that is basically anti-queer, anti-trans. It's the justification that a lot of states legislatures have used for bathroom bills and for even things like the "Don't say, gay" Bill, in Florida. So it's kind of startling to see that in a post about, "We're trying to be more inclusive. We're trying to be more welcoming of people", but then to just have that kind of anti-queer thing sticking in the middle of it; it's just kind of like, "Whoa, okay, this is sending some mixed signals here, some mixed messaging." So I don't know, I'd like to chat about that a little bit, and get maybe your perspective, Natalie, as someone who's not in the US, who's someone that probably hasn't heard this stuff before.

**Natalie Pistunovich:** Yeah. We were just briefly chatting before the beginning of this episode, and when this came up, I told you, Kris, I was surprised to learn that. Definitely, as much as I interact with the US in my free time and in my professional time, somehow this went over my head, this term being signaling something like this. And I was also sharing with you that we were-- GopherCon Europe, we're planning to have the space and set up that is accommodating for families, accommodating for people to bring one partner, whatever gender it's from, multiple partners, kids, and so on. Probably now where we're talking about this between us in the organizers team as making this a family-friendly conference. So I learned something today, thank you. What is a better word to use to describe this type of setup?

**Kris Brandow:** \[44:27\] I feel like either just pointing out that childcare is available, I think is one way of doing it, like "Hey, we have childcare", or just being child-friendly, or kids are welcome or something like that. Just make it actually about the thing that you're trying to include. Because you're trying to say, "Hey, if you have kids and you don't want to leave your partner at home with the kids, because that's a lot of burden on them, just bring them with you and we'll have spaces available to make it so it doesn't just feel like, "Oh, hey, you're just in this space with your kids now, and you don't get to enjoy this space."

So I think it's like you're thinking about people that have that type of family situation and wanting to welcome them into the space. So I think just pointing out like "Kid-friendly" or "Kids are welcome" is a good stepping stone there, or a good first step.

I'd love it if we could finally get to a place - this is along down the road - where it's just known that "Yeah, we're going to have childcare available because people have kids. So what are they supposed to do?" There's lots of single parents as well who have children. So it's like, are they just not allowed to come to conferences because they're a single parent? No, that's silly. So we should have these spaces, in general, for people.

So yeah, I think if I read something else like, "Oh, kids are welcome", I think that would be positive. I think it's like a tough balance at the end of the day as well though, because whenever you choose to put the spotlight on something, you'll always unintentionally move the spotlight away from other things. So I can see some queer people feeling like, "Oh, this doesn't feel as inclusive to me", or still feeling like it's a dog whistle of saying "Oh, well this is a space where I can't be my whole self, because there will be children around." So there's always this weird, delicate balance that needs to be struck. But I think in general, it is good to have spaces to have childcare and have those sorts of things, because it is necessary for a large swath of the population.

**Natalie Pistunovich:** I have multiple follow-up questions.

**Kris Brandow:** Go for it. \[laughter\]

**Natalie Pistunovich:** It's probably a very safe assumption to say that this word or this phrase in the announcement of GopherCon does not mean that, in my opinion. But I am not part of the queer community. What do you think? My opinion here is only a small thing, not being part of that, and this is not signaling to me.

**Kris Brandow:** Yeah. It's definitely not intentional. I know the people that organize GopherCon. I've been a conference chair before. I do not think in any way that this was an intentional "We're trying to exclude--" I mean, it'd be stupid if it was anyway, because they're saying, "We're moving out of Florida because of this bill that's anti-queer." So I know they're not intentionally trying to do it... Which is good, but I think it's that unintentional side effect that these types of things tend to have on people that we have to start watching out for.

At the end of the day, being inclusive is more than just trying and more of what your intentions are. It's what your impact is at the end of the day as well, so avoiding these types of things. There was a similar problem - it might still be; I haven't checked up on it recently... But with the Gopher Slack, where there was this real name policy, which is also another anti-queer, anti-trans signal that happens, because a lot of people that are trans don't go by their "real name" or whatever you would call-- whatever is a real name.

**Natalie Pistunovich:** And then what does real name even mean?

**Kris Brandow:** Exactly. So it's like those policies are also like dog whistles to conservatives saying, "Oh, yeah, yeah, you're welcome here. We're trying to make sure that the trans people aren't in this space, because we make it more difficult for them to exist in it." It's always a difficult thing, because I know at the end of the day, these people, their thoughts are in the right place. Their intentions are in the right place. It's just making sure that we have the impact, at the end of the day, that matches those intentions.

\[48:07\] Just calling things like this out a little bit, or as some people calling in... This isn't meant to be like attacking GopherCon or anything obviously, or Gopher Slack, but just pointing out to people like, "Hey, you should probably avoid these types of phrases in the future, and you should probably get some more queer representation in the room when you're crafting these types of things as well." Because I don't know if there's many queer people that would've saw the words family-friendly for a conference base in the US and would not have raised their hand and said, "Hi, this is a problematic phrase. We should probably use something else."

**Natalie Pistunovich:** Yeah. Another interesting thing to discuss is when you say-- I don't know how to phrase that... The dry meaning of family-friendly - does it mean friendly for families that don't have kids? Can you bring a partner, or if you have multiple, can you bring your partners? Is that part of what people would have in mind when saying that? And I can share that our thoughts in organizing GopherCon Europe is actually giving something like-- we have not done this yet. We're still considering. And it would be interesting to hear what people think, but what we're considering is giving sort of a discounted ticket for partners who want to travel with their partners who do want to attend, but the partner who's not interested in going will not be attending the conference talks, will have some dedicated space with WIFI so you can sit and have lunch with your partner, and then you both split on-- like you work in the same space with a person, but you only meet for coffee and lunch.

**Kris Brandow:** Yeah.

**Natalie Pistunovich:** Does that include as a family thing?

**Kris Brandow:** That's amazing. I hope you guys actually do that, because that would be so awesome. But I don't think in many people's minds in the US, when you say family-friendly, that is what comes up. If I were to say-- even pushing away the conservative stuff, if I hear the term family-friendly, I'm specifically thinking about kids being included in this, right? Because I think in the US, there's this kind of thought that a family-- it's like, oh, if you just have a partner, you're like a couple; you're not really a family yet. You're a family once you have kids. And obviously, I do not personally agree with that definition of family, but I think that's the thing that gets bashed into our minds growing up in the US, it's like "Well, you're a family once you have kids, once you have grandkids, once you have this kind of bigger unit that's more than just you and a single partner."

And I think when it comes to the polyamorous community, where there are multiple partners and all different types of defined relationships, I don't know if there's anybody in the US that would be like, "Yes, when we say family-friendly, we mean people that are poly." I just don't think that would be something that those people would believe or think. That shouldn't be included, but I think that they wouldn't see that under the umbrella of family-friendly.

**Natalie Pistunovich:** Ian, what are your thoughts?

**Ian Lopshire:** Yeah. I mean, I just think, especially in the United States, people have spent a lot of money over the last couple decades promoting the idea that a family is a man, a woman and kids. I think that's part of the problem with the phrase family-friendly, right? It's that it alludes to this specific ideal of what some people think life should be. And so, yeah, I don't think when you say family-friendly, it includes partners or polyamorous people; or at least I don't think most people will think of that.

**Kris Brandow:** I don't even know if it includes single parents with kids really, because that's another thing in the US - it's just not really considered a family to a portion of the country. And I think that's why this phrase is such an awkward one.

I have another suggestion as well, if you'd like it - just try maybe just listing out these benefits that you have in a prominent place, of saying, "Hey, we offer discounted tickets for partners, and you get these benefits." Just make it prominent, without necessarily having to wrap it in some phrasing. So I think that's where you get into the struggles of trying to wrap things in phrasing, and that's where you run into a lot of these like, "Oh, well, these words make sense when you just kind of put them together", like "Oh, we want this to be friendly toward families." But it's like, "Oh, no, there's all this underlying historical terminology that we have to go deal with as a result of that." So it's just like, "Oh, no, here's some of the benefits", call it out, like "Hey, traveling with a partner or partners? Here's some benefits that might be useful to them." Like, "Here's a discounted ticket and this is what they get for it."

**Natalie Pistunovich:** \[52:22\] If/when you are in a relationship, would you find it interesting to traveling with a partner who is not interested in Go?

**Kris Brandow:** I'll defer to Ian.

**Ian Lopshire:** No, I think so... Especially if it's like in Chicago, I think a city that is popular for tourism - yeah, of course; especially if you're going to spend time before--

**Natalie Pistunovich:** Or any other conference also.

**Ian Lopshire:** Yeah, exactly. But if you're spending time before and after, I think that's a great option. But also, just during the conference, I think it's a great option. I would consider it.

**Natalie Pistunovich:** You work in different companies. Sometimes your companies are sponsoring at those conferences, including different GopherCons. How do you see companies support such a decision? Do you expect most sponsors to say, "Yes, we support that. We will bear additional costs with you. We will back out. We'll just stay with whatever we confirmed we'll do, you handle the additional costs"? What do we expect from the different sponsors to go about such a decision? Not about your employer in general, about-- I don't know whether your employer is even a sponsor. Generally, what do we expect from sponsors as people who work in companies who generally support the community?

**Kris Brandow:** I mean, I think generally most companies are going to sponsor something that GopherCon wouldn't have a problem with this type of benefit or something. I mean, at least I hope they wouldn't. I think if they do have a problem, I think that's like a signal that, hey, maybe this is a sponsor that you might not want to have, and that's another-- once again, when you want to be inclusive, when you want to grow a diverse community, there are sacrifices that have to be made, and sometimes that's leaving money on the table from places that are not going to be supportive of the things that you value, right? So if you do value making it known that community members that have, say, multiple partners are welcome at the conference, and you have a sponsor that's like, "Well, I don't want to support that, so I'm not going to give you money for that", that's a choice you have to make. Do you actually support that, or were you just saying you support it, until it came push came to shove and you're like, "Well, I have to go leave this money on the table", so now it's like, "Okay, I actually don't support this type of thing"?

So I think truly if you as a conference organizer - do support this sort of thing? And I think it applies broadly to the Go community as well, on things that aren't -- anytime it comes with money; even deciding to work at a company... It's like, when it comes down to money, that's where you really see what your values are at the end of the day. So it's like, are you willing to just let that money walk out the door and support this thing, or have to figure out more logistics? Because yeah, there is associated costs with-- if you really are giving someone use of a space, that's another room or another space you have to get, there's more cost for Wi-Fi, since you have more people on it. Obviously, if you're giving them food, that's like half the cost of your ticket right there, so that's a substantial cost. So it's like there is cost associated with doing this sort of thing.

I hope that with the sponsors of things like GopherCon or GopherCon Europe, that they would not have a problem with calling out this type of arrangement. But yeah, I don't know. But yeah, if it was me personally, like if I was organizing a conference and a sponsor said, "Hey, I noticed that you have this benefit for people's partners", and having this discounted ticket for them to use the Wi-Fi and get some food, I think it's fine if you say your partner or your spouse, but if you allude to the fact they might have multiple partners, "I'm not okay with this", I'd say, "Okay, well, here's your money back. Have a nice day." I don't want to be doing business with someone that's drawing those types of lines around-- at the end of the day, what types of relationships are conference attendees allowed to be in? Why should you, as a sponsor, get to dictate that sort of thing? So yeah, I guess that's my rambly point of view on that.

**Natalie Pistunovich:** It's particularly relevant because tomorrow begins the Pride month.

**Kris Brandow:** \[56:04\] Yes. Or as I like to call it, queer new year. \[laughter\] We can't be contained to a month, so this is like the beginning of it, especially in the US too, because I think people have this assumption that's like, "Hey, Pride month is June, and there's Pride in June." I'm like, "No, no, no. There's Prides in June, July, August, September, October, November." I don't know if there's any in December, but there's certainly some in February. So it really is like the beginning. It's like queer new year. And then we hibernate for the spring months and then we come back and the same year again. But yeah, it's coming up. Queer new year is here. We have to prepare ourselves for the rainbow washing that will happen. I'm already mentally fortifying myself to it. For those of you who don't know, rainbow washing is essentially like whitewashing, but for queerness.

**Natalie Pistunovich:** And for those who don't know what's whitewashing?

**Kris Brandow:** So whitewashing is-- I guess it's easiest to describe it with an example, something that prominently happens in Hollywood, where you're casting a movie where the cast should be predominantly Asian, yet somehow, all of the main characters are white people. That's whitewashing. So it's just like, "Oh, well, we've put white actors and we're just pretending as if they are Asian, or of Asian descent, or Middle Eastern, or whatever."

The same thing usually happens where all these companies that very much do not support queer rights and any other month of the year comes around and they're just like, "Hey, we like queer people. We're going to celebrate you now. Here's a bunch of discounts." And then there's this perfect-- I don't know if it started on TikTok or Instagram or wherever, but it's just this iconic thing that comes around every year, where it's just like this person pretending to do an ad, and it just starts with, "Hi, gay" and then it goes into all this other stuff. I hope we can find it and link it, because it's just absolutely amazing... But it perfectly describes what it feels like to be a queer person in June, because it really is just like an assault of all of these companies that are like, "I know that you support-- you are against same-sex marriage, and yet you're coming out and you're putting a float in the parade. Thanks for the money now, but how about you support us all year long?"

**Natalie Pistunovich:** So maybe another follow -up question... For companies who do think how to celebrate queer new year, what would be a better thing to do, other than just changing your logo to something within a Pride flag?

**Kris Brandow:** There's always the monetary support you can give to organizations that help queer people, especially queer youth, especially trans youth, people in danger, so things like donating to Trevor Project are immensely helpful.

**Natalie Pistunovich:** We'll add links at the end of the notes for those who listen.

**Kris Brandow:** But yeah, I think it's just like, if you're doing it so that you get recognition for it, I think you're just doing it for the wrong reasons, and I don't know if there's anything at the end of the day that will help fix that or repair that. I don't know.

I remember I was working at one company and there was this thing that happened that was basically supporting anti-queer organizations, and a lot of employees were like, "We don't feel great about this." And one employee was like, "Hey, how about we take all of the money we get from these anti-queer organizations and we actually just donated it to the Trevor Project, or donate it to something?" And they were told no. And it's like, "Well, the company can't do that", and when asked why, it was like, "Well, we don't know how to market this." And we're like, "But that's not the reason that you would do this thing. You would do this thing because it's for the employees, for the people that are working here to know that the company does actually care and value them." So I think that's also a sort of thing - if you're going after it just to, at the end of the day, be in this like, "Hey, we're getting recognition and we're making money off of it", I think that's the wrong direction.

**Natalie Pistunovich:** Yeah.

**Kris Brandow:** I mean, we're going to have to retitle this episode like "Gay Time" or something, because this--

\[laughter\]

**Natalie Pistunovich:** Special edition for Queer New Year.

**Kris Brandow:** Yes, exactly. Happy Queer New Year, everybody out there. We'll put lots of rainbows around it.

**Natalie Pistunovich:** Can you somehow-- I'm missing like one or two links, but something about generics and being gender fluid...

**Kris Brandow:** Oh...

**Natalie Pistunovich:** There must be something there, right? \[laughs\] It fits all sorts of things.

**Kris Brandow:** Generics, a new feature rolled out for our generically-gendered friends out there. It's like, your gender doesn't have to be static. It can be whatever you want it to be.

**Natalie Pistunovich:** And it's fine if your decision is different from the decision of your language of choice.

**Kris Brandow:** Okay, we're down a rabbit hole now. \[laughter\] We're drinking tea with the Mad Hatters...
