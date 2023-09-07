'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

const EditProduct = ({id, product}) => {
    const router = useRouter();
    let {product_name,description ,price,category,stock_quantity}=product;


    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const onSubmit = async(data) => {

let {newproduct_name,newdescription,newPrice,newstock_quantity,newcategory}=data


try {
    const res= await fetch(`/api/products/${id}`,{
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    })
    if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push('/dashboard/admin/manageall')
} catch (error) {
    console.log(error);
}

    }
    const positiveNumberValidation = (value) => {
        return parseFloat(value) > 0 || "Please enter a valid  number";
    };
    return (
        <div>
               <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold ">Become a Donor!</h1>
                        <p className="py-6">Thank you for considering becoming a donor and joining us in making a significant difference in the lives of those in need.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm md:max-w-full  shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product name</span>
                                </label>
                                <input type="text" defaultValue={product_name} placeholder="product name" className="input input-bordered"  {...register("newproduct_name")}  />
                            </div>

                      
                     
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" defaultValue={price} placeholder="price"  {...register("newPrice", {
                                    required: "price is required",
                                    validate: positiveNumberValidation
                                })} className="input input-bordered" />
                                {errors.newPrice && <p className="text-error pt-1">{errors.newPrice.message}</p>}
                            </div>

                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">stock_quantity</span>
                                </label>
                                <input type="text" defaultValue={stock_quantity} placeholder="stock_quantity"  {...register("newstock_quantity", {
                                    required: "stock_quantity is required",
                                    validate: positiveNumberValidation
                                })} className="input input-bordered" />
                                {errors.newstock_quantity && <p className="text-error pt-1">{errors.newstock_quantity.message}</p>}
                            </div>


                         


      

                            <div>

                           

                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Select Category</span>
                                    </label>
                                    <select defaultValue={category} className="select select-bordered w-full  "  {...register("newcategory", { required: "Please select a gender" })}>
                <option value="" selected>Select Category</option>
  <option value="men_clothing">Mens Clothing</option>
  <option value="women_clothing">Womens Clothing</option>
  <option value="kids_clothing">Kids Clothing</option>
  <option value="smartphones">Smartphones</option>
  <option value="laptops">Laptops</option>
  <option value="cameras">Cameras</option>
  <option value="furniture">Furniture</option>
  <option value="home_decor">Home Decor</option>
  <option value="kitchen_appliances">Kitchen Appliances</option>
  <option value="outdoor_gear">Outdoor Gear</option>
  <option value="fitness_equipment">Fitness Equipment</option>
  <option value="books">Books</option>
                                    </select>
                                    {errors.newcategory && <p className="text-error pt-1">{errors.newcategory.message}</p>}
                                </div>
                            </div>




                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">description</span>
                                </label>
                               
                                <textarea className="textarea textarea-secondary" placeholder="description"
                                 {...register("newdescription")}
                                defaultValue={description}
                                ></textarea>

                            </div>
                          

                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default EditProduct;