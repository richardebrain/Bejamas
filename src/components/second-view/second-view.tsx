import "./second-view.scss";
import { ReactComponent as Sort } from "../../assets/sort-by.svg";
import { ReactComponent as Dropdown } from "../../assets/dropdown.svg";
import CheckboxArea from "../checkbox-area/checkbox-area";
import Datas from '../products/data'
import Product from "../products/products";
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg'
import {ReactComponent as RightArrow} from '../../assets/right-arrow.svg'
import {ReactComponent as SortIconMobile} from '../../assets/sort-icon-mobile.svg'

const SecondView = () => {
  return (
    <div className="second">
      <div className="second__view view--header">
        <div className="view--category">
          <span className="category-photography">Photography </span>
          <span className="category-slash">/</span>
          <span className="category-premium">Premium Photos</span>
        </div>

        <div className="second__sort sorts">
          <Sort className="sort-svg" />
          <span className="sort-by">Sort By</span>
          
            <span className="sort-price">Price</span>
            <Dropdown className="sort-dropdown" />
            <SortIconMobile className="sort-mobile-dropdown"/>
        
        </div>
      </div>

      <div className="second__categories">
        <CheckboxArea/>
       
        <div className="category-items">
          {
            Datas.map( (data)=>
              <Product key={data.id} data={data}/>)
          }


        </div>
      </div>

      <div className="second__footer footer">
        <LeftArrow className="footer-arrow"/>
        <span className="footer-number">1</span>
        <span className="footer-number">2</span>
        <span className="footer-number">3</span>
        <span className="footer-number">4</span>
        <span className="footer-number">5</span>
        <RightArrow className="footer-arrow"/>

      </div>
    </div>
  );
};

export default SecondView;
