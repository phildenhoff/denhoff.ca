+++
date = "2018-05-04"
title = "Projects"
slug = "projects"
pagedesc = "Great question! I’ve started a lot of projects, but I’m most proud of the few here."
+++

# start-page 
_Check out the [GitHub repository](https://github.com/phildenhoff/start-page)! Live demo coming soon._

I usually only use the same few websites day-to-day. The idea behind start-page was that it would be a website built to get me from a browser I had just opened to the website I wanted to go to faster. **“Get there faster.”**

To “get there faster”, I came up with a simple command syntax: the **shortcut, a semi colon, and then the command details**. For example, to search “babies first js project” on Google you would type the following:

``` javascript
g;babies first js project
```

There is an **easily extended list of commands** and their shortcuts: things like Google, Plex, Khan Academy, Wolfram|Alpha, and Reddit (I don’t pretend to be productive 100% of the time), as well as a simple “hack” (in my own codebase! Disgusting, I know) to go to direct URLs.

My favourite facet of this design was that you’d be able to categorise commands “under the hood” as **search** commands, **browser** commands, and **remote** commands. Then, depending on the type of command, the underlying behaviour would be different. It makes **writing commands incredibly powerful and easy**; if you want to add support for searching any website, it’s about five lines of JSON syntax, and you’re in. 

However, if you want to add a game of snake when the user types in `snake;` then you can easily do that too: write your base game in a file, add the main loop into the browser.js file as a hidden function, and import your new file. Add an export to browser.js for your new command with help text and you’re good to go!

One of the features I was excited to work on but **never came to fruition** was **remote commands**; imagine being able to run defined commands like we’ve talked about, except they **run programs through the browser on a personal server**. For example, **you could start or stop services** (specific or arbitrary) services, **run certain programs, collect log information,** reboot it, etc., all **without SSH**. Of course, each of these commands would require definition within start-page, but I expect that to be relatively easy. This never worked out because I found running the website on a Node.JS server excessive. After all, the majority of the app is client-side Vue; there isn’t a huge benefit to adding a live server on the backend. I could have made an API, but I just never found the interest once I started to focus on making it all client-side. 

In the end, I don’t use start-page much, but I do like the idea of what I started here. Perhaps I’ll come back to this project again in the future.

_Last updated August 26, 2018._


# choretracker
_Check out the [GitHub repository](https://github.com/phildenhoff/choretracker)!_

My roommates and I weren't doing all the chores we were supposed to, so I started looking 
into game-ifying it: "choretracker" is what came out of that! **The idea is to encourage
chore-doing by giving people points when they claim to have done a chore**.

To prevent cheating the system, other roommates have to confirm the chore was done. At that point,
golden stars are locked-in and the claiming user can't lose their points. **However**, if
verifier knows that the **claimer didn't do the chore, then the claimer loses their 
points**. There is also a 1-person leaderboard set up, so you can see who is at the top.

I started a
rewrite of this project in Vue.js (I called it 
[pluton](https://github.com/phildenhoff/pluton-web)) but I stopped nearly as soon as I
started. The major issue I had with pluton was the same reason I stopped working on
choretracker originally - I had no reason to keep working on it. Not long after I started
working on choretracker the roommate that was doing the fewest chores moved out and my
remaining roommate and I sorted the chores out properly. The pluton rewrite had no goal
other than to be a techdemo of using Vue.js. Guess what? Vue.js works! Hurrah! And so,
I quickly stopped working on it...

This, of course, is another project I would like to pick up one day. I think a gamified
chore tracker could work for a lot of houses - especially University students like I was
at the time. More effort needs to be put into the overall experience.

Screen shots to come.

_Last updated August 29, 2018._


# hirethissnake
More text coming here soon. Stay tuned!