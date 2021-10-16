**Kevin Ball:** Hello, and welcome back to another week of JS Party, where every week we are throwing a party about JavaScript and the web. I am your MC this week, Kball, and I am joined today by a special guest, Jason Lengstorf, Human Duct Tape at Gatsby.

**Jason Lengstorf:** Hello!

**Kevin Ball:** Jason, thank you so much for joining us. I know you threw a tweet up yesterday at some point, saying "Hey, anybody wanna talk about Gatsby on your podcast?" and we jumped all over that... So I appreciate your being willing to respond quite so quickly. I'm excited.

**Jason Lengstorf:** Yeah, of course. I was super-flattered by the response there.

**Kevin Ball:** Yeah. Well, Gatsby is a really cool project. Gatsby is something that I've been having my eye on; the next time I have a static site that I need to build, I definitely wanna pull it in; I've played with it, but I haven't done any sort of production work yet... So I'm excited to get the insider's view of what should I be doing as I do this more. Shall we start maybe by giving an overview, for anyone who hasn't heard - what is Gatsby, how does it work, how is it laid out, and all of that.

**Jason Lengstorf:** The elevator pitch for Gatsby is it is a tool, or a framework, or a platform - depending on who you ask - that will allow you to very quickly build progressive web apps that are served as static assets. So you can pull in data from anywhere on the web - any API, data source, the file system, your Excel sheets, whatever you want - and inside you work with React and GraphQL; we pull all those data sources into a GraphQL data layer to build out your pages, and various things. And when you build it, it compiles down to static assets, which you can then host on any CDN - Netlify, or AWS, whatever you want.

That is then highly optimized. We do a bunch of performance optimization under the hood, we do code-splitting, we do everything we can to make it just very fast. Once it hits the browser, it rehydrates into a fully-functional React app, so you can do anything that you could do in any traditional, single-page app, but you get all those benefits of SEO that you would get from doing server-side rendering, without the hassle of having to manage scaling servers, or dealing with production databases. It's just static assets, which means that you can deploy it, forget it; it's not gonna go down, because there's no server to go down... I mean, provided your CDN doesn't go down, but that's pretty unlikely.

**Kevin Ball:** Yeah... So Gatsby is really interesting to me, because you're sort of pushing the edge of what does a static site mean. Because you're talking about sourcing data from all sorts of things. There's adaptors (I guess they're called plugins) for pulling data from WordPress, or pulling data from e-commerce sites, or pulling data from all these things that traditionally we wouldn't think of as static, but you package them all up and go.

**Jason Lengstorf:** \[00:04:04.13\] Yeah, that's the plan. There's a big push right now in the content management world to create what are called headless CMS's. What that means in practice is -- like, WordPress has an admin interface, where you would go to edit your posts or create new things, or whatever. And traditionally, you would have to use the WordPress front-end. But when WordPress created a headless mode when they exposed an API, it means that any code can make an API call against your WordPress site, and pull that content out and then do whatever you want with it. So you can pull it into JavaScript templates, which is what we're doing with Gatsby - we make a query to the WordPress API, pull in that data into our GraphQL layer, and then you just write React components using that data.

That's true of a whole lot of CMS's now - Shopify, and I think BigCommerce just did it, Magento is working on it... So all the big e-commerce players are exposing headless CMS's. WordPress, Drupal, Ghost... And there's a whole crop of CMS startups that are only headless; things like Sanity.io, that all they do is expose this really good editing interface, and they leave the front-end implementation, the UI implementation as an exercise for the user. That means that they're driving a lot of people toward Gatsby, because we kind of do that by default; we take a lot of the work out of using headless CMS's in a headless way.

**Kevin Ball:** So let's talk a little bit about -- you know, we have this big picture, Gatsby is a way of transforming this CMS data into static sites... How does that actually work? What's the process for going from, say, I have data in a WordPress instance or in a headless CMS - how do I then set things up, what do I need to do, what's my development process, and what are the concepts I need to understand to make all this work?

**Jason Lengstorf:** From a developer standpoint, what you would do is you create your new Gatsby site; Gatsby has a CLI, so you can just Npm-install global Gatsby CLI. Then you would type "gatsby new" and the name of your site, and if you'd like, you can choose a starter; if you don't choose a starter, we'll use our default. From there, you're gonna get a source folder; it's got some pages. If you want, you don't have to use the GraphQL layer at all. You can just go into Pages, write some content, and when you build, it'll go up and be live.

If you wanna use the data layer, you go into gatsby-config.js and you can install one or more plugins. One of the things that's most exciting about Gatsby to me is that you don't have to choose a single CMS. For example, you could build a website that's going to be a blog and a shopping cart, and you would install the Gatsby source Sanity, for example, for your blog, and configure that with your API keys; then that adds a query to the GraphQL data layer that would be all Sanity blog. Then underneath that you can get the title, and the content, and all those good things that you can then use inside of your React templates.

Then, to get your shopping stuff, you would install the Gatsby source Shopify, and that would give you a list of your products, and a query where you can say "All Shopify products" and get all of the Shopify data. And you can use that in the same template as the blog stuff, if you wanted, or you could do it completely separate.

From the standpoint of the developers, they never actually see the data queries. They don't have to deal with setting up Axios or a GraphQL server, or anything like that. They just say "Alright, this is the query that has the data that I want", and you can open up -- Gatsby has a development mode where you can make GraphQL queries in the browser; so you can just open up the GraphQL Playground in your browser, type in the query until you get the data that you need, copy-paste that into your React template, and then you get a data prop on the React component that you can just use. And the data is there, you can do whatever you want with it. And you as a front-end developer - that stays exactly the same, no matter where your data comes from... Whether it's coming from a local JSON file, from a markdown file that's in a folder somewhere, or whether it's coming from a headless CMS.

**Kevin Ball:** \[00:08:20.11\] Wow... So basically you're creating a mashup on steroids, right? You have this layer that just deals with all the API stuff, pulls your data from however many places you want, exposes them as a GraphQL server, and then you go.

**Jason Lengstorf:** Exactly.

**Kevin Ball:** And all you have to think about is the GraphQL piece.

**Jason Lengstorf:** Yeah. The way that Sam Bhagwat, one of our co-founders puts this - he calls it the Content Mesh. It's the idea that you shouldn't have to use a single data source, because that's not how the world works anymore. We have so many software as a service platforms that give us the ability to manage particular types of data, in really, really purpose-built ways. It's really nice to use Shopify for managing an online store, products and inventory; it's terrible to use Shopify as a blog. And vice-versa for WordPress - it's great to use WordPress for a blog, not so great to try to use it for e-commerce. I mean, WooCommerce is actually pretty good, but these tools were built to do one thing, and in a lot of cases we end up trying to shoehorn other functionality in because we had to make a trade-off.

The Content Mesh is the idea that you don't have to make that trade-off anymore. You can choose data from whatever source makes the most sense for you. So your development team writes all the docs in markdown, because that makes sense to developers, but the content team isn't then forced to use markdown; they can use whatever they want to write the marketing blog. That's kind of the idea - we wanna eliminate this idea of trade-offs. You just use the tool that makes the most sense for the job, and Gatsby can consume that and make a really nice development experience to use that however you want.

**Kevin Ball:** That is super-cool. Does it go both ways? Is there a way to write back out through those GraphQL abstractions?

**Jason Lengstorf:** There's not, no. Gatsby's data layer is read-only. You could, if you wanted to. What we have done is you can boot up in the client-side app of Gatsby, something like Apollo Server, and then use any type of mutations that you want to send data back up. But no - by default, because Gatsby only runs at build time, that GraphQL server isn't actually available when you are viewing the site; it's only available when you're developing.

**Kevin Ball:** That makes a ton of sense. I'm really trying to wrap my head around the boundaries and edges of what we can do in this pre-compiled world... So if you were to boot up an Apollo server like that, could you point it at the same sets of abstractions, so that as a developer your thinking is still the same, whether you're writing the page that's reading data, or writing something to manipulate it?

**Jason Lengstorf:** Somebody built a tool that allows you to do that. You can run your Gatsby development data layer as an endpoint. We don't support that as a first-class thing, but it is something that we're discussing, because it does open up some really interesting possibilities.

**Kevin Ball:** Yeah, cool. Alright, I'm getting more and more excited to play with this. Let's maybe talk about when we go through and start building a Gatsby app. I took a look at a few different starter templates, and things like that... It seems like much of it feels very much like a React app; you have some page components, you may have layout components, you've got all your sub-components, and things like that... The things that felt differently, or felt like there might be some new concepts to understand is 1) just the way that you break down your data layer. There were three different things I saw in terms of unstructured data, page queries versus static query components, and then this concept of plugins and how they work.

\[00:12:05.23\] Then there's a bunch of Gatsby-specific APIs that maybe we can dig into... But let's stay at the conceptual level for a minute. Can you talk about how those differ from your standard React app that you might already be used to building?

**Jason Lengstorf:** Yeah. The development part of Gatsby is a Node app. And while you're running that Node app, you are able to do things like programmatically create pages. When you programmatically create a page, you're setting a slug for it, so if you wanted to build an About page, you would set the path to About, and that would create a page at yoursite/about. You then choose a component for that, which would be whatever React component you want to be the page-level template for your About page. At that point, it could just be that; you could just pass in that component, and that component would have hard-coded text of like "Hi, I'm Jason. This is my website." Or you can set a context object on that Create Page call, and pass in a title, some content, maybe a last edited date... Whatever you want, you can put into that context object. Then, that would be the idea of unstructured data. So you're basically saying "Here's an object of whatever I want passed into this context object, and I can use that as the -- there's a prop that will automatically apply to the component called Page Context. That gives you the ability to create pages dynamically.

If you had an array of three objects, you could loop through that array of three objects and create pages for each one, and pass in the whole object as context. That would be kind of like building yourself a little database, because each page would render the custom content that you put into the context.

Going a step further, what you're able to do is with GraphQL we put data into the data layer, and then you're able to execute a GraphQL query, and anything that goes into that context becomes available as a variable for the GraphQL query. Typically, what you'll see is you'll create the page, and the context that you send through is like a page ID, or a page slug, or something that's uniquely-identifiable for that node, and then in the component you make a query for the data.

The reason that this is really handy is that rather than having this Node file that kind of sits off to the side, and then you have a React template that gets magic data in the page context, you now have a query that describes exactly what data's gonna show up, and the result of that query gets added to the component as a data prop. So it's a little more clear where the data is coming from.

The step beyond that is that for a data source - like a plugin - you use the APIs that you talked about; the Node API for source nodes (that's what it's called). What that does is you're able to make a query to anything, a REST API. You take the result and you loop through it, and then you can create in the data layer custom nodes.

For example, for markdown we use a transformer called Remark. Remark creates nodes that are called markdownRemark. When it creates those nodes, we generate new queries - one for all AllMarkdownRemark, and one for markdownRemark. You can filter by the frontmatter or other fields on the object, and get exactly what you want.

Basically, we start with just this ability to pass exacting data. I'm going to pass you a context of title=myblog, and then you can further and further abstract that, until you're basically building dynamic datasets from third-party APIs. Does that make sense? I kind of went fast.

**Kevin Ball:** \[00:16:00.26\] I'm trying to get my head still around the flow of data here. Can you maybe walk through step by step what happens first? Gatsby boots up in its build, and it's running a Node app.

**Jason Lengstorf:** Yes.

**Kevin Ball:** What is the sequence then? Does it go through its different plugins, does it hit different hooks? How do we get from "I'm running build" to "Here's my pages"?

**Jason Lengstorf:** When Gatsby boots, it loads its plugins from the gatsby-config. Then it will step through each of the APIs in a sequence. In the description that I've given, the first thing that would fire would be source nodes, so it's gonna look at every plugin and in the site itself, for source nodes.

**Kevin Ball:** Okay. So when we talk about APIs here, these are hooks that the plugins can plug into, or you can plug into in your app...

**Jason Lengstorf:** Exactly, yes. So it's looking for any plugin or the site that's exposing a hook called "source nodes." If you're exporting source nodes from your gatsby-node.js, then we will execute that at the source nodes phase. At that point, it would, say, look at your WordPress plugin, and it would pull the plugin config to get the API keys to make the request, make a request to the WordPress API, load your posts, and then create nodes in our GraphQL data layer based on those posts that came back. And it does this across a series of different axes - the post, the authors, the tags, the categories etc. Those then are available in the data layer after source nodes runs.

So when you get to create pages, what you can do is then run a query against those data nodes and say "Give me all WordPress posts, and get their slug." Then you would loop over all of those WordPress posts and run Create Page, using a template to display your posts, and probably passing in the context of the WordPress slug. So that's the Create Pages.

When Create Page runs, it's gonna boot up that template and it's going to extract any queries from that template. There's a process for that that's kind of hard to describe, but basically you're importing the GraphQL helper from the Gatsby library, and describing your query in the body. We look for that, we pull them out, execute the query, and then add a data prop to the component. So then you're able to use the result of that query when the component actually builds.

This is where Gatsby does a little bit of magic, because those queries aren't executing on the built site; they're executing at build time, because we parse the abstract syntax tree (AST). So we'll take the page, take the component, break it down into an AST, look for queries, pull those out of the file, replace them with data, and then rewrite the file in the built format, so that instead of having a query, it's got a JSON reference to the data that we queries.

**Kevin Ball:** Interesting. Are you using Babel to do that transformation, or are you using your own AST parser?

**Jason Lengstorf:** I believe we are using Babel for a lot of it. Under the hood, we use Babel and Webpack heavily. I don't know enough about that process to intelligently say exactly how we do it. I messed with it a little bit when I was making a Remark plugin. I think it's Babel.

**Kevin Ball:** Got it. Okay, so let me play back, just to make sure that I understand. So step one is you're going through this concept of source nodes, which is basically saying "Let's utilize anything we've defined on our site, or anything a plugin has defined, to gather up data and create this GraphQL database, essentially, and all the nodes within it." Then we go through this concept of source pages, which could be you have manual code, it could have iterations, it could depend on that data \[unintelligible 00:20:02.13\] stuff to basically say "Here's all the pages we wanna generate."

Then for each page, go through, parse it, figure out what data needs to be loaded for it, and then put that data into a prop and render with React.

**Jason Lengstorf:** \[00:20:18.04\] Exactly.

**Kevin Ball:** Cool. I like it. This is so cool! \[laughter\] That's really cool. Now, long-time listeners may know I'm fascinated by the concept of using Babel to create more specialized use cases and specialized languages. It's so much more than "Here, let me use modern JavaScript." So what you're doing here, saying "Hey, we're gonna take this thing, we're gonna use the fact that we understand it as a programmatic construct, pre-render, to pre-populate all that data and then go" - oh, that stuff is so cool! I love it.

Cool. So, before we close out this segment, as we're talking about this overview of Gatsby... We talked about the different hooks that are available, and I saw in a Gatsby template there's sort of three common files for inserting those hooks or configuration - there's gatsby-config, gatsby-node and gatsby-browser.

**Jason Lengstorf:** And gatsby-ssr.

**Kevin Ball:** Oh, and gatsby-ssr, okay. I missed one. Can you talk a little bit about what types of things go into each of those?

**Jason Lengstorf:** The gatsby-node file is used to perform most of the build time things - sourcing your nodes, updating your Babel or Webpack config (because you can customize anything you want about the Babel or Webpack configs), we allow you to do a handful of other things... You can create your pages, and there are other hooks that I'm not recalling right now... But it's all related to the data layer and to creating pages, or just straight up modifying the way that your site builds.

In gatsby-browser you're able to execute things on the client side. For example, the way that Gatsby serves pages - we have that Source Pages folder - we use @reach/router under the hood, and each page is considered a route. So when you move between pages, you're unmounting and remounting the next page. And that's great most of the time. Where it becomes a problem is if you have page transitions or something - you would need to have a component that doesn't unmount. So we have some APIs in there to wrap the route element, or to wrap the page element if you wanted to apply global styles to every page, or something like that. There are a handful of APIs in there for that.

Server-side rendering - the gatsby-ssr - is the same thing, but what we use during SSR. And the reason it's not just the same between browser and SSR -- well, often they are. In a lot of cases they are gonna be exactly the same thing, but there are cases where it wouldn't be. So if you're doing something in the browser that relies on the window object, for example, that's not gonna be present in server-side rendering, so it would break. So we split the APIs so that you're able to do something on the browser that would break an SSR without any kind of gnarly workarounds.

Oh, and then the config file... I forgot. The config file allows you to set -- we call it site metadata; this would be global stuff. Your default SEO description and title, if you wanted to have your categories globally defined, and any sort of data that you want to be available - we put that into the GraphQL data layer, so you can query that anywhere on the site. It's also where you would configure your plugins, your themes, and there are a couple other options that I'm not remembering right now. All of this is very thoroughly documented. If I'm not making sense, the docs will clear up any mysteries.

**Kevin Ball:** \[00:23:57.18\] Absolutely. And we will include a link for that in our show notes, so if you're listening to this, you can scroll down and get to that; or just search for Gatsby.

Before we close this out, are there any other special/magic conventions around where things live in the file system? Those are sort of magic file names. I saw there's a source folder with standard stuff, and a static folder. Are there any other things that have magic or conventional meanings?

**Jason Lengstorf:** Let's see... Off the top of my head, the only things that have magic meanings in Gatsby are the Gatsby files at the root. The Source Pages folder is where we look for default routes, and the Static folder - anything that's in there, we will make available in the built site, without any processing. So if you have an image that you just wanted to make available, or a PDF is a good example - you can drop it into the Static folder and we'll make it available on the public site. I don't think there's anything else, but... I'm also positive there's not any other magic, but I have been wrong before.

**Kevin Ball:** Alright, cool. Well, let's take a quick break now, and then when we come back, we will be talking about more of the process for me as a developer, mindset-wise... Like, if I'm coming into a Gatsby project... You're someone who has built a number of Gatsby projects - how do you approach it, how do you think about it, what are the different pieces, and that sort of thing. So we kind of did the high-level architecture, and now we're gonna get into what it feels like working on it... But first, a quick break.

**Break:** \[00:25:37.23\]

**Kevin Ball:** Alright, let's just back into it then. Jason, can you maybe talk through - when you start a project, when you're going in, how do you think about it? Do you start from the data layer, do you start from the design? What are the different things you do to kick off? We talked a little bit about started templates, but maybe you could talk about what all is included in those, or themes, or any of these other pieces.

**Jason Lengstorf:** Yeah, so the process for Gatsby sites - one of the reasons that I'm so attracted to it as a tool is that it cuts out a lot of the ceremony required to start a new project. What I like about it is I'm able to just look at what I need to accomplish, and then usually you can just assemble a handful of plugins and get the thing that you want.

The next thing that we're working on is this idea of themes. Themes are gonna be a really big deal, because with a theme installed, you're actually able to have just a gatsby-config.js, and a folder full of markdown posts. Or if you were using WordPress, literally just a gatsby-config would be all you would need, and it would build the whole site for you. That's something we can dig into a little bit, if you want to, but in the general sense, when you're looking at building a Gatsby site, you're able to look at "What data do I have, and what do I want to accomplish?" and then you can just start writing React components.

\[00:28:09.18\] You can do that from a design standpoint, you could take a design and break it down into React components, and then load those up with data; you could do it from a data standpoint, make your queries and get the data dumped on-screen in a pre tag; that's kind of my default - make sure that I have the data available, and start grabbing out chunks of the JSON stringified dump, and making it into components...

You can take it from whichever direction you want, because the effort required to get the site up and building and in a browser, and library loading - you can do that once you have the Gatsby CLI installed. In 30 seconds you can have a site up and running at localhost in your browser. And to edit those components, it live-reloads while you're building, so you can make an edit, save it, see it live instantly. So your ramp-up time is really low, and that's something that we find super-exciting.

You're able to do quite a bit with very little boilerplate or mental overhead. You're like, "Oh, I want data. Install the plugin. Here's the API key. Let's rock." That was what attracted me to Gatsby in the first place.

**Kevin Ball:** Let's talk a little bit about the distinction between a theme and a plugin. A plugin - is that just data, or can plugins also provide pre-created pages, or things like that?

**Jason Lengstorf:** This is kind of a murky distinction, because they're technically able to do a lot of the same things. The major distinction between a theme and a plugin is that a theme has a composable configuration. Should I talk about what composition means in functional programming terms?

**Kevin Ball:** Worth doing a quick description, yeah.

**Jason Lengstorf:** Okay. So the general idea is that if you have a function that takes any value and creates another value \[unintelligible 00:30:12.26\] You would be able to put any number into that; put the 8 in and you get the number 10 back. Then if you had another function which would double it, so whatever the number is times two, then you could either call those in sequence, like call one, then call the next; or, if you use composition, you could just turn them into a super-function - add to and double. What we're trying to do with Gatsby themes is make that possible for websites.

How that works is that the theme config is exactly the same as the site config, with the exception of being able to accept options, so you can configure it. And you can build an entire site as a theme; a whole blog, with the data sources configured, and all the pages pre-built, and everything that you would need, and the only thing that's required would be a config for the data source. If you're using something like markdown, you don't even need that; you can just install the theme.

In and of itself, that's pretty cool. It's similar to WordPress, where you install a theme, and you've got a site, and you don't have to do much other than edit your content. And that is cool. But where we take this a step further is that you're actually able to combine multiple themes. You can compose them vertically...

**Kevin Ball:** Right, right, right... Yeah, I'm seeing where this is going. This is cool. Okay.

**Jason Lengstorf:** Yeah, so you're able to do a data theme that just sets up some base components, and then have a whole bunch of style themes that would style those components, but they know the data is gonna be there. But where it really gets exciting is when you go horizontal. Because then you could take a blog theme and a commerce theme and install both of them, and get a blog and a shopping cart both installed, without having to find somebody who built a theme that does both for you. And you can add tons of these. So it's a really powerful model that we are extremely excited about.

**Kevin Ball:** \[00:32:08.11\] If you have something like that - is that something that you can configure only to the extent that the theme developers has set it up? I'm thinking about - if I had a blog and a shopping cart theme, and I wanted to integrate those horizontally, I'd wanna make sure they aren't having colliding paths, and I might wanna put one in a subdirectory, or something like that. Is that something that the theme developer has to account for, or something that you as you install a theme can say "Hey, put this theme in and put it under this prefix", or something like that.

**Jason Lengstorf:** We're still working out what the conventions are for that. Themes are still pretty early days. Right now for the paths, the theme developer would need to make that configurable, but the process of doing it would be reasonably straightforward.

The part that we've considered and that's working now that we're really excited about is this concept of component shadowing. A concept that I've been talking a lot about lately is one that Chris Biscardi, who's kind of led the charge on themes, introduced to me; it's called "the progressive disclosure of complexity." The general idea here is that in a lot of cases you either get zero config, or all the config, where you can use something like Create React App and it's wonderful, and then you hit an edge case and you need to eject, and suddenly once you eject, it's like everything is yours to deal with now.

What we're looking for is this idea that "Well, you should only selectively eject things." When you want to modify something, you should be able to just modify the piece that you need to change, so you can kind of selectively choose the complexity that you wanna introduce into your app. So what we're doing with component shadowing is you can go anywhere into the source folder of a theme and declare a component in your site that will override or shadow that theme component. That would mean that if you had a blog component that has a header, and that header component is not the way you'd want it to be, you could just go into your site and do "source the theme name" and "component/header" and rewrite it, do whatever you want with it. In the theme, when it renders, it will use that shadowed component, and give it the same props that it would have gotten if it were in the theme itself.

So this allows you to selectively eject components that you wanna change, without having to inherit the entire complexity of the theme. So you can still get upstream updates, which we think is really -- to me, that's the game-changer.

**Kevin Ball:** Yeah. I remember Vue CLI switched from an eject-based Webpack config to one that uses Webpack Compose, or whatever it is, to let you extend... And it's just totally transformed the process of using it, and made it so much easier to customize little bits.

**Jason Lengstorf:** Yeah...

**Kevin Ball:** This sounds very similar in terms of components... So just to make sure that I'm understanding - essentially, you'd have a new set of magic path names; if you have a folder that is the same name as the theme, and you've matched the paths, the theme is gonna look in there first and say "Is there a component for the one I'm trying to render? If so, use that, instead of this other one."

**Jason Lengstorf:** Yes. And we set it up to avoid collision, so you have to very deliberately set up, in your Source folder, a folder with the name of the theme, and then a matching path underneath it. So if your theme has "Source Components Header", you would need in your site a "Source Theme Name Components Header". So it's very difficult to accidentally collide using that structure.

**Kevin Ball:** This may be going a little off in the weeds, but is there a way to reference back to the original component? What if, for example, I want to sub in a header, but only on some pages? Can I have a header component that shadows, that does basically an "if...else"? "If in these pages, do this component. Otherwise go back to the original."

**Jason Lengstorf:** \[00:35:59.08\] Yeah, we are ironing the last of the bugs out of it, but if the shadowed component imports itself from the theme, we don't shadow that. So you would be able to import the theme component and then re-export it.

**Kevin Ball:** Very nice, very nice. Okay, so what's the timeline on this? Themes sound awesome, but what I'm hearing is "We're still doing things."

**Jason Lengstorf:** Well, where it's at now is that the happy path is stable and usable. It is under an experimental flag in the gatsby.config, so it's "\_\_experimental themes", and then we provide an array of theme packages. We have a little bit of documentation up, we have some blog posts that walk through it, I've got a couple livestreams on my YouTube channel that walk through setting them up and using them... So it's definitely in the early adopter phase, but we've got people at big companies who are using themes in production, because it solves so many problems of working with teams... Kind of the same way that Npm allows you to package up common functionality; teams that are publishing 15 versions of the same website across different locales - they're able to just package up the common stuff in a theme and ship it out to their local themes, and then those teams only have to write the custom stuff, instead of having to adhere to a style guide through completely custom builds.

So we're already seeing it in production. I use it in production on my blog, and the stability is really good. It's just when you get into the really advanced stuff. If you start doing some gymnastics, you might find an edge case.

**Kevin Ball:** Gotcha. A couple more questions about the process going into these. It seems like a lot of the guts of these (knock on wood) is gonna be wrapped up in plugins and themes. If you run into something that isn't covered by one of those... Say I need to write a new plugin - what's the process for that? Can I develop it inside of my site project, or do I have to have it as a separate package that I'm importing? How does all that work?

**Jason Lengstorf:** We have an ability to develop local plugins. You can create a Plugins folder... Oh, so this is another magic thing - if you have a Plugins folder, then we will look inside of that for plugins that you attempt to resolve. So if you create a "/plugins/gatsby plugin my custom stuff" and then in your gatsby-config you put "gatsby plugin my custom stuff" into the plugins array, we will look in that Plugins folder. So you're able to do local development there. We would encourage you not to, because -- I mean, actually, let me rephrase that. If it's something that would be shareable, like you're building something for a public data source, or an API that you expose publicly, we would love it if you expose that to the community, because then we get the shared advantage of everybody being able to maintain it. However, obviously there are cases where you've just got something internal that you don't necessarily wanna have to stand up a private Npm registry so that you can import your own package... In that case, it's totally acceptable to use the Plugins local folder. But yeah, you can definitely develop locally and you can publish that out.

Another way you could do it would be with Yarn Workspaces, but that's a little bit more of an advanced use case, that probably isn't worth going into here. Google "yarn workspaces" if you wanna learn more.

**Kevin Ball:** Sounds good. And then for themes, the same thing?

**Jason Lengstorf:** Yes. But themes - you have to use Yarn Workspaces, because we ran into some issues with yarn link. Yarn link is really powerful, but when it hits an edge case, it tends to be an extremely confusing edge case, so we've just kind of abandoned it as a solution for themes... Because there's peer dependency problems, and it got very tangled very fast. Workspaces are predictably stable, so if you use a workspace to develop a theme, you can do it all locally, but it resolves as if it was a package, which means that when you publish it, you don't have to do any special things; you can just publish it.

**Kevin Ball:** \[00:40:10.25\] Cool. And I'm hearing a lot of Yarn from you... So is it possible to use and develop in Gatsby with just Npm, or that's not the happy path?

**Jason Lengstorf:** The vast majority of development in Gatsby can be done with Npm. Where you start to run into weird stuff is if you're working on Gatsby core, we use a monorepo -- and you could use Lerna with Npm. We have some -- well, let me just back that out all the way. Here's what I'll say - if you're building a Gatsby site and you're just going to be installing plugins and working with them, Npm is wonderful, and that's actually what we recommend in the docs. If you are going to be developing themes or working on Gatsby core, we just use Yarn because we found it to be predictable and it solves some problems that Npm doesn't. Npm doesn't have a workspaces feature, and that's one of the reasons that we use Yarn; it kind of overcomes a couple hurdles without external tools, and we kind of like that.

**Kevin Ball:** Awesome. And then one last question on the dev process... Are there any gotchas around adding other JavaScript dependencies that are not Gatsby-specific? Component libraries, third-party libraries of different sorts... Does developing for Gatsby feel like just React from that perspective, or are there gotchas to look out for?

**Jason Lengstorf:** For any React library that is compatible with server-side rendering, it's just React. If you're using something that relies on the window object, it's still just React, but you have to add a little bit of boilerplate to make sure that it doesn't break during server-side rendering. Effectively, what that means is adding a check for whether or not you're in the browser, which is just if window is undefined, then you'll know that you're not in the browser and you can kind of cancel something.

And for packages that rely on the window, we have a pattern written up in our docs for rerouting them to the no loader during the build phase, so that they don't throw errors during the build when they try to access the window.

**Kevin Ball:** Alright. Let's take another quick break, and then when we come back we will talk about future-facing stuff - what's coming up, what still needs work, and all those areas; we touched a little bit on it with themes, but I'm excited to dig in more.

**Break:** \[00:42:40.02\]

**Kevin Ball:** Okay, welcome back. Let's talk a little bit about the future of Gatsby. First off, let's start with where we are now... What still feels hard when you're working on a Gatsby site? Where are the rough edges? What still needs a lot of work?

**Jason Lengstorf:** The pieces that we are currently running up against are like - if you want to build really large sites, on the order of like 25,000 or more pages, you will run into long build times... And if you don't have high-powered build servers, you might get "out of memory" errors, and intermittent failures, and that's a huge pain. So we're working hard on solving that. We're working on a whole, broad spectrum of things, from paralellizing the builds, to implementing an incremental build algorithm, so that we're only rebuilding what actually changed... All sorts of stuff like that.

We've also got the commercial side of the business, because Gatsby got venture funding back in the end of 2017, I believe, or maybe early 2018 - Gatsby actually got funding, and we are building out a suite of Software as a Service. Well, really it's more like Infrastructure as a Service, where we have tools that are going to be custom-built for making Gatsby at scale a lot more manageable.

**Kevin Ball:** Let me dig in a little bit into the first one, because I think that is a concern for a lot of folks... It's like, "Is this gonna be a performance problem? Am I gonna run into stuff?" You put a number out there of 25,000 pages... Is it a gradual scaling up to that point, or is there like a cliff that you hit where it suddenly starts having problems?

**Jason Lengstorf:** Well, it's not a cliff; there's a confluence of factors. There are people who are building 25,000 page sites and it's not a problem. The challenge is that because all of the API hooks are configurable by every single plugin, each plugin can add a little bit of strain for every page load... And depending on how many of those plugins you're using, how complex your data is, how hardworking your React components are in terms of what strain they put on the server-side render - there are so many things that all come together to affect performance.

Also, there's network latency. For example, if you're using (I think) WordPress, one of the things that we will do is we optimize the images. So that means that if you've got a huge WordPress site, we have to download all of those images in order to optimize them... So you've got network latency as we download them, we've got latency as we run the sharp binary to generate different sizes and resolutions of images... All sorts of different factors that chain together.

But if your site had no data layer, you could probably build -- I don't know where the limit would be, but I would say it's probably significantly higher, without any issues at all. So it's gonna very much depend on how much work is the site doing during the build, as to where those problems start to surface.

**Kevin Ball:** And right now, things like that image optimization is happening on every build? Not even for that type of stuff is there incremental, or...?

**Jason Lengstorf:** We have caching. If your build server is capable of persisting a cache between builds, we will look for assets, and we won't build them unless they change. Those sorts of things get much faster after the first build. Some of the stuff we don't cache; it has to get built every time.

**Kevin Ball:** Got it. And can you give a -- when we talk about really long build times, is this hours, is this days, is this "I don't know when this is gonna finish"?

**Jason Lengstorf:** No... I mean, for a really big site you might see 30 minutes to an hour; on a lower-powered build server it might be a little bit longer. Typically, if it goes longer than that, you're probably gonna see a timeout.

We're pretty much in a position where -- there's a limit at which you'll probably see issues; those issues will start to go away in the fairly near future. We just did a big refactor of our internal build process to use xstate, which gives us a much more predictable build process, and we are in the process of refactoring our error handling, so that we can get better visibility into where things are going wrong... And that's opening the door for us to do a lot of work on parallelization, which will really cut down on the restrictions there.

\[00:48:19.24\] So if you have an 8-core machine, it will be eight times faster than a single-core machine. I mean, it's obviously not gonna be that linear, but we're working toward that, where you can split your builds up and just add a slightly more powerful machine to cut that build time by quite a bit. Those are all things that are on our radar, and that we have active, full-time resources dedicated to to solve. So it's a problem now, but it won't be for long.

**Kevin Ball:** That makes sense. I am personally fascinated by the balance you're running as a venture-backed company with the open source stuff, but I think you actually went into that in a great deal on a Changelog episode, so I don't want to replay all of that... One question I would put out there right now is what are the services currently being offered, and are there any particular ones coming up very soon that folks might pay for that would really help them with their sites?

**Jason Lengstorf:** Yeah, so right now we have in a beta our Gatsby Preview service, which is for hooking into -- Contentful is the first-class integration right now; we're working on lots more. Any marketer, or somebody who doesn't wanna deal with code, effectively, is able to go in and make changes to their CMS, and those changes are reflected live on a private URL, where they're able to see those changes in real-time on the actual website... So they can kind of review things, they can send that around for feedback, and invite their team to collaborate on it. That's a way to take the burden of non-developers using Gatsby off the table, so that it actually is viable for teams. That was our primary goal, "How do you use Gatsby as a production service if you don't have all developers on your team?" So Preview solves that problem...

Then the next thing that we're working on is -- we're working in a lot of directions. Like I said, we've got some ideas around building, where for these really big sites we want people to be able to build them on infrastructure that's especially tuned for that, so that your sites build super-fast.

We are also thinking of just a handful of other things. We would love to get to the place where we can do testing. Because Gatsby sites are relatively predictable under the hood, we can do a lot of static analysis and give really custom feedback on what you're doing with your site. Maybe we can talk to you about your performance, or your accessibility, and flag things that you could change that will make huge impacts. A lot of this stuff is just in the very early, exploratory phase, because we're all hands on Preview at the moment.

So I would say build is the next thing that's really gonna happen - the ability to build Gatsby sites that are beyond the scale of what an average build server is gonna handle. Does that answer your question?

**Kevin Ball:** Yeah, I think so. I'd like to pick your brain a little bit on how far we can take things like Gatsby and the JAMstack. We went through an era where static sites were all just content-based sites. That was the first generation of static site generators - "I'm gonna build my blog statically." And now we're talking about, "Well, we've got all these APIs out here in JAMstack, and all these other stuff... We could do a lot more, and push this stuff out to the edge." And it seems like one of the big areas that Gatsby seems to be getting some traction is on e-commerce, where there's great data about the importance of speed and performance, and how that directly translates to revenue.

**Jason Lengstorf:** \[00:52:08.02\] Yeah, absolutely.

**Kevin Ball:** What are some of the other verticals where maybe this hasn't hit, but it really should, and are there areas where this isn't gonna make sense, and where static site generators are not ever gonna really dig into?

**Jason Lengstorf:** The areas where I think there's a lot of possibility is around the idea of just web apps. If you're looking at building a Software as a Service platform that's got a dashboard and all that kind of stuff, at first glance it might seem like it wouldn't make sense to use the JAMstack for that... But if you think about it, what you're really doing when you use something like Gatsby is you're limiting a lot of overhead. So you're no longer really on the hook to manage your Webpack, your Babel, your DevOps workflow, you're not keeping servers up or trying to manage sharding databases across multiple geographic distributions... All this stuff just suddenly becomes "We're gonna build a site, we're gonna drop it into a folder and put it on a CDN." And the site will just work, anywhere in the world, and it's predictable.

Because the Gatsby sites are dehydrating into React apps, all the stuff that would be behind a user login anyways -- you wouldn't server-render that in the first place. Or I guess you could if you were using Next, but if you could do it on the client side, why not skip that part where you have to keep a server up and running? And so now you can build your whole front-end -- your public front-end is statically-rendered, SEO-friendly, all that good stuff. And then once you get through the client route, you're able to just run it like a regular user, authenticated, single-page app. That gives you the ability then to effectively do all of the things you would do in React, including using the window and all that stuff, because you're no longer in server-side rendering land... And you just get to build the app; you don't have to build the boilerplate for the app.

When I was working at IBM before I came to Gatsby, we had UI teams... And one of the teams that I was on - we owned a UI, but in order to run that UI, we were also managing a Node microservice, which was an express server that we had to keep running, that had some API proxies that we had to manage, and it was all set up on Kubernetes, which we had to configure. So there was all of this back-end boilerplate that we had to deal with as part of writing a front-end for an app. If you're doing that with Gatsby, all of that -- the Kubernetes goes away, the proxy goes away, the express server goes away... It's all gone. We would have just written components in React, and push that to a static file, and not have to think about any of that DevOps overhead. And that's where I think the power really is.

Where I think Gatsby would fall down, or static sites in general fall down, is things that are public, but update constantly. Wikipedia - I don't think you could do Wikipedia statically, because it has such an enormous amount of simultaneous change happening all over the site, and it's millions of pages, or whatever it's at now... That would be extraordinarily hard to do statically.

I think theoretically it's possible, if you had a really solid incremental build algorithm, and so on and so forth - you could potentially do it, and our pipedream at Gatsby is to figure out a way to run Wikipedia or a clone of Wikipedia on Gatsby... But realistically, at least in the short-term, that's probably not gonna happen. So if you're got something like a stock ticker, that's updating all of the time and needs to be server-renderable, and crawlable by Google, or something, you probably wouldn't wanna use Gatsby for that... Because what you'd end up doing is like rendering an empty box that would then client-side mount, and do a GraphQL subscription, or something... And you know, we've done that; we hooked up to Hasura (a few weeks on my livestream we did this) and set up a GraphQL subscription to pull live data as it came in. But if you needed that to be server-side rendered, you wouldn't be able to do that with Gatsby.

**Kevin Ball:** \[00:56:32.00\] Can I dig into one -- back a little bit into the details of Gatsby on this... I love this idea that you're talking about, of basically having all the logged in behavior essentially just render on the client, so you don't have to worry about the fact that you don't have authentication on your static stuff, and I assume you're using an authentication service like Auth0 or Firebase for that... How do you, within Gatsby, configure all of that? Can you still take advantage of the built-in routing, or stuff like that? How would I set up an embedded client-side-only set of pages in app? And would it still feel like Gatsby within that?

**Jason Lengstorf:** Yes. So what we do is - under the hood, Gatsby uses reach/router. You can use reach/router as your client-side custom routing, and then we have the ability to identify a path as dynamic. In the Create Pages (I believe it is) you can match the path against a fragment and say "If the path matches user, then flag it as a dynamic page." And then what we'll do is we'll render a user template, but we won't try to render sub-pages. If you go to /user/accounts/settings/whatever, we won't attempt to render another page; we'll just bounce that back to the user template, which means that your user template effectively becomes the housing for a single-page app.

Inside of that single-page app you can use Gatsby stuff; you can pull in the router, you can obviously use the link and all the pre-loading stuff that we do. We're gonna continually set up the pre-fetching and the code-splitting, and that sort of stuff. You would probably need to set up a little bit of -- you'd probably wanna use React.lazy, or maybe Suspense, or something like that, to make sure that you're splitting properly.

So Gatsby is not gonna do all of your single-page app stuff for you, but what it's doing is it's removing all of the other stuff that you would also have to do if you were building that single-page app on your own.

**Kevin Ball:** Right. So you still have the helpers to link out to static things if you need to, or stuff that's Gatsby-generated, you could put potentially Gatsby GraphQL data in there...?

**Jason Lengstorf:** You would be able to load some of it, but you would need to stand up your own server. For the dynamic stuff, you need to be able to query it from somewhere on the client side, which means that you would need an API to hit. And typically, what we do for that is if you use something like Hasura, or if you use AWS's Amplify stuff (AppSync), you can consume their API, their GraphQL endpoints, as part of the build process, using Gatsby Source GraphQL, which just lets you make a direct query through to AppSync, or to Hasura, or whatever. And then on the client side you would also just query through to AppSync or Hasura, and run your client-side \[unintelligible 00:59:50.17\]

**Kevin Ball:** Right. I guess what I'm wondering is do you still -- so if for example Gatsby is handing off all this stuff to the user template, and saying "Okay, that's all client-rendered", that user template, can I put some GraphQL queries and say "Hey, you know what - I also want this already static data that I'm gonna merge into my dynamic data here"?

**Jason Lengstorf:** \[01:00:14.19\] You could absolutely run a query on the outside of your user template that queued up something, and just pass it through as a data prop that you then have access to.

**Kevin Ball:** Okay, cool.

**Jason Lengstorf:** Anything that would need to be queried at runtime though --

**Kevin Ball:** Right, right.

**Jason Lengstorf:** If you could predict what would happen, you could run it all ahead of time. That's gonna add a little bit of size to your bundle, so you'd wanna be mindful of that, but... Anything you can know you're gonna query, you can query at build time, and then just pass it through to things.

**Kevin Ball:** Yeah, that makes sense. I was just wondering how hard or easy it was. To me, all these SSGs - it's about pre-computing; it's like, what is the maximum possible set of things that we can pre-compute ahead of time, so that we're not relying on running that when the user makes the demand?

**Jason Lengstorf:** Exactly, yeah.

**Kevin Ball:** Awesome. Well, I think we're just about out of time, but are there any other things you wanna leave us with about Gatsby, the future, where this is all going?

**Jason Lengstorf:** I think themes are the thing that we're most excited about. There's some underlying stuff about GraphQL that we didn't really touch on. We just launched APIs for customizing the GraphQL schema, which opens up a whole new wave of really powerful possibilities... That's probably a longer conversation than we have time for, but there's a blog post about it that's really good on the Gatsby blog about schema customization. That's a big one.

The other one - I always want to invite people to please get involved in open source. Gatsby is working really hard to create an incredibly welcoming and open community. The people who are in our community are just so wonderful - they're helpful, they're friendly, they're inclusive... And we really want you to come and get involved. You can make docs contributions, you can make code contributions, we've got a whole section on our website about contributing at gatsby.dev/contribute if you wanna check it out; we'll walk you through the whole process.

So yeah, get involved. Come talk to us on Twitter, come talk to us on GitHub, we have a Discord server where we'd love to hear from you and love to help you get involved in open source.

**Kevin Ball:** Awesome. Well, thank you so much for joining us today, Jason. I'm excited about Gatsby. Gatsby is super-freaking-cool. I have five different project ideas, I just need to find time to do it... But it sounds like the amount of time I'll need is smaller than I might think.

**Jason Lengstorf:** That's the whole point-- I mean, on my livestream every week we typically try to build an app inside 90 minutes, and we almost always get it done... So it is really fast to get something up and running with Gatsby. It's awesome.

**Kevin Ball:** Alright. Thank you, everyone, for tuning into JS Party. We will talk to you next week.
