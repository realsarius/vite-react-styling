import { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.scss';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control my-2">
        <label className="font-bold block my-2 antialiased text-lg text-white">
          Course Goal
        </label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          className="block antialiased font-sans w-full text-inherit line leading-6 px-1 py-1 rounded-md border-solid border-2 transition-colors duration-200 focus:outline-none focus:bg-input-color focus:border-input-border-color"
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
