const CheckBox = ({ className, text, ...rest }) => {
  return (
    <div className="checkBox">
      <label className={className}>
        <input type="checkbox" {...rest} /> <span>{text}</span>
      </label>
    </div>
  );
};

export default CheckBox;
