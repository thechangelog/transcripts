**Jerod Santo:** So we're here with George, a.k.a. Kode Vicious. For the last 15+ years you've been writing this column for ACM Queue, which is kind of an ask-any-style column where people write in and you respond under this Kode Vicious persona, which was kind of an angsty, kind of a neckbeardy - you can describe it - programmer.

**George Neville-Neil:** Cranky.

**Jerod Santo:** Cranky, there you go. That's the word I'm looking for. And you've been doing it for so long that you've turned this into a book now called The Kollected Kode Vicious. But tell us first of all how did you become this character? Tell us that story.

**George Neville-Neil:** So I was involved with ACM's Queue magazine from nearly the beginning. They'd invited me in to actually do an issue on Embedded Systems, because Queue is actually curated content; we go out to people in industry and we try to find people who will write about particular topics. And we were doing a topic about embedded systems, which is something I've done a lot of, even back when they started. And they liked the issue so much they've put me on the board, which was an amusing surprise...

About a year into the magazine we realized we had no columnists. We did not have any regular feature writers who came back with a consistent voice, and it was something we felt the magazine needed; or at least some people felt the magazine needed.

So Queue Editorial Board meetings actually are held over dinner at a nice restaurant, which is the closest thing to a payment we get for working on this stuff... \[laughter\] Yeah, it's not a for-pay gig. But very nice dinners, very nice people, far too much wine, it turns out...

\[00:04:14.06\] So at one of these meetings we were discussing "Well, what are we gonna do about columnists?" and someone else (Wendy) turned to the table and said "Well, we should have someone who has a real attitude problem, someone whose bald." And for your listeners, I have been shaving my head for most of my career, so I was tagged with trying to come up with a column.

The original idea was something along the lines of actually Miss Manners, which I used to read with my mom when I was a kid. People will write in and you give kind of a snarky response. Initially, I tried to write very much in her style, which is nearly impossible for what I wanted to do...

So the style went through a couple of revisions. We had a whole bunch of ridiculous names that you can see in the preface to the book, where I talked about what Kode Vicious could have been named... But along the way I realized that what I really wanted was something where I could vent my spleen over incredibly stupid things that happen at work, which I think is something that all of us really want to do, but not many people take the time to sit down and try to reason out a rant over 1,500 to 3,000 words...

So I did that, and I came up with a bunch of test pieces, brought them to the board, and we hammered out the name Kode Vicious, which I stole from Sid Vicious, because I'm an old school punk rocker. And then that was how the actual pieces started getting written. We would put something in each issue, and then eventually they got reflected also into CACM, which is ACM's big print magazine.

**Jerod Santo:** So it's funny that you stole it from Sid Vicious, because when I first heard it, for some reason I thought about the "Macho Man" Randy Savage. To me it sounds like a professional wrestler who's like "OOHH YEAHH!!", like you're gonna get--

**George Neville-Neil:** Like you're gonna take a chair; it's similar with a chair.

**Jerod Santo:** Yeah, which has a similar style. So is this Kode Vicious -- how much of it is your voice, and how much of it is purely fabricated because the column has to be cranky and snarky, like you said?

**George Neville-Neil:** So I don't know how many of your listeners will be people who've worked with me on various open source projects, or other projects, but I have been a cranky old man since I was a young, and now I'm just aging into it... I've got the great beard, which helps, and I've shaved my head for a long time, that helps... And tattoos give a sort of an aura of harm... So it's actually not very far from my voice.

It's kind of that voice that you'd like to use in meetings, or I'd like to use in meetings, which I don't get to use in meetings, because HR would fire me... It's very close to the voice that I use for that particular piece. Now, I've written textbooks, I've written this book, and I've written the columns, and I've written scientific papers... Those are all written in a different voice, and this is the one that is -- I wouldn't say it's the closest to my personality, but it's the most freeing. I don't have to sit and very carefully consider which terms I'm going to use; I can, for the most part, stream of consciousness how I feel about a particular topic, and then go back and do some editing.

One of the things I mention in the book, and I've mentioned before when we got to our hundredth column - we had a special column for the hundredth column - and one of the people I credit with a lot of the readability of the work is actually Jim Maurer, who's been the publisher of Queue, and he's been the editor of Kode Vicious the entire time that I've been writing it. So every once in a while I'll read one of my own columns and think "Did I write that, or did Jim edit that in?" And then I have to go back and look at the original. Sometimes the clever line is mine, and sometimes the clever line is Jim. And sometimes the fact that I'm not saying things that would get me censored at ACM is Jim's help as well.

\[00:07:56.10\] But yeah, it's very close to -- I like to think of it as, if someone were to come into my office and ask me a really stupid question, and we were to have to go over it, that would be the kind of thing that I would -- you know, 80% energy level of what I would say. "No, look, this is what's going on. You're absolutely wrong." Or "This is why this is terrible." "Why didn't you look at these things?!" It's very much that kind of feeling.

Whereas when you're writing a textbook, you don't get to write like that. It's very -- I wouldn't say dry... We tried to make it so that it's not too dry, but it's definitely not -- there's a lot less emotion, a lot less heat in my other writing... And in this, I get to go full bore.

**Adam Stacoviak:** On that note, there's a well known term that emotion is energy. It has to go somewhere. At least we say that on our show, Brain Science. And I'm curious if this is an outlet for you, in terms of therapeutic even.

**George Neville-Neil:** Oh, yeah. Well, I wouldn't want a shrink to be reading these columns and telling me what they really thought of me... \[laughs\] Sending me pages from the medical text...

**Adam Stacoviak:** What I mean is in terms of it being an outlet for you.

**George Neville-Neil:** It is definitely an outlet for me. Initially, when I started writing them, they would come up each month, because we were doing ten issues a year of Queue at the time... And we'd be like "Well, who's written in? What do I have that I wanna write about?" And then over time, I realized every time I was going to be really angry at something at work, or really angry at something in a piece of software, I could just write down what I was angry about in this file, and then when I ran out of material, I could just go open the file and I'd be angry all over again. So in that way - yeah, it's definitely a way of keeping myself from... I haven't put any holes in my office wall in a while, but it keeps me from smashing things on my desk, or screaming too loud and scaring the neighbors.

It is definitely a good outlet, and the thing that's always an interesting balance is "Well, how much of it is outlet, and then how much of it will be useful to a reader?" Because just having me scream into a text buffer, while that might make me feel better, isn't really gonna help my readers.

**Adam Stacoviak:** On that note, is there a framework to what you write then? So balancing the outlet in terms of, say, emotion and letting loose and being free, which you write, but then also being -- I suppose having a decent answer. You sort of have to weave the two in there, right? Is there a framework for it, or a science to it?

**George Neville-Neil:** I wouldn't say there's a framework or a science or a...

**Jerod Santo:** Formula.

**George Neville-Neil:** ...an outline/formula. It's always column response; there's a letter that comes in, and "Here's what my problem is. What do you think of this problem, what do you think of these things?" And then my response is an opinion.

When I write the response, the one thing I go -- and sometimes I have to catch myself in the middle of the writing, because when I do the writing, it is completely stream of consciousness. I just sit down and I start typing. And I've been writing long enough that - I mean, not just this Kode Vicious, but generally - that's a process that works for me. A lot of other people have to sit down and very carefully consider... Whereas I can just sit, open a buffer in Emacs and just start typing. And I will exactly do that when I have to get a piece done.

What I've noticed is about halfway through the piece, if I have not gotten to the point of writing the point of the response - like, what's the hook? What is the -- even if it's not the answer, what is the thing I wish to communicate in response to the question? ...then that's the point at which I sit down and I think "Okay, what do I really want to tell the reader?" Because that's the thing that makes these things worth reading. If you wanna just go read rants, you can just go read Reddit, or some other \[unintelligible 00:11:34.21\] But the point of the writing has to be to either get the person to think about something differently, or do something differently, or look at the problem from another point of view... So that's - for lack of a better term - the closest thing to a framework I have.

I'll usually get halfway through the response... And sometimes the point will be very forefront of my head, depending on what the question is. Certain questions I kind of have the answers, like "Oh no, I totally wanna answer this in this way", and I'm gonna take them on an ark from the beginning to the end of this 1,500 words, but in the last 500 words we're gonna get to the point of like "Here, these are the things that really matter."

\[00:12:16.16\] Sometimes that's very apparent at the beginning, sometimes it's not. If it's not apparent at the beginning, then I'll just start writing, and sort of as I get to the middle, I'll usually have written down -- you'll see this in a significant number of the pieces... That eventually you wind up with a list, or a description list, or something like that that gets called out, which is - "Okay, we've talked about this problem. Here are the five things I think are really important", and those are my answer.

**Jerod Santo:** This is old SNL sketch, with Jimmy Fallon; I don't know if you guys remember it... Where he played Nick Burns, your company's computer guy... And people would call him for help over to their desk; "Hey Nick, I can't get the email figured out", whatever... And he was this obnoxious, cranky -- his tagline was "MOOOVE!", like "Get out of the way. I'm gonna do it." And nobody likes the guy. And he played into this trope and this stereotype of the angry, cranky, obnoxious, in that case IT/tech support person, but translated over to programmer... And I think Kode Vicious could potentially go there if you weren't actually being helpful. He's like "I'll do it for you." You can't reach across your column and say "Let me write that code for you" or "Let me just do it", because that's not the point. So I feel like there could have been an opportunity to lose the thread and just become a cranky guy; like you said, berating people through your text buffer. But if you keep the column actually useful, people know what they're gonna expect... They know it's Kode Vicious, so they're not surprised when you interweave the crankiness into the prose... But you actually have something to say that's useful.

At the end of the day I think it's a nice combination of entertainment and education, in a way that's like -- you know what you're getting.

**George Neville-Neil:** I think that for me, even when I'm dealing with people one on one -- the nice thing about being able to write Kode Vicious is I can say things in Kode Vicious that I cannot say at work, even though I thought them so loudly that paint would come off of the conference room wall, right? \[laughter\] I wear glasses, and people pointed out to me that they loved being in meetings with me when I take my glasses off, because they know I'm about to say something really horrific... Usually, someone in the meeting said something really dumb, and just really totally useless to whatever problem we're trying to solve, and I guess my tell is to take off my glasses.

So I definitely don't make for a hostile working environment, but writing the column is the place where I get to do that. But as you say, if it were just that, it would not be entertaining, and I can't imagine that people would have read it. I was quite surprised when five or six years into it I found out that Kode Vicious is the single most popular thing that's ever been written for ACM. Now, there are not many columnists at ACM; we've got Tom Limoncelli, and a bunch of other people who've come in from Queue, and some people in CACM... But it turns out that Kode Vicious has been downloaded by more people than anything else on ACM's digital library... Which was one of the reasons I thought a book might be appropriate.

So clearly, either people are all masochists and like to be verbally abused every month, which I don't think is true, or I have found a way to actually temper that with that useful advice.

**Jerod Santo:** Well, I think you struck a nerve, like you said, with your readership... And obviously, to do this for that long, every month for 15+ years, with payment being an annual very nice dinner and the like, you must be enjoying it. The readership enjoys it, and quite notably, one specific reader who wrote the foreword for your book likes it... Which - put that on your wall. Tell us about Donald Knuth and his thoughts on Kode Vicious.

**George Neville-Neil:** \[00:15:53.00\] Amusingly, you say "Put that on the wall..." Well, I'll tell you about something that's on my shelf which inspires me to write every month or two... So for the Turin 100, ACM did this -- I think it's actually the best event ACM ever put on. Because instead of it being targeted at a particular area of computer science, ACM's things are very much SIGGRAPH, SIGCOMM; the various SIGs. So you go to a conference and you're only talking about graphics, or you go to a conference and you're only talking about operating systems, or computer languages, things like that... For the Turing 100 they brought in as many Turing award winners as they could, and they had them on panels talking about their areas.

So we had a day and a half of a session on programming languages, a session on operating systems, a session on graphics, a session on AI... It was great. Of course, Donald Knuth, a very famous Turing award winner) was there, and it just so happened that -- I'd actually met Don at a hackers conference years before. We weren't friends or anything, we just chit-chatted. But I found out from another colleague that Don -- he came up to me and he said "Don's looking for me." Like, "Okay, Don Knuth is looking for me. That's a little strange." And I'm like "Did I say something that offended him? I'm not sure..." \[laughter\] You know, when you're Kode Vicious, that's kind of what you should assume; it's like "Oh, I've said something terrible."

Anyway, so I'm at the conference hotel in San Francisco, I happen to find Don in the hallway... I was like "Hey, our mutual friend Jeff told me you were looking for me. What's going on?" And he says "Oh, I didn't realize that you were actually Kode Vicious." I'm like, "Um, okay..." And he says "I love your writing", at which point I did my very best not to soil myself... It's like one of those Warner Brothers cartoons where your soul jumps over the moon, kind of thing...

**Adam Stacoviak:** That's right, yeah.

**George Neville-Neil:** I'm standing there and I'm talking about it, and I'm thinking "Now what do I say?" besides thank you, which I said like three times. And we got to talking about the column, and he actually asked if he could write a letter to Kode Vicious. And I'm thinking "How do I sarcastically respond to one of the nicest and most brilliant people in computer science as Kode Vicious? I am screwed." But of course, to Don I said "Sure, I would love you to write a letter. That would be incredibly kind. I'll do my best to answer." And we talked for about 20 minutes.

So Don doesn't do email. He has a secretary who handles his email for a long time. So he sends me a postcard, which I have on my shelf... Because when I'm feeling like I don't wanna write this month's Kode Vicious, I just look at the postcard from Don Knuth, and I'm like "I guess I have to write this."

So he wrote a postcard asking about his current book, and I sent him a personal response instead of putting this into a Kode Vicious... Because like I said, how am I going to respond to Don Knuth exactly as Kode Vicious? It just seems terrible.

So that was the story of Don writing a letter and getting a response. It was actually cited in -- I've got the books on my desk; I think it's in 4A. The response is in there; so my name is in one of the volumes of The Art of Computer Programming. So 2012 was basically the year that I didn't need to do anything else as far as I was concerned, because I'd gotten all the kudos I was gonna possibly get... But you mentioned that he wrote the introduction, which is another story...

So every year there's the Turing Award dinner ceremony, which is a bunch of geeks in fancy dress. It is really quite terrifying to see all of us in tuxedos, and the women are in top-of-the-line dresses, and overall a bunch of nerds dressed like that, waiting for things to be announced... And I will tell you that \[unintelligible 00:19:37.07\] thus far has the best tuxedo of anyone who goes to the Turing Award.

So my publisher, Jim, was trying to get me to do the book, and I was like "Well, you know, I don't know... It doesn't make any sense. We've already done all of these things. It would be interesting to collect them together..." I was thinking about it.

\[00:19:58.02\] And it was Jim's suggestion, he said "Well, why don't you ask Don to write the intro?" I'm like "That seems like an imposition on someone who's been very nice to me..." But I saw Don at dinner, and I asked him about it; I was like "I'm thinking about doing a book. I know you've enjoyed the columns... Would you be willing to write an introduction?" He says, "Oh, I don't usually do that, and I'll think about it." I was like "Okay, he probably won't do it." That was about a year and a half before last November, when I again saw Don at this conference that we both go to in California... And Don comes up to me and he's very excited, and he says "Oh, I need to show you... I've written you the most wonderful introduction." And I realized "Uhh... I'm gonna have to write the book." \[laughter\]

**Adam Stacoviak:** "I have to write the book..." That's awesome.

**George Neville-Neil:** That's how we got the introduction... That conference is in November, so it was November of last year... And I immediately emailed Jim, my publisher, and I was like "Okay, so we've got an introduction. Now I need to put the book together." Then I, from there on, created the book, and found a publisher... And now it's a book.

In fact, I believe I get paper at the end of this week. So it's available electronically, but I'm really looking forward to -- I'm old school, I like the physical book as well.

**Adam Stacoviak:** Yeah. This is a slight aside, but I'm curious of the feedback loop, because in this case, Donald Knuth came to your personally and said "Can I write a letter to Kode Vicious?" But I'm curious, is the feedback loop to others who write in just simply the printed version of it, or the published version of it? Do they get some sort of feedback loop saying "Hey, you've written in, and here's the response from Kode Vicious."

**George Neville-Neil:** So when people write in, I actually respond personally from my email... Because they'll usually ask a specific question, and I'll say "Oh, this is a very interesting thing." If I write a piece and it's published, then I'll send that to them later.

Yes, I get emails as Kode Vicious, but I'm not like "Dear Abby", or "Dear Anne." I'm not getting hundreds of letters and I don't have a staff that has to address them. So I respond to all emails personally; "Thank you for your question", or "We've published this under this", or "Oh, that's really interesting..." If it's something that is actually really interesting to me, I'll respond not as Kode Vicious in the email to them, just saying what I think generally, without going to 1,500 words, and then I'll write the piece.

**Jerod Santo:** And then once it gets published, that's when they hear back. Did you say that you actually respond with the piece at a certain point in your email, or are you just emailing back and say "Hey, it's published. Hit this up."

**George Neville-Neil:** I usually respond twice. So I'll respond immediately - I mean, within a few days; who responds immediately to email anymore...? I'll respond within a few days, and say "Oh, that's a really interesting topic..."

**Adam Stacoviak:** Jerod does, immediately... \[laughter\]

**Jerod Santo:** Yeah... Completionist over here. I've gotta respond.

**George Neville-Neil:** \[laughs\] Maybe I should give you my inbox.

**Jerod Santo:** You've got to pay me more than one nice meal a year.

**George Neville-Neil:** Okay... \[laughs\] Anyway, so when people write in to Kode Vicious, then I will respond within a day or so, as long as it's -- I mean, the funny thing is I've not gotten... And I probably shouldn't say this on the air; I've gotten very few random spam emails to Kode Vicious. All of the email that's actually come through the KV link has all been from people with serious comments or concerns or questions.

So I always respond from my personal email first, like "Oh, thank you for writing. That was very interesting. Here's a bit of what I think about that" or "This is interesting" or "This is not interesting." You know, a conversational kind of email. And then if and when I publish a piece based on the question, then I'll send them a follow-up... Because it will be months. If they send me something, in my mind I write about it for a few months, and then eventually I will... And I'll be like "Oh, that came from this person." I'll send them an email and say "By the way, I've really enjoyed your question, and here's the Kode Vicious response.

**Break**: \[00:24:02.11\]

**Jerod Santo:** So you've been writing these columns for a long time, you've stacked up a huge pile of them, and now it's time to put together a collection... Truly, they all didn't make the cut. I see 87 essays across five chapters... You've got them broken out nicely into some logical sections - The Code at Hand, Coding Conundrums, Systems Design, Machine to Machine, Human to Human... And then the essays are kind of fit in there as they make sense... But how do you go about even selecting? I'm sure you have your favorites, you probably have ones that you despise, then there's ones the readers like... What was your process for actually putting this thing -- probably there's some that aren't relevant anymore.

**George Neville-Neil:** So when I went to put them together, the first thing I did was ask Matt Slaybaugh at ACM, who does all of our stats, tell me which were the most popular. Because obviously, I wanted to know which ones people had read, and read to the end, because we have the whole dwell time, and all that stuff... And so I started out with the most popular.

But it's interesting that you mentioned the chapter names - that was the hardest part, fitting the pieces into a narrative that makes sense. One of the things I've actually written about as Kode Vicious, especially since I've written a lot about documentation, good and bad documentation... I'm very big on narrative. I don't want to just splat words at people randomly, and have them try to pick up information from that.

We started out with a list for most to least popular, and then I went through and I tried to find things that I thought kind of suited my frame of mind. So if you look at the chapter names themselves - Code at Hand, Code Coding Conundrums, Systems Design, Computer to Computer, Human to Human, those came about because when I've looked at the pieces all across the entire set of what I'd written. Those were the five major themes.

There were other pieces that lie outside those things, that talk about topics maybe that aren't easy to slot in there... But overall -- so there are places where I talk very specifically what should you do with a piece of code, or more broadly, "Okay, we're gonna design a system", which is a much bigger problem than just writing a function.

Computer to Computer is in there because I'm a networking geek, and I've always been a networking geek, and it's the area that I enjoy working on most... So obviously, I was gonna write a lot about that as Kode Vicious.

And then the most surprising one of course is - to a nerd anyway, someone who works on deeply nerdy things - Human to Human. I had actually written a significant chunk of material about how to deal with people at work, how to deal with explaining your work, all these kinds of things. One of my publishers likes to say "Oh, those are the soft skills", and I didn't think I had those... \[laughter\] I don't think I'm supposed to have those.

\[00:28:00.02\] So once I had this list of what was most popular, as well as a list of everything I'd written, and then I saw these five areas, then I just thought "Okay, I'm gonna pick those as the five areas, and I'm gonna slot pieces into each one, and see which ones make sense and see which ones don't."

There were pieces that were definitely outside of those five areas, there were pieces that weren't as relevant anymore, or would have required a lot more new words to be written around them...

One of the nice things that was nice about writing a book, when I first had the idea for the book, when we were talking about the book, the thing that I worried about most was I wouldn't have something new to say. But the nice thing about having the pieces is I could then go back and each piece begins with another new (let's call it an) essay about the topic that I wrote about. Even if something was not relevant anymore, although I didn't include those, but even if something was changed in the last ten years, I could talk about the changes and still leave the original conversation in. I could say how my thinking had evolved, or how technology had evolved, or maybe "Oh, it's still the same problem, only faster", which is a common thing in computers, where we're like "Oh, we had these problems before; now we just have them more quickly, because we have faster computers."

So that was a lot about how to get that in there, and how to pick the pieces and make sure they're relevant.

**Jerod Santo:** Kind of like a director's commentary on his movie. You get a chance to actually just take your pieces and like "Hey, here's some commentary", setting it up, or tearing it down, and then here's the actual piece of content that originally was written.

**George Neville-Neil:** I guess that's a good description.

**Adam Stacoviak:** What about the quotes that go along with that? How was that selection process for you? I know some of them are -- well, they're all pretty good. I like them all. \[laughter\]

**Jerod Santo:** So explain the quotes... Each essay has your intro, but also has some sort of quote alongside.

**Adam Stacoviak:** Right.

**George Neville-Neil:** Oh, epigraphs...

**Jerod Santo:** And some of these are anonymous, some of these are from famous people etc.

**George Neville-Neil:** So I've always liked epigraphs... In fact, I'm kind of stealing something that Don Knuth does in his books. He's got them all over the place, and his are far more intellectual than mine are... But I wanted to have something -- I mean, part of doing Kode Vicious is effectively I'm doing stand-up technology; I'm a stand-up comedian talking about technology... A very unfamous stand-up comedian talking about technology.

So one of the things I always like to bring to the pieces, and I realized I could do with the book and with the epigraphs in particular was to be funny. I was like "Oh, okay, how can we talk about this in an amusing way, or how can we find --" Some of those epigraphs are quotes from famous computer scientists talking about how terrible software is... So I guess in a way I'm dragging them along with me and making it seem as if I'm not the only cranky person in the room...

Actually, my favorite epigraph story... So there's a musical comedian from the 1950s and '60s, Tom Lehrer, which... He was quite famous for a long time; some people in tech still know who he is... But he wrote this spoof song called Lobachevsky, which talks about plagiarizing other people's work in mathematics... And when I was putting in the piece about copying other people's work in computer science, I was like "I have to quote Lobachevsky." I know all about copyright, but then of course Pearson came back and they're like "Yeah, this is still under copyright, so you can't use this..." And I said, "Well, what if I can get permission?" And they said "Sure." I'm like, "Okay, fine."

So Lehrer taught until some number of years ago -- he's now 92, but he taught a large part of his career at U.C. Santa Cruz. I have friends at U.C. Santa Cruz, I emailed them, I'm like "Hey, can you find Tom Lehrer?" And figuring "Okay, it's a last-ditch effort. I really wanna use this piece." And three days later, as a text message I just get two phone numbers and an email address from a friend of mine at Santa Cruz. I'm like "This is Lehrer's email address, right?" and they're like "Yes." So I'm not calling this nice 92-year-old man to ask him for his permission...

So I email him, I get an immediate response, it's very kind, very snarky, which was amusing... His comment was something like "Oh, publishers are terrible, and Pearson is the worst", which is my publisher... \[laughter\] And then he sent along the permission form signed.

\[00:32:11.02\] A follow-up though, two months later, just this month in October, he's actually released all of his works as public domain... So all of Tom Lehrer's works, many of which are funny and many of which are classics - now anyone can have them as an epigraph in their book.

**Jerod Santo:** That's pretty cool.

**George Neville-Neil:** So I don't know if I caused that by prompting that, or he's just realizing he's 92...

**Adam Stacoviak:** It got easier to give permission.

**Jerod Santo:** Or you just have really bad timing... Because you could have just waited a little while.

**George Neville-Neil:** Yeah. \[laughter\]

**Jerod Santo:** You saved yourself the trouble.

**George Neville-Neil:** Well, printing deadlines are worse than software deadlines. You can't push printing deadlines, because they have these machines that print the books.

**Jerod Santo:** Hm... That's annoying.

**George Neville-Neil:** I was on a real deadline, not a software deadline.

**Adam Stacoviak:** This chapter you're referencing too with this epigraph, it's copying... And I'm noticing that there's no inwrite. So even part of your response, your pre-essay too, which you had written prior to, or which you published, wasn't someone saying "Hey, can you write about this?" or "Hey, KV, here's my question." Is this an anomaly, where it's you writing without -- what do you call it --

**George Neville-Neil:** The column response.

**Adam Stacoviak:** Column response, yeah. There you go.

**George Neville-Neil:** Without the incoming letter.

**Adam Stacoviak:** Yeah.

**George Neville-Neil:** So there are a few pieces - I would say one for a year - where I have a topic I wanna write about, but no one's written in about it... So I'm just gonna write about it. In the 15 years there's probably been 10 or 15 of those, and yeah, this is one of those. There has been this -- I can't mention the company or the person obviously, but there has been an issue which had caused me to take my glasses off in a meeting... And I thought "Okay, I need to write about this." And it's funny or ironic, I guess... Sometimes I write about these things and I think "This is kind of obvious. How do people not know this."

A colleague of mine who's a relatively well-known computer science professor, having read that, he was like "I am going to make all of my students read this, because at least 10% try to cheat every year, and they all get caught." I'm like "Oh. I guess that was useful."

But it was a very funny -- for me it was something I just felt I needed to write, because I was dealing with people who didn't get the issue... And then again, it turned out to be useful to someone else. So that's always a good feeling.

**Adam Stacoviak:** One interesting thing about artists - and you mentioned your association, I suppose, to stand-up comedy. And this is stand-up comedy with coding involved, I suppose, if that's how you say it... Is you have to have something to say. Artists, the reason they get up there in the first place, or show up, is they have something to say. Not too often do you see an artist show up and have nothing to say. So you have something to say, is the point.

**George Neville-Neil:** I think it would be difficult to sustain the active creation, which is a very \[unintelligible 00:34:49.19\] way to talk about this...

**Jerod Santo:** \[laughs\]

**George Neville-Neil:** But it would be very hard to sustain the act of creation if you didn't have anything to say. And actually, I'd like to point out the stand-up comedy thing, or stand-up technology, as I like to call it - there's another aspect to stand-up comedians that I think is relatively important, and which I probably shouldn't admit, but it'll be very obvious... We like to be the center of attention. So not only do I have something to say, but I like getting the feedback.

Many of us who went into technology just wish to be left alone and have someone put pizza under the door and we'll slide algorithms under the door... But that is definitely not my personality. I mean, I give a lot of talks on usually operating systems and engineering topics, and I am one of those people who is energized by doing that. Most people, when you're like "Oh, you have to give a talk", they're like "Oh my God, it's the worst thing I would ever wanna do", or they don't wanna do it. I'm like "Sure. What's the topic? How long do I have? Where are we gonna be?" and I'll just do that.

\[00:35:50.23\] And to the point of dong Kode Vicious, it's definitely a longer roundtrip to feedback, because I don't get comments immediately... I don't always have people coming up to me at conferences, telling me they love my work, or trying to hit me with something... Which I'm waiting to happen. But I think definitely I have something to say; it seems like I have many things to say. Many people have pointed out that I just don't stop saying things...

But there's also -- there's a certain level of validation. There's "Oh, a lot of people read this and found it interesting", and people want copies, or people wanna use it in their class, like this friend told me. That kind of thing - it's like open source software. One of the things that's great about working on open source is when someone uses it for something else. The fact that FreeBSD, which I've worked on for many years, is used in storage devices, in networking devices, in gaming consoles, and stuff that I would never build, that you know, when I find out "Oh, this piece of hardware/software uses something I worked on" - that's a really good feeling, and I think the same thing is true of writing.

**Jerod Santo:** Absolutely. Well, let's dive into a couple of your pieces. We've selected a few essays that have piqued our interest. Interestingly enough, the one that I liked was another one of these oddities where there's no call and response. You just wanted to write about this. This is -- chapter one has "A Nice Piece of Code", and this is all about writing good code. So you have thoughts, you have opinions, as you said... What makes good code, readable code etc. And you put them in this piece. I'm just curious if you could summarize briefly what you think is worth writing about in that area.

**George Neville-Neil:** Sure. For me, one of the things I learned very early in my career is I was going to read a lot more code than I was going to write. I think a lot of people have this belief that they're gonna come out and write reams and reams of code. And even if you write reams and reams of code, even if you started writing reams of code when -- you know, I was doing that in the '90s, in the '80s... You're still not gonna write more than you're ever gonna read. So for me, good code is readable. Readability really counts.

A lot of this is very mom and apple pie. Put in comments, have a reasonable coding standard... There's a bunch of stuff like that. One of the things though is people can argue about what makes a good style. The thing that I come out in favor of - and this comes out in several pieces in Kode Vicious - is it's not just readable style, but consistent. You can't have five people on a team with five different styles. You're all gonna have to pick one and stick with it. And I don't care if it's K&R's old C style, or if it's the camel caps from Microsoft, or various things... Having a consistent style just makes things a lot easier.

One of the places where I saw this applied really well was a closed source shop that I worked. We built -- this is a company called Wind River, and they built a system called VxWorks; it's an embedded RTOS... But they had a very strong coding standard for two reasons. One, they did code reviews in everything they did, because our software did really cool stuff, like go to Mars, and also really dangerous stuff, like ran medical equipment. So it's good that you do a code review so that people don't die. Not dying, very important.

**Jerod Santo:** Good point.

**George Neville-Neil:** The coding standard was specific even to things like noun verb. It was one of the things that I think was really good in that style. So if you're gonna have something like "file open", then it has to also be "file close", "file read", "file write", not switching the words around.

**Jerod Santo:** Consistency.

**George Neville-Neil:** Consistency is really important. Over the years I've tried to stay away from... Although I just published - and this is outside of the book. This is the latest Kode Vicious -- you know, the tabs versus spaces thing.

**Jerod Santo:** Oh, you weighed in.

**George Neville-Neil:** Oh yeah, I did.

**Jerod Santo:** What's Kode Vicious think about it?

**George Neville-Neil:** \[00:39:52.06\] My real belief here is that our tools now should be smart enough that it doesn't matter. There should be a hidden indent character - I suggested a particular character in the latest piece - and then your editor should render it the way you think it should be rendered. Vim and Emacs and Eclipse and all the modern IDEs, Visual C and all this stuff - they can all do this for us... Instead of it being like "Oh no, only two spaces. No, only four spaces. No, eight spaces. No, it's a tab."

I mean, for my eyes, which are now in their 50s, and I've always worn glasses as well, the two-space indents - they don't fly for me. That was always the GNU standard, which was what was used to write Emacs and GCC. Two-character indents just don't give me enough of a clue of where things start and stop. So I was always a fan of more indents in that. But it doesn't have to be done with spaces or tabs, it can be done with anything at this point, and people should stop arguing about that.

**Adam Stacoviak:** Yeah. It's interface. It doesn't have to actually be a character to represent -- it's really presentation, right? It's a presentation layer.

**George Neville-Neil:** Yeah. I mean, think of it like a PDF.

**Jerod Santo:** Isn't that the argument for tabs though? Like with a tab stop, you can represent that however you want, but the Tab itself could be that character that represents how many indents you desire as the author? I'm not a tabs guy, but I think that's the tabbers argument.

**George Neville-Neil:** That is one of the tabbers argument. The problem is that people have gotten so tied to the tab character that I picked a character that is not -- well, it's certainly printable, but you wouldn't want it to show up in your code.

**Jerod Santo:** Okay, I'm curious...

**George Neville-Neil:** Well, it's the unicode character for the poo of course, because that way when you turn on what the unicode characters look like, all your indent are poos.

**Jerod Santo:** Okay...

**George Neville-Neil:** But you can represent that any way you want.

**Adam Stacoviak:** It's a good reason not to use tabs.

**George Neville-Neil:** \[laughs\] Yeah, there you go.

**Adam Stacoviak:** Well, it should be poos versus tabs, or poos versus spaces.

**Jerod Santo:** Yeah, let's add a third entry into the argument.

**Adam Stacoviak:** There you go.

**Jerod Santo:** You've just created a new standard. It's like in xkcd, "There's too many standards, so here's a new one to rule them all...", and it's the poo standard.

**George Neville-Neil:** \[laughs\] It's the poo standard. So yeah, the indent thing - I did finally weigh in on that. I mean, I think there are a bunch of perennial programmer technologist arguments. Tabs versus spaces... I actually wrote about this as Kode Vicious - people who wanna pick hostnames. "Well, what are the hostnames gonna be for our company?"

**Jerod Santo:** Yeah.

**George Neville-Neil:** That kind of thing. And there are things that just these constant arguments about that. But back to the thing of what makes good code - I mean, good documentation, keeping the documentation matching the functions... Again, I always go back to this stuff we wrote at Wind River - we had a system like Doxygen before Doxygen exist. In fact, our tech writers would modify -- you know, the manual pages came right out of the code, that kind of thing. It was really quite cool. And you had to make the match, or someone was gonna come and find you. That to me is really important, describing what a function does... Because people are just like "I'll just read the code", and you're like "Yeah... No, I don't think so."

I despise single-character variables outside of simple loops.

**Jerod Santo:** Oh, good qualifier. I was about to throw in the simple loop moment, but you qualified it.

**George Neville-Neil:** Yeah...

**Jerod Santo:** Yeah, there are times, right?

**George Neville-Neil:** Yup. \[unintelligible 00:43:09.20\] But please do not name the two most important sockets in your 50,000-line routing daemon r and s.

**Jerod Santo:** What if those are your initials, and you wanna put your stamp on it? Come on! \[laughter\]

**George Neville-Neil:** Yeah... You're trying to find all instances of the variable r, and you're like -- and it's a global variable, because that's \[unintelligible 00:43:32.06\] and you're like "Ugh... Awful."

**Jerod Santo:** Right. I heard lore of a guy who used Lord of the Rings characters for all variables in his entire software, and he had been there for years; this was like some form of job security. So you could go that route...

**George Neville-Neil:** I guess I'm gonna set Gandalf to 1... But do we have Gandalf the grey and Gandalf the white...? \[laughs\]

**Jerod Santo:** Yeah, it gets tricky... But you know, "We can't fire that guy." Don't do this at home, kids; this is bad practice.

**George Neville-Neil:** Yeah. Kode Vicious says do not pick names from Lord of the Rings. Pick something descriptive.

**Jerod Santo:** Yeah.

**George Neville-Neil:** \[00:44:06.20\] So descriptive variables are really important to me. Functions with too many arguments are a classic one... You see this often in the actual Windows API, where it's coming from a UNIX world, and you're like "Oh my God, there are too many of these. Like, there's two lines. I can't handle this many lines."

So trying to keep arguments constrained I think is really important. You can always cheat and pass a structure, but making it so that when I look at a line of code I kind of know implicitly from the function signature what's happening... Because I've seen code where it's 10, 12, 15 arguments per function... And actually, one of the particularly bad places about this, which I don't have to work in anymore, was back in the early days of X Windows programming. So if you were writing graphical applications, it used the X Toolkit, or Motif, or these early toolkits. I haven't done any of that programming in a while... But at the time, you were just passing so many arguments that you could not keep them straight in your head. That made for a lot of bugs.

I mean, the whole point of being picky about how code is written is so that you make fewer errors.

**Jerod Santo:** Right. And when you do make errors, you can find them later.

**George Neville-Neil:** Yup. Because you're going to make them.

**Jerod Santo:** Yes, you're gonna make them. Which might segue nicely into our next essay which we thought we would talk about, which is code spelunking, a term I love... And I never knew the person who coined it. So it turns out you coined code spelunking, which I thought was just like a term of art, it's existed for all time, but I guess things have to start somewhere... Tell us about that chapter, that essay.

**George Neville-Neil:** So that's actually a piece I wrote independently of Kode Vicious, and it's something that's been really important to me throughout my entire career. Now, I don't know that no one else used code spelunking before I wrote the piece, but certainly the term got a lot more use after the piece was written. So I don't know that I can claim to be the absolute first person to use it... But I certainly popularized it in that piece.

This comes back to the realization, again, that I'm gonna read a lot more code that I'm gonna write. With code spelunking - it's very interesting to me, in particular that tools that not improved. A lot of IDEs will do a really good job on sort of a small codebase, tens of thousands of lines... But for the most part, the state of the art in those tools moves about once a decade. So back in the '80s or the '70s we had Tags, in the '80s we had Global, which was a tool - and these are all in that piece. And the thing that I've really noticed, that actually is desperately needed, and one of the reasons I wanted to put the piece (even though it's older) in the book is to try and inspire people to build some tooling that I think we desperately need.

Almost all tools that do things like code spelunking, "Show me all the functions calling this" or "Show me all the functions called by this" or whatever, are language-specific. And there are very few large systems out there now that are only in one language. You almost always have some sort of domain-specific language, or you've got Python inside of some stuff that's calling C, and C++, and these various frameworks, and they're all talking to each other...

So one of the biggest challenges now in the area of understanding large codebases... As someone who works on operating systems - I work on codebases that are over a million lines pretty much every day; I very rarely look at a small piece of code - is that you're trying to... And in particular, this is a big issue when you're debugging. You're like "Oh, okay... Well, we crashed way down here in the C code somewhere" or C++, or some day it will be Rust and Go, whatever; some deeply compiled language. And you're like "Well, what caused that to happen?" and you do a back-trace and you're like "Oh, well this thing came in from something." But you can't go any further back. You can't figure out what was the request, and how did it get here.

\[00:48:12.06\] What you really wanna be able to do is be able to walk an entire system top to -- I mean, that's the sort of pie in the sky goal which we will not get to before the end of Kode Vicious or the end of my career, I suspect... But with code spelunking, the biggest problem now is we can usually - because our machines have big memories - pull in very large databases of single-language source. I can wander an entire OS, because it's all written in C. I can wander NGINX or something like that, because it's all written in the same language. But I can't cross boundaries.

**Jerod Santo:** Yeah, absolutely. And one thing that you said which rang true too with me is that these tools seem to be focused around allowing you to drill up or down a call stack... And they don't get much more breadth than that... I mean, especially across languages, but even inside a single language there's -- it seemed like very much of a left or right kind of opinion, or up or down.

If you think about spelunking, you're trying to plumb the depths, you're trying to go here and there... And sometimes you need to get into a crevice, or whatever, and it seems like there's just kind of like go up the call stack, go down the call stack, or grep... Right?

**George Neville-Neil:** Yup.

**Jerod Santo:** ...what is fancier versions of a grep, and that's the tools that we have. So they are very simple still.

**Adam Stacoviak:** Limited.

**George Neville-Neil:** One of the things I've always looked for - and in a way, Doxygen does this if you generate the \[unintelligible 00:49:29.21\] But what you'd really like when you start with a large piece of code is an interactive map. Show me everything, which - even in a huge screen with a lot of graphics power would be a graph with so many nodes it would be really hard to look at. But that's the view that I would love to have.

Now, I'm not a UI person, so I should not design this... Because if it doesn't fit in an 80x24 glass terminal, why would you bother? \[laughs\] But you know, it's definitely one of the things that I've always been interested in... And actually, a colleague \[unintelligible 00:50:01.11\] years ago had a graduate student work on this as a problem. But it was graduate work; not much came out of it. But the interface generated was actually pretty good, because what you wanna be able to do is with your mouse grab a thing, and then it shows you all the things visibly.

One of the interesting things in code spelunking is I fixed a bug in this function, and now "Show me all of the things that call it", because that's all the things that could possibly...

**Jerod Santo:** Be affected by this.

**George Neville-Neil:** ...affect.

**Adam Stacoviak:** Be affected, yeah.

**George Neville-Neil:** Now, you can do that in a non-graphical way, which is what we have now with global and all these other tools. It's like, "Okay, give me a list of all the functions." But it would be nice if you could actually see the program as a visible call graph, click on the function you've modified, and then have it light up all of the things that it changed. Because you've probably fixed the bug relating to the 3 or 4 things you know that calls it, but that thing may have been used or repurposed, or appropriately used or inappropriately used \[unintelligible 00:51:01.23\] somewhere else in the code, and it'd be really nice if you were alerted to the fact that "Oh, by the way, Bob actually used that function, too; Alice used that function as well, and they used it in different ways, and your change is going to affect their code."

**Jerod Santo:** Yeah, absolutely. Another aspect of it is that, like you mentioned, there is reading and writing; and when it comes time to spelunk, you're of course reading. Lots of times all of the context that you had when you wrote, or maybe you did not write this code - all that context is completely gone. So I think it's like a murder mystery; it's a mystery. How am I gonna find this thing?

I think more experienced, or what I consider more expert developers are ones who are really good at that forensic analysis... And there's people that can find a bug faster than you can snap your fingers; like, "How did you do that?" and they've kind of intuited -- they just have this sense, they could see... It's like the Matrix - they don't see the code anymore, they just do. But I wonder if you have any -- I mean, you've been doing this a long time... Do you have methodologies, when you're like "Hey, I have a bug. It's in this large codebase, or it's like a thing that happens, non-deterministic..."? Where do you start when it comes time to spelunk, and what do you do? Do you have any best practices, or things that you do, maybe even just intuitively, that you could elucidate?

**George Neville-Neil:** \[00:52:23.14\] So one of the things that I'm a big fan of is notes. I take copious notes. Actually, in one of the Kode Viciouses I talk about kind of the scientific method to debugging. I use Org mode in Emacs, which allows me to create special tags, and all that kind of stuff. So what I'll do is I'll just write down a bunch of theories. Theory one, theory two, theory three, theory four, theory five... And not look at the code at all. Because the code will -- it's not confirmation bias, but the code will kind of bias you to want... You'll look at the code, especially if it's not your code -- when code is not your code, I find... I don't know if I'm the only person who's this way, but I suspect it's more general... I think we're more judgmental of someone else's code than our own, and that causes you to jump to conclusions. You look at the code and you're like "Oh, this is a mess. I can't believe I have to clean this up. Why are people leaving dirty underwear in the code?", that kind of thing.

**Jerod Santo:** Right...

**George Neville-Neil:** By not looking at the code first and by writing down a bunch of theories about how I think the code is operating based on the bug that I'm seeing means that I can be a little more -- I think it makes me a little more objective. And then I've got a list of things to go through, instead of just opening the file, cursing my existence, and wondering why I ever went into computer science in the first place. Because I know that's gonna happen when I open even my own code. Sometimes you look at something and you're like "I was supposed to clean this up... Ah, it's terrible."

**Jerod Santo:** Right. "I forgot how bad this was."

**George Neville-Neil:** "I forgot how bad this was, because it was hidden in a file." So I'm very big on notes, having theories, and then because I've got the fancy tags, I can basically say when it's been proven or disproven... And I just go through and very methodically try to find the solution.

And I always keep notes, because -- I mean, I've always had a fairly good memory... But the thing that's really important, I find, is not only finding and fixing the bug the first time, but often a related issue will come up. Three months later someone will be like "Hey, do you remember when you fixed that thing? Well, that thing is broken again" or "This looks like that thing that's broken." And if you have to do that all again from the beginning without notes, that is really tedious... Because at that point you're sort of beating yourself up, going "Wait, I looked at this. I knew how this worked." Whereas if you had the notes of what you did last time, you'd be like "Oh, okay." It takes a lot less time.

**Adam Stacoviak:** I guess this might make it or not, but is this a prime space for some tooling to be made? I know that you've mentioned some in your book that's available, and they're sort of, as you mentioned, rudimentary... Is there anything where like this is proving ground for someone to say "I can make that kind of tooling. Actually, I am a UI designer"? Or I would like to have you as a feedback machine, to say "Here's how I can do a spelunking toolset." Is this a prime place for someone to innovate?

**George Neville-Neil:** I think so. The place where I would expect to see it but I haven't seen it yet are the Eclipse-based tools. The Android Dev Tools are all Eclipse, or Microsoft's tool suite, because they've got the hands to do it. There are things that people have done, it's programmery to use the output especially of newer compilers like LLVM to generate more annotations, meaning you can use your editor to go find stuff.

The visual display thing - I've never seen anything that did that credibly on a large codebase. One of the ways I used to test -- so when I was at companies where we'd buy these tools to use on our codebase... You know, when you have a significant codebase, millions of lines of code, you throw them at the tool and almost always the tools were not meant to work with millions of lines. They can work with tens of thousands of lines, but eventually they run out of memory or SQL space wherever they are.

\[00:56:05.23\] So I think the place where I'd expect to see the innovation of at least -- I mean, it'd be great if I could take notes on my code in Eclipse, or in a Microsoft visual product as well. And I'm sure there's an Emacs mode for this, because there's an Emacs mode for everything; you just have to find out what it is.

But that kind of note-taking ability - I think that would be an interesting feature of an IDE. But from a code visualization standpoint, there have been tools people pointed at me, but every time -- either they're very expensive, or you can try the demo version... I always pointed at the FreeBSD tree. I'm like "So, tell me about the operating system", and they're always like "Give us three hours and then we're gonna crash..."

**Jerod Santo:** \[laughs\] Right...

**George Neville-Neil:** Most of the tools that have been written to do this were written in Unix. So they're pipeline tools, they write temporary files, and so they don't run out of memory. But often when people build graphically first, they then also build the tool to pull everything into memory. And "Okay, now we all have 16 or 32 gigs in our laptop", but still - once you start generating cross-references, you have this massive explosion... And I've yet to see a visual tool that could really do the job with a significant chunk of code. So that's where I think the innovation should be.

**Break:** \[00:57:25.01\]

**Jerod Santo:** So I will now read a quote from your book back to yourself - how do you like that? I'm gonna read something you wrote...

**George Neville-Neil:** That's always... \[laughs\] That's always entertaining.

**Jerod Santo:** This will be fun and awkward...

**George Neville-Neil:** Yeah.

**Jerod Santo:** So in the Obsolete Coder, chapter 5, essay 9, you say "Remaining relevant in one's field is an important question, and one that is rarely discussed in undergraduate or graduate education. Once a programmer starts working, they might pick up new skills, more by accident than by design. How do we remain relevant in our work? Remaining relevant is the work of a lifetime, and if you do it well, you'll never be done."

George, you've been around... Like you said, you're in your 50's now, you've been doing this for a very long time, and surely, that is something that's in your psyche, or thinking about staying relevant, remaining relevant... I'd love to hear you talk about it.

**George Neville-Neil:** I think the response to that is fairly broad... But I think what I said in the piece - I talked about reading broadly, and looking at new technologies, trying not to be pigeon-holed as one thing. Throughout my career, the things I've tried to do are read broadly. I'm involved in ACM, ACM publishes tons of scientific papers... I don't read every paper, but I find areas which I'm interested in, and I will read the abstracts to a bunch of papers.

\[00:59:51.16\] Now there's some good online stuff for this. There's the Daily Paper that comes out, so if you wanna follow particular topics... I've always followed journals that are not specific to a particular technology.

I think technologists can become very excited by a single piece of technology and become very specialized in that... But that's actually the opposite of what you wanna do. I mean, yes, you should become expert in something, but you should never believe that that's the last thing you'll be expert in... Although, I guess at the moment COBOL seems to have been the thing that you should have been expert in.

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** COBOL people are getting called out of retirement right now to make some good cash, aren't they?

**George Neville-Neil:** Exactly. And another thing - it's important to see what the industry is doing, but industry trends are not the best thing to follow. My current favorite one that I really enjoy -- you know, I've been doing embedded systems and low-level systems and firmware for a long time... And when I was at university, we actually took two quarters (I was at a quarter school) of assembly language. And I love assembly language, because I'm deeply broken in some way... But you know, even the professors teaching would say like "Wow, you're probably not gonna use this. This is more to understand how the machine works." I use those skills and I look at assembly language for almost all of my client, and all of the people I've worked for... Because when it comes down to what's broken, you have to know how the machine works. And I think that comes to the real point of the thing that I think people should be thinking about, more than a particular technology.

Obviously - okay, if you wanna go work for a company that's using Java, then you're gonna have to become expert in Java. If you're gonna do Go, you should be an expert in Go. Or you're working in IT and you're doing DBA, you should be expert in whatever databases you're working in. But the important way of remaining relevant and not becoming obsolete is to realize that those are technologies, but that understanding how things work, how for instance distributed systems work, how a large system interacts, how people deploy software, how a computer works at a low level - this is one of the things that's been particularly problematic over my career...

My generation of programmers, many of us started in the microcomputer world; Commodore 64 for me, Ataris for other people... You know, those were very limited machines, but you had a lot of access to how they worked, and you could figure out how the computer worked. 30 years, 40 years later, a lot of people now work with systems and they can't get very far down the stack. And that's a real problem when you come to dealing with scaling and performance, which are now the two main problems for most people building real systems.

So... Sure, it works on your desktop. You made that thing work on your browser. Great. Now when a million people hit it because it's a game on Facebook, or whatever it is, does it still work? That requires a much broader understanding than just how your JavaScript code works, or how your Java code works.

So the only way I think to really remain relevant is to study the topic of computer science. Not every day, I don't expect everyone to be sitting around, reading about algorithms... But to realize that that's the thing you should be studying, not Bob's latest language, not -- it's like "Oh, there's a book on Elixir. Let's become an expert on Elixir", and then three years from now you're not using it. I think that's the way to remain relevant over a lifetime in the industry.

**Jerod Santo:** How many technology or language transitions have you survived through?

**George Neville-Neil:** Well, technically, I still program in assembly language, so I guess none...? No...

**Jerod Santo:** Tick that one off.

**George Neville-Neil:** Yeah, there you go... So I have mostly stuck with compiled languages, which change a lot slower. So for my scripting languages it has always been Python. I contributed a little bit of code to Python early on... I knew the folks doing it in Holland, when I lived there in the early '90s... It's a perfectly reasonable scripting language for most of the scripting things I would do. My compiled language still is C. I have been programming in C since I was 20(ish). C++ - okay, fancy C. I have mostly avoided Java... I think if I'm gonna wind up transitioning, it's gonna be Rust; that will be next thing... Because Rust is pushing really hard into the systems space.

\[01:04:11.09\] But the other thing - and I talk about this in at least one or two pieces in the book... You know, there's only three types of languages. There are functional languages - Lisp and its associated things - there are the algo languages, like C and Python and pretty much every language that most people use, and then there's Prolog. Nobody really programs in Prolog, so it's okay.

If you know C, you can learn C++, and JavaScript, and Java, and PHP... Because they all do the same thing. They all have local variables, they all have side effects, they all have functions, they all have function returns... Some of them are more typed than others, some are not typed, some are strongly typed... But you know, how you express yourself in those, that's like -- so I actually speak several human languages, as well as computer languages... And the difference between that family of computer languages is a difference of dialects. \[unintelligible 01:05:04.04\] as far as French and Italian; it's French of many different regions. Because -- okay, we use different words, we put semicolons or we don't put semicolons, we put arguments before types, we put types after arguments... But in the end, it's the same structure, right? Where are the functions, what are the arguments, what's the returned value, how do returned values come back, how do I structure my code, how do I have modules, how do I add and remove things? That stuff is -- if not universal, so closely related across the currently popular set of computer languages that it's just not that big a deal.

**Jerod Santo:** It's somewhat superficial, yeah.

**George Neville-Neil:** Yeah. I mean, going between Lips and C - that takes some mental energy.

**Jerod Santo:** Big difference.

**George Neville-Neil:** Right. But C to C++ to Go to Rust - hm. You know, Java, JavaScript, Python... Once upon a time we all programmed in BASIC. Even that's not that different.

**Jerod Santo:** Yeah. Thoughts on Rust, as you approach it potentially?

**George Neville-Neil:** I find Rust really interesting, but the only way I'm gonna really have a strong opinion about it is I've gotta write 50,000 lines of it. So I've had a couple of projects on the side where I thought "Okay, well --" and they were open source things, where I was like "Oh, I'd really like to write this thing that I worked on in C and Rust and compare it."

I'm just very excited by the work the Rust community is doing. They're very serious, they're very big on documentation, they write good books, they write well about their code... You know, they make some very interesting claims about safety, and the safety of the executable, which will be very interesting to verify for myself. I mean, certainly, people have been writing papers about it... I'm very excited about their push into the embedded space, because I've been an embedded guy for a long time... It is definitely the most exciting new language I've seen in a while. I'm much more excited about it than I was about C++.

**Adam Stacoviak:** When it comes to, I suppose, someone out there listening, thinking "Am I obsolete though, in regards to this essay?", the way you indicate that is with being over-specialized or under-specialized. What's the sweet spot, in terms of obsolescence? Should I be just specialized?

**Jerod Santo:** Not too much...

**Adam Stacoviak:** Not too much, not too little... Right in the middle.

**Jerod Santo:** It's like Michael Scott - he's not superstitious, he's only a little stitious.

**Adam Stacoviak:** That's right.

**George Neville-Neil:** I mean, I could give the lawyer's answer, which is "It depends." I hate when lawyers say that; I've had to interact with them at work... I mean, I would be very nervous if I only knew one technology well. That's where I think the over-specialization -- and people do that. People are like "Oh no, I just do Java, or I just do..." And Java is fairly broad; there's a lot of work you could do there.

**Jerod Santo:** Right.

**George Neville-Neil:** But you know, "I only work on this style of system." Now, of course, again, this is Kode Vicious, and so it's very personal; the answer you're getting is how I've perceived my career and how I've wanted to do things, because I've really enjoyed new and interesting ideas, and I wanna see -- you know, I'm looking for the better answer. Like, "Is there a way I can do this faster, clearer, the code is more understandable?" things like that.

\[01:08:20.16\] I think on the other direction, the overly broad question - I think there's less risk in that. Now, you could get to the point where you -- there was something about experts... Eventually, you know absolutely everything about nothing... You know, you could get to the point where you really don't have a grasp of any particular technology, and I think that would be a problem. But I don't think that's the bigger risk for people in this industry. I think the biggest risk for people in our industry is they worked on a technology, they really liked it, they know it really well, they're super-comfortable with it, and they don't wanna leave that, because they're super-comfortable with it.

**Adam Stacoviak:** It hadn't occurred to me until now though - how would you answer or respond if you were responding in the Kode Vicious voice specifically... Not so much George's voice, because this has been George--

**Jerod Santo:** Does Kode Vicious have an audible \[unintelligible 01:09:04.22\]

**Adam Stacoviak:** That's okay...

**George Neville-Neil:** \[laughs\] So it's funny you ask in this particular way, because I had a company have me in to give a couple of talks on software systems performance... And the person who invited me had actually been a reader of Kode Vicious and was like "We'd love you to come give a Kode Vicious talk." And all I could think was "Do I have to get drunk beforehand to really just show up in a Hunter S. Thompson, you know, glasses askew...

**Jerod Santo:** Right, just belligerent.

**George Neville-Neil:** ...screaming at people... I mean, if I were gonna give the one-word answer to the obsolescence question, it's "Read." Just start reading things about stuff you don't know, that are related to technologies you think you might be working on. Just go read stuff. Now, I understand, amusingly enough, that I should probably modify that to "Go watch a bunch of videos." Because having talked to the folks at Pearson, who really want me to do Kode Vicious as a video - and we'll see how that works out - the current crop of people in the industry that are sort of the younger generation get a lot of their information now by watching short YouTubes while they're at work... Although now that everybody's trapped at home, I guess they're all just watching YouTube all day.

**Jerod Santo:** Long YouTubes, yeah.

**Adam Stacoviak:** Long YouTubes... \[laughter\]

**Jerod Santo:** They don't have to sneak it in anymore...

**George Neville-Neil:** \[laughs\] That's right. You're not worried about your manager walking down behind you. But yeah, the way people now pick up new skills is through these video courses. So that's not me; I'm very much a reader, I wanna be left alone with a book, or a paper, or something like that, and a little peace and quiet, in a reading chair... But yeah, there are people who watch these things, and there's a ton of content.

So the most important thing is get outside your box, find something that's interesting still related to technology, that you think personally you could like... You know, when I first went into computer science back in the '90s, it was one of the big uptakes of CS students in colleges, because they all realized they could make a lot of money.

So when I got to school, we had 300 undergraduates in my class studying computer science, and when I graduated, there were 89 of us. Because it turns out that most people don't really enjoy what we do, and you have to be motivated. Back to an earlier question about artists - the same thing is true about programmers. I mean, yes, there are people who come in every day and crank out some amount of code on something that they don't really care about... But I find those coders are not people I wanna work with. The people I wanna work with are the people who are excited about the technology they're working on, they're excited about the thing they're building, or whatever it is... So the only way to broaden your interests is to broaden them in a way that works well with something you're interested in.

\[01:12:04.04\] So I'm not gonna go from being a systems person to working on AI. I might work on the performance implications of the low-level code of that, but I'm not gonna sit around, trying to think up solutions to problems in AI. That's too far of a jump. But certainly, within the systems area you can look at various operating systems, you can look at various chips, you can look at various applications.

IoT is a classic one of these now, where -- we're probably all doomed, but in the IoT world you've got computer technology applied to all kinds of different problems. You've got medical, you've got people doing power distribution... So if you know one component of the technology, you can be like "Well, I can pick up some other component of it by looking at the way someone else applies it."

**Jerod Santo:** So over the years, George, surely you've changed your mind on a few things... You have these essays spanning all the way back to the early 2000's, and I'm sure there's things that just didn't make the cut, because maybe you didn't like them... But then what about the ones that's like "Actually, I've changed my mind on this." Somebody who's interested and passionate about technology like yourself, reads all the time - we change. Your tastes change, maybe you move from two spaces to four spaces as you get older...

**George Neville-Neil:** \[laughs\]

**Jerod Santo:** ...maybe you decide tabs aren't so bad... But those are insignificant changes. But we do, we change both our tastes and our thoughts on certain things. Is there anything you've changed your mind about over the years that you could share with us?

**George Neville-Neil:** Sure. One of the things - and I've talked about this in some of my networking thoughts in the last few years... There's something called Postel's law. Jon Postel was one of the key figures in the development of the internet. He's passed away - I don't know how many years ago now. But one of the things that he said was this - he said "Be conservative in what you do, be liberal in what you accept from others." And the way we applied this to the early internet was you should be transmitting very small, very specific pieces of information. But on the receiving side, you should liberally interpret what someone sends you, so that you can get the job done.

Now, that advice makes perfect sense in a research network connected by a 56 kb modems, in a bunch of universities. It's fine, because - well, what's gonna happen? Okay, well, there was the Morris worm, which brought down the early internet back when I was in college... But for the most part, there wasn't gonna be a lot of collateral damage to using that as a design point, as a way of designing distributed systems...

**Jerod Santo:** Principle?

**George Neville-Neil:** Yeah, design principle. Unfortunately, that's totally wrong now. The internet basically is full of bad actors. There's a billion people connected to the network. That means even if 1% of those people are bad actors, that's a huge number. And so we can't write software in the way that Postel asked us to... And it was definitely something that I was -- I mean, \[unintelligible 01:15:04.12\] is silly. Postel was someone who really knew what he was talking about, so we all followed this advice for some period of time. But eventually, you realize that you just cannot design software in a connected world in that way. It just absolutely has to be turned on its head. You need to be incredibly conservative in what you receive, because if you're not someone who's gonna use that to get around your software, whether it's secrets, or passwords, or changing the value of your bank account, or whatever it is... You know, being liberal in what you accept is never going to work in a modern system.

And even now you can't use that in a research network anymore, because -- we all know what happens to prototypes; that becomes version one.

**Jerod Santo:** Exactly, yeah.

**George Neville-Neil:** So you can't give the excuse of "Well, you know, this one's a prototype. We're gonna rewrite it when we do it." Then marketing or management \[unintelligible 01:15:54.04\] right out of your hands and put it on the network, and suddenly you've got CVEs up the wazoo.

**Jerod Santo:** \[01:16:01.16\] So does half of this law hold though? The first half? Do you still think the conservation on the frontend there, on what you put out or do?

**George Neville-Neil:** Yeah. And the being conservative in what you transmit, which is how that's usually put into practice - that's fine. That's not controversial. It's this being liberal on what you accept.

**Jerod Santo:** Well, that's a good one. I think that one has more to do with the change of your surroundings than necessarily a change of mind. We've talked about some languages and the differences between languages, and you used to have a stance that there weren't any bad languages, or something along those lines... But you seem to have changed on that one. Can you talk about that one?

**George Neville-Neil:** Sure. We talked about tabs v. spaces, and things like that... So programmers will have their preferred language. "I only wanna write in C", "I only wanna write in C++", and often they will twist themselves into knots to make the language they prefer be the language they use to solve a problem, when another language might be more appropriate to that problem set.

So you know, when people would write in and say "How would you compare X to Y language?", my general answer was usually -- like when we say "There are no bad questions." That's actually no true... But the response "There are not bad languages" - I used to believe that more strongly, and now I don't believe that anymore. Now I believe there are languages that should not be used to implement any significant piece of software.

For instance, I love shell. Shell is a fine thing. And if you wish to write a shell script of 20 or 30 lines, that's fine. But shell should not be used to write a significant piece of software. And people have done this, and they continue to do this, which I find amazing, given that there are better things to use if you want a scripting language.

Now, I understand why people like scripting languages; there's many reasons to like them. But writing a significant software installer in shell is a terrible idea. I used to be very polite about what I thought about Java, and now I'm no longer polite about that. I think Java is possibly one of the worst things that has ever been done to the software industry...

**Jerod Santo:** Hm...

**George Neville-Neil:** And I think no one should be writing in it. And the thing that I think is worst about it is it requires so many dependencies that it is nearly intractable to understand any large system... And where this really comes out is teaching languages.

There are schools now, because the industry demands Java programmers, that teach undergraduate, first-year programmers Java. That is not a teaching language, okay? Back in the day we used BASIC as a teaching language; that was also not a good teaching language, for other reasons. It lacked sufficient structures, and things that we also wanted. But trying to get someone to understand how to program a computer with something as complex and rife with dependencies as Java is just terrible. And every significant piece of Java code that I've had to go read has just made me think "This was not a good idea."

And what I find funniest about Java is that it was originally intended as an embedded systems language. Sun's original idea was that it was gonna be "Write once, run your code anywhere, on any Java-enabled set-top box, which is what it was actually written for. And you look at Java now and you're like "Nope... No. This is just terrible."

Then there are other smaller languages... Like Perl. Perl is an amazing artifact. And Larry Wall, whose a very clever guy... You should not write anything in Perl. At the time, Perl was a useful thing because there weren't as many available scripting languages, so your choices were C or shell... But at this point, no one should be writing in Perl. All of that should just go away.

**Jerod Santo:** I feel like you're getting more controversial as you go, so I can't wait to hear the next one. Is there another one?

**George Neville-Neil:** \[01:20:07.06\] What else do I dislike?

**Jerod Santo:** Yeah. \[laughs\] Because there will probably be a lot of people that disagree with you on the Perl point. Probably less so on the shell point.

**George Neville-Neil:** Yup. Um, C++?

**Jerod Santo:** Okay...

**George Neville-Neil:** A language that gets worse and worse with each passing standard... I mean, the only thing to like about C++ is at least I didn't have to rewrite the queue... The standard library was better in C++, but debugging C++ code, especially with templates, and just the complexity that C++ allows people to add...

You know, people complain about C, because "C is insecure, and we have these issues with strings, and all this stuff..." You're like "Yeah...", but I can't arbitrarily change how I'm shooting my foot in C as easily as I can in C++. C++ has the thing where it's like "Oh, I thought I was using this class, but I'm actually inheriting from this class." The fact where that kind of stuff is hidden from you makes debugging C++ code far harder... And templating is just one of the worst things that's ever been foisted on programmers.

**Jerod Santo:** We had Josh Aas from Let's Encrypt on the show a while back, and he has a similar distaste for C that maybe you do of some of these other languages. He thinks that all networked software needs to be rewritten in Rust eventually, away from C. So he would say "No one should use C for anything that's serious, and networked, in 2020." It sounds like maybe your response to that - maybe I'll just let you give your response - is expert C programmers don't shoot themselves in the foot... But is it too dangerous for mass usage today? Is Rust just better because of the security properties etc.?

**George Neville-Neil:** I would like to see Rust proven to be better than way. I would be very happy to trade in C for a safer C. The reason C never gets supplanted isn't the safety issue... Because it turns out that most people who are producing products for you don't care about your safety... But don't tell them that. What matters is performance. So no one has come up with something other than hand-coded assembly, which is portable and as performant as C. Now, Rust is getting very close.

So if Rust can keep the safety qualities and be as fast as C, then yes, we should chuck as much C out as possible... And all the people who work with me on the FreeBSD Project right now are sharpening knives, and once the pandemic is over, they're gonna come to my apartment and cut me into little ribbons. \[laughter\]

But yeah, I definitely think that C is... There are projects in the world right now... There's the cherry work that's been done at the University of Cambridge - Robert Watson, who I've worked with on various things - trying to change hardware, so that hardware is safer, and we can actually use pointers without foot shooting. And a change in hardware is gonna take a while, so we'll see how that works. I think it's very promising.

**Adam Stacoviak:** And expensive.

**George Neville-Neil:** Yeah. Well, you know; that's how we make money. I mean, just ask Intel. Intel would definitely wanna sell you a whole new set of secure computers.

**Adam Stacoviak:** Sure.

**George Neville-Neil:** And from a language standpoint, I definitely think he's right. I think C -- even with expert programmers... I mean, I work with people who've worked in operating systems even longer than I have, and they make mistakes, and we all make the same mistakes... And we have a ton of tooling to try and prevent us from making those mistakes, from neurocompilers, to static analysis... But the reason that nothing has supplanted C isn't that there aren't safer alternatives; there are, but they're slow. Often orders of magnitudes slower.

**Adam Stacoviak:** So you mentioned a bunch of bad languages, or at least from your opinion... What are some good ones? What are your favorites?

**George Neville-Neil:** So my favorite scripting language is still Python. I like scripting languages generally for teaching, because they allow the iterative learning loop. I write some code, I can try a little bit of code; oh, it works/it doesn't work. I do have issues with the whole braceless thing in Python. That's the thing that's always bothered me. Literally, your indentation is how you're handling where your code is.

\[01:23:59.24\] So generally, for scripting I use Python. For coding, I use C, because that's the world I live in. I would say that I like C for its brevity and its simplicity, and that's generally what I like. I like systems to be able to be expressed simply.

Other languages that I've liked, I've liked because they were appropriate for what they were. Many, many years ago I programmed in Rexx, because there was a good Rexx interpreter for the Amiga.

I like Forth, but I'm totally broken... I think Forth is nice and compact if you wanna build something small and compact like controlling your washing machine. Forth is great.

I like Go. I think Go has some very interesting ideas. And we've talked about Rust. I like Rust. Most of the other languages that I've seen that have come and gone haven't had really an effect on my day-to-day coding.

What I can tell you is that there are assembly languages I like more than others... \[laughter\]

**Jerod Santo:** Probably less relevant to us than...

**George Neville-Neil:** Yeah, a lot less relevant to your listeners.

**Jerod Santo:** Goof stuff, George. Well, the book Kollected Kode Vicious... Don't spell it with a C. KV likes to spell everything with K. So it's Kollected with a K, Kode with a K... Vicious however does start with a V, so you've figured that one out... And you can get it on Amazon; it's put out by Pearson.

Anything else with where folks should find it, and information about the book you wanna get out there?

**George Neville-Neil:** There is a web page for the book as well. It's kodevicious.io, which points at all the places you can get it, and various updates on where various parts are coming out. I have a Twitter, which is @kode\_vicious, and... Yeah, that's all the places to find information about me, the column or the book.

**Adam Stacoviak:** And you mentioned that you don't have pages yet, so it's available as digital now... Is that right?

**George Neville-Neil:** Correct.

**Adam Stacoviak:** And pages soon.

**George Neville-Neil:** Paper is supposed to be out on the 29th of October.

**Jerod Santo:** By the time this goes out, it'll be out there.

**George Neville-Neil:** I don't know if that means it comes off a machine somewhere...

**Adam Stacoviak:** We'll see. I love the cover. It's a great cover.

**George Neville-Neil:** Thanks.

**Adam Stacoviak:** Ones and zeroes. It's on point.

**George Neville-Neil:** I did not design the cover; I do not do graphics. Someone at Pearson did a very nice job and sent me seven covers.

**Adam Stacoviak:** "George, do you like this?" "Yes, I do." "Okay, cool."

**George Neville-Neil:** Yes. \[laughs\] That's basically it.

**Adam Stacoviak:** "Ship it. Ship it. Go."

**George Neville-Neil:** "Please don't ask me about color..."

**Adam Stacoviak:** And what about the column? I know that some of it is available online... Is most of the archive of Kode Vicious available to read, or is some of it still downloadable, subscribable? What about if someone wants to dig into your -- you know, 15 years ago...

**George Neville-Neil:** Back issues.

**Adam Stacoviak:** Yeah.

**George Neville-Neil:** So all of Kode Vicious is available in ACM's digital library, which I think is dl.acm.org. You can also find all of the pieces off the ACMQ site, which I think is acmqueue.com... Everything is published electronically on ACM Queue, and then electronically and on paper in Communications of the ACM, which is ACM's flagship magazine.

I think if people are looking for back issues or back bits, the ACMQ site is probably the easiest one to download from.

**Adam Stacoviak:** Okay. Anything we didn't ask you that you wanna share before we let you go? Or have you laid it all out there?

**George Neville-Neil:** I think I've spoken quite enough at this point. \[laughs\]

**Adam Stacoviak:** Well, George, thank you so much for your time today. It's been awesome talking to you.

**Jerod Santo:** Yeah, we appreciate it.

**George Neville-Neil:** Thank you.

**Adam Stacoviak:** Awesome work on the book.

**George Neville-Neil:** Thanks very much.
