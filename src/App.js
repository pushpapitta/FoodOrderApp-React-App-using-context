import { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
function App() {

  //cart we have more than one state,so useState to manage it

  const [cartIsShown, setCartIsShown] = useState(false);

  //functions which shd be called when clicked on cart button or when clicked on backdrop
  //showcartHandler is part of Header component,so it shd be executed there.

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  //conditional rendering-we r using cartIsShown value here=if this is true-cart will be rendered,
  //if false-cart wont be rendered.
  //customevents starting with 'on'

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>

    </CartProvider>
  );
}

export default App;
