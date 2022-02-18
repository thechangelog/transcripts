**Gerhard Lazu:** So Akihiro Kiuchi presented Jenkins CI agents, monitoring with OpenTelemetry, and Jaeger, Zipkin and Prometheus was included. And one of the goals, or one of the reasons why he did that was to minimize the downtime and setup costs of Jenkins agents. That was one of the presentation screenshots which I've seen. Now, Akihiro couldn't join us today, but we have Cyrille and Oleg joining us. We'll be talking about OpenTelemetry in your CI and why is it important... And I'm wondering what can you tell us about the presentation that Akihiro gave back in July, I believe. I haven't seen it yet. Is it live, can we watch it?

**Oleg Nenashev:** Yes, it's live. So it was a project within the Jenkins community, as a part of the Google Summer of Code this year. Akihiro was one of the students, and he chose observability with OpenTelemetry. Originally, the project was rather positioned towards Prometheus, but given the recent developments in the ecosystem, we decided to press it with OpenTelemetry, and actually to try all three parts should time allow. So metrics, traceability and logs. For us it was one of the missing parts of the puzzle, because we already have an OpenTelemetry plugin for Jenkins; Cyrille and many other contributors created it. But this plugin focuses on the Jenkins controller as one of the instances.

\[04:27\] At the same time, Jenkins itself is a distributed system, it has agents, and actually agents might prove to be quite unstable, especially if you use multi-cloud environments, if you use various cloud provisioning, \[unintelligible 00:04:38.08\] So it's essential to have some tracing and monitoring for these systems, so that you can ensure that your CI environment is operational. And of course, if you can also verify that it's cost-effective, it would be super.

**Gerhard Lazu:** Okay. So this tracing was happening on the agents, not on the Jenkins master, so that when the jobs run, there will be visibility into the jobs and into the availability of the Jenkins agents themselves. Is that right?

**Oleg Nenashev:** Yes.

**Gerhard Lazu:** Cyrille?

**Cyrille Le Clerc:** Yeah. So here we have initiated an effort to provide visibility in the execution of the jobs themselves, where we were able to break down the duration of jobs on pipelines in the different states of this pipeline. Also, we were able to track the time spent to allocate build agents. But then we didn't have detailed visibility in the steps to allocate build agents, and so we also had limited visibility to explain what kind of problems could have been happening when allocating a build agent, like cloud resources being unavailable, or maybe the Docker image you want to use being unavailable or broken, and so on. And this was an important focus of Akihiro, which was to complement the existing traces we had, the existing visibility we had on the CD pipelines, detailing the agent allocation, which is on agent communication, which are some fragile areas.

**Gerhard Lazu:** Yeah. That's a good summary. Okay, so the talk is available online, we can go and watch it... I haven't watched it yet, but I will do it right after this, because that's basically what started this conversation. And that made me actually think specifically about OpenTelemetry in our CI/CD systems, and how OpenTelemetry is this nice unifier of all different CI and CDs that we have... Because sometimes, people recommend that CI splits from CD, but you still need to understand the unit as a whole. And then what happens when you switch between CDs or CI/CD systems? One day you use one, and six months later you switch. Do you lose all that visibility? Because the things that happen in your CI/CD - they kind of tend to stay the same. I mean, they may expand in the future and become more sophisticated, but the building blocks tend to be the same.

So with this context, why would you say that it's important that we use OpenTelemetry in our CI/CD systems? Oleg, do you wanna go first?

**Oleg Nenashev:** Yeah. So first of all, I would rather disagree with the CI and CD statement. It's a subject for Holy War. Personally, I use white \[unintelligible 00:07:16.13\] because CI/CD is a methodology, it might be culture, but when it comes to automation, to tools, then actually CI and CD borders are quite blurry, and there are many other use cases, for example for operations, for organization automation - all of that needs traceability if you want to have your software delivery in place. It's not just the CI/CD.

**Gerhard Lazu:** Okay.

**Oleg Nenashev:** And this is exactly where we can talk about OpenTelemetry and other open standards. Because if any system independently creates its own monitoring and observability, you basically get lost. So when we talk about modern cloud-native deployment, with Kubernetes, you usually build your CI or CD system from dozens of different tools; each of them might have different applications and different interfaces, and then basically you end up just trying to understand what happens.

\[08:11\] Similarly to why Jaeger was introduced for cloud-native applications, we need the same for CI/CD and automation in the cloud, because we also need to draw information from these tools on multiple levels. So it might be a CI server, it might an agent, it might be just a build tool like Maven... But we need all this information to understand how is our pipeline going, and now it's also important for audit, for supply chain security, and many other buzzwords that are emerging. But overall, you need data to verify what happens, and OpenTelemetry is one of the great opportunities to provide this data across the ecosystem.

**Gerhard Lazu:** You said there something really interesting about you disagreeing that CI and CD should be separate systems... And I will want to come back to that. So that's really important; I've taken a mental note. But Cyrille, why do you think that OpenTelemetry is important for CI/CD systems?

**Cyrille Le Clerc:** I will break down the point in two different themes. The first theme is, as you have said, there is a lot of visibility in being an end-to-end view of the execution of the CI and CD processes, where distributed traces is very valuable. We see that distributed traces is a very good data structure to model the execution of CI and CD pipelines and processes. Exposing and meeting more practitioners with this proposal, we discovered that all the data of the CD processes is a goldmine. Of course, CI/CD administrators are interested in this to troubleshoot and maintain up and running their platform; they also see benefits for sizing their platform, and then we see dev teams interested in shortening their build cycles and optimizing their unit tests, their flaky tests. We discover people doing cost accounting on the platform, people doing -- I've seen process optimization, like digital transformation, agile transformation, DevOps transformation. If you want to measure your lead time on here, this is a source of data that is very interesting.

So here we see a lot of value in capturing this data on distributed traces, which is often associated with OpenTelemetry, and is very useful. Then what you said also that was very interesting for me is - you say "We want a unified view on CI and CD", and beyond this debate, is it different tools, is it the same tools? Here the distributed trace culture tells us that we can have an overall visibility across different phases of a cohesive unit. So here, whatever people choose to structure their CI and CD phases, with this visibility on the process we will be able to make this unified.

Then when you talked about OpenTelemetry - I think OpenTelemetry is a great solution. First, it does distributed traces well, in a way that is standardized, popular for people... And also, OpenTelemetry has the vision to provision unified semantic conventions, a common vocabulary to unify things together. And you said "I can have different CI and CD systems", and I remember this week I was talking with some CI platform administrators who told us "We don't use only Jenkins in our organization. Some other people use \[unintelligible 00:11:36.11\] they use maybe other tools... And we want to have a holistic vision across all these, where the CI platform is an implementation detail." This reminds me of your Dagger conversation previously. These people - they are very interested in having an abstraction to look at the CD process, rather than the details of each CI tool... And this culture of the OpenTelemetry community of creating semantic conventions that span across different tools, techniques and implementations I think is a very good match with the problems we want to solve.

\[12:13\] So I saw these two dimensions - collecting data, and also this culture of abstracting to provide a unified vision on top of different implementation details, in some ways.

**Gerhard Lazu:** So from the perspective of having a good CI/CD system, regardless whether it's one or multiple, which has a good OpenTelemetry integration, what would that look like from the moment you push some code? What is the perfect flow that you imagine that a system with good OpenTelemetry would have?

**Oleg Nenashev:** First of all, the pipeline would include multiple tools in the chain. For example, you push the code, it reaches first whatever social coding system, let's say GitHub, or GitLab... Even on this level, there are some events happening. Firstly, the system needs to process your request, it might apply its own checks, for example via GitHub Actions etc. And after that, our main CI starts, or CD. So we invoke an external service... Again, we may send WebHooks to a completely different instance; this instance provision a build executor, it may call the agent, it may be just a new pipeline \[unintelligible 00:13:23.04\] in a separate container. It starts, and then we just start executing the pipeline.

And at this level, it's also not the end, because then we invoke tools. Because nobody really build software in CI or CD systems; it's external tools, like Maven or Gradle doing that. You invoke them. So these tools are also complicated, and you also need to have visibility on this level.

So basically, in the beginning of this pipeline we should go through all these levels of tools, and for each level, ideally, we need to have some data so that we can understand what happens, what are the crossblockers for example, what are the obstacles our system experiences... And it gets complicated even more when we talk about \[unintelligible 00:14:08.25\] Basically, for each build we need a distributed trace for going deep, and hence passing context through all levels of the system is essential. I wouldn't say that this question is fully resolved by now, and I want to see much more happening on this state, but my expectation as a user is to have full observability for a pipeline as a single trace, for all levels... And I'm looking forward to see a system that actually does that.

**Gerhard Lazu:** So we understand when the pipeline starts, and what happens at the beginning. The middle is always a little bit hazy, so we can leave it like that, because it depends on what it needs to do. But I think that we all agree that when the pipeline ends, some artifact - maybe a production artifact - needs to be produced.

**Oleg Nenashev:** Yes.

**Gerhard Lazu:** Now, I know that some teams like their pipeline to end with code actually being deployed into production. What do you think about that? Do you think that that should be the last step of the pipeline? Do you think about this differently?

**Oleg Nenashev:** Well, it depends whether it's a CI or CD pipeline... Because in a CD pipeline we usually deploy as the last stage; in a CI pipeline, even if we deploy, the last stage is actually doing a lot of reporting and post-processing... Because it's not enough to deliver the software, we also need to do a lot of accounting work afterwards. We also need to process the results, compare them with previous rounds, publish whatever coverage test reports... And many of the things that happen post-factum. Deployment is definitely important for any kind of modern pipeline. There are many other activities and task-heavy activities which still need to be delivered. And all of it involves many external tools, because you can do \[unintelligible 00:15:45.09\] for reporting you may use an external tool, a SaaS like TestRail, it can be on-premise, but still, when something goes wrong, you will need to access this data, and you'll need to understand where it went.

**Gerhard Lazu:** What do you think, Cyrille?

**Cyrille Le Clerc:** \[16:02\] I would like to come back to your question on what is the right way to instrument a pipeline. What we have discovered instrumenting Jenkins and Maven and Ansible is that instrumenting well your pipeline is a journey for the instrumentation people. We have to understand what are the right spans to capture in your pipeline execution to capture the right step.

For example, on Jenkins we had to iterate to capture the right spans to measure the time it was taken to allocate a build agent. Our initial instrumentation did not capture it well, so it was hard for CI/CD administrators to really narrow down their investigation to this specific phase and understand evolving across time.

Another thing that was important for us was to iterate on the right attributes we extract from the pipeline execution that we attach to the spans, so that you can get the right meaning of the data for your use case. We've seen that there is a troubleshooting use case, troubleshooting of your pipeline execution. So here maybe you need to capture well the Git access, the GitHub URL, your JIRA URL. Sometimes you need to capture some organizational information.

If you want to be able to use this pipeline execution data to do some cost accounting, then you need to attribute your pipeline execution to teams, so maybe it's to understand what has caused your pipeline -- we are improving this on Jenkins at the moment... To understand what caused the execution of the pipeline, to be able to attribute it to the right team. Same will be for using the pipeline execution data to understand the velocity of teams on the software delivery process in different CI platforms. On your pipelines you have some concepts that are commonly used to define your business logic. Jenkins people commonly use what they call stages, which is a grouping of things; it's maybe the CI build phase, it's the QA validation phase, it's the security validation phase. So here we need to capture the right attributes on these constructs of the pipeline that are used for organizational grouping, to be sure that the data will be useful downstream for the consumers, the use case that will come one day.

**Break:** \[18:25\]

**Gerhard Lazu:** You mentioned, Cyrille, about calculating, or the spans being worked out incorrectly when it comes to job allocation and agents... And that was an interesting problem that I know that CI/CD administrators have. There are many other problems... So I'm wondering, how does OpenTelemetry help the CI/CD administrators, which I think is a very important role? It's not necessarily a person that does that, it's maybe a role that many people share. So how does this help them?

**Cyrille Le Clerc:** So as continuous integration and continuous delivery pipelines get more and more complicated, with more complex orchestration, not only getting source code and compiling it to create an artifact, but now also creating a Docker image, going through security scanners, triggering deployment in preview environments, for integration tests, or for a human to test... And this gets always more and more complicated, involving more distributed systems everywhere. So this was more and more complex to maintain up and running, with some scalability problems that are very difficult, because at some time of the day you have many teams needing to build, and then you want to reduce your infrastructure for cost optimization... These people had a problem that was increasing, and at the same time they had limited solutions for this, to help maintain and troubleshoot these problems. Usually, they are the last people to be noticed of a problem in an organization. It's the dev team who is under pressure, who has these pipelines broken, and they get very angry, they shout at people, and it creates a lot of friction. So we felt these CI/CD administrators deserve assistance.

Something interesting that we observed as well is that observability says I need to be able to slice and dice my data in any dimension. We saw when there is a CI/CD platform problem, you have to very quickly understand if this is a problem that is impacting just one team, one pipeline, maybe because the Docker image used to build is broken, or if it's a problem that is impacting a large part of your organization. Maybe dozens of dev teams being blocked, your Docker registry is broken; if it's broken, it's unavailable. Or you have a GitHub outage.

So we wanted to provide tools to help CI/CD administrators to be notified early of problems, and being able to zoom in/zoom out to understand if the problem is impacting just one, or everybody.

Here it was a very good match with the problems that observability is solving at the moment with microservices architectures and all the investments that have been done on microservices architecture observability - automated anomaly detection through leveraging statistics, machine learning, high cardinalities and metrics store... All these could benefit a lot to CI/CD administrators. It was one of the first problems we wanted to solve.

**Gerhard Lazu:** Can you think of one example, Oleg, for an administrator, that this tooling helps solve?

**Oleg Nenashev:** So for the administrator, when we talk about modern a CI/CD system, it's basically a mesh of various asynchronous processes; all these processes are loosely connected, so even if you have one mainstream pipeline which delivers here, actually, if you start looking under the hood, you may notice that main events, even in this supposedly one pipeline, actually depend on other factors.

For example, there might be a provisioning of agents, if we talk about the \[unintelligible 00:23:25.09\] for monitoring. And this agent provisioning doesn't have to be synchronous. Agents maybe share between different pipelines, and hence various outages \[unintelligible 00:23:36.06\] multiple pipelines. So being capable to trace these events would help me as an administrator to understand, "Okay, this agent is broken." For example, it has the wrong version of Java, due to whatever reason. And then I can go back and understand which pipelines were affected and restore them, if needed, and adjust my systems to reschedule them, so that my delivery continues, and my development teams do not waste time. Just one example. There are many like that.

**Gerhard Lazu:** \[24:06\] That's a good one. One thing that really got me in the past was caching in CI/CD systems. So when you have basically some dependencies which have been cached, and there's issues related to retrieving data from the cache, it's so difficult to even understand "Where does this fit into my pipeline? Does my pipeline depend on this other thing? What is this other thing? Does it just affect my pipeline? Did I mess up something in the caching? Maybe I'm running the wrong digest, or maybe something just doesn't interact with the caching system properly. That was so frustrating.

And you're right, there's all these changes that happen in pipelines, and we don't know why they're broken. We just know it doesn't work. Well, that doesn't help me much... And good luck debugging systems that you don't even know exist. That's an interesting proposition...

**Oleg Nenashev:** Right. But you have to introduce these systems, because caching is one of the most effective ways to reduce the costs of your pipeline. Even if you talk about things like single-shot agents, \[unintelligible 00:25:00.17\] etc, when it comes to real massive production pipelines, we tend to actually simplify the things at the top, like caching, so that we get better throughput, because it's more important.

**Gerhard Lazu:** Yeah.

**Cyrille Le Clerc:** Something that I identified also working on this visibility of CI/CD pipeline is that we often talk about a divergence between dev and ops, dev changing things all the time to deliver new features, new business value, and ops wanting stability. We see that on the CI/CD platform we have the same challenge with CI administrators wanting a stable platform to keep it up and running, because it's mission-critical for the company... And dev teams wanting to onboard new projects, with a new needs, new fancy requirements, and we wanted to find assistants, so that people could embrace changes with confidence. And we felt that observability would be key to create this confidence to embrace changes in the CD pipelines.

**Gerhard Lazu:** That's a great point, and it made me think of flaky tests. When everything is fine and the CI/CD system still fails, and you run it again and then it passes. So I think flaky tests, when it comes to code and developers, tend to be very problematic, especially for legacy codebases, especially for distributed systems. When you have tests and you're testing distributed systems, you have race conditions left, right and center. So how does OpenTelemetry help with flaky tests?

**Cyrille Le Clerc:** So this is on our radar, to also add observability to unit test execution. There is already a solution for Go tests; it's written by Jaana Dogan, who works at AWS, where she has instrumented with OpenTelemetry Go tests. And we have the idea that it could also work on Java unit tests or any other language, and that we could as well use distributed traces to visualize your unit test execution, the duration and the outcome, success/failure.

And where I think OpenTelemetry is very powerful is that every large organization has its flaky test detector implemented in some ways. People tend to reinvent the wheel. And with OpenTelemetry, with the open nature of its format, then we have an opportunity to create the backbone of unit test results, going through OpenTelemetry channels, which typically can be a Kafka stream. Then you will have the DevOps team -- I think flaky tests personal be something that an observability vendor will implement... But maybe it will be a DevOps team somewhere in an organization who will just connect to these Kafka streams of OpenTelemetry traces, create its own tool to process its flaky test report, and share this with the community.

With this open source community nature, I imagine that an open source solution will grow in the community, and leverage the fact that OpenTelemetry has a very flexible architecture, a popular technology with OpenTelemetry itself, and streaming Kafka, Kinesis or Google PubSub. I see a lot of traction, and I expect the solution to come soon in the community.

**Gerhard Lazu:** \[28:11\] So I'm sold... I definitely want OpenTelemetry in my CI/CD system. How do I get it, Oleg? What do I do?

**Oleg Nenashev:** Well, in theory, any system should include OpenTelemetry or APIs out of the box. It doesn't happen at the moment because OpenTelemetry is still an emerging standard... But how I would foresee it - basically, any enterprise-grade CI/CD would include a number of OpenTelemetry collectors, so that you can just connect to them and retrieve this information. And it can be opt-in, so that for example in your Helm charts, and then all your OpenTelemetry collection is configured, because -- it's a building block. If you need to do something complex to enable OpenTelemetry, then it probably doesn't achieve its goal. And once a technology emerges, I would expect that every tool just adopts that, and it becomes a commodity for any system we run.

**Gerhard Lazu:** So what about today? What CI/CD tool can I use today that has this out of the box?

**Oleg Nenashev:** Well, that's a good question, because actually almost none of the tools have them, zero

**Cyrille Le Clerc:** There are two CI platforms I am aware of who provide native OpenTelemetry instrumentation, and they are Jenkins, I am of course for integration, and also Concourse CI.

**Gerhard Lazu:** What do you need to do to get OpenTelemetry in Jenkins?

**Cyrille Le Clerc:** So you just need to install the Jenkins OpenTelemetry plugin, going through your Jenkins plugins manager. And then once Jenkins is instrumented with OpenTelemetry, you have to connect your Jenkins to an OpenTelemetry endpoint backend, which can be maybe Elastic (I work for Elastic), or maybe you can use Jaeger. If you want to use Jaeger, this very popular open source distributed tracing visualization that has been created at Uber, you will need to install a small component called OpenTelemetry Collector in between your CI platform on Jaeger, because Jaeger doesn't speak natively OpenTelemetry for the moment... And then you are good to go.

In Jenkins, with this OpenTelemetry integration we have started with traces initially, to trace pipeline execution. We have also captured health metrics. So you can also leverage our Jenkins OpenTelemetry integration to capture the health metrics of your Jenkins CI platform, route them to maybe Prometheus, or maybe an observability backend that supports both traces and metrics, Elastic being one; I work for them, but you will find many other vendors who also can consume observability signals.

**Gerhard Lazu:** And what about Otel CLI from Equinix Labs? How could we use that to get some OpenTelemetry in CI/CD systems that maybe don't support it?

**Oleg Nenashev:** It's possible.

**Cyrille Le Clerc:** That's a great point. There were two initiatives that come to my mind. I think the first one I saw came from Honeycomb, where they created a small CLI to instrument some CI platform where the platform itself didn't instrument with Otel... Otherwise, if you are on GitHub Actions, for example, or maybe GitLab CI, you would use Otel CLI as maybe your wrapper when you invoke your Maven build, as a wrapper when you invoke your Maven build, as a wrapper when you invoke your \[unintelligible 00:31:25.16\]

Also, even when you are inside Jenkins, inside a CI platform that is instrumented with Otel traces, it's still very interesting to get more granularity in let's say a makefile, because... You discuss a lot of makefiles in Ship It. If you want granularity on what's happening in your makefile, you can in your makefile wrap some calls using the Open CLI tool, so that you get finer granularity in your pipeline execution.

**Oleg Nenashev:** I'm probably a bit lazy, because I just place a shell on my agents. So I modify shell under Docker Images and, and Otel CLI is enabled by default to their full screens.

**Gerhard Lazu:** Okay, interesting.

**Oleg Nenashev:** Hackish, but it works.

**Gerhard Lazu:** Do you have an example of how to do that? That's very interesting. I would like to check it out, the code.

**Oleg Nenashev:** \[32:10\] I don't have the code with me, but basically, you can just take OpenTelemetry, you create a shell wrapper, which just sends all the command wrote in this shell to OpenTelemetry... And that's it.

**Gerhard Lazu:** Okay.

**Oleg Nenashev:** \[unintelligible 00:32:20.27\] so the envrionment which is pretty transparent to your system as long as you use \[unintelligible 00:32:20.27\] Obviously, if you use a mix of Bash, Python etc. then you will have to instrument all of these tools, which becomes a bit tricky, but still possible.

**Gerhard Lazu:** You say, Cyrille, in one of your talks, that Jenkins in production is hard... And I know a thing or two about that, because many years ago we used to pair \[unintelligible 00:32:44.02\] in Pivotal Cloud Foundry, in the platform... That was many, many years ago.

**Cyrille Le Clerc:** Yeah, indeed.

**Gerhard Lazu:** And I'm wondering - today, how would you run Jenkins in production? What would you choose?

**Cyrille Le Clerc:** We use massively Jenkins at Elastic. We use it in conjunction with Kubernetes for all modern Jenkins platforms. I'm a bit further away from this, but I think it is very important to leverage the flexibility of Docker containers to let development teams customize their build environment the way they need. The way to offer the capability for dev teams to customize or build environments with Docker, combined with the orchestration needed by a CI platform, the scalability needed by a CI platform lets me believe that you should leverage Kubernetes for this.

**Gerhard Lazu:** Would you agree, Oleg?

**Oleg Nenashev:** Yes, and no, because you \[unintelligible 00:33:36.14\] should be similar to your target environment, especially if you want to do integration tests, and based on that, a lot of "depends". So if you deploy cloud-native applications, then yeah, most likely you will have to run Jenkins and Kubernetes. But it's not necessarily the case.

What I would like to say, if you talk about modern Jenkins management - everyone heard about Jenkins plugin hell, and other things... And it's totally a case. But these days you can fully manage Jenkins using configurations code, and you create basically a CI/CD pipeline for your automation system configuration as well. You really have to be just Jenkins, because it can be infrastructure as code... Yes, I would definitely recommend packaging Jenkins into containers, and there are tools for it, there are Helm charts, there are operators provided by the Jenkins community... But on the low level, you should always know what you run, and you should be able to deploy \[unintelligible 00:34:31.25\] whatever is your target environment.

**Gerhard Lazu:** Okay.

**Cyrille Le Clerc:** Here's something else on the way to build your continuous delivery pipelines, and related to Jenkins a bit broader... A topic you discussed last time when you met with the Dagger people is it's important to be able to run your CI pipeline, to test it, to develop it on your local computer. There are two initiatives that \[unintelligible 00:34:56.12\] company, and one other is Dagger, who said it's very important to be able to test locally on the development cycle of the pipeline. I think when you design your pipeline, it's important to have as much as possible fragments that you can test locally. So I believe in the ideas that you should have as little logic as possible in your CI proprietary orchestration language, and that you should group these in typically makefiles, to help the stability of the system.

**Gerhard Lazu:** Okay. Oleg?

**Oleg Nenashev:** Firstly, I agree that you should be able to test locally, but that doesn't mean that you cannot use pipeline definitions... Because many modern systems actually allow running pipelines locally. It's not just Jenkins... So for Jenkins we had Jenkinsfile Runner, \[unintelligible 00:35:42.20\] for GitHub there are projects as well... And it basically imposes this \[unintelligible 00:35:50.05\] So if you have proper configuration management for a system, if you can produce your production, see the environment locally, for example if you run your CI/CD system in the container, you can easily do local development and create complex pipelines.

**Cyrille Le Clerc:** \[36:06\] That's a good solution.

**Gerhard Lazu:** We will talk about pipeline development, what that looks like... But I would like to go back to the production question. How do you deploy Jenkins in production? I think Cyrille was mentioning Kubernetes... You would deploy Jenkins, a production deployment, and you would manage Jenkins via Kubernetes. And I imagine a Helm chart, or Operator? What would you go, Cyrille? Which way?

**Cyrille Le Clerc:** I am not knowledgeable enough.

**Gerhard Lazu:** Okay. What about you, Oleg?

**Oleg Nenashev:** I would go with Helm chart, to be honest, because Helm chart allows to be more flexible in terms of defining the system. Operator has a lot of advantages if you want to build a reactive system, which is basically based on Kubernetes APIs, it adds to some events, it automatically scales etc. But for Jenkins, to my experience, it's not always needed. It can be used in particular use cases. So I would go with Operators only if I was building a highly available Jenkins solution, where I would be managing controllers, automatically provisioning them, and if I had shared context between them.

**Gerhard Lazu:** Okay.

**Oleg Nenashev:** Right now it's not quite possible with stock Jenkins, so I would rather go off the Helm chart.

**Gerhard Lazu:** In that world, where you have a production deployment of Jenkins using Helm, how would you configure the pipelines? How would configure Jenkins, and then how would you configure, for example, the agents themselves? Where would that happen? How would that look like?

**Oleg Nenashev:** Everything as code, because currently, if you talk about pipelines, if you use a Jenkins pipeline, Job DSL, all these technologies can be stored as code in your repository in parallel with your project, so that when you build your project, you have a pipeline and you can test them all together... And basically, the same for agent definitions. For example, if you use a Kubernetes plugin, you can store an agent definition, again, in the same repository, so that you have your build system within your project and it's portable. Or you can have it separately if needed, but still, it should be defined as code somewhere... And I would argue that actually the entire combination of Jenkins - so for us it's a server itself, plugin, configuration, the pipeline libraries we use, and default pipeline building blocks - all of them should be just one deliverable for the end system, and this deliverable should be tested in its own CI/CD pipelines, so there is much less opportunity for mistakes at the end user pipelines.

**Gerhard Lazu:** From the perspective of code, config-as-code, do you mean just config, like Yaml, or some other format? What does that code look like?

**Oleg Nenashev:** Yes. So if we talk specifically about a Jenkins pipeline, historically it uses Groovy DSL. So it's a Groovy-like language, with some security and context requirements for failover, but it looks like Groovy, and there are multiple ways to define it. Firstly, it can be a scripted pipeline, which is basically just Groovy DSL; it can be declared \[unintelligible 00:38:53.27\] But you can also deploy them as Yaml these days.

**Gerhard Lazu:** Okay.

**Oleg Nenashev:** So it's your choice how you actually implement them, and Jenkins as a tool supports both modes.

**Gerhard Lazu:** And would you configure Jenkins using the Kubernetes API, or would you target the Jenkins master node directly? How would that work?

**Oleg Nenashev:** In my case, I would rather use for agent management, because if you put it in Kubernetes, it will be still a question how do you actually retrieve these configurations into Jenkins... And ultimately, it doesn't matter, because it's still a system in the same repository. It doesn't matter how exactly it's deployed. Kubernetes inside Jenkins just gives you more flexibility, because if needed, you can change in flight, without redeploying significant parts of your system.

**Break:** \[39:41\]

**Gerhard Lazu:** Oleg, I would like us to come back to the conversation that we started having and we've put a pin in it, around separating the CI from the CD concerns in your system, which gets code out into production. What do you think about that? Do you think you should separate them or you shouldn't? And why.

**Oleg Nenashev:** I would say that generally, you should.

**Gerhard Lazu:** You should. Okay.

**Oleg Nenashev:** Yes. It might be still the same service per se in terms of deployment, but logically, CI and CD pipelines are significantly different. So there are different requirements, there are different implementation paradigms... So when you develop your delivery system, you would rather split that. For example, if you create a script, you shouldn't write a built in deploy a makefile target. You just create two ones, with separate implementations, and you can maintain them separately and modify and test them separately if needed. This is the main difference.

If you talk about CI/CD as systems, I would rather say it's an implementation detail, because what we want is that systems work for our use case. If they work, it's perfectly fine.

**Gerhard Lazu:** I know that in a previous episode we talk about using something like GitHub Actions for the CI part, which builds, gets the dependencies, runs the tests... And then something like Argo CD for the deployment part, where you have the artifacts, and then Argo CD just reconciles whatever runs in Kubernetes with the artifacts that were produced by our CI system. And I felt that was a good idea. What do you think, Cyrille?

**Cyrille Le Clerc:** Something that comes to my mind here is that we are in a world where we want to automate more and more the deployment of what we produce. So even if we decide to use two tools, or maybe to put some boundaries for security constraints, security of the supply chain process, we still need a very automated way to trigger the deployment from the continuous integration phases. And in this sense, I am wondering if it's more a delineation of tools, for some reasons like best tool for the job, or security... But your two processes remain completely connected together, maybe with a kind of GitOps approach, where a Git Yaml manifest is sitting between the two processes... But the processes would remain integrated and connected together.

**Gerhard Lazu:** Well, I can tell you, what we changed about the whole Changelog setup a couple of years back, where we decoupled -- we used Concourse, by the way, to run the builds, run the tests, and even deploy. That's what we used in the past. And we used Ansible and Concourse; that's what the setup was. And then I think 2019, if I remember correctly, we went to managed CI, so we started using Circle CI for the steps build and test... And it stops currently today, depending on the branch. So the master branch is the one that produces a container image, which gets pushed to DockerHub. And that's where the CI part stops. As for the CD part, we use something called Keelsh, and we're meant to replace it, but that's what we even today make use of, Keelsh, to watch the image... And when there are changes to the image, it will pull down the latest version automatically; there's nothing to be done, because you always want to run the latest version.

So in that world, we can have multiple copies of production, whatever that means, and all we have to do is tell it "This is the artifact(s) that we want you to run. Whenever there's an update, run the latest." So we decouple the deployment concerns from the integration concerns, and we can change the CI, we can produce those build artifacts whichever way we want, even locally if we really want to... Not a good idea, but it could be done. And it works. I'm not saying it's the best way, but it's what works for us.

**Oleg Nenashev:** Yeah, it's a good approach, because the CD system will be eventually more complex than CI, even in this case... Because it's nice to say that we just download the artifact, but when it comes, let's say, to failover - failover is a must for CD - then of course, various kinds of scalability concerns... Then you get a huge CD system, and having proper tools for that is definitely nice.

**Gerhard Lazu:** \[45:59\] This is a question for you, Oleg... What does your process of developing a CI/CD pipeline look like?

**Oleg Nenashev:** So in my case, I develop pipelines locally. I mostly use Jenkins (surprise, surprise). I also use GitHub Actions quite a lot. In both cases, I run pipelines locally, I verify them... And in both cases, I try to minimize the amount of code and business logic that goes into my user definitions, whether it's Yaml, or whether it's Jenkinsfile, because I want to have a library of common steps... For example, if I deploy my application, like publish to Docker Hub, it's just a common step. Or if I build a Maven project, it's still a common step.

It happens usually that there is a pipeline library that implements these steps; well, these pipeline libraries, especially in Jenkins, you can create test frameworks, you can verify them. Finally, I end up with my pipeline itself just having several lines of code, which is basically configuration, not the pipeline definition itself. Though the pipeline exists separately, as a separate deliverable, which is verified, which is tested against \[unintelligible 00:47:02.21\] configurations, and which can be reused quickly \[unintelligible 00:47:06.29\] to implement a different pipeline, for example should I decide to change how I deploy the system, or even how I build the system.

**Gerhard Lazu:** And do you have an example that you can share with us, for us to see what that looks like, the end result of that process?

**Oleg Nenashev:** One of the examples you can take a look at, the jenkins-infra/pipeline-library - this is the Jenkins pipeline library we use for building Jenkins companies. You have something like 1,800 plugins available now at these centers, and basically we have two standard ways right now, Maven and Gradle. So for this, of course, we offer a pipeline library. It is very complex inside. For example, there's a common state build plugin, and it has something like 300 lines in the pipeline library... But for end users, like our Jenkins plugin developers and maintainers - they just get this build plugin step where they pass several options, like whether they want to build on Linux, Windows, which are the Jenkins core versions they want to test against... And that's it. So it's basically one or two lines; you can take a look, I'll share them \[unintelligible 00:48:07.27\] it's all open source, and it's all accessible. Take a look.

**Gerhard Lazu:** I will. Thank you for that.

**Oleg Nenashev:** And there is test automation for both unit tests and the integration tests there.

**Gerhard Lazu:** Thank you. I'll definitely check that out, and I'll also include it in the show notes. Cyrille?

**Cyrille Le Clerc:** Listening to you, it reminds me something that I saw when I was working on continuous delivery/continuous integration, when I was project manager at CloudBees two years ago... It's the importance of standardization of the processes. We should manage the CI/CD pipelines of applications of microservices as cattle, not as pets. I see this as a question on observability, where the observability of your different applications on microservices in your organization should also be managed as cattle rather than as pets... And I think this is a very important thing for your operations to remain sustainable.

**Gerhard Lazu:** Speaking about important things... Dan Lawrence was saying this: "Your build system should be at least as secure as your production environment." What do you think about that, Cyrille?

**Cyrille Le Clerc:** Yes, so we have seen it last year with the supply chain attacks that have been visible... It's also something for which we are thinking about on the OpenTelemetry instrumentation of the continuous delivery pipelines, where we see the importance of capturing all the trails of the CD processes, including the logs, as something critical. And we think that using OpenTelemetry, it will be easier than ever to route all your audit trail of your release process, the build process of what you ship in production, to route them directly in this very secure, long-term, cost-effective storage, being your logs management system; it could be maybe an S3 bucket, or maybe, let's say, your Splunk, Elastic, or you name it, long-term storage.

So this is what comes to my mind... And then there are other requirements for the CI/CD companies, but I am less involved in this at the moment.

**Gerhard Lazu:** \[50:13\] How do you think about supply chain security within the CI/CD space, Oleg?

**Oleg Nenashev:** I definitely support this topic. It's very important. When SolarWinds was announced one year ago, we actually had a Jenkins governance board meeting, and then a discussion at the contributors summit, and we decided to prioritize supply chain security as one of the major topics for this year for the Jenkins community.

If you have seen that, there are a lot of activities on this front, for example dependency updates... We have invested quite a lot in tooling, in dependencies \[unintelligible 00:50:44.10\] for components, if needed... And indeed, this is important. And it's important for us, because we are a second-level supplier; we depend on so many libraries, and we need to verify them, but we also need to provide a good level of trust, so that the users of Jenkins and of our systems can safely deliver their software.

**Cyrille Le Clerc:** Something that comes to my mind here is that I touched when I was working on CI, and that I see also now that I work on observability - it's the importance of capturing the right information in the bill of materials, and I think it's also an incremental journey. First you build on your Docker environment, but if you don't capture exactly the \[unintelligible 00:51:29.15\] of the Docker image that was used to run your build, it's too late. You will not be able to re-understand it 12 months later.

So I think there is an incremental journey. It's a continuous exercise to verify that the data you capture in your build are good enough to understand what actually happened. You mentioned \[unintelligible 00:51:49.22\] do I  all the details to understand what artifact was retrieved from my caching system? Have I been poisoned? And this is a never-ending exercise, in some ways, to always capture the right metadata on your build.

**Gerhard Lazu:** Is Captain Obvious involved in any of this, Oleg?

**Oleg Nenashev:** Yes and no, because I'm currently building a prototype which integrates Jenkins, OpenTelemetry and Captain... But for me, the main objective is to actually expose more information about quality gates, so when we deliver software, we can verify that all items are basically delivered \[unintelligible 00:52:26.17\] So currently, Captain is mostly built around cloud events, which is probably a topic for separate discussion. Captain exposes OpenTelemetry metrics on its own, so you can understand what happens inside Captain when you analyze, for example, quality gates etc. But it would also be great to have integrations in other directions. So when CI/CD systems supply information about the status, metrics and all deployment parameters, tools like Captain, so that they can make decisions, but the system is compliant with the expectations of our CI/CD admins.

**Gerhard Lazu:** How can we follow up on what Captain is up to these days? Captain Obvious, specifically...

**Oleg Nenashev:** Well, Captain Obvious - it was just a sneak peek into my talk, which is coming soon... And yes, it's talk driven developement because I needed to implement a few \[unintelligible 00:53:14.27\] So stay tuned. There might be an announcement in a few months.

**Gerhard Lazu:** Okay.

**Oleg Nenashev:** Captain itself is basically a project, a member of the Cloud Native Computing Foundation; it's currently a sandbox project, and there are discussions about making it an incubating project. It has a quite vibrant community, there are meetings every week, including today, developer or user meetings. So if you want to join the community, you're welcome to do so. I just joined.

**Gerhard Lazu:** That's a good shout-out. Okay. So there's a question that I've been dying to ask since we began this recording. What made you move to Switzerland, Oleg?

**Oleg Nenashev:** I moved to Switzerland because CloudBees is based there. Actually, I joined CloudBees when I was in Russia, but due to various non-technical reasons, it was more reasonable to have me in Switzerland than in Russia... And yeah, I got an opportunity, and Switzerland is a nice country...

**Gerhard Lazu:** Right.

**Oleg Nenashev:** \[54:09\] For the record, I'm a big fan of Scandinavia, but Switzerland is good, and why not. I moved there.

**Gerhard Lazu:** How long have you been in Switzerland? How long have you been living there?

**Oleg Nenashev:** Five and a half years.

**Gerhard Lazu:** So that's a long time to really appreciate the country... Unlike six months, and it's like the honeymoon period. Okay...

**Oleg Nenashev:** I like this country, and I like the city where I am, because I'm in the French-speaking part, and there are a lot of advantages here.

**Gerhard Lazu:** Which city are you in Switzerland?

**Oleg Nenashev:** Neuchâtel.

**Gerhard Lazu:** I think one of the advantages was you not needing a car, right? And you being very excited about that, where the public transport is really good. Okay... So as we are preparing to wrap this up, I'm wondering what is the most important takeaway for our listeners, Cyrille?

**Cyrille Le Clerc:** Thank you. The most important takeaway for me is the importance of the open source and standard nature of OpenTelemetry to succeed, to observe CI/CD pipelines, both to succeed in instrumenting these very rich communities of tools involved in the CD processes, and also communities that will consume all the observability data we produce, which are not only CI administrators, but as we have said, also developers for their pipelines, people doing cost accounting, people doing reporting on the delivery process... And CI/CD data are gold mines that we succeed in exposing thanks to the popularity of this open source standard which is OpenTelemetry.

**Gerhard Lazu:** Okay. That's a good one. What about you, Oleg?

**Oleg Nenashev:** I totally support this statement. Data is the new oil, and it applies everywhere, including the CI/CD world. Actually, you can use this data and not just analyze it and optimize your pipelines, but also to make decisions... Because the same approach is artificial intelligence etc. They apply not only to production systems and use cases, not only to \[unintelligible 00:56:00.12\] but also to your CI/CD. Because once you analyze tests properly, once you can get better insights and tests and coverage, once you can show developers what are the issues, you can actually improve developer velocity a lot, and you can reduce costs for your development, and more importantly, you can shorten your delivery cycle. So this data which is exposed by OpenTelemetry is essential to actually improving your pipelines to the next stage.

**Gerhard Lazu:** The thing which gets me really excited is that regardless what system you're using, as long as you emit OpenTelemetry events, you can get the same view, even when you switch between systems. That gets me really excited, because then you're free to mix and match... It doesn't really matter, just pick the right tool for the right job, but we will understand the same things, even when you move between systems. I think that's really exciting.

**Oleg Nenashev:** Yeah, it's exciting.

**Cyrille Le Clerc:** And when you operate with multiple systems in parallel, which is what happens in the real life of not small organizations or large organizations.

**Oleg Nenashev:** I'm looking forward to lay the foundations and various working groups to start working on specific standards for OpenTelemetry, so that they actually standardize the events. Because right now it's still an open question. So it's a very idealistic view that every CI system exposes the same events, the same metrics, and the same logs. It's not \[unintelligible 00:57:22.16\] yet, and there is a lot of standardization work to happen. I see such work, for example, happening in the Continuous Delivery Foundation for CD events.

**Gerhard Lazu:** Oh, yes.

**Oleg Nenashev:** But for OpenTelemetry, I would like to see that as well.

**Gerhard Lazu:** That's a good point. You're right. It's still very early days. As you mentioned, this whole new ecosystem is still very young. It only just started maybe a year ago, two years ago... It's very recent anyways.

**Oleg Nenashev:** Yeah, it's just a sandbox project in CNCF these days... But I hope that it will become incubating very soon, because the adoption for OpenTelemetry is already massive, and there are so many players in this space... So from my point of view, it's totally justified that it's transferred to incubating.

**Gerhard Lazu:** Is there anything coming in the next six months that you want to share with us, Cyrille?

**Cyrille Le Clerc:** We have just donated the OpenTelemetry Maven integration to the OpenTelemetry community... So it's moving fast, and we get feedback, and we are progressing faster. It's great. The OpenTelemetry Ansible integration - we have donated the Ansible integration to the Ansible community itself. We are iterating at the moment and we are rolling it out inside Elastic to really battle-test this... So it's moving as well. These are great milestones for us to expand the ecosystem of tools that we integrate.

**Gerhard Lazu:** Oleg, what about you?

**Oleg Nenashev:** It's kind of public, I'm changing jobs... I still cannot announce what's the next one, but be sure it will be quite interesting; it's around open source, it's around observability as well, and I will definitely keep working with Cyrille and many other contributors in this area. Looking forward to it. We'll keep working on Jenkins. I will be publishing my vision for Jenkins, and some bits of the roadmap in the coming weeks, so that if you're interested to see the Jenkins evolution - the community is strong, there are a lot of different developments happening here and there... Yeah, I'm looking forward to see what we ship to the users in just a few months, maybe years.

**Gerhard Lazu:** Well, this has been a great discussion. Thank you very much. There's so many things I need to check up on now, all very exciting things, and I look forward to what happens in six months in this space, because it's really interesting it just ties so many things together. I'm very excited. Thank you very much for today.

**Cyrille Le Clerc:** Thank you very much.

**Oleg Nenashev:** Thank you.
