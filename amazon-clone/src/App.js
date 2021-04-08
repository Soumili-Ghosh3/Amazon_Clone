import './App.css';
import {useState, useEffect} from 'react'
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import styled from 'styled-components'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {db} from './firebase'
import Login from './Login'

function App() {

  const [user, setUser] = useState([])
  const [cartItems, setCartItems] = useState([])

  const getCartItems = () =>
  {
    db.collection('cartItems').onSnapshot((snapshot) => {
      let tempItems = []
      tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems)
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
      <Container>
        <Header user={user} cartItems={cartItems}/>

        <Switch>

          <Route path='/login'>
             <Login setUser={setUser}/>
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems}/>
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
    </Container>
    </Router>
    
  );
}

export default App

const Container = styled.div`
`