+++
date = "2018-05-04"
title = "Projects"
slug = "projects"
pagedesc = "I’ve started a lot of projects, but I’m most proud of the few here."
+++

# shorturl & domainator-nim

Inspired by some Hacker News article about Nim, I decided to test out the
language. I first rewrote my existing
[domainator](https://github.com/phildenhoff/domainator) project (Python) in
Nim as [domainator-nim](https://github.com/phildenhoff/domainator-nim), and
then I re-wrote someone elses "Nimdays" program in a way I think makes some
improvements.

The idea behind domainator is simple: you provide some string and it tries to
generate a valid URL that you could register containing that string.

For example, if you wanted to sell a product called "Chuckles", you might
know off the top of your head that "chuckl.es" is a valid domain, and that
someone most definitely already registered it. However, you could *instead*
register "chu.ck" and setup the `/les` subdomain, giving you "chu.ck/les" as
the website. domainator generates a number of these domains for you. I've
never, personally, used it. It's a silly idea.

shorturl is like any other domain-shortening service, except it was almost
exclusively written to try out Nim and therefore has a really dumb fatal flaw
which I will never fix: all of the short URLs are stored in memory and are
lost as soon as you kill the process. It was also a trial in reading someone
elses code and trying to improve it, which I think that I did successfully.

Read more about [shorturl](https://github.com/phildenhoff/shorturl) and
[domainator-nim](https://github.com/phildenhoff/domainator-nim) at their
respective GitHub repos.

_Last updated September 14, 2019._ [↑](#)

# start-page 
_Check out the [GitHub repository](https://github.com/phildenhoff/start-page)! Live demo [here](/start)._

I usually only use the same few websites day-to-day. The idea behind start-page was that it would be a website built to get me from a browser I had just opened to the website I wanted to go to faster. **“Get there faster.”**

To “get there faster”, I came up with a simple command syntax: the **shortcut, a semi colon, and then the command details**. For example, to search “babies first js project” on Google you would type the following:

{{< highlight javascript >}}
g;babies first js project
{{< /highlight >}}

There is an **easily extended list of commands** and their shortcuts: things like Google, Plex, Khan Academy, Wolfram|Alpha, and Reddit (I don’t pretend to be productive 100% of the time), as well as a simple “hack” (in my own codebase! Disgusting, I know) to go to direct URLs.

{{< figure src="../img/projects/startpage_v1/start.png"
caption="The landing page for start-page; text is entered above the orange line (where it says 'help')."
alt="A screenshot of the landing page; a text-only clock hovers above a text-entry field with the placeholder 'help'." >}}

My favourite facet of this design was that you’d be able to categorise commands “under the hood” as **search** commands, **browser** commands, and **remote** commands. Then, depending on the type of command, the underlying behaviour would be different. It makes **writing commands incredibly powerful and easy**; if you want to add support for searching any website, it’s about five lines of JSON syntax, and you’re in. 

However, if you want to add a game of snake when the user types in `snake;` then you can easily do that too: write your base game in a file, add the main loop into the browser.js file as a hidden function, and import your new file. Add an export to browser.js for your new command with help text and you’re good to go!

{{< figure src="../img/projects/startpage_v1/start_overlay.png"
caption="The help menu overlay; displayed when you press 'Esc', it lists all available commands."
alt="A text overlay displays all the commands, their titles, and their descriptions." >}}

One of the features I was excited to work on but **never came to fruition** was **remote commands**; imagine being able to run defined commands like we’ve talked about, except they **run programs through the browser on a personal server**. For example, **you could start or stop services** (specific or arbitrary) services, **run certain programs, collect log information,** reboot it, etc., all **without SSH**. Of course, each of these commands would require definition within start-page, but I expect that to be relatively easy. This never worked out because I found running the website on a Node.JS server excessive. After all, the majority of the app is client-side Vue; there isn’t a huge benefit to adding a live server on the backend. I could have made an API, but I just never found the interest once I started to focus on making it all client-side. 

In the end, I don’t use start-page much, but I do like the idea of what I started here. Perhaps I’ll come back to this project again in the future.

_Last updated September 3, 2018._ [↑](#)


# choretracker
_Check out the [GitHub repository](https://github.com/phildenhoff/choretracker)!_

My roommates and I weren't doing all the chores we were supposed to, so I started looking 
into game-ifying it: "choretracker" is what came out of that! **The idea is to encourage
chore-doing by giving people gold stars when they claim to have done a chore**.

{{< figure src="../img/projects/choretracker/homepage_v1.png" 
caption="The homepage for a signed-in user Phil. Note the two obvious actions: claim or confirm. Users can also logout with the red bar at the bottom, which raises up on  mouse hover. You can see the current roommates for the system in the top bar." 
alt="choretracker home page shows two large buttons: 'claim' and 'confirm'. It also shows a leaderboard of the current roommates' scores in a top bar." >}}

To prevent cheating the system, other roommates have to confirm the chore was done. At that point,
golden stars are locked-in and the claiming user can't lose their points. **However**, if
verifier knows that the **claimer didn't do the chore, then the claimer loses their 
points**. There is also a 1-person leaderboard set up, so you can see who is at the top.

{{< figure src="../img/projects/choretracker/confirm_v1.png" 
caption="The confirm page for another user, Karl. He would either confirm the user Phil did the action, or confirm he did not. If not, Phil's points would be subtracted from his current running total." 
alt="The confirm page prompts the user 'Did Phil let it go?' with two large buttons: 'yes' or 'no'" >}}

I started a rewrite of this project in Vue.js (I called it 
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

_Last updated September 3, 2018._ [↑](#)


# hirethissnake

In 2017, I participated in the [Battlesnake](https://www.battlesnake.io/) competition
alongside  [Daniel Frankcom](https://www.linkedin.com/in/daniel-frankcom-28a30a82/), 
[Eric Showers](http://eric-showers.me/), Kyle Thorpe, and Alex Welsh-Piedrahita. We
originally built a snake called "[sneakysnake](https://github.com/hirethissnake/2017)". In 2018,
four of us continued the project again, refining our snake and improving performance 
(Alex decided to not participate). At this point, we renamed our project to 
"[hirethissnake](https://github.com/hirethissnake/2018)".

Built in Python, **hirethissnake focused on weighing individual squares on the game board in 
such a manner that we could use Djikstra's algorithm to maximise "good" squares**. The 
Battlesnake API returned to us a list of snakes, their coordinates, all the food items on
the board and their coordinates, and a list of (currently) dead snakes. We used this data
to weigh food squares as "good", snake bodies as "infinitely bad" (there is never a time
we want to go into a snake's body), snake heads as "good", "bad" or "infinitely bad"
depending on how big we are compared to that other snake (since if we're bigger we can
kill that other snake by intercepting its head), the squares around snakes dependent
on their size, and so on.

{{< figure src="../img/projects/hirethissnake/snakes.svg"
caption="An example of how the algorithm would weigh squares differently."
alt="Heat-mapped squares around two snakes and food squares." >}}

We originally designed our snake with the intention of using a state machine to determine
how to weight different squares differently, however after implementing the ASM itself we
never ended up using anything more than one initial state; mostly our lack of
implementation of other states came from a time crunch for the project.

There's quite a bit of room for improvement for our snake:

 - *reduce method size*: some methods are quite sizable, like the `getNextMove()` method.
 While size isn't terrible _per se_, it can be a code smell which suggests refactoring.
 - *add more states*: having an idle state, alongside a hungry state, an aggressive state,
 etc, would better define the snakes behaviour.

All things considered, I really enjoyed working on hirethissnake, although we never won
a competition (or made it that far). It was a fun side project, and focusing on algorithms
instead of just implementing was an interesting change of pace over other projects, like
my [startpage](#start-page).

_Last updated September 3, 2018._ [↑](#)
