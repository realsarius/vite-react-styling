/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import './CourseInput.scss';
import tw from 'tailwind-styled-components';
import Button from '../../UI/Button/Button';

const FormControl = tw.div`
  my-2 mx-0
`;

const Input = tw.input`
${(props) => (props.invalid ? 'border-red-400 bg-[#ffbaba]' : '')}

block antialiased text-black font-sans w-full text-inherit line leading-6 px-1 py-1 rounded-md border-solid border-2 transition-colors duration-300 focus:outline-none focus:bg-input-color focus:border-input-border-color
`;

const Label = tw.label`
${(props) => (props.invalid ? 'text-red-500' : 'text-white')}

font-bold block my-2 antialiased text-lg transition-colors duration-300
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={(!isValid).toString()}>
        <Label invalid={!isValid}>Course Goal</Label>
        <Input
          type="text"
          onChange={goalInputChangeHandler}
          invalid={!isValid}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
