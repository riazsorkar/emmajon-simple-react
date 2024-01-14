import './ProductCart.css';


const ProductCart = (props) => {

    // eslint-disable-next-line react/prop-types
    const handleAddToCart = props.handleAddToCart;
   

     // eslint-disable-next-line react/prop-types
     const {name, img, price, seller, ratings} = props.totalProduct;

     


    return (
        <div className="alignItem">

            <div className='ProductCart'>
                <img className='productImage' src={img} alt={name} />
                <h5>{name}</h5> 
                <h6>Price:${price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Rating:{ratings}</p>                     
            </div>
        <button

            className='btn'
            // eslint-disable-next-line react/prop-types
            onClick={() => handleAddToCart(props.totalProduct)}  
            >Add to Cart</button> 
        </div>
        
    );
};

export default ProductCart;