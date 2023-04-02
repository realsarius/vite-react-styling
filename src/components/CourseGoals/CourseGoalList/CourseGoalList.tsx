import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.scss';

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list list-none m-0 p-0">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
