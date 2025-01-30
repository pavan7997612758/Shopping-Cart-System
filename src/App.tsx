import React from 'react';
import Cart from './features/cart/Cart';
import Item from './components/Item';

const App: React.FC = () => {
  return (
    <div>
      <h1>Shopping Cart System</h1>
      <div>
        <h2>Items</h2>
        <Item id="1" name="Apple" price={1.5} />
        <Item id="2" name="Banana" price={0.8} />
        <Item id="3" name="Cherry" price={2.0} />
        <Item id="4" name="Guvva" price={3.0} />
        <Item id="5" name="Kiwi" price={5.0} />
        <Item id="6" name="Papaya" price={4.0} />
        <Item id="7" name="Mango" price={2.0} />
      </div>
      <Cart />
    </div>
  );
};

export default App;
