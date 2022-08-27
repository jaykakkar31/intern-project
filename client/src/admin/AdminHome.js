import { useEffect, useState } from "react";
import AdminNotify from "./AdminComponent/AdminNotify";
import AdminSidebar from "./AdminSidebar";
import './AdminHome.css'
import { enrollEducator } from "../services/api";



const AdminHome = () => {
    const [details, setDetails] = useState(null);
    useEffect( async () => {
        const {data} = await enrollEducator();
        try {
            setDetails(data)
        } catch (error) {
            console.log(error);
        }
    },[])
   
    return(
        <div className='admin-home'>
            {console.log(details)}
           <AdminSidebar height='100vh'/>
            <div className='admin-home-r'>
                {
                    details?(
                       details?.map((detail,index) => {
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
    );
};

export default AdminHome;