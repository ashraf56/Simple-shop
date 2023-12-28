import EditProduct from '@/app/compo/EditProduct/EditProduct';
import Blogdetail from '@/app/compo/Home/Blog/Blogdetail';
import getPRoductbyID from '@/util/getPRoductbyID';
import React from 'react';
const ItemDetail = async ({ params }) => {
    let { id } = params
    let { product } = await getPRoductbyID(id)
    return (
        <div>
            <Blogdetail id={id} product={product}></Blogdetail>
        </div>
    );
};
export default ItemDetail;