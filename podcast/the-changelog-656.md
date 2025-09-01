**Jerod Santo:** We are here with Travis Oliphant, creator of NumPy and one of the founding contributors to SciPy, longtime member of the Python community, and now a documentary star. You're in a documentary, Travis. How cool is that?

**Adam Stacoviak:** Wow.

**Travis Oliphant:** Wild. Yeah, actually, they did a great job. It's impressive what a good media creator can produce.

**Jerod Santo:** Yeah, it's really cool. The Python documentary coming out soon. The trailer's out there; if you're listening to this and you can't find the entire thing, the entire thing will be out soon. But I just think it's a strange world we live in, where like a bunch of nerds who write programming languages are the subjects of documentary... And there's no scandal, there's not murder or anything interesting...

**Adam Stacoviak:** Not yet.

**Jerod Santo:** It's just like, you know, Python.

**Travis Oliphant:** There are some interesting things. There's some interesting things you can talk about... We can get into some of that... \[laughs\]

**Jerod Santo:** Yeah, there's some drama, and stuff? What kind of interesting stuff has happened?

**Travis Oliphant:** There's drama, there's people... Well, people have different ideas about how communities should be run, and about how projects should be governed, and there's different kind of scandals... We had the Donglegate at one PyCon that probably didn't make the documentary, because nobody wants to talk about it anymore... Which is totally fine.

**Jerod Santo:** \[laughs\] Yeah.

**Travis Oliphant:** We had the introductions of some really -- I mean, it's people. And there's some awesome people, but then people end up, rubbing each other the wrong way a little bit. And then how do you deal with that?

**Jerod Santo:** Well, like iron sharpening iron, that's how it works. And it hurts to do that work, but it betters both sides, hopefully, for the best...

**Travis Oliphant:** Hopefully. And there's definitely ways to do it.

**Jerod Santo:** There was the Python 2, Python 3 transition... I'm trying to think of the dramas. I don't know what Donglegate was.

**Travis Oliphant:** Well, that was just a PyCon -- let's call it codes of conduct.

**Jerod Santo:** Yeah, okay, I can guess what that was.

**Travis Oliphant:** You can guess what it is. Codes of conduct and how to appropriately have public events with lots of different diverse people coming, and how to then -- just managing that, and managing expectations, and helping people feel comfortable, and making a safe space for lots of people. Then as you're making a safe space for lots of people, making sure everybody is also still welcome. Because there's definitely people that end up not coming, there's the whole people being -- I read some of the original contributors, we get a little older, and then maybe we're not as... We don't choose our words well enough, and so ultimately end up maybe even offending somebody inadvertently, to kind of the style of engagement being unacceptable anymore. So there's definitely some of that that's going on. I would put that under the -- that's been managed pretty well, but I talked to a lot of people, and there's some people who are feeling less welcome in the community than they used to... And that's something that maybe is okay, or maybe it's like, well, there's room for other communities. There's places to have -- I call Python an ecosystem at this point. It's not just one community.

**Jerod Santo:** Yeah, I was gonna say, it's so big that it can't be a community even.

**Travis Oliphant:** No, it can't be a single community. And actually, that's one of the things for the major leadership of the Python Software Foundation, or the ecosystem, facilitators understand... I think that's one of the primary things I could articulate this under, is just as you get so big, you're actually encompassing many nation states, respectively - how do you be the UN, as opposed to an organization that's running one country, county, city? The skills and what you have to do is different. And how do you do that without effectively making it feel like you're a bully, or a totalitarian for other groups? Because that's what ends up happening, is some people feel unwelcome. Not because we're intending to, but just because, well, we're limited. Every human is limited, and if you have an organization, it still has to be run. People have to do work. They have to do stuff. And if the stuff they do isn't feeling inclusive enough for other people, then those people start to feel annoyed.

So what are the patterns? And Python is definitely big enough for that. And you'll see issues on this over and over again, whether it be "The documentary didn't cover this group enough." I'm sure we'll get that. I'm sure it's true. The documentary -- I'm just excited to see anything talked about that emphasized a couple of great points about Python, that it's been such a great group of people, who have tried to bring their best foot forward, and tried to do what's best for each other, and check ego at the door... Not perfectly, of course, because none of us can. But try, and try to be inclusive, and try to bring other people in, try to manage the growth and different mindsets that are there.

\[00:08:06.11\] I understood very, very well the difference between the, let's call it the developer mindset, the person who's using Python to build a website, and then from there a system prompt, or a script and operating system, or build an event programming system... Versus somebody who's using this to run a scientific experiment, or to do math, or to run physics systems, and now evolving into data science and AI... The kinds of problems they have and the needs they have are different than somebody building a website, or a database, or a Raspberry Pi. Or a web app. All great, all wonderful. There's no judgment about which is more important. It's just simply different. And then as they come together, how do you have a language support all of these use cases? Great question. I think it's challenging.

But the community is awesome. I think one thing that comes out in the documentary that's very true is people come for the language and stay for the community. And that has to do with kind of -- you know, the original group, Guido, his original personality and approach he took to engaging with people, and the group of people that came around him in the early days, and then how that spawned multiple subgroups... Even from the very early days, they had these SIGs, special interest groups they created, just to allow other communities to form, instead of just all one mailing list, in other places. "Hey, you could talk about that problem over here and not be -- and everybody wouldn't have to chime in on that problem if they weren't interested." And so people have these special interest groups. And that special interest group is the matrix SIG, actually. They ended up giving rise to Numeric, and then NumPy, and then the SciPy ecosystem. It came out of that special interest group. And then you had other special interest groups that gave rise to Django, and FastAPI. And then there's packaging, that's its own story, that we can go on about, because there's still challenges there.

So I think that's one of the key things to understand. But each of those interest groups was infused with at least a general sense of "Hey, here's how you treat people. Let's avoid kind of the --" Even though we want to make sure excellence is achieved, and people do really good work, and not just lowest common denominator code gets in, it's still -- how do you make it welcoming? How do you make it so there's new people that don't feel scared away because they're not capable enough, or they feel they're not capable enough? How do you make it so that they feel welcome, but then also you respect the quality of the code, and that people are attentive to that? Sometimes, in some areas, I shouldn't be contributing code. The code I write should be tossed out. But I appreciate being listened to... At least if somebody tells me "This is why." It's always better than just being ignored.

So I think some of those elements of the Python community have been helpful. Not perfect. Each of these communities, in the Jupyter community, the notebooks, the DataFrame community, Pandas emerged from kind of the SciPy ecosystem... SciPy was an ecosystem that gave rise to data science, AI, scientific computing... And each of those kind of have developed their own stories. Jupyter -- one of the things we did early was... Not early. In 2012 we created a nonprofit called NumFocus. So I was heavily involved in creating that nonprofit NumFocus. And the purpose was because I wrote NumPy, and it had no home, except in a company. I didn't want, and the community didn't want a single company to own the domain and own the IP of NumPy. It needed to be a community-driven thing. So where's that going to live? But I can go back in the history before we get ahead of ourselves, if you want... So I'd love to kind of -- I can talk about the different things that you think are interesting.

**Jerod Santo:** For sure. Adam, where would you like this to go?

**Adam Stacoviak:** I don't want to dwell on Donglegate, but I do recall all that stuff. \[laughter\]

**Jerod Santo:** ...but he's going to.

**Adam Stacoviak:** \[00:11:53.00\] I think every community has got a version of that. I think what I'm going to say to you is don't apologize, because it's going to happen... Not that we should allow it to happen, but we've all got growth. And growth matures with scars from previous battle wounds, whatever it might be... And I think it's all about trajectory, which is probably why Python succeeded so well. Not just because it's a great language, but because like you said, you came from the language, but you stayed for the community. You have to have a way to bounce back from things like that, and handle things well.

**Travis Oliphant:** Yeah, agree.

**Adam Stacoviak:** And I think we've known Brett Cannon for years, we've never met Guido, unfortunately... Guido, come on the pod, man.

**Jerod Santo:** Come on, man.

**Travis Oliphant:** Yeah. I know he's doing less of that... I actually asked him specifically. He's like "Oh, I don't --"

**Jerod Santo:** Oh, Brett's asked him for us. It's a longstanding thing. We have our own drama around here, you know?

**Travis Oliphant:** Well, Guido's a great guy, but he definitely has a lot of people asking this.

**Jerod Santo:** Oh, for sure. Yeah, for sure.

**Travis Oliphant:** I appreciate him.

**Jerod Santo:** So NumPy... Take us back to the language for you. Like, what were you doing before that? What brought you to Python? Why'd you like it, why'd you pick it for NumPy etc.

**Travis Oliphant:** Yeah, great question. So I am a scientist. I was an electrical engineering student who went to the Mayo Clinic to study medicine because I wanted to help diagnose cancer and diabetes, instead of make bombs. I loved applied math, I loved electromagnetism, and I loved signal processing. And then I had this opportunity to go to the Mayo Clinic to study. And initially, when I was a master's student, I was measuring wind speed -- sorry, I was measuring backscatter radiation from the planet in satellites. It's called satellite scatterometry. And then from the information from that signal from the satellite, you could infer wind speed. You could also infer other things like vegetation coverage, ice coverage... In the lab I was in, we were doing that kind of Earth observation at the time.

I was using -- I was on a VAX/VMS, actually, back in the day... We were using -- I was programming C, Fortran, MATLAB, and then some Perl. So I just started to pull out Perl. And my experience with Perl - back in '94, '96... I would write it, and like "Okay, this is pretty cool. I can do the scripting, I can write some code..." But then I'd come back three months later, a year later, and I had no idea what I'd written. It was write once, read never. And very interesting ideas were there, and it was cool, but that was my experience. So as a domain expert who was using coding, I couldn't use it, because I couldn't understand what I'd written in the past.

So fast-forward to 97, I'm at the Mayo Clinic doing work on magnetic resonance elastography, trying to measure -- I'd take a big MRI image and look at the phase of that image to infer motion. And from that motion, you could see kind of a propagating wave inside of a tissue. You could then try to figure out the elasticity, how stiff it is, and make a picture of elasticity. So that was the problem I was solving, and I needed to find derivatives, and compute them on essentially four or five dimensional datasets... So big datasets.

And I was using MATLAB a bit, but I ran out of space, and I didn't have enough -- I couldn't change the precision well enough, so I was looking around for other ways to do this. Now, I could just write C code, but man, when I write C, I'm spending a lot of time on pointer arithmetic, and figuring out where memory references are... And I want to be thinking about my problem, which is "Here's my volume of data, and I want to do derivative calculation." So if I have to write that -- if every line is like 10 lines of C, I lose track in my mind of what I'm doing very quickly.

So that's what a high-level language did, is give me a chance to be in my domain, writing some scripting or high-level conversations, but I needed it to be fast, I needed it to be efficient. So I was looking around for stuff, ways to do that in 1996, 1997, and I came across Python. Python was pretty new. It had been around for just a little bit, and it had an array library called numeric, that I learned later had been written by Jim Hugunin, out of this matrix SIG, which was formed in '94. And the language itself was written in '91, but I came to it about '97.

\[00:15:59.06\] And it was still early, still nascent, kind of this thing on the net that a few people were doing... It wasn't being broadcast or promoted by anybody but the people who founded it, and then started to share their experiences. So I found it, I found "Oh, this language actually feels familiar. It's like high-level enough that I don't have to -- the syntax doesn't get in my way... I'm not worried about point chasing pointers..." Just a straightforward language that also can be extended. So if I had C code that did something fast, it wasn't like "Ah, good luck. Run that in a different process." It was like "That's fine. You can actually load that in a shared library, into this language." So you could extend it. And Numeric had already done that to make an array object. So if Numeric hadn't existed, I would not have used it. I would have been using something else, very likely.

So Jim Hugunin and the matrix SIG, Konrad Hinsen, Paul Dubois - they were hugely influential in making that happen. And they don't get mentioned a lot anymore, but they were the OGs of array computing in Python. And I'm leaving off names. David Asher... I mean, you look at the -- there's a NumPy book... What I did early in probably about '98 is I made a chapter in the first numeric documentation that particularly covered how the C API worked. If you're a C developer, how do you use Numeric and make an extension using that? So that's what I became really kind of known for. And what really my super-skill was blending Python and low-level languages, and releasing libraries that could do that. That's essentially what I learned to do as a grad student at the Mayo Clinic. So fairly straightforward, very specific...

I had the opposite experience from Perl, because I started in '97, I wrote some scripts to do some things... Fast-forward a year, in '98, I come back to the language, "Oh, I did that script to load those data and do this math. And -- wait, I understand what I did. I can still read this. This still makes sense to me." And so then I was kind of hooked. I went "Oh, this can work then."

And so '98 was the start of my journey, and then '98, '99 -- SciPy was really created in '99. You can see on the mailing list, the early mailing list, they're posts from me probably every two months. I'm like "Here's a new module. Here's a new library. Try this out." And just posting a tarball - that's how we did it in those days. "Here's the mailing list, post a tarball on a web --" And you could go to my website. My website was really dumb. It just had a bunch of links, hyperlinks, not pretty at all... And you could download it. And they'd download it, and you'd unpack it, and then I would get patches. I'd get patch files. People started to send me patch files. And I went "Oh, this is cool. Someone from anywhere in the world is sending me code. Yeah, that's better. Yeah, that's cool." And then I decided to adapt or not adapt it.

So I did that for about seven different modules between '98 and '99. And then a few other people started the same thing. One of the guys actually helped me -- he saw what I was doing, because the modules I was writing, it's things like order differential equation solving, integration, optimization. It's things I needed for my research, so I'm like "Oh, where's the library for that? Okay, well, here's some Fortran code that does it." Then I'd just write the connector to Python to make that work, and then push that together in an extension module, release it, and then tell people how to install it. But to install it, you had to literally compile it yourself on your code.

So that's what I did... And then around me, people started to show up. People in the community started to show up. One person showed up and said "Oh, let me build a binary for Windows installers." And they did. They wrote a binary installer for the predecessor to SciPy called Multipack. And then somebody could just go to the website and click an exe they could install on their Windows box, and they could start using it. And that was huge, so all of a sudden, usage went up about 100 fold.

**Jerod Santo:** Yeah. I bet.

**Travis Oliphant:** And that's actually why a guy like me ended up starting a company like Anaconda, which is all about getting the tools in the hands of people easier. Because of that experience of like "Oh, yeah, that was a big deal. Helping people actually get this stuff installed and used easily is a big deal."

\[00:20:05.22\] So anyway, that's how I got started. It was that awareness of "Oh, this works." And then the enjoyment of engaging with community-driven development. I share it, people come, they add things to it, and you have this community on the mailing list... And I finally, I think, went to a Python conference - probably I think it was 2000 before I went to my first Python conference. I don't really remember. But then you go to a conference... And then we started our own SciPy conferences in 2001. So I'd gone to a Python conference before, then we started our own SciPy conference in 2001. And man, that just hooked me. You go and you have these engagements with people, and it's like "Yeah, these are my people. This is my crowd." And I had done a lot of scientific conferences. I'd gone and published papers, and gone to MRI Ultrasound conferences... And I liked them. They were also very interesting. But a lot of those conferences, it ends up with people competing for grants and for notoriety... And so there's not as much collaboration that goes on in those conferences. A little bit does, but a lot of times you give your presentation to an audience of people staring at you and not listening. And then you get some questions -- people would come up and the question would be something like "This is interesting, but have you seen my work?" \[laughter\] "Why didn't you incorporate my work?" And it's like "Well, okay... I didn't mean to offend you. I'm just--" So there's a lot of that going on.

In the Python conferences, I found a lot more collaboration. And part of it's because it's a practical problem, solving a problem for people, and they're using it, they're scratching their own itch, they're solving problems they have... And we just created a space for that to happen, and it was beautiful.

So the SciPy community inherit a lot from the Python community, but kind of organized its own story. So SciPy came around in 2001, when Eric Jones, and PR Peterson, and -- that's a separate story. But Eric Jones and PR Peterson have been also writing some modules, and they said "Hey, why don't we blend these together and make a single thing called SciPy that you could download?" And SciPy was really a distribution of a bunch of these modules in one place masquerading as a library. We spent a lot of work kind of making the library work, with different modules, and different... There wa optimization, there was integration, there was special functions... There was a lot of things so that somebody could use Python, instead of IDL, or MATLAB, or some other scientific computing tool.

And initially, we were trying to get like plotting in there, and a user interface in there, machine learning in there; statistics is in there... But eventually, what happened in the SciPy conferences, people started to go "Okay, this is cool. We really love this. But man, this is a big area. This is a big ecosystem." And having all these ecosystems trying to be managed from a single governing spot is going to be hard. Just bandwidth constraint. How are you going to decide what goes in and what stays out? And so there was an emergence of the SciKits. That happened at a SciPy conference in 2002, roughly. 2003. And they basically said "Oh, well, let's make a SciKit Learn, and a SciKit Image." And SciKit Learn became super-popular.

The SciKits as a concept - they sort of started to call themselves SciKit; SciKit Learn, SciKit Image... Then eventually, it became "Why do we have this extra layer of naming convention when we can just pick whatever name we want? ...and then just have different open source projects that are then just collaborating in terms of "Oh, we'll use a similar documentation style, or a similar pattern."

So that was a community I was deeply in the middle of from about 2000 until -- and I'm still in it, but really active from about 2000 to 2013 timeframe.

**Adam Stacoviak:** 13 years.

**Travis Oliphant:** That's independent of the Python community. And at about the time the SciPy was released, the pressure came. So then that was the SciPy story. And SciPy came before NumPy. A lot of people don't realize that, that my baby was SciPy.

\[00:23:59.26\] And that was this thing I was trying to make happen, is make Python able to be used for scientists, to do their work and publish their work, and have something that they didn't have to rely on a proprietary language for.

I'm not against proprietary code at all. I'm not. Actually, I think there's space for selling software. But I didn't want scientists who were publishing their work -- that needs to be a place, it's a commons. There's an open technology commons that needs to exist. And science producing papers should exist in that space. And as a scientist, I didn't want to have my scientific work be published and then a consumer of that come in and say "Oh, to use this you've got to buy this proprietary package, before you can even understand my science." Like, science should be reproducible from -- I didn't want to have behind licensing, and IP barriers.

I'm very much for open science, open production. I'm not a big fan of actually the -- I understand journals; they have to be funded, too. But I want papers to be available, easily accessible. So that was really what drove me in this direction, was the desire to be a scientist, and share. And then I started to do that with software. And then I learned a ton about how software works generally, beyond just doing scientific software. But that journey was because of my association with the Python community. Because I was a young scientist writing scientific research code, essentially, and then maybe some libraries, and learning about "Okay, data structures, and packaging systems, and algorithms, and high-level compilers" - that came later. And I became what I would call one of the ambassadors for science to the Python community. Some of the early ones were Konrad Hinsen, Jim Hugunin, Paul Dubois... They were the ones who helped Guido add key features to the language.

I go into this in the documentary - I don't know how much of it is going to be in the documentary when it comes out, but I talk a lot about that, about how critical it was for those early science ambassadors to the Python community to have a voice, to be able to be heard. Because Guido didn't always know why -- he wasn't himself deeply involved in scientific computing, but he was open to hearing the input. He was open to changing things, like "Okay, let's add extended slice syntax. Okay, let's add -- tuples can be constructed without formally creating the parentheses. You can create a tuple without just having the parentheses sitting there." And that was really critical for multi-index selection, and extended stride syntax enabled you to skip. If you had a big array and you wanted to skip elements evenly, you could represent that simply. Things like complex numbers. A lot of languages, they just say "Oh yeah, complex numbers are an implementation detail." Now, the problem is complex numbers are everywhere in science and engineering. They're so fundamental that really, when they're in the language, it matters. Otherwise you end up with 15 competing implementations of them and nobody can agree. So having them in the language meant that they were there from the beginning. So I likely wouldn't have jumped to Python if complex numbers hadn't been there.

And as I looked into it, how did that happen, it was Konrad Hinsen, specifically. Him and other people who joined in the community and said "Lovely language here, but we need a complex type." And then back and forth conversations with Guido, who said "Okay, well, what letter do we pick for the complex representation? I or J?" And the engineers won with the J.

So those early conversations - that was possible by what I'm calling like scientific ambassadors to the Python ecosystem. And there's actually been very few of them, unfortunately. We need more, honestly. I played a role -- we had the matrix operator added, finally. That was a missing element for many, many years. So that's a bit of drama, around how did matrix operator get added? And Nathaniel Smith made that happen, as an ambassador.

**Jerod Santo:** \[00:27:53.29\] What did he do? Sneak it into the repo at night, slip it in there? \[laughter\]

**Travis Oliphant:** No, no. Exactly, he didn't. So I'll tell you how it works. Like, you have to actually go into these communities, whether it's a Discord channel, a public discuss channel now... You spend hours and hours basically talking to people, helping them understand why it's important, and answering their questions. Because a lot of them are coming from a space of "I don't know why this is important, so therefore I'm negative about it."

**Jerod Santo:** Yeah...

**Travis Oliphant:** And as the language matures, of course, it gets harder and harder. Early on, the affect was "Okay, I don't know about this, but I'm a plus zero." So Python, this sort of story of negative one, negative zero, plus zero, plus one emerged. The early community said, "Okay, here's how we're going to vote on things." Plus one or minus one, but you can also do a plus zero, minus zero, which is kind of "I don't really care, but I'm leaning one way or the other", to help differentiate the different ways people might feel about it.

**Adam Stacoviak:** That's interesting.

**Travis Oliphant:** It is actually very -- it's very useful.

**Jerod Santo:** Yeah, I like that.

**Travis Oliphant:** A lot of people use that, actually, to help kind of navigate this... A lot of people paying attention, a lot of bike shed people, but like, who really cares? If you don't really care, why are we listening to your voice? Because you're there.

**Jerod Santo:** Well, plus zero. Yeah.

**Travis Oliphant:** Okay, plus zero. Great. That's good to know, but okay, let's figure out the plus ones versus the minus ones. Understand that dichotomy and see if there actually is a compromise somewhere. Maybe it's a misunderstanding... A lot of times it absolutely is. A lot of times it's a misunderstanding. We get so deep in our awareness of some thing that it's hard to be aware of another thing. I personally experienced that as a scientific ambassador coming to the Python ecosystem and getting some PEPs accepted.

So I became a Python core contributor by adding some Python enhancement proposals, and going through that work on a few fundamental cases. And that was great, it was exhilarating, but it was also difficult, because I was dealing with really smart people, with knowledge in areas I was weaker in, and I had to understand where they're coming from, and then respond so they would listen, and then understand how they needed to be communicated with, so they would be able to understand where I'm coming from.

So one of the things about NumPy -- so that's how I got involved. And then 2004-2005 timeframe... So this was the state of the world until 2004, 2005, with SciPy on top of Numeric, with a bunch of libraries people were installing... Usually, installation meant either build it yourself with a tarball, or rely on a guy named Christopher Gohlke, who was handling at that point probably several hundred windows.exe files on his own personal page. So there was no IPI, there was no -- like, if you want to install this stuff, you've got the source code you built from scratch yourself, or you installed from this exe page.

And one time - this is about 2000.... When did we have this conversation? 2013? 2012, 2013? I talked to Guido at a PyCon, and I was kind of just saying "So, okay, the packaging story - it's really bad." And he goes "Yeah, I don't really care about it." It's not something he really worried about or thought about, until later he did. But at the time he was like "Oh, if I have a package I need, I just put it in the standard library. If it's something I care about."

**Jerod Santo:** That's gotta be nice.

**Adam Stacoviak:** Because he is Guido.

**Travis Oliphant:** Yeah, exactly. That doesn't really work for everybody.

**Jerod Santo:** Exactly.

**Travis Oliphant:** So anyway, that's kind of illustrative of part of the problem is that that wasn't sort of tackled from the beginning, and we had a lot of challenges in terms of how do you -- we have this great language for getting into the head of the person who just wants to solve a problem, and then they can think about their problem instead of the syntax... And super-extensible. Like, I can actually take Fortran code and make it accessible in Python very quickly.

In fact, a guy named Pearu Peterson, who collaborated with me on SciPy, he wrote a tool called F2Py. F2Py would take Fortran code, analyze it, and automatically create the Python extension to allow that Fortran code to be called from Python easily. So he took what I was doing manually, because I was basically manually doing that on a bunch of Fortran code, and he looked and said "What are you doing? That's idiotic." And he basically built a tool to do that automatically.

**Jerod Santo:** Nice.

**Travis Oliphant:** \[00:32:11.19\] So he's far more of a computer developer than I am. I feel like I'm a integrator, an implementer, an agitator perhaps... You know, someone who can try to facilitate. And that's why it led to me doing more entrepreneurial activity than development activity over my career.

**Adam Stacoviak:** Interesting.

**Travis Oliphant:** But anyway, that's the story of SciPy. We can get into NumPy, if you'd like. Or if you have questions about the SciPy story, and the ambassador to Python, and kind of how did Python become a space where science is welcome.

**Adam Stacoviak:** I kind of have a question that may not be directly related to Python, but more of the era... Because Python and Ruby kind of came out roughly in the same space.

**Travis Oliphant:** Yes, they did.

**Adam Stacoviak:** And you said that you came for the language and stayed for the community. And I think that Ruby is just as welcoming as Python has been, to me personally... And I'm kind of curious, I've always been kind of curious why science-related folks gravitated towards Python, the language, and then even the community, versus Ruby...

**Travis Oliphant:** That's a great, great question.

**Adam Stacoviak:** ...because they seem both perfectly capable.

**Travis Oliphant:** Yeah, that's a great question. A lot of this is timing. I found about Ruby later, after I had already invested some in creating the SciPy ecosystem. And the new people essentially are just "Well, what's there already?" And like I said, I was there when Numeric already existed. With Ruby - where is the Numeric Ruby? Who wrote that? Who wrote a Numeric Ruby?

Ruby had a really, really good community around web apps... And their Ruby on Rails, for example - phenomenal story for building quality... In fact, they're way ahead of the Python community in terms of helping people build quality web applications on a Ruby backend. But there was no Numeric Ruby. Or if there was, it was very nascent. And so it's kind of that critical mass question. And I think part of it being -- I think part of it also was the language. I mean, Ruby - a lot of it was in Japan. And I don't remember the name exactly, but Mats, Matsaki, Matsa...

**Adam Stacoviak:** All I know is Matz. That's all I know.

**Jerod Santo:** We call him Matz.

**Travis Oliphant:** Yeah, I'll just call him Matz. Right. Perfect.

**Adam Stacoviak:** Matz. M-A-T-Z, Matz.

**Travis Oliphant:** Yes, yes. That's what I remember. So he was really talented. And the community in the United States around Ruby was in a couple of companies. I think what happened with Python is Python, because of this early cooperation impact from the Konrad Hinsen, the Jim Hugunin, the Paul Dubois, the David Ascher - that's what was needed for Ruby to really get that critical mass. And it didn't happen, for some reason or another. I don't know. Maybe it did. Maybe those people got tired quickly... Because it's kind of people in academic settings that were able to pull that off. Like, who's going to do this? It's going to be something like me, who's a grad student at the Mayo Clinic, who's got more time than money, and then kind of ambition than sense, to try to do stuff myself. And there were people like me, too. Eric Jones, a grad student at Duke University. Pearu Peterson was an academic. So it's kind of that academic mindset. Ruby did a good job of attracting the web app builder, but it didn't appeal to the science mind.

Syntax is part of it. I think what appealed to us on the Python side is it didn't have extraneous syntax. There's all these whitespace arguments. Well, the whitespace argument appealed to the scientists. Putting braces where you didn't need them, putting extra line noise, that principle that Guido had... It really made a difference for people like me, who were like "I don't want this extra line noise." Partly because of maybe the PTSD from the Perl experience. Perl had all kinds of special characters, you couldn't remember what they did. Now, Ruby's better, for sure. But I think that's a big part of it.

But honestly, I think the question would be "Why didn't the Numeric Ruby get written?" Because that's what was there in 1994, 1995. Or does Ruby have complex numbers? I don't think it does, last I checked.

\[00:36:04.18\] And a lot of computer scientists go "Yeah, who cares about complex numbers?" And that's typically what happens. Computer science is building a language, and then the scientist comes in, "Cool, can we add complex numbers?" And they go "You do it. It's on your own." It's like, "Well... Okay, thanks..." And then 15 people do it. And then there's like "Okay, which one am I using?" Who knows? There's an aspect of leadership from the center that is required to ensure that certain things get rooted.

Now, I can put a laundry list of things that didn't happen in the Python community, that I wish would have, that would have helped it even further... Packaging being one of them. Having a really strong packaging story, that's led from the early community, instead of like an afterthought later... I think macro -- a way to not execute code. Like, to pass on a back tick operator, or something that lets you put code that is not immediately executed. Like, delayed execution on code blocks. With Python, you can only do that if you use like the width operator, or you have to write a class, you have to write a function... Like, just being able to do that inline would have really helped in a lot of ways, a lot of places.

And then I would love to see extended slice syntax available to be used as an argument to a function, instead of only within the list operator. Sorry, that's just on top of my head...

**Jerod Santo:** Feature requests, yeah.

**Travis Oliphant:** A couple of feature requests that are really hard now to get in, because you've got such a massive community.

**Jerod Santo:** Yeah, you've gotta convince a lot of people.

**Travis Oliphant:** Yeah, you've gotta convince a lot of people.

**Jerod Santo:** So I looked it up while you were talking... Ruby has complex numbers, but not until 2007. So back when you were getting involved...

**Travis Oliphant:** There you go.

**Jerod Santo:** So a little bit late to that particular game, and probably because there wasn't demand for it. I mean, a lot of times you just build what people are asking for, or what you personally need. You're not gonna go out and say "You know what? This is something I don't care about, you know?"

**Travis Oliphant:** Correct.

**Jerod Santo:** So you need the people to show up and say "We want complex numbers." Then, Guido says "Okay, let's do it."

**Travis Oliphant:** Exactly. So it's a bit of a random walk.

**Jerod Santo:** Yeah. I mean, you don't know what's gonna be important.

**Travis Oliphant:** That's why I say it's because Konrad Hinsen showed up and found the language and said "Yeah, I want this", and started participating. And that wasn't driven by -- like, nobody budgeted for that, nobody articulated that. Conrad did.

**Jerod Santo:** Yeah.

**Travis Oliphant:** And then other people like that. Paul Dubois got involved. Then Jim Hugunin as a grad student - he was a master's degree student at MIT. He saw the matrix SIG, he saw someone built a matrix.py in Python, and he said "Huh... I'll try my hand at building an array object in Python." And he did. And it was good. It was like a really nice array object, with multi-dimensional arrays and some compute infrastructure. And he pushed that out there in '94, and that was the foundation of -- so that's what I would say, where was the Jim Hugunin? And then later, I came in and I felt like -- you know, I definitely added a lot, but I wouldn't even have been there if I hadn't been for Jim Hugunin and some of these early people that have come \[unintelligible 00:38:51.28\]

**Jerod Santo:** Snowballs.

**Travis Oliphant:** Snowballs, exactly. Yeah, NumPy came about because Numeric was there, and SciPy was -- that was my baby. I wanted SciPy to get usage, and adoption, and people... And more because I wanted collaborators. It wasn't so much the user that cared about, as I wanted collaborators. I like my people to jump in and help build some really good computing tools. I really got into loving the numeric computing solving science problems with computers well. That was a thing I really enjoyed.

So I wanted collaborators. That was for me the driver, was collaborators I could lean on. And then the Space Telescope Institute, Hubble. The people that shipped Hubble, they were starting to use Python, and they were using Numeric, and they're using SciPy modules... And they thought "I need a better array." They needed a better array; an array with more types, an array that handled memory a little better, that was faster in certain circumstances... They had a couple of needs. And we were talking about that early as 2000.

\[00:39:53.01\] So fast-forward two years, they started work on a project called NumArray, and they started to sponsor a project called NumArray and they started to build it, and they started to release it, probably 2003, 2004. So NumArray -- and it had some really good features. It was nice. It did some things that were better than Numeric did. And that's fine... Okay, you could use it optionally. And then, somebody released a medical imaging library called NDImage, and I was jealous, basically... \[laughs\] They released NDImage, and it worked for NumArray. And so NDImage had something called Morphology, and then N-Dimensional Convolution. They did a great job of implementing it. And it did it better than the N-D Convolution algorithm I'd written, that was in SciPy. But it used NumArray.

And so now there's SciPy, Numeric, and the NDImage library on NumArray, and the two communities were basically --

**Jerod Santo:** Competition.

**Travis Oliphant:** It was competition, but it wasn't collaborative either. If you were using Numeric, you had to copy your data over to a NumArray.

**Jerod Santo:** Division.

**Travis Oliphant:** And for a scientific programmer, you end up using memory tons. Because a whole other stream of thought would be "What about PyPy? What about the JIT compilers?" All that story. And we can get into that, because I ended up in the middle of that later. But in this point it was "Oh, how do I actually connect these two arrays?" And I have to copy it. And I'm already struggling with memory. I'm using gigabytes of memory and I can't use another gigabyte to put in a NumArray. So it was going to split the community and cause people the interoperability not to work very well. So that's the problem I set out to solve in writing NumPy.

**Break**: \[00:41:28.16\]

**Travis Oliphant:** So that's the problem I set out to solve in writing NumPy. And in 2005 I basically was a professor at BYU at the time, and I said "Ah, this is a problem... But who's going to solve it? Nobody's going to do this... Because it's complicated. And who knows enough to be able to do something like this?" So there was a semester -- a class fell through, and so I didn't have any teaching load, and so I said "Well, I'll just do this. I'll take the next three months and do this. Why not?"

**Jerod Santo:** Okay...

**Travis Oliphant:** "I've written a bunch of module for SciPy... I'll do this." That was in 2005.

**Jerod Santo:** So that was NumPy.

**Jerod Santo:** So that's where NumPy came from. That's where NumPy came from.

**Jerod Santo:** Okay.

**Travis Oliphant:** And a big part of the strategy was actually "Well, how do I get adoption? Well, let me go talk to Guido. Maybe we make NumPy and we put it into Python." So I started to talk to Guido around that time, around 2005, about "How do we make the Python community more aware of the NumPy ecosystem? And maybe by putting NumPy into Python itself." And I met with him about 2005, we talked about it... Decided against it initially, but that is where the idea of the buffer protocol and the memory view object came.

So the memory view object and the extended buffer protocol - there was one already, and we made a better one - that came because of those conversations. And I would say we got the data structure of NumPy into Python, if not the library.

**Jerod Santo:** Gotcha.

**Travis Oliphant:** \[00:44:14.25\] And that's how I became this deep embedded ambassador for a few years, probably about seven years. I did that for a while.

**Jerod Santo:** Did that solve the problem of this division and this competition?

**Travis Oliphant:** Yes. Yes, it solved the problem. It absolutely solved the problem. So NumPy was wildly successful; way more successful than I thought it would be, honestly. It blew me away. It was work. And I actually ended up losing my tenure track position at the university because I spent too much time on NumPy...

**Jerod Santo:** Oh, really?

**Travis Oliphant:** Yeah...

**Jerod Santo:** Now I know why you're an entrepreneur now.

**Travis Oliphant:** Exactly.

**Jerod Santo:** \[laughs\] \[unintelligible 00:44:45.13\]

**Travis Oliphant:** There's a deeper story to that, but it depends on which version of the story you want to hear... They're little soundbites and you never get to the full story. But it definitely had an impact on my academic career. But it was okay. It was something I really wanted to do.

**Jerod Santo:** Hey, you're a Python martyr. You know, you're a Python martyr. \[laughs\]

**Travis Oliphant:** A Python martyr, exactly. Exactly. Hey, if that helps people launch their careers, fine. Now what I do is I try to say, "Look, if I can be helpful to you to build a company, to build a Python organization, to build a project, I would love to help. Let me know. Because I've been so benefitting from other people as well... I want to help you do the same thing. Let me know if I can help." And that's what I do now. So it's a long history of all kinds of stories. You can see there's all kinds of avenues and places where you can literally -- you could have like a Netflix series.

**Jerod Santo:** Yeah, totally. There's lots of different ways to go with it.

**Travis Oliphant:** With the right writers, who can bring in the drama... Because there is. There's drama, there's people, and there's conflict, and there's differing opinions, and there's... I don't know if there's any love interests. I don't think we've had enough romance, actually... \[laughs\]

**Jerod Santo:** Well, you can always write that into the script, you know...

**Travis Oliphant:** You can write that into the script, yeah.

**Jerod Santo:** "Based on a true story" doesn't mean it is a true story, you know? You've got lots of liberty with that "based on".

**Travis Oliphant:** I mean, I've had romance...

**Jerod Santo:** There you go.

**Travis Oliphant:** I've got a wife, and we've been married 30 years... We have a great time.

**Jerod Santo:** Oh, congrats. That's a long time.

**Travis Oliphant:** Yeah.

**Jerod Santo:** So that's a bit of the scientific side of Python.

**Travis Oliphant:** Yes.

**Jerod Santo:** Your sub-genre, so to speak, and its rise to prominence, or why so many people adopted Python.. Because the early adopters came, they laid the groundwork, people like you came after them, built tooling... It was like "This has the tools I need, it's a nice language..." And it grows, and it establishes, and people just start to choose it. What about the industry side? Why did Python grow through industry? My only guess is because Google used it, and people wanted to work for Google... But I don't know.

**Travis Oliphant:** That's a great question. And it has this similar multifaceted story/narrative that also coincides with individuals using it. And those individuals then go get hired by the companies. So one of the very first was Google, because Google started to -- very early on, they used Python as kind of a "Oh, this is a way for us to find great developers, because the only people using Python are people who care enough to go and do this on their own." And so they kind of used it as a selection filter to find great developers. And then early on, "Okay, you're here. Alright, you want to use some Python? Okay..." And they started to use some Python internally. But it was more because of the people they pulled in, who wanted to help Python grow.

**Jerod Santo:** Gotcha.

**Travis Oliphant:** But they built it, they've used it quite a bit, but lots of languages are supported inside of Google. They've supported lots of this open source growth. I think initially it was the people that drove it, and then -- like, my experience personally has been in the financial industry, and in the scientific use of coding industry, where they were trying to solve problems. And the scientists need to solve a problem.

One character, for example, is a guy named Kirat Singh, who had made the rounds between Goldman Sachs and then JP Morgan, and then Bank of America, until he went to his own company... And every time, he was basically trying to build a system for derivatives management. And many people will understand and know a little bit, at least, about the derivatives empire, the fact that we have these underlying equities, then you have derivatives on them, and the derivatives value can balloon up, and it led to the 2008 crisis... All that stuff.

\[00:48:11.04\] Well, about 2008, suddenly that's when all the investment banks said "We've got to get our handle around this." And so there was requirements to build a system that would manage their risk assessment, or their understanding where they are. And Kirat Singh was there helping them build that, and he went "Oh, well, let me just use Python", rather than -- Goldman Sachs invented their own language. In fact, if Goldman Sachs had actually released their language as open source back in '92 or '93, when they built it, we might all be using Slang. Because they had something pretty good inside of Goldman Sachs way back then...

**Jerod Santo:** It's called Slang?

**Travis Oliphant:** It's called Slang. Slang, and SecDB as a database, and --

**Jerod Santo:** Never heard of it.

**Travis Oliphant:** No, exactly.

**Jerod Santo:** \[laughs\]

**Travis Oliphant:** Neither does anybody else.

**Jerod Santo:** Yeah. They should have released it.

**Travis Oliphant:** They might have, if they had released it as open source. It's actually a good story to enterprise. And so enterprise is starting to learn that story. This is also part of why I think companies start to come to Python, because companies -- so part of it is just the developers, and part of it is companies realizing that they need to rely on these open source projects, \[unintelligible 00:49:05.19\] dependencies on it, and they should start participating in it. And how do they do that? And I think that journey is still with us. I think companies haven't figured that out yet. And that's one area that I love to talk to people about, because I think I have some insight, having seen so many things in this direction, both inside of big companies, as well as part of the communities that are there. There's some -- okay, where's the friction, and where's the real opportunity?

But this financial community - they all sort of build these tools around Python, because really of these key connected people. And people have written books about this. "Mavens", I think, is the word they use, these key connectors, these influencers... They'll call it technology influencers.

**Jerod Santo:** Yeah.

**Travis Oliphant:** And it's people that do a bunch of work, and then because they do the work, other people go "Cool, you've done the work. I'll use it." "Okay." And so then they build from there. It's how open source is diffused throughout the world. But companies start to rely on it for risk assessments. And risk assessment is mathy. There's a bunch of simulation, there's a bunch of array math you're doing... And so all of that leverage - the NumPy, SciPy, and related ecosystems, or emerging Pandas... So Wes McKinney was at AQR, one of the hedge funds that was heavily reliant on Python. He and every single other hedge fund heavily reliant on Python built their own data frame object, or something like a data frame object themselves. Wes McKinney was able to convince AQR to let him open-source it. And then he spent further time in 2011-2014 shepherding that early release to make Pandas what it is. And he was a friend, a connection, part of the SciPy community, we knew him, he was doing this thing... There were other libraries that were also similar for a while, but Pandas ended up dominating, because of his effort and influence.

But lots of other companies now are going, "Ah, darn, we've got to convert internally to Pandas", because of that same issue. So companies have learned, "Oh, either I open-source what I'm relying on, or I risk technical debt of having a codebase to maintain that nobody cares about." And then new people are coming in with a different infrastructure, a different story.

**Jerod Santo:** Right.

**Travis Oliphant:** So that's something I think has happened with the AI world, and I know specifically what happened in the AI world because of TensorFlow and PyTorch. And then in 2018, when I left Anaconda - which is a company I founded to help make packaging work better, and data science better, actually... Basically, I saw, "Oh my goodness, I wrote NumPy to bring the right communities together", and in 2018 there were literally 20 others. But they're all around this AI story. There's MXNet, there's PyTorch, there's Torch, there's TensorFlow... There's so many of these other array libraries, effectively.

\[00:51:55.16\] Now, fortunately, we'd fixed it twice in NumPy. Not only did I create NumPy, the array library, but I also created a buffer protocol, so that even if new array libraries existed and showed up, you could still share data. So there's a fix it twice concept, and that's we did get in there. So that okay, great, there are all these different array libraries, but at least you can share data now. You don't have to copy data from one to another. So that's at least a saving grace, but they're all over the place. And each one of these companies, they did it -- primarily, PyTorch started as a Lua library. There's a C++ Lua library, and there's three versions of it. TensorFlow is a C++ library called Disbelief... Each of these have their own internal organizational C++ stories. They started to launch them in 2015 timeframe, 2013, 2014, 2015, started to put these libraries out there, people started to use it... Well, at this time there'd already been 13 years in the sci-fi ecosystem, and the sci-fi conference. And a lot of academics, and the very first machine learning library, Theano, was right in the middle of the SciPy ecosystem. So a lot of these early papers on machine learning were Python-based.

And so when these big companies came and shipped their libraries, the community said, "Where's your Python interfaces?" And demanded their Python interfaces. And then, "Oh, okay." I mean, I've heard this story specifically from several of these people inside these organizations. So they went back and they built the Python interface. Sometimes badly - TensorFlow - sometimes better. TensorFlow fixed their problem by buying Keras. Keras was a good interface. And so that's the interface for TensorFlow now, and it's great. But PyTorch, from the beginning, because they were in the research lab, they from the beginning tried to build community around what they were doing. And so because they did that, they were actually able to get more scientific embedding.

So a lot of this is how a company goes about doing open source matters a lot, in terms of its longevity and who's going to win. You can predict based on how they're approaching the open source ecosystem. And PyTorch did a better job than TensorFlow, even though Google invested in a group to try to make that happen. But the problem is it's not just having a few people do some podcasts and do some DevRel. It's actually how are you managing it internally? What is your story internally? On the Meta side, they had PyTorch as a public thing, and then they had the Meta application of PyTorch that was separate.

On Google, the difference between the TensorFlow development and their internal usage of TensorFlow was not very separate. So they really couldn't open TensorFlow to wide scale input, because they depended on it heavily. And therefore, they couldn't just allow some random pull requests from a community upset their own internal usage.

So you have to manage that. You have to manage your -- if you're going to be serious about engaging with others in your open source community, you have to put a bit of separation between your community-driven sponsorship or community engagement and your internal development processes. If you don't, you're not going to be able to manage it.

Some version of Conway's Law where the software resembles the organization - the corollary of that is if your organization relies on the software structure, you're going to hurt your organization, because you can't have your development teams and your delivery teams dependent on a random pull request from somebody in Estonia, that isn't working for you. You have no way to kind of hold them accountable other than just stop using their code.

So anyway, there's a lot to be said about that. Actually, as corporations started adopting open source, this is not well understood by the open source communities often. Or it's better understood by the internal development teams, because they have to. But open source communities sometimes don't understand that, and then they get a little confused by corporate actions. They make the wrong assumptions about what companies are doing and why. And that can lead to some friction, misunderstandings and people feeling like they shouldn't support something because they're reading into a corporate action that isn't true. It's just a consequence in the lack of a PR statement from somebody in the organization.

\[00:56:03.08\] That's a whole other topic, but we often get involved in conversations like that with the corporate side. But the open source community side - it's just a massive ecosystem, and corporations adopting open source because it helps them. Actually, Zuckerberg probably said it really well, most recently... I don't know how he feels about it right now, with the recent AI changes. But previously, he said things like - and I think it's valid - by releasing open source, you can actually influence the direction where the industry's going, to more align with your internal choices. So you don't have the Slang moment at Goldman Sachs, or the Pandas moment at any number of unnamed hedge funds that had to adopt Pandas instead of their own data frame, because they actually recognized open source as the way to align industry to your roadmap.

**Adam Stacoviak:** That's certainly one way to contribute, for sure. I mean, if you're that far ahead to be a leader... I think a good example is probably like Borg and Google and Kubernetes.

**Travis Oliphant:** Yes, yes, yes.

**Adam Stacoviak:** Borg was great internally, but didn't make sense externally, because Google is Google. But Kubernetes as an orchestrator engine made a ton of sense, and the whole story is different now because of that.

**Travis Oliphant:** Yeah. Great point, because I actually knew the person who was in charge of both TensorFlow and Kubernetes at the time. And they wanted to kind of figure out how to get community involvement in those two. Kubernetes succeeded, TensorFlow did not, in that regard. And I think you have a great point. And part of it was because they didn't really depend on Kubernetes internally. It was just a thing that came out of their story... Whereas they did depend on TensorFlow.

**Adam Stacoviak:** Yeah. Is part of what you're saying - and maybe this isn't the point of this conversation in the grand scale, but probably what you're saying is when corporate control permeates into the development life cycles of the software, it begins to mimic what the corporations want, versus what the community and the technological folks need.

**Travis Oliphant:** Yes. Yes. It's actually that juxtaposition of corporate constraints, and therefore corporate control, and community needs, which is broader. Because the community includes other corporations, but it's basically the broader set of infrastructure needs that everybody needs. And how much of that is the corporate willing to give up for the benefit of other people contributing? Because you know, why would a company do this?

**Adam Stacoviak:** Yeah, it's the 80-20 rule, basically.

**Travis Oliphant:** It's the 80-20 rule. Exactly. Exactly. Because a company could just do it themselves. Great, just do it yourselves... They have their own story. Who cares? And in fact, a lot of companies have often -- I've given talks at organizations where they want me to talk about "How do we adopt some of this open source ethos in our 100,000 developers? I mean, we have 100,000 people here, and we would love some of the energy that happens in the open-source ecosystem to happen here, in a private mini open source enclave. Even if it's not to the full world, but at least it's inside of our company, and people are more aware of it. How do you do that?" So we've gotten into some of those conversations about what are the incentives that drive open source, how do you mimic those inside of an organization, can you...

One of the critical things to me - and this also goes back to the "people stay for the community" - it really comes down to respect and ownership and accountability. And do people feel that in the community? Do they feel like their voice matters? Do they feel like when they contribute, it's not just ignored, but it's heard? And then furthermore, do they do something that they feel pride in? Because "This is the thing I built, and I show it to the world." And that's what open source enables for engineers that inside of a big company doesn't happen as well. You go to get another job and you're like "Cool, I did all this great work." "Well, can I see it?" "No, it's over there on their repo, I can't show you." Whereas if it's open-source, "Here it is, I can show it." And so a lot of developers, a lot of engineers have felt like "Oh, this matters to me in my career, I need to do that."

\[01:00:05.01\] Now, what I'm finding is that actually some of that spirit, that energy, that ethos is not there among the new developers coming in, that there used to be. And so a lot of people new to programming - their GitHub repos aren't great, they haven't really contributed to open-source communities... They're kind of "Let me just get that job." And my advice to a young developer is go find a few open source communities you love, you get excited about, and start participating in them. Just show up. Hear what the problems are, contribute something to it. Even if it's documentation, even if it's just a readme for a newbie. If you're new - great. You have a power nobody else has in the community, as you're new to it.

Everybody else has been there a while, they don't know what the problems are for someone new adopting it. So great, document your journey and write a story for a new person, how to make this more accessible. There's a lot you can do, anybody can do to participate in open source, and do that. Okay, maybe you can't do it 20 hours a week, but do it for five hours a week, do it for an afternoon, do it for a weekend. That'll have more impact on your career than sending out resumes... Because it just helps -- there's a correlation between your participation in open source communities and your ability to contribute to a corporate community. Now, it's not one-to-one, it's not identical, and the reverse isn't always true.

There are also people who struggle to participate in open source communities because it takes a bit of thick skin, a bit of "I can work remotely with people, I can communicate via text or email", and maybe you're not good at that, you're better in person. It's not the only way, but if you do, if you can participate, it's easy.

**Jerod Santo:** Sure. Well, you can always just go practice that LeetCode problem, you know... That's what they're doing with their time, too.

**Travis Oliphant:** Yeah, that's true. That is true.

**Jerod Santo:** \[laughs\] It's like "Which one do I do?" I don't know.

**Travis Oliphant:** No, I've had that conversation with someone on LinkedIn who was asking me "How do I do it?" I said, "Well, okay..."

**Jerod Santo:** Yeah, it's tough out there.

**Travis Oliphant:** But you know, I can just share my experiences. I mean, some of my experiences might be relevant for the future, and some might not. It's because things do change. But I'm happy to share my experiences. And if anything is helpful to somebody, I'm more than happy to share. I'm super-eager to help people. I want to see a world of more owners. I want to see a world where there's distributed opportunity to collaborate.

What I've loved about the ecosystem I participated in is when people come to the table -- it's a roundtable. I like these roundtable, I understand the role of hierarchies, they're helpful for certain things... But I love when you're in a room where people feel like they can contribute. They have skin in the game, and they have something they're trying to contribute.

**Jerod Santo:** I've definitely seen the decline of the GitHub resume.

**Travis Oliphant:** Yeah, I wondered about that.

**Jerod Santo:** I don't think it's gone, I think it's declining... But that being said, I don't actually disagree with you. I think that people should do that, but maybe do it a little bit more -- I'm not saying you have applied intention, but maybe do it for the love of the game... And I think maybe your portfolio, your resume, whatever, could be a nice side effect of you -- but actually, it's fun, it's fulfilling...

**Travis Oliphant:** Thank you, Jerod. Yes.

**Jerod Santo:** There's a pay it forward there that really is satisfying.

**Travis Oliphant:** Yes. Nothing I've done would have been possible if I didn't love it.

**Jerod Santo:** Yeah.

**Travis Oliphant:** The only reason I did it is because I loved it. It was actually something I really loved doing. I didn't know if -- I mean, it wasn't because "Oh, I get a job if I do this." The opposite sometimes. Actually, "I lose my job if I do this." But I love this enough.

**Jerod Santo:** Yeah, I've seen a lot of people that -- they're like asked about their open source work, and they don't really have any, and so they think "Oh, I need to go have some." And if the goal is to have the green dots on your contribution graph - well, of course, that can be gamed. But if your goal is to have some open source because you need to have some open source, that's ultimately going to be empty and not very fulfilling (that's kind of the same thing), and not very impressive either, because you're like "Oh, cool, I opened up a PR on some meaningless thing."

**Travis Oliphant:** \[01:04:02.02\] Super-well said.

**Jerod Santo:** So if the right intentions are there and stuff, it all works out. If not, then you might as well practice your LeetCode.

**Travis Oliphant:** Yeah, a thousand percent agree, Jerod. Very well said.

**Jerod Santo:** Side tangent - you were talking about all of these... The TensorFlows, and the Pandas, and then all these things that were kind of competing or burgeoning in this messy way on the scientific side of Python, because of machine learning needs, and because of industry driving these things. And that got me thinking about Mojo. And I just wonder your opinion on Mojo, which is the Pythonic language that's right in that wheelhouse.

**Travis Oliphant:** Yes, yes. So I'm excited by this kind of innovation. In 2012 -- when was it? 2011, 2012... In 2012 I started a project called Numba. At the same time, there was a language called Julia, that was emerging. And Numba was a Python compiler that took a subset of the Python language and made machine code to make things fast. And we actually, by 2013, were targeting GPUs. So you could actually write Python code that ran faster than any C++. Like, we were showing that in 2013 at the GTC conference at NVIDIA, because you could basically write Python code that would run on GPUs directly. So I love that whole space. This is something that -- it took me a while, because this is when I finally learned how to write compilers.

Now, I wrote the first version, and then quickly found other people to make it better... But I actually took a Python class from my friend David Beasley in Chicago, to try to understand, at least have something besides just what I picked up from the internet. And that helped me see the vision for "Oh, Python can actually be orchestrating compiler tools, and there's no reason you can't just write syntax that's Pythonic, looks Pythonic, and then have it compile the machine code. There's zero reason that can't happen." So there's no reason you have to use C++ or Rust to write machine code. You can totally write a subset of Python and have very fast code. And Numba proved that, and proved it pretty well, actually. And then since then, there's been like 20 other versions of that.

If you go to lpython.org, lpython stands for LLVM Python. It's an example of a compiler for Python, lpython.org. And a table there shows a list of other similar projects. Some of them are a little bit more like \[unintelligible 01:06:29.27\], where they're translators from Python to C++... Others are like -- Pythran is another one, Codon's another one that's out there. There's literally a dozen.

**Jerod Santo:** Yeah, I'm looking at the table... It's probably two dozen.

**Travis Oliphant:** Two dozen, yeah. Now, all of them are kind of this example of scratch your own itch, something that's built... Numba has a team at Anaconda still working on it, and so it's actually received a lot of support, and so it's kept up to date with the latest releases... And every time the bytecode changes in Python, Numba's got to change, because it goes from the bytecode on... And you can actually write -- there's also a tool called Cython out there. Cython was in the same -- it's not exactly the same, but it was like "Oh, write it in this language, and then you can write extensions quickly." And even something like F2Pi might be considered in that category. But Cython, Numba...

So I love this space. So Mojo is great, because Christian was one of the original creators of LLVM, and Numba depended on LLVM. So I've been an LLVM fan for a long time. So I'm like "Well, this is awesome. We get kind of the OG kind of bringing Python to compiled languages. Awesome. \[unintelligible 01:07:38.13\] Let's make that happen."

I think what I'm hopeful for - and I know he's got funded, and there's a company structure there... So some of the same concerns about "Okay, corporate capture of communities and how does that work?", I don't think he's actually even had those conversations yet.

So right now I'm very hopeful and excited by the technology innovation that will occur, and I'm cautiously optimistic about what that might mean. I know that he wrote one very concretely - he transformed Objective C to Swift, essentially, with LLVM.

\[01:08:15.06\] And so I think part of his thing -- and I talked to Christian, so I know a little bit, but I don't know him a hundred percent... But I've had a couple of conversations with him about what does he think, where's he trying to go with this... I think his experience making Objective C users move to Swift was pretty easy. Because Objective C - it's kind of all Apple community. Python's much, much different. You're not going to have the same experience. You're not going to be able to take the whole Python ecosystem and move them to Mojo in -- maybe in a decade you could pull that off. Or billions of dollars. Money might be able to do it, but that money has also got to be able to hire the right people, to have the right connection points, so you're interacting with the right communities. Because you can't just have great tech and then push it on people.

So I'm eager. I'm open. I'm really eager to see it, but I mean, okay, is Mojo open source yet? Is it community-driven? How are decisions made? And it's all early days. These are hard things. So right now, I'm of the attitude -- I'm excited, I love seeing what he's going to come up with, because he's a brilliant guy... And I want to see an explosion of languages that are Python-like, that enable the Python ecosystem to actually make fast run times starting from Python syntax.

I know there's a lot of enthusiasm around Rust, and I don't need to dampen that enthusiasm. I like Rust, too. But I think there's far more low-hanging fruit in just having statically-typed Python. In fact, I call a little project we're working on at OpenTeams called -- but it's very early, and it's not a competitor to Mojo, by any means. I call it POSTPython. Performance-Optimized Statically-Typed Python. And it's basically saying "Oh, Python now has annotated types. Optionally annotated types." Now, you can use them for lots of things, but if we just, with this POSTPython language definition spec... So POSTPython is about creating a spec and a definition with lots of runtime limitations. So in my ideal world, Mojo, Numba, Cython, Codon, and then JAX, PyTorch - these are also compiling subsets of Python. PyTorch does it directly. JAX does it directly. If these could all have "Oh, here's the syntax for a statically-typed sub-language, that if you format it this way, then you can compile it, and then these become compilers."

So my world, you have a standard that allows people to -- and then you have the implementation of that standard. You can almost think of it like SQL. So will we get there, or will Mojo become that by de facto, or will PyTorch? That's a good question. I don't know. I would love to see more cooperation here.

One of my concerns is these are challenging problems, and so the communities in them end up being siloed pretty quickly, and they don't look at each other very often. I'm just naming a few, there's many, many more that I've seen over the years, and they're all siloed, and they all don't really talk to each other. So hopefully, we get cooperation between them.

**Jerod Santo:** Do you think VC funding is the reason, or promotes the silos, or no?

**Travis Oliphant:** I think it's been promoting the silos, primarily. I think where we've gotten -- the funding from the corporates have helped break them down, the big funding... But VC funding has encouraged silos. I've actually been an outspoken critic - not that outspoken, but I am a critic of the GitHub star funding model of VCs. For a while there, it was like "Oh, I see your GitHub here has many stars. Here's $5 million." And the trouble with that is there is not a one-to-one GitHub repository to company mapping.

**Jerod Santo:** You can't just trade those in for dollars, the stars?

**Travis Oliphant:** I mean, I don't mind...

**Jerod Santo:** \[laughs\]

**Travis Oliphant:** \[01:12:01.09\] In fact, we can have another conversation... I think I've got a way to actually create a market for that. But it's not as simple as -- because I have a VC fund, too. I've started a VC fund for this purpose of helping entrepreneurs create. And we've got 14 companies invested. I've got an idea of how to actually create a marketplace where you can actually have GitHub stars be a market driving question. And investors are actually looking at "Okay, this project is going to be used.

Great. I'll invest there", and then have that investment dollar go to support the development of the project, while also having a return at some point, from somewhere. Because that's the thing you've got to figure out, you've got to build an instrument that drives the return of the investor from the risk they took to invest in that project early. And a company is one way... Yeah, just have a company, and ownership in the company, and the company sponsors it. That is. But can we do it in a way that actually allows many companies to collaborate, and still have the benefit from the time that somebody spent investing on that project \[unintelligible 01:12:59.07\] to them, as the companies that rely on it develop? I think I've got an answer to that, actually... It's my BHAG, my Big, Hairy, Audacious Goal is to bring that to market in the next 5 to 10 years.

**Jerod Santo:** Really?

**Adam Stacoviak:** BHAG? Can you say that again?

**Travis Oliphant:** BHAG - Big, Hairy, Audacious Goal. It's a dumb acronym, but it's --

**Jerod Santo:** It's the first time I've heard that one.

**Travis Oliphant:** It's kind of like dreaming. It's what I'm dreaming about now. It's how do you actually make open source intimately connected to the growth of companies? And how do I make more owners? How do I contribute to making more owners? Obviously, I'm not going to do it myself, but how do I contribute to a world where there become more owners? That's one of the problems of my lifetime, is our Western societies, especially United States, have decreased ownership. There's more and more money in fewer and fewer hands. And that's not great for society.

**Jerod Santo:** Adam, say your phrase. "You will have--" What is it, "You'll own nothing and be happy", Adam?

**Adam Stacoviak:** That's right.

**Travis Oliphant:** Yeah. Do you say that, Adam?

**Adam Stacoviak:** You will own nothing and be happy.

**Jerod Santo:** He brings that one up a lot.

**Travis Oliphant:** No, it's true. You'll find yourself owning nothing and being happy. And okay, yeah, there's a pill you can take for that happiness, but... \[laughter\]

**Jerod Santo:** I mean, I would love to hear this idea. What do you think, Adam? Are you sharing this idea right now, or are you just building it privately?

**Travis Oliphant:** No, it's out there. It's out there, but I'm building it privately. But it's been incubating. The challenge is I can't -- you can go to faiross.org. You can see the beginnings of that idea, which we started several years ago, and now we're just resting on, because I know what to do, but I don't have the money. I need about $5 million. But that $5 million can't have a bunch of strings attached. They've got to basically say, "Here it is. I'll check back with you in five years." That's what I'm looking for.

**Jerod Santo:** Okay...

**Adam Stacoviak:** Yeah, it's not how investments work...

**Travis Oliphant:** No, exactly.

**Jerod Santo:** For the record, I'm also looking forward for that.

**Travis Oliphant:** Yeah, I know that's not how it works, exactly...

**Jerod Santo:** Check back in five years...

**Travis Oliphant:** Yeah, exactly. Well, you can check back in and -- you know, we can read reports.

**Jerod Santo:** I know what you mean.

**Travis Oliphant:** And really, for the $5 million to return money on it, it's going to take five years. It'll have impact before then, but it's seeding an ecosystem, and seeding a story. The idea is pretty simple. Effectively, you just have an organization that on the one hand works with open source communities to document their dependencies, both their dependencies on code, and their dependencies on people. So essentially, I call it -- it's their Mbips, their milibips table. You actually have a basis point, and if you do a thousandth of a basis point, you basically have 10 million units to give out for every project. And a project governance essentially gives out basis points for dependencies... Like, "Oh, I'm NumPy. I depend on Python a lot", so we're going to give 40% of our cap table to Python. And then the rest of it, we're going to award it to people. And you have some in reserve, and as people come in and make contributions, the governance can actually go "Oh, here you go. Here's ownership."

\[01:16:11.15\] So you basically have one side helping people organize that, because there's a specification, you stick it in the GitHub table, and it's there, and you can say, "Oh, this is you--" The project decided a cap table, basically. You've constructed a capitalization table for the project. And it depends on the governance. It's not our decision. Now, what we can do to drive that is FairOSS could essentially have a default approach to doing that... So it says, "Well, this is what we'll use if you don't tell us what not to use. This is how we're going to do it." And then, of course, it encourages them to do that. So we're not gated by whether they participate or not.

So you build that... And then to the companies, you go to companies and say "Hey, you're missing from your cap table, your employee option pool, your investor group, the warrants you're giving out to partners..." Because this happens all the time. "You're missing all the open source ecosystem from that group. And so let's get on your cap table." So we get on the ownership table of a company... And of course, we can't get a million open source contributors on the cap table. Okay, great. We put an entity on the cap table. And the entity on the cap table represents the open source you depend on.

So you have an entity on the cap table, and FairOSS maintains your dependency, their milibips table, like "What do you depend on?" And then as equity returns happen, which is distant, usually... It's like, as a venture capitalist, I know how this works. And basically, over time, value will flow. Now, if you want quick value, it could be maybe you're not going to give up equity; you're a mature company, equity is hard to come by... But we'll do a dividend agreement. Anaconda's done dividend agreements. With an agreement, we'll just allow some of this to come.

Our venture fund, for example, we already do this with our carried interest. We have carried interest, which some of you know what that is... It's the motivation for the partners to find good deals to invest in for their LP's money, and then they get a percentage of that growth. And so we, our general partner, some of that carried interest already goes to fund open source. And so it's the same thing, we can formalize it through that process.

Now you have all these inputs. You have equity deals, you have dividend deals, you have carried interest deals that are flowing through this instrument that becomes the funding source for all the open source dependencies. And then as opportunities arise, you're just streaming it out, distribution style, to the cap tables, and it flows down the cap table tree. Because "Oh, you're dependent on Pandas. Well, Pandas - it looks like it's dependent on Python, and NumPy", and it flows down, until you end up at the leaf nodes where there's individuals, who are basically participating.

So that's the basic idea. And then what I did, I tested that out with a few companies, "Could I actually get these agreements? Can I get people to agree to that?" And I thought I'd have to have a venture fund, actually. The whole reason I started a venture fund in 2019 is I thought I would have to go to startups and say "Yes, I'll invest in your company, but you have to do this. You have to put open source on your cap table." Because I knew they would say yes to that deal. What I found is I actually got people to say yes without the money. They understood the problem.

**Jerod Santo:** Really?

**Travis Oliphant:** Yeah. And so I went, "Oh, okay. That's good." Because it's like RegEx. You use RegEx to solve string parsing, and now you have two problems. You have the problem I was trying to solve and then understanding RegEx. Same thing with starting a venture fund. Same thing with starting a company. I started Anaconda as a company to solve the problem "How do I fund NumPy? How do I fund SciPy? How do I build this thing?" So my whole life has been like "Okay, here's a problem. How do I solve that problem? Here's the meta problem. Here's the next problem. How do I solve that problem?" and then you're just trying to learn along the way... And just try to figure out ways that are -- you know, learning from other people, trying to organize... Because what drives me is I want to create a world where open source is a meaningful way to live a life. You can be an open source contributor and still pay for your kids, and still have -- that's a job, and it's meaningful. It's not just the thing you do on the weekends and nights, and your day job is doing something else. So this is why I've been thinking about this.

**Adam Stacoviak:** And FairOSS is the epicenter of this?

**Travis Oliphant:** \[01:20:13.19\] Yeah, it's the first version of the organization we've created to do this. And it's an idea of how it could be done, and we've tried it, and it's enough to know that I know it will work. But for it to work and to create the vision of where you can actually have investors... Because eventually we'll have a ticker symbol for every open source project. Literally. We'll have a market where "Oh, how's this open source project doing?" That's going back to your stars. Your GitHub stars literally could translate to a value, a fair price, a fair market value for that open source project. And investors are looking and going "Oh yeah, I want to buy some of that." Because they could. They could say "Oh, I'll put in my portfolio that project because I think that's going to go somewhere." And how's it going to go? Because people are gonna depend on it, and therefore enough of these agreements are in place where value will accrue, because of those agreements in place. So FairOSS puts the instrument together. It's responsible for creating the instrument that connects the dots between the investor money and the open source communities.

**Adam Stacoviak:** Well, what you need is a dependency graph versus the GitHub stars. I understand the analogy, but --

**Travis Oliphant:** No, no, you have to have the dependency graph.

**Jerod Santo:** For sure.

**Travis Oliphant:** But that's also what FairOSS manages, is the dependency graph of those milibips tables.

**Adam Stacoviak:** But that's the evidence to show the "Should or should not be on the cap table", right? That's not a star which is "I like this", or "This is cool."

**Travis Oliphant:** Correct. That's not what gets you on the cap table. What gets you on the cap table is, one, it's just one entity. So a company is not going to put a thousand people on a cap table, but they might put one entity on a cap table that represents those people.

**Adam Stacoviak:** And you're saying that at some point for an open source project that may be of that caliber, they should have, or might have either their own foundation representation, or FairOSS is that representation?

**Travis Oliphant:** Maybe -- yeah, FairOSS could be that representation. Maybe they could do their own. Ultimately, it's a market. Markets are very complex, with lots of parties. But the project itself, all they do, all they have to do is just track their milibips table. They just have to put and document and record, "Well, who gets what? Who's accountable for this?" It's like a thanks file, but it's like a thanks file with a number next to it, a percentage.

**Jerod Santo:** Yeah. It's their own cap table.

**Travis Oliphant:** It's their own -- and they manage that. That is used to build the dependency graph that allows the flowthrough to happen from the entrypoint, which is just the company that puts FairOSS on the cap table, also submits their own high level milibips table. Like "Well, this is what we care about." And then FairOSS also -- there's stuff around here to support that.

**Adam Stacoviak:** What you need is to be in the IRS, the tax code to make this have some serious incentive behind it, because at that point every company would actually do it.

**Travis Oliphant:** This is a separate question, potentially. I agree. I'm trying to avoid creating a ministry of open source. Like, yes, some of this could be facilitated with government, as long as it's automatic and rule-based and not bureaucratic.

**Adam Stacoviak:** Well, not even so much IRS, but like recognized by the business nature of the United States, right? Like, LLC versus S-Corp versus C-Corp. There's a reason why companies form one of those, because they're recognized.

**Travis Oliphant:** No, 100%. In fact, the way this would be implemented is actually through a series LLC. Essentially, what you'd end up with FairOSS doing... Like, what it does, it says "Okay, we have an LLC representation for you, project or your corporate --", or whatever it is that's representing your... Because some products have one and some don't. And so yes, I agree with all of that.

I would say to your point about the IRS, what I would love to see - I would love to see the United States actually as a separate thread have a sovereign wealth fund, and allow deferred taxes to be paid... Instead, if you have a tax, you just give a part of your equity to the sovereign wealth fund of the United States. If they can allow that to be used for -- there's a ton of places where it's the tax code...

\[01:24:04.10\] Like, I've been looking at this a long time, and so much of the inhibitions, the problems we face are because of outdated SEC code, outdated tax code, that was meant for a different time. It's now stopping innovation in the business world today. And so many lawyers, so many people get paid, so much effort is spent, essentially preserving yesterday's infrastructure, yesterday's business infrastructure, and it's hard to innovate in.

**Adam Stacoviak:** Right. And there's no legal precedence for it. Like, there hasn't been a case represented, so you can't say "Oh yes, we should or shouldn't do this" because there's no case law that represents how the courts may or may not intervene in proceedings.

**Travis Oliphant:** Correct. And so a big part of the challenge is figuring out how do you fit in that existing case law, but still do something innovative... Which leads to a lot of challenges, it really does.

**Adam Stacoviak:** Are you doing this?

**Travis Oliphant:** Yeah, that's why it takes $5 million at least to get this going. We've done it already, to a degree...

**Adam Stacoviak:** Let's get this $5 million, let's get this money.

**Travis Oliphant:** Well, if someone wants to buy Anaconda shares, they can buy them from me and I got the money.

**Jerod Santo:** There you go.

**Travis Oliphant:** That's what I'm doing with my next tranche of Anaconda shares.

**Jerod Santo:** You need some liquid, man...

**Travis Oliphant:** I can get liquidity if someone just wants to make a bet on Anaconda, and I'm happy to share that bet with them.

**Jerod Santo:** There you go.

**Travis Oliphant:** So if you hear this, contact me... And maybe you want to fund this, but you want a hedge - great. You can own Anaconda shares, and let me take the risk. I'll do it.

**Jerod Santo:** Okay. So that's an option. I like that offer.

**Travis Oliphant:** Yeah. Anyway, so that offer's out there, to anybody who wants to talk.

**Jerod Santo:** I like this idea. Thinking about it slightly more deeply, it seems like there's a bit of an impedance mismatch between the value provided by the open source projects and the companies that would then adopt. Because you're basically relying on you're going to be adopted by winners, and you might not be.

**Travis Oliphant:** Yes, correct.

**Jerod Santo:** But you're still valuable, but just to losers. You know what I'm saying?

**Travis Oliphant:** Yeah. Well, it might be -- it's just one part of the funding fabric, first of all. I don't think it's the answer to everything, but it's something that should exist. And it's also the investor class. That's the part that we -- it's not just the companies, but when I realized there's at least $100 trillion of investment money out there looking for alpha, which is like looking for return. And that's in people's retirement accounts, that's in investment accounts, it's all over the world... All that money is looking for investing. Where are they going to put it? And so a lot of times property values go way up, stock values get way overvalued... You need a place for that to go so you have that investment value. Then you have open source, where innovation's happening. Because you look at the past 10 years and the innovation that's occurred, from AI, to cloud, to data... It's open source communities that have been at the heart of that, but yet there's not great connection between the investor class and the open source community class.

**Jerod Santo:** Okay, so imagine a world where FairOSS is running, and it's active and it's vibrant. And I'm an investor, and I want to put 10 grand on NumPy.

**Travis Oliphant:** Yup, exactly.

**Jerod Santo:** What happens?

**Travis Oliphant:** There's a site you go to, and it's traded on a public market. Maybe it's crypto, maybe there's a crypto token associated with it... That's what I was hoping, that crypto would actually help this emerge quicker onto public markets. Like, there should be a place -- you just call your broker, or you go into your own online thing and go "Yeah, I want to invest in NumPy." Cool. That's the ticker symbol, and you just put it there. Great.

Now, at the moment, that's going to buy somebody else's position. But the project NumPy could say "You know what? We're going to make a release. We're going to authorize more of our milibips table to investors." And they funnel that up through and say "We've got now $10 million that can be purchased by new buyers." It's a kind of IPO.

**Jerod Santo:** Then you're buying their upside.

**Travis Oliphant:** And you're buying their upside. Exactly.

**Jerod Santo:** I see.

**Travis Oliphant:** So again, the NumPy community and FairOSS would mediate the relationship between the community that has to essentially go "Yes, we're willing to take investor money", because they're the ones that have to take it and do something with it, through their own governance or however they're going to do it. There's somebody that has to take that money. FairOSS just facilitates the connection between that and the market.

**Jerod Santo:** Gotcha.

**Travis Oliphant:** \[01:27:51.08\] And actually, that particular entity would be a different company that would be actually the broker-dealer between the projects and the market. That's a separate activity. The current FairOSS organization is intended to be the arbitrator of the milibips tables...

**Jerod Santo:** The middleman, yeah.

**Travis Oliphant:** ...and then the negotiation of the contracts with the companies. And then you'd have a broker-dealer that would connect the two and make a market. Because long-term, you have a marketplace. The Chicago Mercantile Exchange exists. Why? Because somebody put the idea of an option in the future out there and started selling them. It's just that. The New York Stock Exchange exists because the idea of a corporation was created, and then somebody started to sell them. So you make a market for it.

**Jerod Santo:** This dog could hunt. How much have you been able to convince these companies?

**Travis Oliphant:** So I haven't really -- the problem is when I left Anaconda, I had to build this whole other thing. And so my time has been spent building Quansight, OpenTeams Incubator, my funds, and then OpenTeams now. And so I've been spending so much time there, but this has been in the back of my mind since about 2019, 2020.

So I've had conversations on the side with multiple companies, enough to get dividend programs... Like, Anaconda has a dividend program. Lots of companies are willing to do the dividend program. That's an easy way to fund it. And then I've got a few conversations with funds, to say "Hey, \[unintelligible 01:29:08.21\] interest." And then startups, I've had 100 startups willing to put FairOSS on the cap table. That's been super-easy, actually...

**Jerod Santo:** Like, how much?

**Travis Oliphant:** Well, it's a good question. So the highest is like 10% of their company they'll put on the cap table.

**Jerod Santo:** 10%?! That's a lot.

**Travis Oliphant:** It is.

**Jerod Santo:** It must not be worth very much. \[laughs\]

**Adam Stacoviak:** Or they're really dedicated.

**Travis Oliphant:** It's startup land, because a startup gets diluted. And the argument really goes like "Hey, here's a way to get--" And for that, what they want is connection to the open source communities. They want it for their hiring pipeline, and for improving their -- because a startup, your most important thing is the people you hire. So if FairOSS can provide an opportunity to hire, then it's worth that. So that is high. Mostly it's like 1% to 2%. That's pretty easy. And then as the company matures... You know, maybe a big company like Anaconda ends up being like 0.1% is all it is. Or 0.5%. But you add that up and that's a lot. If you actually took -- and you only have, let's say, a few basis points on every company... And a lot of companies, they're throwing -- I mean, they're putting more of that in their option pool for employees.

That's where you're arguing. You're saying "Okay, here's your option pool for employees." You need to recognize that there's a portion of this that you're not either taking advantage of, and you're missing. And that's where I've had the best conversation with people and they go "Oh, you're right. That could help." Now, what they're looking for is "Well, how do I --" The company wants to know "Well, can I connect that to feature requests? Can I figure out a way to kind of connect this to community connections, or hiring, or...?" And that's where we can talk about that, because it could be a milestone-based vesting on that pool. There's ways to negotiate that. But that's what FairOSS does, is create the negotiation, to increase the size of the instrument market... My view is that has to develop, and then we can build the marketplace for the broker-dealer where you can actually get investors to come in.

**Jerod Santo:** Yeah. \[unintelligible 01:31:08.06\]

**Travis Oliphant:** But you have to build this before the investors will come in. Anyway, if that makes sense... Anyway, that's my Big, Hairy, Audacious Goal and what I'd really love to work on next.

**Jerod Santo:** You just need some liquidity, man.

**Travis Oliphant:** I just needs some liquidity.

**Jerod Santo:** Yup. Anaconda is not going public anytime soon?

**Travis Oliphant:** Not soon, but they just had their Series C... It's actually doing really well. And they're very -- it's a good example of a company... I can tell that story numerous times. A lot of people can tell that story. I of course have my own version of the story... It's doing well. It's doing really well. But I don't know if it's going to go public. I'm out of the loop on that.

**Jerod Santo:** Yeah. You're out.

**Travis Oliphant:** \[01:31:45.14\] So you could ask Peter, you could ask the board... I could ask them... What I've heard is they're not really anxious to go public quickly, but... You know, they did just get Series C and got new people. Actually, I shouldn't announce that. I'm sure they're -- they're doing very well, but I'm not authorized to say that they've had that. Anaconda is doing very well.

**Jerod Santo:** Anything else? This has been a wide range and interesting discussion. Adam, do you have any either follow-ups on FairOSS or something else before we let him go?

**Adam Stacoviak:** I mean, I'm just going to scrutinize it more, really.

**Jerod Santo:** \[laughs\] \[unintelligible 01:32:10.19\]

**Adam Stacoviak:** I want to see it happen, but I want to scrutinize it more, because I'm like...

**Travis Oliphant:** Yeah, scrutinize. Give us feedback, because it's still early. And so the idea was "Let's get it out there. Let's get talking. Let's see how to make it, how to adjust it."

**Adam Stacoviak:** Well, I mean, I'm easy to please with it, because I want it to happen. But then if you take Jerod's example where he says, "Hey, I'm a venture capitalist. I've got 10 grand, I want to put it on NumPy." "What happens?" was this question. But what do I get? What is the incentive for that venture capitalist to put 10 grand on NumPy? That's what I don't understand.

**Travis Oliphant:** They get the returns that later come. So remember, if you get on the cap table. Are you on a cap table? Have you been an owner of a company? Basically, FairOSS has ownership of a company, but that ownership is tied to flow down through the dependencies. So basically, FairOSS is the arbitrator helping - as people use NumPy more and more, now all of a sudden, Netflix and Amazon and OpenAI and Google, they all basically depend on NumPy in some way. And even if it's like a millionth of a basis point of the value of that company is now flowing through FairOSS to the NumPy community. But in aggregate, it could be hundreds of millions of dollars, actually.

People have told me, people have said "NumPy has had billions of dollars of impact on the economy." I'm like "Great. Where do I see that? Where do I measure that? How does that show up anywhere?"

**Adam Stacoviak:** Well, let's pause there for a second. So back to the venture capitalist with the 10 grand that he puts on NumPy...

**Travis Oliphant:** Well, it would probably be an investor. A venture capitalist would probably put more than 10 grand. They'd probably want to put a million in early.

**Adam Stacoviak:** Okay. Well, pick a number.

**Jerod Santo:** Same with the Robinhood app. Say there's FairOSS in Robinhood.

**Travis Oliphant:** Yeah, later the Robinhood app is what I want to get to, but that's going to take a little bit of time.

**Jerod Santo:** Totally.

**Travis Oliphant:** But then you have 10 grand, you put it there. Where are you going? Well, one, you have other buyers. Because every market -- if you think about stocks in general, why do you put money in stocks? Well, maybe they'll give a dividend someday. But no, because you're going to sell it to someone else. So it's the same thing here. Is there a buyer for this later? And the answer is sure, if the market's real. And why would the market be real? Because there is an eventual value.

**Adam Stacoviak:** What exactly are they buying? Help me understand that.

**Travis Oliphant:** They're buying ownership in the milibips table that NumPy is governing.

**Adam Stacoviak:** And remind me what the milibips table is. What does that consist of?

**Travis Oliphant:** So milibips stands for a thousandth of a basis point. So there's 10,000 of them per percentage, or a hundred thousand per percentage point. So it's a percentage where you're buying a percentage of the NumPy project. And then, okay, cool, I have a percent of the NumPy project... What does that get me? It gets you any value that flows from the FairOSS infrastructure to that project. So let's say in the future a hundred million dollars is flowing to NumPy, from companies whose value either FairOSS sells the position it has and flows it through, or it earns dividends, or there's a -- basically, there's numerous ways FairOSS is creating actual transactions with the market that flows money back to the open source community. So it's aggregating that, and then downstream, some of that aggregation is coming to the NumPy project. And as an investor, you have a right to a percentage of that.

**Adam Stacoviak:** Okay.

**Travis Oliphant:** That's what you're buying. It's like buying a stock in a company. It's the same thing.

**Adam Stacoviak:** Yeah, I'm tracking now. I'm tracking the full cycle.

**Travis Oliphant:** We've had to create the instrument to enable the flow to happen. And so an investor could see -- because that's what investors are going to see. Before the market can develop, investors would have to look and say "Okay, wait a minute, how is this going to work?" And so it takes work to develop that market. It takes work to develop the relationship with the companies, the flowthrough from their value to the rest of the market, and then the aggregation... And it's a technology problem. There's stuff to do, because you basically have -- there's 5 million open source projects. I think about 500,000 or a million of them are probably -- so you're going to have to onboard them.

\[01:36:06.18\] FairOSS will have -- okay, we have 10,000 projects we're supporting. Now it's 100,000 projects we're supporting. It's going to be a pipeline there. At the same side, FairOSS is going to have to build -- "We've got a thousand companies participating. Now we've got 10,000 companies participating. Now we've got 100,000 companies participating." The market's growing in both directions.

**Jerod Santo:** You've got to build both sides. So which side do you build first?

**Travis Oliphant:** It's a combination. You have to do both. Like every bootstrap problem, you have to attack both at the same time. So it takes work, and it takes a lot of conversation, selling, communication, trust building...

**Adam Stacoviak:** Let me be more clear with Jerod's question... What is the most clearest form of a good next step to make this happen?

**Jerod Santo:** Five million dollars. \[laughs\]

**Travis Oliphant:** For me, it's the money, because I already spent as much as I could. I've probably spent about somewhere between half a million and a million on this already. Just from the consulting company I had, and we were just taking from money we didn't send back to our investors, and instead invested in this idea... So we've taken money already to invest, but -- you know, hiring people... Because I hired people and they did work on some things, and it takes resources to do that. So the next step is that money. That's why for me the next step is to get that pocket of money. And 5 million is -- really, 2 million is the minimum. But I'd like 500k to invest in this company for 10 years. That's why 5 million. Because it's got to be funded, so that there's people who are hired to pay attention to this problem, and are working towards it. And I want it for 10 years, because this is not something to be solved in three months, or six months. It's something that will need time to develop.

**Adam Stacoviak:** And the company is the FairOSS company.

**Travis Oliphant:** The FairOSS is the company. Yeah. It's investing in FairOSS. And why will it be valuable someday? Well, it's the broker-dealer ultimately that will create value of FairOSS. That's why FairOSS itself is a public benefit corporation. Because I don't know if it's going to have value or not. Its purpose is a public benefit. It's to build the market of open source. And so whether it has value intrinsically or not, who knows. But the broker-dealer will at some point, because it'll be --

**Jerod Santo:** Transactional.

**Travis Oliphant:** It's transactional. They're basically brokering a conversation between investors and their money.

**Adam Stacoviak:** These public benefit corporations - remind me of the structure of that. Is that a C corp that has a different classification?

**Travis Oliphant:** Correct. Correct. It's a designation... And there's a few different versions of this. The public benefit corporation is in Delaware. You can basically tell in the articles of formation, this is a public benefit corporation, which means you've told the secretary of state, as well as every other investor who might invest in this company, "This company exists not only to maximize shareholder value, but to also achieve some public benefit." So you can't later -- a shareholder can't invest in the company to later come back and say "Hey, you didn't have a fiduciary responsibility to me and maximize my investment", which is kind of default corporate law. They go "Well, actually, you have to prove that we weren't supporting the public benefit, that was told to you from the very beginning. It was in the corporate charter."

So it's an innovation. I like it a lot. It's actually a really good innovation, because even though -- companies that don't have it, they still benefit the public. A lot of people have this idea that corporations are somewhat inherently evil. They're not. They're just an organization to kind of pool money together so you can do stuff.

**Adam Stacoviak:** Their motivation is different than a human. That's the problem.

**Travis Oliphant:** That definitely is true. Definitely it's true. It's an agency problem.

**Adam Stacoviak:** They're capitalistic by nature. I mean, by design. It's the whole point. They're capitalistic by nature.

**Travis Oliphant:** Yeah, exactly. That's their focus. So the public benefit corporation allows you to insert an incentive structure... It's a communication. So every shareholder goes -- and then management... You hire management, and the management can go "Oh, we're attuned to this public benefit. Not just maximizing shareholder value. It's actually this public benefit, too." And so it's a nice innovation.

\[01:39:57.13\] There's also something called a B Corp. A B Corp is a different thing. You could have both. A B Corp is you get a license from a firm... So a B Corp is a branding thing. You basically pay a fee and you get a license from a firm, and the firm has ways you can show that you're a benefit corporation. Whereas a public benefit corp is just an institutional infrastructure thing. You publish, you record it in -- the state of Delaware is where I've done it. Other states, you can do it too. That's the thing about corporations, they're state by state. Delaware is just the closest thing we have to -- it's a commonplace people do it. But that's what it is, it's a public benefit corp. And several companies have been doing this, particularly around open source, because people go "Wait--" As open source contributors, we realize "Okay, how do we use the mechanisms of institutional capitalism to support our mission?" And that's what I like to do. I'm not calling myself a capitalist, but I definitely am a -- I like people, and I like distributed ownership, and I like people to be able to be free to work with each other. And I like decentralization.

And so I'm just like "How do we use this infrastructure to further the means of our open source desires?" And so that's, that's at the heart of what's basically driven me for the past 20 years, basically. And I had some success, but some failures, and I'm still trying. Still working on it, and trying to find other collaborators, other people that are similarly interested.

And Open Teams is the latest one that's launching right now, Anaconda was the first... I did some consultancies before that... I've done some consultancies as well... And then I've talked to a lot of people. I'm very eager to collaborate with anybody else thinking along these lines. Because honestly, this is something I would love just to exist. I'm like you, Adam, basically. I'd love it to exist. Kind of like NumPy - I'd love it to exist. Well, nobody else is doing it... Maybe I should do it. Kind of the same way. Okay, I'd love it to exist. Nobody else is doing it, maybe I should do it. And we'll see.

**Adam Stacoviak:** Okay. So I've got to imagine that as part of this we'll drum up some interest, to some degree.

**Travis Oliphant:** Okay, great. Contact me.

**Adam Stacoviak:** We do have some variants of influence. So you need roughly $5 million to fund FairOSS, and that will be used --

**Travis Oliphant:** For the next 10 years.

**Adam Stacoviak:** For the next 10 years. So half a million dollars...

**Travis Oliphant:** It'll need more than that, but that's enough to make sure that we can hire people... Because I'm going to allocate and I'm going to hire people, and I'm committed to people. Then it'll self-fund.

**Adam Stacoviak:** You'll hire some people to bring on projects... You'll have, let's say, 10 or 20 or 100 of your initial pool of projects that will show off there... What did you call it again, this table? The MIPS? What was it called?

**Jerod Santo:** Milibips.

**Travis Oliphant:** Milibips. The Milibips tables.

**Adam Stacoviak:** Milibips. Man, is there a different name for that?

**Travis Oliphant:** Yeah, please come up with one.

**Adam Stacoviak:** Gosh, Milibips... I do like it, it's just forgettable.

**Travis Oliphant:** Yeah, I hear you.

**Adam Stacoviak:** And easy to confuse with something else.

**Travis Oliphant:** Yeah, fair enough. Fair enough.

**Adam Stacoviak:** I like the idea though, because you're selling access to this table, which is not truly ownership in the project, but future value it can create.

**Travis Oliphant:** It's future value it creates. And so it's a separate file. Like, you have \[unintelligible 01:43:02.15\] It's separate. And it's the responsibility of the governance team to update it. FairOSS, when it onboards a company, will have one. And basically, we're like "Okay, here's the table we're going to use for your project." And you can change it at any time. The governance of that project gets to change it.

**Adam Stacoviak:** \[unintelligible 01:43:20.15\] I mean, it puts a heck of a lot more importance on like --

**Travis Oliphant:** It does.

**Adam Stacoviak:** ...just willy-nilly open source governance, you know...

**Travis Oliphant:** It does. And also, I'm aware of that, so I'm also like "Huh..." Because I've also seen projects - when money starts to get involved, culture can change very quickly.

**Adam Stacoviak:** Yeah. I mean, motivations totally change. I mean, if I feel like I put my work out there and somebody else is getting the dollars for my work, I'm feeling --

**Travis Oliphant:** Then you'll be upset.

**Adam Stacoviak:** ...like "Why did I show up?"

**Travis Oliphant:** Exactly.

**Adam Stacoviak:** Yeah. It becomes not open source.

**Travis Oliphant:** That's actually why I feel like -- I feel like FairOSS is going to need to have almost like an ombudsman office whose whole purpose is to help resolve disputes between governance questions.

**Adam Stacoviak:** It also feels like a license, too. FairOSS reminds me of like the license movement... So I think Fair Source was from Sentry...

**Travis Oliphant:** \[01:44:07.06\] Yeah, that's why we kind of have a Groundwater -- exactly. If you look at the site, we've got the Groundwater program. It's like, you have this idea and then you get a label. So the project could say "I'm participating in this Groundwater program", and then companies could also say "I'm participating as a means to attract developers." Because for companies who participated, they're basically -- like, why do they do it? Well, they want to hire great developers, and they see there's a way to do that. They recognize the problem of \[unintelligible 01:44:32.18\] dependencies on open source they can't maintain, and they want to figure out a way to pay ahead for that, or figure out "How can I reliably rely on an open source ecosystem when that old XKCD graphic of the dependency that's in the middle - it disappears. Then what?" A lot of companies are realizing this is a problem.

So there's more to do there. It's why I say it's going to take effort, and consistent effort, and the right kind of people. Like, I'll have to have dev rels, I want to hire ambassadors... All the people involved in open source, from multiple cycles, I want them to tell their stories and to come and talk about it... And then there's a podcast that we'll have to promote... I mean, there's lots of things to develop here. But my perspective is, you know, if and when Anaconda actually becomes not just paper, not just paper value, but real money - what am I going to do with that? Build this. Build a way to give back to everybody else.

**Jerod Santo:** It's got a shot. It's got a shot, I think...

**Travis Oliphant:** Well, I appreciate that, Jerod and Adam.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It reminds me a little bit of the t.xyz conversation we had, but not like exactly one-to-one, but similar in nature and incentives.

**Travis Oliphant:** Yes, similar in nature. And I've seen a few emerge...

**Adam Stacoviak:** Have you spoken with Max at all?

**Travis Oliphant:** I spoke to him. Yes. And that's what's excited me recently, is I've seen a couple of these where like "Oh, okay, we're onto something here. You guys have a similar concept." And I would be happy to join forces with some of these folks, too. Because there is zero desire to be the only founder. Like, I've been a founder, I know what that is, and I'm fine doing it, but I'm not -- I'm doing this to support a concept. And if there's other people that want to take the -- I'm happy to be a spokesman. I'm happy to just be somebody that promotes it, and that negotiates people, and \[unintelligible 01:46:11.09\] And I'd love other people to own it.

**Adam Stacoviak:** I'm going back through our chapter markers, and when we were talking to Max -- we talked to Max end of last year at All Things Open. We go to All Things Open every year. Big shout-out to All Things Open.

**Travis Oliphant:** Oh, yeah. Yeah, yeah, yeah, yeah.

**Adam Stacoviak:** Love that conference...

**Travis Oliphant:** Great, great group. Yeah. Anybody there, I would love to talk to people there too, because I did talk to T, and I think they were the closest of the ones I've seen... I need to revisit that again. But yeah, that's actually who I'd love to talk to. Collaboration is key to this.

**Adam Stacoviak:** I don't know what my idea was, but at one hour and 12 minutes of that conversation it says "Adam shares an idea..." \[laughter\] I don't know what the idea was. It may have been a really terrible idea, in all honesty.

**Jerod Santo:** Gotta click that link and find out, yeah...

**Travis Oliphant:** I'm sure it had a lot of signal.

**Adam Stacoviak:** I would go back and listen to that, and I would definitely circle back to Max, because you've got similar desires; different implementations, but similar desires, very much so.

**Travis Oliphant:** I will. Thank you for reminding me about that. I will, because I do remember -- I will. Thank you for that lead, again; that reminder. You guys are great. I think what you do is actually very valuable, because it gets people talking, and then listening and reaching out to each other.

**Jerod Santo:** Thank you.

**Adam Stacoviak:** We listen a lot, we talk very little sometimes... Sometimes a lot... Sometimes I share ideas that are bad, apparently... We'll see if it is good or not...

**Jerod Santo:** Nope. The chapter title does not say "Adam shares a bad idea."

**Adam Stacoviak:** That's true. If it was bad --

**Jerod Santo:** And I'm pretty sure I wrote that chapter title, and I would have put that in there if I thought the idea was bad.

**Travis Oliphant:** Right!

**Jerod Santo:** So it's probably a good idea.

**Adam Stacoviak:** Okay \[unintelligible 01:47:31.26\]

**Travis Oliphant:** So it was a great idea.

**Adam Stacoviak:** I mean, we care about funding open source...

**Jerod Santo:** For sure.

**Adam Stacoviak:** ...and I think the mechanics around it have always, to some degree, been ambiguous, or flawed.

**Jerod Santo:** Certainly not a solved problem.

**Travis Oliphant:** I think it's hard... This idea did not come to me until I'd spent time in open source, time in Wall Street, working in investment banks, and then time as an entrepreneur, and then finally as a fund manager. Essentially, all these different things have led to "Oh, here's how we can put it together." Because it's like all these different facets of a big problem.

**Adam Stacoviak:** \[01:48:07.09\] Here's a big idea for you. Gosh, let's see this...

**Jerod Santo:** This chapter is titled "Adam shares an idea."

**Adam Stacoviak:** It could be a bad idea... I'm in this mindset personally where I'm thinking about my family bank. And I'm not talking about infinite banking. I'm talking about ways I can set my family up, that I can be the one who does the hard work, to establish the foundation for which my future generations can borrow and lend against, build wealth, have assets etc. And I'm thinking "Gosh, I love software enough at this stage of my life and at this point in my life for the future family and descendents who come from me that I want to say this family cares about software. And so much so that it's open source software." I would want my family bank, if this was a thing, to invest into the pool of open source for these things.

And it'd sure be great if my foundation I started as a part of it, or whatever, can benefit because of the value that I invested in, in open source. Like, that'd be kind of cool. I think you need more of those kinds of movements where you have people's long-term generational wealth, or lack thereof, starts to support open source.

**Travis Oliphant:** I totally agree. So actually, right this summer I've been setting up a family office, which is just a company that holds the investments, instead of them --

**Adam Stacoviak:** Asset protection etc.

**Travis Oliphant:** It's driven honestly by the fact that my taxes have gotten complicated, and they're breaking me. And so I'm like "Oh, I just need to push that to another organization that handles that." But it's exactly that. And then that's gotten me in the family office community. There's a big community out there of family offices, family banks.

**Adam Stacoviak:** Huge. We're in similar circles then, because I'm doing the same thing. I'm trying to figure out that stuff.

**Travis Oliphant:** Exactly. Well, we can share notes on that on the side. I'd love to connect, share what we're trying to do. And there's just a lot of ways to do it. But I agree with you, there's a big world out there... And why not, as people become prosperous, have a way to kind of extend and help the world be better? The AI revolution is here. It's coming. The AI transformation is here. I want it to make more people wealthy. And not just a few people, but like a lot of people. And then pass that on. I want a world of peace and prosperity. I'm naive enough to still have that dream, but I actually believe it's possible... With good ideas, with the right ideas.

But there's also roadblocks, and there's potholes, and there's bad directions to go. So that's why information matters, that's why cooperation matters, that's why I think open source communities can be a part of it... Because in open source communities you have real people working together to do something. That's how anything great is done, is real people, real communities. And how do you then help them, and allow lots of them to flourish? So yeah, this is really good, and you're exactly right. Family banks --

**Adam Stacoviak:** It's like art, right?

**Travis Oliphant:** Yes.

**Adam Stacoviak:** A lot of family offices invest in art, for obvious reasons, right?

**Travis Oliphant:** Yes.

**Adam Stacoviak:** Open source is art.

**Travis Oliphant:** Yes, you're right.

**Adam Stacoviak:** It's an asset class we've never been able to invest in. But I believe in it...

**Travis Oliphant:** Yes, you're 100% right.

**Adam Stacoviak:** I've spent 19 years of my life chasing it, exploring it, sharing it, you know...?

**Travis Oliphant:** Have you been to Italy, and to Florence, and seen the great artists of that era? And you realize how -- when I went two years ago, I finally realized "Oh, it was a concentration of these patrons that sponsored Michelangelo." It didn't come out of nothing. It came out of a concentration of wealth that was then distributed to the people to enable them. It was patronage that enabled that. And you're exactly right, we need the same kind of thing, but not just for the few wealthy people, but how do we do it for millions of people to participate as the patrons?

**Adam Stacoviak:** Yeah.

**Travis Oliphant:** And in return, they're benefiting.

**Adam Stacoviak:** It's got to function first. So I think that's where the hard part is. You need to get that half a million per year for the next five, or whatever it is, and do it...

**Travis Oliphant:** That's right. That's right.

**Adam Stacoviak:** And figure out how to get past that...

**Travis Oliphant:** Partner with somebody else...

**Adam Stacoviak:** You need that first.

**Travis Oliphant:** I totally agree with you. That's what drives me right now, is okay, doing these other things, I've still got to make a living myself... I'm not quite at the point where I can just focus on this... I've got to figure out how to -- I've got clients and other people I'm supporting, so I can support my family... But you see, the idea of "Oh, eventually I might have some means to invest - cool. What am I gonna do with that?" And that's where this came from.

Awesome. Super-good to talk to you guys. You guys are awesome.

**Jerod Santo:** Awesome. Yeah, this was great.

**Travis Oliphant:** Jerod and Adam, I loved it.

**Jerod Santo:** Let us know as you make progress.

**Travis Oliphant:** I will.

**Jerod Santo:** We'd love to stay in touch, be part of it, help spread the word...

**Travis Oliphant:** Definitely stay in touch.

**Jerod Santo:** Cool.

**Travis Oliphant:** Definitely stay in touch. Loved talking to you all.

**Jerod Santo:** Alright, Travis, thanks so much for being on the show, man. Keep it up.

**Travis Oliphant:** Okay. Take care, my friends. You guys have a great day.

**Adam Stacoviak:** Bye, Travis.

**Travis Oliphant:** Bye!
