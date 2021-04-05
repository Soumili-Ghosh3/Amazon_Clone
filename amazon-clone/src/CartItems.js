 import React from 'react'
 import styled from 'styled-components'

 function CartItems() {
     return (
        <Container>
           <Title>Shopping Cart</Title>
           <hr />
           <ItemsContainer>
               <CartItem />
           </ItemsContainer>
        </Container>
     )
 }
 
 export default CartItems
 
 const Container = styled.div`
    height: 300px;
    flex: 0.8;
    margin: 0 30px 0 30px;
    padding: 20px;
    background-color: white;
`
const Title = styled.div``
const ItemsContainer = styled.div``
const CartItem = styled.div``
