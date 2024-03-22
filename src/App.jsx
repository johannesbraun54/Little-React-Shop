import React, { Component } from 'react';
import NavBar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {
        items: []
    }

    addItem = (amounts, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name == name);
        if (existingItem) {
            existingItem.amounts++
        } else {
            currentItems.push({
                amounts,
                name,
                price
            });
        }
        this.setState({ items: currentItems });
    }


    render() {
        return <React.Fragment>
            <NavBar />
            <div className='main-container'>
                <div className='product-container'>
                    <Product onAdd={() => this.addItem(1, 'Tomaten', 2.99)} title="Salat" image="/assets/img/salat.jpg" description="leckerer frischer Salat" />
                    <Product onAdd={() => this.addItem(1, 'Gurken', 4.99)} title="Gurken" image="/assets/img/cucumbers.jpg" description="leckere frische Gurken" />
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 3.99)} title="Äpfel" image="/assets/img/apples.jpg" description="leckere frische Äpfel" />
                    <Product onAdd={() => this.addItem(1, 'Bananen', 1.99)} title="Bananen" image="/assets/img/bananas.jpg" description="leckere frische Bananen" />
                </div>
                <ShoppingCart items={this.state.items} />
            </div>
        </React.Fragment>
    }
}

export default App;