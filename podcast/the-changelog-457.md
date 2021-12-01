**Jerod Santo:** We are back for a follow-up episode to episode 450 on Vim. First of all, I wanna say that I appreciate all of the positive feedback around our Vim episode. We've put a lot of work into that, and it sounds like everybody enjoyed it. We're happy to hear that. And one of the things that we've heard over and over and over again was "When Neovim?" Similar to the Crypto Kitties say "When Moon?", the Neovim kitties were saying "Hey, you've done Vim... Now give us the Neovim treatment." So by popular demand, we have TJ DeVries here to talk Neovim with us. TJ, thanks for coming on the show.

**TJ DeVries:** Yeah, it's my pleasure. Really excited to chat and just explore some fun topics together.

**Jerod Santo:** We are excited too, and I have with me not Adam Stack - it is Nick Nisi, my co-patriot at JS Party. Nick, welcome to the Changelog.

**Nick Nisi:** Hoy-hoy. I'm happy to be here. Excited to talk about Neovim. And just for the record, it wasn't just me hounding Jerod to get a Neovim episode.

**Jerod Santo:** That wasn't your bot just telling me over and over again?

**Nick Nisi:** I can't confirm or deny that, but it wasn't me specifically...

**Jerod Santo:** Well, if you know JS Party, you know Nick is often trying to turn it into Vim party, and he brings up Vim whenever he has opportunity, and he has been for a little while a Neovim user. How long have you been on Neovim, Nick?

**Nick Nisi:** It's been a couple years. But I'm a recent convert to the Neovim 0.5/Lua lifestyle, that I'm excited to talk about today.

**Jerod Santo:** \[04:00\] I will also confess that after our Vim episode and our Modern Unix Tooling episode I've been reinvigorated, and I installed Neovim. I threw away my vimconfig and I'm doing Survivor-style "Which configs make it into the new config?" game, line by line, and I'm having lots of fun. I feel like a kid again, just tweaking and changing, and kind of relearning how to use Vim... Because I've been using it for a very long time, in a dual capacity, with a full-time GUI.

So I was on Sublime text for years, I switched to VS Code, and I always had Vim open in a shell, and I would use it on servers, and I would use it kind of casually. As you know from that episode, I always use vim mode whenever available, but I was not using it full-time as my programming editor until a few weeks ago... So I'm back, and I'm giving Neovim a try, and I'm having a lot of fun. But TJ, give us some of the back-story here, because Neovim has been around for a while. We've never done a show on it, despite multiple cries to do so... Who created Neovim? When did they start it? Why did this have to exist? etc. Give us the back-story.

**TJ DeVries:** Yeah, so I think the main person who first started it was Thiago de Arruda on GitHub. And it is probably about ten years ago; I don't remember the exact date. The main thing that happened was de Arruda was really interested in getting some of the ability to run external jobs asynchronously from within Vim, and that was the first main push... And de Arruda submitted some patches to Vim Dev, which is the mailing list for Vim... But unfortunately, at the time the patches didn't work for Windows, and there were some other problems that would have broken compatibility with a lot of the places that Vim expects to build... So due to that, it was sort of like this struggle of -- I don't know if "struggle" is the right word, but just sort of a difficulty trying to figure out how these features could work within Vim and all the places that Vim needs to build, and the size requirements, and all these other things which are super-valid concerns to have if you're on all the places that Vim can build... Like, do you wanna still be able to that? That's one of the selling points, the universalism of where Vim is.

**Nick Nisi:** You didn't have an old Solaris machine to test it on?

**TJ DeVries:** Right, he did not make any patches that worked there. So basically at that point de Arruda was kind of like "Well, I don't want to necessarily have to support those. I wanna do different things that can work differently, and I wanna push forward in some of these areas that might make us end up in a place that's not the same place that Vim is." So de Arruda basically started Neovim, and then from there de Arruda also had several other large ideas in combination with people like Justin M.K, who's still part of the project, as well as  ZyX-I, who's one of the largest early contributors to Neovim. And they added other things, like remote plugin support, and started doing Lua scripting, and things like that. But that was sort of the main branching point that started to allow Neovim to go down a separate path from Vim.

**Jerod Santo:** Exactly how different is it?

**TJ DeVries:** This is a pretty common misconception, that Vim and Neovim are very, very, very different. Vim and Neovim still share much of the same codebase. Neovim still ports patches from Vim, all the time. We have some contributors, especially like Jan Lazo, who in the last 0.5 release helped to get us to over 1,000 Vim patches ported from Vim into Neovim. So there's still sort of like an insane amount of similarity between the two. And if you open them up, you won't really see in effect any differences from a lightly configured init.vim or vimrc, whatever you want. That's an important backwards-compat thing that we're interested in trying to work hard on.

\[08:05\] There's some things that are removed from Neovim that are in Vim. For example, Neovim doesn't ship with a GUI by default, like Gvim. Neovim removed all of the code that tightly coupled it to a GUI application, and instead implements GUIs over RPC. So that's an example of like if you're expecting to be able to just open up Gvim, but with Neovim - that doesn't happen, because those two things have sort of been decoupled... As well as various other things. If you installed Neovim, it wouldn't install view, the command view, which is opening Vim in read-only mode, because you can instead do nvim -r, or something; I don't know what it is off the top of my head. Sorry, everybody. But you could just alias that to be the same, and then it would retain the same behavior. So of course there are some similarities that are obvious at the start, and some things that are a bit different when you're first encountering them... But in general, there's an incredible amount of overlap still between the two projects, I would say.

**Jerod Santo:** That would be my experience so far - I haven't noticed a difference in just regular text editing. I could just alias it and never notice. Now, once I've started configuring it and trying to do some more advanced things, you start to see where the seams are, where the differences are. Go ahead, Nick - what were you gonna say?

**Nick Nisi:** I was gonna say something similar in that when I started using it I actually started using it I think for the same reason that it might have been created, now that I'm hearing that... And that's because I heard about this async job support... And I had just gotten into configuring linting, and things like that. But every time it would lint, it would completely freeze Vim, and that was just super-annoying.

Then I heard about Neovim and how it could do that asynchronously, so I set it up, but I was just like "This is just temporary. I'm sure Vim's gonna catch up, and I'm just gonna switch back to it." So I installed it and I did that alias, alias vim=nvim. And I still have that, and that's still how I invoke it, but that alias is five or six years old at this point. Now it's just interesting that I really can't tell the difference, or couldn't tell the difference in the beginning, aside from where your config lies in that. But otherwise when you start up, instead of Vim it said Nvim, and that was pretty much the big difference.

**TJ DeVries:** Yeah. Just to mention as well, Vim does have those capabilities now. It does have asynchronous jobs, and other things; I just figured I wanna throw that out there, in case people are interested in adding some of those things to their own vimconfig... But it does exist in both now.

**Jerod Santo:** Yeah, that's one of the cool things that I've noticed... I wonder if Neovim is directly to blame or to accredit for this, but it seems like Vim's development picked up with regard to performance asynchronization, and certain things that maybe weren't being advanced, and maybe there was a little bit of "competition spurs innovation" thing going on... That was just my casual observation. Is that your thoughts as well? Or if we ask Bram about it, would he say "Yeah, I saw Neovim coming and I was like "Holy cow, I need to start doing more", or what's the story there?

**TJ DeVries:** I actually think that this is probably a common misconception. I think Bram likes implementing things that he thinks people are going to use, and it wasn't really clear from the community that this was an important thing for them to have previous to this... My personal opinion - obviously, I'm not inside Bram's head, and we've only spoken just casually a few times on GitHub issues or email - is that Bram just was like "Oh, there's people requesting this now in vimdev, and they're thinking about it a lot... Oh, we can implement that", and so then he implements it, and it works well, and then he's happy with the solution. I'm not 100% confident that Neovim spurred him on to do that. I don't necessarily think that that's exactly the case. I think it's much more that Bram saw that people in vimdev were like "This is cool. We should have this" and he was like "Okay, I'll make one that works well for inside of Vim", and then that's what he did.

**Nick Nisi:** And to that point, both of them have async and other similar features, but have they arrived there in different ways? Is it different APIs, or ways to invoke async, for example?

**TJ DeVries:** \[12:12\] Yeah, so to start external jobs, the jobs APIs aren't compatible. There are plugins that sort of wrap them to make them very similar, so you could have one that's shared and you call mysharedlib.startjob, or whatever; you could be doing that and sort experiencing working them in both... But their implementations are different. Neovim is really focused a lot on building around LibUV, which is the stuff that I think Node (if I remember correctly) is built on top of... You probably know about that in JS Party land... So Neovim event loop and stuff is built around that, and so we use LibUV bindings to do the async jobs and many of our other event loop type things that we're interested in doing... And I haven't looked in-depth at how Vim actually implements it. If I recall correctly, they're not using LibUV. So the underlying implementation is not the same. But their APIs are pretty similar and it's possible to write code that works in both. It's just sometimes a bit annoying, but that's okay.

**Nick Nisi:** And with the help of those community plugins, is the burden on plugin developers kind of lessened, or almost non-existent by that? Or does that kind of cause some issues?

**TJ DeVries:** If all you wanna do is run a job asynchronously, then it is not incredibly difficult. There are other things that are much more difficult to maintain shims between, or some things that are very specific to Vim or very specific to Neovim that either haven't been unified or never will be.

For example right now in Vim there's APIs -- they're all prefixed with popup\_. So there's popup\_create, or popup\_menu, or things like this, and they allow you to make little floaty windows. Neovim currently doesn't have those APIs, and we have not a shared floating window implementation underneath the hood, so it's not necessarily simple to just port the patches over and get the results. But I'm working on a project and other people are contributing as well to create Lua API that we can create windows with, and then we could expose a thin wrapper over that back in VimL that's the same, or looks the same to the user, so that you could write plugins in Vimscript and they would work in Vim or Neovim, even though the underlying implementations aren't the same. So it's not that we've completely abandoned any hope of still making some things the same, but right now if you wanted to have floating windows in one versus the other, you'll have to write very different code. But if it's literally just like "I just wanna spin up a job and have it run externally", you could probably have that working for your plugin in like 5 or 10 minutes for simple cases, I would say.

**Jerod Santo:** So it sounds like the longer it goes, the less underpinnings they share. You mentioned that there was 1,000 patches or so in the 0.5 that were direct ports from Vim into Neovim. Do you expect over the course of Neovim's life that that number would decline over time, or do you think there's enough foundation that's shared that it's just always going to be massive amounts of shared porting, the solutions they come with over there, onto the Neovim side?

**TJ DeVries:** In general, I try not to predict the future too much, because it's a difficult game to play, but--

**Jerod Santo:** Well, what trend are you watching? Give us the trend.

**TJ DeVries:** Yeah. In certain areas of the code I would see us still porting patches for a long time... And port is in some cases very loose; it might be literally just applying style differences and putting them in, and then porting tests written in Vim into Lua, because we write most of our tests in Lua... So some of those patches are very simple, and they are almost direct applications. So there's some areas that I would expect that to happen for a long, long time. A bunch of things in like eval.c, which is where Vimscript things get done.

\[16:15\] It's like "Okay, we simply just added this new argument to a Vimscript function. Okay, cool. We can try and port that over and then we can have that the same in both." But in other areas, there already exists no way to port patches. For example, for floating Windows code we have two separate implementations, so it makes no sense to port any of those patches that get marked as not applicable for Neovim.

But it may be that we in effect port some of those patches over in attempts to keep the community as close as we can, like with the example I gave of the popup APIs, where Neovim would still like to implement those so that people don't have to worry about which one they're writing for, and they can continue serving both communities easily.

**Break:** \[17:05\]

**Jerod Santo:** So let's talk Lua.

**TJ DeVries:** Yeah, that sounds good.

**Jerod Santo:** On the Vim episode I asked everybody what frustrations they have with the editor, and Gary Bernhardt said "Vimscript."

**TJ DeVries:** \[laughs\]

**Gary Bernhardt:** I’m pretty good at complaining, so I’ll limit myself to just one thing… \[laughter\] Vimscript. To understand Vim’s relationship to its scripting language, let me contrast with Emacs. Emacs is almost like an operating system that happens to ship with an editor… And long-term Emacs users will effectively end up rewriting parts of that editor sometimes, but it’s still Emacs, because the layers underneath are still Emacs. So Emacs Lisp is a whole programming language, it was designed to be a programming language… Vim is not like this at all. Vim was designed to be a text editor. It had a configuration language; that configuration language grew over time to acquire normal programming constructs, and that is what we call Vimscript… So it’s a hodgepodge, and it wasn’t sort of designed all at once, and I don’t think it’s controversial to say it’s kind of a mess.

So that is the most frustrating part of Vim for me, and it’s also one of the reasons that I avoid configuration when I can. I have a very sort of mostly stock Vim configuration, despite 15 years, and Vimscript is why.

**Jerod Santo:** So this is something Neovim is taking head-on, isn't it?

**TJ DeVries:** Yeah I think Neovim's choice of choosing Lua is what I would consider sort of like the de facto future of configuring Neovim. Not that it won't be possible to write Vimscript or that we will remove the engine, or anything like that. That is not happening. We will continue to support that and allow that to happen.

\[20:15\] I think Lua has invigorated a lot of people to be interested in both contributing and sort of being able to explore making Neovim more their own. Not only is Lua a programming language that has lots of external libraries that you can install, with LuaRocks, and things like that, and there's a lot of other external resources for learning Lua... But there's also really cool things like LuaJIT, which allows for crazy performance that's just like sort of insane... We'll talk probably a little bit about Telescope later... But Telescope can find and fuzzy-sort literally like tens of thousands of items as you're typing in one main thread attached to the UI. We currently have some stuff in progress to do a few things in a little bit smarter way, so it doesn't block... But regardless, it's doing an incredible amount of work as you're typing, and that sort of performance is just not possible with old Vimscript.

It's true that Bram's working on vim9script and there will be performance improvements there. There's a lot of people I know that I've talked to personally that are excited to use Lua because there's applications outside of Neovim, that are like "Oh, I used this for scripting before in a video game" or "I've used this in whatever C application", or "Oh, I've embedded this here." So they have sort of like previous experience or future experience that they'd like to have with the language that maybe makes it more accessible and exciting for them, as well as being fast.

**Nick Nisi:** Give Neovim's architecture on top of LibUV, was JavaScript considered as a potential language?

**TJ DeVries:** It was, I think, considered, but discarded. JavaScript's ability to be embedded easily inside of a C application is not considered one of its strong suits... As well as its minimalism. I mean, Lua can be run and is run inside of some Linux kernels. So the portability and the size and all of these other things are really great features... As well as -- Neovim I guess pinned in a way to Lua 5.1, which... The language is complete; there's no changes, there's no new things being added to the language, there's no things being removed, which is really nice for writing a plugin now and having it work in 15 years, as opposed to -- not throwing shade at anything JavaScript, but I feel like it is a common problem that I see people talk about on the internet, that "Yesterday my Npm build worked, and tomorrow it does not." Not to mention changes within the language itself. So there's a lot of things about Lua that provide an incredible match with Neovim. Like I said, embedability, size, portability, and the fact that it's sort of static are really great things for us in terms of shipping a small binary that can work in a lot of places.

**Jerod Santo:** Yeah, it almost seems like Lua was purpose-built for use cases like this one.

**TJ DeVries:** Yes, that is exactly what the design principles of Lua are; one of the primary design principles is embedability... So yes, this is exactly the case where you would wanna use Lua. You do not wanna use Lua to write your ten-million-line monolith; that is not the purpose of the language. The purpose of the language is to be embedded inside of other languages to provide relatively safe and easy ways to script and extend something. Like, you're not going to have a memory leak in the same way, or a memory problem with writing C to script your editor, or something like that. That's not exactly the same kind of fun experience, at least for me.

**Jerod Santo:** \[23:58\] Right. Now, Nick, I know that you've been porting your vimconfig over to Lua in the last couple of weeks, because as TJ mentioned, Neovim - you can configure it in Vimscript, and you can also configure it in Lua... You can have an init.vim or an -- is init.lua? Is it the same file name?

**TJ DeVries:** Yup.

**Jerod Santo:** Yeah, you can have either one. You should not have both. Both Nick, you had both here for a while; I don't know how you've been managing that. What's been in your experience? Because I don't think you've used Lua previous to this, is that right?

**Nick Nisi:** That's right, I have not used Lua before this, and I initially was hesitant to even start, because I was just like "I don't wanna learn Lua. I don't have any practical application for it." But then I was like, "Wait a minute, I'm learning Vimscript. I don't have any practical application for that outside of this..." \[laughs\]

**Jerod Santo:** Right.

**Nick Nisi:** The thing that really pushed me into it -- as I've mentioned, I've been kind of a recent convert to that. I know that a lot of people have been using nightlies of Neovim, I guess 0.5 maybe I'd call it, the Lua support version, for a while... But I only recently jumped on that and started using it, and it was because I saw some cool plugins that I wanted to use. So it initially just started out with me installing the nightly of Neovim, and then just having my init.vim and putting in a lua require to open up the configuration for a specific plugin, and be able to use that. And I kind of didn't like that -- as I started adding more and more plugins, I didn't like that I just kept calling out to Lua for that, so I just went in as an experiment to see what it would take to translate my at the time 600-something-line of init.vim into init.lua. At the end of it, it came out as 240 lines of Lua, which was really surprising... But that's because I split out plugins into its own plugins.lua that set up all of that... But that was still only like 50 lines. I lost 200 lines in there somewhere, and I feel like it's more powerful now.

**Jerod Santo:** And that's not like losing your car keys, that's like losing weight. That's the kind of losing you wanna do.

**Nick Nisi:** Exactly. But I guess from your perspective, TJ, would you say that there's a big benefit to converting your configuration to Lua, or is was the primary intention to be more like for plugin authors to be able to write more robust plugins?

**TJ DeVries:** Yeah, so there's a couple aspects to chat about in that area. The first one is I don't think that we have yet implemented everything in Neovim to make it super-elegant and easy to write your entire configuration in Lua. That's going to take time. I have a work in progress PR for auto-commands, for example. That would allow you to directly pass Lua refs inside, and Neovim in the C code will hold a reference to that Lua ref until it's ready to release it, and then release it... But that requires a lot of changes. A story for a different day, if we want... But the point being - you still basically have to write your auto-commands in Vimscript, even if you're inside of Lua.

**Nick Nisi:** Yeah. I have a lot of Nvim execs in there for that stuff.

**TJ DeVries:** Yeah, exactly. So that doesn't really give you any necessarily gain. So there's some parts of my config that are still in Vimscript, and probably will be for a long time. The other part too is if it's working really great for you, I don't see any reason to change it over. It's gonna work well to do a lot of the set operations or simple things like that. Vimscript is a DSL for doing those it will work probably nicer than we can sometimes do inside of Lua, although some of them have sort of been mitigated by things like vim.opt, which allows you to use Lua and metatables to set Vim options more ergonomically, I guess.

\[27:47\] So I would say there are things that are nice about setting up your config in Lua. You can use closures really easily, and there's a lot of ergonomics about passing around functions or doing validation or whatever that is... But I don't see a whole lot of gain of just switching over to init.lua right now. I think a lot more of the benefits are about extending particular parts of your configuration. Maybe you have a complicated function that shelled out to some commands and parsed some strings and then it would do something within a certain buffer of a certain file type - well, that might be a lot nicer to write in Lua than it is in Vimscript. But changing set number to vim.opt.number=true - I don't know, that doesn't really strike me as "Wow, that's so mind-blowing!" \[laughs\]

**TJ DeVries:** So maybe someday I would say without hesitation you should just port it over, but I think the primary focuses are much more about scripting the editor in a more deep and customizable way than just setting options, if that makes sense.

**Nick Nisi:** For sure. And yeah, I think that from that translation a big thing that I really liked -- like, yeah, auto-commands and things like that, I'm just like... Basically, it's just a string of Lua in my config that's being run. But other things, like -- I've used a plugin for years called Vim Startify, that lets me configure what the Vim startscreen looks like, and it shows the recently used files, and things like that... But it has a big object that you configure and tell it exactly what you want it to show and do and all of that... And doing that in Vimscript - I've always just hated that syntax, because as you put things on a new line, you have to have the backslash on it everywhere, and it was just really annoying... But things like that, being able to use a Lua -- do you call that a table?

**TJ DeVries:** Yeah.

**Nick Nisi:** Yeah, a Lua table to hold all of that information, and then just be able to access it from Vim... And I can do things like access other objects like that through the -- I think it's \_G for global... And then being able to access from Lua Vim functions through vim.fn - that stuff is really cool, being able to do all of that. And I think that I'll probably keep my config in Lua going forward, and just kind of adopt the new features as they come in, like being able to set auto-commands, and things like that... But yeah, right now that's just glorified Vim in strings being called.

**TJ DeVries:** If someone was starting today and they made their config in Lua, I wouldn't be like "Switch it back to Vimscript. It's better", or something. I wouldn't really do the same vice-versa either. If it's working for you and you're happy with the end result, there's no reason to spend a bunch of time switching the language to be something else. I think they're both really good options for configuration at this time.

**Jerod Santo:** Yeah. I made the decision that I was gonna start it in Lua, because I'm like "I'm starting fresh, I'm starting in Lua", and then Nick showed me his, and I'm like "Nah, I'm gonna go back to init.vim, because I can just copy-paste those right in when I want them, without thinking."

**TJ DeVries:** \[laughs\] Totally.

**Nick Nisi:** The other a little bit challenging thing is depending on if you spend your free time perusing dotfiles on GitHub, if you find something cool in Lua, you either have to translate it to Vim if you're not using Lua, or vice-versa... And understanding how to do that translation is going to be fun for everybody.

**Jerod Santo:** Not the most transferable of skills... You know, you're not gonna put that on your resume. "I can translate configurations between Vimscript and Lua." Oh, wow.

**Nick Nisi:** Speak for yourself.

**Jerod Santo:** \[laughs\]

**TJ DeVries:** Speaking of translating Vimscript to Lua, there's an interesting project that I have on my long-term horizon to explore that I've already written a decent amount of stuff for, which is trying to basically transpile Vim9script, the new language that Bram is making, into Lua, and then keeping as much of the semantics as we can between the two.

\[31:51\] One of my goals is like I would hope that we can keep Vim and Neovim as close and friendly as possible. No one on the Neovim team has any animosity with people on the Vim team, and I don't really think vice-versa either... So it's a long-term project that I can't decide if it's real or not, or how much of my life I will devote to it. I have some preliminary things and I can generate valid Lua from Vim9script, so there's still -- even in places where people might at first glance think that it's gonna be impossible for Vim and Neovim to live together and be friendly, I still have goals to make them be friends. \[laughs\]

**Jerod Santo:** That's interesting... Because that's been one of my lines of questioning that I'm thinking about here, is that I'm starting to see most recently -- we'll get into tree-sitter and things like that, but most recently you're starting to see some plugins... There's one called Limelight, which is written in Lua, for Neovim, using tree-sitter for better dimming... And it was the first time -- because you know, I watched a lot of these things, what people are working on etc. for Changelog News, and a lot of times it's like, this is a Vim/Neovim thing, and that was like for years. It was either Vim-only, or Vim/Neovim. And I'm starting to see like "This is a Neovim thing", and there's no Vim equivalent. They didn't take the time, whatever you had to do to write it twice, or whatever it is.

So I started wondering, will that start to pull people away from Vim onto Neovim? And it's interesting, your perspective of like, you don't necessarily want that to happen.

**TJ DeVries:** Yeah... I mean, some of them are just impossible, at least today. There's no way to get tree-sitter, or at least that I know of, inside of Vim. So no matter what you do, if you wanna build something on top of tree-sitter, which is a really powerful and interesting technology, that's gonna most likely end up being Neovim-only plugin.

And even for me -- I will probably talk about Telescope a little bit, but Telescope is Neovim-only, because it uses a ton of Neovim-specific APIs that are only available in Neovim, and uses the window things in complicated and interesting ways, and it relies heavily on the fact that you have LuaJIT installed, and uses native C modules that we can link against C, that optionally you can use to do sorting to make sorting even faster...

So I think there will be plugins that exist that are only for Neovim, and there will be plugins that exist only for Vim, and that's fine... My goal, and the Neovim team goal, as I was trying to say before, is basically just like, we're not actively trying to make the community not work for both.

**Jerod Santo:** Well, I really appreciate that perspective, because so many times when there are projects and efforts like these, so often it's like a hostile takeover kind of a thing. Or it's a long con like "Well, we're gonna slowly take over..." At the end of the day it's Vim. It's a different Vim, it's a newer Vim, it's got things Vim doesn't have, and it takes things out... But still the same editor that we all know and love, that's been around for all these years... Like, why would you wanna crush that? Why would you wanna kill it?

**TJ DeVries:** Yeah. And I respect Bram a lot. He's made an incredible piece of software, and it's pretty bonkers if you just think about where it started to where it is now, and all the things that he's done for it... Plus, Neovim is literally a fork, so it's like, we share a bunch of code that we never wrote. I don't know, if feels kind of not very grateful and not very thankful to just be like "And now we're our own thing. And I don't like --" You know, it's like an angry teenager, like "I don't even like you, dad!" \[laughter\] It's not exactly like the pinnacle of maturity necessarily all the time to have that kind of situation...

It frustrates me when I see it online between people as well. It's just like, if they wanna use Vim, that's cool. Why would you be mad about that? That just seems cool to have them do that. That's great.

**Jerod Santo:** Yeah. If you're gonna hate on something, hate on the Emacs people. Come on, what's wrong with you...?

**TJ DeVries:** I mean, Emacs is now closer to Vim and Neovim in spirit than many other places, right? Not to name any other names obviously, but... \[laughter\]

**Nick Nisi:** \[36:05\] Yeah. They need to join forced to take on the onslaught of the graphical editors...

**TJ DeVries:** \[laughs\] Exactly.

**Jerod Santo:** Oh yes, the evil of graphical editors from faraway lands...

**Nick Nisi:** In my browser now...

**TJ DeVries:** Yeah.

**Break**: \[36:17\]

**Jerod Santo:** So Nick, you mentioned that you were waiting for the Lua stuff to land or to be official... 0.5 came out this summer, July 2nd, I believe. A huge release. 4,000 commits. As I've mentioned before, a thousand of those were ports from Vim, but lots of new stuff... And the community rejoiced. I mean, this must have been a long time coming TJ. How much work went into this release?

**TJ DeVries:** Yeah, there was a lot of work. There was probably -- if I had to take a guess, probably 3-4 weeks of time of me just answering when will Neovim 0.5 come out; you know, just replying to messages like that online. \[laughs\] We started a meme on my Twitch channel; when people would ask that, we did !therule and then that took a both command back and it explained that every time someone asks about Neovim 0.5 release, the release has to be pushed back one day. \[laughs\]

But in all seriousness, it's been a long time coming, and it was a culmination of a lot of really long-term project and vision that the team had. I can't take credit for all of it, or even probably I can't take credit for most of it, or anything... But seeing things like the LSP come to fruition - there's some fun history there, where you can go dig up some of the original issues, and my first PR probably in 2016 or 2017, where I proposed a lot of the first ideas about how we would put LSP inside of Neovim and have it be in such a way that it still is the spirit of Vim, that it's not "We're trying to smash everything in here and reimplement every wheel that we can. How can we do it in that way?"

\[40:08\] So for me, it's been very fun to see that finally released. It's been in my head for a long time, and other people who helped along the way, to finally implement it... And then as well putting in tree-sitter, which has also been sort of a long-term vision about making Neovim as an editor understand the text at a much higher and more interesting or semantic level than just strings of characters, which is one of the goals of tree-sitter.

**Jerod Santo:** Let's focus in on LSP, the Language Server Protocol. This one didn't make the Vim show, but I did ask each person what they FOMO-ed from other editors... And we wanted to keep it tight, so we dropped that section out, but I'll tell you, Drew Neil mentioned LSP specifically in VS Code.

**Drew Neil:** Yeah, well -- I come back to language servers again... About a year or two ago I started learning TypeScript, and I know that TypeScript has a very good language server. Pretty much language server and VS Code and TypeScript were all kind of invented under the same roof, so they're very well integrated... And I knew that I wanted to understand what a good TypeScript development experience is, and so I made a decision not to use Vim while I was learning TypeScript. I thought, okay, VS Code is an editor that's very well positioned for beginners, and while I'm being a beginner in TypeScript, I'm gonna be a beginner in VS Code as well, and just learn the way that a good language server integration would feel like, so that I can sort of take that learning and bring it back to Vim, so that when I make that step of "Okay, I'm gonna now switch all my TypeScript development back over to Vim", I know what I'm looking for.

**Jerod Santo:** For those who don't even know what LSP is, could you just explain what it is, where it came from? And then we'll talk about it in the context of Neovim.

**TJ DeVries:** Yeah, sure. So LSP is a protocol designed by Microsoft; it's actually one of Microsoft's VS Code users to communicate and basically get the language smarts that it has... Its big goal is -- if you think about... You have m editors, in n languages, and when you wanna implement support for the next language, you have to implement that m times, right? So I think as developers, we're very familiar with m times, n problems being very difficult and feeling intractable... And also not fun to solve, right? Because even if you solve it once, you feel you're gonna have to solve it n times again later.

So LSP is basically a protocol designed to talk from editors to some sort of server that's giving you information about what you're editing. So if you have your cursor on somewhere in a document, you can say "Hey, what's the definition of this?" And so there's a protocol, textdocument/definition. You send that over the wire to something that's running. It could be anything you want; it could be on your machine, on another machine... It doesn't matter. It's just a protocol that you send over the wire and ask "Hey, what's the definition of this text document at this position?" and it will return you back a list of possible definitions, or one, whatever the result is, and you'll be able to go there in the editor. So the editor will receive that response and know what to do.

This is really powerful, because in theory - it's not always exactly like this - it'll turn the problem from m times n to m plus n, which is a much better problem to solve... And it's probably more like m plus n plus z; there's some extra work still that --

**Jerod Santo:** What's the z?

**TJ DeVries:** Yeah. It still has to happen. Some language servers have specific commands that only make sense for their language, or things like that... But that's okay; that's still a much more fun problem to solve. That's sort of the basics of what happened. And in the context of Neovim, what we saw was that this is sort of in a lot of ways just like an interface to your editor, and that was one of my big pushers for how we should think about LSP inside of Neovim, is this is really just defining a standard way that is shareable between other pieces of technology in how you can talk to your editor.

\[44:17\] I recently implemented something for my work at Sourcegraph, where I implemented a go-to definition over LSP, but what it does instead of running something locally - it asks this external program where the definition of this thing is. So that was basically a way for me to do that. And I didn't -- I mean, obviously I knew how to move to the file and all these other things, because I am familiar with Neovim... But it doesn't have to be so. So it allows this interface to do.

And then if I can do another plug for Lua in here - the way that we did this with Lua is that it's very easy, because everything is just a function. You can replace a function with a basically set of parameters, and an expected thing to happen, and replace it with some new behavior that's more suited to your purpose. I'll give an example for that, which is in Golang we have a bunch of stub or test implementations for some interfaces that we have at my work. I don't want to jump to those when I hit Go to implementation, 99% of the time. So what I did was I can ask the LSP "Hey, where are the implementations of this?"

I wrote some Lua code that walks through the results and says "If this file ends with \_test or \_mock, discard it, and throw that away from my results." Generally at work we just have one result that remains, and then I just jump straight to there if there's only one left, otherwise I open quick fix list.

So that's really cool, because now I only have to press the button to jump to that implementation and it does exactly what I hope, only in Go code; and everywhere else it does the standard definition. So there's this concept and idea of like - the way that we wanted to design it was "This is just an interface for both language tool makers and editor tool makers to be able to interact with in a way that you can customize it to be just the way that you want."

**Jerod Santo:** Good explanation.

**Nick Nisi:** It's just amazing. I'm trying to think of ways that I might implement this.

**TJ DeVries:** Nick, sometime you're welcome to come on my stream and we can work on implementing it for you, or something; it'll be fun. For some other case.

**Nick Nisi:** Absolutely. That'd be a lot of fun.

**Jerod Santo:** That does sound fun. So tell me about this client-server situation... Is this like a network server, or is this like an embedded binary that you call? How does it actually talk? Explain that.

**TJ DeVries:** Yeah, so LSP - the primary modes that people use to communicate are either just standard in, standard out, or you can do it over TCP. Generally, if you're doing it over TCP, people just use some pipe and then pretend that it's TCP, or something like that, instead of actually doing TCP...

**Jerod Santo:** \[laughs\] Right...

**TJ DeVries:** But Neovim doesn't care what's on the other side. We take a list of commands, we spin up that thing, and start it, and then we have standard in/standard out between the two, and we just send basically JSON over the wire for a request, and then they'll send JSON back over the wire to get to us, and it's just like a pipe, generally speaking. It's possible to do other things.

So you could have anything on the other side. For example, gopls, the Go language server, is written in Go, and so it's just a Go binary on your machine that you say "gopls start up", you send basically a configuration request, so it can understand what directory am I in, what's part of this project, all those kinds of things. That's part of the protocol to understand. And then it will just respond to requests as you send it.

\[48:01\] There's also things like Microsoft's Pylance, which you can only run in VS Code, due to licensing concerns, but that's written in TypeScript... So it's not written in Python, it just does the analysis in TypeScript and then sends the responses... But you're just editing Python files; you don't care what it's written in, it's just a protocol that talks between the two.

**Jerod Santo:** So let's say I wanted to teach Neovim a new language...

**TJ DeVries:** Yup.

**Jerod Santo:** Let's say I had a language called Ink, and I wanted it to understand Ink. Would I then provide my own LSP, or would I plug something into the LSP that Neovim ships with? How would I get it in there?

**TJ DeVries:** Oh, so maybe I should take a step back... So Neovim's LSP client is just Lua code that's inside of Neovim.

**Jerod Santo:** It's an LSP client. It does not have its own language server in there.

**TJ DeVries:** Right, that's correct. So it doesn't know how to answer any of the questions. It only knows how to ask...

**Jerod Santo:** I thought maybe it had a set number of language that it already had all of the stuff ready to go.

**TJ DeVries:** No, it does not. We have nvim-lspconfig, which is just like a repo that helps you get some of those running, but you need to figure out how to install those and make them executable on your machine. Being a package manager is not what we're good at. We're good at being a text editor.

**Jerod Santo:** Okay.

**TJ DeVries:** Someone else can figure that out and do that, and there are various plugins to help you install... But Neovim just has basically a bunch of Lua code that knows how to handle the responses and ask the right questions. You need to install separate executables to do that.

**Nick Nisi:** And to that end I'm using something called lspinstall, that handles installing those and then using lspconfig to configure them for Neovim.

**TJ DeVries:** Yeah. It'll just install it for you, and stuff. So we leave that to other people; you can handle that. I'm sure there'll be one for specific distros, or specifically for Nix, or there's one for Docker containers... There's a lot of different ways that you can do that that's not our strong suit. We try and make text editors good and fast. \[laughs\]

**Jerod Santo:** Gotcha. Well, let's move on to tree-sitter, because another cool technology -- they seem like they're similar, right? I mean, you're talking about the syntax tree, about language... Help us understand tree-sitter and how it's different than LSP.

**TJ DeVries:** Yeah, so this is a really common question, so it's a good one, for sure. A really high-level way that you should start thinking about both technologies is that tree-sitter only deals with one particular file, and it only deals with the text that is in that file. It has no additional information. An LSP operates much more on like a project-wide level. It's gonna open up and read all your files. It's gonna index all of them. It's gonna put a bunch of things in memory, and then it's going to be able to have some specific way that you can ask certain questions, and it will give certain responses. So that's the first aspect.

The second aspect is tree-sitter is built in a lot of ways specifically to run inside of your text editor, as opposed to an LSP, which is some external process. So tree-sitter at a high level, for those who don't know, is effectively a library for writing error-recovering incremental parsers, and it's very good at doing that, which is awesome for text editors, because most of the time when you're writing code the code is broken. If you type a line of code, until you get to the semi-colon in C, it is broken. So you want to write parsers that can recover and not drop highlighting for the rest of the file, or do things like that. You want to actually do error recovery and smart error recovery. And that's quite difficult to do, but tree-sitter just sort of gives you that for free if you write a grammar in the correct way.

So that's the first part. And then the second bit that's very important is that it's incremental. So it does not reparse the whole tree, which is awesome for when you're typing keystrokes in a very large file, because you're going to smash 80 keystrokes; you don't wanna reparse the entire file 80 times, instead of actually just incrementally parses the things that it needs to and generates a new tree. Does that make sense so far? Any questions there?

**Jerod Santo:** \[52:14\] I'm with you.

**TJ DeVries:** Okay. So once again, tree-sitter only focuses on exactly that file. So this is cool, because this lets you do things like -- you can request highlights for the file by asking the tree questions, and basically getting back named nodes. You can write queries in this scheme-like language; it will return to you named nodes, and then in those nodes they have ranges, and so you can color them in your editor if you want. This is sort of like the thing that everyone recognizes about tree-sitter, but I find somewhat like the least exciting of all of the tree-sitter technologies... But it is the most obvious, and it also makes sense from a performance perspective that you would like to only change the highlights that need to be changed.

So this is like a really great improvement, and it allows you to write much better and powerful syntax highlighting than you could with just regexes, which is like the built-in Vim syntax engine... And it prevents you from getting these situations where -- I don't know if you've ever had this, but in certain complicated file types if you scroll down the page sometimes it thinks everything in the rest of your file is a string... And you're like "What is happening?! Why is this all a string?" That can't happen when you have a tree. That's not going to be an option.

So that's sort of like the first level of tree-sitter. And it doesn't communicate over the wire. Tree-sitter is running inside of Neovim. It's embedded inside of Neovim. Now, the parsers and the queries and things like that - those are external to Neovim, and can be configured by users. I have my own custom grammar for Lua to do some special things etc. So those are all sort of configurable, but the engine itself is built into Neovim.

**Jerod Santo:** And is the engine something that was built by the Neovim team, or are you actually embedding somebody else's -- is tree-sitter its own project?

**TJ DeVries:** Yes, tree-sitter is its own project. It was originally made for Atom, but several other editors now have used it because it is designed to be a library to be embedded inside of other editors... So it's very fast and performant, and they've spent a lot of time making it really awesome, and the tree-sitter team is super-cool.

**Nick Nisi:** To get started with it, kind of similar to lspconfig, you have to install a separate plugin. Is that just to help with the configuration then? I think that's where I had confusion, was because I was like "I thought that it was built-in, but I have to install this plugin."

**TJ DeVries:** Yeah, so to be clear about it - you actually don't have to install plugins for either. You can start up the server by yourself for LSP. It just is a little bit more boilerplate, so that's why we have lspconfig. But it's certainly possible to do. Lspconfig literally only has configurations.

**Nick Nisi:** Gotcha.

**TJ DeVries:** But for tree-sitter you also don't necessarily have to install the plugin. It'll just be more complicated. It would involve you downloading a grammar file, running tree-sitter to generate the bindings, because it's a separate executable to generate these bindings... And then creating your .so shared executable and then putting that in the right place. So you could do that, and then the engine that's built inside the Neovim will see that shared executable loaded up and appropriately attach it, I guess, to the buffer... But that is not very fun to do... \[laughter\] So that's where Nvim tree-sitter comes in. Over time, we hope to upstream more of Nvim tree-sitter into Neovim core... But there's a certain level of backwards-compatibility and polish that we wanna have in the core repository, and we felt that that would really hold back a lot of experimentation and interesting things happening. We tried to squish that all inside of Neovim core, which is where Nvim tree-sitter sort of came out as a separate plugin.

\[56:05\] So the engine, all of the interior things to do, like get the tree and have it parse incrementally as you type in all of that kind of stuff - that's inside of Neovim all the time. Someday my goal would be we would at least ship tree-sitter grammars inside of Neovim for C, Lua and Vimscript, because those are the languages that Neovim deals with, and I think it would be cool to have a really awesome experience out of the box for those languages for people... But we're just kind of far away. I don't know how far away we are, but we are not there yet to be able to do that.

**Jerod Santo:** So it sounds like tree-sitter is driving a lot of the innovation around these cool, new plugins that I keep seeing that are Neovim only, not Vim as well, because of the tree-sitter support.

**TJ DeVries:** Yeah, I can give you a really cool example of a few things that people have been doing with tree-sitter that are much further beyond just highlighting...

**Jerod Santo:** Please do.

**TJ DeVries:** So a relatively straightforward and easy to understand one is a plugin called nvim-ts-context-commentstring, I think, off the top of my head; I don't remember exactly the name. But what it does is tree-sitter tells you what language you are currently inside of, and those languages can be embedded in side of the same file. For example, in JavaScript land you can have React elements, so then inside of there you're kind of like in React -- or I don't really know how any of that works, because I like backend languages... But all of a sudden I'm like "Am I reading HTML? I thought this was JavaScript. I don't know what's going on." But one thing that's kind of annoying is if you use a commenting plugin and you try and comment something in the JavaScript part, versus the HTML style part, you'll comment them incorrectly.

**Jerod Santo:** Yes.

**TJ DeVries:** So nvim-ts-context-commentstring - all it does is it'll just update the comment string option, which is a built-in option, depending on which language tree-sitter currently detects. So if it detects that you're inside of JavaScript land, it'll set it to // %s. If it detects that you're inside of HTML, it sets it to the long HTML thingy that's annoying to type. \[laughs\]

**Jerod Santo:** Right.

**Nick Nisi:** That's cool.

**Jerod Santo:** That one just honestly rocked my world, because I've had that problem in my life forever.

**TJ DeVries:** Yeah. And so this is even cooler, because it doesn't just work for those languages. In Lua you can write FFI code, which is actually C, and it is somewhat deterministic how you start and end those cdef blocks. So you can actually write a tree-sitter query that tells Neovim "Hey, inside of this string it's actually C code." So you get C highlighting in this random string in your file that you weren't expecting, and then if you're using nvim-ts-context-commentstring and you comment out a line in there, it comments out that line like it's C code. So it's very powerful to be able to do something like that. It's very exciting.

**Jerod Santo:** That's awesome stuff.

**TJ DeVries:** That's one example. I'll give you another one that I think is for me very fun. I use a snippets plugin called LuaSnip and it's kind of interesting. I've just been exploring that lately... But it allows you to sort of run Lua code as you're expanding your snippets to sort of generate what the next text should be. So if you're familiar with Golang at all, you know that if you write "if err!= nil" like ten thousand times a day - maybe that's an understatement; I haven't profiled myself yet, but I think it's somewhere around there... And what you do inside of those err!= nil sections is you have to write return, and then the type signature basically, with the default values. So if you return an int and error, then you have to do like "return 0, error", right? So you write this thing a ton of times.

\[01:00:01.17\] So I actually wrote a Lua snippet that will ask tree-sitter basically - it has a custom query that I wrote inside of Golang that will ask tree-sitter "Hey, what is the return type of this function?" So it can query the tree, it gets back the current node that you're in, it asks for "Hey, what is the nearest function scope that I'm inside of?" So it's not a regex. It works for in-lined functions inside of another function, all these kinds of things. It asks for that, it gets what the return signature looks like, and then it generates the snippet in the corresponding things with the default values, and then err.

So it's very cool, because I can just type "ie" for if error, expand my snippet, and correspondingly, the right signature is generated as a return value. These are the kinds of things that make me very, very excited about tree-sitter, and why I say it's cool to get better highlighting... We look at our highlighting all day, and that's very fun... But for both LSP and tree-sitter the things that I'm most excited about, especially on Neovim core team, is we're trying to design interfaces that empower people to have much stronger tools and understanding of the code that lets them extend their editors in very unique and interesting ways, which is like -- I think the snippets one is a fun example of being able to do that.

**Jerod Santo:** Goodness gracious. That is really neat. We're getting tight here, but we've teased Telescope a few times... Let's hit the nail on the head. Tell everybody about your--

**Nick Nisi:** Let's peer into it.

**Jerod Santo:** Ooh, there you go, Nick...

**TJ DeVries:** \[laughs\]

**Jerod Santo:** That's why we pay you the big bucks.

**TJ DeVries:** \[laughs\] So Telescope is a fuzzy finder that I started and I've had a lot of contributors to over the past year. I cannot thank enough the contributors to the project. In just over the last year it's gotten over 3,000 stars and nearly 130 contributors, and I think that by itself is somewhat of a testament to how accessible Lua is, how interested the people are to extend the editor and to continue working on it, and their ability to pick up little pieces and do it...

But in terms of what Telescope is and why I made it - I partially made it just to explore writing some stuff in Lua as a way to push our API and boundaries to find out what we should be including in Neovim core. But as I was working on it, some of the things that I've struggled with doing in the past with fuzzy finders I just wanted to try and solve.

For example, I love fzf. It's a very awesome tool. I use it all the time on the fly, but it's very difficult to do something like pass a function through fzf, because you have to encode it in some way, and then decode it again later, because fzf processes standard in and standard out. So Telescope is all Lua from the top of the stack down - or FFI, but that still counts... \[laughs\] So you can pass a function reference, which might be what you wanna do if this item is selected, at the beginning of your code, and then you can pass that all the way through. And so when you select it, you can do something with that item.

So my main goal for making it was just to basically create the most extensible fuzzy finder that I could imagine. Every part of Telescope is configurable. The sorting algorithm is just an interface of a function, so you can have fzy soring, fzf, strict matching, n-gram matching... You can write whatever you want to do, and you can just plug that in, and that will just work with everything else.

The previewers are all just Lua functions, so some of them -- like, if you're previewing buffers, it just literally opens the preview in a Neovim buffer, so you get exactly the same highlighting as you would if you open the file, because it is literally you opening the file.

\[01:03:59.17\] The ability to sort, and how you're sorting those, and when you filter them - those are all configurable. The display, and UI, and different themes - they're all individually configurable, and what my goal was was to make the most configurable fuzzy finder that I could do, with an easy API to basically plug in whatever you can imagine that you wanted to sort on, and then use it.

**Jerod Santo:** So on my to-do list was to yank Nick's fzf Neovim setup and use it for myself. Should I just bypass that? Is Telescope ready for me? Should I just use it right away, or is it still baking?

**TJ DeVries:** Yeah, so there's a couple things still baking for sure in Telescope. I mean fzf is just like a rock-solid piece of software that's super-cool. If you're doing things that might be searching millions of files, for example, you should stick with fzf. Go is going to be a better solution for you than what I can do in Lua, at least today. We'll see. Maybe someday it'll be different.

We are nearing completion of merging a very important PR that will greatly improve performance for really, really large searches, like 500,000 items; it will still feel fast and not really block the editor. So it's up to you... I would say if your primary concern is speed, then you should probably stick with fzf, at least for a while. Maybe you can talk to me in a year and maybe I feel I'm close enough to fzf's speed to say that we're there.

We're working on some projects in C to compile as optional dependencies that you can throw in here and work super-fast and cool... But we're not there yet, and it's cool. Like I said, I like fzf, but I use it every day; I no longer use fzf inside of Neovim. I have lots of friends who no longer use it inside of Neovim, or other fuzzy finders. They just use Telescope.

So I would say it's ready for daily use, but if you're gonna be searching ten million things or something like that, then running something inside of the program that you're doing is probably not a good call. You should use an external executable that's gonna manage that memory a little bit tighter.

**Nick Nisi:** I have an answer for you... Why not both?

**TJ DeVries:** Yeah, I have recommended that for some use cases for people... Like, if they're trying to grep every line in their very large monorepo, there's no reason not to keep fzf around, at least for a while.

For me, I have a hard time if the UI isn't as consistent. It's just sometimes I notice that, or I'm like "Oh, it's not the same as what I'm used to." So for some people, that really bothers them, and I understand; that's totally cool, and they say they're gonna stick with fzf, and I say "Awesome. That's great."

**Nick Nisi:** That is one thing that I think Telescope really has going for it, is it just has a really beautiful UI.

**TJ DeVries:** Thanks.

**Jerod Santo:** That does help, doesn't it?

**TJ DeVries:** Yeah. It is very interesting when you actually start using it and you notice that you get exactly the same colors as what the rest of your editor is...

**Nick Nisi:** I don't have that with fzf.

**TJ DeVries:** Yes. It is not possible as far as I understand, because for example, when you open up a buffer inside of Neovim and if you have tree-sitter, it will literally tree-sitter highlight the same way, with the same exact colors, because it is just another buffer. It would be like if you did :edit this file; it will show it like that in the preview.

**Jerod Santo:** Very cool. So one thing I wanna touch on maybe as a closer - I mentioned the enthusiasm around the 0.5 release... I mentioned how many people said "When Neovim on the Changelog?" There's a lot of people very excited about this project, they love the ability to write plugins in Lua, they like the new capabilities that tree-sitter is making available to them... Maybe speak to the community a little bit. I know you lead some livestreams, there's a lot of fun being had, there's celebrations around the big release... And then maybe give waypoints for people who would love to get involved with Neovim, the community, where does it gather etc.

**TJ DeVries:** \[01:07:56.23\] Yeah, so we did a 0.5 release stream on Twitch, on my livestream channel, and the excitement and enthusiasm was really mind-blowing for me. You know, I've been working on Neovim for a long time, and sometimes you're sort of just working and you're pushing stuff to GitHub, and like "Okay, cool. Somebody's using it, I'm pretty sure." But we had like 500 people there live to do the release drop on my stream, and it was really crazy for me, and people were showing a lot of support... So it was very exciting, even just getting messages from people saying "Thanks."

Just as a general note, if you're using open source software, and especially if it's maintained by people who aren't getting FANG-like salary to do the maintenance, it means a lot when you get a thank you, or like "Wow, I really like this" to that. I was really pleased to see Neovim in the top spot for most loved editor in Stack Overflow 2021 survey. A little shout-out there...

But yeah, I think the community is great, and it's really exciting to see how much people are excited... And I've really appreciated it and it's been fun being on the receiving end of that.

In terms of where can people get started and how can they help - first thing is we're on Element, or Matrix, I guess; there's a Neovim chat there. I believe it's linked from the readme. If it's not, then it should be... \[laughs\] So you can go there. Or it's on Gitter, or it's on IRC. They're all sort of bridged to be the same place, and you can hang out there and chat or ask questions.

There's a lot of issues that if you commented on and said "I wanna work on this" or "How can I fix this?", people are super-glad to help. That's how I got involved. I did a PR maybe during my senior year of college, adding a new thing to status line, and I just had a ton of really nice people be there to help and to encourage me and give me advice, and they've helped me grow a lot as a software developer... Even on just that one PR, it taught me a lot of really great things.

I hope, and I think it's a goal to other maintainers as well, that we basically make a welcoming and happy place for people to learn a lot more. So don't be afraid to ask questions or to comment and say "I'd love to work on this. Where should I start?" That's how I got started, so I think that's a really great way to go.

There's some labels, like "Good first issue" or "Mentored project" or things like that that you could look into, but don't be afraid to leave a comment or say hello. We're super-happy to see you. Or just say "Thanks for working on it." That always makes me feel better and gives me energy to keep on improving Neovim and working on it.

**Jerod Santo:** Awesome. Well, we definitely appreciate all of the work that you're doing. I'll just echo your sentiment - if you have a piece of software that you use and love, find the people that make that software and let them know, especially if it's open source, but proprietary as well; there's people behind the scenes of proprietary software, putting the work in. So that's definitely appreciated.

Nick, I wanna thank you for being my Changelog co-pilot. Hopefully, none of the things you generated today were GPL code... \[laughter\] But happy to have you here with me. I think I broke the show with that one.

TJ, we really appreciate you coming on the Changelog. To everybody who requested this episode, we thank you as well. We do take requests. Head to our website, Changelog.com/request, fill out the form there, let us know guests you'd like to hear, topics you'd like to hear, if you want Nick to come back, if you'd like us to banish him into eternity... Let us know. We like to hear from our audience.

Any final words, TJ or Nick?

**TJ DeVries:** Just thanks for having me. It's cool to see Neovim be requested on the show, and I'm always happy to talk about it. If you wanna see more of me or hear my voice, I stream a lot on Twitch.tv/teej\_dv. You could come hang out there. We're live pretty often, and I do a lot of Neovim-related work there. Otherwise, just glad to be here, and glad to be participating in such a fun community.

**Nick Nisi:** Yeah. And thanks for having me on as well. TJ, I would gladly take you up on that offer to dig into some custom LSP stuff. That's really cool.

**TJ DeVries:** Cool.

**Jerod Santo:** We are tentatively planning some related livestreams. We have nothing locked in, but definitely follow TJ on Twitch, and maybe on Twitter as well, for announcements. Of course, follow @changelog on Twitter. You can also follow Nick Nisi on Twitter, but... I don't know; you decide if you wanna do that.

**Nick Nisi:** Thanks, Jerod.

**Jerod Santo:** Alright, that's our show for this week. We'll talk to everybody next time. Sorry, Nick... In true JS Party fashion I had to roast you a little bit, just at the end.

**Nick Nisi:** Absolutely. \[laughter\]
