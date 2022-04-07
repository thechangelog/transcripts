**Gerhard Lazu:** End of January, one of our Ship It listeners reached out to me via the Slack Changelog, "I've built a replacement to cert-manager. Does this interest you?" Well, welcome to Ship It, Nabeel. That answers your question. \[laughs\]

**Nabeel Sulieman:** Thanks. It's really great to be here.

**Gerhard Lazu:** Okay.

**Nabeel Sulieman:** I've been a long-time listener to the Changelog family of podcasts in general, and yeah, it's pretty exciting to be here.

**Gerhard Lazu:** So a lot of stuff happened in the background since you sent that message. That was January. We talked plenty. The thing that you built made a lot of progress in a couple of months. You wrote a few blog posts, you shipped 1.0... That was amazing to see. So this thing is ready for primetime; and I'm not going to call it production, ready for primetime.

Before we started the recording, we tried it out, and we got everything set up and it was amazing. Let's see if we can share the video. We'll see if we can edit it, if we can get it in a nice, shareable format... But that would be cool to see how we set it up. So we had KCert and then the date .changelog.com all up and running. That was nice. So why did you build KCert, Nabeel?

**Nabeel Sulieman:** It's been kind of a long journey, actually. So when I started using Kubernetes, I was using Traefik as my ingress controller, and it basically handled your routing to your services, as well as your certificates, all in one service, and it worked very well. But then I ran into some issues with Traefik, and maybe it's changed by now with the newer versions of it, but I couldn't deploy Traefik to multiple nodes to have high availability in my cluster. And that took me to using--

**Gerhard Lazu:** \[04:36\] Do you remember, by any chance, which version was this, or roughly the year -- I don't know, two years ago, three years ago, just roughly?

**Nabeel Sulieman:** Yeah, definitely two years ago. I have blog posts for all of those experiences.

**Gerhard Lazu:** Nice. Okay.

**Nabeel Sulieman:** I moved to NGINX and cert-manager for using in my cluster as well, and that worked great. It worked for quite a while. But then at some point there was like a DNS issue, and cert-manager just stopped renewing certs. And I went online and I found a few people having the same issue, but there wasn't a clear solution to it. So I ended up learning how to create certificates manually in my cluster. I would literally start a pod with certbot on it and manually issue a certificate from there, because cert-manager just wasn't working. It wasn't cert-manager's fault necessarily, because I think it was a DNS issue in Kubernetes itself; but still, I was blocked and I had to learn how to do this.

So basically I realized now that I know how to create my certs manually, I hope I don't have to do it manually three months from now. I decided to do it myself for the learning opportunity. So I implemented the RFC 8555, the Letsencrypt ACME RFC myself in .NET, and got it working, and just gradually built it out into like a fully functioning certificate manager on my personal cluster. And then I open sourced it, yeah.

**Gerhard Lazu:** I love that story. The open source part? Amazing. But the fact that you had a problem and you complained about it... I was looking at the issue, the cert-manager, before we started the recording; you did Kubernetes SSL certs the hard way. This is October 2020. I was expecting a longer a blog post, but still, I clicked the link. There's a one link, "Read more about this issue here." I clicked it, and that's a great conversation on the cert-manager, GitHub repo about this specific issue. And I have to say from that I didn't get just how difficult it was for you to do it the hard way. I think that having a guide of how to do certs the hard way for Kubernetes would be amazing.

**Nabeel Sulieman:** That exists. Did you not see the link there?

**Gerhard Lazu:** No, I didn't. I missed that.

**Nabeel Sulieman:** It's literally a GitHub repo that just has a markdown file in it, with all of the instructions of how to do it manually.

**Gerhard Lazu:** No way. I missed this. That like 17 months ago. Okay, okay. That was October. Okay, so ten days later. Was it ten days later? No, it was actually you commented-- okay, that's when you shared it. Let me see. Let me just go through this. That was August. Okay, so the issue started-- so this is issue 3238 in the cert-manager repo on GitHub and-- oh, hello. There's someone, Maartje. Maartje answered as well. Okay, "Can you access--" Okay, triage support. She was part of support. September. Oh, I see... Okay. So September, and this has been going on for like about a month and a half. Did you have enough time to renew your certificate? By the way, what happened? Did you fix it?

**Nabeel Sulieman:** Yeah. Figuring out how to do it manually, with certbot in the cluster - that took a couple of days and I figured it out, and then maybe a few weeks later I wrote up the instructions and I shared it.

**Gerhard Lazu:** Okay.

**Nabeel Sulieman:** It wasn't terrible. Of course, it's a very manual process. I think I set up an NGINX server as well in my instructions, and then you copy-paste the token into a file, so that the ACME HTTP challenge works, you know?

**Gerhard Lazu:** \[08:12\] Wow, that's really cool. Okay, I'm just looking at this now, and this is amazing. This resonates with me, because only recently we had Kelsey on the show, and he was saying how Kubernetes -- documenting things the hard way, capturing that is possibly one of the most valuable things you can do. Forget automation; documentation first, automation next. That's what you did here.

**Nabeel Sulieman:** Yeah. There definitely value going in and learning how to do things the hard way, so that you understand it. At least if your automation fails, you have a backup plan, no matter how painful it might be.

**Gerhard Lazu:** So to me, this page, the K8s Letsencrypt repo in your @nabsul github.org -- it's not an org.

**Nabeel Sulieman:** Ah, yeah, my personal stuff. Yeah.

**Gerhard Lazu:** Your personal GitHub. We'll drop it in the show notes, because this is great. To me, that is so valuable, the step-by-step instructions. Okay. So you documented it, and then how did you transition from that to building KCert? What did that journey look like?

**Nabeel Sulieman:** Well, doing things manually helped me understand a lot more how Letsencrypt works, right? But of course, there's still a lot of missing steps in the middle. So really, from there I went to the RFC docs, right? So there's the RFC of how the ACME API works, and how you use it to issue a certificate; to like request a certificate and then prove that you're the owner of that domain, and then you get the final certificate. It's a multi-step process.

I looked around to see if there were any .NET -- I had decided I wanted to build this in .NET, because I really like C\# in general as a language. I think .NET Core has evolved a lot over the years, and it doesn't really get as much love as it deserves, so I decided to give that a shot.

But looking for libraries, I didn't find a library that really clicked with me, so I decided to build it myself from the primitives, from scratch. So it really was just I started writing a CLI tool in C\# that would just do step by step the process of issuing a certificate, got it working... It took a lot of debugging. And then once I got it working, then I wrapped it up into like an actual Asp.net service that will run and read the Kubernetes-- it will look at your Kubernetes cluster and create like secrets and all of that.

So it was definitely a side project, it took a few months, at least, probably more like half a year to get done. And then I tested it out on my local cluster for a while. Initially, for example, I don't think it supported renewing certificates at all, or at least it didn't support automatic renewals. So I would have to go in and manually renew my certificate. I would have to remember to manually renew them, you know? So later on, I hooked up automatic renewals and cleaned things up. And when I felt like it was at least beta worthy, that was when I open sourced it.

**Gerhard Lazu:** Okay. So you mentioned that this started because there was a DNS issue. Does KCert use DNS?

**Nabeel Sulieman:** So that's actually a funny question, in a way...

**Gerhard Lazu:** \[laughs\] Go on.

**Nabeel Sulieman:** So if I understood it correctly, the bug in cert-manager was that cert-manager, when you request a certificate, before issuing the certificate, cert-manager will check if you really do have your DNS configured correctly to point to cert-manager to receive the challenge, for example. And that was actually the bug in Kubernetes. Kubernetes was failing such that when you tried to check the hostname, because that hostname was already part of your Kubernetes cluster, it was doing something weird, and therefore, the request was failing. And so cert-manager would say, "No, it doesn't look like you actually have your DNS configured correctly", and it fails.

**Gerhard Lazu:** I see.

**Nabeel Sulieman:** \[12:02\] Cert-manager just doesn't do that simply. Cert-manager just trusts that you have your configuration correct. And, I mean, worst-case scenario, the HTTP challenge never arrives and the renewal times out and you'll get an error message at that point. Probably the way cert-manager does it is better, but at least KCert works, and it's convenient.

**Gerhard Lazu:** So how does KCert do it?

**Nabeel Sulieman:** So the way KCert works is when it decides that it needs a certificate to be created, what it will first do is it will create an ingress. It'll create a temporary ingress that will route just the dot well-known acme-challenge path to itself, to KCert. So it'll create that ingress temporarily, and then it will start the certificate renewal process. So it will contact Letsencrypt and say, "Hey, I want to create a certificate for these hosts", and then Letsencrypt will reply and say, "Yes, these are the paths that I'm going to issue my challenge on", and then KCert tells Letsencrypt, "Okay, I'm ready", and the acme-challenge comes in through that HTTP challenge path. KCert responds to Letsencrypt to prove that, "Yes, I really do own this secret for that stuff." And then finally, Letsencrypt will give you like a URL to fetch the actual certificate. So it will fetch the certificate, and then it will save the certificate in a Kubernetes secret, and then it will delete the ingress. And that's basically the renewal process.

**Gerhard Lazu:** Right. Okay. Now, I'm wondering if this could have helped one of the issues which we had when we were migrating a couple of years ago between one Kubernetes cluster to another. So first of all, we never upgrade Kubernetes in place. We always create a new Kubernetes version, and then we do like a long blue-green. So when we were doing this actual switchover from the blue to the green one, or green to blue, it doesn't matter which way, we had to create the certificates, obviously, but the DNS was still pointing to the other cluster, and there was like a load balancer and all that, so we had basically another IP.

**Nabeel Sulieman:** Yeah.

**Gerhard Lazu:** And even though we did update the DNS because of caching, that didn't propagate in time. So what that meant is that we were not able to get certificates for the new one, it was failing, and then it was serving the self-sign certificates, the community self-signed, and then everything just basically broke. And because of the throttling on Letsencrypt's side, we just couldn't re-request after the DNS propagated correctly; it was like a few minutes later.

**Nabeel Sulieman:** Yeah.

**Gerhard Lazu:** So I'm wondering if KCert would have helped with that... First of all, because how it does the challenges and how it serves the challenge itself - would that have helped? I don't know. Would it have helped?

**Nabeel Sulieman:** Honestly, the great thing about certificates is they are a very slow-moving piece of data. Your certificate is valid for two months, and then you have 30 days to renew it... So you have this three-month window to do anything. So I don't think you really have to worry for certificates about switching over and doing everything really quick, and things like that.

**Gerhard Lazu:** Okay.

**Nabeel Sulieman:** The way I would do this migration is actually copy the certificates that you have from your old cluster to your new cluster, and then just take your time to switch your DNS over, and things like that. Make sure that your certificates are valid for at least another 30 days or so... And then you don't really have to worry about like all of those race conditions that can happen and things like that. And you can literally do kubectl, get secret, pipe, kubectl, create secret. It's like a one liner to copy a secret from one place to another.

**Gerhard Lazu:** \[15:58\] That's right. That's right. Okay. Yeah. That makes sense. Now, in light of the discussion with Kelsey, there's two things wrong with this approach. First of all, decouple your compute from your control. So wherever you're running your workload, it shouldn't be the same place that manages everything else, which is what we do. And so DNS runs in the same cluster, so that's the config, the control, which is bundled together with the compute... So you need at least two clusters. And then when you do that, there's a way - how do you get the certificates from wherever you're running it in cert-manager, but okay, because we already have a job which syncs them from our Kubernetes to our CDN - and there's like a story there, but let's not get into it now, why still need to do that... So if we had this other control cluster, then this would not be a problem, in that you don't have to worry about migrating external DNS and cert-manager and your workloads and everything else. So you decouple those concerns. The other thing would be obviously around storing a source of truth for the secrets not being Kubernetes; like have an actual secret store, like a vault, or whatever.

**Nabeel Sulieman:** Yeah. And I agree with that, actually. I mean, KCert does not help with this problem really, but I do agree. And this is one of the things-- it's funny, the original thing that I reached out to you for, that I was talking about, was actually a replacement for both NGINX and cert-manager. It's actually a reverse proxy. And what I've been experimenting with there is taking both the Ingresses and the certificates all out of the cluster and just fetching them from some other source of data that's completely outside of your cluster. And I have a feeling that's probably the better way to do it. Even if you do have your Secrets in Kubernetes, they should come from some other source of truth.

**Gerhard Lazu:** Exactly. Exactly. That's something which I'm very excited about, to work towards a model and implement a solution which has that.

**Break:** \[17:53\]

**Gerhard Lazu:** Okay, even though I didn't want to get into this detail, now I think we need to, because we're talking about certificates... So the question is, why do we need to sync our Letsencrypt certificate to our CDN? That doesn't make sense, because a CDN can manage the certificate for you. Okay. If we do that in Fastly - and this is Fastly-specific; maybe other CDNs do it differently. But in Fastly, for you to manage your own certificates, you need to verify that you own a domain via a DNS record. So you need to create a CNAME record with a certain name, Fastly, something-something. I can't remember the details exactly. And then Fastly will manage Letsencrypt certificates for you. But if Fastly does that, you won't have access to that private key. What that means is that Fastly will have those certificates and it will serve all the traffic encrypted. But then if you have another place where you want to use those certificates, you can't.

\[20:32\] And because you have a CNAME record, it means that Fastly is the only one that can have the ACME Letsencrypt integration. If you wanted to, for example, use cert-manager or KCert, what I imagine would happen if you need to do any cert verification that way, but I think with KCert - do you have DNS validation verification? You don't have that option.

**Nabeel Sulieman:** No. Yeah. It only supports--

**Gerhard Lazu:** It's just HTTP?

**Nabeel Sulieman:** Yeah. HTTP, exactly.

**Gerhard Lazu:** Okay. So cert-manager, in our case - it does support DNS. And as far as I know, in the ACME protocol, you need to use DNS validation if you provision wild card certificates, which is what we do. You can't use the HTTP challenge to get wild card certificates. And we need that to get a wild card for both whatever sub-domain we have on changelog.com. So when we do that, we do DNS validation, but Fastly owns that CNAME records. In the RFC, in the DNS RFC spec, again, you can only have one. So if it supported text records, that would be fine, and Fastly would figure out, "Hey, is there a text record that matches what I need?" But two years ago, they didn't use to do this.

**Nabeel Sulieman:** Yeah.

**Gerhard Lazu:** So what that means is that cert-manager today manages our certificates, and then we have to upload them to Fastly, even though cert-manager manages them, because there is no integration currently that cert-manager has with Fastly, and it can't automatically upload them there.

So our source of truth today for the certificates is Kubernetes, we store them as secrets, and then from there, we sync them to other places. Today it's just Fastly. But if, for example - and this is happening right now, we're migrating to Fly... If we want to use the same certificates, then we would need to sync to Fly.io as well, because it's almost like we have the old-school unmanaged certificates, which we used to pay for. Obviously, that's not the case, because we use Letsencrypt, and it's all nicely managed and automated, and all the renewals and everything. But because of these interactions and these limitations, we can't get our certificates to those places.

So long story short, and - because this was leading to a question... How would you solve that problem? What would you do in that case? I mean, you understand the different limitations and you know what we need to do. What are your thoughts there? What would you recommend?

**Nabeel Sulieman:** It's kind of an interesting problem. I guess it depends on how much time you have to solve the problem. Honestly, if the tooling that you have for issuing the certificate is already geared towards-- even if let's say you were going to use KCert, you could use KCert and you issue your certificates into your cluster, right? And then you could automate the syncing part separately. And in that case, you've kind of decoupled the problems. So even though your certificate manager happens to be doing things at the level of your cluster, and maybe that's not really where you want to store things, if you have some automation that will pull that data out of your cluster and then put it in whatever your source of truth is, like something to bubble it up, and then from that point, you can have your automation that deploys it to every place else that needs those Secrets.

And so that way you kind of decouple the whole problem into three things, right? Issuing the certificates, getting the certificates to your source of truth, and then getting it from the source of truth to everything else. And that's how I would do it, if you wanted to do it without trying to reinvent everything from scratch.

**Gerhard Lazu:** For sure. Okay. So let's imagine that we were using KCert for issuing certificates and renewing them. There is the wild card certificate limitation. So we are aware of that, and then that's all good. We would need to somehow sync those certificates somewhere. Now, you mentioned that's something that you were thinking about doing before. Are you still thinking about that, knowing that that's something that I would need as well? Does it help? Do you see where I'm going with this? \[laughs\] Feature request? I don't know.

**Nabeel Sulieman:** \[24:16\] If I was going to do this too in KCert itself, what I would have to do is-- I intentionally named KCert 'KCert', with the K, because it's Kubernetes only, right? It doesn't actually deal with anything else. But theoretically, we could abstract the storage interface that KCert uses. And it doesn't have to use Kubernetes primitives. It could instead fetch your certificates and save them to a vault, or whatever. It would actually not be that hard of a change to do it. But I think what ends up becoming tricky is, "Okay, well, where should I store it? Should I store it to Azure Key Vault? Should I support AWS's version of that? Should I support HashiCorp's K-Vault?" There's just so many options there, and it gets harder to do.

**Gerhard Lazu:** Yeah, for sure. Okay. So if we call it AnyCert, I think that's the first step. Rename it from KCert to AnyCert as in AnyCast, and then we can figure out the rest. \[laughter\] Because that's the hard part, right? The naming.

**Nabeel Sulieman:** Yeah, naming things, definitely.

**Gerhard Lazu:** So let me switch gears a little bit and let me ask you, are using KCert yourself for production?

**Nabeel Sulieman:** Sadly, no.

**Gerhard Lazu:** Nooo...! \[laughs\]

**Nabeel Sulieman:** After I finished KCert, I decided, "Well--" Replacing cert-manager was really, really hard. Implementing the RFC 8555 and getting that all working - that was really complicated. How hard would it be to replace the reverse proxy part and not use NGINX anymore? And so I decided to give that a shot, just for experimenting. It really was an opportunity to try things really outside of the box, like, really outside of the box and try things a little crazy. And when I say in production, I mean my personal blog, right? It's nothing super-critical.

**Gerhard Lazu:** Hey, it's your production. It's your production.

**Nabeel Sulieman:** That's my personal production, yeah. So what I've been experimenting with is-- so .NET Core has a library called YARP, which is Yet Another Reverse Proxy. And it basically gives you a library to create an Asp.net application reverse proxy. And that's what I'm currently using in my cluster. Basically, I copied the certificate management part out of KCert, put it in this new service, and then also added in the reverse proxy functionality. And with this experiment, I'm completely detaching myself from the Kubernetes primitives, like my ingress and secrets. So all of the certificates are stored outside of the Kubernetes cluster. My reverse proxy fetches and saves data in this external data source that's completely outside of my Kubernetes cluster.

The interesting thing about this is I could then very easily deploy this proxy to multiple Kubernetes clusters, and they would all have the same source of truth, right? So if one of them renews a certificate or creates a certificate, all of those clusters would have those certificates.

**Gerhard Lazu:** So hang on. Do you have this? This exists today?

**Nabeel Sulieman:** Yeah. Yeah, that's what I'm running right now in my production.

**Gerhard Lazu:** So where is this thing? Why don't I know about it?

**Nabeel Sulieman:** I'm not ready to share it, basically. It's very experimental. I'm not sure if the design that I have is ideal, or if it's really a good design. So a lot of times I'll try something out for a few months, and then I'll decide, "Oh, this would be better if it was a different way."

**Gerhard Lazu:** Okay.

**Nabeel Sulieman:** So KCert, for example, when I first was using it - this is early this year - creating a certificate in KCert was done through the graphical interface, like the web UI that it provides. You would go in and just literally click 'Create' and type in your host name and your secret name, and it would create it. And you know, even after using KCert for a year, I decided, "Oh, I don't like this model anymore." This should be done automatically, through creating an ingress and then creating certificates from that. And then that has some trade-offs, too. I like doing things privately for a while, because it gives me permission, let's say, to do things that might be stupid, but it only affects me. I don't want to be hurting other people that might be taking dependencies on it.

**Gerhard Lazu:** \[28:30\] So what if there was someone experienced enough that understands how these things work, that would be like your rubber duck, maybe try some things out, give some ideas, and whichever way it goes, that's okay, because it's not a hard dependency, but it's something really cool that I think has great potential. And - I mean, whatever I come up with, I'm sure it's not going to be as good as what you come up with, because first of all, you're really passionate about this area. You've spent a lot of time researching it, and then doing a lot of work, so you have a pretty good idea of what you're trying to get to. And then you're still on this path of learning, of discovering what it looks like. So whatever you come up with, I'm sure it's going to be great, because KCert is great. And I'm really excited to see this, especially since it's something that we need, like Changelog needs.

So for this infrastructure, whatever you come up with, it's like another data point, and it's another, "Hmm, this is interesting", which will in turn give me ideas on how to think about the things that I'm not going to do, rather than me coming up with a solution that works for us, and then that's good enough, which is what we have today. And it's been good enough for a couple of years, but it doesn't feel like it's a community or a group of like-minded people that appreciate it, first and foremost, help one another out in terms of like, "I'm stuck on this thing. What do you think?" And I say, "Well, this is what I think." And it doesn't mean that you should do that. It means that's literally what I think; maybe gives you another idea, and that's great, and you think, "You know what? That's stupid. I think my idea is better." So that gives you confidence that the path that you're on is the right one.

**Nabeel Sulieman:** I would really appreciate that, actually. This is the trade-off, of course, of doing things in private. Again, I don't get someone to talk to to confirm if this is really a good idea or not, or to bounce ideas off... And that is really -- the tricky part is like once I get something working for my personal needs, the next question I have to ask myself is, "Is this something worth sharing to other people?" Sometimes it's not, right? Sometimes it's really just my personal taste might not match what the industry wants, you know?

**Gerhard Lazu:** That's okay. No, it doesn't matter. It's like, it works for you, and that's okay. But what I'm thinking is, we have an opportunity to come together and dream, and try things out, and fail, and discover things, and learn together. And then you share something amazing, like "Wow, this is amazing. I discovered this thing, and it's really hard." I say, "Okay, I know. So what is hard about it?" Five minutes later, it's a little bit easier. So it's things like that, the human element of coming together and working towards something that will be useful one day, maybe. And if not, you know what? We had a great time together, and that's all that matters. And to me--

**Nabeel Sulieman:** Absolutely. Yeah.

**Gerhard Lazu:** ...that sounds great. That sounds like a great proposition. Okay. So I would ask you if you know anyone else using KCert in production, but if you're not using it yourself and you're already like on this new thing, on this other thing, what are the chances of people using it in production? ...what do you think, of KCert being used in production.

**Nabeel Sulieman:** So the good thing about KCert, especially, is it's small, it's simple, it's easy to maintain... And so I'm willing to continue to maintain it, even though I'm not personally using it right now. I'm actually excited enough about it to continue maintaining it. The trade-off is I will keep the scope very narrow. I probably won't be working on shipping any major changes to it. I'll try to keep it pretty stable... Which actually is very similar to another open source project I have, which is a piece of software that all it really does is it synchronizes-- it allows you to basically fetch your images from a private AWS ECR Registry. So AWS ECR has an interesting problem where you need to renew the Docker credentials every, I don't know, six hours or something, because it just expires.

**Gerhard Lazu:** \[32:31\] Right.

**Nabeel Sulieman:** And so I created a little tool that you just run as cron job in your cluster, that just keeps renewing that for you. It's surprisingly popular. I mean, I think I get like a million downloads a month, or something. But actually I also stopped using it, because I switched over to GitHub registry. But that's still also working out very fine. People are using it, and I don't get too many requests, because I just keep the scope pretty small, the surface area of it. And so for KCert, I think it's a totally valid tool to be using. And if I wasn't experimenting with my experimental reverse proxy, I would totally use KCert.

**Gerhard Lazu:** Okay.

**Break**: \[33:12\]

**Gerhard Lazu:** So speaking about narrow scope, first of all, that idea is really cool, about the AWS ECR. It's not something that I use, like those images. So I'm sure that if -- based on the million downloads, I'm sure it's not just bots and it's not just like CIs that keep pulling it down. I'm sure it's actual people that use it as well. Whenever I hear this number of downloads, I know, based on my experience -- when an image is really popular, like one billion-plus downloads, I know that a huge chunk of that is CI systems that keep pulling it down, keep using it. So that's why I take these numbers with a grain of salt. However, I'm sure there's still people, actual people downloading it and finding it super, super-useful. So there's something there for sure. I'm sure it's great.

**Nabeel Sulieman:** Yeah. A million downloads a month, you probably have to divide that by maybe a 1,000, right? And maybe there are 1,000 unique users, or something like that.

**Gerhard Lazu:** Something like that. Yeah, that's right. So speaking about KCert and keeping the scope narrow, I think that keeping this idea that you have just in the sphere of certificates, it's a great one. You don't have to couple it with the proxy concerns.

**Nabeel Sulieman:** Yeah.

**Gerhard Lazu:** And I know that the Caddy server - that was the first one that I know which had this built in Letsencrypt functionality, and that was a great one. Even today, it's my go-to when I need something really, really simple. And I like this combination of both features. Having said that - and again, going back to keeping it simple, like one tool, one job, the Unix philosophy - I really like the idea of having KCert, that it gets better at managing certificates and it's like the source of truth. So what I'm saying is the idea of running multiple KCerts in multiple clusters and keeping those certificates in sync, that in itself is already a great improvement, which I think KCert today doesn't do that, right? It's just like your experimental tool that has this functionality. Is that right?

**Nabeel Sulieman:** The nice thing about a certificate manager, I would say, or the thing that's simple about a certificate manager is you don't need a distributed system for it. So KCert runs as a Kubernetes deployment one instance, and it's just not designed to run two instances or three. You don't need that really. As long as it wakes up like once every six hours and renews your certificates -- what else do you really need from this service? Of course, it probably wouldn't scale very well if you had thousands of individual certificates or something like that, but that's not really the target audience, yeah?

**Gerhard Lazu:** For sure. But this experimental thing that you're working on has the capability, of running multiple instances?

**Nabeel Sulieman:** Yes.

**Gerhard Lazu:** But it also has a proxy, so it's growing in scope, in that it's not just certificates, it's also reverse proxy. And okay, there is a library, so it simplifies things a lot, YARP. You don't have to write that stuff yourself. But still this thing now does two things. It's a bit like the Caddy in a different state, or Traefik.

**Nabeel Sulieman:** It absolutely is very similar to Caddy or Traefik in that aspect that it combines the reverse proxy, the routing sort of thing, as well as the certificate management. And you know, that might be one of the reasons I've kept it-- I'm not really trying to push it too much, because again, that is a really valid point; like, do those two things belong together in the same place, or is it better to have those as two separate things? And I flip-flop between those two ideas really, because it is really convenient for your router to also manage the certificates, because it needs the certificates to serve the content.

**Gerhard Lazu:** For sure.

**Nabeel Sulieman:** So if you have them as separate tools, those two separate tools need a way to talk to each other. And that part is -- what's the ideal solution there? And that, I don't really have a good answer for either.

**Gerhard Lazu:** So I imagine if the thing which manages certificates, if the interface or the contract, the thing that serves Traefik is clear, then the proxy in this case, or the router, knows that, "I will get a certificate here, and it's going to work like this, and this is going to be the format."

\[39:57\] So this is the protocol, this is the interface, and then you trust that some other component will implement that interface, which KCert could be. So as long as the certificate is in a certain place, it gets renewed, there're certain properties around it, then maybe that's enough for whatever uses the certificate to implement its own thing, and do -- for example, when the certificate updates, it automatically starts serving the new certificate, and it detects that and it reacts in the correct way.

But I can see that, for example -- I always was asking myself, why do we need Ingress NGINX? Why do we need NGINX in front of something as capable as the Erlang VM? The Erlang VM is amazing at high-scale anything. So if you're using Erlang and you have the SSL part figured out - which by the way is really hard; but if you have that part figured out, and with Ranch, and there's a couple of libraries and components in the ecosystem which make it easy - hot reloading, all that stuff. I mean, they're amazing, HTTP/2, HTTP/3 on the roadmap; maybe one day it's hard, whatever. The point being the Erlang ecosystem is so powerful when it comes to serving traffic that you may not need Ingress NGINX. So why do we need Ingress NGINX?

**Nabeel Sulieman:** I agree with that, actually. If you only have one application that's facing the world, you don't really need NGINX Ingress Controller, or any of those things. I'm much more familiar -- I run my stuff on DigitalOcean, so this is literally how my experimental ingress is working, this router. You literally just deploy it as a service in your Kubernetes cluster, and then you create a load balancer that goes straight to that instance.

Now, there are a couple of tricky things; you need to have a liveness, an alive endpoint so that your external IP address load balancer knows which instance is healthy and which instance is not... But it's actually not a lot of work. And if you are okay with controlling all of your traffic from your Erlang application, I would recommend giving that a shot. It's not hard to do.

**Gerhard Lazu:** Yeah, pretty much. I mean, when you go, for example, on the platform, they already have their own proxy. The platform has the proxy layer. That's one of the most solid things, because routing traffic - everybody needs that, or almost everybody needs that. It's very rarely that you run services. I mean, you can do, but it's always like a web-facing. There's always going to be TCP, or HTTP, and it's really HTPS these days. And HTTP/3, which has a couple -- and that is really hard. People don't realize how difficult HTTP/3 is to implement. The protocol is nuts, but it's worth it, because the advantages, the speed advantages are just amazing. Security built-in, all the good stuff. It's just great. Super-fast, first time to byte, all those things. Anyways, if you have that interface and KCert is very clear about what it does, then in our case, the Erlang app knows, "This is where I'm going to get my certificate from", and that's it. And I trust that some component will put it there.

**Nabeel Sulieman:** There's one more problem, right? KCert would need to be able to tell your app to route the HTTP challenges to KCert.

**Gerhard Lazu:** Ah, I see.

**Nabeel Sulieman:** Yeah. That's the other problem there.

**Gerhard Lazu:** Ah, okay. Okay, I forgot about that. Okay. Well, for that part, you can use your app. You're allowed to use your app. \[laughter\] But anything else? I don't know. I don't know. Ingress NGINX - I mean, I trust it, and there's very few things that I would be willing to replace it with, because it's so reliable, so solid.

**Nabeel Sulieman:** Yeah.

**Gerhard Lazu:** And I don't know much about YARP, but do you know anyone that uses YARP at like a large scale?

**Nabeel Sulieman:** So I know that YARP is heavily used inside Microsoft for a lot of things. And that's where I discovered it, while I was at Microsoft.

**Gerhard Lazu:** Okay.

**Nabeel Sulieman:** \[43:47\] They just recently went to 1.0, so it's a pretty new thing. It was beta for a very long time. I don't know... Actually, that's another reason why I haven't published this. I can't even tell you if this private experiment is performant, right? I don't know if it will scale the way an NGINX would scale, or a Go application, or something like that.

**Gerhard Lazu:** Because you don't need that, right? You're like getting to that point. You're like--

**Nabeel Sulieman:** Yeah. I get like 10 visitors a day. \[laughs\]

**Gerhard Lazu:** That's okay. Yeah, that makes sense. Maybe you'll get many more after this episode comes out. People are going to like, "What is Nabeel up to these days? He really has some amazing ideas." So speaking of which, what do you want to do going forward with KCert and this other thing? In an ideal world, where do you see them going?

**Nabeel Sulieman:** KCert, I would like to keep it. I think if it stays the way it is right now, it's already quite a valuable, useful tool. I'm also just really pleased with-- I did recently get a couple of issues on GitHub... I'm just happy that people are able to install it on their own, from the instructions, and get it working, right? And that has been the case. And then honestly, that's already an achievement and I'm happy with that. I'll take definitely feedback and see where it goes, and yeah, we can see.

I do like the idea -- if I could get that interface between KCert and some proxy component, if there was really an easy way to separate it, I would. And I think that's probably the big thing that I would want to explore further with KCert itself. But again, as we discussed, there are some challenges there. They're very tightly coupled things, your router and your certificates. With the reverse proxy tool that I'm building, what I really need to do - and I have a draft, but I haven't published it yet; I want to write a blog post about it, without actually sharing the code. And if people want to come in and join and have discussions about the product, about this project, to push it further, I'm willing to do that in a private context, but I don't know yet if it's really a good idea to open source it and have--

**Gerhard Lazu:** Yeah, I know.

**Nabeel Sulieman:** ...just by accident, 100 people start using it, and then I can't refactor it and make changes to the design as easily.

**Gerhard Lazu:** Doesn't work, fix it. This is a free, personal project. I don't even know what I'm doing with this. I can't fix anything. I'm still refactoring.

**Nabeel Sulieman:** Yeah. I do try, when I publish things and make them actually open source, I try not to break them going forward. \[laughs\]

**Gerhard Lazu:** Which is why the 1.0 for KCert was really nice to see, and that's what you meant by that; or at least that was my interpretation.

**Nabeel Sulieman:** That was the signal, yeah.

**Gerhard Lazu:** Yeah.

**Nabeel Sulieman:** If you use this, I will at least do my best not to make drastic changes that completely break you.

**Gerhard Lazu:** Yeah, that makes sense. Okay. So Nabeel, how would you like the Ship It listeners to react or respond to KCert and those ideas? Is there something that you'd like them to do? Can they help you in some way, maybe you have a question for them... What would you like to happen from that perspective?

**Nabeel Sulieman:** Honestly, I'd just love people to try KCert out and see how it goes. Feedback is totally welcome and the GitHub repository is open to issues and discussions. So that would be very, very welcome. I welcome all the feedback, and if there are suggestions to improve it, as well... Definitely, that step from making something that's just useful for yourself to something that's useful for other people - that needs some feedback, and that would be great.

\[47:12\] And if people are interested in the idea of a super simple reverse proxy type of thing that goes in the place of NGINX Controller, just reach out to me. It could be anywhere, LinkedIn, Twitter or something. And that I'd like to have some private conversations with people passionate about this idea, but unfortunately, I'm just not really willing right now to open source it.

**Gerhard Lazu:** That makes perfect sense. So as we prepare to wrap up, what would you say is the key takeaway for the listeners?

**Nabeel Sulieman:** I think the thing I've learned with the last couple of things that I've open sourced and shared is open sourcing things doesn't always have to be huge burden in terms of a response -- I know it can be. I think we've all listened to plenty of Changelog episodes with that experience. But at least a couple of lessons I've learned to mitigate that is take your time to build it first. If you need to in private, that's totally fine. But also, keep the scope narrow. You don't have to support every possible use case, right? Keep it nice and simple. And that usually helps. The last two things I've open sourced have been very little burdened to maintain, and I think it's possible to do that.

**Gerhard Lazu:** Nabeel, I would like to thank you very much for reaching out. I wish others followed your example and did the same thing, because it was amazing to have this conversation with you to see where you took KCert from this idea that you weren't sure about, which was January-ish, and then we talked over Slack for a couple of months. I've seen your blog post come out. By the way, we'll link them all in the show notes. And finally being able to try it today, which we did before the episode; we'll see if we can get the video out, or at least parts of it, that was great. I mean, it took a bit more than five minutes. That was because of various complications on my side. But within 40 minutes we had a new Kubernetes cluster set up, everything installed from scratch, including KCert, our certificate provisioned... Okay, it was just a staging one, but it would have worked for production, nevertheless.

**Nabeel Sulieman:** Yup.

**Gerhard Lazu:** And we had everything wired up within 40 minutes, with no preparation whatsoever; literally out of the blue. And that just goes to show that it works. And that got me very excited. So thank you very much, Nabeel, for that opportunity. I enjoyed it.

**Nabeel Sulieman:** I really enjoyed it as well, and it was super fun. yeah. Thanks a lot.

**Gerhard Lazu:** I'm looking forward to what you do next. Thank you, Nabeel. See you around.

**Nabeel Sulieman:** Yup. Thank you. Bye.
