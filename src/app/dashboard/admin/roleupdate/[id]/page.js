import UpdateuserRole from '@/app/compo/ManageAllUser/UpdateuserRole';
import getUserbyiD from '@/util/getUserbyiD';
import React from 'react';
const UpdateRole = async ({ params }) => {
    let { id } = params
    let { user } = await getUserbyiD(id)
    return (
        <div>
            <UpdateuserRole user={user} id={id}></UpdateuserRole>
        </div>
    );
};
export default UpdateRole;