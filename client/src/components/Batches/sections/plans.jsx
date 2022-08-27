import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

// ///////////PLANS SECTION///////////////

export const plans = [
  {
    id: 1,
    duration: "1 Month plan",
    price: "1,999/month",
  },
  {
    id: 1,
    duration: "1 Month plan",
    price: "1,999/month",
  },
  {
    id: 1,
    duration: "1 Month plan",
    price: "1,999/month",
  },
  {
    id: 1,
    duration: "1 Month plan",
    price: "1,999/month",
  },
];

const Plans = ({student}) => {
  const history = useHistory();
  return (
    <div className="plans_section">
      <Grid container alignItems="flex-start">
        {plans.map((plan) => (
          <Grid item lg={2} className="plan" alignItems="center">
            <div className="plan_info">
              <p className="duration">{plan.duration}</p>
              <p className="price">₹{plan.price}</p>
            </div>
            <Button variant='contained' color='primary' disableElevation onClick={()=>history.push(student._id?'/iitjee/buycourse':'/students/login')}>Subscribe</Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Plans;
