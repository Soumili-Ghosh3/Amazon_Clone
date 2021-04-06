import './App.css';
import {useState, useEffect} from 'react'
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {db} from './firebase'

function App() {
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
      <div className="App">
        <Header />

        <Switch>

          <Route path="/cart">
            <Cart cartItems={cartItems}/>
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
    </div>
    </Router>
    
  );
}

export default App
