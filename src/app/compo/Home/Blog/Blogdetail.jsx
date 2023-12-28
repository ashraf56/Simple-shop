import React from 'react';

const Blogdetail = ({ id, product }) => {
    let { product_name, description, price, category, stock_quantity } = product
    return (
        <div>
            <h1>{product_name}</h1>
        </div>
    );
};

export default Blogdetail;