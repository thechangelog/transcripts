**Nick Nisi:** Hoy-hoy, internet friends. It's me, Nick, on your favorite podcast, JS Party. We're here with another very exciting Yep/Nope debate episode. With me today is Amelia Wattenberger. Amelia, what's up?

**Amelia Wattenberger:** Hey-hey! Nothing...

**Nick Nisi:** How are you doing?

**Amelia Wattenberger:** I'm good. How are you doing

**Nick Nisi:** I'm doing fantastic. I'm not part of this debate, so I get to reserve my thoughts, until the end, I guess... So that's great. And also joining is Amal. Amal, how's it going?

**Amal Hussein:** Hi, Nick. Very excited to be here, and I hope to not make too many enemies... This is just a TV show. That's not a TV show, it's like a podcast, but I still... You know, we're actors, everybody, so...

**Nick Nisi:** Yeah. Sometimes actors have to play parts that they -- that isn't their character.

**Amal Hussein:** Right, right.

**Nick Nisi:** Well, we're glad you're here... And also, Kball. Kball, how's it going

**Kevin Ball:** Nope. Nope, nope, nope, nope, nope...

**Nick Nisi:** I think we know which team you're gonna be on... Team Nope... And we have a special guest this week, and kind of the man behind the premise of the entire debate, and that is Josh Collinsworth. Josh, how's it going?

**Josh Collinsworth:** It's good. And let me just take this opportunity to say "Yep." \[laughter\]

**Nick Nisi:** Now I know what team you're on. Josh, why don't you tell us a little bit about yourself

**Josh Collinsworth:** Sure. I'm a senior frontend developer at Shopify currently. I've been doing development for a few years now. Before that I was a graphic designer, and people told me "You should learn code", and I'm a people-pleaser, so I did... But really, I actually -- I just really like it. And in my spare time I enjoy technical writing and blogging. I've written some for CSS-Tricks and a few other publications.

Recently, I wrote a post about React, that was just a collection of some thoughts I had at the time, and I definitely didn't expect to get any kind of popular, but it's kind of prompted us all to be here today, in a way... So this will be interesting, and I too am hoping not to make too many enemies after today.

**Nick Nisi:** \[00:04:05.27\] \[laughs\] Well, yes, it is a very interesting article. I was very excited to read it. It's called "The self-fulfilling prophecy of React." We'll have a link to that in the show notes. So that is kind of the premise that we have here. For those of you that are new to this format of episode, what this is - it's a debate episode; we call it Yep/Nope. Kind of based on the Alex Sexton Yep/Nope kind of feature detection library for JavaScript... And the premise of today's show is going to be "Is React only great at being popular?"

Debating that very loaded premise, we're going to have team Yep, which is going to be Josh and Amal, and then debating against that is going to be team Nope, Amelia and Kball. And I'm just in the middle, moderating this... My first time moderating, so I immediately lose...

**Amal Hussein:** Nick is on the fence. That's what you are, you're on the fence. You get to be Switzerland, you know?

**Nick Nisi:** Exactly.

**Amal Hussein:** You get to be everybody's friend.

**Nick Nisi:** I'm coming out of this employable.

**Amal Hussein:** And also everybody's government, you know?

**Kevin Ball:** And possibly everybody's enemy? \[laughter\]

**Amal Hussein:** Yeah... Also, did you say this was Alex Sexton was the inspiration behind this? Because I got to work with him for a little while. I didn't realize that.

**Nick Nisi:** Yeah, just the name, the Yep/Nope from his feature detection...

**Amal Hussein:** Yeah, such a small world... That's cool.

**Nick Nisi:** Yeah. So the format of this is going to be I'll be the moderator, I'll be enforcing some time constraints, and each of you will have two minutes to make your case in this first segment. We'll start with ladies first, and we'll go -- I'll give you two minutes, and I'll start a clock. And then when it's over, I will play this sound. \[wut?\] I will probably play it a couple of times, because it is very easy to talk over poor b0neskull as a buzzer... That will be the buzzer. You'll have two minutes to make your case, and then we'll move on to the next person, and we'll kind of go through everyone there, and then we will come back in the second round for some more rapid-fire rounds. And then, of course, at the end - we've all been assigned viewpoints on this, and so that doesn't necessarily reflect where we're at... So in the third segment we are going to talk about what we really feel about React in general... So stay tuned for that. Don't dislike us from just the first two segments.

**Kevin Ball:** Yes. If you only listen to the first bit, you might hate some of us. But like every engineering question, there's probably nuance.

**Josh Collinsworth:** If you give it till the end, you might just hate all of us.

**Amal Hussein:** Yeah, that's true. And I'll take that, okay? If by the end of this show you still hate everyone, then you know what - there's nothing we can do.

**Kevin Ball:** We did our jobs.

**Amal Hussein:** We've done our jobs, right. \[laughter\] Also, Nick, who gets to go first? I'm glad that you said "Ladies first."

**Nick Nisi:** I did.

**Amal Hussein:** I was like "Wait... That's awesome. But that means I have to potentially go first..." I'm just hoping -- can I punt this to Amelia?

**Nick Nisi:** Okay...

**Amal Hussein:** Because I'm thinking, you know, Amelia, Amal... You know, her name is longer than mine...

**Kevin Ball:** You're the positive premise. I think you should go first, and lay it out there.

**Amal Hussein:** Oh, gosh... No, I think that you're the status quo, and so you should go first.

**Amelia Wattenberger:** I was also thinking, can "Ladies first" be "Ladies choose who goes first?" \[laughs\]

**Amal Hussein:** Oh, I like that, yeah.

**Nick Nisi:** You know what - sure. We can do that.

**Amal Hussein:** Yeah. I choose Josh to go first, then Kball. Thanks... Good job, Amelia.

**Amelia Wattenberger:** \[laughs\] I like that.

**Nick Nisi:** Josh, it is your article, so if you are prepared, I will put two minutes on the clock...

**Josh Collinsworth:** Okay.

**Nick Nisi:** And you can start.

**Josh Collinsworth:** Alright. This feels like it should be easy, because basically all I'm doing is summarizing the article that I wrote.

**Amal Hussein:** \[laughs\] Yeah, you cheated. Dang it! Well, actually, is there like a soundboard? Are we gonna have -- you know how the boxing matches have that "Dung-dung!" Is there gonna be a dung-dung?

**Nick Nisi:** I have a Wut. \[wut?\]

**Amal Hussein:** Okay. But is there like a start, like -- okay, it's fine. I'm gonna stay quiet now. I'll let you press the buttons.

**Nick Nisi:** Alright. Yeah, I'll make some sounds up as we go, and I'm sure Jerod can fix it in post. \[beep\]

**Josh Collinsworth:** \[00:08:02.10\] So we've kind of reached this point in tech where React is more or less the default choice for any given project. It's reached that critical mass where it feels like the safe default for everything... But there's any number of criteria, from performance, to bundle size, to onboarding, to just complexity, dev experience... All of these things are areas in which React doesn't really win on its own, generally speaking, in which there are better options. And when you kind of zoom out and look at the big picture, you kind of realize React is pretty mediocre at just about every given category, and the only category it really excels in is just being the thing. Just being the popular thing. The one that we all know, and the one that people hire for, because it's what they teach, because it's what they hire for.

So whether it's performance, React is not coming out on top. Bundle size - probably not. It is certainly far more complex to use, it has a lot more gotchas to learn than the other frameworks do... Some people point to the unopinionated nature of it as a benefit, and that's a little more subjective, I guess. For me, that leads to a lot of fragmentation, and spending a lot of time looking for a solution, when I just wish "Man, there should just be a solution. It should just be handled for me already. I shouldn't be spending my afternoon looking at ten different libraries and reading comments on the internet. Don't make me read comments on the internet to choose things. I don't like doing that. I do enough shopping online..."

So I guess that's kind of my summary of where I'm coming from with all this. We've crowned a winner, but the winner doesn't actually win at anything.

**Nick Nisi:** {wut?\] Perfect. I played the sound three seconds early. That was a perfect opening statement, so nice job, Josh. Alright, now, on team Nope - that's Amelia and Kball. Amelia, would you like to pick which one of you goes first?

**Amelia Wattenberger:** Yeah, I'd love to. I feel like Kball is a really solid opening act for us.

**Nick Nisi:** Sounds good. Kball, take it away. \[beep\]

**Kevin Ball:** Alright, so we're gonna talk about a little bit of this, but I'm gonna talk about one of the things that's downstream of popularity. When you are popular, you have to handle all the different cases. So you cannot necessarily focus on one thing to the exclusion of others. You highlighted all these different categories you might be considering as a point; and if all I care about was absolute performance, I'm gonna ship static HTML. The problem is that only works so far. It works for a few problems, and each of the frameworks that you're talking about may excel on one dimension. But when you're building an application to sell, you're gonna have to take into account all those different dimensions.

So I would posit that being above average - which I think calling React mediocre on these factors is really pretty pitiful. They may not be the top on very many of these factors, but they are above average for your choices along every factor that you're going to have to consider as a developer. And for that reason, when I'm looking at the future and trying to preserve my options, they are a top choice.

I would like to highlight a couple of things... In your article you looked at State of JS survey. I also looked at the Stack Overflow survey, and I would note that React has an 84% satisfaction, which is higher than Vue, almost two times higher than Angular, not far behind Svelte, with way more usage. Like, two times more usage to almost 25 times more usage across these. So if React were only being used because everyone is doing it, you'd expect with 80% of people in the survey you reference using it, it would be getting way lower scores.

Now, I'm gonna highlight a couple particular features. So hooks are one. Hooks are genuinely great. And sure, most frameworks now have hooks, or hook-like features; I love the Composition API in Vue, don't get me wrong... But let's be honest, none of that would have happened without the React team paving the way. Hooks was still first, and the implementation in React is still pretty amazing.

\[00:12:04.05\] There's also the factor of stability guarantees. So other than possibly Ember, which... \[wut?\] What?! I'm like a third of the way done. Okay... We're gonna have another couple of rounds of this going on, so...

**Nick Nisi:** Oh, yeah.

**Kevin Ball:** ...you have only begun to witness the ways in which React is far more powerful than just being popular. \[laughter\]

**Amal Hussein:** Objection. I think the court should overrule that. We have to retract the statement. Anything after the first wut should be removed from this transcript, or whatever... I don't know...

**Nick Nisi:** It shall be stricken from the record at the editor's behest. \[laughs\]

**Amal Hussein:** Thank you, thank you. No, it's fine...

**Nick Nisi:** Which means it'll probably still be there.

**Amal Hussein:** It'll probably still be there, yeah. So, okay...

**Nick Nisi:** Yeah, now it is your turn, Amal.

**Amal Hussein:** It is my turn? Ding-ding...

**Nick Nisi:** \[beep\]

**Amal Hussein:** Okay, you have to start the clock from now, okay? I'm losing time... Okay. Well, you know what, Kball - that was a very interesting take, and I'd say the word "mediocre" is subjective... And I would say React has done a phenomenal job of paving the way, and I think pushing us forward as a community to think about components. And those are all great things. However, 2013 is when it came out; and in JavaScript years - you know, we're in 2022, so React might as well be going into its grave, right? So we're the community of innovation on the web... You're either moving forward or you're dead in JavaScript, right? So we are the innovators, and quite frankly, React has been over-innovating in some areas, and under-innovating in others... I think by trying to kind of have this API - like you said, it's this wide reach, it's used and it's popular etc. Well, guess what happens when you're trying to appease everyone, and when you have one core library that's the base for so much? It means you're doing lots of things in a mediocre way. And some things well, most things not so well, right?

So when you're thinking about your API design, you have to be intentional, and as a library author you have to kind of resist the temptation; like, do one thing, and one thing well. And I think React kind of lost the story when it tried to reinvent JavaScript engines in the browser, quite frankly. Thread management, scheduling, concur, this, that and the other thing. I think when they first rolled out some of those features, Facebook.com had bugs. Every abstraction in the web has a cost, and React for me is just too much of a cost at this point. I can't justify their cost. The only kind of case where I would consider using React in 2022 for a new application... \[wut?\]

**Nick Nisi:** I'm gonna cut you off right there, right at the perfect cliffhanger...

**Amal Hussein:** I was trying to target multi-platform users, you know? That's about it. \[laughter\]

**Nick Nisi:** You didn't hear that. You didn't hear her perfect case for it... Stopped right there... \[laughs\]

**Amal Hussein:** Alright...

**Nick Nisi:** So, we have one more, and that is Amelia. Amelia, do you wanna have your Nope opening statements? \[beep\]

**Amelia Wattenberger:** Yes. So first of all, Nope. Second of all - so we always talk about how React is super-unopinionated. And as a veteran of the framework wars of 2015, I just wanna say we don't want to go back there. It was exhausting having a new framework every single week. Life is much better under the benevolent monarchy of React. Like, isn't it nice to have one framework that works pretty much everywhere? And there's a library... Hey, I want a library that has a 3D rotating globe with lines on it. You know what? You jsut google it, it's there. You pull it in. Pretty easy. Life is good. Do we really wanna go back to life before React?

\[00:15:52.21\] Another argument is if we're gonna have one ruling framework, don't we want it to be unopinionated? So React is really nice, because it's basically just a rendering library with a minimal state management solution. There's so many other things that build on React, that kind of make it equivalent to other frameworks. So even if you think about meta-frameworks, there have been so many popular ones. I think when it came out, there wasn't one, and then there was Create React App, and Next, and Remix... And there are ways to have a more opinionated React ecosystem, but you're not really forced into any of them. So if, say, Svelte or Vue or Angular were the benevolent kind, would that really be better?

And then the other thing I wanna say is if you look at the State of JS, the chart we keep mentioning, I think the X axis is satisfaction, and the Y axis is popularity \[unintelligible 00:16:51.15\] \[wut?\] Dang it! I'll get back to that...

**Amal Hussein:** That's kind of like the remix to that song "I can't get no... Doo-doo-doo..." You know... I thought that there was gonna be like a remix of that... But anyways, that's fine.

**Nick Nisi:** \[unintelligible 00:17:07.21\]

**Amelia Wattenberger:** Next time.

**Kevin Ball:** Speaking of Remix, you yourself are making React references here, talking about Remix... You talk about React being down, but you're bringing up Remix!

**Amal Hussein:** Oh, please. I'm talking about musical remixes, not frameworks that think they're DJ songs. No. No. \[laughs\]

**Nick Nisi:** Well, speaking of remixes, we are going to remix this argument in the next section. But first, we have to close out this one. So we've heard the opening statements of all four of our contestants, and honestly, they're all really compelling arguments. I was told that I have to assign points though, and so I'm doing my collating right now... And yes, the winner of the first round is Jerod, because he's not here. So congratulations, Jerod. \[laughter\] We'll see you in the next round...

**Amal Hussein:** Such a Swiss man, Nick...

**Nick Nisi:** \[laughs\] He wins every one of these, and so we have to continue that... \[laughs\] Alright, we'll see you in the next round for more rapid-fire discussion.

**Break:** \[00:18:08.03\]

**Nick Nisi:** Alright, so we've heard the opening arguments of each of our contestants. We've made our preliminary decisions about who's right in this premise, "Is React only great at being popular?" What do you think, audience? Be sure to write us and let us know. Stop right here, write in. Don't wait till the end of the episode to come to a conclusion. We want your hot take right now. Speaking of hot takes...

**Kevin Ball:** Changelog Slack! Come into the Changelog Slack.

**Nick Nisi:** That's true.

**Kevin Ball:** If you're watching on YouTube, Changelog Slack! Hot takes, right now, in the JS Party channel.

**Nick Nisi:** Kball is way better at doing these plugs than I am, so I appreciate that, Kball. Alright, speaking of hot takes - we're going to continue this discussion with a rapid-fire round. We're going to go and do a one-minute round each, and at the end of the minute, if you have tagged someone, or if you have called someone's argument out, they will get a chance to rebut it as well. So we're going to do this -- we'll start with one minute, and... Where should we start? I don't know that there's a specific place to start here... But let's start with Kball. Kball seems to be chomping at the bit.

**Kevin Ball:** Yes. I want to call out Amal, with her "We are the innovators" approach. On the one hand, your argument, "We should be moving to more innovative frameworks", and on the other hand you're arguing the fact that React is trying to push us forward in some of the biggest gaps around web development. Like, how to handle asynchronous data fetching, and interactions with your rendering pipelines. Lack of threads and prioritization. These are the things that we need innovation on, and React is the framework that is doing it.

And sure, if you don't need that function now, use something that doesn't deal with it. If you don't need interactivity, build something with raw HTML. If you don't need to worry about data fetching -- oh, wait... What are you building where you don't need to worry about data fetching? We all need to worry about data fetching if we're working in a JavaScript framework. And yes, I agree, suspense is weird. I'm deeply skeptical of throwing promises and all of that stuff...

**Amal Hussein:** They're weird, too...

**Kevin Ball:** ...and yet, it is attacking a very real problem that every single one of us has, where most other frameworks have just kind of thrown up their hands and said "Hey, it's the user's problem." So I'm withholding judgment about whether Suspense in particular, as it's implemented, will be the solution, but this is another place where again React is pushing the world of frontend development forward...

**Amal Hussein:** Objection!

**Kevin Ball:** ...making things better for developers... \[wut?\] And we are the innovators!

**Amal Hussein:** I object! \[laughter\] Okay, I'm gonna go -- and I want a bonus 30 seconds, because... Okay? Bonus 30 seconds starts now... Kball, I appreciate that rebuttal. So I have to remind you, that innovation should not be happening in JavaScript land. We need to push browser engines and JavaScript engines and rendering engines to be better. However, we also need to curb our enthusiasm for JavaScript. I don't know, we're shipping tons of JavaScript. I know, let's just use JavaScript to manage JavaScript. No. Like, how about we just ship less JavaScript? ...which is where all of the thought leaders within JavaScript are pushing us towards. Astro, Svelte, Vue.

\[00:24:15.01\] Secondly, I wanna go to Amelia's point from earlier... Amelia, you said "Oh, I really love this land where I have interoperability, and things just work..." And yes, I get it, we're in the golden age of not having to change our framework every week. That's exciting. But guess what - you also just don't have to change your framework every week if you use web primitives. I don't know... Like, Web Components. Maybe all of our reusable things... Maybe that button, and that dropdown list, and that calendar icon, or calendar date picker thing that we have to reinvent every time there's a new framework - maybe that should just be written in the base primitive.

So I think we need to rethink the way our APIs are shaped. We need to rethink about what's reusable, what's composable, what's something that I should write once, for real, only once... And we need to rethink what is it that we're using our JavaScript frameworks for. \[wut?\] And frankly, React is just a confusing API now. It's lost its luster, and for me it's just way too much complication, and I can get more bang for my buck anywhere else.

**Nick Nisi:** Mic dropped.

**Amal Hussein:** Mic dropped, yes. Mic drop sound.

**Nick Nisi:** Yeah. That was a fantastic rebuttal.

**Amal Hussein:** It's also about this... \[Web Lovers\] Okay? I'm a web lover. I love the web. I have to think, is React really good for the arc and the health of the web? I don't know, kids. I don't know. Do you really wanna come back to a React application in ten years and have to figure out how the hell to run all those build tools and how to update...? No. Simple is good.

**Nick Nisi:** My grep file is doing just fine, thank you.

**Amal Hussein:** Yeah. Well, I'm just saying, you know? We have lost our taste for simplicity, because I think people are hungry to solve problems, and they don't realize that we're over-engineering the wrong things. I'm just putting it mildly and simply.

**Nick Nisi:** Amelia, your response.

**Amelia Wattenberger:** Alrighty... So my first response is that one of the beauties of React is that it has a really low floor, and a really high ceiling. So with the low floor - you don't need to ship JavaScript just because you're building something with React. You can ship a static HTML page; it's just that your developer experience is way nicer than just writing HTML. And then with the high ceiling, going back to "Should we be experimenting within the core web functionality?", which I'm not sure I totally buy that. I feel like if we're gonna be innovating and experimenting, it should be on a framework that people put on top of web technology, instead of in the core... Because we know, first of all, that's really slow; second of all, it has to all be backwards-compatible, so if you add something to browser engines you can't take it out really, so you're stuck with it. So if you're gonna be experimenting, then I'd say it should be in React instead of the browser... I'll leave it at that.

**Amal Hussein:** You're so polite, Amelia.

**Nick Nisi:** You can continue if you want.

**Kevin Ball:** Nick wants to get his wut out.

**Amelia Wattenberger:** I was gonna go back to this stupid thing I was mentioning earlier, with the --

**Amal Hussein:** \[laughs\] Gloves off...

**Amelia Wattenberger:** ...the popularity versus satisfaction cycle... And I was just gonna finish it... \[laughs\] Don't wut me.

**Amal Hussein:** Wut?

**Amelia Wattenberger:** It's just that -- it's just like a cyclical thing, right? When something isn't super-popular, the people using it don't have to use it, and so it goes up in satisfaction. And then it gets more popular because more people are satisfied with it, and they're talking about it. And then it starts going down in satisfaction, because everyone has to use it at work. And that's usually one hypecycle. And I feel like because React has been around since -- did you say 2013? It's amazing...

**Amal Hussein:** React is like corporate enterprise JavaScript now. It's like the base stack for every new company's thing...

**Nick Nisi:** It is.

**Amelia Wattenberger:** Right. But if it's at that point of the hypecycle, it's amazing that it's still so high up in satisfaction, as opposed to all these other new frameworks.

**Kevin Ball:** Preach.

**Nick Nisi:** \[00:28:07.03\] Very well said. We have one more guest to get their hot take on... So Josh, do you wanna...?

**Josh Collinsworth:** Alright, I'm gonna go all-in on this one.

**Nick Nisi:** Good, because the timer is just up in the air... You just go.

**Josh Collinsworth:** Do you know why React is so high in satisfaction? Because it's so complicated to use it makes you feel like you're a total ninja when you're using it...

**Nick Nisi:** I feel called out.

**Josh Collinsworth:** ...when really all you're doing is using ten lines to solve a two-line problem. It makes you jump through so many hoops that you feel like you're on American Ninja Warrior, reaching the top of that giant thing, just for writing a little bit of code... When really, they made you do this; this was just solving a web problem.

I also wanna call out the "We don't need to go back to whatever bad time before..." We don't want to go back. Nobody says we're going back. That's the opposite of what we want. We want to move forward. React is firmly entrenched in the past. All of those decisions that were made nearly a decade ago are still in place, they are still having reverberations, and we have moved long since past then at this point. We don't need JSX for anything, let's just be honest.

**Amal Hussein:** \[singing\] We don't need JSX when we've got HTML... Or \[unintelligible 00:29:15.17\]

**Kevin Ball:** Give me a chance to rebut this one, please...

**Amal Hussein:** Go for it.

**Josh Collinsworth:** It is a kludge. It is clumsy... It is just a way to shoehorn HTML somewhere that HTML should not be \[unintelligible 00:29:29.16\]

**Amal Hussein:** Label four...

**Josh Collinsworth:** Yeah, HTML 4, classname... I don't know the difference between props and attributes..

**Amal Hussein:** What's a classname...?

**Josh Collinsworth:** I've gotta have a synthetic event system...

**Kevin Ball:** I've gotta jump in here...

**Nick Nisi:** Jump in.

**Amal Hussein:** \[laughs\]

**Kevin Ball:** ...because people love to hate on JSX. And there are real trade-offs between templates and templating languages and JSX. But let's talk a little bit about the benefits that JSX brings you. So JSX is --

**Josh Collinsworth:** I'm sorry, do you just get a new turn now? What is happening? \[laughter\]

**Kevin Ball:** Abso-freakin-lutely, because you brought out the JSX. Now, JSX is a domain-specific language for generating HTML. And if there is one programming concept that is under-utilized in the industry, it is writing DSLs. Domain-specific languages. You can get so much freakin' productivity and communicatibility by moving into a domain-specific language. And what this does is it allows you to bring the full power of JavaScript to bear on your problem, as well as domain-specfic sugar, and help, and a way to talk about and think about things that make sense for rendering HTML. And as much as I do love templates, and I do love templating languages, and I love writing bare HTML, there is a real cognitive load to jumping back and forth between mental models and programming languages... While JSX essentially lets you stay in the JavaScript mental model throughout. And you can write it in all the different ways you write JavaScript. So if you like writing imperative, stateful JavaScript, you can write imperative, stateful JSX. If you prepare pure functions and composition, and really clean, and beautiful, functional architectures, you can do the same thing with JSX. And this is a huge reduction in cognitive load as you move through parts of the application. This was the key initial insight of React, was you put these things that are conceptually together, together in a place where you can work on them without having to jump context, without having to jump mental models, without having to do all of these different mental gymnastics, and it's a dramatic unlock in terms of productivity and being able to think about it this way.

**Josh Collinsworth:** So you mean if I wanna write an if statement, I can just write on in JSX? Is that what you're saying?

**Kevin Ball:** If you really want to, you can. So yes, there is enough rope to hang yourself, or whatever...

**Josh Collinsworth:** I can just do just a JavaScript loop?

**Kevin Ball:** Yeah, absolutely. The more power you get, the more footguns you can get.

**Nick Nisi:** With great power...

**Amal Hussein:** You know what my favorite - and when I say "favorite", I mean favorite-not - feature of JSX is? \[singing\] Dangerously set inner HTML... What's so dangerous about HTML's inner parts? I don't know... \[laughter\] But they're dangerous on the internet... Of React. React's internet, of course.

**Kevin Ball:** \[00:32:09.02\] Because clearly, injecting unsanitized data is not dangerous to anyone...

**Amal Hussein:** Well, you know what? I don't really think SQL injection or whatever else is what's happening most of the time here.

**Kevin Ball:** Cross-site scripting is not a problem anymore, and...

**Amal Hussein:** You know what - this is its own debate, right? I'm just saying, React basically makes it difficult to do anything with the HTML. You have to use JavaScript for everything. JavaScript gets in the way of -- there's no direct communication between the developer and their HTML.

**Nick Nisi:** It's Atwood's Law.

**Amal Hussein:** Everything is created by React. Like, what's up with that? React generates my HTML?

**Josh Collinsworth:** I'd also like to point out, since we're just sticking on this forever now, I guess... 90% of that argument was not specific to JSX. It was just specific to domain-specific languages.

**Kevin Ball:** Show me another domain-specific language for rendering HTML.

**Josh Collinsworth:** There are far less clunky ways to do it.

**Kevin Ball:** Show me another domain-specific language for rendering HTML.

**Nick Nisi:** \[laughs\]

**Amal Hussein:** Mustache? Handlebars? I don't know... \[laughs\]

**Josh Collinsworth:** Liquid...

**Kevin Ball:** That's a templating language. Once again --

**Josh Collinsworth:** Is this library vs. framework for how we put HTML on the page?

**Amal Hussein:** Right... I would say, to be honest with you, I like -- what's his face? It has a name... PX-something... Something-PX...

**Kevin Ball:** So markup languages are useful. Generating a templating language with markup - that is useful, and then you have a separated compiler and integration. But you end up doing a totally different set of things... Which - there is a taste aspect there. And there are definitely benefits to templates. The thing you just picked on - dangerously...

**Amal Hussein:** Set inner HTML.

**Kevin Ball:** ...set inner HTML - that is an example where in a templating language you can actually do a lot easier stuff because of the world you're in; you don't have as much flexibility, so you don't need to put as many controls in place to keep yourself safe. So a benefit of a templating language is you can actually be much more careful about how you're doing sanitization, and all that, much simpler. But you lose a lot as well. There's a lot of things that you might wanna do that are much harder to express in a templating language.

**Amal Hussein:** Like the expressiveness stuff, right?

**Kevin Ball:** Yeah.

**Josh Collinsworth:** That sounds way too nuanced for this part.

**Nick Nisi:** Would dangerously set inner HTML be as controversial if it were just three open curly braces?

**Amal Hussein:** \[laughs\] Oh, I like that. Look at you, Nick Nisi, and your nice API design... I see an RFC coming. Yeah, three curly braces is --

**Nick Nisi:** If I remember correctly, that's the Handlebar's way of -- just render whatever; just drop what I put in here, and do it.

**Amal Hussein:** Just do it! \#nike

**Nick Nisi:** Yeah. At least the dangerously part... Like, it's called out.

**Kevin Ball:** Trust me, I know this content is good... \[laughter\]

**Amal Hussein:** Trust me, I know what I'm doing...

**Amelia Wattenberger:** I think it should just be called "Trust me. Do it" HTML.

**Amal Hussein:** Do it! Right. Right.

**Kevin Ball:** Yeah, the JustDoIt.

**Amelia Wattenberger:** I just wanna highlight how good of a point it is that in your article, Josh, you talk about the learning curve for React. And there is quite a learning curve. But at the heart of it, if you know JavaScript, you know pretty much all of React. Like, if we're using JavaScript instead of a templating language with JSX, you don't have to look up like "Oh, is it \[unintelligible 00:35:29.27\] If you know JavaScript, you know how to conditionally render some HTML, or loop over something. You're not going back and forth to the docs and to your text editor... I'm a little bit afraid of the looks you're giving me. \[laughs\]

**Amal Hussein:** \[00:35:51.26\] Yeah, that was always my argument for React over Angular. I remember thinking "Wow, I don't have to learn about all these pipes and filters, and all these mystical things that are very domain-specific to Angular, for example. JavaScript and React - they are one and the same", right? That part was awesome. You kind of have to squinch your eyes a little bit at JSX. It's like, "I don't know what the hell is going on there", right? And then for me, the hooks -- I mean, I actually really don't mind JSX, but the hooks API is really where I... For me, that was the beginning of the end for me. It's just a very clunky API. I feel like it's difficult to use. People think they know it, but they really don't.

And for me, this really ties into your point earlier, Amelia and Kball, around learning React. I think Amelia especially... So the reason why hooks is a thing - or one of the main reasons - is because people were really confused about this, and the this keyword in JavaScript with React. That was a huge driving factor, because there was constantly community support questions about "Why is this not working?" So binding, and managing the this pointer... Classes just were a little confusing for folks. And for me, I wish we could have just kind of really redirected folks towards good fundamentals courses, because I think -- it's one of those things where like, yeah, I really do... I have a hard time saying this, because it feels a little gatekeepy, but I do really think it's important for you to understand the fundamentals of a language, especially if you're gonna be using it every day... I think hooks kind of bypassed the need for that.

And yeah, you've got a lot of other powerful things too, but I don't know... I'm not into React anymore. I haven't been in it -- it feels good to be able to say that out loud, because... \[laughter\] No, because you know, for a while it was hard. It was hard to say that.

**Nick Nisi:** Yeah.

**Kevin Ball:** We could go on forever here, but I don't think classes and this was the reason for hooks. I think it's about composability and reuse of stateful...

**Amal Hussein:** It was a primary driver, from my understanding.

**Nick Nisi:** I'm gonna pretend to be the moderator again, and pretend like this was all...

**Amal Hussein:** Planned?

**Nick Nisi:** ...controlled very well. Sorry, Jerod... \[laughter\] So I think that we've all made great points... I don't even know where we're at anymore with that... But to get us back on track, and now that I've sufficiently filled the quota for time on this segment, let's go ahead and do a quick 30-second closing statement from each of you, and then we'll move on to the next round, where we can speak freely. Josh, you were about to say something... Do you wanna kick us off with a closing statement?

**Josh Collinsworth:** Sure. I'll just say, the argument was made it's easier for beginners to get into this, because it's JavaScript, whatsoever... I think that's a little bit of a stretch maybe. If I see those double n percents, or that map instead of a loop, I don't know if that necessarily intuitively makes sense to me as a beginner... But I also wanna point out, we should be careful how much we assign to a beginner's perspective, and we should be talking to the actual beginners. And in a lot of cases, the beginners do find that that templating is much more intuitive for them, and much more simple and delightful to use, dare I use the word... \[wut?\]

**Nick Nisi:** Very well said. Kball, do you wanna give your closing statement?

**Kevin Ball:** Sure. I will give a closing statement. So I think at this point we've covered all of the infinitely many ways that React is more than just popular, but I wanna talk very quickly as a closing statement of something that's downstream from popular; something that popularity enables, but it's not just about popularity, which is the incredible ecosystem you have around React, in terms of documentation, learning resources, plugins, libraries, components... You know, if you're trying to accomplish something in React, there's gonna be something out there that's gonna help you do it. \[wut?\] And that is something that is related to popularity but it is not a guarantee, and it is a distinct and unique benefit that you get with React.

**Nick Nisi:** Well said. Alright, Amelia.

**Amelia Wattenberger:** \[00:39:49.15\] Alright, so I just wanna point out that I feel like the Yep team has kind of tied themselves in circles and a little bit contradicted themselves... And I think that's just due to the tough position that they've been placed in, where React is unopinionated, but also it's hard to use, or... I think the fact that it's unopinionated makes it a really, really good majority used framework, where we've been building on it, it's iterated... This was really confusing early on, and so they moved to a more functional component type of solution. So we're not using this and getting confused about it anymore... So I just wanna say that React is a benevolent dictator; I guess it's changed from a monarchy, but it's okay.

**Nick Nisi:** And on that, we will end this segment - well, this debate. I'm really not sure who won... Jerod did, again. Congratulations for not participating... And yes, I think that we will all show how we, by our own admission, when we all pretty much go back to our dayjobs of writing React, we'll figure out who won. So yeah, stick with us through the break, and we'll talk about real thoughts on this.

**Amal Hussein:** Wait, those weren't our real thoughts?

**Nick Nisi:** They could have been...

**Amal Hussein:** Just kidding... \[laughter\] I mean, they were mostly mine, but...

**Nick Nisi:** Yeah.

**Break:** \[00:41:13.17\]

**Nick Nisi:** So that was our debate, Yep/Nope on React only being good at being popular. And of course, as we mentioned in the beginning, Josh and Amal were assigned to team Yep, and even though Josh wrote the article that this whole is based off of, he might have different thoughts on that... And then on the other side, team Nope, Amelia and Kball were arguing that no, that's not all that React is popular at. So where do y'all really stand on this?

**Amelia Wattenberger:** I feel like I wanna hear from Josh first, because he wrote that article...

**Josh Collinsworth:** \[laughs\] Yeah, obviously, I wrote the article... The piece has a lot more nuance than I think you probably heard from me today; I hope that comes through there. And I readily admit that although I'm not a fan or React, I will gladly take it, in many circumstances, if that's my option.

**Amal Hussein:** Well, you use it at your dayjob at Shopify, right?

**Josh Collinsworth:** I do... And I'm very happy at my job, in case any of my bosses are listening.

**Amal Hussein:** Back to that corporate severance JavaScript, you know...

**Josh Collinsworth:** If I'm picking, I'm not picking it. I do think that it has probably aged more poorly than a lot of people realize. I do still admit that it is very good, and I think Kball honestly made a great point about the things that popularity brings... Even if I would rebut by saying there's a point of diminishing returns with what popularity gets you... But yeah, somebody said we're in the golden age of frontend, or something like that, and I do kind of feel like that. It's great that we have these choices, it's great that we have a solid default, even if it isn't one that I particularly enjoy.

**Nick Nisi:** Yeah. And from that default we got into a big tangent about JSX. And kind of calling back to previous Yep/Nope episodes, specifically with Kball, where he's appealing to authority, and specifically appealing to Laurie Voss talking about these ideas that transcend the user land, or transcend the frontend... Well, JSX in a lot of ways has kind of transcended React. It's used in other places than just React. And my opinion is - I was there in 2013, when Facebook announced it at JSConf, and I laughed at it, and I have a tweet out there that is --

**Amal Hussein:** Not aged well.

**Nick Nisi:** ...the silliest thing... Yeah. \[laughs\] And now I really like writing JSX... Specifically TSX, but that's a different story.

**Amal Hussein:** Oh, wow... Oh, my God. Oh, my God...

**Nick Nisi:** I'm obligated --

**Josh Collinsworth:** Like you needed to say it...

**Amal Hussein:** You cannot get through one freakin' show with Nick Nisi without bringing up his beloved TypeScript...

**Nick Nisi:** \[laughs\] That's right.

**Kevin Ball:** I will say that TypeScript support is another driving factor for moving to functional models for state handling... And I have gone from being a place where I was a little skeptical of that level of typing, to I don't know how I ever lived without it, so...

**Nick Nisi:** \[00:47:35.15\] Sorry... \[laughter\]

**Amelia Wattenberger:** Nick's the only winner today.

**Amal Hussein:** Yeah. To go back to that point though, Kball - from my understanding, that was a huge driver for hooks. Like, people just didn't -- the this context was hard. And then there was also the boilerplate problem, right? Lots of boilerplate. So it's like, okay, how do we take that and allow for more reuse? And so the hooks API was born. But for me, it's a clunky API. I'm sorry. There's too many leaky abstractions. There's too many implementation details. I'm like, "Why are you exposing this to end users?" I feel like I have to really have a deep understanding of the framework internals in order to really not footgun with hooks. And that's saying something, right? That's saying something about your API.

**Nick Nisi:** \[00:48:21.09\] Yeah.

**Amal Hussein:** And I'm a seasoned user of React. I've been using it since 2013, early days; very early adopter. So if I'm coming here and saying "This feels weird. This is unnatural and unintuitive..." For a very long time I felt like the only person in the room that felt that way. And it's hard, you know? It was very hard to be that person. And it's getting less hard.

**Nick Nisi:** I will say that I agree with that. It took a long time to wrap my head around hooks. I like them now. I feel like they're powerful, and you can do a lot with them... But also, I've never used Svelte, for anything, but I have looked at the Svelte homepage, and they just say \[unintelligible 00:48:58.29\] to specifically set that... I like that, but also that kind of scares me, because it's magic.

**Amal Hussein:** And have a magical callback array, and...

**Kevin Ball:** Yeah, there are so many trade-offs involved... So if I'm gonna step back, if I were doing a personal project right now, it would not be in React.

**Amal Hussein:** Same.

**Nick Nisi:** What would it be in?

**Kevin Ball:** If I'm picking a language for a company, it probably is React. But the Svelte compiled -- like, having it basically go through a compile phase gives you so many nice ways that you can get some of the benefits that you get with hooks, without some of the cognitive overhead of an awkward API. I also love, if I'm honest -- like, the Vue Composition API feels to me like a much more beautiful implementation of the same concepts of hooks. Now, it comes with some its own drawbacks, because you have things wrapped in different ways, and you can't access values... Everything in this has pros and cons, but yeah, hooks is not the most beautiful implementation of the hook concept.

You were highlighting the this conflict again, and I feel like there's more than just trouble with like the syntax in this... Because I think where you really run into trouble -- like, I guess React didn't ever really have this concept of mixins, but trying to compose logic...

**Amal Hussein:** Very early days it did.

**Kevin Ball:** ...and reuse it in the class-based model - I ran into that a lot in Vue... It was a nightmare to keep track of what's going and understand how things are gonna relate with each other, and compose with each other, and all of that, and it was so easy to footgun, and it was just like a really hard mental model. And the hooks model and the composition API in Vue just makes it so much easier to reason about that, and move things around, and compose them. So you were right that there's an awkwardness to it, and you're right that part of it was a hang-up with the previous model, but I think that it goes a little deeper than familiarity with the language, and I think it has to do with how do you bring together reusable concepts that interact with state.

**Amal Hussein:** Right.

**Josh Collinsworth:** I think it's worth mentioning, to that point - for as unopinionated as React is, it is extremely opinionated about how you handle data and immutability. And I think that has roots in its Facebook origins, and...

**Amal Hussein:** The Flux architecture...

**Josh Collinsworth:** ...how they were trying to create something that would help them wrangle the unthinkable complexity of this highly interactive application. And if that's where you're at, then maybe that system where you literally can't touch a variable unless you've gone through the proper steps first - even that makes a lot more sense for you.

**Amal Hussein:** Oh my God, Josh, I've never heard that... That's so cool.

**Amelia Wattenberger:** I was just gonna say, a hundred percent to Kball's argument, and also to what you've just said, Josh. I feel like I'm still jetlagged from the Svelte Summit, which was a wonderful conference. I personally really, really love Svelte; for side projects I will 100% use Svelte. It's just so much fun. There's way less boilerplate. Reactivity is so, so nice, and they have built in animations...

**Nick Nisi:** \[00:52:14.02\] That just means there's way more magic, right?

**Josh Collinsworth:** Magic's not a bad thing, Nick...

**Amal Hussein:** I mean, Magic is the opposite of leaky abstractions, you know?

**Amelia Wattenberger:** I think a little bit of magic is nice... But not like Angular.js levels of magic; that got a little bit painful. And I think that kind of gets back to - if at my dayjob we need a project we're gonna hand off, or that needs to be maintained for a long time, I feel like React scales a little bit higher, a little bit more easily. It's harder upfront, but then if you have the data immutability and -- I think hooks scale a little bit higher. If you had a really large codebase, I feel like it can be a little bit neater in React, especially because all of those things y'all were talking about.

**Amal Hussein:** Yeah, that's a really interesting perspective. I think for me, if I was starting up something for a company, if I had to pick, I'd probably be like Vue at this point. Vue, and then Angular. Angular is very much kind of like a platform, and I feel like it's very good for large enterprises, with lots and lots of developers contributing... Because there's really good conventions... You know what I mean? There's that kind of batteries-included feel with Angular. Also Vue, a little bit. So I think for me those would be the two. But yeah, definitely not React at this point.

**Amelia Wattenberger:** I was just thinking, one other interesting thing was that at Svelte Summit there was some talk of how Svelte isn't the biggest, and how it doesn't want to be the biggest... Success for a framework isn't necessarily more and more usage. I'm kind of really happy, selfishly, with the way things are, with React having such a large market share, and Svelte being this fun thing that I do for projects that are more enjoyable...

**Nick Nisi:** Yeah. That brings up a question that I wanted to ask in this section, and that is - do you think that this would be the fate of any of these frameworks? If Svelte had come out first maybe, and gotten to the popularity level that React is at, would we all be hating on it just as much? Especially if it was Facebook-backed.

**Amal Hussein:** According to the hype cycle that Amelia was talking about, I would say probably...

**Josh Collinsworth:** I think it's reasonable to assume that it takes time for something to become the majorly adopted choice, and in order for it to have been around that long, it's probably just going to necessarily have some baggage from the past, that newer things are not gonna have. So to a certain extent, this is a cycle, and that's one thing I really wonder about, is what does that next iteration look like? Does React just have a very long tail? It doesn't seem likely that anything is going to overtake it and be the thing at any point in the foreseeable future, so it's interesting to wonder what does the next era look like, what is the next iteration...

**Amal Hussein:** Yeah, I couldn't agree with you more. Hopefully, it's React adopting more from other people, other libraries... But yeah.

**Kevin Ball:** I think it's worth thinking a little bit also about the organizational structure that results in these frameworks. Many of both the places where React excels and some of the places where we're running into friction with it are tied to the fact that it is built still by Facebook, and the focus and optimization choices that they're making are for solving the problems that Facebook has. And those problems have a reasonable match with the problems that many corporations have when they're building JavaScript applications, but they are definitely off on one hand. And actually, I think you run into some of the same things with Angular. Angular is still primarily driven by what Google wants and what Google needs. So I think that if Angular hit this level -- well, early Angular kind of was really popular, and then went through a lot of this. Now, if you look at the satisfaction, people are deeply dissatisfied with Angular, even though there's a lot of people using it. React has that...

\[00:56:11.11\] Vue feels at this point much more community-driven. I get the impression Svelte is going that way as well, even the both of those started with a benevolent dictator approach. They've both kind of embraced a broader community, rather than sort of going along the needs of a single corporation... So if they were to get there, they might do better. That being said, that may also make it harder for them to get there.

Going back, old-school frameworks -- like, Ember was one of the first ones here, and they did so many things so well, and were also not backed by a single corporation, and they never got much adoption relatively speaking. They've stayed very, very niche.

**Nick Nisi:** Very good point.

**Amal Hussein:** Yeah. I think, Kball, your point about Facebook solving problems for Facebook - it really ties back to what Josh was talking about a little earlier too, around like even the strictness and the heavy opinions around data mutation is somewhat inherited from Facebook trying to wrangle its eventing architecture, right? There are so many things happening, having that downward flow, and being really strict... That was something that Facebook needed.

This is something that we've talked about on the show even recently, Amelia and Nick, in our tech interview discussion we had a few weeks ago... I brought this up, around how these ideas and tools and problems within big tech are kind of proliferated throughout our community, where it's like people don't contextualize it. It's like, okay, the problems that Netflix engineers have, and the reason why they've created this library - they have problems that are unique to Netflix. Netflix in particular is a company that -- you know, before the Disney Pluses of the world, they were a very unique kind of streaming service that was operating at this scale. They were very alone in that bubble. Lots of people have joined them now, but they were solving problems that are unique to Netflix. Facebook - the same thing, when Facebook was scaling in that way. I mean, come on; it's like the biggest website outside of Google.com. And Google.com is one input box and a list view. Facebook was so -- you know, all these interactive elements, and really a fantastic place. If you look -- I don't know, for me anyway, I have to close my eyes on the product; if I don't think about what they're doing, like, it'd be a fantastic place to work as a frontend engineer, to work at that scale, and have to think about all of those elements... It's a huge website.

\[00:58:35.00\] So I think we just really don't contextualize that enough, and I think for me a bigger concern that I have is the corporatization of all of our open source projects that we love and care about. Quite frankly, everything is coming supported by Microsoft now, or Google, or Meta, or Netflix, or Airbnb... You name it. And these community-driven grassroots projects, like Vue, and Svelte, Astro - they're just kind of fewer and in between these days. I just wanted to point that out as just the kind of general smell that I see, that's happening within our community right now.

I don't know, corporate projects are great. They're stable, they usually have less bugs, lots of upsides, but at the same time, we don't really have open governance around the roadmap, at any point they can drop it and stop caring about it... All kinds of reasons why I like community-driven open source; it's usually a better bet. But of course, that also has its trade-offs, right? So I don't know, it feel like we're stuck between decisions that it's like "Here's a bad decision, and here's a less bad decision." Where's the good decisions right now? It's hard to really make that, I think, for frontend... Seriously...

**Nick Nisi:** Is there anything that React could do to save itself? Like, some kind of reinvention, like Angular to Angular 2. Or would it suffer the same fate?

**Kevin Ball:** I think Angular to Angular 2 would destroy a lot of the good will that it's built up by being one of the most stable options out there.

**Amal Hussein:** Yeah, agreed. They're too big to fail, in many ways now. They're literally too big to fail, right?

**Josh Collinsworth:** I mean, classes and hooks are not fully interoperable already, right? I mean, I guess you can use either one, so...

**Nick Nisi:** That's true. Wasn't there like major changes...?

**Kevin Ball:** Yeah, you do not have to rewrite your apps to upgrade. I did a React upgrade recently, and it was seamless.

**Josh Collinsworth:** Okay.

**Kevin Ball:** That's a tremendous benefit.

**Josh Collinsworth:** So that's a bit of a different thing, I guess.

**Nick Nisi:** Yeah.

**Josh Collinsworth:** I don't know... I feel like I've heard rumors that maybe there is some kind of new exploration being done in the hooks realm, to make hooks maybe a little more performant... I don't know if that's going to change the syntax, or what's gonna happen there...

**Nick Nisi:** I hear they're gonna throw promises now... \[laughter\] I'm kidding.

**Josh Collinsworth:** My opinion is that React is never gonna stop being React. I think it's too far down the road for the things that make it what it is to change at this point. It's built upon a foundation that you can't really just shift. So I don't foresee it undergoing a major change, so I don't think it's -- as much as I hate to use the phrase, I think it sort of is what it is at this point. I'm sure it will continue to improve; it's got a very strong team of incredibly smart people behind it... But I think the core foundation it's built on is bound to stay there.

**Nick Nisi:** I think that's a good place to end it. Thank you so much, Josh, for coming on. We'll have a link to your blog post in the show notes for people to check out. Congratulations to Jerod for winning...

**Amal Hussein:** Awesome blog post.

**Nick Nisi:** Yeah, definitely.

**Josh Collinsworth:** Thank you for having me.

**Nick Nisi:** Yeah, thank you so much for coming on, and thank you to Amelia, Kball and Amal for joining as well and for viciously debating and supporting the sides that were assigned to you. We appreciate it. And we will catch you next time!
