**Johnny Boursiquot:** Welcome, everybody, to this episode of Go Time, where we get to talk about immutable databases. Now, I must admit, I'm gonna be a skeptic during this show, because I've been looking for use cases, and the project we're gonna be talking about does a very good job of articulating those things... But I'm still very much old-school, if you can call it that; the concept of immutable databases is not something I've ever had to use at work, so I'm looking to -- well, let me take that back. I'm not gonna be a skeptic. I'm gonna approach this with an open mind, and I'm gonna approach it as a learner, as a beginner into this space and into this kind of technology.

Joining me today is my co-host, Jon Calhoun. Say hi, Jon.

**Jon Calhoun:** Hey, Johnny. How are you?

**Johnny Boursiquot:** I am good. Man, we haven't been on a podcast together for like a couple months at least.

**Jon Calhoun:** It's been a little while.

**Johnny Boursiquot:** It's been a minute, glad to have you with me here today. Also joining me are two -- I don't know if it's co-founders, or core contributors, or all of the above, but the two of you work on the Codenotary team. I did a quick google around and see that's a company that actually has a product that they're selling, but we're not here to talk about that, we're here to talk about the open source project that the team is behind, called immudb. Joining me to talk about this project are the folks who work on it all the time. I've got Bart Święcki, who is a software engineer, and he's passionate about cryptography, and applied math, and open source, and he's been working on immudb since last year... And obviously, he's been using Go to do that, so we're gonna be peeling back that onion to figure out what makes Go such a good tool for this particular kind of technology.

\[04:23\] Also joining Bart is Jeronimo Irazabal. Jeronimo also works at the Codenotary, on the team that works on immudb, and he's a software engineer, also passionate about cryptography and databases; I'm seeing a theme here... And also, he's been working on immudb actually a little bit longer, since the year before since July 2020, on this particular project. I'm also interested in hearing what your journey has been using Go to build these kinds of things. So welcome, Bart, and welcome, Jeronimo.

**Jeronimo Irazabal:** Hi, thanks for having me.

**Bartlomiej Święcki:** Pleasure to be here.

**Johnny Boursiquot:** Awesome, awesome. So first of all, I think our audience - not everybody is gonna be familiar with the concept; we all sort of share a common understanding for application developers, writing business applications and whatnot... We all have a pretty common understanding of your database. You write things in, and you update records, and when you need to, you delete things... So it's almost like -- it's a tool for transactions; you record things in there, and when something is no longer needed, you delete it, sometimes you might need to update it, but at any given time, the state of the data within the database is shifting. And in comes this concept of an immutable database, to which I'm scratching my head and I'm thinking "Okay, what is an immutable -- why would I want my database to be immutable?" So please - let's start with you, Bart. Why don't you tell me what an immutable database is?

**Bartlomiej Święcki:** Yeah, so when you have some information and you put them inside your database, usually we tend to think that this is some kind of temporal state, we can change this, alter this after some time... But what if actually there is some information that you don't want to change? That's where the immutability comes into play. So maybe there are some informations, like critical things, like maybe transactions on your account, or some records that -- let's say you write down the temperature in your room; this is not going to change in the future. So that's where the data itself is immutable. And immutable databases try to work with this kind of information... With information that won't be altered, or maybe a different way - sometimes the data can be altered, but some properties of this information should not be changed, like the history of the values; if you want to scan over the history of the values, and you maybe have a use case where you have to look back what was the state over time, this history will not change. So that's also a property that maybe you want to keep immutable. Also, the database - maybe you want to have an extra layer of protection from the database, so that you don't accidentally change and damage this information.

I remember when I was working on some standard databases, just common databases - there's this feeling when you delete too much records from the database, and suddenly you feel that "Uh-oh... How can I get out of this situation?" And immutability here helps a lot. It gives you this peace of mind. But there's also much more to it.

**Johnny Boursiquot:** Right. Let me try to state that back to you, but based on the way I understand it. So when we talk about immutable data - let's just remove the database aspect of it for a second. When we talk about immutable data, we're talking about "What is the state of things? What is the reality of things right now, or at the time I choose to record this data, be it on a piece of paper, or electronically, in a database, whatever?" What is the state of the world right now, at the time I'm writing this piece of data?

\[07:58\] So if currently it is 50 degrees Fahrenheit, at this hour, at this minute, and in another hour if the temperature rises about ten degrees, and now it's 60 degrees, you're not changing the past. You're not changing when it was 50. You're basically adding a new record, saying "Okay, another snapshot of this data means that at this hour now it is this temperature."

So it's almost like you're dealing with sort of an append-only logging kind of situation, where at any given time you're able to go back in history to figure out what was the state of the world at this particular point in time. I can see why this creates some sort of a trail, a log, audibility, that kind of thing, and see "Okay, how is this thing changing over time? Who changed it? Why?", whatever. So that applies to a particular use case whereby in most cases what I'm used to is "Give me the current temperature." Whether I asked for that an hour ago or an hour from now, I'm asking for the current temperature. Give me the current temperature. So what you're tracking behind the scenes, multiple versions of it - that's kind of your business, but sometimes I just want whatever the current value, however you determine that, I want whatever the current value is. So these are slightly different use cases.

So it seems to me that immutable databases are about keeping history of things, not about being almost like your primary database. It's like, if I'm building a weather app, I may want to see what the historical value is, but if we change that a little bit and add, say, a financial services app or something - for a bank, for example - I can see my account balance over time. And every time my account has changed - maybe a new purchase, or a debit, or some sort of deposit - I'm tracking that over time, but at any given time I want to know what's my current balance; can I buy this thing or not? So there are different use cases. One is not supposed to replace the other. Do I understand this correctly?

**Bartlomiej Święcki:** In a sense, yes... Basically, this immutable database is like a watcher of a time. But it also contains the most recent state. If you want to check the balance, your current balance, it will still be inside this database. So there's still a use case as a primary source of information. But it's actually more about protection against some kind of tampering with the history. So if you want to make sure that the current balance is the true information, how can you be sure that someone did not do some kind of a change in the history, altered the data? How can you be sure that the current state is actually valid?

Let's have a use case where there is a banking application - I can simplify the use case - and there is a user. If you want to check your current balance, you open this application, check the balance. Then you do some purchases, and then you check the balance again. So you intuitively check if these things match. So if the previous balance and the price that you have to have pay - if this all matches. If it doesn't match, you start being suspicious. Something is wrong.

And immutability also - and verifiability - can be used to actually make sure that not only the user can do this. You remember the old state, you know the current state, and you can somehow check if this is consistent. And immutability here, and especially in immudb, gives you cryptographical tools to make sure that actually the database did not lie to you. So once something was written in the history, the database cannot say that "Oh, it was something different." It cannot lie to you. Because if it would lie, then you will immediately see this, because of this mathematical proof.

So if there's something crucial, like audit logs, which after some time you may want to do some investigation, what happened over time, this gives extra protection that you can rely on this information; because the database has proven that up until this point in time it is consistent with the whole history.

**Johnny Boursiquot:** Okay.

**Jeronimo Irazabal:** \[12:09\] I think you were covering a lot of problems that are addressed by immutable databases. First I would like to clarify, immutability is an overloaded term, because as, Johnny, you were mentioning, with immutability we usually refer to systems or data structures that are append-only. That treat changes or updates as new data, actually. So when we are doing an update of a record, we are not mutating the original record, but treating the update as a new record is creating the change.

So we are used to that for immutability. And actually, immudb relies on -- every component in immudb is an append-only data structure. Even the cryptographic data structure I would treat as append-only. But immutability in databases, or even in blockchain - we tend to refer to another thing; not just to append-only, but to the possibility to verify that the history hasn't changed. So every record is registered and cryptographically linked to what happened before. And then you have a way to verify if a given transaction or a given record was present and was not modified anymore once it was written. It doesn't mean that cannot have the current state of your balance account. As a traditional database, you will have data as the current, the latest value that was placed for a given record, because the record will be the key that identified the address or the balance... But also, depending on the use case, it may be a cumulative set of changes, like indeed where we are committing changes. So the current state or the history - it's independent of that.

What we refer to this type of thing is verifiable. I prefer the term "verifiable database", rather than "immutable database." Because every system has integrity checks to check the consistency of a given record or of a given file, if it is consistent or not. But with tampering detection it's like, giving the possibility to the client application or the application that is using the database to do the integrity validation by themselves. That is one of the differences - the application that is receiving the data from the database was able to run the integrity check, to validate that the data that was received was not modified since it was written.

**Johnny Boursiquot:** Okay, let's pull on that thread a little bit... So we're not talking about the clients being or maintaining a copy of whatever data you might have at a central immutable database, or verifiable database. You're talking about some sort of a cryptographic verifiability of the data.

**Jeronimo Irazabal:** So one of the particularities of an immutable database is that at every moment the complete state of the database is captured by your hash value. So that denotes not only the current state, but the complete history of changes up to that point. So the plan in immudb, for instance, or in other immutable databases, is the client who needs to keep track of this current state, the latest state that is known. In the example that Bart mentioned regarding your bank balance account, you may know what was the latest state that you can trust. And based on that and the new changes is where you can compare. You have the base to compare the new changes, or the new results. But the client only needs to keep track of the state of the database at any given point. That is the minimal information.

**Jon Calhoun:** To make sure I understand this - that means that deleting records also isn't permissible? Is that true?

**Jeronimo Irazabal:** \[16:15\] Deletion is actually -- we have two labels. We have logical deletion, or physical deletion. Logical deletion is something that can be handled by the application, or by the server. But the difference will be in terms of performance, because the filtering out of the information will be done much faster if it's done directly by the database.

In immudb we currently have support for logical deletion in both manners - deleting a key, for instance, or by providing an expiration date. But this currently is just a logical deletion. This means that the data will be still there, it will be automatically filtered out, and the client won't receive it. But it's not yet physically deleted. We are under discussions to incorporate physical deletion of data. It's a very interesting topic to discuss what involves physically deleting the data and yet being able to prove. So depending on the data you delete or you remove, is the possibility you have later on to build proof. So it's a very interesting topic.

**Jon Calhoun:** Yeah. And I'm assuming we're gonna wanna talk about good use cases for an immutable database... But I guess the first thing that comes to my mind is - I feel like you'd have to be careful as to what applications you use those for, because there are rules like GDPR where you have to be able to forget people, essentially... And I could imagine a weird situation where you write something to an immutable database accidentally, and then you realize "How do we fix this?"

**Bartlomiej Święcki:** And actually, GDPR is the main reason why we started actually thinking about physical deletion... Because some laws require from you to make sure that the data is not accessible at all after some time. Of course, the rules are not clear, because sometimes you have to hide the data from the users, but then you have to keep it for a longer time because there may be some kind of investigation later on. But still, it is possible to actually remove the data, and maybe there is a different reason for that. Because if you have an append-only structure, append-only data and you start putting too much data into it, you will just run out of space. And after some time you want to reclaim maybe this space. Or you have physical constraints of your server and you have to deal with that, and there is a production system running, so maybe you want to just wipe data that is older than some point in time in the past... And still, as Jeronimo said, the state of the database, the hash of the database contains all the history. So this is a very interesting topic. You no longer have the data, but the state needs to calculate this data in, so that you can still prove that the new changes added to the database are consistent with the whole history, since the beginning.

**Jeronimo Irazabal:** Regarding the use case, a few months ago there was a situation with a famous tennis player and the Covid-19 results. And there was some news regarding multiple results depending on when it was queried from the service. Of course, if that data is stored in immutable databases or in blockchain, then it will be possible to actually know if that data was consistent or was tampered with. That is kind of a use case in a more traditional system of service; it may take time to use an immutable database in this type of systems or services, but I'm sure it will happen with time. So it's not about just sensitive information.

**Break:** \[20:00\]

**Johnny Boursiquot:** So it sounds like, of the use cases, some obvious ones are obviously financial transactions, health records, things that you care about that basically change over time; you want to be able to go back at some point and say "Hey, what was the state of things on this date?" and have a high degree of confidence that this data hasn't been altered, hasn't been modified or anything like that. That's the key takeaway here from what I'm gathering.

So I'm curious, what drives folks like you into this particular domain problem? Why immutable databases? \[laughs\] ...of a lot of things you could be working on.

**Bartlomiej Święcki:** Yeah, I think we both say that we like playing with cryptography and math. For me personally, when I started learning about immudb and what techniques it uses, the cryptography itself and the mathematics can be very theoretical. And as long as it doesn't find the practical place to give you some benefits, it's still a theory.

When I've learned about immudb - because I joined the team a few months ago - it was this moment that you find something that is working, a live database that you can easily use it, and it has all this machinery behind it that is doing all these proofs, and it's cryptographically verifying everything, and it keeps everything in place... So that's something for me that is a great benefit for all of us.

Previously, we could think of this... Maybe there's a project that I want to create, and it would use this technology, but then I find it hard to implement this. And suddenly, I find this kind of database where I have a very easy interface and I can just take it and use it. So for me, that's the major goal of projects like immudb. So we have a lot of knowledge, and actually, the majority of the cryptography and all these algorithms were invented a long time ago, and right now we only started implementing them and implementing them practically. That's where I think immudb -- that's the goal of the project, is give people the way to use immutable databases in a simple way.

**Jeronimo Irazabal:** \[24:01\] Yes. Before giving the explanation how I ended up here... But actually using immudb for an application developer is exactly the same as using a traditional database. You can download the immudb binary or local container, and you will use any other key-value store, or SQL database as well.

So before I joined Codenotary, I was working as a software engineer for IBM, and the last projects were related to digital rights management, and that was related to applied cryptography there for generating the crypto materials... And also, I was a contributor for Hyperledger Fabric. By then also I worked also in an experimental project where we added SQL to Hyperledger Fabric. We added SQL support into the changelogs, actually in the smart contracts. But by then, I was convinced that the complexity of the project was quite big. There were many companies or organizations willing to use blockchain just to be sure or to prove themselves or to their clients that the data was not changed. But then they had to run a very complex system, so I always thought about the possibility to have just a traditional database with the verification possibilities. So to have the same verification capabilities like a blockchain provided, but thinking of singular organizations being the owners of the data, but yet to fulfill with auditory requirements or to prove to their clients that the data has not been changed.

So by then I just started to think about this type of systems, and I got to know about the company and the initial release of immudb. By then, immudb was implemented relying on another key-value store that was written in Go. So that's where I just started to work,

And related to immutability, I think tampering detection is one of the types of verifications we can do, but there are many other things that are to be included, like what is the latest record that was modified, being able to verify when you are dealing with higher-level data models, like SQL... If you have a database and you have a document like a data model, and you have queries, and you have to verify them. So there is a lot of things to investigate, to explore, and of course, to implement.

**Johnny Boursiquot:** Mm-hm. So it's not lost on me you mentioned blockchain... We'll come back to that, we'll come back to that. You've piqued my curiosity when you said that you support both SQL -- you can use it both as a traditional RDBMS, SQL database, or as a key-value store. Why the dual modality for accessing data?

**Jeronimo Irazabal:** Actually, everything started as a log. immudb has a composite construction; everything started as an embedded database, so immudb can be used as an embedded database. This set of logs, append-only logs, that is verifiable - it's like a transparency log. So you can access it. One of the differences of a traditional key-value store is that you can access a given transaction by its unique ID. If you only need to store records, logs, events, and then to query them, you don't need to query the data using an index. Just directly using the entry of the log. That is the basic way of using it.

\[28:05\] Then we have the possibility to build an index based on a key. Because every transaction or log entry consists of a list of key-value \[unintelligible 00:28:13.15\] So then you can easily get what are the transactions that modify this particular entry. And of course, you will get the latest one, but you also cannot get the history of the transactions that modified this particular... And that is how we implemented temporary capabilities. So you can go back in time in the database and query the database as it was some time ago, without seeing newer changes.

On top of this, we implemented SQL capabilities. So when you create an entry, thinking in SQL, it ends up being a transaction that consists of key and value entries. So SQL, all the SQL changes or the SQL data model is backed by a key-value database. So actually, the same transaction is what is happening. We are using the key-value transactions to store transactions that are happening in SQL. SQL was added afterwards, so it's possible to use both.

Of course, they are isolated entries that are inserted using the key-value, not seeing the internal changes or internal entries that are when working with SQL, but both data models are possible.

The advantage of using SQL, of course - it's easier to model your application. It's easier to work for later on to find index for \[unintelligible 00:29:48.13\] for writing queries, of course... But we also added the possibility to verify in SQL. So that is one of the differences. So you can get a particular row based on the primary key, and this entry will be verified.

**Johnny Boursiquot:** So you're still able to model your application just like you would in a relational system.

**Jeronimo Irazabal:** Exactly.

**Johnny Boursiquot:** It's just basically the encrypted storage that is used, and the verifiability once you pull data out - all these things you're adding sort of on top of the good old model that most developers who built web applications are familiar with, for example.

So let's talk about the operability of this. But before we jump into that, I see Jon that you've got a burning question you wanna ask...

**Jon Calhoun:** I don't have a burning question, but...

**Johnny Boursiquot:** \[laughs\] It's a question.

**Jon Calhoun:** I was gonna say that the SQL stuff reminds me of the first time I ran into a use case where I didn't necessarily need an immutable database, but I needed to mimic its functionality in some way. Basically, I was working on shipping stuff with addresses and everything, and one of the things that came up were people were like "Well, i wanna be able to change these addresses I used to ship to things", and it became very clear that in a relational database if you have a bunch of previous shipments that all associate with some record and then you change it, then all of a sudden your history is really weird at that point, because that's not actually what those shipments were... And seeing a database like this, it's kind of interesting to -- I think as developers we encounter cases where immutable databases or something like that is useful... I mean, we all use package managers, which are another example of not really having immutability; you can release a version, but once it's released to some package manager, you're kind of stuck... You have to release a new one, essentially.

**Johnny Boursiquot:** Or you're supposed to be. \[laughs\] I mean, I don't want you to be able to change that. \[laughs\]

**Jon Calhoun:** As I say, most package managers won't let you do it, so I think as developers we use immutable systems at times, but we kind of like forget about it... Because I think a package manager is a great example of something that really benefits from something where you can verify nothing got changed... Because that would be really bad when you're downloading third-party packages, to not know for sure that that's still the same version...

\[31:55\] But it's also interesting in the sense that I feel like most systems we work with that use immutability have some sort of scapegoat; the best example I can give is Git. We all use Git, where you can have the history, and it's supposed to basically be immutable... But there's always ways to force changes and to rewrite history, which is not necessarily a great thing, but it's possible.

So knowing that developers at some point want to rewrite history and stuff, do they have to come in to using immudb -- like they can't come into it, I'm assuming, with the same mindset of like "I can use this exactly like a SQL database." So are there any tips or advice that sort of like help them get out of that mindset that you see people struggling with when they're starting?

**Bartlomiej Święcki:** So in immudb what actually you could think of is that you can change the data. You can do corrections. But what you will still get - you have this auditibility of the history. So it's like, I'm not lying to anybody that I did not make a mistake; I did make a mistake, I just corrected it. Right now, this is the state. But let me be clear, this is the current state, and previously it was something different.

Also, this example with changing the address - I think this is something very interesting, because from the key-value level inside immudb we have something like a reference to other key. So instead of getting some specific value, you just try to read it from other key, and just forward it back. But what you can do is you can say that this reference is for that key, at that transaction. So what it means - it freezes the value inside the history, so then you could create let's say a record that there was this kind of shipment, to that person, under that address, at that point in time. That is something unique. Also, I need to comment about one thing... This package manager.

**Johnny Boursiquot:** \[laughs\] Please, do.

**Bartlomiej Święcki:** Let me say that we have actually been using these immutable databases, but we just don't know it or just forgot about this... And a very good example is actually go mod proxy. Actually, the technology behind go mod proxy is very similar to what we have; it's this kind of immutable ledger. And actually, we had this situation where we released some kind of tag, some version of immudb, and once somebody just fetches it through the proxy, it's set in stone; you cannot change it, you cannot switch the tag to something else, and very weird situations happened. And actually, this is for security reasons. So if you release something, then everybody who downloads this particular version will only get this version of the code. You have to release a new patch version. And that's actually good; that's good about the security.

**Jon Calhoun:** I agree that that's good. I guess I would imagine it would make adoption harder, in the sense that developers are just weird about -- like, if somebody releases an invalid package and they wanna pull it back real quickly, they're still weird about like "Now I have to increment the version" and they don't wanna do that. For whatever reason mentally, they're like "I don't wanna admit I made a mistake" and show that to people.

**Johnny Boursiquot:** Too bad. \[laughs\]

**Jon Calhoun:** So does that make adoption harder, when you're basically forcing them to do that?

**Jeronimo Irazabal:** In this, case, in immudb, you have to convince every other client. If you want to roll back the history in immudb, we have to convince every auditor or client that already have that register \[35:18\] locally. That's the only option.

**Johnny Boursiquot:** Measure twice, cut once... \[laughs\]

**Bartlomiej Święcki:** But I think that really making a mistake is not something huge. We all make mistakes, and like in real life, there's always an option to correct the mistake.

**Jeronimo Irazabal:** For example?

**Johnny Boursiquot:** Let's hear it. \[laughs\]

**Bartlomiej Święcki:** Releasing a package that contains some bug.

**Johnny Boursiquot:** Right, right.

**Bartlomiej Święcki:** Why should we be ashamed of that? Actually, I see that people who can say that they made a mistake and they corrected that, they tend to deal with those issues better than trying to hide it. So I would go that way.

**Jon Calhoun:** \[35:56\] That makes sense. I mean, I guess there are definitely cases where it makes sense to want to delete things. Like, if you released something on Git that had private keys, clearly you need to try to clean that up... But I agree with you that it is hard; people should be okay with mistakes, but I feel like in practice people are weird with them.

**Jeronimo Irazabal:** And there is actually a technical situation that happened and there is a rollback. If you are using, let's say, a single master and a single node, and then caches, and you cannot recover the data. So if the back-up you have is old, older than the state that the client has, they will complain about that situation. So that is a situation that could happen and has to be taken into account. So the mistake there will be having only one node, or not having a back-up.

**Johnny Boursiquot:** I think it's okay to admit mistakes... Mistakes are part of life, it's okay. Just make a new thing and put that out there, and hopefully people don't download your mistake before you have a chance to replace it. \[laughs\]

I do wanna switch gears real quick to the operability aspect of things. Obviously, if one were to find a use case for immudb, or really immutable databases in general - it's interesting, as I was researching the technology, I came across other things that I'd come across before, but didn't realize that's what they were. I came across Amazon's QLDB, and I'm like, "Hey, that sounds familiar..." And basically, I saw it tracking the origin of these things. When did these things become popular? And there are references going back a few years, but these types of technologies became very popular, I think, in part as a result of an executive order that was issued maybe like a year ago or so on cybersecurity, and things like that. There was mention of producing or having things like a software bill of materials, and I'm like, "Hey, I'm starting to hear more and more about that now." There's advancements we've made with shipping and packaging software, things like that... And all of a sudden these dots are connecting for me about all these things that I read in the past and didn't really know "Where did this thing come from?" kind of thing.

For those listening in - it's interesting... Basically, find the executive order - it's called Cybersecurity Something-Something. Basically, you can find it on the WhiteHouse.gov website, or whatever... But you'll see this mandate with lots and lots of requirements for cybersecurity and everything else... And you're gonna find software bill of materials and stuff mentioned in there and whatnot, and you can see how things like that are sort of pushing forward the innovation that's happening in this space, especially with things like immudb and whatnot. And one of the use cases that you're enabling or solving for is the whole software -- basically, verifying the contents of a software package.

We just talked about how basically the go mod proxy, part of the thing that is also part - for those who basically when you download the modules and you see this weird go.sum file, with all the checksums in there and whatnot - all these things play a role into verifying that the version of the piece of software that you just got is indeed... Basically, you're not gonna get a different version that has the same checksum. So all these things come together to provide that sort of verifiability thing. But I know one of those use cases that you tried to solve for head on is this SBOM thing. Can you talk a little bit about that? And then I wanna talk about what it's like to actually run immudb in production.

**Bartlomiej Święcki:** Yeah, so SBOM (software bill of materials) is a term that is used to -- let's say that you create a software, and today you don't write all the software by yourself, you just use external packages... And when we look at, let's say, a Node.js application, it usually has hundreds of different dependencies. And the same with Golang, where you don't write an HTTP server by yourself, you just take what's in the standard library, and you do the same with contributions from other people.

\[40:01\] A software bill of materials is basically describing that if we have this binary, or this product, what is it made of? And here we can actually use this immutable ledger, because you just produce those assets, those binaries once, and we can identify them by let's say taking a hash, which is uniquely specifying this specific binary, and says that "This consists of other components, and those components also have this unique ID", maybe some kind of hashes. So that means that if you change anything, even a smaller bit, you will get a totally different binary, and you also have this specific set of components that it was built from. And when you take software companies that are running these binaries then, and it turns out that there's one specific library that has a vulnerability, how can you figure out where are those old components that are vulnerable? By just taking the software bill of materials information, and by just scanning it, what is actually running in production, you can very quickly identify vulnerable components, and then just fix this.

There were attacks where -- actually, until now, people may not know that the software that they are running is vulnerable. And this executive order is actually saying that you should have this software bill of materials, so that you can trace this information.

When we talk about immudb and immutable ledgers, you can also store this information in a secure way, so that if it is persisted and the database has given you the proof, then you can rely on this information; you can rely on the fact that it was not changed. Because maybe there would be an attack that someone goes into your database and your production environment changes some kind of libraries and then attacks also the database that stores information about this bill of materials relations, the relations between packages, how you find this. Immutability here protects you, that you can rely on this information.

**Johnny Boursiquot:** So if we're talking about one of the recent vulnerabilities, in Log4j for example, that made basically the rounds a few weeks ago, if I wanted to find out "Okay, I'm running Java software. Am I running the version of Log4j that was susceptible to that vulnerability? With the bill of materials I can find out exactly "Do I have the specific version anyway on my infrastructure?" And then with something like immudb, an attacker that is leveraging this vulnerability couldn't go and change the software bill of materials and immudb. They couldn't say "You're not really running the vulnerable software" by changing the software bill of materials and immudb, because you'd have to convince the clients that that wasn't true, or that change was true, whatever it is that we're changing.

**Bartlomiej Święcki:** Yes, exactly. And actually, that is what is the base for the Codenotary, the company that is building immudb; the base of their financial, it's a base that there is this Codenotary cloud that is using immudb to actually store this information. Because even if you don't have to, if you're not obliged to have this software bill of materials, then it's still good to have this information.

Log4j came out a few months ago, and it was a very critical vulnerability, where it could execute a code by just sending, in many cases, some packet to the server. And we know that there will be more vulnerabilities like that in the future, so it's better to right now be prepared and to start creating this software bill of materials, and when such vulnerability will happen, to quickly find it.

**Johnny Boursiquot:** Cool, cool. Very briefly, does running immudb - is that process markedly different from, say, managing your own traditional RDBMS, or your traditional key-value store? All things being equal, do I have to do more or less than I would need to, say, run a Postgres server, or a Redis server, or something like that?

**Bartlomiej Święcki:** \[44:01\] Just run a Docker image, or download the binary and run it, and that's it.

**Johnny Boursiquot:** And then run it. So the beauty of Go, right?

**Bartlomiej Święcki:** That's the beauty of Go.

**Johnny Boursiquot:** You've got your executable.

**Jeronimo Irazabal:** And depending on the amount of data you are dealing with, it will require some operational procedures, like doing a compaction of the index, that there is some already -- this is already implemented in immudb, for instance. But this is for reducing the space that is required for indexing, because the index itself is an append-only data structure. So there is an operational procedure to automatically compact the index. That is one of the things to take into account.

And the other is to be aware that you cannot fool the clients that are using immudb. So if you try to revert to another back-up, the clients will complain about that.

**Break:** \[44:57\]

**Johnny Boursiquot:** I am interested in obviously understanding why you chose Go for this kind of work... You could have picked a different language. Was there something special about Go that made this kind of work easier to approach?

**Bartlomiej Święcki:** So when I joined the Codenotary team actually it was already written in Go...

**Johnny Boursiquot:** Oh. You didn't have a choice. \[laughs\]

**Bartlomiej Święcki:** But the fact that it was written in Go was very important for me, actually... Because I was watching Go for a very long time. Initially, I didn't have a chance to work with this commercially, in my day-to-day job, but now I see all the benefits that Go gives... Like, having those goroutines - I remember the C++ times when I was writing HTTP servers; the first thing was that you had to write the HTTP server by yourself, in many cases, but then dealing with all those threads, and trying to schedule things, and keep things under control... It was doable, and you could write a performant server, but it took a lot of time.

So Golang is this sweet spot between the efficiency of programming and still having the performant application in the end. So I think that it is a very good system. We know that Google is using it, because they created it, so it must be battle-tested. It most likely contains this knowledge about large-scale deployments that are built in because of where it is used. And it simplifies so many things that for me it's a very good thing.

Also, Codenotary is a startup company where efficiency is also very important; testing smarter. We could write, let's say, something faster maybe, a little bit, a few percent, when writing in C++ or even something lower, but then it would take I don't know how many times more time; maybe five, maybe ten even.

**Johnny Boursiquot:** Cool. What about you, Jeronimo?

**Jeronimo Irazabal:** \[47:42\] Yeah, exactly. When I joined also immudb was on the initial release... \[laughter\] And it was already written in Go. But we cannot say that we have changed it, made drastic changes. So we didn't change the language, but we could actually because by then we completely wrote from scratch the storage system. Before, immudb was using BadgerDB; that is another key-value store that is written in Go. But I think it was a good choice for the reasons that Bart mentioned.

I also like it because the code is easy to read, code readability. I find it very, very easy to read code that is written in Golang. It makes it easier having a standard format for Go.

**Johnny Boursiquot:** Yeah, you're simply content with it. "Oh yeah, that's hilarious too." That's awesome.

**Bartlomiej Święcki:** It's good you mentioned the formatting of Golang code, because in C++ there was always a war, which one is better, and what to choose.

**Johnny Boursiquot:** Yeah, nobody does `go fmt`, but everybody loves `go fmt`, yeah.

**Bartlomiej Święcki:** Actually, I loved it since the first use, I must say.

**Johnny Boursiquot:** Jon, you've got one final question before we switch it over to unpopular opinions?

**Jon Calhoun:** I'm fine with jumping to unpopular opinions.

**Johnny Boursiquot:** Here we go, it's that time. I hope you brought the goodies, gents... Alright, let's get the tune going.

**Jingle:** \[49:06\] to \[49:25\]

**Johnny Boursiquot:** Alright, alright, alright... So let's go with Jeronimo first. What have you got?

**Jeronimo Irazabal:** Mine is not a technical one, but during the pandemic I started to see that a lot of developers started to upload photos of their working environment all the time; in a garden, on the beach... For me it's impossible. I don't know if it's just me, or those photos are just illustrative, like when you see a \[unintelligible 00:49:55.08\] get out. So that will be it. I don't know if it's just me, or...

**Jon Calhoun:** I mean, you've got a whole gym sitting there behind you. \[laughter\]

**Jeronimo Irazabal:** Actually, this is related to what Bart is going to mention, probably.

**Johnny Boursiquot:** It's like, "These people are just stuffing their faces..." \[laughs\]

**Jon Calhoun:** I mean, instead of the gym they just put some flowers and gardens behind them.

**Johnny Boursiquot:** I know, right?

**Bartlomiej Święcki:** But once I went outside with my colleagues from a previous job to eat something, and we actually hit some kind of alert and had to act very quickly and we sat somewhere outside... And honestly, the lighting makes it impossible to do anything, to see anything on the laptop. So I kind of agree with that... So it's not that unpopular, because I also agree. You have to have a good environment to do work. Maybe indoor it's much better, but outdoor it would be very hard.

**Jon Calhoun:** I feel like every person is unique in what they can and can't work with... Because some people love co-working spaces, and it's not that I hate them, but I would never wanna go to one every day of the week. For me, I feel like I'd be less productive there, where other people just thrive. And the same with coffee shops or any of that. I can't work in a coffee shop, and I don't know if it's my back or what, but if I'm working on my laptop all day, where I'm looking down, it eventually hurts my neck, so I have my monitor up higher and everything, and I'm like "I don't know how these people work all the time..." Sure, I can do it occasionally, but I can't do it all the time. But I literally know people who go to coffee shops most days of the week, and I don't know how they do it.

**Johnny Boursiquot:** Somehow they do. So what's your unpopular opinion, Bart?

**Bartlomiej Święcki:** Mine is also about exercise maybe... Because I think that as IT in general, the mistake that we are doing is that we start limiting ourselves physically. You have a monitor -- so you work mostly with the head and hands. And nothing else. So it's like, the majority of your body is suspended while you work. And we are flesh and bones mostly, when we take the percentage of ourselves... \[laughs\] And what it means is that if you just shut down part of your body, the whole body will be less efficient.

**Jeronimo Irazabal:** It's a waste of resources.

**Bartlomiej Święcki:** \[52:15\] Yeah, a waste of resources, and I was thinking - we approach this all in the wrong way. Why don't we, let's say, have big keyboards, where you can punch things, like use your muscles, and maybe it will increase your productivity. Just think about all these genius doctors in our movies - when they do something, they do this with shouting and waving hands, and things like that... Even if we read histories about some inventions in the past, they were not done while sitting; maybe they were, but some inventions were done when, let's say, running after someone.

I think we are just limiting ourselves. Why don't we learn things and doing studies like discussing projects during the run, or maybe swimming and solving computations in your head? Maybe this will increase our brain power.

**Jeronimo Irazabal:** So if I understand you correctly, you are suggesting the outside working environment, but without taking the computer with you. It's like, going to the beach, but without the computer.

**Johnny Boursiquot:** And running after random strangers. \[laughter\]

**Jeronimo Irazabal:** You are solving the problem that had was lighting

**Jon Calhoun:** If I understand it correctly, I assume he's saying that we should explore other ways of doing work that involve our body more, rather than limiting ourselves to sitting at a keyboard.

**Bartlomiej Święcki:** Yes, exactly.

**Jon Calhoun:** But if Jerod wants to summarize this as "You should chase after people while you're coding", we can do that, too. \[laughter\]

**Johnny Boursiquot:** We can do that too, we can do that too. Jon, did you bring one?

**Jon Calhoun:** I did not.

**Johnny Boursiquot:** You did not.

**Jon Calhoun:** I can say I agree with Bart though. I like the idea of thinking about other ways... Johnny, you have a standing desk, don't you?

**Johnny Boursiquot:** Yeah, I can raise it up and take it back down when I need to.

**Jon Calhoun:** I used one of those for a while, and basically what I've found was that I didn't like changing my setup all the time... And because I have enough space in my house, what I ended up doing was just getting a desk that's always standing, and putting a walking treadmill under it. I've found that depending on -- like, you can't do everything with it. It's hard sometimes to walk -- like, walking three miles while coding is not easy. Because you stop to think, and you're falling away from your keyboard, and you're like "Whoa, whoa, whoa...!" So you have to keep yourself going. But what is really useful is if I'm watching talks from a conference, or if I'm doing anything like that where I don't really need to type as much, or it's just light emails or something, I can sit there and actually -- it allows me to move my body while also thinking in a little different way... And it's an awesome way to get a break from just sitting through the day. But I think the unfortunate part is that most offices are kind of limited on space. So it's not like you can throw everything you want in there. So it kind of limits that. But I do agree that it'd be nice to see people exploring more interactive ways to do this stuff.

**Johnny Boursiquot:** Alright, alright, alright... That's good. I didn't bring an unpopular opinion, but I thought of one as we were having this powwow. One thing we didn't get to talk about, but that I am gonna do a show on... So that's the unpopular opinion - I'm doing a show on blockchain at some point in the future. That's it. That's the unpopular opinion. \[laughter\]

**Bartlomiej Święcki:** It's a dangerous opinion.

**Jon Calhoun:** So your unpopular opinion is that you think you should do a blockchain show.

**Johnny Boursiquot:** Yeah, exactly. I think I need to do an episode on blockchain. But yeah, that's gonna be unpopular. Yeah, it's brutal out there, man... \[laughs\]

**Jon Calhoun:** I'm honestly curious if that's unpopular or just incredibly polarizing... Because there's definitely some people who agree with you doing a show on that. I can't imagine -- I don't know how many though...

**Johnny Boursiquot:** Right. Well, I'm hoping folks won't shoot the messenger. I'm just the messenger. Look, I just don't want us to bury our heads in the sand and pretend this thing doesn't exist, because clearly, it pisses off a lot of people. So let's just talk about it, like we do most things. Let's just talk about it, and if there are merits, we'll raise them, and if it's complete garbage, we'll show that, too. So yeah, we'll see how well that goes. I hope people don't boycott the show after that... But yeah, we shall see. We shall see.
