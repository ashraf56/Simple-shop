import getUserbyiD from '@/util/getUserbyiD';
import React from 'react';

const page = async ({params}) => {
let {id}=params
let {user} = await getUserbyiD(id)
    return (
        <div>
            {
                user.name
            }
        </div>
    );
};

export default page;