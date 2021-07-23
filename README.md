# decca-api-wrapper

A wrapper for the [decca api](https://api.decc00n.tk) to make interaction with it easier.

# Usage

**Javascript:**
```js
    const { Api } = require("decca-api");

    const api = new Api("super-secret-token");

    api.drip("https://decc00n.tk/images/pfp.png")
        .then(res => console.log(res));
```

**Typescript imports:**
```ts
    import { Api } from "decca-api";

    const api = new Api("super-secret-token");

    api.drip("https://decc00n.tk/images/pfp.png")
        .then(res => console.log(res));
```

# Don't forget to .catch errors!

To get your api key, drop a visit at: https://docs.api.decc00n.tk/authorization

# Table of Contents
1. [Canvas](#canvas)
2. [String](#string)
3. [Extra](#extra)
4. [Discord](#discord)

## Canvas
- [drip](#drip)
- [bonk](#bonk)
- [brain](#brain)
- [makeMeme](#makememe)
- [bright](#bright)
- [contrast](#contrast)
- [invert](#invert)
- [circle](#circle)
- [yankee](#yankee)
- [sus](#sus)
- [pixel](#pixel)
- [ping](#ping)
- [gun](#gun)
- [afvsae](#afvsae)

## String
- [reverse](#reverse)
- [mock](#mock)
- [randomId](#randomid)

## Extra
- [trivia](#trivia)
- [ftl](#ftl)

## Discord
- [welcome card](#welcome)
- [xp card](#xp)

### Drip

Generates a drip image

```js
    let dripImage;
    api.drip("https://decc00n.tk/images/pfp.png")
    .then(res => dripImage = res);
```

### Bonk

Generates a bonk image

```js
    let bonkImage;
    api.bonk("https://decc00n.tk/images/pfp.png")
    .then(res => bonkImage = res);
```

### Brain

Generates a big brain image

```js
    let brainImage;
    api.brain("https://decc00n.tk/images/pfp.png")
    .then(res => brainImage = res);
```

### MakeMeme

Generates a meme image with/without borders and top text and bottom text

```js
    let memeImage;
    api.makeMeme("https://decc00n.tk/images/pfp.png", "me when", "your girl when", 1)
    .then(res => memeImage = res);
```

### Bright

Brighten an image

```js
    let brightImage;
    api.bright("https://decc00n.tk/images/pfp.png", 1)
    .then(res => brightImage = res);
```

### Contrast

Add contrast to an image

```js
    let contrastImage;
    api.contrast("https://decc00n.tk/images/pfp.png", 1)
    .then(res => contrastImage = res);
```

### Invert

Invert an image

```js
    let invertedImage;
    api.invert("https://decc00n.tk/images/pfp.png")
    .then(res => invertedImage = res);
```

### Circle

Circle an image's borders

```js
    let circleImage;
    api.circle("https://decc00n.tk/images/pfp.png")
    .then(res => circleImage = res);
```

### Sankee

Yankeefy an image

```js
    let yankeeImage;
    api.yankee("https://decc00n.tk/images/pfp.png")
    .then(res => yankeeImage = res);
```

### Sus

Sussify an image

```js
    let susImage;
    api.sus("https://decc00n.tk/images/pfp.png")
    .then(res => susImage = res);
```

### Pixel

Pixelate an image

```js
    let pixelImage;
    api.pixel("https://decc00n.tk/images/pfp.png")
    .then(res => pixelImage = res);
```

### Ping

Add ping icon to an image

```js
    let pingImage;
    api.ping("https://decc00n.tk/images/pfp.png")
    .then(res => pingImage = res);
```

### Gun

Gunify an image

```js
    let gunImage;
    api.gun("https://decc00n.tk/images/pfp.png")
    .then(res => gunImage = res);
```

### AfVsAe

Generates an average fan vs average enjoyer image using your text

```js
    let afvsaeImage;
    api.afvsae("average api wrapper user", "average raw api enjoyer")
    .then(res => afvsaeImage = res);
```

### Reverse

Reverse a string

```js
    let reversedString;
    api.reverse("decc00n")
    .then(res => reversedString = res);
```

### Mock

Mock a string

```js
    let mockedString;
    api.mock("decc00n")
    .then(res => mockedString = res);
```

### randomID

Generates a 14 characters long random ID

```js
    let id;
    api.randomid()
    .then(res => id = res);
```

### Trivia

Generates a random trivia question

```js
    let trivia;
    api.trivia()
    .then(res => trivia = res)
```

### Ftl

Generates a random finish the lyrics question

```js
    let ftl;
    api.ftl()
    .then(res => ftl = res)
```

### Welcome

Generates a discord welcome card

```js
    let card;
    api.welcome("https://cdn.discordapp.com/emojis/778554329975750656.png", "welcome!", "to our lit server", "https://cdn.discordapp.com/avatars/589044704708919316/af2f2a94f8e538ab4f9c33c231f0d1af.png", "decc00n", "white")
    .then(res => card = res)
```

### Welcome

Generates a discord welcome card

```js
    let card;
    api.welcome("https://cdn.discordapp.com/emojis/778554329975750656.png", "welcome!", "to our lit server", "https://cdn.discordapp.com/avatars/589044704708919316/af2f2a94f8e538ab4f9c33c231f0d1af.png", "decc00n", "white")
    .then(res => card = res)
```

### Xp

Generates a discord xp card

```js
    let card;
    api.xpCard("https://cdn.discordapp.com/emojis/778554329975750656.png", "https://cdn.discordapp.com/avatars/589044704708919316/af2f2a94f8e538ab4f9c33c231f0d1af.png", 1, 69, "decc00n", "6684", 420, 666)
    .then(res => card = res)
```