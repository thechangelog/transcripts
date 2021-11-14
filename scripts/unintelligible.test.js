const getUnintelligiblesWithLineNumber = require("./utils/getUnintelligibles").getUnintelligiblesWithLineNumber


const text2 = String.raw`\[12:23\] Well, the reason why not is because it was gonna be a lot of work... That was the reason why not. So we were talking about how we're kind of late at this point... We had been thinking about rebooting the membership program for a while, but we've just prioritized other things. And a lot of that just has to do with the effort involved, don't you think? Did you have other reservations besides pulling it together? We've had a notion card for over a year with details on how we would do this...

**Adam Stacoviak:** \[unintelligible 00:12:51.18\]

**Jerod Santo:** Yes, we probably pulled it over from Trello. It's probably been a few years... We've had the name Changelog++ for at least a year... So far back that we can't remember which one of us came up with it...

**Adam Stacoviak:** We think it was you though...

**Jerod Santo:** \[whispering\] It was me...

**Adam Stacoviak:** \[unintelligible 00:14:88.99\]

`

test('Find Intelligibles works', () => {
  
    console.log(getUnintelligiblesWithLineNumber(String.raw`**Adam Stacoviak:** Literally true, but \[unintelligible 00:41:44.08\] This is not meant to be sal`))
    console.log(getUnintelligiblesWithLineNumber(text2))
    
})