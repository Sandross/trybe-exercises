// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';

import Order from './Order';

class App extends React.Component {
  render(){
    const productsArray = [
      {
      name: "Headphone",
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
      {
      name: "Monster",
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }];

    return (
      <div className="App">
      <h1> Orders recently created </h1>
      {productsArray.map((elem) => 
      <p> <Order order={elem}/> </p>
      )}
    </div>
    );
  }
}

export default App;