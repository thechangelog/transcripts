**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about immediate mode GUIs. Hm, what does that mean...? And specifically, we're gonna be taking a look at the Gio project, which you can check out one gioui.org. We're gonna find out what that's all about.

Joining me today -- well, it's only Johnny Boursiquot, isn't it? Hello, Johnny.

**Johnny Boursiquot:** Hello. It's just me. Nothing special.

**Mat Ryer:** It's just you, mate. Very special, I think. And also special - Jon Calhoun.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** Jon, I did a compliment for you in your intro.

**Jon Calhoun:** "Also special", is that what you said? \[laughter\]

**Johnny Boursiquot:** He had to call that out.

**Mat Ryer:** Yeah... Well, last time I think I said you should be tolerated, so I wanted to be nice.

**Jon Calhoun:** I guess I'm moving up. \[laugher\]

**Mat Ryer:** Well, don't worry though, we're also joined by somebody who I've seen speak and does some great presentations. You can check them out online. It's Elias Naur. Hello, Elias!

**Elias Naur:** Hello, Mat.

**Mat Ryer:** Welcome to the show.

**Elias Naur:** Thank you very much!

**Mat Ryer:** I'm really excited about this episode, because I saw your talk at GopherCon last year, 2019, and it was excellent. Could you just kick off and tell us, what do we mean by immediate mode GUIs? What does that mean?

**Elias Naur:** So immediate mode is, in contrast to retained mode - and retained mode is the design or the way to structure regular or most other user interface libraries. So retained mode is where you have a lot (if not all) of your visible user interface state in the user interface library. The example I like to use is the browser, because almost everyone knows a little bit of JavaScript programming and the browser DOM... And in the DOM, you store all that is visible on the browser page, and also of course many things that are not visible... But for our case it's the visible thing that we're interested in.

\[04:15\] And the thing about retained mode is that you usually have (at a very high level) your program state duplicated. So if you have, say, a list of contacts or something else you want to display in your browser page, you typically have that list twice. You have some representation in your program that you got from a database, or from the network, or somewhere else... And then you have it -- in the case of Go, you have Go structures to represent those contexts.

But on the other hand, you also have that information stored in the DOM in the case of the browser, because you have a DOM element for the label of the name of the contact, you have a DOM element that represents the profile image of the contact, and so on. If you have other information on that page, well that's also represented by DOM elements.

So in contrast, immediate mode gets rid of all that state from the user interface library, and replaces that with something that - if you've ever done any video game programming, you would know the structure of a video game is essentially a giant for loop. Not a giant for loop, but a top-level for loop that simply loops and asks whether there's an input from the users, say from the mouse or keyboard or whatever your device is, and updates your state - the game state, so to speak - and then draws it, and then on and on it goes.

For immediate mode user library it's almost the same thing, except that you don't want to do this all the time, because that would be a waste of resources... So instead of the for loop that goes on and one, you have a for loop that waits for events at the very top level, and that's very neatly modeled with a go select statement of channels.

The interesting thing about immediate mode is that one of those events that you're waiting for is an event that essentially says "Redraw everything." And that's what immediate mode is; you draw your entire program state -- not your entire program state, but the state that is relevant for the screen, for what the user should be seeing in the window.

**Mat Ryer:** It draws it every time. I mean, it draws it in full.

**Elias Naur:** It draws it every time. It's basically drawing everything. Because what you can do - and we can come back to that later - is you can cache what you drew in the previous frames. And that is done for you automatically in libraries like Gio. So even though the program behaves and uses the library as if it were drawing everything from scratch, every frame, what will actually be recomputed and drawn onto the screen is more or less what differs from the previous frames, or for previous five or ten frames, or something like that.

And the great thing about that is that you don't have this duplication of state. That is not just the duplication for, say, the labels -- let's take an obvious example. If you have a window and one label inside it, in the browser DOM you will bring that to the screen by constructing a new element, and putting (say) a paragraph element, or a div element, and then put the text inside that, and then add it to the DOM. In immediate mode you don't do that; you end your update function that redraws what is relevant. It will notice, somehow, that the program wants to display this label, so it just draws that label, and that's it.

And again, back to the retained mode example, if you say you have this label that represents a name, and an update to the profile comes from the network, to say "Well, the user changed his name", or something, then you have to change that name in your structure, which is unavoidable, but you also have to have an existing reference, or obtain a reference to the DOM element that represents the names. And sometimes the name is displayed several times, in the same user interface; you have to update all those duplicate state somehow.

\[08:12\] And again, if you want to remove a label, or remove a contact, or something like that, then you have to go in and take the element out. So not just duplicating the actual state, which is the username, you're also duplicating so to speak the metadata of that label, which - does it exist at all? Where is it? Where is it positioned? And so on.

And again, in immediate mode you get an update, "Okay, I'll redraw/respecify my entire interface, and draw whatever is relevant." And if you don't need the label, you just don't draw it.

So that's the drawing example, and I like to say that a user interface has three major tasks. The first one is drawing things - draw the button, draw the text... And that is actually very complicated, because it has to be done -- especially text is very complicated to draw. But at a high-level, it's not that interesting, in the sense that it's more or less a solved problem. It's not trivial to do, but it's a solved problem.

What is even more interesting is the second task, which is layout. Layout is simply the job of positioning your things. So instead of using "I'd like this label to be positioned at this X and Y coordinate, and I want it to be this wide and this high", and do that for every element, and make sure that they don't collide, and they react to the window size changes or anything else - that's very difficult to do for anything other than trivial programs.

So the layout is simply a way for your user interface library to give you tools to automatically place -- or maybe not automatically, but place things relative to other things. And a common thing is, for example, centering that label inside the window. If you want to center it, then again, from the browser example, you have to add more state. In the browser you could probably set a CSS property on the paragraph or div elements, for some other libraries you need to construct a container element, and especially if your layout operation is more complicated than just centering... You have to construct a container widget, which is not even visible, and put the label inside of that container, and tell the container "center whatever there is inside you." And then again, you have another part, another state introduced twice, because you have the knowledge that you want to center it in your program, which might just be implicit from your program, and then you have to encode that state in the browser, in the form of a container or properties.

And again, back to the immediate mode - as you draw the label, in Gio that's simply something that could be condensed just to a function that says "center this thing", and in Gio it's implemented as a function, but takes another function, and everything you draw or specify inside that inner function - well, it's just centered. And then that's it. There's no knowledge from the library that you have centered something, and there's not something that you should update the next frame to say "Well, now it's not centered. It has to be right-aligned", or something like that. So the state, again - it's implicit and it's gone as soon as you used it, so to speak.

And the last task for any user interface, which I think is the most interesting, is event handling. That's where - at least in my opinion - retained mode libraries, or the design of retained mode leads to the most unmanageable programs and applications, because what they do, what most libraries do is that they force you... If you want to, say, have a button in your interface, and react to that being clicked, then you need to register something, typically a callback. In Go it could be a function or a closure, where you say "Okay, to this button set the event list to this function." And that, again, means that you have state hidden -- not exactly hidden, but you have state duplicated in your user interface library.

In the DOM you say addEventListener() and you call it 'click', and then you give it a JavaScript closure or a function.

\[12:10\] And that of course leads to "When do you remove this callback?" What if this callback is invoked? Because you can't really -- a lot of bugs are hidden, in the sense that they only trigger when you click the button at the wrong time. That's a very typical example of something that can be very difficult to deal with in traditional user interfaces. What if the user clicks it on the wrong time? And that almost never happens, because the user almost always behaves nicely, if you can say that. He/she clicks the button when it's time to click the button, and don't click it when it's not relevant to the user interface. But sometimes they do anyway, because of delays, or something like that, and then you get a weird crash and you have to debug that.

So again, back to the immediate mode design - you don't want state in the user interface, in the library itself, so you don't have callbacks. What you do instead is as you specify the interface, you at some convenient time (convenient for you, the programmer), you ask the button "Have you been clicked since the last frame?" And that does an if check and if you have something like a toggle bar, then you could do a for loop, say "As long as you've been clicked", if you have a user that very quickly clicks a toggle, a checkbox twice, then you need to update the state twice. But other than that, it's more or less just an if statement. Say "if button clicked...", and then update your state. Do whatever you want. Show something, print something to the screen, initiate a network request, whatever you want to do. And that is it.

And again, if you don't want to handle events because you're not ready to do it, or the program does not expect the clicks to happen from this button, then you just don't check it. You don't execute that if statement somewhere in your program. So adding and removing the callback is done automatically, because there are no callbacks... And you get to handle this button click where you want it. At this point in my program I'm ready to handle the click - then that's where you write that if statement. If you have a callback, then you don't know really -- it's not that it's just multi-threaded, so you don't have a data race as such, but your program is not in a well-defined state when you get a callback from the user interface library... Because it detects the click, and then it calls the function, and who knows where your program is -- whether it's really ready to accept these input events. So that's three wide and large tasks that user interface libraries handle, and where I think that immediate mode really makes a difference.

**Johnny Boursiquot:** As you were explaining how this mechanism works, I was picking up on some of your terminology. You were talking about frames... And that sort of took me back a little bit to when I was exposed to folks doing work with -- maybe I'm gonna age myself a little bit here, but Macromedia Director...

**Mat Ryer:** Casper?

**Johnny Boursiquot:** \[laughs\] Casper... Technologies like Macromedia Director, Flash, Flash authoring, Flex, and that whole category of tooling. And there are some more sophisticated things out there as well that have come out, but all these things operate sort of on a timeline, if you will. It's almost like there's an expectation that you're gonna be moving through the "frames", on a timeline, at a given rate, at a given frames per second kind of rate.

So is there a loop within (in this case) Gio, where basically you have the opportunity at the next iteration of the loop? Are you redrawing everything? Or why are you using some of that terminology? How does that connect back to this kind of timeline-based animation and creative tooling?

**Elias Naur:** \[15:52\] It connects back because that's exactly what happens. You have a for loop at some top level. In a Gio program you have a for loop at the top level of your program, typically... And that for loop typically contains a select statement, which waits for events from (say) the network, but also from the window, which feeds the event channel with frame events. A frame event is simply a request from the system for any reason to redraw you. And in essence, you go through the whole user interface as it is right now. Not your whole program state, as I said before, but you go through the relevant program state necessary to respecify, redraw the window as it is now.

And you say framing and timing - there's not an explicit timeline as such, but the interesting thing about what you're saying is that to animate things with immediate mode and Gio. There's a most simple thing you can imagine, and that is simply asking for the frame events at regular intervals, which is typically when your monitor will refresh (say) 60 times per second if it's a 60hz monitor, or even more if it's on a phone... But you ask the Gio system for "I'd like to animate things." More concretely, what you do is say "My state is changing all the time." So you get these frame events at regular intervals, and you simply update your state according to the current time, and that's it. That's how you animate.

So if you want something to fly from one part of the screen to the other side, you simply start with positioning it at the beginning, as for these frame events as long as you're animating, and then slowly move that button along the path. And it could be a spline, it could be a linear path, it could be whatever you want.

The cool thing about this is that you still have to program the animation, which is not trivial, but it doesn't have to be built into the user interface library. As far as I know, most other retained mode libraries need some way for you as a programmer to specify "I'd like to animate this property." Say a button going from green to red; if you want to animate it going from some state to another. And you have to tell it "Okay, I'm starting with red, I'm ending with green, and it has to go through this path, follow this curve, and it has to take (let's say) half a second, or a hundred milliseconds" and so on. And then say "Go."

So you describe this animation typically to the user interface library and apply it to a property or a set of properties, and then make it do the animation... Which is very convenient, of course, but is also very inflexible, because you can't do anything. Well, you can do many things, but you're not free to change your user interface libraries in any way you like. You're only free to do it in the way that the library expects you to do, and have added support for doing.

So I think that's one of the many advantages - something like animation is taken completely out of the picture; you can just not talk about animations if you like to, because it's not really relevant to the library.

**Mat Ryer:** it's interesting. So in having this immediate mode, presumably you draw the whole thing from scratch. So you kind of start with clearing the screen. And if you're doing that very quickly, then drawing has to be very fast. So how does Gio draw things quickly? Is it just that it doesn't take that long to draw things, or is there something else that Gio does to help keep it quick?

**Elias Naur:** Two things. The first thing is that you don't explicitly say "clear screen" and then "draw this, draw that". What you do as a program developer is you actually specify your interface as a list of operations. So you say "Okay, I want an area here which is wide, and on top of that I want this button shaped blue, and on top of that I want some text" and so on. So what you end up with is a list of operations that describe at a quite low level what your screen is going to look like, and you pass that to the georenderer... Which you don't know anything about, but you just pass it along and say "Okay, do whatever you want with that."

\[19:57\] And what Gio can do at that point is that -- it doesn't do that much yet, because it's pretty fast already, but what it can do is that it can recognize a diffing algorithm. It can take "Okay, what did you draw in the last frame, and what are you drawing now? What are the differences between these two operation lists?" And it can do that very efficiently, because I decide in the API what is the format of this operation list. It can be constructed so that it is very easy to find the differences, and then just draw that difference. That's one reason.

The second reason, just very shortly, is that it uses the GPU to draw, and the GPU is screamingly fast, even on phones.

**Break:** \[20:44\]

**Jon Calhoun:** Assuming I'm understanding this correctly, whenever an immediate mode program, something like Gio is rendering, and you say it's like this for loop that continues iterating every time, I assume that that means that every single time one of the ways that you're avoiding bugs is you're essentially getting like a snapshot of all the data, because like you said, you're not duplicating it. So you don't have to worry about that "Well, I was in the middle of changing something, but it's not quite done." Because this is the data every time, it presumably should make things easier to replicate. If you give it this set of data and tell it to render, you should see the same thing on screen every single time. Is that correct?

**Elias Naur:** Yes. A Gio set of functions or methods is basically an iterator that goes through your program state, however you have defined it, and then outputs Gio operations to draw it. That's a very high-level view of it. So yes, it is stateless, in the sense that the same input in your program should give the same results, at all times.

**Jon Calhoun:** So would it be fair to say that React was kind of trying to make immediate mode sort of available to people working in the DOM?

**Elias Naur:** Yes.

**Jon Calhoun:** Okay. I was just trying to make sure I understood that all correctly... Because it seemed like a lot of the sales pitch React had was the same things you're pitching, of "You've got the state, you don't have to worry about all this. It does all that for you", and you're not trying to alter all these things.

**Elias Naur:** Yes. I haven't used React, but what I've seen from it is that they still have an explicit representation of state. And I don't know why they have it. Perhaps it's a limitation of trying to put an immediate mode library such as React on top of something that is fundamentally retained, such as the browser DOM.

But as far as I can tell, they still have some kind of explicit state tracking. So you decide what the state is, but you still have to give that state to the React library somehow. And again, I haven't used it. And then the React library will, in some automatic/magic way sort of diff between the previous state and the updated state and makes sure that the update happens efficiently.

**Mat Ryer:** Yeah, it uses a virtual DOM.

**Elias Naur:** Yeah.

**Mat Ryer:** We're actually using Svelte... You built the same kinds of things -- as a JavaScript framework you built the same kinds of things, but all the processing happens at compile time. So there isn't a lot of runtime in the browser with Svelte. It's just -- they do all that work at runtime. So I think that's quite interesting... But still, conceptually, I'm not sure where it fits in with those... But it's really interesting to hear about that.

\[24:19\] I was gonna ask - so you mentioned clicking a button. I had an Amiga, and I used to love building UIs on this Amiga. And you actually didn't have any frameworks then. You could draw rectangles and lines and pixels and circles, I think, and you could fill, and not much else. So to do things like even change the state of a button on hover, it was a case of catching the mouse events, and then comparing through some -- the way I used to do it was just kind of a global X/Y on the screen, positioning. So I would just check "Is the mouse kind of greater than the X, but not greater than the X plus the width of the button?" and that told you if it was in this part of the screen... And same for the Y axis. And then you could know... So does Gio have to do things like that, at that low level? Does it deal with any other kinds of abstractions, or is it literally kind of from the ground up, it's dealing with those low-level problems?

**Elias Naur:** Gio as a library is from the ground up. When you consider what to base your UI library on, it's very tempting to use something else... Say for Android and iPhone, for example, they have a very rich set of widgets, and they have a lot of behavior already encoded in those widgets... So many frameworks take the approach of reusing -- they say "Okay, we'll just reuse whatever is available on the platforms", and then try to make that behave the same across platforms... Which, of course, works pretty well in the beginning, but then (at least in my experience) breaks down. The devil is in the details, essentially.

So Gio went the same route as Flutter. It's actually inspired by Flutter in the sense that -- Flutter is Google's Dart library for doing cross-platform user interfaces... And they took - in my eyes at least - a very bold step of saying "We'll never use (as far as I know) the native widgets and tool kits. We'll only require somehow to draw, some access to your GPU - probably rendered software if you wanted to - and some way to access the keyboard and mouse events."

So yes, in essence, Flutter as well as Gio does at the lowest level handle events like that. So the button has been programmed to say -- it will register and input areas, and say "I'm interested in pointer events in this area." And then whenever it's inside that area, then it will hover or react to it if it's been pressed and then released, and then only if it's pressed and released inside that area, and so on. So all those low-level checks, so to speak, and pattern matching on the input stream is done at some level. But of course, it all boils down to when you're using a Gio button in your program, you simply say -- you have a button, you draw the button, and ask for what it clicked. That's it.

**Mat Ryer:** Great.

**Elias Naur:** But it's done in a way -- so there's nothing magical about that button, or the editor, or all the other widgets in Gio. There's no tricks up the sleeve, so to speak. So you can actually take the button and modify it as you want, and you can do that in practical terms, because the source is unlicensed... And modify it however you want to, and it will render in the same way as the built-in (so to speak) widget. So there's nothing magical about the built-in widgets; it's just the widgets that I've deemed that they're generally useful, and then add it to the standard library, so to speak... To the standard Gio library.

**Mat Ryer:** So what's the code look like for a Go programmer then? If you're gonna describe, say, a container with three buttons in there, maybe a dialogue box with some label, and then two buttons, how do you describe that in Go code? Or are you talking solo level there's literally a draw or an update interface or something, and you just have to implement that?

**Elias Naur:** I can show a program, but that would not be very useful on a podcast... So what you're asking for is what is the structure of a typical Gio program...

**Mat Ryer:** \[28:07\] Yeah. Would you create a struct that describes a kind of view, and have that contain sort of child nodes of the things that make up that page? Do you build it in that kind of --

**Elias Naur:** No, we will do it -- actually, it depends on the program, of course. If you have something in the program that needs to be dynamic... Say you have a list of users; then you need somewhere a slice of user objects, I suppose, which is then filled in from somewhere else, and then you need that slice to represent a dynamic number of users.

But say you have one button and a label beside it, and that's it, then it's actually -- and that's one of the great things, and perhaps also a bit surprising... What you do is you simply say "draw button", "draw label" and that's it. It's a little bit more complicated, because you want the button and the label to be beside each other, and not on top of each other, and so on. So you typically have a layout object around it. But that's not an object that you construct and then save. You actually construct a value object in Go, which is very easy to do... Like a struct constructor, setting the margin or the alignment, whether it's right, left, or center... You construct a value object and you call a function on that, which takes a closure, that is another function, that you define, and inside that function you can draw things.

So if you have, say, a Flex layout, which is a way of putting things on either a row or in a column, below each other or besides each other, you can say "flex", and then it takes a variable number of child functions, so to speak, and each of those functions is a widget. So if you want a button and a label, you take this Flex object, call this layout method, and the first function you give it, you draw the button, and the next function you give it, you draw the label. And the Flex object will make sure that the two widgets are placed either besides each other, or on top of each other, depending on the direction.

**Mat Ryer:** So are they given bounds then at runtime? Does the layout component say "Okay, I want you to draw, and here are your bounds. This is the space you have to draw in"? Or does the layout component somehow apply that information before it then gets drawn? Do you see what I mean?

**Elias Naur:** Yes. Indeed, there's a layout protocol. It's implicit, in the sense that you can't guarantee that the widgets follow this protocol. But what happens is that there's a global context, which I usually call the GTX. It's more like the Go standard library's context object... But it's the context for geoprograms. And that context at all times contains the current constraints, which is sort of what you were saying with the bounds. The constraints simply say "In the X direction you must be at least this number of pixels wide, but your maximum is this number of pixels", and the same thing in the Y direction, in the height.

So you get constraints sort of as an input in this context, and it's up to the widgets to fill out a dimensions, a concrete size, width and height, that they chose to be layout-wise. So they can draw outside these bounds if they want to, but this is what will be used for layout operations. You can sort of imagine, this is a recursive process, so the Flex will give every child element some constraints, and will use that to place the next one, and so on.

**Mat Ryer:** That's really cool. It's nice to know that, because of course, everyone's gonna probably -- if you're building an app, you're gonna need those kinds of layouts, to be able to say "Spread these elements out evenly" or "This is the one that can expand to fill the space, these other two are fixed", those kinds of things. They are very useful, and I saw in some of the source code examples it is really quite easy. You just sort of create like a tree of elements, isn't it? It works all the way down. Really interesting.

\[31:53\] So what sort of use cases is this for? When you look at it on the GioUI.org, it does look like an application framework for building frontend apps. And by the way, on that website there is an image of an example view that you've renedered... And I was blown away, because there's a little Run button next to it, which I almost missed; and clicking that sort of ran the WebAssembly version of it, didn't it? Which is crazy. So it supports WebAssembly.

**Elias Naur:** Yes. But not very well. Well, it supports WebAssembly in theory, but in practical terms the Go implementation of WebAssembly - which is an entirely different discussion - is very, very bad... Because one thing, WebAssembly is not that great either, because it lacks support for something such as threads, for example; you only have access to one thread... And it's interface -- for example for Gio I need the access to WebGL, which is the browser way of doing hardware accelerated graphics, and you essentially have to call a Reflect-like interface from Go, which then calls into JavaScript, which then invokes the browser's underlying WebGL implementations... And as you can imagine, that is very inefficient.

And on top of that, the WebAssembly bytecode (the virtual machine of WebAssembly) is a stack-based machine, which fits very poorly to the current Go compiler, and so on. So the code is not very efficient. So it works on WebAssembly, and it's correct, in the sense that it's the same code that runs in the browser, that runs as a native application, but it doesn't run that fast.

**Mat Ryer:** Yeah, you probably wouldn't use it with Gio. The reason I brought it up was just really -- I'm quite impressed with how portable it is, because of course it runs on Linux, it runs on macOS, iOS and tvOS as well, and Windows and Android, and things. So yeah, having that portability I think is another quite interesting thing, because of course, Go is cross-platform. But lots of the different choices that you have when you want to build lower-level things, you tend to have to be specific to a particular architecture sometimes. So how does it do that? How do you keep that abstraction? Is it just that you're dealing with the common low-level things, like drawing and receiving events?

**Elias Naur:** I think the primary reason that it's so portable is that I made the same choices as Flutter did. I think they made the choices for the same reason - they wanted something that was maximally portable. And to do that, you simply have to, as you would in any other case, reduce your dependencies as much as possible.

So Gio has almost the minimal dependencies you can have, which is simply somewhere to draw, and somehow to receive input events. Everything else is done in Go code. Actually, it's so portable -- I released a unikernel version of Gio. I have a port that runs without an operating system, and directly in QEMU; that's how portable it is. Because it really only needs somehow to draw the graphics, somehow to receive the input events, and that's about it.

**Jon Calhoun:** So when I'm looking at this example, like the kitchen example on Gio's website, I think what's kind of interesting to me is that it's easy when you start running it to sort of just think "Oh, this is just HTML elements, or something." You click, you can add text, you can type, all that stuff works... But I'm assuming that this is actually either like a Canvas, or something like that, in the DOM -- is that what you're doing? ...and just writing to it.

**Elias Naur:** Yes. It's a Canvas with a WebGL context attached to it.

**Jon Calhoun:** Okay.

**Elias Naur:** And that's another reason why even though we got Go to run very efficiently with WebAssembly, you may not choose it anyway to use in the browser, because you'll kind of have the same problem as you have with Flash, or with the Java applets of the old. It's much better integrated in the browser, but it's still not so well integrated that you can select this element and inspect it from the inspector... It doesn't integrate 100% with the rest of the page if you have that.

**Mat Ryer:** \[36:01\] You could just use HTML and CSS, I suppose...

**Elias Naur:** If you have something that you need to be very slick, then yeah, you should use something that is native to the browser. But of course, if you have a project which is primarily an app or a desktop application, and you need a quick and dirty way to draw that in the browser or activate that in the browser, then that's a perfectly viable way to do it, because the code is literally the same. So other than dealing with a different size, and so on, it's the same code.

**Mat Ryer:** So like visualizations - it would be quite a cool use case for it, because it would be great if you could render some data visualization in Go. You might just render it into an image and serve it that way, I suppose, but... Yeah, anyways, it's a cool thing to play with. And I think one of the things Gio has is this playability. As soon as you see it, you feel like "I could build something with this." I can tell people have that sense about it.

**Elias Naur:** And it's also very easy for me to do live examples, like you have examples on the Go Docs page, or the package go.dev. Just like you have with the kitchen example, essentially... I wrote an article comparing the immediate mode to the retained mode way of designing your user interface, and I used live examples. I used the DOM example, of course, which is native to the browser, but I could very easily integrate small snippets of Gio code and actually run it, so I can demonstrate.

I hope and expect that that will be very useful for doing the future tutorials, and articles, and so on, in the same way as the Go Doc examples, which are also viable in the sense that you can change them and play with the examples, and run them from the browser. If you can run these examples from the browser, then I think the WebAssembly port is worth it just for that.

**Mat Ryer:** Yeah, I agree. Absolutely. And it is great, if you go to that website - we'll put it in the show notes - there are definitely some things to play with.

**Break:** \[38:04\]

**Mat Ryer:** When you look at the website you do get a sense that it's for applications, but what about games? What about more fun things that you could potentially use it to build? Is that viable?

**Elias Naur:** Yeah, sure. An issue you have with games is that you typically want a very low-level access to your graphics card. If you have anything else than the most basic games, then you need this axis. And Gio, for portability reasons, only more or less exposes the operations that are necessary to do 2D vector-based user interfaces well. So what I've done to cover this use case - because I really want to cover those niche use cases well, because one thing that happens when you introduce something like this to the world is that all the Go programmers say "Well, that seems like a good idea." But if you ask a so-called frontend developer, he will say "Why should I care about Go at all?" So I have to learn a different language just to use your framework.

\[39:50\] So I'm trying to reach those niches where you have enthusiastic Go programmers anyway, or you have an existing bunch of code anyway, and I think that games is a very good example... Also because I used to do computer games in a previous life, about 15 years ago.

So the problem is, of course, that you need the low-level access. And the great thing is that that is also solved by Gio being very portable. So what you can do is you can extract Gio and only use the widgets and the layouts and all the tools that are in the Gio Go code, the portable Go code. And then you can attach another renderer to it. So there's somewhere in Gio that translates these operations, say "circle there, rectangle there, background there, text there" - translates that to GPU commands. And you can take those commands and intercept them and merge them with whatever you have.

So if you're writing a game, you typically use some kind of game engine, whether you're writing it yourself or it's some third-party thing, and you need all the drawing to go through that. By splitting up Gio from the actual operating system or native part, it's very easy to integrate with games. So yes, it's very much a thing that I'd like to see done with Gio. But the point is just that Gio in itself does not make writing games that much easier; it makes writing the user interfaces much easier, of course, I hope... But it doesn't really help you with the details of, say, writing a 3D game, or 2D game, or so on. So even though it's using the GPU, it doesn't give you the tools to efficiently and portable do an interesting game with.

That is not quite true... So the guy (Egon) who did the logo for Gio, has done some interesting animations with Gio, which was done quite inefficiently, because Gio doesn't give him that much to work with... But he still managed to get something that renders quite quickly on his machine. So it is, I suppose, possible to do a game, if it's vector-based, and so on.

**Jon Calhoun:** What is your ideal application that you'd like to see built with Gio? If something would just pop up and just blow you away and just excite you... Was there anything in mind whenever you were building it, that you'd really love to see built with it?

**Elias Naur:** What I wanted to do, and I started to do, and I presented that very early version of a chat application which is completely decentralized, because I'm interested in decentralizing all the things, so to speak... So I did something called Scatter; it even has its own domain name, as Mat would say. I bought Scatter.im. The idea is - very shortly - that you use email as a message transporter, instead of have a centralized service... But something like that would be very interesting to do. And interesting, user-facing, popular app for phones... Because users on phones are the most picky.

You don't see many new desktop applications done these days... And if you do, it's an administration tool, or some editing tool. It's a workhorse, it's a tool of some kind. But if you do something on the phone, it's meant to be for the so-to-speak general public. It needs to be polished, it needs to have all the corner cases covered, and so on. So that would excite me quite a bit. I've actually been hired to do an Android app, so I hope that I will come out at some point and blow you all away.

**Mat Ryer:** Are you going to use Gio?

**Elias Naur:** It's going to use, Gio, yes.

**Mat Ryer:** Oh, that is cool. Well, you've mentioned the logo... I think projects should have logos, as a general rule; open source projects like this one. The Gio logo is very good, by the way. Compliments to -- who is it who did it?

**Elias Naur:** Egon Elbre (if I've pronounced his name correctly). He does a lot of these Go illustrations, and logos, and so on. At some point -- I think I mentioned on Twitter some months ago, and said "Well, it has a name, it has a website, but it doesn't have a logo. If anyone has ideas...", something like that. And I think half an hour passed and he came up and said "I'll do one if you like." And we did a bit of back-and-forth on the Slack channel, and then he came up with the logo... And I completely agree, I love that logo. It perfectly embodies what I think Gio is. It's simple, it's vector-based...

**Mat Ryer:** Immediate...

**Elias Naur:** And immediate, yes.

**Mat Ryer:** As soon as you look at it, it's there.

**Elias Naur:** \[laughs\]

**Mat Ryer:** \[44:03\] It is very good. But as a general rule as well, it's a nice thing -- for anybody that's getting into open source that doesn't feel like their coding is up to scratch yet, it is a kind of great way to get involved in other projects, is by doing logos or other kind of artwork bits and pieces like that. And I think it brings the projects to life. I don't have any data on it, nor have I done any research whatsoever, but 80% of open source projects with a logo probably are gonna do better, aren't they?

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** And that's science.

**Johnny Boursiquot:** And you've just introduced an artificial barrier for every open source developer out there. Way to go, Mat. \[laughter\]

**Mat Ryer:** Wh-- what...

**Jon Calhoun:** I mean, he did kind of make a tool that makes it a little bit easier to make gophers, that you can generate a logo...

**Mat Ryer:** Yeah, yeah. I mean, to be fair, Ashley McNamara really deserves the credit for that project. My involvement was putting PNGs over the top of each other.

**Jon Calhoun:** Okay, you did a little bit of work, and then Ashley did all the heavy-lifting, and then you got to say "I've got this really big number of combinations, and Ashley only drew this many illustrations."

**Mat Ryer:** Exactly. I made the billions of possible gophers possible.

**Johnny Boursiquot:** Yeah. \[laughs\] Elias, I'm interested in hearing what you define as success for Gio. Obviously, we've talked about use cases, what you like to see people create, what your ambitions are around being able to create with Gio itself... I'm curious, what does success look like for you with this project at this point?

**Elias Naur:** I would say two things. The first thing is Gio 1.0, which is where I hope that we can say "Okay, the API is stable", in the same sense as the Go compatibility promise... So we can release a module, let's say 1.0, and then we're not going to change the API. If we are, we're going to release a version 2, and so on. So all the promises that will make people in turn say "Okay, I think this is a cool project, but I don't want to deal with the API changes all the time", and those kinds of people can start using it for real. So I would say 1.0 is a very important milestone... Also because to reach that you don't just need to cover all the necessary features to reach that 1.0; what is even more important - you need to have enough users so that you can be certain (or relatively certain) that you've covered all the things that would come up when you're doing an application.

I can't say now that all the things that I've done up to now will be frozen, because I don't know whether a use case will appear that disqualifies that API that I've done. So when 1.0 is reached, I know that there will be enough programs using this and being hopefully happy about it, and so we can say "Okay, practical use has shown us this API is pretty good."

The second thing is probably the funding of the project. That it's well funded, so that the buzz factor hopefully increases - or is it decreases? I don't remember. And also so it's viable, in the sense that the people working on it actually do it because they can be supported while doing it. And that's actually been done quite well up until now, in the sense that there's a handful of people that signed up for my sponsorship page of GitHub, and especially Emanuel from [Orijtech](https://orijtech.com). He did a very generous sponsorship, even though he's not really using Gio for anything.

So sponsorship is very important... But also, what I'm going to work on is this Android app, which will both hopefully validate Gio as a practical thing, but also kind of say "Okay, it's not just open source in my free time", so to speak... Because it's full-time for me. I see this as a business for me. So yeah, viable in the sense of funding, and 1.0.

**Mat Ryer:** That's brilliant. Well, it's that time again... It's time for our Unpopular Opinions.

**Jingle:** \[48:11\]

**Mat Ryer:** So who wants to go first? Anyone got an unpopular opinion?

**Johnny Boursiquot:** I volunteer Elias. \[laughter\]

**Elias Naur:** Okay, I wasn't actually sure what kind of unpopular, and I asked Mat in this email asking me for an unpopular opinion, "How unpopular?", I asked him.

**Mat Ryer:** \[laughs\] How unpopular do you want it?

**Elias Naur:** Yeah, that's it. So I brought two of them. One is very on-topic, almost obvious, and the second one is slightly - perhaps even very - off-topic. And they are both at least controversial, and maybe even unpopular. So which one do you want?

**Mat Ryer:** Controversial, please.

**Elias Naur:** Both are controversial.

**Mat Ryer:** Oh, well in that case, either one.

**Elias Naur:** Okay, I'll start with the very obvious, which is of course that in my very arrogant view, I think that the retained design of other user interfaces has really slowed down and wasted many developer resources to deal with it. But more importantly, that's just completely guesswork, and not fine science, like you're doing, Mat.

I think that one of the reasons that there's a difference between a frontend developer and a backend developer, so to speak, or that there is a distinction at all, or a very common distinction is that many developers will simply be fed up with the tools that are available for doing user interfaces.

So you sort of say "Okay, this is very tedious. It must be because I'm not very good at it." And then they sort of say "I must be a backend engineer, because I'm not capable of dealing with all this complexity, and tediousness, and why doesn't this work, and why do we have to use all these libraries?" and so on. So at least a controversial, and perhaps an unpopular opinion.

**Mat Ryer:** It's a good one. Do you think if we hadn't ever had this retained thing, we'd be like on Mars by now? Do you feel like it's really held humanity back that much?

**Elias Naur:** Perhaps the Moon then, again. A few more times on the Moon. \[laughter\]

**Mat Ryer:** Okay, cool. That's perfectly fine. I'm not sure that enough people know enough about it for that to be considered unpopular. Well, what was your other one?

**Johnny Boursiquot:** The next one, yeah. I wanna hear that one.

**Mat Ryer:** I'm excited about the unrelated...

**Elias Naur:** The unrelated one is short and simple. It is that I think that everyone should own a little bit of Bitcoin, and especially during this crisis we're in. That's short and simple, and hopefully unpopular.

**Mat Ryer:** \[laughs\]

**Johnny Boursiquot:** Well, it's not unpopular to me. I already own a few, so... I support that unpopular opinion.

**Jon Calhoun:** I feel like you should have told us this before we aired the episode, so we could just ride that wave... \[laughter\] No, I don't think we're that popular.

**Mat Ryer:** So you think this is gonna cause a spike?

**Jon Calhoun:** I don't think so. I wish, but I don't think so.

**Mat Ryer:** Yeah.

**Elias Naur:** I remember bringing it up at a table at some lunchtime at the GopherCon, and the people around the table just looked at me, and the only question was "Isn't it really bad for the climate?"

**Mat Ryer:** Oh, really?

**Elias Naur:** I think I got the impression that Bitcoin is not very well received or seen affectionately in this community... But of course, I could be wrong. So what are your unpopular opinions?

**Johnny Boursiquot:** Quickly diverting... Mat?! \[laugher\]

**Elias Naur:** Quickly diverting. I think that I'm hearing that it's not unpopular enough... I'd like to hear genuinely unpopular opinions.

**Mat Ryer:** Johnny, have you given an unpopular opinion yet? Because the thing about Johnny Boursiquot is I think he's too nice to have an unpopular opinion. What do you think?

**Jon Calhoun:** I thought that was gonna be your unpopular opinion somehow. \[unintelligible 00:51:56.00\]

**Johnny Boursiquot:** Yeah, too nice... No, I come up with unpopular opinions once every three episodes... So catch me in the next one.

**Mat Ryer:** Okay, yeah. That's great.

**Elias Naur:** Diverting again? \[laughter\]

**Mat Ryer:** \[52:10\] He doesn't run in immediate mode, so... \[laughter\]

**Johnny Boursiquot:** Nice, nice... \[laughter\]

**Elias Naur:** He does more of the retained type.

**Jon Calhoun:** I think we could talk more on the -- the frontend developer one is always weird to me, because I feel like there used to be the stigma that frontend developers weren't real developers... And especially now, it's really frustrating in the sense that when you're working in JavaScript and React and all that stuff, you're doing real development. There's no doubt about that.

Now, if you're just designing pages, HTML and CSS, and you're just making it look good, I could maybe see the argument of "Well, you're not really dealing with logic as much at this point. You're just dealing with aesthetics." And it may be there. But going sort of against your opinion, I think part of the reason some developers don't do frontend stuff is because you kind of have to have that -- I almost wanna say "design sense." I've always felt like you have to have that design sense of being able to make something look good. Because if you can throw all the HTML DOM elements on the page, it still doesn't look like you know what you're doing, unless you can make it look pretty.

So for me, that was always one of my struggles, as I -- I mean, it's kind of like you said, the tools are kind of not amazing, in the sense that I'll be there after an entire day and be like "I've got one page looking good, that's it. Where did my whole day go?" Whereas you're doing something backend and you're like "Oh, I just got all these things working, and it's great..." But it's also frustrating in the sense that with backend sometimes it's hard to demonstrate what you're building. It's hard to show people that.

**Johnny Boursiquot:** You just said something that I think is perhaps -- I've gotten hints of that, and because earlier in my career I was doing more frontend and design kind of work, so I also got a sense of that as well... You're conflating all the different roles. I think most of us would be considered by frontend folks to be backend folks; folks who work with stuff behind the scenes, stuff you can't see.

So by thinking that "Okay, I can sit down as a developer and just come up with a beautiful frontend application that not only looks good, but the user experience is good, and the functionality behind the scenes is good, and the remote server that this thing talks to is good..." The proverbial full stack, as we call it. Do you think that one person can do all these things well? And I'm not saying those people don't exist, I'm just saying that that's like conflating different disciplines. So UI is different from UX, which is different from being able to program given a UI, after the UX has been done.

So these three things alone are different disciplines. Sometimes you have folks who are talented enough that they have all these qualities, and can also do the coding behind the scenes, and do the backend work, but that's a lot of things. And in my experience, if you're doing all these things, you are gonna have a stronger area of focus. Very rarely do you do all these things extremely well, all the time. You are gonna have stronger areas. But I think there's this sort of false belief that one person can do all of these things. Perhaps startups look for the one person who wears all the hats, that way they don't have to hire all the disciplines... But who knows.

That's the idea, that's what I'm thinking - we shouldn't conflate all these disciplines, because they are disciplines in and of themselves. They require study, they require understanding and knowledge and expertise.

**Jon Calhoun:** I think it's especially challenging because, like you said, startups will -- like, if you start with one developer on a startup, they kind of have to do everything. They might not be great at it all, but they have to do it all. And then when you go to hire, usually the way that gets split up is there's one frontend guy - and by frontend I mean he's doing UI, UX, he's doing probably some coding still... He's doing all these different things, all put together, and they just sort of define it as a frontend developer.

\[55:53\] Then the larger a company gets, I feel like you're correct, definitely, that these things get isolated and you specialize in what you're really good at... And that ends up having much better results, I'm sure. But it's just very hard, because a lot of these smaller companies are kind of -- it's almost like everybody's hiring using the same terms, but looking for different things, and that makes it really challenging.

**Mat Ryer:** You're right, the size of the team I think is important for this... Because David and I - we're building something, and there's just two of us working on it, and we're doing the whole stack. There's pros and cons to that. One of the pros, of course, is we can think about a user experience thing and know all the way down to the database how that's gonna work. When the problem is small enough and you can do that, you can deliver quite a really good experience, paying attention to all the bits in that.

As the team grows, realistically that becomes much more difficult... Although I have seen small teams of essentially full-stack developers, where they basically there's no roles; everyone's just responsible for everything. Some people are naturally better at one area than others, and that happens even within backend development, too. But yeah, there are pros and cons to it.

I think the more you can do, the better, because like you said, you get that nice, joined-up experience. But at scale, it starts to get difficult. And then of course, you need then even more people to be able to glue the other bits together... So suddenly information architecture, which is another UI discipline that's separate to UX design and UI design and stuff. So yeah, I think it's a tricky one, and I think team size comes into play quite a lot.

One question I didn't ask you though, actually, was this one - how does Go talk to the GPU?

**Elias Naur:** How does Go talk to the GPU?

**Mat Ryer:** Yeah.

**Elias Naur:** It depends on the platform, actually. In WebAssembly you simply call this syscall/js package, so the JS package, which is kind of a Reflect package for JavaScript. So there's a WebGL command \[unintelligible 00:58:05.07\] exposed as JavaScript functions, and you can call them directly from the Go program that is built for WebAssembly. But for the other platforms you typically use cgo to interface with a DLL, the dynamic library that exposes an API that gives you access to the GPU. That is typically OpenGL on most platforms, but for Windows -- you can also use OpenGL on most platforms, but the best thing to use is Direct3D.

So there's actually two backends - there's OpenGL, and there's Direct3D. But on Windows - it's actually very interesting, because the syscall package is capable of dynamically loading DLLs, and then invoke functions from those DLLs. So you can avoid cgo on that platform.

**Mat Ryer:** That's crazy. But of course, Gio's done all this work for us, right? If we use Gio, we get to get all that for free.

**Elias Naur:** Yeah, you don't have to deal with that.

**Jon Calhoun:** If I build something with Gio, does that make building it and sending it off to different platforms a little bit more challenging, or how does that work?

**Elias Naur:** For Windows, because it's not using cgo you can build a Windows Gio executable from everywhere you have Go. For Android, you can build it if you have the Android SDK installed... And the NDK, because - well, it's Android. For macOS and iOS--

**Mat Ryer:** EyeOS.

**Elias Naur:** EyeOS, yeah... \[laughter\]

**Johnny Boursiquot:** Good Lord...

**Elias Naur:** So macOs and iOS - of course, it's Apple, so you have to have an Apple machine more or less, and you have to use their toolchain to build the cgo that enables you to access the native parts that you need.

**Mat Ryer:** Building for the Apple TV is quite a promising, enticing little thing, isn't it? Imagine building your own TV apps in Go. We may have to do a hack day on that. That could be really fun.

Yeah, it's a great project... Thank you so much, and thanks for coming on the show, Elias. I hope you will come back and talk to us again.

**Elias Naur:** Thank you very much.

**Mat Ryer:** It was great to have you. Thank you. And for everyone else, we'll see you next time.

**Break:** \[01:00:32.12\]

**Johnny Boursiquot:** When I came to the U.S. and I kept hearing "Casper, Casper, Casper...", I'm like "What is this Casper thing everybody keeps talking about?" He's like "Yeah, this is a childhood thing... Casper, Casper!" And I finally saw Casper, the Friendly Ghost, the original -- I don't wanna say black and white, but it was an old, old either short, or film, or something. And I was like "Oh, okay. Casper, the Friendly Ghost."

Then I started seeing Casper on mattresses, and things, I started seeing Casper everywhere. I'm like "What?! I don't understand. This confusing." \[laughs\]

**Mat Ryer:** I don't get that. What is it? Why was everyone talk about Casper so much, Johnny, when you moved to the U.S.? Is Casper all the thing? "You've not seen Casper?! You've gotta see Casper!" Everyone just loves it.

**Johnny Boursiquot:** I know. Yeah, everybody's talking about Casper. I'm like, "I've gotta see this Casper cat." It turns out it was a ghost.

**Mat Ryer:** It's like a Game of Thrones of its time. \[laughter\] It's a ghost, but it's friendly. It's such a twist!
