% Creating Slideshow Content

## Slideshow Controls

* `B`: Make content/font bigger (like zooming in)
* `S`: Make content/font smaller (like zooming out)
* `F`: Show/hide bottom bar
* `A`: Toggle showing of *all* slides at once
* `Home`: Go to first slide
* `End`: Go to last slide


## Image alignment and styling on slides

### Default

Markdown like this:

~~~{.markdown}
# Signs of the Apocalypse are Everywhere!

![](images/01-iphone-adoption-graph.png)
~~~

will result in an image floated left, with styling/background/border, spanning approximately half of the slide horizontally. See: [example of default image alignment](presentation/01-assess-the-threat.html#(2))

### Other Alignments

*Note:* The text in the heading elements used in the following examples is *not* displayed to the screen.

#### Reverse Alignment

Reverse-aligned images are presently about the same as default, but with the float to the right. To effect this, use code like:

~~~{.markdown}
## Reverse: Android Fragmentation

![](images/01-there-is-no-android.jpg)
~~~

That is, a heading of any level that starts with the word `Reverse` and an image within that section. See [example of reverse image alignment](presentation/01-assess-the-threat.html#(5)).

#### Figures/Spanning Full Width

You can also make a standalone image slide, in which the image spans full width and has less background space used.

Do this by using:

~~~{.markdown}
## Figure: Opera Mini Growth Chart

![](images/01-opera-mini-growth.png)
~~~

That is, any heading level that starts with `Figure`, containing an image. See [example of full-span figure alignment](presentation/01-assess-the-threat.html#(3)).

#### Illustrative Images

There is also a way to remove all background styling from images and have them span wide. I'm using this for images that are "illustrative" versus figurative.

This can be done with:

~~~{.markdown}
## Illustration: Pew Pew

![](images/03-pew.png)
~~~

That is, any heading element starting with `Illustration` that has a contained image.

See an example of how this [illustration style looks](presentation/03-release-hounds.html#(4)).

#### Image Captions

You can add captions to any of the image types listed above by doing this:

~~~{.markdown}
![I'm too fat!](images/02-my-fat-site.png "My fat site")
~~~

[See how this caption lays out.](presentation/02-bootcamp.html#(6))

#### Note to self

I used the following pandoc command to build this HTML page:

~~~
pandoc --from=markdown --to=html5 --standalone --css=rucksack/field-notes/fieldnotes.css writing-content.md > writing-content.html
~~~