import React from 'react'
import styled from 'styled-components'

function Header()
{
  return(
      <div>
        <HeaderLogo>

        </HeaderLogo>

        <HeaderOptionAddress>

        </HeaderOptionAddress>
          
      </div>
  );
}

export default Header

const HeaderLogo = styled.div`
    height: 60px;
    background-color: black;
`
const HeaderOptionAddress = styled.div`
    
`