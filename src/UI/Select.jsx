import classes from "./Select.module.css";

const Select = (props) => {
  const { label, options, onChange } = props;
  return (
    <>
      <label htmlFor="select" className={classes.label}>
        {label}
      </label>
      <select className={classes.select} id="select" onChange={onChange}>
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
