import React from 'react';
import './profile.scss';

const Subscription = ({subscriptions}) => {
    return (
        <div>
            <div className="heading">
                <h3>My Subscriptions</h3>
            </div>
            <div className="container shadow subscriptions">
                    {subscriptions.map((subscription) => (
                        <div className="m-4 p-2">
                            <div className="subsciption-name">
                                {subscription.courseName}
                            </div>
                            <div className="details">
                                <div className="details-inner">{subscription.p1}</div>
                                <div className="details-inner">{subscription.p2}</div>
                                <div className="details-inner">&#8377; {subscription.price}</div>
                            </div>
                            <button type="button" className="btn"> Details </button> 
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Subscription;