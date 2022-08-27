import { Button } from '@material-ui/core'
import {React, useState} from 'react'
import './FullPayment.css'
import Axios from 'axios';
import { addSubCourse } from '../../../services/api';
const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const _DEV_ = document.domain === 'localhost'

if(document.domain === 'localhost'){
  //development
} else{
  //production
}

function FullPayment({discount, duration, price,student}) {

    const [data, setData] = useState({
        amount : price,
        currency : 'INR',
        order_id : '',
      });

    const displayRazorPay = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        
        if(!res) {
          alert('Razorpay SDK failed to load. Are you Online?')
          return
        }
      
         fetch('/students/razorpay', 
         {method:'POST',
         headers : {"Content-type" : "application/json"},
          body : JSON.stringify(data)
        }).then((res) => {
          res.json();
        }).then(order_id => {
          console.log(order_id);
          setData({...data, order_id})
        })
        
         var options = {
          key:_DEV_? "rzp_test_E4LTFhCrl5VPfL" : "PRODUCTION_KEY", // Enter the Key ID generated from the Dashboard
          currency : data.currency,
          amount : data.amount*100,
          order_id : data.order_id,
          name: "JEE Course",
          description: "Thank you for purchasing our course",
          image: "http://localhost:3000/static/media/logo.cdfc96ef.png",
          
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `/students/capture/${paymentId}`;
             const captureResponse = await Axios.post(url, {amount : data.amount})
             const successObj = JSON.parse(captureResponse.data)
             const captured = successObj.captured;
             console.log("App -> razorPayPaymentHandler -> captured", successObj)
             if(captured){
                const msg =  await addSubCourse(student._id, {
                   duration : `${duration} Subscription`,
                   price
                 });
                 console.log(msg);
                 alert('payment success');
                 window.location = '/';
             }
             
            } catch (err) {
              console.log(err);
            }
          },
          prefill: {
             name: student.name,
             email : student.email,
             contact : student.mobile,
          },
      };
      const paymentObject = new window.Razorpay(options);
      
      paymentObject.open();
    }
    return (
        <div className='full-payment'>
            <div className='pay-off'>
            <p>{discount} off</p>
            </div>
            
            <div className='full-p-m'>
                <h1>{duration}</h1>
                <p>Save 5000</p>
            </div>
            <div className='full-rate'>
                <h1>₹ {price}</h1>
                <p>Total</p>
            </div>
            <Button onClick = {displayRazorPay} color='primary'>Proceed to Pay</Button>
        </div>
    )
}

export default FullPayment
