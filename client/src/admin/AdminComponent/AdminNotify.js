import React, { useEffect, useState } from 'react'
import './AdminNotify.css'
import { StarBorder, DeleteOutline, Star } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { updateStarredMsg } from '../../services/api';

function AdminNotify({detail}) {
    const history = useHistory();
    const [star, setStar] = useState(null);
    useEffect(() => {
       const check = () => {
           if(detail?.starred)
             setStar(true);
            else
              setStar(false);
       }
       check();
    },[])

    const handleClick = async () => {
        setStar(prev => !prev);
        const {data} = await updateStarredMsg({starred:!detail?.starred},detail?._id)
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
   
    return (
        <div className='admin-notify'>
            <div onClick={handleClick}>{(star)?(<Star/>):(<StarBorder/>)}</div>
            {console.log(detail)}
            <h3 onClick={() => history.push('/educator/admin/adminhome/inbox/'+detail?._id)}>{detail?.name}</h3>
            <p onClick={() => history.push('/educator/admin/adminhome/inbox/'+detail?._id)}>also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <h4>3:34 pm</h4>
            <DeleteOutline style={{marginLeft:'auto'}}/>
        </div>
    )
}

export default AdminNotify
