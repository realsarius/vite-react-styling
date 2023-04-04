# Styling React Components with Vite

This is a simple React project created with Vite to practice styling with various methods including styled-components and tailwind-styles-components.
Getting Started

To get started with this project, you can clone the repository and install the dependencies:

## Code Example

<p style="text-align: center;">Tailwind with CSS module</p>

```tsx
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`button text-lg font-sans antialiased font-medium px-6 py-2 cursor-pointer text-white bg-dark-purple rounded-xl transition-all duration-200 shadow-md focus:outline-none hover:bg-dark-purple-bg w-full sm:w-auto hover:border-dark-purple-bg hover:shadow-lg active:bg-dark-purple-bg-focus active:border-dark-purple-bg-focus active:shadow-lg mt-2 ${styles.button}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
```

<p style="text-align: center;">Tailwind styled component with CSS module</p>

```tsx
import { useState } from 'react';
import tw from 'tailwind-styled-components';
import styles from './CourseInput.module.scss';
import Button from '../../UI/Button/Button';

const Input = tw.input`
${(props) => (props.invalid ? 'border-red-400 bg-[#ffbaba]' : '')}

block antialiased text-black font-sans w-full text-inherit line leading-6 px-1 py-1 rounded-md border-solid border-2 transition-colors duration-300 focus:outline-none focus:bg-input-color focus:border-input-border-color
`;

const Label = tw.label`
${(props) => (props.invalid ? 'text-red-500' : 'text-white')}

font-bold block my-2 antialiased text-lg transition-colors duration-300
`;

const CourseInput = (props) => {

    return (
        <form onSubmit={formSubmitHandler}>
        <div
            invalid={(!isValid).toString()}
            className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
            <Label invalid={!isValid}>Course Goal</Label>
            <Input
            type="text"
            onChange={goalInputChangeHandler}
            invalid={!isValid}
            />
        </div>
        <Button type="submit">Add Goal</Button>
        </form>
    );

};

export default CourseInput;
```

![ss](vite-styling-1.png)

```bash
git clone https://github.com/realsarius/vite-react-styling.git
cd vite-react-styling
npm install
```

## Available Scripts

In the project directory, you can run:

`npm run dev`

Runs the app in development mode.<br />
Open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the dist folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

`npm run serve`

Serves the production build from the dist folder.<br />
Open <http://localhost:5000> to view it in the browser.
Available Styles

This project uses the following styling methods:

- styled-components: <https://styled-components.com/>
- tailwind-styles-components: <https://tailwindcss.com/docs/guides/create-react-app>

## Contributing

Contributions are always welcome! If you have any suggestions or find any bugs, please feel free to create an issue or submit a pull request.
License

This project is licensed under the MIT License - see the LICENSE file for details.
