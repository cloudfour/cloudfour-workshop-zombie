% Zombie 101: Boot Camp | WebVisions NYC
% Jason Grigsby and Lyza Danger Gardner

# A cleansing boot camp to prepare your body and soul

> You got fat, Gomer Pyle.

# We don't want to end up dead

> Initial contacts with zombies are extremely traumatic, causing shock, panic, disbelief and possibly denial, hampering survivors' ability to deal with hostile encounters. -- [Wikipedia][wiki-apocalypse]

# The web is fat

Syrupy Flash videos, gimmicky news tickers, potbellied background images, slapdash syndicated content, an irrelevant weather forecast: the crap we fling around on web pages these days is the internet equivalent of corn syrup, trans fat or bubblegum. Lots of empty calories clogging the arteries of the web.

* The mobile web is like an economy seat. 
* Average size of a web page is growing. 

## :Speaker Notes:

* The mobile web is like an economy seat. Just because you're fat doesn't make it bigger. You've got to squeeze that ass into that seat.
* Average size of a web page is growing: Need Jason input.

# We got sloppy

We web devs are, as a species, not exactly lazy. But we will take advantage of shortcuts and see what we can get away with.

* Browsers let us get away with ~~anything~~ almost anything.
* Customers aren't paying for W3C compliance.
* Broadband is "everywhere."

## :Speaker Notes:

We liked to hear ourselves talk about making sure we wrote valid code, but, in the end, browsers put up with crap markup anyway. Customers don't exactly beat down your door to get web pages that the W3C validator has approved. They don't tend to look underneath the proverbial rug.

It's like we forgot to zip up our fly, and no one really notices anyway.

# Unfortunately, not so much

When it comes to the mobile web, the notion of valid markup and lean pages is not just something to mutter platitudes about. It's important.

* Bytes cost money.
* Slow costs money.
* Invalid markup costs money.

## :Speaker Notes:

How? Frustrated users bail. Trust me. Throw too many bytes at a mobile user and she will be fiscally punished. 

We know better (progressive enhancement, semantic markup), but we're eating Twinkies and pork rinds anyway.

Back to the basics. Cleaning up our act. It's boot camp time.

# In the name of morale improvement

Sergeant Dingus built a web site to cheer on his comrades in basic training at the Sigma Stronghold. This ragtag group of underdogs is the neighborhood's only hope against the staggering Zombie horde.

Our recruit Gomer and this web site are not too different. Bloated, lazy and distracted.

# It's your mission...

Help Gomer and Sgt. Dingus get this sorry sack of a web page in fighting trim.

The first battle is with ourselves. 

## Find your copy in your pack

Everyone launch a modern web browser and open (TODO: File).

On the surface, things look fine, if a bit home-brew.

## What's broken?

First secret weapon: W3C validator.

## :Speaker Notes:

* Run through W3C validator
* Assuming HTML5 things (pointing out the differences in markup)

An example: `<html>` tag not required. In fact, you can have a closing `</html>` tag without an opening one. Once I did that, unintentionally. This caused crash after crash on certain...what was it...Android browsers? Ask Bryan.

Could have a missing image or script.
As an aside: HTTP requests.
Broken markup is like a loose cannon. It might not go off, but it might.

So: Page has broken elements:

* Nested `<a>` tag improper? OR, a link within a link perhaps.
* Broken link to a background image or script.
* Invalid attribute?


## Identify fat pieces

At least it's in regulation uniform now, but this page still has a weight problem.

* Enormous images: smush.it
* Minifying/concatenating JS/CSS? Is this worth teaching here?
* Reducing div-itis somehow?

## :Speaker notes:
Who cares?

## Identify stupid pieces

* Semantic?
* Address as image?

Maybe just *identify* the stupid pieces.

Dude is now less disgusting.

Who cares?

What happens when you give him a zombie gun? Will he be able to figure out how to use it?
What happens if the new zombie-defense look and feel text is blue instead of pink?

Sometimes you can't mold something from the beginning; you have to fix what you've got.

## That was just the client piece

Have the ability to throw this up on a server and do back-end work. Yes. But as a demo, not as a sing-along.

"Battening down the hatches at HQ"

# Admit that we did it backward?

Should have looked at content first.


# Ohm. Building on a central philsophy.

If you build it right...it will work.


A cleansing boot camp to prepare your body and soul
---------------------------------------------------

> You got fat, Gomer Pyle.

## Abstract

Establish and maintain good web hygiene habits. We've become lazy, our sites bloated and stupid. Those things you could get away with back at the farm will get you killed straightaway in zombie gadget combat. Time to shape up and ship out.

> Initial contacts with zombies are extremely traumatic, causing shock, panic, disbelief and possibly denial, 
> hampering survivors' ability to deal with hostile encounters.
> -- [Wikipedia][wiki-apocalypse]

## Topics

* Fixing broken sites (validation, etc.)
* Cutting the fat (optimizing images, reducing div-itis)
* Removing the stupid (extraneous crap on page; non-semantic markup)
* Server-side optimization quickies
* Content-/mobile-first thinking

## Exercises

* Building a bug-out bag (with performance tools like YSlow, etc.)
* Finding the *broken* pieces of a web page (validation)
* Finding the *bloated* pieces of a web page, fixing (optimization)
* Finding the *stupid* pieces of a web page (content first)
* Demo: server-side items



[wiki-apocalypse]: http://en.wikipedia.org/wiki/Zombie_apocalypse "Wikipedia article on Zombie Apocalypse"