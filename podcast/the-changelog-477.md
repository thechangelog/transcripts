**Forrest Brazeal:** There's MQ, EC2,

And RedShift and GameLift and Glue.

There's Lumberyard, Lightsail and Workdocs and Workmail, with Worklink and PrivateLink too.

Detective, Inspector, and Trusted Advisor, Cognito, Corretto, S3 -

Data Pipeline and DataSync, AppMesh and AppSync,

or you can use SimpleDB. But don't!

Appstream, Timestream, Augmented AI, Auto Scaling, Lambda, Amplify.

Oh, DirectConnect or just Connect, Config and RDS -

These are the major services of AWS.

**Jerod Santo:** You're listening to Song Encoder, a special series of the Changelog Podcast featuring people who create at the intersection of software and music. My name is Jerod Santo. Big thanks to our partners at Fastly for delivering our shows super-fast, all around the world. Check them out at Fastly.com.

**Forrest Brazeal:** ...Ohh there's CloudFormation, Lake Formation, Free RTOS -

These are the major services of AWS.

**Jerod Santo:** Forrest Brazeal refers to himself as a Cloud Bard. He plays the piano, sings, raps, and even yodels about cloud-based technologies and services. When I saw Forrest's HugOps song go viral on Twitter, I couldn't help but chase him down and ask "What the heck is a Cloud Bard?"

**Forrest Brazeal:** Well, a Cloud Bard is something that I made up, because you can define any category, arbitrary and small enough, to be the best at it, and... As far as I know, I'm the only person that calls himself a Cloud Bard, so I'm number one.

**Jerod Santo:** \[laughs\]

**Forrest Brazeal:** No, but - basically, I'm an educator, a cloud advocate. I've been teaching people about the cloud, building on the cloud for many years, and this is just a way for me to encapsulate the way that I like to do that, which is creatively, thinking outside the box, with a little bit of fun, a little bit of magic. It seems to help people get excited about technologies that can be a little bit arcane, a little bit abstract, unless you put them in a format that you can easily grab onto.

**Jerod Santo:** Do you remember the first spark, the first time you decided "I'm gonna start singing about technology?"

**Forrest Brazeal:** Yeah, actually I do. It was at a conference called Serverless Conf, dearly departed, back in Austin, Texas. This was 2017. I was giving a talk, it was about serverless functions, something like that. I decided that I would end the talk by rapping... Acapella rap, which is just the worst thing you can imagine.

**Recording begins:** \[02:09\]

"Alright, let's do this.

Do you feel kind of nervous about functions as a service?

It makes sense to be on the fence. That serverless learning curve is kind of steep. It's not cheap. Even if it's affordable, know that Node code you wrote ain't portable. Yeah, good luck.

Serverless is not a panacea, it's an idea... That infrastructure can be structured like it's from IKEA... Running your code on compute you don't manage, freeing you to pursue your true business advantage.

Now, does the tooling have some gaps? Sure. But just like our apps, perhaps, it'll mature. Meantime, the hype is a little bit fair... For the first time in ever, you don't have to care. If you're over-provisioned, or paying for idle, or managing servers where each has a title, like cattle01, or myspecialpet, when they're really just beasts you should try to forget.

No maintenance windows from midnight till 2. Jeff Bezos will pay those sysadmins for you. \[laughter\]

Amazon \[unintelligible 00:03:05.25\] try Azure, or Google, or - yes, IBM... Use Cloud Functions, Step Functions, Firebase, Cognito, or wrap them all up like a \[unintelligible 00:03:14.11\] the quick kick of that serverless stack is addicting as heck, and there's no looking back... So go write a function, deploy and test, and let the cloud do what the cloud does best." \[applause\]

**Recording ends:** \[03:26\]

For whatever reason, it became a very memorable moment at the end of that talk, and it ended up leading to some great opportunities, and I realized "Hey, people do enjoy engaging with these concepts in this way." And at some point I started putting more music around this stuff, and... Yeah, here we are.

**Jerod Santo:** So how long have you been doing music?

**Forrest Brazeal:** I mean, a long time... I was Conservatory-trained, I'm a classical musician on the side; at some point in the past decade or so I figured out that I could combine that with my dayjob to do something that was more fun than either of them, so here we are.

**Jerod Santo:** So has this accelerated your career, do you think?

**Forrest Brazeal:** Yeah, absolutely. I would not be doing what I am now, I would not have had the opportunities I have, I would not have met the people that I've met if not for putting these songs out there. And it's surprising how quickly music can cut through the noise and help you to all of a sudden start having a different conversation than everybody else is having.

I think about the song that I wrote on ransomware back when everybody was thinking about "Hey, there's no gas right now, there's no meat..." Every day there was a new business getting hacked, and people didn't understand what was going on, and so I spent some time trying to understand what was behind this phenomenon, putting it into music in a way that was pithy and easy to understand.

That song ended up winning what's called a Pony Award at Black Hat. I got to meet a lot of cool security people through that, I got to partner a little bit with CISA, the government agency that's responsible for cybersecurity... And yeah, you just never know what doors are gonna be opened once you start singing.

**Song:** \[04:47\]

One day I asked my teacher, What use is math to me?

She answered: When you're older, someday my boy you'll see...

There's a world of computer systems out there

Full of valuable data and not secured with care

And you can make a fortune in ransomware...

With a little bit of math!

It's called encryption,

Just a little bit of math,

Cause a conniption;

Lock the data, hide the key;

They'll pay up eventually,

It's all just math.

Ransomware is big now

Because it's organized.

You can buy it as a service

And sell it for a prize.

There's a whole world of tempting targets to hack -

Governments, hospitals, schools to attack

And they pay up in Bitcoin, hard to trace back...

It's all just math!

We call it crypto - just a little bit of math.

No need to tiptoe,

Hackers whisper, don't be nervous,

We take pride in customer service...

Well then I told my teacher, I'm feeling terrified;

How can we protect ourselves from all this cybercrime?

She said, "Don't click weird links, or use "password123".

Make offline backups, invest in security."

And that's when I realized how screwed we might be...

Just do the math!

So many systems.

If they all took a bath,

Wouldn't we miss them?

Next time there's no meat or water or gas,

And we slide a little closer to the day of wrath

You can blame IT, or some Russian sociopath,

But personally, I blame math.

**Jerod Santo:** For those of us who don't write music, we just listen to the songs once they're fully-formed, what does your creation process look like?

**Forrest Brazeal:** I think it comes down to wanting to have something on your mind that's important to share. I'm not writing stuff just to write it. Earlier this summer I did a piece called "That sinking feeling. A HugOps song", which is about the terrible feeling that we've all experienced as developers when you one-second-too-late realize you've pushed something to production that you should never have pushed, and you've taken down the site, and the pager is blowing up... What are you gonna do about that? Are you still gonna have a job? Are you gonna survive? And it brings in these concepts of blameless postmortems and how to build a team that can be resilient to something like this.

I knew I wanted to put that into song format, because every couple of weeks you'll see something like this floating around on the internet; someone else who's panicked about it. I think it was right around the time that that HBO intern had sent out an integration test email to their entire multi-million email list, and I just wanted to capture that feeling in a way that would resonate.

So from that point, it becomes "Well, what's it gonna sound like? How are you gonna make this accessible, and also kind of cut through the noise", like I said before, in a way that people maybe haven't seen before?

In that case, I ended up putting the song together as a -- there's a few different instruments involved. There's a little rap break in the middle of it, and it's got a pop sound to it that's very easy on the ears. I wanted it to sound like an oral hug to help you feel a little bit better about the problem you just caused. Kind of the audio equivalent of the HugOps discipline. So you know, it depends on the setting, it depends on the time, it depends on the concept you're trying to get across.

**Song:** \[08:11\]

My day was going great;

Just pushed a code update;

But then the pagers started humming:

Oops, did I just delete

Half the production fleet?

That sinking feeling's coming, from deep within my plumbing

Now my life is flashin',

Hope my boss will show compassion

And I really, really need someone to say...

Hey hey hey, it's gonna be okay.

You didn't just set fire to your resume.

This happens to the best,

Try not to get too stressed,

It'll be an awesome story someday.

I tweaked a small config,

Turns out that it was big

And now my app has been beheaded;

When I do something wrong,

I fear I don't belong,

How can the world forget it, we're trending now on Reddit.

Oh, mistakes will find you

But you've got a team behind you.

So fix the process - yes, but don't dismay:

Hey hey hey, it's gonna be okay.

We'll do a full postmortem some other day.

It was a swing and miss,

But we will learn from this,

And we'll all be better engineers, like...

Look, here's what you need to know when something gets destroyed

If there's negligence or malice, then you shouldn't be employed

But if a human is assumin' then the problem is the system;

It's gut-wrenching, butt-clenching, but you work with 'em.

It can happen to a junior, or to a senior.

Just because you caused a little pause doesn't mean you're incompetent,

It means you're doing work with real effect.

It's a scar of battle, baby. That'll earn you some respect.

And we all have been there

Made a slip or two or ten there;

So we try to do a blameless RCA...

Hey hey hey, it's gonna be okay.

You will still be here when this blows away.

We've all screwed something up,

So welcome to the club.

We would love to hear your story someday.

**Jerod Santo:** So in your day-to-day work, have you ever been on the receiving end of a HugOps, or have you ever been the guilty party on one of these outages?

**Forrest Brazeal:** Absolutely I have. I remember a few years ago I'd written this thing that shut down cloud instances outside of work hours... And it was great, because it saved a lot of money, so we turned it on in development accounts, and at 5 PM it would shut down everybody's servers. Guess who accidentally changed the config to have it run on production instead of on development? I shut down 600 live databases, so... Yeah.

**Jerod Santo:** \[laughs\]

**Forrest Brazeal:** I've been there. It was a long day.

**Jerod Santo:** Singing from experience then.

**Forrest Brazeal:** Yes.

**Jerod Santo:** It seems like a lot of the stuff that you sing about is about what you're currently doing. So you have a lot of AWS stuff, I saw some stuff for A Cloud Guru, I assume there's some sort of relationship there...

**Forrest Brazeal:** Yes, I used to work for A Cloud Guru. I never actually worked directly for Amazon. I was what's called an AWS hero for a long time, which is kind of like an unpaid developer advocate for AWS; something like a Microsoft MVP or Google Developer expert. As a result of that, I was constantly involved with AWS technologies and trying to explicate those.

I have moved on to Google, I work there now, so you can expect to see more Google Cloud-related songs coming out, I'm sure. It's certainly what I'm thinking about, what's on the top of my mind.

**Jerod Santo:** How did you come to work at Google? Did your singing play a role in that directly or indirectly?

**Forrest Brazeal:** Yeah, it was interesting... Somebody had hit me up on a Friday night, like "Hey, you should do a serverless versus containers rap battle", and I said "If this person's tweet gets X amount of shares by Monday, I'll go ahead and write one." And so they did, and I ended up writing it over the weekend.

**Song:** \[11:32\]

Wait and see, the latency's no worse than your complacency.

Face it, see, you're basically chasing a place you don't wanna be.

My services improve all by themselves, they get better,

Meanwhile you're out of luck, stuck chuckin' out the cheddar.

Hey, remember Spectre and Meltdown? You were up all night.

Me? I slept, that's right, the cloud provider kept it tight,

You can patch your runtimes, I'll have happy fun times,

Delivering value while, pal, you fight the same old fight.

Mate, that sounds great, but wait, let's use our brains here.

Yo, I got constraints here. I'm running Java 8 here.

Diggin' in the brownfield, movin' the ball downfield,

Can't rearchitect it all until we look respectable.

I just wanna build more, that's what I get billed for,

Lambda gives me power our past selves would have killed for

I know, I'm just saying, we're in a different state of being.

Yeah, but function are amazing, and ... wait, are we agreeing?

Yo, I think it's possible that both of these architectural approaches are valid in different scenarios.

I hesitate to admit it, but obviously use cases support both of our positions.

Truce?

Truce.

Let's bring it home.

Ultimately, both of us have the same destination,

Get rid of heavy lifting without differentiation,

So whether your abstraction is a function or a node,

You can get a lot of traction, just keep truckin' on the road.

And if your app goes down at three AM (and it will!)

You've gotta own that, it's your problem still.

There's no silver bullet hocus pocus managed guarantee

But when business is your focus you'll be where you wanna be.

Hey, that felt good.

All right, we're not friends.

Sorry.

Hey what does this error mean? Process exited without completing req--

**Forrest Brazeal:** On Monday I got on a plane and went out to Seattle and we had a bunch of AWS folks out there for a developer summit... So I got out there and everybody had heard it, and it was just kind of a great conversation starter.

The guy that was over top of the AWS Hero program at that time, Brian Hall, AWS's VP of marketing, ended up going on to Google, and he's now the VP that I report to at Google. So it was a great way for us to meet and start a conversation, and we kind of continued that relationship through the years.

**Jerod Santo:** What's your role at Google look like? What is your goal, and what do you do for them?

**Forrest Brazeal:** My title is head of content, which is kind of -- it's more what you make of it than what it actually says it is... \[laughter\] But I lead a group of extremely talented people who are responsible for telling the story of Google Cloud to the world. So it's specifically the cloud side of the business.

But you're talking about a cloud provider that - hey, it's third out of three. They're in a challenger position. And one of the advantages of doing that is you can be pretty outside the box in how you tell your story and what you're willing to do. So you can expect to see more unusual, creative storytelling coming out of Google Cloud. Will there be some music? I certainly can't deny that there might be some, you know...

**Song:** \[13:51\]

It doesn't seem so long ago,

That you were just AppEngine and Google Apps...

But while they called you just an embryo,

You grew up into something that... Kinda slaps.

And now when I use Workspace or GCP,

I get this funny feeling this is how cloud should be.

Look at you now, Google Cloud.

Baby, somehow you made us all proud.

Look at you run, clean as can be, sustainably...

Going beyond buzzwords and platitudes

To ship AI you can actually use...

Just wow, Google Cloud, look at you now.

**Jerod Santo:** So we can expect more Google Cloud content, of course... But what else? What's next for the Cloud Bard?

**Forrest Brazeal:** I'd like to expand a little bit and sing about some things that are maybe more tangential to tech. I feel like we need a supply chain song in these trying times, so... We'll see if that happens.

**Jerod Santo:** We need a supply chain song... \[laughs\] There you go. Go mainstream with that stuff.

**Forrest Brazeal:** Yeah, man.

**Jerod Santo:** You do have one that's related to tech, but it's not so much cloud and infrastructure and explaining concepts. Your 168 AWS services in 2 minutes is a really fun way of kind of poking fun at AWS, and how many services there are, and how hard it is to remember all their names... But then more recently you have the Big Tech ((It's Probably Fine)). This almost seems like a little bit of a commentary, right?

**Forrest Brazeal:** Yeah. There's a song from back in the '60s called "The merry minuet", made popular by a group called The Kingston Trio. It's all about the atomic age, and the razor edge of nuclear Armageddon that everybody was living on back then. But the very kind of serious commentary nature of the song is undercut by these whimsical lyrics, and it's a very light melody. It actually has a minuet feel to it, and it just trips along very whimsically. So the intentional triviality of the music and of the way it's phrased is in complete contrast to the civilization-destroying implications of what they're talking about.

**Song extract:** \[16:03\]

They're rioting in Africa

They're starving in Spain

There's hurricanes in Florida

And Disneyland needs rain...

**Forrest Brazeal:** So I wanted to write something like that about big tech. So if you listen to that song, you'll hear - it's a very kind of calm, flowing, cheerful melody.

**Song extract:** \[16:29\]

**Forrest Brazeal:** You know, it just kind of flows along like that, but you're singing about a world where people are not in control of their own thoughts and feelings, and where you have a small number of oligarchic technology companies that are making decisions about who can speak, and who's not allowed to speak... That's our version of Armageddon that we're contemplating, in some ways, and I just wanted to back that with music that absolutely didn't sound like it at all.

**Song:** \[17:11\]

Grandma is a Nazi now.

Facebook swears it wasn't them; they don't know how

Their algorithm works, it's too opaque.

It must have made a small mistake.

(Oops! She's probably fine)

Better to avoid a slip,

YouTube seems to be all in on censorship

'Cause hey, that's always worked for the oppressed.

I'm sure their CEO knows best

And we're hashtag-blessed, yeah yeah yeah, we're totally fine.

Whoa, fine, fine, fine, fine, we're all just fine...

We're falling through the algorithm

Big Tech took us down with 'em

The hate is ours; the data's theirs to mine.

Advertisers sold our souls

To propaganda, bots, and trolls

But hey, we're probably ...

Locked behind a garden gate

Of self-obsession, lies and hate,

Where every share, reply, and heart

Feels like it's tearing us apart.

We're lab rats hooked on dopamine

With psychopaths behind the screen

Deciding what is fake or real,

Controlling what we think and feel.

Now Instagram is following me,

Alexa listens when I pee,

And Google stores my secrets for all time...

And Facebook is just Mark Zuckerberg's way

Of trying to find out how humans behave

So he can slowly become more human

While the rest of us slowly become less human

... but it's probably fine, it's probably fine,

Yeah yeah yeah, we're all just fine,

Oh, we're totally fine fine fine,

I'm sure that we're fine...

Right?

**Jerod Santo:** What is it about cloud tech, serverless, this particular realm of the industry that excites you and keeps you so interested?

**Forrest Brazeal:** You know, it's changed a lot for me over the years. There was a time when my answer to that would have been very tactical-engineering-focused and saying "Hey, I really just love not having to configure a server" or "I love not having to go out and rack and stack something. I really like just being able to deal with this API and have material provisioned for me." I think as I've progressed, some of the things that I've grown to appreciate about cloud are just about the consolidated and centralized nature of expertise that you have access to... And of best practices, and even, honestly, sometimes corporate responsibility.

Something that I really loved - and this was a super-small announcement that came out at Google Cloud Next, where it could have even just flown completely under the radar... This tiny feature where they added a sustainability recommendation into this tool they have called Unattended Project Reminder, where Google's now able to tell you "Hey, you created this project, but it doesn't seem like you've really been using the resources in it. Do you wanna shut it down to help reduce your carbon footprint?"

A lot of us, for a lot of years, have thought about cloud resource optimization as something that is just about optimizing our build. But when you think about it, it's actually something that has a societal and planet-scale implication. That gets very interesting.

**Jerod Santo:** Do you find that you have to balance the leveling up of your skills, or is this something you have to continue to work on, in addition to keeping up with everything that's changing out in the cloud and in technology all the time?

**Forrest Brazeal:** I think it would be harder if I wasn't working full-time in this space. I'm always amazed by people like Randall Munroe at xkcd, who are able to remain credible and get way down in the weeds with all kinds of dense, STEM type of topics, whether it's computer science, or math, or all sorts of hard sciences that he writes about, without seemingly having much professional experience in any of them.

That's someone who has an incredible, obviously, commitment to researching and somehow staying up to speed on a lot of different fields. I'm not sure I could do that if I wasn't working in cloud. A lot of what you'll hear from me - it's just coming right out of what I'm working on. I'm not trying to go out and look at the broad landscape of the world and say "Well, materials should exist on this topic. I should go and create content." So it's not a content-first experience. It's very much content as an outgrowth of things that I've learned and experienced. And ultimately, I think that does have a good chance of resonating with more people.

**Jerod Santo:** Well, speaking of things that resonate... Yodeling. Some people love it, others not so much... But either way, it is certainly a rare skill. Can you give us a taste?

**Forrest Brazeal:** You really don't wanna hear this, I promise, but... \[laughter\] So, for context, this is - a while back I had done a yodel about Elastic Load Balancers, which I've always thought are a yodelable concept, just because of the sound of the phrase...

**Jerod Santo:** Right?

**Forrest Brazeal:** And so it was something like...

**Song:** \[21:49\]

Scalability

Is a cinch for me

When distributing my traffic with an ELB.

There's the ALB

And the NLB

And the little old load is balanced just for me.

Oh, the little old load'll,

Little old load'll,

Little old load'll be

Balanced evenly

Across the ELB.

The little old load'll,

Little old loadl'll,

Little old load'll be

Yodel-eedle-odle-eedle-odle-eedle-ay-oo-dee.

Well, if it's TCP

Or it's UDP,

Then the NLB will give me the lowest latency;

But if it's HTTP

Over VPC

The little old load is balanced with an ALB

Oh, the little old load'll

Little old load'll

Little old load'll be

Balanced evenly

Across the ELB.

Oh, little old load'll,

Little old loadl'll,

Little old load'll be

Yodel-eedle-odle-eedle-odle-eedle-ay-oo-dee

Yodel-eedle-odle-eedle-odle-eedle-ay-oo-dee

Yodel-eedle-odle-eedle-odle-eedle-ay-oo-dee.
