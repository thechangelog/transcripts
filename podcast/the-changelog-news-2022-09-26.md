**Jerod Santo:**

Hello, friends. I'm Jerod and this is Changelog News for the week of Monday, September 26th 2022. Let's do this.

**Break:**

**Jerod Santo:**

Mozilla reaffirms that Firefox will continue to support current content blockers. Why does that matter? Because Chrome (and Chromium-based browsers like Edge and Brave) are moving to a new manifest, version 3, which hamstrings version 2's blocking WebRequest API. This API powers many blockers, such as the massively popular uBlock Origin extension.

To be clear, content blocking will still be possible in Chrome once manifest V3 roll out, but it will be limited in what all you can do. For example, setting up custom filter lists or using multiple extensions that rely on the API might run you into artificial limits set by Google.

As we all know, the GOOG is highly incentivized to block ad blocking.

**Mark Normand:**

[Give it a goog!](https://www.youtube.com/watch?v=g5iVkEmGtIw)

**Jerod Santo:**

Now that Mozilla has reaffirmed their position, a renewed interest in Firefox has been on display on social media sites like Reddit. Over the years, Firefox has seen its once substantial browser market share dwindle to low single digits...

**Terry Malloy:**

[You don't understand I could have been a contender.](https://www.youtube.com/watch?v=efHzGxEzDQA)

**Jerod Santo:**

Maybe this is just the boost it needs to remain relevant and fight back against Google's web browsing hegemony.

**Break:**

**Jerod Santo:**

Nabeel Suleiman thinks NATS is great and recommends you check it out if you're running any kind of microservices architecture. What is NATS, exactly? Nabeel describes it as a light-weight, easy to deploy service that provides pub-sub functionality with very little fuss. It is a tiny application, written in Go, that listens on a port for connections from clients.

His blog post on NATS started a nice discussion Changelog News where Dwayne Bradley agreed that more people should investigate NATS. He says there are so many things you can remove from your infrastucture by using it. Things like load balancers, firewalls, VPNs, traffic shapers, services meshes, Kubernetes, and more.

That's a compelling list of things you might not actually need.

**Break:**

**Jerod Santo:**

You may have heard of Uber's recent security breach, but have you heard how it went down? Turns out it was a new vector for the oldest technique in the book: social engineering

The attacker disguised themselves as Uber IT and spammed the target with repeated multi-factor auth requests until they eventually authorized access. Uber believes the attacker had previously purchased the user's password on the dark web and performed the MFA fatigue to subvert the last line of defense. Once they had access to Uber's intranet they scanned the network until they found a PowerShell script with admin credentials and it at that point, it was pretty much over.

**Negan:**

[Easy peasy lemon squeezy]()

**Break:**

**Jerod Santo:**

Speaking of auth... you know what's difficult to grasp? OAuth2. Aaron Parecki spent an entire episode of The Changelog with Adam and I explaining it to us and by the end he was like...

**Detective Carter:**

[Do you understand the words coming out of my mouth?](https://www.youtube.com/watch?v=I8t52ROZCxg)

**Jerod Santo:**

Good news if you're a visual learner, Klemen Sever explained OAuth2 by drawing cute shapes. Describing those cute shapes would be a waste of your time and mine, so we'll just link to his drawings in the show notes. One Twitter commenter had this to say about Klemen's effort: "I thought its gonna be one of those cringe 'look I just bought an ipad with a pen drawings', but these were actually pretty good!"

To which Klemen responded: "Thanks, I guess"

**Helent Hunt:**

[That might be the best compliment of my life.](https://www.youtube.com/watch?v=LrtpRNsdfYs)

**Break:**

**Jerod Santo:**

Jorge Manrubia writes: "Back in college, they told me that I would start my career writing code, but eventually, I would move to a position where I would ask others to code my designs. To celebrate that this turned out to be completely false, here are some assorted reflections as a 40-year-old programmer that looks back:"

What follows is a bulleted-list that includes thoughts like: "I don't enjoy switching contexts. My perfect agenda is composed of a single meaty task I can focus on for days." and "I am way more cautious when deploying things."

He finishes up by answering a Quora thread, which asks: "Do people lose interest in programming as they age? Is it accurate to expect that older programmers are slower, make more mistakes, and would rather be doing something else such as managing programmers?"

Jorge's answers: No, No, and no.

**Break:**

**Jerod Santo:**

That is the news for now. We'll be back in your ears on Friday when Adam and I are joined by our good friend Lars Wikman (or as we Americans lovingly refer to him: Lars Wikman). To support our chaptering efforts, Lars wrote an open source Elixir library for us that reads and writes ID3v2 tags. He picked up a bunch of esoteric knowledge along the way. Like, did you know each mp3 may have an embedded popularimeter inside the file?

If you like nerding out on specs, waxing nostalgic for the good ole' days of Napster, or ever wondered what it's like to have me hire you to write some code, you're gonna enjoy this one.

Have a great week and we'll talk to you again real soon.
