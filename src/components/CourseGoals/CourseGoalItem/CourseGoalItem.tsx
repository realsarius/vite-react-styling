import './CourseGoalItem.scss';

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li
      className="goal-item my-4 mx-0 bg-dark-purple text-white cursor-pointer py-4 px-8 shadow-md rounded-md antialiased "
      onClick={deleteHandler}
    >
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
