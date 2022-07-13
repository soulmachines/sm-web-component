# Images

There is some basic support for images, but the options are limited as Markdown is designed for writing text documents and not for complex formatting.

Images should generally be displayed "on their own line" as there is no way to arrange them to visually appear to the left or right of accompanying text.

## Defining an Image

Images have two parts: A text description of the image, and a link to the image.

The image's text description is its "alt text" and is required. Alt text is _alternative_ text, to be displayed when the image can not be loaded for some reason, or for use by screen readers used by visually impaired people.

The alt text should be written between the square brackets, while the link to the image should be in round brackets.

![A cute kitten](https://source.unsplash.com/180x120/?cute,kitten)

```
![A cute kitten](https://source.unsplash.com/180x120/?cute,kitten)
```

![A cute kitten that failed to load](https://source.nowhere.com/180x120/?cute,kitten)

```
![A cute kitten that failed to load](https://source.nowhere.com/180x120/?cute,kitten)
```

## Small Images

Small images will be displayed at their true size and will not be stretched.

![A beautiful forest](https://source.unsplash.com/300x220/?forest)

```
![A beautiful forest](https://source.unsplash.com/300x220/?forest)
```

## Large Images

Large images will take a long time to load, so try to only make them as big as you need. Large images will be visually scaled down if needed, so that their width never exceeds the available horizontal space.

![A photograph of a large bird](https://source.unsplash.com/1200x800/?large,bird)

```
![A photograph of a large bird](https://source.unsplash.com/1200x800/?large,bird)
```

## Inline Images

If you place an image in the middle of a sentence like this ![Robot](https://robohash.org/robot.png?size=20x20) then the text will flow around it, but it tends to look a bit silly so is best avoided.

```
If you place an image in the middle of a sentence like this ![Robot](https://robohash.org/robot.png?size=20x20) then the text will flow around it, but it tends to look a bit silly so is best avoided.
```
