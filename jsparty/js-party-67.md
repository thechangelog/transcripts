**Jerod Santo:** Oh yes, the sound of those BMC beats means it's time once again for another JS Party! I am here, I am Jerod, I am joined by Suz - Suz what's going on?

**Suz Hinton:** What's going on?

**Jerod Santo:** A lot going on! We have a very special guest today... Very special!

**Suz Hinton:** Yeah, I'm so excited! I'm always excited, but I'm excited as usual.

**Jerod Santo:** I was gonna say, if we tell all our guests that we're so excited, there's no hierarchy. You have to have a hierarchy.

**Suz Hinton:** \[laughs\]

**Jerod Santo:** Just kidding. We are joined by the one and the only Chris Coyier. Chris, thanks so much for coming on JS Party!

**Chris Coyier:** Yes, it's a dang honor! Thanks so much. This is a great show, and I'm happy to be in. I was wondering when I should jump in while you were talking; I felt like "Do I say something now?" I feel I could have Kool-Aid Man'd it and nobody would have liked that.

**Suz Hinton:** \[laughs\]

**Jerod Santo:** Just jump in whenever you like. You can't possibly ruin it around here. That's the way it is with a party - you just kind of hop into conversations, you hop out, you say what you like, and we all go home a little bit happier than we were.

**Chris Coyier:** Well, it's so good! It's such a cool network you all have going on here. You should be dang proud of it, it's really great! The website is really sweet, the community aspects are sweet... I was looking at your -- this is funny, because now it's gonna say "Uh-uh-uh" in a &lt;p&gt; tag on your website, because your transcriptions are so accurate.

**Jerod Santo:** Well, thank you very much. We try to sweat the details as much as we can and put out top notch stuff if and when possible, so we appreciate that you appreciate it. Well, speaking of appreciating things, we're gonna get into the front-end divide again; I know, listeners, we have ranted and raved about this once already, but it's a big topic, and we now have Chris here with us to have a whole new perspective.

But before we get to that, I wanna rant and rave a little bit about CSS-Tricks and just how dang awesome that site is, and how it's been really a cornerstone of the web development community for all these years. I can even pause and maybe let Suz gush a little bit before we ask you about it, Chris.

**Suz Hinton:** Oh yeah, I still sometimes - not even sometimes... I still often use code examples from CSS-Tricks to pull something off, because I'm not a full-time front-end developer anymore, and so while I obviously remember most of what I've been doing for the 12 years that I was a front-end developer, I've totally forgotten certain things, like "How do I set up keyframe animations again?" and "How do I get the CSS to behave in this way?" I am constantly being thrown into CSS-Tricks from Google when that happens, and I'm so appreciative of that.

**Chris Coyier:** \[00:03:42.17\] I mean, me too. I land on my own site all the time to grab stuff, because there's no reason that you'd memorize exactly what -- keyframes is a pretty good example, right? Because you're like "Oh, what is it - is it @animation?" Or "Oh no, that's the other property that you used to call it once you actually have written the keyframes, which the syntax is @keyframes", and then you're like "Is it 0% and then it has sub-brackets? That's weird...", or whatever... It's an easy kind of thing to forget... And why remember it? It doesn't matter. It's more important that your brain remembers that it exists and what it's for, than it does what the syntax is, so...

**Suz Hinton:** I'm more proud of that. I'm proud of going "Well, I don't have to use Javascript to animate this. I know I can do this with keyframes in CSS", which is actually very relevant to this podcast episode, but I digress... So yeah, I'm just so appreciative of CSS-Tricks. I've been using it for years and years and years, ever since it's existed. It's really cool to have yourself on the show to comment on that.

**Chris Coyier:** Well, thanks so much. That's great. It's not just me these days, we have a whole team of people that work on it. Nobody really full-time; it's mostly still my full-time responsibility, but there's an awful lot of guest authors, so that's been like a point to pride for us... You know, because there's advertising on the site, like there is on this podcast, and I kind of like advertising, in a way... Maybe that's a different show... \[laughter\] But it's nice to be able to take that money and then just turn it around and just give it right back to people who have ideas that wanna share them

**Jerod Santo:** Absolutely.

**Chris Coyier:** So I think it's kind of awesome. We have lots of people that are like, "I've never written an article before, but I really want to and I have this idea", and then be able to shepherd that through the process, and hopefully make everybody sound and look good along the way, and then push those things out... It's great.

We've celebrated our ten years last year... If I asked me starting that site out whether I would be happy with where it is today, I couldn't even imagine. Hell yeah, I'm happy. High five, old version of myself! \[laughter\]

**Jerod Santo:** Well, that's interesting. One thing I wanted to ask you about is the impact specifically of that site on your life. A lot of us take it for granted because it's been here for so long, and it actually reminds me a little bit of Changelog itself, because we're celebrating our ten years here this year, of the Changelog...

**Chris Coyier:** Yay!!

**Jerod Santo:** ...so again, it feels like it's gone by very fast.

**Chris Coyier:** Well, you are so early in podcasting! Ten years ago for podcasting is wild! That's great.

**Jerod Santo:** It wasn't myself, it was Adam and Wynn... I hopped in 2012(ish), but that being said, I was listening from day one, a huge junkie. What I wanted to ask is - now we take it for granted, it's this great place, there's lots of awesome content there... I wanna talk about this particular post, because man, it's beautifully art-directed even, so I can tell you've put a lot of love into this, but I'm curious if along those years you've ever thought "Maybe I should just hang this up." Was there a burnout moment throughout the years, or has the value always been obvious, and that's kept you working on it?

**Chris Coyier:** Um, no... I mean, it's not that I'm impervious to little bouts of burnout, but I'm lucky enough that it doesn't affect me too greatly. I don't know if I just... roll-of-the-dice luck there, or what, but some of it is expectation-based, and some of it is certainly privilege-based, and things like that. I get less haters maybe than your average person on the internet, for whatever reason... But also, one thing that's set up nicely is that I have made really no promises to anybody. The deepest promise I might have on CSS-Tricks is "You wrote an article, so I'm gonna pay you for it." Or "You've bought a sponsored post and I've told you that it's gonna go out on this date, so it will." But I don't promise to our readers "There's gonna be four new articles today!" I've never said anything like that, ever. So if I was approaching some kind of like "Ooh my god, this is just getting too much" or the financials are too hard, or the buried and technical debt, or something that tends to be a trigger for a burnout, I can just step away for a little bit. And at this point, even if I did that, there's staff that are taking care of the site anyway, so that makes it even easier to kind of step away once in a while and go on vacation a little more worry-free...

Vacations is being really a clutch thing for the -- I don't know, it feels like there's two different kinds of burnout; there's real, hardcore "I'm flipping done" burnout, and then there's "I'm feeling burned out, I need a break", and then I sit on a beach and read a book and I come back feeling a lot better about the world. A beach doesn't help version one, usually. You might come back even more done, done... It usually works for me.

**Jerod Santo:** \[00:08:14.12\] One last question before we move on to the great divide... If you were gonna start CSS-Tricks over today, what would it look like? Would it look as it does right now?

**Chris Coyier:** Gosh, what a wonderful question. It's hard to think about, because I feel like we've made some good choices with the tech and the approach of what we did. It's a WordPress site, so I've kind of long been a defender of WordPress, largely for this reason - I've been so productive with it, and I feel like it's been a good match technologically for what I'm doing as a publication and kind of a CMS around CSS-Tricks, that I don't know that if I could start over today that I would pick something else, that I would necessarily go with a static site generator, or staff up earlier and harder than I did before, or anything. It's not like "I did everything perfectly! I'm perfect Mr. Perfect!", but I don't have any solid, super-gnarly regrets with it necessarily. It was okay...

**Jerod Santo:** Great.

**Suz Hinton:** This is the dream, Chris... \[laughter\]

**Jerod Santo:** This is.

**Suz Hinton:** It's actually very inspiring, because while you acknowledge it's not perfect, this is the sweet spot that a lot of us aspire to, so that's really good to hear that that is something that in some cases can be achievable. That's great.

**Chris Coyier:** Yeah. You know, this might lead nicely into the divide, because I do feel like -- like I said, I absolutely am a WordPress lover really, and I like that as a technological choice, but CSS-Tricks has undergone kind of a big facelift recently. I worked with a designer, Kylie Timpani, who's just an incredible designer. I'm now working with her on new stuff; I'll take any amount of time she has to give me, because she's so damn good. But she pushed me in a lot of ways that I was like "Oh, this is gonna be a big project." And it was, and now it's out, and now as I'm reflecting on it, I'm like, "Oh, my technological choices on this were so boring!" You know, I got done the things that she needed me to do, but I didn't, for example, componentize everything into a perfect little pattern library like people tend to do these days, that I kind of maybe wish that I did... And maybe even went harder-core into the world of front-end, like some people do; maybe, just maybe, if I was really being fancy with this thing, I could have set up a GraphQL endpoint for all of my data in this thing, and then built everything into little components, including being able to pull the data I wanted. That's possible in WordPress; WordPress has a plugin for GraphQL... And really just went full SPA with it. Or at least like a Next.js server-side rendered, but high-grading front-end thing... I get a kick out of working in that way these days. That would have taken this big job into an even crazier bigger job, but I feel like if I had unlimited time in the world, I probably maybe would consider going that route these days, because I find it's such an enjoyable way to work.

**Jerod Santo:** I keep promising to move on, but then I keep hovering here... Do you feel pressure to lead technologically now, more than you used to?

**Chris Coyier:** I hardly even know... Not that it's a bad question, but I don't know what it means, necessarily... Do I lead in what way? Like, tell people what technology they should use?

**Jerod Santo:** Specifically with CSS-Tricks and the technologies deployed and used there. You said you may have dove further in and done the GraphQL thing. And obviously, you're toying with these new things, which is similar to what we do around here - we try a lot of new technologies - but I'm just curious if you feel the impact of your decisions weighing on other people's decisions, or maybe pressure to do more, when you'd rather just ship what you're currently doing?

**Chris Coyier:** Yeah... I just think it's just kind of be talky about it is maybe the better version than leading. Just be like, "I don't know, we went with this FOR US." Sometimes when you talk about technological choices, and considering them and all that, always try to provide as much context as you possibly can... Like, "This is what we're choosing, for these reasons. This is what we talked about." Or "We punted on making a decision at all, because we just didn't even have time to research it properly... So we kind of chose what was already there, because it just was already there." As much context as you can give is nice, you know?

**Jerod Santo:** \[00:12:20.13\] Suz, I'm curious of your thoughts on this, because in the hardware space, in the streaming space a lot of people are looking to you for certain - I don't know if leadership is the right term there - inspiration they find; they look for you for more knowledge, more details. Do you feel like, now that you have this respect, especially with Twitch streaming, but also with all your hobbies and the stuff that you're doing, and as an advocate for Azure and all these things, do you feel the pressure to perform in the way that you haven't in the past?

**Suz Hinton:** I absolutely do, yeah. It's really good that you bring that up. Even when I wrote that article about how I Twitch-stream, I actually went back and fixed a bunch of things that were totally okay for me, but I felt that people would pick on, if I actually said "Oh, this is what I'm doing", and it's 90% of where I need it to be, so that's why I haven't really touched it and made it perfect.

So for me, I definitely feel like I do that sort of defensive polishing, if that makes sense, where I feel like I have to just sort of polish stuff before it goes out. And I think everyone feels like that, even in open source. It's like, "I'm gonna polish up this commit before I push it up, and rebase" and things like that. So I definitely feel that I need to always be putting out my best work now, and not just work that I think is good enough... So it's very complicated, for sure.

I think that sometimes that pressure is good, because it means that, you know, if I'm being lazy about something, then it just sort of gets me over that line... And so, to be honest, I think that article, especially about Twitch, as I mentioned my streaming setup, it actually kind of forced me to next-level my setup, so that I was actually recommending something that was good quality for other people.

**Chris Coyier:** I could see that. I'm interested in the streaming stuff, I think it's pretty cool, but I don't know anything. So when I hear you pre-call "Sorry, I'm gonna do a little behind the weeds here stuff, listeners..." Before we hit the record button here we were talking a little bit about cameras; you know, a problem that Suz was having with one of her cameras, and she hopped on Amazon and started looking for other cameras - that's influential to me immediately. I'm like, "Oh, interesting. I probably won't buy that one that she mentioned, because it caused problems. I'd rather look for something else."

**Jerod Santo:** Right.

**Chris Coyier:** So even just the littlest things can have an influence on what people decide.

**Suz Hinton:** Yeah, you definitely become much more aware of that. People will respond to things you didn't even think that they would respond to, and that's where you sort of learn to then go back over things that you gloss over a lot; I think that's the positive that comes out of it.

**Jerod Santo:** It's always surprising, sometimes delightful when people have takeaways, like you said, Suz, you wouldn't have expected. Like, you were expecting this theme to come out of whatever you're doing, whether it's a podcast or a blog article or a stream - "People will learn these three things, or they'll have this inspiration...", and then you hear the feedback and it's like, something that was either a throwaway comment, or an aside, that really impacted them. So you never know what's going to take root in people's minds and what's not going to... So there's definitely some responsibility, or at least consideration there.

**Suz Hinton:** Yeah.

**Jerod Santo:** Well, let's turn focus to the great divide. First, I wanna talk about the article itself, because I guess I just read CSS-Tricks in my feed reader - I'm just a nerd that way - and I didn't realize until I revisited it today to re-read it, because it had been a little while, that this is just a speak on the content side. You put a lot of work into -- it's almost like art-directed is the way I would describe. Beautiful imagery upfront...

**Chris Coyier:** Yeah, that terminology caught on, isn't it? When there's a blog post that isn't the normal template of what the site normally uses, that the term "art direction" kind of got attached to that...

**Suz Hinton:** I know that Sarah Drasner calls it scrollytelling, which I think is cool... \[laughter\]

**Jerod Santo:** \[00:15:56.10\] A beautiful article... I'm curious if this is something you wanna do more on, is this something that --

**Chris Coyier:** Yeah, I think we have another one in the works...

**Jerod Santo:** As a content creator, I always ask "Is it worth the effort?" Because a lot of effort gets put into particular posts; you don't know which one is gonna be popular.

**Chris Coyier:** It's certainly cheating... Like, it's absolutely just cheating. People will just talk about it more if you've done this. I don't think it would have gotten nearly the amount of attention if it didn't-- Because it's like drawing a big star in a highlighter marker on an article. It's using design to really call attention to something in a strong way. I don't know if "cheating" is the right word, but it's kind of just like "Hi, everybody! I want you to pay extra close attention to this, please!"

**Jerod Santo:** \[laughs\] And it's also kind of gambling too, in a certain degree, because you're putting a lot of effort into something that might not hit anyways...

**Chris Coyier:** Sure.

**Jerod Santo:** I think in the news space, the New York Times put years of journalistic effort into the Trump background as finances, and there was this bombshell report in the New York Times, and for some reason - because our politic is so crazy and the news cycle is every half an hour - they put literally years of effort into that, with multiple journalists, and it just kind of flew under the radar. So they lost a bet in that regard.

**Chris Coyier:** Really...? How did you get that insight info? Did you talk to somebody over there that new? Or did the fact that it wasn't news become news? \[laughs\]

**Jerod Santo:** Yeah, exactly. The fact that it didn't become news was somewhat news, and commented on... But even that was kind of a --

**Chris Coyier:** That's fascinating, yeah... To throw certainly hundreds of thousands of dollars--

**Jerod Santo:** I follow the media too much, but yeah... So a little bit of inside baseball, but you could see how that might happen. Maybe you sink a hundred hours into this and it doesn't make the impact that you hope... So a little bit of cheating, but also a little bit risky in terms of effort.

**Chris Coyier:** Well, I didn't spend years on this, but I did spend a lot of time, hence the effort on the design part. Because the design part was a couple hours. If you look at this, it's not -- I didn't hire an actually good designer to do this, or anything. My whole choice was like "Let me put a super-big title with an image behind it, just so it's very different from the rest of the site, and you know you've landed somewhere special... And then kind of remove the sidebar stuff, as you're scrolling through it; not something that we can do on every post, just because there's ad real estate, and it's just some UX things that happen in the sidebar that are important... But for this page, I'm like "Let's get extra reader focus here" and then just slapped some centering on it and tried to do a clean job of designing it. So that's not what most of the effort was...

Most of the effort was that I really wanna hopefully make this clear that this isn't just like "Chris Coyier saying some stuff, bleh! Here you go, I've made some decisions about what's happening in this industry. Suck it down!" I really wanted to avoid that. This is not just me. I've interviewed lots of actual people, like we're doing right now, and we've talked about it, and we got their thoughts, and I read tons of articles. The idea from "This is happening anyway. I'm reading lots of things that are all connected, whether they know it or not" kind of thing. So the article is quote, quote, quote, quote, quote, quote, personal experience... But there's like 15 people quoted in here, or something; there's a lot of that, so I'm hoping that by the end of reading it, that it's like "This was an exposé of something that's just happening anyway."

Unfortunately, the worst criticism I got for it felt like what I was not hoping for, which is just like "You're just stirring up controversy where there is none" kind of thing. What do you even mean...? I don't even feel like this is particularly controversial, really... And it's not just me saying it; look at all the names in this article. We didn't even say what it was.

**Break:** \[00:19:36.05\]

**Jerod Santo:** So we've been discussing this impactful article you've put all this effort in, called The Great Divide. Link in the show notes, of course. If you haven't gone to the website and read it - maybe you read it in your RSS reader like I did - definitely check it out, because it's great-looking and Chris put a lot of effort into this... We haven't talked about the content very much; I do wanna say that we did an entire show on it a couple episodes back, where you can hear Suz, Kball and Nick's thoughts on this. Episode 61, we'll link that also in the show notes.

So we just couldn't wait for Chris, we had to get talking about it, but now we have him here... And we wanna talk about it with you. I love the opener: "Two front-end developers are sitting at a bar. They have nothing to talk about", which is just an intriguing thought. This definitely resonated with a lot of people.

**Chris Coyier:** It's a little clickbait-y, I'm afraid...

**Jerod Santo:** It is... It's enjoyable though.

**Chris Coyier:** ...because of course they do have something to talk about. But there is like an other-worldly feeling to the fact that two people can self-identify as a front-end developer, and the technologies that they work with, what their computer screen looks like all day being just so incredibly different from one another... Particularly people that have kind of been around a while, people mockingly and defensively have been using the term "old guard", which I think is funny; but those kind of people...

And then somebody who maybe went to Code School last year, one of the many, many, many all over the world just pumping out developers... And the curriculum, as far as the research I've done and Code Schools I've talked to is fairly heavily Javascript-focused, and they're not ashamed of that in any way, because a lot of them quote that the reason that they exist is to fill these labor gaps that they've identified in the market... And that when you attempt to research that and see what job postings are like and what roles are trying to be filled, it's true that so many of them are filled with "We need these framework people" and "We need people that know this and that and this", and it's generally fairly heavily Javascript-focused these days... So they make the curriculum that way, and then who comes out of those schools is students who have a high proficiency in those things, and less so other things, and... That's just how things have been going lately, for better or worse.

So I try not to be old-guardy, in a way. I feel pretty new school with my understanding of web browsers, and front-end development, and where that's headed, and stuff. I don't wanna be too protective of the old ways; I know the world changes, and I get a kick out of working with all kinds of new stuff. So my goal was not to be just like "Ugh, these new kids... They don't know about border radius and the struggles I had. I used to make a table with nine slices to make a border thing." I'm like, "Yeah, that's fine to reminisce about once in a while, but...

**Jerod Santo:** The bad old days...

**Chris Coyier:** ...but it's really not important anymore. I don't care if new people had to struggle with that or not. They get to struggle with all kinds of new stuff.

**Jerod Santo:** One thing I wanted to bring up with regard to the divides - it's interesting to me, I guess, from a cultural perspective, or I don't know, looking at us as people... Because there's been divides in software developments all the way back, and these are prominent divides; even the idea with front-end and back-end, the idea of designer and developer, the idea of -- heck, Emacs vs Vim, the idea of functional programmers versus object-oriented programmers... There's this tribalism, there's a need to identify with a certain group, and that's really deep in our culture, and something that we do try to bring people across those different silos and cross-pollinate ideas; that's kind of some of our goals with what we do here at Changelog, is to really be polyglot and to break down those barriers...

**Chris Coyier:** \[00:24:07.25\] Great.

**Jerod Santo:** But never before I think have we seen it where the people who are dividing have the same title.

**Chris Coyier:** \[laughs\] Yes.

**Jerod Santo:** And that's really the thing - now they're both called front-enders, which that's different. There is obviously silos before, but we're seeing kind of a silo-ization of skillsets under the exact same moniker, and that's really troublesome.

**Chris Coyier:** Right. And so if there's any point to be made here -- because sometimes there's no point. You know, just literally two days ago I was at a conference and I've been giving a talk that's related to this; it's not 100% the same thing, but it's been on my mind, and I have stuff to say about it, and I have lots of people to quote on it, so I've been using that as a talk... And it's funny - I can get done with the talk and be like, "Oh man, I'm not sure that -- it was fun to go through that, and it was nice to shed some light on what's happening right now, but I have no point. There's nothing to take away from this, really..."

**Jerod Santo:** You're just observing...

**Chris Coyier:** Yeah... Except for there's a few; they're minor, but they have major life impact, I think. One of the points is that, is the job title thing... And this highly affects hiring, which is a big deal in people's lives. I can look around at job boards - you could do this right now in 30 seconds; go look at the CodePen job board, or the Stack Overflow job board, or Smashing Magazine's job board, or anything that is general web technology related jobs, and you'll see the word "We're hiring front-end developer" all over it. Everybody's hiring front-end developers.

So there's a couple of angles to that. One of them is the reason that's happening is because companies can put them to work so well. There's so much more stuff that front-end developers can do. They've been kind of unhinged, or let free lately. The front-end developers can be super-productive. So they are, but the reason they're so productive is because of the swathe of things that falls under the front-end developer bucket is so wide that it just depends... That's what's so tricky about this.

And then somebody with a certain front-end developer skillset will look at those job boards and be like "Yee-ha! Look at all these jobs. I'm gonna apply at a bunch of them", only to find out that they really don't have what that particular job is asking for.

So there's been people that are like, "Well, I'll solve this this afternoon." Fire up Medium.com, "Here's my new take on what job titles should be... If you're this, that means you have this, this and this skill. If you're this..." You know, "I'm a front-end engineer, I'm a front-end designer, I'm a UX engineer, I'm a UX designer", and they just declare what the new job titles are in the world and that's that... And that's been tried so many times that it's like -- that doesn't seem to be working. Maybe that is the final answer here, but it's gonna take more than -- I don't know what it's gonna take, but it's gonna be weird.

So this hiring thing, for now, what you can do if you're a company is be like, "Okay, maybe I have to put front-end developer in the job title because it's grabbing people, we're getting applicants that way", but you have to be a lot more descriptive than you ever were in the past about what that role is.

If you're saying, "I need a front-end developer to work at my agency to design WordPress themes for medium-sized clients", you need to be clear about that. "We use SaaS generally..." Not that these things can't evolve, but usually when companies are hiring, they're hiring for a pretty specific -- like, they need somebody right now with some of these skills, and that person can come on and evolve those things, but hiring is tricky. You need that skillset right now.

Or I'm hiring somebody to work on my VuePress site, that uses styled modules, or who knows what. It's just kind of a different section of front-end stuff, so you have to just use your words a heck of a lot better than you have in the past.

**Jerod Santo:** Yeah. So that's one of the talking points that I have in our notes around -- because when you start thinking about solutions... I love the way you say "I don't necessarily have a point. It's just an observation." These are not simple things; like you said, "I'm gonna go take a shower (where we all think best, of course) and when I get out, I'm gonna have a solution" - that's not the way it's gonna work. But I was thinking about codifying or formalizing share terminology, which is a huge effort, because you have to share that terminology, which is one of the problems... You know, five people have terms, and they mean six different things, because one person forgot what theirs meant before, and they changed it. That's the way we actually are.

\[00:28:12.22\] But is that effort - specifically on the hiring front, and around the ability to categorize more effectively for hiring... I think if it's not for hiring, I don't think the categorization really matters all that much, myself; I've always been of the idea that we should be "bread-first vs depth-first", and I don't really like to put people into boxes, but for hiring it's kind of a necessary thing... Is that a worthy effort? Even in my notes I say "Is that a lost cause?" Because it just seems like, "How do you even get that done in a practical sense, without some sort of W3C consortium for developer titles?"

**Chris Coyier:** Yeah, for the terms it seems to me like it'd be cool to see a job board that didn't even allow job titles on it. You've got a paragraph instead of a title -- I mean, this will never happen, so I hate to throw out solutions that don't have it... \[laughter\] But you just have to take one paragraph to describe what the heck you need! Because what I find so funny about this is at companies - somebody there knows what you need. It's probably another developer. But for whatever reason, at some size of company, that person isn't involved anymore, and it falls to HR, or something. That's another thing that you can verify in 30 seconds. Go to some of these sites, click on the front-end developer role and look at the job description; it's probably gonna just suck! I hate to say it, but... It'll just be full of jargon, and weird requirements, and it'll mention Microsoft Word for some reason... It's so easy to find these terrible job postings.

It might be much to ask - maybe there's a bunch of developers that don't wanna come in on Monday morning and have an email that says "Hey, Suz, can you write up a job description for this role that we need?" Maybe you're like, "Oh, I don't wanna do that..." Well, if you want good co-workers, maybe buck up and do it, because your words as a fellow developer to describe somebody else that could be placed on your team probably go a long way to making that job description palatable and understandable to a fellow developer. Anyway.

**Suz Hinton:** I couldn't agree more with this... I really couldn't. Because I think you're correct in that teams are so nuanced, and teams have different needs, they obviously are a different combination of skillsets and people, and they know better than anyone else what they need. But I think what also happens is that these jobs descriptions are written in a way where they don't have to keep asking people for tweaks every single time they're hiring, for headcount, and I think that's wrong. A lot of the time they're like "I'm gonna write it in a way where we can put five of these up, and whether it's senior, mid-level or something like that - we just change that and then it's fine."

But I think there's a lot of people who are even applying for these jobs, they're landing in the company on their first day and then they're also being told "Oh, no, we actually just need this. We need you to be really good at Vue.js", for example, and that wasn't in the job description.

**Chris Coyier:** Wow...

**Suz Hinton:** And then nobody actually gets what they want either.

**Chris Coyier:** That is straight up a problem. It's funny that it's a problem -- I haven't even considered that, that it's a problem after you even get the job. Usually you think about the problem as "I didn't get the job because of some weird mismatch of skills and what they were asking for, and how badly it was written", and stuff, but even if you do get the job, it can still be a problem.

**Suz Hinton:** Yeah. I've worked on teams where someone has been told that they're working on X, and then things change between when they're hired and when they actually start, and that's either not communicated to them or the job description was so generic that when people interviewed them, the developers technically interviewing them weren't briefed correctly on exactly what they're going to be doing, whether they're going to be working on the platform team, or something like that... And it seems like unbelievable, but I have actually been working at companies and seeing that happen, and then everyone is disappointed. That person is stressed out, because all of a sudden--

**Chris Coyier:** \[00:31:50.29\] Right, because you can't just piece out -- look at all that work you just did; it's not like you're gonna get some great severance package if you peace out in week one...

**Suz Hinton:** \[laughs\] Yeah, yeah. I think that's a problem. I really do love your idea of just sit down and write something, such as "We need somebody who's really good at accessibility, but can also have enough chops on this other technology in order to get us over the line and really innovate in this area." Those kind of job descriptions are amazing.

Maybe HR is afraid that if you write something really specific like that you'll have a much smaller candidate pool. I'm not really sure what that is, but I think a lot of it just comes down to efficiency of systems; either laziness from people who don't wanna write the specific ones, or just not even having an awareness of what a bad experience that is for everyone all around.

**Chris Coyier:** I feel like some of the hires then end up being like "Well, the job post sucked, but I saw my friend on Twitter tweet it, so I've followed up on it anyway, because I like them and I like the company" or whatever, so they end up being hired, despite the -- but you're casting a smaller net then.

Not to hijack this, but there's this other problem that's related in a way... If you try to focus on a point for this thing, hiring is a problem, and then code quality is the second major problem that has to do with this divide. And there's one way that I think is generally more agreed upon, and one that isn't, or is a little more thorny for people.

The one that's agreed upon is like, let's say you're hired as a junior developer, or you're just kind of a front-end person, and all of a sudden something lands on your desk like the database needs to be changed in some way... And you feel way scared and out of your depth to deal with that. Maybe you struggle your way through it and get it done, maybe you don't, but it was a weird mismatch for your skillset... And so you were aware, and maybe even everybody around you was aware that that wasn't perfect for you... So like, "Oh, crap, that was a mismatch!"

But then if you do it the other way around, for some reason this is thornier, which is you're some full-stack developer, and you're hardcore into Javascript and you're this site architect, and you have computer science background, and you're so great in that way... And then what fell on you was to create the layout template for the homepage, or an important page of the site, so what really became your responsibility was good markup and styling for that page... Maybe that's not your strength. You didn't do a very good job with that because you've spent your whole career doing other things, and that wasn't a part of it. But for some reason, there's this attitude that one of those things is like climbing up the ladder, to do something more complicated, and one of those things is climbing down a ladder, to do something simpler that should be \[unintelligible 00:34:35.15\] So they're not treated as just outside of skillset. One of them is just like "Well, that was easy, so we threw it at this person to do it", and then later people looking at that will be like, "They actually did do a kind of bad job on that, so why is this so looked down upon?"

**Suz Hinton:** I agree with that. I think people are much more forgiving on that side that you just talked about, for sure. They're like "Oh, well, they're so brilliant... They're just not good at this one thing", and it's a complete fallacy as far as judging what is some challenging skillset; it's very frustrating to come in from that angle. And also, just judging what is easy, and then basically insinuating that just because it's easy that it doesn't have as much value as the other thing, which is a super-big travesty... Because when you think about it, it's work that's going out to the user, and if you're deploying something that is quality to the user, then that's incredibly valuable. It has absolutely nothing to do with the journey that you took to get there as far whether you should value it or not.

**Chris Coyier:** I love that! What a great way to put it. I wanna quote that in my follow-up of that, because that's incredible. Of course, it has a tremendous value, because as a front-end developer that's your core thing; you're working with the browsers, which is THE thing that the users interact with. It's so incredibly important to get right.

**Jerod Santo:** \[00:35:52.24\] I have an old friend who comes from the programmer back-end side of that particular divide, and he would use to refer to what you would call the UI, or the job of the front-end/designer/that whole side of the stack as "arts and crafts", you know?

**Suz Hinton:** That's ludicrous.

**Jerod Santo:** It's incredibly condescending. There's no animus in the way he did it; he was just naive or ignorant of the fact that it was offensive, so I told him. It didn't offend me, because I wasn't necessarily doing that work, but I always saw it differently, because where I do come up against -- my strengths are on development, and regarding design, I've learned HTML and the layouts and stuff, I can do all that, but I struggle to, and I see where my skills lack there... So I always had the exact opposite impression; it wasn't that it was a step down or a simpler thing to do that part of the work, because that's the part of the work that I can't do as well, so I always thought it was the harder side. And the stuff that I'm more naturally inclined to do well I saw as kind of the easier side, because I could do it more easily.

So it's just interesting that multiple people come into the exact same place, whether you're coming from the front, towards the back, or you're coming from the back towards the front - when you get to that spot where we all kind of stop and I realize it's a sliding scale. You see that as simpler, or--

**Chris Coyier:** Right. And it's complicated by the fact that if you really were to throw down in the court of the world, "Is hardcore computer science stuff straight up more complicated than HTML?", okay, you're gonna win; it is more complicated in some way, but it doesn't make it -- like, the value scale...

**Jerod Santo:** Exactly.

**Chris Coyier:** I don't know, it's just tricky to talk about, especially at our role, especially when that person who's good at HTML and doing that work - it's probably not all they're doing; it's not like their job is just to sit there and make H1 and article tags all day... They're doing other stuff too, it's just part of their skillset is to be good at that document algorithm stuff, and thinking of style... And then when you factor in CSS on top of it too, and the whole design system around it, and having to think about it and tying in cross-browser stuff, it really compounds in complexity, to the point where it's starting to compete with computer sciency stuff.

**Suz Hinton:** That's a good way to break it down.

**Jerod Santo:** Well, computer scientist types have felt this as well over the ages, from other areas of organizations. We have this term "code monkey", and this idea which we try to break down these barriers as well coming from kind of the product or the project manager side, that the coding is like "Okay, now go do the coding and we'll be done with it", like it's just a thing that needs to be done, like a rote task... I think it's just this sense of othering, this way that we create tribes, and it's just damaging to the overall culture and damaging to our shared goals, to come out with something that -- like Suz says, the value for the user is what it's all about.

**Chris Coyier:** The tribalism stuff is--

**Suz Hinton:** When you think about it in the grand scheme of things, it doesn't matter. The biggest sobering and humbling thing that I always take to heart every time is the user does not give a crap about any of this stuff. They just don't care. This is all for us. This is all us just having our own little posturing, and self-satisfaction, and things like that; they don't care. And if we are allowing these kinds of silly cultural issues and dissing on different roles and difficulties and hierarchies, that doesn't actually help the user at all; and if anything, it does actually encroach on things like code quality and things like that, because we can't just get our act together and actually unify for the whole reason why a lot of us are working in these jobs... And most of it is an end user, but there are also people that work on a platform team that are trying to make things better for engineers as well; think that stuff is looked down on too, because "Oh, it's not going out to the user." So all of these silly value fights are really just distracting from creating quality tools, in my opinion.

**Chris Coyier:** Oh, that's great. Yeah, if anybody gets to win this little battle... Let's say there's this divide and we're fighting each other, I feel like a really good UX person could come in and they just get the crown... Because you're right, that is so much more important.

**Jerod Santo:** Yes.

**Chris Coyier:** \[00:40:08.25\] At the conference I was just at, the final speaker - and he's often the final speaker at those conferences - a guy named Gerry McGovern; I think he just has a great way of talking about how important that stuff is... And he never talks about code, I don't he's much of a coder at all, but he's just this kind of user champion, and not just a user champion, but he'll look at your business and just -- I feel like he just sees a bunch of ants running around, worried about these tiny little coding problems, and just throws up his arms and is like "What are you all doing? Nobody is thinking about the user, nobody is talking to the user, nobody is observing the user... What is happening here?!" I think about it all the time, because I feel like that's what I do at work; it's because I'm kind of a nerd and I just kind of like that part, and I've managed to do okay in my life so far just focusing on how to make rounded corners on things that maybe I'll just stay here, and it's kind of fun... \[laughter\] But looking at him, I'm like "You're so right..." Not that we never talk to users, but definitely not with the kind of frequency and velocity.

**Jerod Santo:** Well, let's end this portion of the conversation on this idea that you actually end your article with, Chris, when you say that Javascript is heating up, CSS workshops are easier to fill than they used to be, so it's not like any of our skills are becoming out of demand; that being said, demand changes. You said that one constant is change... In light of that, speak to the individuals - and Suz and Chris, I want you both to do this - in order to not be divided technologically, individually, not to be pigeon-holed, what are some ways, what are some practical advice to keep up to advance with technologies and not become "old guard" or have skills that are no longer demanded, and not have any of the skills that are currently demanded? What are some of advice for folks?

**Suz Hinton:** It's such a big question... I think what you can do is respect that you won't be able to know everything. I mean, this is part of the fear behind this whole divide - "Do I have to know everything? And if I don't have to know everything, then I will defensively look down on all the skills I don't have, to make myself feel better."

I think that you need to respect that you need several people all working together, who are good at different things, in order to produce the best quality output. Knowing that, it's really good to have just at least some kind of breadth, which you were mentioning, Jerod. If you heard a word that's said in a meeting, go and google it, and in five minutes you'll have at least some kind of bird's eye view of exactly what that's about.

So my best advice is to keep up with everything, is to try to play with things as quickly as possible, if you're at a point in your career where you can actually just follow documentation or whatever and have a quick play around. Ask yourself two questions: is this gonna result in a better outcome for me to use this tool, and a better outcome for my team to use this tool? And is this then going to either directly or indirectly (and be careful about the indirectness, because people can invent indirect benefits) be passed on to the user as a benefit as well? That just helps you keep a healthy sense of what you need to actually know and learn, but also you can just sort of not get so distracted by all of the buzzwords and shiny new things coming out that you're reading about on Hacker News, and Twitter, and things like that. It helps you to not feel overwhelmed, but also feel like you're actually doing your best to stay on top of things in a way that is sustainable for you.

**Jerod Santo:** Great answer. Chris, anything to add?

**Chris Coyier:** That was awesome. That should be a little clip for this show, by the way; I know you do that sometimes.

**Jerod Santo:** Yeah, absolutely.

**Suz Hinton:** I just have so many feelings about this topic... I'm so happy to be back for the second great divide discussion! I'm a little more coherent this time; last time I was so worked up that I was sputtering my words out.

**Chris Coyier:** Yeah... You know, I was trying to think of a little way you should think about what you should learn... Do you wanna frame it again, to help me and to help people understand what we're talking about?

**Jerod Santo:** \[00:44:09.06\] Yeah, sure. So the general idea is that things are changing, and that's the only thing that we know - the industry is going to change. What is valuable today - in terms of specific technologies, not necessarily broad skillsets - may not be valuable tomorrow... Hey, it could be more valuable, who knows? I don't think Javascript itself is trending down. We could all say it's going to be continued, but we don't know what's going to be obsoleted by what new technology. So in an effort not to become "obsolete", to become less demanded, what are some ways that people can look to themselves, find out where they're lacking and help themselves to float above those risks.

**Chris Coyier:** I love that! What an awesome thing to talk about... Because you're so right about all that. So I liked how we ended last round of stuff that we were talking about, talking about how important users are, and there's actually -- I wish I could quote it exactly, but there's even a thing in the spec for the web platform spec (I think it's in the HTML spec somewhere) that has this golden rule in it, and it has this "What you should consider most important overall" and in the way bottom of it is theoretical purity of a solution, and the way top of it is "Does it work? Does it consider the users at the very top of this thing?", which is great.

So I think that's important... If you're in this industry and working really in any industry - heck, you could be a doctor, a lawyer... I hate to only mention cliché job titles like that; cobbler, whatever... \[laughter\] But of course, you're considering your users above all else; always, always, always be thinking about that. Who cares about the technology? Are you serving them in the way that you possibly should? ...technology be damned.

Second, are you an awesome co-worker? That's pretty huge. Be good to the people that you're working with, because you're gonna get a lot more done, you're gonna be a better company, you're gonna be a better team, you're gonna build more successful products if you are working together well, and the responsibility for that is on you. Be a better co-worker.

On ShopTalk show our little saying is "Just build websites!" In a way it was defensive, because we were sick of answering the question "What should I learn next?" Because people are obsessed with that question; they're absolutely obsessed. I get it every day, in some way, and they just want an answer. And I get it, that's fine; I can try to give you an answer, but I can also try to give you this more generic and more truthful answer, which is learn the stuff that you need to do to build the thing that you need to build with your great workers for the user that you have put on top of your caring pyramid. So you're building something for them, pick the technology you know he needs to get there.

Now, that might leave you high and dry, because you're like "Well, what technology then?" and that's a little bit of a harder question. If I have to throw technologies at you, I'd say there's a lot of good stuff happening around the idea of a progressive web app, which is a pretty wide swathe of technologies, that can involve anything from the oldest school of technologies to the newest, fanciest stuff that's going on... It's more of a theoretical grouping of what the output is expected to be, so if you've never heard of that, definitely look that up. It seems like a big kind of important thing happening on the web, but in its early days; so if you're a PWA master, that's probably not a bad place to be headed with your career... And Javascript is a part of that world as well, and you teed this up pretty well; Javascript has just absolutely blown up, so I would never discourage somebody from going that route with their career these days. That's a smart move.

**Break:** \[00:47:45.29\]

**Jerod Santo:** Alright, let's turn our attention now to another one of Chris' babies, CodePen, which hosts just thousands and thousands -- I don't know, maybe you can give us a round number on how many amazing little programs and web thingies that are hosted on this site. We're gonna actually go roundtable style and talk about a few of our favorites, or things that we love on CodePen.io. Chris, off the top of your head, do you know how many pens are out there these days?

**Chris Coyier:** Oh my gosh, let me look for a minute, because I think it's just a query away.

**Jerod Santo:** Okay, you look that up, and in the meantime, Suz, let's turn to you. Hey, this was your idea; great idea. You must have had some pen on your mind that you wanted to share with folks. Why don't you tell us about it?

**Suz Hinton:** Yeah, I love CodePen so much, and I've actually used it in things like presentations, and things like that, just for some way quick to host something that I'm using for a second. I think my two favorite CodePen authors are both Sarah Drasner and Ana Tudor. They both do amazing demos, that are super-accessible, and they always blow my mind, because they're way better at this stuff than I am, so I'm always very inspired by those two.

Ana Tudor is @thebabydino on CodePen, and Sarah Drasner is @sdras, I think. We can put a link in the show notes.

**Chris Coyier:** I always forget it, because she's different on every platform. It's @sarah_edo on Twitter...

**Suz Hinton:** Yes, it's confusing.

**Chris Coyier:** That's sad that I don't know -- because obviously, she's one of my favorites, too. We work together on CSS-Tricks as well.

**Suz Hinton:** Yes, she is @sdras, I got it right. Yes!

**Chris Coyier:** Nice! That's great. Do I go next, or are you gonna go, Jerod.

**Jerod Santo:** Go right ahead. Or did you not wanna go next? \[laughs\]

**Chris Coyier:** It's just too hard for me. Everybody is my favorite. It's my thing that I made... That's too hard, but sometimes I -- the homepage of CodePen is often very artistic expressions of things. We fill the homepage with things that are usually pretty visually stunning. If you're just demonstrating how a class component works in Javascript or something that has no visual output at all, it still can be an interesting, useful pen that I hope people find, but it's probably not gonna hit the homepage, just because it will be a white block, and it won't be very interesting. But sometimes I love that kind of thing... Or if it's a somewhat boring front-end exercise, that was like "Look at this interesting situation I came across and solved..." I kind of like it when there's a CodePen of an interesting new thing.

Heydon Pickering blogged recently this interesting idea that he had three flexbox containers in a row, and that at a certain breakpoint he could get them to all flop down to vertically, but you could do it based on the size of the parent container, not a media query for the whole page. In front-end development that's been highly desired for a long time; it's like "Oh my god, could I please make decisions on the width of the parent container, please, please, please?" That's what matters, not the width of the stupid page, because inside the page who knows what's going on; maybe I'm breaking things into columns, or not columns... It's easy for a component to be in a smaller place on a big screen, in a bigger place on a small screen, just because of how columns break down sometimes. So to have this be this little thing that is a little bit close to what they call a container query is great.

\[00:52:07.26\] He wrote it up and explained it all, but of course there's a pen that goes with it, and it's so great to have that as a quick reference place to for a front-end technique like that. It may not make the most beautiful homepage kind of thing, but it demonstrates the concept really well.

For some reason when you asked me this just earlier today, I thought of this -- just one popped into my mind, so I thought I'd just roll with it... But it was this demonstration of a front-end technique like this, where the demo wasn't particularly beautiful but the functionality is so cool. Are you all familiar with the accessibility problems with a modal?

**Suz Hinton:** Yes...! Oh my god, yes.

**Chris Coyier:** If you open up a modal, one of the expectations of a perfect accessible modal is that it traps the focus inside of it, so if you're tabbing through focusable elements, that you don't then leave the modal and go out of the modal, because the point of the modal was to be like "Deal with this first", and then it can go away somehow and then you can go back to the page... But focus-trapping is a pretty hard thing to do on the web. You might be like, "Oh, I'll take a crack at this" and then 700 lines of Javascript later you have a kind of crappy-working version of it kind of thing. There is this pen that did this in a really interesting way with mostly just CSS, which I found fascinating. There is this selector in CSS called "Focus Within." Now, that's not widely-supported, so it makes this not perfect cross-browser yet... But you know how fast browsers move these days, it probably won't be too long. And Focus Within is like -- you know, a focus selector on an input is like when the cursor is in there, then it's focused; well, what if you wanna select the div parent of that thing? Well, you can do that now, which is really crazy, in CSS. You can select up the DOM tree and select an element when it has any element inside of it that happens to be in focus.

Imagine you have this whole wrapper around a form, and you've selected an input - you can select that form element that wraps them all, and change their background color, or do something... Which is fascinating.

**Jerod Santo:** That's awesome.

**Chris Coyier:** Now, there's this other thing... You have animations. We all know what those are, and Suz mentioned keyframes just earlier in the show, I think... There's Javascript APIs that are tied to CSS animations. So you can be watching the DOM for an event that's like "animation end" and that'll trigger when any CSS animation or one on a particular DOM element that you're watching for has ended... Or a transition end. So let's say you click on something and the focus selector in CSS changes the color from white to light grey or something, to indicate that it's in focus. Then you click away from it - there will be a Javascript event that's fired that you can watch called "transition end", which is fascinating.

Let's say you have a parent element that is a modal, and it has a transition on it that applies a box shadow, or something. And then you tab-tab-tab-tab, you have applied no focus management at all, and you hit tab again and now you've tabbed outside of the modal. Well, that box shadow is gonna go away with its little transition, and then that event is gonna fire that says "Oh, that transition end happened." Well, you can write a little Javascript that says "Oh, I know why that transition happened... It's because they left the modal." So you could say, "Okay, well that happened, so I know that the user has now left the modal. I'm gonna force focus back to the first element in that modal." So now you've designed a focus-trapping mechanism in six lines of code, which is crazy. That demo was on CodePen, too.

**Suz Hinton:** That's such a cool demo... And also, I know that for SPAs that makes it a lot more idiomatic to deal with, as well.

**Chris Coyier:** Right. It's not perfect... There's an article on CSS-Tricks about it.

**Jerod Santo:** It's not perfect... \[laughs\]

**Chris Coyier:** Well, the reason it's not perfect is mostly the browser support issue. If you're in a browser that doesn't support focus within, the whole thing is junk, you know?

**Jerod Santo:** Yeah.

**Suz Hinton:** Right.

**Jerod Santo:** Well, it's the web; we're used to not perfect, right? We've been there, done that, and continue to do that as we build new things. That's pretty cool, Chris. Give us the link to that pen.

**Chris Coyier:** \[00:56:12.28\] Credit there goes to Kushagra Gour, and the article is "A CSS approach to trap focus inside of an element." Very cool.

**Suz Hinton:** Nice.

**Jerod Santo:** Very cool. Well, I will finish up swiftly here... I will just say -- a little background on me: I grew up alongside the Nintendo Entertainment System, born in '82, grew up playing the original NES; specifically Legend of Zelda was my jam. I was obsessed with it as a young boy. In fact, I even had Zelda dreams, leading my parents to take it away from me for a while... I mean, I was into Zelda back in the day. Now that my kids are getting to the age where they like video games, I've just gotten back into my love of all things Nintendo. The Switch has brought me back, and so I started thinking... The cool thing about CodePen - there's so much stuff on there that you can just go searching for stuff and you will find something amazing.

Now, I just typed the word "nintendo" in the search box to see what's out there... What I'm really impressed with and I love on CodePen is all the pure CSS things, so this amazing thing made was nothing but CSS... It just continually blows my mind how skilled and knowledgeable these people are, and creative, in order to bend and twist the sometimes obscure CSS rules in order to create things that are amazing. So I grabbed a few, I will put them in the show notes.

I'll just highlight one, since we're getting short on time... There's an 8-bit gaming room with a Nintendo and GTA(Grand Theft Auto). I'm placing this in the chat, so you all can look at it... It's downright awe-inspiring. I'm not gonna describe it, because we're on an audio podcast; click through, check it out... The stuff that people do, playable games in CSS only - very cool, very cool. That's what I wanna highlight. I'll put a couple more Nintendo-related pens in the show notes; I just won't mention them here for time, but definitely check those out. Amazing stuff.

Chris, let's close here... Well, first of all, did you get that number? Could you get the SQL query type data as we were talking, or you forgot about it?

**Chris Coyier:** Well, I was a little scared to run that one... No, but I was like, "God, what is it? It's millions and millions, right?" I'm embarrassed that I don't know. It's like a glamour step, but it doesn't kind of matter... We passed seven million in April 2016, and growth has been a lot crazy since then. I bet it's over 50 million pens, I bet... And they're not spam either, because we're really aggressive with our spam slaughtering across our database. It's not like they're all 8-bit gaming rig kind of pens; a lot of times they're just tiny little demos that people make... In fact, that's I'm sure the vast bulk of it, but... It's a lot of pens out there, and we index all of them, and they're at a public URL, they're MIT-licensed as well, so there's 50 million easily-searchable, quickly-searchable MIT-licensed things out there for you to go grab and use if you want.

**Jerod Santo:** Very cool, very cool. Chris, you've been an amazing guest. Hey, while I have listeners here - if this is your first time listening to JS Party, let me recommend a couple other episodes... We've had amazing guests recently; I just wanna point out Paige Bailey was on the show, talking TensorFlow.js with Suz and Nick a couple weeks back. That's episode 64. Go listen to that. Paige has so much knowledge. Suz, that was a great show, wasn't it?

**Suz Hinton:** Oh my goodness, we were just so vibrating with excitement, I think... \[laughs\]

**Jerod Santo:** Yeah, she has that effect on people. A couple shows back, episode 65, we had Adam Wathan on the show, talking about Tailwind CSS and how to build rapid UIs with utility-first CSS, all he's up to. You may know him from Full Stack Radio. Go listen to that episode. Of course, Ashi Krishnan was on last week, and we have lots of other interesting things in the pipeline as well, so definitely subscribe... But hey, we really appreciate you joining us. This has been a spectacular conversation.

That's our show this week, we will see you next time!
