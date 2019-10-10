**Nick Nisi:** Hello, and welcome to another exciting adventure with the JS Party. I'm your host today, Nick Nisi, and I'm joined today by Divya Sasidharan. Welcome, Divya!

**Divya Sasidharan:** Hello! Thanks.

**Nick Nisi:** And we have a special guest this week, Mr. Zach Leatherman.

**Zach Leatherman:** Hello! How are you all doing?

**Nick Nisi:** Welcome to the party, Zach. Do you wanna tell us a little bit about yourself?

**Zach Leatherman:** Yeah, so I actually live in Iowa, in the middle of the U.S, kind of in the middle of nowhere. I am a web developer for Filament Group. We're a completely remote design and development consultancy. We used to be based out of Boston, but we're kind of just spread all over now... Yeah, and we basically make websites for people. I've been with Filament Group for almost 6-7 years now.

**Nick Nisi:** Very cool. And you are also an organizer of Nebraska Javascript conference with Jerod and I.

**Zach Leatherman:** Correct, yeah. We have another one coming up in August, so we are reviewing talks for that tonight, reviewing the CFP stuff for that tonight.

**Divya Sasidharan:** Yeah, I'm actually really excited for this year's theme. I keep talking about it... Because I'm more curious which character each of you will be... \[laughter\]

**Zach Leatherman:** Yeah, that's a good question. We'll have to get some dye for Nick's beard.

**Nick Nisi:** Of course. It's getting there on its own, I don't have to worry too much about it. \[laughter\] So we are gonna talk to you about a couple of topics this week. The first one is fonts. When I think of fonts, your name immediately comes to mind, and I think if you say "font" enough on Twitter, you just kind of swoop in, right?

**Zach Leatherman:** I may or may not... I have a saved search set up \[laughter\].

**Nick Nisi:** This is something that is always perplexing to me, because I don't have an eye for design at all, so I'm always amazed that you can change the font, and then I have no idea what to change it to beyond Comic Sans, which is terrible... But you can really pick some cool fonts, and I think that sites looks a lot better with cool fonts; I just don't know how to determine what those fonts are. What would you say is the state of art for font loading today?

**Zach Leatherman:** \[00:03:44.22\] There's a couple of different levels... It really depends on how deep you wanna jump in. The easiest thing you can do is just add a font display descriptor to your font face block to let the text be visible while it's loading. The neat recent thing that happened there was that Google Fonts added support for that, too. So if you use Google Fonts, you can add this display URL parameter to your Google Fonts URL, and it will actually add this font display descriptor for you. That's the entry-level font loading thing you can do. That's the easiest thing you can do to improve your font-loading behavior.

There's some caveats with that, specifically around icon fonts. If you're using icon fonts, it doesn't really work great. With an icon font, you basically don't ever want your fallback text to show; you never want the text to be visible while it's loading, because you don't really know what's gonna show or what's gonna render...

**Nick Nisi:** Yeah, because that could be overriding anything, right? It could be overriding the letter A, or just some invisible character...?

**Zach Leatherman:** Yeah, and a lot of times the best practice is to use this Unicode area called the Private Use area, but operating systems sometimes dump who knows what in there. There'll be some emoji in there; I know iOS has emoji in there. So a lot of times you'll see icon fonts showing emoji fallback when the fallback glyph has nothing to do with what the actual icon is gonna be.

Yeah, there's not really a good font display descriptor value for icon fonts, and I have a blog post on my website about that; I think I just launched that last week. So yeah, icon fonts are just kind of outside of the font loading mainstream; there's no good way to really do it without Javascript. But this is the JS Party, right?

**Divya Sasidharan:** Use all the Javascript! Can we maybe take a step back and talk a little bit about the overall problem of fonts loading on the web, for people who are not familiar with that?

**Zach Leatherman:** Sure, yeah. When you add a web font to your code, basically there's a couple of different things that happen when the font loads. The biggest problem primarily is that browsers will hide any text using that font for up to three seconds while the font loads. Then if the font hasn't loaded within three seconds, it will show your fallback text or render your system font fallback in your font family stack. Then it will re-render after the font has loaded successfully. So you have up to two different stages of rendering that can happen. You have invisible text, then you could have fallback text, then you get your web font. That's really problematic when it comes to web fonts, because not just the perceived performance of you want your text to be visible and readable as soon as the page renders on first render, you want readable text, but when you have multiple fonts interacting, you get some weird race conditions that can happen.

When you have a web font for a title, and then a different web font for your italics of that same font family, you can get some weird, partially-visible text. Each web font has its own loading cycle, and they all can finish at different times...

So it's really kind of a weird resource, that isn't really treated in any other way, like any other resource on the web. It has its own unique problems.

**Divya Sasidharan:** Yeah. I think you've showed this example in multiple talks you've given, where there's an example of a new site that's like "Mitt Romney is running for president" because the "not" didn't load... \[laughs\]

**Zach Leatherman:** Yeah, the italicized "not", because he was not running for president, but the "not" italic web font hadn't loaded yet, so this person -- I think his name is James Muspratt took a screenshot of this site he was reading, and it said the exact opposite of what the title was trying to convey. It's kind of a huge problem, because the web font introduced basically a reliability issue with their content, because they conveyed the exact opposite of what the news article was trying to say.

**Nick Nisi:** \[00:08:26.22\] Yeah, that's crazy, and an extreme example. So that was an example of -- what would you call it, flash of invisible text (FOIT)?

**Zach Leatherman:** Yeah, that's invisible text. I've kind of started to move away from using FOUT and FOIT, and just saying "invisible text" and "fallback text", because I just think it's more understandable. Those initialisms - they're confusing to people. Every time I launch a new blog post, I'll get someone saying "What's a FOUT? What's a FOIT?", so I think it's easier to say invisible text and fallback text.

**Nick Nisi:** I might have missed this part - is it based on how you load it where you could have that invisible text or unstyled text, or is it up to the browser and browser implementation details?

**Zach Leatherman:** Well, different browsers used to do it differently, but they've all kind of settled on this invisible text default. Edge and Internet Explorer or Microsoft browsers have historically been a huge fan of just making the text visible by default, from right when it starts to load. They sort of opted out of invisible text altogether. But with the new Chromium Edge, that's changing and they're gonna standardize on this 3-second invisible text, as far as I know.

I did actually download the Mac version of Chromium Edge to test it out, and they're using this 3-second invisibility timeout. So I would say that yeah, it used to be more diverse than it is, but it's certainly standardized.

**Nick Nisi:** Very cool. What problems still exist though?

**Zach Leatherman:** The thing that I'm super-excited about - and this is something Jason Pamental has written about on his blog - is the ability to load a partial font, and sort of combine fonts on the client. He's calling it incremental transfer. I think this is really important, especially because variable fonts are gonna be ballooning file sizes, fonts are gonna get bigger, they're gonna take longer to load... We need the ability to partially load a font, and then delta in more of that font later and combine it on the client. I think that's gonna be a huge, huge win, especially for international fonts that have a huge character set. The Latin character set is not that big, but when it comes to other languages, this problem is a big, big one.

I think that's a very exciting, new development, and they're working on -- I think they have a standards group or standards body established around that, and they're sort of working through that right now... So it's very cool.

**Divya Sasidharan:** Isn't there also the ability to load fonts via Javascript? There's a font-loading API that you can use in order to make sure that your font gets loaded, and there's priority given...?

**Zach Leatherman:** Yeah. The big win -- because the CSS font-loading API is a Javascript API, just as you said, to have more control over your font loading... And it actually predated the font display descriptor. Historically, a lot of people used the CSS font-loading API to do some of the same things that font display does now. So some of that usage, or some of the benefit that you get from the CSS font-loading API is sort of minimized, and made easier with this new font display browser support.... Which is really great.

\[00:11:59.24\] The real benefit you can get from the CSS font-loading API is that you can actually make all of your web fonts render at the same time. You can group your repaints, so you don't get a bunch of jank. If you have four or five web fonts on your page, you can find out when those render, and then render them all at the same time, which is much better than having five different read flows that happen at different parts of your waterfall on your page.

**Divya Sasidharan:** Yeah. I've used that a bit before, and it's really nice because whenever you use that API, it's a promise, so you can just wait for everything to resolve and then load your content, which is super-nice.

**Zach Leatherman:** Yeah, it's super-slick. It's really set up to be really good. I don't know, I really appreciate that. I wish that Edge and Internet Explorer had jumped on that support bandwagon, but I guess we're gonna get that with Chromium Edge, too.

**Nick Nisi:** It's new modern APIs. They're fascinating.

**Zach Leatherman:** Yeah. The CSS font-loading API has actually been around for a few years. I don't know exactly when it was introduced, but it predated font display by a couple years, for sure.

**Divya Sasidharan:** So where do you think something like preloading comes in? Because there's the ability for you to preload assets using preload, or you could use HTTP/2 push, or something. Is that recommended as well?

**Zach Leatherman:** Yeah, absolutely. We mentioned the introductory font loading is the font display descriptor; I would say level two is preload, and maybe the higher levels, the CSS font loading API. So maybe we skipped over preload... So if you're only gonna do a couple things, I would say use font display and use preload together, because preload sort of lets you say to the browser "Hey, I'm gonna use this font, so load it as high up in the waterfall as you can."

The nuance of font loading is that you're kind of racing to get your web fonts to finish loading before the render, or at least as many of them as you can... And there is a small first-render penalty that comes with a preload, if you use it too much. If you're preloading 4, 5, 6 web fonts, you're gonna see a delayed first render. Your page is gonna render slower altogether. Don't overdo it, but I would say if you're gonna preload one or two web fonts, you can really get great benefit out of that.

**Divya Sasidharan:** Also with fonts, this is something that I've always struggled with - there's so many different formats. There's WOFF, and then there's TTF - which is the recommended file...

**Zach Leatherman:** Yeah, there's the true type format and the open type format. That's the standard baseline fonts that you'd get and you can install on your local device. WOFF is mostly just a container format that adds compression around those formats... So it's not really anything more than sort of a wrapper around true type and open type fonts. You get compression for free, so you don't have to add any server configuration for that. And then WOFF 2 is just a newer version of WOFF, that makes the compression -- I think it's on average about 30% better.

I would say you can get away with just using WOFF 2 and WOFF formats now. We'll probably get to a point where you can only use WOFF 2. That's probably coming within the next couple of years. But it's a lot easier than it used to be. Back in the beginning of web fonts there used to be these 6, 7 or 8 different formats you had to list together, and they were all sort of -- I don't know, it was complicated. It was much more complicated. So yeah, it's kind of nice to only have to use two different ones now.

**Divya Sasidharan:** \[00:16:08.09\] Yeah. Also, I think you mentioned this a little earlier with the fact that fonts sometimes can take longer to load, because some glyphs are more than others for different languages, and so on. Is there an ability -- let's say if you need specific characters in a font file, and not everything else, is there a way to specify "I want just these. I don't want to load everything else"? Because sometimes that is a concern. You're just like "I just wanna use this font italic thing, and only for these particular characters and nothing else."

**Zach Leatherman:** Yeah, that's what you call subsetting. Modifying the font file to only include what you want to be in it. I maintain a tool called Glyphhanger, which lets you programmatically say "Hey, I want these font files to be subset to these specific characters", and it'll output WOFF 2 and WOFF files for you.

Another thing Glyphhanger does is it will actually spider URLs that you feed into it to show you what glyphs are used on that specific page. If you feed it a URL, it can actually go out, parse the page, find all the glyphs that you're using on the page (if you have a static site), and then it will write the font files that you need for you. It will transform those, or create new subset font files for you. It's useful to create the smallest font files that you can.

**Nick Nisi:** What kind of fonts or glyphs would be missing from that? Maybe I'm not getting my head around this... Would it be specifically looking to see "You used an upper-case x and a lower-case x here, so I'll include those", and then the same thing with all of the other letters.

**Zach Leatherman:** Yeah, it does go down to that level. I guess from a higher-level perspective, most fonts include multi-language support built in. They aren't usually segmented. Or if they are segmented, they're not segmented as granular as you'd want them to be. So it's kind of typical for a font that you download to be 50, or 100, or even 200 kb for sort of a larger font file. And when you subset down to one specific language that's used on the site, I've seen fonts go down to even 5 kb compressed. So yeah, you can get a lot quicker rendering with a lot smaller file.

With dynamic content, that becomes a harder problem, and that kind of gets into the more incremental transfer thing we talked about earlier, which sort of allows you to combine those subsets into a single font file in the client.

**Divya Sasidharan:** Could you technically use Glyphhanger in your build? Let's say if you have a single-page app, or whatever, and you have a build script that builds it to static HTML - could you put Glyphhanger in the middle somewhere, in the build process, so it can scan all of the HTML ones that have been rendered?

**Zach Leatherman:** Yeah, you can certainly do that. When I was working on the font-loading for filamentgroup.com, which is our company website, I actually built a little thing on top of Glyphhanger that would go through all of the different pages on our site and find all of the different glyphs on every single page. Now, for a small site like ours we could do that and get away with that, because there isn't more than 20 different -- well, we have a bunch of different blog posts on there, but there isn't a ton of content on the site. It's not like thousands of pages that we have to go out and spider... So if you're willing to tolerate the build time performance hit to do that, you can absolutely do that. But I don't know that that scales super-well to a thousand-site page.

**Divya Sasidharan:** \[00:20:14.08\] Yeah. And the idea is that this won't work for (let's say) a dynamic application -- not dynamic, but... Let's assume you have an application that just loads Javascript to switch out the content; then Glyphhanger might not work as well. Is that correct?

**Zach Leatherman:** Well, Glyphhanger uses Puppeteer, which does run Javascript, so it can find glyphs on Javascript content. That's a newer thing that we've added within the last couple years. Originally, it used to use something like jsdom, which was a fake DOM implementation. But now it uses Puppeteer, which allows us to spider Javascript stuff as well.

**Nick Nisi:** Yeah, that's really cool.

**Zach Leatherman:** Yeah, I like it. It works well.

**Nick Nisi:** If people wanna learn more about font loading, or to catch some of your wonderful jokes, you have some talks that we can point people to, right?

**Zach Leatherman:** Yeah, I have a couple of different talks that I've done in the past couple months that I think are probably useful to look up. One was at the Performance Now conference in Amsterdam at the end of last year. This was more of a technical talk about how to improve the default web font loading of the default WordPress theme, when you go to create a new site on WordPress.com. And I think if you're looking to improve the font loading of a site, that gives you a bunch of different tools that you can use, and it goes through the performance characteristics of those tools, how to implement those tools, the different performance profiles that you'll get when you use those tools, and the trade-offs there. So I think that that's probably a really useful talk if you're trying to look for pragmatic wins that you can have in your font-loading.

Then another one is \[unintelligible 00:22:12.20\] of font loading opinions. That went through a bunch of different spicy hot takes I had on web font loading, and things that you should do and shouldn't do... And it was more of a higher-level, more of a fun talk, and not necessarily as deep-dive, technical. That was the intention, but just in terms of how I write talks, I always seem to get lost in the deep-dive, technical stuff, so there's certainly some of that in there, too. Did that answer your question? \[laughter\]

**Nick Nisi:** Yeah, yeah.

**Break:** \[00:22:59.21\]

**Nick Nisi:** Zach, the other thing that you're pretty well known for at this point is a fun project called Eleventy.

**Zach Leatherman:** Wooooh! Yeah! Eleventy!

**Nick Nisi:** Woooh! Yeah, so we're taking this all the way up to Eleventy.

**Zach Leatherman:** I am so glad that you said that joke, Nick, because I have never heard that one before. It's completely new, exclusive to the podcast.

**Nick Nisi:** So tell us about Eleventy. What is it?

**Zach Leatherman:** \[00:24:08.11\] Eleventy is, I guess at its core, a static site generator. It was inspired by Jekyll. It's written in Javascript, it runs on Node, and... Yeah, it's basically just a static site generator. It's kind of taken off, and a lot of people are using it. I've been super-delighted and humbled to see the different things that people have built with it. It's great.

I feel like it's been really awesome to see people say "I don't really have very much coding background, but I've tried out Eleventy and now I have my own website." That has been super-meaningful to me, just to hear those stories of people that maybe didn't have a website before, and maybe even didn't really know how to write very much code before, but they tried out Eleventy and they were able to get it working, and were able to deploy their own website using it, which is just amazing to me.

**Nick Nisi:** Yeah, that's really cool. And that makes it sound like it's really simple to get started with. What makes it simple?

**Zach Leatherman:** That's a very interesting question. We try and make the default configless behavior of the tool to be intuitive. It will work without a configuration file... Basically, all it needs to operate is content. If you feed it a markdown file, it will transform that markdown file into HTML. If you feed it a Liquid template, it can do that. If you feed it a Nunjucks template, it can do that. I think there's 8-9 different template languages that we support right now. I really have focused hard on trying to make the beginner experience something easy.

**Nick Nisi:** Nice. Is that done via a plugin system, supporting multiple templates?

**Zach Leatherman:** Not yet. That's the next big-ticket item on the Eleventy docket - democratizing the templating language support, so that I'm not the arbiter of the template languages that go into the tool. We have 8 or 9, as I said, that we support right now, and people have asked for more to come... But I'd rather just create a plugin system built into Eleventy. I mean, there is a plugin system set up right now, but there aren't hooks to add your own templating language into it yet, so supporting new template languages is our next big release.

**Divya Sasidharan:** Nice. It supports quite a few template languages at the moment, but it'll be cool to (like you said) have more of an agnostic way of loading a template.

**Zach Leatherman:** Yeah. There is benefits and downsides to both. I think that certainly there is ease of use benefit in having them bundled, because anyone could download it and get started without having to add additional plugins, which is kind of a bummer when you're just getting started... So I think we'll always have a stock set that we support - markdown, Liquid, Nunjucks, Handlebars, Mustache, EJS, HAML and Pug.

The big one that I have gravitated towards lately is just raw Javascript templates. You can write a Javascript class or a Javascript function that returns a string, and that's your template. You don't need to really do more than that.

**Nick Nisi:** \[00:28:05.08\] The string is just HTML?

**Zach Leatherman:** Yeah, just a string of HTML. Or you can feed it any sort of template language that will output a string; you can do that as well inside of these Javascript templates. Anything you can do in Javascript, you can do in Eleventy within a Javascript template.

**Nick Nisi:** The tool itself - you install from Npm, as you said, and then that gives you an Eleventy command that you can run... Is that the main part of it? Does that consist of a server and a tool for compiling or working with one format and translating it into another?

**Zach Leatherman:** Yeah, basically Eleventy is just a command line tool. We do include BrowserSync; if you wanna run a local hot-swapping web server to preview your code, and reload automatically - all of that is built-in, too. But really, Eleventy at its core is just a command line tool to let you transform templates into HTML.

**Nick Nisi:** Okay. So the output of this, something that you would actually put onto a website is just static HTML files.

**Zach Leatherman:** Correct.

**Nick Nisi:** Okay. Very cool. That makes it nice and simple, but still powerful, because you can utilize tooling. I'm thinking of tools that I've used in the past like Jekyll, that let you do a very similar thing. The one downside of Jekyll that I've always had is its Ruby dependency, but it sounds like this is much more up my alley, because it's just Javascript.

**Zach Leatherman:** Yeah, we've actually gotten a lot of people that have migrated from Jekyll, with the sole reason that they didn't wanna maintain Ruby stuff. They wanted to just do Javascript. And I definitely hear that complaint too, because I'm a little bit familiar with Ruby, but I'm not an expert at Ruby, and I'm definitely more familiar with Javascript than I am Ruby... So yeah, it just feels like more at home to be in an Eleventy project than it does a Jekyll project for me.

**Divya Sasidharan:** Yeah. Also just being able to work with plain Javascript is so nice... Because a lot of static site generators have some kind of dependency. I've used Hugo a lot, and that requires Go. Hugo is really great, but the moment you want to update your templates and change themes you have to dive into the weeds of whatever Go uses for templating, which is kind of annoying... With Eleventy it's really easy to just take whatever boilerplate and then change the styles, the themeing and so on, without having to really understand the entirety of Eleventy, because it's so lightweight.

**Zach Leatherman:** Yeah. The interesting thing about Eleventy, which is a little bit different than a lot of other static site generators, is that you can actually use all of these different templating languages together, you can mix and match them. For example, you can use a Liquid layout, but your content can be in Mustache. So you can mix and match the different templating languages together, which I think is very powerful... Especially if you're using it for a client where you may or may not know what templating languages they wanted to support or use... So you can sort of develop code and then modify as little as possible to the client specifications, but still use the same tool.

**Nick Nisi:** We have a question in the chat, "How do we get GitHub Pages to switch from Jekyll to Eleventy?" Is Eleventy something you can use with GitHub Pages?

**Zach Leatherman:** \[00:31:55.11\] Ha-ha... It is. The examples that I've seen used sort of like a CI approach, like Travis CI, to run your Eleventy build on the server and then deploy that output to a GitHub Pages branch. I know GitHub came out with this new -- what is it called, GitHub Actions? No... Is that what it's called? And I feel like there could be some overlap there, but I haven't played around with that yet. But I think that's their counterpart to what Netlify does, which is just lets you run a build of your own choosing on their servers and deploy it.

We've actually had a lot of good overlap between people that have used Eleventy and people that have used Netlify. It's super-easy to get a site up and running. Again, like I mentioned, people that don't really know very much about coding have used Eleventy and Netlify together to deply their own website, and it's been just really awesome to see.

**Divya Sasidharan:** I think Phil is leading that charge of Eleventy and Netlify, pretty much... He's always like "Why do you use a framework? Just use Eleventy." \[laughs\]

**Zach Leatherman:** I first met Phil last year at Smashing Conference, when Eleventy was just in its infancy; we were just a couple versions in... And I had talked to him about it just a little bit. He ended up trying it after the conference, and he ended up being one of our first cheerleaders, from the beginning. I would even go far as to say that Eleventy would not exist in its current form without Phil's early adoption and cheerleading. Phil Hawksworth. Super-big thank you to Phil, because he has been a huge part of Eleventy's origin story, if you will.

**Divya Sasidharan:** Yeah. I'm sure he'll be chuffed to hear that, whatever he says...

**Zach Leatherman:** \[unintelligible 00:34:08.13\] Yeah, it's been really cool to see, and we've actually had a bunch of bigger-name website launches too using it, which has been really awesome. Web.dev, which is Chromium Dev's website, is using Eleventy. v8.dev is using Eleventy, which is Mathias Bynens, actually... He was another very early adopter of Eleventy. He's using that on v8.dev, I think they used it at CERN for the WorldWideWeb Rebuild, which was super-awesome to see... And I know CSS-Tricks has used it a little bit, too. I think the conference website that they have set up. So yeah, it's been awesome to see what people are building with it.

**Nick Nisi:** That's really cool. I wanted to ask you why you went out and built a static site generator.

**Zach Leatherman:** That is a very good question. I'm not really sure that I have a very good answer for it... The original impetus -- there were two different things that I wanted when I first started the project. I keep seeing all of these Javascript frameworks coming out, that were sort of touting performance and touting all of these different things, their developer experience was great... I kept trying them out and looking at the output that would be generated from these tools, and they always had runtime Javascript attached to them. And I don't necessarily think that when you're building sites that every site needs runtime Javascript. You may add it on later, but I don't want my tool to inject a bunch of stuff that maybe is unnecessary for my use case. And I'm not saying they are not useful things for a different style of sites, but I think that there is a definite place for a tool that doesn't have runtime Javascript built-in, and it only outputs what you put into it.

\[00:36:13.21\] I think that Eleventy has occupied that space, between your classical static site generators and your more javascripty Javascript frameworks. You get a lot more control of what the output of your site is. That's the reason I started building Eleventy. The other reason that I haven't necessarily talked about a ton was that I actually started building a site to showcase web fonts and web font loading, and Eleventy sort of started as a tool to help me build that site... Which is kind of funny to think back on, because that project got shelved almost immediately... \[laughs\] Because Eleventy took over, because it started taking off. But I think once I start to get more of these bigger-ticket items into Eleventy and development starts to maybe calm down a little bit, I'll go back to that web font loading site and use Eleventy to deliver that. Yeah, I guess that's the origin story of it.

**Divya Sasidharan:** It's always nice when projects spin out of something that you've wanted to build. You wanna build something, and then you generalize it and then you open-source it. It's just super-cool. Because then you're super-invested in it, rather than like "Oh, whatever. I built this thing and then I don't really care about it." Because it shows just the fact that this is a passion project. It totally shows... Because Eleventy is one of those where I'm like "Oh, if you ever have an issue and you post it, you're gonna get a reply." Automatically it will be like "We're fixing it", and so on.

**Zach Leatherman:** Oh, nice. Thanks, I really appreciate that. All my websites are using it, basically, so yeah, I'm super-invested in it. I am really delighted to hear that you think that we're responsive to fix issues, because I've been really busy with conference stuff the last couple weeks... \[laughs\] And I owe some open source maintenance, for sure.

**Divya Sasidharan:** I think usually when I have an issue with it, I just ping Phil. I'll be like "Hey, Phil, can you help me with this?" He's \[unintelligible 00:38:23.29\]

**Zach Leatherman:** Yeah, it's been super-helpful to have other people, like our cheerleaders of the project, sort of answer questions, too. That's been very awesome, because it frees up more of my time to work on new features, and bigger-ticket stuff that I wanna add.

**Divya Sasidharan:** Yeah, because it's pretty much just you working on it... Or do you have anybody else who's actively contributing?

**Zach Leatherman:** No, it's basically me, in my limited spare time... After the kids go to sleep at night I'll sometimes fire it up and work on it. Then in the morning sometimes I'll get a couple hours before work, after the kids go to school. It's kind of just been here and there, but I really have a clear vision for what I want it to do, and I've been able to stick to that and not get too bogged down by issues so far... Because I know a lot of open source maintainers get -- maybe "bogged down" isn't the right term, but the scale of the project sort of outgrows your free time, so... Yeah, it's been really helpful to have people chime in to answer questions.

**Nick Nisi:** How can people contribute to Eleventy?

**Zach Leatherman:** \[00:39:47.29\] That's a very good question. I would say the easiest thing you can do is just try it out, and if a part of it confuses you, tell me. Because if it's confusing to you, I'm sure it's confusing to someone else. Yeah, just give me as much of your feedback as you're willing to. I think that the biggest metric of success for the project is how easy and intuitive it is to use. I'm always open and receptive to people's general confusion about why it did something, because that really helps me think of better ways to solve problems inside of the framework. So yeah, just try it out; if you like it, let me know. If you don't like it, let me know, but maybe tell Phil first, and then let me know. Yeah, just give me your feedback and let me know what you think of it. That's probably the easiest thing.

**Nick Nisi:** Yeah, is there anything else you wanted to convey about Eleventy, Zach?

**Zach Leatherman:** I don't think so. We do have an Open Collective...

**Nick Nisi:** I was actually going to bring that up, because I see -- this is one of the first sites that I've seen that has a very pretty sponsor button on GitHub, that links to the Open Collective.

**Zach Leatherman:** Yeah, I saw someone had talked about that on their Twitter. It's very easy to set up. It's not like a trial thing. The sponsor button is different than GitHub's sponsorships, which is...

**Divya Sasidharan:** A long waiting list, or whatever?

**Zach Leatherman:** Yeah, basically.

**Divya Sasidharan:** Are you on GitHub sponsorship?

**Zach Leatherman:** No... I'm on the waitlist to try it out, but I haven't heard anything. I don't know if I'll actually use that either, but... Yeah, we're on Open Collective now, but maybe the GitHub one will be better. I'm not sure. Try it out and see what happens.

**Break:** \[00:41:39.23\]

**Nick Nisi:** For our next segment, the topic is "I'm excited about X", where X is literally anything. This is the panelists' chance to tell you about things that we're excited about. This doesn't necessarily have to be in the Javascript font loading or static site generation world. It can be anything. With that, Divya, can you start us off?

**Divya Sasidharan:** Yeah, I can go first. I'm really excited about Vue. I feel like I'm always excited about Vue. That's mainly because I use it a lot, and it's my framework of choice. I've used a couple of frameworks and I find that it's one of the ones that resonates the best with me, because I get to write -- you get this idea of single-file components, but you still get to write HTML and CSS in Javascript in pieces, which I like a lot... Because for me sometimes writing in JSX can be frustrating. And this is not a slight on other frameworks, obviously; it's just a preference thing, because I like to think in different pieces. I can be like "How do I want my page to look?" And then I can focus on that and then I focus on the interactivity afterwards, rather than putting them together. That's just the way I think about things.

And also, alongside that, I didn't think I would be excited about this, but I've been watching videos and reading a lot about Svelte, and I feel like I have to learn it though, because it's super-cool. Rich talks about it with such enthusiasm that I was like "You know, maybe there's something to learn here." The syntax is also really Vue-like, because I think it takes a lot of pages from Vue. So as a Vue developer, I think I would get it slightly better, maybe... I don't know.

So I just wanna dive into that, because Svelte 3 came out -- was it a month ago? I don't remember. At one of the conferences...

**Nick Nisi:** Within the last month.

**Divya Sasidharan:** \[00:44:27.02\] Yeah, when Richard Harris, who created Svelte, pretty much accidentally released it, or something. He was like "I didn't mean to..." \[laughs\]

**Zach Leatherman:** Whoops...

**Divya Sasidharan:** Yeah. And just talked about reactivity. I think the whole point of that talk - which I think was called "Something reactivity" - was the idea of how the goal of frameworks is to act very much like Excel spreadsheets, where it updates automatically and you don't have to do a lot of finagling and it's very easy to understand without you having to get into the weeds of understanding Javascript and scope and inheritance, or whatever; you have to learn. So that's really cool.

I think from the framework side of things Vue and Svelte are pretty exciting for me. And then in terms of just general things, I'm currently learning Spanish, and that's pretty exciting, but also frustrating. Exciting because it's a different part of my brain... I think learning languages to me seems different from learning a programming language, even though it sounds like it should be the same... But learning a language is very hard, and to me very frustrating, because half the time my brain works -- like, it refuses to learn things. I find it so useful to just get into a beginners' mindset so much, because especially when I'm programming -- if you've done this for a while, you have your assumptions of how things should be, and how things should be worded, how to teach someone and so on.

So you assume someone has knowledge that's obvious to you... So learning a language kind of takes me out of that frame, because I'm like "Oh wait, I have no frame of reference..." If you're like me -- I know a couple of languages, but I never went down in the weeds with grammar, so trying to learn grammar and a new language at the same time... Because a lot of the times they're like "Do you know how this works in English? It's based on this subjunctive grammar", and you're like "I don't know what subjunctive is..." Then you have to figure out "Oh, okay, in English this is the rule", and then translate that.

That learning process has been really interesting, and I've learned a lot about myself. It can be hard when you hit a wall, and just wanting to give up immediately... Because you're vulnerable, all of your alarm bells go off; when you're learning something and you don't know something, you automatically shut down. I think that's pretty normal... So trying to get past that I think is a great exercise in just learning about how I deal with things, how I learn, and being better about that... Which is neat.

**Nick Nisi:** I'm also learning Spanish.

**Divya Sasidharan:** Nice!

**Nick Nisi:** Yeah, it's a lot of fun. I'm learning it alongside my almost three-year-old.

**Divya Sasidharan:** Oh, cool.

**Nick Nisi:** It's much harder for me, I think. My wife is fluent in Spanish, and I'm constantly asking "Why is it like this? Why is this male and this is female?", like ending with -o and -a. And my three-year-old doesn't care, and is just going along with it.

**Divya Sasidharan:** Yes! If you speak a language natively, you don't think about those rules. Or if you talk to someone and you're like "Hey, you speak Spanish. Why is it this way?" and they'll be like "Because it's that way." \[laughter\] And you're like "Why...!?"

And it's also annoying , because you speak like a child. I currently speak like a child when I speak Spanish, and it's really frustrating. I'm actually intelligent, I just speak like a person who doesn't know much, and hasn't lived very long... \[laughs\] But yeah. My neighbors speak Spanish, and they have two kids and they're very fluent, and I kind of feel judged... Every time I try to speak, I'm just like "Um..." It's fun.

**Zach Leatherman:** \[00:48:15.06\] That's really great. I really like the point that you made about learning a new language and getting out of your comfort zone, and question your preconceived notions about things and how they should work. I feel like just being a parent does a lot of that for me... Because you're sort of seeing your child learn something new for the first time, and they have no rules or biases attached to them already, so they're learning something from scratch and you get to see them learn something from scratch. That takes me out of that comfort zone, or "I already know how everything works", all of those biases established with that.

**Divya Sasidharan:** Yeah, that's totally true. I still think it's really fascinating that humans have a short gestation cycle, and in general baby humans are completely useless, compared to most mammals. I was at the Smithsonian recently, because they have different exhibits, and also walking through them... And one of the curators was just like "Yeah, human babies are just really..." Like, if you put a bottle of milk and a baby, the baby would die, because it wouldn't know to drink the milk. So yeah, it makes me think a lot about humans and our species.

**Zach Leatherman:** Bottles are complicated. Human babies do know how to drink milk via other means.

**Nick Nisi:** But still, at least the entire first year, they want to hurt themselves, and your job is to prevent them from doing that.

**Divya Sasidharan:** That's true, yeah. So if anything, I totally understand the trying to relearn things that you think are obvious, because a child doesn't know it. Yeah, I never thought about that, but that's a good point.

**Zach Leatherman:** Yeah, I kind of wonder how much of that affected how I built software too, because I saw my daughter learn something, learn all these things for the first time, and now my son is learning all these things for the first time, and it sort of puts you in more of that friendly-to-beginners mindset, and "How can I make this more user-friendly to someone that has none of the knowledge that I may have accumulated over time?"

**Nick Nisi:** Some things that I'm pretty excited about are Eleventy -- I am excited to check that out, and I just wanted to tell you that... And I really get excited every time I get a new LetsEncrypt e-mail about my certificate expiring, and then we're having to go figure out how to do that again... And I'm like "I should just rewrite everything and throw it on Netlify right, and be done with this whole charade", because I don't actually know how to manage a server, as is obvious by me having to shut down a Bitcoin miner that started up online at some point.

**Divya Sasidharan:** Oh, no...! \[laughs\]

**Nick Nisi:** But yeah, so I'm excited to check that out. Another thing is Neovim 0.4 - I think that's the one that's gonna introduce floating windows. I'm just really excited about that because it is going to add a whole new level of interactivity to Neovim and Vim in general; my workflow will get better with that, so I'm excited. And that's just the ability to float windows around your text, and show things there.

**Zach Leatherman:** Do you have to quit each window individually, or...?

**Nick Nisi:** I don't think so. I think it can just pop up. For example, you GUI users take this for granted, but popping up completion stuff, or documentation about something that you're using.

**Zach Leatherman:** That was just a lowbrow Vim-quitting joke, sorry.

**Nick Nisi:** Oh yeah, I gotcha... \[laughter\]

**Divya Sasidharan:** Good one.

**Zach Leatherman:** It was so funny I had to explain it. That's how you know a joke is super-funny.

**Nick Nisi:** \[00:52:05.10\] For sure.

**Divya Sasidharan:** Yeah. It's like ultimate dad joke level. It takes a joke and it makes it a dad joke when you have to explain it. \[laughs\] I don't know...

**Zach Leatherman:** Anyway, go ahead, Nick. Sorry.

**Nick Nisi:** Yeah, that's it. And then the other thing that I'm excited about now that I have to fill the void that was the disappointment of the Game of Thrones finale - I started watching Chernobyl on HBO, and that got me excited to look into how nuclear reactors actually work, and why that one failed, and reading and watching stuff about that whole incident. So my search history has been pretty interesting with that. It's been really fun learning about all of that, and learning about what happened, and what could have happened... And the show is pretty good, too.

Zach, what are you excited about?

**Zach Leatherman:** We kind of talked about this a little bit earlier, but I'm super-excited about indie web. It's an IndieWeb camp that I went to a couple weeks ago; it's all around having your own website, and owning your content, and not letting social media companies dictate who sees what and when... Sort of rising above the algorithms that try to dominate our social media existence. So yeah, I'm super-excited about indie web stuff, like web mentions, and putting your own likes and retweets and all of this stuff on your own content. I really feel at home in that community, when I went to that IndieWeb camp a couple weeks ago. That was just really cool to see.

And the other thing I guess has overlapped with what Divya said - I wanna try out Svelte. I think it's really cool, the sort of compiler approach that they're taking to Javascript code, rather than having a giant library deliverable that they serve to a client. They serve only the Javascript that's actually used by the page, a more compiler-based method... So for that reason, yeah, I'm super-excited for Svelte, and I would actually really like to see the cross-over (if there is any) between Svelte and Eleventy. Maybe we can get Eleventy to compile Svelte templates as well. It would be really cool to see.

And then I guess all the movement around serverless and Netlify is really cool to see. Just getting more people having their own websites, and owning their own content, just sort of circle back to the IndieWeb stuff I talked about earlier. Yeah, I'm just really excited to see more and more people making their own websites, having their own blogs, and controlling their existence instead of letting social media companies control that for us. I'm very excited about that.

**Nick Nisi:** Yeah, the JAMstack is really fascinating, I'm excited about that. And related to algorithms running your lives - I think this has been a recommendation on this show before, the book "Weapons of Math Destruction". I'm about three-fourths of the way through that; it's really good.

**Divya Sasidharan:** Yeah, I read that. It's really well-written, and it's very accessible, too. I think the author is incredibly accomplished, and is a mathematician. I was able to understand it, so it was just a really good breakdown of everything.

**Nick Nisi:** Yeah. It's terrifying, too.

**Divya Sasidharan:** Yeah, I was like "Oh, my god..."

**Nick Nisi:** Cool. Well, thanks so much, Zach, for coming on and talking to us today about fonts and about Eleventy. Where can people follow you on these web mentions or indie web places?

**Zach Leatherman:** Yeah, Zachleat.com. It's just the first four letters of my first name, and then the first four letters of my last name. Then you can find my Twitter; it's the same, except the .com. @zachleat.

**Nick Nisi:** \[00:56:05.06\] That's really cool. I do the same thing, the first four of my first and last name, but that's everything, so...

**Zach Leatherman:** \[laughs\] It works out more conveniently for you. \[laughs\]

**Nick Nisi:** A little bit.

**Divya Sasidharan:** It does.

**Zach Leatherman:** Yeah, I think that's it. If you wanna check out Eleventy, it's 11ty.io, or 11ty.dev. We're migrating domains, for political reasons.

**Divya Sasidharan:** Cool!

**Nick Nisi:** Yeah, awesome.

**Zach Leatherman:** Yeah, thanks for having me on. It was really cool to talk about Eleventy. I haven't been on a podcast, or even at a conference to talk about Eleventy yet, so it was really neat to talk about it.

**Nick Nisi:** I'm really excited to play with it and see if I can -- I'm wondering if I can do some templating or something with Dojo, having Dojo output.

**Zach Leatherman:** Oh, yeah. Are there any Dojo static site generators out there?

**Nick Nisi:** We're working on some build time rendering stuff. It's not in its own project yet, but the new Dojo site is all built with Dojo, and then just rendered to regular HTML.

**Zach Leatherman:** Very cool. Let me know how that works, or if it doesn't... Maybe we can figure something out.

**Divya Sasidharan:** It's funny, because yesterday someone reached out about Elixir templates not working on Netlify, and I was like "I have no idea about Elixir templates anyway."

**Zach Leatherman:** Yeah, I haven't heard of that one before.

**Divya Sasidharan:** I don't actually know a lot of Elixir people who use static site generators, but apparently they have a static site generator, or a way of building stuff... But they have a separate dependency system called Hex, or something. I clearly don't know anything about Elixir... But yeah, it's not popular enough for that to be a use case.

**Zach Leatherman:** Yeah, I've never heard of this. What language is it?

**Divya Sasidharan:** Like Erlang...

**Zach Leatherman:** Yeah, Erlang. Okay. We only use stuff that's available in Node.

**Divya Sasidharan:** Yeah, exactly. Because if it's something else, you have a different dependency system, and then you have to figure out -- I don't even know where to start. Or if you wanted to use Python... I don't know; that's weird.

**Zach Leatherman:** Well, I wish you luck.

**Divya Sasidharan:** \[laughs\] Yeah, I know people who use template -- because you can do templates using Django... And I'm always just like "Why?!" It's horrible...

**Zach Leatherman:** Yeah, I think Django is still pretty popular, isn't it?

**Divya Sasidharan:** Django is really popular, yeah. The best use case I've had for that is using Django as a REST API; so you'd build your back-end in Django, and then your front-end is whatever you wanna use... And then you could still access Django through an endpoint. So Django is just exposing endpoints.

**Zach Leatherman:** Yeah, kind of like the WordPress API, or whatever.

**Divya Sasidharan:** Exactly, yeah... Which I think is JAMstacky...

**Zach Leatherman:** I'm more of an AMP stack person myself.

**Divya Sasidharan:** Yeah.

**Nick Nisi:** Oh, we didn't get to talk about AMP.

**Zach Leatherman:** Thank God...

**Divya Sasidharan:** Just like a huge slight on AMP.

**Zach Leatherman:** What?

**Divya Sasidharan:** This is totally separate... It's funny, because Jeremy Keith calls it -- what does he call it? MAJstack?

**Zach Leatherman:** What's a MAJstack?

**Divya Sasidharan:** It's like JAMstack, but backwards...

**Zach Leatherman:** Oh, because he wants markup first, yeah.

**Divya Sasidharan:** Markup first, yeah.

**Zach Leatherman:** Yeah, I could see that. I'm on board with that. That's even more awkward to say than JAMstack, but...

**Divya Sasidharan:** Yeah, it's true.

**Zach Leatherman:** There's been a lot of AMP stuff flying around this week.

**Divya Sasidharan:** Is there anything new that came out from AMP?

**Zach Leatherman:** I don't know if there's anything new specifically. I think just more and more people have been talking about it. It's another round of AMP hatred. It's been kind of interesting to see how much overlap there is between people that are anti-AMP and people that attend JSConf EU.

**Divya Sasidharan:** So are you for or against AMP?

**Zach Leatherman:** I'm fine with AMP the framework. I think most people that are anti-AMP would say that they're against the AMP carrousel. Prioritization of AMP results in search results.

**Divya Sasidharan:** \[01:00:26.23\] Because in terms of just making it optimized for mobile -- basically, what the AMP framework does is interesting.

**Zach Leatherman:** Yeah, I mean, that's just your standard Javascript UI framework, or whatever. They call it an HTML framework, because you're not technically writing in Javascript, but it's still running Javascript, so it's the same... Yeah, I don't know; I wish they would fix the problems. There's been a ton of feedback about it, and it doesn't seem like there's been a ton of progress made.

**Divya Sasidharan:** To show up to all the AMP road shows, or conferences, or whatever...

**Zach Leatherman:** \[laughs\] Make my whole existence to be just the AMPador...

**Divya Sasidharan:** You're one of those...! I actually heard about this, where there are people who travel to -- so if you're like for or against a specific... It's basically like being a lobbyist. If you find that there's legislation going on in specific places that is gonna change a law that you care about, then you just travel and protest...

**Zach Leatherman:** Did you hear about this on Facebook?

**Divya Sasidharan:** No.

**Zach Leatherman:** Is this the paid protestor thing that is...

**Divya Sasidharan:** \[laughs\] No, I actually heard about it -- there's like a moving company, this moving app thing in Chicago that I use... I forget what it's called; it's hip and cool, whatever the kids use... And I used it ones, and the driver was, I learned... Also, the whole situation was kind of weird, but anyway. The driver of the truck was anti circumcision, I learned...

**Zach Leatherman:** Oh, no...

**Divya Sasidharan:** Also a conspiracy theorist, and he showed me all of his banners that he had created...

**Zach Leatherman:** Yeah, I had a very similar encounter with a repair person that came over to my house and started talking to me about all these conspiracy theories. It was a disaster.

**Divya Sasidharan:** Sometimes it is fun... It's like "Oh, tell me more...", just purely for the story that you can tell at parties like these...

**Zach Leatherman:** Yeah, JS Parties.

**Divya Sasidharan:** Yeah, exactly. You're like "Tell me more, so I can tell other people how crazy this is." \[laughs\] Yeah, there's no point saying that they're wrong, because that's not a fun discussion... Versus being like "Oh, why do you think that?" and then kind of just eeking out all the details and the logical gaps.

**Zach Leatherman:** I've definitely done that in cab rides, for sure. The cab driver starts talking and you're like "Oh, really? Why is that?" You just keep asking why, why, why, to see how much crazy they'll reveal to you.

**Divya Sasidharan:** And then you'll also get recommendations on YouTube things you should watch. They're like "Watch this! It'll tell you." I think the one he was telling me about - he was like "Oh, did you know that Earth used to be an alien mining ground?" He was like, "Yeah, they found these giant tree stumps, and it's obvious... Who cut them down? They're too big, and trees don't grow like that, so they must have at some point, and someone must have been around to cut them down." I was like, "Whatever..."

**Zach Leatherman:** Yeah. For real, I think that there is a huge problem with these algorithms encouraging people to believe extreme things like this. On YouTube if you watch one thing, you can get recommended some pretty gnarly stuff.

**Divya Sasidharan:** And then you go down the rabbit hole... Actually, I think there's a Netflix show about flat earthers. It was a documentary where they just talk about flat Earth theorists, or people who believe in the flat Earth theory. Some of them were people who were like "Oh yeah, I didn't believe in this, and then I watched a couple of YouTube videos and I was like, you know what - this is so true!"

**Zach Leatherman:** Yeah, it's a super-big problem because you can't even really talk about it without spreading their message. You can't even talk it down without giving them the network effects of talking about their messages. It's terrible.

I did a joke talk at a bar camp a few years ago about flat Earth, and why flat earthers exist. I recorded the video and I decided not to even put it online, just because during the talk there were people tweeting at me, wanting the information that I was putting out, because they were real flat earthers.

**Nick Nisi:** That might have been my fault a little. I tagged them in a tweet, I think.

**Zach Leatherman:** Well, I learned quite a bit just from that. Even if you tell a joke about something, it can sort of platform these people into something that you don't wanna spread.

**Divya Sasidharan:** Yeah, and then you become the accidental spokesperson.

**Zach Leatherman:** Yeah, that's a real problem. You have to be really responsible when people get these big followings, what they even joke about. You have to be very careful. It's a big responsibility.

**Nick Nisi:** Cool. Thanks again, both of you. It was a lot of fun.

**Zach Leatherman:** Thank you guys for having me.
