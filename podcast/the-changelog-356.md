**Jerod Santo:** Christine, in your Twitter bio it says that you miss writing software, and that makes me kind of sad...

**Christine Yen:** I am kind of sad about it.

**Jerod Santo:** Write some software. You&#39;ve gotta write some software.

**Christine Yen:** I know, I know. At this point it&#39;s like &quot;Okay, what weekend art projects can I have some excuse to do that for?&quot;

**Jerod Santo:** Yeah.

**Christine Yen:** I think this is the nature of early-stage startups. The sorts of things that made sense when you were two people and you needed to get something off the ground no longer make sense when you&#39;re 25, and you need to start thinking about how business is doing, and... You know, delegation is a skill.

**Jerod Santo:** It&#39;s a learned skill, lots of times.

**Adam Stacoviak:** It absolutely is a learned skill.

**Jerod Santo:** It does not come naturally, especially to perfectionists, or... A lot of times people writing software are like &quot;It&#39;s my code, it&#39;s my software, it&#39;s my thing.&quot; It&#39;s tough to let go of that and trust other people.

**Christine Yen:** One of the best arguments - our director of engineering was like &quot;Christine, you need to stop rogue-fixing bugs at night.&quot; I was like &quot;But why?!&quot; She was like &quot;Because when you do it, it doesn&#39;t let us improve our process to make sure that things that you care about get fixed.&quot; That is a great argument that I can get behind.

**Adam Stacoviak:** Successful teams are often built on successful systems and processes, so you definitely have to give room for that to take place... Otherwise, if you&#39;re just fixing the problems and the problems aren&#39;t fixed by the team, then it&#39;s kind of hard to build a strong culture, which I&#39;m sure is important in those contexts.

**Christine Yen:** Definitely.

**Jerod Santo:** We&#39;re excited for your talk at Strange Loop... We&#39;re excited for Strange Loop, because we&#39;ve been trying to get to Strange Loop for a couple of years. I think I off-handed say that to you a lot, Adam... Like, &quot;Hey, let&#39;s do Strange Loop this year.&quot;

**Adam Stacoviak:** For like four years now.

**Jerod Santo:** Yeah, I think there was an OSCON conversation we had a couple years back on the show, where I even said &quot;We should go to Strange Loop&quot;, and then we still haven&#39;t gotten there... But we&#39;re gonna be there. We&#39;re gonna be there this year, September 12th through the 14th - Adam, check my work there; I believe that&#39;s correct on the dates - and we are working with Strange Loop to invite everybody out.

[00:04:07.22] It looks like an excellent conference; we&#39;ll be there, come see us, come say hi. I was looking at some of the sessions, and yours jumped out to me, Christine - Observability: Super-powers for Developers. That just makes you stop and think, &quot;Hey, I want super-powers.&quot; Who doesn&#39;t want super-powers, right?

**Christine Yen:** Yeah, I had a  lot of fun coming up with that title, because it really seemed to capture a lot of the thoughts that have been kicking around my head and our Honeycomb life for the last two years... Namely in that observability is this thing that so many people associate with ops people, or SREs, the hardcore people that carry pagers. And it&#39;s true, observability is something that those folks care about, but it&#39;s actually more powerful for the folks who are writing the code, and the people who are sometimes in ops folks&#39; minds causing the problems... But it&#39;s taking this thing that is associated with like fighting fires, and being like &quot;What if you bring it earlier in the process, and what can it supercharge? What could people do that they couldn&#39;t do before, because now they have the ability to see into their systems?&quot;

It helps that I am a huge Marvel and superhero genre fan... I&#39;ve never actually done a talk before where I was able to pull in so many pop culture references...

**Jerod Santo:** Right...?

**Christine Yen:**...and end up -- what would have taken normally an hour to sit down and work on something would end up taking like two hours, because I&#39;d get side-tracked on Wikipedia, and Google Image search rabbit holes, looking for that perfect image... Anyway, it should be fun.

**Jerod Santo:** Let&#39;s get to the super-powers in a minute, because you mentioned something there which we&#39;ve read is something you care deeply about, and something that Adam and I have talked about a little bit and touched on, but haven&#39;t gone deep into... You talk about the ops folks and the dev folks, and how those are different folks, lots of times. And there&#39;s a cultural divide - it seems; maybe not always, but generally speaking - between those sets of folks on teams or inside of businesses because of one of the things you said there, which is like the devs are causing the problems that the ops people have to deal with, and one group is on pager duty and the other group isn&#39;t necessarily... And there&#39;s a gap there, which is something that needs to be addressed, because that&#39;s not a good way to be on a team; that&#39;s like us versus them. So this is something you care about... Will you share thoughts on that divide and what we can do about it?

**Christine Yen:** Absolutely. To zoom out a little bit, I&#39;m working on a company called Honeycomb with my friend and co-founder, Charity Majors... And in many ways, she embodies the ops stereotype; she&#39;s been ops for many years, she says she&#39;s carried a pager (she&#39;s been on call) since she was 17...

**Adam Stacoviak:** That&#39;s a long time.

**Christine Yen:** Long time... Whereas I have much more of a product development background, where I&#39;m like &quot;I wanna build stuff that users touch, and feel, and improve their life...&quot; And before Honeycomb we actually worked together at a company called Parse. It was a mobile backend as a service, and one of the tenets of our engineering culture was that everyone did a day of support. We&#39;d rotate through, and no matter what, you were the one in the email inbox, answering questions for customers.

And what this meant is the people who were writing the software, like me, were always super-aware of ways our software sucked, or ways that were unclear, things that were confusing... And there was a really tight feedback loop between what users saw and the work that we did, whether we were actively writing the code, or the folks kind of maintaining it maintained the systems.

[00:08:05.00] And even there though, there was this element of -- I was building the analytics part of the product, writing things, and this new exciting part of the system, and we talked ops and sort of planned out how we wanted to scale... And it&#39;d go live, and inevitably people would come knocking at my door, being like &quot;Hey Christine, something happened to the write throughput on our Mongo cluster or Cassandra cluster. What do you know about it?&quot; And I&#39;d kind of look around and be like, &quot;Um... I don&#39;t know. Write throughput on Mongo... Hm. That&#39;s a great question.&quot; Eventually, we&#39;d work together and track down what had happened in the code.

And I think through that experience again, because we had this feeling of always being on the same side and kind of working to support our customers, we became very aware of the different types of skills, like going to building a system that is resilient for your customers, and how much better things were when we were looking at the same information.

I think of those days of seeing write throughput is up as sort of the past, and actually our post-acquisition time as the future, in that when we got acquired by Facebook, we were exposed to an internal tool called Scuba, which was for the predecessor of Honeycomb... Which allowed for a lot more flexibility in interpreting impact on the system in the terms that I as a developer understood. So instead of &quot;Hey Christine, WTF? Something you did changed the write throughput on this database&quot;, it would be &quot;Hey Christine, latency for serving this particular type of request went up on this endpoint for our largest customer. Does this sound familiar?&quot; And those are the entities, those are the nouns that made it a lot easier for me to understand how the code that I wrote impacted production... And really that&#39;s the sort of thing that ops folks have innately, that developers have to almost learn, especially in a world where boundaries between dev and ops are blurring.

Developers can&#39;t start to adopt that ops sensibility until they see cause and effect. &quot;Oh, whenever [unintelligible 00:10:37.27] of this code for this type of production workload, this is what happens. These are the signals to look for. These are the things I can start to work to prevent or watch out for in my code.&quot;

One of the taglines that we&#39;ve played with, or one of the phrases that we&#39;ve liked, especially in this realm of observability, is that it allows you to test in production... Which I know means a lot of things for--

**Adam Stacoviak:** Yeah... [laughter]

**Christine Yen:** [unintelligible 00:11:00.28] Feature flag folks are using that, but... I like it in the context of observability, because - what are you doing when you test? You compare actual versus expected. And a lot ops folks, with their monitoring setups, that&#39;s what they&#39;re doing. &quot;I expect CPU to be within this threshold. Actually, it&#39;s over here.&quot;

**Adam Stacoviak:** Right.

**Christine Yen:** And the more those signals can be framed -- in the same way it&#39;d be like &quot;I expect latency to be here, and I expect to be able to handle 2,000 requests per second for this customer&quot;, compared to actual, and tie it back to the code that I write... Boy, that&#39;s a really good feedback loop, and a really virtuous cycle for developers being able to ship better code in the first place.

**Adam Stacoviak:** [00:11:53.18] Are there a lot of devs out there that aren&#39;t in the know? Is it common for developers to just not see that side of things?

**Christine Yen:** I think it&#39;s so easy. I think it&#39;s so easy to write code based on what you think is normal, or what should be true, without actually verifying it. Adam, I know you said we have background in product management, and this is -- to say this nicely, being able to verify for yourself what is happening in production almost lets sometimes developers side-step that product management intuition, or it lets you develop your own intuition based on reality, or it helps you supplement the more qualitative research product management perspective with &quot;But this is actually happening. This largest customer is actually sending us this volume of data&quot;, or &quot;We assume that people send us payloads of this type, but are instead sending us payloads of another.&quot;

Even just talking to folks at various tech conferences, there&#39;s lots of developers who are like &quot;Oh, I write code according to spec, and I write my tests, and I ship it. When things go wrong, it&#39;s just something in the infrastructure, not my code.&quot; I think that&#39;s a mindset that&#39;s slowly changing over time.

**Jerod Santo:** So that&#39;s coming at it from the developer&#39;s perspective. That&#39;s a technological solution, in terms of observability into the way that this will perform into production, or the way it does perform in production in real life, allowing them to tie back to their code. What about from the ops perspective? Because you&#39;re bringing basically the developer closer to the ops side... Is there any effort to bringing the ops people closer to the code, in terms of &quot;Why can&#39;t the infrastructure person go back to the lines of code that are affecting this and analyze that?&quot; Is there movement in that direction, or am I in left field?

**Christine Yen:** I think there&#39;s some movement in that direction. I actually think of the movement from ops over to dev as being something that is almost part of the broader dev ops transformation movement/migration. Getting ops folks to get more comfortable with automation and code as a way to do their work is something that I feel like has been happening over the last 5-10 years already... And to some extent, that makes ops folks/SREs more willing to get their hands into the code itself...

But on teams of a certain size there&#39;s always gonna be folks who are a little bit more comfortable -- or there are gonna be folks who are largely producing the code, versus the folks who sometimes stick their hands in to make sure there&#39;s instrumentation in place, or to test something... And certainly from my perspective, I&#39;m more interested in pulling the folks who are focused on shipping to be like &quot;Okay, ship faster, but also be aware of what you&#39;re shipping, and how what you&#39;re shipping is  behaving.&quot;

**Adam Stacoviak:** Can we actually break down what observability means? It&#39;s like this buzzword...

**Jerod Santo:** I&#39;ve got log files, right? Everybody has log files; there you go. You look through your logs... Done.

**Adam Stacoviak:** Right, exactly. [laughter] Just look at your log files. What exactly is observability in the context of these super-powers, and Honeycomb, and this context?

**Christine Yen:** I define observability as the ability to ask new questions of your systems, ideally without deploying new code. I&#39;ll break that down... Being able to ask new questions. What this means is if you look at traditional monitoring systems, often you are defining some sort of dashboard and you&#39;re saying &quot;I want to know what the average latency of my system is, or the total throughput of requests.&quot; So you take that and you put it in the dashboard and you put it on your wall, and it just stays there... And that is a question that you have asked, and that is the answer to your question, and it very rarely changes.

[00:15:47.01] Part of the reason observability has grown in popularity the last five years is really that our systems are now evolving to a point where you can&#39;t just predict the one or two questions that will be important, and put them on a wall, and have that be enough. You need to be able to ask questions like &quot;Okay, have average latency up there, but what is the p95 of latency for customers fitting this profile? Or that one customer over there. Or what is the average latency if I remove requests that touch this database I know is slow?&quot; The ability to ask these freeform questions is becoming more and more critical to being able to support these more and more complex systems we&#39;ve been building.

And the reason we&#39;ve found ourselves drawn towards this new word is that there is almost a split between the things that are stable enough to monitor... CPU utilization - maybe it&#39;s nice to know, but it&#39;s not gonna change that much. That&#39;s the sort of question you can monitor; you can put it on the dashboard, whatever. Things like &quot;Well, what&#39;s happening for this customer? Why does our servers look down for them?&quot; That&#39;s a much broader question, it&#39;s much fuzzier, where the answer to that might be different whether I&#39;m looking today, tomorrow, or next week.

Someone came up with a phrase that I really like; I can&#39;t remember who it is right now, and I&#39;ll get you notes afterwards... But what they&#39;ve said is &quot;If testing is for known knowns, where you&#39;re trying to capture known behavior and immortalize it, and monitoring is for known unknowns - you know you might care about CPU, but you don&#39;t know what it is at this point - observability is for unknown unknowns.&quot; And I love that, because this idea of unknown unknowns really does, again, provide the perfect flipside to testing (a known unknown). With observability you&#39;re like &quot;Well, something will go wrong in my system, I just have no idea what it is or where to start looking, and I need a tool that will work with that uncertainty and work with that flexibility, rather than hemming me in to the questions that I thought to ask ahead of time.&quot;

That last part of the definition of observability where I tacked on a &quot;without deploying new code&quot; is important to include... Because lots of folks can say &quot;Well, I can ask any question I want of my monitoring system. You just add a new metric, and then deploy it, and then it&#39;s there.&quot; But that whole act of having to add that new metric and deploy it...

**Jerod Santo:** It&#39;s too late.

**Christine Yen:** It&#39;s too late, and sometimes it&#39;s not even scalable, right? Say you have 100,000 customers; you just can&#39;t track 100,000 metrics easily. Caveats - you throw money, or hardware, or something at it, and maybe it&#39;ll work... But there&#39;s an element of &quot;Okay, something is happening now, and I need to sort it out now&quot;, that I think we really now are able to capture, and this concept of observability is an ability to do this thing. Not the type of data, not a specific tool.

**Adam Stacoviak:** So is it just collect all the data, all the time, kind of thing? Or is it collect all the things and then ask questions because you&#39;ve collected all the data, essentially? ...you&#39;ve monitored, you&#39;ve logged every possible thing to enable yourself to ask those questions, the unknown unknowns of the future.

**Christine Yen:** I think it is a lot in line with &quot;collect all the data, all the time&quot;, but we being engineers, we know that that&#39;s a recipe for something that is itself unfeasible and unscalable... Something we at Honeycomb like to talk about is &quot;Capture the data that you think will be important to your business. Capture the data that are going to be helpful in tracking down the issue.&quot; There&#39;s a couple things here, and I&#39;ll break that down...

First, when I say &quot;Capture all the data&quot; or &quot;Capture data that is necessary&quot;, I mean capture all the context around things that are happening in your system. This is, again, in contrast to more traditional metrics and monitoring. In metrics and monitoring it&#39;s very common to be like &quot;Okay, let&#39;s just increment this counter when requests come through.&quot;

[00:20:00.29] From the observability perspective we say &quot;Oh man, if you&#39;re only capturing a counter, you&#39;re losing all this interesting context and useful metadata around what sort of requests they were, and who issued them, and what the requests were trying to do, and how long they took, and then how long they&#39;ve spent in the database, and how long they&#39;ve spent rendering, and how long they&#39;ve spent doing these other things.&quot;

So context plays a big part because those are the bits that are going to be necessary for the unknown unknowns, for tracking down the things that went wrong.

Another dimension on the &quot;capture everything all the time&quot; - &quot;all the time&quot; does not necessarily mean you should be capturing information about every single request. I think for many folks, especially the folks who come from the logging world, sampling is a little bit of a dirty word... Like &quot;Oh no, you can&#39;t sample! How am I ever gonna capture the low frequency events that are important? You&#39;re asking me to throw away data? No, I can&#39;t.&quot; And while yes, storage has gotten much cheaper, and we could store everything if we wanted, ultimately the model of using logs to capture a historical record of everything that happened made sense when logs were human scale, or our software systems were human scale; it made sense to have a human with their eyeballs, reading through log lines of what happens.

One of truths is that our systems are no longer like that. Logs are no longer human scale, they&#39;re machine scale, and as a result, we can start to do things like sample intelligently and capture just enough to gain a sketch of what&#39;s happening in our system in real time. Things like sample intelligently, things like okay, if you care a lot more about errors, then capture 1% of all successful requests and 100% of anything that hit a 400 or 500.

Maybe you have certain customers that you care about, or certain customers that you know you don&#39;t care about, because they&#39;re high-volume - great, sample that down. All of our tools now are capable of doing this sort of statistical analysis and statistical compensation for these more complex sampling rules, and they can allow us to manage the volume of overall data while not having to miss out on that rich context that actually allows us to answer questions and solve problems in our system.

# **Break:** [00:22:39.11]

**Jerod Santo:** So you explained that sampling is logical; it also is counter-intuitive, because you have all the people who are like &quot;Well, if I sample the wrong thing, I&#39;m gonna miss something...&quot; And as you described, observability is for the unknown unknowns; well, that&#39;s the hardest thing to know about right? Because you don&#39;t know about it. De facto, you do not know what you don&#39;t know.

**Christine Yen:** Totally.

**Jerod Santo:** So what are some of the heuristics or ways that you can decide what&#39;s important and what&#39;s not important? Because like you said in the first segment, tracking all the things doesn&#39;t really scale well for most businesses, so these decisions have to be made... And yet, you don&#39;t wanna miss something that you may need. You mentioned maybe an important customer, or maybe an error you wanna track more... But tell us more on these decisions and help folks decide &quot;What do I need to observe and what don&#39;t I care about?&quot;

**Christine Yen:** This is a great question. One of the principles I really like to have in my head is that with any of these data tools, the data tool is only gonna be as good as the data that you&#39;re getting into it. Put garbage in, you&#39;re gonna get garbage out. So these questions around &quot;But what do I sample? Where do I capture data from?&quot; are so important to always be aware of.

I think that there&#39;s a perception -- well, first, if observability strategy is the high-level thing that you&#39;re working towards, instrumentation and figuring out where to capture data from is the tactic to get right. And a lot of people think about instrumentation and they&#39;re like &quot;Oh my gosh, this seems like so much work... Having to go in and say that I wanna capture data from this... Don&#39;t you just have an integration I can plug in out of the box and have it work? All of my APM tools just work out of the box.&quot;

I think that it is awesome when things work out of the box, but ultimately you know your system best. You know your system best, you know what your business cares about, you know what tends to go wrong in your infrastructure, you know what is even bound to the application; those APM vendors may not. So out of the box, getting something up and running might be helpful for making sure you don&#39;t miss any of the common bits... But ultimately, thinking through &quot;What are the sort of entities I care about when breaking things down for my business?&quot;

I like to talk about Intercom, one of Honeycomb&#39;s longest and oldest customers - for a long time before they&#39;ve had Honeycomb were not able to break down by app. Being a b2b company, they needed to be able  to say &quot;Well, this customer or this app is doing this thing, and this other customer is doing this other thing.&quot; That was just something that was important to their business, that previously had not been able to be translated to their engineering tools. And that&#39;s the sort of thing that only your engineering team is going to be able to go in and be like &quot;Oh, okay, here&#39;s this entity; I&#39;m gonna shove this into our metadata, our data tools, so that I can ask questions that incorporate this piece of metadata.&quot;

When we talk to folks about getting started with observability or doing that first passive instrumentation, there tend to be a lot of these questions about &quot;What matters to your business? [unintelligible 00:26:54.00] We use Kafka pretty heavily, and it tends to matter which partition things get written to, so that&#39;s a piece of metadata that gets captured in all of our dogfood instrumentation.

Back to what I said earlier, there&#39;s this perception that instrumentation is this big lift, big thing that you have to get right, and it&#39;s a lot of work... And to that, I say &quot;It doesn&#39;t have to be.&quot; It&#39;s something that&#39;s iterative, it&#39;s something that evolves along with the code that you&#39;re writing. The same way documentation and comments tend to evolve, or tests evolve as the logic underneath changes, so should your instrumentation. With that frame of thinking, it&#39;s almost like you start off capturing a baseline of things that you think will be useful.

If you have a basic web server, you probably care about &quot;Handle this request&quot; and it returns this HTTP status, and maybe came in from this user or customer ID... And as your understanding of this system evolves and as your understanding of the questions that you might want to ask evolve, you can just add new fields, add new pieces of metadata. The schemas that you&#39;re capturing, or the bits of data that you have to work with end up changing, and growing, and sometimes shrinking if you&#39;re pulling out stale fields.

[00:28:23.24] A lot of people don&#39;t like this answer, because it requires some thinking. It requires something like sitting and being like &quot;Well, what does matter to me?&quot; And no one likes to be told--

**Jerod Santo:** What do you tell those people? What if I said &quot;Yeah, I don&#39;t like that answer.&quot;

**Christine Yen:** It depends on whether I&#39;m wearing my Honeycomb hat or not. If I&#39;m wearing my Honeycomb hat, the answer is usually &quot;Cool. Well, good luck. Talk to you in a couple months.&quot;

**Jerod Santo:** Right. So take your Honeycomb hat off and answer that question then.

**Christine Yen:** With the Honeycomb hat off it&#39;s a little bit more like &quot;How much have your underlying system technologies changed? Are you playing with microservices? Are you playing with containers and orchestration?&quot; If yes, chances are your practices around supporting that are going to have to change also.

The idea that we can change how we deliver and host software without changing our thought patterns about how we ensure that those pieces of new technology are working the way that we expect is kind of mind-blowing. Logging tools and metrics tools really came into being like 25 years ago, when we only had grep and we had counters; APM tools came into being at some point along that path in order to bridge the gap between &quot;Okay, I want these greps, but then I also want some flexibility in being able to get down into more data.&quot; Those tools are struggling - especially the ones that have been around for a while - to keep up with the containerized world; things that rely on stable hostings tend to not be so happy when you have 100 nodes that you&#39;ve spun up and spun down three times over the course of the day as you&#39;re experimenting with something.

This increased attention being paid to &quot;Am I capturing the information that I need from this more complex system, to answer these more complex questions&quot; I think is a good thing. And there are lots of patterns and good practices that you can use to minimize the amount of work that you have to do, and to make sure that you&#39;re on the right path, but ultimately, all of the custom logic, all of the things that matter to your business bottom line are things that are only gonna be inside your head.

**Jerod Santo:** It seems that as the trends in software architecture move towards microservices and towards serverless components, observability trends alongside those, moving from a place where it&#39;s a subset of context in which it&#39;s worth the effort to instrument the correct things - I was about to say &quot;instrument all the things&quot;, but not almost all the things - and set up these circumstances in which you can ask questions about your unknown unknowns, towards a place where it&#39;s more broadly like &quot;Everyone&#39;s going to need this&quot; if we&#39;re going to continue to move into this more nebulous, cloudy (I apologize for the pun) circumstance of serverless and microservices... Because we just aren&#39;t as close to the &quot;metal&quot; as we used to be. Like you said, when we used to have just grep and counters... Things are changing; as we move in that direction, it seems like observability becomes more and more paramount.

**Christine Yen:** [00:31:52.09] Yeah. I think that serverless is a great part of this also. Again, instrumentation doesn&#39;t have to be this big whole heavy lift; it&#39;s just a question of &quot;Well, what actually matters?&quot; For Honeycomb it&#39;s that our customers, if they write a payload, they can query it in under a second. Oh, okay, so let&#39;s start our instrumentation in order to capture what the user is seeing; let&#39;s find a way to capture at the API layer and the query layer in order to ensure this experience, and then as we need to, we can go deeper into the stack, we can go deeper into the code, add the instrumentation for what happened at the merge step inside our query engine etc. But when you&#39;re first starting out, leave that level of detail out, until you know that you need it.

**Jerod Santo:** Some things it sounds like would be hard to observe, and some things it seems like would be easy to observe... So if you take our completely self-centered circumstances - there&#39;s certain things about podcasting where it&#39;s hard to observe. Our listeners, for example - we don&#39;t know very much about them. Adam and I happen to not care too much about that; but as an unknown unknown, perhaps we might want to know something about that. Or more on the infrastructure side of the question... That&#39;s more on like maybe the advertising. But on the infrastructure - how fast are they able to download all of our episodes? How do we observe those things? That&#39;s a little bit easier for us to track.

So what are some things that are traditionally hard to observe, or maybe people think they are hard to observe, and they really aren&#39;t that hard; or on the converse, what are some things that people think are easy and actually are hard? Slice and dice that question however you like.

**Christine Yen:** This is an interesting question. I might come at it from another angle. There are really interesting parallels between this burgeoning observability trend in the ops and engineering and [unintelligible 00:33:48.22] space, and business intelligence folks, and almost data science. Honeycomb will go out there and be like &quot;Oh, you can do these things with your data. You can answer these questions&quot;, and there&#39;s someone out there, sitting on their giant Tableau instance, being like &quot;Pfft... I&#39;ve been able to do that since I don&#39;t know how long.&quot; [laughter]

**Jerod Santo:**&quot;The most interesting man in the world...&quot; It reminds me of those commercials.

**Christine Yen:** [laughs] Right. I&#39;m gonna take the actual differences between Honeycomb and Tableau aside, set them on a shelf, won&#39;t get into them here, and just point out how silly it is sometimes that there are these divisions between closely-related disciplines. Business intelligence folks and data scientists have been dealing with unknown unknowns forever; they&#39;ve been dealing with this question of like &quot;Oh man, why did profits go up last quarter?&quot;

**Adam Stacoviak:** From a completely different context though, not from the ops perspective.

**Christine Yen:** Yeah, totally.

**Jerod Santo:** Exactly.

**Christine Yen:** But it&#39;s almost the same actions. Thinking about this observability movement, it&#39;s exciting to me because it means that maybe engineers and operators and technical folks will be able to not purely think about &quot;Well, I have this data. What can I do with the data?&quot;, but instead start thinking about &quot;What are the questions that I need to answer in order to ensure a good experience for our users?&quot;

What if you found out tomorrow that the Changelog wasn&#39;t accessible to anyone in France; a whole geo which is unable to access it because of something in the infrastructure. These are the sorts of things that because we are technical folks, because we are engineers, we&#39;re so accustomed to looking at what we have to work with and then figuring out what we can do with it, than starting to think about what our tools can help us achieve, and then setting up the data that we need to achieve those goals.

**Adam Stacoviak:** It&#39;s almost literally like a hacker, where a hacker has to think about how to infiltrate and circumvent a system. You almost have to dream how your system will fail, or problems that will come up, or things that will essentially [unintelligible 00:35:57.03] your user experience that you desire, whether it&#39;s throughput speed etc. You almost have to dream of like what could happen and then monitor the data from that.

**Christine Yen:** [00:36:12.01] Kind of. I think of that as the middle step. But you can even go higher and be like &quot;What would get you out of bed?&quot;

**Jerod Santo:** Coffee. [laughter]

**Christine Yen:** Well, in the middle of the night [unintelligible 00:36:14.16] What would make you go get the coffee? And if you are Shopify, it might be when a user is not being able to check out. &quot;Oh, crap!&quot; That is the problem. Okay, now let&#39;s think about &quot;What are the ways things might go wrong? What are the pieces of metadata that we might need in order to quickly isolate where users aren&#39;t able to check out, to users who aren&#39;t able to check out because they aren&#39;t able to talk to that database.&quot;

Being able to think of it from the perspective of whether your customers are able to achieve their goals is how frankly all software should be written or thought about... Which is a little bit of a harder sell, so we tend to focus on observability and the technical things that can be achieved.

**Adam Stacoviak:** Is that a starting point though, the &quot;what would get you out of bed&quot;? Is that how you approach the necessary pieces you would wanna capture to query the unknown unknowns of the future. Is it just simply that question, or is there other questions? Because to me, that&#39;s a great question to ask, &quot;What would get you out of bed to fix something, pager duty etc.?&quot;

**Christine Yen:** Yeah. I think that that specific question - people have associated that too tightly with what is true in their present day. There&#39;s some people who would be like &quot;I would get out of bed if disk space is over 90%&quot;, which is certainly an answer, but doesn&#39;t quite carry the same end user impact that we want [unintelligible 00:37:48.09]. I think that it&#39;s more &quot;How do you know that something is actually broken, or is actually impacting your business or your customers? What are they experiencing?&quot; Set alerts, or set your pager on that.

I can see this conversation forking, and there&#39;s a whole path that could go into reducing alert fatigue and burnout and over-monitoring that I will not go down over the course of this podcast, but... There are a lot of smarter folks who have said things on that front, where - again, asking the right question or thinking about the signals that actually matter is something that can really improve an engineering team&#39;s lives, culture etc. on a whole bunch of different levels. Observability is just a really great opportunity to start asking those questions.

**Adam Stacoviak:** So if there&#39;s somebody out there that&#39;s like &quot;Great! Sold! Observability rocks. I wanna implement it. I wanna bring it into my organization&quot;, what are the steps? Who has to be convinced or sold the idea of it and what are the tooling? ...obviously, Honeycomb is one of them, but you mentioned APM earlier, you mentioned other tooling out there. What kind of tools or steps would somebody go through or take to start to chisel away at observability for their organization?

**Christine Yen:** I think that tools are a catalyst for conversation, but rarely that first step. I think that first step is always going to have to be &quot;Oh man, let&#39;s take a step back and think about whether we can answer the questions that our organization needs. Do our current tools/practices support looking at this from the customer&#39;s perspective? Do they support being able to break down by app ID or shopping cart ID if those are the most important things?&quot;

[00:39:43.14] From there, folks can then start to try things, like &quot;Okay, we have this data tool. We don&#39;t really wanna swap it out, but I want to add this new field. Or I want to add the ability to compare this customer versus that customer. Great! Let&#39;s try that.&quot; As technical people, we want technical answers for &quot;Oh, just use this technology. Buy a Kubernetes, and then it&#39;ll fix your problems.&quot;

**Adam Stacoviak:** I was hoping there was an easy way, but it seems like there&#39;s not.

**Christine Yen:** [laughs] But I think starting these conversations can at least keep a lot of this at a human level, and identifying those questions and those pieces of information that you want to be able to interact with in your data tool is the first step. From there, then it&#39;s a question of &quot;Okay, can your tools support that? Is your toolchain or how you&#39;re instrumenting support being able to answer these questions?&quot; If not, then that core set of questions works well for both &quot;Let&#39;s take this set of questions and go figure out which tool makes sense for us&quot;, as well as arguing upwards, saying &quot;Hey, these are important questions to the business. We need to be able to ask these questions. Hey, Mr./Mrs. VP, I want a little bit of time or budget to explore this better way that my team can support the software.&quot;

These are very abstract things - on Honeycomb&#39;s site we have a white paper section in particular where my co-founder Charity and Liz Fong-Jones have recently published a framework towards an observability maturity model that provide a number of these questions, around &quot;Can your team do this? Can your team do that? These are signs of your tools not being able to help you minimize tech debt.&quot; I think that document in particular provides a great way to start thinking about and evaluating your organization&#39;s current observability practices, or to start mapping out a way to improve them.

# **Break:** [00:42:03.12]

**Jerod Santo:** Christine, let&#39;s imagine a software developer, and this person is interested in super-powers... And you have promised said developer super-powers if they will just adopt observability. So give us that pitch - what does the super-power look like in this context? What do I get out of it from the dev side? ...and I&#39;m going to adopt the concepts, and try to get the metrics going, and I wanna observe my system - what do I get out of that? What are some super-powers?

**Christine Yen:** Great. First, let&#39;s think about the sorts of things that a developer has to do throughout the software development cycle. Maybe you are deciding first what to build, either because something is broken and you need to fix it, or because a product manager is handing you a spec; you need to figure out how you&#39;re going to build it, the architecture review, the feasibility assessment, then you need to make sure that it works (local testing), you need to make sure ideally that it works in a broader sense [00:44:00.29] sometimes you&#39;re pushing something behind a feature flag... And then often you&#39;re responsible for the maintenance - making sure that it doesn&#39;t throw exceptions in production, or what have you.

[00:44:17.09] My thesis is that observability can impact all of these. It can improve your ability and super-charge your ability to do any of these, not just that last one. I&#39;ll throw a couple of stories and examples at you. I think my favorite one is the how to build something... Because a lot of people are like &quot;Okay, I have a spec. How do I do it? Let me just come up with something that I think will work locally. Let me come up with something that--&quot; if you&#39;re a TDD [unintelligible 00:44:42.17] maybe you write your tests first, and then you&#39;re like &quot;Well, now I just have to write code that will satisfy this use case.&quot; How do you even know that that&#39;s the right use case? How do you even know that that use case is representative of what your code will encounter in production?&quot; The way that observability comes in is it lets you actually verify your assumptions. &quot;Okay, I think that my code will have to handle workloads of this sort, payloads of this size, things like that. It will actually let me make sure that the code that I&#39;m writing will behave well.&quot;

An example from our very early days - at its core, Honeycomb has an API that accepts a whole bunch of JSON, and we were trying to decide... We had this ticket that was like &quot;Okay, well we should unroll nested JSON. Flatten it.&quot; Okay, great. The correct thing to do is obviously to do this by default, so that folks get this better experience. The engineer who was working on it was like &quot;Wait a minute... Let&#39;s double-check this first. Let&#39;s find out who would be impacted, and let&#39;s make sure that if we do this, it&#39;ll have the intended effect, which is our users being happier rather than being unhappier.&quot;

So what that engineer did - his name is Ben - is he made the two-line code that would have unrolled the JSON, or figured out how deep the JSON blob was, and instead of deploying the change right away to actually do the unrolling, captured something in our instrumentation that said &quot;If we had unrolled, it would have added these new fields as a result of the JSON blob being nested with a depth of 3 or 5.&quot; And he was able to find out that something like a third of our customers were actually relying on things not being unrolled. Thus, the correct thing to do is to have that be an option.

That is the sort of thing where if he hadn&#39;t checked it ahead of time, if he hadn&#39;t actually verified in production that a third of the customers were relying on a certain type of behavior, he could have just blindly shipped this &quot;improvement&quot;, and made a bunch of people unhappy, and maybe cause some incidents down the road. That is an example of how even just the &quot;how to build something&quot; can be improved.

**Jerod Santo:** How did he check that in production? I might have missed that... The metrics were already in place to check how much...? If you remember the details...

**Christine Yen:** No, the metrics weren&#39;t in place. But as he was writing it, he was like &quot;Well, while I work on the full pull request and while I write the tests for the code that I would want to ship, I&#39;m gonna prepare a smaller PR to just look at a payload as it comes in, and alongside our &quot;Oh, I&#39;m handling this request&quot;, capture a bit that tells us how deep a JSON payload is.&quot;

**Jerod Santo:** Gotcha. So he made it observable.

**Christine Yen:** Yeah, he made it observable. And I feel like one of the keys to working with a tool that supports this whole workflow is having the tool be -- not even just tolerant, but have the tool be totally fine and love new fields being added as necessary.

[00:48:07.01] One of the principles we try to build Honeycomb to is adding a new line of instrumentation should feel as adding a comment to your code. It should be lightweight; it should be something that developers do because they have this new question and they want to see what happens, rather than some big, hairy process that involves lots of ops people stroking their chins to figure out whether they should do it or not. So the developer in this case was able to just ask this question almost in parallel with the code that he was writing.

A more concrete and more fully baked version of this - there&#39;s a company called Geckoboard in London, and they are a very data-driven company. At one point they wanted to build a new feature that part of it reduced down to the bin-packing problem, NP-complete problem. Their engineers probably could have spent quite a bit of time coming up with the perfect implementation of this NP-complete problem... And their PM was like &quot;Well, let&#39;s just test a couple of quick implementations against our real production workload, capture the results, don&#39;t expose it to customers, run it for a day, and then we can see which implementation of this algorithm performed the best.&quot; They did it, and they were able to pick one and throw the other two away, and then move forward.

By running this sort of experiment in production, by making production not feel like &quot;Oh, that&#39;s what happens when the code is fully baked&quot;, but is instead part of the development process, they were able to move much faster and be more confident that the implementation they eventually went with is one that would serve their needs.

**Adam Stacoviak:** It seems too, as you draw back, that observability - the super-power is having more eyes on the data (or in this case an experiment) around assumptions. You&#39;re no longer a lone ranger, isolated. You now have your entire team&#39;s eyes on the same dataset, and you no longer are alone.

**Christine Yen:** Yeah. It&#39;s more eyes, it&#39;s smarter eyes, it&#39;s eyes that can see deeper into the code... Previously, rewind five or ten years, you had the ops people watching graphs and the developers shipping code. And with these efforts around observability, around making these tools able to talk about the terms that developers care about, you&#39;re able to invite developers over to this part of the room, invite developers to watch and think and be like &quot;Oh, I noticed this thing. I as a developer have context that you as an ops person don&#39;t. Great. Now, we can improve this. Now we can react faster, or know better, or take this learning [unintelligible 00:50:53.21] from production and feed it into our whole development team.&quot;

One of the things that at a simple level a lot of monitoring tools can&#39;t handle well is being able to break metrics down by build ID. As a developer, knowing for sure whether my change was included in a specific change or drop in a graph - that is the most useful thing, because that tells me whether I need to care or not.

**Jerod Santo:**&quot;Don&#39;t git-blame me, my commit wasn&#39;t in there.&quot;

**Christine Yen:** Yeah. [laughter] That&#39;s the &quot;Not my problem&quot; version of it. But that&#39;s how you start to really directly attribute, like &quot;Oh, okay, what I did had an impact&quot;, and often that&#39;s a good thing. Like &quot;Oh, great. The performance thing I shipped did do what I expected it to do.&quot; Otherwise you&#39;re like, &quot;Did the build go out at this time? I think times line up, or all the machines on this new build...&quot; There&#39;s some uncertainty there.

[00:51:59.26] It&#39;s about being able to see and understand really what your code is doing, rather that just guessing at abstract signals, and hoping that they tie back to the code that we shipped.

**Adam Stacoviak:** If I put on my product manager hat from years ago, I often sat in the middle of businesses&#39; desires and our team&#39;s ability to execute on those desires, and potentially even create something that can make money. It&#39;s a multi-faceted job. I might think that observability might even be a super-power for a product manager, or somebody in charge of engineering, because you now have more resilient code, you have less issues, and that means it&#39;s more cost-effective to actually run your team and your code. So it&#39;s a business problem more than just simply a developer&#39;s super-power.

**Christine Yen:** This is very true. That particular angle tends to go across less well at developer conferences...

**Adam Stacoviak:** [laughs]

**Christine Yen:**...but certainly, that&#39;s the appeal, right? It&#39;s recognizing that... And this is why I get so excited about framing the question from the perspective of &quot;How does this impact customers? What is the business impact of it?&quot;, because that&#39;s what gets other people in the organization looking and paying attention and supporting it.

Product managers, product analytics are their whole own thing, and product managers need very advanced tools to make distinctions between funnels, or retention, or all those sorts of things... But there is so much power in them being able to share and understand and ask questions in the same playground and using the same tools that the engineers do.

At Honeycomb admittedly we&#39;re a small team, but our support folks use the same tools that engineering does to verify &quot;Oh, yeah, this customer is saying they&#39;re seeing this thing. They ARE seeing this thing. It looks like this. Oh, hey, engineering, this thing is happening&quot;, and now that hand-off is able to be a lot more informed and educated.

Our product managers are able to ask questions like &quot;Okay, if we make this improvement, which customers is it going to impact right away?&quot; I think that there are a lot of things that I think of as something that really benefits engineers. Running queries, being able to feel fast and iterative - those qualities really benefit anyone who&#39;s adjacent to the product development process, whether you&#39;re a product manager or a support person.

The ability to ask questions of your systems in production is not constrained to engineering disciplines at all. It&#39;s people who care about how that software is behaving.

We have a couple of non-profits who are using us, where they use Honeycomb to spit out some graphs that their chief donation officer cares about... Because they just happen to be able to incorporate the entities that the chief donation office cares about - donors or donation amounts - in with the same data that they use to assess operational stability. Can you imagine? ...if you&#39;re running a donation platform and you can say things like &quot;We were able to tease apart some correlation between donations that were slow and donations that are large&quot;? You can literally quantify the business value immediately of an engineering work that you&#39;re doing. That sort of thing I feel like is the holy grail of different parts of an engineering organization being able to really understand their impact, rather than just &quot;Oh, I made this thing faster because I wanted to.&quot;

**Adam Stacoviak:** Right. There was actually some true effect on the business, and now I&#39;d even dare say the users too, because they obviously got more excited about whatever they&#39;re doing in terms of donating, and they were able to do it.

**Christine Yen:** Yeah.

**Adam Stacoviak:** I&#39;m pulling a little quote from your white paper that you referenced earlier, the white paper on this framework... It says &quot;The acceleration of complexion in production systems means that it&#39;s not a matter of IF your organization will need to invest in building your observability practice, but WHEN and HOW.&quot;

[00:56:09.12] Systems are getting more and more complex, and as we just said before, the business case value of some of this instrumentation to be in place, to capture this data and provide this ability for more than just one set of eyes to see a problem is not a matter of if, it&#39;s a matter of when... Because most things are moving to cloud, most of the things are becoming more and more distributed...

**Christine Yen:** Absolutely.

**Jerod Santo:** There doesn&#39;t seem to be a downside in regards to the data collection like there is on the business intelligence side... Just thinking back to that dichotomy of like &quot;We&#39;re doing the same things in different areas.&quot; Whereas on the business intelligence side you have the creepy factor of tracking people and doing too much. Maybe there is even on the observability side, on the infrastructure; maybe you can speak to that, Christine... But it seems like, aside from the scalability problems of collecting too much data, you don&#39;t have the privacy and security concerns that you do like you would on the front-end. Do you think that&#39;s a fair statement, or are there still concerns with regards to privacy and security of your customers, the server-side analytics maybe, that happen here with observability?

**Christine Yen:** I think that there&#39;s still some risk there. If you&#39;re Stripe, or something, at some point in the code you probably do have some  variable that holds some sensitive PII, and I think that there are a number of different laws, as well as internal practices that allow people to protect that data.

Certainly, with great power comes great responsibility, and when you make it very easy for developers to capture the metadata they might find interesting, that tends to be something that organizations need to keep an eye on as well. &quot;Hey, let&#39;s make sure not to send personal addresses to plain text&quot;, as it were.

**Jerod Santo:** Yeah, that&#39;s fair.

**Adam Stacoviak:** Well, coming at a Strange Loop near you, right? All this and more.

**Christine Yen:** I&#39;m super-excited about it.

**Adam Stacoviak:** I&#39;m excited about this. You mentioned this is your first time at Strange Loop, this is Jerod and I&#39;s first time at Strange Loop... We have something tentative on the stage, we&#39;re still not sure what that is, but if you&#39;re listening to this and you&#39;re going to Strange Loop, then hey, you might see us on stage and you can see something live. We&#39;re thinking about some sort of fireside chats... We&#39;re still working through the details, but it&#39;s a lot of fun, so...

**Jerod Santo:** You can definitely see Christine live, as she gives her talk &quot;Observability: Superpowers for developers.&quot; Let&#39;s finish on a really tough question - favorite superhero, roundtable style.

**Adam Stacoviak:** Oh, boy.

**Jerod Santo:** We&#39;ll let Christine go first, you&#39;re the guest. Favorite superhero?

**Christine Yen:** It&#39;s gotta be Storm.

**Jerod Santo:** Storm... Nice. Halle Berry version, or comic book version?

**Christine Yen:** I think comic book version. I like Halle Berry, but Storm in the new Reboot generation is pretty cool; she&#39;s got her Mohawk... I&#39;ll get behind that maybe.

**Jerod Santo:** Nice. Adam, what about you? I&#39;ve known you for a long time but I&#39;ve never asked you this very personal question - favorite superhero?

**Adam Stacoviak:** I&#39;m gonna go super-OG, super-obscure, and I&#39;m gonna say Spawn.

**Jerod Santo:** Ooh...

**Adam Stacoviak:** And the reason I&#39;m gonna say Spawn is because I&#39;m a huge fan of Todd McFarlane. He was responsible for the reigniting of Spider-Man. He once drew for Marvel, so a lot of the modern look of Spider-Man can be attributed to Todd. And there was this sort of revolution, so to speak, in the comic world, and he and some others from Marvel broke off and created Image. Image was the brand under which Spawn was, and I just love Todd&#39;s art. He&#39;s amazing.

**Jerod Santo:** [01:00:04.27] Yeah, the art style of Spawn is awesome.

**Adam Stacoviak:** So Spawn isn&#39;t really the best character, but I think he was well-done. The first 20 issues of Spawn were amazing. And as a matter of fact, I own all of them. [unintelligible 01:00:12.23] all that good stuff.

**Jerod Santo:** What do you do with them? Do you have them up on a bookshelf somewhere? Do you observe them?

**Adam Stacoviak:** [laughs]

**Jerod Santo:** I went back into observability here... [laughter]

**Adam Stacoviak:** I have some observability on them... No, they&#39;re actually just in a shoebox, tucked away in a closed, dark, away from all the elements. But I&#39;ve got that and plus a ton of other comics that I used to collect... But Spawn is my favorite.

**Jerod Santo:** Awesome. I never knew that about you, I&#39;m glad I asked. Well, I&#39;ll go super-boring/super-mainstream/Superman. Sorry. I love Superman, I always have. I think it&#39;s probably just the first superhero that I ever learned about as a child... And he&#39;s got all the skills, he&#39;s got everything. And yet, somehow he still injects drama into the shows and into the stories, because he&#39;s gotta choose; he&#39;s always gotta choose who he&#39;s gonna save. I also like Batman quite a bit, so I&#39;m pretty boring, but... Superman.

**Christine Yen:** Very cool.

**Adam Stacoviak:** Well, since you said Batman, I can say that I&#39;m a huge fan of the most recent trilogy. I think that was probably the best of all Batman, in my opinion.

**Jerod Santo:** Well, we may be able to save that conversation for an episode of Backstage... [laughter] As we&#39;re now completely ignoring our guest and we&#39;re just talking about movies.

**Christine Yen:** No, since we&#39;re going down that road, if either of you or anyone listening to this hasn&#39;t watched the Spider-Man: Into the Spider-Verse...

**Adam Stacoviak:** Oh, my gosh...

**Jerod Santo:** Loved it!

**Christine Yen:** What a great translation of comics to movie... What a great way to tell a story that I was not excited to watch again, because I&#39;m like &quot;How many Spidermans do we need?&quot;

**Jerod Santo:** Yes...

**Christine Yen:** But literally, they took that and they played with it, and that was a lot of fun... And in many ways, the inspiration for the title of this talk.

**Jerod Santo:** A hundred percent.

**Adam Stacoviak:** I&#39;ll plus-one that, but I&#39;ll also add to it...

**Jerod Santo:** Plus two.

**Adam Stacoviak:**...because this is append-only, not takeaway... [laughter] I&#39;ll add... Because you said you weren&#39;t excited about seeing another Spider-Man - I will agree, until I watched Spider-Man: Homecoming. It was actually really good. I loved the fact that...

**Jerod Santo:** I liked that one, too.

**Adam Stacoviak:** This is super-Backstage, so this is extended, but whatever - I loved the fact that they kind of remade the story with a Peter Parker that was a part of that was a part of the Avengers... And I might be spoiling some of it, but just this whole new aspect that sort of brought it into the Avengers story, and kind of gave it more of the bigger universe Spider-Man appeal than just simply Spider-Man alone.

**Christine Yen:** It&#39;s crazy to me... Whenever I meet someone who just hasn&#39;t been following the MCU -- you know, with MCU you&#39;re either all-in or all-out. The way that they tie the stories together - they&#39;ve made it so rewarding for people who have watched all the movies.

I was less of a fan of Homecoming I think than you are, but definitely [unintelligible 01:03:03.12] appreciated it.

**Adam Stacoviak:** Yeah. That&#39;s what I mean, too. It wasn&#39;t like &quot;Woo-hoo! I&#39;m so glad it is...&quot; It was just definitely good.

**Christine Yen:** Yeah.

**Jerod Santo:** But it&#39;s kind of weird that we were all kind of over Spider-Man, and then they released back-to-back Spider-Mans, both of which were good, and one of which - I think it was the Sony production, the Multi-Verse one - to me was groundbreaking. It was like &quot;This is so amazing.&quot;

**Christine Yen:** Yup.

**Jerod Santo:** Very impressive.

**Adam Stacoviak:** Well, now that we&#39;ve officially turned into Backstage and out of the Changelog - Christine, thank you so much for sharing your wisdom here, and for the work you&#39;re doing at Honeycomb. I can&#39;t wait to see you at Strange Loop, looking forward to the talk. Thanks for sharing your time here today, we appreciate it.

**Christine Yen:** Thanks so much for having me.
