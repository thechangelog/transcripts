**Daniel Whitenack:** Welcome to another episode of the Practical AI podcast. This is Daniel Whitenack. I'm a data scientist with SIL International, and I am at the EMNLP Conference in Abu Dhabi, and I've got some old friends, some new friends here with me... A very exciting community show that we have for you today. Why don't I just have everyone just give a brief introduction of who they are and where they're coming from?

**Andiswa Bukula:** Okay. Hi, everyone. My name is Andiswa Bukula from South Africa. I work for the South-African Center for Digital Language Resources as an isiXhosa researcher... isiXhosa being one of the 11 official languages spoken in South Africa.

**Rooweither Mabuya:** Hi, everyone. I am Rooweither Mabuya, better known as Roo. I am also from South Africa. I work with Andiswa at the South-African Center for Digital Language Resources. I work as an isiZulu researcher; it's also part of the 11 official languages of the country. Thank you.

**Just Zwennicker:** Hi, all. My name is Just Zwennicker. I've been working as a data engineer for over 20 years. Recently, I wanted to switch towards data science, so I did a master's in that direction. For my thesis, I created a translation system for Sranan Tongo, which is an English-based creole language from Sranan, where my father is from. And then I'm mixed-origin, so my mother is from the Netherlands and my father from Sranan, and I'm born and raised in the Netherlands.

**Bonaventure Dossou:** Okay, hi. My name is Bonaventure Dossou. I'm originally from Benin, but I'm also known as a citizen of the world, traveling to conferences... I am soon to be a Ph.D. student at the Quebec AI Institute, and also at McGill. And I work on low-resource languages, focusing on Fon, my native language, but also extending to other languages as well... And I'm also interested in machine learning for healthcare, like geo-discoverage, \[unintelligible 00:03:11.21\] medical imaging, or this type of things.

**Daniel Whitenack:** Great. Yeah, thank you all for taking time to do this. This is so great. I mean, one of the really encouraging things about being in this room with you all is that so many talks here at EMNLP are great talks, but they'll say things like "massively multi-lingual", or like "This works for all languages", or something like that... And that's definitely one perspective that's not totally accurate. So maybe if we start with Roo and Andi, what from your perspective are you passionate about? What is the area that you're working? And maybe just highlight some of those things that maybe are another perspective of either linguistics or NLP, that are important for people to understand in terms of the world's languages.

**Rooweither Mabuya:** Okay, so my passion is working on making sure that IsiZulu is also a language of teaching and learning... Because currently in South Africa English is the predominant language that is used in media and governance, and also in higher education.

So what we're doing now is ensuring that our languages are also at a level where they are at par with English in terms of developing it, in tools, in human language technologies, in machine learning etc. So we also want to have that privilege, if I can put it like that, in ensuring that our languages are also more accessible even online.

I've been working on looking at specific literature materials \[unintelligible 00:04:37.25\] those online. I would literally have to scan the book if I wanna do an analysis of a particular morphological structure that I'm working on currently. But then you find that all the Shakespearean books, for example, are readily available online.

So that's my passion, in ensuring that even African scholars can do research in their own languages, with writers or authors that are like them, that write in the languages that we're interested in looking at, so that we also have those readily available, and they can be used to research throughout for posterity.

**Andiswa Bukula:** And I think for me also, for the institution that we are working for, we're trying to also bridge a gap between NLP practitioners and linguists, because it's always a matter of linguists are doing their projects on their own side, and NLP practitioners are doing their own projects on the side... But I feel like if we can work together - because for you to understand the language that you're working on, you should collaborate with a linguist. And for us to understand how these language technologies work, we need to work with NLP practitioners... Because in South Africa NLP is not a big field. That's why our institutions are able to send us to such conferences, such that we know what other people are doing, so that when we go back to our institutions, and going back to actually assisting the universities in the country, we can impart that knowledge to them.

\[00:06:05.06\] Because currently, really how we're doing research is still a bit traditional. And time is moving, technology is advancing... We don't wanna be left behind. So I think our greatest passion is to make sure that our languages - because we keep saying "under-resourced, under-resources", until what? Like, we've been saying that our languages have been under-resourced for many years now. Now we have the opportunity to actually be sitting in a room like this, with people who are actually doing the things that we've always heard of, but never knew were possible for our languages.

So we're basically here to say "Collaborate with us." Assist us to get our languages to a level where they are languages of teaching and learning, and our data is also easily accessible.

Because the other issue we have is accessibility of data. We don't have a lot of data in our languages, because we don't digitize the material that we have. But at least now we know what the possibilities are.

**Daniel Whitenack:** That's great. And just to follow up on one of the things that you mention... You mentioned this sort of idea of linguists and NLP people collaborating together, and you mentioned the problem of the availability of data, the scarcity of data... Are there any either misconceptions or things that you would like to highlight in terms of -- you know, a lot of times what we see are these NLP models getting bigger and bigger and bigger, and requiring more and more and more data to train, but the reality is for a lot of the languages of the world - like you said, we either kind of have just a small amount of data, and it's not growing quickly... And those models are getting further and further away from being applicable in those scenarios. So anything you'd like to highlight or point out there?

**Andiswa Bukula:** Yeah, that's the issue, is I don't really know who builds the models... Because I wanted to refer specifically to the people who build the models - when they're building them, it's like they don't have the idea of the structures of the languages that they're building the models for... Because we also have in our repository certain models that we're using, but as soon as we train them with data from our languages, the accuracy levels are always very poor... Because it's like the systems or the technologies do not understand that, for instance, my languages is \[unintelligible 00:08:11.27\] So when they're being built, hence the collaboration, it's like - also take into consideration the languages that you're building the systems for. Because I feel like the systems are always built for specific-structured languages. So that's always an issue, because now we do have access to the languages, but there's so little that we can do with them, because they don't understand the structures of our languages... Hence, again, I will re-emphasize the collaboration between NLP practitioners and linguists.

**Rooweither Mabuya:** Just to add on... A case in example is when you're looking at Google Translate, for example. It has improved quite a lot now, but previously you'd find that you'd wanna translate something from my language into English or vice-versa, and the results were poor. But I think now, because this data that is available, and they're doing something to ensure that there's an improvement in there, then you actually can see the positive results. But still, you find that in some other tools even now you still find that the accuracy levels are still very low.

And as she said, it's the fact that when the tools are being built or created, it's like they don't have the language structure in mind. I feel like it's a matter of "Okay, we've built this, so it should work for every other language", which is not the case. Each language has a unique structure, we have a unique morphology... Even though they are spoken maybe for -- like, the case in South Africa, we have nine indigenous languages, but their structure is not the same.

So the people that actually build tools, or create tools, need to have that in mind, and need to also work collaboratively with linguists, people that are trained in these languages, to ensure that the structure is also represented when the tools are created.

**Daniel Whitenack:** \[00:09:57.16\] Yeah, that's such an amazing point; I'm glad you brought that up. I know even in our work, encountering tools that are very popular... Things like word segmentors, or sub-word packages, where maybe it doesn't work quite right for an Arabic script language, or a right to left language, or whatever it is, just because that was never envisioned from the beginning.

On that same theme of the types of languages that people are building language technology for, I wanted to ask you, Just, about creole languages... Maybe people listening to this podcast aren't that familiar with creole languages, or understand kind of how they're used around the world, or what they are... Could you describe that a little bit, and then also a little bit about your language and the language you've been working with?

**Just Zwennicker:** Yeah, sure. So a creole language is basically a language that emerges in places where people of different cultural backgrounds come together. So in the case of Suriname, that is the slavery time, basically the 17th century; people were brought from Africa to Suriname. Also, people from Europe came there to -- yeah, you know what they did; all kinds of horrible stuff. But they needed a means to communicate amongst each other, and basically, it's a language that has characteristics from the different languages that participated and the people that participated in those communities, like English, Portuguese, Dutch, and some African languages.

So it's basically a melting pot of languages, with -- I don't know if I can put it that way, but usually it's grammatically a bit simpler, and it's an easier to learn language, let's put it that way.

**Daniel Whitenack:** Yeah, and one of the things you were mentioning to me in our discussions even previous to this is that for some of those reasons that you mentioned, maybe creole languages weren't and aren't always treated sort of at the same status of other languages. Could you speak to that a little bit?

**Just Zwennicker:** Yeah, definitely that's the case. So when I started this project, I found that it was really low-resource. I was even amazed to find out that I couldn't find a single book or novel written in Sranan Tongo, and that's because there was a lot of stigmatization going on with that language.

For instance, in school - so the Suriname is a formal colony of the Netherlands. The first language still, to this day, they're independent since 1975. The first language still is, and the official language is Dutch, spoken in Surinam.

Sranan Tongo is the second language. Basically, there were no sources available in Sranan Tongo, and it was for a long time forbidden to speak the language in schools, for instance. Also, parents often discourged their children to speak the language... So that stigmatization caused the low availability that we are dealing with now.

**Daniel Whitenack:** Yeah. And describe a little bit about sort of your vision, I guess, for this project that you're working on, and how it fits into maybe some of the needs of the language community that you're aware about just from being part of that community, and how that shaped your view of the project and what you're actually working on in your project.

**Just Zwennicker:** Yeah. So I have two sons; my youngest son asked me last year why I hadn't taught him how to speak Sranan Tongo, and that gave me actually the idea to build a translating system.

So there's a lot of people living in the Netherlands with Suriname roots. Like I just explained, in 1975 they became independent, so around that time lots of people migrated from Suriname to the Netherlands. So that first generation is mostly fluent in Sranan Tongo. I myself am a second generation.

Before starting this project, I thought I was pretty okay in Sranan Tongo. Maybe 80%-90%. So I'm now, I would say, maybe 50% to 60%, after studying the language better... My son, who's third generation, really wants to connect with this culture. So when we visited Suriname, for instance, and we were meeting with family members, he wants to know what they're saying. I see this need within the Netherlands, that people from second and third generation, they want to connect with their culture, but they don't speak the language. So I hope that this translation system will support them in reconnecting with their culture.

**Daniel Whitenack:** \[00:14:18.27\] Awesome, yeah. I wanna maybe ask Bona a couple questions... I feel like I've been trying to get you on the podcast for a while now, so I'm glad you're actually here.

**Bonaventure Dossou:** I was actually already on.

**Daniel Whitenack:** \[laughs\] Yeah, one of the things that we were chatting about just before this is that people view Masakhane and some of the things that are going on there with a lot of respect, because of the momentum it has, and how so much has been done... And I know you're part of some of the things that are being presented here with Masakhane... Could you describe maybe -- we've actually mentioned Masakhane on the podcast before, but for those that aren't familiar, could you describe what it is?

**Bonaventure Dossou:** Okay. I hope I will do justice to everyone... \[laughs\] So I would describe Masakhane as a grassroots organization NLP movement that wants to build NLP or language technologies for African languages, by Africans. And as everyone said earlier here, we need more people speaking those languages to be more involved in the building of those language technologies... Because someone, for instance, who works in a big company can be like "Oh, I've found maybe this data on OSCAR, or on \[unintelligible 00:15:40.15\] or any dataset that is said to be high-quality and multilingual \[unintelligible 00:15:46.24\] and then assume that everything is supposed to be working. But while at the beginning, those language models, like \[unintelligible 00:15:56.17\] have been created for high-resource languages like English, Chinese... Even in those initial papers you can see that \[unintelligible 00:16:06.18\] they evaluated those models on languages like French, English, Chinese, those types of things.

So that assumption that "Okay, we train those massive pre-trained language models and we can just do some transfer learning to low-resource settings", which is not always true... Which is one of the ideas in the paper that I presented here, talking about active learning for language modeling.

So as everyone has been saying, this is important, and that's the gap. Also, Andi said, and Roo said, and Just said we need to reduce that gap between language and NLP practitioners. We need domain expertise, domain knowledge. And of course, as an NLP researcher I can have those, but linguists also have to come in, to be able to say "Okay, whatever this model is predicting is rubbish", or "It makes sense."

And I think as the most recent ongoing stuff on Twitter and all, models actually don't understand the language; they understand data distribution, they understand words. But then, we need, again, as I'm emphasizing, we need that expert knowledge to be able to make sense of whatever those models produce, to be able to say "Okay, this is actually something useful." That's what Masakhane is trying to build, a community of NLP -- I won't say NLP researchers; a community of, let me say, people, Africans, who are working on African technologies. So it includes linguists, it includes people who have theoretical NLP or mathematical \[unintelligible 00:17:55.03\] like me and like you.

\[00:17:58.16\] Also part of the community we have Sebastian, we have people who actually are not Africans, but who have interest in building a company like that, that effort... And that's what the community is all about - putting forward and representing, bringing more people like us at this type of big NLP conference, let me say to the world, or to the map, or however; increasing that representation and making sure our languages are preserved through those technologies... Which \[unintelligible 00:18:29.04\] because somehow everything we do now is based on it somehow. So yeah.

**Daniel Whitenack:** Yeah, that's great. And I can speak -- as you mentioned, I've had the great privilege to interact with a lot of people from Masakhane on a few small areas, but even in those small things, I would just encourage researchers out there that have an interest in what's being discussed here to engage with those communities, engage with local language communities and speakers of these languages as you're building these technologies. Because you do -- you know, I'm benefitted so much by getting to interact with Masakhane, and the things that I learn, and getting to have these sorts of discussions to have better awareness and understand how I can join and partner with people in the building of language technology.

So as we've gone around, talking about various things, I'm wondering if you all could maybe share -- there's probably a lot of people listening to these podcasts that are actually listening to it in English, or maybe have a mother tongue, English is their second language, and they're thinking "Hey, I wonder what I could do in my mother tongue, in my first language. I know it's not well-supported in language technology." Any encouragements from any of you of like if you're a language speaker and you're wanting to sort of get into this somehow, and kind of partner together, collaborate with others to help build a higher level of digital language support for your language? What would you say?

**Just Zwennicker:** Yeah, if I can add to that... So what you usually see - you need a lot of data to train a good translation system, or any NLP application. And although there is not much data available in Sranan Tongo in my case, the things that you can usually find are Bible translations. So in my case, I use the Jehovah Witness 300 Corpus, which has a translation of 300,000 parallel sentences from Dutch into Sranan Tongo, and even in some smaller languages spoken in Suriname, like Saramaccan and Aukan, which is closer to some African languages.

So that's a starting point... Of course, the idea would probably be that you create a general-purpose translation system; that was also my plan, and still is my plan. So on top of that data you would need some more data from a general domain, from different domains next to the religious domain.

It's funny actually to see that, Daniel from SIL - I've found online a dictionary in Sranan Tongo, and it contains a lot of words, and with those words, some example sentences. So before even knowing Daniel, I've found the website of his company, and was able to scrape 3000 sentences from there...

**Daniel Whitenack:** Yeah, hopefully next time you don't have to scrape it... \[laughs\] Shoot me an email.

**Just Zwennicker:** Yeah, indeed. Good to know you now. And on top of that, what I did is basically scan some smaller sources, and OCR them, and then manually align sentences. So it's a lot of manual work, but I think also Bona has the same experience, of doing a lot of manual work for his translation system...

\[00:21:47.25\] So now that I finally was able to get my first model up and running, I also built a translation system around it, a web app... So I'm now in the pilot phase, where Sranan speakers are using the system, and evaluating the results. So basically, by just using it, they enter a sentence in Dutch, they get the Sranan translation back, and they rate it, and if they don't think it's good, I ask them to enter a better translation, and they submit it, and I collect the data in my database; I hope, in this way, to collect more data from \[unintelligible 00:22:25.19\] instead of the religious one, and collect enough data to eventually build a system that is more potent.

**Daniel Whitenack:** Yeah, that's great. I think you highlight something that's definitely good for people to realize. This is also -- our colleague, Colin Leon, from the University of Dayton; he told me about this. His parents, who are speakers of a local language in East Asia - he asked them "Hey, give me all of the data you have for your language and I'll try to build something." He showed me the folder, and it included mp3 files, and Word documents, and images, and PDFs, and all these things...

So I think that's something important for people to realize, that not everything has a nicely-curated dataset on Hugging Face. And even being involved in some of that work to get that data put together is a hugely beneficial thing.

So yeah, anyone else, things you wanna highlight for people out there wanting to start some of this?

**Bonaventure Dossou:** Before leaving the floor to the ladies, I would like to just second what Just said. I also had the same struggle with Fon, because I started and nobody was working on Fon, nobody knew about the language... And that was also something interesting and exciting, going into a direction where nobody is looking at, and inventing it.

Not to show off, but a lot of people nowadays just quote me as the Fon guy. When someone is talking about Fon and there's doubt, they just tag me on a tweet, or whatever. And yeah, I envision Just to be the same for Sranan Tongo.

The moral of the story is that you need to get started, because there's always going to be a point where there's no data, and someone has to do some little effort. For instance, we have JW300, but what if those people didn't do anything? We would not even have a starting point.

So I started with JW300, and then I tried to manually scrape with my friends, through Google Forms, and created something like 25,000 sentences, and then out of that, then I've been able to bring some proof of concept... And it grew up, and people are now more knowing about the language. It still is not -- I mean, I've built FFRTranslate with Chris, and people are using it, people aren't saying anything bad, they are happy. It helps them. Artists, and other people... There's more awareness, people willing to be more contributing, creating more content. It's not yet on something like a Google Translate or a centralized translation for those African low-resource languages, or low-resource languages in general, but I hope that's something that's going to be coming. So I would just say just start.

Honestly, like my name says, I like adventures. And I like good adventures. So I just like to go where nobody is focusing, and \[unintelligible 00:25:24.23\] is exciting... Bring something that people haven't been focusing on to light. I don't think I would have had the same maybe impact if I for instance started with \[unintelligible 00:25:36.12\] because that project, the first FFR project that then went on \[unintelligible 00:25:40.19\] this type of thing, we were doubting whether we should use for \[unintelligible 00:25:43.22\] So finally, Chris and I, we decided to go for Fon, because \[unintelligible 00:25:47.22\] has at least some effort done already, but nobody heard about Fon. Nothing was on Fon.

\[00:25:55.02\] Today, there are a lot of papers, people citing the work... It's been cited in the paper that led to the extension of Google Translate to 20 more African languages, or 24; it's been cited, and no language left behind of \[unintelligible 00:26:08.15\]

Also, being part of Masakhane, you collaborate with people like Sebastian, with Julia, with Angela Fan, who work on NLP... So just get started. People will know about it, and then it will just keep supporting. If you don't have support, just be yourself a supporter, and at some point -- you know, when people are seeing the effort, they will definitely then join, and pick it up from there.

**Daniel Whitenack:** Yeah. Roo or Andi, anything to add?

**Rooweither Mabuya:** I also share the same sentiments with the case for isiZulu. People should just start, even though it's difficult, because data is available, but people are not coming forth; they're not wanting to share their data. You find that, okay, you collect, or you do whatever with it, and then you just keep it to yourself. And that now hinders the progress of the language or the development of the language in itself.

I think it would be a great idea if people get the understanding that when you are allowing your data to be accessible or make it open resource, it's not a matter of "I wanna steal your idea." I can do something different than what you did with the data, and also just ensuring that more researchers have accessibility to it, so that they can use it for whatever that they want to use it for.

The only issue that I have is making sure that the data is collected in a general sense... Because you find that newspaper articles are very much easily accessible, but in the case for isiZulu, you find that novels, you can't. You need to actually do OCR-ing, and do the scans by hand, which takes a lot of time. So if we can find something that would be matched quicker, we'd be grateful for it, so that at least we can get it to be at a level where we have enough data to train models and train tools with it.

**Andiswa Bukula:** Yeah, what I would add is that language preservation is very important. Let's find ways in which we can preserve our languages, in the sense that they do not go extinct. For instance, what we're doing now in South Africa is that, because most of our languages have dialects; and dialects, because they're not standard language, they're not documented. So one of the projects that people can do if they're in similar situations is where you collect speech data of those dialects, so that they can be accessible somewhere.

So if in the next ten years that dialect is not spoken, there is data available for people to hear that "Okay, there was actually once a language that was spoken in a certain area."

And yeah, I think more than anything it's just preserving the language, creating more data, because now, for this Masakhane project, we're able to access our data via our online newspapers. So people can also digitize the work that they have, because it is true that it's so difficult to find material, because it's not digitized, published. Some books are out of publication now, so for that to not happen, we must digitize our literature, our texts in everything else, so that it can be easily accessible, so that we can actually run such projects.

**Daniel Whitenack:** Great. Well, I really appreciate all of you getting to have a chance to join us here. I know it's a busy conference and there's a lot of great things to look at, but I'm so happy that we get to bring this conversation to a wider audience. If anyone wants to leave with a greeting in their language, please go ahead.

**Bonaventure Dossou:** So before finishing, \[unintelligible 00:29:25.22\] a bit of promotion...

**Daniel Whitenack:** Yeah, please do.

**Bonaventure Dossou:** So regarding language discoverability and all these types of things, Chris and I have been working on Lanfrica, which is an innovation, an idea of putting out there those language resources, those African language resources that are not discoverable on the internet. So you can access research papers, you can access datasets, you can access tools, like keyboards, or those types of things, or dictionaries... Anything. Even sometimes YouTube videos.

So people are doing great things, like educating people, for instance, in \[unintelligible 00:30:04.08\] or those types of languages, languages that I've never heard about before, and they are doing a great \[unintelligible 00:30:10.00\] on YouTube and nobody knows; on Lanfrica they can easily access those resources.

\[00:30:17.26\] And if you also have a work mainly on African languages, but if it's on low-resource languages, we have for instance Lanfrica Talk, where people from all around the world - we've got people from CMU, we've got people from \[unintelligible 00:30:31.05\] we've got people from UCL... People from around the world, students, researchers, anybody who has been working and is passionate about low-resource languages, NLP technologies, then to come and give a talk, for people to know more about what they've been doing.

So it's pretty simple, you just go on Lanfrica.com, and then you can find all the information about the languages and also how to book, for instance, a meeting for the Lanfrica Talk.

So that being said, something basic in my language would be: \[00:31:17.11\] That means, "Thank you so much, Daniel, for --" I don't know "for this invitation" in Fon. And that's something -- like, I can relate to Just... I thought that I knew the language, but then it feels like "Okay, I actually don't know anything." And I don't know, \[unintelligible 00:31:37.00\] where it technically shows that, okay, when you think that you know something, you have high confidence, and that's actually when you actually don't know anything. But then you start learning, and then you are doubting more of yourself; technically, it's that process of acknowledging and learning more things, and the curve that goes up at some point again. So yeah, I would just stick to \[00:32:02.10\] and I will let Just, Andi and Roo finish in their languages.

**Rooweither Mabuya:** Thank you so much. I'd also just like to maybe just promote also the organization we're coming from, the South-African Center for Digital Language Resources. Any researchers that are working in any of the South-African languages, they can check us out at sadilar.org.

A parting word that I can say in my language is \[00:32:26.19\] which means "Thank you so much for listening to me."

**Andiswa Bukula:** Now, I don't know what I'm gonna say, but I'm gonna keep it very short... \[00:32:37.03\] which means "Thank you very much."

**Just Zwennicker:** Yeah, before finishing, I must express that I'm actually a bit jealous of the Masakhane community... \[unintelligible 00:32:46.08\]

**Andiswa Bukula:** Free of charge! \[laughter\]

**Just Zwennicker:** Okay, that's good to know. Thank you very much for that invitation. Also, I wanted to add that maybe if there's other people listening who are into creole languages, give me a shout-out. My name is Just Zwennicker. just.zwennicker \[at\] gmail.com. I'm happy to join you guys, but I'm not sure if it's \[unintelligible 00:33:12.27\] an African language...

**Bonaventure Dossou:** As we said, there's Daniel, for instance, there's Sebastian, there's Graham... People who are not necessarily from the continent or speaking those languages, but who just share the same vision. I'm sure that many people will be interested in maybe writing research papers of building language models or those types of things for Sranan Tongo.

As they say, alone you can do better, or something like that, but together, with a bigger community, you can go definitely faster. And that's how ideas come. So I'm definitely gonna share the link with you - I have your LinkedIn - to join the Slack...

**Daniel Whitenack:** And we'll put it in our show notes as well. All the links to everything we've talked about, yeah.

**Bonaventure Dossou:** Okay. So I'm definitely gonna share with you, and you are free to just come in. I just wanna warn you, it's a big place; people find it messy. We usually work in this chaotic environment, but...

**Daniel Whitenack:** You mean community is messy? \[laughs\] That means it's a real community.

**Bonaventure Dossou:** So don't wait for people to be like this, this, this. Take ownership, take initiative on whatever you want to work on, and then people will just easily follow you. I'm very sure it's gonna be beneficial. \[unintelligible 00:34:44.02\] I speak French, a little bit of German, Russian, English, Fon a little bit... So it wouldn't hurt me to learn a sixth or fifth language, at least. I've learned a lot working with \[unintelligible 00:35:06.10\] people at those types of things... So let us know the African \[unintelligible 00:35:10.05\]

**Just Zwennicker:** And I know there's even -- for instance, in Nigeria they're speaking Nigerian pidgin, which I had some ideas of doing some pre-training, transfer learning from that language, because I think there's some similarities going on there... So that already brings the connection to Masakhane closer, I guess. I would like to finish with just one word, \[00:35:34.07\] which means "Thank you" in Sranan Tongo.

**Daniel Whitenack:** Well, thank you all. This has been so much fun. I appreciate it. We'll share links in our show notes for everything that we've talked about, and all the great things that you've shared... So thank you all.

**Andiswa Bukula:** Thank you.

**Just Zwennicker:** Thank you.
