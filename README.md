# interactive-card-details-form
### [See it in work here](https://vbalazs23.github.io/interactive-card-details-form/)
This project is based on a challenge from [Frontend Mentor](https://www.frontendmentor.io/).<br> 
Link to the original challenge -> [Click Me](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw)<br>
I've integrated all the functionalities required by the brief and tried to make it look as close as possible to the design.<br>
As the user types the data on the cards should update real time. When the form is submitted the inputs need to be validated.
### The main challanges were: 
- I picked this project as it was a bit of an unorthodox design with the two cards with dynamic fields. 
- First I used Bootstrap's client side verification function on the form fields but soon I realised that I needed some additional functions. Plus Bootstrap's 
form verification looked a bit different from the design and to customise it you need to install Sass to your project. 
That was the point where I realised that I'm better off writing my own verification script, making it behave exactly the way I want so that's what I went with. 
- I wanted to limit certain fields to be numbers or letters only. I implemented minimum and maximum values for each fields.<br>
Made sure that the user could type in their card number with or without spaces, it displays correctly either way.

Known issues: 
---
The mobile view doesn't scale properly, it needs some additional work.
