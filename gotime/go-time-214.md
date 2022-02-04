**Jon Calhoun:** Hello everyone, and welcome to Go Time. Today I am joined by Mike Fridman. Hey, Mike. How are you?

**Mike Fridman:** Hello!

**Jon Calhoun:** I am also joined by Vojtech Vitek...

**Vojtech Vitek:** Hello there!

**Jon Calhoun:** Vojtech, how are you?

**Vojtech Vitek:** I'm good.

**Jon Calhoun:** And today we're gonna be talking about schema migrations. So we're gonna be talking about tools that you can use to manage these, different processes around them, some mistakes you can make, and maybe some tips on how to avoid them hopefully... So we're gonna be diving into all of that.

Let's just start off by talking about what are migrations. Do any of you wanna take that one?

**Mike Fridman:** Yeah, sure. I can take a crack at it. So at a very high level, migrations - or the type of migrations that we're gonna talk about - are schema migrations. So that's taking some SQL, and then evolving your database over time.

**Jon Calhoun:** So for anybody who started -- I guess it depends on when you started. But for somebody who started in the day where you would just pop into PHP MyAdmin and just type in some SQL and change your database - why do we need something to track migrations? Why is that an important thing? Vojtech, do you wanna take that one?

**Vojtech Vitek:** Sure. I think about database migration as a Git for your SQL schema. You need to make sure that the schema is correct and valid in all environments, including the local host, for all the developers' machines, and then for development staging, production, whatever environment you have. You wanna make sure that your database schema is always in the same state.

**Jon Calhoun:** That makes sense. I'm sure we've all ran into some of those issues where something seems to be working locally and it's not somewhere else, and database migrations can definitely be one of those cases where if you've done something locally and forgotten you've done it, it can have a big impact on whether it's gonna work somewhere else.

\[04:11\] So to start here, I wanna talk a little bit about the tooling around it, because one of the questions we get asked a lot is "How should people be running these migrations? What sort of tooling should they be using? How do these tools even work?" And I think a lot of times this stems from the fact that people come from a framework like Ruby on Rails, where all of that is kind of baked into it, and they don't even think about it... But then in Go, that's not really the case, because we're not using a big framework. So what are some of the tools out there? And I guess, if you can elaborate a little bit on what they're actually doing behind the scenes.

**Mike Fridman:** I guess maybe we should - maybe, as a suggestion - take it one step back and understand why we're doing this in the first place, before we get to a tool... So before you even jump into a tool, as a developer, you're usually developing some backend application, and you wanna make incremental changes to your database, because when your requirements come up, or you understand users better... And if you're a single developer on a single system, you can probably get away by applying migrations directly, doing an ad-hoc deployment, and then just calling it a day. But as soon as you get into a team or an organization and you have multiple developers working in parallel, there needs to be some sort of a process to coordinate how you incrementally make changes to your database over time. Then you wanna sort of decouple that from your application, and then be able to eventually roll that out.

So some of the tools that you would use would be Golang Migrate - I think that's the most popular one, probably because of SEO... I think there's other ones such as Dbmate... Me and Vojtech maintain one called Pressly Goose. But at a very high level, the way these things work is you usually have a migrations directory, and that directory is going to contain SQL files, or Go files, depending if the tool supports it... And those files are usually gonna be incrementing integers, so like 1, 2, 3, or they might be timestamps, like year, month, date, hour, minute, seconds... So they're large numbers, but they're still incrementing over time.

And then these tools - their only responsibility is to read those files and determine whether those migrations have been applied or not, and then keep track of that with usually a metadata or a schema history table in a database.

**Jon Calhoun:** So when you talk about like a history table in a database, this means -- and I think a lot of people don't quite realize this... But this would mean that actually your tool is gonna create a table in their database, that keeps track of these things. So whenever it's actually running the migrations, it's gonna say "Has migration 01 run?" And if so, it's gonna skip it, otherwise it's gonna run it. Is that correct?

**Mike Fridman:** Yeah, that's pretty much what it does... Depending on the tool. Different tools work slightly differently, but conceptually, that's what happens - you read your files, you read where you are in terms of diversion that you're currently at, and then any new migrations should be applied.

**Jon Calhoun:** So presumably, this could lead to a case where -- I guess one way to look at it is I think I've seen people change migrations that have already run, and that can be confusing to them... And I think that's in part because they don't quite understand how they work... And I suppose this could also lead to cases where you need to undo migrations. So what would that process look like?

**Mike Fridman:** Yeah, so usually when you write these SQL files, you'll usually create an up migration. So that'll be something like "Create table, alter table, add an index", maybe you even drop an index; that could be your up migration. And then you provide the corresponding way to roll that change back. So it'll be something like drop table, drop a column, drop an index, whatever that may be.

So depending on the tool you use - for example, Golang Migrate, you have two separate files. So you'll have something like "01 create table up", and then you'll have "01 create table down". And when you do your up migrations, that creates the table. When you do your down migration, that drops the table. So you kind of have a way to go forwards and backwards in your migrations.

**Jon Calhoun:** \[08:09\] So when we're looking at these migrations, another question that I've seen pop up is "Is it possible for them to run not directly in the order that's listed?" If you're sorting (I guess) alphabetically... I'm not sure what -- basically, they're sorted by the number, like the 01, 02, 03... Is it possible for these to not run in the order that they're listed in the directory?

**Mike Fridman:** It depends on the tool. This is actually an interesting one, because the number one requested feature in Goose was being able to apply out of order migrations. Because from what I understand - and it's been like eight years since I've done any Rails work... In Rails you have time-based migrations, and you kind of just apply the migration and call it a day. You don't think about it too much.

So depending on the tool, if you're tracking every single migration that you have historically applied, you can start to determine whether you have out-of-order migrations. And the way you get ot out-of-order migrations can be, for example, two developers checking out the repo on the same day, creating let's say a sequential number or a time-based number, and then trying to apply those.

Depending on the tool, you'll get conflicts. If you're trying to apply migration 26 when another developer already applied 26, the tool will tell you to fail. But the tool can also detect that you have out of order migrations, and allow you to apply those migrations if you want to. Or if you don't supply the correct flag, it'll just fail and say "Hey, this is out of order. You need to either fix it or provide the flag." Golang Migrate does not do this, because it only keeps track of the latest migration that was applied. So you literally have your metadata table, you'll have one entry in there, and it'll say "Migration 14 has been applied", and that's it. But you don't know historically when the other migrations have been applied.

**Jon Calhoun:** Okay.

**Vojtech Vitek:** Personally, I think it's a better idea to use the sequential versions. I think there are pros and cons to both approaches. If you have the timestamp migrations, I think it's a little bit easier for the developers to work with it, because you generate the file just once, the timestamp will be generated at the time where you execute the command to create the migration file, and then you call it a day.

But then if you have multiple people working on different feature branches at the same time, some of the feature branches might take much longer to get merged into the main branch, and eventually you will end up in a state where perhaps you push something into development, or staging environment, sooner than it would get applied to production. And this may happen with the timestamp migrations. However, I think it's just a very edge-casey thing that's gonna happen if you run into issues with this approach.

I prefer the sequential increments for the versioning, just because I like to think about this history for the schema linearly. So every single change has to go in order, and this is ensured by the sequential numbers.

**Jon Calhoun:** I think it's one of those things that -- like, out of order sort of made sense with Rails, where people expect things to kind of magically work. They don't wanna have to go in and merge some conflict where two people both generated Migration 24, or something... Because when you're using migrations that are expected to go in a sequential order, I suppose the issue there is that if you and I check out a branch at the same time, Vojtech, and then you check yours in sooner, when I go to check mine in, all of a sudden my migration number is gonna be wrong, and I'm gonna have to fix something at that point to actually get it to work. And I think one of the reasons people like the out of order is that they don't really have to worry about it... If they're time-based at least, you can just submit it and be like, "Okay, whatever. It runs."

\[12:04\] But there's definitely cases that that could be an issue, or it's definitely a bad idea to have something where you've only tested it in one order on your computer, and then when you go to push it to production, it's gonna be running in a different order and you don't actually know for sure that's gonna work.

**Vojtech Vitek:** That's exactly right. So this out of order thing - it may have some edge cases, but you're very unlikely to hit them. But once you hit them, it's gonna be a big problem, and you will have a hard time dealing with some production issue. But there's one more thing that I wanted to mention - I think the sequential numbering might have another benefit, which is if you are pushing a single change, a single deployment consisting of five different migration files, maybe one of them is adding a new table, a second one is adding a new column somewhere else, the third one is doing indexes or some data manipulation... What happens if this doesn't go well? How do you roll back to the very first migration that you wanted to push out?

If for example the fourth one failed, with the timestamp migrations the tool would have to somehow track it in the database, so you can roll back the right ones, because you cannot really rely on the number anymore. So you need to rely on some other mechanism. With sequential numbers, it's quite easy. If you apply four, then you'll just roll back the recent four, and that's it.

**Jon Calhoun:** Yeah, I think that's a good thing to keep in mind, because while most of the time migrations hopefully go well, the few times that they don't, especially if you're trying to deploy, or something, that's not a time when you want to be trying to figure out your tooling or how it works... I know I've had experiences - not in production, but I've had other experiences where something goes wrong with the migration and it's always frustrating to have to sit there and figure out "How do I fix this and get back to a working state again?"

**Vojtech Vitek:** I call this "Panic mode."

**Jon Calhoun:** It is panic mode sometimes.

**Vojtech Vitek:** Because you cannot think straight when there are people calling you that "Production is down. What am I gonna do?"

**Jon Calhoun:** So talking about that - when you talked about migrations that go bad, I think different tools sort of handled this differently... So I know one of the approaches is to run the entire migration in a transaction, and then other tools I guess sometimes don't... What's the difference, for people out there who -- what's the difference between running a migration, maybe what are some of the pros or cons to not doing that?

**Vojtech Vitek:** So Goose is actually giving you the option to run a migration within the transaction, or not. Which is good. Because not all the SQL queries can be run within the transaction. By default, it is run in transaction, and it's good, because if something fails, you know that it will roll back to the previous state, and the database engine will handle the rest. You can know for sure that the state of the database will be in good shape.

There's also one more thing, which is -- yeah, that's what I wanted to mention about Golang Migrate. It is using a database locking mechanism. So for example, when you run this, it will lock the database first, and then it will start to apply all the migrations, and then it will commit the transaction, and then it will unlock the database again.

So that's one of the differences between Golang Migrate and Pressly Goose. Pressly Goose, on the other hand, doesn't use any locking mechanism, because it supports lots of different database drivers, and not all of them can do locking... And it actually defers this problem to the executor. So you as a developer or ops guy are responsible to run the migration as a singleton process, and that can be done in multiple ways. In Kubernetes you would spin up a job or a pod, which has to succeed, and Kubernetes will handle it because of the unique name of the pod... Or if you have some other tooling, you need to make sure that you run this first before deploying the new version of the application.

\[16:05\] If you do the locking, that's fine too, but I actually ran into some issues with that when I locked the whole database, and then I had to ask a DBA team to go into the database to fix it for me, because the database was in a locked state and I couldn't fix it myself.

**Jon Calhoun:** Okay. So when we're talking about these things running in migrations, and you guys have also mentioned that it's possible to undo a migration, but in reality there are migrations that you can't truthfully undo, if that makes sense... So can you give some examples of what those types of migrations might be for people out there wondering what those are?

**Vojtech Vitek:** I guess you cannot really undo stuff like deleting tables, deleting columns, right? I think a good practice in general is don't delete stuff prematurely. You are better off leaving the table for a week or two, and then delete it, when you know for a fact that it's not being used anywhere. Because if you deploy a version of your schema and maybe your application that deletes some data, you are losing a way to roll back. That's kind of the problem.

**Jon Calhoun:** Okay. I was gonna say, deletes are the ones that I've seen most common. There's sometimes some alters in data and things like that that are also hard to revert, but it kind of depends on what the alter is.

**Vojtech Vitek:** I think any type of data manipulation would be another example, too. So if you're changing the data, let's say you're using some JSON data structure in MySQL or JSON postgres and you're manipulating the data, you're better off to, again, do some backups first, because there's no way back.

**Jon Calhoun:** It makes sense.

**Break:** \[17:48\]

**Jon Calhoun:** So when we're talking about migrations, do you have advice on how to setup that process? Because at times we do need to eventually delete data, or maybe we need to add a new column, then we need to deploy some code that uses that column... So do you have advice to some people, what process they should be using for that type of release, if that makes sense?

**Mike Fridman:** I could probably describe what we did, and I think that's what a lot of folks do... You typically wanna decouple your migration steps from your application. So this is the one thing that a lot of folks try to do, and it may or may not work out well - in your runtime, for example, you're trying to add your migration steps within the same application that you're running; so it's literally the same binary that you're compiling. And that's gonna potentially get you into troubles, and we can elaborate on that... But what we've seen works best is when you have your application and then you have your migration step.

In our case, for example, we have Kubernetes, so that's doing a rolling upgrade where we sequentially apply the migration steps first, and then we do a rolling upgrade of the nodes. Now, the thing to remember there is that those nodes are going to have an old version and a new version of your application running at one time. So they're gonna co-exist. So whatever changes you're making to your database have to be forwards and backwards compatible in all the new versions of the application.

\[19:56\] So some migrations you actually have to split into two steps. So you can't do it all in one step. The way that usually works is write your migration, update your code, deploy that changeset to production, and then write another migration and/or more code changes, and then deploy that again. The main reason you wanna do that nowadays is to accomplish zero downtime deployment.

It's easy when you can just say "Oh, I'm gonna turn the application into maintenance mode", and then you don't have to worry about writes happening to your database and you can go nuts. But if you have a high-available system, you have to be careful with how you structure that. And the way I explain it is I think the way most folks do it.

**Jon Calhoun:** That makes sense. It's one of those things that it's hard, and sometimes it's more painful to do, because you have to take work and basically split it up over several deploys, and that can sort of feel like a drag... But at the same time, I've seen it save my butt several times, that's how I'd put it, where you can actually make these data changes and things still continue to run, and you have a little bit of time to make sure it's what you want before you go through.

Speaking about that, can you think of any other mistakes or pitfalls that people might make whenever they're setting up migrations? I know one example that we got from Twitter was that Nate had -- uh I forget who specifically, but I have Nate in my notes... Nate had mentioned that his team likes to use just 01-migration.up, or basically they pick a specific name... So it's 01-migration, and 02-migration, and they actually use the word "migration" so that if they end up with out-of-order or two conflicting -- like, two developers have 02-migration, when they go to commit the code, they immediately see "Oh, this one's already taken. I need to go update it." Are there any other tips like that, or pitfalls that you've seen people fall into?

**Mike Fridman:** I think if you're using tooling, you can typically catch those things. For example Goose offers a way to just create those files without you having to think about it. So it'll look in your Migrations folder, see that 76 was the last migration, and it'll create 77, does it like 007-77, with a name so that you don't even have to think about naming at that point. Yeah, I don't really have much in the way, because the tooling takes care of so much of that.

**Jon Calhoun:** Okay. So when you talk about the tooling, would you suggest that people who want to learn a little bit more about this process actually spend some time maybe building a really simple migration tool on their own?

**Mike Fridman:** Oh, 100%. And this is one of those things I wanted to point out. The real heroes here are the folks writing the database drivers. Thank you to those people for writing those drivers, because none of this would be possible. These migration tools that we mentioned - Goose, Golang Migrate, Dbmate and a plethora of other ones, they're really just thin wrappers with some functionality in terms of like reading some files, parsing the SQL statements, and then applying that through sqlDB or a SQL transaction, and then just exec with context, or something like that.

So definitely worth spending some time thinking through like how would you write a migration tooling... You'll come to the consensus that it's actually not that bad.

**Jon Calhoun:** It's actually something I did once on my own, and I did it in Go as well, and I've found the version in Go was a lot cleaner than I expected it to be. I think you can basically get something working in like a hundred lines of code, or something like that. I think you had mentioned earlier that Goose supports Go files as well... Is that correct?

**Vojtech Vitek:** Yes, it does.

**Jon Calhoun:** Okay. So even supporting your own custom functions as migrations wasn't that bad, in the sense that you could basically just write a function that reads a SQL file and turns that into a Go function. And then you can also just pass Go functions into like "Here's my list of migration steps, here's the ID for each one", and let it run them.

I've showed it to some people who have had some confusions around migrations in the past, and it's kind of crazy how enlightening that is, just to see "Oh, there's nothing too magical going on. It's really just following some series of steps." And not to say there's not more going on with your tooling, because there's a lot of things it can do to help save you, but it's nice to see what exactly the core of it is, and that it's really nothing too magical going on there.

\[24:08\] So the next question I have for you is - talking about going to production... So we all deploy in different ways. For instance, Mike, you had talked about building this into your application, or some people like to build it in their application, so that when they deploy, it just kind of automatically does that... And you've talked about also having it as a separate step. So what are some of the ways you've seen people push migrations to production? What does that process look like?

**Mike Fridman:** Yeah, so I think there's three main ways. The first one is doing it ad-hoc, like running SQL against your database, creating tables and so forth... So we call that, let's say, the manual way. Then there's the semi-manual way, where you have a tool, let's say on your local host, like Goose or Golang Migrate, and you set up the connection strings, and then you're just reading directly from your local file system, and then applying that to production... But then, eventually, when you get to larger organizations where you truly wanna have auditability, versioning, being able to track what happened in production, then you set up a continuous deployment environment where that step of physically taking some files and applying them in production is carried out in your CI/CD pipeline.

**Jon Calhoun:** And I think you and I talked at one point - or maybe it was Vojtech and I, I'm not sure... But I know one of the things that sometimes comes up is that when we're running on one server, things feel simple, because you can deploy, you can wait for the migrations to run, and then you can deploy the new code... But a lot of times, people end up getting in the case where they're running in multiple servers... So do they need to change their process I guess is what I'm asking, to support that sort of setup, where their application is running in multiple places? Or what does that look like?

**Vojtech Vitek:** I think it may depend on the tool itself that you're using. As I mentioned previously, some of those migration tools use a locking mechanism, so even if you have hundreds of nodes running at the same time, and you're deploying them via some rolling update mechanism, they will eventually hang on and wait for the first instance to finish the migration first, because of the lock-in mechanism. It has some pitfalls too, because the mechanism can hang, and then you need to resolve it by hand...

I would say the other approach is to really run a singleton process. So you just need to make sure that your CD pipeline has either a manual step or it has some dependency between your migration, and then deployment of the rest of the application. I saw people using Init Containers in Kubernetes to do this, that relies on the locking mechanism, I saw people (including me) that are running a single process instead and waiting for the success or failure on that one... So I guess it depends on the tool.

**Jon Calhoun:** Another one I've seen people ask about is GitHub Actions. Have you seen people use something like that? Like, if they're using that for deployment and continuous integration stuff, have you seen people successfully use a step there that runs migrations before doing a deploy? Or are there some reasons why that would be a bad idea?

**Vojtech Vitek:** I can't really think of a reason. It really depends on the infrastructure and the CI/CD pipeline of that specific organization. I mean, GitHub Actions is at the end a CI/CD pipeline anyway, and that's what most of the folks out there are using for deployments as well. So as long as you can depend on one step to another, and make sure that the migration was successful first before deploying the rest of the application, you're good to go.

**Jon Calhoun:** That makes sense. I know it's one that people are more familiar with a lot of times, especially when they're getting started. I feel like GitHub Actions are a little bit more approachable. Obviously, when you get to larger-scale corporations there's usually some process involved. And I know these questions are hard to answer, because everybody's deployment process and everybody's production environment is so different. I think that's something it takes a while to realize when you're new to development, until you actually go work places and realize that everybody has a million custom tools built, because they've kind of evolved this production environment... So you take everything you're learning and you kind of learn to adapt it to where you're working and what you're doing.

**Mike Fridman:** \[28:22\] I think GitHub Actions are perfectly fine, because in GitHub Actions you have workfiles and you have jobs, and then within jobs you have steps... And as long as one of those steps -- and steps are run sequentially, if I remember correctly, within a single job. So as long as one of those steps is like "Apply your migrations" and then the next step is "Roll out your application", I think that's a perfectly valid way to do it. It's actually how I do it for the little toy website that I have, bestofgo.dev. That's exactly how it works, with GitHub Actions.

**Jon Calhoun:** Awesome. So the next thing I have is about testing. People always wanna know "How do you test different parts of your code?" and when it comes to touching data, obviously that's a very important thing to make sure you don't mess up. We've all heard horror stories about people accidentally dropping databases and things like that... So how do you test migrations, and what are some different techniques people can use to avoid having big mistakes?

**Mike Fridman:** Yeah, so testing migrations can usually be done in your continuous (CI) environment. The best way I've found doing that is you kind of apply your migration, add some data, apply a migration, add some data, apply a migration, add some data, and keep doing that going all the way up. Then once you're all the way at the top, run migrate down all the way down to zero. So you're kind of testing both the up and down, and you do that literally on every single merge to your main branch, or on every single PR push... So that's one way to test it, and it's usually a good way to test it. And that's actually why we have these tools, is because a lot of times you wanna mimic what production looks like, or what it currently is now, and what to change that would look like... And you don't always have access to your production database. So you can't just drop the schema and then try to test against that. You wanna decouple that, especially at larger organizations. So your migrations is a source of truth, and you're kind of migrating up to whatever the production is, and then testing your change site as you go up and down.

**Jon Calhoun:** So when you talk about testing this, what does the test actually look like? Is it like a Go test file, is it something else you're doing? How would you typically do that?

**Mike Fridman:** Right. For example, now I work at Buf, and the way we do it is for every migration that we apply, we also do a few insert and update statements. And then the next person that comes in, they write a few insert or update statements, and you're kind of just constantly checking to make sure that the things that you migrated, you can actually insert data into there.

And then once at the end of the test, it'll run all the down migrations and make sure that you have nothing left in your database. So literally doing that inside something like testing.t, and just a big test file, with some helpers around that.

**Vojtech Vitek:** What I also like to do on top of that is to check the final schema of the database. So both Postgres, MySQL and modern databases let you explore the schema, drop the schema from the database. And what I've found really useful is to check out the desired schema into your GitHub repository, and then check your staging or even production schemas against that and compare it from time to time, just to make sure that the schema is valid, and in the same state everywhere.

**Jon Calhoun:** Is that something that people are checking into their tooling? Or sorry, is that something they're checking into Git, the schema that they're gonna be like "Okay, everybody should compare to this"? Or how does that check process work in your mind?

**Vojtech Vitek:** Right. So you can check the final schema after you run all the migrations into your Git repository... And then this is also applicable to your local host. So even when you're developing your own new migrations, you see the changes against the file, and you can compare if this is exactly what you meant to do. So Git actually helps you see the changes in the final schema, which is very useful.

**Jon Calhoun:** \[32:12\] Okay.

**Mike Fridman:** Yeah, so maybe I can expand on that one. I also found that useful, where you kind of apply all of your migrations, and at the end of that, let's say in CI, you ask CI to drop the current schema. So you're running, let's say, a Postgres database in a container, you're applying all your migrations and you're dropping a schema, and now the developer also checked in a schema file, and then you can do a diff against those... And if that (let's say) developer accidentally locally added an extra index, that'll show up in the diff, and it'll fail CI, saying "You're trying to commit something that you probably applied that isn't part of your migrations."

And when you go to auditing, you can then ask, let's say once a quarter or once a month, or maybe even automated in some way, a DBA to say "Give me the current schema in production", and then compare that against the schema that you have checked in on your main branch. And you'll oftentimes find that -- let's say you go on vacation and something exploded and some DBAs logged into the database and added some indexes, and all of a sudden that's not reflected in your migrations, so you've kind of lost that source of truth... But checking in that schema and then comparing it from time to time allows you to catch any discrepancies that might have happened because people did some manual operations.

**Jon Calhoun:** So when that type of thing happens, does it make sense to try to go through the effort of somehow getting a migration file -- like, basically, you want a migration that's not actually gonna run when it goes to production, because it's already been run in production. So is it worth the effort of trying to do that, so local development environments sort of reflect production better, or how do you handle those situations?

**Vojtech Vitek:** I think this type of changes that let's say some performance engineers or DBAs would do is adding the indexes, as Mike mentioned. And just to make sure that, for example the CPU of the database server goes down immediately when there's a high traffic spike, or whatever... And for those SQL queries, you can always write an absurd query. For example, you can check if the index already exists, so create index if it doesn't exist, and do the operation without failure.

But yes, I believe that it's worth it to keep the schema the same everywhere... For example, I'm working with one of my customers who has production in five different regions around the globe, and I would be very surprised if there was a different database schema just in Europe, compared to North America, and then something would blow up because of it.

So I like to be in charge of our database schema, because schemas is our state, the most important thing of our application.

**Jon Calhoun:** That makes sense. And it also makes sense what you were saying earlier, Mike, about developers can sometimes make changes locally when they're sort of tinkering with things and it's easy to forget, especially if you have a long weekend or anything; you can forget that you even tried some different change to your database... And we don't always just drop our database and rebuild it before we submit things. So it's definitely a good check to have.

**Break:** \[35:19\]

**Jon Calhoun:** So I guess we're getting close to the end, so we're gonna start talking about unpopular opinions soon... But before that, are there any big takeaways, or words of wisdom, or anything like that that you'd like to share with people before we move on?

**Vojtech Vitek:** Write documentation. Disaster recovery documentation. Be ready. Be ready to have backups and be able to actually apply them if you need to... Because if you are in panic mode, if the company is down just because of some production issue, you will not think straight. So be ready, that's my advice.

**Jon Calhoun:** Vojtech, is that something you suggest people actually go through the process of trying it once before they get into actual panic mode?

**Vojtech Vitek:** Yeah, that's definitely useful. When you're writing this disaster recovery document, you should be also trying it by hand. That's kind of the point.

**Jon Calhoun:** Okay. So basically have a playbook to go by, so that you aren't making it up as you go and you're also freaking out at the same time.

**Vojtech Vitek:** Yeah, that's right. And same goes for rollbacks if there's a problem, same goes to potentially think about if it's worth it to do the rollback or if you should go and release a hotfix instead. It's all about trade-offs, but you've gotta be ready.

**Jon Calhoun:** Mike?

**Mike Fridman:** Yeah, I was just gonna piggyback on that and say please, please, please have backups. You don't realize it until you need it, and if it's not there when you need it, you're screwed. So make sure you have backups and make sure you understand how to actually apply those backups and do disaster recovery. It's one of those things everyone talks about, everyone documents... But if you don't actually go through the steps and do it, when there's panic and you don't know what you're doing, then you're gonna be in trouble.

**Jon Calhoun:** I think I've also heard stories of people where they thought they had backups, and then when it came time to actually use them, they realized that the backup process wasn't working the way they thought it was... So all of a sudden, they don't have the backups they thought they did. Like, yes, you wanna write this stuff and test it, but I think it's also good to periodically verify that it's still working the way you expected with your backups, because the last thing you wanna do is find out your backups are six months old when you have a major outage.

**Vojtech Vitek:** Yeah, that's for sure. And if you're using a database from one of those big providers, then use their own backups. There's no need to write your own tooling for that.

**Jon Calhoun:** It's one of those things where -- I do a lot of smaller projects myself, or myself and one or two other developers, and sometimes it can feel like you're getting cut by a thousand papercuts when you have all these different bills stacking up... And you aren't a big company, so you're paying for all these things, like backups and database hosting... But at the same time, there are so many easy ways to just break everything or screw everything up if you don't just rely on them. They are incredibly helpful; I know that sometimes people like to avoid them or like to try to roll something custom because they don't wanna spend that extra couple dollars... But at the end of the day, if you're planning on doing something using real data and people are paying for, it's worth getting it right. Okay, we're going to move on to Unpopular Opinions...

**Jingle:** \[39:38\] to \[39:54\]

**Jon Calhoun:** Okay, Vojtech, I think you said you have an unpopular opinion for us. Would you like to share?

**Vojtech Vitek:** Yeah. I mean, generics - I'm not against it, I'm very excited about the feature; I can't wait for it, and I'm already playing with it... But I'm also scared for the Go community, like what's gonna happen in the next two years. I'm sure that people will use it and abuse it to the levels that we will eventually realize that generics don't really help there.

\[40:24\] I think this kind of happened with the Go channels back in the day... People were very excited about the channels, and they used it everywhere, prematurely; they didn't really make sense. And it settled, and now people only use it for specific use cases. And I think the same applies to Go generics. So people, please don't go crazy.

**Jon Calhoun:** I think my one hope around that is that anybody coming to Go from a language that already has generics isn't gonna be like "Oh, I need to use these generics", because they've already had enough experience with it... Whereas the concurrency stuff, if you're coming from a language that doesn't have great concurrent primitives, it's really tempting to use them all the time, because you just haven't ever seen them before.

An example of this is when I first learned about meta programming in Ruby, I used it way, way too much, because it was just so cool. And then you start debugging code that's using meta programming and you're like "Oh. I don't wanna use this ever again if I can avoid it."

**Vojtech Vitek:** Yeah, I think the reason why we all love Go - it's simplicity. So I'm just hoping that we will not lose it any time soon.

**Jon Calhoun:** Mike, do you have an unpopular opinion you'd like to share?

**Mike Fridman:** Yeah, I do. Hindsight is always 20/20, but I think one of the biggest mistakes in Go is the logger struct. It should have been a logging interface. And because there's no unified interface to marry all of these third-party packages, you have everyone reinventing what a logger interface is... Which creates a huge problem, because if let's say you're in an organization and you wanna create a structured logger that 10, 12, 15 teams are gonna use, you're constantly gonna have them coming up to you and saying "Well, this doesn't satisfy this package that I imported", and "This one doesn't satisfy this package." All of a sudden, your structured logger that you wrote for your company is gonna have 50 methods on it because it's trying to satisfy all of these different community logging interfaces.

**Jon Calhoun:** That's one that in my mind I think would have been hard to predict upfront. It's almost like the standard library - it's hard for them to enforce "This is what a logger should look like all the time", because like you're saying, everybody has different wants and needs... I don't disagree with you fully, but I'm also wondering... If I was the person in charge of designing that interface, I would have struggled to be like "What is going to satisfy everybody's needs?"

But you might also be right, in the sense that had there been an interface, maybe all those third-party tools would have been more likely to adapt, and make their tool work for it... Because I think about HTTP handlers, and stuff like that, and almost every router out there tries to make it work well with the standard HTTP handler... I mean, there are a couple that don't, for various reasons, but for the most part, a lot of them do.

**Vojtech Vitek:** Maybe a good start would be to have this interface implementing the methods that are currently available in the standard logger struct. That's a good start.

**Jon Calhoun:** I'm trying to even think about which ones are there, because I don't think I ever used the standard logging struct... \[laughs\] I'm sure I've used it, but it's not common, is how I'd put it.

**Mike Fridman:** So I would have thought everybody would have agreed that we needed a logging interface, but it seems to be slightly more unpopular than I would have expected, so I'm actually genuinely curious what the feedback and the reaction would be... Because I've struggled with that quite a bit.

**Jon Calhoun:** I'm assuming that you're in a place -- like, when you talk about a company that's gonna be using it in 15 projects, to me that sounds like a reasonably-sized company, with a decent amount of engineers... Whereas I think part of the reason that -- it's not that I disagree with that, it's just more it's never been as much of an issue... But as I said earlier, a lot of my projects are very small, so it's easy to just be like "Company-wide, this is what we're using. Everybody get on board." And I think at a big company, that's much harder to do.

**Mike Fridman:** Yeah... But it also creates a little bit of fragmentation, because if you have everyone redefining what an interface is within their project, I feel like that's something that should inevitably be solved at the standard library level... But who knows.

**Jon Calhoun:** \[44:18\] It's a tough one. I guess we'll see. I suppose it's something that could potentially introduce a new package in the future for, and at that point third-party libraries would hopefully start to move towards that... But who knows.

So I have a follow-up, maybe unpopular type of question for you... What do you guys think of the any alias that they're adding in Go 1.18? For anybody listening that doesn't know what this is, basically they're adding a type alias where the word "any" is going to map to the empty interface. So interface, then left curly bracket, right curly bracket, where there's no methods defined.

**Vojtech Vitek:** I don't have a strong opinion on this one. I'm quite used to any from TypeScript, even though if you're using TypeScript, you shouldn't be using any... Right? So I think it's fine; but yes, I get your point, because suddenly we will see interfaces and anys everywhere, and it will get mixed up.

**Mike Fridman:** Yeah... I also don't have much of a strong opinion on that one. I installed 1.18, saw a whole bunch of errors with empty interfaces and any, I'm like "I'm going back to 1.17.5 and call it a day."

**Jon Calhoun:** I used it briefly, and I will say that getting used to typing "any" was weird. I'd have to use it more to really get it... And I do agree that -- hopefully, a lot of projects just switch everything over to any, because without doing that... You're still gonna have that confusion of somebody new to Go eventually runs into this empty interface and they're like "What is this thing? Why is it here?" Because I think that's kind of an inevitable step for anybody learning Go, is they see this empty interface and they're like "What is this thing? This makes no sense." For some reason, just at first, it made no sense to me. Then when you stop to think about it, you're like "Oh, that makes more sense." It just wasn't as intuitive as I would have thought.

**Mike Fridman:** That's such a good point, because one of the beautiful things about Go is I could go type something in a search engine, find an article from 2015 which would be 6-7 years old now, and it would be exactly the same. Not much has changed in Go. So there's so much resources out there that are gonna reference empty interfaces. And then now we have "any". So for new folks that don't know that, it might cause confusion. And the more things you add to a language to bloat it, the harder it becomes, and you lose what Vojtech said, the simplicity of the language.

**Vojtech Vitek:** I wonder if the go fmt will eventually replaces interfaces with anys.

**Jon Calhoun:** It would be a nice way to clean it up, but I don't know... I guess we'll have to wait and see. I know I've seen people show some -- I think it was Brad Fitzpatrick... I think that's who it was; I'm trying to remember for sure... But I think he had posted something on Twitter that was like a short little snippet of how you could go replace it in all of your code, if you wanted to.

So things like that... But still, like Mike said, with tutorials it's not gonna be that easy, which is gonna be kind of challenging. And that's gonna make it different, I suppose. I know that was one of the things that always frustrated me with JavaScript, is it felt like every few years there was kind of a new way to do certain things, and you'd still see tutorials or code that used the old way, because nobody's gonna go update everything that exists... And that could be challenging to somebody who's learning.

So I'm curious to see how it goes... I'm hopeful, but at the same time I suspect it might also lead to more confusion, for at least like the first year, where people are coming and they're like "Why are both of these things doing the same thing?"

Okay, thank you, Mike, thank you, Vojtech for joining me. I will play us out.

**Vojtech Vitek:** Thanks for inviting me.
