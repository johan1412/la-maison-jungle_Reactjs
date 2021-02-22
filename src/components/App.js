import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';


function App() {
    const previousCart = localStorage.getItem('cart');
    const [cart, updateCart] = useState(previousCart ? JSON.parse(previousCart) : []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (<div>
        <Banner>
			<img src={logo} alt='La maison jungle' className='lmj-logo' />
			<h1 className='lmj-title'>La maison jungle</h1>
		</Banner>
        <div className='lmj-layout-inner'>
            <Cart cart={cart} updateCart={updateCart}/>
            <ShoppingList cart={cart} updateCart={updateCart}/>
        </div>
        <Footer />
    </div>);
}

export default App;
