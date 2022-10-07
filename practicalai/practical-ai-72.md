**Chris Benson:** Welcome to another episode of the Practical AI podcast. I am Chris Benson, I am a principal AI strategist at Lockheed Martin, and with me as always is my co-host, Daniel Whitenack, who's a data scientist with SIL International. How's it going today, Daniel?

**Daniel Whitenack:** It's going pretty good. I've got a bit of a cold, but not too bad. I'm doing some pretty interesting stuff with text-to-speech this week, so that's pretty fun.

**Chris Benson:** Really? And anything worth sharing, or are you gonna wait till later?

**Daniel Whitenack:** Well, I think there'll be some things revealed at the Project Voice Conference, which we'll both be at in January.

**Chris Benson:** Yup.

**Daniel Whitenack:** So I'll leave you in anticipation until then, but... It involves lots of speech data, and some text-to-speech, and local languages.

**Chris Benson:** And for any listeners who happen to be in the Chattanooga, Tennessee area, North of Atlanta, and wanna catch Daniel and I - we're gonna give a talk at the Project Voice conference, and we're also gonna be recording some episodes there... So we would love to see you there. If you happen to listen to us, come up and say hi.

Well, I am pretty excited about today. We have a guest that I already have quite a bit of knowledge about. We have some work between our company and his organization. With us today is Greg Allen, who is the chief of strategy and communications at the U.S. Department of Defense's relatively new Joint Artificial Intelligence Center. Welcome to the show, Greg.

**Greg Allen:** Hey, thanks for having me.

**Chris Benson:** Yeah, I'm pretty excited about it. You guys do some super-cool stuff, so I am really happy to share that with our listeners. I've been looking forward to doing this for a while. I guess if you could just start us off kind of telling us a bit about yourself and your background, how you got to this point, and then after that we'll dive into what the Joint Artificial Intelligence Center does.

**Greg Allen:** Sure. Well, as you said, I'm the chief of strategy and communications here at the Joint AI Center, and I came here from a variety of backgrounds, really. My primary professional experience has been in corporate strategy work, and I did that both as a management consultant, and then also working in the corporate strategy offices of a variety of commercial technology companies.

But after a while, I was working on some AI strategy projects and ended up doing a piece of work for the Intelligence Advanced Research Project's activity; that organization is called IARPA. If you're familiar with DARPA, this is the sister agency that covers the intelligence community of DARPA. My report there was titled "Artificial Intelligence and National Security", and it was essentially going through the different aspects of AI technology, how it was changing over time, and elaborating on what the likely implications of that would be for different areas of national security.

**Daniel Whitenack:** \[04:12\] What years was this around, in terms of how things were developing?

**Greg Allen:** Yeah, this report came out in 2017, and I was working on it for the entire preceding year.

**Daniel Whitenack:** Gotcha.

**Greg Allen:** So if you're familiar with the Obama Administration White House's reports on artificial intelligence that came out in October 2016, the origin of this was that there was an additional report that they talked about writing, on AI and national security, but ended up punting on it and deciding "Oh, somebody will get to that later. We should focus more on the workforce and the economic and the research and development impacts of AI."

So the head of IARPA at the time, Jason Matheny, asked me "Well, rather than wait, why don't we have you as sort of an outsider take a first stab at this report that was not written?" So it was on behalf of IARPA, but it was ultimately published through the Harvard Belfer Center for Science and International Affairs.

After that report came out there was a great deal of interest from the U.S. National Security community, and I ended up joining the Center for a New American Security, which is a think tank in the Washington DC area, and doing a lot of analysis and pro bono advisory work to the Department of Defense.

So when they ended up standing up the Joint Artificial Intelligence Center, the individuals who were standing up that organization asked me if I would be willing to help out. Of course, I jumped at the chance. It was a very exciting opportunity.

**Chris Benson:** Very cool. And just to call out a couple of acronyms - I know you described IARPA, you also referenced that by talking about the intelligence side from DARPA... Listeners who are not familiar with it may remember that DARPA is the Defense Advanced Research Projects Agency, that started the internet. So if you're not familiar with this already, that's probably where you would have heard of DARPA, and IARPA, its sister agency for defense.

I know that JAKE - and I should say, JAKE refers to the center that you're at, the Joint AI Center at the Department of Defense, and we call it the JAKE for short... So I know it is relatively new, you guys just came into existence in the middle to late part of the year in 2018; if you could start off by telling us what is the JAKE, and kind of describe its mission and its budget, and why is it there.

**Greg Allen:** Sure. So the Joint Artificial Intelligence Center was established as the Department of Defense's center of excellence for AI technology. It was officially stood up in parallel with the release of the Department of Defense's AI strategy. So that document was released in the middle of 2018, and it was released publicly in the unclassified summary in February of 2019. So a bit of a gap between when the strategy was finished and when it was released publicly... But ultimately it's out there, you can read it on the internet.

So the DoD AI strategy that came out in the summer of 2018, what it says is that the Department of Defense recognizes the strategic importance of AI technology, and it also says the Department of Defense wants to pursue advances in AI technology, basically for military advantage. So the basic reason that we're interested in most technologies.

That document said that we were going to create a new organization called the Joint AI Center, which would be the focal point of the implementation and execution of the DoD's AI strategy. So maybe I'll start by talking a bit about the DoD AI strategy, and then I can get into the specifics about what the JAKE is doing to make good on that strategy.

**Chris Benson:** That sounds fine.

**Greg Allen:** \[07:47\] The DoD AI strategy has five pillars. These are "Deliver AI capabilities for mission impact", "Scale AI's impact through a common foundation", "Cultivate a leading AI workforce", "Engage commercial industry, Academia and international allies and partners", and "Lead in military ethics and AI safety." Those are the five key pillars of the DoD AI strategy.

The JAKE is the focal point for each of those pillars, but we're especially interested, at least in the near term, we have been especially interested in delivering AI capabilities for mission impact. This is a little bit of how we are structured as an organization - it's quite common in commercial industry for AI organizations to separate into who are the people who are actually developing, and implementing, and executing AI capabilities, and then who are the folks who are building the infrastructure, the platforms, the tools to enable that other group.

So there's a separation between your data scientists and your data engineers, and similarly, a separation between your sort of AI capability developers and your AI infrastructure and platform developers. And that is a distinction that is recognized in the DoD AI strategy, and is also recognized in the organizational structure of the JAKE.

So we have our mission initiatives, our national mission initiatives. These are specific projects that we're going after because we believe that they have a lot of the features to allow for success in AI development. Some of these projects are - I'll just list off a few: humanitarian assistance and disaster relief, predictive maintenance, cyber-security, intelligent business automation, war fighter health, and joint war fighting.

The common approach to how we identify projects and select them to go after them are "What are the features that we believe lend themselves to success in developing AI capabilities?" This is areas such as "Is there a relevant dataset that you can use for training your machine learning algorithms? Do you have access to that data? Is it of sufficient quality?"

The second thing that we're looking for is "Is there mature AI technology in commercial industry or Academia that could be used against this problem?" The third, and perhaps most importantly, is "Would there be mission impact if you did succeed at building this thing that you are setting out to build? Would anybody actually care?"

And the fourth criteria is "Do we have access to end user partner organizations who would be even willing to test our capabilities as they are being developed in an iterative basis?" User feedback is critical for any software development effort, but we believe that iterative user feedback is especially critical for success in developing AI programs.

So if you have those four criteria as a recipe for success, then you have a shot at being one of our mission initiatives, and those are the ones that we're going after right now.

The second big chunk of our organization is related to - as I've mentioned before - infrastructure and platforms. Our infrastructure and platform team is developing what we're calling the Joint Common Foundation, and this is an environment that lowers the barriers to entry to develop machine learning and AI capabilities in the Department of Defense. As you can imagine, the Department of Defense is a pretty significant target for hacking and adversarial intent just in general... So when we're developing software, it's critical that we do that in a secure environment... But at the same time, a lot of these security processes can sort of slow down the development of software. So that's why we're developing the Joint Common Foundation.

This is an infrastructure environment that has pre-cyber-hardened tools that are the same sort of machine learning development frameworks that you might want to use in commercial industry, but they're adapted to be compatible with DoD cyber-security policies, they're containerized, so that they run in cloud environments at reasonably high performance levels... And that combination allows you to develop software quickly, and get it into the hands of users and testers in a reasonable timeframe, but also do so in a way that takes into account the very significant cyber-security risks that any significant DoD undertaking faces.

**Daniel Whitenack:** \[12:21\] Yeah, I have a question there around that sort of flow from what frameworks and software is used in industry, to what you have to develop on. Are you involved very closely in, for example, the TensorFlow and PyTorch communities, and do you have your own versions of those things that you run internally, or is it more taking frameworks like that and wrapping them around middleware and other things that give the protection that's needed?

**Greg Allen:** I don't wanna get into too much of the secret sauce, for security reasons, but the basic thinking there is that open source tools are popular for a reason. They work well, they have been tested by users who have pretty significant requirements and needs, and we want to make sure that when you're developing machine learning software in the DoD environment we don't want you to have to use baby software, or software that has been largely disabled because so many of the features were not approved...

So the goal very much is to give our communities of developers access to the same types of things that they would be using if they were doing so in a commercial industry environment, but doing so in a way that gives us confidence about the security of that operation.

In the commercial world, a lot of what we talk about in software development is what's called DevOps (development operations) and the sort of seamless figure 8 loop between those two, where you're constantly adding features, deploying those features, gaining feedback from your users on how those features are used, which informs how you might wanna modify them or come to it with a new batch of features, or overhauled software in more significant ways.

In the Department of Defense we have adapted that paradigm to dev sec ops, which sort of recognizes the different security requirements that you might have at each stage in the development and operations process. So for the machine learning world, some of this is relatively uncharted territory, which makes it exciting, but we're finding that a lot of the value that we can add is I'm just taking commercial and academic and open source tools and adapting them to the national security use case.

**Chris Benson:** Gotcha. One of the things I'm curious about is - you know, the very first word is "joint" in the organization's title, and you end up, as you described already, working with all these different partners; some are from industry, like the company I work for, some are academic, various universities that are doing great work in AI... Obviously, you work with the various branches of the military, and they obviously have their own initiatives in AI... Could you talk a little bit about what those different types of interactions look like, both with industry, how you support it, what you're asking from it, as well with the academic... And also, what is the division of responsibility that the JAKE has with the various service-specific laboratories that do work in AI, in their own specific missions - what do all of those different relationships look like to you?

**Greg Allen:** Sure. Starting with the last part of your question, which is how we interact with the service laboratories - and I'll add to the service laboratories also an organization like DARPA. In general, these laboratories - the Naval Research Laboratory, the Airforce Research Laboratory, the Army Research Laboratory and so on - are primarily focused more on advancing the state of the art in AI, and dealing with situations where the existing state of the art is not a good fit for military requirements.

\[16:07\] That's a very important job, but it's a bit different from the job of the JAKE. We are interested in problems that we can go after, where technology that is available in commercial industry or Academia today, as state of the art as it currently exists, is a reasonably good fit for military needs.

DARPA and service laboratories are focused more on areas where some additional research and development is needed in order to get the technology to a level of maturity where it can be useful for DoD needs.

The way we view it is if your problem is the kind of problem that can be solved in 0 to 5 years, you're probably a better fit for the JAKE. If your problem is the kind of problem where it might require 5 to 20 years of research and development to be solved, then it's probably a better fit for the service laboratories in DARPA. And that's not a perfect summary; of course, each of the service labs and DARPA also work on some near-term projects, as needed by necessity, or some specific competencies and skills they might have... But to a first approximation, that characterizes the division of labor between the two organizations.

And the fact is, DARPA and the service laboratories have been doing amazing work and continue to do amazing work, but the JAKE was kind of stood up to solve a different problem. Not the problem of advancing the state of the art, but the problem of adopting the state of the art, as it exists in commercial industry and Academia... Which gets to the second part of your question, "How do we engage with commercial industry and Academia?" The obvious answer is "early and often."

We have, I would say, an unusually aggressive outreach program. We have one staff member who is collocated with the Defense Innovation Unit in the San Francisco Bay Area, and full-time his job is to go out, meet with companies, meet with venture capitalists, identify what is going on in the tech space that might be relevant to the types of problems that the military has, and the types of problems that the JAKE is either trying to tackle, or might be interested in trying to tackle in the future.

The organization that he's collocated with, that I mentioned, the Defense Innovation Unit (DIU) - similarly, that's an organization whose primary priority is improving the Department of Defense's relationship with commercial industry, and the commercial technology industry especially.

There's a variety of different contracting mechanisms that are designed to make it a little bit easier to do business with the Department of Defense. Folks who have not been paying close attention would probably remember that it's often very lengthy and process-intensive, and there's a lot of bureaucracy to do business with the Department of Defense, and that's very much something that the DoD has been working on quite intensely to reform... So DIU in particular has pioneered the use of some - not new, but comparatively unfamiliar contracting and acquisition techniques such as other transaction agreements.

These allow you to get on contract quicker, get money flowing quicker, and actually start doing work quicker. And to that, JAKE has also been an early adopter of commercial solution openings, which is sort of another contracting mechanism. The important feature of these mechanisms is, again, it makes it easier to do business with commercial technology companies, and it makes it easier to do business with smaller companies who can't always afford the overhead required to do business with the department of defense for our bidding process and our proposal writing process.

**Daniel Whitenack:** \[19:55\] I'm coming at this conversation as someone who is not deeply involved in the defense world, but one of the things that was coming to my mind as we entered into the conversation was I was wondering how much of the strategy that you're putting into this, that the DoD is doing, is driven by what other maybe potential adversaries are doing in AI? What is the landscape of AI and defense look like around the world, and how has that impacted the priority we put onto it, and then how we go about developing that technology?

**Greg Allen:** Sure. I would start by saying that two countries are specifically named by the National Defense Strategy, which came out in 2018. Two countries are specifically named as strategic competitors. And that is Russia and China. These are countries who have interests that are identified as being contrary and in contradiction to (in many cases) the interests of the United States, and also who have oriented their national security establishments in competition with the United States. And that's not a very surprising statement, I would say, to most.

When the National Defense Strategy came out, it was sort of putting on paper the sorts of things that a lot of United States leaders had been saying, and frankly that a lot of leaders in the two countries I just mentioned were also saying. So that's sort of the basic backdrop of strategic competition.

Into artificial intelligence - of course, this is the national security world we're talking about, and the military we're talking about, so we remain quite interested in what is going on around the world, and we would be silly not to be paying attention to that.

I think, speaking about China and Russia each in turn - China's AI strategy, which came out in 2017, specifically identifies that they see AI as a transformative technology in many different areas, including in national security. It also identifies AI as a leapfrog technology. The term leapfrog is interesting in this use case, because it is describe elsewhere by Chinese military thinkers and strategists as really sort of describing their belief about what AI technology will enable their military, compared to the United States' military.

If you can think about the example of cellular telecommunications infrastructure in developing countries, notably many developing countries in Africa - this is the canonical example of a leapfrog technology. There were many developing countries in Africa who did not have well built out landline telephone infrastructure, and yet this was no disadvantage whatsoever in adopting cellular telephone infrastructure. They just skipped the development step of landline telephones and went straight to cell phones. That skipping is referred to as leapfrogging.

In our competition with China in military technology, there are many things that we are quite good at, that they have a very hard time with in the technological sense; things like jet engines, things like aircraft carriers - these are really tough, really complicated technologies, that we as a country tend to be quite good at, and that China as a country has historically had a lot of difficulty with.

So when they write about AI technology, they're saying "Well, if we could really develop an interesting advantage in AI, perhaps we could leapfrog the United States", which is to say "Perhaps we would not have to catch up to them in aircraft carriers, or catch up to them in jet engines, because we will shift the basis of competition." And Chinese military thinkers often write quite optimistically about China's opportunity to compete with the United States technologically in these terms. So we would be remiss if we were not paying attention to that.

\[23:52\] The second thing I'll say is that, as pointed out by the Secretary of Defense at the National Security Commission on AI, in his speech at that commission - there are many Chinese weapons manufacturers who are currently selling on international markets weapons systems advertised as being autonomous, meaning they can make their own decisions and act independently, and also having that full combat autonomy, meaning they can actually be responsible for the use of lethal force.

So that's what China is sort of up to today, at least in terms of what they're advertising on the international market.

Russia is similarly very interested in AI technology. One quote that everybody really paid attention to was in September of 2017 when Vladimir Putin said that whoever leads in AI technology will be the ruler of the world. And I think Russia does not have a very clear path to leading in AI technology, whereas the United States and China regularly top the lists of who is publishing the most AI research papers annually, and who is publishing the best AI research papers annually, and similarly lead in measurements about who is attracting the most venture capital for AI companies.

Russia is pretty low on all of the rankings that I just mentioned, so I don't think that Russia has a clear path to leading in AI technology. Unfortunately, they do have a reasonably clear path to leading in the weaponization of AI technology. I think this is a pretty similar story to the internet. Russia was not a leader in any of the foundational technologies for computer networking or the internet, and yet nevertheless Russia developed a very advanced and broad and deep military cyber capability. So similarly, I think Russia is looking to be a leader in the weaponization of AI, just as they were a leader in the weaponization of the internet.

In terms of what they're doing, it's a lot of what you would expect. The social media disinformation campaigns, and influence operations that Russia has been in the news a lot for lately - they are also interested in bringing in more advanced machine learning and AI capabilities to these operations.

And then secondarily, combat robotics is an area that Russia has devoted a lot of investment, and has shown a lot interest, and they're experimenting with a lot of their military robotic systems operationally, literally using some of these systems in Syria. So both Russia and China are moving out aggressively to incorporate AI capabilities into their military.

I would say in terms of the United States' response, our intent is to lead the world in the military use of AI for the benefit of United States' national security. I don't think we're so much obsessing over each individual capability that comes out of China or Russia, so much as we are looking at the broader landscape. I think AI is a general-purpose technology, the way electricity is a general-purpose technology. It's useful for things like radio, but it's also useful for light bulbs. Similarly, computers are useful for just about everything, and we similarly think that AI ultimately has a lot of application-specific opportunities for us. So we're interested in leading in AI, in the broad sense.

**Daniel Whitenack:** And would I be correct in saying then that of course there are certain things that even me not being involved in the defense industry at all -- like, I'm aware of, for example, China using facial recognition technology, and Russia interfering in elections and doing behavioral type of stuff, like we talked about... So would I be correct in saying that for every different type of AI model you can think of, whether that's natural language processing, computer vision, object recognition, trend analysis, forecasting... There's probably all sorts -- because this is general purpose, like you say, there's probably a way to weaponize all sorts of those type of models. It's not that facial recognition is an issue, it's a whole, varied range of things that could be at play.

**Greg Allen:** \[28:07\] Yeah, I think machine learning is just a new way to create software. Traditionally, software required every line of code to be typed out by human hands. But suddenly, there's been a vast improvement in this field of artificial intelligence known as machine learning, from which - as I'm sure most of your listeners already know - we can program, or to a certain extent the system can program itself based on what it learns from data.

So that general truth about the rise in machine learning software - well, that's useful for most of the places where software is useful, which is to say absolutely everything, whether that everything is a missile guidance system, or soft of back-office applications like word processing.

I think over the long term - and I do wanna emphasize long term, because while some of this transformation will be quick, some of it won't - we expect machine learning and AI to be useful for just about everything, from the most backwater parts of the back office, to the front lines of the battlefield.

**Chris Benson:** One of the things that you were talking about a moment ago was our adversary's perspective on -- they're kind of advertising AI in a lethal context, and stuff... I'm assuming that the U.S. Department of Defense has a policy out there regarding how we think about AI being incorporated into lethal force scenarios... Can you talk about that? What is the American viewpoint on that question?

**Greg Allen:** Sure. Well, I think the first thing I would point out is that the Department of Defense abides by the law of war. And for folks who are not familiar with the national security context, the law of war might not be familiar to them. These are literally legally-binding principles that are enshrined in documents such as the Geneva Convention, but also have flow-down requirements to DoD policy, DoD training, rules of engagement in different scenarios...

So the overarching thing which guides all U.S. conduct in military operations is the principles underlying the law of war. And these principles really get to when is the use of force appropriate, when is it acceptable... And let me just list some of the key principles underlying that. Military necessity - was the use of force the only way that you could achieve the objective that you had to achieve? Proportionality - if somebody slapped you in the face, did you respond with a nuclear weapon? Well, then that would not be a proportional response. Distinction - did you make every effort to prevent harming civilians, and only harming enemy military combatants? Humanity - did you use any means that violate the principle of humanity? And of course, abiding by the military principle of honor.

Those ethical principles - the Department of Defense has been guided by those, and these are actually legally binding. You could be Court Martialed for failing to abide by these principles. But those have been guiding the Department of Defense for decades now.

To that, there are two things that are comparatively new. The first is the Department of Defense directive 3000.09, which relates to the use of autonomy in weapons systems. That was a policy that was released in 2012, and was widely praised at the time, and that policy was renewed and essentially made permanent in 2017. Basically, neither Russia, nor China have any kind of policy comparable to 3000.09, which I think says a lot.

Then there's also what came out just recently, which is the Defense Innovation Board's principles for the ethical use of AI.

**Break:** \[32:11\]

**Chris Benson:** Greg, I know one of the really hot and important topics these days in AI is the ethical concerns, ethical principles of how you apply AI and what that means... And I know both in the defense industry, as well as in lots of different commercial industries, that has become a big thing. A while back we saw Google and Microsoft and other large organizations releasing public principles and frameworks about how they thought about this.

I know in the defense industry there is an organization made up of a lot of experts from outside the defense establishment itself. It's called the Defense Innovation Board, and they had a fairly substantial conversation around AI ethics and principles, and recently released a document that covered a lot of that. I am told that you were pretty involved in that process, as was the JAKE at large... I was wondering if you could talk a little bit about your involvement, what it means to you, and actually go through what those principles that you guys worked on are, and how that relates back to the JAKE and what the DoD will be doing going forward.

**Greg Allen:** Sure. The Defense Innovation Board is a federally-appointed advisory committee; so while they are not actually a part of the Department of Defense, the Federal Government has sort of given them an official relationship whereby they can advise the Department of Defense. And when we've released the DoD AI Strategy in the summer of 2018, it was immediately obvious to us that the ethical considerations of AI technology was something that we wanted to take very seriously, and that we wanted to understand very thoroughly.

The Secretary of Defense asked the Defense Innovation Board to run a study about the ethical implications and AI and recommendations for principles for the Department of Defense's use of AI technology. They ran a very robust process. They were working on this for 15 months. They held three public forums at leading universities in the United States, they ran multiple rounds of open calls for comment on the subject from expert communities and also just the general public, and they ended up talking to hundreds of not just leading AI researchers and leading industry types, but also ethicists, lawyers, and folks with perspective from a lot of different industries and walks of life.

So this was a lengthy, robust process, and the report that they released on October 31st, 2019 reflects their best judgment at the intersection of ethical obligations, the requirements of the domain of national security and the mission of the Department of Defense, and then the nuances of AI technology.

They're an independent organization, helping out the Department of Defense on these issues, so I was not involved in the actual writing of these principles. My only involvement was giving advice on how they could structure this to maximize the benefit from the Department of Defense's perspective as a consumer... So helping them craft actionable recommendations and thinking through how to write their recommendations in a way that would actually be compatible with the DoD bureaucracy and the DoD process.

\[36:12\] But what came back ended up being really quite substantive, and something that we take seriously here in the department, as now it falls to us to implement them, and also something that our allies, whether that be in Europe, or in Asia, or elsewhere - our allies have shown a great deal of interest in these principles as helping think through "How do we recognize the legitimate ethical concerns that the rise of AI technology raises, while also being able to move forward and use this technology in the mission of national security?"

So maybe I'll just sort of go through each of the principles that the DIB is recommending that the Department of Defense adopt, and we can sort of think about how the DoD thinks about these issues.

**Chris Benson:** Yeah, if you can kind of hit the six, and then dive in however you want to the dozen recommendations afterwards. So name what the six principles are and then talk about what those recommendations that came out of that, if that's okay with you.

**Greg Allen:** Absolutely. So the principles start with Responsible. This is that human beings should exercise appropriate levels of judgment, and remain responsible for the development, deployment and outcomes of AI systems.

The second is Equitable. The DoD should take deliberate steps to avoid unintended bias in development and deployment, of combat or non-combat AI systems that would inadvertently cause harm to persons. Third is Traceable. The DoD's AI engineering discipline should be sufficiently advanced that technical experts possess an appropriate understanding that the technology, the development process and operational methods of AI systems, including transparent and auditable technologies, data sources and design procedure and documentation.

Fourth is reliable. DoD AI systems should have an explicit, well-defined domain of use, and the safety, security and robustness of such systems should be tested and assured across their entire lifecycle within that domain of use.

And fifth and finally, Governable. DoD AI systems should be designed and engineered to fulfill their intended function while possessing the ability to detect and avoid unintended harm or disruption, and for human or automated disengagement or deactivation of deployed systems that demonstrate unintended escalatory or other behavior.

**Daniel Whitenack:** Yeah, there's a lot of jargon there... I would be interested in hearing how those play out to real sorts of scenarios, or maybe the sorts of scenarios that were in people's mind when they were thinking of those.

**Greg Allen:** Sure. I think the overarching two things that I would say about these principles are 1) that the Department of Defense's ethical principles related to the use of force are those enshrined in the law of war - military necessity, proportionality, distinction, humanity and honor. That really gets to the ethical question of what is the ethical use of force.

So the DIB's principles are answering a different question, which is assuming that you are abiding by the ethical principles that govern the use of force, how do you have confidence that your technology will be able to implement your desires? Today it is ethical to operate a commercial airline. In 1903 it would not be ethical to operate a commercial airline for passengers, because aircraft technology - I'm thinking specifically of fixed-wing propeller aircraft - was not ready, it was not safe enough for you to responsibly offer that on the commercial market.

So part of the ethics of the technology relate to matching its current use to the maturity of that technology and your processes for understanding that technology and ensuring that it is both robust and safe. That gets to the DIB's approach to ethics and how it complements the ethical principles that are enshrined in the law of war.

\[40:09\] If you say that you're going to have AI systems that abide by the law of war, how do you know that, and how do you prove that, and how do you have the relevant processes to ensure that? That's what the DIB AI principles are going after. Not what is the right or wrong way to use force; that question is best answered by the principles enshrined in the law of war. But if you are trying to do the right thing, how do you have confidence that your technology is going to allow you to do the right thing?

So that's about having the kinds of testing, evaluation, verification and validation procedures, so that we can rigorously test our systems to show that they're going to perform as intended. That gets to the training of your operators, so that they know that this is an appropriate time to use this technology, and this is an inappropriate time to use this technology.

Keeping with the aircraft analogy before, if your aircraft is only rated to fly at 40,000 feet, do not fly it at 80,000 feet. So that gets to what is the appropriate domain or mission use case for a technology, and only using technologies for applications for which they have been appropriately and rigorously tested. And I think this is really valuable. We see AI ethics and AI safety as intimately interconnected, and that's reflected in our approach.

I think one of the other things that the DIB study very helpfully pointed out is that the Department of Defense is not starting from scratch when it comes to reliability of incredibly complicated technologies operating in circumstances with life and death consequences. The Department of Defense stuff uses technology in applications that are incredibly complicated, incredibly difficult. And not only that, there's potentially an adversary out there, who is trying to make you fail, in addition to the inherent difficulties of the technology,

**Chris Benson:** That's a good point.

**Greg Allen:** And we have a lot of experience doing really extraordinary work in that regard. One example that I like to point out is a system called GCAS. This is something that exists in the fighter aircraft that the United States uses. If you know anything about what it's like to be a fighter pilot, you know that they undergo some really intense acceleration periods, and those acceleration periods can cause the pilot to blackout or to redout.

And part of the autopilot of the system, which is a software system mixed in with hardware, developed here in the United States, can automatically detect if the pilot has blacked out, and then fly the plane level and straight, so they don't crash into the ground... Fly the plane level until the pilot regains consciousness, and then transfer control back to the human.

So it's not as though the Department of Defense is starting from scratch here. A lot of the techniques and processes and policies that we have rolled out related to traditional software will serve us very well in an era of AI-powered software. And I think with the DIB's long-form report - this is a 70-page report; it goes into quite some depth - a lot of what it's helpful for is pointing out "Here's where your existing processes kind of already do what you need to be done, and here are some areas where AI really does change the game, and you need to go through the hard work of improving upon these policies and processes."

**Chris Benson:** \[43:44\] Absolutely. Just as a comment to finish that up, I wanna note that for the F-16, that system you described is actually a Lockheed Martin system. I end up talking about that with folks quite a lot. I really appreciate you diving into that, because that's a question that so many people have in terms of the ethical, and talking about lethal force policy and how you guys think about it. Explaining how it fits into the law of war is very helpful as a framework.

I guess as we kind of close out the show, I wanted to just kind of understand - as the JAKE is going forward over the next few years, and we're in this industry that is moving so fast, with all of the research, and the new algorithms, and new techniques, and the compute that's racing along, how does the JAKE look at AI-related technologies going forward? What kinds of things draw your attention and make you sit up and go "That's something that has use cases that we particularly care about"? What does that look like as you're seeing new things come across your screen?

**Greg Allen:** Sure. I think the first answer is it's much of what you would expect. There have been some really exciting developments in computer vision and natural language processing. These are two areas in which the performance of machine learning systems today is just orders of magnitude better than where we were a decade ago. And I think we still have not actually finished harvesting those gains.

There are many parts of the Department of Defense where a lot of people's time and energy is devoted to applications where machine learning technology is already ready to start helping them do their jobs. So I think the next couple of years will continue to be focused on adopting the technology that already exists, and is already pretty capable and powerful. I think over the longer term there are some really exciting things coming down the pike. Of course, I think the first folks to get to play around with these technologies will be in DARPA, in the service laboratories, who - as I said, their mandate is a bit more focused on advancing the state of the art in AI technology. But these are things like the increasing relevance of transfer learning. ML systems, if they learn something in one domain, can that help them not start from scratch as they look at related problems in perhaps different datasets.

So for example, I think all of your listeners are probably familiar with the AlphaGo example. The AlphaGo system was literally better than the world's best Go player, but that system not only could not play chess, it could not play Go on a different-sized Go board. Some Go boards are 16x16, some are 32x32 etc. And so it really had no ability to apply what it had learned about Go and make that a better player for playing chess. So that transfer learning capability was not present in AlphaGo.

There have been some really interesting research results that indicate that researchers are making more and more progress at tackling the transfer learning problem. That could be really useful to DoD. If we're thinking about analyzing satellite images from a desert environment, might that actually make our algorithms perform better if they are also looking at images in a seaborne environment, for example?

That ability to combine what the machine learning system learns from different domains is something that I think is just gonna have a ton of benefit for us.

**Chris Benson:** Alright. Greg, this has been a truly fascinating conversation. Thank you so much for coming onto the Practical AI podcast, and taking us through how AI integrates into the world of the DoD and defense at large. I really appreciate it, thank you for coming on.

**Greg Allen:** Thanks very much for the opportunity. It was great to talk with you.
