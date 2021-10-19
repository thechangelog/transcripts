**Jerod Santo:** Sacha, we're here to talk about the State of CSS survey results, but before this survey, what's the State of JS survey, which has been going on for a little while now, and it seems like you're enjoying that, or at least getting benefits from that in the community, so you're expanding to CSS now. Why don't you help us understand the history of these surveys, why you started doing them, and what's going on?

**Sacha Greif:** Sure. I think like a lot of people, especially a couple years back, I was a bit confused about the JavaScript world. There were a lot of things going on - React, Angular, Redux, Relay, Flux etc. So the main reason why I started these surveys was to help myself figure things out, and especially know what to focus on next, what to learn next... Because when you read Hacker News or whatever, it seems like there's a new thing coming out every week, and everybody's learning all these things all the time... But the reality is it takes weeks/months or more to get good at something like React or Angular, so you have to be careful about what you pick and what you invest your time. So that was really the main reason - to just figure it out.

I decided to do it as a survey, because I thought if I'm in that position and I'm gonna spend a lot of time online, I'd try to keep up, so if I'm confused, I bet there's other people who don't have as much free time as I do, who are probably even more confused, and they could use the help and they could use the data, especially. So that was the reason for the first State of JavaScript survey back in 2016. Last year, 2018, we had the third edition, and now this year, 2019, we're gonna have another State of JS, but before that we are having the first ever State of CSS.

**Jerod Santo:** Had you ever done surveys before? Because as you've learned throughout this process I'm sure if you haven't done them before is that it's very hard to do a survey well, and I'm sure it's been a learning process... But before that, have you done surveys in your work or in your experience previously?

**Sacha Greif:** \[03:52\] Not really... At least not on that scale. I've definitely done some really small-scale data collection, asking book readers or whatever for feedback... So those are kind of like surveys in a way, but nothing where I would really analyze the data and publish the results, and so on... So that was actually brand new for me, yeah.

**Jerod Santo:** One of the things that's happened is that there's been some criticism, and even some criticism from us here on the Changelog network on JS Party about the methodology of the collection, really around the transparency of the data and trying to get representative demographics. You can go back and listen to JS Party episode \#54, where we discuss these things... Sacha, you heard that show and then you wrote up a nice post of freeCodeCamp all about who took the State of JS 2018 survey. Maybe review that scenario from your perspective. I hope that our criticism was constructive and not -- we weren't trying to take shots at you, just trying to talk about the results.

One of the reasons why I think we thought it was worth talking about is because of the way that you do these surveys is so high-quality, in my eyes at least. Because it's the State of JS and because you put up such a polished result, it seems that it comes with authority... And because of that comes some responsibility, so that's why we thought it was worth talking about, is that this is not a survey that is put on by professional survey takers, it's put on by some community members. So just tell us about that post you wrote (we'll put it in the show notes), from your side how is that kind of criticism happen?

**Sacha Greif:** I think the criticism in that podcast - a lot of it was very valid. For me, there's two kinds of criticism; there's one about the lack of transparency, not knowing where the data comes from, or methodology, and that's 100% valid, and I'm gonna come back to it... But then the criticism that's always getting on my nerve is when people look at the results and it doesn't match their preconceived notion of what it should be, and they're like "Oh wow, React did really well in the survey, so the survey must be biased towards React" or "Oh, these guys use React to build the sites, so how could they not be biased?" And that's kind of annoying, because we really do our best not to introduce any bias... And beyond that, it's not something that we can necessarily control.

If somebody is like "Well, the only reason why Ember did poorly is because Ember devs didn't take the survey" - well, it's not like we were turning away Ember developers. We always do our best to get as many people as we can to take the surveys, and if it doesn't reach such or such community, we're really limited in what we can do, because we don't have a budget or we don't have advertising or anything like that. It's just us begging people to take the survey.

**Adam Stacoviak:** Let's talk about that then. Let's dive into the processes that you use to attract the community that it's supposed to represent. What are some of the ways that you do that? Do you do blog posts, podcast appearances -- obviously, you're doing one here today... What are some other ways?

**Sacha Greif:** The launch for a survey - basically, we rely on the community. We get in touch with people who are influential, like Wes Bos, or Peter Cooper, who runs the JS Weekly newsletter, Chris Choyier from CSS-Tricks; people like that, who have a wide audience... Which obviously also introduces its own set of bias, because -- to take a practical example, Wes Bos has done courses on React among other things, so maybe his audience is a bit biased towards React... So that's a fair criticism in a way, but it's just about the fact that "Well, what else can we do?" Yeah, it's a hard problem to solve in a really decisive way. We can only do our best, basically... But yeah, it's a lot of writing posts.

\[08:03\] One thing I really try to do is reuse the by-products of running those surveys. For example, last year I wrote a post about how to evaluate a JavaScript library, and kind of tying it in with the questions that we ask in the survey, to try and explain -- both give people this system for evaluating a library, and also explain the questions that are in the survey.

**Jerod Santo:** Do you ever reach out directly to framework authors and library authors to let them know? For example, if the Angular community feels under-represented in the demographics who took the survey, and therefore believe that Angular is under-represented because of that, it seems like it would be beneficial for them from the leadership perspective to know "Hey, here comes the State of JS for this year. We know all the frameworks will be there, Angular is gonna be there... We're gonna get this out to our community, so that Angular si well-represented in the demographics." Is that something you've done, to talk to library authors, framework teams? Because they have vested interest in helping spread the word.

**Sacha Greif:** That's not something I've done. First of all, it's not always that easy to know who is in charge of Angular or React... There's people who are very visible online, but they might not be the actual people who know about these things. Maybe that would introduce some bias, because if for whatever reason I contact Angular, React, Ember, but not Vue, let's say, that's already a huge bias against Vue.

**Jerod Santo:** You'd have to do all of them. You'd have to look at your actual survey and "Okay, here's my six frameworks that are on questions. I'm sure there's maybe another question, and so we're gonna contact all six and go from there." I'm not saying that that would necessarily solve the problem, but it seems like if there's under-representation in certain niches, then it could be up to the advocates or the dev rels in that niche to just at least get the word out that the survey exists. Now, if they start gaming it, and stuff, you've got a whole other problem, right?

**Sacha Greif:** Yeah, and also when you say "under-representation", it's tricky, because compared to what...? It's not like there's a population count for Angular developers. So the best we can do is compare our results to the Stack Overflow Developer Survey results... And so far they've been pretty similar. There aren't major differences, so that kind of tells us that we're in the right direction. But yeah, it's definitely a tricky problem.

To circle back to the transparency and methodology thing - what I started doing last year in big part thanks to your podcast, the feedback that I got there, is showing the sources, so how did people find the survey; which websites - was it Twitter, was it CSS-Tricks, or JS Weekly, Hacker News, or whatever... And that's a mix of what people self-report, and also we kind of use different tags. If it's on CSS-Tricks, the links will be stateofcss/?source, whatever. So at least this time, we really tried to keep the different sources distinct and make it easier to track them.

**Jerod Santo:** Yeah, that's excellent. And you have the data downloadable now in this new one right there at the top, in the demographics section. I think specifically in the State of CSS 2019, which we are looking at kind of a pre-release, which is maybe 98% done by the time this show goes out - audience, you can go out to the website and check out the full results... But right there you have the breakdown of sources, which is really awesome, as well as everything is downloadable.

\[11:53\] That was another one of our criticisms. I think what Kevin said on JS Party was if we could have the data, maybe we could look at it, and the community could do those kinds of things... It shows that this is a good faith effort absolutely, and we appreciate that, that you are adjusting and adapting, and saying "Well, let's make this better." That means the surveys will get better every year, and that's ultimately what we're all after, because they're so valuable.

**Sacha Greif:** Yeah. When I work on a project like that, I'm always doing my best... But the thing is, my best doesn't reach the same level in different areas. My background is more of a designer, so doing my best at that level hopefully gives something that looks pretty professional, and has a lot of credibility on that front... But then my best on more like a survey methodology front might not be as good, because I'm still learning. So the end result is kind of limited by what I and Rafael, my partner, can do.

Hopefully we'll improve everywhere as we go, but definitely the first couple editions have that mark of our strengths and weaknesses, and as we go, hopefully it gets more rounded out.

**Adam Stacoviak:** What do you think the magic number is, or a range of numbers, that can represent a community's opinion? So if you are speaking with JavaScript - very large; CSS - I would potentially say even larger, because so many people touch it... I could be wrong. But what are the numbers of people giving their feedback, giving their survey results, so to speak, to curb this bias, or even create this awareness of what is and is not popular in a community?

**Sacha Greif:** Yeah, that's a good question. It's really tough to answer... For me, I thought about that a lot, especially after last year, where a lot of the criticisms -- because the survey got bigger, so I got more criticism, which is fair... So my philosophy is not really the number, or whatever that matters; it's just people knowing what the data says and where it's from.

If you survey 20 people, that's fine, as long as you say that it was 20 people. If it's 200,000, that's fine too. If it's 20,000, but they come from such-and-such sources, which might introduce its own bias, it's fine as long as you disclose that. So that's really what we're trying to do.

For example, for the State of CSS, since a lot of our respondents are coming from having done the State of JS survey, I'm sure there will be a bias towards things like CSS-in-JS, or whatever... But I think that's fine, because people can know that, and see that, and also then use the data critically. For example, maybe the proportion of respondents who use CSS-in-JS libraries will be higher, but their opinion of these libraries will still be representative of the larger community.

I think in our daily life, when we see numbers in surveys, we're not taught how to analyze them. It's like "Oh, Trump has 30% chance of winning", or something, so you're like "That's tiny. It's never gonna happen." Then he wins and you're like "Well, the polls were wrong, because the polls said 30% and he still won." But obviously, that's not how polls work, and I think there's kind of an effort on the part of the people reading the data as well to see the raw data and then make their own opinion, rather than just want something that's kind of pre-baked for them.

**Jerod Santo:** \[15:54\] I won't 100% agree with you. Obviously, we want more diversity, we want more numbers... The more people, the more representative it is. A sample of 20 people, even statistically, is not enough to come up with any sort of conclusions. But at the end of the day, like you said, Sacha, if the data is out there and you provide the context, this source - right now I'm looking at the results, and 23% of the people who participated in the State of CSS heard about it because of the e-mail. I assume that's the State of JS mailing list. Is that the e-mail it's referring to? Yeah, so they're coming from that place...

And it's up to us, as the consumer of these results, to come up to our own conclusions based on not just "Hey, look at this one. It's number one", and then walk away. That's a very shallow way to live life, right? That's not how it works. You have to do your own analysis. And as long as the data is there, and there's a good faith effort and it's getting better over time versus getting worse, or there's no effort put in to get more respondents or more types of respondents, then that's a problem... But it's up to the reader to interpret the results. You can't just take the top 5 and say "Here's the winner because I read it on a website that somebody did."

**Adam Stacoviak:** On that note too, I would say if you're that person out there, listening right now, who has had some concerns about this or other surveys, and given the fact that 22.9% of the people who found out about this survey learned about it through e-mail - hey, maybe go sign up for the e-mail; that way you can contribute to its information, rather than being upset by the results.

I would also say, Sacha, that it seems to me that surveys, while they may indicate positions of truth, are not exactly full truth. They're sort of indicators. And I would even rewind back to your original reason for doing it, which was to inform your own personal desires for the JavaScript community, and essentially trudging your path. So it was a source of information, not a source of "This is the way it is." It was more like "Here's some data to make the next career decision you might make." For example, your Meteor JS book, or Folyo, or whatever. You need more information, more data, and I think that this is a way to get people more data to make accurate and more advisable choices, rather than not having data, data-driven.

**Sacha Greif:** Yeah, it's one more data point which you can take into account or not. It's up to you. Now, I think it's fair to say that because I called it The State of JavaScript, I'm kind of staking a claim, in a way... "This is what it's like. I have the ultimate truth." But I think you have to take it more as a marketing thing, in a way. I thought it was a good name, I thought it really communicated what I was trying to do. I'm not trying to say I have the only truth about JavaScript, or CSS, or whatever. So you have to take it with a grain of salt.

**Jerod Santo:** I completely agree with that, it is a great name, and I said this on JS Party and I'll say it again, because I'm back now on the 2018 State of JS... The website is just really well done.

**Adam Stacoviak:** Oh my gosh, yeah. So good.

**Sacha Greif:** Thanks.

**Jerod Santo:** And then you have the awards at the end. I think this is maybe the part that tips people over. It's like "Okay, here's the highest satisfaction library. Here's the most mentioned thing." And of course, people wanna see their favorite library or framework get that award, so it's going to bring out the feels... I think it did. Some of that is "Why is it Jest and it's not GraphQL?", or whatever those feels happen to be.

So I love the idea of the awards, but I wonder if that particular section of the results, which I see you're doing again here for CSS in 2019, maybe drove some of the non-constructive criticism that was out there.

**Sacha Greif:** Yeah, maybe. I'm a big Meteor JS user, and Meteor gets really bad ratings every year...

**Jerod Santo:** Yeah. How does that make you feel?

**Adam Stacoviak:** \[laughs\]

**Sacha Greif:** It makes me feel bad, but if I can take it, others can probably, as well.

**Jerod Santo:** There you go. I like that.

**Break:** \[20:18\]

**Jerod Santo:** Let's talk about how you go about doing these results, because it's a lot of work... And we wanna even hear about the process of getting it into this awesome form. First of all, we should probably mention that you aren't the only person doing this. Do you wanna flush out the team for us, so we understand who's behind these surveys, and the website, and the charts and everything?

**Sacha Greif:** Sure. I talk about "I did this, I did that" a lot, but that's because I take a lot of decisions; but actually, behind the scenes I'm helped by Raphael Benitte, who is -- funnily enough, I live in Japan, and I'm French and I'm a JavaScript developer, and he also lives in Japan, and he's also French, also a JavaScript developer... So we met here at a tech event, and we really hit it off because we were both interested in the same things... And he has a charting library for React called Nivo.js, which is really, really cool; it powers all of our charts, and it's really amazing. It has so many chart types, it's really flexible... You can customize it in tons of different ways... So he was kind of the perfect person to help me with that project, especially because he's also pretty good with data processing.

You asked me about the data processing stack... We collect the data with Typeform. It's a hosted form service, which is pretty good. It kind of struggles with our surveys, because they're so long and have so many questions... One day we would really like to build our own survey front-end, so that we can really tailor it and work on the performance aspect and so on, but for now we're happy with Typeform.

Once we have all that data in, Raphael set up an ElasticSearch process, a database thing which downloads all the data from Typeform, puts it in ElasticSearch, queries it, aggregates it, normalizes it. That generates static YAML files, which go into Gatsby. We use Gatsby's GraphQL querying to use those YAML files as source and inject that data into the React site that serves as the front-end.

**Jerod Santo:** \[24:06\] We've found your YAML files yesterday as we were poking around the open source code... Because Adam was like "How do they even build out a site like this in Gatsby?" and I was just like "Well, I'm sure there's just some data source somewhere. Maybe it's pulling from a back-end that just serves up JSON, or -- nope, here's the YAML files, right down in there..." And we started discussing just briefly why YAML, in this circumstance... Because that's what Typeform gives you? Is that a format that you would prefer? I mentioned "Well, at least you can put comments in YAML", even though it is auto-generated, whereas a JSON as a data file - you can't put comments in it.

I'm curious, was that a choice of yours, or that was just how Typeform spits it out, or the data processing stuff spits that out?

**Sacha Greif:** No, I much prefer YAML, because it's less verbose. There's no curly brackets everywhere, there's no commas to deal with... JSON, for that kind of use -- if it's in a .js file, it's kind of permissive, that's fine; but .json files are always horrible to deal with, in my opinion, because the syntax is so strict.

YAML is really convenient, it's easy to understand, it's easy to edit, even by hand... Yeah, YAML is really cool.

**Jerod Santo:** And is this your first run at Gatsby, or have you used it for other websites? I'm curious your thoughts on Gatsby real quick, before we dive into the actual results here.

**Sacha Greif:** I've used Gatsby for a while, I think before version one. Yeah, definitely when it was in beta... I don't remember what the first site I built with it was; maybe the first year of State of JS. But since then I've kind of used it for everything I do. As an aside, I also have my own JavaScript framework called Vulcan JS, which is based on Meteor. It's not a static site generator, it's a real, Rails-like framework. But for everything else I do that's more of a static site, I use Gatsby. I've used it for the three State of JS, State of CSS, I use it for my own little homepage, I use it for a blog that I'm doing for my work... I use it for a bunch of stuff.

I think State of JS and CSS though - that's the most complex Gatsby stack that I'm dealing with currently. There's definitely a lot going on. But Gatsby is really cool, I really like it. It's definitely not super-easy; it's more of a power user thing, I think. I hope the Gatsby guys don't get mad at me for saying that... \[laughter\] Because they're really cool guys. But I think it really shines when you have to aggregate lots of data sources, and you want that flexibility basically, that other static site generators don't really provide.

**Jerod Santo:** Yeah, it's funny, when we had Jason Lengstorf on the show to talk about Gatsby, we were assuming -- because it pitches itself as the fastest static site generator; and they don't like the term static site generator, but we'll just use it for now... And we thought that meant the fastest build times. I was like, "Well, taht's kind of crazy", because -- what's the Go one? Hugo. Hugo build super-fast... So I thought it was developer-friendly in that regard, like it's gonna build fast, it's gonna be super-easy to use... And he's like, "No, no, no. The point is the results, the output, the actual website at the end is optimized to be the most performant, the fastest." All the best practices on the results, but that doesn't necessarily mean it's the simplest, fastest, most developer-friendly to use, because they're working on all that... But it's flexible, and the results are awesome, and so that's why it's worth it.

**Sacha Greif:** \[27:50\] Yeah, for sure. It does a lot for you behind the scenes, there's a ton of plugins... It's really, really powerful. What's cool is once you do master it, you can do simple things with it. My own homepage - I actually removed the JavaScript from it, so it's all statically-rendered, and there's no JavaScript on the client, basically. So you can even do that... Of course, you don't get the performance aspect, but if you just want something that's 100% static, Gatsby can do that, too.

**Jerod Santo:** I'm curious about analytics - are you doing server-side analytics, or do you still load a JavaScript file for tracking?

**Sacha Greif:** I don't know, I think I might not have JavaScript, because it's just my own homepage.

**Jerod Santo:** So while we're getting meta, before we get into the results, one last aspect that we find interesting, and I think you'll find it interesting as well, listeners, is that there's actually a new thing this year which is brand new - the T-shirt. We've gotta talk about the T-shirt before we get into the results. A CSS T-shirt - "Support the survey and look good in the process." It is a very cool CSS-logoed shirt. Sacha, I assume that's you on the website there wearing it. Tell us about this idea, what you're doing with it and what you hope people do, which I assume is buy it... But I'll let you speak to that.

**Sacha Greif:** Yeah, so I'm a big believer that any project needs to be sustainable, so even though State of JS is not something I'm necessarily doing to get rich, or anything like that, I do wanna always experiment on ways to monetize it, as long as it's not intrusive. I'm never gonna put ads that track you, for unrelated products, or anything like that. But if we can find partners or sponsors that also provide value by giving you access to resources, or whatever, that's something we've done in the past.. And now this year I had this idea to do a T-shirt.

Actually, I did a T-shirt of State of JS last year as well, but I did it in partnership with the dotJS conference in Paris, where I presented the results, so it was only available to people there... But the attendees really liked the shirt, so this year I decided to try again, and this time make it available to everybody.

If it turns out that that's a viable way to monetize the survey, that would be awesome, because it means we can remain completely independent. A shirt is something that you can keep selling as time goes by. It's not a one-time thing.

Then also what I wanted to do is make a shirt that actually teaches people something. Listeners can go check it out on the survey page, but it basically has our survey logo, which itself is built with CSS, and then the shirt has annotations that tell you the CSS properties that were used to build the logo that's on the shirt.

**Adam Stacoviak:** What's cool about this is it's not really self-branded even. It's on the line of more educational and well-designed, rather than simply saying "Hey, State of CSS survey". It's more just like CSS-agnostic in general, you know?

**Jerod Santo:** Or focused on the CSS...

**Adam Stacoviak:** Right. That's what I meant to say.

**Jerod Santo:** ...but survey-agnostic, right? The shirt is not part of the survey. It's not a survey shirt, because nobody wants to wear a survey shirt, so you were smart enough to make it about CSS, right? Which is timeless, interesting, and very well designed, as you'd expect from the stuff you're putting out, Sacha. The websites are always very well designed, and this is no exception. The shirt is very easy on the eyes.

Yeah, definitely let us know how the results go with the T-shirt. Listeners out there, if you like these surveys, if you get a benefit out of them and if you want a cool T, definitely support this effort by getting out there and buying this shirt.

If this goes well, Sacha, this will be something that will be a JS T-shirt down the road, maybe there'll be specific things... If you do different surveys, you might do a T-shirt per survey. Is that the idea?

**Sacha Greif:** \[32:01\] Yeah, that would be awesome. I don't know yet if it would be the same T-shirt every year, or... Because coming up with a new design every year is still a lot of work, even if it's once per year. Usually, we're already short on time and we're already trying to wrap everything up, but... We'll see. Definitely one per survey would be cool.

**Adam Stacoviak:** Sacha, I'm curious -- you seem to have this touchy-feely way about approaching the monetization of it. You're concerned, or you want it to be sustainable, but you wanna approach the monetization of it in a way that respects, obviously, the community. What's your outlook on this front? I don't know how much you can share about the financials behind the things, but I'm just curious how sustainable it has been, how much money you've had to put in from your personal pocket, and has it simply been a labor of love, or has it been a labor of love and some profit?

**Sacha Greif:** We did make some profit -- I don't remember the exact figures, but at least a couple thousand dollars last year; maybe 4k-5k. That comes mostly from sponsorships, and then affiliate links. We have affiliate links to courses like Wes Bos' courses, or a couple others. It's not even a question of ethics or anything; I think most advertising doesn't work online, and the only reason it can work is when it provides actual value to the customer/user/reader. If it's just unrelated... I think what happened is the worse the ad, the more you have to add tracking and unwanted things to make up for the ad not adding value. On the other hand, if the ad itself can have value, you don't need all this extra tracking stuff, or unethical stuff.

**Adam Stacoviak:** I think you probably wanna be more in the line of partnerships, where there's a mutual benefit. The folks that would be or are willing to partner with you on the State of JS survey or the State of CSS survey - you want people who care about that community and want to help it thrive, and care that this survey exists, and therefore it makes sense for them to be a partner with you and sustaining it, for one... But then they also get the representation of caring about the community, and that's part of what your design would illustrate, is how do they care, how are they relevant, why should you care about X brand, or whatever.

**Sacha Greif:** Yeah, and I think you get a very small amount of goodwill from the community, and you don't wanna waste it on making a bad impression, with just random Google ads, or shady business practices, especially if you're in it for the long run, which we are.

For us, even if we just don't monetize at all and we skip a year, it's fine, because our main goal is just getting the survey out there, and getting good data, and establishing it as a brand. Maybe that's also the designer in me speaking. I really think the brand is the most important, and the profits are secondary, after that.

**Jerod Santo:** One other idea that you could do - and maybe this is just generating more work, so it's not great... But what I think of is now that you have State of CSS and JS, and you have this process down, like you said, you may develop your own front-end, every year you get a little bit better at it - you could go to specific organizations that have vested interests in specific communities that don't have surveys. So you could have State of Rust 2020, and it's not that there's advertisers, it's that maybe Mozilla funds your entity to run the survey for them.

\[36:03\] So it's brought to you by Mozilla, just because Mozilla wants to know what the state of Rust is; or maybe the state of Go, and it's brought to you by Google. It's not that they're advertising, it's just that they're the ones that are funding the effort, and maybe those contracts could be large enough that it actually makes the others ones where you could do without funding for those. Is that something you've considered, or is that too far down the road? Or just too much work?

**Sacha Greif:** I think I would love to do that. We both would love to do that. But I think practically speaking, a lot of the value we bring to the thing is the ability to get the data and know what to do with it, and then publicize it. And if you come into a community where you don't have any ties or any expertise - like Rust; I don't know anything about Rust. I'm not sure I would be able to replicate that.

On the other hand, if I leave it all up to Mozilla to do that, then I'm not sure how much value we provide. We're kind of like regular contractors at this point; we just make some React code. I don't know, I think we'll have to explore exactly where we come in, under what terms..

**Adam Stacoviak:** Well, especially since you're putting in your own personal thoughts too, like inclusions etc. A lot of this isn't simply just the data back; it's some insights, so there's some personal flair to it, so to speak, using TGI Friday's terms.

**Jerod Santo:** I've got one last monetization idea before we move on. One thing that I think is new this time around is that there's actually under the Resources section a podcasts question; I just wanna point out that the Changelog, despite not even being specifically about CSS or front-end, is the number three most listened to podcast, right behind Syntax and Shop Talk, which are great shows; so we're in good company there.

Sadly, JS Party is not on this list, so that means we have some work to do to get the word out... So here's my monetization idea. We give you money, and then you put JS Party at number one, and then everybody's happy.

**Sacha Greif:** Well, I was gonna say yes, but now that you've talked about it publicly, I can't really accept it. \[laughter\]

**Adam Stacoviak:** Touché!

**Sacha Greif:** Yeah, so I'll confess that the main reason why we have all these podcasts in there is so that people talk about us... So far it seems it's working right.

**Adam Stacoviak:** It's word of mouth. It's how it works.

**Jerod Santo:** We'll never fall for that.

**Break:** \[38:34\]

**Jerod Santo:** Let's look at some of the results of the State of CSS 2019 survey, what has come out of it, and maybe talk about the findings, what we think about them etc. The first one, Sacha, that we thought we'd bring up is under Features, the layout. The interesting thing here, first of all, you have an overview of the usage of layout tools, and this is an interestingly designed chart. It's almost like a Venn diagram, but there's no overlaps... And we'll have a hard time explaining it audibly, so definitely check out the results for yourselves.

\[40:00\] One thing that's interesting - you have an outer circle and an inner circle, and the outer circle is like "How many people know about a feature?" and the inner one is "How many actually use it?", which I thought was a very cool way of displaying.

What's interesting - you have Grid and Flexbox, and they're both really big. There's a few other features... Exclusions, which I had personally never heard of, Writing Modes and Multi-Column Layout. But Grid and Flexbox are the two big ones, and they're both large outer circles, because everybody knows about them. But when it comes time to who's using what, Flexbox is in huge use, and then Grid is like 50% use. Was that interesting for you to find out?

**Sacha Greif:** Yeah, it's kind of what I expected, because Grid is newer, and it's maybe a little bit more complex to learn, so it makes sense that the adoption wouldn't be as high as Flexbox. My personal story is that I had been using floats for years, and I hated every moment of it. Then when Flexbox came along, I kind of jumped on it right away, because it saved me from ever having to do float right, and then clear both, or whatever... Overflow hidden, clear fix... I'm getting PTSD just thinking about it...

**Adam Stacoviak:** Me too...

**Sacha Greif:** But then when Grid came along, I was more like "Oh, one more thing now I have to learn?" It took me a long while to actually start using it, and now that I'm using it, I'm still not super-comfortable, but I really love it, and it's actually probably better in Flexbox for most use cases, so having that chart with Flex then, and I really wonder what would have happened if Grid had came out first, before Flexbox. I think Grid would have a much larger adoption, for sure.

**Adam Stacoviak:** That begs the question then, since you mentioned floats -- floats isn't in the list. I'm sure there's people still out there using floats. Is it just not in the list because you assume it's not being used, or because it's literally not being used by anybody?

**Sacha Greif:** No, it's not in the list because we assume everybody knows it and has used it, or they might be still using it, but we really wanted to focus on new features for this survey... Because otherwise, you know, we're not gonna ask "Are you using font size, or are you using display block?" There's no real point to that. We consider that floats were in that same situation, where if you write CSS -- I mean, that might not be true, because you might have learned in the last couple years, maybe you haven't used them, but otherwise it doesn't tell us much to know who is using floats, I think, unless... I guess you could argue that if there's a downward trend indicating people are using them less and less, that would be interesting...

**Adam Stacoviak:** That's how I look at it - the historical value of knowing today... I mean, obviously, this is 2019, so likely not many are using floats, because it's older. Flexbox, as you mentioned, has been around... So even the old hats are probably transitioning. You were pretty happy to be done with floats, and I'm sure anybody learning today is probably learning new states of things, rather than older states of things.

**Sacha Greif:** Yeah, it just comes down to having to make choices, because otherwise we would have had too many questions, which we already had too many. The survey was really long... But yeah, we removed some stuff, and had to make some cuts.

**Adam Stacoviak:** Moving on to animations and transforms... This particularly stood out to me, because of our desire as designers - and potentially as users of the web, or interfaces in general, the usage of animations, or even subtle or very large animations, to provide good feedback, or whatever it might be to enhance the user experience. To me, that seems like a highly valued thing as a designer and as a user, and I was pleasantly surprised to see the transitions, transforms and animations, as Jerod mentioned before, the outer circle and the inner circle - on all three of these they're very large. So the three primary ways you can provide a complex animated or motion-based interface, it seems that a lot of people are well-aware and also using them very well, which is super-cool.

**Sacha Greif:** \[44:16\] Yeah, definitely. I think it's cool. I think it's interesting that there's a small difference between transitions and animations. It took me a while before I started using animations. For a while I was just doing transitions. Just to recap, transition is basically when there's a state change, like hovering usually, and then animations can be more complex - you can have keyframes... So it's not limited to just two states. It is more complex, which shows up in the data.

What I'm looking for in the feature section is really data points where there's a big delta between both circles. Like we were talking about Grid... In other words, many people have heard of something, but few are using it. Because that means people are probably gonna start learning it soon. So for me, those are the up and coming technologies, or features, in this case, or maybe they are hard to learn... I feel those are the features where there's a story behind it. When it's really almost overlapping, when almost everybody who knows about (let's say) transitions has used them, it kind of means that it's a good, solid feature, and there's not that much interesting stuff to say about that.

**Adam Stacoviak:** Yeah, I think that's interesting how you say "probably going to start learning it", because like in any environment, in order to make progress, there needs to be a healthy feedback loop. And to me, that's why I think to our credit from part one or part two of this show, suggesting how important this survey is, and obviously your convictions and your ability to adhere to the community's desires of eliminating bias and expanding diversity, and being transparent with the data etc. is very informative to provide a feedback loop to the community. Both to educators, to learners, to companies deciding on technologies etc. This to me is so crucial, having that ability to see that Grids are less used than Flexbox; that more people are aware of it, and likely about to start learning it. That's an indicator, and that's a good feedback loop.

**Jerod Santo:** So let's talk units and selectors real quick, because... I don't know, I kind of turned my nose up at first at this whole category; I'm like "What's the value here?" And now the more I stare at it, the more I start to think about it. I think there is value. One thing that's worth pointing out is this is the first State of CSS, and Sacha, you mentioned that even on features it'll be interesting to see trends over time, like "Well, maybe people are moving away from floats", for example, and it's not interesting right now, but it will be interesting in 2020, 2021. So it's worth noting that this is very much a snapshot, just because it is the first one... But a lot of the really cool stuff that you can start to track is as this gets put out year by year, trends in the industry.

When I'm looking at the units and selectors -- I mean, how many people use px versus ems, versus percentage in terms of sizing things... And at first I was like "Well, of course everybody uses--" because you can answer more than one, 99.5% of people use px, or 96.9% use percent... And I was like "What value does this provide?" But it seems like if you just wanna check yourself... Maybe you're just learning CSS, or maybe you're wondering if you're doing it wrong, and you come to something like this and you see "Maybe I feel like px is the old school way, and you're supposed to use ems, or rems, or whatever", and I'm like "Oh no, actually pretty much everybody is still using this, so I feel good about myself." Is that the idea with this whole section about units and pseudo-elements, and ever selectors?

**Sacha Greif:** \[48:08\] Yeah, first of all I think a cool thing is just having a list of all these selectors, or units, or whatever... Because a lot of them -- even I have never heard of them. I don't know about ex, but you can look it up. Maybe we can link those up to some documentation, or something... But yeah, it's selectors, there's lots of things that I learned just doing the survey... And then also, because this was the first year, we weren't sure what we should ask. We weren't sure which sections would turn out to be interesting. Some of this stuff maybe we won't keep it for next year. Maybe we'll ask the questions differently or present the data differently, but this year it's really just trying to collect as much as we can and see what people respond to, and what they want more of.

**Adam Stacoviak:** Another interesting aspect was the frameworks. Who doesn't love a framework, right?

**Jerod Santo:** This is where the guns come out.

**Adam Stacoviak:** That's right. Careful now, careful now...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** So it took us a little while at least to grok this... What was the term you used to describe this, Jerod?

**Jerod Santo:** Well, I call it a circuit board, but that was just because it looks kind of like one of those diagrams. I don't know exactly what this chart's style is called. Sacha, is there a name for this style chart?

**Sacha Greif:** Yeah, it's a bump chart, apparently.

**Jerod Santo:** Okay.

**Adam Stacoviak:** So there's a bump chart, it's at the top, it's an overview, and then down beneath -- we're in the CSS frameworks section, by the way, so if you're listening, follow along by doing that... You've got all the different frameworks mentioned, Bootstrap Foundation etc. What I find pretty interesting - it took me a little while to grok this, but you saw left to right the three attributes: awareness, interest and satisfaction. So 1) are you aware of it? 2) are you interested in it? and 3) if you've used it, are you satisfied with it? I think those are three good indicators of pretty much any technology, framework, whatever.

What's so interesting though is how you can just look at the interest, because that's the top; it goes from top down in terms of interest, literally... But tailwind being the most interested, or having the most interest, but then what you also see is a correlation not many people are aware. However, at the same time, just as many who are interested are also satisfied with it, so it would tell me that Adam Wathan needs to get out there and market more, or find more ways to do word of mouth, because hey, people are really liking this thing; they're interested in it, they're using it, but they're not very aware of it, and I'm sure he's probably also aware that there's not many people aware of it... But yeah. I think this is interesting to 1) the folks behind each framework, but then 2) the community of like "What's up and coming? What should I be learning? What are people really satisfied with in terms of top to bottom?" And I think this really paints that picture very well.

**Sacha Greif:** Yeah, so I should say that the chart may change a little bit by the time listeners hear this, so we'll improve it a bit to make it clearer... But yeah, I really like it as well. We arrived at this chart after many iterations. We were trying to have this ranking of ratios, so it's not absolute values, because bootstrap obviously is gonna have more people satisfied than tailwind, just because more people have used it, the community is much larger... But then if you look at the ratio of satisfied versus non-satisfied, then you can actually compare them, and then tailwind takes the lead. And also, even though these charts are typically used more to show chronological data, so years, months, whatever, here it's kind of a snapshot in time... But at the same time, it kind of corresponds to three stages of adoption. First you become aware of a technology, then you are interested in learning it, then you actually use it, and you can be satisfied or not. So it's not chronological data in the sense that it's all corresponding to a single point in time, but there is this aspect of an evolution for a single technology.

**Jerod Santo:** \[52:15\] Yeah, it's a very interesting chart, because it starts off super-confusing, and we even had to talk about it... Like "What is this even trying to say to us?" And then once you figure out "Oh, okay, this is how it's working", then when you look at it, it almost seems intuitive afterwards. You're like "Okay, this makes a lot of sense." I can look down here and see that Tachyons is near the bottom of awareness, but the interest is in the middle, and the satisfaction is top 5. So it's very highly satisfying to those people who are using it, it's got a decent amount of interest, people want to learn about it, but out of the whole, it doesn't have much of an awareness. So the people who are aware of it, they do wanna try it out. Yeah, it's a very interesting chart.

**Sacha Greif:** Yeah, we always try to include a few puzzle charts, in a way, where it's not obvious right away how to read them or what they're saying, but then you can decode them, and then it becomes very easy to read. I think maybe the overall technologies chart is a little bit like that as well, and we have the scatter plot, the quadrants chart... So there's a few where it's not just bars, or whatever. It's a little bit of upfront work, but then it's rewarding because you get it.

**Adam Stacoviak:** You definitely need an explainer for how to read the chart... Unless you're a chart master, and in such case you know exactly how it works. For me, it took me about five minutes, so I'm not a chart master. \[laughter\] Admittedly.

**Jerod Santo:** And Adam had to describe it to me, so I'm even lower on the run there. Before I move on, I just wanna point out my favorite framework, Semantic UI, is struggling a little bit. Fourth-highest in awareness, so pretty highly aware, and very much interest (second), but then the satisfaction is down. It's down more towards the middle of the pack. And I would say that that's probably -- this point, unfortunately, is deserved, because Semantic UI has been falling behind in terms of maintenance. It's just the pure weight of the number of issues and people using it have really bogged it down. We've had Jack on the show a couple of times trying to talk about that; I've even reached out to him and said "What can we do about Semantic UI and helping you out?" It just seems like it's one of these things that's a victim of its own success perhaps... Sometimes that's the way things go.

**Sacha Greif:** Yeah, I think you can look at Bootstrap as well, which is number one in awareness, but last in interest, which kind of makes sense, but then also pretty low in satisfaction.

**Jerod Santo:** Right.

**Sacha Greif:** Sometimes just being number one in terms of sheer size doesn't' guarantee a good ranking in the other areas.

**Jerod Santo:** Yeah, it can harm your satisfaction, even because of somewhat -- exactly.

**Adam Stacoviak:** What's interesting too is if you rewind -- and I'm guessing about maybe five to eight years, somewhere in that range, Bootstrap and Foundation were sort of the rage at the time, because they were not to designers who would rather design their own thing, but for a lot of people it was like "Well, I can launch with them faster." And it's funny that these two correlate very well in terms of their satisfaction.

Bootstrap is just one notch above Foundation, and roughly the same in terms of interest. Lots of people are super-aware of both Bootstrap and Foundation, which sort of parallel one another in terms of what they aim to achieve as a framework... But the interest and satisfaction - to me, \[unintelligible 00:55:42.14\] it's good that you can see that these two... Not so much that they're in the place they are, but you can see from anybody's point of view what is something worth investing your time into, and potentially what people have found interest in and satisfaction in, but isn't that aware of.

**Jerod Santo:** \[56:02\] Let's move on to methodologies, these ways of writing your CSS or architecting it. BEM, SMACSS, OOCSS, Atomic CSS etc. It seems like for the most part BEM is dominant. Highest awareness, pretty high interest, highest satisfaction; 52% of respondents have used it before, versus the next following up, which is Atomic CSS, which is at 20% (have used that architecture). Did this surprise you, or was this -- as a CSS guru, Sacha, are you at all surprised by these results, or is it pretty much what you'd expect?

**Sacha Greif:** I feel I'm gonna get in trouble if I call myself a CSS guru...

**Jerod Santo:** Well, I called you that. You didn't call yourself that.

**Sacha Greif:** Okay. Yeah, it kind of matches what I expected. BEM I feel benefits from being really clear and the concept at least is really simple. The other methodologies - I feel it's a bit muddier what exactly they involve. I'm curious about ITCSS. I hadn't really heard of it, but looking at that, it kind of looks interesting, and it has a good satisfaction rating as well. But I think methodologies -- we wanted to have them, because it's something that's kind of unique to CSS. JavaScript doesn't -- you can't have functional programming or object-oriented. It's not codified like CSS, so I think it's interesting that CSS does have these. But at the same time, I don't think most developers are that rigid about observing a methodology. Even myself, I used BEM but in a very flexible way, where I've seen it's too much work, I had to stop using it and just write random classes. I suspect a lot of people do the same.

**Adam Stacoviak:** Yeah, it's interesting to see that SMACSS was sort of the leader of this Methodologies instead of rules for writing CSS, being sort of a flat line in terms of awareness, interest and satisfaction, and BEM being the highest in awareness and satisfaction, but just one dip down in terms of interest. But hey, that's how it works out.

**Sacha Greif:** Yeah. Honestly, I think CSS had a lot of holes, a lot of things that were missing, and that's why the methodologies developed, as a way to fill out the language... But then the more stuff we have - CSS Grid, Flexbox - the less we need those methodologies. And in some cases it doesn't make a difference. Having good classes is always a good idea. But I think the more we can do in the language itself - that's also with pre-processors like Sass, and stuff like PostCSS. So I do think the more you leverage these tools, the saner your code looks, and the less you need the methodologies. CSS can become more like another programming language like JavaScript, where you kind of have your own style, but everything kind of makes sense because the language is powerful enough.

**Adam Stacoviak:** Let's open up the can of worms then... Probably the most highly-debated -- I'm not really sure how to describe it, but the CSS in JavaScript argument has been fought and won and lost, and refought again... There's a lot of opinions here. What are we learning from what you've gathered in the survey?

**Sacha Greif:** Styled Components are number one in terms of awareness, second interest, third satisfaction. Overall, pretty high. The one that's really interesting to me is Emotion. Low awareness, pretty high interest, and number one in terms of satisfaction. So any time the number one satisfaction ratio has low awareness, it kind of indicates an up-and-coming technology, where few people know about it, but the ones who use it are very happy with them, and might become evangelists for that technology. That's the kind of thing I like to keep my eye on.

\[01:00:11.27\] Of all these, I've only used Styled Components, and actually for State of CSS we just use Sass, so we don't use CSS-in-JS at all. Not for any particular reason, more like we haven't had time to make the switch. Personally, I like the concept. I think the most valuable thing - I think I say that in the introduction to that section - is that the more new ideas we have, and the more new people we have writing CSS or CSS-in-JS, the better overall, because... I'm not an expert, but I'm sure if it hasn't happened already, some idea from CSS-in-JS will make their way into plain CSS, as has happened with Sass and stuff like variables, or maybe nesting, at some point... And you don't have to use those if you don't want to, but I think having a more powerful language, especially before CSS, which started off as pretty limited, I think it's probably a good thing on the whole. Whether you like CSS-in-JS or not, whether you use it or not, I think overall it's probably a good thing for CSS itself.

**Adam Stacoviak:** Yeah. That's how I saw preprocessors, postprocessors... When Compass and Sass had come along, it was the first time I'd seen the idea of a programming language like Ruby, in the case -- now it's since moved on from Ruby, I believe, to other languages to do the stuff...

**Jerod Santo:** The preprocessing stuff...

**Adam Stacoviak:** Yeah, exactly. You've got these higher-order, not limited to simply using CSS itself produce a CSS file. At the time - this was many years ago - it had blown my mind, and I was like "This is anarchy. This is crazy. This cannot happen." Then I was like, "No, this is amazing", as I looked into it further. And I see the same thing happening here with CSS-in-JS. What you're gonna see is the language get pushed forward, and in a lot of ways CSS itself is the language it is today, and has some of the features it has because of the pre and postprocessors, and I would assume that similar things would happen by pushing it in the way that CSS in JavaScript will push it.

**Sacha Greif:** Yeah, and maybe CSS-in-JS might be a trend for a couple years, and then CSS will catch up and start using CSS-in-JS less and less... And I think that might happen with Sass actually, because we think Grid, which lets you not use breakpoints, which means you don't need mixins as much, with variables, with calc - all these things are kind of eating up the things that Sass was so good at. So it's really interesting to me to see how - yes, CSS is making all these other tools obsolete by just evolving in the right direction.

**Jerod Santo:** So let's just hit a couple of real quick ones in the Other Tools and Environments, and then I wanna move on to Opinions. Text editors - VS Code, 73.8% of respondents using VS Code. Sublime - 35%. Sorry to the Vim Party chat room in our Slack; only 18% of people responding to this particular survey are using Vim for development. Browsers - we have Chrome dominant; 92.2% of people are using that browser, specifically during initial development of Firefox, with 53%. I'm not seeing Brave anywhere on the list. I must have not taken the survey, because I'm a Brave user even during development.

Environments... Chrome during -- oh, is this the same one? Browsers - which browsers do developers work in.

**Sacha Greif:** \[01:03:56.00\] Yeah, that's a mistake on the version you're seeing. This is actually "Which browsers do you test in?"

**Jerod Santo:** Right.

**Sacha Greif:** Not so much the one you're most at home in, but the one you make sure everything works in.

**Jerod Santo:** Gotcha. So yeah, much more people using other browsers -- that's a good thing, right? We have people testing in browsers that they're not using on a daily. Much more representative - Safari Edge, Safari iOS, IE, Chrome Android etc. etc.

Which form factors do developers test on? Pretty much everybody tests on desktops. 99.7%. Only a few hundred people are not even using a desktop at all to test, which -- what's wrong with you folks? You've gotta test on desktop. 91.6%, so it drops off a little bit for smartphones, but still, a pretty good penetration in terms of testing on phones. Tablets 70%, so on. You can read those results for yourself.

Let's get to this Opinions section. I thought this was cool. We'll close with this one here, I guess, and maybe have you state some of your conclusions, Sacha, as we tail off the call.

This is a section which is basically like you answer "Do you agree with this? Do you strongly agree? Do you strongly disagree?" Kind of a sliding scale, and it has a bunch of statements about CSS.

I thought this was a very cool section of the survey. The learning curve for CSS - the statement is "CSS is easy to learn" and... Pretty high agreement. 35% agree, and then another 25% (rounding) strongly agree. Pretty much nobody (and by nobody I mean 340 people) strongly disagree with that statement. So CSS still, even though it's evolved and added a bunch of stuff, and people get caught up with how to select your precedents and all that stuff - there are things... But overall it seems like people are thinking it's easy to learn.

Speaking of evolvement, "CSS is evolving too slowly." This is one that I thought I would see more agreement on, but most people are pretty much neutral on this. Did this surprise you, Sacha? Does this reflect what you think about the evolving pace of CSS?

**Sacha Greif:** Yeah, I also thought the agreement would be higher... Maybe that's because I've been using CSS for a long time, and I'm still used to the glacial pace of change. Well, maybe I shouldn't say that... \[laughter\] But you know, for a while we didn't have as obvious as -- the improvements weren't as visible maybe; I know a lot of work was going on behind the scenes, on the browsers and stuff, but I think especially compared to the last couple years with Flexbox, Grid, the pace has really picked up. I think if you've started using CSS in those years, you probably feel like it's evolving just fine. If you're more used to ten years ago, or whatever, maybe you agree with that statement more.

**Jerod Santo:** The question that I also enjoyed - "CSS is a programming language." This is one that folks like to argue about on Reddit and whatnot... But most people strongly disagree. 31%. And then another 18% disagree. 23% neutral. So most people are either neutral on this, or disagree, or strongly disagree that CSS is a programming language. What's your take on that one?

**Sacha Greif:** I don't know, I think it probably all depends on your definition of programming language. I would say yes, just because I don't know what else it is. \[laughter\]

**Adam Stacoviak:** Well, in its basic definition, you are programming a machine to do something, and it is a language, so at its basic core it is a programming language.

**Jerod Santo:** Are you programming the machine though?

**Adam Stacoviak:** I suppose... It depends. Yeah, there's some really interesting things you could do with CSS, but...

**Jerod Santo:** You're declaring...

**Adam Stacoviak:** Yeah, that's where the debate is. Therein lies the debate. I would agree with that, that there's a debate. \[laughter\] It's obvious!

**Jerod Santo:** So we have 100% agreement that there's a debate about whether or not it's a programming language.

**Adam Stacoviak:** \[01:08:01.08\] Well, that brings me to my point here - the statement is "CSS is a programming language", and I always find it kind of hard, because it's like is it agreeing or not agreeing when you say "Strongly disagree?" Because it's like...

**Jerod Santo:** We disagree with the statement.

**Adam Stacoviak:** Right, exactly. But it's hard to grok it... You have to sort of like process -- at least me, I have to process it a couple times to be like "Are we agreeing, or disagreeing, that it is, or it isn't...?" And then I'm like "Okay, good. Good."

**Jerod Santo:** You've gotta think about it.

**Adam Stacoviak:** So most of the people disagree that it is a programming language. That's the point we're making here. 30.95% is the number.

**Jerod Santo:** That's strong disagreement. Add in the disagree, and you've got roughly 50% that either strongly disagree or disagree. Well, whether or not it's a programming language - that's just kind of a fun meta-debate... But let's finish on this one - enjoyment. "I enjoy writing CSS." Now we're not gonna have much controversy here, because these are people who like CSS, because they're taking the CSS survey, to a certain degree... 48.67% strongly agree, 27% agree, 14% neutral, 6% roughly disagree, and then only 442 respondent strongly disagree that they enjoy writing CSS.

So despite all of its -- what did you call that, glacial evolvement, and glacial change, and the debates about it being a programming language, and the tooling, and where to put it, "Do I put it in its own file? Do I put it in my JavaScript?", for the most part people do enjoy writing it, so that's a good thing.

**Sacha Greif:** Okay, let me just say a disclaimer... I think the pace of change is much faster now...

**Jerod Santo:** \[laughs\]

**Sacha Greif:** Because a lot of people from the CSS development group helped us...

**Jerod Santo:** Plus, you're a CSS guru now, so your opinion really matters now.

**Sacha Greif:** Yes. I have official business cards.

**Jerod Santo:** You can put that on your LinkedIn.

**Sacha Greif:** But yeah, so one thing I learned actually by working with the working group people, some of them, is that CSS does so much more than what we typically think. Let's say that you need to display your website on a smartwatch, and that smartwatch has a round face. There's people who are tasked to figure out how CSS works on circular screens, or fridges, or really all kinds of devices, all kinds of environments.

It's a really tough job, especially when you see how well CSS works at the end of the day across browsers, across devices... There's really nothing else like it, there's no other way of visually styling your content anywhere. It's kind of unique. And the fact that at the same time it's kind of easy to learn, enjoyable to write... I think it really says a lot about the quality of the work of the CSS people. I've always had my annoyances about CSS, but at the end of the day I think it's important to really value the work that's gone into it.

**Adam Stacoviak:** Yeah. I think that there's times when we've brought CSS up on this show in particular, with designers coming on the show, sharing -- I'm thinking in particular the most recent one, which was like "Design thoughts for developers..." I can't recall the title; Jerod, you can help me out with that one, but... If you bring up CSS, there's always this sort of like cringe, but there's still some enjoyment in writing it; it's just very hard. It's a hard language in my opinion to really master. It takes a lot to really master. And even when you think you've mastered it, you have just begun to scratch the surface of mastery... Unless you're Eric Meyer or something like that, or whoever wrote the book CSS Mastery... They're the masters.

**Jerod Santo:** \[01:12:02.00\] That's how you master it, you write the book.

**Adam Stacoviak:** That's right, that's right. I wanna mention too, we would have covered awards here in this call, because that's something we love to give praise to, either for the frameworks out there or those leading the way... However, those details are not finalized just yet, so we couldn't quite cover those... But one thing you do say, if this is accurate, in the current state of the State of CSS website, is if we had to pick a theme for this year, it would be New Beginnings. I wanna charge everyone out there listening that if you care about the feedback loop to this community, CSS or JavaScript, then I would encourage you to get to know Sacha better, or subscribe to the email list... Whatever it takes to put your perspective into this story, because without your perspective we don't really have a quality feedback loop. It's important to have everybody's voice, and more importantly it's important to have a wide spectrum of opinions on what's being used out there. It's gonna inform the larger users of CSS, it's gonna inform the larger perspective and future of CSS, and future technologies, to enjoy even more so this sometimes love/hate-it language, at least from my opinion.

Sacha, any closing thoughts from you? Since you have a conclusion here, and you've done so much work behind this... You and Raphael have put so much effort into this and we appreciate that. Is there anything you wanna close with or share with the audience before we say goodbye?

**Sacha Greif:** Well, I just wanna thank you guys for having me on, and... Yeah, I hope people will find this valuable and will enjoy it. It was a lot of fun to build, and we always have fun with the design, and it's always interesting for us to look at the data... And I really hope that this can become just like the State of JS, a yearly thing, and we can see how the trends evolve over time. And what I would really like to do even more is just keep expanding this to different domains, so JavaScript, CSS, maybe React, GraphQL... There's a lot we can do before we run out of things even that we use ourselves, like Node, Gatsby... There's so many things. Who knows, maybe next year we'll have even more surveys to talk about. I don't know at which point I will start losing my sanity; I don't know how many surveys I can run at the same time, but I definitely wanna try.

**Adam Stacoviak:** Worst-case scenario, you have more clothes. If there's a T-shirt for every survey in every year, then hey, that's an easy way to outfit your closet.

**Sacha Greif:** Yeah. I need at least seven surveys so I have one T-shirt for every day of the week.

**Adam Stacoviak:** That's right. You're a minimalist, that's good. I wanna remind folks, StateOfCSS.com and StateOfJS.com are the two places you can go to catch up on past results, and just play your part. Right now the survey is over for State of CSS, so you'll have to come back next year, if there's a next year, of course... But those are two places you can go. From there, there's lots of links - to Twitter, to Facebook, to the e-mail list...

Sacha, thank you so much for joining us today. It was awesome to get a behind-the-scenes look at the survey and all the things you're up to. The details behind things like this are really interesting to us. Thank you for your time.

**Sacha Greif:** Yeah, thanks.
