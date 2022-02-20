# Linked

A beautiful and simple template to store all your Links 🔗.

<br />

![Linked-Thumbnail](https://user-images.githubusercontent.com/72091386/154807054-0b031aa2-3101-4b34-b2cb-e057b97e0c90.png)

# Usage 📕

In-order to install this template, you might need to clone this repo using **git**.

```sh
git clone https://github.com/haneenmahd/linked.git
```

After cloning the repo.
You would need to configure your custom links, titles and names.
But, we have a script to get you started.
Exeucte the following in a terminal:

```sh
yarn configure

## Enter your name and other more stuff
```

Read [Configuring](#configuring-) to know more about how-to configure your data.

# Configuring 🛠

After running `yarn configure`, you will be prompted by a set of questions. Well, this section provides documentation to those stuff 🙂.

- Name: Provide your name or the Title you would like to see
- Description: Simply describe yourself 😃!
- ShadowType: this is optional, but your avatar would look great if you apply some shadow to it. Use `soft-shadow` to apply a soft one. You can also use `violet-gradient`, `green-gradient`, `reflection` -> slightly reflects your avatar to the bottom.
- Animated Shadow: animate the shadow of your avatar. provide **y** for yes, **n** for no. The default value is yes.
- Paypal Username: Share your Paypal username that will be used to display Paypal link

## Configuring using `src/data/config.json`
Here is the sample json file
```json
{
  "avatarOptions": {
    "title": "Your name",
    "description": "Describe yourself :D"
  },
  "stylingOptions": {
    "shadowType": 3, // soft-shadow
    "isShadowAnimated": true // animates the shadow
  },
  "links": [
    {
      "linkUrl": "https://github.com/haneenmahd", // url
      "placeholder": "GitHub",
      "colorSet": 0 // github link theme
    },
    {
      "linkUrl": "https://dribbble.com/haneenmahdin",
      "placeholder": "Dribbble",
      "colorSet": 1 // dribble link theme
    },
    {
      "linkUrl": "https://twitter.com/HaneenMahdin",
      "placeholder": "Twitter",
      "colorSet": 4 // twitter link theme
    },
    {
      "linkUrl": "mailto:haneenmahdin@gmail.com",
      "placeholder": "Mail me ✉️",
      "colorSet": 2 // portfolio link theme
    },
    { // automatically uses paypal link theme
      "payPalConfig": {
        "payPalUserName": "",
        "text": "Paypal me 💸"
      }
    }
  ]
}

```


# Questions 🤔

- How to setup your custom avatar Instead of the default one?

  The answer is simple, the component fetches the image from [/src/assets/png/avatar.png](https://github.com/haneenmahd/linked/blob/master/src/assets/png/avatar.png). You can move your image file into that specific path.

Any other questions? [Discussions](https://github.com/haneenmahd/linked/discussions/new) are open ✉️

## License and Legal Usage 🧑‍⚖️

This project is free to use and can be edited to create an alternative one. But the credit to the original creation is still left with @haneenmahd.

Licensed Under **MIT**
