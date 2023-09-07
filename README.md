# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

[javascript-result](images/result/javascript.png)

A result to a successfull job in making the thank you card

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

[javascript-result](images/result/javascript.png)

I learn how to find the name of a radiotag and grab its value
```html
<input type="radio" name="rating" value="1">
```
using pseudo tag to create my own custom radio design tag.
appearance: none; is used to hide the button so that I can only have the custom radio button design
```css
input[type="radio"]{
    appearance: none;
    color: var(--Light-Grey);
    cursor: pointer;
}

input[type="radio"]::after{
    background-color: hsl(217, 12%, 54%, 0.1);
    position: absolute;
    display: grid;
    place-items: center;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    font-family: overpassregular;
}

.r1::after{
    content: "1";
}

input[type=radio]:checked::after{
    background-color: var(--Orange);
    color: white;
}
```

```js

function passResult(){
// this is used to grab that is grouped under its name
    var value = document.getElementsByName("rating");
// for loop to through each radio button and look for checked and to then print on
// to the thank you card print-result.
    for(i = 0; i < value.length; i++){

        if(value[i].checked){
            document.getElementById("thankcard").style.display= "grid";
            document.getElementById("print-result").innerHTML = "You selected " + value[i].value + " out of 5";
        }

    }

}
```
### Useful resources

- [geeksforgeeks](https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/) - This is what helped learn how I can take the value a checked radio button and display it on the thank you card

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
