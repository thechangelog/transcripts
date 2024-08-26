**Jerod Santo:** Hello, party people. I'm Jerod, your internet friend, and today we are talking Minecraft. Maybe you've heard of it.

It's only the best-selling video game of all times. Yes, it's outsold Tetris. It's outsold Grand Theft Auto 5. Who knows about 6...? But we'll find that out later. You probably know what Minecraft is, but you may not know that Microsoft bought it in 2014. Okay, you might know that... But did that Minecraft is scriptable? Okay, you might know that. But did the scripting APIs are JavaScript? Oh, you knew that too? Wow. I'm very impressed. But did that today I'm joined by both halves of the scripting story inside of Microsoft, Raphael Landaverde and Jake Shirley. Raph, Jake, welcome to the show.

**Raphael Landaverde:** Hey, happy to be here, Jerod.

**Jake Shirley:** Yeah, thanks for having us.

**Jerod Santo:** We're happy to have you. Happy to talk about JavaScript and development outside of the browser context. Living the good life, not having to worry about cross-browser compatibilities... First of all, give us some information about Minecraft, the scripting engine, your guys' role... Let's start with Jake because I think you've been doing the Minecraft side longer than Raph has. Raph was doing some Microsoft Office web development stuff, right?

**Raphael Landaverde:** Office web dev, a little bit.

**Jake Shirley:** Yeah, Raph's a newbie.

**Jerod Santo:** Yeah, so Raph's a newbie. Jake, you're the OG. So tell us about Minecraft and your work on it.

**Jake Shirley:** Yeah, sure. So I started working on Minecraft right after Microsoft started the acquisition back in early 2015. And at the time, the Java version of Minecraft had a huge modding scene. You think Minecraft, you think mods. You think "I'm going to download all this crazy stuff." A lot of people play base Minecraft, but a ton of people play mods. And so most of the time I've been on Minecraft in the last nine years has been kind of inching the cross-platform bedrock version of Minecraft towards getting more and more moddable. And we call that different things. We call that add-ons. We call that behavior packs and resource packs and things. But the gist is inching us closer to this game that runs on all these different platforms can be essentially modded by a bunch of different people.

**Jerod Santo:** How deep does the modding go? How much can you change the world of Minecraft?

**Jake Shirley:** It goes pretty deep. We expose all these different layers. We try to often talk about crawl, walk, run in terms of technical scenarios for people who want to create stuff technically in Minecraft. So a really simple thing might be make an add-on that adds a new block to the game. That's really simple. All the way up to you're doing custom world gen, you're adding all these new scenarios in the game, you're trying to add different dimensions... All these different things. So it goes pretty deep. We try to make it go pretty deep, and then the community just blows us out of the water and goes way deeper than we ever thought they would. It's pretty crazy, all of the -- you give someone a sandbox and they'll just sprint out of the sandbox immediately, run around... It's pretty crazy.

**Jerod Santo:** So Raph, you got involved more recently; prior to you were doing -- you said in the email some React stuff, with Office Online... Do you want to give me a little bit on that, and then how you got into the Minecraft side?

**Raphael Landaverde:** Yeah, so I've been at Microsoft also since college, and those eight years before joining the Minecraft team was all-in Office development. A lot of C++ initially... But back in 2017 there was a big effort to modernize a lot of the stack, especially on the Office Online product, and that's where I kind of started my introduction into web dev basically, where I was modifying the commenting stack for how you add comments to the different documents, and taking it from a pretty legacy -- it was called Script Sharp. It was like C\# that got compiled into JavaScript... And turning it into the more modern stack at the time, which was a TypeScript/React/Redux at the end, really changing commenting to do that.

So that was the first area, and Office Online \[unintelligible 00:05:01.21\] making that transition. I spent a bunch of years doing that.

My transition into Minecraft really came in that there was a little bit of a need for some expertise with that kind of web stack, web dev build, and just knowledge of the language on the Minecraft side. Because from Jake's perspective, and really the Minecraft team's perspective, it was more game dev, learning this tech in order to expose it out... But there was some need from the web dev side as well.

And so I joined initially on what is the Minecraft Editor team, where the Editor is a new product that the Bedrock Edition is releasing right now. It's in preview. That is kind of a world edit of making blocks, but more in an advanced user scenario. So you're not really playing the game when you're doing that, you're creating maps that you can then share to other players and release. And that whole experience is built using the scripting APIs that were being built, as well as some frontend kind of React-based UI. That React-based UI isn't something that is exposed as like a creator API, but the scripting API, which is the core of it, the meat of it, is all these scripting APIs that we expose to creators as well. And so that's kind of where I came in, and adding -- I know Nick's not on the show today, but I brought a lot of the TypeScript to the team, and all that stuff...

**Jerod Santo:** \[06:21\] Oh, shout-out to Nick and the TypeScript team. Okay, enough of that, Raph; enough of that. Why web tech for this kind of thing? Why not stick to the C++, the Java, the Minecraft milieu, where Minecraft started? Is it still a Java thing mostly today? I don't know what the game proper is. I know there's lots of different versions of it now.

**Jake Shirley:** Yeah, it's actually a pretty interesting matrix of game versions. The version that we work on is affectionately called the Bedrock Edition of Minecraft, and it's actually written in C++. It was originally a codebase that was built for Minecraft Pocket Edition, which runs on iOS and Android. Nowadays, the codebase, if you play Minecraft on Xbox, Switch, PlayStation... Basically anything besides a desktop - including some desktops; you can play it on desktop. But if you play it on anything that's not a desktop, you're playing the Bedrock Edition, which is written in C++.

And why web tech? I will say, when we first started, Raph brought a particular flavor of JavaScript to our team... But before that, we weren't married to web tech. We just saw a scripting engine. So we were looking around for ways that we could let people write code, backing their creations on all these different platforms. And writing something like C++ didn't really scale to most of our platforms. Most platforms that we that we ship on, you can't load dynamic libraries, or anything like that. So over the last eight years, we've been kind of skirting around, trying to allow people to write script. And we have all these different solutions, which are really kind of configuration-driven; all these giant state machines and JSON files and stuff like that... And it gets to be just complete chaos.

And so when we started looking at how do we let people write code, JavaScript was a pretty big contender, just because of scripting; Lua was another contender. There's a bunch of other scripting languages that we could depict... But we landed on JavaScript, and prototyping it with a library called QuickJS, which is really easy, similar to Lua. Implementing it is one header file, one C file, so it's super-easy to embed. And that's what we've stuck with so far.

And since then, we've really leaned into web tech a lot more in terms of npm, all the rich ecosystem of tooling that JavaScript web tech kind of allows us to use, which is pretty neat. You get a lot for free when you lean into another ecosystem like that.

**Raphael Landaverde:** A big thing too is that a lot of the modders and hobbyists, or as we kind of blanket call them, creators - they really span the gamut of skill levels. Some people get really knowledgeable around many esoteric modding systems. We introduced the state machines and packs that Jake was alluding to earlier. We get experts in that, and they build tools around that. And a lot of the modders also do not program at all. And so a very-low barrier entrypoint language is really helpful to kind of introduce them to kind of levels of programming that let them do crazier things in the game, really.

Because yeah, as mentioned by Jake, the extension story, or really the API surface of Minecraft, scripting is just one part of it. It's probably actually one of the smaller parts of it right now. It's just one of the most powerful. The other ones are -- we've got commands, which is very familiar to a lot of Minecraft players. You open the chat or command menu in-game, and there are slash commands that let you do a lot of powerful things.

\[10:01\] A lot of modders actually implement entire games using those commands that execute. There's then JSON files, data-driven JSON files, and that's where you can say "introduce a block JSON", like myblock.json. We have a schema for it, and you can specify its properties. We really try to keep those definitional. We have a small query language called Molang, that's used for customizing behavior; it has its own parsing engine, and it can be quite powerful, but we try to keep it scoped into what it does. And then scripting is the main fourth one there on top of that, that adds the dynamic behavior that developers in the studio, like the team in Stockholm that writes the new gameplay for new releases - they often write that in C++ today. And since creators cannot do that, the scripting engine is their way to kind of add that same type of dynamic behavior on top of that.

But yeah, since it's JavaScript and all of that web tech and npm and all that stuff, we try to kind of guide them into "Oh, you want to publish packages, share them around, build on top of each other, really..." And we publish some packages ourselves that are fairly straightforward. We have a little math package for some vector math that we published, to just kind of seed a lot of the thoughts of "Let's share packages around and help that to create cool mods and maps and build off of each other on the top of the Minecraft ecosystem."

**Jerod Santo:** So are you guys then the modding team, of which scripting is one part of modding, or are you the scripting team and you're part of a bigger team that's modding? How does it work?

**Jake Shirley:** Based off of the Microsoft reorgs of late, you've gotta re-up your reorg chart every so many months. I think the title is "the API Infrastructure Team", where APIs - it can mean scripting, it can mean Minecraft commands, it can mean these other data configuration areas... All these different sections. And so yeah, scripting would be part of that.

**Raphael Landaverde:** These are all part of the broader -- we call it the Bedrock Platform Team, basically, that serves as the engine for this C++ version of the game. And there's separate teams for -- like, that data driving that was mentioned earlier, like how is that JSON parsed, and the APIs exposed... The team we work on made a bunch of the initial APIs, but really, it's something that we try to ensure. The whole team, as they're introducing new features to the game, they introduce new APIs as well, using this infrastructure.

A good recent example that came out over the past year is we recently introduced support for a camera, API and a separate team - it's called the Gameplay Systems Team - they used the scripting infrastructure and exposed an API for manipulating whether the camera is looking down on top of the Steve model, or looking from a distance, like a third person, or playing around and doing some dynamic fade effects. That's kind of built on top of the common infrastructure, exposed bindings, but the overall feature is built by the team that owns that feature, really.

**Jerod Santo:** Interesting how it all fits together. So what about from a scripter's perspective? If I am a player of Minecraft, and I would like to script some stuff, I assume you can control the player, and move things around? And I'm sure there's all kinds of stuff you can do. I'm sure I can create basically robotic motions, programmatic decision-making, and stuff. I remember doing that a long time ago, when I was trying to teach one of my sons a little bit of programming, and he already liked Minecraft, so I was like "Well, we'll programmatically control the game, and make the guy do stuff." It's all first person though, so the guy is kind of me, I guess. I'm sure you guys have verbiage and nomenclature for all these things that I don't... You're like "Come on, Jerod, call it what it is." It's the character... What is it called?

**Jake Shirley:** I don't know, we often call him Steve...

**Jerod Santo:** Steve.

**Jake Shirley:** ...in the player space.

**Jerod Santo:** Yeah, the player. Fair enough. So you can script the player, make him do stuff without you having to literally move the controls or touch the keyboard. If I wanted to do that, where would I start? What would I do? How would it work?

**Jake Shirley:** \[14:03\] Well, we have a lot of tutorials online. Learn.Microsoft.com is a bunch of kind of getting started tutorials. There's a lot of sample repositories on GitHub that you could fork, download, start with.

A lot of it kind of spans from "Here's a single text file on main.js that you can zip up into a pack, load into Minecraft", all the way to "Here's a sample project that has a pretty rich build system, leans into TypeScript, leans into all these different build tools." So it really depends on where you're at in kind of your web development know-how, how much you want to lean into some of the tools that we provide, versus write up main.js in a text file and notepad.exe, add it to a zip, drag it into Minecraft and load it into your world.

I'll say the reference documentation is pretty extensive on our learning portal, which is nice. So if you're looking for API surfaces, ideas for things you can call, example gameplay scripts and stuff like that - that's all on there. So if anybody's looking to get their feet wet with scripting in Minecraft, there's some pretty good tutorials out there that walk you through the first steps.

**Jerod Santo:** Okay. So are there certain -- I assume there's certain versions of the game that I can actually do this in... Because you're talking about zipping up a file, dropping it into a thing, and I'm thinking "Well, my kids play Minecraft on their iPad."

**Jake Shirley:** Yup.

**Jerod Santo:** Is that accessible there?

**Jake Shirley:** Yeah, it totally is. It's using file extensions, which - all the extensions \[unintelligible 00:15:30.15\] because we're in modern computing, where everything's just a zip... But yeah, you can make a -- basically, structure your packets, your zip a certain way, and then you just rename it to .McAddon, and you can actually deep-link it into Minecraft, iOS, Android, Windows... Console support's a little out there. I don't think it really works on consoles, just because of security implications on most consoles... But on mobile devices there's actually a pretty shockingly large community of creators who exclusively develop their content on Android and iOS.

**Jerod Santo:** Interesting.

**Jake Shirley:** It's some interesting perspective to talk to them and talk about how their flows may subtly break when we tweak something... Like, we didn't really consider you opening VS Code in your web browser on your 10-year-old Android device, and having these huge workflows that generate content for you. So that's a pretty interesting ecosystem. I'm not sure if web dev often sees that traditionally, but that's a pretty booming ecosystem in Minecraft.

**Raphael Landaverde:** If we introduce any sort of build logic and make any assumption like "Oh, if you're doing any scripting, you're probably on a keyboard, and using VS Code \[unintelligible 00:16:39.17\] And that assumption just breaks down as soon as we -- we have these community Discords that -- we don't run it; the community runs it, and we just kind of pop in there and chat with them and answer questions. And they'll give us examples, like "Oh yeah, we're not using these tools, because we're just on the phone, and typing with a virtual keyboard, and deploying it", and it kind of catches us off-guard... Like "Oh yeah, I guess people do a lot of things this way." And they're successful doing it, so we've got to keep that in mind, but it's just surprising at first glance.

**Jerod Santo:** Yeah. It's like a new generation of programmer, who grew up with this technology, this version of the technology, where it's like "I'm just going to code it up on my iPhone and roll it out." And it's like, you're doing it, and you're awesome at it... But then also, do you realize how inefficient that is compared to the tooling we have on the trucks, as Steve Jobs called them...?

I recently learned a law, which I'm not sure if you guys have heard of this one, which I think totally applies into your guys'es situation. It's called Hyrum's law. Are you familiar with this?

**Raphael Landaverde:** Yes. You talk about that one a lot.

**Jerod Santo:** Yeah. I just learned about it recently, so I've been talking about it a lot. And this comes from -- I think his name was Hyrum Wright, who worked at Google. Maybe he still does. And I learned about it from Chris Krycho on the Changelog a couple of weeks back. Hyrum's law says this: with a sufficient number of users of any API, it does not matter what you promise in the contract; all observable behaviors of your system will be dependent on by somebody.

\[18:10\] And on that show, Chris posits that the end, or I guess maybe it's the \[unintelligible 00:18:14.25\] the number of people is probably lower than you think it is, to have that be true. But you guys probably don't have that problem, because you have so many people using it. It doesn't matter if it's 15 or 15,000 people doing it. Surely, every aspect of this is being used by somebody, and in a way that you didn't expect it. It probably makes it very hard to change things.

**Jake Shirley:** Super-hard sometimes, yeah. Versioning is -- if I could underscore anything for past Jake to do, it's take versioning more seriously. But yeah, I mean, even just things like updating the -- and this seems big, but it should be mostly backwards-compatible... Updating the scripting engine. There's some guarantees that we never really explicitly made around how Quick.js interprets JavaScript, and both ways that it does it, new and old, might be ECMAScript spec compliant. But people relying on just the wonkiest behavior of certain things... Parsing a number on Android, versus Switch, versus iOS had some platform bugs around one of them returning nan with a lowercase N instead of an uppercase N, or something like that. Just the craziest little things. And we try really hard not to break that stuff, but it's... I mean, you have to draw a line somewhere around you either kind of freeze development, and get stuck in the past, or where you kind of hard-version, or... So there's a bunch of different techniques that we try to employ around versioning. Some are cleaner and some are less clean, but it's definitely a hot topic on our team. And not just our team, all of Minecraft, really, because we really try hard on Bedrock to provide that backwards-compatibility claim in all of our API areas... And so that's -- yeah, it's a tough one sometimes.

**Raphael Landaverde:** In Minecraft as a whole, probably the scripting API has one of the most stringent versioning schemes to try to take into account the sort of backwards compat, mostly because since it's newer, that was already a top of mind concern with the other API services of like "We're doing so much work with back compat and stuff like that that we need scripting from day one to be more strictly versioned."

An example of it how it works today is for scripting you request modules, and -- well, let me step back a bit on how packs are structured, and how the code is structured... To inject kind of content into the game, they've put in these packs - they're called behavior packs - and one of the main files in a behavior pack is a manifest.json that kind of declares what it is. And the dependencies in there, you can specify dependencies on modules, and these modules are our scripting APIs that get loaded into the Quick.js runtime when you get it spun up.

These modules are very strictly versioned by us. So the main module -- probably most of the APIs that a creator would care about, it's called \[unintelligible 00:20:59.26\] because these scripts run exclusively on the server, and that's version - I think 1.13.0 just came out. And when you request that, we have the guarantee that we're not going to break the contract on you. And breaking that contract is both from like a DTS level... We're not going to break the contract when you're generally there, but we're a bit fuzzy on types, just because it's not a functional case. It's more important that we don't change how this API behaves for the game for you. So like, the game is updated, but you've requested a 1.0 range API... We're not going to change how a player moves, or some way, or how often events get received.

Eventing is a really big one for us, too. Our API is very event-based, and we put a lot of work in ensuring that events happen at this point of a game tick, at the end, in this specific order, so that we're not surprised if a creator depended on something specific there.

But we've still gotten bit in the past, where creators depended on a very specific case... Error messages is a good example. We were less strict about error messages initially, and it turned out some creators were depending on a specific error message... Stuff like that, too.

I think it's interesting to also look at how our other APIs work, with like JSON... Those are schemas, with versions in them. They're called format versions, and the reality of it is today is, because we have content that's submitted to our marketplace that has been in there for years, that content needs to keep working, but we want to upgrade it to the latest version while keeping back-functionality still working. So we have an extensive set of like upgraders to keep things up to date to the latest formats. And it can get pretty complicated, and sometimes hard to wrangle, but that back-compat really is king, in a lot of ways.

Break: \[22:38\] to \[23:35\]

**Jerod Santo:** How do you get your guys's changes rolled out? How do you make a change to the scripting API, or to some piece of infrastructure code, or the way a manifest file gets read, or whatever it is that you guys are up to? Adding a command, or this kind of stuff... And then I think "Well this has to be parsed and executed and run inside of Minescript Bedrock, and maybe other versions, I don't know. Do you then just like take those and tell the Bedrock team like "Hey, we're ready to rock and roll. Please deploy this", or what how does that work? How do you roll them out? Or do you guys just do that yourselves?

**Jake Shirley:** Yeah, I mean, a lot of the time, at least for scripting, we've really tried hard to put the development process of adding new APIs and tweaking infrastructure on kind of as many rails as we can, just so that as we evangelize the concept of adding new scripting APIs throughout the broader Minecraft team, teams should feel empowered to add a new API for that cool new graphics feature they're adding, or adding an API for cameras, or any of those things. And so we have this pretty well-structured series of checks around detecting changes, generating change logs, tagging certain people when scripting changes are detected, just to trigger certain pull request reviews. But kind of beyond that kind of set of development rails, it is pretty self-service for the team to add new APIs. And that's most of the time really good, sometimes kind of bad; like, if certain things sneak in, you want to try to make this cohesive ecosystem of APIs not just in scripting, but in everywhere... Even just things like a naming convention; you'd think that that would be easy. Well, internally we're not consistent, so externally it's going to be really easy to not be consistent sometimes, too... So just things like that.

But generally, if a team wants to add new API, they can pretty easily add it in what we call beta, and then there's another process to release an API to a specific version. And because of our shipping cadence, you could type code and integrate it on a Monday, and it could be shipped to players by Wednesday, depending on where we're at in the release cycles.

So I think that keeping that development cycle, that iteration cycle with our creators who use the APIs really tight is super-nice. They have tons of feedback, most of it affectionate... It's nice, critical feedback, and so keeping that loop really tight, where we can iterate in kind of this beta space with them on what they need, and then ship it in a pretty timely manners is pretty critical to us.

**Jerod Santo:** You bring up something interesting that I was not thinking of, and I was pretty much ignorant of... It's that Minecraft proper, the game Minecraft is very much a moving target, right? It's not done; there's continuing to work on it, add stuff, roll out new things... I tend to look at it as a casual player, who doesn't keep up with the new stuff, as a finished product, for the most part, like Tetris is, for instance; like Grand Theft Auto 5 is. It's done, right? And rolled out. And then you could make it scriptable and moddable. But Minecraft is living, breathing, changing, being worked on by a bunch of people at all times. That definitely makes it harder for you guys, right?

**Raphael Landaverde:** Yeah. And we try to -- or rather our creators, actually... Whenever a major release happens that introduces new content, it's in their best interest as well to make their new content that's using our new content, because that's what players expect at that moment in time, too. So like as the team that's making the new content for the base game, as they're introducing new things, they try to introduce it into the various API surfaces around the same time, whether it's introducing new definitional data for that entity being introduced, like camels or sniffers from a few years back. There could be new APIs for new features being introduced as well... We have a very component-based model of functionality, so if you have like an entity in the world, you can get components on it that describe functionality of it. Maybe an item is a good example. From an item we can get it -- like, whether it's a food item, you get functionality off of it, too. Those APIs might be introduced as part of its release as the new content exists.

\[27:48\] So yeah, it's a moving target, but also, everything is living at the same time. The whole team is working together introducing APIs, and it's all versioned... And that cadence that Jake was talking about - there's a major release of Minecraft annually, and then there's smaller updates throughout the year, I believe eight or so of them... But weekly there's a preview release that goes leading up to that smaller release, and every one of those preview release we're publishing new types to npm, that describe the new version of the module at beta. And by the next sub-release, it could be stabilized into a new version of that module. Or some stay in beta for longer, if they need to.

**Jerod Santo:** How big is the overall engineering effort, Jake? I mean, roughly. Team size, or I don't know... Are we talking 30, 50, 10, 100?

**Jake Shirley:** For Bedrock it's more like hundreds. I mean, a lot of people think "Minecraft... A bunch of dudes in a room in Sweden, they made it." And that's true, but it's just grown into this huge ecosystem of efforts. It is hard to wrap your head around how much different things are happening in Minecraft at once. There's this big effort in graphics, there's big efforts in gameplay, there's big efforts in infrastructure, like us providing these these foundational APIs for other Minecraft devs. There's a huge swath of build engineers to keep our giant farms of of test devices on, you know, all 20 platforms that we ship on, working and running, and running our CI/CD stuff. So it's a pretty big effort.

It's definitely grown from even when I started, which was five years into Minecraft's journey. The engineering team in Redmond was small enough to fit in one little standing room. We had a one Skype chat. Like, just drag and drop everyone into the Skype chat. We're talking not Skype for business, just regular Skype... And now our Slack has thousands of people in it, with all the business guests and all that stuff. So it's definitely grown to a pretty serious engineering effort.

**Jerod Santo:** Yeah, seems like it. And the game itself has grown from the time that it was bought. I remember -- was it a billion? I can't remember the dollar amount. I remember Notch became very rich that day...

**Jake Shirley:** It was two and a half billion, I think.

**Jerod Santo:** Two and a half billion. And it was just -- I mean, it was epic. And I remember -- I'm old enough to remember when Minecraft itself was in beta, and it was a shell of a game, that had... I mean immediate traction, though. It was so interesting. And I remember watching videos of Notch coding Java relentlessly, and rolling out new stuff... It was very cool.

But from like a very popular best-selling game to like -- it's like a cultural institution now. It's a part of humanity's culture. It's a pretty big deal. How big is the player base now? Is it still growing? Is it still thriving? Has it plateaued? I assume at a certain point -- like Facebook, they have to find new people who don't have internet yet to add to their user base, because they already pretty much hit critical mass.

**Jake Shirley:** Right. You've got to invest in infrastructure for more people to reach the internet now to use your product.

**Jerod Santo:** Yeah. What was it, the flying balloons they were doing, that project? You know, is Minecraft like that now? I mean, is it just massive, or...? I don't know the numbers. You should give a feel for it.

**Jake Shirley:** I couldn't tell you any specific numbers. I don't know. I'm pretty sure we're still growing.

**Raphael Landaverde:** Yeah, it's definitely still growing.

**Jerod Santo:** Well, there's new people born every day, you know?

**Jake Shirley:** Yeah, right. You know, Minecraft-sponsored birth certificates, and all that stuff... Gotta get them while they're young.

It's still growing. There's a lot of markets that, luckily, because we're a big enough effort now, I think that we're able to tap into and treat a lot more respectfully, or like actually give more love to... Like the Latin American market. Just kind of catering -- making more content and catering more parts of the game to those. Because we're such a big effort, we can actually hit those markets a lot more, and increase the player base there. China is a huge one with games. How people approach China when it comes to shipping your product there is interesting. It's a huge market.

So I think there's lots of areas that we can still grow. And like you said, it's a lot of it. It's pretty foundational in a lot of people's lives. I mean, even a lot of us on the team who see how the sausage is made still return to Minecraft again and again, every couple of months, for our weekend binges and stuff... And I think that's how a lot of people play it, where they go hard on it for a weekend every couple of months, and dig their holes, and then they get their fix, and then...

**Jerod Santo:** \[32:23\] Yeah. Move on, go play something else, then eventually come back...

**Jake Shirley:** Exactly. And they'll loop back.

**Jerod Santo:** Yeah, totally.

**Raphael Landaverde:** A lot of these APIs and creator creations too are where it's growing, especially recently with more officially, I guess, sponsored content in the marketplace, that kind of brings in a lot of folks too, recently. We have a Dungeons and Dragons map, Nerf maps, Jurassic Park maps, and we're kind of adding new ones... And those definitely bring in their own sets of players as well. It's just very interesting, especially because they're pushing what the game does in different ways entirely.

And recently on Bedrock - Jake mentioned it earlier, the term add-ons... Add-ons is a very specific term that we introduced this spring, which is - in Bedrock before, using the extension APIs meant you created a whole map with this new functionality, and you entered that new map. So it wasn't kind of like the survival world that you're familiar with in Minecraft, it was a curated experience of sorts.

The add-ons are more nuggets of functionality that you can attach to just a creative survival world, which is what is more familiar to people that do like modding in Java, that just didn't exist officially in the marketplace in the Bedrock edition. Though hobbyists were always able to side load that, potentially. But this is kind of like putting it more front and center... And that also draws in more people, too.

And sometimes drawing in more people is just also like platform shifting. Maybe someone was on Java, now they're playing under Xbox, or playing through Game Pass, or... I think Chromebooks from a couple of years ago is another one that we had released. So...

**Jerod Santo:** Huh, interesting. I assume there's probably some version that runs in the web, like via Wasm or something. Is there any sort of in-browser Minecraft edition?

**Jake Shirley:** Man, you don't -- when did you play Minecraft at beta? The original Minecraft I think was developed as like a little Java applet that you could run in browser. Minecraft Classic, I think it was called.

**Jerod Santo:** Yeah, I think it was. Or an applet. Was it run in an applet, or was it in browser? I can't recall. I mean, this is ancient history now.

**Jake Shirley:** Yeah, it is ancient. It was actually -- see we're at the 15-year anniversary now. I think for the 10-year anniversary there was a team internally that kind of rebooted that affectionately, and I think you can go play it in the browser now. In terms of official support, we don't compile down to the browser. I think that'd be an interesting project.

I have seen some community projects where they kind of bake down the Java version of the game and get it working in browser, which is pretty neat... Yeah. Not any official efforts that I know, other than kind of the 10-year anniversary classic version.

**Jerod Santo:** Well, I think it's interesting that it's become this platform, like you talk about, Raph. Can you go into more detail on what people are selling? You said there's this editor that you built, and people are building things... Is this the add-ons? Is this the maps? Are people building businesses on top of this, or is it just like hobbyists selling things to hobbyists? How does that whole thing work?

**Raphael Landaverde:** There's absolutely little businesses on this, that kind of make their living making maps that they sell on the marketplace. The marketplace itself - it's really a set of creators and companies that... You have to apply to be part of the marketplace program, so the marketplace team kind of manages the \[unintelligible 00:35:32.27\] of the market, or anything like that... But once they kind of are able to do that, they can publish through the marketplace, and it's a creator economy of selling a map experience, and that really kind of provides their living, and goes to Minecraft as well, too.

\[35:50\] The map is one aspect of it. There's also skins. That is another big economy as well. And there's also add-ons. Scripting in particular being a big part of recent maps and add-ons. Skins, for example, can be entirely done with what are called resource packs, which is another type of pack. It's purely like texture assets, or research definitions, too. So it's kind of like the gamut of extensibility, but it all goes through a marketplace, and the creators definitely benefit from that as well, and are able to create businesses from that. And we work with a lot of them closely, too. For a few years back when scripting was born, its infancy, it was in a pre 1.0 version. We actually worked with a team to make a map called Spellrune in the marketplace. That was the first map that was using scripting as kind of like the proof of concept, I guess, that players could play in, and it was very popular.

Break: \[36:45\] to \[38:22\]

**Jerod Santo:** On the scripting or the modding team, what is your guys' biggest challenge in your jobs? What's the hardest part?

**Raphael Landaverde:** I'd probably say -- I wonder if Jake has a different answer than me. The big one for me has always been the versioning story; like, how do we maintain whatever we ship in a reasonable way long-term, but give us the flexibility to play around with it and innovate even after we ship it?

A good example... This is an interesting one, because I think most people wouldn't expect this, is what I mentioned earlier with the eventing... The way script runs, very event-based, you have an entrypoint script that you specify, and it's one entrypoint; when the game runs and the world loads, that script gets executed, parsed/executed and that's it. So how you get into your script again is we expose off of our world object a bunch of events you can subscribe to. Things like the player moving event, or block break, other stuff like that... And that is the key of the logic that you can then hook into, is be very reactive to things happening within the engine. And the big problem there is you can listen to those events, or what if you change what that event is doing, and what if that's happening in the middle of engine execution.

A lot of these events were hooked up right in the middle of the guts of the engine, breaking a block. What if your script execution moved a block there, or changed something \[unintelligible 00:39:40.08\] the engine might be in the state that it was not expecting because some script did some wacky stuff.

So we spent a lot of work to create kind of a distinct concept of before events and after events really, where before events run in line with what the engine is doing right now, and in that script context you actually can't do any mutation events of the world. Those APIs actually start throwing on you, and you can't do it at that moment in time. And then we have after events that we say happen in the creator portion of the tick, where each tick happens after -- it's 20 milliseconds of engine simulation basically, and that creator portion you are able to do stuff, because we moved it to the end of the engine doing its thing it needs to. And we very much codified the order in which those things happen, just in case creators need to care about it.

\[40:27\] We really don't want creators to care on a specific order of things, because that usually means you can restructure things and it loses our flexibility... But we wanted to make it as explicit as possible, because then we can version it and shift it if need to, in a very intentional way, not by accident basically.

**Jerod Santo:** Jake, you were nodding along. Do you think versioning also, or no?

**Jake Shirley:** Yeah, I was going to mention -- I was going to say versioning. I mean, even just little things - like, we wanted to change how often we pump... Like, how often we resolve promises. It turns out people were using await null to defer to the next frame always. And so like, "Oh, well, we have to version that now, because if we pump those multiple times a frame now, all that stuff breaks." But I'm not going to say versioning, because Raph already said that. I would say an interesting challenge we have now - and we've always had this, but I think we're taking the API surface a lot more seriously these days... An interesting problem we have now is trying to create a cohesive developer experience, where scripting is just a facet of it.

So how do we combine these data definitions that people have used for a long time, and traditionally tried to stuff a bunch of logic into, which we don't love, and how do we combine that with something that's a little bit more sane for logic, like scripting? And then how do we -- just all the different areas. How does that play with Minecraft commands? How does that play with all the other developer tools that these creators can use? And how do we make sure it's kind of consistent from the developer experience, from the documentation? Does it affect the player at all? So all these different kind of bigger picture things that lets us zoom out a little bit from scripting, which Raph and I have worked very extensively on for the last couple of years... But now we have the opportunity to zoom out a little farther and say "Well, how do these play together all up?" And does it make any sense for these kind of overlapping features to exist? Should one be the authoritative source of how to write logic? Should one be the only way to write data? So stuff like that I think is really interesting.

**Jerod Santo:** That's really hard, especially when you have an API surface, or a series of products \[unintelligible 00:42:30.16\] the way you think of them, that have kind of grown organically over time as the game also has changed... And you talk about experimentation, and your desire for that, but also the difficulties of that with everybody using it... But then iteration - it's really hard to iterate towards a cohesive story. Usually, you iterate towards perfecting a certain part of the story, but now that may diverge from somewhere else.

And consistency and cohesion and big picture don't always just come out organically. In fact, they rarely do. Those have to be thought of beforehand in order to stay inside those particular rails. So I can see how, as this thing has grown into what seems to be a very large project, a large API surface - I'm not sure how you guys refer to it - that probably becomes more and more challenging over time. Do you ever think about the big rewrite, the big reset, the big -- "We've thought of it all now, and now we're ready to version everything all at once and start fresh"?

**Jake Shirley:** The burn it down approach?

**Jerod Santo:** Yeah. Wanna burn it down?

**Jake Shirley:** Yeah, I mean, in some ways. For scripting - Raph alluded to it earlier; we took versioning I think a lot more seriously from the get-go. It wasn't tacked on later. It was one of the foundations that we started with. And so even now, we probably - what, a year and a half into having a stable API, which I guess is a decent amount of time... Like, we're talking about a v2. Like, give us that major breaking change version that we can now fix the sins of the past; at least having that vehicle, so all the other developers on the team who know of areas that they want to tweak, have the ability to.

It's really -- part of that story internally, part of the struggle there is also the back compat story. It's not impossibly hard to copy paste this code, move it over here and call it v2, but after v20, it becomes pretty tedious to try to make sure all of this 10 years' worth of content still works.

\[44:21\] And so a really big internal debate lately has been "Well, where does deprecation come into play?" Official deprecation, where content will stop working. So that's been interesting too, in all the areas, not just scripting, of "What's the line of this content that someone maybe potentially purchased doesn't work anymore? The creator's role of that content - what's their role in updating it to make sure it works on the latest stuff?"

You can think of like iOS and Android - how many times have they shipped something where basically all the old apps older than five years ago don't work? A couple; like, it happens. It's not unheard of. But it's not every single update. So where's that line, and how do we do that gracefully, respecting the players, respecting the creators, and all that stuff?

**Jerod Santo:** Well, speaking of institutions, Microsoft as an institution has a long legacy of backwards compatibility, much more so than Google and Apple.

**Jake Shirley:** Yeah, you mean like Win32 APIs? You know, you could run your Windows 95 stuff...

**Jerod Santo:** Yeah.

**Jake Shirley:** Maybe in compatibility mode, but probably still run it on Windows 10 and 11, or something.

**Jerod Santo:** Yeah, which - I mean, in a lot of ways it's hamstringing the desire to push things forward... But another way you are dedicated and loyal to your past customers, who are probably still current customers. So it's a constant trade-off. Apple's been way more free and willing to break backwards compat in certain places, and they've reaped the benefits and also the ire of people for that. So it's a tough one. There's no straightforward answer. Raph, you were going to say something...

**Raphael Landaverde:** Yeah, when I joined the team and my manager saw I was coming from Office, he said something funny to me, which was like "You know, in some ways Minecraft is like the Office of games, except for the difference is that that document you've had, that maybe you authored in Office 1998, and you expect it to still work in Office 2021, now Office 365, that's how players feel about their Minecraft map that they've been working on for 13 years. It needs to keep functioning. You can't break it to them. That's like absolute failure if we break it for them." And that back-compat story just - yeah, it keeps going all the way to the beginning.

And really, scripting is in a better place to do it. Like, we have that structure for 2.0. We know how we would break it. We can have environments, we can create \[unintelligible 00:46:39.17\] we need to.

A problem I've been looking at a lot lately, that's not in scripting, but it's still on accessibility, is really our JSON, is how do we kind of grab some sanity there... Because the parsing might have been different in different areas, evolved differently as per feature needed... And how much do you rewrite, versus kind of keep the evolved structure, and add new features from there, to really make it friendly to creators, and not make their life really hard just because we have an optimal feature that is better versioned, or something like that. It's a really hard question.

**Jerod Santo:** That's a really interesting analogy, between Office and Minecraft.

**Raphael Landaverde:** It made me giggle at least when I spoke with him...

**Jerod Santo:** Yeah. Well, having worked on Office as well yourself, it probably resonated. There is definitely a big difference, one of which is like Office is business software. And of course, you need to run your business, and you can get mad and all that... But Minecraft is for the joy, right? Like, when I create that map that I've just been pouring myself into for 13 years, and if that sucker breaks, you've destroyed the joy in my life. And that just seems like a bigger promise broken than "Sorry, you have to upgrade your Office to a newer version \[unintelligible 00:47:48.27\] You're like "Okay, I'll pay the money and I'll do it." Versus like "No, don't take away my joy."

**Jake Shirley:** \[47:58\] Yeah. Well, data loss scenarios as a developer, especially with something, like you said, that people aren't objective about... Like, they love their worlds. This isn't a Word doc for work. This is something that you've handcrafted for years.

Data loss scenarios are terrible. Like, the whole team feels bad when they happen, and all of the alarms are going off trying to fix it and ship a build as fast as we can if those ever happen. And that's if it's in our control. If it's not in our control, we ring all the bells we possibly can. You know, "App Store, help us. Something's wrong. Something's not working right here." That's a really tough one as a developer to stomach, just because community is such a large part of Minecraft. They help craft the story. They've been here for 16 years, helping the game be made, having their opinions be put into the game, and all of that stuff... So kind of hurting that relationship, even if totally unintentional, just is a huge killer sometimes.

**Jerod Santo:** Well, we've talked about the hardest part... Let's close on your favorite part about this opportunity you both have. I think it's just a really cool job. I'm a little bit envious, of course... Because you get to work on Minecraft for a living, and that's really cool. But certainly, there are struggles, there are headaches, there are the downsides of a job. But then there's also like "What's the best part getting to work on this game for a living?"

**Raphael Landaverde:** Hmm, that's a good question. Do you wanna go ahead, Jake?

**Jake Shirley:** Sure. Part of my backstory I didn't share at the beginning was that I actually learned to program modding Minecraft in high school...

**Jerod Santo:** Really?!

**Jake Shirley:** Which both shows how young I am and how old Minecraft is, I guess. But you know, modding Minecraft, just... You know, copy-pasting Java code to get a Minecraft server up and running, and running Hunger Games servers and all that stuff... So starting right out of college - actually, in college - on Minecraft was like a dream come true. And engaging with the community on the level that Raph and I do... We sit on Discord, we go to forums, we do all these things, we have meetings with them... Talking to the community members, our developers, keeping that iteration loop super-tight, where we can trust them and they can trust us that we both have the best interests in our hearts... That is such an awesome relationship. And seeing all of the people on Discord copy-pasting scripts around, being like "Why doesn't this work?" is painful sometimes, but you realize that these are blossoming developers, learning how to program for the first time. And that is so cool to see, to be able to help people do that. And it's totally like recursive for me, because that's exactly what I did. I went on forums 15 years ago, copy-pasting Java code... You know, "Beep-boop. Why doesn't this work?" Tweaking tiny values until I kind of understood what they did. So I think that's really, really cool.

**Jerod Santo:** I love that. Full circle, man. That's a really cool story. Raph, what about you?

**Raphael Landaverde:** I definitely don't have as much of a full circle story. I will definitely echo Jake that the community engagement is such a fun part of this... But I won't say the same thing. My big one is that game development in general has such interesting problems. And especially with the scripting here, but also like the C++ layer, and the performance considerations, and the different way engines can work... There's just such a gamut of problems you can tackle in this space, especially when the game - you own the engine top down. A lot of games are built on like a \[unintelligible 00:51:23.18\] and we own the Bedrock platform all the way down, all the way up to the gameplay code... And that's super interesting.

So when we're working through these hard problems, and we have these meetings where we're hashing it out, I leave the meeting and sometimes I just like laugh to myself, like "That was a really good discussion. We worked through this problem", and we were talking about like a redstone block, or how a camel moves, or something like that. It was really comical though, like, putting the perspective... Like, "This is for a game, and for joy", even though we're solving these hard, technical problems. I love that little dichotomy \[unintelligible 00:51:52.00\] It's great.

**Jerod Santo:** \[51:57\] That's awesome. Well, guys, congratulations on landing some awesome jobs... And it sounds like you're doing great work as well. Are there any touch points? You said learn.microsoft.com. Surely, you can just go google how to mod Minecraft and stuff, but where is this community that you speak of? Is there like a Discord specifically that you all hang out in? If people want to get in touch with you two and the modding community inside of Minecraft, where should they go?

**Raphael Landaverde:** Yeah, there's a bunch of Discord servers, and we can definitely figure out the links for those if you want to share them... But ones for add-ons, ones for open source software and Bedrock, some scripting API ones... Both of us are on there, with our Discord handles... So if you want to chat, reaching out on those community servers would probably be the best, at least for me.

**Jake Shirley:** Yeah, definitely. Discord, for better or for worse, is the place to be for a lot of developers these days. Yeah, I'm DarkNavi on Discord. If you search on learn.microsoft.com, we do have a page somewhere in there that talks about more resources and external resources. And we have some links to some pretty well-established community Discord servers, some pretty well-established community documentation websites and stuff like that. So I think learn.microsoft.com, googling "Minecraft documentation" or something like that \[unintelligible 00:53:07.26\] pretty easily should yield some pretty good results.

**Raphael Landaverde:** Yeah, I think the main page is called Introduction to Scripting on the Minecraft Learning Portal. So that's a good place to start. And yeah, I'm MidoriTerra on Discord. A play on my last name.

**Jerod Santo:** Very cool. Well, give me some links to maybe those resources pages. Anything you guys want in the show notes, I will make sure they get in there for our listener to click on, click through, and maybe connect if they're interested in the world of modding Minecraft.

Well, awesome conversation, guys. I appreciate you coming on the show and sharing your world with us. Anything else I didn't cover? Anything you wanted to say, or you were just waiting for me, "Why doesn't he ask me about this?" Anything like that before I let you go?

**Jake Shirley:** I really wanted you to ask me what my spiciest take on web dev is.

**Jerod Santo:** Jake, what's your spiciest take on web dev?

**Jake Shirley:** My spiciest take on web dev is that build steps are good, and not bad.

**Jerod Santo:** Oh...! Have you heard our recent episode on "Should we need a build step"? \[laughter\]

**Jake Shirley:** Yes. That was my homework. I listened to an episode of the podcast and it was "Build steps: yes/no."

**Jerod Santo:** Yes. And you are pro build step, I guess. So...

**Jake Shirley:** I mean, I'm a C++ engineer, a C engineer, so I'm used to build steps, and... The tiny, little TypeScript build steps are a breath of fresh air, and I think they have a lot of utility. But that's me coming from a not-web dev background.

**Raphael Landaverde:** Yeah, I completely agree, because I'm all about TypeScript. And the big thing - we didn't get to it, but yeah, TypeScript is integrated all the way down in our build. We generate DTS types. That's what our npm packages are. They don't actually take any JS code. They're just DTS that represent their contract, and we use that to kind of keep ourselves sane versioning-wise.

**Jerod Santo:** Well, Jake, I don't have the exact same background as you, but I did work on a desktop Windows app that was coded in Delphi, just out of college, and I spent a lot of time just trying to get that sucker to build... I don't know if \[unintelligible 00:55:08.22\] The build step was ridiculous.

So yes, I think we do... When we complain today about our web dev build steps, we probably don't have the perspective, as some other - especially game devs, I think - have of the difficulties and the time spent compiling and building, and linking, and doing all the things. Still, I think we shouldn't need it, but that's a conversation for a different day... And perhaps we'll have you guys on to debate such things with us in the future, even though you're both against me, so I probably won't invite you onto that particular debate...

Alright, well, thanks for that. I'm sad I didn't work that naturally into the conversation... But how could I know? How could I know you guys were such build step zealots? I would've never --

**Jake Shirley:** I should've worn my build step T-shirt. What am I doing...?

**Jerod Santo:** You should have. Build steps for life. Alright, well, we'll close this down before Raph brings up TypeScript again... I'm Jerod, this is JS Party, not TS Party, and we'll talk to y'all on the next one.
