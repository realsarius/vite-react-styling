import './Button.scss';
import styled from 'styled-components';

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = (props) => {
//   return (
//     <button
//       type={props.type}
//       className="button text-lg font-sans antialiased font-medium px-6 py-2 cursor-pointer text-white bg-dark-purple rounded-xl transition-all duration-200 shadow-md focus:outline-none hover:bg-dark-purple-bg hover:border-dark-purple-bg hover:shadow-lg active:bg-dark-purple-bg-focus active:border-dark-purple-bg-focus active:shadow-lg mt-2"
//       onClick={props.onClick}
//     >
//       {props.children}
//     </button>
//   );
// };

export default Button;
