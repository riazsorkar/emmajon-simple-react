import { useEffect } from 'react';
import './Products.css'
import { useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';
import Card from '../Cart/Card';



const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])



    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (products) =>{
        const newCart = [...cart, products] 
        setCart(newCart);

       

     
        

        
     }
    return (
        <div className='Products'>

            <div className="ProductsItem">
                {
                    
                    products.map((product) => <ProductCart
                    
                        totalProduct = {product}
                        key = {product.id}
                        handleAddToCart = {handleAddToCart}
                    
                    ></ProductCart>)               
                }
            </div>
            <div className="ProductsCart">
                <Card cart = {cart}></Card>
            </div>
        </div>
    );
};
export default Products;