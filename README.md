This project is aiming to create a Doppler Effect Simulator, when user scrolls the slider bar, the star color get changed. 

## Available Scripts

In the project directory, you can run:

### `yarn`

Run his command to install the npm packages before start to run the application

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
The test was built by react testing library

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.



## Project Brief

This project was built by `create-react-app` library. 

1. The project folder structure:
- src
  - Components: I followed the <a href="https://atomicdesign.bradfrost.com/chapter-2/" target="_blank">React Atomic Design Methodology</a> to create the component structure
    - atoms: atom component
    - templates: larger component with logics
  - constants: to store all the constants values used by components
  - utils: to write helper functions (eg: input field validator)
  - tests: write a few unit tests for cover major functionalities of the components and helper functions

2. The only third party library I use is: `styled-components` which is used for styling the reusable components

3. I saved the `star-small.png` image at `public` folder

4. Essential points of develop this project:
  - Used `React Atomic Design Methodology` to for component structure
  - Created unit tests for covering major functionalities
  - Handled responsive display when user uses mobile devices (media queries)
  - Tried to figure out how wavelength algorithms works (By googling)
  - Written the hint message in UI for users to quickly know how to use this application
  - Discovered the relevant regex for input validation handling
  - Ultised CSS `filter` to make the star color change
  - Styled the slider ensure the information is helpful for simulation process



## References (Findings) During Development

- https://stackoverflow.com/questions/56415924/convert-javascript-hex-rgb-color-to-wavelength-and-vice-versa
- https://academo.org/demos/wavelength-to-colour-relationship/
- https://codepen.io/kkmd/pen/vzpdPx
- https://codepen.io/amyth91/pen/cFjsh
- https://css-tricks.com/almanac/properties/f/filter/
- https://css-tricks.com/value-bubbles-for-range-inputs/
- https://stackoverflow.com/questions/21052921/javascript-for-valid-positive-and-negative-numbers-with-one-or-no-dots
