import "./checkbox-area.mobile.scss";
import Checkbox from "../check-box/checkbox";
import {ReactComponent as Horizontal} from '../../assets/horizontal.svg'
import {ReactComponent as DeleteIcon} from '../../assets/delete-icon.svg'

import Button from "../button/button";

const CheckboxAreaMobile = ({handleclick}) => {
  return (
    <div className="checkbox-area-mobile">
      <div className="checkbox-area__category">
        <div className="category-head">
        <span className="category-name">Filter</span>
       < DeleteIcon onClick={handleclick}/>
        </div>
       
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
      <Horizontal className="hr"/>
      <div className="buttons">
          <Button className='white'>Clear</Button>
        <Button className='black'>Save</Button>

      </div>
    
    </div>
  );
};

export default CheckboxAreaMobile;
