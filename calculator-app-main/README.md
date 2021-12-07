# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot

- Desktop Version Preview

![<img src="../screenshots/desktop-theme1.png" alt="Desktop Version"/>](../screenshots/desktop-theme1.png)

- Mobile Version Preview

![<img src="../screenshots/mobile-theme1.png" alt="Mobile Version"/>](../screenshots/mobile-theme1.png)

**Note: There are more screenshots available for different themes. Check the screenshots folder.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://calculator-app-omega.herokuapp.com/](https://calculator-app-omega.herokuapp.com/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

This is the first time I have worked on a theme changing app. It was interesting to learn how to make a switching system for changing between multiple themes and multiple style sheets.

```html
<div class="switch" id="switch">
  <input
    type="radio"
    name="switch"
    id="one"
    onclick="themeChanger('theme1')"
    checked
  />
  <label for="one" class="switch__label"></label>

  <input type="radio" name="switch" id="two" onclick="themeChanger('theme2')" />
  <label for="two" class="switch__label"></label>

  <input
    type="radio"
    name="switch"
    id="three"
    onclick="themeChanger('theme3')"
  />
  <label for="three" class="switch__label"></label>

  <div class="switch__indicator"></div>
</div>
```

```css
.switch {
  position: relative;
  . . .
  // background-color is added using separate style sheet based on theme
}

.switch > input {
  . . .
  opacity: 0; // To make the radio buttons invisible
}

.switch__indicator {
  // Fixed size of the indicator that rotates over the options based on selection
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  top: 0.5rem;
  left: 0;
  border-radius: 50%;
  transition: transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97), background
      300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);
  transform: translate3d(1rem, 0.2rem, 0);
}

input#one:checked ~ .switch__indicator {
  background: hsl(6, 63%, 50%);
  transform: translate3d(0.3rem, -0.2rem, 0);
}
input#two:checked ~ .switch__indicator {
  background: hsl(25, 98%, 40%);
  transform: translate3d(1.8rem, -0.2rem, 0);
}
input#three:checked ~ .switch__indicator {
  background: hsl(176, 100%, 44%);
  transform: translate3d(3.2rem, -0.2rem, 0);
}
```

### Continued development

It is very much possible for upgrading this simple calculator into a scientific calculator which will be capable of perform calculations based on mathematical functions.

### Useful resources

- [Switch between CSS stylesheets](https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/) - This helped me for understanding the concept behind, changing between multiple stylesheets
- [Usage of Link Tags dynamically](https://www.thesitewizard.com/javascripts/change-style-sheets.shtml) - This is amazing article helped me with the working of link tags in html.

## Author

- Frontend Mentor - [@OMEGAeNcore](https://www.frontendmentor.io/profile/OMEGAeNcore)
- Twitter - [@IpshitaSolo](https://www.twitter.com/IpshitaSolo)
