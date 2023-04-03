import { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.scss';

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
      <div className={`form-control my-2 ${!isValid ? 'invalid' : ''}`}>
        <label
          className={`font-bold block my-2 antialiased text-lg transition-colors duration-300 ${
            !isValid ? 'text-red-500' : 'text-white'
          }`}
        >
          Course Goal
        </label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          className={`block antialiased font-sans w-full text-inherit line leading-6 px-1 py-1 rounded-md border-solid border-2 transition-colors duration-300 focus:outline-none focus:bg-input-color focus:border-input-border-color ${
            !isValid ? 'border-red-400 bg-[#ffbaba]' : ''
          }`}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
