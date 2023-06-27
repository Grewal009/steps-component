const Button = ({ styleBtn, handleClick, children }) => {
  return (
    <button onClick={handleClick} className={styleBtn}>
      {children}
    </button>
  );
};

export default Button;
