 import React from 'react'
 import styled from 'styled-components'
 import NumberFormat from 'react-number-format';

 function CartTotal({getTotalPrice, getCount}) {
     
     return (
        <Container>
             <Subtotal> Subtotal ({getCount()} items): 
             <NumberFormat value={getTotalPrice()} className="foo" displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value, props) => <div {...props}>{value}</div>} />
             </Subtotal>
             <CheckoutButton> Proceed to Checkout </CheckoutButton>
        </Container>
     )
 }
 
 export default CartTotal
 
 const Container = styled.div`
    flex: 0.3;
    margin: 0 30px 0 30px;
    padding: 20px;
    background-color: white;
`
const Subtotal = styled.h3`
    margin-bottom: 16px;
`
const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover{
        background-color: #ddb347;
    }
`