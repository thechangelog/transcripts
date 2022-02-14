**Adam Stacoviak:** Alright, we have a special show for you today, in the last quarter of 2016. Jerod and I did a ton of travel - we went to OSCON in London, All Things Open in Raleigh, North Carolina, and Node Interactive in Austin, Texas. Today's show is an anthology show. We're sharing some awesome hacker stories from each of these conferences, that really got to the heart of things.

If you've been paying attention, you know that we launched our new branding in October of last year and updated our tagline to Hacker To The Heart, so these stories fit perfectly with the essence of who we are, and we're proud to share them with you.

By the way, in this episode we're introducing our new theme music. I hope you love it as much as we do. Huge thanks to the mysterious Breakmaster Cylinder for working so closely with us on our new beats. One more thing before we kick this show off - bandwidth for Changelog is provided by Fastly. Learn more at Fastly.com

**Adam Stacoviak:** Welcome back everyone, this is the Changelog and I am your host, Adam Stacoviak. This is episode 235 and I hope you love our new beats. Thank you Breakmaster, they're awesome. In this anthology episode we're featuring three awesome hacker stories, with a slightly different perspective than we're used to.

First up we've got Giovanni Caligaris, with his story on how he brought LibreOffice to the people of Paraguay by translating it into their native tongue.

Second we talked with Stu Keroff, who started a Linux user group for kids called The Asian Penguins, and this school for Asian refugees where they learn to install, use and configure Linux and open source software.

Last but not least, we talked with Shiya Luo on how China does Node. Software development is done differently in China, in large part because of the slow translations of documentation and books from English to Chinese, but also because of the Great Firewall of China, a censorship and surveillance project of the Chinese government, which makes it very difficult to interact with the rest of the web.

Our sponsor for today's show is our friends at GoCD. Head to gocd.io/changelog to learn more about this awesome open source, continuous delivery server.

**Break:** \[02:22\]

**Jerod Santo:** Alright, you're here with LibreOffice.

**Giovanni Caligaris:** Yes.

**Jerod Santo:** Tell me about your involvement with LibreOffice.

**Giovanni Caligaris:** I got involved with LibreOffice in 2014. In that year I was living in Toronto. I always wanted to do something for Paraguay in Guarani, which is the language of Paraguay - Spanish and Guarani. Guarani is an indigenous language, it's spoken by 90% of the country, but our indigenous population is very small, actually. It's about 1% of the population. So really, mostly non-natives speak the language, in every social class.

**Jerod Santo:** Right, so there's very few natives.

**Giovanni Caligaris:** Few natives. But it's a language that's spoken especially in the smaller towns; people speak it a lot as their first language, and 40% of the country only understands Guarani. If you wanna be a professional in Paraguay, you have to speak Spanish.

**Jerod Santo:** \[04:05\] Which is quite a conundrum for people.

**Giovanni Caligaris:** Yeah, it can get tricky.

**Jerod Santo:** It's a problem, right?

**Giovanni Caligaris:** It's a problem. It could be a problem, and it shouldn't be a problem. So in 2014 I already had thoughts of going back to Paraguay. I wanted to go back for a year, so I decided if I was gonna go back, I was gonna do something... It will be my own contribution to the country.

**Jerod Santo:** You wanted to help, or something.

**Giovanni Caligaris:** I wanted to help with something.

**Jerod Santo:** You didn't just wanna move home, you wanted to actually..

**Giovanni Caligaris:** I wanted to do something. If I was just gonna move just for the hell of it, it didn't make sense.

**Jerod Santo:** You don't like moving, so don't move for the hell of it...

**Giovanni Caligaris:** I don't like moving.

**Jerod Santo:** Why this desire to do a big help? Where does that come from? Some sort of gratitude?

**Giovanni Caligaris:** Because I lived in so many places by now, and I see the possibilities and the skills that you need. One of the most required skills today -- I mean, back in the day it was you had to know how to use a computer... That was the average skill you needed. Well, that doesn't cut it anymore. Now you gotta learn how to use Office. It doesn't matter which brand - Microsoft office, OpenOffice, it doesn't matter. Office is an essential tool for every career, right?

**Jerod Santo:** Yeah.

**Giovanni Caligaris:** So I started thinking, okay, we have all these people in Paraguay who don't speak Spanish, but Office is the most essential tool to have a job. Like I've mentioned to you before, you can have a tool that does everything you need, but if it's not in your language it's pointless, you can't use it. So the ideas started coming from there.

When I went back to Paraguay I got in touch with the \[unintelligible 00:05:43.16\] Foundation; they're responsible for maintaining and developing LibreOffice, and they were super happy with it. And I'm excited too with the idea of doing a translation for LibreOffice in Guarani. Then I realize -- not realize, I notice... I don't speak Guarani.

**Jerod Santo:** What?!

**Giovanni Caligaris:** I don't.

**Jerod Santo:** Wait a minute... I thought...?

**Giovanni Caligaris:** I speak four languages, but one of them is not Guarani.

**Jerod Santo:** So hopefully one of them is Spanish...

**Giovanni Caligaris:** I speak Spanish, Portuguese, English and Italian.

**Jerod Santo:** Okay. Are you Italian?

**Giovanni Caligaris:** I'm Italian descendant.

**Jerod Santo:** Yeah, you have an Italian name, Italian mannerisms... I'm a quarter Italian, too.

**Giovanni Caligaris:** Yes. So I had some money saved up when I was in Paraguay; that's the money I took with me, truly, and it wasn't that much. So I have this massive project. I never translated a program in my life, I don't know how to code, and I don't know the language.

**Jerod Santo:** Most people would just like go to the movies at this point, or... \[laughter\] You know, throw that idea out the window.

**Giovanni Caligaris:** Yeah, so... Plus, I wanted to enrich my curriculum, my resume, and that was a great opportunity. I was gonna be there for a year, and I didn't want to get a job doing something else. And it was hands-on.

I got in touch with the mailing list of LibreOffice, and they started guiding me how to do everything. And truly, if it wasn't for them, I couldn't have done it. They told me, "Okay, start with the terminology, a list of the words that you think you're gonna use the most." So I went to the program, I opened the application, I started seeing the most used common terms... About a thousand words. Then I gave it to a friend who speaks Guarani and he did the translation of those words.

**Jerod Santo:** You enlisted a friend who knows Spanish and Guarani.

**Giovanni Caligaris:** Exactly.

**Jerod Santo:** Or you put it in Spanish and he put it in Guarani.

**Giovanni Caligaris:** Exactly. That was just the beginning. I haven't even translated the program yet. So out of my own pocket I paid this one - he's not even a professor - this one guy, this old man that knows nothing about telephone, doesn't know anything about computers, nothing about technology... This guy lives at the outskirts of the Asunción, which is the capital. He lives in a beautiful home, beautiful garden, and that's it. He knows what electricity is and that's it.

**Jerod Santo:** \[08:18\] Great gardener, probably...

**Giovanni Caligaris:** Great gardener, and that's it. So I paid him a hundred dollars a week - which is a little bit over minimum wage in Paraguay - and we'd sit down every day in the garden, with my laptop...

**Jerod Santo:** He'd sit with you...?

**Giovanni Caligaris:** Yeah, we'd sit down every day...

**Jerod Santo:** You've got a laptop and he's got a....

**Giovanni Caligaris:** He had a screen that I put on so he can see the words, and 12 hours a day, every day, we translated. I had to show him some of the stuff. The translation, we did in English and Spanish, because it gives you the option in Poodle to do it, and I'd explain it to him what it was, and then he would tell me back.

Obviously, there are a lot of words in Guarani that don't exist for...

**Jerod Santo:** Right, there's not a one-to-one mapping...

**Giovanni Caligaris:** There's not a one-to-one mapping, so we had to create slowly some of the words. Sometimes we left them in English or in Spanish, because people already know that in the country, so it wouldn't make sense to recreate something that somebody already knows what it is. Words like "password", "internet", "mouse", stuff like that. And that's what we were doing every day.

**Jerod Santo:** Twelve hours a day... How many days?

**Giovanni Caligaris:** Seven days a week.

**Jerod Santo:** How many weeks?

**Giovanni Caligaris:** Six months.

**Jerod Santo:** Six months, seven days a week, 12 hours a day, you and an old guy, sitting in a garden, translating LibreOffice.

**Giovanni Caligaris:** That's it. I would go back home after that... There's a lot of words that repeat themselves while you're doing the translation, so I'd get that word translated once and then I'll go back home and I'll speed up the process again. I'd translate that word that repeats, I don't know, a thousand times, inside of a program.

We ran into tons of issues, man... Tons. Translating what would be a writer - it was fairly simple. I mean not simple, but it was easy to get into. Once we got into \[unintelligible 00:10:16.17\], or the equivalent of Excel, it gets pretty tricky. You have equations, you have economics, you have all this crazy math stuff, and we had sentences that were huge that we had to translate, and it's never been done - not even the Paraguayan government has ever done it before. And we just started doing it.

**Jerod Santo:** So did you do it?

**Giovanni Caligaris:** We did it. Basically, LibreOffice comes with a with a Writer, Impress, Calc, Draw -- Draw is...

**Jerod Santo:** Like a sketch app, or something.

**Giovanni Caligaris:** Like a sketch app. You can create, you can edit PDFs, and stuff like that. Then it has Database and Formula. So I was like, "No way, I'm not gonna do all of it. It doesn't make sense", so I did the first four. I didn't Formula or Math. I little bit I did it, but I didn't finish it. So eventually I did 60% of the job.

**Jerod Santo:** In the six month period?

**Giovanni Caligaris:** In six months. So while I was doing the translation - I forgot to say this - the Guarani uses a Roman/Latin alphabet, plus some extra letters (six extra letters, with an accent). It's not much, but it's not easy to use it on the keyboard. I was frustrated at the time when I was doing the translation, so I created the first Guarani keyboard layout for Ubuntu and then I went for Mac and then I did it for Windows.

**Jerod Santo:** Nice!

**Giovanni Caligaris:** So I started doing that, and I was able to finish it. I've not finished, but I reached my goal, at least.

**Jerod Santo:** \[12:03\] So the big picture goal is you wanna give people who only speak Guarani an access to Office, so that they can actually have careers, or at least the ability to...

**Giovanni Caligaris:** To learn maybe in Guarani, and then learn in Spanish. But at least they can use the tool, right?

**Jerod Santo:** So where did you put that into LibreOffice? Is there like a file that has all the strings in it? Or are you actually editing the source code?

**Giovanni Caligaris:** No. To translate in LibreOffice is really simple - you just have to have the time. You go to this website, which is based on Poodle - Poodle is similar to \[unintelligible 00:12:40.22\], I don't know if you've ever heard of it.

**Jerod Santo:** No.

**Giovanni Caligaris:** The word shows up, you translate it. You don't have to code, you don't have to know any of that stuff. Very simple GUI.

**Jerod Santo:** That's nice. So 60% in six months...

**Giovanni Caligaris:** Yes, plus I had to do revisions, I had to go back and do it.

**Jerod Santo:** So what happened next? The job was done, and they all lifted you up on their shoulders and carried you into town?

**Giovanni Caligaris:** No, not really... \[laughter\]

**Jerod Santo:** That's too bad.

**Giovanni Caligaris:** While I was doing the work, I tried to get private institutions and the government to help me out, and no go. If they couldn't see it, they're gonna help you out. It didn't make sense... Like, "Why would you do that when we could just use the one in Spanish?"

**Jerod Santo:** But didn't you tell them that most people don't know Spanish?

**Giovanni Caligaris:** I told them, but it was a waste of time.

**Jerod Santo:** Okay. How many -- you gave me a percentage (90%)... What's the number of people that don't know Spanish but only know Guarani?

**Giovanni Caligaris:** Okay, so the statistics are like this: 90% of the country speaks Guarani, and they're bilingual in that sense. 40% don't speak Spanish, and most of those people live in the smaller towns or in the villages. Then 30% of Paraguayans have Guarani as their first language, and they also speak Spanish, but the information that they absorb in Spanish - it doesn't stay.

**Jerod Santo:** It's minuscule, okay.

**Giovanni Caligaris:** So in a way it's kind of useless.

**Jerod Santo:** Give me raw numbers then... How many people live in Paraguay?

**Giovanni Caligaris:** The population of Paraguay is seven million.

**Jerod Santo:** Seven million?

**Giovanni Caligaris:** It's a smaller country.

**Jerod Santo:** But still, thinking about that many humans... It's a good number of people. Okay, continue... You were telling me you were trying to get some funding afterwards?

**Giovanni Caligaris:** After a year of talking to the Paraguayan government, the Ministry of Political and Linguistics - that's what it's called - after a long time, they finally decided to help me finish the translation. Previously, they had done the translation of Firefox to Guarani, which si a much smaller project... But it's good, and it's necessary. Now we started doing the LibreOffice. With that, we're trying to standardize the language as well, and modernize it a little bit, too.

**Jerod Santo:** Yeah, so you're funded and this is your work now. How long was that gonna last, you think?

**Giovanni Caligaris:** Well, this just happened recently, like two months ago. We're kind of going very slow; everything that's government is always slow.

**Jerod Santo:** So how does that bring you to OSCON London? Tell me that.

**Giovanni Caligaris:** I just moved to London two weeks ago.

**Jerod Santo:** Oh. You hate moving.

**Giovanni Caligaris:** I hate moving. \[laughter\] And I saw that on the LibreOffice mailing list, that they were looking for volunteers at OSCON and I figured why not come here to network, and it's working out. What do you know, I got to know you.

**Jerod Santo:** \[16:01\] Yeah, that's awesome. Great story. Anything else that you wanna say with regard to LibreOffice, or the conference, or your efforts?

**Giovanni Caligaris:** Yes. So that was the first part of LibreOffice. \[unintelligible 00:16:13.26\] is like the whole Linux world, and stuff like that; I always thought Linux is just coding, pure coding... And it's not like that. There's tons of possibilities within open source, you know? You can do translations, you can do journalism, you can do presentations... It's infinite. That's one thing I learned over these past few years, and LibreOffice has helped me out with that.

**Jerod Santo:** Yeah, tons of ways to get involved, lots of ways to help out... There's a never-ending amount of work to do.

**Giovanni Caligaris:** \[unintelligible 00:16:45.02\] much nicer. It stands out.

**Jerod Santo:** Well, I think it stands out on a resume, for sure. Even more so, just the story of how you stuck with it and got it done - that's an achievement that no one can really take away from you. That's awesome.

**Giovanni Caligaris:** Thank you.

**Jerod Santo:** You mentioned it before we started, but you didn't mention it on the air, which is that in addition to the user interface and all those other things, there's also the dictionary and the thesaurus.

**Giovanni Caligaris:** Yes. Recently, before I moved out of Paraguay this year I went to the library and I bought a small book -- well, not small, it's really big, actually... A thesaurus dictionary, and I sit down every day and I copy left and right. I guess that will be the first Guarani thesaurus for Office. Any application that uses a spell checker - I believe it's called OTX, or OXT; I can't remember the name of the extension - can use it. So it's not just limited to LibreOffice.

And I mentioned I did the keyboard layout... My main goal would be to do the dictionary and the autocorrect, but that's a huge project. I don't think I can do that by myself anymore.

**Jerod Santo:** Dictionaries are big.

**Giovanni Caligaris:** Yes. Especially autocorrect, because you can conjugate one word in a hundred ways.

**Jerod Santo:** Yeah... Here's an idea - you should get more old men to sit with you and help you out. I think a team would be probably a nice thing to have.

**Giovanni Caligaris:** Yeah. It takes... I mean, I couldn't have done this without money; a lot of people think because it's open source it should be free - and it could be free, but there's a cost. Nothing is free.

**Jerod Santo:** Right. If it was free, it wouldn't exist, right?

**Giovanni Caligaris:** It wouldn't exist, exactly.

**Jerod Santo:** There would not be a Guarani translation. Awesome. Thanks so much for telling your story, man! That's a blast.

**Giovanni Caligaris:** Thanks, man. It was a pleasure.

**Jerod Santo:** That was fun.

\* \* \*

**Adam Stacoviak:** Thanks again to our friends at OSCON for making that trip possible. Heading out to OSCON London was a blast. I had a lot of fun, talked to a lot of people. Keep an eye out for more conversations from OSCON London on Spotlight. Head to Changelog.com/spotlight, click subscribe, don't miss a show.

Next up is our friend Stu Keroff, who started a Linux user group for kids called The Asian Penguins. I love this story. Nothing gets me more excited than teaching kids how to program, getting them involved, getting their minds thinking about things like this. They learn to install, use and configure Linux and open source software. How hacker is that? Let's take a listen.

**Adam Stacoviak:** So let's start off... Tell me your name and where you're from.

**Stu Keroff:** My name is Stu Keroff and I'm front St. Paul, Minnesota.

**Adam Stacoviak:** Stu, you stopped by the booth yesterday -- as I mentioned before, we're here on behalf of All Things Open, producing this podcast here... It's kind of shining a spotlight into this conference, into the community around this conference, but more importantly helping to share the interesting stories from people like you that come here and speak or attend.

\[20:07\] You've got a talk coming up here in a bit... Tell me the story about middle-schoolers, hacking on Linux, repurposing basically what some might consider trash, trash computer; they turn that computer into a usable Linux computer and they give it away to somebody. That's the snapshot of your story, to a degree.

**Stu Keroff:** Absolutely.

**Adam Stacoviak:** Help us to understand... What is this school you work at again and what is this mission?

**Stu Keroff:** The name of the school is Community School of Excellence. We're a K-8 charter school in St. Paul, and our focus for school is Hmong language and culture integration. I'm not sure if your listeners are aware of this, but the city of St. Paul has a very high population of Hmong - either refugees or children of refugees, so as a result of that we've had several charter schools catering to the Hmong community spring up. Community School of Excellence is one of those.

**Adam Stacoviak:** At what point did you begin this program that we're gonna talk about now?

**Stu Keroff:** The program started in 2012.

**Adam Stacoviak:** Did you start it then?

**Stu Keroff:** I did, yes. The way that this started was our school was beginning the one-to-one laptop program using Windows laptops. Very shortly into the program we started coming across the problem that a lot of the kids were breaking their laptops and we didn't really have a plan for what to do about that. It was difficult for me to try to integrate tech into my class if the kids did not have tech -- because they broke it, they lost it, they forgot to charge it last night, they didn't bring it to school... So I went and got a hardware grant from a non-profit in Minneapolis called Free Geek Twin Cities. Now, among other things, they recycle computers using Linux as the operating systems; that gave me four Linux desktop PCs in my room for the kids to use who didn't have the laptops.

From there, we had this club grow out of it because kids started coming back to my room after school to use the computers while they were waiting for the after-school program to start. They loved the fact that Linux was fast, it was eye-catching, it was different than what they were used to using, it worked well, the laptop they broke didn't work anymore... There were a lot of things about it they really liked. I couldn't leave until 4:30, their program didn't start until 4:30, so I thought, "If I'm stuck with you guys for 20 minutes, let's at least try to get something out of it. How about we learn how these computers actually work?" The kids said, "Yeah, sure. That sounds like fun." So we started doing hardware and software lessons, and from there I taught them how to install apps, eventually we did an install test one day where we replaced the operating system and upgraded all the computers... And a club started to form out of that.

All the kids were Asian, the mascot of Linux is a penguin, so I said, "You know what? This group ought to have a name. What do you guys think of Asian Penguins?" and they all loved it. We've used that ever since.

**Adam Stacoviak:** Actually yesterday too, because I was like, "Why Asian Penguins?" You described to me... You said Hmong -- tell me again about the students that go to school and their circumstances in life. You mentioned poverty - I'm not really sure what those circumstances are.

**Stu Keroff:** Fair question. The Hmong people are a group of folks who are from more like the rural hill areas of Laos, Vietnam, Thailand and Southern China.

**Adam Stacoviak:** And they're refugees, and there happen to be a lot in St. Paul, Minnesota.

**Stu Keroff:** That is correct. The first wave of those refugees started coming to the United States in 1975, and a lot of them settled right in St. Paul. Then we had successive waves after that. Per capita, we have the largest Hmong population in the United States, in Minnesota.

\[23:58\] In addition to that, we have a more recent group of refugees that have come in from a different war, from Burma, and that is the Kareni people; now about 15% of our school this year is Kareni, so we actually have two different people groups from South-East Asia there.

**Adam Stacoviak:** So the name still applied, though.

**Stu Keroff:** Absolutely, yeah. The name still applies.

**Adam Stacoviak:** This doesn't really matter, it's part of the bigger story, but what happens when it doesn't apply? Will you change the name?

**Stu Keroff:** We've talked about that, and actually what we want to see happen this year is...

**Adam Stacoviak:** You'll call them like Hacker Penguins maybe, instead of Asian Penguins.

**Stu Keroff:** Well, we've toyed with a few different things. We think what we're going to do, and this will actually be more applicable when that first school other than ours decides they want a Linux club, too - what we've decided is we're going to form a larger umbrella organization that chapters can function under, but each chapter will be free to call themselves whatever they like. We will probably continue to stick with Asian Penguins, and other schools, if they wish to come on with us, can choose the name for themselves, and we'll be part of a larger organization. At least that's the goal.

**Adam Stacoviak:** Yeah. When I listened to your story yesterday and I had some time over the evening to think about it a bit more, I just could not stop thinking about how hacker it is. As you know, I've mentioned it, it's right here on our banner, we recently did a revamp of our brand and we sat down in a room, we hunkered down for two days straight with no computers, no cell phones (this was a year ago) in a branding session to figure out who we are as an organization, who we wanted to be in the future, and what it really came down to was people and stories that get to the heart.

Obviously, we're hackers, the Changelog was all about open source software development, connecting that with software development communities, and the people aspect. So it came to me that our brand is around "Hacker to the heart", and that's where we're at. I couldn't think of anything, in my opinion, more hacker than what you've done with these children to have that spare 20 minutes and not waste it, use it well, and teach them about technology and invite them into that, especially children who are a part of families who are refugees, and who need love and who need acceptance, and an invitation in education, frankly.

**Stu Keroff:** Absolutely.

**Adam Stacoviak:** And you've created this program around helping them learn how to hack around Linux, basically. Can you give me more details around the technical sides of it? Some of the things they do, some of the things they've learned over the years. From 2012 we've got several years, right?

**Stu Keroff:** And we've actually tried approaching a few different things in that time. The first and most immediate thing is that we want every kid in the club to at least once experience installing the operating system itself. When people go to the store and they buy a computer, a lot of them simply just take it as is; it's the default choice - whatever it came with, that's what it has; why would it have anything else? And we tried to take the mystery away from that. We hand them a flash drive and say, "No, this computer doesn't have any of that. It's been wiped completely clean. YOU are going to put it there."

Every kid in the club, at a minimum, does that. But from there, then we have them learning how to install the apps and configure the apps that we want the computers to have; depending on where they're going, there will be different packages of apps. We teach them a few different ways to make sure the apps get onto the computer. It's like, "Well, you can use the app store for your distro - that's one way, and it's easy. You can use \[unintelligible 00:27:40.14\] for things that aren't in the software store, but you still want the computer to have. And you can use the terminal window. You're going to experience all three."

\[27:51\] They can see what the differences are and how each one is going to apply in different circumstances. Depending on the hardware available, sometimes kids are also doing things like installing hard drives or RAM, depending on what the machine needs. Again, we don't always have time to do these things just for kicks; generally, if we're working on a computer is because we have a plan for it. But we've had kids also installing video cards in the past... So a few different odds and ends like that. Then there's also just troubleshooting and testing things to make sure everything actually works.

**Adam Stacoviak:** Right. I'm curious what flavor of Linux...?

**Stu Keroff:** We have used Ubuntu ever since we started. Everybody's got their own opinion about which distro is their favorite, and that was the one that I was using at the time we started. It was the one that our first computers came with from Free Geek. They actually don't use Ubuntu anymore now, they use Xubuntu, which is pretty cool, too. But as far as our technology plan for the school, it is worded as... Our school now says we are one school with three platforms: Windows, iOS and Linux. So the door is always open to us to change to something else.

Actually, for our club meeting two weeks ago we had a lesson on different distros reversions of Linux. I had computers set up with like six or seven of them around the room, so the kids were supposed to just go around and try each one out, so they could see what's the same, what's different and get that message that since Linux and open source are about freedom, you have the freedom to make this look and distribute the way you want it to be, and there are other options, too.

We've traditionally used Ubuntu and the kids like it, so there's been no questions about that.

**Adam Stacoviak:** Yes. Ubuntu is my flavor, I love it. We actually just had Dustin Kirkland on the Changelog recently, talking about Ubuntu everywhere, and how you have Ubuntu all over the place, their recent partnership with Microsoft, putting Bash on Windows, and that fun story there.

**Stu Keroff:** Did the gentleman mention any plans about putting an Ubuntu phone in North America available for sale?

**Adam Stacoviak:** He did not.

**Stu Keroff:** Darn! Okay, we wait.

**Adam Stacoviak:** But they do say Ubuntu Everywhere, so I imagine it's part of their plan at some point.

**Stu Keroff:** I'm still waiting, I gotta upgrade my phone.

**Adam Stacoviak:** So this story - it struck me as interesting for many reasons. One, children - educating the younger hacker generation to me is like... And you began this out of the kindness and goodness of your own heart. I didn't even ask you what kind of teacher or what kind of involvement you had at the school. What was your primary...?

**Stu Keroff:** At the time I was a middle school social studies teacher.

**Adam Stacoviak:** Okay, so you're a social studies teacher who says, "I've got a spare 20 minutes, I'm gonna lend a hand to these children", and it eventually evolved into this club and now potentially even a movement. My hope is that we help you share this story, because what I think - and you know this as well - is that there's something you've done that's very beautiful and very magical and very perfect for the hacker heart, and that's where we're coming from... To share this story as a success story for other schools or other places to follow, and potentially take what you've done here with Asian Penguins in your school and help others adopt the same kind of practices and the same kind of commitment to the younger generation hacker, teaching them and giving them not only the education... There's another part of this, which is the recyclability of these machines; you have corporations - and I'm telling a part of your story for you, so fill in the gaps when you feel like it... You've got corporations, you've got people -- you've got machines out there that basically are trash to them; they're getting ready to donate it or give it away or throw it away, and you're repurposing this with Linux machines.

**Stu Keroff:** \[31:59\] Absolutely, and that has become the core of our community donation program. In 2013 we started looking around at our school and talking about our own digital divide, and we knew that there are lots of kids that went to our school that didn't have a computer. The main reason is cost - if you are a recent immigrant to the United States and you've just come fresh out of that refugee camp in Thailand and you're still trying to make your way in the new world, a computer is just not gonna happen, okay? You can't afford it.

**Adam Stacoviak:** It's low on your list.

**Stu Keroff:** It's like, that computer on sale at Best Buy - it might as well be on the moon. It's just not possible. Especially if you've got a number of kids, and many of these kids come from large families. So about 30% of our kids at the time - if my friend's survey is to be believed; it's probably pretty close - didn't have computers at home. We said, "Yo, if Free Geek can do something about this, maybe we can, too." So we got a hold of some used computers and then we found some families to help, and I had the kids install all the software. I was like, "It would be more meaningful if you guys did it, and I wanna see us go in that direction."

So I had a couple kids come into my room, work on the computers, getting them ready to go, and we started giving computers away. What we found was that the more that we did that, the more the kids wanted to do it, because they wanted to be involved in something that was helping others. Last week we spoke at the MEA Conference, which is the big state teachers convention in Minnesota. One of our speakers on that team was a 7th-grade boy named Leray. Leray is a Kareni student, and last year he joined the Asian Penguins and was also a recipient of one of our computers, because like any other kid at school - or at least like a lot of kids at school - he qualified for the program. Now, what I didn't plan -- it was kind of weird... When it came time for his turn to go on a mission, it just happened that his name was also the one drawn for who was gonna get the computer that week, so he ended up being on the team that was delivering it to his own house. So he was translating to his mother that day, it was really funny... That turned out great for him.

So this year we made him part of our speaking team. When I asked him about what he liked about the Asian Penguins, he said, "I like giving computers to people who can't afford computers." He speaks from experience, because he was one of those kids.

**Adam Stacoviak:** He was a recipient.

**Stu Keroff:** Absolutely.

**Adam Stacoviak:** And he also helped build the same machine he got to receive.

**Stu Keroff:** Yeah, and the Asian Penguins now gives a kid like him the opportunity to be the generous one, because he gets to turn on and help other kids. How cool is that?

**Adam Stacoviak:** That's cool. One thing I wanna have as artifact from this conversation is 1) awareness to the community; you've done this very selfless act that has turned into something that I hope becomes a movement, honestly... I hope that you can help others who have the same desire or the same care for doing something similar, to essentially have a copy of your recipe. Whether it's something you write down, whether it's something you go and speak... You're here at All Things Open, you're giving a talk here at 3:30, so you're sharing that with this community, and this podcast is a part of the series we're doing for the conference, so ultimately I was really hoping that you can share with me any ideas you have for how to repeat this elsewhere.

**Stu Keroff:** Sure.

**Adam Stacoviak:** And if there is any repetition happening or planned to happen, how can they get in touch with you or what's the plan for repeating this model?

**Stu Keroff:** \[36:02\] Well, let's start at the finish line - how they can get in touch with me... People can follow me on Twitter, it's @StuKeroff. My email address at the school is StuartK@csemn.org, and you can check out all of the information about the Asian Penguins on our website, which is www.asianpenguins.org. That's how you can get in touch with us and find out more about the program.

As far as how to replicate it, the first thing that has to happen is that you do have to have an adult that wants to be a risk taker and wants to plow in and learn how to make this work. I love Robert Litt's example because he's a teacher in the Oakland School District in California who started the computer lab at his school with recycled hardware and open source software, and did it all for free. His school couldn't afford anything, and he said, "When I started, I didn't know a darn thing."

**Adam Stacoviak:** Wow.

**Stu Keroff:** Now, when I started the Asian Penguins, I did know a few things about Linux because I had been using it for maybe five years at that point. But I think the big thing was that I was willing to learn more about it and be willing to share what I've learned. The kids will simply respond to somebody who's willing to share what they know. You don't have to be a developer, you don't have to be a sysadmin. You have to be somebody who loves kids and you're willing to learn a few things and share what you know.

Second, you do need to have some way of getting computers to work on. Your school might be in the process of doing its own upgrader or recycle, and you could be doing them a favor by taking computers off of the IT department's hands that they don't need anymore. Those are the first people I would ask, because our IT department has provided me with computers. But corporations in your area, thrift stores, eBay... Most states will have some sort of surplus exchange where state agencies retire computers and then they're sold to qualifying state agencies.

The Asian Penguins have gotten computers from every one of those sources, and so can other people, okay? So figure out where your computers can come from. They're out there. Don't think, "Where am I gonna get computers?" People are upgrading all the time, just ask.

**Adam Stacoviak:** Every year, every two years they...

**Stu Keroff:** Absolutely.

**Adam Stacoviak:** And it could potentially even be a write-off, depending upon your school situation, or if it's a nonprofit school, or if you have somebody who can be... There's a way for a nonprofit to adopt your mission and take that donation on your behalf and give it to you as a grant.

**Stu Keroff:** Well, and especially at school. If you're in public school, or a charter school in particular, guess what? You're a nonprofit entity. You can take donations. You can give people a receipt for the stuff they gave you, and they can deduct it from their taxes, and everybody wins. But once you start doing that, then you need to give the kids an opportunity to play with the software, use the software, have fun with the software, and once they see what it's like, then give them an opportunity to add to things; give them an opportunity to install things, give them an opportunity to take the lid off of the computer and try adding RAM or a video card to it, or something like that.

The kids will love doing all of that stuff, because the devices they use nowadays, like phones and tablets, they don't open.

**Adam Stacoviak:** \[40:00\] Yeah, they're magic screens basically, that have nothing inside them, as far as they're concerned.

**Stu Keroff:** Exactly. And you take a look at adults with their computers... The top of the computer, that case is not supposed to open, "What are you doing?!"

**Adam Stacoviak:** "Don't touch that", yeah. "That's the family computer, don't touch it!" I love it, you encourage that hacker heart. I think this is such a cool story that you've done this, and I really would desire you to and I really hope that you can - though this audience, too - in more ways than one share the knowledge you have so that others can repeat it, and be someone to call upon when they have questions.

I don't wanna put too much burden on you, but it seems like you have a pretty big heart for this.

**Stu Keroff:** Send me the questions. I would love to talk to people about this, particularly folks that wanna try doing this themselves. Listen, we are the first Hmong school in the world to have a Linux users group, and I cannot find too many examples of middle schools that are doing anything similar. I found one program in New York state that's doing something with open source, but it's a different model. Theirs is cool, I'm not \[unintelligible 00:41:15.15\] I'm not finding a lot of examples that mirror what we do, and we neither want, nor need to be the only ones.

I want to see Linux clubs, I want to see open source clubs spring up at other schools so that my kids have somebody to network and to partner with and to communicate with and to build community through technology. Those are some of our goals.

Send me the questions, I'm not afraid of that... Awesome, bring it on!

**Adam Stacoviak:** Well Stu, in closing, you know the audience, as I've mentioned... The audience of All Things Open is the audience of the Changelog. We're gonna put our full weight behind sharing these stories from this conference. What haven't I asked you that you wanna share, that you know this community needs to hear?

**Stu Keroff:** There's one more thing I wanna mention, and that is most of the pitch that I've made with the Asian Penguins when we talked about this is to other schools. Our pitch today is slightly different, because there really are not that many representatives of schools at this conference. These are folks that work in the software and hardware industry, for the most part. What I want to encourage people here to do is to reach out to those organizations or schools in their area to find out if there's interest in doing something like this in a place where it doesn't already exist.

Call your local school, check out charter schools in your area to see if they want something like this in their after-school program. Donate computers to a church, or a synagogue or a mosque, network with a nonprofit agency that helps to resettle recent immigrants and refugees. Be a technovangelist, okay? If you believe in the code that you're using, then be the messenger for it. That's my message.

**Adam Stacoviak:** Awesome, Stu. Thank you so much for taking the time with us, I appreciate it. It's a beautiful story. And to the listeners out there listening to this, take this story, run with it, share it with whomever you can... I think it's awesome. Thank you so much, Stu.

**Stu Keroff:** Alright, thank you very much. Have a great day!

**Adam Stacoviak:** You too!

\* \* \*

**Adam Stacoviak:** Thanks again to Justin Dorfman who made the connection from us to All Things Open, specifically Todd Lewis. Todd, you're awesome. Thank you so much for including us in your awesome, awesome conference. AllThingsOpen.org, go there, check it out.

\[43:54\] Next up we've got no other than Shiya Lou on how China does Node. As I mentioned before in the intro, software development is very different in China, pretty much because of the slow translations of documentation and books from English to Chinese, but also because of this Great Firewall of China you've heard about. It's a censorship and surveillance project by the government, and it makes it very hard to do the internet, basically. Let's take a listen.

**Shiya Lou:** My name is Shiya, I am from China. I moved to the U.S. when I was 14 and I stayed there for about eight years, and then I moved back to China for a year. Now here we are, I've already been back for about a year or so, so that's why I'm here at the conference, to share a little bit about my experience, transitioning between the two worlds.

**Adam Stacoviak:** For those out there in the developer world - and any world, really - we hear about news from other countries, right? I've definitely heard about, but haven't looked too deeply into, because I guess it didn't matter to me - not so much like in a negative way, but it didn't impact my day-to-day life so I didn't look much further into it. But I've heard about the Great Firewall of China and I'm aware of this; I'm aware that China is a communist country and you have different ways you live there than we do here in the United States. But for the web, we're sort of like a global economy, right? We're global people, where our national borders define us and separate us, but on the web we're a bit more like family.

**Shiya Lou:** Right.

**Adam Stacoviak:** So kind of give me a peek into your experience then, having lived and grown up in China, then moved here, then moved back... What's been your experience with the way we do the internet, I guess?

**Shiya Lou:** Okay. I'm gonna start off by saying that China isn't really a communist country.

**Adam Stacoviak:** It's not...? Where does that come from?

**Shiya Lou:** I guess because the central party is called the Communist Party, but it's not exactly what you would picture what a communist regime is like... Although I don't really wanna talk much about politics...

**Adam Stacoviak:** No, I'm just glad you corrected me there. I don't want to put any misinformation out there, it's not my intent.

**Shiya Lou:** Okay. So I came to the U.S. in 2007, and at that time the Great Firewall wasn't built yet. Everything was open, Facebook was available, Wikipedia was as well, and I logged on to all these websites back home. In about 2008 and onwards, the Great Firewall started getting built, and it's been perfected over the years, and more and more websites -- at first it was just Facebook and Twitter, and then they added Gmail and Google, and a lot of other big websites that you would use in your day-to-day life in the U.S.

That caused us a lot of trouble in the developer world, because everyone's used to use Google CDN or put a Facebook login on your site - that is just never gonna work in China, because the mass majority actually don't have access to these websites. I guess when transitioning from the two worlds, the biggest thing is that you have to change your habits a lot, from googling to like using Bing or Baidu, and you basically kind of lose contact with your friends on Facebook, because it just slows you down a lot more.

**Adam Stacoviak:** So these networks that we're so used to using actually are bubbles.

**Shiya Lou:** Right, yeah.

**Adam Stacoviak:** We don't think about it like that; we think that we create our own bubbles by choosing our friends, our networks or whatever, or the communities that we're involved in, I guess just by choosing one like Google. So Bing works in China?

**Shiya Lou:** \[48:04\] Yeah.

**Adam Stacoviak:** How did they get around it?

**Shiya Lou:** Well, Microsoft has pretty good relations with the Chinese government.

**Adam Stacoviak:** But Google doesn't.

**Shiya Lou:** Google doesn't. Google is more of internet company and Microsoft started off as a software company, and that is how the basis went.

**Adam Stacoviak:** So give me the basis of your talk, then. You're obviously sharing some of your experiences with living behind a firewall, living behind, basically -- what would you call that? Separation? How do you describe this firewall and what it does to the community behind it?

**Shiya Lou:** Okay, so it's a very common practice for developers to log on to a VPN, that then goes across the borders every day, for work. That's the first thing that you do every day, to start working. For us, in the beginning it's actually okay, since as long as you are on VPN you can have access to everything... But VPN has always been on the hunt...

**Adam Stacoviak:** On the what?

**Shiya Lou:** We're on the hunt by either the security departments...

**Adam Stacoviak:** They're looking for you?

**Shiya Lou:** Right, right. So I was using one when I just went back, and then three months later it closed, so I had to use another service. A lot of my friends set up their own foreign servers. I just ended up using some services, and it's constantly unstable, and you have to look for the newest, best ones.

**Adam Stacoviak:** Okay. So I guess the thing I'm trying to figure out is that outside of the personal experience you've had as a developer, as someone trying to build stuff, for sure here in the United States - or even in other countries outside of China, I guess, from this example - we're used to, if there's information for how to be a better software developer, we pretty much have access to it if it's open, right? But that's not the case for China.

**Shiya Lou:** Right. I will say that the first lesson for software developers is how to connect to VPN \[unintelligible 00:50:14.13\]. Then I think the biggest barrier there still though is language, much less of developer experience in terms of whether you can get across, because for us developers, we can always get across.

**Adam Stacoviak:** Right. I was taking notice to something that's near and dear to us here at this conference (Node Interactive). Obviously, around a Node Conference, anybody who is in the Node community knows what npm is, so seeing Cnpm, which is China's npm -- so you had the language barrier, but then you also have this firewall barrier. Talk about the language barrier first. Clearly, from here to South America there's a language barrier; from here to China, there's a language barrier; from here to Germany as well... So there's a language barrier everywhere. What is your example of experiencing this language barrier?

**Shiya Lou:** Right. I think the language barrier is only an issue in countries that don't use English as the working language. In China, a framework or an open source project like Node is only gonna be popular if it has Chinese documentation and advocates in China. So very luckily for Node, there was a few very early adopters in China who wrote books on Node, and that's what people base their learning and studying from. I see a lot more people reading books than reading online documentations, surprisingly.

**Adam Stacoviak:** \[51:54\] Really? Wow... So they actually have an in-hand, physical books, versus online documentation.

**Shiya Lou:** Yes, right.

**Adam Stacoviak:** Solve that problem, somebody.

**Shiya Lou:** Yeah...

**Adam Stacoviak:** So how current are these books? How often does a popular or somewhat popular software development book get translated?

**Shiya Lou:** I would say it depends on -- I'm not sure exactly how it works, but I think the more popular (O'Reilly books, for example) have a translation in the pipeline as soon as it's released.

**Adam Stacoviak:** Right. So they're released in English -- do they release all the languages, too? The reason why I ask that question is because you said earlier "working language." I think what you mean by that is if I'm a professional and I'm doing work or something work-related, or something like that, then when you go to work you speak English. That's not the case in China.

**Shiya Lou:** No.

**Adam Stacoviak:** Are you familiar with other countries how often it's not the working language?

**Shiya Lou:** For example Japan is one of the bigger countries with English as a working language.

**Adam Stacoviak:** Right. So in Japan they don't go to work and speak Japanese, they go to work and speak English, primarily?

**Shiya Lou:** No, they would speak Japanese...

**Adam Stacoviak:** But they would read English...?

**Shiya Lou:** It depends on the company. Is it an international company that's primarily US-based? Most of our co-workers, even in China and Japan will speak professional English and write pretty good English, but it is harder beyond that. It's hard to make pleasantries in English.

**Adam Stacoviak:** Right. So with your talk, what were you really trying to make people aware of? What was the core goal for you?

**Shiya Lou:** Okay, so while I was in the U.S. I'd also never consider how certain websites are inaccessible in China. When I build my own site, I just use Google CDN, or Facebook logins and all these features, but when I'm back in China it's such a big problem, and also, there are so many internet users in China that it just can't get ignored.

The practice of people getting around these problems are very counter-intuitive than what we believe that are good practices in web development. I guess this talk is really just for people to be aware that there are these caveats that you need to think about when you have visitors from other countries. There's so many people using internet in China right now, that you're just gonna get so much more volume if you have a website that's China-friendly.

**Adam Stacoviak:** That's a good thing, I like that, China-friendly. I'm China-friendly. I mean, I wanna be friendly with everybody. We're obviously at a developer conference...

**Shiya Lou:** Right.

**Adam Stacoviak:** I'm thinking to myself as you're saying that, "Who does that matter most to?" It's almost like when you say accessibility to the web, if I don't have an application that has a lot of users who maybe have accessibility problems - and language is definitely one of them - to me it's like, for developers it totally makes sense that we should have translations; it totally makes sense for O'Reilly to ship a book not only in English but in any other native language where there's a need for it.

This message you're sharing about the language barrier, about being able to tap into the large China audience - who does that come up most to? Is it developers? Obviously when someone like Facebook builds what they built, their network, they're gonna think, "Well, we should probably make it as accessible to anybody in the world as we can", but who does that matter most to, this idea you're sharing?

**Shiya Lou:** I think for us as a company - Autodesk has a lot of customers and partners in China. However, a lot of the engineering teams are in the U.S., so when they were developing, in the beginning they weren't thinking about these users in China. So if you're not thinking about the China market, it's fine...

**Adam Stacoviak:** \[56:14\] That's what I mean. If it's not a part of your business model... Not that it doesn't matter, by any means, but if it's not my focus...

**Shiya Lou:** Right, yeah. If you already have customers in China, then you should be thinking about them.

**Adam Stacoviak:** But see, personally it is of interest to me, because I had never considered it; we run podcasts. I want everybody to listen to it. Now, naturally I speak English, that's my primary language, so I don't think it'd be worth it to me to have my podcast translated... However, we could transcript them - which we are doing - and those could easily be transcribed to different languages if we wanted to... But it is important to me to be inclusive to the whole world, including China, of course. I mean, you have so many people there... I would want anyone there who cares about the things that we care about, which is open source software development, open community, inclusivity, diversity - all those things that we really care about, I'd want them to be able to listen to my shows, too.

For someone like me, who uses Fastly as our CDN, which is a US-based company, what would happen if someone goes to Changelog.com? Our servers are Linode servers, they're based in the United States, our CDN is an international CDN... How would someone from China be impacted by going to Changelog.com? Would they be able to listen to my shows or would they not be able to?

**Shiya Lou:** They would be able to.

**Adam Stacoviak:** We don't force them to use Facebook, we don't use Google CDN... We have our own CDN.

**Shiya Lou:** Okay, cool. Well, any server that's outside of the borders is gonna be a bit slower than servers that are within the borders. So you're looking at a page load time of a couple seconds instead of milliseconds.

**Adam Stacoviak:** Yeah, milliseconds, for sure. We focus on speed.

**Shiya Lou:** Yeah. Then you definitely would need to have servers in China.

**Adam Stacoviak:** Plus, we built the website just for fun. We built it in Elixir, which is known to be pretty fast, because it sits on top of the Erlang VM, and we used Phoenix the web framework, and we purposefully used a smaller JavaScript footprint. We purposely didn't use frameworks that would have more than we needed just to have a couple features. We actually wrote our own JavaScript for our own web player; so we did some things to kind of keep it fast, for those reasons.

So for people like us, or people that aspire to be like us, to have that kind of focus, with speed and our own CDN, what can they get right, I guess? Using our own CDN, that's obviously helpful, but you've mentioned the speed barrier... What's the speed roughly for outside of the borders? I'm just curious.

**Shiya Lou:** It really depends on the weather.

**Adam Stacoviak:** It depends on the weather, okay...

**Shiya Lou:** I have no idea what the speed is in terms of the different servers, because it actually really changes depending on events, political events in the country, sometimes.

**Adam Stacoviak:** Wow... So this is a human thing. Like, some human is doing this. You said the weather, but it's really... It's the winds, but it's the political winds, so to speak.

**Shiya Lou:** Right.

**Adam Stacoviak:** So if I care about the China market, the internet, and I wanna be open to those users there, those developers there, when you think about speed - that's one thing.

**Shiya Lou:** Right.

**Adam Stacoviak:** I'm sure the winds change, that happens, but aside from making a performant site, what else can I do to be mindful of the speed barrier?

**Shiya Lou:** So the best thing to do is always have a server within China, but it is very difficult, actually. For example, AWS just got its license in China, and to deploy on AWS you need to be a registered company in China, and have all your paperwork ready.

**Adam Stacoviak:** \[01:00:17.20\] A small business is hard enough.

**Shiya Lou:** Yes, exactly, and it's very difficult to incorporate something in China.

**Adam Stacoviak:** So you're not making it any easier.

**Shiya Lou:** Yeah, I'm sorry... \[laughs\]

**Adam Stacoviak:** Wouldn't it be easier - devil's advocate of me saying this, but wouldn't it be just easier to get rid of the firewall?

**Shiya Lou:** Yeah, well there's a lot of...

**Adam Stacoviak:** What's the purpose of it? Was it the people of China voting for this thing or desiring it, or was it something else? Maybe this is a whole different subject you don't wanna go into, but just share what you can share about what we could do about it. Will it ever go away, I guess, is probably the bigger question, rather than get you into an uncomfortable situation where you have to explain something that's just tough. I'm not trying to put you in a corner and ask you that, I'm just trying to figure out why is getting rid of it not an option.

**Shiya Lou:** People in China can't really vote for it... We can't vote. It started in 2008 mainly because we were using Facebook and Twitter to incite protests, and they sometimes become pretty violent. That was in 2008. Afterwards, it just got expanded and any company - for example Google - who would not cooperate with the government on censoring certain word searches, they would get kicked out of the country, basically. They're not hesitant to even kick out Google.

**Adam Stacoviak:** Well, you've got your own version of it, right? You said Baidu...?

**Shiya Lou:** Baidu, yes.

**Adam Stacoviak:** Okay. And then you've got Bing - good job, Microsoft! What other search options do you have?

**Shiya Lou:** There's this company called 360 Search, this company called \[unintelligible 01:02:15.17\], and there's a bunch of companies making their own search solutions. My personal experience is that they never really compare to Google \[unintelligible 01:02:24.15\], maybe because once Google went out of China there wasn't enough competition for people to be forced to...

**Adam Stacoviak:** To make it better. That's a good example of having a really good user experience (I'm air quoting); I think Google has a good user experience, but I think that there obviously are some biases where if you compare the results from other engines that you might like those better, but I've always, in a blind taste test so to speak, I've always preferred Google's results, without any styles; not even looking at the page, but just in general, the results I get back seem to be more relevant to me.

Let's flip it around then, let's talk about China to the outside. Your talk is on how China does Node, and I think what you're talking around is what we're been sharing here - the speed issues, the language barriers, educating developers on how to better think about using certain web services to communicate to China or be inclusive of China... What about the flipside? Do we have any issues reaching China's server, reaching China websites...? How does that work?

**Shiya Lou:** I have noticed that the services and websites and apps that I use that have all the servers in China are a bit slower outside of China than within.

**Adam Stacoviak:** But accessible though.

**Shiya Lou:** Yeah, accessible.

**Adam Stacoviak:** Okay. So there's no blocking out, it's just filtering what comes in.

**Shiya Lou:** Yes.

**Adam Stacoviak:** \[01:03:57.16\] So I guess, since we're talking here, we're at Node Interactive, this series we're doing here is called The Future Of Node JS, talking about the future of Node... For those out there listening, these are people who are either in the ecosystem already, developers in the Node ecosystem, and they want to learn more about the future. What can you share, more from your talk or more from your ideas on the future of Node and where we're going? One thing I mentioned earlier and we didn't get to dive much into, was the npm of China, basically. How does that play out?

**Shiya Lou:** Cnpm I think actually stands for private, or company npm. It actually doesn't stand for China, it stands for Company npm.

**Adam Stacoviak:** I had that wrong... I just made an assumption.

**Shiya Lou:** I didn't know until a few days ago either, actually. I've just been using it...

**Adam Stacoviak:** Wow... Okay. So it's a mirror of npm, right?

**Shiya Lou:** The registry, yes.

**Adam Stacoviak:** Right. And there's a little bit of latency, a couple hours...

**Shiya Lou:** I think once a day, or so. So remember the ZPad thing?

**Adam Stacoviak:** Yeah, LeftPad.

**Shiya Lou:** Yeah, LeftPad - it never affected China because when it happened we were like, "Oh, let's just stop mirroring that part. Let's just not sync that part."

**Adam Stacoviak:** Wow. That's an easy way to avoid it. For those who aren't familiar, give us the deeper side of Cnpm. It's a mirror of the registry... What's the point of it? Is it because of the firewall?

**Shiya Lou:** Yeah, it's because it's much slower to download...

**Adam Stacoviak:** From elsewhere.

**Shiya Lou:** From npm, yeah.

**Adam Stacoviak:** So who got the permission to synchronize this? Did they work with the government, did they work with somebody to bypass parts of the firewall to sync the registry?

**Shiya Lou:** So the firewall doesn't work in a way that you need permission to do things; you just do it until someone stops you. So npm right now does not have anything political, basically, so there's no reason to censor it. And it's very important for the developers, so that's a very...

**Adam Stacoviak:** So basically until it may cross a line that should not be crossed, door are open.

**Shiya Lou:** Right, yes.

**Adam Stacoviak:** How does that make you feel? Does that make you happy/sad? That's gotta make you sad, right?

**Shiya Lou:** Yeah, I am completely against it. I think most people, or most of my developer friends are against it, too. I have met a couple of people who have been working on this project, which I don't call them friends... \[laughs\] I think most people - if you work on this project, you could probably find a better job elsewhere, that's better for humanity...

**Adam Stacoviak:** I'm just kind of curious, if someone from China -- because you still live there? You live in the U.S. now, right?

**Shiya Lou:** I'm still living in China for another month or so.

**Adam Stacoviak:** Okay, gotcha. So would you get in any trouble if someone from China heard you talking like this, or just in general sharing information about how things work?

**Shiya Lou:** I think the extent of what I've been talking about is pretty mild, so I shouldn't get in any trouble for this.

**Adam Stacoviak:** But it's possible.

**Shiya Lou:** Yes.

**Adam Stacoviak:** What I'm trying to get at is that the listeners listening to this should be thankful that you're sacrificing potentially, to some degree.

**Shiya Lou:** Yeah.

**Adam Stacoviak:** I'm not sure what level of sacrifice there is, but there's some concern for you.

**Shiya Lou:** Well, yeah, but I think this is pretty common knowledge already, so that's fine for me to talk about. It's pretty open... Everyone kind of knows about this now.

**Adam Stacoviak:** Okay. So for those who are right now in China, listening to this podcast - maybe we've got a hundred people; it's a big country, a lot of people there, maybe it's 10,000 people, I don't know... What do they need to know about Cnpm? What do they need to know about this concern you have of the firewall, this concern of the language barrier? What do the developers inside of China need to know?

**Shiya Lou:** \[01:08:12.09\] Well, I think it's definitely more beneficial to learn English, because you're far ahead of people who have to wait and read Chinese documentation. I think that's actually the bottleneck for developers in China - not being able to be updated so quickly with English documentation.

**Adam Stacoviak:** You need to hear you say that; I wouldn't expect you to say that it'd be just easier to learn English, because it seems like it's part of your culture, your heritage, where you're from, to keep and maintain, rather than to give up.

**Shiya Lou:** Can you repeat that?

**Adam Stacoviak:** It wasn't really a question, I was just empathizing with you that I find it a little sad that the bottleneck is the translation, that the bottleneck is being forced to some degree, learning or speaking English.

**Shiya Lou:** Well, so computer programming is basically in English, so everyone is kind of forced to learn English.

**Adam Stacoviak:** I guess that's true, I'll take that back then. I'm not empathizing, I'm just kidding. \[laughter\] I'm a fan of Ruby - my roots are in Ruby, huge fan of Yukihiro Matsumoto, or Matz, as we know him, the creator of the Ruby language... Native Japanese speaker - he speaks Japanese as his primary language, but he came on our podcast and spoke English, but only we really asked him to, like "Hey, Matz, we'll speak slower, we'll take our time, we'll edit out the parts that don't work out right, we'll make it work..." We're open to having people like that on the show, obviously, that aren't only English speakers.

I'm not really sure what my question was, I've caught myself rambling. That's really all I have. Did you have anything you wanted to share with the Node world that I may not have asked you?

**Shiya Lou:** No, I think we have covered it, really.

**Adam Stacoviak:** Okay, I'll stop rambling then. Thank you, I appreciate it.

**Shiya Lou:** Okay.
