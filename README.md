# policy-r-standard

This is the solution for the standard exercise. The goal is to implement a state transition algorithm to implement the ‘mod-three’ procedure on a binary string.

## Requirements

You need node installed on your computer, see https://nodejs.org

## Dev Dependencies

This solution has been built using node v20.8.1

    "@types/jest": "^29.5.8",
    "@typescript-eslint/eslint-plugin": "^6.10.0",
    "@typescript-eslint/parser": "^6.10.0",
    "eslint": "^8.53.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-airbnb-typescript": "^17.1.0",
    "jest": "^29.7.0",
    "prettier": "^3.0.3",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"

## Installation

Open your terminal and in your working folder type  
`$ git clone git@github.com:SylvainJunca/policy-r-standard.git`

Move inside the project folder and install the dependencies  
`$ cd policy-r-standard`  
`$ npm install`

You can run the test suites with:  
 `$ npm test`

## Interact with the algorithm

You can execute the program from the terminal to test the modThree function with:  
 `$ npm run execute`

## Development

If you want to build on top of what has been done, you can run the command:  
`$ npm run dev`

This will run the test suite every time you save a file from the project. I would advise on turning on `formatting on save` in your IDE.

This package contains all the dependencies to make sure every developer would work with the same settings for the lint expectations and format the code accordingly.

You can run the lint with:  
`$ npm run lint`

## Continuous Integration

I installed a github workflow to run the lint and the test suites every time some code is pushed on the 'develop' or 'main' branches. The tests are run in node 16.x, 18.x and 20.x
