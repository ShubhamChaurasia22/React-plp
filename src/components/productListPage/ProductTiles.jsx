import Rating from 'react-rating-stars-component';

export default function ProductTiles (product) {
    const { id, title, images, price, discountPercentage, rating, stock } = product;
    return (
        <>
            <div className="product" data-pid={id}>
                <div className="product-tile">
                    <div className="product-tile-container">

                        <div className="image-container">
                            <img className="product-image" src={images[0]} alt={title} />
                        </div>
                        <div className="tile-body">

                            <div className="product-name">{title}</div>

                            {!rating ? 
                            null : 
                            <div className="rating">
                                <Rating 
                                        count={5} // Number of stars
                                        value={rating} // Rating value
                                        size={24} // Size of stars
                                        activeColor="#ffd700" // Color of active stars
                                        edit={false} // Read-only mode
                                />
                            </div>}

                            <div className="product-price">
                                <div className={discountPercentage === 0 ? 'price' : 'strike-through'}>₹{price}</div>
                                {discountPercentage === 0 ? null : <div className='discountend-price'>₹{discountPercentage}</div>}
                            </div>

                            {!stock ? <div className="oos">Out of stock</div> : <div className="ins">In stock</div>}
                        </div>

                        <div className="cta-button">
                            <button className="buy-now" disabled={!stock}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
