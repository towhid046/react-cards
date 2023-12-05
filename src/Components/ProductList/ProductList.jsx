import ProductCard  from "../ProductCard/PorductCard";
import './ProductList.css'
const ProductList = () => {
    const procuctList = [
        {name: 'Realme C33', price: 15999, imageURL: 'https://www.mobiledokan.com/wp-content/uploads/2023/02/Oppo-A77-4G-300x254.jpg.webp' },
        {name: 'Realme Narzo 50A Prime', price: 15999, imageURL: 'https://www.mobiledokan.com/wp-content/uploads/2023/11/Samsung-Galaxy-M14-5G-smoky-teal-300x254.webp'},
        {name: 'Tecno Phantom V Flip 5G', price: 80990, imageURL: 'https://www.mobiledokan.com/wp-content/uploads/2023/10/Tecno-Phantom-V-Flip-new-300x254.webp'},
        {name: 'Infinix Smart 8', price: 13999, imageURL: 'https://www.mobiledokan.com/wp-content/uploads/2023/06/Infinix-Hot-30i-300x254.jpg.webp'},
        {id: 5, name: 'Honor 90 Lite 5G', price: 31999, imageURL: 'https://www.mobiledokan.com/wp-content/uploads/2023/10/Honor-90-Lite-300x254.webp'},
        {id: 6, name:'Realme Narzo 50A Prime', price: 15999, imageURL: 'https://www.mobiledokan.com/wp-content/uploads/2023/09/Xiaomi-Redmi-Note-13-Pro-Plus-White-300x254.webp'}
    ]
    return (
        <>
        <h1 className="productList_heading">Product list (Task: 01)</h1>
        <div className="bg_fafa">
        <div className="product_list">
           {
            procuctList.map(product => <ProductCard product={product} />)
           }
        </div>
        </div>
        </>
    )
}

export default ProductList;