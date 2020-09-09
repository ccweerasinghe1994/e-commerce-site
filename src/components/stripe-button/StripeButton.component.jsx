import React from 'react'
import './StripeButton.styles.scss'
import StripeCheckout from "react-stripe-checkout";


const onToken = (token) => {
    console.log(token);
    alert('Payment successful')
}
const stripeKey = 'pk_test_5zczuvHKxs1Ih3uo07klafvO00rfzmKNuh'
const StripeButton = ({price}) => {
    const stripePrice = price * 100;
    return (
        <StripeCheckout
            shippingAddress
            alipay
            billingAddress
            bitcoin
            allowRememberMe
            amount={stripePrice}
            panelLabel='pay now'
            description={`Your total is $${price}`}
            image={'https://thumbs.dreamstime.com/z/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064904.jpg'}
            name='CW CLOTHING pvt.ltd'
            token={onToken}
            stripeKey={stripeKey}
            label='pay now'/>
    )
}

export default StripeButton;
