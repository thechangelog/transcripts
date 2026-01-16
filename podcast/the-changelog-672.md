**Adam Stacoviak:** Well, friends, we're back with a good friend of ours... It's been, Sid, way too long.

**Sid Sijbrandij:** Way too long, for sure.

**Adam Stacoviak:** Way too long. The last time we talked to you, the last time I talked to you at least, was when you were leading GitLab to IPO. This is pre-IPO. This is in 2022... It was speculative. That was obviously the North Star for you. You've accomplished that mission... You've had a cancer journey, you've had an investor journey, you've had the American Dream journey... And kind of back again, in a way. So welcome back to the show. It's been way too long, good to see you again.

**Sid Sijbrandij:** My pleasure. Thanks for having me. Looking forward to this.

**Adam Stacoviak:** And when we look at your story from, some would say this shadow of GitHub from way back in the day, to now, how do you personally reflect on your journey? ...I would say in tech, but also as a CEO, as just a normal person, as an investor... How do you reflect on this long journey of yours?

**Sid Sijbrandij:** Well, it's been amazing kind of living the American Dream. 2015 I came to the US, we raised money for GitLab, and we set our sights on growing the company, becoming a public company, and then six years later we took it public... Which is amazing, and we were very fortunate to--

**Adam Stacoviak:** Six years to public, huh?

**Sid Sijbrandij:** Yeah. Very proud of --

**Adam Stacoviak:** That's some speed...

**Sid Sijbrandij:** That's speed.

**Adam Stacoviak:** And you were very much a leader too, with the way you opened the company, your open docs, a lot of the ways you hired, the ways that you showcased culture... A lot of that was even - not so much not in public, but you were very much a star of that. And then you were also a company that IPO-ed. That seems like maybe not the way it should be done, but it's obviously the way you did do it.

**Sid Sijbrandij:** Yeah, we tried to lead the company with a ton of transparency, and we believe that helped us be an all-remote company, but at the same time being super on the same page... And it's paid its dividends, both in coordinating us, hiring great people, but also getting customers excited about the company itself and how we \[unintelligible 00:05:45.20\]

**Adam Stacoviak:** Are you still involved in any capacity with GitLab?

**Sid Sijbrandij:** Yeah, for sure. I stepped down as exec chair last year -- or stepped down as CEO, and now became an exec chair, which means that I'm still an employee of the company. So I still have two engineers reporting to me, and we're taking on projects that I'm super-excited about. Right now we're working on adding observability into GitLab. So really, really exciting to work on that.

**Jerod Santo:** So when you left GitLab as CEO - you were CEO, correct? That's what you stepped down from, that position?

**Sid Sijbrandij:** Yup, correct.

**Jerod Santo:** ...it wasn't necessarily because you were done, or because you've done your thing and you're ready to get a mojito and go to the island... You actually had a health problem, a major health problem... I mean, a health crisis in many ways, around the end of 2022. And you've been on quite a separate journey, which is amazing to me, some of the details that you've gone through in order to be here today. We're very happy that you are here today. Can you unpack a little bit of what you've been through in the last three years, four years with regards to your health, and the journey you've been on to fight cancer?

**Sid Sijbrandij:** Yeah, for sure. So end of 22, one year after the IPO, I discovered I had bone cancer, a six-centimeter tumor grown from my spine... And we had to do surgery really quickly. I was in a lot of pain. And we removed the vertebrae and most of the cancer, and did a spinal fusion with a titanium frame, we did radiation, we did chemo... And I did my first Single Patient IND. Since 2017 I've invested in one other Y Combinator company, and over time that guy became my best friend. His wife became my wife's best friend. And every time he was fundraising, the investors wouldn't put any money in. And every time, I said "This doesn't make any sense to me, that they're reluctant to put money in. I'll finance the company." So over time, I became his biggest investor. And what he's doing is combining drugs with binders through click chemistry, allowing you to target different parts of the body. And when I became so very sick, he made a -- we asked for an exception to treat me with his drug. And we got that exception.

\[00:08:24.01\] And we did all the treatments. And then two years later, in '24, the cancer started growing again. And the doctor said "You're done with standard of care. There's no more treatment we have for you. Maybe there's a trial somewhere..." And I started looking around... I have a weird HLA type, which disqualified me from a few trials... And I have bone cancer, osteosarcoma, which is kind of a rare disease... So there wasn't anything for me. And it was my "Oh, s\*\*t" moment. Like "Oh, s\*\*t. If I don't move, I'm going to be dead soon." I had to step down as a CEO, because I needed to focus my full attention on this.

I started talking to anyone, traveling anywhere, I went to the medical conferences. I went as far as China to get scans... And I started doing maximal diagnostics, making my own treatments, doing treatments in parallel, and trying to scale that for other people.

And so that's been the journey I've been on in over this last year. It's been a lot of ups and downs, but also extremely interesting. And I've learned a lot, but I also think that there's a lot of things that could be better, and I'm trying to change those to be better, and making the path I've been on easier for other people to follow.

**Jerod Santo:** I understand the reasoning for parallel directions or testings, because you only have so much time before it's too late... And so I totally understand that. It seems like, as a software guy, you want to try to isolate and do one thing at a time, and then see if it works, and then do the next thing, versus having multiple factors. I suppose if it's working, it doesn't really matter which of the five or six is working, if it's working... But certainly, for reproducibility and for helping others you do want to be able to have some sort of result that you can come out of it. So tell me about the parallel side and some of the trials that that introduces, and how you're maybe solving those problems as you go.

**Sid Sijbrandij:** Yeah... If you want to be able to reproduce, you need to isolate the \[unintelligible 00:10:38.01\] So when I started doing parallel treatments, one doctor told me to my face "But what if it works? We won't know what would have cured you." And then I let that doctor know that I wasn't interested in finding what cured me... I was interested in getting cured.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** That's right.

**Jerod Santo:** Right?

**Adam Stacoviak:** "I'm not a research. I'm a real person."

**Jerod Santo:** That's right.

**Sid Sijbrandij:** The combination of treatments... There's very little incentive for pharma companies to kind of spend a billion dollars - it's now a billion dollars for a successful trial... To spend a billion dollars for an approved medicine to research a combination of drugs. So there's no incentive. So all you see on the market are these drugs taken in isolation. And doctors are reluctant to combine them, because it's never been done before. But if you look at the first principles, you can say "Hey, these treatments are probably okay to combine."

What you don't want to do is combine two things that both hit the kidneys, because your kidneys are going to be over capacity, and that's not good. So every time we combine treatments, I have for example a pathologist in my tumor board to look at like "Hey, can we combine these things?" And we also look at my own markup, including genetics, but also histochemistry, where you kind of -- we do color slides, and we do multiplexing, so we can color multiple things...

\[00:12:09.20\] For example, I told you I went to China three months ago, and I did that to get the first B7H3 scan available to me. And because of what we learned there, we were able to kind of change the development of one of the drugs I'm developing to remedy what we saw. We saw in China that I have higher B7H3 expression in the liver than any one of the 20 patients they saw before. And we decided to combine that medicine with something that's rarely expressed in the liver, so it's not going to destroy my liver going forward.

So what I'm trying to do is kind of be first principles about it, instead of kind of relying on evidence for the ability to combine, because that evidence - it doesn't exist, because no one has the incentive to do that.

**Jerod Santo:** Right.

**Sid Sijbrandij:** And most people die not because they run out of treatments, they run out of time.

**Jerod Santo:** So why China? Is it a technical thing? Is it a regulatory thing here? They're just more advanced in certain areas? Why did you have to go all the way there for this particular test?

**Sid Sijbrandij:** Yeah, so to be clear, most of my treatments and most of my tests are happening in the US, but Europe and China are also part of it. And what's remarkable about China - I found remarkable that I was the first... It was my first time traveling to that hospital. Within two hours, I was checked in, they formulated the diagnostic scan ingredients, they gave me the scan, they printed the results, they talked me through it, and I was outside again. I've not seen that speed in the US.

One other thing that's happening is that these hospitals have a lot of patients. So instead of running a trial at 10 different hospitals, where it's a lot of work to combine all these investigators and to train all of them, you can run it in a single hospital, the same hospital where the investigator is at, the researcher is at. So they have a much higher speed of running trials. And we're starting to see a giant shift in the literature of trying to do more trials, and making more medicines.

**Jerod Santo:** So where do you stand? How's your health? How are you feeling? How are you doing? What's the future look like?

**Sid Sijbrandij:** Yeah, I'm doing well. Right now we cannot detect my cancer, so that's great. It's a really good spot to be in.

**Adam Stacoviak:** That is great.

**Jerod Santo:** Yeah, that's a great spot to be in.

**Sid Sijbrandij:** Compared to a year ago, where it was growing, and we had zero treatments, today I have kind of a therapeutic ladder, as in like if things get worse, we'll escalate the medicine, and there's 30 medicines on it. So we have options now... And I'm continuing the development of 10 different drugs and diagnostics that make a lot of sense for me to have.

I've also started in the meantime six companies to scale treatments for other people; treatments that I've done, but also treatments I've not done, but just technologies we came across that we thought are underinvested in.

**Adam Stacoviak:** Yeah. Do you know what has made your cancer undetectable then? I know that you weren't being that research lab before, or that research rat before, but have you pinpointed what may have worked with these 10 different medicines you're developing?

**Sid Sijbrandij:** Yeah, for sure. I might have been one of the first people to do single cell sequencing as an individual patient, outside of the context of a trial. It's kind of a strange name, because you're not sequencing a single cell, you're sequencing thousands of cells, but you're kind of -- you're able to see the genetic markup of each cell, and you're able to see what the tumor is looking like, which cells are in there, how do they behave, and what's their genetic markup. It's an incredible, powerful technology.

\[00:16:10.01\] We compared that to an atlas of kind of what bone marrow should look like... We zoomed in, we were able to kind of zoom in on the cancer cells. And one thing we noticed is that they had a lot of fibroblast. Fibroblast is kind of scar tissue. And we were aware of a treatment in Germany, an experimental treatment that has an FAP binder that binds to fibroblasts, and then the other side you put a radioactive element. Lutetium or Actinium.

And I did two treatments there, with incredibly good results. First of all, no side effects. I couldn't detect any. And we saw 60% necrosis, and 20% shrinkage, which - considering it was only two treatments, that was a great result. And my cancer is in my back near my spinal cord. Because of the shrinkage, it detached from the spinal cord, allowing a really talented surgeon to go in and go after it, and remove most of it surgically, which wasn't possible before.

**Adam Stacoviak:** And this is because of what attacked the scar tissue... What was the name for the scar tissue? Is it because you were able to pinpoint that, and allow it to detach from the scar tissue?

**Sid Sijbrandij:** Yeah, so what we were able to do - because of the scar tissue, we had a binder for that, called FAP; or this experimental treatment in Germany had that. And you combine the binder with the radioactive stuff.

So a lot of drugs, you just give them to the entire body, like a standard chemo drug. It's devastating. This drug is also a really nasty thing. Lutetium is radiating you from the inside. I was 10 times as radioactive as an airplane at altitude from the outside, let alone what was happening inside of me.

**Jerod Santo:** Oh, wow.

**Sid Sijbrandij:** They keep you in isolation, because --

**Adam Stacoviak:** Yeah, you can't be around people.

**Sid Sijbrandij:** You can't be around people. But because it was on this FAP binder, it targeted my tumor especially. And there's also a little bit of risk, for example your loss of taste and smell, but I had no side effects there. So it was very specifically bound to the tumor tissue, which is just amazing. Most cancer treatments are way worse. And yeah, enabling surgery was a big deal. Like, if it's right up against the dura, your spinal cord, that's not great. But in this case, it was detached from there.

**Jerod Santo:** That's amazing.

**Sid Sijbrandij:** Yeah, it was really great.

**Jerod Santo:** How long were you radioactive?

**Sid Sijbrandij:** You're radioactive for kind of a week, but only two days in isolation. And then you get a letter, and then you walk at the airport... Maybe you've seen those things in the US now, you walk into the airport and there's kind of a black thing... Guess what? Beep, beep, beep...

**Adam Stacoviak:** \[unintelligible 00:19:12.09\]

**Sid Sijbrandij:** We once had three people with scanners around us, and they had to call kind of Washington, because their sensors were showing plutonium, which would not be good.

**Jerod Santo:** Wow...

**Sid Sijbrandij:** But luckily, it was the Lutetium after all. But they had to have a scientist in Washington \[unintelligible 00:19:32.23\]

**Jerod Santo:** You were a person of extreme interest there for a little bit.

**Sid Sijbrandij:** Yeah. As soon as they knew it was me and not my luggage, they were super-chill about it.

**Adam Stacoviak:** They were super-chill. \[laughs\] That's hilarious.

**Jerod Santo:** Wow.

**Adam Stacoviak:** \[00:19:49.01\] Can you talk about the type of cancer, the sarcoma? There's like 70 different types. And I ask this question because I have a dear friend of me and my wife's who passed away probably 14 years ago, and she had sarcoma in her lungs. She was actually studying in Houston, which is a very popular place for cancer research, at least here in the States... It's one of the capitals of cancer research. And she was studying to become a doctor in this field. And actually, not through her lab time or anything like that, but she came to actually get the cancer. I don't know how to describe getting cancer, if it just develops or if it grows, or what actually gives the cancer to you... But she developed the same sarcoma cancer that she was studying. And it was just really, really...

**Sid Sijbrandij:** Bizarre.

**Adam Stacoviak:** Yeah, quite bizarre. Like, there was no real connection there. The same doctor that she was studying under was her doctor during her process. She obviously ended up passing away... It was about a year, maybe a year-ish. Devastating to our life and our friends, but... Can you speak to the sarcoma type cancer and what that type of cancer does or does not do? Do you know much about it? Obviously, you probably do, but there's 70 different types, and I'm not even that familiar, except for I know that she had sarcoma cancer, and you mentioned you have a version of it as well.

**Sid Sijbrandij:** Yeah. I'm not a doctor, this is no medical advice... I know very little about that type of sarcoma. I do know sarcomas are genetically pretty diverse, so there's a lot more studying to be done. For example, the standard genetic reports showed TFE3 amplification. But when we really started digging, it wasn't true. That wasn't the driver at all. So because of all that copying of the genes, it's harder to analyze... But there's also more kind of special things about it that allow you to do more targeting.

And you mentioned Houston - big fan. Houston Methodist is especially great here. And I know very little about lung sarcoma. What I do know is that for bone cancer, the biggest risk is that it spreads to the lungs. If you have these cells going on the loose, the first place they'll likely end up are your lungs. Also because your lungs are very tiny vessels, so the cells get trapped there the fastest, but also because it's kind of a similar cancer that can grow there.

So we were watching for that... And at a certain point, I did kind of a regular PET scan, where you look for activity that is out of the ordinary... And I remember vividly, I was talking with my direct reports, and I get a message, a text from my GP. And he says "It's positive, not subtle." And I'm like "It's positive. Okay, great." And I'm like "Oh, s\*\*t, no! Positive in a medical setting, that means something else. It means positive for cancer." And not subtle - that sounds bad.

And I opened up the report, and I read my death sentence. It had spread to 50 sites in my lungs. My lungs were lighting up like a Christmas tree. And the radiologist gave an undifferentiated diagnosis - definitely cancer, spread to the lungs, way metastatic. 50 places means \[unintelligible 00:23:29.14\] There's no way to do it with surgery.

And so I walked out of the room, collected my thoughts for 10 minutes, called my wife, called in my CFO, CLO... I'm like "This is the situation. What do we do? Are we gonna tell, or not?" I decided to tell. And we all took a long walk together, my doctor started coming in, "So sorry for you. So sorry for you. So sorry for you." And then the last doctor basically to chime in was like "Yeah, 60% chance this isn't cancer."

**Jerod Santo:** \[00:24:17.20\] Say what...?

**Sid Sijbrandij:** I give a call, like \[unintelligible 00:24:19.17\] what do you see?"

**Jerod Santo:** \[unintelligible 00:24:21.13\] Yeah.

**Sid Sijbrandij:** He's like "Yeah, the lymph node pattern, how it spreads - this doesn't seem like lung cancer to me." And this is a guy who've run the most osteosarcoma trials, or the most sarcoma trials in the nation. So he's just seen so many patients, and seen so many people who this happened to. So, okay... So I went to -- now I was a dog with a bone, and within a few hours we cleared it up that this was the remnants of COVID.

**Jerod Santo:** Oh...

**Sid Sijbrandij:** Because we were so afraid of this happening, including the radiologist, everyone had a bit of a tunnel vision. But quite the experience to tell your team you're a goner.

**Adam Stacoviak:** Yeah. And then the exact opposite when you're like "You know what? I think I made a mistake... It was remnants of COVID, and not --"

**Sid Sijbrandij:** \[unintelligible 00:25:21.25\]

**Adam Stacoviak:** Because that's exactly it. Like, it went to her lungs and brain quickly; very, very quickly. Those are the two places that it tends to spread. So it may begin lower in your liver or in your back, like you were, but it spreads quickly to other places and it sort of takes you quickly if it's not COVID, if it's something different.

**Jerod Santo:** Right. Probably the happiest COVID diagnosis of all time, wasn't it?

**Sid Sijbrandij:** Yeah.

**Jerod Santo:** \[laughs\] Thank God it's COVID.

**Adam Stacoviak:** For sure.

**Sid Sijbrandij:** I wasn't super-happy about the diagnosis, though. That radiologist and I are maybe not going to be friends.

**Jerod Santo:** Oh, yeah. I mean, obviously, they put you through turmoil, and... Terrible things. I had a nowhere near as serious, and yet relatable diagnosis with my knee, when I was told that I had torn my ACL and I would never play basketball again by a physician's assistant... And then the actual knee doctor came in, he's like "No, you're good." I'm shortening the story... But I had like 15 minutes of like "Oh, I love basketball." Like, my whole life changes in small ways. Yours, obviously, in a huge way. But then him being like "Nah, she didn't understand this thing, and she messed up", and "It's not as bad as she thought it was." And I was like "Let's fire her, or something."

**Sid Sijbrandij:** Yeah, these things are not trivial to diagnose.

**Jerod Santo:** Yeah. It's not easy.

**Adam Stacoviak:** So it's undetectable in this moment. You just shared this dramatic story arc that you've gone through. You're recalling it here in this moment, on this podcast... Is the expectation at this point with you and your medical staff that it's not going to come back? Or it's just undetectable and you're still actively trying to just work on it, or treat it? What is the current status of how you're dealing with it? Is it just gone for now and wait, or how are you handling things?

**Sid Sijbrandij:** Yeah, we assume that it's not gone. The only reason it'd be gone -- we know that the surgery didn't cure it, that they left so-called positive margins. So they left cancer. The only thing that was remarkable - the cancer we removed, we were able to flash free some of it, which is amazing... For people with cancer, it's way better to flash free stuff, because it allows you to do many, many more diagnoses on it later than if you do the standard, which is FFPE... Which preserves it, but it precludes you from doing a ton of tests.

\[00:27:54.11\] So if you want to have an active role in your treatment, you've got to convince the hospital to flash free some of it, so that you preserve optionality to run these diagnostics later. And what we saw was that the T-cell infiltration went up a lot. It went up from 20% to 90%. So the place was buzzing with T-cells, which is a good thing... And we think that is a combination of the two checkpoint inhibitors that I'm taking, that kind of unleash your immune system... And one experimental treatment that is an oncolytic virus, so like a modified common cold virus that drops the TGF-beta. The TGF-beta is something the cancer uses to hide from the immune system, and it kind of tears away that invisibility cloak. So that's good news.

We don't super-think that that's curative, but I'm gearing up in two weeks to take an mRNA vaccine, and that's like a 50/50 of curative... But there's a reason we have like 10 drugs in the pipeline. It's where we're trying to cover all our bases, and we'd rather have a drug too many than one too few.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** It sounds like you're in a buy time kind of scenario. Am I reading that right? You're buying time to research it more, to attack it more, to have an mRNA opportunity for a 50-50 chance? Is that kind of where you're at?

**Sid Sijbrandij:** Yeah. So the mRNA is potentially curative, so in that case you're kind of -- you're done with this. But it's certainly like buying time. You've gotta have enough treatments to make it to the new development. Both science advancing, and some of these drugs that I'm developing - they just take years, many years to develop. So you want to make sure you make it to the next spot, and hopefully in as good of a state as you can, with hopefully no metastatic cancer, hopefully no fried kidneys.

**Break**: \[00:30:01.13\]

**Adam Stacoviak:** What does day to day like for you? ...maybe in the last six months, how is your life in terms of how you live? What are the things you focus on? Are you traveling a ton to obviously do research, or get treated? What's the day to day in your life right now?

**Sid Sijbrandij:** Yeah, it's a lot of working. I like working. These last few weeks I've worked 10-hour days; a lot of meetings, mostly the whole day's meetings, 25-minute meetings, like 15 a day. I've also done some traveling for pleasure... We thought at the beginning that this might be my last year, so we celebrated the 25-year anniversary of me and my wife extensively...

**Adam Stacoviak:** Congratulations.

**Sid Sijbrandij:** Thank you. With friends and family. That was great. Also a lot of traveling like going to medical conferences, going to treatments on multiple continents. But also doing fun stuff, like adding observability to GitLab. I started an AI coding company called Kilo. I'm still creating these companies around open source projects with open core ventures... And then since September, starting two biotechs every month.

**Jerod Santo:** So how many companies are you currently involved in, today, and here in December?

**Sid Sijbrandij:** So I started 30 companies over the last three, four years.

**Jerod Santo:** And what made you want to get into open source agentic coding when you have all these medical companies, you've got GitLab stuff going on...? But you want to work on this. Why do you want to work on this particular problem?

**Sid Sijbrandij:** I saw kind of the rise of open source agentic coding companies... And obviously, agentic coding is very cool, it's the future... And it was cool to see that open source had a chance here. Before I thought it's all going to be closed source, and I saw the rise of open source and I thought "Okay, time to join that game."

**Jerod Santo:** Hm. Are you deploying a similar playbook that you deployed with GitLab back in the day?

**Sid Sijbrandij:** Yeah. Kilo has great agentic coding, but the best reason to use it is that it's all in one. So not only can you do the coding, it can also review your code. Not only can it do that, it can also do the security review. Not only can it do that, it can also deploy it. So it's available everywhere... VS Code, JetBrains CLI, in the cloud, in the mobile app... And it can do the full life cycle, including deployment, and we're working on more there. Just like GitLab, the idea is to be the all in one solution where you don't have to switch applications the whole time to do what you need to do. And to be open source, where people can contribute improvements.

**Jerod Santo:** Right. So what's the open core aspect with Kilo?

**Sid Sijbrandij:** So you mean what's the paid functionality?

**Jerod Santo:** Yeah. Where are the lines drawn? Like, what are you thinking?

**Sid Sijbrandij:** We're thinking if a feature is more appealing for managers or executives, that's where they need to pay. So for our teams functionality, for example, to see AI adoption throughout an organization - that's paid functionality, 15 bucks per user per month. And then we also have an enterprise version with features that appeal to executives, like centralized, bring your own keys, so they can send it to Bedrock, in their VPC.

**Jerod Santo:** \[00:36:07.26\] That makes total sense. So are you working on models as well, or are you just model-agnostic...? What's your look on that aspect of the world?

**Sid Sijbrandij:** Yeah, we're not working on models ourselves. We're working very, very hard on supporting older models. So hundreds of models work, over 500. We're the most prominent launch partner for new models. So a lot of new models, a lot of stealth models are first launched on Kilo... And a lot of our users use free models, like Grok, Minimax, GLM, with Kilo.

**Jerod Santo:** Interesting. I think I haven't even heard of a couple of those. I've heard of Grok, but Minimax, I haven't even heard of. So this is either underground, or upcoming, or... When you say new - bleeding edge, perhaps?

**Sid Sijbrandij:** Oh yeah. It's all new. It's all launched in the last two months. There's a lot of kind of Chinese frontier labs, and they want to quickly get their models more popular, so they offer incredible pricing... Just like Grok. Grok Code is an incredibly good model, and it's been free for months now.

**Adam Stacoviak:** It's an interesting space, because you've got a lot of things happening around Google in particular... There was an announcement today for a Flash model... I think it's called Gemini Flash, if I can recall correctly. But when you look at that, they can essentially offer their models in the API layer for virtually free, or a loss leader, because they're trying to build their platform... While Open AI and Anthropic are burning cash, making money for sure, but when you're fighting a competitor that essentially can outlast you because they already have so much incumbent cash or value elsewhere in the chain, it's kind of hard to battle somebody who's willing to lose or break even when you have to profit.

What's your take on the current landscape of just the competitive nature, from nation states like maybe China etc. and companies there, to the battle that's playing out here in the US?

**Sid Sijbrandij:** Yeah, I think the leading coding model - that's an incredibly competitive space. It always feels a bit like Open AI is a better model, and then Google has a better model, and then Anthropic comes back with like the best model by far, for sure. But also, the best kind of free model is incredibly competitive, with DeepSeek, Minimax, GLM... All these providers kind of one-upping each other. And what we offer our users is you're going to keep using the same application; you don't have to sign up for a ton of stuff, it's just our thing. There's no charge, it's completely free. And then you have the ability to use any model you want - soon you can use different models - and you can use free models, paid models, whatever you see fit. In Kilo you can also kind of define different profiles, because a lot of people prefer Open AI models for planning and architecture, but they prefer something else, like - I use Opus 4.5 for a hard book. And troubleshooting, I'd use Grok for kind of the smaller tasks, that are easier... So it's kind of a mix and match approach. I think we're going to live in a multi-model world, instead of one model that's the best at everything.

**Jerod Santo:** For sure. One of the challenges I remember for GitLab, which I think you all overcame, was because you wanted to be all-in-one and you were providing the entire software development life cycle tooling, almost every aspect of that you had startups and businesses that their entire focus was that one thing... Whether it was bug tracking, or observability, or deploying, or whatever it is. I feel like you're going to have the same situation here with Kilo, where there are people attacking separate slices of what you're trying to do... And I wonder how you're going to do all the things well.

**Sid Sijbrandij:** \[00:40:18.04\] Yeah, the same way we did it with GitLab - go incredibly fast. If you look at where we've come from -- we only started in March, and now we have code reviews, deployment... All these things in one package. So we're moving extremely fast, also thanks to agentic coding, plus contributions. And I think we can even improve a little bit on working with the wider community. And yeah, when GitLab grew up, it was like "Oh, but Travis CI has already dominated the CI space." It's now like "Hey, CodeRabbit is already dominating code reviews." Just -- yeah, let us cook. We'll go faster than anybody else.

**Jerod Santo:** \[laughs\] You've got the same people working on it, or how do you know you can cook so fast? I mean, it worked the last time, but... Was it the same team? Because talented people make good products.

**Sid Sijbrandij:** There's some people who after GitLab went to work for other companies, and some of them have joined, but the majority of the team has never worked at GitLab... And they joined Kilo because they want to go incredibly fast. They know the bar is high, they know they've got to work really, really hard... For example, at some point, once a quarter we come together, we do a focus week and we all work our butts off for a week, and we do that together. And a week before focus week, it was clear that we weren't recruiting fast enough, so I put a LinkedIn post out. I said "Look, fly by Monday, we'll make a decision by Wednesday, and then the next Monday you're expected in Amsterdam." And four people did that, and they all shipped the initial prototypes of their functionality by the end of the week. And all of them launched their functionality December 10th, less than two months after focus week. And it's all held up so far, and now they're all going to make it better. But it's an incredible speed.

The way I would look at it is it used to be that you needed like a team of seven people to do something... Now you have one person and kind of a whole team of agents working on something. So yeah, we have like 20 engineers, but in reality, they're all working with seven agentic coders... And that's the expectation, that you as one human ship at the speed of what two years ago would be a team of seven or eight.

**Jerod Santo:** That's interesting. So you've successfully parallelized your cancer treatments, and your engineers are parallelizing their agents. I can still only keep one agent busy at a time... Maybe I'm not ready for this new era; I couldn't work for Kilo. How do they do it when you've got all these different -- you know, down in the weeds of how they're managing multiple agents working on a singular feature, I suppose, or a set of features that support a larger feature, and how are they staying productive and fast in that environment?

**Sid Sijbrandij:** That's common. You're not alone in only being able to keep one agent busy. But I think 2026 is going to be the year that that changes. Our parallel functionality, where you farm it out to multiple agents in multiple work streams - that's just getting started. A month ago the engineer who made Saltwerk, one of the early ways to parallelize things, joined us and he's doing amazing work.

There's still a lot to do. For example, Kilo has a functionality that's orchestrate. With orchestrate you say "This is what I want to achieve. Split it up into separate jobs." So each of those jobs have small context windows. Because small context windows means it's cheaper to run, it's faster to run, but most importantly, it's not going to lose half of its context because it's kind of getting to the maximum context window that's effective.

\[00:44:05.04\] But in the coming weeks we'll ship something where those different agents are now able to work in parallel. And you can do a runoff, especially if you're using these free models. You might as well have two models work, and then see which one has a better result. So I think we're going from you have one working directory today, to in the future you have multiple tasks running in parallel, and each of those tasks is running multiple types of agents, because it's hard to predict upfront which agent will be the best in any given thing.

**Jerod Santo:** Right. That sounds cool. It also sounds expensive. I suppose commodity pricing just keeps going down... Is that the approach here, just innovation and investment brings down the price of agentic coding?

**Sid Sijbrandij:** If you go to Kilo.ai and you look at our homepage, we see the 10 most popular models for Kilo. I tried to count them this morning, and I think eight out of 10 offer free usage today. So that's a way to afford it.

**Jerod Santo:** Free as in freemium, or free as in free?

**Sid Sijbrandij:** Free as in free.

**Jerod Santo:** But until you -- until what? What's the catch?

**Sid Sijbrandij:** There is no catch. \[laughs\] Grok is amazing.

**Jerod Santo:** I've been told that plenty of times in my life, and then eventually there's a catch somewhere, somehow...

**Sid Sijbrandij:** Well, it might be that this whole thing ends at some point, where these models --

**Jerod Santo:** Yeah, the catch is it's temporary, maybe.

**Sid Sijbrandij:** But what we've seen over time - this has been going on for half a year now, and there's models that kind of launch for free, and at some point they become paid. But the rate at which free models are launching is faster than the rate at which they're getting deprecated. So there's now more free models on the market than there were half a year ago.

**Jerod Santo:** That's interesting. Eventually, you would think you'd have to make some money somewhere, you know?

**Sid Sijbrandij:** Yeah. Maybe this is like when VC money was plentiful, and the Ubers were really affordable... VC dollars are plentiful, and the leading labs have free models.

**Jerod Santo:** Right.

**Sid Sijbrandij:** Use it while you can. Use Kilo to burn --

**Jerod Santo:** Burn the VC money out.

**Sid Sijbrandij:** ...burn the VC money.

**Jerod Santo:** I think that's a legit strategy. The challenge with it is over time I think you do become hooked, you know? It's like drug dealers, the first one's always free. Now, in this case maybe you get a lot for free. But eventually it's like "I don't know how to write software any other way", three years from now, and that's when they turn on the old money-making machine and now you're just subjected to renting your life away.

**Sid Sijbrandij:** Yeah, I think what you're hinting at is that the cost will go up. I think the cost will go up, not so much because the same quality model will get more expensive... The same quality model gets 10 times cheaper year over year.

**Jerod Santo:** Right.

**Sid Sijbrandij:** But what we've seen is that the price of a frontier model per token has kind of held steady. And every time we think it's going down, there's GPT 5.2... What is it? Thinking or Pro, the really expensive one.

**Jerod Santo:** I don't know.

**Sid Sijbrandij:** And so that's holding steady. But the amount of tokens you can burn as a human - that is shooting through the roof...

**Jerod Santo:** \[laughs\] Yes...

**Sid Sijbrandij:** ...with this split of the work...

**Jerod Santo:** Well, even with my only one agent -- I'm only doing one agent. I can burn some tokens. I imagine if I had six agents going - I mean, that's just 6x my token ability.

**Sid Sijbrandij:** Exactly. And the future we're going to live in is not one where you have like a $20 subscription a month. I think humans are going to burn $10,000 in tokens, maybe $100,000 in tokens per human.

**Jerod Santo:** Do you think so?

**Sid Sijbrandij:** And they'll be 100 times more effective than the humans of yesterday.

**Jerod Santo:** Right. It'll be worth it, because one human plus all that is more effective than however many humans would cost you that $10,000.

**Adam Stacoviak:** \[00:48:07.13\] "Doing what?" I guess is the question. Is it just coding? Is it just planning --

**Jerod Santo:** Starting Sid's next business, man. I mean, this guy's got business coming out of his ears.

**Sid Sijbrandij:** Doing everything. Like, every knowledge worker is going to have a collection of agents working for them.

**Jerod Santo:** That's a wild world.

**Adam Stacoviak:** Yeah. It's an interesting thing about how that plays out, though... It's almost unimaginable to think about -- I couldn't imagine this year from last year, for example. I could, I suppose, but the vantage point, the perspective shifts so quickly and so much. For example, I just mentioned Google, and their Flash model... That's news as of, I believe, today, in the last 15 hours. Every day or week we have a new model, a new flip, a new change... And it seems to be like UX is the moat, UX is still being figured out... I think Kilo is an example of how you're trying to evolve or think about different UX around agentic usage. It seems hard to predict where we'll go.

**Sid Sijbrandij:** It's incredibly hard. And we thought this AGI, where the AI would be as smart as you, is this seminal moment... And it happened in April. It just flew by. We hardly even noticed it.

**Jerod Santo:** You said we had AGI in April? Is that what you just said?

**Sid Sijbrandij:** Yeah. I think in April --

**Jerod Santo:** How so?

**Sid Sijbrandij:** ...the models became as smart as the median human.

**Jerod Santo:** Oh, is that what AGI is?

**Sid Sijbrandij:** Artificial General Intelligence, yes. My definition - I stole April from Tyler Cowen, which I think is one of the smartest people on Earth...

**Jerod Santo:** Okay. I must have missed it. I just don't know how generally -- I guess maybe you're saying because most humans are generally unintelligent.

**Sid Sijbrandij:** Well, also think about ChatGPT - it might not know more than the expert in a field, but it knows a lot about everything.

**Adam Stacoviak:** The ultimate polymath.

**Sid Sijbrandij:** Yeah.

**Adam Stacoviak:** Yeah, I mean, I was having some really interesting conversation with ChatGPT the other day that was very therapeutic... I have been on the code side of things, and that's where I'm comfortable at, with how it knows what to do... And I guess on the human side where I have a conversation with it, and it's not just a question and an answer, it seems to know such detail about particular things... And I don't know how it does that, but it was a therapy conversation, essentially. And it was just uncanny, the response type and the level of care. And it wasn't just how it outputs. It wasn't just formatting. It wasn't just user experience. It was this depth that I never expected a machine, basically - and potentially even AGI, who the heck knows - to give me back this feedback loop. I just never... And I'm steeped in this stuff, right? We've been steeped in this stuff for years, and it is just quite literally unbelievable. Like, unbelievable that I can have that kind of conversation. I'm being vague to a degree, but it was very therapeutic.

**Sid Sijbrandij:** It's incredible. This year it helped us a lot. I think about how much stuff I had to learn this year... And even yesterday, I was like "I don't really know how a TCRT is different than a CAR-T..." And wow, ChatGPT walked me through it, and all the pluses and minuses.

**Adam Stacoviak:** Yeah.

**Sid Sijbrandij:** But we're gonna give a talk at Open AI soon, because we did some things that were super-beneficial to us. We did an RNA test of my cancer, so we know what RNA was going on... And we just sent the spreadsheet to ChatGPT, and what came out of it was really insightful.

**Adam Stacoviak:** Can you be specific in any way? ...like what blew your mind, I suppose.

**Sid Sijbrandij:** \[00:51:57.23\] What you're looking for with RNA is not so much -- you have the genetics, but what's actually happening at the cell level, what's being expressed, and what are potential pathways that are overexpressed and you can target. Because I know from the genetic, there's something that sounds like a party drug, but isn't. MDM2 is overexpressed... But I want to see how the thing it acts on, the p53 division, how that's going in my cell. And there's better examples here, but I'd have to ask ChatGPT for them. I don't want to be distracted while talking with you...

**Adam Stacoviak:** For sure.

**Sid Sijbrandij:** ...but just incredible things. And it's not the end all, be all; like, don't take a treatment without first checking it with a doctor. But just if you have to get smart about a subject in a year, what an amazing blessing it is.

**Adam Stacoviak:** Yeah. It can connect dots. And the dot connecting is across the board of all sorts of different disciplines and domains. That's why I said polymath. That's probably not even a great example... It's like uber, ultimate, ultra thing polymath, I don't know.

**Sid Sijbrandij:** No, polymath is great. And that's also the big benefit, right? We deal with -- I've talked to hundreds of specialists this year, but when you start talking to people, who are extremely narrow, because they're like the expert in the world in one specific thing... It's really hard to do the integration. You end up in these meetings with eight people, and they're incredibly expensive and hard to organize. And something like ChatGPT, which is very knowledgeable about everything, is incredible for integrating the knowledge and giving you directions to go in.

**Adam Stacoviak:** Yeah, that's where I really -- and I don't want to tangent us by any means, but this is where I get really, really conceptual, I suppose, about where the future might go... Because we need -- I think at least, even in this moment, we need humans to go super-deep and super-thoughtful into a very specific domain. Like you had mentioned, you have to have eight humans in a room, hard to organize. But we need those kind of folks to think about the long-term future of humanity, and not so much in this way I'm saying it, but like feed this algorithm, this LLM, this model its knowledge; not to replace them, but to augment how fast we can iterate through a problem set that requires eight humans, and a polymath that sits above those folks to go so deep on a subject that's just basically impossible for eight collected minds to do in one briefing room. It's just -- humans don't work that way. We don't share that way, even interpersonally... But a machine or an AI that's designed to do that can for us. And that's really where I -- it's kind of like a headspace kind of thing, but that's where I map to, is like you've got to have these super-deep thinkers with this deep knowledge. And they're obviously going to be human, because that's what we've been as a race, to enable this AI to think so deeply and so vastly as a polymath would, and connect dots that we just wouldn't normally connect as humans.

**Sid Sijbrandij:** Yeah, as I was saying, if I've been able to look further, it's because I stand on the shoulder of giants. And in a very narrow field, some people are able to read all the relevant publications, and to keep up with that. But it's incredibly hard work. And now with these AI things, you suddenly have a thought partner that not just read everything in the field you're in, but in all other fields. So you're not forming these people standing on top of each other in one discipline... As far as I can see, every discipline you're up to date on the latest knowledge. That is just incredible. It allows you to run around, where before if you moved outside of your field, the whole thing fell down. And now you're just able to combine disciplines like never before.

**Jerod Santo:** Yeah, it truly is amazing where it stands today, and also where it's headed, which none of us can really know, but we can see that trajectory moving us forward.

**Break**: \[00:56:15.13\]

**Jerod Santo:** You mentioned $10,000 a month, something like this, with a human and then some agents doing their thing in the future. I just saw a post today about Cursor... Someone was paying $1,400 a month for Cursor, and someone was saying that's ridiculous, and then the other person saying it's worth it, etc, etc. We can have these kind of battles... But it made me think back to Kilo, because I did see on your homepage you're kind of trying to attract Cursor customers. I think there's even a billboard somewhere in the Valley, calling all Cursors over to Kilo. Can you explain the angle, the relationship? I'm sure we have plenty of Cursor users listening to the pod who are very familiar with that particular tool? ...and maybe use that as a way to explain what Kilo looks like and how it works and all that.

**Sid Sijbrandij:** Cursor is always a little bit vague about like "What is list price? How much do you pay?", and they make significant changes over time. With Kilo, we pride ourselves on -- you can use over 500 different models, including a ton of like stealth ones and free ones. Also, if you're going to pay for a model, you pay list price. We charge exactly what the provider lists as a price, and so you know exactly what you're getting for your dollar.

And I think as people start kind of consuming these AI tokens more and more, that is the way to go. Instead of like a subscription where it's a fixed amount, but if you go over, there's a charge, which is probably higher than the list price, but it's hard to exactly know... We think a great mix of free models for the problems where you can use those, plus paid models at exactly list price, without any commission or overcharge is a compelling proposition.

**Jerod Santo:** And so Kilo uses this orchestrator itself in order to pick models, in addition to orchestrating your own tasks based on complexity and the particular needs?

**Sid Sijbrandij:** Right now, people are still selecting their own models in Kilo.

**Jerod Santo:** Gotcha.

**Sid Sijbrandij:** It's not trivial to select the best model, and people also have their own preferences. And what people especially don't want that choose Kilo - they don't want the model to switch up on them. They don't want auto model, where you don't really know what it did. And they also want to be sure that they're using the exact same thing the whole time. So if I say I want that, I want exact that, with the exact context window. Because it's very frustrating if you're randomly using another model, or somehow the context window is half of what you're used to.

**Jerod Santo:** Right.

**Sid Sijbrandij:** So I think humans are really good at selecting the right model for the right task, but you don't want the software to change it up on them, unless they give you permission, and then still, you want to know what exactly was used.

**Adam Stacoviak:** That could be configuration in a way, right? You can automate that selection through configuration. Obviously, we want convention over configuration in a lot of cases, but that's a way where you can say "Well, when you do these kind of tasks for me, I'm cool with you being on the Flash model", for example, or on the Haiku model, where it's faster, more iterative planning, whatever... But when we're planning, we're going to go deep, and we're looking at a JIRA ticket, or a Linear ticket, or we're looking at a pull request, and we're looking at this, I want the better model, the more reasoned model to examine that for me.

**Sid Sijbrandij:** In Kilo you have profiles, and you kind of set your own profile. And that's a combination of "I want to use this model, but I also want to include these prompts." You can even share these profiles across your organization. So you collectively work together, like "This is a really good agent for upgrading our Java code", or something like that.

**Adam Stacoviak:** Because those are going to change, too. And your mileage may vary, so you may use a particular model and you're a Rust developer, or you may use a different model and you're a Java developer, and you may get better results per your team with a model, and that's something you should probably be able to select from... You're still getting top tier models, but in a config where you can say "Well, I prefer Opus 4.5 versus the latest Gemini", for example.

**Sid Sijbrandij:** Yeah. You're basically creating team members. And just like in a real company, it's helpful to have the same team member. Now, these profiles don't have memory yet. That's something for the future. But they already have a collection of prompts that are super-helpful for that company, for example in a simple way your style guidelines, or "I tried to upgrade our Java before, and it needed these and these prompts to be effective." So being able to share at least these prompts is super-helpful.

**Jerod Santo:** How does Kilo manifest itself to people? What does it look like? How does it work? You mentioned it's in all the major editors, so I imagine it's just in the case of a VS Code extension, and there's a Windsurf deal... Can you explain kind of the surface area of the product?

**Sid Sijbrandij:** \[01:04:02.14\] Yeah. So it's all the VS Code-based editors, all the JetBrains editors, it's available. There's a CLI that you can run anywhere, and then we also allow you to kind of run it in the cloud; Cloud Agents, that's called. And then we're soon launching -- it works on mobile already, but we're soon launching a mobile app as well.

**Jerod Santo:** Wow. Explain how that would work. I think one of the cool things is if you have a thought, you can just kick off the agent with that.

**Adam Stacoviak:** Heck yes.

**Sid Sijbrandij:** So instead of kind of --

**Adam Stacoviak:** Give it to me.

**Sid Sijbrandij:** Yeah... Look - you're somewhere; you're not going to go to your desktop. You have an idea. Now you write it in your notes, or whatever you do... Tomorrow you just kick off an agent, and then you can pick up that agent whenever you get behind your notebook again. It's going to be available in JetBrains, in VS Code etc. So all your sessions -- you have a complete overview of your sessions, whatever platform you're on. And I'm looking forward to also getting kind of a mobile notification when my agents are done, because that's my primary thing. The agent is done, I need a ping so I can see what it produced.

**Adam Stacoviak:** This is something that Claude Web - this is what I call it. It's just claude.ai, but it's not Claude Code, it's Claude Web. They've just enabled you to connect a repo on GitHub. And I think this is like early days of this feature. And I didn't really have a repo to connect it to to think about, so I was like "I just want to do it in an isolated area", where there's no damage. I can't go write code accidentally, or send a pull request, or do something weird. And I connected to a brand new empty repo, and I just kind of one-shotted in a way this idea that was really just a basic Go CLI. And in this case, it was kind of a coding session, but I was just trying to thought-experiment, "Okay, if you have this mobile interface or this web interface, that is not a coding environment at all, it's not Claude Code in the terminal, it doesn't have terminal functions, it doesn't have your system or things like that that you can use to write a Python script and run it kind of thing..." I suppose it does in its own virtual environments, but I was like "How does this work, where you cannot be in any sort of way an IDE or a code editor", and be "a developer", or a builder, or someone who's thinking about software, and planning it, but then it's like "Hang on, I'll just go ahead and write this for you and commit it back to this repository."

I'm like "What?! Okay... Do it." That's kind of a cool world. Is that a version of what you're doing with Kilo in the mobile app?

**Sid Sijbrandij:** Yeah, for sure. And that's available on our website, too. It's called App Builder, and it's more of the Replit experience, where you just prompt what you want, and it starts coding that. And because we have these cloud agents, which - really the backend of that are CloudFlare containers... Because we have that, we can also do code reviews. So as soon as you connect your GitHub or your GitLab, you can just say "Hey, from now on, all the code that was written, automatically kick off a review for that as well." And you can already configure Kilo to focus on certain aspects, be less strict, more strict etc.

**Adam Stacoviak:** I think that just gives us more of a reason to always be working, in a way... In the new knowledge worker world it's like "Hey, what are you doing over there?" "Well, I'm not scrolling TikTok. I'm actually writing software right now." "But you're on your mobile device. That's just an iPhone, right?" "Yup." It's like "No, I'm knee-deep in a problem and I'm fleshing out a spec", or I'm... Whatever. That's kind of wild to think, that from this mobile device we could just be on the subway, or at a birthday party, and we're bored, and... Working.

**Sid Sijbrandij:** \[01:07:43.22\] Yeah. I think these are your coworkers. The most natural way I interact with my coworkers is either a video call, or Slack. And we're going to launch a Slack integration, hopefully this month, and otherwise next month. Because that's the way I interact with a coworker, and that's the way I want to interact with an agent, too. So I think collaborating with agents is going to look a little bit less like this big monitor with an IDE on it, and more like Slack on your mobile phone.

**Adam Stacoviak:** Yeah. Think mode. I said the term earlier, polymath. Would you consider yourself a polymath, Sid?

**Sid Sijbrandij:** Well, since this year, at least I do two things, but...

**Jerod Santo:** You're poly. Duomath, maybe...

**Sid Sijbrandij:** Look, I'm no \[unintelligible 01:08:38.06\] I get by. I certainly have a broad set of interests, which helps.

**Adam Stacoviak:** Yeah. It sounds like imposter syndrome right there. You don't want to call yourself a polymath, but you're a polymath.

**Jerod Santo:** He'll let us say it, but he's not going to say it about himself. That's fair.

**Adam Stacoviak:** Yeah. Do you have any thoughts... I'm thinking kind of, given your history with GitLab, your entire career arc, even through a crisis in your life, you've had the chance to mentor, lead, design the most effective culture, take a company to IPO, live the American dream, have an amazing marriage of 25 years... Congratulations again. Something as simple as the hope for the future of developers - can you weigh in, or do you have any thoughts at all about the... I hear this idea of this comeback to -- like, there was a lot of people let go, a lot of junior developers to let go, and here you just have Matt Garman, CEO of AWS, saying that "Junior developers - it's stupid. Don't replace them with AI. Don't do that." Do you have any outlook or any hope for the future of being a software developer and what that might look like?

**Sid Sijbrandij:** Look, I'm a very lazy person. I don't like tedious things. And although programming seemed interesting to me, I read some of the code, and I'm like "Standard IO? I'm not going to write code that way... That seems super-boring." So I never got into programming until I saw Ruby. And I'm like "Wow, this is beautiful. This is the opposite of tedious. This is beautiful, and it's efficient with my time, and I love this interface." And I think agentic development is another step towards "This is no longer tedious." I could just have an idea in my brain of how something should look, how something should work, and I can just write that down, or even use voice mode in Kilo, and it will get done. It's amazing. It's never been a better time to create software, because we can do so much more, so much quicker. And it doesn't have to take you 10 years anymore. You don't have to study computer science. You don't have to solve these LeetCode problems anymore. You can just make it yourself, without any other human helping you. It's incredible.

**Adam Stacoviak:** I agree. It is a fun time to be a developer... And the way I look at it or the way I think about it is like the state of play. There's studies on flow, obviously, you can go back to that; it's neuroscience, basically. The state of play is where we learn and have the most fun and it feels like playfulness. It feels fun to do. Even if it's challenging, arduous in some cases, maybe there's a learning curve, maybe there's a research phase, you've got to get caught up on how an API or CLI works or whatever, you've got to learn things you didn't know beforehand... Because I think there's a level of learning in all of this; even if the AI knows a lot, I think you should still know just as much as well, or at least try to, or strive to understanding. It's kind of wild to be in that space where it's this state of play. It feels like very playful.

**Sid Sijbrandij:** \[01:11:56.06\] Yeah. For me, a state of flow is where I don't go off and check Hacker News and Reddit on the side, because I'm getting bored, or I have to wait. And I think 2026 will be the year of the parallel agents. And it's like the spinning plate act, where you have all these agents up in the air, all these spinning plates, and you continually have to kind of shake one of them to keep them all up in the air. You never have to be bored again or wait for them. I think that new balance will be like balancing on a surfboard, or something like that, where you also have to focus and you don't have to \[unintelligible 01:12:35.22\]

**Adam Stacoviak:** You mentioned starting 30 companies... I'd imagine you have a lot of opportunities available. Do you have a place where people can go? We have a large audience probably listening, potentially those who are chomping at the bit for either new opportunities, or an opportunity, or their first opportunity, or change, because of just new interests or new things that just are grabbing them... Are you hiring across these 30 companies? What do you personally need for new talent in your enterprises?

**Sid Sijbrandij:** Yeah, if they're listening to this podcast, they'd probably like the tech companies more than the biotech companies. So OpenCore Ventures has a portfolio on their website, and... I think companies always need people who can get things done themselves, and are able to go after something by themselves, and get it done, get it over the finish line. One of the PostHog founders wrote a great article about "Stop collaboration." Because you now have a team of AIs reporting to you, you shouldn't also be trying to partner up as much with other humans. You have all the ways to make it happen. In order to go fast, collaboration should never get in the way from making individual progress. It should never delay trying to get something over the finish line yourself. It's great if people have suggestions. It's great if you ask for feedback, but never stop the progress and never delay because you have to coordinate with someone else. Just use your best judgment, and get it over the finish line. And I think for people who are effective by themselves, the world's your oyster.

**Jerod Santo:** Well said. Anything else, Sid, you want to talk about with us, or make sure we mention about Kilo, or anything else that's on your plate that you want our listeners to know before we let you go?

**Sid Sijbrandij:** I think we touched on a lot. This was super-fun. Thanks, guys.

**Jerod Santo:** It's always fun, man. It's been too long... We used to see each other more often. I'm glad you're out there doing your thing... You've crossed the chasm, it seems, of your cancer situation. Obviously, you're still out there hunting it, so I assume the treatments will continue, the research will continue, and the hunting will continue. Hopefully, that vaccine or the mRNA treatment you're going to take, 50/50 chance, hopefully it lands on heads, and you can be free from this, but... It seems like you're not just surviving, but also thriving, at least from what we can tell.

**Sid Sijbrandij:** Yeah, for sure.

**Jerod Santo:** ...with your many businesses and all your interests. So it's pretty cool.

**Sid Sijbrandij:** It's been great. And I'll settle for this, as long as I'm having a ton of fun pushing all of this forward. And yeah, it was a bit hard to make the time when I was full-time CEO. That's a big job at GitLab. Now I have a little bit more flexibility in my schedule. I hope to be on the show again soon.

**Adam Stacoviak:** Absolutely, Sid. Always welcome back. It was good seeing you. Thank you so much for sharing your story and sharing your time.

**Sid Sijbrandij:** Thank you, too.

**Jerod Santo:** Bye.
