# Testing with Javascript
## What is testing ?
Is to test your code/your code obviously.
Context:
- You have your code 
- You expect a certain behavior
- Then you need to test it:
    - if it passes everything is fine
    - else, it's a failure which imply to correct your code

The idea behing testing your javascript or your code is to **automate and simplify** your tests in order not doing it manually:
Example: You'd like to test your code at each changement, stages for instance.

## Why testing your code ?
- To get feedbacks if you break your code or not
- To save time by avoiding to test manually evrything over and over again
- To anticipate possible issues & bugs
- To integrate into build workflow: example when you push a commit and this could be an automatic workflow to set in order to test your code each time you commit 
- To isolate, a maximum, bits of code by breaking up complex dependencies ( dependencies within a function )
- To improve your code, because you'll probably follow certains pattern to write your code.

## Types of tests  

| Test                  | Complexity | Frequency  | Description                       |
|:---------------------:|:----------:|:----------:|----------------------------------:|
| Unit test             |   x..      |   xxx      |tests fully isolated piece of code ( ex: a pure function ), **easy to write and set** and  **oftenly** written |
| Integration test      |   xx.      | xx.        |tests functions/pieces of code that depends on a another piece of code,  **a bit more complex** to handle and should write a **good couple of these** |
| End To End (E2E) test |  xxx      | x..        |tests the full flow of an app , UX testing , **little bit more complex to handle** and should write a **few of these**     |


## Tools  

#### Test Runner: ( Unit test )
- Executes your tests, summarize results
- Tools: Jest, Mocha

#### Assertion Library: ( Integration test)
- Defines testing logic condition, expectations
- Tools: Jest, Chai

#### Headless Browser: ( E2E test )
- Simulates the user experience w/ browser interactions
- Tools: Puppeteer