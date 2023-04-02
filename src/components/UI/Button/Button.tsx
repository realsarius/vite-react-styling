import './Button.scss';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="button text-lg font-sans antialiased font-medium px-6 py-2 cursor-pointer text-white bg-dark-purple rounded-xl transition-all duration-200 shadow-md focus:outline-none hover:bg-dark-purple-bg hover:border-dark-purple-bg hover:shadow-lg active:bg-dark-purple-bg-focus active:border-dark-purple-bg-focus active:shadow-lg mt-2"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
