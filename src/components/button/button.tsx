import './button.scss'
const Button =({children,...otherProps})=>{
  return(
    <div className="button">
      <button {...otherProps} >{children}</button>
    

    </div>

  )
}
export default Button