import "./checkbox-area.style.scss";
import Checkbox from "../check-box/checkbox";
import {ReactComponent as Horizontal} from '../../assets/horizontal.svg'

const CheckboxArea = () => {
  return (
    <div className="checkbox-area">
      <div className="checkbox-area__category">
        <span className="category-name">Category</span>
        <div className="category-checkbox">
          <Checkbox />
          <span className="checkbox-name">People</span>
        </div>
        <div className="category-checkbox">
          <Checkbox />
          <span className="checkbox-name">Premium</span>
        </div>
        <div className="category-checkbox">
          <Checkbox checked/>
          <span className="checkbox-name">Pet</span>
        </div>
        <div className="category-checkbox">
          <Checkbox checked />
          <span className="checkbox-name">Food</span>
        </div>
        
        <div className="category-checkbox">
          <Checkbox />
          <span className="checkbox-name">Landmarks</span>
        </div>
       
        <div className="category-checkbox">
          <Checkbox />
          <span className="checkbox-name">Cities</span>
        </div>
        <div className="category-checkbox">
          <Checkbox />
          <span className="checkbox-name">Nature</span>
        </div>
      </div>
     <Horizontal className="hr"/>
      <div className="checkbox-area__category checkbox--bottom">
      <span className="category-name">Price range</span>
        <div className="category-checkbox">
          <Checkbox />
          <span className="checkbox-name">Lower than $20</span>
        </div>
        <div className="category-checkbox">
          <Checkbox />
          <span className="checkbox-name">Lower than $20</span>
        </div>
        <div className="category-checkbox">
          <Checkbox />
          <span className="checkbox-name">Lower than $20</span>
        </div>
        <div className="category-checkbox">
          <Checkbox />
          <span className="checkbox-name">Lower than $20</span>
        </div>
      </div>
    </div>
  );
};

export default CheckboxArea;
