import React, { useEffect, useState } from 'react'
import { enrollEducator } from '../services/api';
import AdminNotify from './AdminComponent/AdminNotify';
import AdminSidebar from './AdminSidebar'

function AdminStarred() {
    const [details, setDetails] = useState(null);
    useEffect( async () => {
        const {data} = await enrollEducator();
        try {
            setDetails(data)
        } catch (error) {
            console.log(error);
        }
    },[])
    return (
        <div className='admin-home'>
        {console.log(details)}
       <AdminSidebar height='100vh'/>
        <div className='admin-home-r'>
            {
                details?(
                   details?.map((detail,index) => {
                       if(detail.starred)
                      return <AdminNotify
                      detail = {detail}
                      key={index}
                      />
                   })
                ):(
                    <h4>loading...</h4>
                )
            }
            
        </div>
       
    </div>
    )
}

export default AdminStarred
