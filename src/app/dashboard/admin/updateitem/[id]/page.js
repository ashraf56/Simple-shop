import EditProduct from '@/app/compo/EditProduct/EditProduct';
import getPRoductbyID from '@/util/getPRoductbyID';
import React from 'react';

const Updateitems = async({params}) => {
    let {id}=params
   
    let {product}= await getPRoductbyID(id)

    return (
        <div>
          <EditProduct id={id} product={product}></EditProduct>
        </div>
    );
};

export default Updateitems;