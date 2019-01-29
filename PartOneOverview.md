#Part One Overview

- We have our index page configured with the store I've created.
- The store has a cart key and cart reducer
- I have a combine reducer method to  combine multiple reducers (currently only one)
- then I have a root reducer method that will hold all the reducers
- followed by a chrome extension plug in to view state and action through chrome dev tools
- All of which is exported as store that we are calling into our provider in the MAIN index.js file

#Product Listing Component
 
 - iterates through all the products that come from my data/products.json file
 - in the index we connect our product listing componenet to our redux store
 - our actions deictate which type of action "ADD or REMOVE" with a payload of an item
 - the reducers return the cart/store with the outcome of whichever actions the user interfaces with (aka return the payload after an action has been activated)

#Remove Reducer
- const firstMatchIndex removes the first index of the array of dupilcates of a single item

#Final Summary
creating an online store using react, redux, react-router 4, redux-form and a real api back end to provide products!