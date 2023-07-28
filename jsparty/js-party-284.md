**Amal Hussein:** Hello, JS Party listeners. We're so excited to be back with another amazing, special show today. We have a very special guest on, and before I introduce them, I'd like to welcome my co-panelist, co-rider for the day. Hello, Kball. Welcome.

**Kevin Ball:** Hello, hello. I'm excited. This is gonna be Lit.

**Amal Hussein:** Yeah. If anybody's counting puns, that's like one on the pun meter so far. And spoiler alert, our special guest today is Justin Fagnani. Welcome, Justin.

**Justin Fagnani:** Thanks. Glad to be here. Thanks for having me.

**Amal Hussein:** Yeah, I know. So the last time Justin and I were on a podcast together was in March of 2018. He was on my OG podcast called The Web Platform Podcast, and we were actually just kind of welcoming Lit into the world in some form of its current iteration. I think that a lot has changed in the library since 2018... But it's just so great to kind of like be full circle, back with you today, in the far, far future, kind of talking about Lit. And so before we get into Lit, just, can you tell us a little bit about yourself, Justin?

**Justin Fagnani:** Yeah, so I've been working in the web space for a while now. I'm an engineer at Google; I've been at Google for almost 15 years, which I find kind of unbelievable. I never really planned on that. And before that, I had been doing small business consulting stuff... So I kind of came into Google and fell into developer tooling work there. I built a low-code application building tool called AppMaker there, and then I went on the Dart team... And then I kind of finally found my true spiritual home on the Web Components team and Polymer team at the time. I worked on tooling there, and then somewhat accidentally created Lit, and I've been working on that ever since.

**Amal Hussein:** Yeah. And so for those who are unfamiliar, could you tell us what is Lit, besides having an awesome name?

**Justin Fagnani:** Lit is a little library - that's part of where its name came from - that helps you build Web Components. You can think of it as a little bit similar to a framework, but not exactly like a framework.

**Kevin Ball:** A little framework?

**Justin Fagnani:** A little framework. That's where the name originally came from. It started with a templating system, not even a component system... And we needed to name it for npm, and it's just like, it uses template literals, it's little, it was like 1k at the time...

**Amal Hussein:** So like N number of patents; it's like pun -- there's puns on puns on puns. It's like, wow...

**Justin Fagnani:** I never thought it would stick, honestly. This was kind of a temporary name; you're like "I just need a name. I've got 10 minutes to think of one." And then for better or worse, it sticks around for the rest of eternity.

**Kevin Ball:** I mean, developers are great at naming things, right?

**Justin Fagnani:** Yeah. My best skill. Yeah, Lit helps you build Web Components. I think one of the big things about it that's not apparent at first is that how important Lit helping you build Web Components is, right? Lit wouldn't exist if it wasn't for Web Components. We wouldn't have made just another framework. So really, Lit and Web Components are kind of so tied at the hip there that you can't talk about Lit without Web Components at all.

**Amal Hussein:** Yeah, thanks for that great summary. It's really interesting to hear you speak about this, because as I've known you for many years, I've seen the kind of community pains and some of the adoption, friction to adoption because of how hard Web Components were to work with on the developer side... Just the DX around working with Web Components, and building, and working at scale... It was a little painful in Rocky, many, many years ago, and it's really great to hear that one of Lit's core missions is to kind of like smooth over that process, and being able to kind of leverage this really powerful primitive.

So you talked about Web Components being at the core... Can you kind of just walk us through the evolution of Lit? Because for those who may be familiar with you, you were also very involved with Polymer, another project that kind of was aiming to do some of this... But the standards world was in a different place at that point. So can you just tell us about the evolution of this project?

**Justin Fagnani:** Yeah. So Polymer and Lit are very closely related. One way to think about Lit is Polymer version 4. And Polymer came around at a little bit different time, when a couple of standards and browser support features were a little bit different. In particular, ES2015, or ES6, as some people like to call it, wasn't quite there yet in terms of browser support. Modules, JavaScript modules especially, were not there yet. And as part of the Web Components specs at the time, we had things like the template element, custom elements, Shadow DOM, and HTML imports... Which gave you a way to import kind of HTML libraries into the main HTML page or other HTML libraries.

So before we had a native browser support in the JavaScript module system, Chrome actually had HTML imports. So Polymer was -- it's a lot like Vue. in some ways. I think Vue kind of took a lot of ideas from Polymer. It's like an HTML-centric library for helping you make Web Components. The goals are very, very much the same as Lit. But as we evolved Polymer to keep up with the specs, and HTML imports was not going to be adopted by other browsers, we started putting Polymer into JavaScript modules, and its HTML-centric nature didn't quite fit anymore... Because you had like a JavaScript file, with HTML embedded into it, and then inside of that HTML you had Polymer's kind of custom expression and control flow language, which looked a little bit like JavaScript, but wasn't JavaScript.

\[06:25\] So that motivated us to work on Lit, which is basically like "Yes, you're gonna have HTML strings inside your JavaScript, but when you need to do logic inside of that template, let's just use the JavaScript that's already available in that context." And so that's kind of the biggest difference with Lit. And because of that, we were able to shave a bunch of like code, and weight, and concepts off of Polymer, and make things a lot smaller and a lot faster. And because it was such a big change, we changed the name. But more or less, Lit is a direct successor to Polymer.

**Kevin Ball:** So in some ways it sounds like you inverted Polymer. Polymer was sort of HTML as the structure and control flow, or JavaScript, or what have you, as like the meat and pudding inside, and then for Lit, you have a JavaScript container, and you happen to have the HTML in the middle?

**Justin Fagnani:** Yeah. And there's multiple layers. Because when you have HTML -- probably a lot of your readers are familiar with JSX, and they say it's just JavaScript. And usually, what they mean by that is not the tag part of the JSX, but it's the expressions and the logic. Your ternaries, and conditionals, and mapping over an array; that's all JavaScript. Lit is the same as that. So you have a JavaScript container, like you said, then you have an HTML-ish-looking template, and then inside of that template you have expressions and conditionals, and whatnot. And that's all just plain JavaScript. So yeah, in both -- Polymer was HTML, and then logic inside of that potentially some JavaScript, and Lit is JavaScript on the outside, and then HTML.

**Amal Hussein:** And you did something very clever with the HTML, which was that it's leveraging JavaScript template literals. Or sorry, JavaScript literals --

**Justin Fagnani:** JavaScript tagged template literals, yes.

**Amal Hussein:** There we go.

**Justin Fagnani:** Yeah, this is probably the biggest kind of innovation there, is that Lit doesn't use a VDOM, and it doesn't have a compiler. This makes it relatively unique amongst the framework and library world. Yet, it's really fast. It's faster than most of the popular frameworks out there on the benchmarks. And it's due to this magic quality of tag template literals, that not a lot of people know about.

Basically, if you don't know what a tag template literal is, if you look at Lit code, you'll see the templates are like a string, but they're using backticks, and they have this little HTML tag in front of them. And if you're using a good IDE, or a plugin, you'll get HTML syntax highlighting there... Which is nice, but the really cool thing that happens is that in JavaScript you get this reference to those strings that are part of your template, and it's like a stable reference. So every time you execute a function that contains the same HTML backticks, that HTML tag is a function that gets the same exact strings array passed to it for that template every single time. And so what we do is we do some prep work, we create an HTML template element out of the template you write in JavaScript, but we only have to do that the very first time we ever see a template. After that, we can do things like clone a template if you're rendering that template to a new spot, or actually just skip all cloning and not even looking at or touching the DOM for the static parts of the template, but just go directly to the values and update them if necessary.

So we get kind of like a VDOM-like behavior. We only make the minimal DOM updates, but it's actually way more efficient than VDOM... Because we're not holding on to an old VDOM and a new VDOM, we're not doing a diff, and we're not walking the DOM that's in the page. We're just jumping right to where the expressions are in your template. So it's a little bit like the benefit you get from signals in some way, although we have to kind of update all the expressions in a template at once, but without a compiler, with a very simple syntax.

**Kevin Ball:** \[10:01\] Can I ask a question there? So how is the actual update flowing into the DOM? What is doing that?

**Justin Fagnani:** So the main entrypoint to at least the template system, which is called LitHTML, is a render function that looks a lot like React's render. And you give it a template expression, and then you give it a container to render into. There's a couple of different phases here. The very first time you render a template, we're going to create an HTML template element, populate it with the strings from your template, kind of walk through it and remember where the dynamic expressions are... And then the very first time it's rendered, we're going to clone that template, and append it into the container you render it to. And then we jump to where all the expressions are, and we fill it in with data.

When you update, we actually leave a little marker in the DOM, a little property that says "This DOM here was rendered by Lit, with this template." So the next time you come to render an update, we go "Are you rendering the same template that was already rendered here?" And if so, we don't do anything with the DOM. We just skip to where the data is and update the data. And each data point will remember what the old data was, and only update that data if it changed. So yeah, there's the initial passes, you do like three steps, and the update passes - you just jump right to the last step.

**Kevin Ball:** Got it. And so how are you tracking where that data is living in the actual HTML, so that you can jump in and do those edits in place?

**Justin Fagnani:** That's a fun question. So what we do on the first pass is we walk the DOM, and we have like a little counter, a node index about where we expect to find those expressions. And in the HTML template, we actually place like comments where the bindings would be. So after the initial clone, before we put the initial data in, we walk the DOM and we go -- we expect to find a comment at \[unintelligible 00:11:50.17\] So we'll do a tree talker and walk down, we get to 12, and we go, "Okay, here's our comment that says where the data is going to be." Once we find all those comments, we make a data structure we call Parts. And that just kind of lives with the template instance, and it says, "Okay, first binding, here's the part for it", and it's a child part, where you might put text, or whatever. The second binding is an attribute part. It's at this node index, with this attribute name. So we have just a couple of part classes... And so they maintain direct JavaScript references into the DOM, so you don't have to do any walking after that... And they remember their old value.

And the cool thing about this technique is it's very, very fast to update with a little bit of memory overhead just to remember where these things are. But we've been working with Apple, and Chrome and whatnot on a couple of proposals called template instantiation, or DOM parts, to actually bring a very, very similar technique into the browser... So that hopefully, with very minimal code, anybody or any library will be able to kind of use this technique of clone some DOM and then get these references back into it to do fast updates.

**Kevin Ball:** Okay, so to make sure I understand properly, I'm going to rephrase what I think I heard you say. So each template that you have in Lit, you're maintaining what is essentially a lookup table, where you say "Okay, here are the sets of bindings within this template." A lookup table and a last value, essentially. "Here's the set of bindings, here's what their last value was, and here's a pointer to where this lives in the DOM, so I can update it as fast as humanly possible." And then when an update comes through, you go through each one of those and you say "Did this change? If no change, no worries. If so, follow that pointer, plop it into that location of the DOM."

**Justin Fagnani:** Yup.

**Kevin Ball:** How does that work with sub-templates, and things like that?

**Justin Fagnani:** So a subtemplate is just a value. This is one of the things that's very similar to JSX in VDOM, is that a template expression returns an actual JavaScript object. So the sub-template will be an object that gets rendered into a binding. And at that point, we just recursively repeat the whole process. We go "Have we rendered this here yet?" If not, we prepare the template, and clone it, and whatnot. And if we have, that template instance also has that data structure of that lookup table, and we jump into that.

\[14:03\] And having this identity of templates from the JavaScript tag template literal, the template strings - it lets us pretty trivially handle the case; we have like a sub-template, but it's a conditional, and you're swapping between two sub-templates... Because we go "Have we rendered this template here?" "Yes. Do it." If the condition switches and you render a new one, we're like "Have we rendered this template here?", the answer's no - clear that and start the process over again. So composition, array.map, all that kind of stuff kind of just falls out from that.

**Amal Hussein:** That's -- yeah, thank you for walking us through the underbelly of your rendering business logic. That was very cool. I was curious, are you using symbols, or just hashes? Or what are you using to kind of manage your references?

**Justin Fagnani:** It's actually an array. So if you look at a tag template literal, the way that's given to a tag function is you get an array of the strings, and you get an array of the values. And to put everything together you would kind of zip it where the values would sit in between the strings you've got. And the length of that is always the same, right? You can't dynamically add an expression inside of a template literal. Like, if your template literal has five expressions, it will always have five expressions.

So we don't even really keep a reference, we just keep an array of every time we get new values, we're gonna get an array of five. And we have this array of five kind of pointers into the DOM, so we just run through the array. It keeps it very simple and fast.

**Amal Hussein:** Interesting. And so how would you manage kind of dynamic HTML, or what feels like dynamic content, if you're kind of always relying on the references to be the same? Because in theory, I could just pass a JavaScript template into a JavaScript template into a JavaScript template, right? So...

**Justin Fagnani:** So yeah, it turns out that there's a lot less dynamicism in templates than you might think, or that a lot of systems are kind of built to expect. If you look at a template in a component, or something, a lot of it is static; even in JSX. And then you have a limited number of bindings there. And so where you do have dynamicism, like looping and conditionals and whatnot - that is happening kind of bounded inside of an expression. So you have this static outside, then you have an expression, and that expression might have some dynamicism, but it will oftentimes produce another template, which itself is a lot of static, and then expressions in it.

**Amal Hussein:** That makes sense. So 99% of the cases are handled by that; just like template composition and conditional there handles all that. There are some cases where things get very dynamic, and you might want to accept HTML as a string, and put it in a spot. Or you might want to do some things that like -- we kind of don't support because we're doing template cloning, which is like you might want to have a dynamic tag name... And that is not the kind of thing you can put into an HTML template element and clone, because in the DOM you can't change the tag name of an element.

So we kind of have two ways of handling that stuff, which is very, very dynamic. It actually ends up being unsafe. One nice thing about Lit is that because we're doing this template prep, template cloning thing, it's very resistant to cross-site scripting attacks. You can almost think about this as like SQL-prepared statements.

**Amal Hussein:** Yeah, you're also enforcing people to not use antipatterns. And also, just like React - their whole "Unsafe. Dangerously-set inner HTML..."

**Justin Fagnani:** Yeah, yeah.

**Amal Hussein:** I have a fun song about that.

**Kevin Ball:** You know, every time I see that method, I think of you singing that. I don't think we have it in the soundboard, but...

**Amal Hussein:** Yeah, we should add it to the soundboard.

**Kevin Ball:** Your voice in my head... "Dangerously-set inner HTML..."

**Amal Hussein:** "Dangerously-set inner HTML..." \[laughter\] What's so dangerous about HTML's inner parts...?

**Kevin Ball:** What's so dangerous about HTML's inner parts...?

**Amal Hussein:** Anyway...

**Kevin Ball:** Your voice documents that React function for me now, by the way.

**Amal Hussein:** Oh my God, that's hilarious. Song as a service. But... So yeah, React's dangerously-set inner HTML is like an example of that.

**Justin Fagnani:** Yeah. We have a similar thing... We probably should have named it longer and more obtuse. We just call it unsafe HTML. And we recommend not using it. I mean, you could rename it like "Don't use this API or you'll be fired." At Google we actually don't even import it into our repo. It's just not available.

**Amal Hussein:** \[18:16\] Wow.

**Justin Fagnani:** Because in Google there's like a whole HTML sanitizer thing you're supposed to use, so we force you to use that.

**Amal Hussein:** It's like strict mode for Lit. I think it's a good thing.

**Justin Fagnani:** Yeah.

**Amal Hussein:** So I guess just kind of like jumping up a few layers on the stack here... So there's some core principles that Lit is really centered around. I'd love to kind of chat with you about that. So I'd say the maybe umbrella principle is "Just what you need, and nothing more." So could you kind of speak to that, Justin?

**Justin Fagnani:** Yeah. I think maybe the overriding principle is based around Web Components interoperability. So the biggest thing is that Lit, and Polymer before it, are implementation details of your component. Like, if you're using a Lit-based Web Component, and you're not using Lit yourself, you shouldn't really be aware that the thing is made with Lit. Web Components gives you like a strong interface, and a defined lifecycle, and the browser takes care of that... And what you see using the thing is just an HTML element. And you're like "Wow, this is a cool HTML element. I wish HTML had it, but I can now install it from npm", right?

So that kind of implementation detail and kind of transparency there is like the P-zero of principles there. After that, we try to be minimal. So we basically try to give you just the things that you want in order to make writing Web Components easy, and that you get fast and lightweight components. So we give you declarative templating, which we've talked about, we give you declarative reactive properties... So using decorators, or like another form without decorators. You can declare properties of your element that will cause it to rerender when they change. We also give you a very easy way to write styles in-line. So we get single-file components, but they're in JavaScript. So you'll have CSS backticks for your styles, and HTML backticks for your templates, and we'll attach those styles to the shadow root, they're scoped... We always support all the most modern CSS, because we don't do anything with the CSS except for attach it to the DOM.

So yeah, reactive properties, easy way to write styles, declarative templates... That's really most of it. We give like a lifecycle that's a little more finegrained than the Web Components lifecycle. So we give things like update, which we'll in turn call render, which is where you write your template, and will get updated, which goes after your element has updated.

So just some little helpers... And we've heard from people that they want to write no-library Web Components; so they start writing their own base class, and then they realize that after they do everything they want to have a nice base class to use, they're basically reinventing Lit. So we like to think that it's like unopinionated enough that basically everybody would eventually discover the same things that we give to developers.

**Kevin Ball:** So Lit is the base class for writing Web Components.

**Justin Fagnani:** Yeah. Lit element. Yeah. And I hope that one day most or all of what Lit element gives you is actually standardized into some higher-level, more feature-full base class in the browser.

**Amal Hussein:** Yeah, that's really great to hear. And I know we'll chat about standards at some point in the show, and I'd love to kind of dig into how much of this shifting left is going to continue to happen as the platform continues to evolve... But - so one of your claims is simple. That Lit is simple, and that it's also fast. For anyone who hasn't seen what a Lit element looks, I highly encourage you to go to lit.dev. You spend like 10 minutes reading the docs, and you're pretty much ready to go and start creating elements. It's super-intuitive, super-straightforward. I would say you should add "simple AF" to your claim of being simple, because... It's pretty simple. So what was that like for you, kind of trying to -- I mean, it takes a lot of constraints to design an API that feels simple and intuitive. It's much harder than it looks, so I'm just curious if you could kind of share some insights onto that.

**Justin Fagnani:** \[22:04\] I think it helped a little bit that we went slowly. So at the event where I introduced LitHTML, the template library, we were also introducing Polymer 3, which was the version of Polymer that put your components into JavaScript modules. And I had made the first version of Lit like two weeks prior to that. I was leading the tools team, and doing an automatic conversion of Polymer from HTML mod imports to JavaScript modules. So it was kind of like this little side project that some people were like "Whoa, this is really cool. You need to talk about this."

But we were very aware, very cautious that we were like throwing churn onto our audience, and we were like releasing Polymer 3 on the same day. So we didn't go all-in on Lit for like a little while. And we only had the template system, we didn't have a base class that called it yet. So we wrote by hand multiple times when we needed to do examples a base class that used templates. And that base class at the time was something around like less than a dozen lines. And the way it worked is like when a property changed, and you would write a getter and setter instead of a decorator, and the setter would say like "Rerender the element", and the rerender the element call would basically go like "Am I already rendering? If so, return, and if not, await a promise." That way, you could batch up a bunch of things. And then after that promises awaited, call the render method and render it into the shadow route. And it was really like -- like I said, 10 lines, 12 lines. We wrote this over and over and over again. And it was so small, we were like "Does it really need a base class, or can we just tell people this pattern?"

So I think We resisted even having Lit element for a little while. And I think that kind of led to, like, "Well, if we're gonna have it, we should at least keep it as small as possible", and we kind of only added the things we absolutely needed to get elements done.

**Kevin Ball:** What are some of the other things that you have added, beyond Lit element? I'm looking at the API docs, and there's a few other things listed. What has proved to be absolutely necessary?

**Justin Fagnani:** Let's see... So we've added some decorators. I'm very excited, by the way, that decorators are landing now in TypeScript and Babel. And I've heard rumors of implementation starting to be done in V8. So these decorators help you do -- you know, we have @property to declare a property, @state kind of gives you internal reactive state... There's a few things with adding event options to event listener methods, or querying the shadow route... The nice thing about those is they're kind of -- we try to structure our library so everything is opt-in. So if you want the query decorator, you've got to import that from another module. And even if you're not using a bundler, that means you get kind of tree-shaking for free. Like, if you don't import it, it doesn't load.

Let's see - some other stuff that people aren't too aware of often when they start building their own class... Attribute reflection. If you use certain elements in the DOM and you set a property on them, you set an ID or a title, it'll reflect to the attribute, and vice-versa. So we will keep attributes and properties in sync, and let you kind of specify the attribute name for a property.

We'll also do things like -- custom elements can kind of upgrade late, meaning you can load their definition after you already have the element in the DOM... And that means you could have set properties on this thing that the element cares about. So when we upgrade, we'll go look for those properties, and kind of pull them off and put them into the reactive property system bookkeeping, and stuff like that.

So there are a lot of things that you wouldn't know you needed until you hit the need for it. And so one way of thinking about Lit element is just a collection of those lessons that we've learned the hard way, as people hit these needs and we added it in.

\[25:41\] And then another fun thing that I like -- actually, probably two things here. One, we have a base class that actually sits under Lit element. It's called Reactive Element. And it contains all of the reactivity, but not the built-in Lit template system. And we've actually built React and Preact base classes where you can use React to render your Web Component, and building those is just a few lines of code. You just call a react render in your update method.

And then another thing we added with Lit 2, that came out two years ago, I think, is this thing called reactive controllers. And you can think of them as like custom React hooks, in a way, but without the hook magic and laws of hooks and stuff like that. And so they're just simple objects that you can hook up to a class, and they hook the lifecycle. And that's basically where we're at. Everything else we've added since then has kind of been in separate modules, like new controllers, new decorators, things like that.

**Kevin Ball:** You alluded to interactability with frameworks like React, and things like that... And it leads to a question that I've had sort of stewing. So much of the frontend ecosystem has drifted towards these more comprehensive application frameworks. And both we've seen that kind of happening at the base level, where Vue and React and other things are like absorbing more and more pieces of what you might need to create an application... But also, we've seen a lot of innovation at that meta framework level, of like "Okay, now we have Next.js, or Nuxt.js, or what have you, that's really about a lot of the different pieces that go into structuring an application." It seems that Lit is really going after that very finegrained "Build me a component. Build another component." Are there application frameworks that have been built on top of Lit, that people end up using? Do they end up -- like, if I were to try to build a whole web application using Lit, is there an ecosystem around it that provides some of that default structure? Or am I building it all myself?

**Justin Fagnani:** I think it's still a little bit nascent on the complete out-of-the-box application framework kind of thing. We see most of our users kind of picking and choosing libraries to put together with Lit to build their application of. And the two most common things are a router, if they're doing single-page app routing, and a state management system.

So we see out there people have built Lit adapters for Redux, and MobX, and Apollo, things like that. And there are -- you can use any router you want. We also have a router in our labs system that's a little tailored to Lit. And yeah, so I think we've kind of self-selected for a crowd that likes to pick and choose their libraries that way.

Internally at Google, we've had a lot of experience with helping teams, and kind of collecting what we hope will form an application framework that I jokingly call Lit AF, but will probably not be called that...

**Kevin Ball:** Lit Application Framework. Why not? You just name it that and let other people interpret, "Oh, it's Lit AF."

**Justin Fagnani:** Yeah. "Why did your mind go there? My mind didn't go there."

**Amal Hussein:** Just call it Laf, you know?

**Justin Fagnani:** Yeah. Can you still get the .af domain name? I don't know if that's... Yeah, where was I going? Yeah, so we have a lot of experience with internal frameworks at Google that do like incremental -- they do SSR, they'll help do dynamic bundling by tracking what components are actually used in any request... They'll do incremental on-demand hydration, data fetching based on what components and what data actually got used, routing, and a whole bunch of stuff like that. And we have some prototypes of those types of things we'd like to get out there. That's one approach. That's for the people who might want to choose Lit, for both components and the whole app, and do everything there.

But at the same time, Web Components - their main goal is to be interoperable. And so we want people to be able to use Web Components and Lit inside of React, and Vue, and Angular, and inside of these other meta frameworks. So we have been working on that integration as well. So we have SSR for Lit, and currently a third party has built Vue integration for Nuxt, and we have been working on Next integration. So you basically can use your Web Components inside of your JSX templates if you add a config plugin to Next; we will like SSR those, and then hydrate them when the rest hydrates on the client.

\[30:08\] So I think rather than forcing everybody to go into a full-stack Lit framework, we want to have that option, but we want to let a lot of people -- especially because one of the biggest areas of success we have with Lit is in design systems, for teams that need to vend it...

**Kevin Ball:** Yeah, that makes sense.

**Justin Fagnani:** Yeah, they need to vend the design system to their Vue team, and the React team, and whatever... And those teams are using Next, and Nuxt, and we want to make all that work.

**Kevin Ball:** Yeah, having a truly cross-framework design system sounds phenomenal for a larger company that's not only doing that, but maybe they have their WordPress site doing something else, and other places... Like, they've got lots of different frontend frameworks.

**Amal Hussein:** Yeah, it's actually a pretty bold assumption to even make -- when you think, "Hey, you're working at the same company. This company should be using... Everyone should be on Angular. Everyone should be on React." And it's like, no; actually, there's four or five different frontend stacks, depending on what part of the company... So that's a big challenge that design system teams have often. Sometimes there's the new design system, and then there's "Oh, we can't serve every customer with React." But that's for me what Web Components were. That was kind of the goal, that was the dream. That's why they were created, right?

**Justin Fagnani:** Yeah, that's the dream.

**Amal Hussein:** ...to be able to kind of really be that baseline, because it's just leveraging the platform. And so it's really great to hear Lit is just kind of enabling that use case more, at scale. And so can we talk a little bit about who's using this? And for me, I was amazed to see the number of big companies that have adopted Lit. I've just seen some really big names on your website, including a company that I worked for; I didn't even know that we used Lit, because it was being used on another side of the company... But for like the design system that's supposed to be the future design system, supposedly... Which is great. Yeah, so who's using -- can you talk about the adoption, and who's using it, and how it's helped teams?

**Justin Fagnani:** Yeah, so a couple of things here. On the design system front, we're really trying to kind of lean into that area of success there, and we've created these framework wrappers, which even though components are naturally interoperable, a lot of times tooling and type checkers and linters and stuff don't have to do with Web Components. So we've created a React, and Vue, and we're working on Angular wrappers. That way it plugs into their type system, template type checker stuff.

And so yeah, a lot of our customers are using Lit for design systems. So Adobe, Alaska Airlines, IBM, Cisco, ING is a huge one, Red Hat, SAP, Shoelace Components, if people have heard of that one... It's like a modern Bootstrap, but Web Components. VMware, the Internet Archive... There's just a ton of these that have -- Reddit, Just Eat Takeaway... I can't even recall them all, that have built design systems that way.

Yeah, and we've also seen very interesting kind of application uses here, too. Chrome, parts of the settings UI and Dev Tools is built with Lit. Firefox migrated their UI from Zul to Web Components a while back, and I noticed recently that they're now starting to port some of their Web Components to it. So desktop applications there. ChromeOS, a lot of their built-in apps are built with Lit. And complex apps like Photoshop for the web is built with Lit.

**Amal Hussein:** Yeah, and that's huge. And for everyone who's a listener on the show, I have kind of a backlog item to get the Adobe team on here... So stay tuned, fingers crossed on that show soon. But for me, there's two elements here which are fascinating. One is this kind of investment, and just like big companies taking bets on the platform, and also wanting to kind of get the Tailwind of leveraging the platform and the stabilization factor... And like the cost factor, right? Let's be realistic, at the end of the day these are corporations, and it is just cheaper to build it once and distribute it.

So for me, Web Components are like the sleeper hit. I was chatting with Alex about this - Alex Russell, to be specific - and he mentioned to me the last time we spoke about Web Components that 17% of traffic that Google bots report back, 17% of --

**Justin Fagnani:** \[34:13\] Pageviews on Chrome.

**Amal Hussein:** Yeah, 17% of pageviews on Chrome contain Web Components, which - I mean, that's a humongous part of the internet. And so considering how large of a surface that is, and how little we hear about what component usage in the JavaScript community... I mean, it's like the reality disconnect that is JavaScript, you know? Yeah, I'm very excited by those numbers, and I think that's healthy for the web to have that level of stabilization.

**Kevin Ball:** Can I ask a question about that? So how is Lit as a project governed and run? Because it makes me anxious to have something that is becoming a big part of web infrastructure owned by a corporation, particularly one that has a little bit of a reputation for shutting down projects, even when they're used by millions of happy users... So how is that being handled with Lit?

**Justin Fagnani:** That's actually a very interesting question, because I think that consumers and tech reporters and stuff are not the only ones concerned about these topics. To be frank, as an employee you wonder about these things, too. And we do have some very, very large companies making huge bets. Photoshop isn't the only app that Adobe is building with Lit. So we take that concern seriously on our team, and there's a couple things that we're trying to do to kind of mitigate that. One of them is just keeping Lit simple. The template system is a single 1,400-line file that has tons of comments. And we just started making a big, like, how it works, kind of after-the-fact design docs, so that people can kind of come up to speed on it. And then reactive elements - another 600 lines or something; again, heavily commented.

We want Lit to have low lock-in. If the Lit team were to disappear one day, we want either the community to be able to very easily jump in and maintain it, or for almost any single person to be able to fork the project and keep their fork going. This is also why we keep Lit as an implementation detail to components. We don't want Lit to be viral within your app, because we want to be able to migrate component by component to or from Lit. And so hopefully, that's a big risk mitigation factor here, is that we want it to be easy to adopt Lit and to move away from it. We think that's the morally correct way to build libraries like this.

And the other thing that we're looking into is how to do more open governance. So this year, and especially since the layoffs that did hit our team a little bit, we have been putting a much bigger and bigger emphasis on open development practices. So open engineering meetings, doing our developer chat in Discord... Basically, trying to make it so that any person who wants to can be as much on the same level as our actually Google-employed core team as possible. And then going further than that, we're looking into what it would look like to put Lit into actual open governance.

I haven't seen a ton of projects do this yet, so we're kind of like asking around for a lot of advice and help... And we're trying to talk to our big customers, like, do they want to have a seat at the table with the Technical Steering Committee, and can we put the keys to all the resources, and copyrights, and stuff like that?

So I don't know how long that thing might take, and we have had people from the OpenJS Foundation come to us in years past, and be like "Do you want to do this?", and us being like "Yeah, theoretically, yes, but it sounds like a lot of work." And I think we're more motivated to do this now, to give everybody - like, our team, Google, the customers, individual developers, everybody, more stake, more say, and better peace of mind.

**Amal Hussein:** \[37:59\] Yeah, I think that's super-cool. And I think the output for me are Web Components. And yes, there's a library, but it's really tiny... And I'm hoping, from everything you've said, that as Lit continues to evolve, that library just gets smaller and smaller, or smarter and smarter. And so I think teams are not going to be dealing with compatibility issues, and the cost of maintaining framework code, really... Because there's a real cost there. And so I'm very excited to hear those goals.

And just getting back to the Web Component discussion, because that is really important... Like, 70% of pageviews on Chrome - that's a lot of adoption. And so what do you think is kind of behind -- like, there's the community mindshare, right? The thought leadership... What are some obstacles towards getting developers to really think about Web Component first, and "If Web Components don't meet my use case, then I'll go on to something else"? So how do we flip that? How do we flip the script so that we're thinking about building for the platform first? I'm very curious to hear your thoughts.

**Justin Fagnani:** Yeah, the ecosystem question here is very tricky. I think if you look at raw numbers, there are a lot of numbers that indicate that Web Components are successful in different ways. So there's the Chrome user metrics that show it's on a ton of pageviews... There's also npm, where we're doing more than a million downloads a week now, which puts us a little bit behind Preact... So it's like React, Vue, Angular, Preact, us, I think... These numbers, objectively, depending on how much you think these are good numbers or whatever, put you kind of above other frameworks that have a lot more hype. So there's a question, like "Are these bad numbers to be looking at? What are the numbers we should be looking at?" We also have a lot of GitHub stars, or whatever... But you don't see the buzz on Twitter, or whatever. I think some of this is because we're a little bit split in terms of marketing and identity. Like, should we be leading with Web Components, or should we be leading with Lit? There's pros and cons to each way. If you lead with Web Components, and people go to like MDN, and look at the low-level Web Components APIs, they're like "Well, how do I build a full app out of this, or even a full component? This is going to take too much boilerplate." If you lead with Lit, sometimes people lose the fact that Lit's there to help you make Web Components. And then they only just compare Lit one to one with a framework like React.

And so there's this really tricky threading the needle kind of marketing point where you want to market the good DX ways of doing these things, and potentially other friendly frameworks out there, like Stencil.js, and Fast, and whatnot. But you also want to market Web Components as like a low-level functionality. And I think figuring that out is going to be the thing that unlocks the next kind of level of growth.

**Kevin Ball:** I feel like you just have such a good line with Lit there, and puns, and marketing to developers... I'm just imagining this set of short-form videos where you're like "Doing this rapid Web Component development. Wait, it's just this code? And it's just a Web Component? That's Lit!" You could have this whole branded, "That's Lit!" kind of feel around it, that would give it this energy... But then you show, "Oh, but it's just a Web Component. Oh, but it can do that. Oh, it's only five kilobytes." Like, all the different selling points of how cool this thing is. I don't know, there's not like a slant to Web Components. They're not sexy. They're low-level, and boring, and great, because they can go everywhere, and it's just the platform, but... I don't know, I feel like you've got a much better story if you lean into Lit.

**Justin Fagnani:** Certainly... I mean, one reason why we made the Lit brand... So it used to be that we just had LitHTML as a template library, and Lit Element was the base class, and they were kind of -- they even had separate websites. I think that was very confusing, but it kind of spoke to us kind of saying "These are low-level pieces you can put together as you want." But we've heard from a lot of potential customers and consultants and stuff, you need one website that puts everything together, that has one pitch, that some enterprise IT department can compare in a way they understand against frameworks like React and Angular. So we went through like this branding exercise, and we were going to try to come up with a new name, because I was like "We can't just call it Lit." They came back and they were like "Everybody always just calls it Lit. You have to call it Lit."

**Kevin Ball:** \[42:17\] That's a wonderful name.

**Justin Fagnani:** \[laughs\] It's such an accident name. So yeah, that only just happened kind of like during the pandemic. So we actually are only relatively fresh out of the gate with like a unified brand and a unified messaging on that. So I think there's still a lot to do in utilizing that.

**Kevin Ball:** You need some DevRel people. This has potential.

**Justin Fagnani:** Yeah.

**Amal Hussein:** Well, yeah... I mean, I love the little flame that you made... I just noticed that that was a flame, after just like staring at it... So it was like "Whoa, wait a second... That's flame, it's Lit." So getting back to the feature list, and Web Components... There's way too much to cover with the remaining time we have in this podcast... But one thing I did want to call out was that there's scoped styles within Lit, and that scoping of styles is leveraging Shadow DOM, which allows for -- great for design system teams that just want something to look at and work the same everywhere, and be being able to kind of reliably say "Yes, we're confident that we can ship this." And so can you talk to us a little bit about what it's been like to incorporate Shadow DOM, and also just -- I haven't looked recently around browser support, but there was a lot of like naysaying back in the day on this... So where are we now with being able to leverage Shadow DOM everywhere?

**Justin Fagnani:** Yeah, browser support is excellent. All browsers have supported custom elements and Shadow DOM, the basic layers, for years now. I mean, that happened with Edge switched over from whatever their Trident system was over to blank.

**Amal Hussein:** Yeah. EdgeHTML I think was the engine that they created.

**Justin Fagnani:** Yeah. Trident was the one before that. So now it's -- was that 2020? I can't remember exactly when that --

**Amal Hussein:** It was definitely like 2019, 2018, I think... Early 2019 maybe...

**Justin Fagnani:** So browser support is very good. Yeah, and then in terms of like Lit, and style-scoping, and slots, which is what you use for composition... That'd be like React children kind of analog... Lit actually doesn't do anything there. This actually trips some people up, where they're like "I want Lit to do this with my styles", and we're like "We don't do anything with styles." It's the browser behavior. Look it up on MDN, it's right there.

So Lit really puts the styles into the Shadow, and that's it. So it's like, "Will Lit support CSS nesting?" It already does. Will it support some new selector? Absolutely. It already does. Like, has and not... It's impossible for it not to support it. Yeah, but Shadow DOM has been a little bit harsh for some people, because it enforces this encapsulation where people are used to being able to reach into a component and style something inside that component anywhere they want. So it's a little bit of a double-edged sword, because some teams are like "Yes, nobody can mess up my component. Now I can change the DOM, and it's not a breaking change for my users."

On the other hand, some people are like "Well, we have a design system right now where we just give teams snippets of HTML in like a style sheet. And we want to upgrade to Web Components. We can't do that if that stylesheet that they're already using can't reach inside the Shadow DOM and style stuff." So I've been trying to push on standards to help kind of bend a little bit here... I have a proposal called "Open styleable shadow routes."

**Amal Hussein:** I was like "Whoa, hold on, hold on, hold on. This whole thing was supposed to be in the shadows, and here you are, pulling it into the light." I mean, it's cool that it would be an option, so there's backwards compatibility and all that jazz...

**Justin Fagnani:** Yeah. Developers need knobs. And I don't believe in being condescending to the developers who say that they need something and being like "No, you don't."

**Amal Hussein:** Good point. It's very true.

**Justin Fagnani:** Yeah. And especially for migration, right? Maybe they have a kind of not well encapsulated, wires hanging out system today. And if you want them to be able to get to a system that's more structured and encapsulated, you need to like not make them rewrite the world.

**Amal Hussein:** \[46:08\] Yeah, 100%. We ran into a hiccup with Shadow DOM at a place that I worked for, where because constructible stylesheets were not universal in the browser, we weren't able to leverage them in the way that we wanted to, for the exact reason that you just said... So it's really gratifying to actually hear you to be pushing this proposal forward. We'll have to watch it.

**Justin Fagnani:** Yeah. I mean, who knows...? There's definitely a camp of people who are like "No, that breaks encapsulation." And they don't want to support it. And you're like "Well, yes, it does. That's kind of the point. But it's opt in, and if you need it, you need it."

**Kevin Ball:** It reminds me of the early days of a lot of web frameworks. They were like "We made the choices for you. You never have to make a different choice." And you get to a point where you say, "Well, actually, I do. So if you want me to keep using your framework, you need to give me some ways that I can plug into it. Because yes, you handled my base case, but any sufficiently complex system, you end up with edge cases where you need to be able to tinker."

**Justin Fagnani:** Yeah. And we've tried to do what we can in Lit to help those use cases. We let you opt out of Shadow DOM. But it comes with these major caveats, right? Like, now slots don't work anymore. People are like "Can you make slots work without Shadow DOM?" We're like "No, actually." That's like a browser feature. Lit is not doing anything with slots. So yeah, it's tough. I feel like there's headway there... I think some of the standards people are beginning to realize it's not just this kind of idealistic, best engineering practice use case for desktop apps, or something; that there's a messy world out there, and people are coming from even messier places... And I'm trying to convince everybody to help.

**Kevin Ball:** Yeah. If you design a standard only for greenfields development, you're gonna dramatically limit your adoption.

**Justin Fagnani:** Yeah. And I think that has been kind of the perception of Web Components for a long time. So we're trying to help them be a migration path, not just a starting point.

**Amal Hussein:** Yeah, yeah, absolutely. And kudos also to the Angular team, because they also help with custom elements, and kind of making people feel more comfortable with them, but also just like leveraging them out of the box. I'd love to see more of that.

**Justin Fagnani:** Absolutely.

**Amal Hussein:** So we've circled a little bit about governance, and we've talked a little bit about standards... Was there anything you wanted to kind of call out specifically around what's maybe next around standards that we haven't covered yet, Justin?

**Justin Fagnani:** Yeah, I mean, the standards stuff is moving really fast lately. I think there was a lull during the pandemic... A lot of interesting stuff is happening right now. So declarative Shadow DOM is a big one that has shipped in Chrome and Safari now, and it's streaming declarative Shadow DOM. So we leverage this for SSR; we're able to generate HTML that preserves the DOM and style scoping.

Let's see. Other stuff - scoped custom element registries... So right now the custom element registry where you register a tag name to go with that implementation is global. This is a proposal that I made a while back, and it kind of sat there for a little while, but we think we have most of the open questions answered, and Chrome is prototyping that. That's going to be a big deal for large enterprise apps with multiple teams.

We're also seeing -- like I said, decorators; that's kind of on the JavaScript side. For us, that's going to be a big deal, so that you don't need TypeScript if you want to have good DX there. And then also, template instantiation and DOM parts. It's kind of hard to tell those two apart, but it's basically that technique of locating the important parts in the DOM and updating them. There's some prototyping going on there, and some spec discussions. And that's really exciting, because I personally want everybody to be able to make their own Lit if they can. And there's some tricks that we've had to do inside the codebase that are kind of more complicated than I would like... And if the browser just makes it easy to make your own template system, that's amazing. And then another big one is accessibility. We're seeing a lot of improvement on the specs that let you make very accessible Web Components by default.

**Amal Hussein:** That's very cool. So yeah, it's been pretty exciting recently.

**Justin Fagnani:** \[50:08\] Yeah, that's a lot, a lot. That's like its own show. But we'll put links to all of these proposals in the show notes, so folks can check them out and follow along. This scoped custom element registry is huge. Are you the champion for that?

**Justin Fagnani:** Yeah, but I'm not really a spec writer myself, and I'm not a browser implementer... So I think I've kind of carried that as far as I can. It was kind of the point like "Okay, implementers - is this part right? Is this realistic?" And so I'm glad that on the Chrome team they've picked that up to prototype it, and prove that it works.

**Amal Hussein:** That's awesome. Very exciting. So as we kind of are wrapping up our discussion, I'm very curious, as a maintainer... I'd love to hear about what lessons you've personally learned kind of shepherding and building out this massively impactful project that's called Lit?

**Justin Fagnani:** Yeah, I mean, there are a lot of different areas of lessons here; technical, design and community... One of the biggest lessons here I think for me is the power of kind of continuity and incremental progress. I think that we had assumed in a lot of cases that because Web Components were interoperable, we can kind of make these step function changes, and that people would just kind of move by going over that step and interoperating the things. So like Polymer to Lit. I think we lost a good deal of momentum there actually when we made that change, and it would have been -- even though it would have taken more effort and time, it would have been better to basically morph Polymer into Lit over time, rather than have them both exist at the same time.

Because if you look at Vue, it's so similar to Polymer. Vue is hugely popular. Their DX is very similar. And you go "Okay, what's happening there?" Part of it might be the difficulty -- like, Web Components not being supported everywhere, or some of the things like Shadow DOM interop. But I think some of it is just like being very, very good at not breaking your users, and having incremental progress all the time. I think that builds a lot of goodwill and a lot of ecosystem there.

So the next phase we want to focus on is we're doing Lit 3.0 soon. It should be almost no breaking change for anyone. But the big thing is going to be kind of like trying to learn and adopt new ecosystem-building methods. Getting more of the community involved in building it and talking about it and whatnot. So after 3.0, that's gonna be our big focus.

**Amal Hussein:** That's so cool. I just want to give a shout-out to you, just in general, for lots of things... I saw right before we started recording this show that you posted an RFC for the npm CLI to include Google's \[unintelligible 00:52:47.21\] and I was like "Yeah, that's so cool!" And it's so funny, because last week we had Darcy Clarke on the show to talk about the massive like manifest confusion bug; really great episode, we'll link it in the shownotes, episode \#282. And he was actually -- while I was at npm I got to actually see him birth the RFC process... So it just felt like full circle. We talked about the RFC on the show a little bit, and then I saw you post an RFC to npm and I was just like "Wow, Justin... This circular world..."

**Justin Fagnani:** Yeah, we have an RFC process too as part of this kind of like involvement of people -- you know, it used to be we made a decision in a team meeting, and now we're like "We're going to do an RFC, because we want other people to see that and do RFCs."

**Amal Hussein:** Yeah, I was just gonna ask about that.

**Kevin Ball:** I will say - you were talking up Vue in a couple other places, but they are a really interesting role model of a project that went from being a benevolent dictator for life to being much more community-led. And so they might be a good role model there as well for the RFC process, and things around that.

**Justin Fagnani:** \[53:52\] Yeah, they're a big inspiration. I think Angular too is interesting, because they very intentionally and explicitly kind of create this big tent vibe... And I'm not a big marketer myself, but I see how useful that is to not just be a big tent and be like "Well, we're open to anybody who wants to come by", but actually shout that, and advertise it, make it obvious, and be like "You're welcome here. Please, come join us."

**Amal Hussein:** Yeah, the Angular community has just been like exceptionally good at this for many, many years, and they've just been leading the way in terms of community, community engagement, transparency of roadmaps, and just...NGConf, and most of the maintainer team showing up to that and engaging with the community... It's just, just fantastic. I hope to have folks from Angular here soon. I think Justin referenced Signals earlier in the show, so we'd love to have folks from the Angular team come and talk about Signals with us at some point soon.

So before we wrap, I'm going to ask you my secret question to maintainers... It's not so secret, but I try to ask this to most maintainers - what's your web wish? If you could like wave one magic wand for the web platform... And it actually can be expanded to anything; in JavaScript, anything at all. If you could, what would it be?

**Justin Fagnani:** I have one... I wonder if it's like either esoteric or involved, but...

**Amal Hussein:** Get nerdy.

**Justin Fagnani:** There was a project at Google one time called Razor, which turned into a project called Sky, which turned into what people know today as Flutter. And it was a fast subset of the web that was designed to be embeddable into other apps, and be 120 frames per second fast on mobile devices, and whatnot. Flutter is good at what it does, but it's not the web anymore. And I actually think the web could really benefit like Electron desktop apps, like mobile apps, or whatever. I just want the web to have even more reach than it does now... And I really wish it had this kind of small, embeddable subset that, say, Servo could target as a thing it could support, without supporting the whole web, or something like that. People could embed into their super-apps in China, or whatever, where micro apps come into them, and stuff. I wish that there were -- yeah, kind of the web, the good parts, as a spec.

**Amal Hussein:** As a spec. Interesting. Yeah, I didn't have that context for Flutter. What I do know is that the JavaScript and HTML and CSS that Flutter spits out when people write Dart, and it compiles to like iOS, and it compiles to Java, and that compiles to -- it creates a web output. I know that that output for the web is pretty darn -- it's hot garge.

**Justin Fagnani:** Yeah.

**Amal Hussein:** Oh, sorry, I was gonna say hot garbage, but I was worried I was gonna get censored... I can say hot garbage. It's -- yeah, not great.

**Justin Fagnani:** It's a large -- let's say it's a large bundle. You know?

**Amal Hussein:** Yeah. Bulky.

**Justin Fagnani:** I think the web is like the greatest software delivery platform ever. I don't even think that's like very unique or controversial. But also people want to do cross-platform stuff. And I think if you want to do cross-platform and target the web, you've got to privilege the web and do web first, because it's the most sensitive to code size... And I just wish -- I wish there were something a little better for that. That's my secret wish.

**Amal Hussein:** Well said, and amen to that. Your lip's to the web god ears, you know... So thank you for that. So yeah, it's been an absolute pleasure having you on the show, Justin. I hope it's not going to be like another five years before we have a conversation on a podcast again, so we'll have to have you back on air soon... And I'll put a link in the show notes to a podcast that Justin and I did in 2018 to talk about the birth of Lit...

**Kevin Ball:** Baby Amal. Baby Justin.

**Amal Hussein:** Yes. Yeah, baby, baby.

**Justin Fagnani:** Thanks for having me.

**Amal Hussein:** Yeah, it's been a pleasure. How can folks connect with you? Where can folks find you?

**Justin Fagnani:** So lit.dev is where our project lives. We have links there to all of our socials, and Discord, and whatnot... You can find me on Twitter at @justinfagnani. I keep meaning to stop using Twitter, and I also post a lot of politics and urban development stuffs, and not just web dev... So yeah, I would recommend lit.dev for like official channels on everything. And then maybe one day we'll have a blue sky, and all that mess. Threads.

**Kevin Ball:** Threads. Threads is the new hotness, right?

**Amal Hussein:** Oh, man... I can't keep up.

**Justin Fagnani:** Blue master threads, or something...

**Amal Hussein:** This is like Whack a Mole for --

**Kevin Ball:** I just want 2018 Twitter back.

**Amal Hussein:** Seriously...

**Kevin Ball:** It was so good.

**Amal Hussein:** It was so good. Yeah. Alright. Well, thank you... And I guess we'll add that to the other -- we'll add that to the web wishlist. Like, let's bring 2018 Twitter back. Like, Amen. Please, please. But anyways, so it's been a great show. Thank you again for joining us. Thank you, Kball for co-hosting... And yeah, with that said, we'll be back next week, everyone. Talk soon. Bye.
