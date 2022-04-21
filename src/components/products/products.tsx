import './product.scss';
import Button from '../button/button';


const Product=({name,category,price,image,text})=>{

  return(
    <div className='product'>{
      <div className="product__image" style={{backgroundImage:`url(${image})`}}>
       { text? <span className='importance'>{text}</span> : ''}
        <Button>Add To Cart</Button>
      </div>}
      <span className="product__category">{category}</span>
      <span className="product__name">{name}</span>
      <span className="product__price">$ {price}</span>



    </div>
  )
}
export default Product