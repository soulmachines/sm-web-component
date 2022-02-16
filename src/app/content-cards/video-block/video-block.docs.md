# Video

Displays a video.

```
{
  "component": "video",
  "data": {
    "url": "https://www.youtube.com/embed/XAwjGwJXyxg"
  }
}
```

- The iframe allows us to load an external video onto our page, such as youtube and vimeo.
- Youtube videos must follow the format, eg. `https://www.youtube.com/embed/XAwjGwJXyxg`.
- Vimeo videos must follow the format, eg. `https://player.vimeo.com/video/293196601`.

## Watson Usage

Set Context in Watson Form view:

```
$public-video   {"data":{"url":"https://www.youtube.com/embed/XAwjGwJXyxg"},"component":"video"}
```

Or Set Context in Watson JSON view:

```
{
  "context": {
    "public-video": {
      "data": {
        "url": "https://www.youtube.com/embed/XAwjGwJXyxg"
      },
      "component": "video"
    }
  },

  ...

}
```
