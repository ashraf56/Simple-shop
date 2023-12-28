import { getProduct } from '@/util/getProduct';
import Link from 'next/link';
import React from 'react';



const Blog = async () => {

  const { allproduct } = await getProduct()


  return (
    <div className='items-center justify-center bg-base-300'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-3  mx-auto container p-10'>
        {
          allproduct.map((i) =>
          (
            <div key={i._id} >
              <div className="card w-full md:w-96 bg-primary text-primary-content h-full">
                <div className="card-body">
                  <h2 className="card-title">{i.product_name}</h2>
                  <p>{i.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Link href={`/allitem/${i._id}`}>Detail</Link>

                    </button>
                    <button className="btn">
                      <Link href={`/homeblog/blog/${i._id}`}>Blog Detail</Link>

                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
          )
        }
      </div>
    </div>
  );



};

export default Blog;