**Chris Benson:** Welcome to another Fully Connected episode of Practical AI, where Daniel and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news and we'll dig into learning resources to help you level up on your machine learning game.

My name is Chris Benson. I am a principal emerging technology strategist with Lockheed Martin, and with me as always is my co-host, Daniel Whitenack, who is a data scientist at SIL International. How's it going today, Daniel?

**Daniel Whitenack:** It's going great. It's a little bit interesting, Chris... We haven't done one of these Fully Connected episodes in a while, where it's just you and I. So for those listeners that have been with us for a while, you'll remember Chris and I used to somewhat frequently - maybe ever few episodes - have an episode with just Chris and I and no guest, and discuss some news things, or learning resources, or random topics... But we haven't really done that in a while, so it seems so nostalgic.

**Chris Benson:** It is... But this is a good one. This is one we have been talking about doing for quite a long time... Because you were working on developing your own AI workstation, and you built it from scratch, and we heard a bit of progress across several episodes there...

**Daniel Whitenack:** Yeah, in the intros to a few episodes I mentioned that I was building an AI workstation, and actually ended up -- so I have a few computers sitting around me; one of those is that workstation I was mentioning. Another one is -- we can talk about that one as well, actually... But yeah, it's been a bit of an interesting journey, and I think at least new-wise maybe some people are thinking about this these days, but NVIDIA's latest release with their 30 Series GPUs... Actually, even today I was talking to someone who was trying to get their hands on one, and there's none anywhere.

\[00:04:07.28\] So this is November 10th as we're recording this, of 2020, and I forget when they release those. I think it was in maybe September... But they've been pretty scarce. And I think what happened is the -- so there were the lower-tier ones, I think primarily geared towards gamers... And those basically sold out instantly. And so then the ones -- I think the 3090, the higher-tier ones, that were geared towards AI training, and stuff... The gamers then just started going to those, and basically everything sold out for anyone.

This morning I was on a call with the guy and he was like -- we were taking the call while he had Best Buy pulled up, and he was getting notifications when they would release some on Best Buy... But he never got one, so he went into the thing and pushed the Add to Cart; then they make you wait, and then by the time their waiting in the queue was done, then your cart opens and it's sold out and no longer available. It was kind of a vicious cycle like that.

**Chris Benson:** So you went virtually shopping with him...

**Daniel Whitenack:** Yeah, he screen-shared, and everything, so we got the experience together.

**Chris Benson:** You don't just have your own frustrations, you get to share in his frustrations, too.

**Daniel Whitenack:** Exactly, exactly.

**Chris Benson:** Very good.

**Daniel Whitenack:** For listeners that are newer to AI - we'll go into this a bit with the workstations, but a lot of people use GPUs, and specifically NVIDIA GPUs to accelerate their workloads, in particular training is a big thing to accelerate. Inference as well, but training mainly. So when people are building their computers for training deep learning models or AI models, a lot of times they're in the market for a GPU, and such are not available at this time, as we've been discussing... So that makes things a challenge.

Actually, I mentioned I have the one workstation -- so I guess I can talk now about the things that I got set up this fall...

**Chris Benson:** Go for it.

**Daniel Whitenack:** So I have the one workstation that I've built that has two GPUs in it, and I've been using that for training models. Then I've got a separate one which doesn't have a GPU in it, but I've been using it -- we've been training models for Intel-based edge devices. So I've got this Intel machine which actually is fairly beefy, but to test those models in an Intel-based architecture without a GPU for inference, but also it's got a bunch of RAM for pre-processing, and things like that... And I can talk about how I've experienced both of those... But those are the two things that I've been using recently.

So I really haven't done much other than connect from my laptop to those machines while I've been working recently... And that's some interesting characteristics, I guess, is the right word... I don't know if I would call them features, but interesting workflow implications as well.

**Chris Benson:** Well, you're diving into that now, so you've gotta tell us a little bit about what--

**Daniel Whitenack:** Yeah, this is not really AI or computer -- well, I guess it's computer-related, but... So I SSH into either one of these machines... Or actually, on the workstation sometimes I SSH in and just run jobs, and sometimes I'll connect through a Jupyter server. The other machine I can SSH in, or actually even just connect a monitor and work on it directly...

\[00:07:53.05\] We have Comcast Xfinity internet here, and just like the home internet network, I have the Xfinity router, so just the one that comes from the ISP... I guess they assume that most people aren't gonna be wanting to connect in that way... At my wife's business - she owns a manufacturing business, and when I'm there and I wanna connect back home to my AI machine, then I have to open up a port in our home network, and then do this port-forwarding thing, and all of that is kind of difficult in the Xfinity firmware that's on that router.

Our listeners may also remember that I installed a new network at my wife's business, which has some really great network appliances, and Ubiquity gear... So I'm thinking actually of taking both of these machines and maybe just putting them in the IT closet at her work... And then whenever I need to connect, just SSH into that network and find the computers. I think that's actually the better solution. That's the workflow things that I mention in terms of connecting to them.

**Chris Benson:** Gotcha. And for what it's worth, for those out there who may not be intimately familiar with that, the two-second explanation on SSH - it's a secure connection to a remote computer... And you talked about going through your router and having open ports, and those are like doorways you might think of on your router, where you have to open them, you have to have access to that, and they have to be able to connect to each other... So there's a lot of plumbing. It's internet connection plumbing to make work.

**Daniel Whitenack:** Yeah. When you spin up a Jupyter server, let's say locally, or you type "jupyter notebook" on your terminal, that spins up a local server and you might notice if a tab pulls up in your browser. Normally, it'll say "local host 88 88". That's the host in the port. I'm just connecting to that host running the Jupyter server... But it's a remote computer, not the local host on the same machine.

**Chris Benson:** Gotcha. And I have a question before we move off of this. I know this isn't the primary topic, but do you ever have a reason to get on and do the actual work on the workstation itself locally, or do you always come in from your laptop through a port and use the workstation as a remote server in that way?

**Daniel Whitenack:** Yeah, I haven't really done that much... I don't really have much installed on the workstation other than -- Ubuntu is the OS, Linux OS, and then I have Docker installed, and then the CUDA libraries and such for the GPU. So it's not meant to be a...

**Chris Benson:** A primary work interface--

**Daniel Whitenack:** ...primary workstation with all sorts of things installed on it necessarily. So yeah, I haven't really connected to it in that way outside of when I very first set it up and booted it up; before all of that I connected up a monitor and a keyboard and a mouse, and that sort of thing.

**Chris Benson:** Gotcha. So you're kind of using it as a remote SSH server to do the work, and you're still on your laptop when you're doing that, but it's providing those resources.

**Daniel Whitenack:** Yup, exactly. There's no reason why you couldn't use it in that way, but also, if you're doing -- if you're using this workstation primarily for those types of workloads, like training workloads and that sort of thing, if you're pulling up a monitor and you have 17 Chrome tabs up, and it's eating away at the memory. You also have the GPUs then potentially supporting various graphics operations... Not that it's consuming a lot in terms of the same amount that training consumes, but it's just not optimized. So yeah, there's really not anything running on there other than those few things that I mention.

**Chris Benson:** \[00:11:53.23\] Gotcha. So what was your motivation for doing it this way? Because we have talked, and anyone who's listened to a number of our episodes - prior to you doing this we were talking for a while about really focusing on... You know, we have all three major cloud providers out there, with all these services... I remember us having conversations going "Ah, why do it elsewhere?" and stuff. Clearly, you had a change of heart somewhere along the way... So what was it that motivated you to do this?

**Daniel Whitenack:** I think there were a few things. It wasn't any one particular thing. The first, which is not really practical in any way, is just because my brother-in-law was building a new gaming computer, and I was kind of watching him do that, and we were talking about it... And I kind of realized that back in college would have been the last time I built a personal computer of any kind... And I used to do that fairly frequently, especially since I was in -- I worked as an IT person at my college, so I would do that frequently, or dig into guts of computers fairly frequently, and switch out parts, and whatever.

**Chris Benson:** I did too in college, a bit. That was a different time... \[laughter\]

**Daniel Whitenack:** Yeah, I won't ask about that... No. I'm just kidding.

**Chris Benson:** You don't wanna go back to the age of dinosaurs, definitely not.

**Daniel Whitenack:** I really enjoyed doing that back then, and I realized I just hadn't done it forever... So part of it was all of these new parts and how things have updated - everything's different now. There's a different spin on all sorts of things. Hard drives are different, they don't have these spinning bits in them, which they always did...

**Chris Benson:** Yeah. Platters.

**Daniel Whitenack:** Yeah, I remember in high school college we would take old hard drives and take the tops off, and then we had action figures, and we duck-taped the action figures to the drives, and put little swords in their hands, and then spin them both up at the same time, and the last one standing would win the prize, or whatever...

**Chris Benson:** \[laughs\] So kind of a syntrophical force contest. Who survived the longest.

**Daniel Whitenack:** Yeah, exactly.

**Chris Benson:** Got it. Very good. At least you've found a use. You were the only person on the planet who has found a use for these little hard drives, rather than just chucking them.

**Daniel Whitenack:** Well, I will say that the network video recorders in a lot of file servers now I think still use those types of drives.

**Chris Benson:** Do they?

**Daniel Whitenack:** They'll have like 12 slots for regular spinning hard drives... It doesn't need to be accessed quickly. It's just cheap storage.

**Chris Benson:** Gotcha.

**Daniel Whitenack:** But I totally forget where we at... Oh, the motivation for -- I got into action figures on hard drives, and now I...

**Chris Benson:** It's fine, you know...? Come back from the action figures. Why build it?

**Daniel Whitenack:** Yeah, so the second reason was a lot of the stuff I'd been doing up until this summer was natural language processing, text-based though. So text corpora or datasets are generally fairly small in terms of size...

**Chris Benson:** Compared to audio, or video, for other non-NLP...

**Daniel Whitenack:** Yeah, compared to audio or video... But I've been doing a lot of speech projects this year, and so also having a system where I could run something for 4-5 days and do that over and over and over, without incurring the cloud costs...

**Chris Benson:** Yeah. So there's a cross-over right there...

**Daniel Whitenack:** Yeah, there's a breakeven point. I think when I did the research -- there are some really great, affordable... I mean, depending on your definition of affordable, but there are some cheaper, manageable solutions for using GPUs in the cloud. One of those was Paperspace, which I was using before for longer training runs... That's a really great system, that integrates with a lot of things now.

\[00:15:55.29\] I think even Hugging Face transformers... I saw an article about an integration there. And that's easy to use. I like the design pattern there; they have integrated notebooks, and all of that... There's also Google Colab, and things like that, where you can even get free GPU usage...

**Chris Benson:** Yeah.

**Daniel Whitenack:** Our organization uses G Suite, so we have access to team Drives and all of that, so I would occasionally save Colab notebooks and other things and work on them with people in that setting.

So there is a breakeven point, and I think -- I kind of calculated it out, a bit of what we were gonna need to run, and we were sort of right at that breakeven point, and I knew were kind of pushing our limits in terms of the cost.

**Chris Benson:** So you actually did an analysis though, at least a back-of-the-napkin kind...

**Daniel Whitenack:** Right.

**Chris Benson:** ...to figure out what your breakeven would be.

**Daniel Whitenack:** It was something like over a summer we were gonna spend at least $8,000 to $12,000 on GPUs and the cloud for training. That would be kind of the lower range... And when I started looking at blog posts about -- now, some deep learning workstations that are pre-built (we can talk about that, too) are not gonna be cost savings with respect to that. But you can also, if you roll your own and build your own, you can get into a lower cost zone with that, and that's one of the thing that we can talk about moving forward.

**Chris Benson:** Gotcha. So in the end it was just a simple -- but was that the whole enchilada, so to speak? You basically figured out that your cross-over, your breakeven point made it make sense after that, and then as soon as you got to that point, that was it? Anything else that you contributed?

**Daniel Whitenack:** I think those were the two main things. I also knew that there were a couple other people coming onto our team that would need this sort of resource... So when I'm not running things, it could also benefit others on the team that needed GPU resources, and were either gonna pay for those or get their own machines.

**Break:** \[00:18:11.22\]

**Chris Benson:** Okay, so now that we've talked about why you chose to do it, let's actually get into the machine itself for a bit, and let's talk about what you've built.

**Daniel Whitenack:** Sure.

**Chris Benson:** So in any way you want, just take us through a rundown of what it is that you've done, and maybe some of the choices along the way...

**Daniel Whitenack:** Yeah, sure. So I'm actually going to - while we're talking, I'm gonna pull up a couple links where I started my research... Originally, when I was looking at this I was like "Do I really want to roll my own workstation, and get all the parts and do all that? Or just get a really cool workstation, that is still gonna be really cool and sit by my desk, but isn't gonna require all of that work?"

\[00:19:52.06\] So I started looking at places like Lambda Labs, or System76. They have these pre-built deep learning workstations with 4-8 GPUs, different configurations... And I really liked the look of those and what you could do with them, but when I started calculating out the costs, it was gonna be pushing $10,000 to $12,000, which - rightfully so; they need to make profit on those, and there is a significant amount of work in terms of fabrication of what they're putting together, and the design in that, and making sure it's maintainable, and all that... But I was looking at definitely a lower price tag than that, in terms of what I could accommodate...

So I've found a couple of blog posts that appealed to me right out of the bat. The first one of these was from a guy named Jeff Chen, who is out in California... I believe at the time he wrote the blog post he was at university, doing research. It's from 2019, and the title is "How to build the perfect deep learning computer AND save thousands of dollars", which is obviously very appealing to me.

The next set of blog posts was from a guy named Curtis Northcutt. He has a few different builds, but one of them he talks about the best 4-GPU deep learning rig only costs $7,000, not $11,000. So if you remember, I was looking at those pre-built ones around $11,000. I didn't think I needed four GPUs in terms of the initial workloads I was gonna run, so I thought maybe I could also bring it a little bit under that price point... So my thought was I could follow something like these blog posts talked about, and get a workstation up and running for much less than what we would be spending over the summer in cloud costs if we were to run our workloads there.

But also, I wanted to get it expandable for the future, I guess... So start out with maybe two GPUs, but also have it expandable to maybe four GPUs, because I knew our workloads might expand, or more team members might come on the team eventually, and that sort of thing as well.

**Chris Benson:** Quick question there - you mentioned that you knew that you really only needed two; right now you would need the four... As an aside, real quick, how did you make that evaluation?

**Daniel Whitenack:** Yeah, not in a high-tech way...

**Chris Benson:** Okay.

**Daniel Whitenack:** So my logic on that front was as follows... Which is maybe not the best logic to follow, but... \[laughs\]

**Chris Benson:** Oh no, I can hear him caveating all the way through this... You just -- finger-in-the-air kind of thing.

**Daniel Whitenack:** Yeah, and I should -- maybe I'll just make a general disclaimer that I'm not a hardware person, so a lot of the choices I've made... I'm sure I'll have people come into our Slack channel and be like "Why did you do that?" I'm sure, and I already know a couple of things that I would change if I could, which - we can go into those later.

**Chris Benson:** Yeah, we'll get into that in a bit.

**Daniel Whitenack:** So this is a learning process for me, I'll just disclaimer that... But my thought process in terms of the two GPUs was that I didn't yet want to worry about multi-GPU trainings consistently. I've found in the past that generally, the time I sink into getting multi-GPU accelerated training working -- it's more complicated, and the time I put into that can be saved by just sort of loading that workload in to a single, higher-tier GPU.

So a lot of times I find that it's most easy to just do single GPU training, but on a higher-tier GPU, than do multi-GPU trainings all with lower-tier GPUs, if that makes sense.

**Chris Benson:** \[00:23:49.09\] Got it. So let me ask this - is it fair then to say that your training runs are... Since you have two GPUs, you're doing two concurrent training runs, versus doing a single one where you're using both of the GPUs there.

**Daniel Whitenack:** Yup. So the second logic with this is that I knew that primarily on these speech projects I was working with a single other main developer on this work... And so my thought process with that was while I'm running something on GPU one, he can be running something on GPU two.

**Chris Benson:** Got it.

**Daniel Whitenack:** So that's where the two came from... It was the fact that I assumed we would be doing mostly single GPU runs, and that there were two of us.

**Chris Benson:** Okay, fair enough.

**Daniel Whitenack:** And at some point, it would be interesting for me -- I would like to try some multi-GPU stuff... When I looked into this, there's a whole rabbit hole you can go down on this front...

**Chris Benson:** There is.

**Daniel Whitenack:** ...because certain cards -- so I actually have two different GPU cards in the machine. One is different from the other one; there's a 2080 Ti, and a Titan RTX. And those you actually -- so there's a special link between GPU cards called an NVLink, which is, I think, in my understanding, the best way to communicate data between the two cards. The fastest way.

**Chris Benson:** Yeah. And that's an NVIDIA technology between the two cards for networking...

**Daniel Whitenack:** That's my understanding.

**Chris Benson:** ...just for those who aren't familiar with it. It's proprietary technology from NVIDIA that gets you that great throughput for training purposes.

**Daniel Whitenack:** Yeah. So eventually, I'd like to try something with that. I think my understanding is that if you don't use that link, the sort of standard link through the motherboard, you don't always get the sort of boost that you might expect because of the communication bottlenecks between the cards.

**Chris Benson:** Yeah, and that's my understanding as well.

**Daniel Whitenack:** Eventually, I'd like to try that, but it may depend also on future workloads that I'm running, and what's needed there.

**Chris Benson:** Gotcha.

**Daniel Whitenack:** Yup. So that was the logic behind that, which meant that I needed a motherboard in the workstation that could support two GPUs, but I also wanted it to be expandable.

**Chris Benson:** Expandable. I remember you mentioned that.

**Daniel Whitenack:** Yeah. So the blog post by Jeff Chen, who - Jeff, if you're listening to this, thank you for your blog post; reach out if you are listening, we'll grab you a shirt... But it talks about all sorts of things, and probably some of it is -- so I noticed some of the things, some of the parts have even been updated since he wrote the post... But most of it was still relevant when I went through. And he also talks about trade-offs, and he goes down and he talks about expandable... So making sure that you build things expandable, and that sort of thing, so that's where I kind of got that idea...

What I ended up doing was getting a motherboard which -- actually, this reminds me... So in our show notes, I think one of our listeners asked for this at some point in our Slack channel, too. I'll post the part list that I used in our show notes, if anyone's curious about the parts that I use... So don't feel like you have to frantically write down part numbers, or something... And I'll probably mispronounce the names anyway, but I'll put the parts list in our show notes. But it was from Gigabyte Motherboard, and I don't know how to say this... This is gonna be where my ignorance comes in... Aorus... A-O-R-U-S Pro.

**Chris Benson:** Good enough. I have no idea. \[laughs\]

**Daniel Whitenack:** So that supported actually four. So I could run four, although it seems like a tight fit. I don't know if this is just me and my inexperience and not knowing that things are that tightly fitting... I could definitely fit four, I think, but right now I have two spaced out, so there's a slot in between the two that I have in there; there's actually a slot at the bottom... And then I have one in the next slot up, and then there's this empty slot, and then the final one. So they're actually spaced out a bit. If I were to put all four in there, now seeing that, they would be pretty tightly packed. So depending on ventilation stuff, that may be an issue.

**Chris Benson:** \[00:28:17.05\] That's what I was gonna ask. Coming at it from someone who also does not do hardware and has not built a system in quite a while, but having previously put NVIDIA cards in that had big fans, and things like that - when you talk about slotting it in, is that including those ventilation capabilities, or is that without that?

**Daniel Whitenack:** Yeah, so as I learned, there's a bunch of options here as well, and there's two main types of cards. There's actually a blower style card, which pulls in air from one side and actually shoots it through the card and out the back of the computer, and then there's another style, which people might see in pictures, where there's two or more fans on the bottom, and it just sort of blows down. It blows from top to down, and drives air away from the card.

This is actually really interesting... On Curtis Northcutt's blog he talks about double deep learning speed by changing the position of your GPUs. And when he's talking about positioning, he has a mix of blower style and non-blower style GPUs. So what happens is when you put one of those non-blower style GPUs on top of another one, it actually just blows the heat into the other one, and heats it up, and it degradates performance.

So the positioning is actually really important here in terms of managing the heat on those. So you kind of wanna shoot for those \[unintelligible 00:29:44.08\] at least depending on how many you're gonna have and how you position them, you're gonna wanna worry about that positioning and the flow of air.

Actually, this is one of my new moves as well, but I ordered case fans, and I thought I was just getting a case fan, but the order that I did on Amazon - it was actually a pack of four... So I ordered what I thought was two case fans, and I ended up with eight...

**Chris Benson:** Okay...

**Daniel Whitenack:** So I just plugged in as many fans as I could into the motherboard, and - yeah, I forget how many I ended up with, but there's a lot. So yeah, the ventilation and all of that is definitely a big deal with the GPUs.

**Chris Benson:** So are there variants in what you saw? Maybe you didn't have a big enough sample, but... In motherboard design, clearly, that can have a fairly profound impact on what your GPUs can do.

**Daniel Whitenack:** Yup, that's a great point. I'm speaking a little bit outside of my domain of expertise here, but this is what I learned off of blog posts, and that sort of thing. One of the things you wanna look for with your motherboard is what it talks about with PCIe lanes.

**Chris Benson:** Yup.

**Daniel Whitenack:** This is, in my understanding, the lanes of communication between your CPU and various other things that are connected to your motherboard, like your hard drives, or other things. What's gonna happen is when you start adding GPUs, you're gonna start filling up those lanes. According to the Jeff Chen blog post, as a general rule - this is probably not true maybe across the board, but as a general rule you might think that each GPU requires at least eight of those PCIe lanes... And so what you have to do is you have to find a combination of CPU - because that determines some compatibility with the motherboard. So a combination of CPU, then a combination of motherboard that gives you enough PCIe lanes to support the number of GPUs that you need to support.

\[00:31:59.13\] So there's a little bit of arithmetic there; nothing too complicated, but you have to be sure... Because some CPUs and motherboard combinations - the pairing will not support the needed number of PCIe lanes that you need to run those, and then also run... So I added a solid-state drive for my hard drive, and actually on my desk I have a second one, because I already filled it up... That's one item on my "Didn't do it right" list.

**Chris Benson:** We'll get to that in a few minutes.

**Daniel Whitenack:** So I have a solid-state drive, and that also takes up some of those -- I have an M.2 solid-state drive which is just a little bitty gumstick-sized hard drive... And that requires a certain number of lanes.

You also wanna think about your storage, and that sort of thing, and how much RAM you need to support in the machine as well. All of that stuff went into the motherboard. I just kind of took some recommendations from various blog posts on that. Again, I don't follow this stuff religiously, so I don't know all of what's out there, but I was able to find a combination that worked.

**Chris Benson:** Do you have a current list? I know you're gonna put it onto the show notes, but I'm just curious if you can highlight what the RAM was, at least size-wise, that kind of stuff...

**Daniel Whitenack:** Yup.

**Chris Benson:** ...and just give us the highlights without going too deep.

**Daniel Whitenack:** Yeah, here's the highlights. The motherboard - I mentioned the CPU I got was actually a... So this is one thing that probably looking back I would change... For some reason at the time I got a Ryzen Threadripper CPU. And not that it's bad, it actually works quite nicely. It's an AMD chip. I think looking back, especially with my experience with the other Intel machine that I have, I would go back and change that to an Intel CPU... We can talk a little bit more about that here in a second... But that was the CPU I used. Then I ended up using a total of four sticks of RAM for a total of 64 gigabytes of RAM. Then I have one of the M.2 solid-state drives which is a Terabyte Samsung drive...

One of the other things you have to be careful about with this is the power supply. You need enough power to power the GPU's and all of that as well... So that was actually one of those things that turned out to be more expensive than I thought in terms of looking around and finding an appropriate... I ended up choosing one that -- actually, someone already gave me some feedback in our Slack channel; maybe it's not the best power supply, but it does the job. Rosewill Hercules... And then some case fans. I used the air-cooled CPU cooler, not like -- I didn't feel quite comfortable enough yet to run all sorts of liquid through my machine... I figured that, knowing myself, I would break a tube and ruin everything in my computer...

There was some study I've found -- I actually probably couldn't find it again... And maybe it was just confirmation bias, but I've found -- I think it was some YouTube video showing how the good air-coolers will actually cool better than a lot of the cheaper watercoolers or radiators... So that gave me some confidence there.

**Chris Benson:** Now that you've kind of talked about these components, and you started to tell us a little bit about some of the things that you've learned and might change as you've gotten some education, kind of go back through and what would you do different -- you've already started on that line, but I'm kind of curious... There's a big learning process that you had to go through this, and neither one of us are hardware people, so what do you know now that you didn't know before?

**Daniel Whitenack:** \[00:35:55.11\] Yeah, so there's a couple of things. Probably the funniest thing is my case doesn't close... \[laughter\]

**Chris Benson:** Does that affect the airflow then, and the cooling?

**Daniel Whitenack:** Well, if anything, it improves the airflow, or at least that's what I tell myself... So I've got a case -- actually, I think it's the same case from that blog post that I keep mentioning... And I was like "Well, I don't wanna worry about finding a different one. I'll just use the same case. But what I didn't realize is -- so each of the GPUs, at least certain GPUs require power directly to the side of the GPU. And the power cables I got with my power supplier are fairly rigid; they're not super-bendy... So when I bring them in the side, they kind of stick out the side, and I can't close my case...

**Chris Benson:** They're that rigid?

**Daniel Whitenack:** Yeah, yeah

**Chris Benson:** Wow.

**Daniel Whitenack:** They do make these little 90-degree connector deals, that you can buy -- basically, I got it up and running, and set the side of the cases to one side, and I haven't really looked back. Probably at some point maybe I would look into those, but -- or bendy cables, or just a large case. It's a pretty big case, but it's that point between the motherboard and the GPUs and the case; that width. It could actually expand out in the case the other way... So that's one thing, there's that spacing.

But I mentioned this other machine that I've been running, which - I actually really enjoy doing stuff on this machine. It's an Intel-based machine that we're using as a target system, to test out certain of our pre-trained models for inference and test out our applications on there... And we have some speech applications we're testing, and that sort of thing. It's one of these Intel-based NUC computers... They're little, smaller computers, and they have -- I think the one I have has an Intel i7 processor in it. No GPU in it, but it has a lot of RAM, so 64 GB of RAM, and I have found a lot of the speech processing and pre-processing stuff on there is super-fast. I really like the performance on there. Not that it's amazingly slow on my workstation... That's sort of our target system for our applications, is an Intel-based system. So at the time when I was building the workstation, looking at what was available online for building these - I could get an Intel-based motherboard and a processor, but it was a price hike.

**Chris Benson:** Right.

**Daniel Whitenack:** And looking back, I would tell myself to just go ahead and take that price hike... Because if that was the case, I wouldn't constantly be moving models around between these two systems to do my testing... The way I understand it, the Threadripper, the AMD chip has more cores... So if yo're doing a lot of multi-threaded stuff, it's really good. But the single-core speed on the Intel processors is higher. So depending on what your workload is, then you could actually get a performance boost, even though you have fewer cores, but with a higher core speed with the Intels. All of that stuff - it seems to work a little bit better for me... And this is just my own personal experience.

**Chris Benson:** This is all inference you're talking about here, right?

**Daniel Whitenack:** Inference, but also pre-processing. CPU - I'm doing all my pre-processing on this machine too, and pre-processing is also part of that CPU workload that you have to consider. And I use Intel's OpenVINO toolkit to optimize the models for running on Intel CPUs. So if all of that was in a single workstation -- like, I had the Intel CPU and the motherboard, and I could do the pre-processing, I could do the model optimization, all of that together, rather than swapping back and forth, or doing that in separate places. I think just the saving in terms of my workflow would be useful.

\[00:40:09.11\] So that may be one thing to keep in mind - those other pieces of your workflow, like optimizing your model for certain hardware, or pre-processing as well. Those are things that you need to think about. Those are equally valid things to think about when you're designing a system.

**Chris Benson:** So just as an aside, since you were kind of touching on it for a second... If you look at what your existing workflow is from beginning to end and the choices that you've made, what are each of the big pieces? What frameworks are you using, and all that? ...just to throw it out there, so that people can get a context for it.

**Daniel Whitenack:** Yeah, so we're using both TensorFlow and PyTorch in our work. It depends on the certain application, but we have a couple of different products that we're developing, that include multiple models in each of these products. Some of them are TensorFlow models, some of them are PyTorch models. And we have both text and speech pre-processing elements that are in there as well.

We generally save most of our training data in Amazon S3 or DigitalOcean Spaces, some object store, and then we'll pull that down to the machine and pre-process it, and then save that pre-processed data for training and testing and evaluation; we'll save that actually on the workstation, that way we don't have to constantly be pulling from some remote source for the data. And then once we have that locally, then we can iterate on our model training, whether that be with TensorFlow or PyTorch. That's all done within Docker. Like I mentioned, we don't actually have really much at all installed on the machine itself, so we pull down a TensorFlow or PyTorch, or our own custom Docker image, run that... We haven't had any issues in terms of connecting to the GPUs with Docker, so that's worked out great.

**Chris Benson:** Are you basing it on NVIDIA Docker containers?

**Daniel Whitenack:** Sometimes, yeah. Sometimes. We have our own custom containers we're using as well, or like I mentioned, sometimes we also have containers for certain optimization frameworks that we're using, like Intel's Openvino or others that optimize our models for certain targets. Those are sort of a mix.

And then after that, in the products we're building we have a custom way of bundling our models together in what we call a model bundle, for a specific deployment. So that model bundle needs to be built and encrypted, and then that's actually pushed back out to our object store in S3 or Digitalocean Spaces, depending on the application. And that model bundle is saved there. Then for deployments of that system, that would then pull down that model bundle from the object store and run with that.

**Chris Benson:** Earlier when we were talking about motivations and you talked about the breakeven there, you kind of figured out what made sense, but obviously, when you made the choice and you're not going with cloud because of the breakeven in that case, what are you thinking in terms of your upgrade? Because we've talked about being able to fill in with more GPUs and enhance the capability of the box, but what about over time, as GPUs start to age - what's your thinking there that makes that a good choice from your standpoint?

**Daniel Whitenack:** \[00:43:32.15\] Yeah, right now I have no choice there, because I can't get my hands on any more GPUs, because they've all ceased to exist on the face of any website on the internet... So I can't get my hands on any. But I think right now we're in a pretty comfortable spot in terms of the workloads that we're running... However, we're ramping up some of the work on these prototypes that we've built. I'm guessing if those catch on and are productized a little bit more, then we'll have a need for an interesting new workflow which is a bit more automated.

So right now, most of what we've been doing - on this machine at least - is prototyping work and preparing very custom deployments for very specific applications. In the end, we're going to build a bit more of an automated workflow. For example, one of the things we're doing is spoken language identification. So audio comes in, and then we detect what language is being spoken in that audio clip. So if for example in a certain application we want these four language instead of the six languages that we originally had in our model, we wanna be able in a very quick way to spin up a pipeline that would redo the training with different combinations of data. That's something that I think would be interesting...

I know we've had a couple of conversations recently... There's a lot of ways to do that. One of those - we've talked to the Pachyderm crew before on the podcast; they have a great pipelining system.

**Chris Benson:** Definitely.

**Daniel Whitenack:** We've also talked to (I remember) Allegro AI has a sort of training and automation system that you can run on an on-prem instance... So that may be another option, that I can install that Allegro system on the workstation and run it that way. There's a lot of different options there that we could possibly use. And also upgrading the sort of monitoring there.

Right now, that process is fairly manual as well, so maybe utilizing, like I mentioned, maybe something more than TensorBoard. We just had a conversation with Weights & Biases CEO...

**Chris Benson:** Sure did.

**Daniel Whitenack:** ...Lukas Biewald, and he talked about the great stuff that they're doing... And all of that is, I think, not too hard to implement in that workflow. So those are some of the things on my mind.

**Chris Benson:** As we're closing out here, at this point would you do the whole thing over again? Because it sounds like you've learned a lot, there's definitely some cost advantages to what you've done... But I also know that as we recorded various episodes over the weeks that you were engaged in this, that there was a lot of work involved...

**Daniel Whitenack:** There was...

**Chris Benson:** \[unintelligible 00:46:24.14\] along the way. Was it worth it?

**Daniel Whitenack:** I think it depends on -- I mean, of course your need, but also your personality. I really enjoyed this. It was something that I've found a lot of enjoyment in, and I think that was worth it in and of itself. But if I was to look back, I would definitely do it again. I think the things, like I mentioned, that I would tell myself in retrospect is "Don't skimp on the CPU or the RAM, and over-project your data storage. So go ahead and get yourself whatever it is, 4 Terabytes, or whatever it is - something that you're not gonna fill up quickly - as soon as you start working with speech or video data, or something like that.

One Terabyte seems like a lot, but it's not, it turns out. It's easier than you think to fill up that space, so get yourself -- even if it's some cheaper hard drives that can be just sort of cold storage, do that... But yeah, it was a fun experience, and I would definitely recommend doing it. It's fun to have that sitting by me in my now home office... And now we don't have to heat our house quite as much... It's just winter, so it's good timing.

**Chris Benson:** Side benefits you get there. Okay, well that was pretty cool. It's long overdue, this conversation. I'm looking forward to seeing what listeners inform us, because both of us are -- this is not our specialty.

**Daniel Whitenack:** Yeah, be gentle.

**Chris Benson:** Be gentle on Daniel... \[laughter\] It'll be interesting though to see what we get in the Slack channel, and other social media; the LinkedIn group, and stuff... And see if anybody can school us a little bit. Maybe this is one of their things, and they have that knowledge, so looking forward to hearing people share that.

Well, Daniel, thank you very much for taking us through this. I'm glad that you did, and thanks for teaching.

**Daniel Whitenack:** Yeah. Talk to you later.

**Chris Benson:** Talk to you next week, yeah.
