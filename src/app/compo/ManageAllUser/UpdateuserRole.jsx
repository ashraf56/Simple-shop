"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
const UpdateuserRole = ({ id, user }) => {
    const router = useRouter()
    const { register, handleSubmit, control, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        let { Newrole } = data
        try {
            const res = await fetch(`/api/user/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
            if (!res.ok) {
                throw new Error("Failed to update role");
            }
            toast.success(" Successfully Changed", {
                duration: 4000,
            })
            router.refresh()
            router.push('/dashboard/admin/usermanage')
        } catch (error) {
            console.log(error);
        }
    }
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
                            <div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Change role</span>
                                    </label>
                                    <select defaultValue={user?.role} className="select select-bordered w-full  "  {...register("Newrole", { required: "Please select " })}>
                                        <option value="" selected>Select Category</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">user</option>
                                    </select>
                                    {errors.Newrole && <p className="text-error pt-1">{errors.Newrole.message}</p>}
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Save Change</button>
                                <Toaster></Toaster>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UpdateuserRole;