**Jerod Santo:** Today we are joined by Deepak Singh, one of the leaders of the developer agents team at AWS working on Kiro, a very exciting and interesting new take on a tool that a lot of people have takes on right now. Deepak, welcome to the show.

**Deepak Singh:** Thanks for having me.

**Jerod Santo:** Y'all announced Kiro, I think it was back in July, early July, to much fanfare and excitement. I even got excited, and that's hard for me these days, to get a little bit excited about a tool... So I was happy when y'all reached out and said "Let's talk about it on the pod." Welcome to have you, and why, when there are so many agentic coding things going on, is AWS throwing your hat into the ring?

**Deepak Singh:** Yeah. I mean, we threw our hat into the ring a little bit before Kiro, and actually we learned a lot doing that. If you go back in AI world \[unintelligible 00:03:26.00\] years, less than two and a half, three years ago, it feels like another era/epoch in AI time. You had all these assistants that were basically fast typists, they helped you complete sentences... And then you went into these chat-based assistants that you could write functions with, like "Hey, give me a function that does blah..." And it was pretty good, but we looked around inside the company, amongst our customers, and one of the nice things about being at Amazon is we have a lot of software developers in the company, who are very opinionated about how they use software. And so talking to them and talking to our customers, it became pretty clear that this sort of chat-based auto-completion/'give me a function' was useful, but it wasn't going to change the world. And along the way, LLMs got better, a lot better. They added thinking and reasoning to it, and that's when we started building sort of what we call our next generation of agents. And we started launching them; actually, earlier this year, we launched something called the Q CLI. This is actually the most heavily used agent inside Amazon.

\[04:33\] In the process of building things like the Q CLI, learning from our customers, a few things became very clear to us. The first one was we were moving towards a world where code was not going to be typed by humans. So the type faster, write blocks of code for me was not going to be the game changer. The game changer was going to be I have a pull request converted into something. So I've written an issue, converted it into something that's meaningful that I can make part of a bigger project, or write my entire software for me, and a human was not going to do the typing. We had already started seeing examples of that, and it was pretty clear that that's where the world was starting to go.

The second thing we did was we found that senior engineers had a really, really hard time with the original sort of era of assistance, where invariably they would say "I understand the code base. I understand the problem. I can type faster. Yes, I might use it for some help", like I use the - I'm dating myself - Perl Cookbook to find a function. And we were like, "Okay, that's not useful. How do we get our best engineers wanting to use these tools and actually finding them useful in their day-to-day work?" As we started talking to them, the thing that became very clear was the way they wrote code or solved a problem was by basically breaking it down into smaller problems. Like how do you take a larger problem, what are its constituent elements, and how do they express them? Sometimes they write them on a whiteboard. Sometimes they write a design document. Sometimes they write pseudocode, and then they work with a set of junior engineers and other engineers to convert that into a final product. This was happening before AI. So the question we asked ourselves was "Can we convert that into an AI-based system? Can we take the way our best engineers think, make it easier for them to do that, and along the way also assume that they're actually not going to type the code, and the agent is going to do it for them?"

Along the way, as we were doing this, this whole idea of vibe coding, as we call it, came up, which is this prompt-based loop where you keep prompting an agent until you get to an answer... And in that world also, we noticed there were people who were for the more complex problems going into something else, maybe Claude, or ChatGPT, and creating a set of tasks and breaking it up and then throwing it into the coding agent. The whole premise of Kiro was that's just the way it works. The code typing part is hidden. It's there, you can type code if you wanted to, but the assumption is the only time you'll type code is to tweak things that an agent may have gotten wrong... But even changes that you want to make will be done by talking to an agent.

So the way Kiro works is like our senior engineers work - you express a problem, Kiro will convert that into a specification of specs, which is sort of the core piece of Kiro. It's a spec authoring tool at its heart. And a spec is a set of requirements in Markdown, design document, also in Markdown, and a set of tasks where it wants to do also written in Markdown. And that's what you work on with the agent, and the code part of it is just the output that the agent generates. There's more to it, but that was the starting point. That's how we came to the user experience that Kiro has today.

**Adam Stacoviak:** It's interesting to go that deep. I mean, even Q CLI - if I got the pullback right, Q CLI enables completions for hundreds of popular CLIs... Is that what you mentioned initially?

**Deepak Singh:** No, that's how it started.

**Adam Stacoviak:** \[08:00\] Gotcha.

**Deepak Singh:** Yeah, so there was an open source project called Fig that became part of AWS about two and a half years ago. I used that as part OhMyZsh on my shell even before they became part of AWS... And they do a lot of CLI auto-completion. In March of this year, the Q CLI team put an agent inside the terminal, inside the CLI.

**Adam Stacoviak:** I see.

**Deepak Singh:** And you can basically start vibe coding. That's what it is. You start prompting it... It's advanced quite a bit now. For example, you can start a conversation, and if you want to experiment with something, you can actually create a branch of your conversation. You can go into a tangent; quite literally, it's called tangent. Have a conversation, and if you don't like that part, you can come back to your checkpoint, or you can now go down the different branch, and make that main later, effectively.

So that's been very successful, but it's all an interactive conversation, right? So the problem is what happens on day 20, when you've forgotten what you did, you have to go look at the conversation history... And what happens when you give that code to somebody else? They have no context of what was in your head, and no artifact that they can look at in a team. And we work in teams. A lot of engineers work in teams. So in many ways, what we were trying to do with the Kiro spec UX was "How do we capture that vibe coding magic, while making the code more robust over a period of time, where it's still useful a year later, and people have the ability to inspect the specification, modify it if they want to make any changes?" The two teams work pretty closely together, so we learn a lot from each other, so it's kind of fun.

**Jerod Santo:** I think perhaps why this idea, at least, if not the implementation, resonated with me and I think with a lot of people - well, first of all, it's AWS, so you guys have a loud megaphone, so when you announce something, people pay attention. And so that got some of the attention. But also, it's a new take on something that we're all working on, which is like this agentic coding thing... And it's kind of jumping ahead, I think, in the process we're all kind of getting to maybe in our own ways, of like realizing that chat isn't it; and chat's cool and all, but you just can't build serious software in a chat dialogue. Like, you can do stuff, and you can make progress, and you can experiment, but there's a certain point where you're like "Yeah, I don't want to live my entire life this way."

**Adam Stacoviak:** Way too cumbersome, yeah.

**Jerod Santo:** Yeah, I'm just not going to be productive. And you guys formalizing --

**Deepak Singh:** Fully agree.

**Jerod Santo:** Yeah, formalizing the idea of - I think you're calling it spec-driven development, or you can give me other taglines, but like this concept that is...

**Deepak Singh:** Yeah, that's the right tagline.

**Jerod Santo:** Okay, perfect. Like, even just that to me, I was like, "Yeah, that makes some sense. That's something worth trying." And Adam can tell you about agent flow, I'm sure he will. He's kind of developing his own spec-driven development style inside of Claude Code, or with Claude Code, as he builds things...

**Adam Stacoviak:** It's agent-agnostic.

**Jerod Santo:** And Kiro seems like an attempt to -- well, you're using it with Claude Code, right?

**Adam Stacoviak:** Well, AMP and Augment...

**Jerod Santo:** Okay, so lot of things.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Okay, well said. Regardless of the agent, he's doing that... And I think that what Kiro attempts to do, I guess, is to formalize that into the entire experience. Is that fair?

**Deepak Singh:** Yeah, that is fair. And it'll evolve. I think we are learning how to build software in a world where the engineer's role, the role of an engineer is going from being the -- I'll say typist; I don't mean it quite like that. But they are the ones who are the fingers on the keyboard, converting what they have in their head into a language, which is usually - pick your language of choice here, inside Amazon, AWS. If you're building a backend system, it's probably going to be Rust. And that's what they excel at.

Now, you're acting a little bit differently. You're a driver, you're driving the behavior of an agent. It's about how you give the agent the right context, structured thinking; specs is one way.

\[12:01\] There are other components to it, which others -- I'm suspecting your agent flow thing that also comes up, which is how do you provide access to the right tools? How do you provide access to the right steering files, that give the agent the right context to be more effective? And this combination of -- actually, inside a Kiro project, the core components are the spec, the tools, which is usually MCP servers, the steering files, which are essentially, again, markdown files, JSON files that tell an agent 'This is what I want you to do, how I want you to behave", give it a persona, as it were... And downstream of that, you have this idea of hooks, which are these automations that happen -- like the moment you check in code, it's watching for events, and it could be "The moment you save a file, please run an optimizer for me, because there may be a better way of optimizing the code, or send somebody an email saying "I'm done checking in code. You may want to look at your merge request" or whatever. That combination is the Kiro UX, but the spec workflow is the heart of that.

**Jerod Santo:** So what does Kiro look like? How does it work? What is it today? Where is it heading, etc? But first, lay the field out, so we can all see what it looks like.

**Deepak Singh:** For those of you who haven't seen Kiro, it lives on its own website called kiro.dev. The best place to find anything about Kiro is go there. You can download it, you can read the documentation, but my recommendation is get it -- right now we have a wait list. So one of the -- we talked about the Kiro launch... It got really popular really fast. We got over a hundred thousand developers signing up in the first few days, and we had to put a wait list on, which - we mostly cleared the original wait list, which got very, very large, but it's still there... But the assumption is if you sign up for the wait list now, you'll be out of the wait list very quickly. You don't have to wait for a month or so.

But once you download it, you'll recognize a few things. One, I think the most obvious one is that it is a Code OSS-based editor. So if you have VS Code profiles and preferences already set up, it'll import them for you. So if you had any plugins, et cetera, running, most of them, it'll run pretty successfully. Some there are clashes and we'll warn you that "Please do not use this plugin with Kiro", for whatever reason. And if you have -- we use what is called \[unintelligible 00:14:25.29\] exchange, which is our open source plugin ecosystem for VS Code. So that's where you can go and get most of your plugins. That's the obvious thing.

The second thing that'll jump out at you is when you open a project, instead of getting your code windows etc. the default is you'll get a question. "Do you want to just talk to an agent, or do you want to start building code using spec workflows?" And you can actually just start talking and Kiro will detect whether you need to do a more structured development, or just -- sometimes vibing is fun. Sometimes you just have questions to ask the agent. But you'll notice very quickly that the emphasis in Kiro is not in the code editor part, the code editing part, the syntax highlighting of code. That stuff is all hidden. The main window that's open, and the way you can set it up is all around the spec authoring experience, where you're creating a specification and you're working with an agent to create the spec.

So that's the first thing you'll notice about Kiro. And you can use it on your favorite laptop, all the operating systems that you care about... And it's pretty easy to get going with, because once your brain adjusts to the fact that what you have in front of you is not code, but actually, as I like to joke, Kiro is more of a markdown editor than a code editor, because most of your interactions are going to be natural language with a markdown, and what you see is markdown.

The first thing that will come out is a set of requirements that are written in EARS format. So those of you who have worked with user requirements etc. before. EARS is a format that I think came out of Atlassian, to represent user stories and requirements, all of them in markdown. You can throw text at it, you can throw sudocode at it... It's multi-modal. You can throw your classic "I drew my startup idea on a napkin" and throw it at it, and Kiro will convert that into a specification.

\[16:24\] Once you like the requirements - you can take a look at them and say "Yeah, I like them." If you don't like them, you can type into the chat window that you want to change them, or you can directly edit the markdown, which we rarely see people do.

The next thing it does is actually come up with a design. Like an engineer, it'll come up with "Here's my design proposal", and you get to decide if you like it. And if you're okay with it, then you say "Okay, I'm good." And it'll create a set of tasks; it could have one task, 20 tasks... Where a task could be "I am going to create a window and a button on the right corner, which is blue in color, and says Subscribe." That could be one of the tasks. It'll be written in. And within that, there'll be sub-tasks, which are the actual things it'll do.

You can do task by task, you can -- because some of those tasks are optional. Or you can say "Implement it all." It'll go ahead and do it. If you go into the file browser, you'll see all the files getting created. You can inspect them. Sometimes it'll come back to you for help, even if you're not in pilot mode, where it needs a user permission because your file system requires it, for example.

And that's how your projects are created. That workflow is around the specification. And if you want to go back and change the code, the most recommended way is actually to change the specification, and not go in and manually edit the code. It's like, "No, I actually don't want this to be blue. I want this to be green." Or "I didn't like what you did here. Change your implementation a little bit." You can also do it in real time. If you see it's going in the wrong direction, because you get the chain of thought in front of you, you can essentially hit Control+C and go "Nope, I want you to go in a different direction." So that's kind of how it works. I'm simplifying greatly, but that's kind of how it works.

**Break:** \[18:10\]

**Adam Stacoviak:** You know, it sounds super weird to say this, but I resonate with not editing the code yourself... And the reason why is because the LLM, the agent has this context that is beyond my context. And it kind of has this plan. And so when I start telling it what to do, I kind of derail its plan. And that to me is jarring at first, because I'm like "No, no, no. I still want to be in charge here, I want to have agency." Not to be too punny, but... I find that even a small change I really don't want to do, because I want to tell it what to do. Jerod mentioned agent flow - this is just a term I coined. I think it sounds cool, for one. I think it's the coolest term out there, so...

**Deepak Singh:** Yeah, it is cool \[unintelligible 00:20:22.07\]

**Adam Stacoviak:** So if everybody wants to use agent flow, back off. I'm just kidding. I like it. It's cool. But my flow is not as sophisticated as yours is in terms of like MCP servers and tools yet... It's really just how I think in my brain about the problem I'm trying to solve, develop some version of a spec... I've been calling them just documents. So I've been calling it document-driven development.

**Deepak Singh:** Yeah. They are documents.

**Adam Stacoviak:** They are documents. And it's nothing against the word spec, but generally, in our industry, specs have been a version of a pejorative that it's just kind of like "Ewgh... Do you want me to do that on specs?" I just personally didn't jive with that term. Cool with you all using it, it's just my personal preference.

**Deepak Singh:** Yeah.

**Adam Stacoviak:** But it was not as kind of sophisticated as yours. That being said, though, as I'm playing with Kiro... You know, you're generating this initial document, the spec, which I get, and I've written those specs before... I was in an agile team, I was a product manager, led teams, and I would speak in these terms, like "As a user, I want X" etc. That whole format. And I get that. And then the design document that comes from that is even cooler. That's where I think my brain gravitates most. So that's kind of what I've been generating, that version of a design document, not so much that initial spec that creates this design document... But not wanting to touch the code I thought was really strange at first, until I started to get into the agent's way with what I told it to do via this document-driven, spec-driven agent flow. I just became the architect of the idea, and the researcher, and the viber... I like to call it riffing, really, because I would ask questions about different things, poke holes in the CLI or the API, or "How does this truly work? Did you research that? Is that really based on facts and truth? Here's the truth here", or "Here's an example of how I've hit a pitfall there, so avoid that."

And then we come up with this thing called a spec, or a document, or whatever, and I say, "Okay, great. This thing represents as best as I can think of the idea." And then usually, the last thing I do is I say "Wwhere are the blind spots at with this?" Okay, we've defined this, I think I've got good eyeballs on the spec or the design... Where are the blind spots here? And we'll go back and forth on what those are, and we'll update that thing. And then when you get into that flow, and you say, "Okay, go." And I want to be autopilot, right? Your button says Autopilot, and I kind of like that, too. It's like auto-edit - sure, go ahead; just make the world. I don't want to really get in that thing's way, you know?

**Deepak Singh:** I wanted to call it YOLO Mode, but \[unintelligible 00:22:56.11\]

**Adam Stacoviak:** Yeah, YOLO mode actually -- I mean, I would almost advocate for that, because that kind of makes the tool fun. What we don't want to take away from this process of creating software is removing the fun of it, and making this tedious task of just like writing specs and writing documents. We can't lose that fun aspect of it. So I rambled a bit, but I totally vibe with the idea of not touching the code, not because I can't change one single value, but because I kind of get in its way, and it has this context window... And I really don't want to disturb it, because I've done my job, which is be the architect and the visionary of the idea, and then we've blessed this thing called a document or this spec... And let's just go. And if I get in its way -- it can get back in motion again, so it's not like a total derail, but sometimes you can really jack it up, and you're on a tangent, or I call it a side quest.

**Deepak Singh:** \[23:56\] Yeah. No, so I think you're completely right. There's two reasons for this also. There's a technical reason, which is context is king. Your results are only going to be as good as your context. And especially if you've been in a long conversation or a long session, going in and manually changing code actually kills the context, and you get out of sync. And getting back into sync is just really hard. I mean, even if you're not using structured work, but just documents, giving your instructions, the moment you go start touching the code, you've lost that context completely. So that's one part of it.

I also feel -- at Amazon, we have this leadership tenet for our principal engineers called "Illuminate and clarify." Our senior engineers are very good at illuminating and clarifying a problem. They usually do it with their team or group of junior engineers. I think of what you just described as illuminating and clarifying to an agent, to an AI agent. And I think the metaphor stands. And the better we are at doing that -- because I think it's more art than science right now. A lot of folks are learning how to work with these agents. You've developed your own workflow. I like the name, agent flow. I've seen other engineers have their own flow, so to speak, and I think the thing that we, as the Kiro team, will have to do over time is - today there's a particular flow that Kiro uses. You can do some stuff around it, but you can't go randomly and completely randomly build your own flow.

I think we learn quickly from how people want to build these, because we want to help developers stay in the flow that they like. That's a big part of what we want to accomplish, is keep it fun.

**Jerod Santo:** Right. So there's a couple decisions that you guys made - you probably had to make it pretty early in the process - which I think are interesting to me, the why's behind the decisions. And one of those decisions was it's going to be an editor. It's going to be a VS Code -- is it a fork, I assume? Or is it a...

**Deepak Singh:** It's based on Code OSS, which is the open source framing project underneath VS Code.

**Jerod Santo:** Gotcha. So it's not exactly a fork of VS Code, but it's based on the same foundation as VS Code. It's VS Code-esque. Not really interested in that decision... I think once you decide "We're going to build an editor", then that's a really good decision to just be like "Let's build off of that." But a lot of people are going to the terminal. And I have found, as an engineer, that I've enjoyed using terminal-based agentic tools more than I've enjoyed using the exact same tools in my editor, whether it is VS Code, whether it is Zed... Those are the two that I've been using things in.

And so I'm curious, first of all, about the choice of "Where does the agent live?" And your guys' answer is "It lives inside your editor." Can you speak to that?

**Deepak Singh:** Yeah. So actually, it's interesting that both the agent living inside Kiro and -- one of the nice things is we have the terminal-based agent as well with the Q CLI. When we say 80% of builders inside Amazon are developing code with AI tools on a very regular basis, a very large number of them are using Q CLI. There's a couple of -- because as I said, it predates Kiro. There's a couple of reasons we did that. There's a class of people who just love working with what you would call an IDE. And I think the IDE as we know it, which as a code editor is going to go away... Because as we just discussed, that's the less important part. It's more of a visualization system. So if you look at people doing terminal editors, they will use an IDE or some text editor at some point because they need to visualize, they need to do diffs etc.

\[27:41\] There are some things that we've found even with Q CLI, which are very, very hard. So if you want to build a spec and have a spec workflow to it, that's a much richer interface. And it's very difficult to put that interface into a terminal. We think there will be a lot of folks, especially power users, who will use terminal-like systems, because they give you that freedom and flexibility. It's the classic Vi versus Emacs war at some level. \[unintelligible 00:28:07.07\] the flow that they like. But if you're interacting with an agent, it's not a bad system to use.

We also felt that there was a very large number of people who wanted that richer user interface, and the richer user interface allowed us to try a few things. One was the whole spec workflow thing, that we can try building it inside a terminal; it's going to look clunky and ugly, and it won't work. There was one, and we had strong belief in that. But the whole helping people author an MCP server, helping them author a set of steering files... The whole library of hooks that Kiro has is much, much easier.

The way you would do hooks in a terminal was you would probably have a /hooks button, and you would get a list of the hooks that you wanted. But if you had 500 hooks, you'd have to scroll through all of them to find them. In a visual interface, that's much easier. You can have a library of hooks that only your team cares about, and over time you may have a library of hooks that, in fact, your company may publish. It's like, "This is the code review agent that we're going to use. Here's an MCP server that goes with it. Here's a steering file that goes with it." All that context is shared.

So there's things you can do from a user experience perspective that are just hard in a terminal. If all you're doing is just driving an agent with prompts, terminals are great. I don't think the IDE gives you any advantage. But within an editor, if you're working on this rich thing that you want to visualize diagrams, work with multimodal inputs, have these other affordances that you want to make part of your context, it's a more powerful, more visual interface to do it. You're not just prompting at that point of time. You're doing a lot more than that. But I agree - if you're just prompting an agent, CLIs are amazing.

**Jerod Santo:** Okay, good thoughts. The second decision that you all made - at least I'm assuming you made this - was "We are going to be..." I guess not model agnostic, but "We're going to pick a model that you're going to use, and then you can change that model..." There's different angles of this. Like, obviously, some people have their own model they want you to use, like Anthropic ones, you know. The model behind the agent is like a huge part of the system, right? And so Kiro, as I downloaded it, it selected Cloud Sonnet 4... And there's a dropdown selector. For me, I can't pick any other option. I'm assuming I could configure that to pick different options.

**Deepak Singh:** Not yet.

**Jerod Santo:** But just your thoughts around model selection... I mean, it's a big part of it, because at the end of the day, you are wrapping a model that you have to decide what to do with that.

**Deepak Singh:** This is a bit of a philosophical debate we have within ourselves as well. So the reason the dropdown is there - there was a time that Kiro allowed you to pick between Sonnet 3.7 and Sonnet 4, because sometimes you run into availability issues with Sonnet 4; there was just not enough capacity, so you could choose Sonnet 3.7 and do your work there. But that problem went away, and nobody cares about Sonnet 3.7 when Sonnet 4 is available. You could always pick Sonnet 4. So we took that out.

**Jerod Santo:** Okay. So that it's not going to say GPT-5 next to this, ever.

**Deepak Singh:** No, but if you download it now, you will get two options. The default model -- I won't say model. The default agent in Kiro is something that we call Auto, and I'll go into this in a second. I'll actually go back to Sonnet 4 as well. What you're using in Kiro is not Sonnet 4. You're using an agent that uses Sonnet 4 for the core thinking part of its work. There's a set of scaffolding that goes around it; everything from your system prompts, to the way you handle caching, to the way you are handling any guardrails that might be in the picture... Sonnet 4 -- let's take two editors; they both say Sonnet 4. They're not equivalent. It's how you drive context into the LLM, and the scaffolding you have around it that makes it useful, or less useful, or more.

So in some ways, you could argue that saying Sonnet 4 is also almost a comfort level for people saying "I've got Sonnet 4 inside it", because it is an agent that's doing the work. It happens to be an agent that is built on Sonnet 4. There could be pieces of it, and actually that's true for many agents out there, where for saying hello I don't actually want to use Sonnet 4. That's a very expensive hello, as an example.

**Jerod Santo:** \[32:23\] Yeah. Well, I was just thinking about that, because you -- I didn't want to call it a wrapper, because that seems like that's just belittling the amount of effort that you all have done. But basically, in wrapping a model like that, you're making a pretty large bet on the provider of that, and... Choosing them, versus being like "Well, you can use Gemini, you can use ChatGPT, you can use Anthropic."

**Deepak Singh:** The good news is because we have a dropdown, if we want to go in that direction, that's fine. Now, where we have decided to go, at least for now, is an agent called Auto. Auto is using multiple agents underneath the hood. We can choose whichever largest frontier model we want to choose. Right now, we tell people - it's there in the documentation - that one of the models that we use is Sonnet 4, because that's a model that we know well, we understand well. All our agents use Sonnet 4, Q CLI also uses Sonnet 4... So we have all the scaffolding in place and we understand how it works. But we want more -- there's a number of ideas we have around how we handle the model based on the tasks we have, including maybe some specialized models for certain things.

So Auto is an agent, it's not a model. It uses multiple models underneath the hood, one of which happens to be Sonnet 4. And over time, we may have different categories. Sonnet 4 sets the bar, in some ways, for how good the results need to be.

The way we think about it is our quality of results with Auto have to be at least as good as the agent that uses Sonnet 4, the one that says Sonnet 4, but we want to do it at a fraction of the cost and hopefully better performance. That's a mental model. But again, we haven't taken \[unintelligible 00:34:06.10\] because I think this is a philosophical debate within the community, within our team, on what's the right thing to do. Because the funny part is, if you give people five agents, the chances are that most of them will just pick the one that they think is the best anyway. So that's where we are right now. Where the future goes, we'll see.

**Adam Stacoviak:** Choosing models as a -- I think there's a cost perspective there, right? And if you remove the cost perspective to the individual user... So I guess the context here really is like we're drastically different types of developers, in terms of like, I'm a solo. I'm not doing it as a team, even though Jerod and I are both here. I'm not working on like Changelog web proper stuff. It's like scratching my own itch, CLI type things... Just really learning and exploring. And so a lot of my context and even my preferences are largely based around a team of one. Whereas Kiro is really a team of many, and so the choices you made were really around teams, and context sharing, and things like that. And in a world like that, you usually have some version of an enterprise cutting the check, and there's less concern about ultimately the costs of an agent and how it may impact you. Obviously, you've done your cost analysis, but that's largely something else, usually.

**Deepak Singh:** Yes and no, because I think if you go directly with a cheaper model, the challenge is people will do that, but then will get very frustrated with the quality of the output. What I care about is the quality of the output. And that works for individual developers, that works for your self startup that's funded by Y Combinator, it works for the enterprise. I actually think, in some ways, enterprise developers work under more constraints on how creative they want to get than developers in other places.

\[35:59\] So the way Kira thinks about is, the customer that we want to really make happy is an individual developer. That individual developer could be a solopreneur, somebody sitting at home and scratching an itch, somebody sitting as part of a small startup, maybe the technical person in a two-person startup, for example... They could be a developer at a startup that we all know, one of these series D unicorn startups, or it could be somebody at Delta, right? ...to pick a big Q developer customer. All of that is possible. So there's a few things that we did in Kiro that point to that. One is that the default login system in Kiro is social. You either log in with your Gmail, or you log in with your GitHub login. It's not you need an enterprise system. That's a big part. Again, going back to decisions that we made, a very conscious one - it's actually one of the few, if not only products that have been built by an AWS team that you can sign up with Gmail and have the ability to pay. You don't need an AWS account. In fact, you don't need anything. You need no AWS account, you don't need to worry about AWS permissions. Zero. There's no requirement at all. If you happen to be an AWS customer, there's ways you can get signed up.

So that was a big part of it. What we did decide to do was assume that people want to write code that's going to -- a big part of the idea was "Yes, there's a lot of fun projects out there that people write." I'll call them toy projects. Again, I'm being sort of general. Projects that you do to learn, etc. and you can do them with Kiro. You can vibe-code with Kiro, just like with any other agent. But our assumption was people want to take code and actually do something meaningful with it, and grow it over time, and evolve it over time. So that was very important, and it is also true that a lot of people do that as part of a team. So we wanted to keep that in mind. Because the team could be two people, it could be a two pizza Amazon team. But the fundamental assumption was that the person signing up is an individual somewhere, whether they're at home or in a company. And I think finding that balance between the fun part - I forget which one of you mentioned, you have to... Like, development is fun. You can't take it away. Especially developing with AI agents. You don't want to make it like a boring, put in a bunch of checks and balances because you assume it's going to be in the enterprise. And I think that's kind of where we are right now. We'll see as it grows and where people push us which direction we end up in, but there's a lot of white space right now in this whole area.

**Adam Stacoviak:** We're just all vibing our way there.

**Jerod Santo:** We're getting there eventually. We'll get there eventually. How many -- are there AWS, are there two pizza teams shipping code with Kiro? I mean, I know you guys have a big wait list, but you have a great internal team that you can just test stuff out on and say "Hey, use this sucker."

**Deepak Singh:** Well, the best example is the Kiro team. The Kiro team has just been using Kiro from the day Kiro started.

**Jerod Santo:** Really?

**Deepak Singh:** So they built Kiro in Kiro. I don't have any stats on it, but the one use case we mentioned is this one engineer who wanted to ship a feature, a notifications feature in Kiro, and he did it over a day because he wrote a spec for it and then the agent wrote the code, and maybe somebody else shipped it... But in general, part of one of the tenets we had in Kiro, and I have it for a lot of my teams is you want to build it almost for yourself. Developers work best when they're building things that make them happy developers... And your development team builds something that makes you happy. Then, of course, you give it to a bunch of customers and see whether their happiness and your happiness happens the same way; developers are picky people. And that's when you start making the choices.

\[39:51\] The spec editor in Kiro actually evolved significantly, because the way the team was using it worked for them, but as we gave it to other people, it didn't work quite as well. And we almost rewrote it -- I mean, we did rewrite it thrice, I think, in the user experience, to get it to a point where the majority of our customers really liked the experience; most of the people in our beta cohort. And so that's one.

I'll give a more general one, which is we are at a point inside the company which actually helps us a lot learn behavior. It's that most developers now, 80%, as I said earlier, are using AI systems to build code, where we have now got significant projects which are of significant complexity, which are 80%, 90% written using AI. So we are moving quickly in that direction.

**Jerod Santo:** That's really cool. I would love to see some of your guys' specs; like, from the Kiro product team. Not open source the whole thing or whatever, but like "Here is a large production code base that was built with spec-driven development. And here is a bunch of specs that you can look at to see what we've ended up with as we've built out this code base."

**Deepak Singh:** That's a really good idea. We've also -- I mean, some of the folks on the team are toying around with the idea of can you have a spec sharing... You know, just a place for people to share specifications, which include not just the spec files, but also steering files etc. Because they all go together. In the end -- I think this is what Adam was saying... Context is not as one-dimensional as people like to say it is. It includes a spec, it includes a bunch of other things. Your prompts, your steering files... Is there a package way of sharing all of that? You have agents.md now, right? It's a very powerful sharing mechanism, because it's a standard format. So I think there's going to be interesting evolution even in that space. And as you said, I think the community is sort of converging into the idea of specs. It's whether they are doing it deliberately, or sort of everyone's heading there... So we are very excited to be part of that, because we've had this religion for a while.

**Jerod Santo:** So inside of QKiro, for our listener, the left-hand side, when you have the Kiro panel open, there's one, two, three... There's four subsections: specs, agent hooks, agent steering, and MCP servers. So Deepak, how many of those produce artifacts that end up checked into your source control? How many of those are trackable things?

**Deepak Singh:** Yeah. I mean, they're text files, you can check all of them in.

**Jerod Santo:** All of them are.

**Deepak Singh:** They're sitting on your file system. Yeah. Everything in Kiro is a text file on your -- I laugh because for me they're on my right side. The way my brain works, I've moved all of them --

**Jerod Santo:** Oh, sorry.

**Deepak Singh:** But it's different. By default, I think it's on the left.

**Jerod Santo:** This is the default. I just popped it up open and --

**Deepak Singh:** Yeah, I moved everything to the right. I like having them there. There's a reason workspaces are configurable, because we're all picky.

**Jerod Santo:** Yeah, totally. And our own way is always the best way, isn't it? Like, my way is better...

**Deepak Singh:** Always.

**Jerod Santo:** Yeah, you can have yours, but mine's the best.

**Deepak Singh:** Yeah. But they're all markdown files in the end, or JSON files. They can all be checked in. And that's the beauty, that in the end Git is your source of truth.

**Adam Stacoviak:** It's so wild how we've come back to markdown files and JSON files... I mean, honestly, you can have data serialized into JSON... You can read it as a human; it's not that fun, you can still do it... But you can still build an interface out of that through a script that says "Turn this data into human readable", or "Markdown it", essentially. And those two different document types to me are key.

One thing I'm not seeing in this, and tell me if this is something that's on your roadmap, is I feel like you've got the initial spec, you've got the design, and you've got some version of a task list that takes you to an implementation. Feature is done. Or feature is in quotes done; it hasn't been QA'd, it hasn't been deployed... It may spike an incident, there may be a bug...

\[44:06\] And something which I really feel like is what I'm calling the agent flow part of it is it's not just this initial spec and the feature that gets written, it's the bugs that may come after it... I started to do things called builder logs; they're blogs, but I've enjoyed reading what the agent wrote about the feature we delivered... Because it helps me learn. So I'm using it as a means to be a better illuminator and clarifier, essentially. You know, how can I better understand the system I'm defining? And the builder logs are part of that, incidents are part of that, bugs are part of that, knowledge-based articles... You know, what do we learn as a result of this exploration? Or even in this little riff, or this vibe; not even writing software, but what do we learn from poking holes in the API or the CLI, or what really is or is not there? What really is or is not possible? When we have to go from API to SSH, because the API lacks an interface to certain parts of the system, then we actually have to go in via SSH and sniff around, or whatever. So all these little weird things that happen as you build software is largely part of like bugs, incidents, knowledge-based articles, builder logs...

**Deepak Singh:** Yup.

**Adam Stacoviak:** Do you have plans for the full ecosystem beyond this?

**Deepak Singh:** I'm glad you asked this question. I will say the way we are thinking about it right now is where hooks come in. Because I don't think we know exactly what's the right way to do it. Like, Kiro will summarize what it's done for you and say "Here's all I did", right? You can take a look at all the actions it took. That you can go find. Our current mechanism for doing that is the hooks part. Hooks is a great way for people to hook into - no pun intended - into Kiro. The hooks can come from you, they can also come from a third party, by the way. It's a great integration point, because it's easy for somebody else to write a hook...

So for example, you want to take a code and document it properly, create a -- let's say you're writing Java code and you wanted Java docs created, or something like that. I'm not a Java guy, so I have no idea how that works. But you wanted to convert that into a really nice documentation that you can upload onto a website, and maybe even publish it. You could create a downstream hook that is essentially a documentation agent or another agent that takes a look at it and converts it into documentation. Maybe somebody else has written it, there's another startup or some open source project that does it... You can plug it into Kiro as a hook, and that will do it automatically. So you still don't have to drive it. The good news is that the hook is using the same context as the rest of the project. So the context gets preserved. So that's one example.

On the bug side, one of the things I would love to do actually as learnings is "Can you convert your learnings into a steering file that can then be used as a feedback loop?" The good news with agents is they're really good at reflection. You give them error logs and feedback, they'll get better and better over time. How can we do more there? It's not something that's built into Kiro, but you can imagine that that's something that ends up happening.

And I think what we learn over time is what are the kind of hooks that everybody does? And that makes -- to me as a product person, that's a capability that we should probably just take care of within Kiro. But over time, we want people to be able to extend it in the ways that they like and learn from that.

If you look at all the successful things out there that people enjoy using... I'm a heavy Obsidian user, for example. The whole plugin Obsidian extension communities is a big, rich community that's out there. But there's a set of core plugins. And what's the core versus what comes from the community is something that we learn over time with hooks. It's early right now.

**Adam Stacoviak:** It is early. So the hooks essentially is your way to allow yourselves to operate within a certain known user experience, a certain clarified way that you expect Kiro to be used, but it allows folks to extend it beyond and add to it that you would not maybe otherwise want to prescribe, because it's white space, as you mentioned before. There's a lot of vibing happening. I think we're all learning too, as we do this vibe code type stuff, and allowing the agent to write all of it, versus stepping in, even if we have the technical abilities to do so... How mature is that? Is there anything out there in the hooks part of it?

**Deepak Singh:** \[48:30\] The mechanism is fairly mature. There's a bunch of hooks that have been written by our beta customers and early users for various things. One of my favorite hooks that's out there -- the classic hook that's actually part of the sample hooks in Kiro is a hook that translates dictionary. If you change your English language dictionary, it'll go and update every other dictionary for you. So for localization -- it's a localization hook. Localize my code, basically. It's the kind of thing that people hate doing, but you can do it automatically, and if you make it a hook, every time you check in code, it'll automatically go and update all your dictionaries for you.

I know when somebody else is writing a game in a JavaScript framework that they were not very familiar with -- I think they were writing it in Vue. They didn't know Vue very well. So their Vue code -- and they didn't know if the agent was perfect. They had an optimizer that ran every time they checked in code. There's a lot of things that you can do. I've seen people hook it up into code review tools... So I think that'll happen, and I think part of what we need to figure out is what's the right mechanism to make it scalable, to use that term.

The bug thing is kind of interesting. I'm going to go outside Kiro... In CloudWatch we have -- and by the way, you can hook that into Kiro quite easily. We have an agent which you call incident response, that every time an alarm gets triggered, it starts creating hypotheses on where in your system you have an issue that the alarm may have been triggered. You can probably convert your root cause into a spec. I'm speculating. It's probably not that hard to take "Here's my root cause, here's where the code -- this is why the issue happened." You can create an issue -- that's what people will do. They'll file a ticket to do it. But you can even create a spec that says 'This is the problem that we need to go solve." Feed it back into something like Kiro. And with hooks, you should be able to automate something like that, is my guess. I haven't tried. I don't know if anybody else has. But these kinds of workflows will become more common.

**Adam Stacoviak:** What's interesting about this, hooks, if I understand it correctly, is there's things that as you're doing something with the agent, these hooks are sort of like side things you want done, like a formatter, or as you mentioned, a localization thing... Maybe you're even running a build. And in the case of, say, Claude Code, I'd have to open a new tab and instantiate a new version of Cloud with brand new context to not be blocked. So I may do something that a hook may do, but I'm doing it, because there's no concept of hooks in the Claude Code world... That I'm not using at least. Maybe an MCP server can do that, but still, you're gonna have that context window or that active window you're working in consumed by this kind of like a side task... And you're kind of blocked. You're blocked until you can do something else. So that's kind of cool, how you've solved that problem there.

**Deepak Singh:** Yeah. It's something that the team did pretty early... I mean, I think one of the nice advantages of building a tool and using it to build your own - it's somewhat meta, but that's kind of how it works... And hooks came out of some of those ideas, because "Hang on, we need to do that." So it was a very early feature in Kiro.

**Jerod Santo:** Yeah, it seems like it has tons of potential. What are the timings of the hooks? When can you actually fire off a thing, or...? I'm sure there's a life cycle of some kind.

**Deepak Singh:** Yeah, at least the way it is today - it's like a watch API on a file system or a repo. It's looking for some change.

**Jerod Santo:** Okay, so when files change, it does things.

**Deepak Singh:** Yeah. It's an if-this-then-that kind of thing. If this happens, do it. But the key part is what Adam mentioned, is it retains the context of the project, which is very, very important. It's not gonna go randomly start from scratch and start it; now you have to feed it all the context back in. It already has all the context, so it's gonna work within that context.

**Adam Stacoviak:** \[52:29\] Yeah, I feel like I'm just a context mover and saver, is all I am. I wanna keep the context, I wanna move the context, I wanna save the context... And then in the case of Claude Code, when that infamous auto-compact comes around, I'm like "No!! My gosh, please! Stop destroying my world", you know?

**Deepak Singh:** Auto-compaction is such an interesting thing, whichis necessary, because you want to conserve tokens, but it kills your caches, it kills your context... And all kinds of challenges.

**Adam Stacoviak:** Well, then you -- you know, as a user, I just feel like it's a ticking time bomb constantly. I just feel like such anxiety... I'm like right in the middle of the best part, we're finally to the nugget... You know, we've riffed back and forth enough to finally get the clarity, and it's like, "Okay, draft or update this spec." Or in my case, it's a PEP. I've actually borrowed the Python way, and even the acronym too, PEP... But I call mine Project Enhancement Proposals, versus Python Enhancement Proposals. But by and large the same concept, where you've got this initiation of whatever it might be, it's got statuses and all those things... And that's what seemed to work for me, updating that. And I can't do it, because I've got to wait for the auto-compact to happen... Or then it comes back and it's like "I think I was doing this based on what this history says", but then you kind of reset the zero. I understand what happens, but it's always like this anxious moment as a user to map around.

**Deepak Singh:** Yeah. As you were talking about it, I felt like driving an electric vehicle and having range anxiety... \[laughter\]

**Jerod Santo:** Yeah, similar.

**Deepak Singh:** It feels like that.

**Adam Stacoviak:** It's like, how many miles till I can get there to charge up? Yeah, exactly. I think eventually that will get solved, and I understand technically why it's there... But as a user, all it does is basically give me anxiety. And then I've got to work around it, and moving context, and saving context, and... I mean, I've even started to save chat sessions, because you can do /export, copy to your clipboard, or move it somewhere and kind of save at least the chat history so that you can read back from it. You may not have the full actual context that was saved, but you at least have some version of a map of how you got there.

**Deepak Singh:** I'd be very interested when some of the new Kiro builds come out. We've got a couple of enhancements coming out this week in the clients... I'd be very interested in you running long-running sessions and seeing what happens... Because we've tried to do a lot of work in managing that context, in managing that and making sure you get the right behavior out of it. It's not perfect, but I'd be very curious to see your experience, whether the range anxiety gets mitigated or just gets a little bit better.

**Adam Stacoviak:** Let's talk about that then, because I want to talk about stack... Because my stack for what I'm doing is pretty much any agent CLI. And Jerod, you'll be happy to know that Zed is my daily driver now. I've thrown every other possible editor to the wind, because Zed obviously is fast and beautiful... And the only thing it lacks is some of the things that Sublime Text still uses, but... I digress from that point there. But I'm using some version of a CLI in the terminal, and then a separate editor. And I would not call Zed an IDE, although it has IDE tendencies... That's my stack. And the reason why it's my stack is one, it's accessible to me... And I've just learned about Kiro, and just got access to it... But even with Augment Code, I used it inside of VS Code, and me as a user, as a visual person, as a designer, VS Code is great, but the text is small, the windows are spaced out...

\[56:16\] What I like about the Claude Code, Augment Code, AMP Code CLI flows is that the user experience of using them - it's a larger text. I can see it better. I feel like I've got more clarity with... With the vibing, for a lack of better terms. And then I still have this really awesome, Zed is the best editor, to still go and review and look at the actual code, go around the entire documentary that is the project...

To me, while I would love to use Kiro, the thing that would hold me back is that you're in this VS Code-like world, and it's just less than desirable, I would say. It's not bad, it's just not my preference.

**Deepak Singh:** Yeah. I think we talked a lot about back in the day building something completely new, like Zed did. I like the fact that they call it Zed and not Z... Or working off Code OSS... And the reason we ended up -- it was very clear to us, because we used to have a plugin, a classic VS Code plugin. We still do, which is on the Q developer side. But it became pretty clear to us from a UX affordance side that was going to be a very, very difficult place to be. We wanted to do things in the user experience that as a plugin were just hard. So having code OSS as a starting point was great.

I think the interesting point is will we stay with code OSS, and at the end you fork it so much it becomes its own thing... I think that's to be determined. There's a lot of that. One of the other advantages of using code OSS is there's so many people using VS Code, and they all have their plugins and extensions, and just pulling them into Kiro to do things makes their life easier, as opposed to starting from scratch. That was actually probably one of the biggest reasons that we stuck with the Code OSS part. But the goal was always making a UX that was optimal for the flows that we want to get to.

And I don't disagree with you, I think UX is also a very personal thing, and how it works... I'll always go back to "I just like, personally..." I never liked using code editors. I liked using text editors. But I'm not a really good programmer either. But I think with Kiro -- because now you're not in code editing land, you are 'vibing with an agent' land to create specs. Our user experience is going to keep growing, and how can we make that a true, rich multimodal experience and keep evolving it? Where it ends up again, I don't know, but that's the goal.

But actually, what you said, the stack part is very important. I do feel like most people will end up using a) what I'd call a more rich experience, which you can call an editor, an IDE, whatever... I almost feel like calling an IDE is doing the thing a disservice right now. So we call it Kiro IDE, but in my head it's like a desktop product, which happens to have a code editor inside it. And a terminal-based product, like a CLI. And I think those two - I mean, because it's VS Code, I actually run Q CLI in my Kiro terminal as well. I'll often also have a separate shell open all the time.

And one of the ideas I think that's going to be interesting in how it evolves - you see that a little bit with some of these CLI things that now have editor plugins, where you're using the editor just to visualize what's happening... I think there's going to be some very interesting, again, UX evolution of how terminal-based agents and richer UX agents evolve over the next several years.

**Jerod Santo:** \[01:00:07.16\] So progress with Kiro means the VS Code side, the code side, gets kind of tucked further and further away, and the spec editor and this immersive, interactive building of a specification, and then some sort of end product kind of continues to level up and become more and more primary. So perhaps Kiro down the road - you know, maybe you don't have to tell people that yes, you can look at the code underneath if you need to.

**Deepak Singh:** I remember having a debate with the team and "Do we even need a code editor in here?"

**Jerod Santo:** Yeah...

**Deepak Singh:** But they won that battle. Currently so.

**Jerod Santo:** Yeah, I think right now you do. My question for you is, with the current state-of-the-art models, do you think that world that we just described, of Kiro as this interactive app building thing with a code editor hidden in it - do you think that's possible today with just better agents, Auto getting better and Kiro getting better, and leaving all else the same? Do you think we can get there? Or do you think the underlying models also need to improve to bring us to where you wanna go?

**Deepak Singh:** Oh, both. Both.

**Jerod Santo:** It wasn't a both question, Deepak. You can't say both. That's cheating. \[laughter

**Deepak Singh:** I'll be blunt.

**Jerod Santo:** It's either or. \[laughs\]

**Deepak Singh:** Fine, touche. I think we need at least one more generation of models. There are probably models out there that can get you there, but they're really expensive. And their context windows aren't right... There's a lot of limitations right now. I mean, I say that given the fact that over the last year the models have become so much better.

**Jerod Santo:** They've gotten a lot better.

**Deepak Singh:** Some of the things that we're doing today, you could not do a year ago.

**Jerod Santo:** Yeah, for sure.

**Deepak Singh:** You just couldn't. I do think there's one more generation of models before we get -- I still feel like to write a full application... Not a simple CRUD app, but a proper distributed backend... And we have examples of people who've done that, but it requires a lot of skill on the part of the developer to be sure that you're in the right place. I'm not saying that's a bad thing. I still feel like the people who are going to be most effective using these tools are skilled people. There's a lot of folks who believe and hope that you can give somebody like me and somehow make me a better programmer, developer. That's not happening. Can I write applications more quickly and easily? Absolutely. I can prototype better than I ever could. I've written more in the last year than I had in the five years before that. And mostly it's me trying to make a molecular viewer for myself, because that's what I like doing.

**Jerod Santo:** \[laughs\] Have you gotten one done?

**Deepak Singh:** I've gotten like 15 versions of it... That's my kind of test pet project.

**Jerod Santo:** Do they work though? Can you ship them?

**Adam Stacoviak:** A molecular viewer, is that right? That's cool.

**Jerod Santo:** A molecular viewer.

**Deepak Singh:** I used to be a bioinformatician, so I like my molecular viewers. That's my standard test project.

**Jerod Santo:** Would you ship any of those -- you've got 15 of them. Would you ship any of those as products?

**Deepak Singh:** I have no idea. I think it works, but I'm not sure if it works for everybody.

**Jerod Santo:** Right... Okay, keep going.

**Deepak Singh:** So there's a level of skill and understanding that you need to get the maximum out of these agents that we have today. But as these reasoning models get better, as we start adding new techniques to it... For example, there's a fun term these days called Neuro-Symbolic AI, which is basically bringing mathematical techniques into generative AI systems.

\[01:03:45.13\] So we have a very strong Neuro-Symbolic AI team over here... By the time this podcast publishes, this is probably going to be well-known news, but Joe Hellerstein, who's well-known in the database community, he has a project called Hydro. Hydro is an open source project to basically verify the correctness of a distributed system written in Rust. We want to bring those kinds of techniques and build them into the spec engine of Kiro. So as you're building software, you don't need a human at the other end to verify correctness; that you can verify correctness using a mathematical model, in this case.

**Jerod Santo:** That'd be a game changer.

**Deepak Singh:** I think those are the kinds of techniques that take us to the next level. We're not there yet, but I think it's going to happen within - I don't know if it's six months, one year, two years, three years... But it's gonna happen.

**Jerod Santo:** Yeah, that'd be a game changer, for sure. It seems like everything's 80% solutions right now; or maybe even better than that, maybe like 95%. And then like that last mile is where you need to be a senior engineer to actually recognize and finalize the last mile of delivery on all of this stuff. And it's limiting --

**Deepak Singh:** There's an intuition that they have that you just don't get otherwise. And as I said, to the question you specifically asked, I would say "No, not yet, but we're not that far away."

**Jerod Santo:** Let's talk about pricing. This thing's a product you all are trying to sell... How do we buy it?

**Deepak Singh:** So we changed our pricing twice already.

**Jerod Santo:** Okay.

**Deepak Singh:** So this is a pricing that we announced - and I'm going to get it wrong - last week, and it'll probably go fully live, we'll start charging people in sometime in the next few weeks. It's a classic per user pricing. You get a free tier... You actually get a free trial, because the free tier is mostly just for vibe coding. The free trial gives you the full experience. I think we put you into the pro tier for about a month, and you can play around with it, and then if you like it, you can actually start paying, or you can flip back to the free tier... But there's a \$20 tier, a \$40 tier, and a \$200 tier, that give you 1,000, 2,000, and 10,000 credits. There's a credit system.

The way we talk about it is if you're using the Auto model, you will get those -- credit consumption for Sonnet 4 is 1.3 times the credit consumption of Auto. You just get a set of credits, and as you can see, if we gave you a selection of some kind, we would have different credit consumption rates based on the cost of running those models... So you get two agents - an auto agent and a Sonnet 4-based agent. The Sonnet 4-based agent uses credits 30% more faster typically, because it depends on the prompt and the -- LLMs aren't deterministic. But for the most part, a 30% more than faster rate of consumption than the auto model. And we also have overages.

Then another thing that we did was we added the idea of fractional credits. So when you go, you can go from 1 to 1.1. You don't go from one to two in these step changes. We've found people were going through their credits a lot, because they used a little more than the boundary, and then they would get sent to the next one. And that meant that you just consume credits really quickly.

The other thing we have is overages - so if you're in the \$20 plan, you don't need to go to the \$40 plan if you just want to spend \$21 for the project you have in hand. So there's overages there, and then the 201 assumption is most people will rarely get there, but we know there's some people who will, because they have.

But we spent a lot of time in trying to optimize that credit consumption, and at least in our early testing it looks like you're not running out of credit so quickly. We add in the middle, separated out, the amount of usage, the way we were charging for specs versus vibing, and people found that too difficult to wrap their heads around, so we've combined it into a single credit bucket.

**Jerod Santo:** Gotcha.

**Adam Stacoviak:** I'm still confused.

**Jerod Santo:** \[01:08:10.21\] You're still confused...

**Adam Stacoviak:** I'm still confused.

**Jerod Santo:** Yeah, it's probably simpler on the webpage.

**Adam Stacoviak:** Well, I don't even mean your description of it. I mean just generally, because I think AMP Code and Augment Code, they use messages as their terminology, whereas you're using credits...

**Deepak Singh:** That's what we used before. We used credits.

**Adam Stacoviak:** And how that maps to usage is sort of like a black box to me, because -- I guess in those cases... What I learned about AMP Code when I talked to Beyang Liu, CTO of Sourcegraph - he helped me understand how because I had a larger context window, it was actually consuming more credits... Which I thought was like "Well, that's convenient for you, because obviously I want context", and so I'm burning faster. It's super unclear to the user... And I'm like "Gosh, you're just super expensive." He's like, "Actually, you're just holding it wrong." I'm like "Well, I'm not actually holding it wrong, I'm just holding it, period. I don't know how I'm holding it."

**Jerod Santo:** Right. "How do I hold it right?"

**Adam Stacoviak:** Right. So this mapping of usage to messages, to credits, to me -- and it's not your fault. It's just... It's hard to understand.

**Deepak Singh:** It's tricky. So one of the things you've gone back and done is - because it became pretty clear that's what folks wanted - was actually show you real-time usage. I don't know if we'll have it right off the bat, but I know we are working on it... We now show you, as you're using it, how your credits are getting consumed. Where we want to get to, and we'll get there pretty quickly, if not in the next couple of weeks, is actually showing you how a particular thing that you did, what kind of credits it consumed. Because to your point, consumption of credit, how much you're using is not just about your prompt. It's not even about the context window. It's about tools. If the LLM decides to use 200 tools instead of five, it's going to use much -- it's going to use more credits.

**Adam Stacoviak:** That's the danger of MCP servers. They're amazing, but it also enlarges your context window, too. So the more tools you use from those servers...

**Deepak Singh:** Yeah, if you preload your project with 5,000 MCP servers, you'll run out of credits in like five minutes, because that context will get so large. I also think as a community, we need to start becoming much better at educating people on best practices.

So I think part of where this will end up doing is you'll end up having really, really nice -- I won't say really nice, but mechanisms to understand what's the optimal way to set up a project, how do you do things that you always want, versus bring them in as you need it, showing you the right visual cues... And the other problem is - and I'll go back to tokens here, because in some sense that is the currency. A token in one model is not equal to the token in another model. Tokens are also different. People put token weights etc. on there, but that's a heuristic.

So I think the thing that people are struggling with is how LLMs work is not deterministic by the way people's brains work. How things get consumed and cost accrues... And quite honestly, I think you're seeing the entire industry deal with it over the last six months, in different ways. This is our way. We think it's going to work for what we want, or what our customers are going to do, but a lot of the responsibility is on us to be very transparent about when you submit a prompt and something happens, you at least get a sense of "This is what this takes." And if you have different agents, the fact that they behave differently, you can make decisions based on quality and speed, on whether it's worth -- you may want to go with the more expensive agent for whatever reason, but you have to know why. And I think that's going to be -- and that's hard, but that's what we're trying to do.

**Jerod Santo:** \[01:11:53.25\] Well, it's certainly still the early days, I think. I mean, I think this is evidence of the trailblazing that is going on, and just the figuring out of how it all has to work, and how it should work, and then educating ourselves on how to hold things optimally, not wrong... And picking the correct model, or having a model picker who's orchestrating behind the scenes, like where you send any particular prompt to to save money and speed... I mean, it's all very much the land of trailblazing, isn't it? I mean, this does not sound figured out, by any means.

**Deepak Singh:** Yeah. I think the other thing is how people use these agents and how they get success out of it is sometimes learned only after doing it. You don't before know "This is the best way to use this agent to be successful." The whole idea of what became specs and these memory banks and prompt libraries and steering files - I think this is the equivalent of trying to learn how to walk falling down, trying to learn... Again, it's almost like your first baby steps; that's how you learn. And I think we've gotten to the point where we are, not because all of us were smart and knew what we were doing. I think as an industry, we are constantly learning from people's behaviors, how they use these things...

Inside Amazon we have this power user Slack... I get more understanding of what's the best way to run an agent because of people who are using these agents in anger every day, and learning better and better ways to use them. And they come up with things like agent flow, and that gives product people product ideas.

**Jerod Santo:** Right.

**Deepak Singh:** But that's just us. I think the whole industry is doing that. And so it is early days, but it's also a lot of fun...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** That is the hand of innovation, is using things in anger.

**Jerod Santo:** That's right.

**Adam Stacoviak:** It creates itches that you scratch, and next thing you know you're doing something completely --

**Jerod Santo:** You're innovating.

**Adam Stacoviak:** Yeah, you're on the edge there. I'm gonna mention something that's slightly dystopian, even at this close to end of the sho --

**Jerod Santo:** We almost made it through without any dystopian -- yeah.

**Adam Stacoviak:** Well, are you guys both familiar with the idea of a toll booth?

**Jerod Santo:** Of course.

**Adam Stacoviak:** The way to get rich is to create a toll booth. Right?

**Jerod Santo:** One way.

**Adam Stacoviak:** Well, yeah, sure. One way. Well, by and large, if you look at most of the way people develop wealth, it's some version of a toll booth, in metaphorical terms. It could be real estate - that's a toll booth, because you need somewhere to stay. I've got the toll booth, you want to stay? Boom, I make my money. Or in the case of something like this, I'm thinking of it like - the future of software development. I see it all going this way. We all see it going this direction. And for a while there, the cost to be a developer was your ability to hold something in anger, maybe have a license for a code editor, or in the case of Vim, for free; it's open source. The machine you had to buy - there was no toll booth in front of your ability to create and innovate. The toll booth was maybe the books, or the education process, or the schooling required, things like that. But you could bypass those things if you were smart enough to learn on your own and just avoid the toll booth altogether. And I guess what I'm struggling with as we're in this conversation is maybe just the fact that if this is the way of the future, what a massive toll booth there is in front of the innovation that drives the world. And I'm just not sure how I feel about that right now.

**Deepak Singh:** Yeah, I actually think it's the other way around... I'll give you some examples. Maybe there's a toll booth, I don't know. But the way I think about it is there are things happening where the cost of doing that thing is very, very high. Maybe I am a semi-technical founder, and I'm busy spending time looking for a deep engineering team, because I can't even build a prototype, because I'm not technical enough to go do that. I have an idea in my head, I can write some JavaScript maybe, but my idea requires some heavy-duty backend stuff, and I have no idea how to do it.

\[01:16:12.15\] In theory - and I've seen enough examples that this is possible - you can do that on your own, or maybe with one person to do much more work. Once you have that, you can go further. That's one example.

I've also seen people who've had a project that's been sitting on the back burner for a decade, because it is something that they've built -- it's an open source project, they've got a day job, and they don't have the time to go and evolve that open source project, because it takes too much time. They don't wanna spend their weekends doing maintenance of an old thing, maybe. Or you have a backend that's not scaling, and you need to change it, but the cost -- you know you need to change it, but the cost of doing it is like 20 people and a year and a half of development, if you did it the old way. I've seen enough evidence now in all three cases of people building using these agentic development systems, going and tackling those problems.

The first one's an obvious one, people talk about it all the time; that's a founder thing. The second and third one, I think is where the magic lies, which is you are doing things now that you would not have done before, which results in better code, better user experience etc. because your barrier to entry and ability to do it is low enough that what you thought would take you two weeks is now gonna take you a day and a half, maybe even less. What it would take you 20 engineers and a year and a half, you can now do in much shorter time etc. My favorite example is actually of a team that does sprint planning every four days instead of two weeks, because they were finishing their backlog that quickly...

So to me, that's -- I don't know if you'd call that a tollbooth, or shifting of the tollbooth, or whatever, but I do think there's this innate barrier reduction. There's an activation energy to everything - I'll speak in my physics terms - and you need a catalyst to cross that activation energy. And that catalyst could be funding, because you get more people, it could be hiring really talented people... I actually think it's not just the catalyst part. Your activation energy has gone down significantly. So the catalysts you need are -- you don't need catalysts at all in some cases, or you don't need the best ones out there. And I think that will have a meaningful impact on software development and how teams are structured and how we think about it, in a very positive way, because you're getting things done that you're either not doing or wouldn't have done, or would have done much more slowly. At least that's how I think about it. Maybe I'm the glass half full guy, and \[unintelligible 01:18:47.01\]

**Adam Stacoviak:** No, you're spot on. And I concur and agree with everything you just said. But what we cannot deny is that there seems to be a subscription of some sort. And this is where I'm struggling, really... Even though I'm emphatically happy about the circumstance, I think it's cool, I think it's the best thing almost ever... But now I'm struggling to think that there's now a subscription attached to being a developer, or to doing developer things that build software. And the reason why I say that is you go back to a couple of years ago when they said "You will own nothing and you'll be happy." Well, now we don't really even -- like, if this is the way, right? ...and if -- I was just telling Jerod this other day... If Adam and Jerod from 20 years ago, which is today - let's say there's versions of me and him today that are entering the software world... If this is the way, maybe they don't even own their intellect and their innovation ability anymore. Like, now we're renting that, too. And I'm kind of just struggling with that in this moment.

**Deepak Singh:** \[01:19:53.29\] Yeah... The ideas are still yours. I remember the days when I was at AWS a long time ago, when -- I used to have a stack of Linux servers at home that I finally... I don't even know why I have them. It was before I joined AWS also. And I got rid of them and started using EC2 for everything. I don't need -- like, I have this little corner of my house picking up heat... Not required. Like, that was an early one. So I still remember when you switch -- you kno, the time you'd switch from assembly language to more of the modern languages, or even from some language to a Rails type structure... There's always an abstraction or something that comes up that allows you to shift your attention somewhere else. I think the big one is where does that attention shift and how valuable is that? And I think those have historically defined whether something is going to be successful or not. I do think - and maybe all of us have drunk the kool-aid on this one. In this particular case, I don't think we're talking about a 5% -- like, my ability to innovate or my ability to act and my ability to think, it's not becoming 5% better. I actually think I have a new tool that allows me to operate fundamentally differently... And I don't think we've quite grasped what operating fundamentally differently as individuals and teams actually means. I think people are starting to find out, but I think it's going to make an impact in a very positive way. Maybe it's a shifting of the toll booth, and where the toll -- because there's always a toll booth, as you said, somewhere.

**Adam Stacoviak:** Yeah... But don't take it, even though I described it as dystopian, and I don't want to be necessarily negative, although it is a negative thought when you sort of go down the rabbit hole... I 100% agree. I'm personally doing things, just simply exploring and scratching my own itches, that I just would never ever do, because I just didn't have the time to even go to the depth necessary to do it in a way that was even worthwhile doing. And you take that same idea and you apply it to an enterprise team, that has different context windows and challenges and issues... Gosh, yes. For sure.

I was just telling Jerod too the other day that for a while there I was bummed that I thought that "Well, there's going to be a market shift and a market correction in terms of the way enterprises or even teams are built these days." And you may see layoffs, but I think by and large we're going to see a massive, massive influx into folks becoming what are called software developers, because there's tooling that allows them to operate like a senior engineer, or with senior engineer abilities. And that's amazing. I'm all for it. In the moment, I was just like "Gosh, do we now have a toll booth in front of our ability to show up as developers?" And that was just kind of a bummer.

**Jerod Santo:** I think subscription fatigue gets to us all.

**Adam Stacoviak:** It does.

**Deepak Singh:** Yes.

**Jerod Santo:** You know, when you're paying per token, you're basically paying that subscription fatigue. Well, Deepak, I know you are hitting up against a hard stop. We appreciate you spending a few extra minutes with us... Kiro looks really cool, I love all the innovations going on... I think that spec-driven development is a very awesome stake in the ground, to claim like "Here's a way of doing agentic things that is better." And I hope you guys all the best in building it out and realizing that vision of what you're trying to build. It's cool stuff, man.

**Deepak Singh:** Thanks for having me. It was fun talking to you. And as I said before, I think we started -- I've probably heard... I started listening to the Changelog at episode one, so it's great to actually talk to you folks.

**Adam Stacoviak:** That's so cool.

**Deepak Singh:** I appreciate it.

**Jerod Santo:** So cool.

**Adam Stacoviak:** That's beyond cool. Thanks so much for being a listener all these years. Appreciate that.
