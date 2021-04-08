import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'
import NumberFormat from 'react-number-format';

function Product({title, price, image, rating, id}) {

    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc) => {
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data.quantity + 1
                })
            }
            else{
                    db.collection("cartItems").doc(id).set({
                        name: title,
                        image: image,
                        price: price,
                        quantity: 1
                    })
                }
        })
    }
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
            <NumberFormat value={price} className="foo" displayType={'text'} thousandSeparator={true} prefix={'₹'} renderText={(value, props) => <div {...props}>{value}</div>} />
    
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating => <p> ⭐ </p>)
                }
            </Rating>

            <Image src={image}/>

            <ActioinSection>
                <AddToCartButton onClick = {addToCart}>
                    Add To Cart
                </AddToCartButton>
            </ActioinSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
   background-color: white;
   z-index: 100;
   margin: 10px;
   padding: 10px;
   max-height: 400px;
   flex: 1;
   display: flex;
   flex-direction: column;
`
const Title = styled.span`
`
const Price = styled.span`
   font-weight: 500;
   margin-top: 10px;
`
const Rating = styled.div`
   display: flex;
   margin-top: 10px;
`
const Image = styled.img`
   max-height: 200px;
   object-fit: contain;
   margin-top: 10px;
`
const AddToCartButton = styled.button`
   width: 100px;
   height: 30px;
   background-color: #f0c14b;
   border: 2px solid #a88734;
   border-radius: 2px;
   cursor: pointer;
`
const ActioinSection = styled.div`
   display: grid;
   margin-top: 12px;
   place-items: center;   
`