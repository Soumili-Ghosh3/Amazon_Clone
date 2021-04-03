import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header()
{
  return(
      <div>
          <Container>
          <HeaderLogo>
              <img src={"https://imgur.com/7I9Was5.png"}></img>
          </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption>
                    <HeaderOptionLineOne> Hello, </HeaderOptionLineOne>
                    <HeaderOptionLineTwo> Select your Address </HeaderOptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>

                <HeaderOption>
                    <HeaderOptionLineOne>Hello, Soumili</HeaderOptionLineOne>
                    <HeaderOptionLineTwo>Accounts & Lists</HeaderOptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <HeaderOptionLineOne>Returns</HeaderOptionLineOne>
                    <HeaderOptionLineTwo>& Orders</HeaderOptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <ShoppingBasketIcon/>
                    <CartCount>3</CartCount>
                </HeaderOptionCart>

            </HeaderNavItems>
          </Container>
        
      </div>
  );
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
`
const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
    }
`
const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`
const HeaderOptionLineOne = styled.div`
    
`
const HeaderOptionLineTwo = styled.div`
    font-weight: 700;
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within{
        box-shadow: 0 0 0 3px #F90;
    }
`
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus{
        outline: none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: orange;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const HeaderNavItems = styled.div`
    display: flex;
`
const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
`
const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding-right: 9px;
`
const CartCount = styled.div`
    padding-left: 4px;
`
