import "./checkbox.scss";

const Checkbox = ({ ...otherprops }) => {
  return (
    <label className="container">
      <input type="checkbox" {...otherprops} className="checkbox" onChange={''}/>
      <span className="checkbox-mark"></span>
    </label>
  );
};
export default Checkbox;
