import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addSubCourse, iitCoursePay } from "../../../services/api";
import FullPayment from "../../common/Payment/FullPayment";
import SubPayment from "../../common/Payment/SubPayment";
import StudentSideBar from "../../common/Sidebar/StudentSideBar";
// import { selectTotalSubjectPayment } from "../features/priceSlice";
import "./BuyCourse.css";
import Axios from 'axios';
import CrashHeader from "../../common/CrashHeader/CrashHeader";
//loadscript for razorpay
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

// const _DEV_ = document.domain === 'localhost'

if(document.domain === 'localhost'){
//development
} else{
//production
}
function BuyCourse({student}) {
 
  const subjectPayment = useSelector((state) => state.payment);
  const [order_id, setOrder_id] = useState('');

  const [packageData, setPackageData] = useState({
    buycourse : [
       {
           discount : '20%',
           duration : '6 month',
           price : 20000,
       },
       {
        discount : '10%',
        duration : '3 month',
        price : 10000,
    },
    {
        discount : '30%',
        duration : '12 month',
        price : 100000,
    },
    {
        discount : '20%',
        duration : '24 month',
        price : 180000,
    }
    ],
    subjectcourse : [
        {
            subject : 'Physics',
            duration : '3 Month',
            price : 5000
        },
        {
            subject : 'Chemistry',
            duration : '3 Month',
            price : 4000
        },
        {
            subject : 'Maths',
            duration : '3 Month',
            price : 6000
        }
    ]

});

  //backend
  // useEffect(async () => {
  //   fetch("/getpaymentdata")
  //     .then((res) => res.json())
  //     .then((data) => setPackageData(data[0]));
  //   try {
  //     const price = await iitCoursePay();
  //     setPackageData(price.data[0]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  //razorpay function
  const subDisplayRazorPay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    
    if(!res) {
      alert('Razorpay SDK failed to load. Are you Online?')
      return
    }
  
     fetch('/students/razorpay', 
     {method:'POST',
     headers : {"Content-type" : "application/json"},
      body : JSON.stringify({ amount : subjectPayment,
        currency : 'INR',
        order_id : '',})
    }).then((res) => {
      res.json();
    }).then(order_id => {
    
      setOrder_id(order_id);
    })
    
     var options = {
      key: "rzp_test_E4LTFhCrl5VPfL", // Enter the Key ID generated from the Dashboard
      currency : 'INR',
      amount : subjectPayment*100,
      order_id : order_id,
      name: "JEE Course",
      description: "Thank you for purchasing our course",
      image: "https://iezal.com/images/logo.png",
      
      handler: async (response) => {
        try {
         const paymentId = response.razorpay_payment_id;
         const url = `/students/capture/${paymentId}`;
         const captureResponse = await Axios.post(url, {amount : subjectPayment})
         const successObj = JSON.parse(captureResponse.data)
         const captured = successObj.captured;
         console.log("App -> razorPayPaymentHandler -> captured", successObj)
          if(captured){
            const msg =  await addSubCourse(student._id, {
              //  duration : `${duration} Subscription`,
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
    <div className="buycourse crash-home">
      {console.log(subjectPayment)}
      <StudentSideBar />
      <div className="buy-right c-h-right">
        <CrashHeader />
        <div className="buy-head">
          <h1>Choose Your Plan</h1>
        </div>
        {packageData ? (
          <>
            <div className="buy-course-main">
              <select class="form-select" aria-label="Default select example">
                <option selected>Full Course</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="class-courses pay1-head">
                {packageData.buycourse.map((course, index) => {
                  return (
                    <FullPayment
                      student = {student}
                      key={index}
                      discount={course.discount}
                      duration={course.duration}
                      price={course.price}
                    />
                  );
                })}
              </div>
            </div>

            <div className="buy-course-main">
              <div className="buy-subject">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Subject</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                  <option selected>6 Months</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="class-courses">
                {packageData.subjectcourse.map((course, index) => {
                  return (
                    <SubPayment
                      key={index}
                      subject={course.subject}
                      duration={course.duration}
                      price={course.price}
                    />
                  );
                })}
              </div>
              <div className="total-pay">
                <h2>
                  Total Payment :{" "}
                  {subjectPayment ? (
                    `₹ ${subjectPayment}`
                  ) : (
                    <span style={{ color: "red", fontSize: "16px" }}>
                      {" "}
                      Please select subject
                    </span>
                  )}
                </h2>
                <Button hidden = {subjectPayment?false:true} onClick = {subDisplayRazorPay}>Proceed to pay</Button>
              </div>
            </div>
          </>
        ) : (
          <h2 style={{ textAlign: "center" }}>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default BuyCourse;
