import classes from "./Select.module.css";

const Select = (props) => {
  const { label, options } = props;
  return (
    <>
      <label htmlFor="select" className={classes.label}>
        {label}
      </label>
      <select className={classes.select} id="select">
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
