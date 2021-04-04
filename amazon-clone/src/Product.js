import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <Container>
            Product
        </Container>
    )
}

export default Product

const Container = styled.div`
   background-color: white;
   z-index: 100;
   margin: 10px;
   padding: 10px;
   height: 200px;
   flex: 1;
`
