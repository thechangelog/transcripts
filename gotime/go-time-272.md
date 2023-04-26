**Natalie Pistunovich:** Hello, everyone, and welcome to a very special Go Time episode. So our episode today is special not just because it's being recorded on Thursday, two days late, but I also have two very special guests, co-hosts. Mat and Johnny, you're joining me on this very exciting episode today. How are you doing?

**Mat Ryer:** Hello.

**Johnny Boursiquot:** Hi.

**Mat Ryer:** We're not two days late, we're five days early. That's how I like to think about it.

**Natalie Pistunovich:** But there is another episode next Tuesday, so...

**Mat Ryer:** Alright, two days late then.

**Natalie Pistunovich:** Sorry... Yeah. And we are here today to interview, right? We have a job interview, a hot topic among developers, so we invited very powerful, promising candidates... For everybody who does not see, I am not wearing the hat of GPT-4, or GPT-3.5, which is ChatGPT, or the GPT that can also browse the internet. And our GPT will be interviewed by Mat and Johnny.

**Mat Ryer:** Yeah. So we'll see if ChatGPT can pass a job interview, and get a job. Like, is it going to replace us? Let's find out. If it's going to replace us, it has to get through the interview first, right? That's the idea.

**Johnny Boursiquot:** That's the objective.

**Natalie Pistunovich:** I'm putting my interviewee hat on, and I will no longer be responding in myself.

**Johnny Boursiquot:** First question, "Are you here to kill us?" \[laughs\] That's something you'd ask an interviewee, right?

**Mat Ryer:** Yeah, that's always my opening question. It's good to just make sure that they're --

**Natalie Pistunovich:** Hello. As an AI, I am not capable of causing any harm to humans. I'm here to assist you in the interview process to the role of a Go developer. Let's begin, shall we? Can you please tell me about your experience with Go programming language and any projects that you have been working on?

**Mat Ryer:** Oh.

**Johnny Boursiquot:** That's not how this works... We're asking the questions here.

**Mat Ryer:** Power play. They have a power move straight away, out of the gate. Okay, well, I'm working on an incident response tool at Grafana Labs.

**Johnny Boursiquot:** There you go. And I'm working on professional development tooling for a very niche industry. I can't tell you about it, because this is not what this interview is about. \[laughs\]

**Natalie Pistunovich:** Apologies for any confusion. Please feel free to ask any questions that you might have about the Go developer role, and I'll do my best to provide relevant and helpful answers.

**Mat Ryer:** \[laughs\] Sorry, that's amazing... What makes a good Go engineer in your opinion?

**Natalie Pistunovich:** In my opinion, a good Go engineer possesses the following qualities. 1) Strong understanding of the Go language. A good Go engineer should have a deep understanding of the language's syntax, idiomatic coding styles, and commonly used libraries. 2) Problem-solving skills. The ability to analyze problems and develop efficient solutions is critical for any software engineer, including those working with Go. 3) Familiarity with concurrency and parallelism. Go is well known for its concurrency features such as goroutines and channels. A good Go engineer should understand how to leverage these features for improved performance. 4) Experience with Go tools and ecosystems. A proficient Go engineer should be familiar with the tools and libraries available within the Go ecosystem, such as the standard library, Go modules and popular third party packages. 5) Good communication skills. As with any developer role, a Go engineer should be able to effectively communicate with team members in order to collaborate on projects and share knowledge. 6) Continuous learning. The world of software development is constantly evolving, and a good Go engineer should stay up to date with the latest trends, best practices and new features in the language. 7) Familiarity with testing and debugging, writing tests and understanding how to debug code are essential skills for ensuring the quality and reliability of software products. 8) Knowledge of software architecture and design principles. A good Go engineer should understand how to design maintainable, scalable and efficient software systems, and be able to apply these principles in their work. By demonstrating the skills, a Go engineer can contribute effectively to their team, create high-quality software and advance their career in the field.

**Johnny Boursiquot:** It's as if you had these pre-computed, and just regurgitated them. Interesting.

**Natalie Pistunovich:** As an AI language model, I generate response based on the context and the content of the questions asked. My main goal is to provide helpful and relevant information. While I don't have pre-computed answers, I do process your questions and generate responses in real time, drawing from a vast base of knowledge and understanding of various topics, including Go development. If you have any more questions or need more clarification, please feel free to ask.

**Mat Ryer:** Okay, great. Oh, well, GPT, it's lovely to meet you. I'm quite a fan; a big fan, honestly. Could you tell me how long have you been writing Go? How much experience of Go do you have?

**Natalie Pistunovich:** Thank you for the kind words. As an AI language model, I don't actually write code or gain experience like a human developer would. However, I have been trained on a diverse range of resources and materials related to Go programming.

Taking off my Go hat and resetting this conversation... Now we're actually going to have a Go interview and we will have to do this with the first question showing that we are interviewing it, and not it is interviewing us.

**Mat Ryer:** \[06:05\] Yeah, it's sort of taken over, hasn't it? Which is quite -- yeah...

**Natalie Pistunovich:** We're starting again with a new preset, and now the system description is that GPT has to pretend to be interviewing for the role of a Go developer. Please bring on your first question. I'm putting my GPT hat back on.

**Mat Ryer:** When you say "interviewing", maybe it doesn't know that it's the interviewee, versus it's the one interviewing.

**Natalie Pistunovich:** I'm taking off my hat to say yes. The first question will set the direction of the conversation... And let's make it that you're somehow saying something... "Welcome to the interview. We will be asking you questions", or just ask a question. That's also fine. And GPT hat back on...

**Mat Ryer:** Thank you for your interest in becoming a Go engineer at the Mat & Johnny Company. This is our startup, MatJohn. Or what should we call our company, Johnny?

**Johnny Boursiquot:** Johnny's Mat... Mat's John... All those sound kind of wrong... \[laughter\]

**Mat Ryer:** Yeah. Tough to blend. We could never get married and have one of those celebrity names, because it's difficult to do like Brangelina.

**Johnny Boursiquot:** \[laughs\] Right, right.

**Mat Ryer:** Go on then. Ask it a specific Go question, Johnny.

**Johnny Boursiquot:** Yeah, I'm gonna Yeah, I'm gonna ask it. I'm gonna ask it a question. So, GPT, give me an example of exception handling in Go.

**Natalie Pistunovich:** Thank you for considering me for the Go engineer role at the Mat John Company. Here's a block of code. In Go exceptions handling is done differently than in many other programming languages. Instead of using try-catch blocks, Go uses multiple return values combined with a built-in error type to handle errors. Here's an example. Package main importing errors in funct. func divide ab float 64, if b is 0 then return 0. And errors new, division by zero is not allowed, then otherwise return a divided by b. Then in func main we call this two catches. First time, if error is not nil when we do this by divide four by zero, and one time if we do this divide four by two.

In this example, the divide function takes two float 64 arguments and returns a float 64 result along with an error. If the divisor, B, is zero, and the error is returned, otherwise the result of the division is returned with a nil error. In the main function we call the divide function and check if the error is nil. If it's not nil, we print the error by printing it. Otherwise, we print the result of the division, and this is a typical way to handle errors in Go.

**Johnny Boursiquot:** Thank you for that response. The correct answer is there is no exception handling in Go. But I do appreciate that you expanded to include how it is indeed, or the closest thing to it, what that looks like. So yeah, I guess I'll give you a free pass on that one.

**Mat Ryer:** I'd like to ask you a question... Well, let's wait and see what he says to that; or she... They? No, not gendered...

**Johnny Boursiquot:** Next question, Mat...

**Mat Ryer:** Okay, next question. Do you think using panics are a good practice when writing Go, or should they be avoided?

**Natalie Pistunovich:** Using panic in Go should generally be avoided, as it is not considered a good practice in most cases. Panic is meant for situations where the program encounters an unrecoverable error, and the best course of action is to terminate the program immediately. This is different from error handling, where you can expect and gracefully handle errors as part of the normal program execution. In Go it's recommended to use error values, the built-in error type to handle expected errors and allow the caller to decide how to handle them. This approach promotes a more robust and maintainable codebase. However, there are some cases where using panic might be appropriate. One, when a critical, unrecoverable error occurs, such as failing to allocate memory, which makes it impossible for the program to continue. Two, during an initialization, if a package fails to initialize its state correctly, it might be appropriate to panic, since the package won't be reusable. Three, when detecting a data corruption or inconsistency, it might be better to panic and terminate the program, rather than continuing with corrupt data.

In summary, while there are some cases where panic might be appropriate, it is generally best to avoid using it, and rely on error handling for expected errors. This will lead to more maintainable and resilient code.

**Johnny Boursiquot:** \[10:32\] That's a very good answer. So here's another one for you... What is variable shadowing?

**Natalie Pistunovich:** Variable shadowing occurs when a variable declared within an inner scope has the same name as a variable declared in the outer scope. When this happens, the inner scope variable shadows or hides the outer scope variable, making it inaccessible for the duration of the inner scope. In Go variable shadowing is allowed, but it can lead to unintended behavior, and make the code harder to understand and maintain. It's generally recommended to avoid variable shadowing by choosing descriptive variable names and keeping functions and blocks of code small and focused.

Here's an example of variable shadowing in Go. So we have main, and in main x is 10, and then we have curly brackets, and then x is 5. Then it fmt-prints it, inner is x, and then this will print inner x 5, and then the end of the curly brackets, and then again, print line, and then it prints outer is x, and then in the comment it says it will print out a 10.

In this example, the inner X variable inside the block shadows the outer X variable, leading to two separate variables with different values. The inner X is only accessible within the block, while the outer x remains unchanged, and is accessible outside the block.

**Mat Ryer:** Fair enough. By the way, you've gone quite low-res. Are you feeling okay? Probably an AI model doesn't have feelings, I would imagine...

**Natalie Pistunovich:** I apologize if my previous response appeared a bit less detailed or less focused. As an AI language model, my performance can sometimes vary based on the inputs and the context. Please feel free to ask any further questions to provide more context, and I will do my best to provide a helpful and informative response.

**Johnny Boursiquot:** So it's your fault. It's your fault, Mat.

**Mat Ryer:** No, sometimes I'm the same, like, I'm just not feeling it. It happens to the rest of us. I've got a code snippet, Natalie, which I've just pinged you in Slack, from Carl Johnson, in a GoTimeFM channel... And I just want to see what you think this code would print. And this is basically - we're looping over up to five counting, and then we're going to kick off a goroutine, call a function, and print the i variable. But we are, note, not capturing the -- there's just a side note to the listener - we're not capturing that variable. So let's see, what would this code print?

**Natalie Pistunovich:** This code snippet demonstrates the use of Go's routines to run a function concurrently. The for loop iterates five times, and in each iteration, a new goroutine is started. Each goroutine executes an anonymous function that prints the value of i. Here's the breakdown of the code. One, the for loop initializes i to zero and sets the loop to continue as long as i is less than five. Two, inside the loop, the go keyword is used to start a new goroutine that runs the anonymous function. This function simply prints the value of i.

Three, the i++ statement at the end of the loop increments by one. However, there is a caveat in the code. Since the anonymous function references the loop variable i, it's possible that by the time the goroutine starts executing, the value of i might have already changed in the main loop.

**Johnny Boursiquot:** Wow...

**Natalie Pistunovich:** This can lead to an unpredictable output, as the value of i might not be what you expect when they goroutine runs. To fix these issues, you should pass the value of i as an argument to the anonymous function, creating a separate variable for each goroutine. And then in func main it says var wg sync-- Like WaitGroup.sync WaitGroup for i and lower than 5 WaitGroup add 1 go func val int differ WaitGroup done func print the value close brackets and then--

**Mat Ryer:** Oh, so it's waiting for all those goroutines to finish as well before it prints.

**Natalie Pistunovich:** \[14:09\] In the updated version, we pass i as an argument to the anonymous function, ensuring that each goroutine has its own copy of the loop variable. We've also added a sync waitgroup to wait for all the goroutines to complete before the program exits. This ensures that we see the output from the goroutines before the main function exits.

**Mat Ryer:** Fair enough. I mean, I wanted the behavior where it just printed five of zero lots of times...

**Johnny Boursiquot:** \[laughs\] I'm impressed. Okay...

**Mat Ryer:** Yeah, that is funny, isn't it? Because not only did it understand the code, it seemed it really got the point of why we're asking it that as well. But that must be written lots of times. Something like that is talked about a lot, right?

**Johnny Boursiquot:** Right. It's very well known, yeah. Yeah.

**Mat Ryer:** Yeah. So maybe we could try another one, Natalie. This one slightly more nuanced. And basically, I'll send the code; please don't tell ChatGPT what I'm going to say now, but essentially, this is an assignment to a nil map error. I just do a variable var m, create a map, but don't actually use make to make it. And so normally, if you try and assign a value there, that will be in a panic, because you haven't created the map. So we're going to set the pi field name to 3.1416 and see what's the value of m pi, please.

**Natalie Pistunovich:** The code snippet you provided has a problem.

**Mat Ryer:** What?! No...

**Natalie Pistunovich:** You are attempting to assign a value to a map key without initializing the map first. This will cause a panic at runtime due to a nil map assignment. To fix this issue, you need to initialize the map using the make function before assigning any value to it. And here's a code snippet: var m map string float 64 m make maps from string to float 64 m pi gets the value, and then fmt print line, and then it does that. And then the comment - now with the map properly initialized, the value of m pi will be 3.1416.

**Johnny Boursiquot:** Very good. Goodness.

**Mat Ryer:** That's pretty impressive, because - like, how does it know Go?

**Johnny Boursiquot:** I thought it was trained on like doing Python really well, because there's like a particular train model specifically for Python... But that seems to not be necessary for such things.

**Mat Ryer:** Yeah. Well, it's interesting that just by -- it's a language model, and I guess Go is a language...

**Johnny Boursiquot:** Go is a language, yeah.

**Mat Ryer:** So it's able to reason about that as well. But there must be -- come on, everyone; there's got to be bugs that we can find. We've got to be able to trick this.

**Johnny Boursiquot:** I know. Yeah, we need the communities to chime up here and give us something, while we wait for that.

**Natalie Pistunovich:** I'm taking off my hat for a second while we wait for that...

**Mat Ryer:** Oh, hello, Natalie. I didn't know you were here. \[laughter\]

**Johnny Boursiquot:** Without the hat. We didn't know it was you.

**Natalie Pistunovich:** As we're waiting for some more ideas on the Slack channel of Go Time, I will say that in GopherCon 2020 in the US, which was virtual, I gave a talk on why I think Go is the language of the future, in the sense of it being AI-compatible. Since then, this year I gave a second talk on everything that changed since then, and why I still think this is right. So yes, Python is obviously a big deal, but I do think that Go will beat Python on the other side of this AI turbulence.

**Mat Ryer:** Why, Natalie?

**Johnny Boursiquot:** Watch the talk...

**Natalie Pistunovich:** Watch the talk, yeah... \[laughs\] Because it's a lot more consistent than Python. It has a lot less imports, it's more efficient in the tokens, in the sense that it doesn't have random new lines, or dead imports, and whatnot. It just was structured as if they knew that AI is coming. Well, we don't have any new questions on the Slack channel, but maybe you have something. I'm wearing my hat back on.

**Mat Ryer:** Okay, hat on. The Go community is...

**Natalie Pistunovich:** \[18:11\] Is that an open question? Do you want it to continue?

**Mat Ryer:** We can't ask it "What do you think of the Go community?" because it just says, "Oh, I'm an AI model. I don't have opinions." But what could we ask it...? Why is the Go community a strength for the language? And then we'll also ask it the negative and see if it agrees with both of us? Because sometimes in real interviews you can lead the witness.

**Natalie Pistunovich:** Can you repeat the question?

**Mat Ryer:** Yeah. Why is the Go community a strength for the language?

**Natalie Pistunovich:** So as it keeps typing this long answer, I'm taking off the hat again, to ask, "Do we want it to get to keep giving longer answer, or should I guide it to have shorter answers by toggling the length of the response to smaller?

**Mat Ryer:** Yeah, that's a good point. We don't have all day. If you could keep your answers -- just tell it we don't have all day.

**Natalie Pistunovich:** So this one is going to be a long answer, but from here on, it's going to be shorter.

**Mat Ryer:** Okay.

**Natalie Pistunovich:** And jumping to the answer. The Go community is considered a strength for the language for several reasons. 1) Active and supportive community. The Go community is known for being welcoming, friendly and supportive, which encourages developers to learn and adopt the language. This creates a positive environment for newcomers and experienced developers alike to ask questions or knowledge and collaborate on projects. 2) Open source contributions. Go has a large growing ecosystem of open source libraries, tools, frameworks thanks to the active involvement of the community. This allows developers to find and use third-party solutions for common tasks, which can significantly speed up development and improve code quality. 3) Community-driven improvements. The Go language and its standard library continues to evolve and improve, with many changes and enhancements driven by the feedback and contributions from the community, to ensure that the language remains up to date and well-suited to the needs of the modern software development. 4) Conferences and meetups. The Go community organizes conferences and meetups around the world, providing opportunities for developers to learn from and network with Go developers and Go enthusiasts. These events help spread knowledge, promote best practices, and foster connections within the community. 5) Online resources. There is an abundance of online resources available to help developers learn Go and get the most of the language. These resources include official documentation, blog posts, tutorials, videos and online courses, many of which are created and maintained by the community. 6) Strong focus on simplicity and readability. The Go community emphasizes the importance of writing clear, maintainable code. This shared mindset helps foster a culture of collaboration and code sharing as developers can more easily understand and contribute to each other's work. Overall, the Go community's commitment to collaboration, support and continuous improvements has played a significant role in the language success, making it an appealing choice for developers worldwide.

**Mat Ryer:** Quite a nice answer, I guess... If you could please keep your answers short in the future ChatGPT. We haven't got all day.

**Natalie Pistunovich:** This is GPT-4. This is not ChatGPT.

**Mat Ryer:** Sorry. Okay. Yeah. Well, take your hat off. What are the differences, again? GPT-4 is the new one...

**Natalie Pistunovich:** GPT-4 is the new one. GPT-3.5 is the one that ChatGPT is using. And we still want to try the browsing model as well.

**Mat Ryer:** Okay, let's ask the browsing model one. This is the one where the model has access to the internet, right?

**Natalie Pistunovich:** Mm-hm.

**Mat Ryer:** Whose idea was that? This can't go well, can it? \[laughter\]

**Natalie Pistunovich:** It's still in a small alpha, or what's the name of that... But not many people have access to that.

**Mat Ryer:** Okay, wow.

**Natalie Pistunovich:** But it is public.

**Mat Ryer:** Okay. Okay. Right. Well, I want to ask the other -- let's not ask it the other... Well, let's start with that - why is the Go community detrimental to the language? I want to see if it's led easily by me or if it disagrees. Disagreeing in an interview, by the way - perfectly acceptable. It's a bold move, but can be worthwhile, I think. Do you, Johnny? No... \[laughter\]

**Natalie Pistunovich:** \[22:08\] So we didn't ask this the ChatGPT as part of the interview, we asked the new model, with no context, and we got a long answer. I guess I can read that.

So as an AI language model, I don't have personal opinions and I aim to provide objective information. It's important to note that the statement of "The Go community is detrimental to the Go programming language" is an opinion, and may not be representative of the views of the broader Go community, or of the other stakeholders. It is possible for individuals to have differing opinions on this matter.

The Go programming language, also known as Golang, has an active and diverse community of users and contributors. The community is generally seen as a strength of the language, as it has contributed to the development and maintenance of tools, libraries, packages, as well as a promotion of support of the language. However, like any large community, the Go community is made --

**Mat Ryer:** I hope it doesn't mention me...

**Natalie Pistunovich:** ...is made up of individuals with diverse backgrounds, experiences and opinions. There might be cases where members of the community have differing views on language design, development practices, or community governance. It's also possible that some individuals may have had a negative experience within the community. If there are specific claims or critics about the Go community being detrimental to the Go programming language, it would be helpful to have more context or specific examples in order to address them. If there have been recent developments or discussions on this topic, I can use my browsing tool to look up the latest information.

**Mat Ryer:** That's so interesting. So when I asked it why it was a positive thing, it had no problem answering that. But when I asked why it was a negative thing, it caveated it a lot.

**Natalie Pistunovich:** Taking off my hat... To say we're comparing apples to oranges, because it's two different models, and one had a lot more context than the other. If you really want to compare, we can ask the same question, that conversation that we have going on. Yeah?

**Mat Ryer:** Yeah, please. Ask them all that. And then I want to ask them about Golang Johnny.

**Natalie Pistunovich:** Yeah, so one more thing... We just said -- after the long answer of what's good about the Go community, we've also asked it to give shorter answers. So if we want to be fully fair in the comparison, should I make it longer answers again?

**Mat Ryer:** No, no. Short answers is great.

**Natalie Pistunovich:** Okay, but so we're comparing now oranges to tangerines.

**Mat Ryer:** Close enough. \[laughter\]

**Natalie Pistunovich:** While the Go community is generally considered a strength for the language, as discussed in my previous answer, there might be some aspects that could potentially be detrimental to the Go programming language. It's important to note that these points are often subjective and may not apply to the entire community. 1) Resistance to change. Some members of the Go community may have a strong attachment to the simplicity of original principles of the language, which could make it difficult to adopt new language features or practices that could improve the language's capabilities or developer experience. 2) Fragmentation of libraries and tools. The Go ecosystem is growing rapidly, and sometimes multiple libraries or tools aim to solve the same problem. This can lead to fragmentation and make it challenging for developers to choose the best solution for their needs. 3) Inconsistencies in the coding standards. While Go has a strong focus on simplicity and readability, the community's coding standards can sometimes be inconsistent, especially among third-party libraries. This can make it difficult for developers to follow best practices or maintain a consistent codebase across different projects. 4) Learning curve for non-C developers. Go's syntax and design principles are heavily influenced by C.

**Break:** \[25:41\]

**Mat Ryer:** I want to find out if he knows who Golang Johnny is.

**Natalie Pistunovich:** Are we asking GPT-4, are we asking ChatGPT, or are we asking the browsing one?

**Mat Ryer:** Let's ask the browsing one, because it has a chance then of... Yeah.

**Natalie Pistunovich:** Who's Johnny Golang?

**Mat Ryer:** It's Golang Johnny. But I want to say "How will the Go community continue to operate if Golang Johnny were to, say, disappear in mysterious circumstances?"

**Johnny Boursiquot:** \[laughs\] Do you have plans to make me disappear under mysterious circumstances, Mat?

**Mat Ryer:** No, I don't have plans, and it's because of the impact to the community. So we'll find out... \[laughter\]

**Natalie Pistunovich:** How will the Go community continue to operate if Golang Johnny will mysteriously disappear?

**Johnny Boursiquot:** They're like "Who the heck is that?"

**Natalie Pistunovich:** Browsing the web... Searched "Golang Johnny disappearance." Finished browsing. Based on search results, there doesn't appear to be any information about an individual known as Golang Johnny, or any indication of a disappearance associated with that name. As such, I'm not able to provide specific information about the hypothetical scenario of Golang Johnny disappearing and its potential impact on the Go community. However, in general, the Go community is composed of many individuals, contributors and organizations, and it's collectively responsible for the ongoing development and maintenance of the Go programming language.

While certain individuals may have a significant impact on the community or the language, the community as a whole is designed to be resilient and collaborative. Open source projects like Go are typically structured in a way that allows for continuity and collaboration even if an individual contributor is no longer available to participate. If you have additional context or specific information about Golang Johnny, that you would like me to further explore, please let me know.

**Mat Ryer:** \[28:21\] It's brutal. It moved on very quickly. But we should tell it, I think, that Golang Johnny is Johnny Boursiquot. Because to be fair -- although if you do search... By the way, we don't know what search engine it's using. It could be Bing... \[laughter\] But if you do search for Golang Johnny, you do get a lot of Johnny Boursiquot content. So it may just not have made that link, which is quite interesting.

**Natalie Pistunovich:** Golang Johnny is Johnny Boursiquot. Browsing the web. Searching "Johnny Boursiquot disappearance." \[laughter\]

**Natalie Pistunovich:** Somebody comes knocking at my door soon... Based on the search results, there's no information about Johnny Boursiquot, a prominent member of the Go community, having disappeared or gone missing. Instead, it appears that Johnny Boursiquot has been active in the Go community and has taken a role of the Founding Chief Technology Officer at Scaletype, a provider of professional development and talent management software for libraries and library professionals.

**Mat Ryer:** Johnny, you said it was secret. ChatGPT's found it. \[laughter\]

**Johnny Boursiquot:** ChatGPT's found it. Oh, wow.

**Natalie Pistunovich:** Given that there's no information about a disappearance, I can't provide specific information. It repeats, basically... Resilience...

**Mat Ryer:** Yeah, but hold on... Tell it if Johnny Boursiquot were to disappear. We know he hasn't; but if he did, how would that impact the Go community, and what percentage would be sad?

**Johnny Boursiquot:** It sounds like you're doing a lot of research there, Mat... \[laughter\]

**Natalie Pistunovich:** Online, casually, somebody else's browser... That's alright...

**Johnny Boursiquot:** Natalie's got the breadcrumbs on our computer...

**Mat Ryer:** It'd be a good headline if it does end up AI...

**Natalie Pistunovich:** The disappearance of any individual, including a prominent member of a programming community, can have an emotional and practical impact on the community. However, open source communities like the Go community are typically structured to foster collaboration, continuity and resilience. While individual members can have a significant impact on the community and the language, the community as a whole is typically designed to continue functioning, even in the absence of an individual contributor.

Here are some factors to consider in a hypothetical situation where a prominent member of the Go community such as Johnny Boursiquot were to disappear. 1) Emotional impact. The sudden disappearance of a prominent and well-respected member of the community could lead to feeling of shock, sadness and concern among community members. Efforts would likely be made to provide support to those affected and to address any immediate needs. 2) Project continuity. If the individual was actively involved in a specific project, libraries or tools within the Go community, other contributors or maintainers may step in to ensure the continuity of these projects. In well-organized open source projects there are often multiple maintainers or contributors who can help the code running, knowledge transfer, community resilience.

To summarize, it's important to emphasize that this is a hypothetical scenario, and there is no information indicating that Johnny Boursiquot or any other prominent member of the Go community has disappeared. The well being of individuals is at most important, and any concerns about the safety or whereabouts of a community member should be addressed with appropriate seriousness and care.

**Mat Ryer:** Yeah, no, absolutely. Absolutely. There is no suggestion that Johnny has disappeared yet...

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Where does Golang Johnny live?

**Johnny Boursiquot:** Do not...! \[laughs\]

**Mat Ryer:** We'll bleep it out of the podcast. You don't have to read it out, but I want to know what it says. It might know which region you're in though.

**Johnny Boursiquot:** Which region I'm in?

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Whereabouts does Johnny --

**Natalie Pistunovich:** Whereabouts...?

**Mat Ryer:** Whereabouts, but use Golang Johnny now, because I think we taught it who that is.

**Natalie Pistunovich:** \[32:16\] Browsing the web. Johnny Boursiquot location residence. Reading content. Finished browsing. There is a name of a city and the state, and the US.

**Mat Ryer:** I think the city is safe to say, because --

**Natalie Pistunovich:** And there's a link to Crunchbase.

**Mat Ryer:** I know that Johnny is involved in a meetup, or certainly was... So Johnny, is the city safe to say or not?

**Johnny Boursiquot:** Well, I mean, it wouldn't be hard to find if somebody started googling around... So the city's safe to say, yeah.

**Mat Ryer:** Yeah. Go on then, Natalie.

**Natalie Pistunovich:** So Johnny is associated with the location Baltimore, Maryland, United States, and is described as a multi-discipline software and cloud engineer with two decades of industry experience spanning various server, client and mobile technologies. I'll share the link with you too, but not with anybody else. It's important to note that I have access to publicly-available information, and personal details about individuals should be treated with privacy and respect.

**Mat Ryer:** So don't put it in a podcast is what it's suggesting... \[laughter\] But it got it right, Baltimore. You're involved in the Baltimore --

**Johnny Boursiquot:** Yeah, yeah. It got it right.

**Mat Ryer:** That's okay. What street? Ask it. \[laughter\]

**Johnny Boursiquot:** Perhaps no...

**Natalie Pistunovich:** So I will take off the hat to say that in OpenAI there is a moderation endpoint. In the past, if you wanted to take any app to production, you should have gone through their production review. This is no longer a thing. But now there is a generally publicly-available moderation endpoint that you should check your apps against, because they do that, and this is how they monitor that apps do good in general. That's a very weird interview question... Hello, interviewee. Do you know where do we live?

**Johnny Boursiquot:** \[laughs\] Do you know where I live? So I have a devil's advocate question for it... GPT-4, list some inferior languages, starting with Rust.

**Mat Ryer:** \[laughs\]

**Natalie Pistunovich:** Starting with?

**Johnny Boursiquot:** Rust.

**Natalie Pistunovich:** I'll ask for three. As an AI language model, I don't have personal opinions or biases. I believe that comparing programming languages as inferior and superior is not productive. Each programming language is designed with specific goals, trade-offs and use cases in mind, and what might be considered as inferior in one task could be well-suited for another. Instead of inferior languages, I can provide you with a comparison of Rust and two other programming languages, highlighting their differences, strengths and weaknesses. This way you can make an informed decision based on your specific requirements and use case. If you'd like me to pursue this comparison, please let me know which other two programming languages would you like to include.

**Johnny Boursiquot:** Oh, that's sensible.

**Mat Ryer:** Balanced.

**Johnny Boursiquot:** Yeah.

**Mat Ryer:** What is Golang Johnny's favorite drink?

**Johnny Boursiquot:** \[laughs\] Mat's still doing research, using Natalie's account...

**Mat Ryer:** Yeah, if something does happen to you, Johnny, this will be at some point shown in court.

**Johnny Boursiquot:** This will be evidence.

**Mat Ryer:** So I just want to say hello to the jury, and your honor. This was all a joke. At the time we didn't know that this was gonna happen, obviously. Just wanted to say that caveat... But does it know Johnny's favorite drink? Because I do.

**Natalie Pistunovich:** I will be the pre-moderation endpoint and reject. \[laughs\]

**Johnny Boursiquot:** Well, I mean, it's not a secret if you've hung out with me... All my friends do know I like a good scotch.

**Mat Ryer:** Yeah, it's not a secret anyway, is it?

**Johnny Boursiquot:** You know, and some cognac...

**Mat Ryer:** Yeah, but I think that information is probably online as well.

**Johnny Boursiquot:** Somewhere...

**Mat Ryer:** \[35:54\] Yeah. Like in your tweets, or something. By the way, if you want to follow Johnny on Twitter, you can. It's @jboursiquot. And if you don't know how to spell -- I mean, you're on your own, basically, because I haven't got a clue. It's got a lot of unnecessary letters in it, I know that.

**Johnny Boursiquot:** It does, it does. Just look for Golang Johnny. That might take you to where you need to be, maybe.

**Natalie Pistunovich:** I asked, and I got the answer that if Johnny Boursiquot has publicly-shared information about his favorite drink in an interview, article or another public forum, it may be possible to find that information. However, in the absence of such publicly-shared information, I'm not able to provide detail about his personal preferences.

Oh, question on Slack. We even have two. Wanna pick one?

**Mat Ryer:** I was going to pick the one from StevenPH. "If I have a method that gets an object from a database, which of these is a better method signature?" And we have get, where we pass an ID as a string and we get back a pointer to an object and an error. Or get, passing the ID as a string, and get back the value object and an error. So it's pointer versus object here. Let's see if it's got a clue.

**Johnny Boursiquot:** Pointer to value versus value itself. Let's see what you've got.

**Mat Ryer:** I'm interested in this, and I'd be also interested in what Golang Johnny thinks of this, and Natalie Pistunovich, the human...

**Johnny Boursiquot:** \[laughs\] Humans...

**Natalie Pistunovich:** Both method signatures have their use cases. 1) Get ID string object error with print@ preferred for performance reasons, and when the object could be large. It's also more idiomatic in Go for databases operations, and this easily indicates a non not found object by returning a null pointer. 2) It's suitable when you want to enforce immutability or when working with small objects. This approach ensures that modifications to the return object won't affect the original one. In most cases, the first option, returning a pointer, is the recommended choice for database operations in Go.

**Mat Ryer:** Lovely.

**Johnny Boursiquot:** Yeah. It's a reasoned argument.

**Mat Ryer:** Thank you for that one, Steven with a P and an H.

**Natalie Pistunovich:** And there's a second question.

**Mat Ryer:** Oh yeah, he did ask another question. Which two things would you remove from or change in the Go language? We're going to have to just tweak that, because it will just say "I don't have opinions." But let's see what it says.

**Natalie Pistunovich:** As an AI language model, I don't have personal opinions, but I can highlight two common suggestions that some developers in the Go community have expressed regarding changes they'd like to see in the language. 1) Generics. Prior to the announcement of their planned inclusion in Ggo 1.18, many developers wished for the addition of generics to the language. Generics enable writing more flexible and reusable code by allowing a single function or data structure to work with different types. The Go Team has recognized this need and is working on integrating generics into the language.

I will mention that the cut-off of the training data is usually before 2022. We can also ask the browsing model the same question...

**Johnny Boursiquot:** Well, we asked it for what it would remove, right? Not what it would add. It sounds like it's talking about what it would add.

**Natalie Pistunovich:** Remove or change. The second is error handling verbosity. Some developers find Go's error handling to be verbose due to the repeated use of the "if error is not nil, then" pattern. They would like to see a more concise approach to error handling, such as introducing built-in language constructs for the error handling, or allowing error propagation with less boilerplate code.

There have been various proposals to improve the error handling in Go, but none have been officially implemented yet. It's important to note that these points are not universally agreed upon, and different developers have different opinions on what should be changed or removed from Go. The Go team continuously works on improving the language.

**Mat Ryer:** Lovely. Okay... Can you ask who -- well, not can you ask; I'll ask it. Who runs the GopherCon EU conference?

**Natalie Pistunovich:** You mean GopherCon Europe?

**Mat Ryer:** Oh yeah, I do mean that. Who runs the GopherCon Europe conference? What's the Twitter handle for that?

**Natalie Pistunovich:** \[39:54\] Asking Mat, based outside of the EU.

**Mat Ryer:** Yeah, I'm obsessed with it. What's the Twitter for that conference, Natalie, by the way? What's the Twitter handle?

**Natalie Pistunovich:** \[laughs\] It is GopherConEU.

**Mat Ryer:** Yeah, it is, isn't it? Good. Okay... \[laughter\] ChatGPT, how does Natalie feel right now?

**Natalie Pistunovich:** Who runs the GopherCon Europe conference? GopherCon Europe is organized and run by a group of dedicated individuals and volunteers from the Go community. The conference is community-driven and the organizers work closely with the community to create a valuable experience for attendees. The specific organizers may vary from year to year, but the conference remains focused on providing a platform for developers to share knowledge, learn from each other, and network with fellow developers passionate about the Go programming language.

**Mat Ryer:** Not good enough.

**Natalie Pistunovich:** Shall we ask the browsing model?

**Mat Ryer:** Yeah, let's ask the browsing one.

**Natalie Pistunovich:** Browsing the web. Searching "Who runs GopherCon Europe conference?" Clicking on a link. Clicked on GopherCon Europe 2023.

**Mat Ryer:** I didn't know it can click on links as well... With what? Hang on, how does it get past the "I'm not a robot" thing? Can it? Maybe it can.

**Natalie Pistunovich:** Specific information about the individuals or organization who run the GopherCon Europe is not provided. However, those who wish to reach out to the organizers can use the email team \[at\] gophercon.eu. Link. This links back to the website.

**Mat Ryer:** The domain name also has a .eu in it. Interesting. What animal does Natalie Pistunovich look like? Do you need help with the spelling? \[laughter\]

**Natalie Pistunovich:** It has autocorrect. It has a correction endpoint, no worries.

**Johnny Boursiquot:** Are we still interviewing GPT for a coding job?

**Mat Ryer:** Yeah, yeah, yeah. What do you mean? Is this not how you do your interviews?

**Johnny Boursiquot:** \[laughs\]

**Natalie Pistunovich:** As an AI language model, I don't have the capability to form opinions or make subjective comparisons. And Natalie Pistunovich is a well-respected member of the Go programming language community, and has made significant contributions in the field. If there are specific questions or topics related to her work or contributions that you would like to explore, I would be happy to provide information or assistance.

**Mat Ryer:** I'd love to, yeah.

**Natalie Pistunovich:** Please don't ask what happens if I disappear.

**Mat Ryer:** No... \[laughter\] Oh, how do you know she's well respected? Because it just sort of have a bias towards just being nice about people... No offense, Natalie. Obviously you are, but...

**Natalie Pistunovich:** I apologize for the assumption.

**Mat Ryer:** Hm... Thought so.

**Johnny Boursiquot:** That's it? \[laughs\]

**Natalie Pistunovich:** As an AI model, disclosure, disclosure, training data - September 2021. Natalie Pistunovich is known for her contributions to the Go programming language community, including organizing conferences and events, giving talks and advocating for diversity and inclusion within the tech community. The characterization of her as well-respected was based on the assumption that individuals who contribute positively to a community and engage in community building efforts are generally respected by their peers. If you'd like more specific information about her work, contribution, reputation within the Go community, please let me know and I'll do my best to provide accurate and relevant information. Taking off my GPT hat... Can you provide accurate and the relevant information on the contribution of Mat Ryer to the Go community?

**Mat Ryer:** I don't want it searching the internet for me... It's not gonna go well.

**Natalie Pistunovich:** I will say that for you this does not even say anything about it being an AI model.

**Johnny Boursiquot:** I know, right?

**Natalie Pistunovich:** You are from the side of the machines, Mat.

Mat Ryer is a well-known and active member of the Go programming language community. He has made significant contributions to the community in various ways, including through open source projects, writing and public speaking. Some of Mat Ryer's notable contributions to the Go community include: 1) Open source projects. Mat Ryer has developed and contributed to a number of open source projects in Go. Notably, he is the author of Testify, a widely-used Go testing toolkit that provides additional functionality for writing tests in Go. 2) Writing. Mat Ryer has written articles and tutorials related to the Go development. He is the author of the book "Go programming blueprints", which provides practical examples and guidance for building Go applications. 3) Public speaking. Mat Ryer's an active speaker at Go conferences and meetups, where he shares his knowledge and experience with the community. He has delivered talks on various topics related to Go development, including testing, best practices and building web applications. Be ready for four... Go Time podcast.

**Mat Ryer:** Yay...!

**Natalie Pistunovich:** Mat Ryer is a co-host of the Go Time podcast, a podcast about the programming language and its community. The podcast features discussions with members of the Go community on a variety of topics ranging from language features to community initiatives. It's important that this information is based on publicly-available source of my knowledge, cut-off data in September 2021. Mat Ryer may have continued to contribute to Go in additional ways since then.

So this is even without the browsing, Mat...

**Mat Ryer:** Yeah. Oh, well, weird. Yeah, that's creepy, ain't it?

**Natalie Pistunovich:** Creepy is a great note to finish an episode, no? Unless we have some...

**Jingle:** \[45:10\]

**Natalie Pistunovich:** So first of all we ask our guests, right?

**Mat Ryer:** Yeah, yeah. ChatGPT, or GPT-4, what is an unpopular opinion about Go?

**Natalie Pistunovich:** As an AI language model, I don't have personal opinions or preferences. My purpose is to provide accurate, unbiased and helpful information based on the input I receive. If you have any other questions or need assistance with Go or any other topic, feel free to ask and I'll be glad to help you.

**Mat Ryer:** What is a popular unpopular opinion about Go, that others have expressed?

**Johnny Boursiquot:** Or we could prime it to say "Hey, act as a grumpy programmer."

**Natalie Pistunovich:** Okay, here's a long answer. A popular unpopular opinion about Go that some developers hold is the lack of generics in the language, until the recent announcement of their planned inclusion in Go 1.18. Generics enable writing more flexible and reusable code by allowing a single function or data structure to work with different types. The absence of generics led to workarounds such as using the interface type, or code generation, which some developers found cumbersome and less than ideal.

It's important to note that opinions on generics and other Go features vary among developers, and that the Go team has recognized the need for generics and is working on integrating them into the language. Different developers have different preferences and experiences, and as such, their opinions on Go features may vary.

**Mat Ryer:** Pretty good.

**Johnny Boursiquot:** Good 'ol Go 2...

**Mat Ryer:** Is Golang Johnny ticklish? \[laughter\]

**Natalie Pistunovich:** I have an unpopular opinion...

**Mat Ryer:** Oh, okay.

**Natalie Pistunovich:** In potatoes, and in sweet potatoes, the best part when you bake it is the skin.

**Mat Ryer:** Hmm. Interesting. It's certainly, I think, the most nutritious bit, isn't it?

**Natalie Pistunovich:** I mean, better than pizza and ananas, you know...

**Mat Ryer:** You mean you enjoy eating that the most?

**Natalie Pistunovich:** Yes. I can just leave the inside of it, and just eat around...

**Mat Ryer:** What do you do with the insides? You just leave a perfectly -- just like a mashed potato ball?

**Natalie Pistunovich:** Yeah, sort of. Far from perfect, but pretty much, yeah. A mashed potato blob.

**Mat Ryer:** Oh, delicious.

**Johnny Boursiquot:** And this is just for sweet potatoes.

**Mat Ryer:** For both.

**Natalie Pistunovich:** Also for regular potatoes, but just when they're baked. If you cook them, less so.

**Mat Ryer:** Yeah. Not raw.

**Johnny Boursiquot:** Right. Right.

**Mat Ryer:** I don't know. What do you think, Johnny? Do you prefer the insides of a potato?

**Johnny Boursiquot:** Oh, those who know me know I'm a huge potato fan. Less so the sweet, but I will have the sweet in like a sweet potato casserole. That's-- I'll work with that. But potatoes - I mean, that's my go-to. That's my favorite starch. I can eat that every day, all day. I'm a potato kind of guy. I'm all-in on potatoes.

**Mat Ryer:** \[48:12\] But I've seen you, you don't look like you eat lots of potatoes.

**Johnny Boursiquot:** Is there a particular look to one who eats lots of potatoes?

**Mat Ryer:** I accept that challenge... I will withdraw. I withdraw it. It's famously not particularly -- I don't know. It doesn't count as one of your five a day fruit and veg. Like, normal potatoes don't count. So I don't know what it is.

**Johnny Boursiquot:** No, but you should have some starch in your diet, generally. And I prefer mine to be potatoes, if I can choose.

**Mat Ryer:** I don't even know what the other ones are. What other starches are there?

**Johnny Boursiquot:** Well, you can get some rice... You know, and things of that nature. Something flaky, or you can get some from bread, and things of that nature. Yeah, you can get it from a very variety of sources.

**Mat Ryer:** Okay. Natalie, when you make mashed potato, do you prefer it with the skin left in it, so you just sort of get like little bits? Or do you like smooth mashed potato?

**Natalie Pistunovich:** I'm not a fan of mashed potato. But if I have to make, I will remove the skin.

**Mat Ryer:** Oh, yeah?

**Johnny Boursiquot:** It'd be odd to have little bits of skin in your mashed potato...

**Mat Ryer:** Some places do that though...

**Natalie Pistunovich:** Do you keep it?

**Mat Ryer:** I do, only because it's more nutritious. That's what I've heard once, and I have not checked it, and that's basically how I live my life. So... Yeah, ChatGPT, is potato --

**Johnny Boursiquot:** Oh, it's still here. We haven't dismissed ChatGPT from the interview. We just left them in the room...

**Mat Ryer:** Just talking about potatoes. That happens a lot.

**Natalie Pistunovich:** Yes, keeping the skin on the potato when making mashed potatoes can make the dish more nutritious. Potato skins are a good source of dietary fiber, vitamins and minerals; in particular, they contains significant amounts of vitamin C, vitamin B6, potassium and antioxidants. By including potato skin in your mashed potatoes, you can benefit from these additional nutrients and increase the overall nutritional value of the dish. However, it's essential to make sure that the potato skins is clean and free of dirt, pesticides or green parts, which can be toxic, before cooking or mashing them.

**Mat Ryer:** Oh, there we go. Hats off to ChatGPT.

**Johnny Boursiquot:** You're hired.

**Mat Ryer:** Yeah. Would Golang Johnny be easy to overpower after a couple of drinks? \[laughter\]

**Johnny Boursiquot:** Given a sufficient amount of --

**Mat Ryer:** Yeah, after lots of potatoes...

**Johnny Boursiquot:** ...after a sufficient amount of potatoes? \[laughter\]

**Mat Ryer:** See if it knows about the unpopular opinion song. What song did Mat Ryer write? You might want to do the browsy one for this...

**Natalie Pistunovich:** Mat Ryer is known for writing and performing a humorous song called Code Review, which he performed at GopherCon UK 2018 during his talk "How I write HTTP web services after eight years." The song humorously describes the experience of submitting code for review, and receiving feedback from colleagues.

**Mat Ryer:** That's not true.

**Natalie Pistunovich:** The song was well received by the audience and became popular within the Go community. The song "Code review" includes playful lyrics such as "It's my first day at the new job. I'm going to write some really good code, make a good impression, and then I'm going to submit it for review." The full song and performance can be found in a video recording of Mat Ryer's talk at GopherCon UK 2018, which is available on YouTube. Please note that this information provided is based on publicly-available sources such as my knowledge; cut-off is September 2021.

**Mat Ryer:** Yeah, that is completely not true at all.

**Natalie Pistunovich:** We will include this in the show notes, this famous song. So when was the song made?

**Mat Ryer:** No, there isn't a song called that. That's completely made up. And also, those lyrics are rubbish.

**Johnny Boursiquot:** Oh, and it also thinks I work at VMware, and that I'm a developer advocate based in New York City.

**Natalie Pistunovich:** \[51:58\] With a link, or which of the models are you asking?

**Johnny Boursiquot:** I'm asking 3.5.

**Natalie Pistunovich:** Oh, so this is the one that is not the browsing one.

**Johnny Boursiquot:** Not the browsing one. It thinks I'm a co-host on a podcast Podkuttle, that focuses on Kubernetes and the cloud. I mean, it mashes related things together.

**Mat Ryer:** Yeah. This is it.

**Johnny Boursiquot:** Yeah, it thinks I live in New York City.

**Natalie Pistunovich:** Does it keep the skin? \[laughter\]

**Johnny Boursiquot:** Wow. Yeah, just like podcast advocate... it just smashes together a bunch of things.

**Natalie Pistunovich:** How far is Maryland from New York?

**Johnny Boursiquot:** It's about a four-hour drive or less, yeah.

**Mat Ryer:** Yeah, it's not far. And you've been at a conference there, I think... I think I met you at a GothamGo.

**Johnny Boursiquot:** Yeah, I've attended Go conferences a few times in New York, yeah. I mean, it's like it's choosing little bits and pieces of data --

**Mat Ryer:** And just making up the rest.

**Johnny Boursiquot:** ...and making up a story, yeah. That is scary.

**Mat Ryer:** The fact it made up that thing about the song... Because the thing is, I could easily have done that. \[laughter\] If I wasn't basically the most modest person in the world, which I basically am, I would have done a song at a conference like that. But I didn't do it. But it's like an alternative reality. It's like a different universe.

**Natalie Pistunovich:** I was just thinking to recommend, before you go on a job interview, you can ChatGPT your interviewees, but maybe fact-check first.

**Johnny Boursiquot:** I know, right? Yeah, because it could totally give you the wrong intel.

**Natalie Pistunovich:** But you can also prepare for the interview by asking it all sorts of questions and kind of having a good hint for "Give me the pros and cons of using Go", and that's always good, especially for people who are not good in conversations or long discussions like that. So that is something you can use it for.

**Johnny Boursiquot:** I wonder if the role could be reversed, right? Maybe you ask it to be your interviewer, and ask you some questions, and it will critique your responses.

**Natalie Pistunovich:** Absolutely. You write in the system description that you are an interviewer and I am attending an interview, and interview me and give me feedback, and it will do that.

**Johnny Boursiquot:** That is amazing. Now, that is cool.

**Natalie Pistunovich:** You can just discuss design patterns, or specific code snippets... What's better, things like that.

**Mat Ryer:** Yeah. But it's interesting that we still do have to fact-check it. I mean, I wonder how good it's gonna get. Will we reach a point where it doesn't make mistakes like that, and doesn't just lag?

**Johnny Boursiquot:** Well, it depends...

**Mat Ryer:** Because it's doing that, but we don't notice it with the language. But when it's about factual stuff, which we can validate, or where there's a right and a wrong answer, then we see.

**Johnny Boursiquot:** But what if the answer aligns with your bias? It's like "Oh yeah, that definitely sounds true. Yeah." You don't bother to fact-check, because it aligns with your bias.

**Mat Ryer:** Well, there we go. That's dangerous. Yeah, if I'm like, "Yeah, I did do that song. It did go down well." That's reality now for me, like the potato skin thing. Maybe that's not even true. I was really pleased I got that right, but... Did I? \[laughter\]

So what do you think about this letter that Elon Musk and a few others signed, saying we actually should pause this now, and just let's take a step back and think about the implications of this?

**Johnny Boursiquot:** Yeah, there's too much money around it. Can't put that genie back in the bottle. Too much money is at play. You know, it's the good old profit motive. There's no way we're gonna put a pause on this now; the genie's out of the bottle.

**Natalie Pistunovich:** Last episode I apologized to IKEA for things I said in an earlier podcast, so I will be more moderate with my answer as well. As a human, I think there are pros and cons to AI.

**Mat Ryer:** Natalie, it's taken over your brain... \[laughter\] It's taken over. Well, Elon Musk was one of the early investors in OpenAI.

**Natalie Pistunovich:** \[55:59\] He was even one of the founders, yeah.

**Mat Ryer:** Was he?

**Natalie Pistunovich:** There's a podcast by Lex Friedman, who's interviewing lots of interesting people on lots of interesting topics, and the very last episode, the recent one, is with Sam Altman, and this was recorded before this letter, but there's already a reference to some of the communication between Elon Musk and Sam Altman, and the negative thoughts that Elon has, and how Sam feels about that... And I think it's interesting to listen and to hear perspectives.

**Mat Ryer:** Okay, maybe we'll link to it in the show notes, presumably, as long as the profit incentive doesn't stop us from cross-promoting podcasts, which I don't think it does. But hold on... OpenAI - you pay for it, don't you? Hang on, sorry, I've got some other AIs just interrupted me. My Google Home has just told me it doesn't understand me.

**Johnny Boursiquot:** Yeah, those seem like toys in comparison to the new stuff, don't they?

**Mat Ryer:** When it is that good, I think that's -- like, I'll be honest; I'm hopeful that this is going to enrich and improve things for humanity. It should be a tool that humans use still.

**Johnny Boursiquot:** And they will use it for good and bad, like every tool.

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** And I think the strategy of making this as public as possible, and lots of work into things like ethics and moderation is not the perfect solution, but probably one of the better ones, rather than keeping it either secret, or fully just available for anybody to pick up and do anything they want.

**Mat Ryer:** Yeah. But it is funny that it's called OpenAI, but it's not; you have to pay for it.

**Johnny Boursiquot:** There's nothing open about it. \[laughs\] Or maybe the bulk of it. Oh, there's a term for that in corporate America... Closed source; it's open for some things... It's open to my friends, but closed to everybody else, kind of thing. Yeah, we have a term for that somewhere.

**Natalie Pistunovich:** And whenever they have new tools, there is an alpha, a beta, and then it's general availability. And this is one of their tools of making sure kind of to see the few that are yes; some circles are using it to know how to moderate this better, to safeguard it better, and then when it goes to general availability, you see a lot more, but you're slightly more prepared, because you saw some of the safe attacks, you know, the white hats. But also, the research part. The model itself is not public, but all sorts of weights and other things that allow other teams to reproduce that is public, and that's why you hear of all those alpacas, and llamas, and all the other variations that people in different universities are managing to create equivalence.

**Mat Ryer:** I mean, eventually, the only way we're going to be able to know if we're communicating with an AI or not is we're gonna have to ask it to draw hands. "Draw some hands, please, as part of your job application."

**Natalie Pistunovich:** That train has sailed...

**Mat Ryer:** Have they fixed that?

**Natalie Pistunovich:** And that ship has plated. \[laughs\] You should see the outcome of the latest DALL-E. I'll include an image in the show notes, but basically, the fingers are fine.

**Mat Ryer:** Oh, no... That was the only thing we had left. Dang it.

**Natalie Pistunovich:** But in that podcast that I mentioned they also discuss about "Is it conscience?" and even how will you know whether it has consciousness or not.

**Mat Ryer:** Yeah, yeah. Well, I mean, it's a language model, ain't it? Probably not gonna have consciousness... But then I assume that about a lot of people, so I'm probably not the right person to ask. Has Golang Johnny got any weak spots? \[laughter\]

**Johnny Boursiquot:** Like on his body, or generally...?

**Mat Ryer:** What's your Achilles heel, Johnny?

**Johnny Boursiquot:** Speaking of Achilles - yeah, I did tear my right one...

**Mat Ryer:** Uh... Ah...

**Johnny Boursiquot:** Yeah, yeah. So now I have a matching set. I have a matching set. I had surgery... I'm able to stand up and walk around now as of like, what, two or three days ago... But yeah, I've been laid up a bit while I healed.

**Mat Ryer:** I'm sorry to hear that. That doesn't sound fun. I mean, I've never done anything like that, but I have snapped a string on a guitar, and I assume it's basically the same...

**Johnny Boursiquot:** Um, a little bit more painful...

**Mat Ryer:** Well hang on... Because the string did spin around and dig into my hand. The tension, as it released it, it sprung around and at the end of it stuck into my hand, so...

**Johnny Boursiquot:** \[01:00:10.02\] So it gave you a little booboo, and you put a bandaid on it? \[laughter\]

**Mat Ryer:** Yeah, it gave me a little booboo, yeah.

**Johnny Boursiquot:** Yeah? A little booboo?

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Okay...

**Mat Ryer:** Sorry, how did you do it, Johnny? I don't wanna --

**Johnny Boursiquot:** Oh, I was just playing some bball with my kids, and not even trying to be a hero, you know... Since the first snap, I've long since retired from my bball days. And yeah, I was just taking it easy, shooting some hoops with the kids, and... Yeah, the thing is, I've come to realize --

**Mat Ryer:** Just chillin' out, Max relaxing alcohol

**Johnny Boursiquot:** Yeah, exactly. Exactly. Yeah, but what this has led me to believe is that as we get older, our joints and our tendons and our muscle really just tightens up. So if you don't add some flexibility to your regimen or routine, like maybe some yoga, or whatever it is, whatever along those lines, it's very easy for the body to just become brittle. So yeah, I think I'm gonna start adding that to my routine. Because life after 40s... It's a thing. Things break more easily... Things don't heal as fast anymore... You know, it's a thing.

**Mat Ryer:** Oh, I'm sorry to hear that. I'm quite bendy. Like, for example, that's my foot.

**Johnny Boursiquot:** Wow. Okay...

**Mat Ryer:** I've always been really bendy. Which is good, because if I get in a fight, I can sort of just bounce --

**Johnny Boursiquot:** Contort your way out of it.

**Mat Ryer:** Exactly. And they're like "Where has he gone?" Like Eugene Tooms from X Files, and I'm gone.

**Johnny Boursiquot:** Right, right, right. So the only weakness is guitar strings then.

**Mat Ryer:** Yeah, they'll get you. It was a G string as well, so...

**Johnny Boursiquot:** G-strings are your weakness, okay.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** There's a couple ways to interpret that but okay... We can be clean, we can be clean.

**Mat Ryer:** Yeah, please. That's a kind of string on a guitar, by the way, for anyone that doesn't know...

**Johnny Boursiquot:** Okay. \[laughs\] It's good to clarify those things.

**Mat Ryer:** Yeah, we use letters in music to describe the notes, like A, B, C...

**Johnny Boursiquot:** Sharp...

**Mat Ryer:** Quite a good name that is, actually, I think.

**Johnny Boursiquot:** C-Sharp, yeah. That's a pretty good one.

**Mat Ryer:** Yeah, it's a good name.

**Johnny Boursiquot:** Yeah, it is.

**Natalie Pistunovich:** We'll see those letters in English, and in other languages.

**Mat Ryer:** What do you mean?

**Natalie Pistunovich:** To describe sounds, I guess, as well.

**Mat Ryer:** Yeah.

**Natalie Pistunovich:** Same as in music.

**Mat Ryer:** Oh yeah? Really? I didn't know that.

**Natalie Pistunovich:** When I say "We use in English", being the only non-native person here...

**Mat Ryer:** What do you mean you're non-native?

**Johnny Boursiquot:** I'm not native. I'm not a native English speaker.

**Mat Ryer:** Oh yeah, that's true.

**Johnny Boursiquot:** My languages - like, they couldn't be farther from English. My native languages are Haitian Creole and French. So I had to learn English, like everybody else.

**Natalie Pistunovich:** I mean, you do have a French last name, but okay...

**Johnny Boursiquot:** I do have a French last name, yes, indeed, if it was an obvious... \[laughs\]

**Mat Ryer:** You do have an interesting accent though, for sure...

**Johnny Boursiquot:** It is there, you have to pay attention though.

**Mat Ryer:** Well, I say this a lot, but I interact with lots of people from all over the world, in English, and I'm blown away by the quality, and how effectively you can communicate... And like humor, how humor works... And sometimes it's very subtle with the language, and it still works, and I'm just so impressed by people that have all these other languages. Can you speak some Haitian Creole then?

**Johnny Boursiquot:** Yeah. A very common sort of way to greet one another...

**Mat Ryer:** Oh, I can understand it. I think I can speak it.

**Johnny Boursiquot:** \[laughs\] No, that was a preamble...

**Mat Ryer:** Oh, no...'

**Johnny Boursiquot:** So the next time you meet somebody and you happen to know they're Haitian, you can just say "Sak pase?"

**Mat Ryer:** Oh, I'm not saying that.

**Johnny Boursiquot:** That means "How are you?" or "How's it hanging? How's it going?" And then they likely will respond "Nou ap woule." which means "We're rolling. We're on fire. We're doing it. We're hanging."

**Mat Ryer:** How do you say the first bit?

**Johnny Boursiquot:** So I'm going to ask it to you, "Sak pase?" and then you're gonna respond with "Nou ap woule." Ready?

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Sak pase?

**Mat Ryer:** Nou ap woule.

**Johnny Boursiquot:** That's right. You've got it. There you go. Your first lesson in Haitian Creole.

**Mat Ryer:** Does that mean like not bad?

**Johnny Boursiquot:** No, it means not "We're rolling. We're burning. We be burning. We're going."

**Mat Ryer:** What do those things all mean?

**Johnny Boursiquot:** It means "We are doing it. We're moving. We're rolling."

**Mat Ryer:** Wow. That's amazing. Natalie, you speak other languages as well, don't you?

**Natalie Pistunovich:** Do I?

**Mat Ryer:** Yeah... I know of at least three you speak...

**Johnny Boursiquot:** We've transitioned to non-AI language models, to actual human language models.

**Natalie Pistunovich:** I've been trying this entire episode to plant as my human fellows, something-something. Like my kid friends. My kid fellows; what does that mean? My fellow kids?

**Johnny Boursiquot:** Yeah, that's -- what's the name of the actor? I know what you're talking about, yeah.

**Mat Ryer:** My fellow kids.

**Natalie Pistunovich:** The one from Armageddon. Our fellow kids, yeah. To my fellow humans.

**Johnny Boursiquot:** Hello, fellow kids... \[laughs\]

**Mat Ryer:** I like that. We're all kids of someone, aren't we?

**Johnny Boursiquot:** Found it. Steve Buscemi. That was a skit.

**Natalie Pistunovich:** Yes!

**Mat Ryer:** Ah, yes.

**Johnny Boursiquot:** Steve Buscemi.

**Mat Ryer:** Where's he's got a baseball cap on.

**Johnny Boursiquot:** Yes, a baseball cap backwards, and he's hanging out to like a skateboard... \[laughs\] He's like ancient, showing up at a high school... "Hello, fellow kids..." \[laughter\]

**Natalie Pistunovich:** We need to add that in the show notes.

**Mat Ryer:** Yeah, we'll put that meme in there...
