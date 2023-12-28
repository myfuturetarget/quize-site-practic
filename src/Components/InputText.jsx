import classes from '../assets/css/input.module.css';

const InputText = ({ iconName, ...rest }) => {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <i className={iconName}></i>
    </div>
  );
};

export default InputText;
