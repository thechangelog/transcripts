**Jon Calhoun:** Hello everyone, and welcome to Go Time. Today I'm joined by Adam Woodbeck. How are you, Adam?

**Adam Woodbeck:** I'm well. How are you?

**Jon Calhoun:** I'm good. So Adam is a software engineer that writes distributed services for Baracuda Networks, and he recently released a book with No Starch Press called Network Programming With Go. Is that correct?

**Adam Woodbeck:** That is correct.

**Jon Calhoun:** Awesome. And today we're gonna talk about some little segment of that book, I think... TCP and UDP.

**Adam Woodbeck:** Yes. About four chapters in the book.

**Jon Calhoun:** Okay. We also have panelist Kris Brandow here with us today. How are you, Kris?

**Kris Brandow:** Doing well. How are you?

**Jon Calhoun:** I'm good. I'm hoping you're ready to carry the conversation, especially if we get real technical. \[laughter\] It's been a while since I've read up on TCP and UDP, so I'm excited about this one, both to refresh my memory, and to teach some people about something a little bit new, hopefully.

So to start off, I guess the simple way would be just to say what are TCP and UDP. What do the acronyms stand for, and at a high level, could you explain what these things are?

**Adam Woodbeck:** Sure. TCP stands for Transmission Control Protocol, and UDP is User Datagram Protocol. The Transmission Control Protocol is more of a streaming, stateful protocol where you're sending a stream of data, and it's typically acknowledged by the other side; so there's a state throughout the entire conversation... Whereas UDP has a lot less overhead, there is very little reliability... There's really no reliability; you simply just send data to the other side, without any promise of an acknowledgment or that the data is even gonna arrive there. It's stateless, in other words, and it's more message-based, as opposed to a stream of data.

**Jon Calhoun:** \[04:10\] That's something that's probably confusing to a lot of people, because when you talk about sending data, especially with programming, you usually think all of it needs to get there. Can you give a little more insight into why UDP works for things like games, where real-time is more important? How do they get by without having all the data?

**Adam Woodbeck:** So I would use UDP in the scenario where it's worse if a packet arrives late, than if it doesn't arrive at all. So if I'm playing a game, for instance, a first-person shooter, I need to know where that opponent is, not necessarily where he was two seconds ago when I lost that packet. Or in this case, if we're talking back and forth, if packets are being dropped and you're not receiving all of the audio that I'm saying right now, then you're gonna start talking to reply, and now you're starting to get all the words that I just said, as TCP catches up. So UDP is more concerned about getting the data to you immediately, even if it's not complete.

**Jon Calhoun:** Okay, that makes sense. I'm trying to think of -- I don't know if it was video software or what, but I recall using something where when somebody would start to lag, you'd all of a sudden see them catch up... And it was always a really weird experience when their video stream would sort of quickly replay back everything or something... And I'm guessing that was because they were using something like TCP to sort of replay back what was there, whereas a lot of times what we'd normally experience with Zoom is if somebody starts to have some sort of internet connection or something, they just sort of cut out for a minute and then come back in. Is that accurate, or sound accurate?

**Adam Woodbeck:** Yeah. With real-time stuff you don't have the advantage of buffering either... So TCP is really good at buffering data, and so in the scenario you just outlined, you were probably catching up with everything that was coming in off the wire, just reading it... So it looked like it fast-forwarded to real-time at that point. The user experience probably would have been better if it just dropped those packets and you just picked up from where they left off.

**Jon Calhoun:** That makes sense. So I guess let's dive into TCP first, because I think this is the one that people are going to relate to most... At least in my experience, I feel like most of the things I do networking-wise are TCP... So that's where I'm starting so if you're not the same as me, sorry, everybody listening...

You said that TCP is something where they can actually have a session where packets aren't lost... What does that look like? What does the connection look like, what are the steps, and how does that work at a high level?

**Adam Woodbeck:** Let me use an analogy first... So TCP - let's say you're gonna bake your neighbor a pie. If we were doing this over TCP, then I may shout from my window to my neighbor's window to say "Hey, are you there?" And my neighbor may reply and say "Yes, I'm here." And then I'll say "I'd like to bring you a pie." We've just established a conversation, right?

The neighbor acknowledges and says "Great, bring it on over." So I bring the pie over. And then I say "Farewell", the neighbor says "Farewell", the conversation's done. That's TCP. That's our stateful conversation.

Now, if I was doing the same thing over UDP, essentially I would take that pie and I would throw it at my neighbor's window, without any regard for whether the window is open or not. And I have no idea if my neighbor received it; it's very possible that my neighbor is gonna be quite upset with me, so that's kind of the high-level difference of what one protocol looks like and what the other one looks like. One - there's a lot more back-and-forth, but there's reliability there, there's a conversation, there's rapport, I guess... And the other one is just very abrupt, "Here's data. I hope you get it. Do something with it." So to add reliability to UDP, you have to do that in your application.

So we're just simply talking about the transport layer right now. This is below the application; when you write something to a network socket in Go, you're essentially writing it to the transport layer. This is where TCP would take over, or UDP would take over. SO there's a lot of stuff that happens underneath it at this layer, that you don't have to account for in your application.

\[08:10\] So if we're talking about, say, a web request - I visit Google, for instance. Then what that would look like is my computer would reach out to Google, it would open up a port on my computer, a local port, and it would reach out to Google at Google's IP address, port 80... Let's just say there's no TLS involved here, so port 80... And that now establishes a unique connection. It's a 4-tuple - it's my IP, my port number, Google IP and Google's port number. There's no other connection right now that has those four components. So this is unique.

So then my computer sends an empty packet, essentially, with just header information to Google, and it has a SYN flag enabled... Which is essentially telling Google "These are the settings I would like to use for this conversation I wanna have with you." So if Google wants to talk to me, then Google will turn around and it will send back a packet, an empty payload with just header information, that has an acknowledgment that says "I acknowledge I received your SYN packet, and here's a SYN of my own. Here's what I agree to as far as this conversation goes." And then if my side agrees, it will send an acknowledgment back - an empty packet again, with just the acknowledgment flag flipped.

So that's the three-way handshake that all TCP connections start with. From that point forward we have an established session, and data can flow in either direction. Once we're done exchanging data, then usually there's a graceful termination, where -- either side can initiate this, but let's just say I do. I would send a FIN packet. Essentially, again, it's an empty packet, with just the FIN flag flipped. The Google side will acknowledge that and say "Alright, I acknowledge I've received your FIN. Here's a FIN of my own." And then I would acknowledge that and essentially the connection is terminated at that point. There's no more active TCP connection.

**Jon Calhoun:** So to make sure that both myself and everybody listening understands... When I make a web request to Google.com - is this something where the entire time the page is open it's keeping the connection, or is it something where it just keeps the connection open long enough to get the website HTML, and after that it closes up? Or are there cases where it's a little bit of both?

**Adam Woodbeck:** So TCP has keepalives, which I believe are off by default in most of the operating systems I've used... But what essentially would happen - let's say I send a request to Google, and it's taking Google a long time to respond. There's a lot of latency there, maybe it's having to crunch a bunch of numbers and stuff, and then send the response back to me... My side may send a keepalive request, which is a special request to Google's network layer (its transport layer); it doesn't go to the application, it just goes to the TCP layer at Google, to say "Hey, is this conversation still good? Are we still talking?" And then normally I would get an acknowledgment back... Which essentially tells me "Yes, we're still good... I just haven't received your reply from the application layer yet." And this may go on for a while, until either I receive a reply, or we've reached some sort of threshold and I just stop waiting and tear down the connection that way.

**Jon Calhoun:** So when we talk about having these communications that are back and forth, with different messages, I think most of the time when we think about a web request we think of "I send a request, they send a response back with all the data." I'm assuming that TCP, because we're at a lower level, it's probably something where there's maybe a little more back and forth than that... So I guess my question is how does the actual data get transferred at that level? Is it like a binary encoding? Is it something completely unique? What does that sort of messaging look like?

**Adam Woodbeck:** \[11:56\] I think we should talk about a few of the things that were established during the handshake, that help ensure the reliability and it helps control the flow of information between the boxes. I said earlier that TCP is a stream-based protocol. So if I'm sending a web page to you, or I'm sending a bunch of data, it comes through as a bunch of bytes... And those bytes may be composed of several different individual messages. But my side, when I'm reading from this data, I'm just getting a bunch of bytes, and have to make sense of it.

So we can talk about some methods of how you can properly encode things so each side can encode/decode the data that we're sending... But as far as a web page goes, there's what's called a sequence number, that each side establishes as part of the handshake. It's usually a large number, it's usually only meaningful in the session itself, but for our purposes let's just say it starts at zero, because that's an easy number for everyone to remember.

So when the client sends the first SYN, part of that SYN tells the server "I wanna start with sequence number zero." When the server acknowledges that, even though the payload was empty - I've seen it termed ghost byte. So the server acknowledges a sequence number of one, essentially saying that the client sent one byte, even though it didn't... So just bear with me; it's a ghost byte, okay? The same thing happens in reverse - when the server sends the SYN back, it says "I'm gonna start my sequence number at zero." In reality, it's a large number. Zero for our purposes.

And then the third part of the three-way handshake is my side sends the acknowledgment of sequence number one. So now both the sequence number on both sides is set to one. So the acknowledgments acknowledge sequence numbers, which is one of the ways that we ensure reliability here. So if my GET request for the resource was 500 bytes, I send the 500 bytes in a request to Google, Google then sends an acknowledgment back of sequence number 501, because this sequence number is incremented by the number of bytes that I'm sending.

So Google's sequence number is still set to 1, because it didn't send me any data yet. It just sent me an acknowledgment. So when Google sends me the payload that I requested - let's say it's 2,000 bytes - it sends me all that data, and I acknowledge a sequence number of 2001. If I acknowledged, say, 1001, then Google realizes "Wait a minute, he didn't receive the last thousand bytes. I should resend that."

So that's one of the ways we ensure reliability and kind of keep track what was sent, and acknowledge what was sent. Now, the other factor here that's negotiated during the handshake is the window size.

Every TCP connection allocates a certain amount of RAM that it's gonna use as a receive window. Think of it as like a bucket. What this allows is it allows me as the sender to send data to Google that sits in that bucket, and the application can then come and read. The application doesn't need to be actively reading from the socket at the time I'm sending data. It can sit in that bucket. But I don't want to fill up that bucket, because if I do, then anything I try to put in once the bucket is full just gets thrown away, gets lost.

So in this case - and we may be getting too far into the weeds here if we wanna talk about window scaling, and stuff... But essentially, I send the request in an attempt to fill the bucket, and there is a maximum packet size that I can send for each request. For our purposes here, the maximum segment size will be 1,460, let's say, which means the maximum packet size is 1,500 bytes, because there's a 20-byte header for TCP and a 20-byte header for IP.

\[16:05\] So every request I send or every response that Google sends can be in these chunks of essentially 1,460 bytes of data at a time. So if I request something that is 2,000 bytes, then I'm gonna get essentially two packets. One is gonna be 1,460, the second packet is gonna have the remainder of the bytes. So I keep getting this in these chunks at a time, until either my bucket is full and I can't accept anymore, or until I got the entire payload that I requested at the time.

**Jon Calhoun:** So when you're talking about these buckets that the bytes come into, I assume that's just the buffer, that when we're in our actual code, if we start reading the incoming data from Google, at that point it would clear out the buffer and it would get emptied up again. Is that correct?

**Adam Woodbeck:** Yes. Essentially, if I'm receiving data from Google and I never read that from my connection, then it just sits in that bucket. And the bucket could eventually fill up, and then my side is gonna start telling Google "Don't send anything else. I have no room for you to send any data to me." So the onus is on me as the programmer to make sure I'm reading data from that bucket, so I can continue to receive more data from Google.

**Jon Calhoun:** So as a developer this is something that we never really see in our code. None of us are sitting here, writing HTTP requests where we're like "Okay, we're gonna send 100 bytes, then 200 bytes...", whatever the limits are.

**Adam Woodbeck:** Sure.

**Jon Calhoun:** So I'm assuming this is all something that the standard library and everything sort of bakes into it... Is this something where every language could sort of decide how they're gonna change -- you said if your max is 1,460 bytes, I'm assuming that arguably you could send less than that if you wanted.

**Adam Woodbeck:** Absolutely, you could.

**Jon Calhoun:** So that's up to the programming language or whoever wrote the library to sort of decide how to choose those numbers?

**Adam Woodbeck:** There's defaults for your operating system, but we're talking about every hop along the way, between my computer and Google, this maximum size is enforced along the way. The good thing about TCP is we can split things up and it can reassemble things. Packets can be received in a different order than I sent it on the remote side, and TCP can straighten all that out for the application.

So with UDP, we don't want things to split up. We want to stay under that size limit, so it doesn't get split. But with TCP, I can send a bunch of stuff, I can send a gig of data if I wanted to, and TCP is going to handle chunking that up for me, sending that data across, and of course, the other side is gonna handle reassembling everything into the stream as I originally sent it.

**Break:** \[18:39\]

**Jon Calhoun:** You mentioned that the data can basically come out of order... So when you were talking about your analogy of yelling out your window at your neighbor and having the conversation go out of order isn't something that most of us -- you know, it's not something that's really logically gonna happen with a conversation... So with the network, I think sometimes it's easy to overlook that, because you just assume "Okay, these things are going serial", especially with a lot of programming; until you get into concurrency or something, things happen serially... So can you elaborate a little bit on how do things get out of sync? What are some ways that that might happen?

**Adam Woodbeck:** \[20:03\] Okay, so you could have this scenario where one packet takes one path to Google, and another packet takes a different path. I don't have a direct cable from my house to Google, so there's not just one destination to Google. We're talking about the internet, so it's essentially a mesh. I can send a packet from here to my ISP, and my ISP can send it to different endpoints, and it keeps moving its way through the internet the shortest path that it can, until it reaches Google. And that shortest path may change, depending on the matrix at the time the packet is traversing the network.

So I'm not guaranteed that all the packets I send are going to go over or take the same path as the packets before it. They could take another path. We could be sending data, communicating, and a tree falls on a line and takes it out; or someone snips a fiber optic cable that I was communicating, and now those packets have to go some other way. So they're not guaranteed to arrive in the same order. But when they arrive in the receive buffer, the TCP on that end starts putting them back in order before it makes those available to the application to read. And if anything is missing, then TCP will send me a request to say "Hey, I got everything but this set of packets here. I need you to resend just these." And that's technically selective acknowledgments, which we didn't really cover yet.

**Kris Brandow:** And I think as well with that, packets can get routed differently, but they can also just get dropped.

**Adam Woodbeck:** Absolutely.

**Kris Brandow:** So if some network device in there is just overloaded, it might just be like "I'm gonna drop all these packets, because I can't handle/process them right now." That's perfectly valid to do an IP, so TCP, as Adam just mentioned, can ask for packets to be resent. So that's how you could also get that out of order.

**Jon Calhoun:** Sure.

**Adam Woodbeck:** There's limitations to how much data switches and routers can handle, and if they are overloaded, they just drop it.

**Jon Calhoun:** I think one of the things that's really cool to see about TCP is that -- we talk about building redundant systems, but this is one of the most redundant systems, if you think about it... Or at least it seems like one of the more redundant systems that we deal with on the internet... It's the fact that literally anything can just stop taking packets, and everybody knows how to sort of handle that and move forward.

**Adam Woodbeck:** Yeah. I don't have a lot of experience with this, but think about if you're watching a YouTube video and you're driving in your car and you're watching it on your cell phone, you're hopping from tower to tower and you're getting different IP addresses, yet from your perspective TCP is able to handle all of those different changes and interruptions and properly buffer things as it needs to, so your playback is nice and smooth.

**Jon Calhoun:** Speaking of that - and I don't know if this is too complicated, but how do the TCP connections work when you're doing that? Like, if we're driving down the road. Is it making new connections?

**Adam Woodbeck:** Like I said, this is a little outside of my experience, but the way I envision something like that would happen is if you're hopping to a different tower and you're getting a new IP address, your application realizes where it left off as far as what frames it just requested from YouTube, and when it establishes that new connection, it may ask for the frames from where it left off. But if you ever watch your YouTube progress bar, you'll see that it buffers; in other words, it's downloaded more of the video than what you're currently watching right now. So it's giving itself some buffer room here at the application level.

**Kris Brandow:** And I think too with mobile networks specifically there's a lot of magic they do behind the scenes to make it appear as if the TCP connection is kind of living forever... And we'll probably talk about it later, but this is one of the reasons why HTTP/3 (QUIC) was developed, mainly to resolve this problem of TCP connections being at odds with how mobile networks operate.

**Jon Calhoun:** It's kind of interesting, because when people design these things, it's impossible to see into the future... And I imagine at the time it was probably impossible to imagine this world where somebody's driving down the road and literally, that needs to pretend like it's one connection, when in reality it's not. So that's one of the crazy things about software, I guess - you can never really predict what you need to design for in the future.

\[24:12\] Okay, let's say I wanted to dive into this a little bit more. I wanted to actually see some of these bytes. What's some way that I might be able to do it? Should I start with Go code, should I be looking at tools to watch my networking traffic? What would you recommend on that side of it?

**Adam Woodbeck:** I'd absolutely recommend you familiarize yourself with Wireshark. It's an essential tool if you're writing network code and you wanna see what's happening at that transport layer. Wireshark is great as far as its free, so it's very easy to install on your system. Just install Wireshark, start a capture, and then in a browser go to a website, and you'll see all of this traffic start flooding into Wireshark. And you can use Wireshark to filter in on a specific conversation, and you can see that three-way handshake that we talked about; you can see the sequence numbers that they established, and how those sequence numbers and acknowledgments work, similar to what we just described, and how the graceful termination happens, for every web request that you make, for every resource that you ask for.

**Jon Calhoun:** Okay. So check out Wireshark, everybody... If you have questions, bug Adam. Nah, I'm just kidding...

**Adam Woodbeck:** There's a good book on that; No Starch also sells that, so that's where I'd refer you.

**Jon Calhoun:** Okay, awesome. When you were talking about TCP, you mentioned that it's streaming bytes... And usually, when we're sending bytes, we have to get into some sort of encoding, sort of letting people know how big bytes are... Is that something -- who controls that? What does that look like?

**Adam Woodbeck:** So let's say I wanted to send a string over a network, or I wanted the ability to send numbers as well, or different types. Essentially, what I'm doing is I'm writing a byte slice to the network, and when it's received on the other side, it just reads a byte slice. The other side sees it as just a series of bytes; it doesn't really make sense or know that this is a string, or how big the string is... Because when I'm reading data from a network, I essentially allocate a byte slice of a certain size, and when I use that byte slice to read into that byte slice, the network will try to read as many bytes as it can, that's in my buffer, to fill that bucket or that buffer that I created, until we run out of bytes to read, or until that buffer I allocated is full.

So if I send several strings at once to you, and you start reading them from your network, they're all gonna be in that same buffer, that same byte slice. You don't know where one starts and one stops. So one technique that works well is a very simple encoding such as a type-length-value method of encoding data, where you say "We're gonna say this first byte is going to represent a type. One for string, two for an integer", whatever bytes you wanna encode. The next two bytes or the next four bytes will represent the length of the payload I'm going to send, and then the remaining bytes are that payload. So when I'm reading data from the socket now, I can read the first byte and realize "Okay, this is a string." I can read the next four bytes and then convert that into an integer and say "Alright, he's sending me 500 kilobytes of data." And then I know I need to read the next 500 kilobytes of data, and that's my string, if that makes sense.

**Jon Calhoun:** Yeah. I guess in my mind that means that if I'm writing my own - for a lack of a better word - client and server that are communicating, I can sort of define this paradigm myself, or I can say "These many bytes are the type, these many bytes are the size of the message, and then I can just go from there."

\[27:59\] So does that mean there's standards for things like the web, or different places like that that everybody just sort of agrees to? Because obviously, I'm not writing a Google server, so I can't tell them what to expect... So is that how the web works, there's some sort of standard there?

**Adam Woodbeck:** Yeah, so when you're requesting a resource - say you're requesting a web page to send an HTML page - you're gonna get header information back that will have your content length... And that's essentially the length of the payload that's going to represent the HTML that you requested, for instance.

There's other encoding methods. Go includes gob in its standard library, and essentially, it can do what we just talked about, as far as I can instantiate a struct, and send that across the network, and it can be properly decoded on the other side using a similar type length value format that we just discussed.

**Jon Calhoun:** But is this something that both people have to know about ahead of time, or is this something that's communicated during the handshake? I guess that's what I was trying to ask.

**Adam Woodbeck:** Yes, you have to agree on the encoding and decoding standard that you're using. In other words, if I'm sending you JSON, for instance, you need to know that it's gonna start with an opening curly brace and end with a closing curly brace. You have to understand the garbled text I'm sending you; you have to be able to understand JSON. But if I send you YAML, for instance, and you're expecting JSON, you're not gonna know what to do with that. It's not gonna decode the way you expect it to decode.

**Jon Calhoun:** Okay, awesome. So when we're dealing with these network connections -- I guess another question I have is... You basically said TCP is sort of like this conversation we're having. Is that something that we need to close? Because with UDP, I assume, you just send your message, forget it, don't worry about it. So with TCP, do you have to worry about telling people essentially goodbye in the conversation? Or how does that sort of look?

**Adam Woodbeck:** Yeah, so programmatically in Go when you have a network connection object, it has a close method. If you do not call that close method, your side of the conversation doesn't send its FIN. It doesn't tear it down. It can keep your side of the conversation open, and you're essentially leaking the connection. So if you do that enough, you can exhaust the number of connections that your operating system can open, and now you can't open any more network connections, because you have all of these orphaned network connections that are in what are called a closed wait state, because you didn't properly close them in your code. With UDP, you don't have to worry about that.

**Kris Brandow:** I have a question on TCP... So you mentioned sequence numbers with packets, and how we increment them for the number of bytes... How are those represented? And if they're represented with some fixed number of bytes, what happens if it rolls over? We pick a random number and we try to send -- if it's like 32 bytes and it sends four gigs or five gigs of data with a TCP connection, does it just wrap around and we just start from the beginning? Or how is that handled?

**Adam Woodbeck:** I don't know. I honestly would have to look at the limitations of what the sequence number is, the size of the sequence number. It is a very large number; I would be surprised if you did overflow it... But I assume if it's unsigned, it would just wrap around and continue where it left off. But essentially, it only serves as an indication of how much data I've sent you and how much data you've received. And we need that agreement there.

So if I send you 5,000 bytes of data, I expect an acknowledgment that it's 5,000 more than the last sequence number I sent you.

**Kris Brandow:** Okay.

**Adam Woodbeck:** Now, if that happens to roll around or overflow, then so be it... As long as it's 5,000 more than what we had before.

**Jon Calhoun:** It could be a weird case for a bug if everybody sort of stores that separately, and one end gets it wrong... But it's hard to say how that actually works.

**Adam Woodbeck:** \[31:48\] You can see this in Wireshark... Wireshark does a lot of friendly things for you. It'll calculate your window size for you... Everything in Wireshark that's in square brackets is something that Wireshark calculated based on the packet you're looking at. So the raw sequence number may be in the -- so it is six bytes; that's how many bytes we have for the sequence number here. But when you're looking at it, Wireshark gives you a relative sequence number starting at zero, just like we discussed here, so it's easier for you to rationalize when you're looking at the packets. If you wanted to see the raw sequence number, you can do that, too.

**Jon Calhoun:** I got curious... I'm sitting here on Stack Overflow, looking this up, and it looks like it is a 32-bit number, Chris...

**Kris Brandow:** Oh.

**Jon Calhoun:** And it seems like, generally speaking, you're supposed to choose a starting sequence number that you theoretically wouldn't go over that limit... It almost looks like it wraps around if it needs to, and then you use timestamps to sort of make that work.

**Kris Brandow:** Oh...

**Adam Woodbeck:** Yeah, you would have to send a tremendous amount of data in order to lap yourself, right?

**Kris Brandow:** I mean, it's four gigs, right? That'd be like four billion bytes; it's about what you can represent with a 32-bit unsigned. If you're downloading a 10-gig application or something, or video file, that's over a TCP connection you could see it wrapping around...

**Jon Calhoun:** Yeah, that's an interesting one, because we've gotten to this point where four gigs isn't that much. It used to be a lot, but now you download video games that are 30 gigs pretty regularly... Well, maybe not, but if you're a gamer, you probably download 30-gig games somewhat regularly.

So yeah, that would make it very tricky. That's another one of those cases where I could see when they originally designed TCP, they were like "Oh, we'll never hit this number, don't worry about it." Then later they're like "We need to figure something out here..."

**Kris Brandow:** Yeah, like IPv4 addresses...? \[laughs\]

**Jon Calhoun:** I didn't know if we wanted to talk about that today or not, because -- if I recall correctly, wasn't TCP and IP all one thing at the start?

**Adam Woodbeck:** Yeah, it was called -- was it Transmission Control Program, I believe...? Until they ended up splitting TCP from IP, and then since they abstracted TCP from IP, they were then able to implement UDP as well. But yeah, TCP and IP used to be one monolithic protocol way back when...

**Jon Calhoun:** It's nice that they had the foresight to figure out separating that one... Otherwise it'd be pretty rough trying to upgrade TCP to v6, I guess... Okay, so I guess the next thing we wanna talk about is UDP. We've talked about TCP where you've got this -- I don't know if we used the word stateful, but I assume that is a stateful connection, because you have to keep track of how many bytes have been sent, and all this information about the conversation... UDP - you've said it's just sort of sending messages; what does that look like in practice? Obviously, we're not just gonna randomly pick an IP address and just send it random data... So can you give some examples, I suppose?

**Adam Woodbeck:** Sure. DNS is probably one of the most common uses of UDP that most people will encounter, even if you're not aware of it. Essentially, that is where I'm sending a UDP packet - that usually has a maximum size of about 512 bytes - to a domain name server, asking it for an IP address, for instance, for (say) Google.com. And it would normally reply with my answer. And if it doesn't reply - because I don't get an acknowledgment back that it received my request - I simply just get an answer, or I don't. And if I don't get it back in a timely manner, then I'll ask again, and again, until I get sick of asking, or I get a response.

If we look at what that looked like with TCP, if we were making that same request with TCP, we would have to go through our three-way handshake, I would have to send a request which it would acknowledge, then it would send a result, which I would acknowledge, and then we would tear that connection down, right? So many more back-and-forth requests; a lot more overhead if we were using TCP for this.

But for UDP, considering we're talking about a small amount of information - less than 512 bytes in most cases; there's exceptions to that, of course - UDP is perfectly suitable for that. I just send a request and get an answer back, and keep asking until I get what I'm expecting.

**Jon Calhoun:** \[36:04\] I guess one way to look at this, going back to your pie analogy, is that if you're bringing somebody a pie, you kind of want them to acknowledge that they're there to pick it up; you don't want a pie sitting on their doorstep. But let's say their mail happened to be in your mailbox; if you just wanted to walk it over and slip it in the mail slot, you don't really need acknowledgment that they've received it or anything, it's just slip it in there and sort of forget about it, because it's not something that you really care too much about. You don't need to have a five-minute conversation to give them their mail piece back.

And I assume, like you said, one of the major benefits for DNS using this is the fact that most of the time if you just do two messages, one to say "Give me this information", two to get the information back - that's a lot better than doing that whole handshake, wasting a bunch of time having a conversation that you didn't need.

So if I wanted to go about doing this in some Go code, what might that look like? Are there packages, or anything? Or would you suggest, again, just using Wireshark? What are some ways to experiment with UDP?

**Adam Woodbeck:** Go has good support for UDP. If you've used TCP in Go code, you're probably familiar with the -- in the net package there's the Conn interface. And if you use the dial or dial timeout, or the dialer in the net package has a dial context method. When you call that, you receive a Conn interface back, that allows you to do a few things - you can write to the network socket, you can read from it, you can change the deadlines, which we haven't talked about yet, and you can tweak a few things in the connection through that interface. You can also do a type assertion to the TCPConn struct, the object underneath that interface, and it gives you a lot more options that you can do. You can then start modifying (say) your receive window, your send window, and other things like that. Enable keepalives if you want to. I would think for most purposes though, the Conn interface is suitable for most people using TCP.

Now, the reason I bring that up is because when you use the dial function in the net package, you can specify a network type of UDP as well, and you still get a Conn object. However, there's an underlying UDP connection to that Conn interface now, and it's going to function a little bit different. That object, although UDP is stateless, the object knows who it's sending to. In other words, when you create this connection object, even though it's UDP, you give Go an address that you wanna communicate with, so when you write to this object, it will only write to your destination. And when you read from this object, it will only pay attention to UDP packets coming from that destination.

Now, there's a PacketConn as well, and that's probably better suited for UDP, at least the way most people will use it, because the difference with TCP and UDP in Go is TCP has a separate client that dials or reaches out, and then a listener that listens for incoming connections. UDP isn't like that. When you establish a UDP object, it's both a client, if you will, and a listener. It's listening on a local port, on a port on your computer, and anything on the network can send messages to it. So when you read data from that UDP connection, you get the amount of data you read, you get an address, and an error interface. So you as the programmer need to check and see "Okay, I need to look at this address. Who did this come from?" Because it may not necessarily come from the destination that you're communicating with; it could have come from a third party, potentially. So there's more work at the application layer to manage the incoming data through a UDP connection if you're using that PacketConn.

**Kris Brandow:** \[40:00\] I have a question about how the operating system handles data... So with TCP we have this established connection; it has this receive window, so if bytes come in, it just holds them for you until your application reads them. Is there a similar mechanism for UDP, or if it gets bytes, it's just kind of like "If you're not listening, I'm just gonna toss them away"?

**Adam Woodbeck:** So UDP also has a receive buffer. But if you send data to a remote side, just like we don't know if your neighbor's window is open or not, we don't know if it's been received., we don't know -- if could be sitting in the receive bucket over there, but we don't know how much is in that bucket. So we could be filling up the bucket until it overflows. And essentially, when it overflows, your UDP packets start dropping. So you don't get that indication back at the UDP level on how full the remote sides bucket is. You can keep sending, and hopefully they're reading from it, otherwise you're gonna start dropping these packets. But there is that same concept of a receive buffer.

**Break:** \[41:00\]

**Jon Calhoun:** I have a question about the net.Conn interface... At least in my mind, a lot of times when you're using an interface, it's kind of meant to be something that's somewhat interchangeable. You know, you might have an interface for interacting with your data store, and you don't really care if it's written in SQL, or Postgres, or SQLite, or something else; generally, you're just like "I need this interface to interact with it." But it sounds like with TCP and UDP you kind of get the same net.Conn, but at the same time how you actually use them needs to be very different, because with TCP you know your messages are getting there eventually, but with UDP that's very much not the case. Is that something that you think is confusing? What are your thoughts on that?

**Adam Woodbeck:** If you're very used to using net.Conn with TCP, my personal preference is to not use it for UDP... Because it does change the behavior subtly. For instance, we talked about reading data from a TCP Connection in Go. You create a byte slice of a certain size and you read data into that, and you will keep reading data into that until it's full, or there's no more data to read. With UDP it's different. If I send you four messages, four separate UDP packets, and they're sitting in your receive buffer, if you're using that net.Conn and you read, even if the byte slice you've allocated is large enough to hold all four of those messages, every invocation of read only returns one message at a time. So to read those four messages, you would have to call read four times, if we're talking about UDP. But that's not net.Conn's behavior when you're using TCP.

\[44:45\] So my personal preference is to use PacketConn, and then it's very explicit that "Alright, I'm using UDP in my code here." It helps if I'm reading someone else's code too to know that "Okay, this is a net.Conn here. I'm very familiar with this, because I use it all the time with TCP... But I didn't notice that they're communicating over UDP now. Why do they read this four times, for instance, when I think that the buffer they're allocating should be able to hold everything that they're reading once?"

**Jon Calhoun:** Yeah, that makes sense. I know another thing that you sort of mentioned was -- I think you said that whenever you're doing DNS communication, it's 512 bytes; I think that's what you said for the message size. Does message size matter for UDP? You just said that you could have a buffer that could hold much larger things...

**Adam Woodbeck:** Yeah, so this goes back to the maximum transmission unit of 1,500 bytes that you're likely to see on the internet. So this is the maximum size of packets that most routers and switches are comfortable transmitting. You can certainly have these super-packets that are much bigger than that, but 1,500 is a good number to shoot for with UDP... Whereas fragmentation in TCP is perfectly fine. So if your packet in TCP is traversing a router that doesn't support an MTU of 1,500 bytes, it may fragment it; it may split it up for you, and then those will be reassembled later on, and you ultimately receive all of those fragments, and therefore all of the data you sent at your destination. TCP guarantees that with an acknowledgment.

UDP is not the same way. With UDP we don't have that reliability at the transport level. So if there's any fragmentation, now each one of those fragments is subject to corruption, to being dropped, to just being delivered out of order, because there's no orderedness now when we're talking about fragmentation and UDP... So you wanna try to avoid fragmentation in UDP, if at all possible.

Normally what happens - if I'm using UDP and making a DNS request, and the response is gonna be larger than 512 bytes, then normally the server will tell me that the answer is truncated. It didn't give me the full answer. So me as a client now, I know "Okay, if I want the full answer, I need to repeat this query, but do it over TCP. Then I can repeat this query over TCP, incur the overhead of the back-and-forth and establishing the session and stuff, and then I'll get the entire answer.

So really, the reliability that we rely on, or just sometimes take for granted in TCP, is not there in UDP, and you need to at least be aware of UDP's limitations in that regard, and then account for that in your code... Meaning like your code may need to, when you're sending data from your application, include your own sequence number in the data. And then on the other side, when you read that data, that message from the UDP socket, inspect the sequence number in your application and decide "This is the order I expected" or you manage the orderedness yourself, and then send a UDP acknowledgment.

So the reliability that we have in TCP, you don't have with UDP. But if you need that reliability and the speed of UDP, the onus is on you as a developer to add that reliability in your application itself.

**Kris Brandow:** Question about fragmentation - when the packet gets fragmented on the other side, do you receive that as like two different UDP messages, or is it like combined at the OS layer into one?

**Adam Woodbeck:** \[48:29\] It's not recombined, is my understanding. Even if it is fragments, and now each fragment has its own checksum, it can be dropped, it can be corrupt... We've basically just taken a single packet and split it into multiple parts... And if any one of those parts is corrupt, dropped, or goes missing, then you can't reassemble the original UDP packet anymore. The entire thing essentially is worthless and you just need to resend it.

**Kris Brandow:** Okay.

**Jon Calhoun:** That definitely introduces some complications to sending large messages that way...

**Adam Woodbeck:** So there's the Trivial File Transfer Protocol... The only time I've ever used it is when I bricked a Wi-Fi router and it was the only way I could load firmware on it, was using TFTP. And that's UDP-based. And it essentially has what we're talking about here as far as sequence numbers and acknowledgments. But that's, again, at the application layer. I think it's chapter seven in the book, where you write a TFTP server, essentially.

**Kris Brandow:** I think one of the interesting things about these network protocols is why did we develop TCP the way we did... I think a lot of that had to do with network congestion, and people just overloading networks. And when networks overload \[unintelligible 00:49:41.28\] that's why we have window sizes, and all of these other things...

I think it's interesting that we've gotten to a point now where those things have become more of a hindrance to us in some circumstances than they are a benefit. I think a really good example of that is the journey that HTTP has been on. We all started with HTTP/1, HTTP/1.1, where it was a text protocol and you couldn't multiplex; and we had this head of line blocking problem, so you had to open multiple TCP connections to make to make browsers faster... And then we made HTTP/2, which added multiplexing, but it was still over a TCP connection, and we immediately ran into more head of line blocking problems, because TCP is ordered. So even if you have independent streams of things happening, if one gets blocked with processing or whatever, then all the strings get blocked, and this protocol that was supposed to be magically faster actually turned out to be really bad if you had a really crappy network...

And I think the other thing that we also started figuring out is that TCP works really great if you're not moving, if you are a desktop, or you're on Wi-Fi and you can establish those connections. But as soon as you're hopping between Wi-Fi and a mobile network, now you have problems... Because with a mobile network they kind of make it appear as if you still have a TCP connection. But if you switch to Wi-Fi, your TCP connections are now gone and you have to reestablish them, which is super-expensive... So QUIC/HTTP/3 is now giving us the ability to move those connections between things, where you can go between a mobile network and Wi-Fi, and keep your connections alive. But it's essentially just rebuilding everything we had in TCP on top of UDP, because TCP is too restrictive.

**Adam Woodbeck:** Yeah, it's moving it all to the application layer.

**Jon Calhoun:** One of the ones that really stuck out to me when you said about HTTP/2, Kris, was when you see web pages where they put all the JavaScript at the bottom, like the include tags... I'm assuming that's one of those things where if it gets blocked trying to load those - is that what you're referring to?

**Kris Brandow:** I was more referring to if you have multiple files that you're trying to load at the same time, if one of those files is taking a long time to process or whatever inside the HTTP application code, it will block anything else coming through. So if you're sending a giant file and then several smaller ones, but the way it gets put onto the wire is that the last byte of one of those smaller files is after all the bytes of the larger file, you have to go through all of the bytes of the larger file before you can get to the byte of the smaller file.

\[52:19\] With UDP, since there is no inherent ordering of those packets themselves, if you get that smaller packet earlier, you can just go and process it. You don't have to read everything in the order that the initiator sent it. So that's the head of line blocking problem that usually people run into if you have shaky networks where you're dropping a lot of packets... Because you're just waiting for these packets to get redelivered to you or resent, and you can't read anything after the packets that are missing, even if they're not relevant to the thing that you're reading.

**Jon Calhoun:** So when you were talking about the sequence bytes, I'm assuming this will be a case -- let's say we're at sequence number one, and we get all the bytes from sequence 3 to like 1,000, but we haven't gotten 2 yet, so we're like "We've gotta sit here and wait, to do anything with that data."

**Kris Brandow:** Yeah.

**Jon Calhoun:** Okay. The other thing, Kris, you had mentioned I think was HTTP/3 and - was it QUIC?

**Kris Brandow:** Yeah, HTTP/3 and QUIC.

**Jon Calhoun:** I know nothing about this... So if you guys wanna talk about that, you are more than welcome to... But I cannot lead that part of the conversation.

**Kris Brandow:** I guess we could probably start with just like an overview... I gave a brief one, I think, of why we wound up here... I think one of the interesting things about this is that you're probably already using HTTP/3 and QUIC. If you use Chrome and you connect to a Google service, most of that stuff is happening over this new protocol.

I guess the simple way to describe it is whereas HTTP 1 and 2 rely on TCP as the mechanism to order the bytes, so it just puts all the bytes on the wire in whatever format; there's framing in HTTP/2, so you can do that multiplexing, so it's "Okay, if I have three streams that are sending data, I'll chunk them into smaller pieces, and as I'm ready to send them, I will multiplex them onto the TCP connection."

HTTP/3 is higher level than this. All of that ordering is at a higher level of abstraction... So instead of relying on the connection to give you any sense of ordering and you have to do the framing there they do the framing directly in UDP, breaking up the packets to those sizes for a stream, and then I have all of the identifying information inside each UDP packet as it's getting sent along.

I already mentioned that the biggest benefit to something like this is that you get that nice "I can switch between different networks and it still works", because the connection information no longer lives within TCP, within that protocol layer; it lives within the application layer, so the application just has to know "Oh, this is part of this stream that I already have..."

I do wanna say too that I think the interesting thing about this is that HTTP remains the same throughout, whether you're using 1, or 2, or 3. That is all abstracted from you. You don't have to worry about any of it; the way that you interact with it in most programming languages is the same way that you've interacted with any of the other ones, which is really cool, and a really interesting design pattern.

So while I think it's really interesting to play around with TCP and UDP building things, I think I would almost always go with HTTP, unless there's a really good reason not to.

**Jon Calhoun:** Yeah, I think that was one of the reasons why I wanted to do this episode, was that I think generally speaking most people are better off just using the HTTP package... But it's nice to sort of understand what's going on under the hood, because sometimes we don't get time to nerd out and actually just see how is this actually working... And that can be really cool, and also inspiring for if you have an idea to build something and you just wanna see how people built things in the past.

**Kris Brandow:** Yeah. I think most people should go and tinker with TCP and UDP and build stuff - probably not for production - with it. It helps you understand how all of this is working, too. I think a lot of times it feels like this is all magical... Like, "Oh, TCP just handles everything for me."

\[55:57\] I've had situations where I had to debug an application and we're like "Oh, well TCP always cleans up connections properly, and there's never a state where you're gonna have a TCP connection stuck open", and we debugged an application and we had one side of a connection thinking it was still valid and trying to write for like 36 hours, and the other side had killed that connection ages ago, and it caused a massive problem within our applications. But people that knew how TCP worked were like "That shouldn't be possible, but we have the ability to look at it and see, okay, this is happening, and implement a timeout to make sure this doesn't happen again. Or probably a deadline, not a timeout."

But I think understanding how this stuff works demystifies it a lot, so you can wind up being able to debug this type of thing or understand it better. Or maybe in the future, if you learn enough, designing something like HTTP/3 to make the world better for everybody.

**Jon Calhoun:** Yeah, we didn't get to talk too much about deadlines and timeouts, sadly... But anytime you're talking about networking stuff, I assume that becomes important. Adam, is that something you could talk about relatively quickly, as we get near the end of the episode?

**Adam Woodbeck:** Sure. So we mentioned TCP has keepalives that try to maintain the integrity, or at least make sure that the other side is still listening, even if it's not receiving data yet. That's not the most portable mechanism, and those packets can be filtered by intermediate firewalls. So a method that I prefer is to use deadlines in Go. So you can set a deadline on your connection, to say that "As soon as this deadline is reached, any blocking calls to read or write immediately return."

In that scenario, let's say I'm communicating with a client that I expect to send me data, but I don't send data very often. So I'm essentially blocking on the read call. And something happens where that client goes away. But I didn't receive a FIN. So I'm not receiving any data. Maybe someone firewalled off that connection, or something. So I'm sitting there with this open TCP connection, thiking I'm talking to another side. I could certainly enable TCP keepalives if their end supported it and my end did, too... But deadlines, in my experience, are a better or a more portable way to handle this scenario.

So every time I receive a message from the other side, I could push that deadline forward into the future, by whatever interval. Let's say ten minutes. So that means for the next ten minutes I'm gonna keep this open, and then expect a reply or a message to come in within that 10-minute window. Otherwise, I'm gonna terminate this TCP connection. And I can set up - again, in the application layer - essentially like a ping-pong, or a challenge-response, if I wanted to, where if I haven't heard from them in a while, I can send a ping, and I expect that to elicit a response to me, which I can then use to push the deadline forward.

If I don't receive one after a certain amount of time, then I let the deadline expire, and it essentially exits my blocking read call with a Deadline Exceeded error, and then I can return at that point. I can close down my end of the connection, or attempt to reestablish a new connection to that remote side.

**Jon Calhoun:** And this is using the context package. Is that how you generally do that?

**Adam Woodbeck:** No, on your net.Conn, on your Conn object, your interface, there is a SetDeadline, there's a SetWriteDeadline, and there is a SetReadDeadline method, so you can control either just the read deadline, the write deadline, or if you call SetDeadline, it sets both the read and write deadline. By default there is no deadline in a network connection in Go, which means that you're essentially gonna block indefinitely until the operating system says "We're done waiting" and closes it for you, if it's configured to do that.

**Jon Calhoun:** Okay. I was gonna say, that's something I think I've seen with even HTTP clients, where people will set up a client to make a request, and I think you're supposed to set up a deadline -- it's been a little bit, but basically you set up the deadline so that you don't have something that just sort of sits there. I know that's something that people talked about causing all sorts of issues, where you leave it sitting open and you really shouldn't be.

**Adam Woodbeck:** Yeah, the default HTTP client does not have a default timeout. It will just block indefinitely.

**Jon Calhoun:** So we're getting near the end of the episode... For anybody who's listening live, we're planning on doing a giveaway of I think at least two copies of Adam's book. It's going to be a physical copy mailed to you... So if you wanna go follow the @Changelog and the @GoTimeFM Twitter accounts (probably the @GoTimeFM one is the biggest one to follow), you can hopefully get a copy of the book. And if you haven't, go check it out on No Starch's website.

So Adam, before we wind this down, we need an unpopular opinion from you...

**Jingle:** \[01:00:34.00\] to \[01:00:54.26\]

**Adam Woodbeck:** Okay, this is an unpopular opinion, but not like a popular unpopular opinion...

**Jon Calhoun:** Honestly, it varies... We get all sorts of different opinions.

**Adam Woodbeck:** Okay.

**Jon Calhoun:** Usually, they do a poll on Twitter, and what Mat always says is if it proves to be a popular opinion, and it's not actually unpopular, you have to come back on the show. That's how you lose, you have to come back on the show.

**Adam Woodbeck:** Let's see - this is a polarizing one... So I am a big ThinkPad fan. However, I'm also a fan of trackpad gestures; I use a lot of gestures. So I think that Lenovo should drop the ThinkPad's trackpoint and make room for a larger, better touchpad, on par with the MacBook trackpad.

**Jon Calhoun:** So for everybody listening, what you're referring to is the little red button that's on those laptops.

**Adam Woodbeck:** Yes. The physical button is just below the Space bar. Just get rid of those buttons... You can keep the knob. If you wanna keep the knob, keep that. But get rid of the physical buttons and put a larger trackpad on there for me, please. That would be my perfect laptop, I think.

**Jon Calhoun:** I don't even think we can discuss this one.

**Adam Woodbeck:** I mean, if you wanna join in, either agree or disagree, you're inviting hatemail.

**Jon Calhoun:** It's hard for me because I don't use ThinkPads, or I haven't in a long time... So I can't really tune into this. I can't say I don't care for the buttons, but part of that is because I've been using a MacBook for so long that I'm just like used to it... I will say that occasionally, if your palm hits the trackpad and clicks somewhere - I've had it send an email because of that before, and it's just the most annoying thing in the world, and I'm like "Son of a gun..." My email was halfway done, so I'm like "Yeah, that email is not gonna make any sense whatsoever right now..." But that's a rare thing. It's only happened to me once or twice. Any thoughts, Kris?

**Kris Brandow:** I'd say I think that's a good idea. I think better trackpads are always nice. Gestures are awesome. I don't know how you go back to a computer that doesn't have all of the gestures that macOS has. Anytime I have the option of getting one of those magic mice versus a trackpad, I'm like "Give me the trackpad", but the magic mouse has this tiny little area to do gestures in, but I want the big area to do all the gestures that I want. So anything that's like "Give me the ability to more gestures", thumbs up for me.

**Jon Calhoun:** I'm pretty spoiled in that most of the time I have a keyboard and mouse sitting there, so I'm fine... I'm used to the gestures, I'll use some of them, but I'll definitely say that if you like natural scrolling, you and I aren't on the same page, Kris, at all...

**Kris Brandow:** \[laughs\] I just get it... I have a Linux computer \[unintelligible 01:03:24.19\] and it obviously doesn't use natural scrolling, and it confuses my brain, which is also why I don't use my mouse as much with my Mac computers, because I -- I just can't do it. But I can switch easily; if I'm doing a trackpad, it's fine; and then I can scroll the right way on my Linux computer. But I can't use the same mouse to do both.

**Jon Calhoun:** I've run into the case where I'm helping a parent or a relative or somebody with their laptop, and I'll go to scroll, and I'm like "Why isn't it going?" It always throws me off, because that's one of the first settings I change when I get a new MacBook, is get rid of this.

**Kris Brandow:** But do you change it on your phone? Do you have scrolling inverted on your phone? Can you even? I don't know if you can do that.

**Jon Calhoun:** It's whatever is normal on my phone feels normal to me... But for whatever reason, on a computer it does not work for me. It's just not what I'm used to, I don't like it. But I think I changed a couple of the gestures, too. My setup is probably a little bit different from most, because I think I do something where three fingers and four fingers in one direction end up doing the same thing, because I actually don't like them doing different things...

It was something weird where one of the gestures that's there I don't ever use anyway, so I was just like "Just make these both do the same thing." I think they both go back, or something. I'd have to go check. It's one of those things where you don't actually know until you're doing it... It's like setting up a new phone, you're like "Some app goes here. I don't know what, but when I go open it, I'll remember." I don't know if I'm the only one that does that, but that's how I set up a new phone.

**Kris Brandow:** I've had problems with that... When I'm on my iPhone, accidentally dragging an app and moving them all around, and I'm like "I don't know where anything goes, but I'm gonna know that everything's wrong and I'm gonna be upset later when I try to open something and it's like "Where is it? This is not where it's supposed to be!"

**Jon Calhoun:** Alright. Adam, thank you for joining us. For everybody listening, when you do see the poll, make sure you vote whether you like his unpopular opinion, and go check out Adam's book, Network Programming With Go.

**Adam Woodbeck:** Thank you, I appreciate it.
