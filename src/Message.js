const Message = ({ step, children }) => {
  return (
    <div>
      <p>
        Step {step}: {children}
      </p>
    </div>
  );
};

export default Message;
