import getPRoductbyID from '@/util/getPRoductbyID';
import React from 'react';

const page = async({params}) => {
    let {id}=params
   
    let {product}= await getPRoductbyID(id)
    let { product_name,description ,price,category,stock_quantity}=product

    return (
        <div>
            <h1>{product_name}</h1>
            <h1>{description}</h1>
        </div>
    );
};

export default page;