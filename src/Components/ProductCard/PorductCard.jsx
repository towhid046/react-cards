import './ProductCard.css'
const ProductCard = ({product}) =>{
  const {name, price, imageURL} = product
    return (
        <>
        <div className="product_card">
            <img src={imageURL} alt="" />
            <h2>{name}</h2>
            <strong>Price: ৳{price}</strong> <br />
            <button className='product_btn'>Add to card</button>
        </div>
        </>
    )
}

export default ProductCard;