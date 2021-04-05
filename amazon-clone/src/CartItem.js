import React from 'react'
import styled from 'styled-components'

 function CartItem() {
     return (
         <Container>
             <ImageContainer>
                 <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156.jpg" />
             </ImageContainer>
             <CartItemInfo>
                 <CartItemInfoTop>
                     <h2> Ipad Pro </h2>
                 </CartItemInfoTop>
                 <CartItemInfoBottom>
                     <CartItemQuantityContainer> 5 </CartItemQuantityContainer>
                     <CartItemDeleteContainer> Delete </CartItemDeleteContainer>
                 </CartItemInfoBottom>
             </CartItemInfo>
             <CartItemPrice> $1300 </CartItemPrice>
         </Container>
     )
 }
 
 export default CartItem

 const Container = styled.div`
    padding: 12px 0 12px 0;
    display: flex;
`
 const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
 `
 const CartItemInfo = styled.div``
 const CartItemInfoTop = styled.div`
    color: #007185;
    h2{
        font-size: 18px;
    }
 `
 const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
 `
 const CartItemQuantityContainer = styled.div``
 const CartItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
 `
 const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
 `
 