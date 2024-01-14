import { useEffect } from 'react';
import './Products.css'
import { useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';
import Card from '../Cart/Card';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';



const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])



    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])

    const handleAddToCart = (products) =>{
        const newCart = [...cart, products] 
        setCart(newCart);
        addToDb(products.id)

       

     
        

        
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